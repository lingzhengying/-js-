<template>
  <div class="home">
      <Header/>
      <el-container class="content">
         <Menu/>
         <el-container>
        <el-main>
          <Bread/>
          <div class="cont">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer><Footer/></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './common/Header'
import Footer from './common/Footer'
import Menu from './common/Menu'
import Bread from './common/Breadcrumb'
export default {
  components:{
    Header,
    Footer,
    Menu,
    Bread
    },
  data(){
    return {}
  },
}
</script>

<style scoped>
.home{
 width: 100%;
 height: 100%;
}
.home .content{
  position: absolute;
  width: 100%;
  top: 60px;
  bottom: 0;
}
.home .content .cont{
  text-align: center;
  margin-top: 20px;
}
</style>
