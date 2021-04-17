<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <first-component />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FirstComponent from '@/components/FirstComponent.vue'; // @ is an alias to /src

@Options({
  components: {
    FirstComponent,
  },
})
export default class Home extends Vue {}
</script>
