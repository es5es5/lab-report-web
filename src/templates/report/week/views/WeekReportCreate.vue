<template>
  <div class="WeekReportCreate">
    <form action="#" method="get" class="crudForm" @submit.prevent>
      <el-form :model="ruleForm" label-width="15%">
        <el-form-item label="제목" prop="title">
          <el-input v-model="reportForm.title" id="title"></el-input>
        </el-form-item>
        <el-form-item label="내용" prop="title">
          <quillEditor v-model="reportForm.contents"></quillEditor>
        </el-form-item>
        <el-form-item>
          <div class="action_wrap action_wrap--bottom text-right">
            <el-button type="info pull-left" @click="goList">목록으로</el-button>
            <el-button type="info" plain>초기화</el-button>
            <el-button type="primary" icon="el-icon-edit">등록</el-button>
          </div>
        </el-form-item>
      </el-form>
    </form>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    quillEditor
  },
  computed: {},
  data () {
    return {
      reportForm: {
        title: '',
        contents: ''
      }
    }
  },
  methods: {
    goList () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-item {
  label {
    font-size: 20px;
  }
}
</style>
