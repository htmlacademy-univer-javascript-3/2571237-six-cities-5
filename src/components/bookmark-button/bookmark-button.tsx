import classNames from 'classnames';
import { AppBlock } from '../../constants/app-block';

type BookmarkButtonBlock = AppBlock.OfferCard | AppBlock.OfferDetails;

type IconSize = {
  width: number;
  height: number;
};

const iconSize: Record<BookmarkButtonBlock, IconSize> = {
  [AppBlock.OfferCard]: { width: 18, height: 19 },
  [AppBlock.OfferDetails]: { width: 31, height: 33 },
};

type BookmarkButtonProps = {
  block: BookmarkButtonBlock;
  isActive: boolean;
};

export default function BookmarkButton({
  block,
  isActive,
}: BookmarkButtonProps) {
  return (
    <button
      className={classNames(
        `${block}__bookmark-button`,
        isActive && `${block}__bookmark-button--active`,
        'button'
      )}
      type="button"
    >
      <svg className="offer__bookmark-icon" {...iconSize[block]}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isActive ? 'In Bookmarks' : 'To Bookmarks'}
      </span>
    </button>
  );
}
