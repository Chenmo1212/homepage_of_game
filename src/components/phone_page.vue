<template>
  <div class="phone_page">

    <div class="header">
      <div class="hd-bg">
        <div class="tip">手机端即可畅玩的小游戏</div>
      </div>
      <div class="title"><h2>手机小游戏</h2></div>
    </div>

    <div class="cards a-fadeinB">

      <div class="card" v-for="(value) in cardData" v-if="value.type === 'phone' || value.type === 'both'">
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
        cardData: [
          {
            'name': 'Chrome恐龙',
            'id': '001',
            'type': 'both', 'desc': 'Chrome浏览器彩蛋',
            'more': '如果你曾经用过谷歌浏览器，那你一定对下面这个萌萌哒的小恐龙不陌生。谷歌最著名的彩蛋，就是当浏览器断网之后，页面上会出现一只像素恐龙，提示你未能连接到互联网。',
            'url': 'https://game.chenmo1212.cn/content/001/index.html',
            'cover': 'https://game.chenmo1212.cn/content/001/cover.png'
          }, {
            'name': '叠方块',
            'id': '002',
            'type': 'phone', 'desc': '一款轻松愉快又刺激的小游戏',
            'more': '点击方块使之叠在之前的方块上，看你能叠多高吧~',
            'url': 'https://game.chenmo1212.cn/content/002/index.html',
            'cover': 'https://game.chenmo1212.cn/content/002/cover.png'
          }, {
            'name': '英文打字测试',
            'id': '003',
            'type': 'pc', 'desc': '一款简单的PC端测试英文打字速度游戏',
            'more': '按照字母表的顺序打字，看你的速度能有多快',
            'url': 'https://game.chenmo1212.cn/content/003/index.html',
            'cover': 'https://game.chenmo1212.cn/content/003/cover.png'
          }, {
            'name': '俄罗斯方块小游戏',
            'id': '004',
            'type': 'pc', 'desc': '是一款经典的小游戏',
            'more': '俄罗斯方块，不多介绍，玩就完事了',
            'url': 'https://game.chenmo1212.cn/content/004/index.html',
            'cover': 'https://game.chenmo1212.cn/content/004/cover.png'
          }, {
            'name': '接水管小游戏',
            'id': '005',
            'type': 'both', 'desc': '接水管小游戏',
            'more': '接水管小游戏',
            'url': 'https://game.chenmo1212.cn/content/005/index.html',
            'cover': 'https://game.chenmo1212.cn/content/005/cover.png'
          }, {
            'name': '一个都不能死',
            'id': '006',
            'type': 'both', 'desc': '一个都不能死',
            'more': '一个都不能死',
            'url': 'https://game.chenmo1212.cn/content/006/index.html',
            'cover': 'https://game.chenmo1212.cn/content/006/cover.png'
          }, {
            'name': '冒险闯关小游戏',
            'id': '007',
            'type': 'pc', 'desc': '冒险闯关小游戏',
            'more': '简易的冒险闯关小游戏',
            'url': 'https://game.chenmo1212.cn/content/007/index.html',
            'cover': 'https://game.chenmo1212.cn/content/007/cover.png'
          }, {
            'name': '改色球',
            'id': '008',
            'type': 'both', 'desc': '改色球',
            'more': '改色球',
            'url': 'https://game.chenmo1212.cn/content/008/index.html',
            'cover': 'https://game.chenmo1212.cn/content/008/cover.png'
          }, {
            'name': 'fly bird',
            'id': '009',
            'type': 'both', 'desc': 'fly bird',
            'more': 'fly bird',
            'url': 'https://game.chenmo1212.cn/content/009/index.html',
            'cover': 'https://game.chenmo1212.cn/content/009/cover.png'
          }, {
            'name': '无尽河流',
            'id': '010',
            'type': 'both', 'desc': '无尽河流',
            'more': '无尽河流',
            'url': 'https://game.chenmo1212.cn/content/010/index.html',
            'cover': 'https://game.chenmo1212.cn/content/010/cover.png'
          }, {
            'name': '简易闯关游戏',
            'id': '011',
            'type': 'pc', 'desc': '简易闯关游戏',
            'more': '简易闯关游戏',
            'url': 'https://game.chenmo1212.cn/content/011/index.html',
            'cover': 'https://game.chenmo1212.cn/content/011/cover.png'
          }, {
            'name': '吃豆人',
            'id': '012',
            'type': 'pc', 'desc': '经典吃豆人小游戏',
            'more': '经典吃豆人小游戏，仅支持pc端',
            'url': 'https://game.chenmo1212.cn/content/012/index.html',
            'cover': 'https://game.chenmo1212.cn/content/012/cover.png'
          }, {
            'name': '2048小游戏',
            'id': '013',
            'type': 'both', 'desc': '带有音效的2048小游戏',
            'more': '2048小游戏，github上可以找到源码，站主在原有基础上加上了音效。',
            'url': 'https://game.chenmo1212.cn/content/013/index.html',
            'cover': 'https://game.chenmo1212.cn/content/013/cover.png'
          }, {
            'name': '维京战争手机游戏',
            'id': '014',
            'type': 'both', 'desc': '维京战争手机游戏',
            'more': '维京战争手机游戏',
            'url': 'https://game.chenmo1212.cn/content/014/index.html',
            'cover': 'https://game.chenmo1212.cn/content/014/cover.png'
          }, {
            'name': '颜色消消小游戏',
            'id': '015',
            'type': 'both', 'desc': '颜色消消小游戏',
            'more': '颜色消消小游戏',
            'url': 'https://game.chenmo1212.cn/content/015/index.html',
            'cover': 'https://game.chenmo1212.cn/content/015/cover.png'
          }, {
            'name': '踩雷小游戏',
            'id': '016',
            'type': 'both', 'desc': '踩雷小游戏',
            'more': '源码在github中可以找到，这是一个很优秀的踩雷游戏，具有多种模式。',
            'url': 'https://game.chenmo1212.cn/content/016/index.html',
            'cover': 'https://game.chenmo1212.cn/content/016/cover.png'
          }, {
            'name': '特工卡尔施',
            'id': '017',
            'type': 'pc', 'desc': '特工卡尔施',
            'more': '特工卡尔施',
            'url': 'https://game.chenmo1212.cn/content/017/index.html',
            'cover': 'https://game.chenmo1212.cn/content/017/cover.png'
          }, {
            'name': '找色差小游戏',
            'id': '018',
            'type': 'both', 'desc': '十分考验眼力和速度的小游戏',
            'more': '找色差小游戏，十分考验眼力和速度的小游戏，带有有趣的音效。',
            'url': 'https://game.chenmo1212.cn/content/017/index.html',
            'cover': 'https://game.chenmo1212.cn/content/017/cover.png'
          }, {
            'name': '赛车俱乐部',
            'id': '019',
            'type': 'pc', 'desc': '赛车俱乐部',
            'more': '赛车俱乐部',
            'url': 'https://game.chenmo1212.cn/content/019/index.html',
            'cover': 'https://game.chenmo1212.cn/content/019/cover.png'
          }, {
            'name': '星球大战',
            'id': '020',
            'type': 'pc', 'desc': '星球大战',
            'more': '星球大战',
            'url': 'https://game.chenmo1212.cn/content/020/index.html',
            'cover': 'https://game.chenmo1212.cn/content/020/cover.png'
          }, {
            'name': '萌萌水贼',
            'id': '021',
            'type': 'both', 'desc': '萌萌水贼',
            'more': '萌萌水贼',
            'url': 'https://game.chenmo1212.cn/content/021/index.html',
            'cover': 'https://game.chenmo1212.cn/content/021/cover.png'
          }, {
            'name': '爬楼层',
            'id': '022',
            'type': 'both', 'desc': '爬楼层',
            'more': '简易的爬楼层小游戏',
            'url': 'https://game.chenmo1212.cn/content/022/index.html',
            'cover': 'https://game.chenmo1212.cn/content/022/cover.png'
          }, {
            'name': 'Flappy 2048',
            'id': '023',
            'type': 'both', 'desc': 'Flappy 2048',
            'more': 'Flappy 2048',
            'url': 'https://game.chenmo1212.cn/content/023/index.html',
            'cover': 'https://game.chenmo1212.cn/content/023/cover.png'
          }, {
            'name': 'HTML5版驴子跳',
            'id': '024',
            'type': 'both', 'desc': 'HTML5版驴子跳',
            'more': 'HTML5版驴子跳',
            'url': 'https://game.chenmo1212.cn/content/024/index.html',
            'cover': 'https://game.chenmo1212.cn/content/024/cover.png'
          }, {
            'name': '最强眼力',
            'id': '025',
            'type': 'both', 'desc': '最强眼力',
            'more': '最强眼力',
            'url': 'https://game.chenmo1212.cn/content/025/index.html',
            'cover': 'https://game.chenmo1212.cn/content/025/cover.png'
          }, {
            'name': '3D兔子跑酷',
            'id': '026',
            'type': 'both', 'desc': '3D兔子跑酷',
            'more': '3D兔子跑酷',
            'url': 'https://game.chenmo1212.cn/content/026/index.html',
            'cover': 'https://game.chenmo1212.cn/content/026/cover.png'
          }, {
            'name': '泡泡龙',
            'id': '027',
            'type': 'both', 'desc': '泡泡龙',
            'more': '泡泡龙',
            'url': 'https://game.chenmo1212.cn/content/027/index.html',
            'cover': 'https://game.chenmo1212.cn/content/027/cover.png'
          }, {
            'name': '射箭小游戏【超精致】',
            'id': '028',
            'type': 'pc', 'desc': '射箭小游戏【超精致】',
            'more': '射箭小游戏【超精致】',
            'url': 'https://game.chenmo1212.cn/content/028/index.html',
            'cover': 'https://game.chenmo1212.cn/content/028/cover.png'
          }, {
            'name': '飞行游戏',
            'id': '029',
            'type': 'pc', 'desc': '飞行游戏',
            'more': '飞行游戏',
            'url': 'https://game.chenmo1212.cn/content/029/index.html',
            'cover': 'https://game.chenmo1212.cn/content/029/cover.png'
          }, {
            'name': '翻牌记忆小游戏',
            'id': '030',
            'type': 'both', 'desc': '翻牌记忆小游戏',
            'more': '翻牌记忆小游戏',
            'url': 'https://game.chenmo1212.cn/content/030/index.html',
            'cover': 'https://game.chenmo1212.cn/content/030/cover.png'
          }, {
            'name': '永不放弃',
            'id': '032',
            'type': 'both', 'desc': '永不放弃',
            'more': '永不放弃',
            'url': 'https://game.chenmo1212.cn/content/032/index.html',
            'cover': 'https://game.chenmo1212.cn/content/032/cover.png'
          }]
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
