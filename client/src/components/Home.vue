<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="查詢車輛" name="first">查詢車輛
        <Select/>
    </el-tab-pane>
    <el-tab-pane label="新增車輛" name="second">新增車輛
        <Create/>
    </el-tab-pane>
    <el-tab-pane label="修改車輛" name="third">修改內容
        <Update/>
    </el-tab-pane>
    <el-tab-pane label="刪除車輛" name="fourth">刪除車輛
        <Delete/>
    </el-tab-pane><br><br>
  </el-tabs>
</template>

<script>
import Select from '../components/Select.vue'  
import Create from '../components/Create.vue'
import Update from '../components/Update.vue'
import Delete from '../components/Delete.vue'

export default {
    data() {
        return {
            activeName: 'first'
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
