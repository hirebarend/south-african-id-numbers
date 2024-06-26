export function checksum(str: string): number {
  return (
    10 -
    (str
      .split('')
      .reverse()
      .reduce((sum: number, x: string, currentIndex: number) => {
        if (currentIndex % 2 === 0) {
          sum += `${parseInt(x) * 2}`
            .split('')
            .reduce((s, y) => s + parseInt(y), 0);
        } else {
          sum += parseInt(x);
        }

        return sum;
      }, 0) %
      10)
  );
}

export function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
