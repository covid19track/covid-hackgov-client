<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script type="text/javascript">
  import Navigation from "@/components/Navigation.vue";
  import Footer from "@/components/Footer.vue";

  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component({ components: {Navigation, Footer} })
  export default class App extends Vue {
    // @Prop() private msg!: string;
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
