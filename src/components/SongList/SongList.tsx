import Song from '../Song/Song';
import { SongI } from '../../store/PlayerStore';
import { SongListContainer } from './SongList.styles';

interface Props {
  songs: SongI[];
}

const SongList = ({ songs }: Props) => {
  return (
    <>
      <SongListContainer>
        {songs.map((song) => (
          <Song
            key={song.id}
            name={song.name}
            artist={song.artist}
            img={song.img}
            likes={song.likes}
            playing={song.playing}
            audio={song.audio}
            id={song.id}
          />
        ))}
      </SongListContainer>
    </>
  );
};

export default SongList;
