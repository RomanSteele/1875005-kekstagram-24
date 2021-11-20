const uploadedImagePreview = document.querySelector('.img-upload__preview');
const sliderEffectWrapper = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectsContainer = document.querySelector('.effects__list');
const EFFECT_TYPES = {
  none: 'none',
  chrome: 'chrome',
  sepia: 'sepia',
  marvin: 'marvin',
  phobos: 'phobos',
  heat: 'heat',
};

const makeImageSmaller = document.querySelector('.scale__control--smaller');
const makeImageBigger = document.querySelector('.scale__control--bigger');
const imageSize = document.querySelector('.scale__control--value');

function imageScaleHandler(event) {
  const biggerClass = 'scale__control--bigger';
  if(event.target.classList.contains(biggerClass)) {
    if(parseInt(imageSize.value, 10) < 100 && 25 <= parseInt(imageSize.value, 10)) {
      imageSize.value = `${parseInt(imageSize.value,10) + 25}%`;
      uploadedImagePreview.style.transform = `scale(0.${parseInt(imageSize.value,10)})`;
    }

    if(parseInt(imageSize.value, 10) === 100) {
      uploadedImagePreview.style.transform = 'scale(1)';
    }
    return;
  }

  if(parseInt(imageSize.value, 10) <= 100 && 25 < parseInt(imageSize.value, 10)) {
    imageSize.value = `${parseInt(imageSize.value, 10) - 25}%`;
    uploadedImagePreview.style.transform = `scale(0.${parseInt(imageSize.value, 10)})`;
  }
}
function updateEffect(initialValue, effectName) {
  sliderEffectWrapper.classList.remove('hidden');
  valueElement.value = initialValue;
  sliderElement.noUiSlider.set(initialValue);
  uploadedImagePreview.className = '';
  uploadedImagePreview.classList.add('img-upload__preview');
  uploadedImagePreview.classList.add(`effects__preview--${effectName}`);
}
function imageEffectHandler(event) {
  if(!event.target.value) {
    return;
  }

  const effectType = event.target.value;

  if(effectType === EFFECT_TYPES.none) {
    resetEffect();
  }

  if(effectType === EFFECT_TYPES.chrome) {
    updateEffect(1, EFFECT_TYPES.chrome);
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadedImagePreview.style.filter = `grayscale(${parseFloat(valueElement.value)})`;
    });
  }

  if(effectType === EFFECT_TYPES.sepia) {
    updateEffect(1, EFFECT_TYPES.sepia);
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadedImagePreview.style.filter = `sepia(${parseFloat(valueElement.value)})`;
    });
  }

  if(effectType === EFFECT_TYPES.marvin) {
    updateEffect(100, EFFECT_TYPES.marvin);
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadedImagePreview.style.filter = `invert(${parseFloat(valueElement.value)}%)`;
    });
  }

  if(effectType === EFFECT_TYPES.phobos) {
    updateEffect(3, EFFECT_TYPES.phobos);
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadedImagePreview.style.filter = `blur(${parseFloat(valueElement.value)}px)`;
    });
  }

  if(effectType === EFFECT_TYPES.heat) {
    updateEffect(3, EFFECT_TYPES.heat);
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadedImagePreview.style.filter = `brightness(${parseFloat(valueElement.value)})`;
    });
  }
}

makeImageSmaller.addEventListener('click', imageScaleHandler);
makeImageBigger.addEventListener('click', imageScaleHandler);
effectsContainer.addEventListener('click', imageEffectHandler);

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

function resetEffect() {
  sliderEffectWrapper.classList.add('hidden');
  valueElement.value = '';
  uploadedImagePreview.className = '';
  uploadedImagePreview.classList.add('img-upload__preview');
  uploadedImagePreview.style.filter = '';
}
function resetScale() {
  imageSize.value = `${100}%`;
  uploadedImagePreview.style.transform = '';
}

export {resetEffect, resetScale, imageScaleHandler, imageEffectHandler};
