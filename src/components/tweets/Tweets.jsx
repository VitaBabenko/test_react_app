import { useEffect, useState } from 'react';
import { Dropdown } from '../dropdown/Dropdown';
import { Loader } from '../Loader';
import { GetTweets } from '../../services/GetTweets';
import { UsersList } from '../usersList/UsersList';
import { Wrap, Link, Btn } from './Tweets.styled';

const getInitialUsers = () => {
  const savedUsers = localStorage.getItem('users');

  if (savedUsers !== null) {
    const parsedUsers = JSON.parse(savedUsers);

    return parsedUsers;
  }
  return [];
};

export const Tweets = () => {
  const [users, setUsers] = useState(getInitialUsers);
  const [filterUsers, setFilterUsers] = useState('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    setLoading(true);

    GetTweets(page)
      .then(respUsers => {
        if (page === 1) {
          return setUsers(respUsers);
        }
        return setUsers(prevUsers => [...prevUsers, ...respUsers]);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [page]);

  const handleButton = () => {
    setPage(prevPage => prevPage + 1);
    setUsers(JSON.parse(localStorage.getItem('users')));
  };

  const filterListUsers = users.filter(user => {
    if (filterUsers === 'follow') {
      return user.following === false;
    } else if (filterUsers === 'followings') {
      return user.following === true;
    } else {
      return user;
    }
  });

  const onFilterValueSelected = filterValue => {
    setFilterUsers(filterValue);
  };

  return (
    <>
      <Wrap>
        <Link to="/">back</Link>
        <Dropdown filterValueSelected={onFilterValueSelected} />
      </Wrap>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {!error && !loading && <UsersList users={filterListUsers} />}
      {page < 3 && (
        <Btn type="button" onClick={handleButton}>
          Load More
        </Btn>
      )}
    </>
  );
};
