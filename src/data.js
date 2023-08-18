import flappy from './images/flappy.png';
import maze from './images/maze.jpg';
import tic from './images/tic.png';
import pen from './images/360_F_195115692_wh4bwByEhU0JgCP7uCSzR59C7hoLzVqm.jpg';
import ninja from './images/MV5BMGI5YjY5MTUtZDBkOC00ZWMyLTk0OGEtN2Q1YjE3NWY3NzA4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg';
import doodle from './images/unnamed (1).png'
import trex from './images/dino_alt.jpg';

import flappyGif from './images/flappy.gif';

const data = [
    {
        title: 'Flappy bird',
        image: flappy,
        category: "Arcade",
        desc: "Flappy Bird is a simple, addictive mobile game where you control a bird as it flies between pairs of green pipes. The goal is to get as high a score as possible by passing through as many pipes as you can without hitting them. The game is easy to learn but difficult to master, and its simple yet challenging gameplay made it a global phenomenon in 2014. The game is played by tapping the screen to make the bird flap its wings. Each time you tap, the bird will fly a short distance upwards. The pipes are spaced at random heights, so you need to time your taps carefully in order to pass through them without hitting them. If you hit a pipe, the game is over and you have to start again. The game is scored by the number of pipes you pass through without hitting them. Your score is also affected by the speed at which you fly. The faster you fly, the more points you earn. The highest possible score is 999, which is very difficult to achieve. Flappy Bird was created by Vietnamese developer Dong Nguyen in 2013. The game was originally released for iOS, but it was quickly ported to Android and other platforms.",
        gif: flappyGif,
        frame: <iframe src="https://scratch.mit.edu/projects/874471469/embed" allowtransparency="true" width="70%" height="600px" frameborder="0" scrolling="no" allowfullscreen></iframe>
    },
    {
        title: 'Maze Game',
        image: maze,
        category: "Arcade",
        // gif: url(''),
        frame: <iframe src="https://scratch.mit.edu/projects/874471670/embed" allowtransparency="true" width="70%" height="600px" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        desc: "Mae Maze is a challenging and addictive maze game where you control a little Mae as she tries to escape the maze. The maze is procedurally generated, so it's always different every time you play. You need to use your skills and reflexes to guide Mae through the maze, avoiding obstacles and enemies. The game features stylish graphics and a relaxing soundtrack that will keep you entertained. If you're looking for a challenging and addictive maze game, then Mae Maze is definitely worth checking out."
    },
    {
        title: 'Tic-Tac-Toe',
        image: tic,
        category: "Arcade",
        desc: "Tic Tac Toe is a classic game of strategy and skill. It's easy to learn but challenging to win. You can play against a friend, challenge the computer, or compete against players from all over the world. The game has stylish graphics and a relaxing soundtrack. If you're looking for a fun and challenging game, then Tic Tac Toe is definitely worth checking out.",
        // gif: url(''),
        frame: <iframe src="https://scratch.mit.edu/projects/874471912/embed" allowtransparency="true" width="70%" height="600px" frameborder="0" scrolling="no" allowfullscreen></iframe>
    },
    {
        title: 'Auto-Pen',
        image: pen,
        category: "Arcade",
        // gif: url(''),
        frame: <iframe src="https://scratch.mit.edu/projects/874471765/embed" allowtransparency="true" width="70%" height="600px" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        desc: "Auto pen is a great way to stimulate your creative mind with out any skills. With mereley a key, you can draw a picture of a dictator of a foreign nation laying in a pool of his own blood after the citizens found out why American  "
    },
    {
        title: 'Fruit Ninja',
        image: ninja,
        category: "Arcade",
        // gif: url(''),
        frame: <iframe src="https://scratch.mit.edu/projects/874471534/embed" allowtransparency="true" width="70%" height="600px" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        desc: "Slice up fruit like a chef. Foil the fruits evil plans to spoil and become inedible by becoming a ninja and killing the evil fruit,"
    },
    {
        title: 'Chrome T-Rex',
        image: trex,
        category: "Arcade",
        // gif: url(''),
        frame: <iframe src="https://scratch.mit.edu/projects/874471225/embed" allowtransparency="true" width="70%" height="600px" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        desc: "Jump over cacti like a dinosaur, because in this game you are one. Idk what to write in the rest of this describtion vjehxngdjxdgruysdxghdjhcv bxvhjs"
    },
    {
        title: 'Doodle Jump',
        image: doodle,
        category: "Arcade",
        // gif: url(''),
        frame: <iframe src="https://scratch.mit.edu/projects/874471390/embed" allowtransparency="true" width="70%" height="600px" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        desc: 'climb to the top of mt everest by jumping on blocks. idk'
    },
]

export default data;