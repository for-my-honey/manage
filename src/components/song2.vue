<template>
  <div>
	   <ul class="nav nav-tabs">
			<li class="active">
				<a href="#">歌曲管理</a>
			</li>
		</ul>
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<form class="navbar-form navbar-left" role="search">
				<div class="form-group">
					搜索歌曲：
					<input type="text" class="form-control" placeholder="搜索歌曲名称" />
				</div> 
				<button type="submit" class="btn btn-default btn-primary">搜索</button>
				<div class="btn-group">
					<button class="btn btn-default" type="button" data-toggle="modal" data-target="#myModal" @click="selectSinger"><span class="glyphicon glyphicon-plus"></span></button> 
					<button class="btn btn-default" type="button" data-toggle="modal" data-target="#myModal1"><span class="glyphicon glyphicon-pencil"></span></button>
					<button class="btn btn-default" type="button"><span class="glyphicon glyphicon-trash"></span> </button>
				</div>
			</form>
		</div>
		<table class="table table-hover text-center">
			<thead>
				<tr>
					<th></th>
					<th class="text-center">ID</th>
					<th class="text-center">歌曲名称</th>
					<th class="text-center">歌手</th>
					<th class="text-center">歌曲地址</th>
					<th class="text-center">时间</th>
					<th class="text-center">播放次数</th>
					<th class="text-center">专辑ID</th>
					<th class="text-center">标签</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(music,index) in list">
					<td><input type="checkbox" name="" id="" value=""></td>
					<td>{{index+1}}</td>
					<td>{{music.mname}}</td>
					<td>{{music.singer.sname}}</td>
					<td>
						<img >upload/music 张杰-我们都一样
					</td>

					<td>{{music.duration}}</td>
		
					<td>{{music.count}}</td>
					<td>1</td>
					<td>{{music.type}}</td>
					
				</tr>
				
				
				<tr>
					<td><input type="checkbox" name="" id=""></td>
					<td>1</td>
					<td>我们都一样</td>
					<td>张杰</td>
					<td>
						<img >upload/music 张杰-我们都一样
					</td>

					<td>05:03</td>

					<td>84</td>
					<td>1</td>
					<td>中文,流行</td>
					
				</tr>
				<tr class="">
					<td><input type="checkbox" name="" id=""></td>
					<td>1</td>
					<td>我们都一样</td>
					<td>张杰</td>
					<td>
						<img >upload/music 张杰-我们都一样
					</td>
					<td>05:03</td>
					<td>84</td>
					<td>1</td>
					<td>中文,流行</td>
				</tr>
			</tbody>
		</table>					
<!-- ************************模态框增加歌曲部分************************ -->

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog parent" role="document">
    <div class="modal-content parent">
      <div class="modal-header head-1">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">增加歌曲</h4>
      </div>
	  <div class="special">
	  <div class="input-content">
	  	
<!--	  action="http://localhost:8086/admin/addMusic" method="post" enctype="multipart/form-data"-->
		<form  class="form-inline">
  		<div class="form-group form-group-special">
    		<label for="exampleInputName2">歌曲名称</label>
    		<input v-model="music.mname" type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<!--<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>-->
  		
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">类型</label>
    		<!-- <input type="text" class="form-control"> -->
			<select v-model="music.type"   name="" id="" class="form-control drop">
				<option value="流行">流行</option>
				<option value="民谣">民谣</option>
				<option value="古典">古典</option>
				<option value="摇滚">摇滚</option>
				<option value="嘻哈">嘻哈</option>
				
			</select>
  		</div>
  		
		<!--<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>-->
		
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">歌手名称</label>
    		<!-- <input type="text" class="form-control"> -->
			<select v-model="music.sid" name="" id="" class="form-control drop">
	
				<option  v-for="singer in singer":value="singer.sid">
					{{singer.sname}}
				</option>
			<!--	<option value="1">1</option>
				<option value="1">1</option>-->
				<!-- 增加option添加选项 -->
		
			
			</select>
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">地区</label>
    		<!-- <input type="text" class="form-control"> -->
			<select v-model="music.mimg"  name="" id="" class="form-control drop">
				<option value="内地">内地</option>
				<option value="港台">港台</option>
				<option value="韩国">韩国</option>
				<option value="欧美">欧美</option>
				<option value="日本">日本</option>
			
			</select>
  		</div>
  		<div class="form-group form-group-special">
    		<label for="exampleInputName2">发行日期</label>
    		<input type="date" name="" class="form-control drop" id="exampleInputName2">
  		</div>
		<div class="form-group-special form-group">
			<label class="label-special"><h5>选择歌曲：</h5><input type="file" name="file" id="" class="up"></label>
  		</div>
  		<div class="foot">
		<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-primary" @click="addMusic">保存</button>
	</div>
	</form>
	</div>
	</div>
    </div>
  </div>
</div>
 <!-- *******************************模态框编辑歌曲******************** -->
<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog parent" role="document">
    <div class="modal-content parent">
      <div class="modal-header head-1">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">编辑歌曲</h4>
      </div>
	  <div class="special">
	  <div class="input-content">
	  	
<!--	  action="http://localhost:8086/admin/addMusic" method="post" enctype="multipart/form-data"-->
		<form  class="form-inline">
  		<div class="form-group form-group-special">
    		<label for="exampleInputName2">歌曲名称</label>
    		<input v-model="music.mname" type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<!--<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>-->
  		
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">类型</label>
    		<!-- <input type="text" class="form-control"> -->
			<select v-model="music.type"   name="" id="" class="form-control drop">
				<option value="流行">流行</option>
				<option value="民谣">民谣</option>
				<option value="古典">古典</option>
				<option value="摇滚">摇滚</option>
				<option value="嘻哈">嘻哈</option>
				
			</select>
  		</div>
  		
		<!--<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>-->
		
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">歌手名称</label>
    		<!-- <input type="text" class="form-control"> -->
			<select v-model="music.sid" name="" id="" class="form-control drop">
	
				<option  v-for="singer in singer":value="singer.sid">
					{{singer.sname}}
				</option>
			<!--	<option value="1">1</option>
				<option value="1">1</option>-->
				<!-- 增加option添加选项 -->
		
			
			</select>
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">地区</label>
    		<!-- <input type="text" class="form-control"> -->
			<select v-model="music.mimg"  name="" id="" class="form-control drop">
				<option value="内地">内地</option>
				<option value="港台">港台</option>
				<option value="韩国">韩国</option>
				<option value="欧美">欧美</option>
				<option value="日本">日本</option>
			
			</select>
  		</div>
  		<div class="form-group form-group-special">
    		<label for="exampleInputName2">发行日期</label>
    		<input type="date" name="" class="form-control drop" id="exampleInputName2">
  		</div>
		<div class="form-group-special">
			<label class="label-special"><h5>选择歌曲：</h5><input type="file" name="file" id="" class="up"></label>
  		</div>
  		<div class="foot">
		<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-primary" @click="addMusic">保存</button>
	</div>
	</form>	
	</div>
	</div>
    </div>
  </div>
</div>
  </div>
</template>

<script>

export default {
	
  name: 'song',
  data () {
    return {
    	list:[],
    	singer:[],
    	music:{
    		mname:'',
    		type:'',
    		sname:'',
    		sid:'',
    		mimg:''
    	}
    	
    }
  },
  created:function(){
  	this.musicList();

  },
  methods:{
  		musicList:function(){
  		this.$http.get("http://localhost:8086/admin/musicList").then(
  			function(result){
  				this.list=result.body;
  				
  			},
  			function(error){
  				alert("加载数据失败");
  			}
  			
  		)
  	},
  	
  	selectSinger:function(){
  		this.$http.get("http://localhost:8086/admin/singer").then(
  			function(result){
  				this.singer=result.body;
  			
  				console.log(this.singer);
  			},
  			function(error){
  				alert("加载数据失败");
  			}
  			
  		)
  	},
  
  		addMusic:function(){
  			var formdata = new FormData();
  			formdata.append("file",document.querySelector("input[name=file]").files[0]);
  			formdata.append("mname",this.music.mname);
  			formdata.append("type",this.music.type);
  			formdata.append("sid",this.music.sid);
  			formdata.append("mimg",this.music.mimg);
				var config={
  			headers:{
  				"Content-type":"multipart/form-data"
  			}
  		}  
  			this.$http.post("http://localhost:8086/admin/addMusic",formdata,config).then(
  			function(result){
  				console.log(result);
  			
  				alert("文件上传成功");
  				this.$router.go(0);
  			},function(error){
  				console.log(error);
  			}
  		)
  		}
  	
  	
  	
  	
  }
  
  
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drop{
	width: 196px;
}
#bs-example-navbar-collapse-1{
	margin: 10px 0px;
}
.search{
	line-height: 50px;
}
.special{
	height: 400px;
}
.label-special .up{
	width:180px;
	margin: 0 40px;
	overflow: hidden;
}
.parent{
	/* position: relative; */
	height: 450px;
	margin: 60px auto;
}
.head-1{
	height: 50px;
}
	 .my-special{
		 margin: 0;
		 width: 550px;
		 height: 550px;
		 /* position: absolute; */
	 }
	 .foot{
		 height: 50px;
		 margin-top: -20px;
		 text-align: right;
	 }
	 .foot button{
		 margin-right: 20px;
	 }
	 .form-group-special{
		 margin: 20px 25px;
	 }
</style>
