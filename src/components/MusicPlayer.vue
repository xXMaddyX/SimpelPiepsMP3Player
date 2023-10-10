<script setup>
import { ref, inject } from 'vue';

const audioPlayer = ref(null);
const currentTrackIndex = ref(0);
const tracklist = inject('musicFiles');
const currentTrackName = ref('');
const substringTrackSplit = ref([]);
const newTrackName = ref('');

const playTrack = (trackPath, index) => {
  audioPlayer.value.src = trackPath;
  audioPlayer.value.play();
  currentTrackIndex.value = index;
  currentTrackName.value = tracklist.value[index];
  substringTrackSplit.value = currentTrackName.value.split('/');
  newTrackName.value = substringTrackSplit.value[substringTrackSplit.value.length -1];
};

const playNextTrack = () => {
  if (currentTrackIndex.value + 1 < tracklist.value.length) {
    currentTrackIndex.value++;
    playTrack(tracklist.value[currentTrackIndex.value], currentTrackIndex.value);
  }
};

defineExpose({ playTrack, playNextTrack })
</script>

<template>
    <main class="fixed-player">
        <h3>{{ newTrackName }}</h3>
        <img src="../assets/PiepsmitTasse.png" alt="">
        <audio ref="audioPlayer" controls @ended="playNextTrack"></audio>
    </main>
</template>



<style scoped>
main {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

}

main audio {
  position: fixed;
    width: 50%;
    bottom: 0px;
}

main h3 {
    color: white;
    text-shadow: 2px 2px 8px white;
    padding: 20px;
    padding-bottom: 50px;
}

main img {
  height: auto;
  width: auto;
  max-height: 50vh;
  padding-bottom: 100px;
}

</style>
