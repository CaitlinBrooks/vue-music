<template>
  <div class="myTunes">
    <h1>MyTunes</h1>
    <div v-for="song in playlist">
      <button type="button" @click="deleteSong(song)">Delete Song</button>
      <audio controls>
        <source :src="song.preview" type="audio/mpeg">
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
    name: 'myTunes',
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('getSongs')
    },
    methods: {
      deleteSong(song) {
        this.$store.dispatch('deleteSong', song)
      }
    },
    computed: {
      playlist() {
        return this.$store.state.playlist
      }
    },
    components: {}
  }
</script>