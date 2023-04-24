import { UserListItem } from '../userListItem/UserListItem';
import { List } from './UserList.styled';

export const UsersList = ({ users }) => {
  return (
    <List>
      {users.map(user => {
        return (
          <li key={user.id}>
            <UserListItem oneUser={user} />
          </li>
        );
      })}
    </List>
  );
};
