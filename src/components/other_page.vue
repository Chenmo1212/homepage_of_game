<template>
  <div class="phone_page">

    <div class="header">
      <div class="hd-bg">
        <div class="tip">这里有很多好玩的网页</div>
      </div>
      <div class="title"><h2>其它网页</h2></div>
    </div>

    <div class="cards a-fadeinB">

      <div class="card" v-for="(value, index) in dataList" :key="index">
        <div class="card__image-holder">
          <img class="card__image" :src="value.cover" alt="wave"/>
        </div>
        <div class="card-title">
          <a :href="value['url']" class="toggle-info btn">
            <span class="left"></span>
            <span class="right"></span>
          </a>
          <h2>
            {{value.name}}
            <small>{{value.desc}}</small>
          </h2>
        </div>
        <div class="card-flap flap1">
          <div class="card-description">
            {{value.more}}
          </div>
          <div class="card-flap flap2">
            <div class="card-actions">
              <span @click="toGame(value['url'])" class="btn">点击查看</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div v-if="moreShowBoolen" @click="moreShow" class="more">点击查看更多</div>
        <div v-else class="no-more">已无更多</div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import data from '../js/gameData'

  export default {
    name: "phone_page",
    data() {
      return {
        cardData: data.otherData,
        dataList: [],
        moreShowBoolen: false,
        nowPage: 1
      }
    },
    created() {
    },
    mounted() {
      // card
      $(document).ready(function () {
        var zindex = 10;

        const cards = $("div.cards");

        $("div.card").click(function (e) {
          e.preventDefault();

          var isShowing = false;

          if ($(this).hasClass("show")) {
            isShowing = true
          }

          if (cards.hasClass("showing")) {
            // a card is already in view
            $("div.card.show")
              .removeClass("show");

            if (isShowing) {
              // this card was showing - reset the grid
              cards.removeClass("showing");
            } else {
              // this card isn't showing - get in with it
              $(this)
                .css({zIndex: zindex})
                .addClass("show");

            }

            zindex++;

          } else {
            // no cards in view
            cards.addClass("showing");
            $(this)
              .css({zIndex: zindex})
              .addClass("show");

            zindex++;
          }

        });
      });

      // header
      $(window).scroll(function () {
        // const hero =  $(".hero");
        const title = $(".title");

        if ($(window).scrollTop() >= 15) {
          title.addClass("bg");
        } else {
          title.removeClass("bg");
        }
      });

      // cardData
      this.init()
    },
    methods: {
      toGame(url) {
        // console.log(url)
        let tempWindow = window.open('_blank');
        // 打开一个窗口，然后用
        tempWindow.location=url;
      },

      init () {
        if (this.cardData.length <= 10) { // 10条数据一页
          this.dataList = this.cardData
          this.moreShowBoolen = false
        } else {
          this.dataList = this.cardData.slice(0, 10)
          this.moreShowBoolen = true
        }
      },

      moreShow () { // 点击查询更多
        this.dataList = this.dataList.concat(this.cardData.slice(this.nowPage * 10, (this.nowPage + 1) * 10))
        this.nowPage++;
        this.moreShowBoolen = this.cardData.length >= this.nowPage * 10;
      }
    }
  }
</script>

<style scoped>
  @import '../css/cards.css';
  .phone_page {
    background-color: #f5f6f6;
    min-height: 100vh;
  }

  .header {
    height: 240px;
    width: 100%;
  }

  .hd-bg {
    height: 100%;
    width: 100%;
    background-image: url(../assets/bg.png);
    -webkit-background-size: cover;
    background-size: cover;
  }

  .hd-bg .tip {
    line-height: 180px;
    color: #fff;
  }

  .bg {
    height: 70px !important;
    background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);
  }

  .title {
    height: 60px;
    color: #fff;
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
  }

  .more,
  .no-more {
    margin-top: 20px;
    background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.25);
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.25);
    color: #ffffff;
    display: inline-block;
    padding: 6px 30px 8px;
    position: relative;
    text-decoration: none;
    -webkit-transition: all 0.1s 0s ease-out;
    transition: all 0.1s 0s ease-out;
    cursor: pointer;
  }
</style>

