export const PokemonInitState: PokemonInitStateType = {
  count: 0,
  next: "",
  previous: "",
  result: [],
  detailedResults: [],
};

export type PokemonInitStateType = {
  count: number;
  next: string;
  previous: string;
  result: Pokemon[];
  detailedResults: PokemonDetails[];
};

export type Pokemon = {
  name: string;
  url: string;
};

export type Sprites = {
  front_default: string;
};

export type PokemonDetails = {
  id: number;
  name: string;
  sprites: Sprites;
  weight: number;
};
