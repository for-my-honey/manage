<template>
  <div>
	    <ul class="nav nav-tabs">
			<li class="active">
				<a href="#">新增歌手</a>
			</li>
		</ul>
	  <div class="special">
	  <div>
		<form class="form-inline">
  		<div class="form-group form-group-special">
    		<label for="exampleInputName2">歌手介绍</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">歌手介绍</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">歌手介绍</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">歌手介绍</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">歌手介绍</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
		<div class="form-group form-group-special">
    		<label for="exampleInputName2">歌手介绍</label>
    		<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  		</div>
        <div class="form-group form-group-special">
    		<label for="exampleInputName2">歌手介绍:</label>
            <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="填写歌手介绍"></textarea>
  		</div>
          		<div class="form-group-special">
			<label class="label-special"><h5>选择图片：</h5><input type="file" name="" id="" class="up"></label>
  		</div>
		<div class="foot">
		    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">保存</button>
	    </div>
	</form>
	</div>
	</div>
    </div>
</template>
<script>
export default {
  name: 'addSinger'
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.special{
	height: 80%;
}
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
    height: 500px;
    width: 650px;
	margin: 30px auto;
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
		 margin-right: 40px;
	 }
	 .form-group-special{
         margin: 20px 55px;
     }
      .form-group-special textarea{
          width: 500px;
          height: 80px;
          resize: none;
      }
</style>
