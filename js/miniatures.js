import {posts} from './main.js';

const similarListElement = document.querySelector('.pictures');
const similarPostsTemplate = document.querySelector('#picture').content;

const similarPosts = posts();

const similarListFragment = document.createDocumentFragment();

similarPosts.forEach(({url,likes,comments}) => {
  const postElement = similarPostsTemplate.cloneNode(true);
  postElement.querySelector('.picture__img').src = url;
  postElement.querySelector('.picture__likes').textContent = likes;
  postElement.querySelector('.picture__comments').textContent = comments;
  similarListFragment.appendChild(postElement);
});

similarListElement.appendChild(similarListFragment);
