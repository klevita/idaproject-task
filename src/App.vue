<template>
    <ProductView />
    <div id="pop-up-on-mouse" class="pop-up">
    </div>
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

body {
    margin: 0;
    background: #E5E5E5;
}

#app {
    font-family: 'Source Sans Pro';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;



}

.pop-up {
    text-align: center;
    padding: 10px;
    left: calc(50vw - 200px);
    top: -200px;
    border-radius: 14px;
    color: white;
    background-color: black;
    transition: top 1s ease;
    position: fixed;
    z-index: 1000;
}

.pop-up2 {
    top: 40px;
}
</style>
