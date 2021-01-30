import {
  LOCATIONS_LOAD,
  LOCATIONS_LOAD_SUCCESS,
  LOCATIONS_LOAD_FAIL,
} from '../actions/locations';
import { LocationsType } from '../constants/types';

type StateType = {
  items: LocationsType | [];
  error: string | null;
  isLoading: boolean;
};

type ActionType = {
  type: string;
  locations?: LocationsType;
  error?: string;
};

const locationsReducer = (
  state: StateType = { items: [], error: null, isLoading: false },
  action: ActionType,
): StateType => {
  switch (action.type) {
    case LOCATIONS_LOAD: {
      return { ...state, error: null, isLoading: true };
    }
    case LOCATIONS_LOAD_SUCCESS: {
      const items = action?.locations || [];
      return {
        items: [...state.items, ...items],
        error: null,
        isLoading: false,
      };
    }
    case LOCATIONS_LOAD_FAIL: {
      const error = action.error || null;
      return {
        ...state,
        error,
        isLoading: false,
      };
    }
  }
  return state;
};

export default locationsReducer;
