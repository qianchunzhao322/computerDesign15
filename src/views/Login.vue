<template>
  <div class="login">
    <div class="login-container">
      <div class="back-plate">
        <div class="side left-side">
          <div class="mask_QRcode">
            <div class="qrcode"
                 @click="showQRcode"
                 :style="bgQRcode"></div>
          </div>
          <h2>
            欢迎回家
          </h2>
          <p>可靠高效的校友查询系统</p>
          <div class="img"></div>
          <span>内部人员？</span>
          <button @click="over">管理员</button>
        </div>
        <div class="side right-side">
          <h2>欢迎加入</h2>
          <p>一个牛逼哄哄的好东西</p>
          <div class="img"></div>
          <span>是校友？</span>
          <button @click="over">去查询</button>
        </div>
      </div>
      <div :class="['mask-layer', layer_value? 'mask-layer-after': 'mask-layer-before']">
        <div v-if="isLogin"
             class="login-form">
          <div class="sign-in-htm">
            <div class="title">校友查询</div>
            <div class="group">
              <el-select class="input"
                         v-model="search_data.time"
                         clearable
                         placeholder="请选择校友入学年份">
                <el-option v-for="item in option_time"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value"
                           class="label">
                </el-option>
              </el-select>
            </div>
            <div class="group">
              <el-select class="input"
                         v-model="search_data.major"
                         clearable
                         placeholder="请选择校友专业">
                <el-option v-for="item in option_major"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value"
                           class="label">
                </el-option>
              </el-select>
            </div>
            <div class="group">
              <el-input class="input"
                         placeholder="请选择校友姓名"
                         v-model="search_data.name"
                         clearable
                         type="text">
              </el-input>
            </div>
            <div class="group">
              <input type="submit"
                     class="button"
                     value="查询"
                     @click="search">
            </div>
          </div>
        </div>
        <div v-else
             class="login-form">
          <div v-if="isForget"
               class="sign-in-htm">
            <div class="title">管理员</div>
            <div class="group">
              <label for="user"
                     class="label">管理员账号</label>
              <input id="user"
                     type="text"
                     class="input"
                     clearable
                     v-model="login_data.account">
            </div>
            <div class="group">
              <label for="pass"
                     class="label">密码</label>
              <input id="pass"
                     type="password"
                     class="input"
                     data-type="password"
                     show-password
                     clearable
                     v-model="login_data.password">
            </div>
            <div class="group">
              <input id="check"
                     type="checkbox"
                     class="check"
                     checked
                     style="margin: 10px"
                     v-model="login_data.remember">
              <label for="check"
                     style="margin: 5px">记住我</label>
            </div>
            <div class="group">
              <input type="submit"
                     class="button"
                     value="登录"
                     @click="login">
            </div>
            <div class="hr"></div>
            <div class="foot-lnk">
              <a href="#"
                 @click="isforget">忘记密码?</a>
            </div>
          </div>
          <div v-else
               class="sign-in-htm">
            <div class="title">FORGET</div>
            <div class="group">
              <label for="user"
                     class="label">手机号</label>
              <input id="user"
                     type="text"
                     class="input"
                     v-model="forget_data.phone">
            </div>
            <div class="group">
              <label for="user"
                     class="label">验证码</label>
              <input id="user"
                     type="text"
                     class="input"
                     v-model="forget_data.verification_code">
            </div>
            <div class="group">
              <label for="pass"
                     class="label">重置密码</label>
              <input id="pass"
                     type="password"
                     class="input"
                     data-type="password"
                     show-password
                     v-model="forget_data.repassword">
            </div>
            <div class="group">
              <input type="submit"
                     class="button"
                     value="重置"
                     @click="reset">
            </div>
            <div class="foot-lnk">
              <a href="#"
                 @click="isforget">去登陆</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      isLogin: false,
      isForget: false,
      layer_value: false,
      search_data: {
        time: '',
        major: '',
        name: ''
      },
      login_data: {
        account: '',
        password: '',
        remember: false
      },
      forget_data: {
        phone: '',
        verification_code: '',
        repassword: ''
      },
      bgQRcode: {
        backgroundImage: {}
      },
      option_time: [{
        label: '1999',
        value: 1999
      }, {
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
      time_value: '',
      option_major: [{
        value: '计算机201班',
        label: '计算机201班'
      }, {
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
      specialty_value: '',
      option_name: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      name_value: ''
    }
  },
  created () {
    this.over()
    this.isforget()
    this.reset()
    this.login()
    // this.search()
    this.showQRcode()
  },
  mounted () {
  },
  methods: {
    over () {
      this.layer_value = !this.layer_value
      this.isLogin = !this.isLogin
    },
    isforget () {
      this.isForget = !this.isForget
    },
    reset () {
      console.log(this.forget_data)
    },
    async login () {
      const formData = new FormData()
      formData.append('acconut', '' + this.login_data.account)
      formData.append('password', '' + this.login_data.password)
      await this.$axios.post('/admin/login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        if (res.data.status === 200 && res.data.msg === '登入成功') {
          this.$message({ type: 'success', message: '登录成功' })
          this.$router.push({ name: 'marketIndex', params: { account: this.login_data.account, avatar: res.data.data.userFace } })
          localStorage.setItem('account', this.login_data.account)
          localStorage.setItem('avatar', res.data.data.userFace)
        } else if (res.data.status === 500 && res.data.msg === '密码错误') {
          this.$message({ type: 'error', message: '账户或密码错误，请重新检查后登录' })
        }
      })
    },
    async search () {
      const formData = new FormData()
      formData.append('name', this.search_data.name)
      formData.append('time', this.search_data.time)
      formData.append('major', this.search_data.major)
      console.log(formData)
      await this.$axios.post('/admin/getInfo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        if (res.data.status === 200 && res.data.msg === '查询成功') {
          console.log(res.data.data.infos)
          this.$router.push({ name: 'Select', params: { people: res.data.data.infos, num: res.data.data.num } })
        } else if (res.data.status === 500 && res.data.msg === '未查到相关人员,请重新查询') {
          this.$message({ type: 'warning', message: '未查到相关人员,请重新查询' })
          this.search_data = {
            time: '',
            major: '',
            name: ''
          }
        }
      })
    },
    showQRcode () {
      // 获取实时登录二维码
      this.bgQRcode.backgroundImage = { backgroundImage: 'url("../assets/image/register_illustration.png")' }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  a {
    color: inherit;
    text-decoration: none;
  }
  input,
  button {
    outline: none;
    border: none;
  }
  position: relative;
  margin: 0;
  padding: 0;
  // background-color: #f8e0e0;
  background-image: url("../assets/image/login_register_bgi.png");
  background-repeat: no-repeat;
  background-size: 100%;
  // opacity:0.3;
  height: 99.999vh;
  width: 100%;
  .login-container {
    position: absolute;
    top: 25%;
    left: 32%;
    background-color: rgba(0, 0, 0, 0);
    height: 50%;
    width: 38%;
    .back-plate {
      position: absolute;
      top: 10%;
      height: 80%;
      width: 100%;
      border-radius: 20px;
      background: linear-gradient(145deg, #cacaca);
      box-shadow: 17px 17px 34px #656565, -17px -17px 34px #ffffff;
      background-color: rgba(0, 0, 0, 0);
      .side {
        height: 100%;
        width: 50%;
        display: flex;
      }
      .left-side {
        // background-color: rgb(103, 125, 214);
        background-color: rgba(0, 0, 0, 0);
        float: left;
        .mask_QRcode {
          position: absolute;
          top: 0%;
          left: 0%;
          height: 15%;
          width: 7.8%;
          background-color: #fff;
          border-radius: 0px;
          background: linear-gradient(145deg, #f0f0f0, #cacaca);
          box-shadow: 5px 5px 19px #455372, -5px -5px 19px #ffffff;
          overflow: hidden;
          .qrcode {
            width: 140%;
            height: 140%;
            background-image: url("../assets/image/qrcode_min.png");
            background-size: 100%;
            background-repeat: no-repeat;
            transform: translateY(-50%) translateX(-50%) rotate(45deg);
            cursor: pointer;
          }
        }
        h2 {
          position: absolute;
          top: 5%;
          left: 20%;
          color: #d8dfea;
          font-size: calc(100vw / 1920 * 34);
          font-weight: bold;
          letter-spacing: 3px;
          text-align: center;
          margin-bottom: 4px;
        }
        .img {
          position: absolute;
          top: 35%;
          left: 18%;
          width: 20%;
          height: 40%;
          background-image: url("../assets/image/login_illustration.png");
          background-size: 100%;
          background-repeat: no-repeat;
        }
        p {
          position: absolute;
          top: 20%;
          left: 17%;
          font-size: calc(100vw / 1920 * 18);
          letter-spacing: 2px;
          color: #c8cbd1;
          text-align: center;
        }
        span {
          position: absolute;
          top: 82%;
          left: 16%;
          font-size: calc(100vw / 1920 * 16);
          color: #b7d8d4;
        }
        button {
          position: absolute;
          top: 75%;
          left: 30%;
          margin-top: 3%;
          background-color: #fff;
          color: #a262ad;
          border: 1px solid #d3b7d8;
          padding: 6px 10px;
          border-radius: 5px;
          letter-spacing: 1px;
          outline: none;
          cursor: pointer;
        }
      }
      .right-side {
        background-color: rgba(77, 88, 133, 0);
        float: left;
        position: relative;
        h2 {
          position: absolute;
          top: 5%;
          left: 25%;
          color: #eef3fc;
          font-size: calc(100vw / 1920 * 34);
          font-weight: bold;
          letter-spacing: 3px;
          text-align: center;
          margin-bottom: 4px;
        }
        .img {
          position: absolute;
          top: 35%;
          left: 22%;
          width: 39%;
          height: 40%;
          background-image: url("../assets/image/register_illustration.png");
          background-size: 100%;
          background-repeat: no-repeat;
        }
        p {
          position: absolute;
          top: 20%;
          left: 20%;
          font-size: calc(100vw / 1920 * 18);
          letter-spacing: 2px;
          color: #e4e6e9;
          text-align: center;
        }
        span {
          position: absolute;
          top: 82%;
          left: 24%;
          font-size: calc(100vw / 1920 * 16);
          color: #e2e2e2;
        }
        button {
          position: absolute;
          top: 78%;
          left: 45%;
          margin-top: 3%;
          background-color: #fff;
          color: #626bad;
          border: 1px solid #b7bcd8;
          padding: 6px 10px;
          border-radius: 5px;
          letter-spacing: 1px;
          outline: none;
          cursor: pointer;
        }
      }
    }
    .mask-layer {
      background: linear-gradient(135deg, #d803f4, #61abe8);
      position: absolute;
      top: 5%;
      left: 5%;
      height: 90%;
      width: 45%;
      border-radius: 20px;
      .login-form {
        width: 100%;
        min-height: 145px;
        position: relative;
        -webkit-perspective: 1000px;
        perspective: 1000px;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        .title {
          width: 100%;
          height: 20%;
          font-size: calc(100vw / 1920 * 36);
          text-align: center;
          line-height: 200%;
          border-bottom: 2px solid rgba(0, 142, 198, 0.2);
          color: rgb(217, 232, 243);
        }
      }
      .login-form .group {
        margin-bottom: 15px;
      }
      .login-form .group .label,
      /deep/ .login-form .group .input,
      .login-form .group .button {
        width: 80%;
        margin: 0 auto;
        color: #fff;
        display: block;
      }
      /deep/ .el-input__inner {
        background-color: rgba(0, 0, 0, 0);
        border: #a262ad;
      }
      /deep/ .login-form .group .input,
      /deep/ .login-form .group #user,
      .login-form .group .button {
        border: none;
        padding: 4px 10px;
        font-size: calc(100vw / 1920 * 20);
        border-radius: 25px;
        background: rgba(255, 255, 255, 0.1);
        color: #d8dfea !important;
      }
      .login-form .group input[data-type="password"] {
        text-security: circle;
        -webkit-text-security: circle;
      }
      .login-form .group .label {
        color: rgb(255, 255, 255);
        padding-left: 20px;
        padding-bottom: 8px;
        font-size: calc(100vw / 1920 * 16);
      }
      .login-form .group .button {
        background: #1161ee;
        margin: 0 auto;
        cursor: pointer;
      }
      .login-form .group label .icon {
        width: 15px;
        height: 15px;
        border-radius: 2px;
        position: relative;
        display: inline-block;
        background: rgba(225, 8, 8, 0.1);
      }
      .hr {
        height: 2px;
        margin: 12px 0 12px 0;
        background: rgba(255, 255, 255, 0.2);
      }
      .foot-lnk {
        text-align: center;
      }
      .enjoy-css {
        display: inline-block;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        padding: 5px 20px;
        border: 1px solid #b7b7b7;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        font: normal calc(100vw / 1920 * 20) / normal "Times New Roman", Times,
          serif;
        color: rgba(0, 142, 198, 1);
        -o-text-overflow: clip;
        text-overflow: clip;
        background: -webkit-linear-gradient(
            0deg,
            rgba(182, 209, 219, 1) 0,
            rgba(113, 206, 239, 1) 68%,
            rgba(33, 180, 226, 1) 100%,
            rgba(183, 222, 237, 1) 100%
          ),
          rgba(252, 252, 252, 1);
        background: -moz-linear-gradient(
            90deg,
            rgba(182, 209, 219, 1) 0,
            rgba(113, 206, 239, 1) 68%,
            rgba(33, 180, 226, 1) 100%,
            rgba(183, 222, 237, 1) 100%
          ),
          rgba(252, 252, 252, 1);
        background: linear-gradient(
            90deg,
            rgba(182, 209, 219, 1) 0,
            rgba(113, 206, 239, 1) 68%,
            rgba(33, 180, 226, 1) 100%,
            rgba(183, 222, 237, 1) 100%
          ),
          rgba(252, 252, 252, 1);
        background-position: 50% 50%;
        -webkit-background-origin: padding-box;
        background-origin: padding-box;
        -webkit-background-clip: border-box;
        background-clip: border-box;
        -webkit-background-size: auto auto;
        background-size: auto auto;
        -webkit-box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.2);
        box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.2);
        text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.66);
        -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
        -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
        -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
        transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
      }
    }
    .mask-layer-before {
      left: 5%;
      transition: all 0.7s ease;
    }
    .mask-layer-after {
      left: 50%;
      transition: all 0.7s ease;
    }
  }

  @media screen and (max-width: 320px) {
    .lowin .lowin-wrapper {
      width: 100%;
    }
    .lowin .lowin-box {
      padding: 0 10px;
    }
  }
}
</style>
