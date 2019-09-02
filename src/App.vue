<template>
  <div id="app">
  	<header>
        <div class="panel panel-special">
            <h3>享听音乐后台系统</h3>
            <span class="head-image"></span>        
        </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped="">
    /* .v-enter,.v-leave-to{
        opacity: 0;
    }
    .v-enter-active,.v-leave-active{
        transition: all 0.3s ease;
    } */
/*a{
	color: black;
}*/
</style>
