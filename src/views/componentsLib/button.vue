<template>
  <div class="dashboard-container">
    <h3>按钮</h3>

    <div class="commonBox">
      <div class="allbtn">
        <el-button type="primary">type="primary"</el-button>
        <el-button class="grayBtn">class="grayBtn"</el-button>
        <el-button class="purpleBtn">class="purpleBtn"</el-button>
        <el-button class="orangeBtn2">class="orangeBtn2"</el-button>
        <el-button class="redBtn">class="redBtn"</el-button>
        <el-button class="orangeBtn">class="orangeBtn"</el-button>
        <el-button class="greenBtn">class="greenBtn"</el-button>

        <el-button class="greenBtnPlan">class="greenBtnPlan"</el-button>
        <el-button class="orangeBtnPlan">class="orangeBtnPlan"</el-button>
        <el-button class="cyanBtn">class="cyanBtn"</el-button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsLibButton',
  components: {
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.dashboard-container{
  code{
      user-select: all;
  }
}
  .allbtn{
    .el-button{
      margin: 0 15px 15px 0px;
      user-select: all;
    }
  }
</style>
