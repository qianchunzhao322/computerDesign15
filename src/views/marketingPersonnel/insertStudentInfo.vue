<template>
  <div class="main">
    <div class="step"
         style="margin-bottom: 30px">
      <el-steps :active="nowStep"
                finish-status="success"
                align-center>
        <el-step title="步骤1"
                 description="录入校友个人信息"></el-step>
        <el-step title="步骤2"
                 description="录入生活照片"></el-step>
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
        <el-form-item label-width="90px"
                      label="毕业年份:"
                      prop="graduationTime">
          <el-select v-model="formData.graduationTime"
                     placeholder="请选择"
                     clearable
                     :style="{width: '100%'}">
            <el-option v-for="(item, index) in timeOptions"
                       :key="index"
                       :label="item.label"
                       :value="item.value"
                       :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label-width="90px"
                      label="专业名称:"
                      prop="major">
          <el-select v-model="formData.major"
                     placeholder="请选择"
                     clearable
                     :style="{width: '100%'}">
            <el-option v-for="(item, index) in classOptions"
                       :key="index"
                       :label="item.label"
                       :value="item.value"
                       :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label-width="90px"
                      label="校友姓名:"
                      prop="name">
          <el-input v-model="formData.name"
                    placeholder="请输入"
                    clearable
                    :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label-width="90px"
                      label="学号："
                      prop="cardNumber">
          <el-input v-model="formData.cardNumber"
                    placeholder="请输入"
                    clearable
                    :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label-width="90px"
                      label="校友简介:"
                      prop="info">
          <el-input type="textarea"
                    autosize
                    placeholder="请输入"
                    :style="{width: '100%'}"
                    v-model="formData.info">
          </el-input>
        </el-form-item>
        <el-col :span="8">
          <el-form-item label="大学宿舍:"
          label-width="90px"
                        prop="campus">
            <el-select v-model="formData.campus"
                       placeholder="所在校区"
                       clearable
                       :style="{width: '100%'}">
              <el-option v-for="(item, index) in address_xiqoquOptions"
                         :key="index"
                         :label="item.label"
                         :value="item.value"
                         :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="0"
                        prop="address_dong">
            <el-select v-model="formData.address_dong"
                       placeholder="宿舍几栋"
                       clearable>
              <el-option v-for="(item, index) in address_dongOptions"
                         :key="index"
                         :label="item.label"
                         :value="item.value"
                         :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label-width="0"
                        prop="address_lou">
            <el-select v-model="formData.address_lou"
                       placeholder="宿舍几楼"
                       clearable
                       :style="{width: '100%'}">
              <el-option v-for="(item, index) in address_louOptions"
                         :key="index"
                         :label="item.label"
                         :value="item.value"
                         :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label-width="0"
                        prop="address_hao">
            <el-select v-model="formData.address_hao"
                       placeholder="宿舍号"
                       clearable
                       :style="{width: '100%'}">
              <el-option v-for="(item, index) in address_haoOptions"
                         :key="index"
                         :label="item.label"
                         :value="item.value"
                         :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-button @click="resetFormFrist">重置</el-button>
        <el-button style="margin-top: 12px;"
                   @click="next">下一步</el-button>
      </div>
      <div v-else-if="nowStep === 1">
        <i>宿舍风貌</i>
        <el-upload action="#"
                   list-type="picture-card"
                   :on-change="handleDExceed"
                   :auto-upload="false">
          <i slot="default"
             class="el-icon-plus"></i>
          <div slot="file"
               slot-scope="{file}">
            <img class="el-upload-list__item-thumbnail"
                 :src="file.url"
                 alt="">
            <span class="el-upload-list__item-actions">
              <span class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)">
                <i class="el-icon-zoom-in"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <i>毕业之证</i>
        <el-upload action="#"
                   list-type="picture-card"
                   :on-change="handleGExceed"
                   :auto-upload="false">
          <i slot="default"
             class="el-icon-plus"></i><br/>
          <div slot="file"
               slot-scope="{file}">
            <img class="el-upload-list__item-thumbnail"
                 :src="file.url"
                 alt="">
            <span class="el-upload-list__item-actions">
              <span class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)">
                <i class="el-icon-zoom-in"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <i>校区美景</i>
        <el-upload action="#"
                   list-type="picture-card"
                   :on-change="handleCExceed"
                   :auto-upload="false">
          <i slot="default"
             class="el-icon-plus"></i>
          <div slot="file"
               slot-scope="{file}">
            <img class="el-upload-list__item-thumbnail"
                 :src="file.url"
                 alt="">
            <span class="el-upload-list__item-actions">
              <span class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)">
                <i class="el-icon-zoom-in"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <div>
          <img class="pic-box"
               :src="uploadPicUrl"
               v-if="uploadPicUrl">
        </div>

        <el-dialog :visible.sync="imgDialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
        <el-button @click="resetFormSecond">重置</el-button>
        <el-button style="margin-top: 12px;"
                   @click="next">下一步</el-button>
        <el-button style="margin-top: 12px;"
                   @click="nextBack">上一步</el-button>
      </div>
      <div v-else-if="nowStep === 2">
        <el-form-item size="large">
          <el-button type="primary"
                     @click="dialogVisible = true">提交</el-button>
          <el-dialog title="提示"
                     :visible.sync="dialogVisible"
                     width="30%"
                     :before-close="handleClose">
            <span>一旦提交后信息不可修改，请仔细检查后提交！！！</span>
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
export default {
  name: 'insertStudentInfo',
  data () {
    return {
      dialogVisible: false, // 提交的
      nowStep: 0,
      dialogImageUrl: '',
      imgDialogVisible: false,
      disabled: false,
      formData: {
        graduationTime: '',
        major: '',
        name: '',
        cardNumber: '',
        campus: undefined,
        address_dong: undefined,
        address_lou: undefined,
        address_hao: undefined,
        info: '本人乐观开朗……',
        graduationImage: '',
        campusImage: '',
        dormitoryImage: '',
        graduationImageList: [],
        campusImageList: [],
        dormitoryImageList: []
      },
      rules: {
        time: [{
          required: true,
          message: '请选择',
          trigger: 'change'
        }],
        class: [{
          required: true,
          message: '请选择',
          trigger: 'change'
        }],
        id: [{
          required: true,
          message: '请输入',
          trigger: 'blur'
        }],
        name: [{
          required: true,
          message: '请输入',
          trigger: 'blur'
        }],
        address_xiqoqu: [{
          required: true,
          message: '所在校区',
          trigger: 'change'
        }],
        address_dong: [],
        address_lou: [{
          required: true,
          message: '宿舍几楼',
          trigger: 'change'
        }],
        address_hao: [{
          required: true,
          message: '宿舍号',
          trigger: 'change'
        }]
      },
      timeOptions: [{
        label: '2016',
        value: 2016
      }, {
        label: '2017',
        value: 2017
      }, {
        label: '2018',
        value: 2018
      }, {
        label: '2019',
        value: 2019
      }, {
        label: '2020',
        value: 2020
      }],
      classOptions: [{
        label: '计算机科学与技术',
        value: '计算机'
      }, {
        label: '信息安全',
        value: '信安'
      }, {
        label: '人工智能',
        value: '人智'
      }, {
        label: '电信',
        value: '电信'
      }, {
        label: '通信',
        value: '通信'
      }],
      address_xiqoquOptions: [{
        label: '红旗校区',
        value: '红旗校区'
      }, {
        label: '黄金校区',
        value: '黄金校区'
      }, {
        label: '三江校区',
        value: '三江校区'
      }, {
        label: '南昌校区',
        value: '南昌校区'
      }],
      address_dongOptions: [{
        label: '1栋',
        value: 1
      }, {
        label: '2栋',
        value: 2
      }, {
        label: '3栋',
        value: 3
      }, {
        label: '4栋',
        value: 4
      }, {
        label: '5栋',
        value: 5
      }, {
        label: '6栋',
        value: 6
      }, {
        label: '7栋',
        value: 7
      }, {
        label: '8栋',
        value: 8
      }, {
        label: '9栋',
        value: 9
      }, {
        label: '10栋',
        value: 10
      }, {
        label: '11栋',
        value: 11
      }, {
        label: '12栋',
        value: 12
      }, {
        label: '13栋',
        value: 13
      }, {
        label: '14栋',
        value: 14
      }, {
        label: '15栋',
        value: 15
      }, {
        label: '16栋',
        value: 16
      }, {
        label: '17栋',
        value: 17
      }],
      address_louOptions: [{
        label: '1楼',
        value: 1
      }, {
        label: '2楼',
        value: 2
      }, {
        label: '3楼',
        value: '3'
      }, {
        label: '4楼',
        value: 4
      }, {
        label: '5楼',
        value: 5
      }, {
        label: '6楼',
        value: 6
      }],
      address_haoOptions: [{
        label: '选项一',
        value: 1
      }, {
        label: '选项二',
        value: 2
      }]
    }
  },
  computed: {},
  watch: {},
  created () {
    this.initHao()
  },
  mounted () { },
  methods: {
    initHao () {
      var list = []
      for (let index = 1; index <= 60; index++) {
        var temp = {}
        temp.label = index + '号'
        temp.value = index
        list.push(temp)
      }
      this.address_haoOptions = list
    },
    async handleGExceed (event) {
      var that = this
      console.log(that)
      const file = event.raw
      const formData = new FormData()
      formData.append('image', file)
      await that.$axios.post('/admin/uploadImg', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        if (res.data.status === 200 && res.data.msg === '文件上传成功') {
          that.$message({ type: 'success', message: '图片上传成功' })
          console.log(that.formData.graduationImageList)
          that.formData.graduationImageList.push(res.data.data.url)
          console.log(that.formData.graduationImageList)
        } else if (res.data.status === 500 && res.data.msg === 'Internal Server Error') {
          that.$message({ type: 'warning', message: '服务器繁忙，仅预览，请稍后重试' })
        }
      })
    },
    async handleDExceed (event) {
      var that = this
      console.log(that)
      const file = event.raw
      const formData = new FormData()
      formData.append('image', file)
      await that.$axios.post('/admin/uploadImg', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        if (res.data.status === 200 && res.data.msg === '文件上传成功') {
          that.$message({ type: 'success', message: '图片上传成功' })
          console.log(that.formData.dormitoryImageList)
          that.formData.dormitoryImageList.push(res.data.data.url)
          console.log(that.formData.dormitoryImageList)
        } else if (res.data.status === 500 && res.data.msg === 'Internal Server Error') {
          that.$message({ type: 'warning', message: '服务器繁忙，仅预览，请稍后重试' })
        }
      })
    },
    async handleCExceed (event) {
      var that = this
      console.log(that)
      const file = event.raw
      const formData = new FormData()
      formData.append('image', file)
      await that.$axios.post('/admin/uploadImg', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        if (res.data.status === 200 && res.data.msg === '文件上传成功') {
          that.$message({ type: 'success', message: '图片上传成功' })
          console.log(that.formData.campusImageList)
          that.formData.campusImageList.push(res.data.data.url)
          console.log(that.formData.campusImageList)
        } else if (res.data.status === 500 && res.data.msg === 'Internal Server Error') {
          that.$message({ type: 'warning', message: '服务器繁忙，仅预览，请稍后重试' })
        }
      })
    },
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      console.log(file)
      const imgData = new FormData()
      imgData.append('image', file)
      this.dialogImageUrl = file.url
      this.imgDialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    },
    getAll (dong, lou, hao) {
      if (parseInt(hao) < 10) {
        return dong + '栋' + lou + '0' + hao
      } else {
        return dong + '栋' + lou + hao
      }
    },
    urlInsert (list) {
      var temp = ''
      for (const item in list) {
        temp = temp + list[item] + ','
      }
      return temp
    },
    async submitForm () {
      this.dialogVisible = false
      this.next()
      console.log(this.formData)
      const formData = new FormData()
      formData.append('name', this.formData.name)
      formData.append('graduationTime', parseInt(this.formData.graduationTime))
      formData.append('major', this.formData.major)
      formData.append('cardNumber', this.formData.cardNumber)
      formData.append('campus', this.formData.campus)
      formData.append('dormitory', this.getAll(this.formData.address_dong, this.formData.address_lou, this.formData.address_hao))
      formData.append('info', this.formData.info)
      formData.append('campusImage', this.urlInsert(this.formData.campusImageList))
      formData.append('dormitoryImage', this.urlInsert(this.formData.dormitoryImageList))
      formData.append('graduationImage', this.urlInsert(this.formData.graduationImageList))
      console.log(formData)
      await this.$axios.post('/admin/AddOrUpdateUser', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res)
      })
      // this.$refs.elForm.validate(valid => {
      //   // if (!valid) return
      //   // TODO 提交表单
      // })
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
      this.formData.graduationTime = ''
      this.formData.major = ''
      this.formData.name = ''
      this.formData.cardNumber = ''
      this.formData.campus = ''
      this.formData.address_dong = ''
      this.formData.address_lou = ''
      this.formData.address_hao = ''
      this.formData.info = '本人乐观开辆……'
    },
    resetFormSecond () {
      this.formData.graduationImageList = ''
      this.formData.campusImageList = ''
      this.formData.dormitoryImageList = ''
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
  }
}
</style>
