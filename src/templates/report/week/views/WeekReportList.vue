<template>
  <div class="week_report_list">
    <div class="table_wrap">
      <sui-table celled striped color="red">
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell>제목</sui-table-header-cell>
            <sui-table-header-cell>작성자</sui-table-header-cell>
            <sui-table-header-cell>날짜</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row v-for="(item, index) in 5" :key="index">
            <sui-table-cell>웅이를_잘_다루는_50가지_기술.doc</sui-table-cell>
            <sui-table-cell>김혜진(박사과정)</sui-table-cell>
            <sui-table-cell>{{ _someday }}</sui-table-cell>
          </sui-table-row>
        </sui-table-body>
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
  computed: {
    _someday () {
      return this.moment().format('YYYY-MM-DD')
    }
  },
  data () {
    return {
      rows: 100,
      currentPage: 2
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
