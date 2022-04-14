import { Identity, PlaceDisponible } from "./Commun";

enum TypeBatiment {
  FORTIFICATION = "FORTIFICATION",
  MAISON = "MAISON"
  //..
}

interface Batiment extends Identity, PlaceDisponible {
  type: TypeBatiment;
}

export { Batiment };
