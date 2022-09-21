<template>
  <div class="main">
    <div class="step"
         style="margin-bottom: 30px">
      <el-steps :active="nowStep"
                finish-status="success"
                align-center>
        <el-step title="步骤1"
                 description="验证个人身份"></el-step>
        <el-step title="步骤2"
                 description="修改信息"></el-step>
        <el-step title="步骤3"
                 description="提交"></el-step>
      </el-steps>
    </div>
    <el-form ref="elForm"
             class="form"
             style="margin: 20px auto"
             :model="formData"
             :rules="rules"
             size="medium"
             label-width="100px">
      <div v-if="nowStep === 0">
        <el-form-item label="原手机号"
                      prop="phone">
          <el-input v-model="formData.idStu"
                    placeholder="请输入你的手机号"
                    :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="验证码"
                      prop="stuName">
          <el-input v-model="formData.stuName"
                    placeholder="请输入验证码"
                    clearable
                    :style="{width: '20%'}"></el-input>
                    <el-button style="margin-left:10%;margin-right:56.2%">发送验证码</el-button>
        </el-form-item>

        <el-button style="margin-top: 12px;"
                   @click="next">下一步</el-button>
      </div>
      <div v-else-if="nowStep === 1">
        <div v-if="binds === 'phone'">
          <el-form-item label="新手机号"
                      prop="phone">
          <el-input v-model="formData.idStu"
                    placeholder="请输入你的新手机号"
                    clearable="true"
                    :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="验证码"
                      prop="stuName">
          <el-input v-model="formData.stuName"
                    placeholder="请输入验证码"
                    clearable
                    :style="{width: '20%'}"></el-input>
                    <el-button style="margin-left:10%;margin-right:56.2%">发送验证码</el-button>
        </el-form-item>
        </div>
        <div v-else-if="binds === 'email'">
          <el-form-item label="新邮箱"
                      prop="phone">
          <el-input v-model="formData.idStu"
                    placeholder="请输入你的新邮箱"
                    clearable="true"
                    :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="验证码"
                      prop="stuName">
          <el-input v-model="formData.stuName"
                    placeholder="请输入验证码"
                    clearable
                    :style="{width: '20%'}"></el-input>
                    <el-button style="margin-left:10%;margin-right:56.2%">发送验证码</el-button>
        </el-form-item>
        </div>
        <div v-if="binds === 'wechat'">
          <p>请使用微信移动端扫码绑定</p>
          <div class="weChatCode">二维码</div>
        </div>
        <el-button @click="resetFormSecond">重置</el-button>
        <el-button style="margin-top: 12px;"
                   @click="next">下一步</el-button>
      </div>
      <div v-else-if="nowStep === 2">
        <el-form-item size="large">
        <el-button style="margin-top: 12px;"
                   @click="nextBack">上一步</el-button>
          <el-button type="primary"
                     @click="dialogVisible = true">提交</el-button>
          <el-dialog title="提示"
                     :visible.sync="dialogVisible"
                     width="30%"
                     :before-close="handleClose">
            <span>请仔细检查后提交！！！</span>
            <span slot="footer"
                  class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary"
                         @click="submitForm">确 定</el-button>
            </span>
          </el-dialog>

        </el-form-item>
      </div>
      <div v-else-if="nowStep === 3">
        <el-result icon="success"
                   title="成功"
                   subTitle="提交成功，点此返回">
          <template slot="extra">
            <el-button type="primary"
                       size="medium"
                       @click="next">返回</el-button>
          </template>
        </el-result>
      </div>
    </el-form>
  </div>
</template>

<script>
import bus from '@/components/bus.js'
export default {
  name: 'bind',
  data () {
    return {
      dialogVisible: false, // 提交的
      binds: 'fa', // 兄弟组件传过来的
      nowStep: 0,
      formData: {
        phone: undefined,
        stuName: undefined
      },
      rules: {
        idStu: [{
          required: true,
          message: '请输入ID用户用户ID',
          trigger: 'blur'
        }],
        stuName: [{
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getMessage()
  },
  mounted () { },
  methods: {
    getMessage () {
      var that = this
      bus.$on('bindThing', message => {
        that.binds = message
        localStorage.setItem('message', message)
      })
      this.binds = localStorage.getItem('message')
    },
    submitForm () {
      this.dialogVisible = false
      this.next()
      this.$refs.elForm.validate(valid => {
        // if (!valid) return
        // TODO 提交表单
      })
    },
    // 提交的
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    },
    next () {
      if (this.nowStep++ > 2) this.nowStep = 0
    },
    nextBack () {
      if (this.nowStep-- < 0) this.nowStep = 0
    },
    resetFormFrist () {
      this.formData.idStu = ''
      this.formData.stuName = ''
      this.formData.sex = ''
      this.formData.telephone = ''
      this.formData.wechat = ''
      this.formData.identity = ''
      this.formData.resident = ''
      this.formData.area = ''
      this.formData.school = ''
      this.formData.profession = ''
    },
    resetFormSecond () {
      this.formData.targetInstitution = ''
      this.formData.targetSpecialty = ''
      this.formData.category = ''
      this.formData.classType = ''
      this.formData.classPrice = ''
    }
  }
}
</script>

<style scoped lang="less">
.main {
  height: 100%;
  width: 100%;
  margin: 0;
  line-height: 1;
  padding: 20px 0;
  // overflow: hidden;
  .form {
    width: 70%;
    margin-left: 30px;
    .weChatCode{
      height: 200px;
      width: 200px;
      background-color: #409EFF;
      margin: 1% auto;
      line-height: 5;
    }
  }
}
</style>
