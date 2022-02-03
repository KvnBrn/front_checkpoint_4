import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/videoGame.css';

const VideoGame = ({ videoGame, isAuthenticated, user }) => {
  const [error, setError] = useState('');

  const deleteVideoGame = (id) => {
    axios.delete(`http://localhost:8000/${id}`).then(({ data }) => {
      if (data.error) setError(data.error);
      else {
        setError('');
        window.location.reload();
      }
    })
  }
  return (
    <div className="Game">
      <div className="gradient-box">
        <Link to={`/video_games/${videoGame.id}`}>
          <img src={videoGame.image} alt={videoGame.name} />
        </Link>
      </div>
      {
        isAuthenticated ? 
        <>
        { user && user.role === 1 && <Link to="/video_games" className="mx-3">Admin</Link>}
        <button className="button-64" onClick={() => deleteVideoGame(videoGame.id)}>Supprimer</button> 
        </>
        :
        <>
            
        </>
      }
      {error && <p className="register-error">{error}</p>}
    </div>
  );
}

export default VideoGame;
