import classNames from 'classnames';
import { AppBlock } from '../../constants/app-block';
import { MouseEventHandler } from 'react';
import { redirectToRoute } from '../../store/actions';
import { AppRoute } from '../../constants/app-route';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { isUserAuthorized } from '../../store/user-data/selectors';
import { changeFavoriteStatusAction } from '../../store/api-actions';
import { Offer } from '../../types/offer/offer';
import { FavoriteStatus } from '../../constants/favorite-status';

type BookmarkButtonBlock = AppBlock.OfferCard | AppBlock.Offer;

type IconSize = {
  width: number;
  height: number;
};

const iconSize: Record<BookmarkButtonBlock, IconSize> = {
  [AppBlock.OfferCard]: { width: 18, height: 19 },
  [AppBlock.Offer]: { width: 31, height: 33 },
};

type BookmarkButtonProps = {
  block: BookmarkButtonBlock;
  offerId: Offer['id'];
  isActive: boolean;
};

export default function BookmarkButton({
  block,
  offerId,
  isActive,
}: BookmarkButtonProps) {
  const authorized = useAppSelector(isUserAuthorized);
  const dispatch = useAppDispatch();

  const onBookmarkClickHandler: MouseEventHandler<HTMLButtonElement> = (
    evt
  ) => {
    evt.preventDefault();
    if (!authorized) {
      dispatch(redirectToRoute(AppRoute.Login));
      return;
    }

    const status = isActive
      ? FavoriteStatus.Unfavorite
      : FavoriteStatus.Favorite;
    dispatch(changeFavoriteStatusAction({ offerId, status }));
  };

  return (
    <button
      className={classNames(
        `${block}__bookmark-button`,
        isActive && `${block}__bookmark-button--active`,
        'button'
      )}
      onClick={onBookmarkClickHandler}
      type="button"
    >
      <svg className={`${block}__bookmark-icon`} {...iconSize[block]}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {`${isActive ? 'In' : 'To'} Bookmarks`}
      </span>
    </button>
  );
}
