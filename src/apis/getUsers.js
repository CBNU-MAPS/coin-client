async function getUsers(roomCode) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/users?roomCode=${roomCode}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const { users } = await response.json();

    return users;
  } catch (error) {
    throw new Error(error);
  }
}

export default getUsers;
