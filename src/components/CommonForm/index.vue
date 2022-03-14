<template>
  <el-form ref="myForm" class="myForm" :label-width="labelWidth" :rules="rules" :label-position="labelPosition" :model="myForm">
    <el-row :gutter="12">
      <el-col v-for="(item,indexs) in formData" :key="indexs" :span="item.span || colNum">
        <!-- slot -->
        <slot v-if="item.slotName" :name="item.slotName" :myForm="myForm" />
        <!-- select -->
        <el-form-item v-else-if="item.option" :label="item.label+':'" :prop="item.value" :label-width="item.labelWidth">
          <el-select v-model="myForm[item.value]" :placeholder="item.placeholder || '请选择'+item.label " :disabled="item.disabled" clearable @change="selectChange($event,item)">
            <el-option v-for="option in item.option" :key="option.value" :label="option.label" :value="option.value" />
          </el-select>
        </el-form-item>
        <!-- timerpicker -->
        <el-form-item v-else-if="item.timePicker" :label="item.label+':'" :prop="item.value" :label-width="item.labelWidth">
          <el-time-picker v-model="myForm[item.value]" is-range :format="item.timePicker.valueFormat || 'HH:MM:SS'" :value-format=" item.timePicker.valueFormat || 'HH:MM:SS'" :range-separator="item.timePicker.rangeSeparator || '至' " :start-placeholder="item.timePicker.startPlaceholder || '开始时间'" :end-placeholder="item.timePicker.endPlaceholder || '结束时间'" :disabled="item.disabled" />
        </el-form-item>
        <!-- datepicker -->
        <el-form-item v-else-if="item.datePicker" :label="item.label+':'" :prop="item.value" :label-width="item.labelWidth">
          <el-date-picker v-model="myForm[item.value]" :type="item.datePicker.type || 'daterange'" :value-format=" item.datePicker.valueFormat || 'yyyy-MM-dd'" :range-separator="item.datePicker.rangeSeparator || '至' " :start-placeholder="item.datePicker.startPlaceholder || '开始时间'" :end-placeholder="item.datePicker.endPlaceholder || '结束时间'" :placeholder="item.datePicker.placeholder || '选择时间'" :disabled="item.disabled" />
        </el-form-item>
        <!-- region -->
        <el-form-item v-else-if="item.region" :label="item.label+':'" :prop="item.value" :label-width="item.labelWidth">
          <v-region v-model="myForm[item.value]" :type="item.region.type || 'group'" :town="item.region.town" :area="item.region.area" :city="item.region.city" :disabled="item.disabled" @values="regionValues($event,item)" />
        </el-form-item>
        <!-- radio -->
        <el-form-item v-else-if="item.radio" :label="item.label+':'" :prop="item.value" :label-width="item.labelWidth">
          <el-radio-group v-model="myForm[item.value]" :disabled="item.disabled">
            <el-radio v-for="radio in item.radio" :key="radio.value" :label="radio.value">
              {{ radio.label }}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- inputNumber  -->
        <el-form-item v-else-if="item.inputNumber" :label="item.label+':'" :prop="item.value" :label-width="item.labelWidth">
          <el-input-number v-model="myForm[item.value]" :min="item.inputNumber.min || 0" :max="item.inputNumber.max" :precision="item.inputNumber.precision || 0" :step="item.inputNumber.step || 1" label="描述文字" :disabled="item.disabled" />
        </el-form-item>
        <!-- input -->
        <el-form-item v-else :label="item.label+':'" :prop="item.value" :label-width="item.labelWidth">
          <el-input v-model.trim="myForm[item.value]" :placeholder="item.placeholder || '请输入'+item.label" :type="item.type || 'text'" :maxlength="item.maxLength" :rows="item.rows || 2" :disabled="item.disabled">
            <template v-if="item.suffix" slot="suffix">{{ item.suffix }}</template>
          </el-input>
        </el-form-item>
      </el-col>
      <el-form-item v-if="searchBtn" style="float:right">
        <el-button type="primary" @click="submit">查询</el-button>
        <el-button class="grayBtn" @click="reset">重置</el-button>
      </el-form-item>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'CommonForm',
  components: {
  },
  props: {
    colNum: { // 默认 4栏布局
      type: Number,
      default: () => 6
    },
    searchBtn: { // 默认为 搜索btn ,自定义bnt配置值为false，使用 slot插入
      type: Boolean,
      default: () => true
    },
    labelWidth: {
      type: String,
      default: () => '100px'
    },
    labelPosition: {
      type: String,
      default: () => 'right'
    },
    formData: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => { }

    }
  },
  data() {
    return {
      myForm: {}
    }
  },
  methods: {
    submit() {
      console.log(this.myForm)
      this.$refs['myForm'].validate((valid) => {
        if (valid) {
          this.$emit('submit', this.myForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    selectChange(data, item) {
      this.$emit(item.value + 'SelectChange', data, item)
    },
    regionValues(datas, item) {
      const formValue = this.myForm[item.value]
      if (formValue) {
        Object.keys(formValue).forEach(n => {
          if (formValue[n] && datas[n]) {
            formValue[n + '_name'] = datas[n].value
          } else {
            delete formValue[n + '_name']
          }
        })
      }
      this.myForm[item.value] = { ...formValue }
    },
    reset() {
      this.myForm = {}

      // this.$refs.myForm.resetFields()
      this.formData.forEach(item => {
        // timerpicker rest ，elementui bug hack
        if (item.timePicker) {
          this.myForm[item.value] = ''
        }
        // v-region
        if (item.region) {
          this.myForm[item.value] = {
            province: null,
            city: null,
            area: null,
            town: null
          }
        }
      })

      this.$emit('reset', this.myForm)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-range-editor.el-input__inner,
.el-select {
  width: 100%;
}
//fixed floating box left, second row, first DOM floating right
.el-col {
  min-height: 60px;
}
.myForm ::v-deep {
  .el-divider--horizontal {
    margin-top: 0;
  }
}
</style>
