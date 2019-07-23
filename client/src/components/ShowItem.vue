<template lang="pug">
div.container
  h2 資料列表
    div(v-if="list === '查無資料！'") 查無資料！
    div(v-else-if="list === '查無此車號！'") 查無此車號！
    div(v-else-if="list === '此車號已經存在！'") 此車號已經存在！
    div(v-else-if="list === '填上缺少資料！'") 填上缺少資料！
    div(v-else-if="list === '電話格式不符合！'") 電話格式不符合！
    div(v-else-if="list === '日期格式不符合！'") 日期格式不符合！
    div(v-else-if="list === '請輸入中文！'") 請輸入中文！
    div(v-else-if="list === '車號格式不對！'") 車號格式不對！
    div(v-else-if="list === '新車號已經擁有！'") 新車號已經擁有！
    div(v-else-if="list === '未填入新資料！'") 未填入新資料！
    el-table(v-else :data="dataList"  style="width: 100%")
      el-table-column(prop="Number" label="車號" width="180")
      el-table-column(prop="Brand" label="廠牌" width="180")
      el-table-column(prop="Type" label="車種" width="180")
      el-table-column(prop="Date" label="售出日期" width="180")
      el-table-column(prop="Name" label="姓名" width="180")
      el-table-column(prop="Phone" label="電話" width="180")
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      // 初始化一個參數來裝監聽後的list
      dataList: []
    };
  },
  props: {
    list: Array
  },
  // watch 監聽 list 改變
  watch: {
    list(val) {
      this.dataList = val;
    }
  }
};
</script>


