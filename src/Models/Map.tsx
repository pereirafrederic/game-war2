import { Batiment } from "./Batiment";
import { Identity, PlaceOccupe } from "./Commun";
import { EffetMultiplicateur } from "./Effet";
import { PositionParent } from "./GeoPosition";
import { Objet } from "./Objet";
import { Personnage } from "./Personnage";

enum TypeMap {
  PLAINE = "Plaine",
  DESERT = "Desert"
}

enum TypeTerrain {
  TERRE = "terre",
  EAU = "eau",
  AIR = "air"
}

enum SousType {
  BOUE = "boue",
  MARCAGE = "marécage",
  NUAGE = "nuage",
  BROUILLARD = "brouillard",
  ROUTE = "Route"
  //..
}

enum Meteo {
  SOLEIL = "SOLEIL",
  PLUIE = "PLUIE"
  //..
}

interface Contenu {
  objet: Objet;
  batiment: Batiment;
  personnage: Personnage;
}

interface Case extends PositionParent {
  typeTerrain: TypeTerrain;
  sousTypeTerrain: SousType;
  meteoTerrain: Meteo;
  effets: Array<EffetMultiplicateur>;
  place: PlaceOccupe;
  contenu: Contenu;
}

interface verticalCase extends PositionParent {
  maxSousSol: number;
  maxAir: number;
  cases: Array<Case>; //order by altitude bas -> haut
}

interface Map extends Identity, PositionParent {
  taille: number;
  type: TypeMap;
  verticalesCases: Array<verticalCase>;
  // 1-1 1-2
  // 2-1 2-2
}

interface World extends Identity, PositionParent {
  taille: number;
  maps: Array<Map>;
  // 1-1 1-2
  // 2-1 2-2
}

interface Univers extends Identity {
  worlds: Array<World>;
  // 1-1 1-2
  // 2-1 2-2
}
