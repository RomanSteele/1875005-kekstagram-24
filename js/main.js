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

//4.9

const eachArray = (currentLength)  => {
  const array = new Array(currentLength);
  return Math.floor(Math.random() * (array.length));
};

const DESCRIPTIONS = [
  'Приятно, граждане, наблюдать, как стремящиеся вытеснить традиционное производство, нанотехнологии, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут заблокированы в рамках своих собственных рациональных ограничений.',
  'Кстати, действия представителей оппозиции, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут призваны к ответу.',
  'Прежде всего, понимание сути ресурсосберегающих технологий, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.',
  'Таким образом, постоянный количественный рост и сфера нашей активности напрямую зависит от переосмысления внешнеэкономических политик.',
  'Противоположная точка зрения подразумевает, что сделанные на базе интернет-аналитики выводы формируют глобальную экономическую сеть и при этом - своевременно верифицированы.',
  'Равным образом, внедрение современных методик однозначно фиксирует необходимость системы массового участия.',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Егор',
  'Света',
  'Артем',
  'Оксана',
  'Николай',
  'Екатерина',
];

const POSTS_COUNT = 25;

const randomName = Math.floor(Math.random() * NAMES.length);
const randomMessage = Math.floor(Math.random() * MESSAGES.length);
const randomDescription = Math.floor(Math.random() * DESCRIPTIONS.length);

const commentArray = () => ({
  id: eachArray(250)+1,
  avatar: `img/${  eachArray(6)+1  }.svg`,
  message: MESSAGES[randomMessage],
  name: NAMES[randomName],
});

const createPost = () => ({
  id: eachArray(24)+1,
  url: `photos/${  eachArray(6)+1  }.jpg`,
  description: DESCRIPTIONS[randomDescription],
  likes: eachArray(185)+15,
  comments: commentArray(),
});

const posts = Array.from({length: POSTS_COUNT}, createPost);

posts;
