<template>
  <div class="week_report_list">
    <div class="table_wrap">
      <sui-table celled striped color="red">
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell>Food</sui-table-header-cell>
            <sui-table-header-cell>Calories</sui-table-header-cell>
            <sui-table-header-cell>Protein</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row>
            <sui-table-cell>Apples</sui-table-cell>
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
  </div>
</template>

<script>
export default {
  name: 'WeekReportList'
}
</script>

<style lang="scss" scoped>
</style>
