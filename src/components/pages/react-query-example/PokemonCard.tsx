import { useAtomValue } from "jotai";
import { randomPokemonIdAtom } from "./atoms/atoms";
import { useGetPokemonById } from "./hooks/useGetPokemonById";

export function PokemonCard() {
  const pokemonId = useAtomValue(randomPokemonIdAtom);
  const { data, error, isPending } = useGetPokemonById(pokemonId);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col items-center">
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
}
