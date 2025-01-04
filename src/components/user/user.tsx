import classNames from 'classnames';
import { type User } from '../../types/user';
import { AppBlock } from '../../constants/app-block';

type UserBlock = AppBlock.Offer | AppBlock.Reviews;

type UserAvatarAttr = {
  width: number;
  height: number;
  alt: string;
}

const avatarAttrs: Record<UserBlock, UserAvatarAttr> = {
  [AppBlock.Offer]: {width: 74, height: 74, alt: 'Host avatar'},
  [AppBlock.Reviews]: {width: 54, height: 54, alt: 'Reviews avatar'}
};

const rootClassName: Record<UserBlock, string> = {
  [AppBlock.Offer]: `${AppBlock.Offer}__host-user`,
  [AppBlock.Reviews]: `${AppBlock.Reviews}__user`
};

type UserProps = {
  block: UserBlock;
  user: User;
};

export default function User({ block, user }: UserProps) {
  return (
    <div className={`${rootClassName[block]} user`}>
      <div
        className={classNames(
          `${block}__avatar-wrapper`,
          user.isPro && `${block}__avatar-wrapper--pro`,
          'user__avatar-wrapper'
        )}
      >
        <img
          className={`${block}__avatar user__avatar`}
          src={user.avatarUrl}
          {...avatarAttrs[block]}
        />
      </div>
      <span className={`${block}__user-name`}>{user.name}</span>
      {user.isPro && <span className={`${block}__user-status`}>Pro</span>}
    </div>
  );
}
