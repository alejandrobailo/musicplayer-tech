import { API_URL, API_ENDPOINTS } from '../constants';

export const fetchSongs = async () => {
  try {
    const response = await fetch(`${API_URL}${API_ENDPOINTS.songs}`);

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const data = await response.json();
    const formattedData = data.map((song: any) => ({
      ...song,
      playing: false,
    }));

    return formattedData;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch songs');
  }
};
