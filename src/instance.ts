import axios from "axios";
import qs from "qs"; // для правильного форматирования body

const getSpotifyToken = async () => {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  const token = btoa(`${clientId}:${clientSecret}`);

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify({ grant_type: "client_credentials" }),
      {
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching Spotify token:", error);
  }
};

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getSpotifyToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
