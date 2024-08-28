export const PokemonInitState: PokemonInitStateType = {
  count: 0,
  next: "",
  previous: "",
  result: [],
};

export type PokemonInitStateType = {
  count: Number;
  next: string;
  previous: string;
  result: {
    name: string;
    url: string;
  }[];
};
