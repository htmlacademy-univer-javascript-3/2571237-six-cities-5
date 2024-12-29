import { AppBlock } from '../../constants/app-block';
import { Host } from '../../types/offer/offer';
import User from '../user/user';

type OfferHostProps = {
  host: Host;
  description: string;
};

export default function OfferHost({ host, description }: OfferHostProps) {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <User block={AppBlock.OfferDetails} user={host} />
      <div className="offer__description">
        <p className="offer__text">{description}</p>
      </div>
    </div>
  );
}
