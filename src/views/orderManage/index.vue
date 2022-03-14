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
      <CommonTitle title="订单列表">
        <el-button
          v-auth="'orderAdd'"
          type="primary"
          @click="toPath('/orderManage/addOrder')"
        ><i class="el-icon el-newAdd" style="padding-right: 5px" />
          新增</el-button>
      </CommonTitle>

      <el-row style="margin-bottom: 15px">
        <el-button v-auth="'orderDispatch'" class="orangeBtn2" @click="dispatch">派单</el-button>
        <el-button v-auth.every="['orderPuse','orderDispatch']" class="orangeBtn" @click="orderOper(10)">暂停</el-button>
        <el-button v-auth="'orderExe'" class="greenBtn" @click="orderOper(11)">恢复执行</el-button>
        <el-button v-auth="'hiddenBtn'" class="greenBtn">按钮权限隐藏</el-button>
      </el-row>

      <CommonTable
        ref="CommonTable"
        v-loading="loading"
        selection
        :table-data="tableData"
        :table-column="tableColumn"
        :pagination="pagination"
        @row-click="rowClick"
        @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange"
      >
        <template slot="index" slot-scope="scope">
          {{ scope.index+1 }}
        </template>
        <template slot="cz" slot-scope="scope">
          <el-button type="text" size="small">{{ scope.row.cz }}</el-button>
        </template>
      </CommonTable>

      <CommonDialog
        title="派单"
        width="500px"
        :modal="dispatchModal"
        :footer="true"
        @submit="formSubmit('dispatchForm')"
        @close="dispatchModal=false"
      >
        <CommonForm
          ref="dispatchForm"
          label-width="200px"
          :search-btn="false"
          :col-num="24"
          :form-data="dispatchFormData"
          :rules="{}"
          @submit="changeOrderSubmit"
        />
      </CommonDialog>

      <CommonDialog
        title="暂停"
        width="500px"
        :modal="puseModal"
        :footer="true"
        @submit="formSubmit('puseForm')"
        @close="puseModal=false"
      >
        <CommonForm
          ref="puseForm"
          label-width="100px"
          :search-btn="false"
          :col-num="24"
          :form-data="puseFormData"
          :rules="{}"
          @submit="operSubmit"
        />
      </commondialog>

      <CommonDialog
        title="恢复执行"
        width="500px"
        :modal="exeModal"
        @close="exeModal=false"
        @submit="operSubmit"
      >
        <div>
          您确认选择的{{ multipleSelection.length }}个订单符合要求，并且恢复执行吗？
        </div>
      </CommonDialog>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/orderManage';
import {
  orderSource
} from '@/utils/dict';

export default {
  name: 'List',
  components: {},
  data() {
    return {
      searchData: [
        {
          label: '关键字',
          value: 'keyword',
          placeholder: '请输入姓名/手机号'
        },
        {
          label: '数据来源',
          value: 'source',
          option: orderSource
        },
        {
          label: '服务商',
          value: 'supplier_name',
          option: []
        },

        {
          label: '创建时间',
          value: 'dateCreated',
          datePicker: {
            // valueFormat: 'MM/dd/yyyy',
            rangeSeparator: '',
            startPlaceholder: '',
            endPlaceholder: ''
          }
        },
        {
          label: '省市',
          value: 'region',
          region: { area: false }
        }
      ],
      searchForm: {},
      tableData: [],

      tableColumn: [
        { label: '序号', prop: 'index', width: 50, slot: true }, // 序号配置
        { label: '  ', prop: '', width: 50 }, // 空占位
        { label: '配置链接', prop: 'code', width: 200, href: '/orderManage/addOrder', hrefParmas: ['code', 'addres4', { key: 'id', value: 'install_order_id' }] },
        { label: '下单时间', prop: 'time' },
        { label: '当前流程状态', prop: 'progress', option: [
          { label: '暂停', value: 0 },
          { label: '开始', value: 1 },
          { label: '结束', value: 2 }
        ] }, // 配置option默认select类型展示
        { label: '当前执行状态', prop: 'status' },
        { label: '安装商编码', prop: 'num' },
        { label: '客户姓名', prop: 'name' },
        { label: '手机号码', prop: 'phone' },
        { label: '操作', prop: 'cz', slot: true, fixed: 'right' } // slot 自定义插槽
      ],
      pagination: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      },
      loading: false,
      list_cp_supplier: [],
      changeOrderType: '',
      // 派单
      dispatchFormData: [
        {
          label: '您已选择1条数据，将派给 ',
          placeholder: '请选择服务商',
          value: 'new_supplier_id',
          option: []
        }
      ],
      dispatchModal: false,

      // 暂停
      puseFormData: [
        {
          label: '暂停原因',
          value: 'desc',
          type: 'textarea'
        }
      ],
      puseModal: false,
      exeModal: false,
      multipleSelection: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true
      // region
      const newSearchForm = {
        ...this.searchForm,
        pageSize: this.pagination.pageSize,
        currentPage: this.pagination.currentPage
      }

      getList({ ...newSearchForm }).then((res) => {
        this.loading = false
        const { total, data } = res;
        this.tableData = data;
        this.pagination.total = total
      }).catch(() => {
        this.loading = false
      });
    },
    handleSearch(data) {
      this.searchForm = { ...data };
      this.pagination.currentPage = 1
      this.getList();
    },
    handleSizeChange(val) {
      this.pagination = {
        ...this.pagination,
        pageSize: val,
        currentPage: 1
      };
      this.getList();
    },
    handleCurrentChange(val) {
      this.pagination = {
        ...this.pagination,
        currentPage: val
      };
      this.getList();
    },
    rowClick(row, column, event) {
      this.$router.push({
        path: '/orderManage/orderDetail',
        query: { id: row.id }
      });
    },
    toPath(path) {
      this.$router.push({
        path
      });
    },

    multipleSelectionCheck() {
      this.multipleSelection = this.$refs.CommonTable.multipleSelection
      if (this.multipleSelection.length !== 1) {
        this.$message.warning('请勾选数据，最多一条！')
        return false
      }
      return true
    },
    formSubmit(name) {
      this.$refs[name].submit()
    },

    dispatch() {
      if (!this.multipleSelectionCheck()) return
      this.dispatchFormData[0].label = `您已选择${this.multipleSelection.length}条数据，将派给`
      this.changeOrderType = 20
      this.dispatchModal = true
    },
    changeOrderSubmit(data = {}) {
      console.log(data);
    },

    orderOper(type) {
      if (!this.multipleSelectionCheck()) return
      if (type === 10) {
        this.puseModal = true
      } else if (type === 11) {
        this.exeModal = true
      }
    },

    operSubmit(data = {}) {
      this.getList();
      this.puseModal = false;
      this.exeModal = false;
      this.$message.success('成功')
    }
  }
};
</script>

<style lang="scss" scoped></style>
