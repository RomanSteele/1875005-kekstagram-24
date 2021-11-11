const similarPostsTemplate = document.querySelector('#picture').content;
const similarListFragment = document.createDocumentFragment();

const createAndFillPostElement = ({url,likes,comments, id}) => {
  const postElement = similarPostsTemplate.cloneNode(true);
  postElement.querySelector('.picture__img').setAttribute('data-id', id);
  postElement.querySelector('.picture__img').src = url;
  postElement.querySelector('.picture__likes').textContent = likes;
  postElement.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.appendChild(postElement);

  return similarListFragment;
};

export {createAndFillPostElement};
