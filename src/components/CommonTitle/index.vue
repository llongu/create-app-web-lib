<template>
  <div class="titleBox" :style="{margin:margin}">
    <div class="boxTop">
      <div class="le">
        <div class="blueLine" />
        <div class="title">{{ title }}</div>
      </div>
      <div class="ri">
        <slot />
        <span v-if="collapse" class="expand" @click="expand">
          {{ isExpand ? '折叠':'展开' }}
          <i v-show="!isExpand" class="el-icon-arrow-right" />
          <i v-show="isExpand" class="el-icon-arrow-down" />
        </span>
      </div>
    </div>

    <div v-if="collapse" class="collapse" :style="{maxHeight:isExpand ? '10000px' : 0}">
      <slot name="collapse" />
    </div>

  </div>
</template>

<script>

export default {
  props: {
    collapse: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    margin: {
      type: String,
      default: '-20px 0 0 0'
    }
  },
  data() {
    return {
      isExpand: true
    }
  },
  computed: {
  },
  methods: {
    expand() {
      this.isExpand = !this.isExpand
    }
  }
}
</script>

<style lang="scss" scoped>
.titleBox{
  padding: 20px 0;
  .boxTop{
     width: 100%;
     padding-bottom: 20px;
     border-bottom: 1px solid #DEDEDE;
     display: flex;
     justify-content: space-between;
     align-items: center;
    flex-wrap: wrap;

     .le{
      display: flex;
        .blueLine{
          width: 4px;
          height: 18px;
          background: #027FED;
          border-radius: 2px;
        }
        .title{
          font-size: 16px;
          font-weight: 500;
          color: #333333;
          padding-left: 14px;
        }
    }
  }

  .collapse{
    clear:both;
    width: 100%;
    overflow: hidden;
    margin-top:20px;
    transition: max-height 0.3s;

  }
  .expand{
    color: #7e7070;
    padding-left:15px;
    cursor: pointer;
    font-size: 14px;
    user-select: none;
  }

}

</style>
