import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Client } from '@stomp/stompjs';

import style from './Bingo.module.scss';

function Bingo() {
  const client = useRef({});
  const location = useLocation();

  useEffect(() => {
    const subscribe = () => {
      client.current.subscribe(`/room`, (data) => {
        // eslint-disable-next-line no-console
        console.log(data);
      });
    };

    client.current = new Client({
      brokerURL: import.meta.env.VITE_BROKER_URL,
      onConnect: () => {
        subscribe();
        client.current.publish({
          destination: '/room',
          body: 'Hello, STOMP',
        });
      },
    });

    client.current.activate();

    return () => client.current.deactivate();
  }, [location]);

  return <div className={`${style.test} bold26`}>빙고페이지 입니다.</div>;
}

export default Bingo;
