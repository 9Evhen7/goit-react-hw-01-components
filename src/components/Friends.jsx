import { FriendListItem } from "./FriendListItem";
import styles from "../css/Friends.module.css";
import PropTypes from "prop-types";

export const Friends = ({ friends }) => {
  return (
    <ul className={styles.friend_List}>
      {friends.map(({ isOnline, avatar, name, id }) => {
        return (
          <li key={id} className={styles.friendListItem}>
            <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
          </li>
        );
      })}
    </ul>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
