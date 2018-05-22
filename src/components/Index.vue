<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Index',
  mounted(){
      this.init()
  },
  data () {
    return {
      msg: 'Welcome to 巴啦啦图书馆'
    }
  },
  methods: {
    init() {
      this.$alert('您有一本书超过应还日期啦！', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          // this.$message({
          //   type: 'info',
          //   message: `action: ${ action }`
          // });
        }
      });
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
