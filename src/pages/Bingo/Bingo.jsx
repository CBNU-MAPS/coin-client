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
import MemoizedUserBoard from './UserBoard/UserBoard';
import avatarMappingObject from '../../utils/avatarMappingObject';

function Bingo() {
  const client = useRef({});
  const userRef = useRef(null);
  const { roomCode } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [hasInfo, setHasInfo] = useState(false);
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
        if (!hasInfo) {
          setBingoName(bingoName);
          setBingoHeadCount(bingoHeadCount);
          setBingoSize(bingoSize);
          setQuestions(questions);
        }
      });

      client.current.subscribe(`/room/${roomCode}/avatar`, (data) => {
        const { selectedAvatars } = JSON.parse(data.body);
        setUserAvatar(selectedAvatars);
      });

      client.current.subscribe(`/room/${roomCode}/users`, (data) => {
        const users = JSON.parse(data.body).users || [];
        if (!hasInfo) {
          setUsers(users);
          setHasInfo(true);
        }
      });

      client.current.subscribe(`/room/${roomCode}/user`, (data) => {
        const { avatar, name } = JSON.parse(data.body);

        const userDiv = document.createElement('div');
        userDiv.id = avatar;
        userDiv.className = `${style.user} bold18`;
        userDiv.style.top = `${Math.floor(Math.random() * 200)}px`;
        userDiv.style.left = `${Math.floor(Math.random() * 250)}px`;
        userDiv.innerHTML = `${avatarMappingObject[avatar]} &nbsp; ${name}`;

        userRef.current.appendChild(userDiv);
      });

      client.current.subscribe(`/room/${roomCode}/delete`, (data) => {
        const { avatar } = JSON.parse(data.body);
        userRef.current.childNodes.forEach((userDiv) => {
          if (+userDiv.id === avatar) {
            userRef.current.removeChild(userDiv);
          }
        });
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
    hasInfo,
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
      <MemoizedUserBoard userRef={userRef} />
    </div>
  );
}

export default Bingo;
