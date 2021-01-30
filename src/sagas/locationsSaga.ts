import { call, takeLatest, put, select } from 'redux-saga/effects';
import { uniq, isEmpty } from 'lodash';
import { CharactersType } from '../constants/types';
import { fetchLocations } from '../api/locations';
import { generateLocationIdsByUrls } from 'src/utils/generate-location-ids-by-urls';
import { setLocations, setError } from '../actions/locations';
import { CHARACTERS_LOAD_SUCCESS } from '../actions/characters';
import { filterNonExistingLocations } from '../selectors/locations';

export function* handleLocationsLoad(action: {
  type: string;
  characters: CharactersType;
}) {
  const locationUrls = action?.characters?.results?.map(
    ({ location }) => location?.url,
  );
  // Filter the new locations which we don't already have them in the store
  const nonExistingLocationUrls = yield select(
    filterNonExistingLocations(locationUrls),
  );
  const locationIds = generateLocationIdsByUrls(nonExistingLocationUrls);
  const uniqueLocationIds = uniq(locationIds);
  const locationsIdsQuery = uniqueLocationIds.join(',');
  if (!isEmpty(uniqueLocationIds)) {
    try {
      const locations = yield call(fetchLocations, locationsIdsQuery);
      yield put(setLocations(locations));
    } catch (error) {
      yield put(setError(error.toString()));
    }
  }
}

export default function* watchLocationsLoad() {
  yield takeLatest(CHARACTERS_LOAD_SUCCESS, handleLocationsLoad);
}
