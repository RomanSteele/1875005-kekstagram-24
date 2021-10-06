//Функция, возвращающая случайное целое число из переданного диапазона включительно.

let randomNumber;
function getRandomNumber(min , max) {
  if(max > min & Math.sign(max)>=0 & Math.sign(min)>=0){
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  }
  return 'Alert!';
}

getRandomNumber(0,100);
console.log(getRandomNumber(0,100));


//Функция для проверки максимальной длины строки.

function getCheckLength (checkedLength, maxLength)
{
  if(checkedLength >= maxLength){
    return false;
  }
  return true;
}
getCheckLength(0,100);
console.log(getCheckLength (0,100));
