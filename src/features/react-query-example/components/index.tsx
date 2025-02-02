import { PokemonCard } from "./PokemonCard";
import { RandomPokemonButton } from "./RandomPokemonButton";

export function ReactQueryExampleIndex() {
  return (
    <div className="flex flex-col items-center justify-center h-screen align-middle">
      <PokemonCard />
      <RandomPokemonButton />
    </div>
  );
}
