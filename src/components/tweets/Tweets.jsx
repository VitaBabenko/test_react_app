import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { GetTweets } from '../../services/GetTweets';
import { UsersList } from '../usersList/UsersList';
import { Link, WrapSkeleton, Btn } from './Tweets.styled';

// const getInitialUsers = () => {
//   const savedUsers = localStorage.getItem('users');

//   if (savedUsers !== null) {
//     const parsedUsers = JSON.parse(savedUsers);

//     return parsedUsers;
//   }
//   return [];
// };

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   localStorage.setItem('users', JSON.stringify(users));
  // }, [users]);

  useEffect(() => {
    setLoading(true);

    GetTweets(page)
      .then(respUsers => {
        console.log(respUsers);
        return page === 1
          ? setUsers(respUsers)
          : setUsers(prevUsers => [...prevUsers, ...respUsers]);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [page]);

  const handleButton = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Link to="/">back</Link>
      {loading && (
        <WrapSkeleton>
          <Skeleton count={12} height={460} />
        </WrapSkeleton>
      )}
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
