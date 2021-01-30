import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
import episodesReducer from './episodesReducer';
import locationsReducer from './locationsReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  locations: locationsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
