<script setup>
import { inject } from 'vue';

const tracklist = inject('musicFiles');
const emit = defineEmits(['trackSelected']); 

const selectTrack = (track, index) => {
  emit('trackSelected', track, index);
};
</script>

<template>
    <div>
        <ul>
          <li v-for="(track, index) in tracklist" :key="index" @click="selectTrack(track, index)">
              {{ track }}
          </li>
        </ul>
    </div>
</template>



<style scoped>
div {
    position: relative;
    overflow: scroll;
    background-color: orange;
    width: auto;
    height: 100vh;
    padding-bottom: 58px;
}

div ul {
    list-style: none;
}

div ul li {
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: .3s;
}

div ul li:hover {
    background-color: black;
    color: white;
    text-shadow: 0px 2px 8px white;
}

::-webkit-scrollbar {
    width: 5px; /* Chrome, Safari, Opera */
    height: 0px;
  }
  
  /* Farbe der Scrollbar */
  ::-webkit-scrollbar-thumb {
    background-color: #888888d0; /* Farbe des Scrollbalkens */
    border-radius: 20px;
  }
  
  /* Farbe bei Mouse-Over */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555555; /* Farbe des Scrollbalkens bei Mouse-Over */
  }
  
  /* Hintergrundfarbe der Scrollbar */
  ::-webkit-scrollbar-track {
    background-color: #3a3a3a00; /* Hintergrundfarbe der Scrollbar */
  }
</style>