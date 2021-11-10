
import {DESCRIPTIONS, MESSAGES, NAMES, POSTS_COUNT} from './data.js';
import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';
import {showPostPreview, fillPostData} from './post-preview.js';
import {createAndFillPostElement} from './miniatures.js';


function createPost(id, idx) {

  const randomId = () => parseInt(Date.now() * Math.random(), 10);

  function createComment (){

    const randomComment = {
      id: randomId(),
      avatar: `img/avatar-${getRandomPositiveInteger(1, 5)}.svg`,
      message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length-1)],
      name: NAMES[getRandomPositiveInteger(0, NAMES.length-1)],
    };
    return randomComment;
  }

  const newPost = {
    id: idx + 1,
    url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
    description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length-1)],
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: getRandomPositiveInteger(1,10)}, createComment)};
  return newPost;
}
const posts = () => Array.from({length: POSTS_COUNT}, createPost);
const postsList = posts();
const postsWrapper = document.querySelector('.pictures');

postsList.forEach((post)=> {
  const element = createAndFillPostElement(post);
  const postElement = element.querySelector('.picture');
  postElement.addEventListener('click', (event) => {
    const selectedPost = postsList.find((item) => item.id === +event.target.dataset.id);
    if(!selectedPost) {
      return;
    }
    showPostPreview();
    fillPostData(selectedPost);
  });

  postsWrapper.append(element);
});
