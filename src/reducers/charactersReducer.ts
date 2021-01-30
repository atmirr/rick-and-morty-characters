import {
  CHARACTERS_LOAD,
  CHARACTERS_LOAD_SUCCESS,
  CHARACTERS_LOAD_FAIL,
} from '../actions/characters';
import { hasMorePages as hasMorePagesSelector } from '../selectors/characters';
import { CharactersResultsType, CharactersType } from '../constants/types';

type StateType = {
  items: CharactersResultsType | [];
  nextPage: string | null;
  error: string | null;
  isLoading: boolean;
};

type ActionType = {
  type: string;
  characters?: CharactersType;
  error?: string;
};

const charactersReducer = (
  state: StateType = {
    items: [],
    nextPage: null,
    error: null,
    isLoading: false,
  },
  action: ActionType,
): StateType => {
  switch (action.type) {
    case CHARACTERS_LOAD: {
      const hasMorePages = hasMorePagesSelector()(state);
      if (hasMorePages) {
        return { ...state, error: null, isLoading: true };
      }
      return state;
    }
    case CHARACTERS_LOAD_SUCCESS: {
      const items = action?.characters?.results || [];
      const nextPageEndpoint = action?.characters?.info?.next || null;
      return {
        items: [...state.items, ...items],
        nextPage: nextPageEndpoint,
        error: null,
        isLoading: false,
      };
    }
    case CHARACTERS_LOAD_FAIL: {
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

export default charactersReducer;
