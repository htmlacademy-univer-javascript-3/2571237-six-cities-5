import { ComponentProps } from 'react';
import PlaceCardInfo from './place-card-info';

type PlaceCardProps = {
  isPremium: boolean;
  imageSrc: string;
  info: ComponentProps<typeof PlaceCardInfo>;
}

export default function PlaceCard({isPremium, imageSrc, info}: PlaceCardProps){
  return (
    <article className="cities__card place-card">
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={imageSrc} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <PlaceCardInfo
        {...info}
      />
    </article>
  );
}
