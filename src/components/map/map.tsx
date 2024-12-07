import { useEffect, useRef } from 'react';
import { City } from '../../types/offer/city';
import useMap from '../../hooks/use-map';
import leaflet, { layerGroup, Marker } from 'leaflet';

const defaultIcon = leaflet.icon({
  iconUrl: '../../../markup/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeIcon = leaflet.icon({
  iconUrl: '../../../markup/img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export type MapPoint = {
  id: string;
  latitude: number;
  longitude: number;
}

type MapProps = {
  city: City;
  points: MapPoint[];
  selectedPointId: string;
};

export function Map({city, points, selectedPointId}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(point.id === selectedPointId ? activeIcon : defaultIcon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPointId]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}
