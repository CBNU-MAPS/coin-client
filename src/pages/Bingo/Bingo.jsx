import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Client } from '@stomp/stompjs';

import style from './Bingo.module.scss';
import useBingoInfoStore from '../../stores/bingoInfoStore';
import useQuestionStore from '../../stores/questionStore';
import BingoBoard from './BingoBoard/BingoBoard';

function Bingo() {
  const client = useRef({});
  const location = useLocation();

  const roomCode = location.pathname.split('/')[2];
  const { setBingoName, setBingoHeadCount, setBingoSize } = useBingoInfoStore();
  const { setQuestions } = useQuestionStore();

  useEffect(() => {
    const subscribe = () => {
      client.current.subscribe(`/room/${roomCode}/room`, (data) => {
        const { bingoName, bingoSize, bingoHeadCount, questions } = JSON.parse(
          data.body,
        );
        setBingoName(bingoName);
        setBingoHeadCount(bingoHeadCount);
        setBingoSize(bingoSize);
        setQuestions(questions);
      });
    };

    client.current = new Client({
      brokerURL: import.meta.env.VITE_BROKER_URL,
      connectHeaders: {
        code: roomCode,
      },
      onConnect: () => {
        subscribe();
      },
    });

    client.current.activate();

    return () => client.current.deactivate();
  }, [roomCode, setBingoHeadCount, setBingoName, setBingoSize, setQuestions]);

  return (
    <div className={`${style.container} bold26`}>
      <BingoBoard />
    </div>
  );
}

export default Bingo;
