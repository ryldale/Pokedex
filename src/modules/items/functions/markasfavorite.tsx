import { ref, set } from "firebase/database";
import { database } from "../../../../firebaseConfig";
import { PokemonDetails } from "@/modules/pokemon/reducer/pokemon_init";
import { ItemDetails } from "../reducer/item_init";

export const markAsFavorite = async (
  item: ItemDetails | null,
  itemName: string
) => {
  try {
    const favoritesRef = ref(database, `item/favorites/${item?.id}`);
    await set(favoritesRef, {
      id: item?.id,
      name: itemName,
      sprite: item?.sprites.default,
    });
    console.log("Marked as favorite successfully!");
  } catch (error) {
    console.error("Error marking as favorite:", error);
  }
};
