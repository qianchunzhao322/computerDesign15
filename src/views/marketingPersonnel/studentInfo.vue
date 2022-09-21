<template>
  <div class="main">
    <el-form ref="elForm"
             :model="formData"
             :rules="rules"
             size="medium"
             label-width="100px"
             class="demo-form-inline">

      <el-col :span="5">
        <el-form-item label-width="72px"
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
      </el-col>
      <el-col :span="6">
        <el-form-item label-width="72px"
        style="margin-left: 5%"
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
      </el-col>
      <el-col :span="6">
        <el-form-item label-width="90px"
style="margin-left: 2%"
                      label="校友姓名:"
                      prop="name">
          <el-input v-model="formData.name"
                    placeholder="请输入"
                    clearable
                    :style="{width: '100%'}"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="7">
        <el-form-item label-width="70px"
                      label="学号："
                      prop="cardNumber">
          <el-input v-model="formData.cardNumber"
                    placeholder="请输入"
                    clearable
                    :style="{width: '100%'}"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="7">
        <el-form-item label="大学宿舍:"
        style="margin-left: -10%"
                      prop="address_xiqoqu">
          <el-select v-model="formData.address_xiqoqu"
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
                     style="margin-left: 10%"
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
      <el-col :span="4">
        <el-form-item label-width="0"
                      prop="">
          <el-button type="primary"
                     icon="el-icon-search"
                     @click="search"
                     size="medium"> 查询 </el-button>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label-width="0"
                      prop="">
          <el-button type="warning"
                     icon="el-icon-edit"
                     @click="reset"
                     size="medium"> 重置 </el-button>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label-width="0"
                      prop="">
          <el-button type="primary"
                     icon="el-icon-edit-outline"
                     size="medium"
                     @click="getNew"> 新增 </el-button>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label-width="0"
                      prop="">
          <el-upload class="upload-demo"
                     action="#"
                     :before-upload="beforeAvatarUpload"
                     :on-change="getIn"
                     :file-list="fileList">
            <el-button size="medium"
            icon="el-icon-upload"
                       type="primary">导入</el-button>
          </el-upload>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label-width="0"
                      prop="">
          <el-button type="info"
                     icon="el-icon-folder-opened"
                     @click="putOut"
                     size="medium"> 导出 </el-button>
        </el-form-item>
      </el-col>
    </el-form>
    <el-table ref="filterTable"
              :data="tableData"
              stripe
              align="center"
              height="420"
              style="width: 96%; margin:20px auto;">
      <el-table-column prop="name"
                       label="校友姓名"
                       align="center"
                       width="180">
      </el-table-column>
      <el-table-column prop="graduationTime"
                       label="毕业年份"
                       align="center"
                       sortable
                       width="180"
                       column-key="date"
                       :filters="[{text: '2016', value: '2016'}, {text: '2017', value: '2017'}, {text: '2018', value: '2018'}, {text: '2015', value: '2015'}]"
                       :filter-method="filterHandler">
      </el-table-column>
      <el-table-column prop="cardNumber"
                       label="学号"
                       align="center"
                       sortable
                       width="180">
      </el-table-column>
      <el-table-column prop="major"
                       label="专业班级"
                       align="center"
                       width="180">
      </el-table-column>
      <el-table-column prop="dormitory"
                       label="大学宿舍"
                       align="center"
                       :formatter="formatter">
      </el-table-column>
      <el-table-column prop="campus"
                       label="校区"
                       align="center"
                       width="100"
                       :filters="[{ text: '三江校区', value: '三江校区' },{ text: '红旗校区', value: '红旗校区' },{ text: '黄金校区', value: '黄金校区' }, { text: '南昌校区', value: '南昌校区' }]"
                       :filter-method="filterTag"
                       filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.campus === '红旗校区' ? 'primary' : 'success'"
                  disable-transitions>{{scope.row.campus}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="pageView"
      align="center"
                       label="访问量"
                       sortable
                       width="90">
      </el-table-column>
      <el-table-column width="180" align="center">
        <template slot="header"
                  slot-scope>
        </template>
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'studentInfo',
  data () {
    return {
      fileList: [],
      formData: {
        graduationTime: '',
        major: '',
        name: '',
        cardNumber: '',
        address_xiqoqu: '',
        address_dong: '',
        address_lou: '',
        address_hao: ''
      },
      rules: {
        graduationTime: [],
        major: [],
        name: [{
          required: true,
          message: '请输入',
          trigger: 'blur'
        }],
        cardNumber: [{
          message: '请输入',
          trigger: 'blur'
        }],
        address_xiqoqu: [],
        address_dong: [],
        address_lou: [],
        address_hao: []
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
        label: '1号',
        value: 1
      }, {
        label: '2号',
        value: 2
      }],
      tableData: []
    }
  },
  created () {
    this.getinfo()
    this.initHao()
  },
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
    putOut () {
      // 这时的axios是已经携带了token信息的
      this.$axios({
        method: 'get',
        url: '/admin/export',
        // 注意配置响应方式 responseType: 'blob'
        responseType: 'blob'
      }).then((res) => {
        console.log(res.data)
        // 接口请求成功之后完成以下操作
        const blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        console.log(blob)
        // 获取 获取响应头 heads 中的 filename 文件名
        // const temp = res.headers['content-disposition'].split(';')[1].split('filename=')[1]
        // console.log('temp' + temp)
        // // 把 %E9%AB%98%E6%84%8F%E5%90%91%E5%AD%A6%E5%91%98303.xlsx 转化成文字
        // var fileName = decodeURIComponent(temp)
        var fileName = '用户信息.xlsx'
        // 创建一个 a 标签
        const link = document.createElement('a')
        // 不显示a标签
        link.style.display = 'none'
        // 给a 标签的href属性赋值
        link.href = URL.createObjectURL(blob)
        link.setAttribute('download', fileName)
        // 把a标签插入页面中
        document.body.appendChild(link)
        link.click()
        // 点击之后移除a标签
        document.body.removeChild(link)
      }).catch(error => {
        this.$message.error('下载失败')
        console.log(error)
      })
    },
    beforeAvatarUpload (file) {
      this.isElsx = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      this.isLt5M = file.size / 1024 / 1024 < 5
    },
    async getIn (event) {
      var that = this
      if (!that.isElsx) {
        // that.$message.error('上传文件格式不符，仅xls/xlsx!')
      }
      // if (!that.isLt5M) {
      //   that.$message.error('上传头像图片大小不能超过 5MB!')
      // }
      // if (that.isElsx && that.isLt5M) {
      if (that.isElsx) {
        console.log(that)
        const file = event.raw
        const formData = new FormData()
        formData.append('file', file)
        await that.$axios.post('/admin/imp', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
          if (res.data.status === 200 && res.data.msg === '导入成功') {
            that.$message({ type: 'success', message: '导入成功' })
          } else if (res.data.status === 500 && res.data.msg === 'Internal Server Error') {
            that.$message({ type: 'warning', message: '服务器繁忙,请稍后重试' })
          }
        })
      }
    },
    getNew () {
      this.$router.push('/marketIndex/insertStudentInfo')
    },
    async getinfo () {
      await this.$axios.get('/admin/getAllStudents').then(res => {
        this.tableData = res.data.data
      })
    },
    getAll (dong, lou, hao) {
      if (parseInt(hao) < 10) {
        return dong + '栋' + lou + '0' + hao
      } else {
        return dong + '栋' + lou + hao
      }
    },
    async search () {
      const formData = new FormData()
      formData.append('name', this.formData.name)
      formData.append('graduationTime', this.formData.graduationTime)
      formData.append('major', this.formData.major)
      formData.append('cardNumber', this.formData.cardNumber)
      formData.append('campus', this.formData.address_xiqoqu)
      formData.append('dormitory', this.getAll(this.formData.address_dong, this.formData.address_lou, this.formData.address_hao))
      console.log(formData)
      await this.$axios.post('/admin/findUser', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res)
        this.tableData = res.data.data
      })
    },
    reset () {
      this.formData = {
        graduationTime: '',
        major: '',
        name: '',
        cardNumber: '',
        address_xiqoqu: '',
        address_dong: '',
        address_lou: '',
        address_hao: ''
      }
      this.getinfo()
    },
    handleEdit (index, row) {
      this.$router.push({ name: 'insertPayInfo', params: { cardNumber: row.cardNumber } })
    },
    handleDelete (index, row) {
      console.log(index, row)
      console.log(row.cardNumber)
      this.$axios.delete('/admin/deleteUser', { params: { cardNumber: row.cardNumber } }).then(res => {
        if (res.data.status === 200 && res.data.msg === '删除成功') {
          this.$message({ type: 'success', message: '删除成功' })
          this.getinfo()
        } else if (res.data.status === 500 && res.data.msg === '未查询这个人，请输入正确的学号') {
          this.$message({ type: 'error', message: '未查询这个人，请输入正确的学号' })
        } else {
          this.$message({ type: 'warning', message: '删除异常，请稍后重试' })
        }
      })
    },
    formatter (row, column) {
      return row.dormitory
    },
    filterTag (value, row) {
      return row.campus === value
    },
    filterHandler (value, row, column) {
      const property = column.property
      return row[property] === value
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
  padding: 0;
  overflow: hidden;
  .demo-form-inline {
    width: 85%;
    margin: 0 auto;
    margin-top: 3%;
  }
}
</style>
