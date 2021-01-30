import { CharactersType } from '../constants/types';
export const CHARACTERS_LOAD = 'CHARACTERS_LOAD';
export const CHARACTERS_LOAD_SUCCESS = 'CHARACTERS_LOAD_SUCCESS';
export const CHARACTERS_LOAD_FAIL = 'CHARACTERS_LOAD_FAIL';

export const loadCharacters = (): { type: typeof CHARACTERS_LOAD } => ({
  type: CHARACTERS_LOAD,
});

export const setCharacters = (
  characters: CharactersType,
): { type: typeof CHARACTERS_LOAD_SUCCESS; characters: CharactersType } => ({
  type: CHARACTERS_LOAD_SUCCESS,
  characters,
});

export const setError = (
  error: string,
): { type: typeof CHARACTERS_LOAD_FAIL; error: string } => ({
  type: CHARACTERS_LOAD_FAIL,
  error,
});
