<template>
  <div id="footer">
    | <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/charts">Charts</router-link> |
    <router-link to="/maps">Maps</router-link> |
    <router-link to="/info">Info</router-link> |
  </div>
</template>

<style media="screen">
   #footer {
    background-color: black;
    color: white;
  }
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  // @Prop() private msg!: string;
}
</script>
