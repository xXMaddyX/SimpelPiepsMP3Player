<script setup>
import { ref, provide } from 'vue'
import Navbar from './components/Navbar.vue'
import TrackList from './components/TrackList.vue'
import MusicPlayer from './components/MusicPlayer.vue'

let musicFiles = ref([])
provide('musicFiles', musicFiles)

const musicPlayerRef = ref(null);

const playSelectedTrack = (trackPath, index) => {
  musicPlayerRef.value.playTrack(trackPath, index);
};
</script>

<template>
  <div class="main">
    <div class="head">
      <Navbar class="drop"/>
    </div>
    <div class="content">
        <TrackList @trackSelected="playSelectedTrack"/>
        <MusicPlayer ref="musicPlayerRef"/>
    </div>
  </div>
</template>

<style>
* {
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.801);
}

.main .content {
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
}


</style>
