const shutDownFormButton = document.querySelector('#upload-cancel');
const formElement = document.querySelector('#upload-file');
const hashTagChecker = /^#[A-Za-zА-Я-а-яЁё0-9]{1,19}$/;
const hashTagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');

function showFormAdder (){
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
}

function hideFormAdder(){
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}

shutDownFormButton.addEventListener('click', ()=>{
  hideFormAdder();
});

document.addEventListener('keydown', (evt) =>{
  if(evt.key === 'Escape' && hashTagChecker.onblur){
    hideFormAdder();
  }
});

document.querySelector('#upload-file').onElementChange = formElement.addEventListener('change', () => {
  showFormAdder();
});

hashTagInput.addEventListener('change', () => {
  const hashTagArray = hashTagInput.split(' ');
  if(hashTagArray.length <= 5){
    if(hashTagArray.some((hashtag)=> {hashTagChecker.test(hashtag) === true;}) === true) {
      return
    }
  } else {
    hashTagInput.setCustomValidity('Not Valid!');
  }
});

