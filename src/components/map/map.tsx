import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { City } from '../../types/offer/city';
import useMap from '../../hooks/use-map';
import { layerGroup, Marker } from 'leaflet';
import { MapPoint } from '../../types/map-point';
import { useAppSelector } from '../../hooks';
import { getMapSelectedPointId } from '../../store/map-data/selectors';
import { AppBlock } from '../../constants/app-block';
import { activeIcon, defaultIcon } from './map-icon';

type MapBlock = AppBlock.Cities | AppBlock.Offer;

type MapProps = {
  block: MapBlock;
  city: City;
  points: MapPoint[];
};

export function Map({ block, city, points }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const selectedPointId = useAppSelector(getMapSelectedPointId);

  useEffect(() => {
    if (map) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
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

  return <section className={`${block}__map map`} ref={mapRef}></section>;
}
