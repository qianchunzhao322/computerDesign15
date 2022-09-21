<template>
  <div class="main">
    <el-descriptions class="margin-top" column="2" :size="size" border>
    <template slot="extra">
      <el-button type="primary" class="menu" size="small">更新</el-button>
      <el-button type="primary" class="menu" size="small">修改</el-button>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户ID
      </template>
      24625234532
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        用户名
      </template>
      Codermainac
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        用户类型
      </template>
      市场人员
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户微信
      </template>
      462423452
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        所在公司
      </template>
      苏州牛逼公司
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        所在团队
      </template>
      462423452
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        用户性别
      </template>
      男
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        入职时间
      </template>
      2022-02-02
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        离职时间
      </template>
      暂无
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        创建时间
      </template>
      2020-02-02
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        修改时间
      </template>
      2022-02-02
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        备注
      </template>
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        联系地址
      </template>
      江苏省苏州市吴中区吴中大道 1188 号
    </el-descriptions-item>
  </el-descriptions>

  </div>
</template>

<script>
export default {
  name: 'personalInfo',
  data () {
    return {
      size: ''
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
  padding: 0;
  .margin-top{
    height: 100%;
    width: 70%;
    margin: 30px auto;
  }
}
</style>
