<template>
  <div id="apps">
    <div class="container">
      <div class="header">
        <el-carousel :interval="3500"
                     height="260px"
                     arrow="always">
          <el-carousel-item>
            <img src="../assets/image/list1.png"
                 alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/image/list2.png"
                 alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/image/list3.png"
                 alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/image/list4.png"
                 alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="main">
        <div class="main_header">
          <div class="sign left" v-show="this.showBefore" @click="turnBefore"> <i class="el-icon-back"></i> 上一位{{this.manData.name}}校友</div>
          <div class="sign right" v-show="this.showAfter" @click="turnNext">下一位{{this.manData.name}}校友 <i class="el-icon-right"></i></div>
        </div>
        <div class="main_txt">
           <el-button type="primary" round @click="back">返回查询</el-button>
          <div class="title">{{this.manData.name}}校友</div>
          <div class="desc">访问量：{{this.manData.pageView}} &nbsp;&nbsp;&nbsp;更新时间： {{this.manData.updateTime}}</div>
          <div class="txt">{{this.manData.info}}</div>
        </div>
        <div class="main_img">
          <div class="items">
            <div class="img" v-for="item in this.manData.graduationImageList" :key="item">
              <img :src="item"
                   alt="">
            </div>
            <div class="desc">{{this.manData.major}}{{this.manData.name}}毕业合照</div>
          </div>
          <div class="items">
            <div class="img"  v-for="item in this.manData.dormitoryImageList" :key="item">
              <img :src="item"
                   alt="">
            </div>
            <div class="desc">{{this.manData.campus}}{{this.manData.dormitory}}寝室合照</div>
          </div>
          <div class="items">
            <div class="img"  v-for="item in this.manData.campusImageList" :key="item">
              <img :src="item"
                   alt="">
            </div>
            <div class="desc">毕业于{{this.manData.graduationTime}}年的校友{{this.manData.name}}发布的校园照</div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="wangjing">邮政编码： 341000 地址： 江西省赣州市客家大道1958号（三江校区）</div>
        <div class="wangjingma">赣ICP备 05001230号 赣州网安备 89753973897459820号</div>
      </div>
    </div>
  </div>
</template>

<script>
// import * as echarts from 'echarts'
export default {
  data () {
    return {
      num: 1,
      showBefore: false,
      showAfter: false,
      itemId: 0,
      manData: {
        id: 1,
        updateTime: '1',
        name: 'da',
        major: 'fasd',
        info: 'afs',
        pageView: 1,
        dormitoryImageList: ['142'],
        campusImageList: ['142'],
        graduationImageList: ['142']
      }
    }
  },
  created () {
    this.show()
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    show () {
      this.manData = this.$route.params.people[this.itemId]
      this.num = this.$route.params.num
      if (this.$route.params.num !== 1) {
        this.showBefore = false
        this.showAfter = true
      }
      console.log(this.manData)
    },
    turnBefore () {
      if (this.itemId === 0) {
        this.showBefore = false
        this.showAfter = true
      } else {
        this.itemId--
        this.manData = this.$route.params.people[this.itemId]
        this.showAfter = true
        if (this.itemId === 0) {
          this.showAfter = true
          this.showBefore = false
        }
      }
    },
    turnNext () {
      if (this.itemId === (this.num - 1)) {
        this.showAfter = false
        this.showBefore = true
      } else {
        this.itemId++
        this.manData = this.$route.params.people[this.itemId]
        this.showBefore = true
        if (this.itemId === (this.num - 1)) {
          this.showAfter = false
          this.showBefore = true
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
#apps {
  // background-color: rgb(178, 48, 48);
  // height: 99.9999vh;
  width: 98.9vw;
  overflow: hidden;
  .container {
    width: 100%;
    .header {
      height: 260px;
      width: 100%;
      // background-color: #15559a;
      // background-color: rgba(0,0,0,0);
      color: #fff;
      text-align: center;
      font-size: 40px;
      .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
      }

      .el-carousel__item {
        overflow: hidden;
        display: flex;
        align-items: center;
        img {
          width: 100%;
        }
      }
    }
    .footer {
      height: 120px;
      width: 100%;
      background-color: #7fb1f2;
      color: rgb(250, 250, 250);
      text-align: center;
      line-height: 60px;
      .wangjing {
        line-height: 70px;
      }
      .wangjingma {
        line-height: 20px;
      }
    }
    .main {
      width: 100%;
      // background-color: #e9eef3;
      color: #333;
      padding: 0;
      // text-align: center;
      // line-height: 160px;
      .main_header{
        position: relative;
        width: 100%;
        height: 50px;
        // background-color: rgb(138, 114, 114);
        border-bottom: 4px solid #dce6f1;
        .sign{
          position: absolute;
          height: 100%;
          width: 15%;
          color: rgb(62, 52, 173);
          font-size: 20px;
          line-height: 50px;
          top: 0;
          cursor: pointer;
        }
        .left{
          left: 30px;
        }
        .right{
          right: 30px;
        }
      }
      .main_txt{
        width: 100%;
        // background-color: rgb(222, 131, 131);
        position: relative;
        .reset{
    position: absolute;
    left: 20px;
    top: 20x;
  }
        .title{
          font-size: 30px;
          width: 100%;
          padding: 50px 0 20px 0;
          text-align: center;
        }
        .desc{
          font-size: 16px;
          width: 100%;
          padding: 0px 0 20px 0;
          text-align: center;
        }
        .txt{
          font-size: 18px;
          margin: 0 auto;
          width: 80%;
          padding: 20px 0 20px 0;
          background-color: #fff;
          text-indent:2em;
        }
      }
      .main_img{
        width: 100%;
        .items{
          width: 40%;
          background-color: #fff;
          margin: 5px auto;
         .img {
            height: 90%;
            width: 100%;
            overflow: hidden;
            display: flex;
            align-items: center;
            img {
              width: 100%;
            }
          }
          .desc{
            height: 10%;
            width: 100%;
            font-size: 20px;
            text-align: center;
            padding:10px 0;
          }
        }
      }
    }
  }
}
</style>
