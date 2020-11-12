const BASE_URL = 'http://ukrmotorwprest.com/wp-json/acf/v3';

export const state = () => ({
  services: null,
  articles: null,
  gallery: null,
  general: null
})

export const getters = {
  allPhotos(state) {
    const all = JSON.parse(JSON.stringify(state.gallery));
    const res = [];
    while (all.length > 0) {
      res.push(all.splice(0,9))
    }
    return res;
  }
}

export const mutations = {
  setServices(state, payload) {
    state.services = payload;
  },
  setArticles(state, payload) {
    state.articles = payload;
  },
  setGallery(state, payload) {
    state.gallery = payload;
  },
  setGeneral(state, payload) {
    state.general = payload;
  }
}

export const actions = {
  async fetchServices({ commit }) {
    const data = await this.$axios.get(`${BASE_URL}/services`);
    commit('setServices', data.data);
  },
  async fetchArticles({ commit }) {
    const data = await this.$axios.get(`${BASE_URL}/articles`);
    commit('setArticles', data.data);
  },
  async fetchGallery({ commit }) {
    const data = await this.$axios.get(`${BASE_URL}/gallery`);
    commit('setGallery', data.data[0].acf.gallery.map(item => item.url));
  },
  async fetchGeneral({ commit }) {
    const data = await this.$axios.get(`${BASE_URL}/general`);
    console.log(data.data)
    commit('setGeneral', data.data[0].acf);
  }
}