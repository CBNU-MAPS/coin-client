import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Client } from '@stomp/stompjs';
import { useShallow } from 'zustand/react/shallow';

import style from './Bingo.module.scss';
import useUserAvatarStore from '../../stores/userAvatarStore';
import useBingoInfoStore from '../../stores/bingoInfoStore';
import useQuestionStore from '../../stores/questionStore';
import useUserInfoStore from '../../stores/userInfoStore';
import UserSettingModalOverlay from './UserSettingModal/UserSettingModalOverlay';
import BingoBoard from './BingoBoard/BingoBoard';
import BingoHeader from './BingoHeader/BingoHeader';
import MemoizedUserBoard from './UserBoard/UserBoard';
import Spinner from '../../components/Spinner/Spinner';
import avatarMappingObject from '../../utils/avatarMappingObject';

function Bingo() {
  const client = useRef({});
  const boardRef = useRef(null);
  const userRef = useRef(null);

  const { roomCode } = useParams();
  const navigate = useNavigate();

  const audio = new Audio('/sounds/selectBingo.mp3');

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [hasInfo, setHasInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const setQuestions = useQuestionStore((state) => state.setQuestions);
  const setUserAvatar = useUserAvatarStore((state) => state.setUserAvatar);
  const [myAvatar, setIsTurn] = useUserInfoStore((state) => [
    state.avatar,
    state.setIsTurn,
  ]);
  const [
    setBingoName,
    setBingoHeadCount,
    setBingoSize,
    setUsers,
    isStarted,
    setIsStarted,
  ] = useBingoInfoStore(
    useShallow((state) => [
      state.setBingoName,
      state.setBingoHeadCount,
      state.setBingoSize,
      state.setUsers,
      state.isStarted,
      state.setIsStarted,
    ]),
  );

  // 페이지 나가기 전에 확인
  useEffect(() => {
    const preventClose = (event) => {
      event.preventDefault();
    };

    (() => {
      window.addEventListener('beforeunload', preventClose);
    })();
    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  /** isStarted가 변할 때 구독하기 위한 useEffect
   * connect가 있는 useEffect에서 isStarted 사용 시
   * useEffect가 재 실행 되면서 connect가 끊겼다 다시 되기 때문에
   * 따로 isStarted를 사용하는 것을 분리함 */
  useEffect(() => {
    if (client.current.connected) {
      client.current.subscribe(`/room/${roomCode}/users`, (data) => {
        const users = JSON.parse(data.body).users || [];
        if (isStarted) {
          const index = users.findIndex((user) => user.avatar === myAvatar);
          setIsTurn(users[index].turn);
          setUsers(users);
        }
      });
    }
  }, [roomCode, setUsers, isStarted, setIsTurn, myAvatar]);

  // 스톰프 클라이언트 연결 및 구독
  useEffect(() => {
    // 구독
    const subscribe = () => {
      client.current.subscribe(`/room/${roomCode}/room`, (data) => {
        if (!hasInfo) {
          if (!data.body) {
            navigate('/inaccess', { replace: true });
          }
          const { bingoName, bingoSize, bingoHeadCount, questions } =
            JSON.parse(data.body);

          setBingoName(bingoName);
          setBingoHeadCount(bingoHeadCount);
          setBingoSize(bingoSize);
          setQuestions(questions);
        }
      });

      client.current.subscribe(`/room/${roomCode}/users`, (data) => {
        const users = JSON.parse(data.body).users || [];
        if (!hasInfo) {
          setUsers(users);
          setHasInfo(true);
        }
      });

      client.current.subscribe(`/room/${roomCode}/avatar`, (data) => {
        const { selectedAvatars } = JSON.parse(data.body);
        setUserAvatar(selectedAvatars);
      });

      client.current.subscribe(`/room/${roomCode}/user`, (data) => {
        const { avatar, name } = JSON.parse(data.body);

        const userDiv = document.createElement('div');
        userDiv.id = avatar;
        userDiv.className = `${style.user} medium16 created`;
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

      client.current.subscribe(`/room/${roomCode}/ready`, (data) => {
        const { avatar, ready } = JSON.parse(data.body);
        userRef.current.childNodes.forEach((userDiv) => {
          if (+userDiv.id === avatar) {
            const div = userDiv;
            div.style.backgroundColor = ready ? '#000000' : '#d4d4d4';
          }
        });
      });

      client.current.subscribe(`/room/${roomCode}/start`, (data) => {
        const { users } = JSON.parse(data.body);
        setIsStarted(true);
        Array.from(userRef.current.childNodes).forEach((userDiv) => {
          if (userDiv.classList.contains('created')) {
            userRef.current.removeChild(userDiv);
          }
        });
        setUsers(users);
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });

      client.current.subscribe(`/room/${roomCode}/select`, (data) => {
        const { answer } = JSON.parse(data.body);
        boardRef.current.childNodes.forEach((cell) => {
          if (
            +cell.id === answer.questionId &&
            cell.innerHTML === answer.answer
          ) {
            audio.play();
            cell.classList.add(style.selected);
          }
        });
      });

      client.current.subscribe(`/room/${roomCode}/end`, () => {
        navigate(`/result/${roomCode}`, { replace: true });
      });
    };

    // 연결
    client.current = new Client({
      brokerURL: import.meta.env.VITE_BROKER_URL,
      connectHeaders: {
        code: roomCode,
      },
      onConnect: () => {
        subscribe();
      },
    });

    // 활성화
    client.current.activate();

    // 연결 끊기
    return () => client.current.deactivate();
  }, [
    hasInfo,
    roomCode,
    setBingoName,
    setBingoHeadCount,
    setBingoSize,
    setQuestions,
    setUserAvatar,
    setUsers,
    setIsStarted,
    navigate,
  ]);

  return (
    <div>
      {isLoading ? (
        <Spinner text="게임 준비중" />
      ) : (
        <div className={style.container}>
          {isModalOpen && (
            <UserSettingModalOverlay
              setIsModalOpen={setIsModalOpen}
              client={client}
            />
          )}
          <BingoHeader />
          <BingoBoard client={client} boardRef={boardRef} />
          <MemoizedUserBoard userRef={userRef} />
        </div>
      )}
    </div>
  );
}

export default Bingo;
