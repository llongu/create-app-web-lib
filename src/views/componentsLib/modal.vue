<template>
  <div class="dashboard-container">
    <h3>弹窗</h3>
    <div v-highlight class="commonBox">
      <CommonDialog
        title="提示"
        width="500px"
        :center="false"
        :modal="tipModal"
        :footer="true"
        @submit="submit"
        @close="tipModal=false"
      >
        <div>
          默认 content
        </div>
        <template slot="footer">
          <div style="float:left;margin-top:20px">
            <el-button type="primary" @click="submit">插入btn</el-button>
            <el-button class="grayBtn" @click="tipModal = false">插入btn</el-button>
          </div>
        </template>
      </CommonDialog>

      <pre>
       <code class="javascirpt" v-text="ModalDom" />
       <code class="javascirpt" v-text="ModalMethods" />
      </pre>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ComponentsLibModal',
  components: {
  },
  data() {
    return {
      tipModal: false,
      ModalDom: `
           <CommonDialog
              title="提示"
               width="500px"
               // 默认 false
              :center="false"
               :modal="tipModal"
              @submit='submit'
              // 默认true 展示footer 自带btn
              :footer="true"
              // :titleSlot='true'
              @close="tipModal=false"
            >
              <div slot='title'>
                自定义title 配置 slot title , :titleSlot='true' 
              </div>
              <div>
                默认 content
              </div>
              // 自定义 footer  
              <template slot="footer">
                <div style="float:left;margin-top:20px">
                  <el-button type="primary" @click="submit">插入btn</el-button>
                  <el-button class="grayBtn" @click="tipModal = false">插入btn</el-button>
                </div>
              </template>
            </CommonDialog>
      `,
      ModalMethods: `
         methods: {
            submit() {
              
            }
          }
      `
    }
  },
  activated() {
    setTimeout(() => {
      this.tipModal = true
    }, 500);
  },
  deactivated() {
    this.tipModal = false
  },
  methods: {
    submit() {

    }
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
