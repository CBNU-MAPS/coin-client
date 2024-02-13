import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Client } from '@stomp/stompjs';

import useBingoInfoStore from '../../stores/bingoInfoStore';
import useQuestionStore from '../../stores/questionStore';
import UserSettingModalOverlay from './UserSettingModal/UserSettingModalOverlay';
import useUserAvatarStore from '../../stores/userAvatarStore';

function Bingo() {
  const client = useRef({});
  const location = useLocation();

  const roomCode = location.pathname.split('/')[2];
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { setBingoName, setBingoHeadCount, setBingoSize } = useBingoInfoStore();
  const { setQuestions } = useQuestionStore();
  const { setUserAvatar } = useUserAvatarStore();

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
    <div>
      {isModalOpen && (
        <UserSettingModalOverlay
          setIsModalOpen={setIsModalOpen}
          client={client}
        />
      )}
    </div>
  );
}

export default Bingo;
