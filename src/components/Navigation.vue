<template>
  <div id="nav">
    | <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/charts">Charts</router-link> |
    <router-link to="/maps">Maps</router-link> |
    <router-link to="/info">Info</router-link> |
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {
  // @Prop() private msg!: string;
}
</script>
