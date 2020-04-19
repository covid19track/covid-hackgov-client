<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="light" variant="primary">
      <b-navbar-brand href="/"
        ><img src="https://img.icons8.com/color/40/000000/escape-mask.png"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!--<router-link to=""></router-link>-->
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/charts">Charts</b-nav-item>
          <b-nav-item href="/map">Live Map</b-nav-item>
          <b-nav-item href="/info">Virus Info</b-nav-item>
          <b-nav-item href="/devs">Devlopers</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Enter Country"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {
  // @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
#nav {
  padding: 0;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.75);
}

.nav-link,
.navbar-brand,
.navbar-toggler {
  color: #fff !important;
}

.navbar-expand-lg {
  background: red;
}

.nav-link {
  transition: 0.7s;
  margin: 0;
  border-bottom: 2px solid transparent;
}

.nav-link:hover {
  border-color: #fff;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
}

.mr-sm-2 {
  background-color: transparent;
  color: #fff !important;
  border: transparent;
  border-radius: 3px;
  border-bottom: 2px #fff solid;
  transition: 0.7s;
  height: inherit;
}

.mr-sm-2:focus {
  color: #fff !important;
  border-color: inherit;
  background-color: rgba(0, 0, 0, 0.5);
}

.mr-sm-2:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

::placeholder {
  color: #fff !important;
}

.my-sm-0 {
  transition: 0.7s;
  border: 2px #fff solid;
  background-color: transparent;
}

.my-sm-0:hover {
  border: 2px #fff solid;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
