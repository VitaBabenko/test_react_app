import axios from 'axios';

export const GetTweetById = async tweetId => {
  const BASE_URL = 'https://6442731176540ce2258c6d17.mockapi.io';
  const response = await axios.get(`${BASE_URL}/users/${tweetId}`);

  return response.data;
};
