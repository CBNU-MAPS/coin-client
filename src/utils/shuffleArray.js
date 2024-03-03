function shuffleArray(array) {
  const newArray = Array.from(array);
  for (let index = 0; index < newArray.length; index += 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const temp = newArray[index];
    newArray[index] = newArray[randomIndex];
    newArray[randomIndex] = temp;
  }

  return newArray;
}

export default shuffleArray;
