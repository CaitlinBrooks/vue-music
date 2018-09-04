<template>
  <div class="results">
    <h1>Song Search Results</h1>
    <div v-for="song in songResults">
      <button type="button" @click="addSong(song)">Add a Song</button>
      <audio controls>
        <source :src="song.previewUrl" type="audio/mpeg">
      </audio>
      <img :src="song.coverArt" alt="coverArt">
      <p>Title: {{song.title}}</p>
      <p>Artist: {{song.artist}}</p>
      <p>Price: {{song.price}}</p>
      <p>Album: {{song.album}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'results',
    data() {
      return {}
    },
    methods: {
      addSong(song) {
        this.$store.dispatch('addSong', song)
      }
    },
    computed: {
      songResults() {
        return this.$store.state.songs
      }
    },
    components: {}
  }
</script>