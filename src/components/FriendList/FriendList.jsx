import css from './FriendList.module.css';

import FriendListItem from '../FriendListItem/FriendListItem';
export default function FriendList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem info={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}
