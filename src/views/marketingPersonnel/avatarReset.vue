<template>
  <div class="main">
    <el-button class="up"
               @click="dialogVisible = true">上传头像</el-button>
    <div class="avatar"></div>
    <div class="info">支持jpg、png格式的图片，大小不超过5M</div>
    <avatar-cropper :dialogVisible.sync="dialogVisible"
                    @closeAvatarDialog="closeAvatarDialog"></avatar-cropper>
    <div class="right">
      <div class="safeLogo">
        <span>60</span>
        <p class="safeInfo">您的账号安全状况还不错哟，完善剩余的安全项可进一步提高安全评分哟</p>
      </div>
      <div class="safeBody">
        <div class="items">
          <div class="item item1">
            <el-button style="margin-right: 10px"
                       size="mini"
                       type="success"
                       icon="el-icon-check"
                       circle></el-button>绑定手机
          </div>
          <div class="item">已绑定</div>
          <div class="item item3 phone"
               @click="goToNew">更换手机</div>
        </div>
        <div class="items">
          <div class="item item1">
            <el-button style="margin-right: 10px"
                       size="mini"
                       type="danger"
                       icon="el-icon-warning-outline"
                       circle></el-button>绑定邮箱
          </div>
          <div class="item"
               style="color:rgb(237, 76, 76)">未绑定邮箱</div>
          <div class="item item3 email"
               @click="goToNew">绑定邮箱</div>
        </div>
        <div class="items">
          <div class="item item1">
            <el-button style="margin-right: 10px"
                       size="mini"
                       type="danger"
                       icon="el-icon-warning-outline"
                       circle></el-button>绑定微信
          </div>
          <div class="item"
               style="color:rgb(237, 76, 76)">未绑定微信</div>
          <div class="item item3 wechat"
               @click="goToNew">绑定微信</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatarCropper from '@/components/avatar.vue'
import bus from '@/components/bus.js'
export default {
  name: 'avatarReset',
  components: {
    avatarCropper
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    closeAvatarDialog (data) {
      console.log(data)
      this.dialogVisible = false
    },
    goToNew (e) {
      console.log(e.srcElement.baseURI)
      bus.$emit('bindThing', e.srcElement.classList[2])
      if (e.srcElement.baseURI.indexOf('marketIndex') >= 0) {
        this.$router.push('/marketIndex/bind')
      } else if (e.srcElement.baseURI.indexOf('directorIndex') >= 0) {
        this.$router.push('/directorIndex/bind')
      } else if (e.srcElement.baseURI.indexOf('academicStaffIndex') >= 0) {
        this.$router.push('/academicStaffIndex/bind')
      } else if (e.srcElement.baseURI.indexOf('financialOfferIndex') >= 0) {
        this.$router.push('/financialOfferIndex/bind')
      }
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
  position: relative;
  overflow: hidden;
  .avatar {
    position: absolute;
    top: 20%;
    left: 10%;
    height: 40%;
    width: 20%;
    border-radius: 50%;
    // background-color: rgb(253, 136, 136);
    background-image: url("https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .info {
    position: absolute;
    top: 62%;
    left: 10%;
  }
  .up {
    position: absolute;
    top: 66%;
    left: 17%;
    border-radius: 15%;
  }
  .right {
    position: absolute;
    height: 100%;
    width: 65%;
    top: 0;
    right: 0;
    .safeLogo {
      position: absolute;
      height: 36%;
      width: 50%;
      top: 4%;
      right: 25%;
      background-image: url("../../assets/image/safeBG.png");
      background-size: 100%;
      background-repeat: no-repeat;
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-weight: bold;
        color: #fff;
        font-size: 60px;
      }
      p {
        position: absolute;
        width: 120%;
        bottom: -15%;
        left: -10%;
        font-size: 16px;
      }
    }
    .safeBody {
      position: absolute;
      height: 40%;
      width: 80%;
      top: 55%;
      right: 10%;
      .items {
        height: 20%;
        width: 100%;
        display: flex;
        background-color: #fff;
        border-bottom: 1px solid skyblue;
        .item {
          height: 50%;
          width: 30%;
          text-align: center;
          font-size: 13px;
          line-height: 4.5;
          color: rgb(65, 64, 64);
        }
        .item1 {
          line-height: 3.8;
          font-size: 15px;
        }
        .item3 {
          text-align: right;
          color: rgb(84, 208, 230);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
