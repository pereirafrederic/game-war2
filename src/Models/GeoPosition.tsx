interface Position {
  lattitude: Array<number>; // peut prendre plus d'une place
  longitude: Array<number>; // peut prendre plus d'une place
  altitude: Array<number>;
}

interface PositionParent extends Position {
  idParent: string;
}

enum Direction {
  NORD = "nord",
  SUD = "sud",
  EST = "est",
  OUEST = "ouest",
  HAUT = "haut",
  BAS = "bas"
}

interface Deplacement {
  toutDroit: number;
  tourner: number;
  demiTour: number;
  senfoncer: number;
  senvoler: number;
}

export { Position, PositionParent, Direction, Deplacement };
