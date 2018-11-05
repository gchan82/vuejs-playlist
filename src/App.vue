
<template>
  <div>
<form-helper>
<div slot="form-header">
<h3>This is the title of the form</h3>
<p>Info about form</p>
</div>
<div slot="form-fields">
<input type="text" placeholder="name" required />>
<input type="password" placeholder="password" required />>
</div>
<div slot="form-controls">
<button v-on:click="handleSubmit">Submit</button>
</div>
</form-helper>
  </div>
</template>

<script>
import formHelper from './Component/formHelper.vue'

export default {
  components:{
    'form-helper': formHelper
  },
  data() {
    return {
title: 'dyanamic slot title'
    };
  },
  methods:{

    }
  }

</script>

<style scoped>
</style>
