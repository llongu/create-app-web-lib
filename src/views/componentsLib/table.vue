<template>
  <div class="dashboard-container">
    <h3>表格组件</h3>
    <div v-highlight class="commonBox">
      <CommonTable
        :table-data="tableData"
        :table-column="tableColumn"
        :selection="true"
        :pagination="{
          pageSize: 10,
          currentPage: 1,
          total: 0
        }"
        @row-click="rowClick"
        @handleSelectionChange="handleSelectionChange"
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

      <pre>
          <code class="javascirpt" v-text="tableDataOpt" />
          <code class="javascirpt" v-text="tableDataDom" />
          <code class="javascirpt" v-text="tableDataMethods" />
      </pre>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ComponentsLibTable',
  components: {
  },
  data() {
    return {
      tableData: [
        { code: '123456', time: '2021-1-1', progress: 0, status: '暂停', num: 111, name: 'test', phone: 15214777877 },
        { code: '897987', time: '2021-1-2', progress: 1, status: '', num: 0, phone: 15214777877, cz: 'slot的取值' },
        { code: '0012312', time: '2021-1-3', progress: 4, status: '关闭', num: 111, phone: 15214777877 }
      ],
      tableColumn: [
        { label: '序号', prop: 'index', width: 50, slot: true }, // 序号配置
        { label: '  ', prop: '', width: 50 }, // 空占位
        { label: '配置链接', prop: 'code', width: 200, href: '/orderManage/transferredOrderDetail', hrefParmas: ['code', 'addres4', { key: 'id', value: 'install_order_id' }] },
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
      tableDataDom: `
        <CommonTable
          :table-data="tableData"
          :table-column="tableColumn"
          :selection="true"
          :pagination="{
            pageSize: 10,
            currentPage: 1,
            total: 0
          }"
          @row-click="rowClick"
          @handleSelectionChange="handleSelectionChange"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        >
          <template slot="index" slot-scope="scope">
            {{ scope.index+1 }}
          </template>
          <template slot="cz" slot-scope="scope">
           <el-button type="text" size="small">{{scope.row.cz}}</el-button>
           </template>
        </CommonTable>
      `,
      tableDataOpt: `
            tableData: [
               { code: '123456', time: '2021-1-1', progress: 0, status: '暂停', num: 111, name: 'test', phone: 15214777877 },
              { code: '897987', time: '2021-1-2', progress: 1, status: '', num: 0, phone: 15214777877, cz: 'slot的取值' },
              { code: '0012312', time: '2021-1-3', progress: 4, status: '关闭', num: 111, phone: 15214777877 }
            ],
            tableColumn: [
              { label: '序号', prop: 'index', width: 50, slot: true }, // 序号配置
              { label: '  ', prop: '', width: 50 }, // 空占位
              { label: '配置链接', prop: 'code', width: 200, href: '/orderManage/transferredOrderDetail', hrefParmas: ['code', 'addres4', { key: 'id', value: 'install_order_id' }] },
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
     `,
      tableDataMethods: `
          {
             rowClick(row, column, event) {
              console.log(row, column, event)
            },
            handleSelectionChange(val) {
                console.log(val)
              },
              handleSizeChange(val) {
                console.log(val)
              },
              handleCurrentChange(val) {
                console.log(val)
              }
          }
     `
    }
  },
  methods: {
    rowClick(row, column, event) {
      console.log(row, column, event)
    },
    handleSelectionChange(val) {
      console.log(val)
    },
    handleSizeChange(val) {
      console.log(val)
    },
    handleCurrentChange(val) {
      console.log(val)
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
