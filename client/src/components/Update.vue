<template lang="pug">
div
  h4 修改資料
  el-form(:model="ruleForm" :rules="rules" ref="ruleForm")
    el-form-item(prop="inputNumber")
      el-input(v-model="ruleForm.inputNumber" placeholder="請輸入車號" clearable)
    el-form-item  
      el-select(v-model="value" placeholder="請選擇")
        el-option(
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value")
    el-form-item(prop="inputData")
      el-input(v-model="ruleForm.inputData" placeholder="請輸入新資料" clearable)
    el-form-item
      el-button(@click="btnUpdate('ruleForm')" type="primary") 修改
      el-button(@click="resetForm('ruleForm')") 重置
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    listData: Array,
  },
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
        inputNumber: '',
        inputData: '',
      },
      rules: {
        inputNumber: [
          { required: true, message: "請輸入車號", trigger: "blur" },
          { max: 7, message: "需在7字以內", trigger: "blur" },
          { validator: checkNumber, trigger: "blur" }
        ],
        inputData: [
          { required: true, message: "請輸入新資料", trigger: "blur" },
          { max: 10, message: "需在10字以內", trigger: "blur" }
        ]},
      options: [{
        value: "brand",
        label: "廠牌"
      },{
        value: "number",
        label: "車號"
      },{
        value: "type",
        label: "車種"
      },{
        value: "date",
        label: "日期"
      },{
        value: "name",
        label: "姓名"
      },{
        value: "phone",
        label: "電話"
      }],
      value: "type"
    };
  },
  computed: mapGetters({
    list: "getData"
  }),
  methods: {
    btnUpdate(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          this.$store.dispatch("actionUpdate", {
            Number: this.ruleForm.inputNumber,
            Value: this.value,
            NewData: this.ruleForm.inputData
          });
        } else {
          alert('error submit!!');
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
.el-input {
  width: 180px;
}
</style>

