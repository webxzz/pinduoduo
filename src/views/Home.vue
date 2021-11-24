<template>
  <div class="wrap">
    <Header />

    <main class="main">
      <!-- 导航条 -->
      <NavTab />
      <!-- banner图 -->
      <div class="banner">
        <img
          src="https://cdn.pinduoduo.com/upload/2020-12-14/9cbd9e39-a240-410c-8f31-51cb1255af28.jpg"
          alt=""
        />
      </div>
      <!-- 精彩活动 -->
      <div class="activity">
        <p>
          <span>精彩活动</span>
          <span @click="seckill">查看更多></span>
        </p>
      </div>
      <div class="activity_img">
        <img src="//mcdn.pinduoduo.com/home/static/images/seckill.png" alt="" />
      </div>
      <div class="activity_imgs">
        <img
          src="//mcdn.pinduoduo.com/home/static/images/sale_index.png"
          alt=""
        />
        <img
          src="//mcdn.pinduoduo.com/home/static/images/supermarket.png"
          alt=""
        />
      </div>
      <!-- 精选专题 -->
      <div class="activity">
        <p>
          <span>精选专题</span>
          <span>查看更多></span>
        </p>
      </div>
      <!-- 专题下商品 -->
      <div class="shopp">
        <ul>
          <li>
            <div class="shopp_banner">
              <img
                src="//mcdn.pinduoduo.com/home/static/images/girlclothes.jpg"
                alt=""
              />
            </div>
            <div class="shopp_banner_top_imgs">
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2020-07-09/77133351c13aa2575723b27ec8877871.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮
                </p>
                <p>
                  <span>￥</span>
                  <span>99</span>
                  <span>￥499</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2020-12-31/73123ec1d2b1a9aec912c3e62e75486e.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  l'm David/烟灰色加绒小脚牛仔裤女超高腰显瘦秋冬新款弹力铅笔裤
                </p>
                <p>
                  <span>￥</span>
                  <span>47.75</span>
                  <span>￥99</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-09-22/12ec53be04d40c42e0c0ced9dd22500e.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  快鱼2021冬季新款女装潮流镭射印花圆领打底衫加绒卫衣女11W5084
                </p>
                <p>
                  <span>￥</span>
                  <span>34.9</span>
                  <span>￥79</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="shopp_banner">
              <img
                src="//mcdn.pinduoduo.com/home/static/images/boyshirt.jpg"
                alt=""
              />
            </div>
            <div class="shopp_banner_top_imgs">
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-10-30/f4e315897469461b0275d30e64f0014e.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮
                </p>
                <p>
                  <span>￥</span>
                  <span>99</span>
                  <span>￥499</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-11-17/924ed68ff3ceb3bf673c7c9b11f961f8.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  l'm David/烟灰色加绒小脚牛仔裤女超高腰显瘦秋冬新款弹力铅笔裤
                </p>
                <p>
                  <span>￥</span>
                  <span>47.75</span>
                  <span>￥99</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2021-07-16/623528c5b0b84ac4eff67ed9ac5fcce7.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  快鱼2021冬季新款女装潮流镭射印花圆领打底衫加绒卫衣女11W5084
                </p>
                <p>
                  <span>￥</span>
                  <span>34.9</span>
                  <span>￥79</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="shopp_banner">
              <img
                src="//mcdn.pinduoduo.com/home/static/images/medical.jpg"
                alt=""
              />
            </div>
            <div class="shopp_banner_top_imgs">
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2021-06-03/331a1b4477c57bf892f9ea529da41bf5.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮
                </p>
                <p>
                  <span>￥</span>
                  <span>99</span>
                  <span>￥499</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-11-05/77a9b82219dff8cefce2bd5e1a36c881.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  l'm David/烟灰色加绒小脚牛仔裤女超高腰显瘦秋冬新款弹力铅笔裤
                </p>
                <p>
                  <span>￥</span>
                  <span>47.75</span>
                  <span>￥99</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-11-15/02c23a489a439d4c283403c0ca2c8d3d.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  快鱼2021冬季新款女装潮流镭射印花圆领打底衫加绒卫衣女11W5084
                </p>
                <p>
                  <span>￥</span>
                  <span>34.9</span>
                  <span>￥79</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="shopp_banner">
              <img
                src="//mcdn.pinduoduo.com/home/static/images/food.jpg"
                alt=""
              />
            </div>
            <div class="shopp_banner_top_imgs">
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-09-15/418bb57325213a10a80c7d7de2990076.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮
                </p>
                <p>
                  <span>￥</span>
                  <span>99</span>
                  <span>￥499</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2021-05-19/7f8c5c9a19b858db32ec3c6324fc793c.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  l'm David/烟灰色加绒小脚牛仔裤女超高腰显瘦秋冬新款弹力铅笔裤
                </p>
                <p>
                  <span>￥</span>
                  <span>47.75</span>
                  <span>￥99</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2020-08-14/a80dc144f94febed817d4451c7e9f2cb.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  快鱼2021冬季新款女装潮流镭射印花圆领打底衫加绒卫衣女11W5084
                </p>
                <p>
                  <span>￥</span>
                  <span>34.9</span>
                  <span>￥79</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="shopp_banner">
              <img src="https://cdn.pinduoduo.com/upload/shoes.jpg" alt="" />
            </div>
            <div class="shopp_banner_top_imgs">
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-11-10/eb3955dac4c195be62b598ca0f604d2a.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮
                </p>
                <p>
                  <span>￥</span>
                  <span>99</span>
                  <span>￥499</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-09-25/771e76dec9b69f0f05d1a21dfaa15e66.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  l'm David/烟灰色加绒小脚牛仔裤女超高腰显瘦秋冬新款弹力铅笔裤
                </p>
                <p>
                  <span>￥</span>
                  <span>47.75</span>
                  <span>￥99</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-10-31/113891de49485a1c38c0c1a20c58b45e.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  快鱼2021冬季新款女装潮流镭射印花圆领打底衫加绒卫衣女11W5084
                </p>
                <p>
                  <span>￥</span>
                  <span>34.9</span>
                  <span>￥79</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="shopp_banner">
              <img
                src="//mcdn.pinduoduo.com/home/static/images/home.jpg"
                alt=""
              />
            </div>
            <div class="shopp_banner_top_imgs">
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2021-07-05/fc6745c45ae49c71d81341f5cd399d17.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮
                </p>
                <p>
                  <span>￥</span>
                  <span>99</span>
                  <span>￥499</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2020-05-22/4fed65e41d5c307883329739d314784c.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  l'm David/烟灰色加绒小脚牛仔裤女超高腰显瘦秋冬新款弹力铅笔裤
                </p>
                <p>
                  <span>￥</span>
                  <span>47.75</span>
                  <span>￥99</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2020-05-26/087f8530d70d1e204a283250d0e1b678.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  快鱼2021冬季新款女装潮流镭射印花圆领打底衫加绒卫衣女11W5084
                </p>
                <p>
                  <span>￥</span>
                  <span>34.9</span>
                  <span>￥79</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="shopp_banner">
              <img
                src="https://cdn.pinduoduo.com/upload/d53138e1-6b23-440c-9e69-69e7dbfa6794.png.slim.png"
                alt=""
              />
            </div>
            <div class="shopp_banner_top_imgs">
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-09-10/cc00737d3b5ff104c2cf4a42d4cf1873.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮
                </p>
                <p>
                  <span>￥</span>
                  <span>99</span>
                  <span>￥499</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-10-08/868c7d16eaf4108458e46b9c85ffb3eb.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  l'm David/烟灰色加绒小脚牛仔裤女超高腰显瘦秋冬新款弹力铅笔裤
                </p>
                <p>
                  <span>￥</span>
                  <span>47.75</span>
                  <span>￥99</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-10-25/0a87f4db619ae86dfe242ae6ac8d1365.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  快鱼2021冬季新款女装潮流镭射印花圆领打底衫加绒卫衣女11W5084
                </p>
                <p>
                  <span>￥</span>
                  <span>34.9</span>
                  <span>￥79</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="shopp_banner">
              <img
                src="//mcdn.pinduoduo.com/home/static/images/electric.jpg"
                alt=""
              />
            </div>
            <div class="shopp_banner_top_imgs">
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-11-02/e3701918c53f483ab70c7ee8f81c4977.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮
                </p>
                <p>
                  <span>￥</span>
                  <span>99</span>
                  <span>￥499</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-10-21/6ace5862a83561b50f886bbea0b8b6c5.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  l'm David/烟灰色加绒小脚牛仔裤女超高腰显瘦秋冬新款弹力铅笔裤
                </p>
                <p>
                  <span>￥</span>
                  <span>47.75</span>
                  <span>￥99</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2021-07-06/26cf8c4876fa2a77686821931cad466a.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  快鱼2021冬季新款女装潮流镭射印花圆领打底衫加绒卫衣女11W5084
                </p>
                <p>
                  <span>￥</span>
                  <span>34.9</span>
                  <span>￥79</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="shopp_banner">
              <img
                src="//mcdn.pinduoduo.com/home/static/images/baby.jpg"
                alt=""
              />
            </div>
            <div class="shopp_banner_top_imgs">
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-11-08/31a5fe23e3a76bb987fb3c6b7a1495d1.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮
                </p>
                <p>
                  <span>￥</span>
                  <span>99</span>
                  <span>￥499</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-10-15/d33840d4becb97a2eb8be1f208190134.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  l'm David/烟灰色加绒小脚牛仔裤女超高腰显瘦秋冬新款弹力铅笔裤
                </p>
                <p>
                  <span>￥</span>
                  <span>47.75</span>
                  <span>￥99</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-09-02/e23ce0dffa99b432019d2c14206b27f2.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  快鱼2021冬季新款女装潮流镭射印花圆领打底衫加绒卫衣女11W5084
                </p>
                <p>
                  <span>￥</span>
                  <span>34.9</span>
                  <span>￥79</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="shopp_banner">
              <img
                src="//mcdn.pinduoduo.com/home/static/images/furniture.jpg"
                alt=""
              />
            </div>
            <div class="shopp_banner_top_imgs">
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-09-12/6f8aad836eec2e6398a5d62b9720c5ab.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮
                </p>
                <p>
                  <span>￥</span>
                  <span>99</span>
                  <span>￥499</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-08-30/d31bceea6d3a955c6998a7dc2394ec71.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  l'm David/烟灰色加绒小脚牛仔裤女超高腰显瘦秋冬新款弹力铅笔裤
                </p>
                <p>
                  <span>￥</span>
                  <span>47.75</span>
                  <span>￥99</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2020-03-02/bdbb787d79906d9346a9b8570217345d.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  快鱼2021冬季新款女装潮流镭射印花圆领打底衫加绒卫衣女11W5084
                </p>
                <p>
                  <span>￥</span>
                  <span>34.9</span>
                  <span>￥79</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="shopp_banner">
              <img
                src="//mcdn.pinduoduo.com/home/static/images/sports.jpg"
                alt=""
              />
            </div>
            <div class="shopp_banner_top_imgs">
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2019-12-17/fa3f43e7ecb4c3525cf77635e329020a.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮
                </p>
                <p>
                  <span>￥</span>
                  <span>99</span>
                  <span>￥499</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-08-20/484e467e19697fa2120009caf410757e.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  l'm David/烟灰色加绒小脚牛仔裤女超高腰显瘦秋冬新款弹力铅笔裤
                </p>
                <p>
                  <span>￥</span>
                  <span>47.75</span>
                  <span>￥99</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2021-07-20/ec79db195966b65918be1ec0eab8cfa8.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  快鱼2021冬季新款女装潮流镭射印花圆领打底衫加绒卫衣女11W5084
                </p>
                <p>
                  <span>￥</span>
                  <span>34.9</span>
                  <span>￥79</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="shopp_banner">
              <img src="https://cdn.pinduoduo.com/upload/overseas.jpg" alt="" />
            </div>
            <div class="shopp_banner_top_imgs">
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://img.pddpic.com/gaudit-image/2021-09-15/418bb57325213a10a80c7d7de2990076.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮
                </p>
                <p>
                  <span>￥</span>
                  <span>99</span>
                  <span>￥499</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2021-07-06/26cf8c4876fa2a77686821931cad466a.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  l'm David/烟灰色加绒小脚牛仔裤女超高腰显瘦秋冬新款弹力铅笔裤
                </p>
                <p>
                  <span>￥</span>
                  <span>47.75</span>
                  <span>￥99</span>
                </p>
              </div>
              <div class="shopp_banner_top_img">
                <p>
                  <img
                    src="https://t00img-c.yangkeduo.com/goods/images/2021-05-19/7f8c5c9a19b858db32ec3c6324fc793c.jpeg"
                    alt=""
                  />
                </p>
                <p>
                  快鱼2021冬季新款女装潮流镭射印花圆领打底衫加绒卫衣女11W5084
                </p>
                <p>
                  <span>￥</span>
                  <span>34.9</span>
                  <span>￥79</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="search">
        <span class="taro-text title">搜索好物</span>
        <a class="more" @click="Boutique_classification">查看更多&gt;</a>
      </div>
      <!-- 底部 -->
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import NavTab from "../components/navTab.vue";
import Footer from "../components/footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    NavTab,
    Footer,
  },
  methods: {
    Boutique_classification() {
      this.$router.push({
        name: "Boutique_classification",
      });
    },
    seckill() {
      this.$router.push({
        name: "seckill",
      });
    },
  },
};
</script>
 
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.wrap {
  height: 100%;
  background: #f3f3f3;
  display: flex;
  flex-direction: column;
  .main {
    width: 100%;
    margin: 0 auto;
    flex: 1;
    overflow-y: scroll;

    .banner {
      width: 3.75rem;
      height: 1.4rem;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .activity {
      width: 3.75rem;
      height: 0.5299rem;
      margin: 0 auto;
      background: #fff;
      margin-top: 0.15rem;
      p {
        width: 3.75rem;
        height: 0.5299rem;
        align-items: center;
        justify-content: space-between;
        display: flex;
        span:nth-child(1) {
          font-size: 0.15rem;
          text-indent: 0.1rem;
        }
        span:nth-child(2) {
          color: #868686;
          margin-right: 0.1rem;
        }
      }
    }
    .activity_img {
      width: 3.75rem;
      height: 1.07rem;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .activity_imgs {
      width: 3.75rem;
      height: 0.92344rem;
      margin: 0 auto;
      margin-top: 0.01rem;
      display: flex;
      img {
        width: 50%;
        height: 100%;
      }
    }
    .shopp {
      width: 3.75rem;
      margin: 0 auto;
      ul {
        width: 3.75rem;
        display: flex;
        flex-direction: column;
        li {
          background: #fff;
          margin-bottom: 0.15rem;
          .shopp_banner {
            width: 3.75rem;
            height: 1.86148rem;
            img {
              width: 3.75rem;
              height: 1.86148rem;
            }
          }
          .shopp_banner_top_imgs {
            width: 3.75rem;
            height: 1.8rem;
            background: #fff;
            margin-top: 0.07rem;
            display: flex;
            justify-content: space-around;
            .shopp_banner_top_img {
              width: 33.3%;
              height: 1.8rem;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              align-content: space-around;
              p:nth-child(1) {
                width: 1.17rem;
                height: 1.17rem;
                img {
                  width: 1.17rem;
                  height: 1.17rem;
                }
              }
              p:nth-child(2) {
                width: 1.0889rem;
                height: 0.3199rem;
                overflow: hidden;
                color: #6c6c6c;
              }
              p:nth-child(3) {
                span:nth-child(1) {
                  font-size: 0.12rem;
                }
                span:nth-child(2) {
                  font-size: 0.14rem;
                }
                span:nth-child(3) {
                  text-decoration: line-through;
                  color: #cbcbcb;
                }
              }
            }
          }
        }
      }
    }
    .search {
      width: 3.75rem;
      height: 0.5299rem;
      background: #fff;
      margin: 0 auto;
      margin-bottom: 0.15rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 0.15rem;
        text-indent: 0.1rem;
      }
      .more {
        color: #868686;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>









