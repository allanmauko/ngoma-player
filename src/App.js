import React,{ useState,useEffect } from "react";
// import './components/App.css'
import SongContainer from "./components/SongContainer";
function App() {
const [songs, setSongs] = useState([]);

useEffect(() => {
fetch('https://phase-2-music-app.herokuapp.com/Music')
.then((response) => response.json())
.then((data) => setSongs(data));
}, []);




  return (
    <div className="grid gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {songs.map((song, index) => {
        {
          console.log(songs);
        }

        return (
          <article >
            <SongContainer
              key={index}
              song={song}
              className="bg-white px-25 py-10 mb-10 rounded-lg sm:px-5 hover:shadow-2xl"
            />
          </article>
          
        );
      })}
    </div>
  );

  }
export default App;