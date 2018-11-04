
<template>
  <div>
  <app-header></app-header>
  <app-ninjas></app-ninjas>
  <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './Component/Header.vue';
import Footer from './Component/Footer.vue';
import Ninjas from './Component/Ninjas.vue'

export default {
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas
  },
  data() {
    return {
    };
  }
};
</script>
<style scoped>
</style>
