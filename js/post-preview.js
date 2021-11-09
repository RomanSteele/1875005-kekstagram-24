import {posts} from './main.js';

const pageBody = document.querySelector('body');
const postPreview = pageBody.querySelector('.big-picture');
const commentsCounter = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentList = document.querySelector('.social__comments');
//const closeButtonElement = document.querySelector('.big-picture__cancel');
//const buttonElement = document.querySelector('.pictures');

function showPostPreview(){
  postPreview.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  commentsCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');
}

showPostPreview();

function closePostPreview(){
  postPreview.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  commentsCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');
}


/*function hidePostPreview(){
  postPreview.classList.add('hidden');
  pageBody.classList.remove('modal-open');
}*/

function fillPostData(postData){

  const postImage = postPreview.querySelector('.big-picture__img');
  postImage.setAttribute('src', postData.url);

  const likesCount = postPreview.querySelector('.likes-count');
  likesCount.textContent = postData.likes;

  const commentsCount = postPreview.querySelector('.comments-count');
  commentsCount.textContent = postData.comments.length;

  const postDescription = postPreview.querySelector('.social__caption');
  postDescription.textContent = postData.description;
}


const postsList = posts();
const randomPost = postsList[0];

fillPostData(randomPost);


function createFilledCommentElement (commentData){
  const element = document.createElement('li');
  element.classList.add('social__comment');
  const image = document.createElement('img');
  image.classList.add('social__picture');
  image.src = commentData.avatar;
  image.setAttribute('alt', commentData.name);
  image.setAttribute('width','35');
  image.setAttribute('height','35');
  element.appendChild(image);
  const para = document.createElement('p');
  para.textContent = commentData.message;
  element.appendChild(para);
  return element;
}

postsList.forEach(() => {
  const commentElement = createFilledCommentElement(randomPost.comments);
  commentList.append(commentElement);
});


/*function createCommentElement () {
  return fillComment(randomPost.comments);
}

postsList.forEach(() => {
  const commentElement = createCommentElement();
  fillComment (commentElement, randomPost.comments);
  commentList.append(commentElement);
});
*/
