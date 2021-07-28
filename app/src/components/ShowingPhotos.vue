<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: "ShowingPhotos",
  data() {
    return {};
  },
  methods: {
    navigate() {
      //router.push({ name: "UploadingItems" });
      router.go(-1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
