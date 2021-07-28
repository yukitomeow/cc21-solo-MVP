<template>
  <div id="app">
    <div>
      <ShowingPhotos />
      <UploadingItems />
      <Upload />
    </div>
    <div class="content">
      <div class="inner">
        <button>{{ text3 }}</button>
        <router-link :to="{ name: 'ShowingPhotos' }">{{ text4 }}</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import ShowingPhotos from "./components/ShowingPhotos.vue";
import UploadingItems from "./components/UploadingItems.vue";
import Upload from "./components/Upload.vue";

export default {
  name: "app",
  components: {
    ShowingPhotos,
    UploadingItems,
    Upload,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
