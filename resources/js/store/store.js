export default{
	 
  state: {
    category:[],
    subcategory:[],
    content:[],
    user:[],
    role:[],
    permission:[],
    rolewisePermission:[],
    fronthf:[],
    allblogPost:[],
    singlePost:[],
    latestPost:[],
   
  },

  getters: {
    categoryList(state){
    	return state.category
    },
     subcategoryList(state){
      return state.subcategory
    },
    contentList(state){
      return state.content
    },
    userList(state){
      return state.user
    },
     roleList(state){
      return state.role
    },
     permissionList(state){
      return state.permission
    },
     rolewisepermissionList(state){
      return state.rolewisePermission
    },
     fronthfList(state){
      return state.fronthf
    },
    allblogPost(state){
      return state.allblogPost
    },
    singlePost(state){
      return state.singlePost
    },
     latestPost(state){
      return state.latestPost
    },
   


  },

  actions: {
    getCategoryList(context){
    	axios.get('/categoryList').then((response)=>{
    		context.commit('catList',response.data.categoriesList) 
    	}) 
    },

     getsubCategoryList(context){
      axios.get('/subcategoryList').then((response)=>{
        context.commit('subcatList',response.data.subcategoriesList) 
      }) 
    },
    getcontentList(context){
      axios.get('/contentList').then((response)=>{
        context.commit('contentList',response.data.contentsList) 
      }) 
    },

     getUserList(context){
      axios.get('/userList').then((response)=>{
        context.commit('userList',response.data.usersList) 
      }) 
    },
    getRoleList(context){
      axios.get('/roleList').then((response)=>{
        context.commit('roleList',response.data.rolesList) 
      }) 
    },
    getPermissionList(context){
      axios.get('/permissionList').then((response)=>{
        context.commit('permissionList',response.data.permissionsList) 
      }) 
    },
    getrolewisePermissionList(context){
      axios.get('/rolewisepermissionList').then((response)=>{
        context.commit('rolewisepermissionList',response.data.rolewisepermissionsList) 
      }) 
    },
    getfronthfList(context){
      axios.get('/fronthfList').then((response)=>{
        context.commit('fronthfList',response.data.fronthfsList) 
      }) 
    },
    getallblogPost(context){
      axios.get('/allblogPost').then((response)=>{
        context.commit('allblogPost',response.data.allblogsPost) 
      }) 
    },
     getsinglePostbyId(context,playload){
      axios.get('/singlePost/'+playload).then((response)=>{
        context.commit('singlePost',response.data.singlePost) 
      }) 
    },
   getPostCatId(context,playload){
      axios.get('/categoryIdByPost/'+playload).then((response)=>{
        console.log(response.data.categoryIdByPosts)
        context.commit('categoryIdByPost',response.data.categoryIdByPosts) 
      }) 
    },
    SearchPost(context,playload){
      axios.get('/SearchPost?s='+playload).then((response)=>{
        
        context.commit('SearchPost',response.data.SearchPosts) 
      }) 
    },
    getlatestPost(context){
      axios.get('/latestPost').then((response)=>{
        context.commit('latestPost',response.data.latestPosts) 
      }) 
    },
  },


  mutations: {
     catList(state,responseData){
     	return state.category = responseData;
     },

     subcatList(state,responseData){
      return state.subcategory = responseData;
     },

     contentList(state,responseData){
      return state.content = responseData;
     },

     userList(state,responseData){
      return state.user = responseData;
     },
     roleList(state,responseData){
      return state.role = responseData;
     },
     permissionList(state,responseData){
      return state.permission = responseData;
     },
     rolewisepermissionList(state,responseData){
      return state.rolewisePermission = responseData;
     },
      fronthfList(state,responseData){
      return state.fronthf = responseData;
     },
     allblogPost(state,responseData){
      return state.allblogPost = responseData;
     },
     singlePost(state,responseData){
      return state.singlePost = responseData;
     },
     categoryIdByPost(state,responseData){
      return state.allblogPost = responseData;
     },
      SearchPost(state,responseData){
      return state.allblogPost = responseData;
     },
      latestPost(state,responseData){
      return state.latestPost = responseData;
     },

  }

}