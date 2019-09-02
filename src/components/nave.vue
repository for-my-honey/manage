<template>
<div id="load-template">
    <nav>
        <div class="wrap">
            <ul class="list-group">
                <li class="list-group-item list-special"><span class="glyphicon glyphicon-cog span0"></span>系统设置<span class="glyphicon glyphicon-triangle-bottom span1"></span></li>
                <ul class="list-group list-son">
                	 <router-link to='/index' ><li class="list-group-item"><span class="glyphicon glyphicon-home"></span>网站首页</li></router-link>	
                    <!-- <a href="guanwang.html" target="myFrame"><li class="list-group-item"><span class="glyphicon glyphicon-home"></span>网站首页</li></a> -->
                    <router-link to="/user"><li class="list-group-item"><span class="glyphicon glyphicon-user"></span>用户管理</li></router-link>
                    <!--<a href="lunbotu.html" target="myFrame"><li class="list-group-item"><span class="glyphicon glyphicon-picture"></span>轮播图管理</li></a>-->
                </ul>
            </ul>
            <ul class="list-group">
                <li class="list-group-item list-special"><span class="glyphicon glyphicon-user span0"></span>歌手(singer)<span class="glyphicon glyphicon-triangle-bottom span1"></span></li>
                <ul class="list-group list-son">
                        <router-link to="/addSinger"><li class="list-group-item"><span class="glyphicon glyphicon-plus"></span>新增歌手</li></router-link>
                        <router-link to="/singer"><li class="list-group-item"><span class="glyphicon glyphicon-user"></span>歌手管理</li></router-link>
                        <!-- <a href="lunbotu.html" target="myFrame"><li class="list-group-item"><span class="glyphicon glyphicon-text-width"></span>歌手类型</li></a> -->
                    </ul>
            </ul>
            <ul class="list-group">
                <li class="list-group-item list-special"><span class="glyphicon glyphicon-music span0"></span>歌曲(song)<span class="glyphicon glyphicon-triangle-bottom span1"></span></li>
                <ul class="list-group list-son">
                        
                        <router-link to='/song'><li class="list-group-item"><span class="glyphicon glyphicon-headphones"></span>歌曲管理</li></router-link>
                        <a href="user.html" target="myFrame"><li class="list-group-item"><span class="glyphicon glyphicon-file"></span>歌词管理</li></a>
                        <a href="lunbotu.html" target="myFrame"><li class="list-group-item"><span class="glyphicon glyphicon-save-file"></span>歌单管理</li></a>
                    </ul>
            </ul>
            <ul class="list-group">
                <li class="list-group-item list-special"><span class="glyphicon glyphicon-cd span0"></span>专辑(album)<span class="glyphicon glyphicon-triangle-bottom span1"></span></li>
            </ul>
            <ul class="list-group">
                <li class="list-group-item list-special"><span class="glyphicon glyphicon-bookmark span0"></span>标签(label)<span class="glyphicon glyphicon-triangle-bottom span1"></span></li>
            </ul>
            <ul class="list-group">
                <li class="list-group-item list-special"><span class="glyphicon glyphicon-list-alt span0"></span>榜单(list)<span class="glyphicon glyphicon-triangle-bottom span1"></span></li>
            </ul>
            <ul class="list-group">
                <li class="list-group-item list-special"><span class="glyphicon glyphicon-facetime-video span0"></span>mv<span class="glyphicon glyphicon-triangle-bottom span1"></span></li>
            </ul>
        </div>
    </nav>
    <div class="content">
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</div>

</template>

<script>
export default {
    name:'nave'
}
</script>
<style scoped>
    .v-enter,.v-leave-to{
        opacity: 0;
        transform: translateY(10px)
    }
    .list-son >a >.colors{
    color:#6ab5ff;
}
    .v-enter-active,.v-leave-active{
        transition: all 0.3s ease;
    }
    #load-template{
        height: 90%;
    }
/*a{
	color: black;
}*/
</style>
