<template>
  <el-main>
    <p>借阅历史</p>
    <my-table></my-table>
  </el-main>
</template>

<script>
    import Table from './common/Table.vue'
    export default {
        name: "Borrow",
        components: {
            'my-table': Table
        }
    }
</script>

<style scoped>

</style>
