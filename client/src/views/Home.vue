<template>
  <div class="home">
    <div class="row">
      <form @submit.prevent="searchMusic">
        <input type="text" name="search" placeholder="Search Songs" v-model="artist">
        <button class="search" type="submit">Search Songs</button>
        <results class="col-6" "align-items-left"></results>
        <myTunes class="col-6" "align-items-right"></myTunes>
      </form>
    </div>
  </div>
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