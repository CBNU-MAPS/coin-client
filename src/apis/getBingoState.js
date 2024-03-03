async function getBingoState(roomCode) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/board?roomCode=${roomCode}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const { statusBoardList } = await response.json();

    return statusBoardList;
  } catch (error) {
    throw new Error(error);
  }
}

export default getBingoState;
