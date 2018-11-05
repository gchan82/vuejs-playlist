<template>
<div>
<router-view></router-view>
<!--
<list-blogs></list-blogs>
<add-blog></add-blog>
<show-blogs></show-blogs>
-->
</div>
</template>

<script>
import addBlog from './Component/addBlog.vue'
import showBlogs from './Component/showBlogs.vue'
import listBlogs from './Component/listBlogs.vue'
export default {
  components:{
'add-blog':addBlog,
'show-blogs':showBlogs,
'list-blogs':listBlogs

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