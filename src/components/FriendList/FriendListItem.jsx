import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline === true ? css.online : css.offline
  
  return (
    <li className={css.item}>
      
        <span className={status}></span>
      
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
