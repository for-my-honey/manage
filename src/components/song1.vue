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
					<button class="btn btn-default" type="button" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-plus"></span></button> 
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
							<tr class="success">

							</tr>
							<tr class="error">

							</tr>
							<tr class="warning">

							</tr>
							<tr class="info">

							</tr>
						</tbody>
					</table>					
<!-- ************************模态框部分************************ -->
<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog parent" role="document">
    <div class="modal-content parent">
      <div class="modal-header head-1">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">编辑歌曲</h4>
      </div>
	  <div class="special">
	  <div class="input-content">
		<form class="form-inline">
  		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<!-- <input type="text" class="form-control"> -->
			<select name="" id="" class="form-control drop">
				<option value="1">1</option>
				<option value="1">1</option>
				<option value="1">1</option>
				<!-- 增加option添加选项 -->
			</select>
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<!-- <input type="text" class="form-control"> -->
			<select name="" id="" class="form-control drop">
				<option value="1">1</option>
				<option value="1">1</option>
				<option value="1">1</option>
			</select>
  		</div>
		<div class="form-group-special">
			<label class="label-special"><h5>选择歌曲：</h5><input type="file" name="" id="" class="up"></label>
  		</div>
		  	<div class="foot">
		<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-primary">保存</button>
	</div>
	</form>
	</div>
	</div>
    </div>
  </div>
</div>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog parent" role="document">
    <div class="modal-content parent">
      <div class="modal-header head-1">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">增加歌曲</h4>
      </div>
	  <div class="special">
	  <div class="input-content">
		<form class="form-inline">
  		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<!-- <input type="text" class="form-control"> -->
			<select name="" id="" class="form-control drop">
				<option value="1">1</option>
				<option value="1">1</option>
				<option value="1">1</option>
				<!-- 增加option添加选项 -->
			</select>
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">Name</label>
    		<!-- <input type="text" class="form-control"> -->
			<select name="" id="" class="form-control drop">
				<option value="1">1</option>
				<option value="1">1</option>
				<option value="1">1</option>
			</select>
  		</div>
		<div class="form-group-special">
			<label class="label-special"><h5>选择歌曲：</h5><input type="file" name="" id="" class="up"></label>
  		</div>
		  	<div class="foot">
		<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-primary">保存</button>
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
  name: 'song'
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
	height: 415px;
}
.label-special .up{
	width:200px;
	margin: 0 40px;
	overflow: hidden;
}
.parent{
	/* position: relative; */
	height: 500px;
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
