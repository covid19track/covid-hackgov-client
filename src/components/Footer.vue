<template>
  <div id="footer" class="fixed-bottom">
    <p id="link">
      Made with
      <img src="https://img.icons8.com/cute-clipart/25/000000/like.png" /> by
      the
      <a target="_blank" href="https://github.com/covid19track"
        >COVID-19.Tracker team</a
      >
    </p>
  </div>
</template>

<style media="screen">
#footer {
  background-color: black;
  color: white;
}

#link {
  margin: 1em;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  // @Prop() private msg!: string;
}
</script>
