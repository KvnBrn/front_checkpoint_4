import { Link } from 'react-router-dom';
import '../styles/videoGame.css';

const VideoGame = ({ videoGame }) => {
  return (
    <div className="Game">
      <div className="gradient-box">
        <Link to={`/video_games/${videoGame.id}`}>
          <img src={videoGame.image} alt={videoGame.name} />
        </Link>
      </div>
    </div>
  );
}

export default VideoGame;
