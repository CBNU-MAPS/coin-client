async function getRoomInfo(roomCode) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/room?roomCode=${roomCode}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const { bingoName, bingoSize, bingoHeadCount, questions } =
      await response.json();

    return { bingoName, bingoSize, bingoHeadCount, questions };
  } catch (error) {
    throw new Error(error);
  }
}

export default getRoomInfo;
