import Song from '../Song/Song';
import { SongI } from '../../store/PlayerStore';

interface Props {
  songs: SongI[];
}

const SongList = ({ songs }: Props) => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default SongList;
