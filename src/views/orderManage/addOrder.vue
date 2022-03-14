<template>
  <div class="dashboard-container">
    <div class="commonBox">
      <CommonTitle title="新增订单" />

      <CommonForm
        ref="CommonForm"
        label-width="140px"
        :search-btn="false"
        :col-num="8"
        :form-data="formData"
        :rules="rules"
        @submit="handleSubmit"
      >

        <template slot="contact_name" slot-scope="scope">
          <el-form-item label="联系人姓名" prop="contact_name" label-width="140px">
            <el-input v-model="scope.myForm['contact_name']" placeholder="请输入" style="width:70%;margin-right: 5%;" />
            <el-checkbox v-model="syncInfo" style="width:15%;">同客户</el-checkbox>
          </el-form-item>
        </template>
        <template slot="address" slot-scope="scope">
          <el-form-item label="" prop="address" label-width="0">
            <el-input v-model="scope.myForm['address']" placeholder="请输入" />
          </el-form-item>
        </template>

        <template slot="btn">
          <el-divider />
          <el-form-item style="float:right">
            <el-button class="orangeBtn2" @click="submit">提交</el-button>
            <el-button class="grayBtn" @click="cancel">取消</el-button>
          </el-form-item>
        </template>
      </CommonForm>
    </div>
  </div>
</template>

<script>

import { pageGoBack } from '@/utils'

export default {
  name: 'AddOrder',
  components: {},
  data() {
    return {
      formData: [
        {
          label: '客户姓名',
          value: 'member_name'
        },
        {
          label: '客户手机号',
          value: 'member_mobile',
          maxLength: 11

        },
        {
          label: 'test',
          value: '',
          slotName: 'test'
        },
        {
          label: '联系人姓名',
          slotName: 'contact_name'
        },
        {
          label: '联系人手机号',
          value: 'contact_mobile',
          maxLength: 11
        },
        {
          label: 'code',
          value: 'code'
        },
        {
          label: '选择框',
          value: 'selectName',
          option: [{ value: 1, label: 'test1' }, { value: 2, label: 'test2' }]
        },

        {
          label: '单选',
          value: 'radios',
          radio: [
            { label: '是', value: 'true' },
            { label: '否', value: 'false' }
          ],
          span: 24
        },
        {
          label: '安装地址',
          value: 'region',
          region: {
            // type:'',
            // town:'',
            // area:'',
            // city:'',
          }
        },
        {
          label: 'address',
          slotName: 'address'
        },
        {
          label: 'btn',
          slotName: 'btn',
          span: 24
        }
      ],
      rules: {
        member_name: { required: true, message: '请输入客户姓名' },
        member_mobile: { required: true, message: '请输入客户手机号' },
        contact_name: { required: true, message: '请输入联系人姓名' },
        contact_mobile: { required: true, message: '请输入联系人手机号' },
        code: { required: true, message: '请输入code' },
        region: { required: true, message: '请选择地区' },
        address: { required: true, message: '请输入地址' },
        selectName: { required: true, message: '请选择' },
        radios: { required: true, message: '请选择单选' }
      },
      syncInfo: false

    }
  },
  watch: {
    syncInfo(val) {
      if (val) {
        const { myForm } = this.$refs.CommonForm
        this.$refs.CommonForm.myForm = {
          ...myForm,
          contact_name: myForm.member_name,
          contact_mobile: myForm.member_mobile
        }
      }
    }
  },
  created() {

  },
  methods: {
    submit() {
      this.$refs.CommonForm.submit()
    },
    cancel() {
      pageGoBack(this.$route)
    },
    handleSubmit(data) {
      const newData = { ...data }
      console.log(newData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
