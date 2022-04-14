import { Position, Direction, Deplacement } from "./GeoPosition";
import { Vue } from "./Sens";
import { Identity, PlaceOccupe } from "./Commun";
import { EffetMultiplicateur } from "./Effet";

enum TypePersonnage {
  HEROS = "Personnage Héros",
  ENNEMI = "Personnage Ennemi",
  BOSS = "Personnage Boss",
  PNJ = "Personnage Non Jouable",
  PJ = "Personnage Jouable",
  SOUTIEN = "Personnage de Soutien"
  //..
}

enum TypeComportement {
  AGRESSIF = "Comportement Aggressif",
  NEUTRE = "Comportement Neutre",
  FUYANT = "Comportement Fuyant"
  //..
}

enum TypeUnite {
  AERIENNE = "unite Aérienne",
  TERRESTRE = "unite terrestre",
  SOUS_SOUL = "unite sous le sol"
  //..
}

enum Attitude {
  NEUTRE = "neutre",
  DEFENSIF_CC = "Defensif au corps à corps ",
  DEFENSIF_ZONE = "Defensif en zone",
  DEFENSIF_DISTANCE = "Defensif en distance",
  FUITE = "En fuite",
  BERSERK = "berserk"
  //..
}

interface Personnage extends Identity, PlaceOccupe {
  typePersonne: TypePersonnage;
  comportement: TypeComportement;
  lieu: Position;
  direction: Direction;
  Attitude: Attitude;
  vue: Vue;
  typeUnite: Array<TypeUnite>;
  deplacement: Deplacement;
  effets: Array<EffetMultiplicateur>;
}

export { Personnage };
