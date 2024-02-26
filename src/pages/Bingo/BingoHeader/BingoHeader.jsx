import React from 'react';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';

import style from './BingoHeader.module.scss';
import useBingoInfoStore from '../../../stores/bingoInfoStore';
import LinkCopyIcon from '../../../Icons/LinkCopyIcon';
import 'react-toastify/dist/ReactToastify.css';

function BingoHeader() {
  const bingoName = useBingoInfoStore((state) => state.bingoName);
  const location = useLocation();

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
    </div>
  );
}

export default BingoHeader;
