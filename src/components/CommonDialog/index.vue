<template>
  <el-dialog
    class="CommonDialog"
    :title="title"
    :center="center"
    :visible.sync="visible"
    :width="width"
    :show-close="showClose"
    :destroy-on-close="destroyOnClose"
    :close-on-click-modal="closeOnClickModal"
    @close="close"
  >
    <slot v-if="titleSlot" slot="title" name="title" />
    <slot />
    <slot name="footer" />
    <span v-if="footer" slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submit ">确 定</el-button>
      <el-button class="grayBtn" @click="visible = false">取 消</el-button>
    </span>
  </el-dialog>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    titleSlot: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '60%'
    },
    center: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visible: false
    }
  },
  watch: {
    modal(val) {
      console.log(val)
      this.visible = val
    }
  },
  methods: {
    submit() {
      this.$emit('submit')
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang='scss' scoped>
.CommonDialog{
  border-radius:6px;
  ::v-deep {
    .el-dialog__header{
      padding:20px 0;
      margin: 0 20px;
      border-bottom: 1px solid #c6c6c6;
    }
    .el-dialog__title{
      font-size: 16px;
    }
    .el-dialog__body{
      overflow: hidden;
    }
  }

}

</style>
