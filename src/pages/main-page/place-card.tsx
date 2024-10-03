import PlaceCardInfo from './place-card-info';

type PlaceCardProps = {
  isPremium: boolean;
  imageSrc: string;
  info: {
    priceInEuro: number;
    inBookmarks: boolean;
    ratingInPercentage: number;
    name: string;
    type: string;
  };
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
        priceInEuro={info.priceInEuro}
        inBookmarks={info.inBookmarks}
        ratingInPercentage={info.ratingInPercentage}
        name={info.name}
        type={info.type}
      />
    </article>
  );
}
