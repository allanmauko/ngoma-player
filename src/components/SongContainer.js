import React from 'react'
import {AiFillLike} from 'react-icons/ai'

const SongContainer = ({ songs }) => {
  console.log(songs);
  const songsDisplay = songs.map((song) => {
    return (
    <div>
      <div>
        <img src={song.image_src} className="block mx-auto "></img>
      </div>
      <h1>
        {" "}
        <span className="font-bold text-red-300 text-lg">Artist</span> {song.artist}
      </h1>
      <h1>
        <span className="font-bold text-red-300 text-lg">
          Track
        </span>{" "}
        {song.track}
      </h1>
      <h1 className="flex mx-5">
        {" "}
        <AiFillLike className="mr-3" /> {song.likes}
      </h1>
      <div>
      </div>
      <audio src={song?.audio_file} controls className="my-10"></audio>
      </div> 
    )
  })

  return (
    <div className="grid gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {songsDisplay}
    </div>
  );
}

export default SongContainer