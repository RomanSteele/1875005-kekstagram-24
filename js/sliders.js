const shutDownFormButton = document.querySelector('#upload-cancel');
const makeImageSmaller = document.querySelector('.scale__control--smaller');
const makeImageBigger = document.querySelector('.scale__control--bigger');
const imageSize = document.querySelector('.scale__control--value');
const uploadedImagePreview = document.querySelector('.img-upload__preview');
const form = document.querySelector('#upload-select-image');


imageSize.value = `${100  }%`;

makeImageSmaller.addEventListener('click', () =>{
  if(parseInt(imageSize.value,10) <= 100 && 25 < parseInt(imageSize.value,10)){

    imageSize.value = `${parseInt(imageSize.value,10)-25  }%`;
    uploadedImagePreview.style.transform = `scale(0.${parseInt(imageSize.value,10)})`;
  }
});

makeImageBigger.addEventListener('click', () =>{

  if(parseInt(imageSize.value,10) < 100 && 25 <= parseInt(imageSize.value,10)){

    imageSize.value = `${parseInt(imageSize.value,10) + 25  }%`;
    uploadedImagePreview.style.transform = `scale(0.${parseInt(imageSize.value,10)})`;  }

  if(parseInt(imageSize.value,10) === 100) {
    uploadedImagePreview.style.transform = 'scale(1)';
  }

});

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

valueElement.value = 0;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});


const effectRadioButton = document.querySelectorAll('.effects__radio');


effectRadioButton.forEach((element) => {

  sliderElement.classList.add('hidden');

  element.addEventListener('click', () => {
    if(element.value === 'none') {
      sliderElement.classList.add('hidden');
      valueElement.value = 0;
      sliderElement.noUiSlider.set(0);
      uploadedImagePreview.classList = 'img-upload__preview';
    }
  });


  element.addEventListener('click', () => {
    if(element.value === 'chrome') {
      sliderElement.classList.remove('hidden');
      valueElement.value = 0;
      sliderElement.noUiSlider.set(0);
      uploadedImagePreview.classList = 'img-upload__preview';
      uploadedImagePreview.classList.add('effects__preview--chrome');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 0,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', (values, handle) => {
        valueElement.value = values[handle];
        uploadedImagePreview.style.filter = `grayscale( ${parseFloat(valueElement.value)})`;
      });
    }
  });


  element.addEventListener('click', () => {

    if(element.value === 'sepia') {
      sliderElement.classList.remove('hidden');
      valueElement.value = 0;
      sliderElement.noUiSlider.set(0);
      uploadedImagePreview.classList = 'img-upload__preview';
      uploadedImagePreview.classList.add('effects__preview--sepia');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 0,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', (values, handle) => {
        valueElement.value = values[handle];
        uploadedImagePreview.style.filter = `sepia( ${parseFloat(valueElement.value)})`;
      });
    }
  });


  element.addEventListener('click', () => {
    if(element.value === 'marvin') {
      sliderElement.classList.remove('hidden');
      valueElement.value = 0;
      sliderElement.noUiSlider.set(0);
      uploadedImagePreview.classList = 'img-upload__preview';
      uploadedImagePreview.classList.add('effects__preview--marvin');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 0,
        step: 1,
      });
      sliderElement.noUiSlider.on('update', (values, handle) => {
        valueElement.value = values[handle];
        uploadedImagePreview.style.filter = `invert( ${parseFloat(valueElement.value)}%)`;
      });
    }
  });


  element.addEventListener('click', () => {
    if(element.value === 'phobos') {
      sliderElement.classList.remove('hidden');
      valueElement.value = 0;
      sliderElement.noUiSlider.set(0);
      uploadedImagePreview.classList = 'img-upload__preview';
      uploadedImagePreview.classList.add('effects__preview--phobos');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 0,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', (values, handle) => {
        valueElement.value = values[handle];
        uploadedImagePreview.style.filter = `blur( ${parseFloat(valueElement.value)}px)`;
      });
    }
  });


  element.addEventListener('click', () => {
    if(element.value === 'heat') {
      sliderElement.classList.remove('hidden');
      valueElement.value = 0;
      sliderElement.noUiSlider.set(0);
      uploadedImagePreview.classList = 'img-upload__preview';
      uploadedImagePreview.classList.add('effects__preview--heat');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 0,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', (values, handle) => {
        valueElement.value = values[handle];
        uploadedImagePreview.style.filter = `brightness( ${parseFloat(valueElement.value)})`;
      });
    }
  });
});


shutDownFormButton.addEventListener('click', ()=>{
  valueElement.value = 0;
  sliderElement.noUiSlider.set(0);
  uploadedImagePreview.classList = 'img-upload__preview';
  sliderElement.classList.add('hidden');
});

form.addEventListener('submit', () => {
  valueElement.value = 0;
  sliderElement.noUiSlider.set(0);
  uploadedImagePreview.classList = 'img-upload__preview';
  sliderElement.classList.add('hidden');
});
