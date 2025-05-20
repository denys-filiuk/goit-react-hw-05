import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.friendItem}>
      <img className={styles.friendsImg} src={avatar} alt={name} width="66" />
      <p className={styles.itemText}>{name}</p>
      <p className={isOnline ? styles.isOnline : styles.isOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
