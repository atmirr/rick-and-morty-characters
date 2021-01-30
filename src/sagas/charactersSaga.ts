import { call, debounce, put, select } from 'redux-saga/effects';
import { API } from '../constants/application';
import { fetchCharacters } from '../api/characters';
import {
  CHARACTERS_LOAD,
  setCharacters,
  setError,
} from '../actions/characters';
import {
  nextPageEndpoint as nextPageEndpointSelector,
  hasMorePages as hasMorePagesSelector,
} from '../selectors/characters';

export function* handleCharactersLoad() {
  try {
    const nextPageEndpoint = yield select(nextPageEndpointSelector());
    const hasMorePages = yield select(hasMorePagesSelector());
    const defaultEndPoint = API.CHARACTERS_URL;
    const endpoint = nextPageEndpoint || defaultEndPoint;
    if (hasMorePages) {
      const characters = yield call(fetchCharacters, endpoint);
      yield put(setCharacters(characters));
    }
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchCharactersLoad() {
  // Gives a 1000ms delay for providing a better UX
  yield debounce(1000, CHARACTERS_LOAD, handleCharactersLoad);
}
