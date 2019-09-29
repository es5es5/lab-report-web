<template>
  <div class="WeekReportCreate">
    <form action="#" method="get" class="crudForm" @submit.prevent>
      <el-form :model="ruleForm" label-width="15%">
        <el-form-item label="제목" prop="title">
          <el-input v-model="ruleForm.name" id="title"></el-input>
        </el-form-item>
        <el-form-item label="내용" prop="title">
          <quillEditor></quillEditor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" plain>등록</el-button>
          <el-button type="info" plain>초기화</el-button>
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
  data () {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        region: [
          { required: true, message: 'Please select Activity zone', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
        ],
        resource: [
          { required: true, message: 'Please select activity resource', trigger: 'change' }
        ],
        desc: [
          { required: true, message: 'Please input activity form', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
