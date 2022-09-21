<template>
  <div class="main">
    <div class="block">
      <el-tabs :tab-position="tabPosition"
               style="height: 100%;">
        <el-tab-pane label="用户消息">
          <div class="infinite-list-wrapper"
               style="overflow:auto"
               infinite-scroll-disabled="false">
            <div class="message">
              <h4>来自谁谁谁</h4>
              <p>请提供这个同学的缴费凭证之类的，确保正确性</p>
              <span>2022年1月29日 13:46</span>
              <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
            </div>
            <div class="message">
              <h4>来自谁谁谁</h4>
              <p>请提供这个同学的缴费凭证之类的，确保正确性</p>
              <span>2022年1月29日 13:46</span>
              <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
            </div>
            <div class="message">
              <h4>来自谁谁谁</h4>
              <p>请提供这个同学的缴费凭证之类的，确保正确性</p>
              <span>2022年1月29日 13:46</span>
              <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
            </div>
            <div class="message">
              <h4>来自谁谁谁</h4>
              <p>请提供这个同学的缴费凭证之类的，确保正确性</p>
              <span>2022年1月29日 13:46</span>
              <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
            </div>
            <el-pagination style="margin-top: 40px"
                           layout="prev, pager, next"
                           :total="50">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="系统消息">
          <div class="infinite-list-wrapper"
               style="overflow:auto"
               infinite-scroll-disabled="false">
            <div class="message">
              <h4>来自官方</h4>
              <p>系统版本更新</p>
              <span>2022年1月29日 13:46</span>
            </div>
            <div class="message">
              <h4>来自官方</h4>
              <p>系统版本更新</p>
              <span>2022年1月29日 13:46</span>
            </div>
            <div class="message">
              <h4>来自官方</h4>
              <p>系统版本更新</p>
              <span>2022年1月29日 13:46</span>
            </div>
            <div class="message">
              <h4>来自官方</h4>
              <p>系统版本更新</p>
              <span>2022年1月29日 13:46</span>
            </div>
            <el-pagination style="margin-top: 40px"
                           layout="prev, pager, next"
                           :total="30">
            </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      tabPosition: 'left'
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
  overflow: hidden;
  .block {
    width: 70%;
    height: 90%;
    margin: 0px auto;
    margin-top: 20px;
    .infinite-list-wrapper {
      height: 100%;
      overflow: scroll;
      .message {
        text-align: left;
        border-bottom: 2px solid rgb(142, 198, 246);
        position: relative;
        img{
          top: 4%;
          right: 5%;
          height: 80%;
          width: 10%;
          border-radius: 50%;
          background-color: rgb(151, 111, 111);
          position: absolute;
        }
        h4 {
          font-size: 18px;
          padding: 5px 20px;
          margin: 15px 0 0 0;
          color: #000;
        }
        p {
          font-size: 16px;
          padding: 5px 20px;
        }
        span {
          font-size: 14px;
          padding: 5px 20px;
          color: rgb(139, 139, 139);
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>
