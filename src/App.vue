<template>
<div>
<add-blog></add-blog>
<show-blogs></show-blogs>
</div>

</template>

<script>
import addBlog from './Component/addBlog.vue'
import showBlogs from './Component/showBlogs.vue'
export default {
  components:{
'add-blog':addBlog,
'show-blogs':showBlogs

  },
  data(){
    return{

    }
  },
  methods:{

  }
}

</script>

<style scoped>
body{
  margin: 0;
  font-family:'Nunito SemiBold';
}
</style>