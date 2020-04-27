<template>
  <div id="login">
    <div class="container">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="title">登录界面</div>
        <el-form-item label="用户名" prop="name">
          <el-input prefix-icon="el-icon-user" placeholder="请输入账号" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input
            prefix-icon="el-icon-unlock"
            placeholder="请输入密码"
            v-model="ruleForm.pwd"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
        </el-form-item>
        <div class="register">
          <router-link to="/Register">注册账号</router-link>
        </div>
      </el-form>
    </div>
    <div class="clouds">
      <img src="../assets/images/cloud1.png" style="--i:1;" />
      <img src="../assets/images/cloud2.png" style="--i:2;" />
      <img src="../assets/images/cloud3.png" style="--i:3;" />
      <img src="../assets/images/cloud4.png" style="--i:4;" />
      <img src="../assets/images/cloud5.png" style="--i:5;" />
      <img src="../assets/images/cloud6.png" style="--i:6;" />
    </div>
  </div>
</template>

<script>
import "../assets/style/login.less";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        pwd: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 7 个字符", trigger: "blur" }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" }
          //{ min: 3, max: 5, message: "长度在 3 到 7 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/home");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
/* element-ui */
// .el-row {
//   margin-bottom: 20px;
//   &:last-child {
//     margin-bottom: 0;
//   }
// }
// .el-col {
//   border-radius: 4px;
// }
// .bg-purple-dark {
//   background: #99a9bf;
// }
// .bg-purple {
//   background: #d3dce6;
// }
// .bg-purple-light {
//   background: #e5e9f2;
// }
// .grid-content {
//   border-radius: 4px;
//   min-height: 36px;
// }
// .row-bg {
//   padding: 10px 0;
//   background-color: #f9fafc;
// }
</style>