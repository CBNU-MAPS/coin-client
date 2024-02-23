import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Client } from '@stomp/stompjs';

import style from './Bingo.module.scss';
import useBingoInfoStore from '../../stores/bingoInfoStore';
import useQuestionStore from '../../stores/questionStore';
import UserSettingModalOverlay from './UserSettingModal/UserSettingModalOverlay';
import useUserAvatarStore from '../../stores/userAvatarStore';
import BingoBoard from './BingoBoard/BingoBoard';
import BingoHeader from './BingoHeader/BingoHeader';

function Bingo() {
  const client = useRef({});
  const { roomCode } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const { setBingoName, setBingoHeadCount, setBingoSize } = useBingoInfoStore();
  const { setQuestions } = useQuestionStore();
  const { setUserAvatar } = useUserAvatarStore();

  const preventClose = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    (() => {
      window.addEventListener('beforeunload', preventClose);
    })();
    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

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

      client.current.subscribe(`/room/${roomCode}/avatar`, (data) => {
        const { selectedAvatars } = JSON.parse(data.body);
        setUserAvatar(selectedAvatars);
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
  }, [
    roomCode,
    setBingoHeadCount,
    setBingoName,
    setBingoSize,
    setQuestions,
    setUserAvatar,
  ]);

  return (
    <div className={`${style.container} bold26`}>
      {isModalOpen && (
        <UserSettingModalOverlay
          setIsModalOpen={setIsModalOpen}
          client={client}
        />
      )}
      <BingoHeader />
      <BingoBoard />
    </div>
  );
}

export default Bingo;
