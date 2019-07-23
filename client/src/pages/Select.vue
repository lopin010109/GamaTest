<template lang="pug">
div
  h4 查詢資料
  el-form(:model="ruleForm" :rules="rules" ref="ruleForm")
    el-form-item(prop="inputNumber")
      el-input(v-model="ruleForm.inputNumber" placeholder="請輸入車號" clearable)
    el-form-item
      el-button(@click="btnGetSelect" type="primary") 確認查詢
      el-button(@click="resetForm('ruleForm')") 重置
  h4 全部查詢
  el-form
    el-form-item
      el-button(@click="btnGetall" type="primary") 確認查詢
  ShowItem(:list="list")
</template>

<script>
import ShowItem from "../components/ShowItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    // 車號檢查
    let patternNumber = new RegExp("[A-Z]{3}[0-9]{4}");
    const checkNumber = (rule, value, callback) => {
      if (patternNumber.test(value)) {
        callback();
      } else {
        callback(new Error("請前三碼輸入英文後三碼輸入數字"));
      }
    };
    return {
      a: 1,
      ruleForm: {
        inputNumber: ""
      },
      rules: {
        inputNumber: [
          { required: true, message: "請輸入車號", trigger: "blur" },
          { max: 7, message: "需在7字以內", trigger: "blur" },
          { validator: checkNumber, trigger: "blur" }
        ]
      }
    };
  },
  components: {
    ShowItem
  },
  computed: mapGetters({
    list: "getData",
  }),
  methods: {
    // ...mapActions('ui/car/car', ['fetchGetAll']),
    // btnGetall() {
    //   this.fetchGetAll();
    // },
    // resetForm() {
    //   this.ruleForm.inputNumber = null;
    // },
    // 省略 ...mapActions 引入 可以直接寫下列
    btnGetall() {
      console.log("vuex 生命週期 - dispatch 發請求");
      this.$store.dispatch("actionGetAll");
    },
    btnGetSelect() {
      this.$store.dispatch("actionGetSelect", this.ruleForm.inputNumber);
    }, 
  },
};
</script>

<style>
.el-input {
  width: 180px;
}
</style>

