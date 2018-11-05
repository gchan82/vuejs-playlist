<template>
<div>
  <button v-on:click="component = 'form-one'">Show form one</button>
  <button v-on:click="component='form-two'">Show form two</button>
  <keep-alive>
    <component v-bind:is="component"></component>
  </keep-alive>
</div>
</template>

<script>
import formOne from './Component/formOne.vue'
import formTwo from './Component/formTwo.vue'

export default {
  components: {
    'form-one': formOne,
    'form-two': formTwo
  },
  data() {
    return {
      component: 'form-two'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
