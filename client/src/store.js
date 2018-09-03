import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Song from './models/song.js'

Vue.use(Vuex)

// @ts-ignore
let itunesApi = Axios.create({
  baseURL: 'https://itunes.apple.com/',
  timeout: 5000
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
