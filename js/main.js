//Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomNumber(min , max) {
  let randomNumber;
  if(max > min & Math.sign(max)>=0 & Math.sign(min)>=0){
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  }
  return 'Alert!';
}

getRandomNumber(0,100);

//Функция для проверки максимальной длины строки.

function getCheckLength (checkMaxLength, maxLength){
  return !(checkMaxLength.length >= maxLength);
}
getCheckLength(0,100);
