import styles from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <img className={styles.avatarImage} src={image} alt={name} />
        <p className={styles.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.statsList}>
        <li className={styles.statsItem}>
          <span>Followers</span>
          <br />
          <span className={styles.statsItemValue}>{followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span>Views</span>
          <br />
          <span className={styles.statsItemValue}>{views}</span>
        </li>
        <li className={styles.statsItem}>
          <span>Likes</span>
          <br />
          <span className={styles.statsItemValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
