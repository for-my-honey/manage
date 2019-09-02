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

					<button class="btn btn-default" type="button" @click="deleteMusic"><span class="glyphicon glyphicon-trash"></span> </button>
				</div>
			</form>
		</div>
<div class="table-wrap">
			<table class="table table-hover text-center table-special">
			<thead>
				<tr>
					<th></th>
					<th class="text-center">ID</th>
					<th class="text-center">歌曲名称</th>
					<th class="text-center">歌手</th>
					<th class="text-center">发行时间</th>
					<th class="text-center">时间</th>
					<th class="text-center">播放次数</th>
					
					<th class="text-center">标签</th>
					<th class="text-center">操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(music,index) in list">
				<td><input type="checkbox" name="" id="" :value="music.mid" v-model="mid"></td>
					<td>{{index+1}}</td>
					<td>{{music.mname}}</td>
					<td>{{music.singer.sname}}</td>
					<td>
						{{music.myear}}
					</td>

					<td>{{music.duration}}</td>
		
					<td>{{music.count}}</td>
				
					<td>{{music.type}}</td>
						<td><button class="btn btn-default" type="button" data-toggle="modal" data-target="#myModal1" 
							@click="selectMusic(music.mid)"><span class="glyphicon glyphicon-pencil"></span></button></td>
				</tr>

								<tr>
					<td>dad</td>
					<td>ad</td>
					<td>dad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
				</tr>
								<tr>
					<td>dad</td>
					<td>ad</td>
					<td>dad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
				</tr>
								<tr>
					<td>dad</td>
					<td>ad</td>
					<td>dad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
				</tr>
								<tr>
					<td>dad</td>
					<td>ad</td>
					<td>dad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
				</tr>
								<tr>
					<td>dad</td>
					<td>ad</td>
					<td>dad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
				</tr>
								<tr>
					<td>dad</td>
					<td>ad</td>
					<td>dad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
				</tr>
												<tr>
					<td>dad</td>
					<td>ad</td>
					<td>dad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
				</tr>
												<tr>
					<td>dad</td>
					<td>ad</td>
					<td>dad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
				</tr>
												<tr>
					<td>dad</td>
					<td>ad</td>
					<td>dad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
					<td>ad</td>
				</tr>
			
			</tbody>
		</table>
</div>

<!-- ********************************分页***************** -->
<nav aria-label="Page navigation" class="my-nav">
  <ul class="pagination">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
					
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
				<option value="日本">日本sdsd</option>
			
			</select>
  		</div>
  		<div class="form-group form-group-special">
    		<label for="exampleInputName2">发行日期</label>
    		<input v-model="music.myear"  type="date" name="" class="form-control drop" id="exampleInputName2">
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
    <!--    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
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
  	
		
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">歌手名称</label>
    		<!-- <input type="text" class="form-control"> -->
			<select v-model="music.sid" name="" id="" class="form-control drop">
	
				<option  v-for="singer in singer":value="singer.sid">
					{{singer.sname}}
				</option>
		
		
			
			</select>
  		</div>
  		<div class="form-group form-group-special">
    		<label for="exampleInputName2">专辑</label>
    		<!-- <input type="text" class="form-control"> -->
			<select v-model="music.aid" name="" id="" class="form-control drop">
	
				<option  v-for="album in album":value="album.aid">
					{{album.aname}}
				</option>
		
		
			
			</select>
  		</div>
  		
	<!--	<div class="form-group form-group-special">
    		<label for="exampleInputName2">专辑</label>
    
			<select v-model="music.mimg"  name="" id="" class="form-control drop">
				<option value="内地">内地</option>
				<option value="港台">港台</option>
				<option value="韩国">韩国</option>
				<option value="欧美">欧美</option>
				<option value="日本">日本sdsd</option>
			
			</select>
  		</div>-->
  		<div class="form-group form-group-special">
    		<label for="exampleInputName2">发行日期</label>
    		<input v-model="music.myear"  type="date" name="" class="form-control drop" id="exampleInputName2">
  		</div>
		<div class="form-group-special form-group">
			<label class="label-special"><h5>选择歌曲：</h5><input type="file" name="filealt" id="" class="up"></label>
  		</div>
  		<div class="foot">
		<button type="button" @click="clearMusic" class="btn btn-default" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-primary" @click="alterMusic">保存</button>
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
    	list:[

		],
    	singer:[],
    	album:[],
    	music:{
    		mname:'',
    		type:'',
    		sname:'',
    		sid:'',
    		mimg:'',
    		myear:'',
    		aid:''
    	},
    	/*musicadd:{
    		mname:'',
    		type:'',
    		sname:'',
    		sid:'',
    		mimg:'',
    		myear:''
    	},*/
    	mid:[]
    	
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
  		/*	console.log(this.music.myear)*/
  			var formdata = new FormData();
  			formdata.append("file",document.querySelector("input[name=file]").files[0]);
  			formdata.append("mname",this.music.mname);
  			formdata.append("type",this.music.type);
  			formdata.append("sid",this.music.sid);
  			formdata.append("mimg",this.music.mimg);
  			formdata.append("myear1",this.music.myear);
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
  				console.log("添加失败");
  			}
  		)
  		},
  		/*		删除歌曲*/
  	deleteMusic:function(){
  		
  		this.$http.get("http://localhost:8086/admin/deleteMusic",{
  			params:{
  				list:this.mid
  			}
  		}).then(
  			function(result){
  				alert("删除成功");
  				
  				this.$router.go(0);
  		
  				
  			},
  			function(error){
  				alert("加载数据失败");
  			}
  			
  		)
  	},
  	
  /*	修改*/
  	/*	alterMusic:function(mid){
  		console.log(mid);
  		this.$http.delete("http://localhost:8086/admin/deleteSinger",{
  		params:{
  			sid:sid
  		}
  		}).then(
  			function(result){
  				alert("删除成功！！")
  				this.$router.go(0);
  			},
  			function(error){
  				alert("加载数据失败")
  			}
  		)	
  	},*/
  	
  	
/*  更新*/
/*	查找*/
  	selectMusic:function(mid){
  		this.albumList();
  		this.selectSinger();
  		console.log(mid);
  		this.$http.get("http://localhost:8086/admin/selectMusic",{
  		params:{
  			mid:mid
  		}
  		}).then(
  			function(result){
  				
  				this.music=result.body;
  			/*	alter(music.myear);*/
  			},
  			function(error){
  				alert("加载数据失败")
  			}
  		)	
  	},
  	albumList:function(){
  		this.$http.get("http://localhost:8086/adminA/albumList").then(
  			function(result){
  				this.album=result.body;
  			},
  			function(error){
  				alert("加载数据失败")
  			}
  		)	
  	},
  alterMusic:function(){
  			console.log(this.music);
  			var formdata = new FormData();
  			if(document.querySelector("input[name=filealt]").files!=null){
  					formdata.append("file",document.querySelector("input[name=filealt]").files[0]);
  			formdata.append("mname",this.music.mname);
  			formdata.append("mid",this.music.mid);
  			formdata.append("type",this.music.type);
  			formdata.append("sid",this.music.sid);
  			formdata.append("aid",this.music.aid);
  			formdata.append("myear1",this.music.myear);
  		/*	formdata.append("myear",this.music.myear);*/
				var config={
  			headers:{
  				"Content-type":"multipart/form-data"
  			}
  		}  
  		
  			this.$http.put("http://localhost:8086/admin/alterMusic",formdata,config).then(
  			function(result){
  				console.log(result);
  					this.music={
			    		mname:'',
			    		type:'',
			    		sname:'',
			    		sid:'',
			    		mimg:'',
			    		myear:''
			    };
  				alert("修改成功！！");
  				this.$router.go(0);
  			},function(error){
  				console.log("修改失败");
  			}
  		)
  			}else{
  				this.$http.put("http://localhost:8086/admin/updateMusic",{
  			params:{
  			"mname":this.music.mname,
  			"mid":this.music.mid,
  			"type":this.music.type,
  			"sid":this.music.sid,
  			"mimg":this.music.mimg,
  			"myear1":this.music.myear
  			}
  		
  		}).then(
  			function(){
  				alert("修改成功");
  				this.$router.go(0);
  				
  			},
  			function(){
  				alert("新增失败");
  			}
  		)
  			}
  		
  		},
  	
  	clearMusic:function(){
  		this.music={
			    		mname:'',
			    		type:'',
			    		sname:'',
			    		sid:'',
			    		mimg:'',
			    		myear:''
			    }
  	}
  	
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-nav{
	height: 8%;
	width: 100%;
	overflow: hidden;
	margin-top: -2%;
	background: white;
}
.table-wrap{
	height: 75%;
	overflow: scroll;
}
.table-wrap::-webkit-scrollbar {
        display: none;
    }
.my-nav .pagination{
	margin-top: -0.01%;
	margin-left: 38%;
}
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
