<template>
  <div class="main">
    <el-container>
      <el-aside width="15%">
        <el-menu default-active="/marketIndex/personalPerformance"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 router="true"
                 @close="handleClose"
                 background-color="#1F4570"
                 text-color="#F2F6FC"
                 active-text-color="#ffd04b">
          <div class="logo"><img style="width:100%" src="../../assets/image/system_logo.png" alt="" srcset=""></div>
          <el-menu-item index="/marketIndex/personalPerformance">
            <i class="el-icon-data-line"></i>
            <span slot="title">系统总览</span>
          </el-menu-item>
          <el-menu-item index="/marketIndex/studentInfo">
            <i class="el-icon-user"></i>
            <span slot="title">校友管理</span>
          </el-menu-item>
          <el-menu-item index="/marketIndex/major">
            <i class="el-icon-setting"></i>
            <span slot="title">专业班级设置</span>
          </el-menu-item>
          <el-menu-item index="/marketIndex/class">
            <i class="el-icon-office-building"></i>
            <span slot="title">校区与宿舍</span>
           </el-menu-item>
          <!-- <el-menu-item index="/marketIndex/wall">
            <i class="el-icon-postcard"></i>
            <span slot="title">图片管理</span>
          </el-menu-item> -->
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb> -->
          <el-menu :default-active="sjl"
                   router="true"
                   class="el-menu-demo header-menu"
                   mode="horizontal"
                   @select="handleSelect"
                   background-color="#fff"
                   text-color="#409EFF"
                   active-text-color="#275368"
                   active-background-color="#409EFF">
            <div class="avatar" @click="turnAvatar">
              <img :src="this.avatarImg" alt="">
            </div>
            <el-menu-item index="/marketIndex/bulletin">公告栏
              <div class="tip">3</div>
            </el-menu-item>
            <el-menu-item index="/marketIndex/message">消息中心
              <div class="tip">28</div>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">我的工作台</template>
              <el-menu-item index="/marketIndex/personalInfo">个人中心</el-menu-item>
              <el-menu-item index="" @click="exit">退出</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- <el-footer>@Codermainac -2022.06</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import Header from '@/components/header.vue'
export default {
  name: 'marketIndex',
  components: {
    // Header
  },
  data () {
    return {
      avatarImg: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  created () {
    this.show()
  },
  methods: {
    show () {
      this.avatarImg = localStorage.getItem('avatar')
    },
    handleSelect () {
      console.log('res')
    },
    getSearch () {
      this.menData = this.$route.query.people
      console.log(this.$route.query.people)
    },
    turnAvatar () {
      this.$router.push('/marketIndex/avatarReset')
    },
    // 导航栏函数
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
    // 结束
  }
}
</script>

<style scoped lang="less">
.main {
  height: 99.999vh;
  width: 100%;
  position: relative;
  .el-header {
    position: relative;
    // background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
    margin: 0;
    padding: 0;
    .header-menu {
      position: absolute;
      right: 10px;
      .avatar {
        position: absolute;
        top: 0;
        right: 105%;
        height: 100%;
        width: 20%;
        border-radius: 50%;
        background-color: rgb(239, 239, 239);
        cursor: pointer;
        overflow: hidden;
        display: flex;
        align-items: center;
        img{
          width: 100%;
        }
      }
      .el-menu-item {
        .tip {
          position: absolute;
          background-color: rgb(244, 32, 32);
          height: 28%;
          line-height: 1.35;
          font-size: 10px;
          color: #e9eef3;
          width: 21%;
          top: 5px;
          right: 5px;
          border-radius: 50%;
        }
      }
    }
  }
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
    margin: 0;
    padding: 0;
  }

  .el-aside {
    overflow: hidden;
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    margin: 0;
    padding: 0;
    .logo {
      height: 8.8%;
      width: 98.77%;
      // background-color: #409eff;
      line-height: 4;
    }
    .el-menu-vertical-demo {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 99.77%;
    }
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
    margin: 0;
    padding: 0;
  }
}

.main > .el-container {
  height: 99.99vh;
  margin-bottom: 40px;
}
.el-container {
  margin: 0;
  padding: 0;
}
</style>
