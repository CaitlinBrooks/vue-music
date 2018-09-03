<template>
  <div class="mySongs">
    <h1>MySongs</h1>
    <div v-for="song in playlist">
      <button type="button" @click="deleteSong(song)">Delete Song</button>
      <audio controls>
        <source :src="song.preview">
      </audio>
      <img :src="song.coverArt" alt="coverArt">
      <p>Title: {{song.title}}</p>
      <p>Artist: {{song.artist}}</p>
      <p>Price: {{song.price}}</p>
      <p>Album: {{song.album}}</p>
    </div>
  </div>
</template>