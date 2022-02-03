import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import '../styles/videGameDetails.css';

const VideoGameDetails = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState();

  useEffect(() => {
    getVideoGameDetails()
  }, []);

  const getVideoGameDetails = () => {
    axios.get(`http://localhost:8000/${id}`)
    .then(response => setGameDetails(response.data))
  }
  console.log(gameDetails)

  return (
    <div className="GameDetails">
      <div className="background-details">
        <img src={gameDetails?.image} alt={gameDetails?.name} />
        <div className="menu-details">
          <div className="details">
            <h3 className='detail-name'>Titre :</h3>
            <h4 className='detail-cat'>Catégorie(s) :</h4>
            <h4 className='detail-rating'>Ma note :</h4>
            <h4 className='detail-description'> Description :</h4>
          </div>
          <div className="details-res">
            <h3 className='detail-name-res'>{gameDetails?.name}</h3>
            <h4 className='detail-cat-res'>{gameDetails?.cat_name}</h4>
            <h4 className='detail-rating-res'>{gameDetails?.rate} / 10</h4>
            <h4 className='detail-description-res'>{gameDetails?.description}</h4>
          </div>
        </div>
      </div>
      <div className="back-button">
        <Link to={'/video_games'}>
          <button className="button-65" type="button" ><span className="text">Retour</span></button>
        </Link>
      </div>
    </div>
  );
}

export default VideoGameDetails;
