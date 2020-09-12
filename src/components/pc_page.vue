<template>
  <div class="phone_page">

    <div class="header">
      <div class="hd-bg">
        <div class="tip">电脑端体验更佳哦</div>
      </div>
      <div class="title"><h2>电脑小游戏</h2></div>
    </div>

    <div class="cards a-fadeinB">

      <div class="card" v-for="(value) in cardData" v-if="value.type === 'pc' || value.type === 'both'">
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
              <span @click="toGame(value['url'])" class="btn">开始游戏</span>
            </div>
          </div>
        </div>
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
        cardData: data.gameData
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

        // console.log($(window).scrollTop())
        if ($(window).scrollTop() >= 15) {
          title.addClass("bg");
        } else {
          title.removeClass("bg");
        }
      });

    },
    methods: {
      toGame(url) {
        // console.log(url)
        location.href = url;
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


</style>

