<template>
  <div class="page-layout">
    <el-container>
      <el-header class="flex">
        <div class="p-l-logo flex-1">
          <img src="../assets/logo.png" alt="limy" />
          <span class="ml-8">李明元</span>
        </div>
        <Menu />
      </el-header>
      <el-main>
        <div class="p-l-main">
          <router-view />
        </div>
      </el-main>
      <el-footer>
        <div class="p-l-footer text-12 text-center">
          Copyright ©李明元.
          <a href="http://www.miitbeian.gov.cn/" class="hover:text-blue-600"
            >鲁ICP备16023117号-1</a
          >. 本站总访问量：4908次
        </div>
      </el-footer>
      <el-backtop target=".page-layout"></el-backtop>
    </el-container>
  </div>
</template>

<script>
import Menu from "@/components/Menu/index";
export default {
  name: "PageLayout.vue",
  components: { Menu }
};
</script>

<style lang="scss">
.page-layout {
  max-width: 1144px;
  margin: 0 auto;
  .p-l-logo {
    border-bottom: solid 1px #e6e6e6;
    line-height: 60px;
    font-size: 26px;
    img {
      display: inline-block;
      width: 40px;
    }
  }
  .p-l-main {
    min-height: 1024px;
  }
  .p-l-footer {
    line-height: 60px;
  }
}
</style>
