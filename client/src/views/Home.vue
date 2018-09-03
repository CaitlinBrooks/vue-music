<template>
  <div class="home" "row">
    <div class="col">
      <form @submit.prevent="searchMusic">
        <input type="text" name="search" placeholder="Search Songs" v-model="artist">
        <button class="search" type="submit">Search Songs</button>
      </form>
    </div>
    <div class="results" "col-6"></div>
    <div class="mySongs" "col-6"></div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import myTunes from "@/components/myTunes";
  import Results from "@/components/Results";

  export default {
    name: 'home',
    data() {
      return {
        artist: ''
      }
    },
    methods: {
      addSong(song) {
        this.$store.dispatch('addSong')
      },
      searchMusic() {
        this.$store.dispatch('searchMusic', this.artist)
      }
    },
    computed: {
      songs() {
        this.$store.state.songs
      },
      myTunes() {
        return this.$store.state.playlist
      }
    },
    components: {
      myTunes,
      Results
    }
  }
</script>