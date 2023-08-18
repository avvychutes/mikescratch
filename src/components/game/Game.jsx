import { Link } from 'react-router-dom';
import './game.scss';

const Game =({game})=>{
    return(
        <div className="game">
            <Link to={`/${game.title}`}>
                <div className="nkar" style={{backgroundImage: `url("${game.image}")`}}></div>
                <span>{game.title}</span>
            </Link>
        </div>
        )
}
export default Game
