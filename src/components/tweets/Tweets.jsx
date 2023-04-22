import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { GetTweets } from '../../services/GetTweets';
import { AddFollowerById } from '../../services/AddFollowerById';
import { DeleteFollowerById } from '../../services/DeleteFollowerById';
import { UsersList } from '../usersList/UsersList';

const getInitialUsers = () => {
  const savedUsers = localStorage.getItem('users');

  if (savedUsers !== null) {
    const parsedUsers = JSON.parse(savedUsers);
    console.log(parsedUsers);
    return parsedUsers;
  }
  return [];
};

export const Tweets = () => {
  const [users, setUsers] = useState(getInitialUsers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [changeFollower, setNewFollowers] = useState();
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    setLoading(true);

    GetTweets()
      .then(response => {
        setUsers(response);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const addFollower = tweetId => {
    console.log(tweetId);
    AddFollowerById(tweetId);
    setNewFollowers(state => state + 1);
    setIsFollowing(true);
  };

  const deleteFollower = tweetId => {
    console.log(tweetId);
    DeleteFollowerById(tweetId);
    setNewFollowers(state => state - 1);
    setIsFollowing(false);
  };

  return (
    <>
      <Link to="/">back</Link>
      {loading && (
        <div>
          <Skeleton count={12} width={380} height={460} />
        </div>
      )}
      {error && <p>{error}</p>}
      {!error && !loading && (
        <UsersList
          users={users}
          followers={changeFollower}
          isFollowing={isFollowing}
          onAddFollower={addFollower}
          onDeleteFollower={deleteFollower}
        />
      )}
    </>
  );
};
