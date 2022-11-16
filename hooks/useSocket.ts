import { useMemo, useEffect } from 'react';
import io from 'socket.io-client';

export default function useSocket() {
  const socket = useMemo(() => {
    return io('ws://localhost:3001');
  }, []);

  useEffect(() => {
    async function socketInitializer() {
      socket.on('connect', () => {
        console.log('connected');
      });

      socket.on('chat message', (msg) => {
        console.log('msg', msg);
      });
    }

    socketInitializer();
  }, [socket]);

  return socket;
}
