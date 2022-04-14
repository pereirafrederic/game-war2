import { Identity } from "./Commun";

enum TypeEffet {
  BONUS = "bonus",
  MALUS = "malus"
}

interface Effet extends Identity {
  typeEffet: TypeEffet;
  valeur: number;
  positionForce: Array<Effet>;
  positionFaiblesse: Array<Effet>;
}

interface EffetMultiplicateur extends Effet {
  indiceMultiplicateur: number;
}

export { EffetMultiplicateur };
