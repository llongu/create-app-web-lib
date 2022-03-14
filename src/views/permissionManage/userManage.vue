<template>
  <div class="dashboard-container">
    <div class="commonBox">
      <CommonForm
        :form-data="searchData"
        @submit="handleSearch"
        @reset="handleSearch"
      />
    </div>

    <div class="commonBox">
      <CommonTitle title="用户列表">
        <el-button
          v-auth="'orderAdd'"
          type="primary"
          @click="handleAddRole"
        ><i class="el-icon el-newAdd" style="padding-right: 5px" />
          新增用户</el-button>
      </CommonTitle>

      <CommonTable
        ref="CommonTable"
        v-loading="listLoading"
        :table-data="tableData"
        :pagination="false"
        :table-column="tableColumn"
      >
        <template slot="index" slot-scope="scope">
          {{ scope.index+1 }}
        </template>
        <template slot="cz" slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope)">修改</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope)">删除用户</el-button>
        </template>
      </CommonTable>

      <CommonDialog
        title="新增/编辑用户"
        width="500px"
        :modal="dialogVisible"
        :footer="true"
        @close="dialogVisible=false"
        @submit="operSubmit"
      >
        <CommonForm
          ref="userForm"
          label-width="100px"
          :search-btn="false"
          :col-num="24"
          :form-data="userFormData"
          :rules="rules"
          @submit="confirmRole"
        >
          <el-form-item slot="roles" label="角色:" prop="roles">
            <el-tree
              ref="tree"
              :check-strictly="checkStrictly"
              :data="rolesData"
              :props="defaultProps"
              show-checkbox
              default-expand-all
              node-key="id"

              class="permission-tree"
              @check="checkRoles"
            />
          </el-form-item>
        </CommonForm>
      </CommonDialog>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    const validatorPwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'))
      }
      // if (value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{6,10}$/.test(value)) {

      if (value && !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/.test(value)) {
        return callback(new Error('请输入6-10位，数字和字母组合'))
      }
      callback()
    }

    const validatorPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入手机号'))
      }
      if (value && !/^[1][3,4,5,7,8,9][0-9]{9}$/.test(value)) {
        return callback(new Error('请输入正确的手机号'))
      }
      callback()
    }

    return {
      searchData: [
        {
          label: '关键字',
          value: 'keyword',
          placeholder: '请输入姓名/手机号'
        }
      ],
      searchForm: {},
      tableData: [
        { userName: '123456', password: '2021-1-1', status: '暂停', nickName: 111, roles: 'admin', email: 'admin@test', phone: 15214777877 }
      ],
      tableColumn: [
        { label: '用户名', prop: 'userName' },
        { label: '密码', prop: 'password' },
        { label: '状态', prop: 'status' },
        { label: '当前角色', prop: 'roles' },
        { label: '昵称', prop: 'nickName' },
        { label: '电话', prop: 'phone' },
        { label: '邮箱', prop: 'email' },
        { label: '操作', prop: 'cz', slot: true, fixed: 'right' }
      ],

      rules: {
        userName: { required: true, message: '请输入用户名' },
        nickName: { required: true, message: '请输入昵称' },
        phone: { required: true, validator: validatorPhone, tigger: 'change' },
        email: { required: true, message: '请输入邮箱' },
        password: { required: true, validator: validatorPwd, tigger: 'change' },
        pwdsure: { required: true, validator: (rule, value, callback) => { if (value !== this.$refs.userForm.myForm.password) { callback(new Error('两次密码不一致')) } else { callback() } } }
      },

      listLoading: false,
      dialogVisible: false,
      userFormData: [
        {
          label: '用户名',
          value: 'userName'
        },
        {
          label: '密码',
          value: 'password',
          type: 'password',
          maxLength: 10
        },
        {
          label: '确认密码',
          value: 'pwdsure',
          type: 'password',
          maxLength: 10
        }, {
          label: '昵称',
          value: 'nickName'
        }, {
          label: '电话',
          value: 'phone',
          maxLength: 11
        }, {
          label: '邮箱',
          value: 'email'
        },
        {
          label: '角色',
          slotName: 'roles'
        }
      ],
      checkStrictly: false,
      rolesData: [
        {
          name: 'admin',
          desc: '管理员',
          id: '1'
        },
        {
          name: 'user',
          desc: '普通用户',
          id: '2'
        }
      ],
      rolesIdList: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  created() {
  },
  methods: {
    getList(query = {}) {
      this.listLoading = true
      this.tableData = []
      this.listLoading = false
    },
    handleSearch() {
      const newQuery = { ...this.listQuery }
      this.getList(newQuery)
    },
    handleAddRole() {
      this.dialogVisible = true
    },
    handleEdit(scope) {
      this.dialogVisible = true
    },

    async confirmRole(data) {
      console.log(data);
      this.dialogVisible = false
    },

    operSubmit() {
      this.$refs['userForm'].submit()
    },
    checkRoles(data, checked, indeterminate) {
      const { checkedKeys, halfCheckedKeys } = checked
      const arr = Array.from(new Set([...checkedKeys, ...halfCheckedKeys]))
      this.rolesIdList = [...arr]
    },

    handleDelete(scope) {
      this.$confirm('确认删除该用户?', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.getList()
        })
        .catch(err => { console.error(err) })
    }
  }

}
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>
