<template>
  <div class="">
    <h1>Erste Component</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
  props: {},
})
export default class FirstComponent extends Vue {
  // Variablen & Daten

  // Methoden

  // computed

  // Wenn Component erstellt wurde
  created(): void {
    //
  }

  // wenn Component dargestellt wird
  mounted(): void {
    //
  }
}
</script>

<style scoped lang="scss">
h1 {
  font-size: $h1_font_size;
}
</style>
