<template>
  <div class="mine">
    <ul class="bg-bubbles">
      <li v-for="(item, index) in bubbles" :key="index"></li>
    </ul>

    <div class="hero" id="particles-js">
      <div class="w wave wave1"></div>
      <div class="w wave wave2"></div>
      <div class="w wave wave3"></div>
      <div class="w wave wave4"></div>
    </div>

    <div class="header">
      <div class="delete-btn">
        <button class="button" @click="func" id="delete_btn">
          <div class="trash">
            <div class="top">
              <div class="paper"></div>
            </div>
            <div class="box"></div>
            <div class="check">
              <svg viewBox="0 0 8 6">
                <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
              </svg>
            </div>
          </div>
        </button>
      </div>
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
        <li @click="handleModal('about')">
          <div class="icon left about"></div>
          <div class="text">关于</div>
          <div class="icon right"></div>
        </li>
        <!--<li>-->
        <!--<div class="icon left log"></div>-->
        <!--<div class="text">日志</div>-->
        <!--<div class="icon right"></div>-->
        <!--</li>-->
        <li @click="handleModal('money')">
          <div class="icon left money"></div>
          <div class="text">赞赏</div>
          <div class="icon right"></div>
        </li>
<!--        <li @click="toFeedback">-->
<!--          <div class="icon left feedback"></div>-->
<!--          <div class="text">反馈</div>-->
<!--          <div class="icon right"></div>-->
<!--        </li>-->
        <li @click="toWebsite('https://www.yikm.net/')">
          <div class="icon left game"></div>
          <div class="text">更多游戏</div>
          <div class="icon right"></div>
        </li>
      </ul>
    </div>

    <!--模态框-->
    <div class="modal" v-if="showModal">
      <div class="bg" @click="hiddenModal"></div>

      <!--清空数据模态框-->
      <div class="about-modal-cont" v-if="modalType === 'about'">
        <div class="content a-bouncein">
          <div class="close-icon" @click="hiddenModal"><i class="fa fa-times" aria-hidden="true"></i></div>
          <div class="title"><span>关于</span></div>
          <div class="about-modal">
            <div class="text">{{modalMsg}}</div>
            <div class="btn-group">
              <div class="btn" @click="hiddenModal">
                <span>关闭</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="money-modal-cont"  v-if="modalType === 'money'">
        <div class="content a-bouncein">
          <div class="close-icon" @click="hiddenModal"><i class="fa fa-times" aria-hidden="true"></i></div>
          <div class="title"><span>赞赏</span></div>
          <div class="money-modal">
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
  </div>
</template>

<script>
  export default {
    name: "mine",
    data() {
      return {
        bubbles: [],

        modalType: 'money',

        showModal: false,
        modalMsg: "本项目作于2020年的下半年，在注定不平凡的这一年里，上半年让人无所适从，下半年则让人心慌意乱。在图书馆复习备考之余，难免因为用脑过度导致身体疲乏。疲乏之余总想趴着睡会儿，但一睡则是天昏地暗，从此告别世人。心生一计，整理了一下库存里的小游戏，用来缓解一下备考时的身体疲乏。",
      }
    },
    created() {
      this.bubbles.length = 12;
      console.log(this.bubbles)
    },
    methods: {
      toFeedback() {
        this.$router.push({name: 'feedback'})
      },
      hiddenModal() {
        this.showModal = false;
      },
      toWebsite(url) {
        let tempWindow = window.open('_blank');
        // 打开一个窗口，然后用
        tempWindow.location=url;
      },
      handleModal(type) {
        this.modalType = type;
        this.showModal = true;
      },
      func(e){
        const button = document.getElementById('delete_btn')
        if(!button.classList.contains('delete')) {
          button.classList.add('delete');
          localStorage.clear()
          setTimeout(() => button.classList.remove('delete'), 3200);
        }
        e.preventDefault();
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

  .bg-bubbles li {
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

  .bg-bubbles li:nth-child(1) {
    left: 10%;
  }

  .bg-bubbles li:nth-child(2) {
    left: 20%;
    width: 40px;
    height: 40px;
    animation-delay: 2s;
    animation-duration: 7s;
  }

  .bg-bubbles li:nth-child(3) {
    left: 25%;
    animation-delay: 4s;
  }

  .bg-bubbles li:nth-child(4) {
    left: 40%;
    width: 32px;
    height: 32px;
    animation-duration: 8s;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .bg-bubbles li:nth-child(5) {
    left: 70%;
    width: 10px;
    height: 10px;
    animation-delay: 2s;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .bg-bubbles li:nth-child(6) {
    left: 80%;
    width: 30px;
    height: 30px;
    animation-delay: 3s;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .bg-bubbles li:nth-child(7) {
    left: 32%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
  }

  .bg-bubbles li:nth-child(8) {
    left: 55%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
    animation-duration: 15s;
  }

  .bg-bubbles li:nth-child(9) {
    left: 25%;
    width: 10px;
    height: 10px;
    animation-delay: 2s;
    animation-duration: 12s;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .bg-bubbles li:nth-child(10) {
    left: 85%;
    width: 40px;
    height: 40px;
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
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    width: 100%;
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

  .content .content-list li {
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

  .content .content-list li .text {
    width: calc(100% - 60px);
    text-align: left;
  }

  .content .content-list li .icon {
    background-color: #000;
    height: 15px;
    width: 15px;
  }

  .content .content-list li .right {
    -webkit-mask-box-image: url("../assets/svg/right.svg");
    -webkit-mask: url("../assets/svg/right.svg");
    mask: url("../assets/svg/right.svg");
    background: #606266;
  }

  .content .content-list li .home {
    -webkit-mask-box-image: url("../assets/svg/home.svg");
    -webkit-mask: url("../assets/svg/home.svg");
    mask: url("../assets/svg/home.svg");
    background-color: #a372ef;
  }

  .content .content-list li .github {
    -webkit-mask-box-image: url("../assets/svg/github.svg");
    -webkit-mask: url("../assets/svg/github.svg");
    mask: url("../assets/svg/github.svg");
    background-color: #869aa1;
  }

  .content .content-list li .log {
    -webkit-mask-box-image: url("../assets/svg/log.svg");
    -webkit-mask: url("../assets/svg/log.svg");
    mask: url("../assets/svg/log.svg");
    background-color: #3bb74b;
  }

  .content .content-list li .about {
    -webkit-mask-box-image: url("../assets/svg/about.svg");
    -webkit-mask: url("../assets/svg/about.svg");
    mask: url("../assets/svg/about.svg");
    background-color: #1dbcb3;
  }

  .content .content-list li .money {
    -webkit-mask-box-image: url("../assets/svg/money.svg");
    -webkit-mask: url("../assets/svg/money.svg");
    mask: url("../assets/svg/money.svg");
    background-color: #e84c3f;
  }

  .content .content-list li .feedback {
    -webkit-mask-box-image: url("../assets/svg/feedback.svg");
    -webkit-mask: url("../assets/svg/feedback.svg");
    mask: url("../assets/svg/feedback.svg");
    background-color: #1dbcb3;
  }

  .content .content-list li .game {
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

  .modal .money-modal-cont {
    position: absolute;
    top: 100px;
    width: 100%;
  }
  .modal .about-modal-cont {
    position: absolute;
    top: 200px;
    width: 100%;
  }

  .modal .content {
    max-width: 400px;
    width: 80%;
    background-color: #f4f6f8;
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

  @media screen and (min-width: 1140px) {
    .modal .content {
      /*width: auto;*/
      /*top: 5%;*/
    }

    .modal .content img {
      /*width: 400px;*/
    }
  }

  .delete-btn {
    text-align: center;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .button {
    /* Variablen */
    --background: linear-gradient(100deg, #B76BF0, #379DEB 75%, #24A4EA);
    --background-hover: linear-gradient(100deg, #B76BF0, #379DEB 75%, #B76BF0);
    --shadow: rgba(0, 9, 61, .2);
    --paper: #FCFDFD;
    --trash: #E1E6F9;
    --trash-lines: #E1E6F9;
    --check: #fff;
    --icon: #fff;
    --check-background: #196BE6;
    position: relative;
    border: none;
    outline: none;
    background: none;
    /*padding: 10px 24px;*/
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    background: var(--btn, var(--background));
    box-shadow: 0 var(--shadow-y, 4px) var(--shadow-blur, 8px) var(--shadow);
  }
  /* Ausrichten der Elemente */
  .button .trash {
    display: block;
    position: relative;
    left: 5px;
    top: 3px;
  }
  /* Erstellen der vertikalen Griffe */
  .button .trash:before, .button .trash:after {
    content: '';
    position: absolute;
    height: 8px;
    width: 2px;
    border-radius: 1px;
    background: var(--icon, var(--trash));
    bottom: 100%;
    transform-origin: 50% 6px;
    transform: translate(var(--x, 3px), 2px) scaleY(var(--sy, 0.7)) rotate(var(--r, 0deg));

    transition: transform .4s, background .3s;
  }
  /* Ausrichten vom linken Griff */
  .button .trash:before {
    left: 1px;
  }
  /* Ausrichten vom rechten Griff */
  .button .trash:after {
    right: 1px;
    --x: -3px;
  }
  /* Rückt elemente in richtige Richtung */
  .button .trash .top {
    position: absolute;
    overflow: hidden;
    left: -4px;
    right: -4px;
    bottom: 100%;
    height: 40px;
    z-index: 1;
    transform: translateY(2px);
  }

  /* Deckel von Trashcan */
  .button .trash .top:before, .button .trash .top:after {
    content: '';
    position: absolute;
    border-radius: 1px;
    background: var(--icon, var(--trash));
    width: var(--w, 9px);
    height: var(--h, 2px);
    left: var(--l, 8px);
    bottom: var(--b, 5px);
    /* Langsames zurückgehen des Deckels in Ursprüngliche Form*/
    transition: background .3s, transform .4s;
  }
  /* Deckel von Mülltonne */
  .button .trash .top:after {
    --w: 28px;
    --h: 2px;
    --l: 0;
    --b: 0;
    /* Skalieren des Deckel unterteils */
    transform: scaleX(var(--trash-line-scale, 1));
  }
  /* Animation von Papier */
  .button .trash .top .paper {
    width: 14px;
    height: 18px;
    background: var(--paper);
    left: 7px;
    bottom: 0;
    border-radius: 1px;
    position: absolute;
    /* Runterbewegen des Papiers */
    transform: translateY(-16px);
    opacity: 0;
  }
  /* Außenrand der Mülltonne */
  .button .trash .box {
    width: 17px;
    height: 20px;
    border: 2px solid var(--icon, var(--trash));
    border-radius: 1px 1px 4px 4px;
    position: relative;
    overflow: hidden;
    z-index: 2;
  }
  /* Erstellen der zwei Linien auf der Mülltone */
  .button .trash .box:before, .button .trash .box:after {
    content: '';
    position: absolute;
    width: 4px;
    height: var(--h, 20px);
    top: 0;
    left: var(--l, 50%);
    background: var(--b, var(--trash-lines));
  }
  /* Linien auf Mülltone verschwinden
     Sichbarkeit der Trashlines */
  .button .trash .box:before {
    border-radius: 2px;
    margin-left: -2px;
    transform: translateX(-3px) scale(0.6);
    box-shadow: 10px 0 0 var(--trash-lines);
    opacity: var(--trash-lines-opacity, 1);
    transition: transform .4s, opacity .4s;
  }
  .button .trash .box:after {
    --h: 16px;
    --b: var(--paper);
    --l: 1px;
    transform: translate(-0.5px, -16px) scaleX(0.5);
    box-shadow: 7px 0 0 var(--paper), 14px 0 0 var(--paper), 21px 0 0 var(--paper);
  }
  /* Kreis erstellen mit Checkmark */
  .button .trash .check {
    padding: 4px 3px;
    border-radius: 50%;
    background: var(--check-background);
    position: absolute;
    left: 2px;
    top: 24px;
    opacity: var(--check-opacity, 0);
    transform: translateY(var(--check-y, 0)) scale(var(--check-scale, 0.2));
    /* Runterbewegen des Kreises und Sichbarkeit */
    transition: transform var(--check-duration, 0.2s) ease var(--check-delay, 0s), opacity var(--check-duration-opacity, 0.2s) ease var(--check-delay, 0s);
  }
  /* Animation des Hackens*/
  .button .trash .check svg {
    width: 8px;
    height: 6px;
    display: block;
    fill: none;
    stroke-width: 1.5;
    stroke-dasharray: 9px;
    stroke-dashoffset: var(--check-offset, 9px);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: var(--check);
    transition: stroke-dashoffset 0.4s ease var(--checkmark-delay, 0.4s);
  }
  .button.delete {
    --trash-lines-opacity: 0;
    --trash-line-scale: 0;
    --check-offset: 0;
    --check-opacity: 1;
    --check-scale: 1;
    --check-y: 16px;
    --check-delay: 1.7s;
    --checkmark-delay: 2.1s;
    --check-duration: .55s;
    --check-duration-opacity: .3s;
  }
  /* Bewegt die Handgriffe */
  .button.delete .trash:before, .button.delete .trash:after {
    --sy: 1;
    --x: 0;
  }
  /* Rotiert die Handgriffe */
  .button.delete .trash:before {
    --r: 40deg;
  }
  .button.delete .trash:after {
    --r: -40deg;
  }
  /* Animiert das Papier */
  .button.delete .trash .top .paper {
    animation: paper 1.5s linear forwards .5s;
  }
  /* Animiert die Papierstreifen */
  .button.delete .trash .box:after {
    animation: cut 1.5s linear forwards .5s;
  }
  /* Hover Effekt */
  .button.delete, .button:hover {
    --btn: var(--background-hover);
  }
  /* Animation von Papier */
  @keyframes paper {
    10%,
    100% {
      opacity: 1;
    }
    20% {
      transform: translateY(-16px);
    }
    40% {
      transform: translateY(0);
    }
    70%,
    100% {
      transform: translateY(24px);
    }
  }
  /* Animation für die Papierstreifen */
  @keyframes cut {
    0%,
    40% {
      transform: translate(-0.5px, -16px) scaleX(0.5);
    }
    100% {
      transform: translate(-0.5px, 24px) scaleX(0.5);
    }
  }
  .button {
    box-sizing: border-box;
  }

  .button * {
    box-sizing: inherit;
  }
</style>
