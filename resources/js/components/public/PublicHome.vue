<template>
<div id="BlogPost">
	<section id="inner-headline">
      <div class="container">
        <div class="row">
          <div class="span4">
            <div class="inner-heading">
              <h2>Blog left sidebar {{ this.$route.params.id }}</h2>
            </div>
          </div>
          <div class="span8">
            <ul class="breadcrumb">
              <li><a href="#"><i class="icon-home"></i></a><i class="icon-angle-right"></i></li>
              <li><a href="#">Blog</a><i class="icon-angle-right"></i></li>
              <li class="active">Blog with left sidebar</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="content">
      <div class="container">
        <div class="row">
          
        	<BlogSidebar/>
        
        
          <div class="span8">
            <article v-for="post in getallblogPost">
              <div class="row">
                <div class="span8">
                  <div class="post-image">
                    <div class="post-heading">
                      <h3><router-link  :to="`/blog/${post.id}`">{{post.title}}</router-link ></h3>
                    </div>
                    <img :src="`upload/contentimage/${post.file}`" alt="" width="200px" height="100px" />
                  </div>
                  <p>
                    {{ post.description }}
                  </p>
                  <div class="bottom-article">
                    <ul class="meta-post">
                      <li><i class="icon-calendar"></i><a href="#"> {{ post.created_at | timeformat}}</a></li>
                      <li v-if="post.user"><i class="icon-user"></i><a href="#"> {{ post.user.name }}</a></li>
                      <li v-if="post.category"><i class="icon-folder-open"></i><a href="#">{{ post.category.name }}</a></li>
                      <li ><i class="icon-comments"></i><a href="#">4 Comments</a></li>
                    </ul>
                    <router-link :to="`/blog/${post.id}`" class="pull-right">Continue reading <i class="icon-angle-right"></i></router-link >
                  </div>
                </div>
              </div>
            </article>
           
            <div id="pagination">
              <span class="all">Page 1 of 3</span>
              <span class="current">1</span>
              <a href="#" class="inactive">2</a>
              <a href="#" class="inactive">3</a>
            </div>
          </div>
         



        </div><!--  row end  -->

      </div>
    </section>

</div> 


</template>

<script>
import BlogSidebar from './blog/BlogSidebar.vue'
export default {
name:"PublicHome",

data(){
	return{
		id:""
	}
},

components:{
  BlogSidebar
},

mounted(){
 this.$store.dispatch('getallblogPost')
},

computed:{
getallblogPost(){
       return this.$store.getters.allblogPost 
      },
},

methods:{
getcategoryIdByPost(){
  if(this.$route.params.id!=null){
    this.$store.dispatch('getPostCatId',this.$route.params.id);
  }else{
     this.$store.dispatch('getallblogPost')
  }
  
}

},

watch:{
  $route(to,from){
    this.getcategoryIdByPost();
  }
}









};
</script>

<style>

</style>