import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <div className={css.profile_footer}>
        <ul className={css.stats}>
          <li>
            <span className="label">{Object.keys(stats)[0]}</span>
            <span className="quantity">{Object.values(stats)[0]}</span>
          </li>
          <li>
            <span className="label">{Object.keys(stats)[1]}</span>
            <span className="quantity">{Object.values(stats)[1]}</span>
          </li>
          <li>
            <span className="label">{Object.keys(stats)[2]}</span>
            <span className="quantity">{Object.values(stats)[2]}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
