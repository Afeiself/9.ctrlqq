<!--TabBarIcon.vue-->
<template>
  <div>
   <img :src="focused?selectedImage:normalImage" alt="" class="imgstyle"/>
  </div>
</template>
<script>
export default {
  props:{
    focused:false,
    selectedImage:{default:""},
    normalImage:{default:""}
  }
}
</script>
<style scoped>
 .imgstyle{
   width:24px;
   height:24px;
 }
</style>
