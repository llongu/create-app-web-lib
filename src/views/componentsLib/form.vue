<template>
  <div class="dashboard-container">
    <div v-highlight class="commonBox">
      <h3>表单详情预览组件</h3>
      <CommonFormView :view-data="viewData" :view-opt="viewOpt" label-width="180px">
        <el-button slot="mySlotName" type="primary">mySlot</el-button>
        <el-button slot="mySlotName2333" type="text">mySlotName2333</el-button>
      </CommonFormView>

      <pre>
          <code class="javascirpt" v-text="viewDataDom" />
          <code class="javascirpt" v-text="viewDataOpt" />
      </pre>

    </div>

    <div v-highlight class="commonBox">
      <h3>表单(表单搜索/表单编辑)组件</h3>
      <CommonForm
        ref="CommonForm"
        label-width="140px"
        :rules="rules"
        :col-num="8"
        :search-btn="true"
        :form-data="formData"
        @submit="handleSubmit"
        @reset="handleSubmit"
      >

        <template slot="vin" slot-scope="scope">
          <el-form-item label="" prop="vin" label-width="0">
            <el-input v-model="scope.myForm['vin']" placeholder="slot元素可绑定slot-scope='scope',获取scope.myForm 绑定值" />
          </el-form-item>
        </template>
        <template slot="btn">
          <el-divider />
          <el-form-item style="float:right">
            <el-button class="orangeBtn2" @click="handleSubmit2">slot 元素,ref提交</el-button>
            <el-button class="grayBtn">取消</el-button>
          </el-form-item>
        </template>
      </CommonForm>

      <pre>
          <code class="javascirpt" v-text="formDataOpt" />
          <code class="javascirpt" v-text="formDataDom" />
          <code class="javascirpt" v-text="formDataMethods" />
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsLibForm',
  components: {
  },
  data() {
    return {
      viewOpt: [
        {
          label: '宽度默认8',
          value: 'valueW1',
          color: '#027FED'
        },
        {
          label: '文字展示',
          value: 'valueT1'
        },
        {
          label: '文字展示',
          value: 'valueT2'
        },
        {
          label: '文字展示',
          value: 'valueT3'
        },
        {
          label: '配置option默认select',
          value: 'valueSelect',
          option: [
            {
              label: '1的值', value: 1
            },
            {
              label: '2的值', value: 2
            }
          ],
          color: {
            1: '#FDB13A',
            2: '#027FED'
          }
        },

        {
          label: '宽度一半',
          value: 'valueW2',
          span: 12
        },

        {
          label: '一半',
          value: 'valueW3',
          span: 12
        },
        {
          label: 'divider',
          span: 24,
          divider: true,
          labelWidth: '0'
        },
        {
          label: '自定义slot',
          value: '不需要填写',
          slotName: 'mySlotName'
        },
        {
          label: '占满',
          value: 'valueW4',
          span: 24
        },
        {
          label: '自定义slot2',
          value: '',
          slotName: 'mySlotName2333'
        }
      ],
      viewData: {
        valueW1: '宽度',
        valueT1: '文字1',
        valueT2: '文字2',
        valueT3: '文字3',
        valueSelect: 1,
        valueW2: '宽度2',
        valueW3: '宽度3',
        valueW4: '宽度4'
      },
      viewDataDom: `

          <CommonFormView :view-data="viewData" label-width="180px">
            <el-button slot="mySlotName" type="primary">mySlot</el-button>
            <el-button slot="mySlotName2333" type="text">mySlotName2333</el-button>
          </CommonFormView>

      `,
      viewDataOpt: `
          viewOpt: [
            {
              label: '宽度默认8',
              value: 'valueW1',
              color: '#027FED'
            },
            {
              label: '文字展示',
              value: 'valueT1'
            },
            {
              label: '文字展示',
              value: 'valueT2'
            },
            {
              label: '文字展示',
              value: 'valueT3'
            },
            {
              label: '配置option默认select',
              value: 'valueSelect',
              option: [
                {
                  label: '1的值', value: 1
                },
                {
                  label: '2的值', value: 2
                }
              ],
              color: {
                1: '#FDB13A',
                2: '#027FED'
              }
            },

            {
              label: '宽度一半',
              value: 'valueW2',
              span: 12
            },

            {
              label: '一半',
              value: 'valueW3',
              span: 12
            },
            {
              label: 'divider',
              span: 24,
              divider: true,
              labelWidth: '0'
            },
            {
              label: '自定义slot',
              value: '不需要填写',
              slotName: 'mySlotName'
            },
            {
              label: '占满',
              value: 'valueW4',
              span: 24
            },
            {
              label: '自定义slot2',
              value: '',
              slotName: 'mySlotName2333'
            }
          ],
          viewData: {
            valueW1: '宽度',
            valueT1: '文字1',
            valueT2: '文字2',
            valueT3: '文字3',
            valueSelect: 1,
            valueW2: '宽度2',
            valueW3: '宽度3',
            valueW4: '宽度4'
          },
      `,
      formData: [
        {
          label: '宽度默认6',
          value: 'search'
          // placeholder: '请输入关键字' 可自定义，否则默认(input(请输入)/select(请选择)+label)
        },
        {
          label: 'select选择框',
          value: 'region233',
          // placeholder: '配置option默认select',
          option: [
            { label: '区域一', value: 'shanghai' },
            { label: '区域二', value: 'beijing' }
          ]
        },
        {
          label: 'datePicker日期选择',
          value: 'date',
          datePicker: {
            // type:'date', 默认 daterange
            // placeholder:'', type==date
            // valueFormat: 'yyyy-MM-dd' 默认yyyy-MM-dd,
            rangeSeparator: '',
            startPlaceholder: '',
            endPlaceholder: '可配置'
          },
          span: 12
        },
        {
          label: 'timePicker时间选择',
          value: 'times',
          timePicker: {
            // valueFormat: 'HH:MM:SS' 默认HH:MM:SS,
            rangeSeparator: '-',
            startPlaceholder: '',
            endPlaceholder: ''
          },
          span: 24,
          disabled: true
        },
        {
          label: '省市配置region',
          value: 'region',
          region: {
            // type:'',
            // town:'',
            // area:'',
            // city:'',
          }
        },
        {
          label: '',
          slotName: 'vin'
        },
        {
          label: '单选框',
          value: 'radio1',
          radio: [
            { label: '是', value: 'shanghai' },
            { label: '否', value: 'beijing' }
          ]
        },
        {
          label: '数字框',
          value: 'num',
          inputNumber: {
            min: 1,
            max: 8,
            step: 2,
            precision: 2
          }
        },
        {
          label: 'btn',
          slotName: 'btn',
          span: 24
        }

      ],
      rules: {
        search: { required: true },
        vin: { required: true }
      },
      formDataDom: `
          <CommonForm
              ref="CommonForm"
              label-width="140px"
              // 校验
              :rules="rules"
              // 默认 6,4 栏布局
              :col-num="8"
              // 默认 true , 展示搜索表单按钮,配置slot 自定义btn后可设置为false
              :search-btn="true"
              :form-data="formData"
              @submit="handleSubmit"
              @reset="handleSubmit"
            >

              <template slot="vin" slot-scope="scope">
                <el-form-item label="" prop="vin" label-width="0">
                  <el-input v-model="scope.myForm['vin']" placeholder="slot元素可绑定slot-scope='scope',获取scope.myForm 绑定值" />
                </el-form-item>
              </template>
              <template slot="btn">
                <el-divider />
                <el-form-item style="float:right">
                  <el-button class="orangeBtn2" @click="handleSubmit2">slot 元素,ref提交</el-button>
                  <el-button class="grayBtn">取消</el-button>
                </el-form-item>
              </template>

           </CommonForm> 
      `,
      formDataOpt: `
            formData: [
              {
                label: '宽度默认6',
                value: 'search'
                // placeholder: '请输入关键字' 可自定义，否则默认(input(请输入)/select(请选择)+label)
              },
              {
                label: 'select选择框',
                value: 'region233',
                // placeholder: '配置option默认select',
                option: [
                  { label: '区域一', value: 'shanghai' },
                  { label: '区域二', value: 'beijing' }
                ]
              },
              {
                label: 'datePicker日期选择',
                value: 'date',
                datePicker: {
                   // type:'date', 默认 daterange
                  // placeholder:'', type==date
                  // valueFormat: 'yyyy-MM-dd' 默认yyyy-MM-dd,
                  // valueFormat: 'yyyy-MM-dd' 默认yyyy-MM-dd,
                  rangeSeparator: '',
                  startPlaceholder: '',
                  endPlaceholder: '可配置'
                },
                span: 12
              },
              {
                label: 'timePicker时间选择',
                value: 'times',
                timePicker: {
                  // valueFormat: 'HH:MM:SS' 默认HH:MM:SS,
                  rangeSeparator: '-',
                  startPlaceholder: '',
                  endPlaceholder: ''
                },
                span: 24,
                disabled:true
              },
              {
                label: '省市配置region',
                value: 'region',
                region: {
                  // type:'',
                  // town:'',
                  // area:'',
                  // city:'',
                }
              },
              {
                label: '',
                slotName: 'vin'
              },
               {
                label: '单选框',
                value: 'radio1',
                radio: [
                  { label: '是', value: 'shanghai' },
                  { label: '否', value: 'beijing' }
                ]
              },
              {
                label: '数字框',
                value: 'num',
                inputNumber: {
                  min: 1,
                  max: 8,
                  step: 2,
                  precision: 2
                }
             },
              {
                label: 'btn',
                slotName: 'btn',
                span: 24
              }
            ],
             rules: {
              search: { required: true },
              vin: { required: true }
            }
      `,
      formDataMethods: `
        {
          handleSubmit(data) {
            console.log(data)
          },
          handleSubmit2() {
            this.$refs.CommonForm.submit()
          },
          getEdit() {
            this.$refs.CommonForm.myForm = {
              region233: 'beijing'
            }
          },
        }
      `
    }
  },
  mounted() {
    this.getEdit()
  },
  methods: {
    getEdit() {
      this.$refs.CommonForm.myForm = {
        region233: 'beijing'
      }
    },
    handleSubmit(data) {
      console.log(data)
    },
    handleSubmit2() {
      this.$refs.CommonForm.submit()
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
