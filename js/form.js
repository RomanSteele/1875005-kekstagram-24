
import {createGoodAlert, createBadAlert, hideAlert} from './utils/Alert.js';
import {resetEffect, resetScale} from './sliders.js';
import { isEsc } from './utils/helpers.js';


const pageBody = document.querySelector('body');
const form = document.querySelector('#upload-select-image');
const shutDownFormButton = document.querySelector('#upload-cancel');
const formElement = document.querySelector('#upload-file');
const hashTagChecker = /^#[A-Za-zА-Я-а-яЁё0-9]{1,19}$/;
const hashTagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const HASH_TAGS_MAX_COUNT = 5;
const sliderEffectWrapper = document.querySelector('.img-upload__effect-level');
const valueElement = document.querySelector('.effect-level__value');


function showFormAdder (){
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  sliderEffectWrapper.classList.add('hidden');
  valueElement.value = 0;
  resetScale();
}

function preventEsc(event) {
  event.stopPropagation();
}

function hideErrorMessage(event) {
  if(isEsc(event.key)){
    hideAlert(false);
    document.removeEventListener('keydown', hideErrorMessage);
    document.removeEventListener('click', hideErrorHandler());
  }
}

function hideSuccessMessage(event) {
  if(isEsc(event.key)){
    hideAlert(true);
    document.removeEventListener('keydown', hideSuccessMessage);
    document.removeEventListener('click', hideSuccessHandler());
  }
}

function hashTagHandler(evt) {
  const hashtagValue = String(evt.target.value.toLowerCase().trim());
  const hashTags = hashtagValue.split(' ');

  if(hashTags.length > HASH_TAGS_MAX_COUNT){
    hashTagInput.setCustomValidity(`Max hashtags count equal ${HASH_TAGS_MAX_COUNT}`);
    return;
  }
  const uniqTags = [...new Set(hashTags)];

  if(uniqTags.length !== hashTags.length) {
    hashTagInput.setCustomValidity('You should provide uniq tags');
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
}

function hideFormAdder(){
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  form.reset();
  resetEffect();
  hashTagInput.removeEventListener(('keydown'), preventEsc);
  hashTagInput.removeEventListener('keyup', hashTagHandler);
}

function hideSuccessHandler({target}) {
  const successBlock = document.querySelector('.success__inner');
  if(successBlock.contains(target)) {
    if(target.classList.contains('success__button')) {
      hideAlert(true);
      document.removeEventListener('click', hideSuccessHandler);
      document.removeEventListener('keydown', hideSuccessMessage);
      resetEffect();
    }
    return;
  }

  hideAlert(true);
  document.removeEventListener('click', hideSuccessHandler);
  document.removeEventListener('keydown', hideSuccessMessage);
  resetEffect();
}

function hideErrorHandler({target}) {
  const errorBlock = document.querySelector('.error__inner');
  if(errorBlock.contains(target)) {
    if(target.classList.contains('error__button')) {
      hideAlert(false);
      document.removeEventListener('click', hideErrorHandler);
      document.removeEventListener('keydown', hideErrorMessage);
    }
    return;
  }

  hideAlert(false);
  document.removeEventListener('click', hideErrorHandler);
  document.removeEventListener('keydown', hideErrorMessage);
}

function hideImageForm(event) {
  if(isEsc(event.key)){
    hideFormAdder();
  }
}

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
          document.addEventListener('click', hideSuccessHandler);
          document.addEventListener('keydown', hideSuccessMessage);
        } else {
          hideFormAdder();
          pageBody.appendChild(createBadAlert());
          document.addEventListener('click', hideErrorHandler);
          document.addEventListener('keydown', hideErrorMessage);
        }
      })
      .catch(() => {
        hideFormAdder();
        pageBody.appendChild(createBadAlert());
        document.addEventListener('click', hideErrorHandler);
        document.addEventListener('keydown', hideErrorMessage);
      });
  });
};


shutDownFormButton.addEventListener('click', ()=>{
  hideFormAdder();
});

document.addEventListener('keydown', hideImageForm);

formElement.addEventListener('change', () => {
  showFormAdder();
});

descriptionInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});


hashTagInput.addEventListener(('keydown'), preventEsc);
hashTagInput.addEventListener('keyup', hashTagHandler);

export {setUserFormSubmit,hideFormAdder};
