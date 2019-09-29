<template>
  <div class="week_report_list">
    <div class="table_wrap">
      <sui-table celled striped color="red">
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell>날짜</sui-table-header-cell>
            <sui-table-header-cell>제목</sui-table-header-cell>
            <sui-table-header-cell>작성자</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row>
            <sui-table-cell>{{ this.moment().format() }}</sui-table-cell>
            <sui-table-cell>200</sui-table-cell>
            <sui-table-cell>0g</sui-table-cell>
          </sui-table-row>
          <sui-table-row>
            <sui-table-cell>Orange</sui-table-cell>
            <sui-table-cell>310</sui-table-cell>
            <sui-table-cell>0g</sui-table-cell>
          </sui-table-row>
        </sui-table-body>
        <sui-table-footer>
          <sui-table-header-cell>3 People</sui-table-header-cell>
          <sui-table-header-cell>2 Approved</sui-table-header-cell>
          <sui-table-header-cell/>
        </sui-table-footer>
      </sui-table>
    </div>
    <div class="pagination_wrap">
      <div class="mt-3">
        <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeekReportList',
  data () {
    return {
      rows: 100,
      currentPage: 2,
      asdf: this.moment().format()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
