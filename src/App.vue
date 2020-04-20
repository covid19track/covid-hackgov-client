<template>
  <div id="app">
    <Navigation />
    <vuescroll :ops="ops">
      <router-view />
    </vuescroll>
    <Footer />
  </div>
</template>

<script type="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import vuescroll from "vuescroll";

@Component({
  components: {
    Navigation,
    Footer,
    vuescroll
  }
})
export default class App extends Vue {
  data() {
    return {
      ops: {
        scrollPanel: {
          easing: "easeInOutQuad"
        },
        bar: {
          background: "whitesmoke"
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

body {
  padding: 0;
  margin: 0;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  scroll-behavior: smooth;
}

#app {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #202225;
  position: absolute;
  overflow: hidden;
}
</style>
