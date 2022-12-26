import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './FollowersItem.module.css';
import logo from '../../images/logo.png';
import background from '../../images/picture.png';

export const FollowersItem = ({ id, avatar, user, tweets, followers }) => {
  const [isFollowing, setIsFollowing] = useState(() => {
    return JSON.parse(localStorage.getItem(user)) ?? false;
  });

  useEffect(() => {
    localStorage.setItem(user, JSON.stringify(isFollowing));
  }, [isFollowing, user]);

  const toggleBtn = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <li key={id} className={css.item}>
      <img src={logo} alt="logo" className={css.logo} />
      <img src={background} alt="background" className={css.background} />
      <div className={css.wrapper}>
        <img src={avatar} alt={user} className={css.avatar} />
      </div>
      <div className={css.info}>
        <p className={css.user}>{user}</p>
        <p className={css.tweets}>{tweets} tweets</p>
        <p className={css.followers}>
          {isFollowing
            ? new Intl.NumberFormat('en-US').format(followers + 1)
            : new Intl.NumberFormat('en-US').format(followers)}{' '}
          followers
        </p>
      </div>
      <button
        type="button"
        className={isFollowing ? css.activeBtn : css.btn}
        onClick={toggleBtn}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </li>
  );
};

FollowersItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  user: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
};
