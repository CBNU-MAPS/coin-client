function shuffleArray(array) {
  const newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const temp = array[index];
    newArray[index] = array[randomIndex];
    newArray[randomIndex] = temp;
  }

  return newArray;
}

export default shuffleArray;
