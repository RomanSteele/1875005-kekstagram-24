const pageBody = document.querySelector('body');
const postPreview = pageBody.querySelector('.big-picture');
const commentList = document.querySelector('.social__comments');
const closeButtonElement = document.querySelector('.big-picture__cancel');


function showPostPreview(){
  postPreview.classList.remove('hidden');
  pageBody.classList.add('modal-open');
}

function hidePostPreview(){
  postPreview.classList.add('hidden');
  pageBody.classList.remove('modal-open');
}

closeButtonElement.addEventListener('click', ()=>{
  hidePostPreview();
});

document.addEventListener('keydown', (evt) =>{
  if(evt.key === 'Escape') {
    hidePostPreview();
  }
});

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
  postData.comments.forEach((comment) => {
    const commentElement = createFilledCommentElement(comment);
    commentList.append(commentElement);
  });
}


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

export{showPostPreview, fillPostData};
