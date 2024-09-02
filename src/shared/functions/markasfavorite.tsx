import { ref, set } from "firebase/database";
import { database } from "../../../firebaseConfig";
import { PokemonDetails } from "@/modules/pokemon/reducer/pokemon_init";

export const markAsFavorite = async (
  pokemonDetails: PokemonDetails | null,
  pokemonName: string
) => {
  try {
    const favoritesRef = ref(database, `favorites/${pokemonDetails?.id}`);
    await set(favoritesRef, {
      id: pokemonDetails?.id,
      name: pokemonName,
      sprite: pokemonDetails?.sprites.front_default,
    });
    console.log("Marked as favorite successfully!");
  } catch (error) {
    console.error("Error marking as favorite:", error);
  }
};
