import PropTypes from 'prop-types';
import { FollowersItem } from 'components/FollowersItem/FollowersItem';
import css from './FollowersList.module.css';

export const FollowersList = ({ users }) => {
  return (
    <ul className={css.list}>
      {users.map(({ id, avatar, user, tweets, followers }) => (
        <FollowersItem
          key={id}
          avatar={avatar}
          user={user}
          tweets={tweets}
          followers={followers}
        />
      ))}
    </ul>
  );
};

FollowersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};
