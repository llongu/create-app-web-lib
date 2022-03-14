<template>
  <div class="CommonTable">
    <el-table
      ref="tableRef"
      v-loading="loading"
      :data="tableData"
      stripe
      style="width: 100%"
      :row-key="rowKey"
      @row-click="rowClick"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="selection"
        type="selection"
        :reserve-selection="reserveSelection"
        width="55"
      />
      <el-table-column
        v-if="!!showIndex"
        :label="typeof showIndex === 'string' ? showIndex : '序号'"
        type="index"
        width="50"
      />
      <el-table-column
        v-for="item in tableColumn"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :align="item.align || 'left'"
        :fixed="item.fixed || false"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <slot v-if="item.slot" :name="item.prop" :row="scope.row" :index="scope.$index" />
          <span v-else-if="item.option">
            {{ scope.row[item.prop] | getOption(item) }}
          </span>
          <span v-else-if="item.href" class="isHref" @click="toHref(item,scope.row)">
            {{ scope.row[item.prop] || '' }}
          </span>
          <span v-else>
            {{ scope.row[item.prop] || '' }}
          </span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="pagination"
      style="margin-top:15px;float:right"
      layout="total, sizes, prev, pager, next"
      :current-page="pagination.currentPage"
      :page-size="pagination.pageSize"
      :total="pagination.total"
      :page-sizes="pageSizes"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'CommonTable',
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
        console.error(`table column '${item.prop}' option is not array,should be a [{ label value}]`)
        return ''
      }
    }
  },
  props: {
    rowKey: {
      type: String,
      default: 'id'
    },
    reserveSelection: {
      type: Boolean,
      default: () => false
    },
    /** 是否显示索引, 索引列的名称 */
    showIndex: {
      type: [String, Boolean],
      default: () => false
    },
    selection: {
      type: Boolean,
      default: () => false
    },
    pagination: {
      type: [Object, Boolean],
      default: () => {
        return {
          pageSize: 10,
          currentPage: 1,
          total: 0
        }
      },
      required: true
    },
    tableData: {
      type: Array,
      default: () => []
    },
    tableColumn: {
      type: Array,
      default: () => []
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    loading: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
      this.$emit('handleSelectionChange', val)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.$emit('handleCurrentChange', val)
    },
    rowClick(row, column, event) {
      if (!this.getSelected()) {
        this.$emit('row-click', row, column, event)
      }
    },
    getSelected() {
      if (window.getSelection) {
        return window.getSelection().toString();
      } else if (document.getSelection) {
        return document.getSelection().toString();
      } else {
        var selection = document.selection && document.selection.createRange();
        if (selection.text) {
          return selection.text.toString();
        }
        return '';
      }
    },
    toHref(item, row) {
      const query = {}
      if (Array.isArray(item.hrefParmas)) {
        item.hrefParmas.forEach(n => {
          if (typeof n === 'string') {
            query[n] = row[n]
          } else if (typeof n === 'object') {
            query[n.key] = row[n.value]
          }
        })
      }
      this.$router.push({
        path: item.href,
        query
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.CommonTable{
  overflow: hidden;
}
  .isHref{
    color: #027FED;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
