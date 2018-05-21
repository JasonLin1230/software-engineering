<template>
  <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link to="/"><img src="../../assets/book.png">  巴啦啦图书馆</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/search">馆藏检索</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/borrow">借阅历史</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/subscribe">预约记录</router-link></el-menu-item>
        <el-menu-item index="5"><router-link to="/recommend">图书荐购</router-link></el-menu-item>
        <!-- <el-submenu index="6" class="right">
            <template slot="title">我的信息</template>
            <el-menu-item index="6-1"><router-link to="/alter">修改信息</router-link></el-menu-item>
            <el-menu-item index="6-2"><router-link to="/">退出登录</router-link></el-menu-item>
        </el-submenu> -->
        <el-dropdown class="right">
          <span class="el-dropdown-link">
            我的信息<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>
<script>
  export default {
    name: 'Nav',
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
  .el-menu-item{
    padding: 0;
  }
  .el-menu-item a{
    height: 100%;
    display: block;
    padding: 0 20px;
  }
</style>
