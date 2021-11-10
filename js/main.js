
import {DESCRIPTIONS, MESSAGES, NAMES, POSTS_COUNT} from './data.js';
import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';

function createPost(id, idx) {

  const randomName = Math.floor(Math.random() * NAMES.length);
  const randomMessage = Math.floor(Math.random() * MESSAGES.length);
  const randomDescription = Math.floor(Math.random() * DESCRIPTIONS.length);

  const randomId = () => parseInt(Date.now() * Math.random(), 10);

  function createComment (){

    const randomComment = {
      id: randomId(),
      avatar: `img/${getRandomPositiveInteger(1, 6)}.svg`,
      message: MESSAGES[randomMessage],
      name: NAMES[randomName],
    };
    return randomComment;
  }

  const newPost = {
    id: idx + 1,
    url: `photos/${getRandomPositiveInteger(1, 6)}.jpg`,
    description: DESCRIPTIONS[randomDescription],
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: getRandomPositiveInteger(1,200)}, createComment)};
  return newPost;
}
const posts = () => Array.from({length: POSTS_COUNT}, createPost);

posts();

export {posts};
