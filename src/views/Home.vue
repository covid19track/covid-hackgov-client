<template>
  <div class="view">
    <div class="header">Αρχική Σελίδα</div>
    <div class="info">
      <p></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

let HTTP;

@Component
export default class Home extends Vue {
  data() {
    return {
      statistics: [],
      errors: [],
    };
  }

  mounted() {
    HTTP = this.$store.getters["App/HTTP"];

    HTTP.get("stats/daily")
      .then((response) => {
        this.statistics = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  }
}
</script>
