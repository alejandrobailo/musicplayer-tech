import { useStore } from '../store/PlayerStore';

// This hook is used to get the current song and set the playing state from Zustand
// and not depend on the library itself everywhere in the app, so if we want to change
// the library we can do it easily
const usePlayer = () => {
  const setPlaying = useStore((state) => state.setPlaying);
  const currentSong = useStore((state) => state.currentSong);

  return { setPlaying, currentSong };
};

export default usePlayer;
