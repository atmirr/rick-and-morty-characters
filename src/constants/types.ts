export type InfoType = {
  count: number;
  page: number;
  next: string;
  prev: string;
};

export type CharactersResultsType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
}[];

export type CharactersType = {
  info: InfoType;
  results: CharactersResultsType;
};

export type EpisodesResultsType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}[];

export type EpisodesType = {
  info: InfoType;
  results: EpisodesResultsType;
};

export type LocationsType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}[];
