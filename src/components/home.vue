<template>
  <div class="hello">
    <div class="content">
      <div class="phone" v-if="pageIndex === 0">
        <phone_page></phone_page>
      </div>
      <div class="pc" v-if="pageIndex === 1">
        <pc_page></pc_page>
      </div>
      <div class="both" v-if="pageIndex === 2">
        <both_page></both_page>
      </div>
      <div class="mine" v-if="pageIndex === 3">第四页</div>
    </div>
    <!--nav bar-->
    <nav class="tabbar">
      <ul>
        <li class="active calendar">
          <a href="#">
            <div></div>
            <span>手机</span>
          </a>
        </li>
        <li class=" files">
          <a href="#">
            <div></div>
            <span>电脑</span>
          </a>
        </li>
        <li class=" notification">
          <a href="#">
            <div></div>
            <span>其他</span>
          </a>
        </li>
        <li class=" settings">
          <a href="#">
            <div></div>
            <span>我的</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import $ from 'jquery';
  import phone_page from './phone_page'
  import pc_page from './pc_page'
  import both_page from './other_page'

  export default {
    name: 'HelloWorld',
    components: {
      phone_page,
      pc_page,
      both_page,
    },
    data() {
      return {
        pageIndex: 0,       // 页面下标
      }
    },
    created() {
      console.log(localStorage.pageIndex);
      if (typeof localStorage.pageIndex !== 'undefined'){
        this.pageIndex = JSON.parse(localStorage.pageIndex);
      }
    },
    mounted() {
      const that = this;

      // 根据本地存储的下标，更改菜单激活位置
      $('.tabbar ul').each(function () {
        // console.log(that.pageIndex);
        $(this).children('li').eq(0).removeClass('active');
        $(this).children('li').eq(that.pageIndex).addClass('active');
      });

      // tabbar 事件绑定
      $('.tabbar ul li a').click(function () {
        let link = $(this),
          li = link.parent();

        // console.log($('.tabbar ul li a').index(this));
        that.pageIndex = $('.tabbar ul li a').index(this);

        // 存入本地存储
        localStorage.setItem("pageIndex", JSON.stringify(that.pageIndex));

        that.setTabActive(li.parent(), li);

        return false;

      });
    },
    methods: {
      setTabActive(nav, li) {
        nav.find('li').removeClass('active');
        li.addClass('active');
        nav.css('--x', li.position().left + li.outerWidth() / 2 + 'px');
      },
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .tabbar {
    --primary: #275EFE;
    --background: #fff;
    --inactive: #99A3BA;
    --shadow: rgba(18, 22, 33, .24);
    --line: #CDD9ED;
    background: var(--background);
    box-shadow: 0 2px 9px 1px var(--shadow);
    border-radius: 21px 21px 0 0;
    /*width: 360px;*/
    width: 100vw;
    /*max-width: 400px;*/
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
  }

  .tabbar ul {
    --x: -354px;
    margin: 0;
    padding: 0 12px;
    list-style: none;
    display: grid;
    position: relative;
    overflow: hidden;
    text-align: center;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .tabbar ul:before {
    content: '';
    position: absolute;
    top: 0;
    left: var(--x);
    background: var(--primary);
    width: 60px;
    margin-left: -30px;
    height: 40px;
  }

  .tabbar ul li {
    position: relative;
  }

  .tabbar ul li:before, .tabbar ul li:after {
    content: '';
    background: var(--background);
    height: 44px;
    width: 84px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -42px;
  }

  .tabbar ul li:before {
    border-radius: 0 48% 0 0;
  }

  .tabbar ul li:after {
    border-radius: 48% 0 0 0;
  }

  .tabbar ul li a {
    padding: 20px 0;
    display: block;
    text-decoration: none;
    position: relative;
    z-index: 1;
    color: var(--primary);
    -webkit-transition: -webkit-transform .2s ease;
    transition: -webkit-transform .2s ease;
    transition: transform .2s ease, -webkit-transform .2s ease;
  }

  .tabbar ul li a:active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  .tabbar ul li a:before, .tabbar ul li a:after {
    content: '';
    top: 0;
    left: 50%;
    position: absolute;
    background: var(--primary);
    border-radius: 1px;
    width: 2px;
    margin-left: -1px;
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-transform: translateY(-14px) scaleX(0.6);
    transform: translateY(-14px) scaleX(0.6);
  }

  .tabbar ul li a:before {
    height: 8px;
  }

  .tabbar ul li a:after {
    height: 4px;
  }

  .tabbar ul li a div {
    background: var(--inactive);
    width: 24px;
    height: 24px;
    margin: 0 auto 4px auto;
  }

  .tabbar ul li a div:before {
    --y: -100%;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transform: translateY(var(--y));
    transform: translateY(var(--y));
    position: absolute;
    -webkit-transition: -webkit-transform .4s linear;
    transition: -webkit-transform .4s linear;
    transition: transform .4s linear, -webkit-transform .4s linear;
    background: var(--primary);
  }

  .tabbar ul li a span {
    display: block;
    font-weight: 500;
    font-size: 14px;
    opacity: 0;
    -webkit-transition: opacity .36s linear;
    transition: opacity .36s linear;
  }

  .tabbar ul li.active:before {
    -webkit-animation: before 1.1s ease;
    animation: before 1.1s ease;
  }

  .tabbar ul li.active:after {
    -webkit-animation: after 1.1s ease;
    animation: after 1.1s ease;
  }

  .tabbar ul li.active a {
    -webkit-animation: bounce .9s linear .3s;
    animation: bounce .9s linear .3s;
  }

  .tabbar ul li.active a:before {
    -webkit-animation: drop .4s linear .1s forwards;
    animation: drop .4s linear .1s forwards;
  }

  .tabbar ul li.active a:after {
    -webkit-animation: drop .5s linear .13s forwards;
    animation: drop .5s linear .13s forwards;
  }

  .tabbar ul li.active a div:before {
    --y: 0;
    -webkit-transition-delay: .3s;
    transition-delay: .3s;
  }

  .tabbar ul li.active a span {
    opacity: 1;
    -webkit-transition-delay: .38s;
    transition-delay: .38s;
  }

  .tabbar ul li.calendar a div {
    -webkit-mask-box-image: url("../assets/svg/shouji.svg");
    -webkit-mask: url("../assets/svg/shouji.svg");
    mask: url("../assets/svg/shouji.svg");
  }

  .tabbar ul li.files a div {
    -webkit-mask-box-image: url("../assets/svg/diannao.svg");
    -webkit-mask: url("../assets/svg/diannao.svg");
    mask: url("../assets/svg/diannao.svg");
  }

  .tabbar ul li.notification a div {
    -webkit-mask-box-image: url("../assets/svg/qita.svg");
    -webkit-mask: url("../assets/svg/qita.svg");
    mask: url("../assets/svg/qita.svg");
  }

  .tabbar ul li.settings a div {
    -webkit-mask-box-image: url("../assets/svg/wode.svg");
    -webkit-mask: url("../assets/svg/wode.svg");
    mask: url("../assets/svg/wode.svg");
  }

  @-webkit-keyframes bounce {
    40% {
      -webkit-transform: translateY(9px);
      transform: translateY(9px);
    }
    55% {
      -webkit-transform: translateY(-1px);
      transform: translateY(-1px);
    }
    70% {
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
    }
  }

  @keyframes bounce {
    40% {
      -webkit-transform: translateY(9px);
      transform: translateY(9px);
    }
    55% {
      -webkit-transform: translateY(-1px);
      transform: translateY(-1px);
    }
    70% {
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
    }
  }

  @-webkit-keyframes drop {
    50% {
      -webkit-transform: translateY(10px) scaleY(1.2) scaleX(0.5);
      transform: translateY(10px) scaleY(1.2) scaleX(0.5);
    }
    100% {
      -webkit-transform: translateY(20px) scaleY(0) scaleX(0.5);
      transform: translateY(20px) scaleY(0) scaleX(0.5);
    }
  }

  @keyframes drop {
    50% {
      -webkit-transform: translateY(10px) scaleY(1.2) scaleX(0.5);
      transform: translateY(10px) scaleY(1.2) scaleX(0.5);
    }
    100% {
      -webkit-transform: translateY(20px) scaleY(0) scaleX(0.5);
      transform: translateY(20px) scaleY(0) scaleX(0.5);
    }
  }

  @-webkit-keyframes before {
    45%,
    55% {
      -webkit-transform: translateX(-41px);
      transform: translateX(-41px);
    }
  }

  @keyframes before {
    45%,
    55% {
      -webkit-transform: translateX(-41px);
      transform: translateX(-41px);
    }
  }

  @-webkit-keyframes after {
    45%,
    55% {
      -webkit-transform: translateX(41px);
      transform: translateX(41px);
    }
  }

  @keyframes after {
    45%,
    55% {
      -webkit-transform: translateX(41px);
      transform: translateX(41px);
    }
  }

</style>
