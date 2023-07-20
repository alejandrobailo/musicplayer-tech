import { create } from 'zustand';

export interface SongI {
  id: number;
  name: string;
  artist: string;
  likes: number;
  audio: string;
  img: string;
  playing: boolean;
}

const mockedSong: SongI = {
  id: 1,
  name: 'Song name',
  artist: 'Artist name',
  likes: 0,
  audio: '',
  img: '',
  playing: false,
};

interface State {
  currentSong: SongI;
  setPlaying: (song: SongI) => void;
}

export const useStore = create<State>((set) => ({
  currentSong: mockedSong,
  setPlaying: (song) => set({ currentSong: { ...song, playing: true } }),
}));
