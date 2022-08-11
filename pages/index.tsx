import { useMemo, useEffect } from 'react';
import { io } from 'socket.io-client';

function Home() {
  const socket = useMemo(() => {
    return io('ws://localhost:3001');
  }, []);

  useEffect(() => {
    socket.on('hello', (arg) => {
      console.log('arg', arg);
    });

    socket.emit('hello2', 'omg');
  }, []);

  return <div>hello world</div>;
}

export default Home;
