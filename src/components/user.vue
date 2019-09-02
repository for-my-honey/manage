<template>
  <div class="hello">
   <header>
        <nav class="navbar-default navbar">
            <div class="container-fluid"><h3>用户管理</h3><span class="logo"></span></div>
        </nav>
    </header>
 <!--   <form class="navbar-form navbar-btn-right" role="search">
            请在此处搜索：
            <div class="form-group">
              <input type="text" class="form-control text-my" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default btn-primary">搜索</button>
    </form>-->
    <table class="table table-bordered text-center table-hover">
           <thead>
               <td></td>
               <td>ID</td>
               <td>用户账号</td>
               <td>用户邮箱</td>
               <td>用户类型</td>
               <td>性别</td>
               <td>是否可用</td>
               <td>注册时间</td>
               <td>操作</td>
           </thead>
           <tr>
                <td><input type="checkbox" name="" id=""></td>
                <td>1</td>
                <td>哈哈哈</td>
                <td>1225044799@qq.com</td>
                <td>管理员</td>
                <td>男</td>
                <td>yes</td>
                <td></td>
                <td><input type="button" value="禁用" class="btn btn-warning"></td>
           </tr>
           <tr>
                <td><input type="checkbox" name="" id=""></td>
                <td>2</td>
                <td>哈哈哈</td>
                <td>1225044799@qq.com</td>
                <td>管理员</td>
                <td>男</td>
                <td>yes</td>
                <td></td>
                <td><input type="button" value="禁用" class="btn btn-warning"></td>
           </tr>
           <tr>
                <td><input type="checkbox" name="" id=""></td>
                <td>3</td>
                <td>哈哈哈</td>
                <td>1225044799@qq.com</td>
                <td>管理员</td>
                <td>男</td>
                <td>yes</td>
                <td></td>
                <td><input type="button" value="禁用" class="btn btn-warning"></td>
           </tr>
           <tr>
                <td><input type="checkbox" name="" id=""></td>
                <td>4</td>
                <td>哈哈哈</td>
                <td>1225044799@qq.com</td>
                <td>管理员</td>
                <td>男</td>
                <td>yes</td>
                <td></td>
                <td><input type="button" value="禁用" class="btn btn-warning"></td>
           </tr>
    </table>
    
  </div>
</template>

<script>
	/* $(function() {
            $('tr').each(function() {
                var index=$(this).index()
                if(index%2==1){
                    $(this).css("background","#adcae2")
                }
            })
            $('.text-my').focus()
        })*/
export default {
  name: 'user',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	 header h3{
            color: gray;
            float: left;
            display: block;
            margin: 0;
            height: 56px;
            line-height: 56px;
        }
      
       .container-fluid{
  	width: 500px;
  }
  td, th{
  	height: 50px;
  }  
</style>
