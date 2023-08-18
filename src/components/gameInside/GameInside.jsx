import { useParams } from 'react-router-dom';
import './gameInside.scss';
import data from '../../data';

const GameInside =()=>{

    const { game } = useParams();
    const currentGame = data.filter((item)=>{
        return item.title === game
    })

    return(
        <div className="gameInside">
            <div className="bigDiv">
                <div className='paragraph'>
                    <h1>{currentGame[0].title}</h1>
                    <p>{currentGame[0].desc}</p>
                </div>
                <div className='image'>
                    <div className="gameImage" style={{backgroundImage: `url("${currentGame[0].image}")`}}></div>
                </div>
            </div>
            <div className='frame'>
                {currentGame[0].frame}
            </div>
        </div>
        )
}
export default GameInside;
