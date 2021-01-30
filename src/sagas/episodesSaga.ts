import { call, take, fork, put } from 'redux-saga/effects';
import { API } from '../constants/application';
import { InfoType, EpisodesResultsType } from '../constants/types';
import { fetchEpisodes } from '../api/episodes';
import { setEpisodes, setError } from '../actions/episodes';
import { CHARACTERS_LOAD_SUCCESS } from '../actions/characters';

export function* handleEpisodesLoad() {
  try {
    const defaultEndPoint = API.EPISODES_URL;
    let nextPageEndpoint;
    let hasMorePages;
    let episodesInfo: InfoType;
    let episodesResults: EpisodesResultsType = [];
    // Try to fetch all the pages and then dispatch our action
    do {
      const endpoint: string = nextPageEndpoint || defaultEndPoint;
      const episodes = yield call(fetchEpisodes, endpoint);
      const { info, results } = episodes;
      episodesInfo = info;
      episodesResults = [...episodesResults, ...results];
      nextPageEndpoint = info?.next;
      hasMorePages = nextPageEndpoint !== null;
    } while (hasMorePages);
    const result = {
      info: episodesInfo,
      results: episodesResults,
    };
    yield put(setEpisodes(result));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchEpisodesLoad() {
  yield take(CHARACTERS_LOAD_SUCCESS);
  yield fork(handleEpisodesLoad);
}
