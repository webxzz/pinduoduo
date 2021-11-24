<template>
  <div class="wrap">
    <header class="header">
      <p>
        <span @click="Home"> </span>
        <span>拼多多精品分类</span>
        <span @click="Home"> </span>
      </p>
    </header>
    <main class="main">
      <div class="left-panel___1pMiW">
        <ul class="level1_name___2fwh7">
          <li
            v-for="(item, index) in title"
            :key="index"
            @click="fn(index)"
            :class="{ list_bag: index == active }"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div v-show="active == 0">
        <Digital />
      </div>
      <div v-show="active == 1">
        <Computer />
      </div>
      <div v-show="active == 2">
        <Kitchen />
      </div>
      <div v-show="active == 3">
        <HomeElectric />
      </div>
      <div v-show="active == 4">
        <HomeFurnishing />
      </div>
      <div v-show="active == 5">
        <Furniture />
      </div>
      <div v-show="active == 6">
        <DailyExpenses />
      </div>
      <div v-show="active == 7">
        <WomensWear />
      </div>
      <div v-show="active == 8">
        <MensWear />
      </div>
      <div v-show="active == 9">
        <ShoesAndBoots />
      </div>
      <div v-show="active == 10">
        <Underwear />
      </div>
      <div v-show="active == 11">
        <LuggageAndBags />
      </div>
      <div v-show="active == 12">
        <Motion />
      </div>
      <div v-show="active == 13">
        <Gehu />
      </div>
      <div v-show="active == 14">
        <Food />
      </div>
      <div v-show="active == 15">
        <Drink />
      </div>
      <div v-show="active == 16">
        <Education />
      </div>
      <div v-show="active == 17">
        <Entertainment />
      </div>
      <div v-show="active == 18">
        <Automobile />
      </div>
      <div v-show="active == 19">
        <MotherAndBaby />
      </div>
      <div v-show="active == 20">
        <Accessories />
      </div>
      <div v-show="active == 21">
        <Gift />
      </div>
      <div v-show="active == 22">
        <Pets />
      </div>
      <div v-show="active == 23">
        <Agriculture />
      </div>
      <div v-show="active == 24">
        <Industry />
      </div>
      <div class="Back_tops" >
           <Conteight />
      </div>
    </main>
  </div>
</template>

<script>
import Accessories from "../SecondLevel/Subcomponents/Accessories.vue";
import Agriculture from "../SecondLevel/Subcomponents/agriculture.vue";
import Automobile from "../SecondLevel/Subcomponents/automobile.vue";
import Computer from "../SecondLevel/Subcomponents/computer.vue";
import DailyExpenses from "../SecondLevel/Subcomponents/daily_expenses.vue";
import Digital from "../SecondLevel/Subcomponents/Digital.vue";
import Drink from "../SecondLevel/Subcomponents/drink.vue";
import Education from "../SecondLevel/Subcomponents/education.vue";
import Entertainment from "../SecondLevel/Subcomponents/entertainment.vue";
import Food from "../SecondLevel/Subcomponents/food.vue";
import Gift from "../SecondLevel/Subcomponents/gift.vue";
import HomeElectric from "../SecondLevel/Subcomponents/home_electric.vue";
import HomeFurnishing from "../SecondLevel/Subcomponents/Home_Furnishing.vue";
import Kitchen from "../SecondLevel/Subcomponents/kitchen_and_toilet.vue";
import Industry from "../SecondLevel/Subcomponents/Industry.vue";
import LuggageAndBags from "../SecondLevel/Subcomponents/luggage_and_bags.vue";
import MensWear from "../SecondLevel/Subcomponents/mens_wear.vue";
import Motion from "../SecondLevel/Subcomponents/motion.vue";
import Pets from "../SecondLevel/Subcomponents/Pets.vue";
import ShoesAndBoots from "../SecondLevel/Subcomponents/Shoes_and_boots.vue";
import Underwear from "../SecondLevel/Subcomponents/Underwear.vue";
import WomensWear from "../SecondLevel/Subcomponents/Womens_wear.vue";
import Furniture from "../SecondLevel/Subcomponents/furniture.vue";
import Gehu from "../SecondLevel/Subcomponents/Gehu.vue";
import MotherAndBaby from "../SecondLevel/Subcomponents/Mother_and_baby.vue";
import Conteight  from './conteight.vue'
export default {
  data() {
    return {
      active: 0, //默认第一个有样式
      title: [
        "数码",
        "电脑",
        "厨卫",
        "家电",
        "家居",
        "家具",
        "日用",
        "女装",
        "男装",
        "鞋靴",
        "内衣",
        "箱包",
        "运动",
        "个护",
        "食品",
        "饮品",
        "教育",
        "娱乐",
        "汽车",
        "母婴",
        "配饰",
        "礼品",
        "宠物",
        "农资",
        "工业",
      ],
    };
  },
  components: {
    Accessories,
    Agriculture,
    Automobile,
    Computer,
    DailyExpenses,
    Digital,
    Drink,
    Education,
    Entertainment,
    Food,
    Gift,
    HomeElectric,
    HomeFurnishing,
    Kitchen,
    Industry,
    LuggageAndBags,
    MensWear,
    Motion,
    Pets,
    ShoesAndBoots,
    Underwear,
    WomensWear,
    Furniture,
    Gehu,
    MotherAndBaby,
    Conteight
  },
  methods: {
    Home() {
      this.$router.push({
        name: "Home",
      });
    },
    fn(index) {
      this.active = index;
    }
    
  }
};
</script>

<style lang="scss" scoped>

.wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 3.5rem;
    height: 0.42rem;
    // background: paleturquoise;
    margin: 0 auto;
    p {
      width: 3.5rem;
      height: 0.42rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:nth-child(1) {
        width: 0.2rem;
        height: 0.2rem;
        background-image: url(//funimg.pddpic.com/ad/fba14589-efad-4886-8117-e13b4de2a593.png.slim.png);
        background-size: cover;
      }
      span:nth-child(2) {
        font-size: 0.17rem;
        color: #151516;
        font-weight: 400;
      }
      span:nth-child(3) {
        width: 0.22rem;
        height: 0.22rem;
        background-image: url(//funimg.pddpic.com/ad/8a5ffbdd-7634-4f12-bd99-797820dc8b35.png.slim.png);
        background-size: cover;
      }
    }
  }
  .main {
    width: 3.75rem;
    height: 6.25rem;
    margin: 0 auto;
    display: flex;
    .left-panel___1pMiW {
      width: 0.95rem;
      height: 6.25rem;
      background-color: #f8f8f8;
      overflow-y: scroll;
      .level1_name___2fwh7 {
        li {
          width: 0.95rem;
          height: 0.49rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.15rem;
          color: #151516;
          font-weight: 400;
        }
        .list_bag {
          width: 0.92rem;
          background: #fff;
          border-left: 3px solid #e02e24;
          color: #e02e24;
        }
      }
    }
    .Back_tops {
      width: 0.4rem;
      height: 0.4rem;
      position: fixed;
      right: 0.14rem;
      bottom: 0.9rem;
     
    }
  }
}
</style>