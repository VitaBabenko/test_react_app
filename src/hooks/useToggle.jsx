// import { useState } from 'react';
// import { GetTweetById } from '../services/GetTweetById';

// export const useToggle = () => {
//   const [users, setUsers] = useState([]);
//   const [newFollowers, setNewFollowers] = useState(100500);
//   const [isFollowing, setIsFollowing] = useState(false);

//   const following = tweetId => {
//     GetTweetById(tweetId).then(resp => {
//       console.log(resp.followers);
//       setNewFollowers(prevState => prevState + 1);
//       setUsers(users.map(user => user.id === tweetId));
//     });
//     setIsFollowing(true);
//   };

//   const follow = tweetId => {
//     GetTweetById(tweetId).then(resp => {
//       console.log(resp.followers);
//       setNewFollowers(prevState => prevState - 1);
//     });
//     setIsFollowing(false);
//   };
//   const toggle = () => setIsFollowing(isFollowing => !isFollowing);

//   return { newFollowers, isFollowing, following, follow, toggle };
// };
