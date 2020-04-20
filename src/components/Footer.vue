<template>
  <div id="footer">
    <p id="link">
      Φτιαγμένο με
      <img
        src="https://img.icons8.com/windows/25/000000/like.png"
        style="filter: invert(100%); vertical-align: middle;"
      />
      από την ομάδα
      <a href="https://github.com/covid19track">COVID-19.Tracker Project</a>
    </p>
  </div>
</template>

<style media="screen">
#footer {
  width: 100%;
  background-color: black;
  color: white;
  overflow: hidden;
  min-height: 60px;
  max-height: 60px;
  margin-top: auto;
  position: relative;
}

#link a {
  text-decoration: underline;
  color: whitesmoke;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
