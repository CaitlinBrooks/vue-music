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

let playlistApi = Axios.create({
  baseURL: '//localhost:300/api',
  timeout: 5000
})


export default new Vuex.Store({
  state: {
    songs: [],
    playlist: []
  },
  mutations: {
    setSongs(state, songs) {
      state.songs = songs
    },
    setPlaylist(state, playlist) {
      state.playlist = playlist
    }
  },
  actions: {
    // getMusicByArtist(artist) {

    searchSongs({ dispatch, commit }, artist) {
      itunesApi.get(`search?term=${artist}`)
        .then(res => {
          let songList = res.data.results.map(song => new Song(song))
          commit('setSongs', songList)
        })
    },
    getSongs({ commit, dispatch }) {
      itunesApi.get('/songs')
        .then(res => {
          commit('setPlaylist', res.data)
        })
    },

  })


}
