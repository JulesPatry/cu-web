import { useMemo } from 'react';
import io from 'socket.io-client';

export default function useSocket() {
  const socket = useMemo(() => {
    return io('http://127.0.0.1:8080');
  }, []);

  return socket;
}
