import './App.css';
import SongList from './components/SongList/SongList';
import NowPlaying from './components/NowPlaying/NowPlaying';
import { useState, useEffect, useCallback } from 'react';
import { SongI } from './store/PlayerStore';
import { fetchSongs } from './utils/fetchSongs';
import SortBy, { SortOptions } from './components/SortBy/SortBy';
import usePlayer from './hooks/usePlayer';
import { CircularProgress } from '@mui/material';

const App = () => {
  const [songs, setSongs] = useState<SongI[]>([]);
  const { currentSong } = usePlayer();

  useEffect(() => {
    const fetchData = async () => {
      const songsData = await fetchSongs();
      const sortedSongs = songsData.sort((a: SongI, b: SongI) => b.likes - a.likes);
      setSongs(sortedSongs);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (currentSong) {
      const updatedSongs = songs.map((song) => {
        if (song.id === currentSong.id) {
          return currentSong;
        }
        return song;
      });
      setSongs(updatedSongs);
    }
  }, [currentSong]);

  const handleSort = useCallback(
    (order: SortOptions) => {
      const sortedSongs = [...songs];

      if (order === SortOptions.MostLiked) {
        sortedSongs.sort((a, b) => b.likes - a.likes);
      } else if (order === SortOptions.SongNameAZ) {
        sortedSongs.sort((a, b) => a.name.localeCompare(b.name));
      }

      setSongs(sortedSongs);
    },
    [songs],
  );

  if (!songs.length) {
    return <CircularProgress sx={{ margin: '5rem auto' }} size={200} />;
  }

  return (
    <>
      <h1>Music Player</h1>
      <p className="description">What kind of music would you like to hear today?</p>
      <SortBy onSort={handleSort} />
      <SongList songs={songs} />
      <NowPlaying />
    </>
  );
};

export default App;
