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
			</form>
		</div>
		<table class="table text-center table-singer table-hover">
			<thead>
				<tr>
					<th class="text-center">ID</th>
                    <th class="text-center">歌手名称</th>
                    <th class="text-center">性别</th>
                    <th class="text-center">歌手图片</th>
                    <th class="text-center">歌手介绍</th>
                    <th class="text-center">类型名称</th>
                    <th class="text-center">首字母</th>
                    <th class="text-center">操作</th>
				</tr>
			</thead>
			<tbody>
				<tr class="special" v-for="(singer,index) in list">
					
                    <td>{{index+1}}</td>
                    <td>{{singer.sname}}</td>
                    <td>{{singer.sex}}</td>
                    <td>
                        <!--<img src="../../src/assets/singer/300.jpg" alt="李健" width="40px">-->
                        	<img src="D:\music\img" width="40px">
                    </td>
                    <td class="introduce"><p>{{singer.detail}}</p></td>
                    <td>{{singer.type}}</td>
                    <td>{{singer.sreserve}}</td>
                    <td>
                        <input type="button" @click="selectSingerById(singer.sid)" value="编辑" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        <input type="button" @click="deleteSinger(singer.sid)" value="移除" class="btn btn-warning">
                    </td>				
				</tr>
			
			</tbody>

            <!-- 模态框****************************** -->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog parent" role="document">
    <div class="modal-content parent">
      <div class="modal-header head-1">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">编辑歌手</h4>
      </div>
	  <div class="special">
	  <div class="input-content">
		<form class="form-inline">
  		<div class="form-group form-group-special">
    		<label for="exampleInputName2">歌手名称</label>
    		<input v-model="singer.sname" type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
			<div class="form-group form-group-special">
    		<label for="exampleInputName2">歌手性别</label>
    		<!-- <input type="text" class="form-control"> -->
			<select  name="" id="" class="form-control drop" v-model="singer.sex">
				<option value="男">男</option>
				<option value="女">女</option>
			
			</select>
  		</div>
		<div class="form-group form-group-type">
    		<label for="exampleInputName2">歌手类型</label>
    	
			<select   name="" id="" class="form-control drop" v-model="singer.type">
				
				<option value="华语">华语</option>
				<option value="港台">港台</option>
				<option value="欧美">欧美</option>
				<option value="韩国">韩国 </option>
				<option value="日本">日本</option>
			
				
			
			</select>
  		</div>
	
		
        <div class="form-group form-group-special">
    		<label for="exampleInputName2">歌手介绍:</label>
            <textarea v-model="singer.detail" name="" id="" cols="30" rows="10" class="form-control" placeholder="填写歌手介绍"></textarea>
  		</div>
          		<!--<div class="form-group-special">
			<label class="label-special"><h5>选择图片：</h5><input type="file" name="" id="" class="up"></label>
		
  		</div>-->
		<div class="foot">
		    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" @click="updateSinger">保存</button>
	    </div>
	</form>
	</div>
	</div>
    </div>
  </div>
</div>
		</table>
        
  </div>
</template>
<script>
// import upload from '@/components/upload'	
export default {
  name: 'singer',
  data(){
  	return {
  		
  		list:['dada'],
  		imgList:[],
  		singer:{
  			sid:'',
  			sname:'',
  			sex:'',
  			type:'',
  			detail:''
  			
  		}
  	}
  },
  
  created:function(){
  	this.singerList();
  },
  methods:{
  	singerList:function(){
  		this.$http.get("http://localhost:8086/admin/singer").then(
  			function(result){
  				this.list=result.body;
  			},
  			function(error){
  				alert("加载数据失败")
  			}
  		)	
  	},
  	
 /* 	删除*/
  	deleteSinger:function(sid){
  		console.log(sid);
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
  	},
/*  	修改*/
		selectSingerById:function(sid){
  		console.log(sid);
  		this.$http.get("http://localhost:8086/admin/selectSingerById",{
  		params:{
  			sid:sid
  		}
  		}).then(
  			function(result){
  			
  				this.singer=result.body;
  				console.log(this.singer)
  			},
  			function(error){
  				alert("加载数据失败")
  			}
  		)	
  	},
  	updateSinger:function(){
  		console.log(this.singer);
  		this.$http.get("http://localhost:8086/admin/updateSinger",{
  			params:{
  			"sid":this.singer.sid,
  			"sname":this.singer.sname,
  			"sex":this.singer.sex,
  			"type":this.singer.type,
  			"detail":this.singer.detail
  			}
  		/*this.$http.post("http://localhost:8086/admin/updateSinger",{
  			
  			"sid":this.singer.sid,
  			"sname":this.singer.sname,
  			"sex":this.singer.sex,
  			"type":this.singer.type,
  			"detail":this.singer.detail*/
  		}).then(
  			function(){
  				alert("修改成功");
  				this.$router.go(0);
  				/*this.emp={
			     	name:'',
			     	age:'',
			     	sex:''
			     }*/
  			},
  			function(){
  				alert("修改失败");
  			}
  		)
  	}



  	/*{
  	synImg:function(data){
  		this.imgList=data;
  	},
  	*/
  	
  /*	sub:function(){
  		
   var formdata = new FormData();
          	for(var i=0;i<this.imgList.length;i++){
          		formdata.append("file",this.imgList[i].file);
          	}
          	
          	
  	     var config={
		  			headers:{
		  				"Content-type":"multipart/form-data",
		  			}
		  		}
		  		
		  		this.$http.post("http://localhost:8086/upload",formdata,config).then(
		  			function(result){
		  				console.log(result);
		  				console.log(result.bodyText);
		  				alert("文件上传成功");
		  				this.$router.go(0);
		  			},function(error){
		  				console.log(error.body.message);//打印错误信息
		  			}
		  		)
  	}*/
  	
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
.introduce {
    padding-bottom: 0;
}
.introduce p{
    /* text-decoration: none;
    font-style: none; */
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    margin: 0;
}
.table-singer tr td{
    line-height: 30px;
    padding-top: 10px;

}
/* .table-singer tr td:nth-child(4){
    display: block;
    margin-bottom: 5px;
    margin: 0;
    border-top: none;
} */
.search{
	line-height: 50px;
}
.label-special{
    margin-left: -250px;
}
.label-special .up{
	width:200px;
	margin: 0 40px;
	overflow: hidden;
}
.label-special h5{
    text-align: left;
    margin-left: -16px;
    color: #333;
    font-weight: 800;
}
.parent{
	/* position: relative; */
    height: 430px;
    width: 650px;
	margin: 80px auto;
}
.head-1{
	height: 50px;
}
	 /* .my-special{
		 margin: 0;
		 width: 550px;
		 height: 350px;
	 } */
	 .foot{
		 height: 50px;
		 text-align: right;
	 }
	 .foot button{
		 margin-right: 20px;
		 margin-top: 40px;
	 }
	 .form-group-special{
         margin: 20px 25px;
	 }
	 .form-group-type{
		  margin: 20px 25px;
		  margin-right: 335px;
	 }
      .form-group-special textarea{
          width: 500px;
          height: 80px;
          resize: none;
      }
</style>
