//Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomPositiveInteger (a1, b1) {
  const lower = Math.ceil(Math.min(Math.abs(a1), Math.abs(b1)));
  const upper = Math.floor(Math.max(Math.abs(a1), Math.abs(b1)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger;
//Функция для проверки максимальной длины строки.

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength;

//4.9

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

const createPost = (id,idx) => {

  const randomName = Math.floor(Math.random() * NAMES.length);
  const randomMessage = Math.floor(Math.random() * MESSAGES.length);
  const randomDescription = Math.floor(Math.random() * DESCRIPTIONS.length);

  const randomId = () => parseInt(Date.now() * Math.random(),10);

  const createComment = {
    id: randomId(),
    avatar: `img/${  getRandomPositiveInteger(1,6)  }.svg`,
    message: MESSAGES[randomMessage],
    name: NAMES[randomName],
  };

  const newPost ={
    id: idx+1,
    url: `photos/${  getRandomPositiveInteger(1,6)  }.jpg`,
    description: DESCRIPTIONS[randomDescription],
    likes: getRandomPositiveInteger(15,200),
    comments: createComment,
  };
  return newPost;
};
const posts = Array.from({length: POSTS_COUNT}, createPost);

posts;
