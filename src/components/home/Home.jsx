import Game from '../game/Game';
import data from '../../data';
import './home.scss';

const Home = ()=> {
    return(
        <div className='home'>
            {data.map((game)=>{
                return <Game game={game} />
            })}
        </div>
    )
}

export default Home;