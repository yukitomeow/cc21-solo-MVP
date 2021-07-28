<template>
  <div id="app">
    <div>
      <ShowingPhotos />
      <UploadingItems />
      <Upload />
      <upload v-model="picture" />
      <img :src="picture" />
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
  data() {
    return {
      text3: "Put Item in Your Closet",
      text4: "View My Closet",
      picture: null,
    };
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
* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  color: #2c2d30;
  font-size: 1.6rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
}
</style>
