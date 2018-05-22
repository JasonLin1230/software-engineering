<template>
  <div class="table">
      <el-table
        :data="tableData"
        border
        style="width: 1200px;margin: 0 auto;"
        :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column
          sortable
          prop="date"
          label="入馆日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="书名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="province"
          label="作者"
          width="150">
        </el-table-column>
        <el-table-column
          prop="city"
          label="出版社"
          width="150">
        </el-table-column>
        <el-table-column
          prop="address"
          label="索书号"
          width="400">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="可借复本"
          width="145">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="80">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="30"
        layout="total, sizes, prev, pager, next"
        :total="100"
        class="table_page">
      </el-pagination>
  </div>
</template>

<script>
    export default {
        name: "Table",
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
                value: 'all',
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }],
                currentPage: 1
            }
        },
        methods: {
            handleClick(row) {
                console.log(row);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>
.table_page{
  margin: 30px 0;
}
</style>