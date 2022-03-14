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
      <CommonTitle title="菜单列表">
        <el-button
          v-auth="'orderAdd'"
          type="primary"
          @click="handleAddRole"
        ><i class="el-icon el-newAdd" style="padding-right: 5px" />
          新增菜单</el-button>
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
          <el-button type="primary" size="small" @click="handleEdit(scope)">添加菜单</el-button>
          <el-button type="primary" size="small" @click="handleBtn(scope)">按钮配置</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope)">删除菜单</el-button>
        </template>
      </CommonTable>

      <CommonDialog
        title="新增/编辑菜单"
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
        />
      </CommonDialog>
      <CommonDialog
        title="新增/编辑按钮"
        width="500px"
        :modal="dialogBtn"
        :footer="true"
        :title-slot="true"
        @close="dialogBtn=false"
      >
        <header slot="title">
          <h3>新增/编辑按钮</h3>
          <el-button type="primary" size="small" @click="addBtn(scope)">添加</el-button>
        </header>
        <el-checkbox label="新增" />
      </CommonDialog>
    </div>
  </div>

</template>

<script>
export default {
  data() {
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
        { name: '订单管理', desc: '2021-1-1', path: '/orderManage', menusNum: 0, btnsNum: 7, id: '1',
          children: [{
            name: '订单列表', desc: '2021-1-1', path: '/list', menusNum: 0, btnsNum: 7, id: '1-1'
          }]

        },
        { name: '菜单管理', desc: '2021-1-1', path: '/permissionManage', menusNum: 0, btnsNum: 3, id: '2',
          children: [{
            name: '菜单列表', desc: '2021-1-1', path: '/menuManage', menusNum: 0, btnsNum: 7, id: '1-1'
          },
          {
            name: '角色列表', desc: '2021-1-1', path: '/roleManage', menusNum: 0, btnsNum: 7, id: '1-1'
          }]
        }
      ],
      tableColumn: [
        { label: '菜单名', prop: 'name' },
        { label: 'path', prop: 'path' },
        { label: '描述', prop: 'desc' },
        { label: '菜单数量', prop: 'menusNum' },
        { label: '按钮数量', prop: 'btnsNum' },
        { label: '操作', prop: 'cz', slot: true, fixed: 'right', width: 400 }
      ],

      rules: {
        name: { required: true, message: '请输入菜单名' }
      },

      listLoading: false,
      dialogVisible: false,
      userFormData: [
        {
          label: '菜单名',
          value: 'name'
        },
        {
          label: 'path',
          value: 'path'
        },
        {
          label: '描述',
          value: 'desc',
          type: 'desc',
          maxLength: 10
        }
      ],
      dialogBtn: false

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

    handleBtn() {
      this.dialogBtn = true
    },
    addBtn() {
      const h = this.$createElement;
      this.$msgbox({
        title: '请输入',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        message: h('div', null, [
          h('el-input', { attrs: { placeholder: '按钮中文名' }}, ''),
          h('el-input', { attrs: { placeholder: '按钮英文名' }}, '')
        ])
      }).then(({ value }) => {

      }).catch(() => {

      });
    },
    handleDelete(scope) {
      this.$confirm('确认删除该菜单?', '提示', {
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
