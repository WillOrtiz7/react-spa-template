import { atom } from "jotai";

export const randomPokemonIdAtom = atom(Math.floor(Math.random() * 493) + 1);
