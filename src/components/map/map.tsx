import { useEffect, useRef } from 'react';
import { City } from '../../types/offer/city';
import useMap from '../../hooks/use-map';
import leaflet, { layerGroup, Marker } from 'leaflet';
import { MapPoint } from '../../types/map-point';
import { MapBlock } from '../../constants/map-block';

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

type MapProps = {
  block: MapBlock;
  city: City;
  points: MapPoint[];
  selectedPointId: string;
};

export function Map({block, city, points, selectedPointId}: MapProps) {
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
      className={`${block}__map map`}
      ref={mapRef}
    >
    </section>
  );
}
