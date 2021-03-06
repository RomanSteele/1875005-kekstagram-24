import {showPostPreview, fillPostData} from './post-preview.js';
import {createAndFillPostElement} from './miniatures.js';
import {setUserFormSubmit,hideFormAdder} from './form.js';
import {debounce} from './utils/debounce.js';
import './picture.js';
const RANDOM_POSTS_ARRAY_LENGTH = 10;
const POPULAR_POSTS_ARRAY_LENGTH = 10;

const postsWrapper = document.querySelector('.pictures');
const renderSimilarList = (similarPosts) => {
  similarPosts.forEach((post)=> {
    const element = createAndFillPostElement(post);
    const postElement = element.querySelector('.picture');
    postElement.addEventListener('click', (event) => {
      const selectedPost = similarPosts.find((item) => item.id === +event.target.dataset.id);
      if(!selectedPost) {
        return;
      }
      showPostPreview();
      fillPostData(selectedPost);
    });

    postsWrapper.append(element);
  });
};

fetch('https://24.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => {
    renderSimilarList(data);

    const popular = [...data].sort((adx, bdx) => bdx.comments.length - adx.comments.length).slice(0, POPULAR_POSTS_ARRAY_LENGTH);
    const randomPosts = [];

    for(let idx = 0; idx < RANDOM_POSTS_ARRAY_LENGTH; idx++) {
      const randomindex = Math.floor(Math.random() * data.length);
      const elem = data[randomindex];
      if(randomPosts.find((item) => item.id === elem.id)) {
        idx--;
        continue;
      }
      randomPosts.push(elem);
    }

    document.querySelector('.img-filters').classList.remove('img-filters--inactive');

    const defaultFilter = document.querySelector('#filter-default');
    const randomFilter = document.querySelector('#filter-random');
    const discussedFilter = document.querySelector('#filter-discussed');

    defaultFilter.addEventListener('click', debounce(() => {
      document.querySelectorAll('.picture').forEach((element) => {
        element.remove();
      });
      defaultFilter.classList.add('img-filters__button--active'),
      randomFilter.classList.remove('img-filters__button--active');
      discussedFilter.classList.remove('img-filters__button--active');
      renderSimilarList(data);
    }));

    randomFilter.addEventListener('click', debounce(() => {
      document.querySelectorAll('.picture').forEach((element) => {
        element.remove();
      });
      randomFilter.classList.add('img-filters__button--active'),
      defaultFilter.classList.remove('img-filters__button--active');
      discussedFilter.classList.remove('img-filters__button--active');
      renderSimilarList(randomPosts);
    }));

    discussedFilter.addEventListener('click', debounce(() => {
      document.querySelectorAll('.picture').forEach((element) => {
        element.remove();
      });
      discussedFilter.classList.add('img-filters__button--active'),
      defaultFilter.classList.remove('img-filters__button--active');
      randomFilter.classList.remove('img-filters__button--active');
      debounce(renderSimilarList(popular));
    }));
  });

setUserFormSubmit(hideFormAdder);
