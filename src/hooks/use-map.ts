import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { City } from '../types/offer/city';
import { Map, TileLayer } from 'leaflet';

const mapTileLayerUrlTemplate = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const mapTileLayerOptions = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
};

export default function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(mapTileLayerUrlTemplate, mapTileLayerOptions);

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}


