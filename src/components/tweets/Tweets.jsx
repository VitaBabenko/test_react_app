import { useEffect, useState } from 'react';
import { Loader } from '../Loader';
import { GetTweets } from '../../services/GetTweets';
import { UsersList } from '../usersList/UsersList';
import { Link, Btn } from './Tweets.styled';

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
        setUsers(JSON.parse(localStorage.getItem('users')));

        if (page === 1) {
          // if (localStorage.getItem('users') !== null) {
          //   return setUsers(JSON.parse(localStorage.getItem('users')));
          // }
          return setUsers(respUsers);
        }
        setUsers(prevUsers => [...prevUsers, ...respUsers]);
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

  return (
    <>
      <Link to="/">back</Link>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {!error && !loading && <UsersList users={users} />}
      {page < 3 && (
        <Btn type="button" onClick={handleButton}>
          Load More
        </Btn>
      )}
    </>
  );
};
