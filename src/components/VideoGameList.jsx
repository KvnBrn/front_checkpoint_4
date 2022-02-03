import axios from 'axios';
import { useEffect, useState } from 'react';
import VideoGame from "./VideoGame.jsx";
import '../styles/videoGameList.css';

const VideoGameList = () => {
    const [allVideoGames, setAllVideoGames] = useState([]);

    useEffect(() => {
        getAllVideoGame();
      }, []);
    
      const getAllVideoGame = () => {
        axios.get('http://localhost:8000/').then(({ data }) => {
            setAllVideoGames(data);
        });
      };

    return (
        <div className="game-list">
            <div className="header-list">
                {allVideoGames?.map((videoGame) => (
                    <VideoGame key={videoGame.id} videoGame={videoGame} />
                ))}
            </div>
        </div>
    )
}

export default VideoGameList;
