<template>
  <ProductView />
</template>

<script>
import ProductView from "./pages/ProductView.vue";

export default {
    name: "App",
    components: {
        ProductView,
    },
};
</script>

<style lang="scss">
@font-face {
 font-family: "Source Sans Pro";
 src: local("Source Sans Pro"), url("fonts/SourceSansPro-Regular.ttf") format("truetype");
}

body{
    margin:0;
    background: #E5E5E5;
}
#app {
  font-family: 'Source Sans Pro';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  width:100vw;

}
</style>
