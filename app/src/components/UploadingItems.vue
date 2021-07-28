<template>
  <div id="app">
    <div id="uploadingPics">
      <button>{{ text1 }}</button>
    </div>
    <br />
    <div>
      <label for="item">{{ text2 }}</label>

      <select name="item" id="item">
        <option value="clothes">Clothes</option>
        <option value="shoes">Shoes</option>
        <option value="bag">Bag</option>
        <option value="jewelry">Jewelry</option>
      </select>
    </div>

    <br />
  </div>
</template>

<script>
export default {
  name: "UploadingItems",
  data() {
    return {
      text1: "Upload Photo",
      text2: "What Item did you upload?: ",
      text3: "Put Item in Your Closet",
      text4: "View My Closet",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 400px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
}

.inner {
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;
}
</style>
