<template>
  <div id="app-mount">
    <vuescroll :ops="ops">
      <div id="app-container">
        <Navigation />
        <router-view />
        <Footer />
      </div>
    </vuescroll>
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
          scrollingX: false,
          easing: "easeInOutQuart"
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

.header {
  padding: 20px;
  font-size: 50px;
  font-weight: 600;
  margin: 0;
  text-align: center;
}

.header2 {
  padding: 20px;
  font-size: 35px;
  font-weight: 600;
  margin: 0;
  text-align: center;
}

body {
  font-family: "Open Sans", sans-serif;
  text-rendering: geometricPrecision;
  color: whitesmoke;
  scroll-behavior: smooth;
  overflow: hidden;
  font-size: 16px;
}

#app-mount {
  width: 100vw;
  height: 100vh;
  background-color: #26262b;
}

#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.view {
  flex: 1;
}

.text {
  text-align: center;
}
</style>
