<template>
  <div class="main">
    <div class="top">
      <div class="card">
        <div class="header">
          <span class="left">系统访问量</span>
          <span class="right">月比</span>
        </div>
        <h2>1,151</h2>
        <div class="outLeft">这个月还可以</div>
        <div class="outRight">+8%</div>
      </div>
      <div class="card">
        <div class="header">
          <span class="left">本月流量（外网）</span>
          <span class="right">月比</span>
        </div>
        <h2>141,151 MB</h2>
        <div class="outLeft">这个月有点多</div>
        <div class="outRight">+28%</div>
      </div>
      <div class="card">
        <div class="header">
          <span class="left">CDN计费</span>
          <span class="right">月比</span>
        </div>
        <h2>1,441</h2>
        <div class="outLeft">这个月呃</div>
        <div class="outRight">+2%</div>
      </div>
      <div class="card">
        <div class="header">
          <span class="left">系统内校友量</span>
          <span class="right">人数</span>
        </div>
        <h2>441,151</h2>
        <div class="outLeft">仍可添加</div>
        <div class="outRight">+28%</div>
      </div>
    </div>
    <div class="middle">
      <div class="left" id="echarts1"></div>
      <div class="right" id="echarts2"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'personalPerformance',
  data () {
    return {
    }
  },
  mounted () {
    this.initEcharts1()
    this.initEcharts2()
  },
  methods: {
    initEcharts1 () {
      var myChart = echarts.init(document.getElementById('echarts1'))
      myChart.setOption({
        title: {
          text: '几种信息往日展示',
          left: 'center',
          top: '1%'
        },
        legend: { top: '7%' },
        tooltip: {},
        dataset: {
          source: [
            ['日期', '系统访问量', '本月流量',
              'CDN计费', '系统内校友量',
              '分析'],
            ['7/1', 3.3, 5.22, 2.31, 2.25, 0.9],
            ['7/2', 0.38, 4.26, 1.85, 1.56, 0.81],
            ['7/3', 0.5, 4.4, 0, 2.9, 2.19],
            ['7/4', 0, 4.32, 1.71, 3.33, 0.9],
            ['7/5', 1.24, 3.14, 2.46, 8.62, 0.81],
            ['7/6', 0, 4.06, 0.96, 5, 0],
            ['7/7', 0.61, 4.33, 4, 2.65, 0],
            ['7/8', 0, 3.27, 0.59, 2.17, 0.8],
            ['7/9', 0, 2.2, 2.86, 2.7, 0],
            ['7/10', 0.68, 2.5, 1.09, 1.83, 0],
            ['7/11', 1.01, 3, 0, 1.98, 0.55],
            ['7/12', 12.18, 8.29, 6.93, 10.74, 7.41],
            ['7/13', 4.03, 3.31, 2.65, 4.72, 3.74],
            ['7/14', 3.52, 4.6, 1.29, 1.77, 1.05],
            ['7/15', 0.77, 6.21, 2.4, 4.12, 3.23],
            ['7/16', 0, 5.65, 3.92, 2.73, 1.95],
            ['7/17', 0, 2.61, 1.98, 3.33, 3.92],
            ['7/18', 0, 3.48, 2.32, 0, 0],
            ['7/19', 1.54, 3.41, 0.78, 0, 0],
            ['7/20', 0, 1.75, 0.19, 0, 1.12],
            ['7/21', 1.37, 4, 1.13, 4.44, 1.95],
            ['7/22', 0, 3.64, 0.96, 1.64, 1.19],
            ['7/23', 0, 3.64, 0.94, 0, 1.19],
            ['7/24', 2.56, 4.8, 1.06, 0, 2.84],
            ['7/25', 2.38, 3.96, 0.69, 0, 3.33],
            ['7/26', 0, 3.3, 1.65, 0, 1.74],
            ['7/27', 0, 6.32, 0.64, 2.94, 0.86],
            ['7/28', 0, 3.09, 1.07, 4.35, 0],
            ['7/29', 2.19, 2.75, 0, 9.68, 1.32],
            ['7/30', 1.09, 4.62, 1.53, 0, 3.62],
            ['7/31', 3.39, 7.37, 3.15, 0, 2.08]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'line' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      })
      window.onresize = function () {
        myChart.resize()
      }
    },
    initEcharts2 () {
      var myChart2 = echarts.init(document.getElementById('echarts2'))
      var option2 = {
        title: {
          text: '校友所在行业示意',
          left: 'center'
        },
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        series: [
          {
            name: '占比',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold',
                formatter: params => {
                  return '{a|' + params.name + '}\n{b|' + params.value + '}'
                },
                rich: {
                  a: {},
                  b: {}
                }
              }
            },
            data: [
              { value: 1048, name: '互联网' },
              { value: 735, name: '教育' },
              { value: 580, name: '政界' },
              { value: 484, name: '研究所' },
              { value: 300, name: '各龙头企业' }
            ]
          }
        ]
      }

      var currentIndex = 0
      var timer = 0
      function animate () {
        timer = setInterval(function () {
          var dataLen = option2.series[0].data.length
          // 取消之前高亮的图形
          myChart2.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex
          })
          currentIndex = (currentIndex + 1) % dataLen
          // 高亮当前图形
          myChart2.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex
          })
        }, 1500)
      }
      animate()

      myChart2.on('mouseover', function (e) {
        clearInterval(timer)
        // 取消之前高亮的图形
        myChart2.dispatchAction({
          type: 'downplay',
          seriesIndex: 0
        })
        myChart2.dispatchAction({
          type: 'highlight',
          dataIndex: e.dataIndex
        })
      })

      myChart2.on('mouseout', function (e) {
        currentIndex = e.dataIndex
        animate()
      })
      myChart2.setOption(option2)
      window.onresize = function () {
        myChart2.resize()
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
  overflow: hidden;
  .top{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30%;
    .card{
      height: 70%;
      width: 22%;
      margin: 2% auto;
      justify-self: space-around;
      position: relative;
      border:1px solid #409EFF;
      border-radius: 19px;
      background: linear-gradient(145deg, #f7f7f7, #f0f0f0);
      box-shadow:  7px 7px 14px #7b7b7b,
             -7px -7px 14px #ffffff;
      .header{
        position: relative;
        height: 30%;
        width: 100%;
        border-bottom: 1px solid #409EFF;
        span{
          position: absolute;
          font-size: 22px;
          font-weight: 400;
          padding: 9px;
          top: 6%;
        }
        .left{
          left: 4%;
          color: #409EFF;
        }
        .right{
          right: 4%;
          font-size: 18px;
          color: #fff;
          background-color: #409EFF;
          border-radius: 10%;
        }
      }
      h2{
        margin: 0;
        padding: 0;
        margin-top: 25px;
        margin-bottom: 10px;
        font-size: 30px;
      }
      .outLeft{
        height: 20%;
        width: 60%;
        text-align: left;
        position: absolute;
        font-size: 20px;
        left: 5%;
        color: #93c0ec;
        }
        .outRight{
          height: 20%;
        width: 20%;
          position: absolute;
          font-size: 20px;
          right: 5%;
          color: #40ff80;
        }
    }
  }
  .middle{
    display: flex;
    width: 100%;
    height: 70%;
    // background-color: rgb(81, 67, 67);
    .left{
      float: left;
      margin: 3% auto;
      width: 60%;
      height: 80%;
      padding:0;
      border-radius: 19px;
      background: linear-gradient(145deg, #e3e3e3, #ffffff);
      box-shadow:  7px 7px 14px #cacaca,
        -7px -7px 14px #ffffff;
    }
    .right{
      float: left;
      margin: 3% auto;
      width: 30%;
      height: 80%;
      // background-color: rgb(213, 71, 71);
    }
  }
}
</style>
