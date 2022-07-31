import React, { useRef, useEffect, useState } from 'react';
import Control from './Control';
import Details from './Details';

function Player(props) {
    const audioElement = useRef (null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if(isPlaying) {
            audioElement.current.play()
        } else {
            audioElement.current.false()
        }
    }, []);
    // const skipSong = (forwards = true)
  return (
    <div className = "player">
        <h4>Playing Now</h4>
        <Details
        songs = {props.songs[props.currentSongIndex]}
            />
        <Control
        isPlaying = {isPlaying}
        setIsPlaying = {setIsPlaying}
        // skipSong = {skipSong}
        />
        <audio className="player_audio"
         src = {props.songs[props.currentSongIndex].src}
         ref={audioElement}
          controls >

          </audio>
        <p>
            Next Up: <span>Next Song</span>
        </p>
    </div>
  );
}

export default Player;