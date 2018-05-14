<template>
  <el-main>
    <h2 class="main_title">馆藏检索</h2>
    <!--<el-row>-->
      <!--<el-col :span="24">-->
        <!--<div class="demo-input-suffix">-->
          <!--<el-input-->
            <!--placeholder="请输入内容"-->
            <!--prefix-icon="el-icon-search"-->
            <!--clearable-->
            <!--v-model="input">-->
          <!--</el-input>-->
        <!--</div>-->
      <!--</el-col>-->
    <!--</el-row>-->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="图书检索">
        <el-input v-model="formInline.search" placeholder="请输入检索词"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">检索</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        formInline: {
          search: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>

</style>
