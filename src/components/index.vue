<template>
  <div id="backmain">
	<!--前半部分-->
		<ul class="nav nav-tabs nav-my">
			<li class="active ">
				<a href="#">后台主页</a>
			</li>
		</ul>
		<div class="head-my">
			<div class="wrap">
				<div class="num">
					<p>用户总数：</p>
					<h1>5</h1>
					<span></span>
					<h4>在线用户数：</h4><h5>1</h5>
				</div>
				<div class="num">
					<p>用户总数：</p>
					<h1>5</h1>
					<span></span>
					<h4>在线用户数：</h4><h5>1</h5>
				</div> 
				<div class="num">
					<p>用户总数：</p>
					<h1>5</h1>
					<span></span>
					<h4>在线用户数：</h4><h5>1</h5>
				</div> 
				<div class="num">
					<p>用户总数：</p>
					<h1>5</h1>
					<span></span>
					<h4>在线用户数：</h4><h5>1</h5>
				</div>
				<p>版权信息-电哥出品</p>  
			</div>
			
		</div>
</div>
</template>

<script>
export default {
  name: 'index'
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap>p{
	clear: both;
	text-align: right;
	padding-top: 28px;
}
.wrap{
	margin-top: 0;
}
.nav-my{
	border-bottom: 1px solid #ebebeb;
	
}
.nav-my .active{
	border-bottom: 1px solid #ebebeb;

}
.wrap .num p{
	font-size: 24px;
}
.wrap .num h1,h5{
	margin-left: 70%;
	color: #5b5b5b;
}
.wrap .num h5{
	font-size: 20px;
}
.wrap .num span{
	display:block;
	width: 100%;
	border-top:1px solid gray;
	opacity: 0.4;
}
	.num{
		/* border-radius: 20%; */
		padding: 10px 20px;
		border: 1px solid #c9c9c9;
		margin-top: 30px;
		width: 30%;
		height: auto;
		float: left;
		margin-left: 12%;
		color: #676a6d;
		background: #f5f5fa;
	}
	.my-special{
		float:right;
	}
	#backmain,.wrap{
		height: 90%;
	}
</style>
