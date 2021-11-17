import {createGoodAlert, createBadAlert} from './utils/Alert.js';
const pageBody = document.querySelector('body');
const form = document.querySelector('#upload-select-image');
const shutDownFormButton = document.querySelector('#upload-cancel');
const formElement = document.querySelector('#upload-file');
const hashTagChecker = /^#[A-Za-zА-Я-а-яЁё0-9]{1,19}$/;
const hashTagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const HASH_TAGS_MAX_COUNT = 5;
//const errorButton = document.querySelector('.error__button');
//const successButton = document.querySelector('.success__button');

function showFormAdder (){
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
}

function hideFormAdder(){
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  form.reset();
}

shutDownFormButton.addEventListener('click', ()=>{
  hideFormAdder();
});

document.addEventListener('keydown', (evt) =>{
  if(evt.key === 'Escape'){
    hideFormAdder();
  }
});


formElement.addEventListener('change', () => {
  showFormAdder();
});

descriptionInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});


hashTagInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();

  const hashtagValue = String(evt.target.value.toLowerCase().trim());
  const hashTags = hashtagValue.split(' ');
  if(hashTags.length > HASH_TAGS_MAX_COUNT){
    hashTagInput.setCustomValidity(`Max hashtags count equal ${HASH_TAGS_MAX_COUNT}`);
    return;
  }

  for (let idx = 0; idx < hashTags.length; idx++){
    const hashTag = hashTags[idx];
    const isValid = hashTagChecker.test(hashTag);

    if(!isValid){
      hashTagInput.setCustomValidity('Hashtag is not valid!');
      break;
    } else{
      hashTagInput.setCustomValidity('');
    }
  }

});

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      'https://24.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
          pageBody.appendChild(createGoodAlert());
        } else {
          hideFormAdder();
          pageBody.appendChild(createBadAlert());
        }
      })
      .catch(() => {
        hideFormAdder();
        pageBody.appendChild(createBadAlert());
      });
  });
};


export {setUserFormSubmit,hideFormAdder};

/*
document.addEventListener('keydown', (evt) =>{
  if(evt.key === 'Escape') {
    document.querySelector('.success').classList.add('hidden');
    document.querySelector('.error').classList.add('hidden');
  }
});

document.addEventListener('click', () =>{
  document.querySelector('.success').classList.add('hidden');
  document.querySelector('.error').classList.add('hidden');
});
*/
