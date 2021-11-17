import {showPostPreview, fillPostData} from './post-preview.js';
import {createAndFillPostElement} from './miniatures.js';
import {setUserFormSubmit,hideFormAdder} from './form.js';
import './sliders.js';


const postsWrapper = document.querySelector('.pictures');
const renderSimilarList = (similarPosts) => {
  similarPosts.forEach((post)=> {
    const element = createAndFillPostElement(post);
    const postElement = element.querySelector('.picture');
    postElement.addEventListener('click', (event) => {
      const selectedPost = similarPosts.find((item) => item.id === +event.target.dataset.id);
      if(!selectedPost) {
        return;
      }
      showPostPreview();
      fillPostData(selectedPost);
    });

    postsWrapper.append(element);
  });
};


fetch('https://24.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => {
    renderSimilarList(data);
  },
  );


setUserFormSubmit(hideFormAdder);
