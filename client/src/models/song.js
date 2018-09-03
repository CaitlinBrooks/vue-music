export default class Song {
  constructor(song) {
    this.coverArt = song.artworkUrl60.replace(/60x60/g, "250x250")
    this.artist = song.artistName
    this.album = song.collectionName
    this.title = song.trackName
    this.preview = song.previewUrl
    this.price = song.collectionPrice
  }
}