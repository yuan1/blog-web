<template>
  <div class="home">
    <div class="home-carousel">
      <el-carousel>
        <el-carousel-item v-for="carousel in carouselData" :key="carousel.id">
          <img :src="carousel.image" :alt="carousel.title" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-main mt-16 flex justify-between">
      <div class="home-left">
        <el-card shadow="hover" v-for="post in postData" :key="post.id">
          <div slot="header">
            {{ post.title }}
          </div>
          <div>
            {{ post.content }}
          </div>
        </el-card>
      </div>
      <div class="home-right">
        <el-input placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-card class="mt-16" shadow="hover">
          <div slot="header">
            热门文章
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      postData: [],
      carouselData: []
    };
  },
  created() {
    this.initCarousel();
    this.initPost();
  },
  methods: {
    initCarousel() {
      this.$api.common.getCarouselList().then(res => {
        this.carouselData = res;
      });
    },
    initPost() {
      this.$api.post.list().then(res => {
        this.postData = res;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  .home-left {
    width: 780px;
    .el-card {
      margin: 10px 0;
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .home-right {
    width: 300px;
  }
}
</style>
