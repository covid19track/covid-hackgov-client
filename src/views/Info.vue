<template>
  <div class="view">
    <div class="header">Πληροφορίες</div>
    <div class="medical_info">
      <div class="header2">Μοριακή βιολογία</div>
      <div class="text">
        Πληροφορίες για τα πλασμίδια του SARS-CoV-2
      </div>
      <div class="img__box">
        <div class="header2">Linear Plasmid</div>
        <img
          src="https://github.com/covid19track/covid-biopython/raw/master/data/output/plasmid_linear.png"
          alt="Missing Raw Output"
        />
      </div>
      <div class="img__box">
        <div class="header2">Circular Plasmid</div>
        <img
          src="https://github.com/covid19track/covid-biopython/raw/master/data/output/plasmid_circular.png"
          alt="Missing Raw Output"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.medical_info {
  background: #18191c;
  border-radius: 6px;
  width: 100%;
  overflow: auto;
  height: fit-content;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Info extends Vue {}
</script>
