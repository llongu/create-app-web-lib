<template>
  <div class="login-container">
    <div class="title-container">
      <div class="car">
        <img src="https://fakeimg.pl/400x440/" alt="">

      </div>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        autocomplete="on"
        label-position="left"
      >
        <div class="loginTitle">
          <p>后台管理系统</p>
        </div>
        <el-form-item prop="userName">
          <i class="el-iconfont el-username" />

          <el-input
            ref="userName"
            v-model="loginForm.userName"
            placeholder="admin or user"
            name="userName"
            type="text"
            tabindex="1"
            autocomplete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <i class="el-iconfont el-pwd" />
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <i v-show="loginForm.password" class="el-icon-view" @click="showPwd" />
        </el-form-item>

        <el-form-item prop="mobileValidateCode">
          <i class="el-iconfont el-safe" />
          <el-input
            ref="code"
            v-model="loginForm.mobileValidateCode"
            type="text"
            placeholder="请输入验证码"
            tabindex="2"
            autocomplete="on"
            style="width:60%"
            @keyup.native="checkCapslock"
            @keyup.enter.native="handleLogin"
          />
          <span style="cursor: pointer;color:#007EED;width: 22%;text-align: right" @click="getCode">
            {{ codeTip }}
          </span>
        </el-form-item>

        <el-button
          :loading="loading"
          type="primary"
          class="loginbtn"
          @click.native.prevent="handleLogin"
        >立即登录</el-button>

      </el-form>
    </div>
  </div>
</template>

<script>
// import { loginCode } from '@/api/user';
// import cryptoJs from 'crypto-js';

export default {
  name: 'Login',
  components: {},
  data() {
    const validateuserName = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('请输入账号'));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        userName: '',
        password: '',
        mobileValidateCode: ''
      },
      loginRules: {
        userName: [
          { required: true, trigger: 'blur', validator: validateuserName }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ],
        mobileValidateCode: { required: false, trigger: 'blur', message: '请输入验证码' }

      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      otherQuery: {},
      timer: null,
      codeTip: '获取验证码'

    };
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true
    }
  },

  created() {
  },
  mounted() {
    if (this.loginForm.userName === '') {
      this.$refs.userName.focus();
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus();
    }
  },
  destroyed() {
  },
  methods: {
    checkCapslock(e) {
      const { key } = e;
      this.capsTooltip = key && key.length === 1 && key >= 'A' && key <= 'Z';
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = '';
      } else {
        this.passwordType = 'password';
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          // var key = cryptoJs.enc.Utf8.parse('pwdcryptojsbyd');
          // var cipher = cryptoJs.AES.encrypt(this.loginForm.password, key, {
          //   mode: cryptoJs.mode.ECB,
          //   padding: cryptoJs.pad.Pkcs7
          // });
          const newData = {
            ...this.loginForm
            // password: cipher.ciphertext.toString(cryptoJs.enc.Base64)
          };
          this.$store
            .dispatch('user/login', newData)
            .then((res) => {
              // eslint-disable-next-line eqeqeq
              this.$router.push({
                path: this.redirect || '/',
                query: this.otherQuery
              });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    },
    getCode() {
      if (this.codeTip !== '获取验证码') return;
      // eslint-disable-next-line eqeqeq
      this.codeTip = '60s  '
      let times = 60
      this.timer = setInterval(() => {
        times--;
        this.codeTip = times + 's  ';
        if (times <= 0) {
          this.codeTip = '获取验证码'
          clearInterval(this.timer)
        }
      }, 1000)
      this.$message.success('验证码已发送！')
    }
  }
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
/* reset element-ui css */
.login-container {
  .el-input {
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 0;
      height: 47px;
      // caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #fff inset !important;
        -webkit-text-fill-color: #ccc !important;
      }
    }
  }

}
</style>

<style lang="scss" scoped>
.login-container {
  background: url("../../assets/login/loginbg.png") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  height: 100%;
  .title-container {
    position: relative;
    width: 800px;
    height: 440px;
    margin: 0 auto;
    margin-top: 20vh;
    background: #ffffff;
    box-shadow: 0px 10px 30px 0px #c2c2c2;
    border-radius: 4px;
    overflow: hidden;
  }
  .car {
    width: 400px;
    height: 100%;
    float: left;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

  }
  .login-form {
    width: 400px;
    height: 440px;
    float: left;
    overflow: hidden;
    .loginTitle {
      width: 100%;
      height: auto;
      margin: 48px auto 32px auto;
      text-align: center;
      p {
        padding-top: 10px;
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333333;
      }
    }
    .el-form-item{
      width: 338px;
      margin:0 auto;
      margin-bottom: 25px;
      border-radius: 4px;
      border: 1px solid #E6E6E6;

      ::v-deep .el-form-item__content{
        background: #fff;
        display:flex;
        align-items: center;
        .el-form-item__error{
          padding-top: 8px;
        }
        i{
          font-size:18px;color: #666666;
          margin:0 15px;
          margin-bottom: -2px;
        }
        .el-icon-view{
          margin-right: 15px;
        }
        .el-input{
          width: 230px;
          input{
            color:#333;
        font-size: 14px;

          }

          input::-webkit-input-placeholder{
            color:#666666;
          }

        }

      }

    }
    .loginbtn{
      width: 338px;
      height:48px;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
