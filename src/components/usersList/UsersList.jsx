import { UserListItem } from '../userListItem/UserListItem';

export const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <UserListItem oneUser={user} />
          </li>
        );
      })}
    </ul>
  );
};
