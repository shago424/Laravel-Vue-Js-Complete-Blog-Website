<template>
 <div id="publicsidebar">

 <div class="span4">
            <aside class="left-sidebar">
              <div class="widget">
                <form class="form-search">
                  <input @keyup="RealSearch" placeholder="Type something" v-model="keyword" type="text" class="input-medium search-query">
                  <button type="submit" @click.prevent="RealSearch" class="btn btn-square btn-theme">Search</button>
                </form>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Categories</h5>
                <ul class="cat" v-for=" category in getCategoryList">

                  <li><i class="icon-angle-right"></i><router-link :to="`/categories/${category.id}`">{{ category.name }}</router-link><span> (20)</span></li>
                  
                </ul>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Latest Posts</h5>
                <ul class="recent" >
                  <li v-for="(post,index) in getlatestPost" v-if="index<5">
                    <img :src="`upload/contentimage/${post.file}`" class="pull-left" alt="" width="50px" height="50px" />
                    <h6><router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link></h6>
                    <p>
                      {{ post.description }}
                    </p>
                  </li>
                  
                </ul>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Popular tags</h5>
                <ul class="tags">
                  <li><a href="#">Web design</a></li>
                  <li><a href="#">Trends</a></li>
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Internet</a></li>
                  <li><a href="#">Tutorial</a></li>
                  <li><a href="#">Development</a></li>
                </ul>
              </div>
            </aside>
          </div>
 
 </div> 


</template>

<script>
import _ from 'lodash'
export default {
name:"publicsidebar",

data(){
  return{
    keyword:''
  }
},

mounted(){
      this.$store.dispatch('getCategoryList')
      this.$store.dispatch('getlatestPost')
    },

    computed:{
      getCategoryList(){
       return this.$store.getters.categoryList 
      },
      getlatestPost(){
       return this.$store.getters.latestPost 
      },
    },

    methods:{
     
      RealSearch:_.debounce(function () {
        this.$store.dispatch('SearchPost',this.keyword);
      },1000 )
    }
};
</script>

<style>

</style>
