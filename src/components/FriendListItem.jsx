import styles from "../css/Friends.module.css";
import PropTypes from "prop-types";

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <span
        className={`${styles.status} ${
          isOnline ? styles.isOnline : styles.isOfline
        }`}
      ></span>

      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />

      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
