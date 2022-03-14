<template>
  <el-form :label-width="labelWidth">
    <el-row :gutter="12">
      <el-col v-for="item in viewOpt" :key="item.label+item.value" :span="item.span || 8">
        <el-form-item v-if="item.slotName" :label="item.label ? item.label+':' : item.label" :label-width="item.labelWidth">
          <slot :name="item.slotName" :item="item" />
        </el-form-item>
        <el-form-item
          v-else-if="item.option"
          :label="item.label+':'"
          :label-width="item.labelWidth"
          :style="{color: item.color ? item.color[viewData[item.value]] : 'inherit'}"
        >
          {{ viewData[item.value] | getOption(item) }}
        </el-form-item>
        <el-form-item v-else-if="item.divider" label="" :label-width="item.labelWidth" class="myDivider">
          <el-divider />
        </el-form-item>
        <el-form-item
          v-else
          :label="item.label+':'"
          :label-width="item.labelWidth"
          :style="{color: item.color ? item.color : 'inherit'}"
        >
          {{ viewData[item.value] || '--' }}
        </el-form-item>
      </el-col>
    </el-row>

  </el-form>
</template>

<script>
export default {
  name: 'CommonFormView',
  components: {
  },
  filters: {
    getOption(value, item) {
      const { option } = item
      if (Array.isArray(option)) {
        // eslint-disable-next-line eqeqeq
        const res = option.filter(item => item.value == value)
        return res.length ? res[0].label : ''
      } else {
        console.error(`form item '${item.label}' option is not array,should be a [{ label value}]`)
        return ''
      }
    }
  },
  props: {
    labelWidth: {
      type: String,
      default: () => '150px'
    },
    viewOpt: {
      type: Array,
      default: () => []
    },
    viewData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
//fixed floating box left, second row, first DOM floating right
.el-col{
  min-height: 60px;
}
.myDivider{
  margin-bottom: 0;
}

</style>
