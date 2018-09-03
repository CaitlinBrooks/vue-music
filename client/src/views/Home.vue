<template>
  <div class="home" "row">
    <div class="col">
      <form @submit.prevent="searchMusic">
        <input type="text" name="search" placeholder="Search Songs" v-model="artist">
      </form>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    components: {
      HelloWorld
    }
  }
</script>