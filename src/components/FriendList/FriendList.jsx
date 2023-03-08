import { FriendListItem } from './FriendListItem';
import friends from '../../data/friends.json';
import css from './FriendList.module.css';

export const FriendList = () => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};
