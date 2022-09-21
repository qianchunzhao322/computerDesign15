<template>
  <div class="home">
    <div class="card">
      <div class="cardheader">
        <div class="info">批量图片上传</div>
      </div>
      <div class="cardmain">
        <input accept="image/*"  type="file" id="uploadIMG" multiple :onchange="btnUploadFile($event)"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wall',
  data () {
    return {
      activeName: 'first',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods: {
    btnUploadFile (event) {
      console.log(event)
    }
  }

}
</script>

<style scoped lang="less">
.home {
  height: 100%;
  width: 100%;
  margin: 0;
  line-height: 1;
  padding: 20px 0;
  /deep/.el-tabs__nav-wrap {
    margin-left: 2%;
  }
}
</style>
