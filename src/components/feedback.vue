<template>
  <div class="feedback">
    <div class="header">
      <div class="return">
        <div class="circle">
          <i @click="backHome"></i>
        </div>
        <div class="pageName">{{pageName}}</div>
      </div>
    </div>
    <div class="main">
      <div class="title mt-0"><span class="text">反馈类型</span></div>
      <div class="type-content">
        <label class="radio" for="improve" @click.prevent="handleType(1)">
          <span class="radio-bg"></span>
          <input checked="checked" id="improve" name="type" type="radio" value="改进建议"/> 改进建议
          <span class="radio-on"></span>
        </label>
        <label class="radio" for="bug" @click.prevent="handleType(2)">
          <span class="radio-bg"></span>
          <input id="bug" name="type" type="radio" value="Bug提交"/> Bug提交
          <span class="radio-on"></span>
        </label>
        <label class="radio" for="advise" @click.prevent="handleType(3)">
          <span class="radio-bg"></span>
          <input id="advise" name="type" type="radio" value="对开发者的话"/> 对开发者的话
          <span class="radio-on"></span>
        </label>
      </div>
      <div class="title"><span class="text">反馈内容</span></div>
      <label for="content"></label><textarea v-model="feedCont" id="content" @focus="removeWarning()"></textarea>
      <div class="title"><span class="text">称呼（选填）</span></div>
      <label>
        <input type="text" class="input name" v-model="name"/>
      </label>
      <div class="title"><span class="text">邮箱</span></div>
      <label for="mail"></label><input type="text" class="input mail" v-model="mail" id="mail" @focus="removeWarning()"/>
      <button class="btn submit" @click="submitBug()">
        <span class="icon-container">
          <i class="fa fa-rocket"></i>
            立即提交
          </span>
      </button>
    </div>

    <div class="toast" v-show="toastShow">
      {{toastText}}
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "feedback",
    data() {
      return {
        pageName: '意见反馈',

        type: '改进建议',
        feedCont: '',
        mail: '',
        name: '',

        toastShow: false,
        toastText: ''
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {

      backHome() {
        this.$router.push({name: 'home'});
      },

      setWarning (e) {
        let self = this;
        self.toastText = e;
        self.toastShow = true;
        setTimeout(function(){
          self.toastShow = false
        }, 1500)
      },

      /**
       * 反馈类型
       * @param index 下标
       */
      handleType(index){
        console.log(index);

        let type1 = document.getElementById('improve');
        let type2 = document.getElementById('bug');
        let type3 = document.getElementById('advise');

        switch (index) {
          case 1:
            this.type = '改进建议';
            type1.checked = "checked";
            type2.checked = "";
            type3.checked = "";
            break;
          case 2:
            this.type = 'Bug提交';
            type1.checked = "";
            type2.checked = "checked";
            type3.checked = "";
            break;
          case 3:
            this.type = '对开发者的话';
            type1.checked = "";
            type2.checked = "";
            type3.checked = "checked";
            break;
        }
      },
      /**
       * 移除警告状态
       */
      removeWarning(){
        document.getElementById("content").classList.remove("warning");
        document.getElementById("mail").classList.remove("warning");
      },

      /**
       * 检测邮箱格式是否正确
       * @returns {boolean} 正确与否
       */
      checkMail(){
        let email = this.mail;
        let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if(reg.test(email)){
          console.log("邮箱格式正确");
          return true
        } else {
          console.log("邮箱格式不正确");
          document.getElementById("mail").classList.add("warning");
          this.setWarning("邮箱格式不正确");
          return false
        }
      },
      /**
       * 检测反馈内容是否正确
       * @returns {boolean} 正确与否
       */
      checkContent(){
        let content = this.feedCont;
        if(content){
          console.log("反馈内容不为空");
          return true
        }else{
          console.log("反馈内容为空");
          document.getElementById("content").classList.add("warning");
          this.setWarning("反馈内容不得为空");
          return false
        }
      },

      /**
       * 提交
       */
      submitBug(){
        // 检测邮箱
        if (!this.checkMail()) return;
        // 检测反馈内容
        if (!this.checkContent()) return;

        let content = `#### 反馈类型：\n\n${this.type}\n\n---\n\n#### 反馈内容：\n\n${this.feedCont}\n\n---\n\n#### 称呼：\n\n${this.name}\n\n---\n\n#### 联系方式：\n\n${this.mail}`;

        let SCKEY = 'SCU111050Tdb28e1d031b1b4a87d4cdba2f8bba1095f478da29f48a';
        let url = 'https://sc.ftqq.com/' + SCKEY + '.send';

        let params = new URLSearchParams();
        params.append('text', '游戏网站 用户反馈');
        params.append('desp', content);

        axios.post(url, params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
        }).then((res) => {
          console.log("返回的值"+res);
          this.setWarning("提交成功！感谢您的反馈！");
          this.type = '';
          this.mail = '';
          this.name = '';
          this.feedCont = ''
        }).catch(err => {
          console.log("错误"+err);
          this.setWarning("提交成功了！感谢您的反馈！");
          this.type = '';
          this.mail = '';
          this.name = '';
          this.feedCont = ''
        });
      }
    }
  }
</script>

<style scoped>
  .feedback {
    background-color: #ffffff;
    min-height: 100vh;
    color: #303133;
  }

  .header {
    height: 60px;
    line-height: 60px;
    background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .header .return {
    float: left;
    margin-left: 20px;
    display: flex;
    align-items: center;
    color: #fff!important;
  }

  .header .circle {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);
    margin: 0;
    /*border: 1px solid #F2F6FC;*/
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }

  .header i {
    height: 16px;
    width: 16px;
    display: block;
    margin: 7px auto;
    -webkit-mask-box-image: url("../assets/svg/left.svg");
    -webkit-mask: url("../assets/svg/left.svg");
    mask: url("../assets/svg/left.svg");
    background: #fff;
  }

  .header div {
    margin: 0 10px;
    font-size: 16px;
  }

  .main {
    padding: 20px;
  }

  .main .title {
    margin: 5% 0;
    height: 30px;
    line-height: 30px;
    text-align: left;
  }

  .main .text {
    display: inline-block;
    text-align: left;
    padding: 2px 10px;
    background-color: #fff;
    border-left: 3px solid;
    border-color: #275efe;
  }

  .main .mt-0 {
    margin-top: 0;
  }

  .type-content {
    margin: 20px 0;
  }

  .type-content .radio {
    display: inline-block;
    position: relative;
    line-height: 18px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 5px;
  }

  .type-content input {
    display: none;
  }

  .type-content input:checked + span.radio-on {
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 100%;
    top: 4px;
    left: 4px;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.4) inset;
    background: #FFFFFF linear-gradient(#ffffff 0, #e7e7e7 100%);
    transition: all 0.2s ease;
    transform: scale(1, 1);
    display: inline-block;
  }

  .type-content .radio-bg {
    display: inline-block;
    height: 18px;
    width: 18px;
    margin-right: 5px;
    padding: 0;
    background-color: #fff;
    border-radius: 100%;
    vertical-align: top;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1) inset, 0 1px 4px rgba(0, 0, 0, 0.1) inset, 1px -1px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .type-content .radio-on {
    display: none;
  }
  .warning {
    border: 1px solid #cc0001!important;
  }
  textarea {
    min-width: 100%;
    width: 100%;
    border-radius: 5px;
    padding: 5px;
    box-sizing: border-box;
    font-size: 14px;
    height: 90px;
    border: 1px solid #fff;
    box-shadow: inset 2px 2px 2px #d1d9e6, inset -2px -2px 2px #f9f9f9;
    background-color: #fff;
  }

  textarea:focus,
  .input:focus {
    outline: 1px solid #275efe;
  }

  .input {
    width: 100%;
    padding: 0 .3rem;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 14px;
    height: 40px;
    border: 1px solid #fff;
    box-shadow: inset 2px 2px 2px #d1d9e6, inset -2px -2px 2px #f9f9f9;
    background-color: #fff;
  }

  .btn.submit {
    text-align: center;
    margin-top: 10%;
    display: inline-block;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    background: linear-gradient(100deg, #24A4EA, #379DEB 25%, #B76BF0);
    border: none;
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding: 2px 10px;
    font-size: 16px;
    color: #fff;
    outline: none;
  }

  .btn.submit:active {
    background-color: #e7e9ef;
  }
  .toast{
    position: fixed;
    z-index: 2000;
    left: 50%;
    top:45%;
    transition:all .5s;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    border-radius: 5px;
    color:#FFF;
    background: rgba(17, 17, 17, 0.7);
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    max-width: 150px;
  }
</style>
