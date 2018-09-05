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
//https://itunes.apple.com/search?callback=?&term=

let mytunesApi = Axios.create({
  baseURL: '//localhost:3000/api',
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

    searchMusic({ dispatch, commit }, artist) {
      itunesApi.get(`search?term=${artist}`)
        .then(res => {
          let songList = res.data.results.map(song => new Song(song))
          commit('setSongs', songList)
        })
    },
    getSongs({ commit, dispatch }) {
      mytunesApi.get('/songs')
        .then(res => {
          commit('setPlaylist', res.data)
        })

    },
    addSong({ dispatch, commit }, song) {
      mytunesApi.post('/songs', song)
        .then(res => {
          console.log('Song Added', res)
          dispatch('getSongs')
        })
    },
    deleteSong({ dispatch, commit }, song) {
      mytunesApi.delete('/songs/' + song._id)
        .then(res => {
          console.log('Song Deleted', res)
          dispatch('getSongs')
        })
    }
  }
})
