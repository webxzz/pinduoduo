<template>
  <!-- 导航栏 -->
  <div class="main_nav">
    <ul>
      <li  @click="Home" ref="shou">首页</li>
      <li  @click="MerchantCheck">商家入驻</li>
      <li  @click="TrainTickets">多多火车票</li>
      <li  @click="HelpCenter">帮助中心</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    Home() {
      this.$router.push({
        name: "",
      });
    },
    MerchantCheck() {
      this.$router.push({
        name: "MerchantCheck",
      });
    },
    TrainTickets() {
      this.$router.push({
        name: "TrainTickets",
      });
    },
    HelpCenter() {
      this.$router.push({
        name: "HelpCenter",
        
      });
      this.$refs.shou.style.color="red"
    }
  },

};
</script>

<style lang="scss" scoped>
.main_nav {
  width: 3.75rem;
  height: 0.5rem;
  background: #f3f3f3;
  margin: 0 auto;
  ul {
    width: 3.75rem;
    height: 0.5rem;
    font-size: 0.15rem;
    display: flex;
    align-items: center;
    li {
      margin: 0 0.1rem;
      color: #6c6c6c;
    }
    .listcor {
      color: #ed435b;
    }
  }
}
</style>