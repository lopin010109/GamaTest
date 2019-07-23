<template lang="pug">
div
  h4 刪除資料
  el-form(:model="ruleForm" :rules="rules" ref="ruleForm")
    el-form-item(prop="inputNumber")
      el-input(v-model="ruleForm.inputNumber" placeholder="請輸入車號" style="" clearable)
    el-form-item
      el-button(@click="btnDelete" type="primary") 確認刪除
      el-button(@click="resetForm('ruleForm')") 重置
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
    list: "getData"
  }),
  methods: {
    btnDelete() {
      this.$store.dispatch("actionDelete", this.ruleForm.inputNumber);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.el-input {
  width: 180px;
}
</style>
