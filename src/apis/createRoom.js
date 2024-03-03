async function createRoom(bingoInfo) {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/room`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bingoInfo),
    });

    const { roomCode } = await response.json();

    return roomCode;
  } catch (error) {
    throw new Error(error);
  }
}

export default createRoom;
