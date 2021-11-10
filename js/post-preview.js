import {posts} from './main.js';

const pageBody = document.querySelector('body');
const postPreview = pageBody.querySelector('.big-picture');
const commentsCounter = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentList = document.querySelector('.social__comments');
//const postSection = document.querySelector('section');
const closeButtonElement = document.querySelector('.big-picture__cancel');
//const buttonElement = document.querySelectorAll('.picture');

function showPostPreview(){
  postPreview.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  commentsCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');
}

showPostPreview();


closeButtonElement.addEventListener('click', ()=>{
  postPreview.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  commentsCounter.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
});

document.addEventListener('keydown', (evt) =>{
  if(evt.key === 'Escape') {
    postPreview.classList.add('hidden');
    pageBody.classList.remove('modal-open');
    commentsCounter.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
  }
});

function fillPostData(postData){

  const postImage = postPreview.querySelector('.big-picture__img');
  postImage.setAttribute('src', postData.url);

  const likesCount = postPreview.querySelector('.likes-count');
  likesCount.textContent = postData.likes;

  const commentsCount = postPreview.querySelector('.comments-count');
  commentsCount.textContent = postData.comments.length;

  const postDescription = postPreview.querySelector('.social__caption');
  postDescription.textContent = postData.description;

  postData.comments.forEach((comment) => {
    const commentElement = createFilledCommentElement(comment);
    commentList.append(commentElement);
  });
}

const postsList = posts();
const randomPost = postsList[0];

fillPostData(randomPost);


function createFilledCommentElement (commentData){
  const element = document.createElement('li');
  element.classList.add('social__comment');
  const image = document.createElement('img');
  image.classList.add('social__picture');
  image.setAttribute('src', commentData.avatar);
  image.setAttribute('alt', commentData.name);
  image.setAttribute('width','35');
  image.setAttribute('height','35');
  element.appendChild(image);
  const para = document.createElement('p');
  para.textContent = commentData.message;
  element.appendChild(para);
  return element;
}

/*
///const selectedPost =

//document.getElementById('a').onclick = function() {
//return

//};

buttonElement.addEventListener('click', ()=>{
  postPreview.classList.remove('hidden');
});

const pictureClicked = document.getElementsByTagName('picture');
for (let i=0; i< pictureClicked.length;i++) {
  pictureClicked[i].onclick = showPostPreview(similarListFragment[i]);
}
*/
