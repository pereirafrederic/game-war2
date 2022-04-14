import { Identity, PlaceOccupe } from "./Commun";
import { EffetMultiplicateur } from "./Effet";

enum TypeObject {
  PIEGE = "PIEGE",
  OBSTACLE = "OBSTACLE",
  CONSOMMABLE = "CONSOMMABLE"
  //..
}

interface Objet extends Identity, PlaceOccupe {
  type: TypeObject;
  effets: Array<EffetMultiplicateur>;
  mobile: boolean; // peut etre porter
  resistance: number; // 1 cassable à main nue, 10 incassable sauf bombe
}

export { Objet };
