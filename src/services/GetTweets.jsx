import axios from 'axios';

export const GetTweets = async page => {
  const url = new URL('https://6442731176540ce2258c6d17.mockapi.io/users');
  url.searchParams.append('page', page);
  url.searchParams.append('limit', 4);

  const response = await axios.get(url);

  return response.data;
};
