<template lang="pug">
div 
  el-tabs(v-model="activeName" @tab-click="handleClick")
    el-tab-pane(label="查詢車輛" name="first") 查詢車輛
      Select
    el-tab-pane(label="新增車輛" name="second") 新增車輛
      Create
    el-tab-pane(label="修改車輛" name="third") 修改內容
      Update
    el-tab-pane(label="刪除車輛" name="fourth") 刪除車輛
      Delete
</template>

<script>
import Select from "../pages/Select.vue";
import Create from "../pages/Create.vue";
import Update from "../pages/Update.vue";
import Delete from "../pages/Delete.vue";

export default {
  data() {
    return {
      activeName: "first"
    };
  },
  components: {
    Select,
    Create,
    Update,
    Delete
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
