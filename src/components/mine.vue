<template>
  <div class="mine">
    <ul class="bg-bubbles">
      <li v-for="(index) in bubbles" :key="index"></li>
    </ul>

    <div class="hero" id="particles-js">
      <div class="w wave wave1"></div>
      <div class="w wave wave2"></div>
      <div class="w wave wave3"></div>
      <div class="w wave wave4"></div>
    </div>

    <div class="header">
      <div class="info">
        <div class="avatar a-bouncein">
          <img src="../assets/avatar.png" alt="" @click="toWebsite('https://chenmo1212.cn')">
        </div>
        <h3 class="nickname">℡余生少年</h3>
        <p class="motto">前路漫漫，当克己，当慎独。</p>
      </div>
    </div>

    <div class="content">
      <ul class="content-list">
        <li @click="toWebsite('https://chenmo1212.cn')">
          <div class="icon left home"></div>
          <div class="text">主页</div>
          <div class="icon right"></div>
        </li>
        <li @click="toWebsite('https://github.com/Chenmo1212/homepage_of_game')">
          <div class="icon left github"></div>
          <div class="text">Github</div>
          <div class="icon right"></div>
        </li>
        <li @click="showModal = true">
          <div class="icon left about"></div>
          <div class="text">关于</div>
          <div class="icon right"></div>
        </li>
        <!--<li>-->
          <!--<div class="icon left log"></div>-->
          <!--<div class="text">日志</div>-->
          <!--<div class="icon right"></div>-->
        <!--</li>-->
        <li>
          <div class="icon left money"></div>
          <div class="text">赞赏</div>
          <div class="icon right"></div>
        </li>
        <li @click="toFeedback">
          <div class="icon left feedback"></div>
          <div class="text">反馈</div>
          <div class="icon right"></div>
        </li>
        <li @click="toWebsite('https://www.yikm.net/')">
          <div class="icon left game"></div>
          <div class="text">更多</div>
          <div class="icon right"></div>
        </li>
      </ul>
    </div>


    <!--模态框-->
    <div class="modal" v-if="showModal">
      <div class="bg" @click="hiddenModal"></div>
      <div class="content a-bouncein">
        <div class="close-icon" @click="hiddenModal"><i class="fa fa-times" aria-hidden="true"></i></div>
        <div class="title"><span>{{modalTit}}</span></div>

        <!--清空数据模态框-->
        <div class="about-modal" v-if="modalType === 'about'">
          <div class="text">{{modalMsg}}</div>
          <div class="btn-group">
            <div class="btn" @click="hiddenModal">
              <span>关闭</span>
            </div>
          </div>
        </div>

        <!--清空数据模态框-->
        <div class="money-modal" v-if="modalType === 'money'">
          <img src="../assets/money.png" alt="">
          <div class="btn-group">
            <div class="btn" @click="hiddenModal">
              <span>关闭</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mine",
    data() {
      return {
        bubbles: [],

        modalType: 'money',

        showModal: true,
        modalTit: "关于",
        modalMsg: "本项目作于2020年的下半年，在注定不平凡的这一年里，上半年让人无所适从，下半年则让人心慌意乱。在图书馆复习备考之余，难免因为用脑过度导致身体疲乏。疲乏之余总想趴着睡会儿，但一睡则是天昏地暗，从此告别世人。心生一计，整理了一下库存里的小游戏，用来缓解一下备考时的身体疲乏。",
      }
    },
    created() {
      this.bubbles.length = 12;
    },
    methods: {
      toFeedback() {
        this.$router.push({name: 'feedback'})
      },
      hiddenModal() {
        this.showModal = false;
      },
      toWebsite(url) {
        location.href = url
      }
    }
  }
</script>

<style scoped>
  @import '../css/cards.css';

  .mine {
    height: 100vh;
    width: 100%;
    /*background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);*/
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }


  .hero {
    overflow: hidden;
    position: relative;
    height: calc(33vh + 80px);
    min-height: 200px;
    background: #ffce54;
    background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);
  }

  .hero .w {
    position: absolute;
    /*left: -25vw;*/
    right: 0;
    background: url(https://i.koya.io/whitewave2.svg) center;
    animation: drift linear infinite;
    transform-origin: 50% 48%;
  }


  .hero .wave1 {
    height: 240px;
    -webkit-transform: translateY(-60px);
    transform: translateY(-60px);
    background-size: 960px 240px;
    opacity: 1;
    left: -80vw;
    right: -5vw;
    animation-duration: 5s;
    top: 83%;
  }

  .hero .wave2 {
    height: 240px;
    -webkit-transform: translateY(-80px);
    transform: translateY(-80px);
    background-size: 960px 240px;
    opacity: 0.5;
    left: -79vw;
    right: -11vw;
    animation-duration: 7s;
    top: 82%;
  }

  .hero .wave3 {
    height: 220px;
    -webkit-transform: translateY(-120px);
    transform: translateY(-120px);
    background-size: 880px 220px;
    opacity: 0.33;
    left: -78vw;
    right: -5vw;
    animation-duration: 9s;
    top: 80%;
  }

  .hero .wave4 {
    height: 280px;
    -webkit-transform: translateY(-160px);
    transform: translateY(-160px);
    background-size: 1120px 280px;
    opacity: 0.1;
    left: -77vw;
    right: -5vw;
    animation-duration: 11s;
    top: 78%;
  }

  .bg-bubbles {
    position: absolute;
    top: 0;
    left: 0;
    width: 95%;
    z-index: 1;
    height: 40vh;
  }

  .bg-bubbles {
    position: absolute;
    bottom: -160px;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.15);
    list-style: none;
    /*使用自定义动画使气泡渐现、上升和翻滚；*/
    animation: square 15s infinite;
    transition-timing-function: linear;
  }

  .bg-bubbles :nth-child(1) {
    left: 10%;
  }

  .bg-bubbles :nth-child(2) {
    left: 20%;
    width: 90px;
    height: 90px;
    animation-delay: 2s;
    animation-duration: 7s;
  }

  .bg-bubbles :nth-child(3) {
    left: 25%;
    animation-delay: 4s;
  }

  .bg-bubbles :nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-duration: 8s;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .bg-bubbles :nth-child(5) {
    left: 70%;
  }

  .bg-bubbles :nth-child(6) {
    left: 80%;
    width: 80px;
    height: 80px;
    animation-delay: 3s;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .bg-bubbles :nth-child(7) {
    left: 32%;
    width: 60px;
    height: 60px;
    animation-delay: 2s;
  }

  .bg-bubbles :nth-child(8) {
    left: 55%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
    animation-duration: 15s;
  }

  .bg-bubbles :nth-child(9) {
    left: 25%;
    width: 10px;
    height: 10px;
    animation-delay: 2s;
    animation-duration: 12s;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .bg-bubbles :nth-child(10) {
    left: 85%;
    width: 60px;
    height: 60px;
    animation-delay: 5s;
  }

  @keyframes square {
    0% {
      opacity: 0.5;
      transform: translateY(0px) rotate(45deg);
    }
    25% {
      opacity: 0.75;
      transform: translateY(-30vh) rotate(90deg)
    }
    50% {
      opacity: 1;
      transform: translateY(-40vh) rotate(135deg);
    }
    100% {
      opacity: 0;
      transform: translateY(-50vh) rotate(180deg);
    }
  }


  @keyframes drift {
    0% {
      transform: translateX(300px);
    }
    50% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(300px);
    }
  }

  .header {
    position: absolute;
    top: 0;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
  }

  .header .avatar {
    width: 34%;
    margin: 0 auto;
  }

  .header .avatar img {
    width: 100%;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 3px 0 8px -4px #000;
  }

  .header .nickname,
  .header .motto {
    color: #fff;
  }

  .content {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    width: 90%;
    margin: 3px auto 0;
    /*margin: -8% auto 0;*/
    border-radius: 5px;
    /*position: absolute;*/
    /*left: 5%;*/
  }

  .content li {
    font-size: 14px;
    line-height: 30px;
    color: #606266;
    padding: 5px 10px;
    border-bottom: 1px solid #F2F6FC;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
  }

  .content li .text {
    width: calc(100% - 60px);
    text-align: left;
  }

  .content li .icon {
    background-color: #000;
    height: 15px;
    width: 15px;
  }

  .content li .right {
    -webkit-mask-box-image: url("../assets/svg/right.svg");
    -webkit-mask: url("../assets/svg/right.svg");
    mask: url("../assets/svg/right.svg");
    background: #606266;
  }

  .content li .home {
    -webkit-mask-box-image: url("../assets/svg/home.svg");
    -webkit-mask: url("../assets/svg/home.svg");
    mask: url("../assets/svg/home.svg");
    background-color: #a372ef;
  }

  .content li .github {
    -webkit-mask-box-image: url("../assets/svg/github.svg");
    -webkit-mask: url("../assets/svg/github.svg");
    mask: url("../assets/svg/github.svg");
    background-color: #869aa1;
  }

  .content li .log {
    -webkit-mask-box-image: url("../assets/svg/log.svg");
    -webkit-mask: url("../assets/svg/log.svg");
    mask: url("../assets/svg/log.svg");
    background-color: #3bb74b;
  }

  .content li .about {
    -webkit-mask-box-image: url("../assets/svg/about.svg");
    -webkit-mask: url("../assets/svg/about.svg");
    mask: url("../assets/svg/about.svg");
    background-color: #1dbcb3;
  }

  .content li .money {
    -webkit-mask-box-image: url("../assets/svg/money.svg");
    -webkit-mask: url("../assets/svg/money.svg");
    mask: url("../assets/svg/money.svg");
    background-color: #e84c3f;
  }

  .content li .feedback {
    -webkit-mask-box-image: url("../assets/svg/feedback.svg");
    -webkit-mask: url("../assets/svg/feedback.svg");
    mask: url("../assets/svg/feedback.svg");
    background-color: #1dbcb3;
  }

  .content li .game {
    -webkit-mask-box-image: url("../assets/svg/game.svg");
    -webkit-mask: url("../assets/svg/game.svg");
    mask: url("../assets/svg/game.svg");
    background-color: #ff9912;
  }

  /* MODAL */
  .modal {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 1000;
    overflow: hidden;
  }

  .modal .bg {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
    top: 0;
  }

  .modal .content {
    position: absolute;
    width: calc(80% - 10%);
    background-color: #f4f6f8;
    left: 10%;
    top: 18%;
    border-radius: 2%;
    padding: 3% 5%;
  }

  .modal .content .close-icon {
    position: absolute;
    right: 5%;
  }

  .modal .content .title {
    margin: 5% 0 10%;
    font-weight: 700;
  }

  .modal .content .title span {
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: inset 5px 5px 10px #eaecee, inset -5px -5px 10px #feffff;
  }

  .modal .content .text {
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .modal .content i {
    padding-right: 5px;
  }

  .modal .content img {
    width: 100%;
    margin-bottom: 20px;
  }

  .modal .content .btn {
    width: 60%;
    height: 36px;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 2px 2px 4px #d1d9e6, -2px -2px 4px #f9f9f9;
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .3s ease;
    color: #fff;
    background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);
  }

  .modal .content .btn:active {
    background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);
  }

  .modal .content .btn-group {
    display: flex;
    color: #599efb;
  }
</style>
