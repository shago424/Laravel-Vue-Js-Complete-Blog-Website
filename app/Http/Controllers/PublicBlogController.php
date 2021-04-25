<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Content;
use App\Category;
use App\SubCateGory;
use App\Frontend;
class PublicBlogController extends Controller
{
    public function allblogpost()
    {
      $posts = Content::with('user','category','subcategory')->orderBy('id','DESC')->get();
      return response()->json(['allblogsPost'=>$posts],200);
    }

     public function latestpost()
    {
      $latestposts = Content::with('user','category','subcategory')->orderBy('id','DESC')->get();
      return response()->json(['latestPosts'=>$latestposts],200);
    }

     public function singlepostById($id)
    {

      $singlePost = Content::with('user','category','subcategory')->where('id',$id)->first();
      return response()->json(['singlePost'=>$singlePost],200);
    }

     public function categoryIdByPost($id)
    {

      $categoryIdByPosts = Content::with('user','category','subcategory')->where('category_id',$id)->orderBy('id','DESC')->get();
      return response()->json(['categoryIdByPosts'=>$categoryIdByPosts],200);
    }

      public function SearchPost()
    {
    	$search =\Request::get('s');
    	
    	$SeacrhPosts = Content::with('user','category','subcategory')
      ->where('title','LIKE',"%$search%")
      ->orwhere('description','LIKE',"%$search%")
      ->orderby('id','desc')
      ->get();
      return response()->json(['SearchPosts'=>$SeacrhPosts],200);
    	
    
    }


}
