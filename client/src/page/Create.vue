<template lang="pug">
div
  h4 新增資料
    el-form(:model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px")
      el-form-item(label="廠牌" prop="inputBrand")
        el-input(v-model="ruleForm.inputBrand" placeholder="請輸入廠牌" style="" clearable)
      el-form-item(label="車號" prop="inputNumber")
        el-input(v-model="ruleForm.inputNumber" placeholder="請輸入車號" style="" clearable)
      el-form-item(label="車種" prop="inputType")
        el-input(v-model="ruleForm.inputType" placeholder="請輸入車種" style="" clearable)
      el-form-item(label="售出日期" prop="inputDate")
        el-input(v-model="ruleForm.inputDate" placeholder="請輸入售出日期" style="" clearable)
      el-form-item(label="姓名" prop="inputName")
        el-input(v-model="ruleForm.inputName" placeholder="請輸入姓名" style="" clearable)
      el-form-item(label="電話" prop="inputPhone")
        el-input(v-model="ruleForm.inputPhone" placeholder="請輸入電話" style="" clearable)
      el-form-item
        el-button(@click="btnCreate") 確認新增
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
    // 車種檢查
    let patternType = new RegExp("[\u4e00-\u9fa5]");
    const checkType = (rule, value, callback) => {
      if (patternType.test(value)) {
        callback();
      } else {
        callback(new Error("須為中文字"));
      }
    };
    // 日期檢查
    let patternDate = new RegExp(
      "[0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])"
    );
    const checkDate = (rule, value, callback) => {
      if (patternDate.test(value)) {
        callback();
      } else {
        callback(new Error("日期格式錯誤"));
      }
    };
    // 電話檢查
    let patternPhone = new RegExp("09[0-9]{8}");
    const checkPhone = (rule, value, callback) => {
      if (patternPhone.test(value)) {
        callback();
      } else {
        callback(new Error("電話格式錯誤"));
      }
    };
    return {
      ruleForm: {
        inputBrand: "",
        inputNumber: "",
        inputType: "",
        inputDate: "",
        inputName: "",
        inputPhone: ""
      },
      rules: {
        inputBrand: [
          { required: true, message: "請輸入廠牌名稱", trigger: "blur" },
          { min: 3, max: 10, message: "3-10字以內", trigger: "blur" }
        ],
        inputNumber: [
          { required: true, message: "請輸入車號", trigger: "blur" },
          { max: 7, message: "需在7字以內", trigger: "blur" },
          { validator: checkNumber, trigger: "blur" }
        ],
        inputType: [
          { required: true, message: "請輸入車種", trigger: "blur" },
          { max: 5, message: "需在5字以內", trigger: "blur" },
          { validator: checkType, trigger: "blur" }
        ],
        inputDate: [
          { required: true, message: "請輸入售出日期", trigger: "blur" },
          { max: 8, message: "需在8字以內", trigger: "blur" },
          { validator: checkDate, trigger: "blur" }
        ],
        inputName: [
          { required: true, message: "請輸入車主姓名", trigger: "blur" },
          { max: 7, message: "需在7字以內", trigger: "blur" }
        ],
        inputPhone: [
          { required: true, message: "請輸入車主電話", trigger: "blur" },
          { max: 10, message: "需在10字以內", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" }
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
    btnCreate() {
      this.$store.dispatch("actionCreate", {
        Brand: this.ruleForm.inputBrand,
        Number: this.ruleForm.inputNumber,
        Type: this.ruleForm.inputType,
        Date: this.ruleForm.inputDate,
        Name: this.ruleForm.inputName,
        Phone: this.ruleForm.inputPhone
      });
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
