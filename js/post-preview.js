const pageBody = document.querySelector('body');
const postPreview = pageBody.querySelector('.big-picture');
const commentList = document.querySelector('.social__comments');
const closeButtonElement = document.querySelector('.big-picture__cancel');
const loadMoreComments = document.querySelector('.comments-loader');
const commentsDisplayed = postPreview.querySelector('.showed__comments-count');

let postComments = [];
let displayedComments = [];

function showPostPreview(){
  postPreview.classList.remove('hidden');
  pageBody.classList.add('modal-open');
}

function hidePostPreview(){
  postPreview.classList.add('hidden');
  pageBody.classList.remove('modal-open');

  loadMoreComments.classList.remove('hidden');
  postComments = [];
  displayedComments = [];
}

closeButtonElement.addEventListener('click', ()=>{
  hidePostPreview();
});

document.addEventListener('keydown', (evt) =>{
  if(evt.key === 'Escape') {
    hidePostPreview();
  }
});

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

function fillPostData(postData){

  const postImage = postPreview.querySelector('.big-picture__img img');
  postImage.setAttribute('src', postData.url);

  const likesCount = postPreview.querySelector('.likes-count');
  likesCount.textContent = postData.likes;

  const commentsCount = postPreview.querySelector('.comments-count');
  commentsCount.textContent = postData.comments.length;

  const postDescription = postPreview.querySelector('.social__caption');
  postDescription.textContent = postData.description;


  commentList.textContent = '';

  if(postData.comments.length <= 5) {
    loadMoreComments.classList.add('hidden');
    commentsDisplayed.textContent = postData.comments.length;
    postData.comments.forEach((comment) => {
      const commentElement = createFilledCommentElement(comment);
      commentList.append(commentElement);
    });

    return;
  }

  postComments = [...postData.comments];
  displayedComments = postComments.slice(displayedComments.length, displayedComments.length + 5);
  commentsDisplayed.textContent = displayedComments.length;
  displayedComments.forEach((comment) => {
    const commentElement = createFilledCommentElement(comment);
    commentList.append(commentElement);
  });
}

document.body.addEventListener('click', (evt)=>{
  if(loadMoreComments.contains(evt.target)) {
    commentList.textContent = '';
    displayedComments = [...displayedComments, ...postComments.slice(displayedComments.length, displayedComments.length +5)];
    commentsDisplayed.textContent = displayedComments.length;
    displayedComments.forEach((comment) => {
      const commentElement = createFilledCommentElement(comment);
      commentList.append(commentElement);
    });

    if(displayedComments.length === postComments.length) {
      loadMoreComments.classList.add('hidden');
    }
  }
});

export{showPostPreview, fillPostData};
