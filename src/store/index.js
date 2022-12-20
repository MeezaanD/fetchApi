import { createStore } from 'vuex'

export default createStore({
  state: {
    products: []
  },
  getters: {
    products(items) {
      return items.products;
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    fetchAllProducts(context) {
      return fetch('https://meezaand.github.io/productsAPI/data.json')
      .then((response) => response.json())
      .then((data) => {
        context.commit("setProducts", data.products);
      })
      .catch((err) => console.error(err));
    }
  },
  modules: {
  }
})
