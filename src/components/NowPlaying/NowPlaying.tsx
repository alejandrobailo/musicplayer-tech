import usePlayer from '../../hooks/usePlayer';
import { CurrentSong, CustomH2, CustomParagraph, NowPlayingBox } from './NowPlaying.styles';
import { useEffect, useRef, useState } from 'react';

const NowPlaying = () => {
  const { currentSong } = usePlayer();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (currentSong && currentSong.playing) {
        audioRef.current.load();
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSong]);

  if (!currentSong.playing) {
    return null;
  }

  return (
    <NowPlayingBox
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
    >
      <CustomH2>Now Playing</CustomH2>
      <CurrentSong>
        <img
          src={`/public/assets/img/${currentSong.img}`}
          width="60"
          height="60"
          alt="Album cover"
        />
        <div className="textDetails">
          <CustomParagraph>{currentSong.artist}</CustomParagraph>
          <span>- {currentSong.name}</span>
        </div>
      </CurrentSong>
      <audio controls ref={audioRef} data-testid="audio-element">
        <source src={`/public/assets/audio/${currentSong.audio}`} type="audio/mpeg" />
      </audio>
    </NowPlayingBox>
  );
};

export default NowPlaying;
