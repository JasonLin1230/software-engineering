<template>
<el-main>
    <el-form ref="form" :model="form" label-width="100px" class="recommend_form">
      <el-form-item label="书名">
        <el-input v-model="form.sm" placeholder="请输入书名"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.zz" placeholder="请输入作者"></el-input>
      </el-form-item>
      <el-form-item label="版次">
        <el-input v-model="form.bb" placeholder="请输入版次(数字)" type="number" maxlength="1"></el-input>
      </el-form-item>
      <el-form-item label="推荐理由">
        <el-input type="textarea" v-model="form.reason"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button native-type="reset">重置</el-button>
      </el-form-item>
    </el-form>
</el-main>
</template>

<script>
    export default {
        name: "Recommend",
        data(){
            return{
                form: {
                    sm: '',
                    zz: '',
                    bb: ''
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

<style scoped>
.recommend_form{
    width: 460px;
    margin: 0 auto;
}
</style>
