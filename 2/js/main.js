//https://ru.stackoverflow.com/questions/863591/%D0%A1%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B5-%D1%87%D0%B8%D1%81%D0%BB%D0%BE-%D0%BE%D1%82-1-%D0%B4%D0%BE-100

const getRandomInt = function (left, right) {
  if (right < left) {
    return null;
  }
  return (Math.floor(Math.random() * (right - left + 1) + left));
};

const checkLengthStr = function (checkString, maxLength) {
  return (checkString.length <= maxLength);
};

getRandomInt(0, 100);
checkLengthStr('javascript', 50);
