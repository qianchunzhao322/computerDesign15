<template>
  <div class="main">
    <el-form ref="elForm" class="form" :model="formData" style="margin:.375rem auto" :rules="rules" size="medium" label-width="1.25rem">
    <el-col :span="24">
      <el-form-item label="校友姓名:" label-width="90px" prop="name">
        <el-input v-model="formData.name" placeholder="校友姓名" clearable :style="{width: '100%'}" disabled>
        </el-input>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item label="校友专业:" label-width="90px" prop="major">
        <el-input v-model="formData.major" placeholder="校友专业" clearable :style="{width: '100%'}" disabled>
        </el-input>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item label="校友学号:" label-width="90px" prop="cardNumber">
        <el-input v-model="formData.cardNumber" placeholder="校友学号" clearable :style="{width: '100%'}" disabled>
        </el-input>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item label="毕业年份:" label-width="90px" prop="graduationTime">
        <el-select v-model="formData.graduationTime" placeholder="请选择缴费类型" clearable :style="{width: '100%'}">
          <el-option v-for="(item, index) in graduationTimeOptions" :key="index" :label="item.label"
            :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="8">
        <el-form-item label="大学宿舍:"
        label-width="90px"
                      prop="campus">
          <el-select v-model="formData.campus"
                     placeholder="所在校区"
                     clearable
                     :style="{width: '100%'}">
            <el-option v-for="(item, index) in campusOptions"
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
    <el-col :span="24">
      <el-form-item label="校友简介:" label-width="90px" prop="info">
        <el-input type="textarea"
                    :autosize="{ minRows: 2, maxRows: 10}"
                    placeholder="请输入"
                    :style="{width: '100%'}"
                    v-model="formData.info">
          </el-input>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item label="追加图片:" label-width="90px" prop="paymentVoucher">
        <el-upload class="upload" ref="paymentVoucher" :file-list="paymentVoucherfileList" :action="paymentVoucherAction"
          :before-upload="paymentVoucherBeforeUpload" list-type="picture" accept="image/*">
          <el-button size="small" type="primary" icon="el-icon-upload">上传毕业图片</el-button>
        </el-upload>
        <el-upload class="upload" ref="paymentVoucher" :file-list="paymentVoucherfileList" :action="paymentVoucherAction"
          :before-upload="paymentVoucherBeforeUpload" list-type="picture" accept="image/*">
          <el-button size="small" type="primary" icon="el-icon-upload">点击宿舍图片</el-button>
        </el-upload>
        <el-upload class="upload" ref="paymentVoucher" :file-list="paymentVoucherfileList" :action="paymentVoucherAction"
          :before-upload="paymentVoucherBeforeUpload" list-type="picture" accept="image/*">
          <el-button size="small" type="primary" icon="el-icon-upload">点击校园图片</el-button>
        </el-upload>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item size="large">
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-col>
  </el-form>
  </div>
</template>

<script>
export default {
  name: 'insertPayInfo',
  data () {
    return {
      formData: {
        name: undefined,
        major: null,
        cardNumber: undefined,
        graduationTime: undefined,
        campus: undefined,
        address_dong: undefined,
        address_lou: undefined,
        address_hao: undefined,
        info: undefined,
        graduationImage: '',
        campusImage: '',
        dormitoryImage: '',
        graduationImageList: [],
        campusImageList: [],
        dormitoryImageList: []
      },
      rules: {
        name: [{
          message: '校友姓名',
          trigger: 'change'
        }],
        major: [{
          message: '校友专业',
          trigger: 'change'
        }],
        cardNumber: [{
          required: true,
          message: '校友学号',
          trigger: 'change'
        }],
        campus: [{
          message: '校友所在校区',
          trigger: 'change'
        }],
        address_dong: [{
          message: '校友所在宿舍-栋',
          trigger: 'change'
        }],
        address_lou: [{
          message: '校友所在宿舍-楼',
          trigger: 'change'
        }],
        address_hao: [{
          message: '校友所在宿舍-号',
          trigger: 'change'
        }],
        info: [{
          message: '校友简介',
          trigger: 'blur'
        }]
      },
      paymentVoucherAction: 'https://jsonplaceholder.typicode.com/posts/',
      paymentVoucherfileList: [],
      graduationTimeOptions: [{
        label: '一',
        value: 1
      }, {
        label: '二',
        value: 2
      }],
      campusOptions: [{
        label: '微信',
        value: 1
      }, {
        label: '支付宝',
        value: 2
      }],
      address_dongOptions: [{
        label: '全款',
        value: 1
      }, {
        label: '分期',
        value: 2
      }],
      address_louOptions: [{
        label: '全款',
        value: 1
      }, {
        label: '分期',
        value: 2
      }],
      address_haoOptions: [{
        label: '全款',
        value: 1
      }, {
        label: '分期',
        value: 2
      }]
    }
  },
  computed: {},
  watch: {},
  created () {
    this.show()
  },
  mounted () {},
  methods: {
    show () {
      var that = this
      var cardNumber = this.$route.params.cardNumber
      this.$axios.get('/admin/getUser?cardNumber=' + cardNumber).then(res => {
        if (res.data.status === 200 && res.data.msg === '查询成功') {
          this.formData = res.data.data
          var temp = res.data.data.dormitory.split('栋')
          this.formData.address_dong = temp[0]
          this.formData.address_lou = temp[1].slice(0, 1)
          this.formData.address_hao = temp[1].slice(1, 3)
        } else if (res.status === 500 && res.error === 'Internal Server Error') {
          that.$message({
            message: '查询异常，请返回重试',
            type: 'warning'
          })
        }
      })
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
    async submit () {
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
      await this.$axios.post('/admin/UpdateUser', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        if (res.data.status === 200 && res.data.msg === '更新成功') {
          this.$message({ type: 'success', message: '更新成功' })
        } else {
          this.$message({ type: 'warning', message: '更新失败，请检查后重试' })
        }
      })
    },
    resetForm () {
      this.formData = {
        name: undefined,
        major: null,
        cardNumber: undefined,
        graduationTime: undefined,
        campus: undefined,
        address_xiaoqu: undefined,
        address_dong: undefined,
        address_lou: undefined,
        address_hao: undefined,
        info: undefined,
        graduationImage: '',
        campusImage: '',
        dormitoryImage: '',
        graduationImageList: [],
        campusImageList: [],
        dormitoryImageList: []
      }
    },
    paymentVoucherBeforeUpload (file) {
      const isRightSize = file.size / 1024 / 1024 < 10
      if (!isRightSize) {
        this.$message.error('文件大小超过 10MB')
      }
      const isAccept = new RegExp('image/*').test(file.type)
      if (!isAccept) {
        this.$message.error('应该选择image/*类型的文件')
      }
      return isRightSize && isAccept
    }
  }
}
</script>

<style scoped lang="less">
.main{
  height: 100%;
  width: 100%;
  margin: 0;
  line-height: 1;
  padding: .25rem 0;
  .form{
    width: 60%;
    .upload{
      width: 30%;
      float: left;
    }
  }
}
</style>
