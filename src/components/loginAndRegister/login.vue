<template>
  <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
    <el-col :span="24">
      <el-form-item label="用户名" prop="field101">
        <el-input v-model="formData.field101" placeholder="请输入单行文本用户名" clearable :style="{width: '100%'}">
        </el-input>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item label="密码" prop="field102">
        <el-input v-model="formData.field102" placeholder="请输入密码" clearable show-password
          :style="{width: '100%'}"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="记住密码" prop="field103" required>
        <el-switch v-model="formData.field103"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="记住我" prop="field104" required>
        <el-switch v-model="formData.field104"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item label="" prop="field105">
        <el-button type="primary" size="medium"> 登录 </el-button>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-col>
  </el-form>
</template>

<script>
export default {
  components: {},
  props: [],
  data () {
    return {
      formData: {
        field101: undefined,
        field102: undefined,
        field103: false,
        field104: false,
        field105: undefined
      },
      rules: {
        field101: [{
          required: true,
          message: '请输入单行文本用户名',
          trigger: 'blur'
        }],
        field102: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    submitForm () {
      this.$refs.elForm.validate(valid => {
      })
    },
    resetForm () {
      this.$refs.elForm.resetFields()
    }
  }
}

</script>

<style>

</style>
