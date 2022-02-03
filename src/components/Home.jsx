import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center">
            <h1 className='p-5 m-5'>Bienvenue sur cette app où je vais vous partager une de mes passions : les jeux vidéos.</h1>
            <h2 className='p-5 m-5'>Le bouton ci-dessous vous emmenera directement sur la page où vous trouverez ma sélection de jeux.</h2>
            <h2 className='p-5 m-5'>Bonne visite ! Enjoy !</h2>
            <Link to="/video_games">
                <button type="button" className="button-65 m-auto">Go</button>
            </Link>
        </div>
    )
}

export default Home;
