<template>
  <div class="info">
    <h1>Πληροφορίες</h1>
    <div class="medical__info infobox">
      <h3>Μοριακή βιολογία</h3>
      <p>
        Πληροφορίες για τα πλασμίδια του SARS-CoV-2
      </p>
      <div class="img__box">
        <p>Linear Plasmid</p>
        <img
          src="https://github.com/covid19track/covid-biopython/raw/master/data/output/plasmid_linear.png"
          alt="Missing Raw Output"
        />
      </div>
      <div class="img__box">
        <p>Circular Plasmid</p>
        <img
          src="https://github.com/covid19track/covid-biopython/blob/master/data/output/plasmid_circular.png"
          alt="Missing Raw Output"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.medical__info {
  background: #18191c;
  border-radius: 6px;
  margin-left: 25%;
  margin-right: 25%;
  width: fit-content;
  height: fit-content;
}

.img__box p {
  font-size: 2.5rem;
  font-weight: 900;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Info extends Vue {}
</script>
