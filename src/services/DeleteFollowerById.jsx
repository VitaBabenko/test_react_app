import axios from 'axios';

export const DeleteFollowerById = async id => {
  const BASE_URL = 'https://6442731176540ce2258c6d17.mockapi.io';

  const response = await axios.delete(`${BASE_URL}/users/${id}`);

  return response.data;
};
