<template>
  <div class="dashboard-container">
    <h3>标题组件</h3>
    <div v-highlight class="commonBox">
      <CommonTitle title="常用标题" collapse>
        <el-button type="primary">slot btn</el-button>
        <el-button type="primary">slot btn</el-button>

        <template slot="collapse">
          <div>
            折叠面板配置 collapse 为 true,
            <br>
            插入slot dom
          </div>
        </template>
      </CommonTitle>

      <pre>
       <code class="javascirpt" v-text="titleDom" />
      </pre>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ComponentsLibTitle',
  components: {
  },
  data() {
    return {
      titleDom: `
          <CommonTitle title="常用标题" collapse>
            <el-button type="primary">slot btn</el-button>
            <el-button type="primary">slot btn</el-button>

            <template slot="collapse">
              <div>
                折叠面板配置 collapse 为 true,
                <br>
                插入slot dom
              </div>
            </template>
          </CommonTitle>
      `

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
</style>
