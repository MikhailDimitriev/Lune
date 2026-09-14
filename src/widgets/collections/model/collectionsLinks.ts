import braceletsImg from "~/shared/assets/collections/bracelets.png";
import earringsImg from "~/shared/assets/collections/earrings.png";
import necklaceImg from "~/shared/assets/collections/necklace.png";
import ringsImg from "~/shared/assets/collections/rings.png";

export const collectionsList = [
  { name: "Necklaces", category: "necklaces", image: necklaceImg },
  { name: "Earrings", category: "earrings", image: earringsImg },
  { name: "Rings", category: "rings", image: ringsImg },
  { name: "Bracelets", category: "bracelets", image: braceletsImg },
];

export type CollectionItemProps = (typeof collectionsList)[number];