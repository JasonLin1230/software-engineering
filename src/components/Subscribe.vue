<template>
  <el-main>
      <p>预约历史</p>
      <my-table></my-table>
  </el-main>
</template>

<script>
    import Table from './common/Table.vue'
    export default {
        name: "Subscribe",
        components: {
            'my-table': Table
        }
    }
</script>

<style scoped>

</style>
