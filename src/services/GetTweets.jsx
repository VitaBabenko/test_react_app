import axios from 'axios';

export const GetTweets = async () => {
  const BASE_URL = 'https://6442731176540ce2258c6d17.mockapi.io';
  const response = await axios.get(`${BASE_URL}/users`);

  return response.data;
};
