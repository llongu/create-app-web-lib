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
      <CommonTitle title="角色列表">
        <el-button
          v-auth="'orderAdd'"
          type="primary"
          @click="handleAddRole"
        ><i class="el-icon el-newAdd" style="padding-right: 5px" />
          新增角色</el-button>
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
          <el-button type="danger" size="small" @click="handleDelete(scope)">删除角色</el-button>
        </template>
      </CommonTable>

      <CommonDialog
        title="新增/编辑角色"
        width="800px"
        :modal="dialogVisible"
        :footer="true"
        @close="dialogVisible=false"
        @submit="operSubmit"
      >
        <CommonForm
          ref="roleForm"
          label-width="100px"
          :search-btn="false"
          :col-num="24"
          :form-data="roleFormData"
          :rules="rules"
          @submit="confirmRole"
        >
          <el-form-item slot="menus" label="资源分配：" prop="menus">
            <div style="display: flex;">
              <el-card class="box-card" style="width:300px;margin-right: 15px;">
                <div slot="header" class="clearfix">
                  <span>菜单分配</span>
                </div>
                <el-tree
                  ref="tree"
                  :check-strictly="checkStrictly"
                  :data="menuData"
                  :props="defaultProps"
                  show-checkbox
                  :expand-on-click-node="false"
                  default-expand-all
                  node-key="id"

                  class="permission-tree"
                  @node-click="nodeClick	"
                  @check="checkMenu"
                />
              </el-card>
              <el-card class="box-card" style="width:300px">
                <div slot="header" class="clearfix">
                  <span>按钮分配</span>
                </div>

                <el-tree
                  ref="tree"
                  :data="btnData"
                  :props="defaultProps"
                  show-checkbox
                  default-expand-all
                  node-key="id"

                  class="permission-tree"
                />
              </el-card>
            </div>

          </el-form-item>
        </CommonForm>
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
        { userName: 'admin', password: '123456', status: '暂停', desc: '管理员', phone: 15214777877 }
      ],
      tableColumn: [
        { label: '角色名', prop: 'userName' },
        { label: '状态', prop: 'status' },
        { label: '描述', prop: 'desc' },
        { label: '操作', prop: 'cz', slot: true, fixed: 'right' }
      ],

      rules: {
        userName: { required: true, message: '请输入角色名' },
        desc: { required: true, message: '请输入描述' }
      },

      listLoading: false,
      dialogVisible: false,
      roleFormData: [
        {
          label: '角色名',
          value: 'userName'
        },
        {
          label: '描述',
          value: 'desc'
        }, {
          slotName: 'menus'
        }
      ],
      checkStrictly: false,
      menuData: [
        {
          path: '/orderManage',
          name: '订单列表',
          id: '1',
          btns: [
            {
              authName: 'orderAdd',
              name: '新增',
              menumId: '1'
            },
            {
              authName: 'orderDispatch',
              name: '派单',
              menumId: '1'
            },
            {
              authName: 'orderPuse',
              name: '暂停',
              menumId: '1'
            },
            {
              authName: 'orderExe',
              name: '恢复执行',
              menumId: '1'
            }
          ]
        },
        {
          path: '/permissionManage',
          name: '权限管理',
          id: '2',
          children: [
            {
              path: '/userManage',
              name: '用户管理',
              id: '2-1',
              btns: [
                {
                  authName: 'orderAdd',
                  name: '新增用户',
                  menumId: '2-1'
                }
              ]
            },
            {
              path: '/roleManage',
              name: '角色管理',
              id: '2-2'
            }
          ]
        }
      ],
      menuIdList: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      btnData: [

      ]

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
      this.$refs['roleForm'].submit()
    },
    checkMenu(data, checked, indeterminate) {
      const { checkedKeys, halfCheckedKeys } = checked
      const arr = Array.from(new Set([...checkedKeys, ...halfCheckedKeys]))
      this.menuIdList = [...arr]
    },
    nodeClick(data, b) {
      console.log(data.id);
      this.btnData = this.findTreeId(this.menuData, data.id)
    },
    handleDelete(scope) {
      this.$confirm('确认删除该角色?', '提示', {
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
    },
    findTreeId(arr, id) {
      let btns = null
      arr.forEach(item => {
        if (item.children) {
          btns = this.findTreeId(item.children, id) || btns
        }
        // eslint-disable-next-line eqeqeq
        if (item.id == id) {
          btns = item.btns
        }
      })
      return btns
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
