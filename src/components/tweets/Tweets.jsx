import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { GetTweets } from '../../services/GetTweets';
import { UsersList } from '../usersList/UsersList';

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      GetTweets()
        .then(response => {
          setUsers(response);
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => setLoading(false));
    }, 3000);
  }, []);

  return (
    <>
      <Link to="/">back</Link>
      {loading && (
        <div>
          <Skeleton count={12} width={380} height={460} />
        </div>
      )}
      {error && <p>{error}</p>}
      {!error && !loading && <UsersList users={users} />}
    </>
  );
};
