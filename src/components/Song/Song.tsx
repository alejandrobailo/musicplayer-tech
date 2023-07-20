import { SongCard, Name, Artist, DetailsContainer, UsabilityContainer } from './Song.styles';
import { Waveform } from '@uiball/loaders';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { SongI } from '../../store/PlayerStore';
import usePlayer from '../../hooks/usePlayer';

interface Props {
  id: number;
  name: string;
  artist: string;
  img: string;
  likes: number;
  playing: boolean;
  audio: string;
}

const Song = ({ id, name, artist, img, likes, audio, playing }: Props) => {
  const { setPlaying, currentSong } = usePlayer();

  const handleStop = () => {
    if (currentSong && currentSong.id === id) {
      const updatedSong: SongI = { ...currentSong, playing: false };
      setPlaying(updatedSong);
    }
  };

  const handlePlay = () => {
    const updatedSong: SongI = { id, name, artist, img, likes, audio, playing: true };
    setPlaying(updatedSong);
  };

  return (
    <>
      <SongCard>
        <div className="infoContainer">
          <img src={`/public/assets/img/${img}`} width="60" height="60" alt="song cover" />
          <DetailsContainer>
            <div className="nameContainer">
              <Name>{name}</Name>
              {playing && <Waveform size={24} lineWeight={3.5} speed={1} color="black" />}
            </div>
            <Artist>{artist}</Artist>
          </DetailsContainer>
        </div>
        <UsabilityContainer>
          <span>&hearts; {likes}</span>
          {playing ? (
            <StopCircleIcon
              sx={{ ':hover': { color: '#00B629' }, cursor: 'pointer' }}
              onClick={handleStop}
            />
          ) : (
            <PlayCircleIcon
              sx={{ ':hover': { color: '#00B629' }, cursor: 'pointer' }}
              onClick={handlePlay}
            />
          )}
        </UsabilityContainer>
      </SongCard>
    </>
  );
};

export default Song;
