<template>
  <div class="phone_page">

    <div class="header">
      <div class="hd-bg">
        <div class="tip">这里有很多好玩的网页</div>
      </div>
      <div class="title"><h2>其它网页</h2></div>
    </div>

    <div class="cards a-fadeinB">

      <div class="card" v-for="(value) in cardData">
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

        if ($(window).scrollTop() >= 15) {
          title.addClass("bg");
        } else {
          title.removeClass("bg");
        }
      });

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

