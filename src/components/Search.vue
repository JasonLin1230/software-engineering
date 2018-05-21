<template>
  <el-main>
    <h2 class="main_title">馆藏检索</h2>
    <el-form :inline="true" :model="formInline" class="">
      <el-form-item label="馆藏检索">
        <el-input v-model="formInline.search" placeholder="请输入检索词"></el-input>
      </el-form-item>
      <el-select v-model="value" placeholder="请选择" class="search_type">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="onSubmit">检索</el-button>
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
        },
        options: [{
          value: 'all',
          label: '任意词'
        }, {
          value: 'sm',
          label: '书名'
        }, {
          value: 'zz',
          label: '作者'
        }, {
          value: 'isbn',
          label: 'ISBN'
        }, {
          value: 'ssh',
          label: '索书号'
        }],
        value: 'all'
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
.search_type{
  width: 100px;
}
</style>
