import axios from 'axios';

export const PutIncrementById = async (tweetId, followers) => {
  const url = new URL(
    `https://6442731176540ce2258c6d17.mockapi.io/users/${tweetId}`
  );

  const response = await axios.put(url, {
    followers: followers + 1,
    following: true,
  });

  return response.data;
};
