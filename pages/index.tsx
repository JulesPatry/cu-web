import { useState, useEffect } from 'react';
import useSocket from 'hooks/useSocket';

function Home() {
  const socket = useSocket();
  const [input, setInput] = useState('');
  const [game, setGame] = useState({
    gameStatus: 'not-started',
  });

  useEffect(() => {
    socket.on('connection', () => {
      console.log('');
    });
  }, []);

  function handleInitGame() {}
  function handleStartGame() {}
  function handleCalculateTurn() {
    const value = Math.random() + '';
    setInput(value);
    socket.emit('', value);
  }

  return (
    <div style={{ padding: 28 }}>
      <h1>Reads</h1>
      <p>Game: {JSON.stringify(game)}</p>
      <p>Input: {input}</p>
      <button onClick={handleInitGame}>Init Game</button>
      <button onClick={handleStartGame}>Start Game</button>
      <button onClick={handleCalculateTurn}>turn</button>
    </div>
  );
}

export default Home;
