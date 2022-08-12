import styles from "../css/Statistics.module.css";
import PropTypes from "prop-types";

export const Statistics = ({ title, statistics }) => {
  return (
    <div className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.list}>
        {statistics.map(({ id, label, percentage }) => {
          return (
            <li key={id} className={styles.item}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    })
  ),
};
