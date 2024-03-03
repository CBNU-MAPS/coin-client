import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';

import style from './BingoHeader.module.scss';
import useBingoInfoStore from '../../../stores/bingoInfoStore';
import LinkCopyIcon from '../../../Icons/LinkCopyIcon';
import 'react-toastify/dist/ReactToastify.css';
import StatusBoard from './StatusBoard/StatusBoard';
import getBingoState from '../../../apis/getBingoState';

function BingoHeader() {
  const bingoName = useBingoInfoStore((state) => state.bingoName);
  const isStarted = useBingoInfoStore((state) => state.isStarted);
  const location = useLocation();
  const [isOpenStatusBoard, setIsOpenStatusBoard] = useState(false);
  const [statusBoardInfo, setStatusBoardInfo] = useState([]);
  const { roomCode } = useParams();

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast(' 🖇️ 링크가 복사되었습니다.');
      toast.clearWaitingQueue();
    } catch (err) {
      toast.error('링크 복사에 실패하였습니다.');
      toast.clearWaitingQueue();
    }
  };

  const openStatusBoard = async () => {
    const statusBoardList = await getBingoState(roomCode);

    setStatusBoardInfo(statusBoardList);
    setIsOpenStatusBoard(true);
  };

  return (
    <div className={style.header}>
      <div className={`${style.bingoName} bold32`}>{bingoName}</div>
      <ToastContainer
        toastClassName="bold18"
        toastStyle={{
          width: '250px',
          height: '10px',
          margin: '0 0 200px 70px',
          borderRadius: '10px',
          color: 'black',
          textAlign: 'center',
        }}
        position="bottom-center"
        autoClose={1500}
        closeButton={false}
        transition={Zoom}
        hideProgressBar
        limit={1}
      />

      {isStarted ? (
        <button
          type="button"
          aria-label="Bingo Board Check Button"
          className={`${style.copybutton} bold18`}
          onClick={openStatusBoard}>
          빙고 현황 보기
        </button>
      ) : (
        <button
          type="button"
          aria-label="Link Copy Button"
          className={`${style.copybutton} bold18`}
          onClick={() =>
            handleCopyClipBoard(
              `${import.meta.env.VITE_CLIENT_URL}${location.pathname}`,
            )
          }>
          <LinkCopyIcon />
          URL
        </button>
      )}
      {isOpenStatusBoard && (
        <StatusBoard
          statusBoardInfo={statusBoardInfo}
          setIsOpenStatusBoard={setIsOpenStatusBoard}
        />
      )}
    </div>
  );
}

export default BingoHeader;
