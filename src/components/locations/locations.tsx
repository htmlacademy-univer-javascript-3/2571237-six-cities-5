import { CityName } from '../../constants/city-name';
import classNames from 'classnames';

const locations: CityName[] = Object.values(CityName);

type LocationsProps = {
  activeCity: CityName;
  onCityClick: (city: CityName) => void;
};

export default function Locations({
  activeCity,
  onCityClick,
}: LocationsProps) {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((city) => (
          <li key={city} className="locations__item">
            <a
              className={classNames(
                'locations__item-link',
                'tabs__item',
                city === activeCity && 'tabs__item--active'
              )}
              href="#"
              onClick={(evt) => {
                evt.preventDefault();
                onCityClick(city);
              }}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
