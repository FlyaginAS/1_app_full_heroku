import updateMiniCards from './miniCards';
import updateMiniFreshArticle from './miniFreshArticle';
import updateMiniFreshVideo from './miniFreshVideo';
import updatePopularArticles from './popularArticles';
import updateArticle from './article';

const reducer = (state, action) => {
  return {
    miniCards: updateMiniCards(state, action),
    miniFreshArticle: updateMiniFreshArticle(state, action),
    miniFreshvideo: updateMiniFreshVideo(state, action),
    popularArticles: updatePopularArticles(state, action),
    article: updateArticle(state, action),
  };
};

export default reducer;
