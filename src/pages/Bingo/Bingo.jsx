import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Client } from '@stomp/stompjs';
import { useShallow } from 'zustand/react/shallow';

import style from './Bingo.module.scss';
import useUserAvatarStore from '../../stores/userAvatarStore';
import useBingoInfoStore from '../../stores/bingoInfoStore';
import useQuestionStore from '../../stores/questionStore';
import UserSettingModalOverlay from './UserSettingModal/UserSettingModalOverlay';
import BingoBoard from './BingoBoard/BingoBoard';
import BingoHeader from './BingoHeader/BingoHeader';
import UserBoard from './UserBoard/UserBoard';

function Bingo() {
  const client = useRef({});
  const { roomCode } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [setBingoName, setBingoHeadCount, setBingoSize, setUsers] =
    useBingoInfoStore(
      useShallow((state) => [
        state.setBingoName,
        state.setBingoHeadCount,
        state.setBingoSize,
        state.setUsers,
      ]),
    );
  const setQuestions = useQuestionStore((state) => state.setQuestions);
  const setUserAvatar = useUserAvatarStore((state) => state.setUserAvatar);

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

      client.current.subscribe(`/room/${roomCode}/user`, (data) => {
        const { users } = JSON.parse(data.body);
        setUsers(users);
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
    setUsers,
  ]);

  return (
    <div className={style.container}>
      {isModalOpen && (
        <UserSettingModalOverlay
          setIsModalOpen={setIsModalOpen}
          client={client}
        />
      )}
      <BingoHeader />
      <BingoBoard />
      <UserBoard />
    </div>
  );
}

export default Bingo;
