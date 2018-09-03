import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

// @ts-ignore
let itunesApi = Axios.create({
  baseURL: 'https://itunes.apple.com/search?callback=?&term=',
  timeout: 3000
})


export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    // getMusicByArtist(artist) {
  }
})
