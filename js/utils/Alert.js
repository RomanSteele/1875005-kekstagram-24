
const badAlertTemplate = document.querySelector('#error').content;
const goodAlertTemplate = document.querySelector('#success').content;
const similarListFragment = document.createDocumentFragment();

const createBadAlert = () => {
  const postElement = badAlertTemplate.cloneNode(true);
  similarListFragment.appendChild(postElement);
  return similarListFragment;
};

const createGoodAlert = () => {
  const postElement = goodAlertTemplate.cloneNode(true);
  similarListFragment.appendChild(postElement);
  return similarListFragment;
};

export {createBadAlert,createGoodAlert};
