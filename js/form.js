const form = document.querySelector('#upload-select-image');
const shutDownFormButton = document.querySelector('#upload-cancel');
const formElement = document.querySelector('#upload-file');
const hashTagChecker = /^#[A-Za-zА-Я-а-яЁё0-9]{1,19}$/;
const hashTagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const HASH_TAGS_MAX_COUNT = 5;

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
    // eslint-disable-next-line no-template-curly-in-string
    hashTagInput.setCustomValidity('Max hashtags count equal ${HASH_TAGS_MAX_COUNT}');
    return;
  }

  for (let i = 0; i < hashTags.length; i++){
    const hashTag = hashTags[i];
    const isValid = hashTagChecker.test(hashTag);

    if(!isValid){
      hashTagInput.setCustomValidity('Hashtag is not valid!');
      break;
    } else{
      hashTagInput.setCustomValidity('');
    }
  }

});


