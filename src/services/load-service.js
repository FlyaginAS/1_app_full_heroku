export default class LoadService {
  //обращение к локалхосту так http://localhost:3000/api/v1/articles
  // _apiBase = 'http://localhost:3000/api/v1';
  _apiBase = 'https://ancient-woodland-50610..herokuapp.com/api/v1';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, reveived ${res.status}`);
    }
    return await res.json();
  };

  getArticles = async (location, topic) => {
    //?topic=css
    const res = await this.getResource(`/${location}?topic=${topic}`);

    return res.data[location];
  };

  getArticle = async (location, id) => {
    const res = await this.getResource(`/${location}/${id}`);
    //из-за особенностей бэкенда data:{article:{}} надо у переменной локейшен обрезать последнюю букву -букву "s"
    let location2 = location.slice(0, location.length - 1);

    return res.data[location2];
  };

  // getVideos = async (topic) => {
  //   const res = await this.getResource(`/videos?topic=${topic}&sort=fresh`);
  //   return res.data.videos;
  // };

  // getResources = async (topic) => {
  //   const res = await this.getResource(`/resources?topic=${topic}`);
  //   return res.data.sources;
  // };

  getMiniCards = async (topic, sort, loc) => {
    let sortBy = sort === 'fresh' ? 'createdAt' : 'views';
    const res = await this.getResource(
      //отфильтровали,отсортировали и убрали поле body-чтобы не грузить лишнее
      `/${loc}?topic=${topic}&sort=${sortBy}&fields=-body`
    );

    return res.data[loc];
  };
}
