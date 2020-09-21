<template>
  <div class="phone_page">

    <div class="header">
      <div class="hd-bg">
        <div class="tip">电脑端体验更佳哦</div>
      </div>
      <div class="title"><h2>电脑小游戏</h2></div>
    </div>

    <div class="cards a-fadeinB">

      <div class="card last-game" v-if="last.isShow">
        <span class="ribbon3">最近游戏</span>
        <div class="card__image-holder">
          <img class="card__image" :src="last.cover" alt="wave"/>
        </div>
        <div class="card-title">
          <a :href="last['url']" class="toggle-info btn">
            <span class="left"></span>
            <span class="right"></span>
          </a>
          <h2>
            {{last.name}}
            <small>{{last.desc}}</small>
          </h2>
        </div>
        <div class="card-flap flap1">
          <div class="card-description">
            {{last.more}}
          </div>
          <div class="card-flap flap2">
            <div class="card-actions">
              <span @click.prevent="toGame(last['url'])" class="btn">开始游戏</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card" v-for="(value, index) in dataList" v-if="value.type === 'pc' || value.type === 'both'" :key="index">
        <div class="card__image-holder">
          <img class="card__image" :src="value.cover" alt="wave"/>
        </div>
        <div class="card-title">
          <span class="toggle-info btn">
            <span class="left"></span>
            <span class="right"></span>
          </span>
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
              <span @click="toGame(value['url'], value)" class="btn">开始游戏</span>
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
        cardData: data.gameData,
        dataList: [],
        moreShowBoolen: false,
        nowPage: 1,

        last: {
          name: '赛车游戏带闯关',
          id: '046',
          type: 'pc', 'desc': '赛车游戏带闯关',
          more: '打怪小游戏，一款冒险闯关的小游戏',
          url: 'https://game.chenmo1212.cn/content/046/index.html',
          cover: 'https://game.chenmo1212.cn/content/046/cover.png',
          isShow: false,
        }
      }
    },
    created() {
      if (typeof localStorage.pc_lastGame !== 'undefined'){
        if (JSON.parse(localStorage.pc_lastGame).isShow){
          this.last = JSON.parse(localStorage.pc_lastGame);
        }
      }
    },
    mounted() {

      this.flashCard();

      // header
      $(window).scroll(function () {
        // const hero =  $(".hero");
        const title = $(".title");

        // console.log($(window).scrollTop())
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
      toGame(url, item) {
        // console.log(url)
        let tempWindow = window.open('_blank');
        // 打开一个窗口，然后用
        tempWindow.location=url;

        this.last = item;
        this.last["isShow"] = true;

        localStorage.setItem('pc_lastGame', JSON.stringify(this.last))
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
        this.flashCard();
      },

      flashCard(){
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

  .ribbon3 {
    display: inline-block;
    position: absolute;
    color: #fff;
    font-size: 20px;
    width: 150px;
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
    background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);;
    left: -8px;
    top: 20px
  }

  .ribbon3:before, .ribbon3:after {
    content: "";
    position: absolute;
  }

  .ribbon3:before {
    height: 0;
    width: 0;
    border-bottom: 8px solid #24A4EA;
    border-left: 8px solid transparent;
    top: -8px;
    left: 0;
  }

  .ribbon3:after {
    height: 0;
    width: 0;
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent;
    border-left: 15px solid #B76BF0;
    right: -15px;
  }

</style>

