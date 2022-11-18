<template>
  <div class="newfound">
    <div class="wrapper">
        <div class="big">页面不见了......</div>
        <div>首页瞧瞧.点击 <router-link to="">这里</router-link>进入首页.</div>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style>
body{
    width: 100%;
    height: 100%;
    background: url('../assets/404.jpg');
}
.newfound{
    height: 100%;
    width: 100%;

}
.newfound .wrapper{
    position: absolute;
    left: auto;
    right: 0;
    width: 100%;
    max-width: 900px;
    top: 35%;
}
.newfound .wrapper a{
   color: #ffcc00;
   text-decoration: none;
   font-weight: 700;
   cursor: pointer;
}
.newfound .wrapper .big{
    font-size: 42px;
    line-height: 50px;
    margin-bottom: 15px;
}
</style>