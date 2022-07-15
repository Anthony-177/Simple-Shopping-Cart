import Vue from "vue";
import Vuex from "vuex";
// import products from "@/mock/products.json";
 
import mango from '@/assets/mango.jpg'
import pinia from '@/assets/pinia.jpg'
import orange from '@/assets/orange.jpg'
import water from '@/assets/water.jpg'

Vue.use(Vuex);

const state = {
  products: [
 
    {
      id: 1,
      title: "Mango",
      price: 1500,
      imgUrl: mango
    },
    {
      id: 2,
      title: "Pinia",
      price: 1600,
      imgUrl: pinia
    },
    {
      id: 3,
      title: "Orange",
      price: 1700,
      imgUrl: orange
    },
    {
      id: 4,
      title: "Water",
      price: 1800,
      imgUrl: water
    },
  ],
  cart: [],
};

const getters = {
  products: (state) => state.products,
  cart: (state) => state.cart,
};

const actions = {

  addItemToCart({ commit }, item) {
    commit("addToCart", item);
  },
  removeItemFromCart({ commit }, id) {
    commit("removeFromCart", id);
  },
  addQty({ commit }, id) {
    commit("addQty", id);
  },
  reduceQty({ commit }, id) {
    commit("reduceQty", id);
  },
  emptyCart({ commit }) {
    commit("emptyCart");
  }
};
const mutations = {
  
  addToCart(state, item) {
    const productInCart = state.cart.find((product) => product.id === item.id);
    if (!productInCart) {
      state.cart.push({ ...item, qty: 1 });
    } else {
      productInCart.qty++;
    }
  },
  removeFromCart(state, id) {
    state.cart = state.cart.filter((item) => item.id !== id);
  },
  addQty(state, id) {
    const productInCart = state.cart.find((product) => product.id === id);
    productInCart.qty++;
  },
  reduceQty(state, id) {
    const productInCart = state.cart.find((product) => product.id === id);
    if (productInCart.qty > 1) {
      productInCart.qty--;
    } else {
      state.cart.splice(state.cart.indexOf(productInCart, 1));
    }
  },
  emptyCart(state) {
    state.cart = []
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
