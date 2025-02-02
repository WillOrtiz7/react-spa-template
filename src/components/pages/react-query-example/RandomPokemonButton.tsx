import { Button } from "@/components/ui/button";
import { useSetAtom } from "jotai";
import { randomPokemonIdAtom } from "./atoms/atoms";

export function RandomPokemonButton() {
  const setPokemonId = useSetAtom(randomPokemonIdAtom);
  return (
    <Button
      onClick={() => {
        setPokemonId(Math.floor(Math.random() * 493) + 1);
      }}
    >
      Random Pokemon
    </Button>
  );
}
