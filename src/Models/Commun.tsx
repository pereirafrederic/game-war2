interface Identity {
  id: string;
  name: string;
}

interface PlaceOccupe {
  placeOccupe: number;
}

interface PlaceDisponible {
  placeTotal: number;
  placeLibre: number;
}

export { Identity, PlaceOccupe, PlaceDisponible };
