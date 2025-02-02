import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/reactQueryExample")({
  component: ReactQueryExample,
});

function ReactQueryExample() {
  const [pokemonId, setPokemonId] = useState(
    Math.floor(Math.random() * 493) + 1
  );

  const { data, error, isPending } = useQuery({
    queryKey: ["randomPokemon", pokemonId],
    queryFn: async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col justify-center align-middle items-center h-screen">
      <h1 className="font-bold">React Query example</h1>
      <div>
        <h2>{data.name}</h2>
        <img src={data.sprites.front_default} alt={data.name} />
      </div>
      <Button
        onClick={() => {
          setPokemonId(Math.floor(Math.random() * 493) + 1);
        }}
      >
        Random Pokemon
      </Button>
    </div>
  );
}
