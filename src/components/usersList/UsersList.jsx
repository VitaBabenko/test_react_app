import { UserListItem } from '../userListItem/UserListItem';

export const UsersList = ({
  users,
  followers,
  isFollowing,
  onAddFollower,
  onDeleteFollower,
}) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <UserListItem
              oneUser={user}
              followers={followers}
              isFollowing={isFollowing}
              onAddFollower={onAddFollower}
              onDeleteFollower={onDeleteFollower}
            />
          </li>
        );
      })}
    </ul>
  );
};
