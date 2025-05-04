import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.card}>
      <div className={css.whiteContainer}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>
      <div className={css.bottomContainer}>
        <ul className={css.list}>
          <li className={css.item}>
            <span className={css.label}>Followers</span>
            <span className={css.value}>{stats.followers}</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Views</span>
            <span className={css.value}>{stats.views}</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Likes</span>
            <span className={css.value}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
