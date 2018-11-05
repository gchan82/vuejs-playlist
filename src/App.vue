
<template>
  <div>
  <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
  <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
  <app-footer v-bind:title="title"></app-footer>
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
      ninjas: [
  {name: 'Ryu', speciality: 'Vue Components', show: false},
  {name: 'Ryu2', speciality: 'Vue Components2', show: false},
  {name: 'Ryu3', speciality: 'Vue Components3', show: false},
  {name: 'Ryu4', speciality: 'Vue Components4', show: false},
  {name: 'Ryu5', speciality: 'Vue Components5', show: false},
  {name: 'Ryu6', speciality: 'Vue Components6', show: false},
  {name: 'Ryu7', speciality: 'Vue Components7', show: false},
      ],
      title: "Vue Ninjas app.vue"
    };
  },
  methods:{
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
    }
  }
};
</script>
<style scoped>
</style>
