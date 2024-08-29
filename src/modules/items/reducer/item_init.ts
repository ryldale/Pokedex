export const ItemInitState: ItemInitStateType = {
  count: 0,
  next: "",
  previous: "",
  result: [],
  detailedResults: [],
};

export type ItemInitStateType = {
  count: number;
  next: string;
  previous: string;
  result: Item[];
  detailedResults: ItemDetails[];
};

export type Item = {
  name: string;
  url: string;
};

export type Sprites = {
  default: string;
};

export type ItemDetails = {
  id: number;
  name: string;
  sprites: Sprites;
  effect_entries: Effect[];
};

export type Effect = {
  short_effect: string;
};
