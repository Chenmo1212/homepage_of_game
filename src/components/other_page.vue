<template>
  <div class="phone_page">

    <div class="header">
      <div class="hd-bg">
        <div class="tip">这里有很多好玩的网页</div>
      </div>
      <div class="title"><h2>其它网页</h2></div>
    </div>

    <div class="cards">

      <div class="card" v-for="(value, index) in cardData">
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
              <span @click="toGame(value['url'])" class="btn">Read more</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "phone_page",
    data() {
      return {
        cardData: [{
            'name': '3D天体效果',
            'id': '001',
            'type': 'both', 'desc': '超级炫酷的3D天体效果',
            'more': '超级炫酷的3D天体效果',
            'url': 'https://game.chenmo1212.cn/other/001/index.html',
            'cover': 'https://game.chenmo1212.cn/other/001/cover.png'
          }, {
            'name': '打击器',
            'id': '002',
            'type': 'both', 'desc': '可以自定义的打击器',
            'more': '可以自定义的打击器',
            'url': 'https://game.chenmo1212.cn/other/002/index.html',
            'cover': 'https://game.chenmo1212.cn/other/002/cover.png'
          }, ]
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

        if ($(window).scrollTop() >= 40) {
          title.addClass("bg");
        } else {
          title.removeClass("bg");
        }
      });

    }
  }
</script>

<style scoped>
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
    height: 70px!important;
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

  /**
  card
   */

  a.btn {
    background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);
    border-radius: 4px;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.25);
    color: #ffffff;
    display: inline-block;
    padding: 6px 30px 8px;
    position: relative;
    text-decoration: none;
    -webkit-transition: all 0.1s 0s ease-out;
    transition: all 0.1s 0s ease-out;
  }

  .no-touch a.btn:hover {
    background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);
    box-shadow: 0 8px 2px 0 rgba(0, 0, 0, 0.075);
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    -webkit-transition: all 0.25s 0s ease-out;
    transition: all 0.25s 0s ease-out;
  }

  .no-touch a.btn:active,
  a.btn:active {
    background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.25);
    -webkit-transform: translate3d(0, 1px, 0);
    transform: translate3d(0, 1px, 0);
    -webkit-transition: all 0.025s 0s ease-out;
    transition: all 0.025s 0s ease-out;
  }

  div.cards {
    margin: -30% auto 100px;
    /*padding-top: 30%;*/
    max-width: 960px;
    text-align: center;
  }

  div.card {
    background: #ffffff;
    display: inline-block;
    margin: 8px;
    max-width: 300px;
    /*-webkit-perspective: 1000;*/
    /*perspective: 1000;*/
    position: relative;
    text-align: left;
    -webkit-transition: all 0.3s 0s ease-in;
    transition: all 0.3s 0s ease-in;
    width: 300px;
    z-index: 1;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  div.card img {
    max-width: 300px;
    border-radius: 10px 10px 0 0;
  }

  div.card .card__image-holder {
    background: rgba(0, 0, 0, 0.1);
    height: 0;
    padding-bottom: 75%;
  }

  div.card div.card-title {
    background: #ffffff;
    padding: 12px 15px 12px;
    position: relative;
    z-index: 0;
    border-radius: 10px;
  }

  div.card div.card-title a.toggle-info {
    border-radius: 32px;
    height: 32px;
    padding: 0;
    position: absolute;
    right: 15px;
    top: 10px;
    width: 32px;
  }

  div.card div.card-title a.toggle-info span {
    background: #ffffff;
    display: block;
    height: 2px;
    position: absolute;
    top: 16px;
    -webkit-transition: all 0.15s 0s ease-out;
    transition: all 0.15s 0s ease-out;
    width: 12px;
  }

  div.card div.card-title a.toggle-info span.left {
    right: 14px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  div.card div.card-title a.toggle-info span.right {
    left: 14px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  div.card div.card-title h2 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.05em;
    margin: 0;
    padding: 0;
  }

  div.card div.card-title h2 small {
    display: block;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.025em;
  }

  div.card div.card-description {
    padding: 0 15px 10px;
    position: relative;
    font-size: 14px;
  }

  div.card div.card-actions {
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.075);
    padding: 10px 15px 20px;
    text-align: center;
  }

  div.card div.card-flap {
    background: #d9d9d9;
    position: absolute;
    width: 100%;
    -webkit-transform-origin: top;
    transform-origin: top;
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }

  div.card div.flap1 {
    -webkit-transition: all 0.3s 0.3s ease-out;
    transition: all 0.3s 0.3s ease-out;
    z-index: -1;
  }

  div.card div.flap2 {
    -webkit-transition: all 0.3s 0s ease-out;
    transition: all 0.3s 0s ease-out;
    z-index: -2;
  }

  div.cards.showing div.card {
    cursor: pointer;
    opacity: 0.6;
    -webkit-transform: scale(0.88);
    transform: scale(0.88);
  }

  .no-touch div.cards.showing div.card:hover {
    opacity: 0.94;
    -webkit-transform: scale(0.92);
    transform: scale(0.92);
  }

  div.card.show {
    opacity: 1 !important;
    -webkit-transform: scale(1) !important;
    transform: scale(1) !important;
  }

  div.card.show div.card-title {
    border-radius: 0;
  }

  div.card.show div.card-title a.toggle-info {
    background: #ff6666 !important;
  }

  div.card.show div.card-title a.toggle-info span {
    top: 15px;
  }

  div.card.show div.card-title a.toggle-info span.left {
    right: 10px;
  }

  div.card.show div.card-title a.toggle-info span.right {
    left: 10px;
  }

  div.card.show div.card-flap {
    background: #ffffff;
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }

  div.card.show div.flap1 {
    -webkit-transition: all 0.3s 0s ease-out;
    transition: all 0.3s 0s ease-out;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  div.card.show div.flap2 {
    -webkit-transition: all 0.3s 0.2s ease-out;
    transition: all 0.3s 0.2s ease-out;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

</style>
