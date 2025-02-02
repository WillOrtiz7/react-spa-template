import { useQuery } from "@tanstack/react-query";
import { getPokemonById } from "../api/getPokemonById";

export function useGetPokemonById(pokemonId: number) {
  return useQuery({
    queryKey: ["randomPokemon", pokemonId],
    queryFn: () => getPokemonById(pokemonId),
  });
}
