<template>
<div class="container">
    <h2>資料列表</h2>
    <hr>
    <!-- 測試Git增加數據 -->
    <!-- <h4 v-if="list === '查無此車號！'">查無此車號！</h4>
    <h4 v-else-if="list === '填上缺少資料！'">填上缺少資料！</h4>
    <h4 v-else-if="list === '電話格式不符合！'">電話格式不符合！</h4>
    <h4 v-else-if="list === '日期格式不符合！'">日期格式不符合！</h4>
    <h4 v-else-if="list === '此車號已經存在！'">此車號已經存在！</h4>
    <h4 v-else-if="list === '查無資料！'">查無資料！</h4> -->
    <el-table :data="list" style="width: 100%">
        <el-table-column prop="Number" label="車號" width="180"></el-table-column>
        <el-table-column prop="Brand" label="廠牌" width="180"></el-table-column>
        <el-table-column prop="Type" label="車種" width="180" v-if="disabled"></el-table-column>
        <el-table-column prop="Date" label="售出日期" width="180"></el-table-column>
        <el-table-column prop="Name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="Phone" label="電話" width="180"></el-table-column>
    </el-table>
</div>
    
</template>

<script>
export default {
    props:{
        list: Array     
    },
    data() {
        return {
            dataList:[],
            disabled,
        };
    },
    watch: {
        list: {
            handler(value) {
                this.dataList = value;
                const match = this.dataList.every((item) => {
                    return item.Type === '';
                });
                console.log('match', match);
                if (match) {
                    this.disabled = this.disabled;
                } else {
                    this.disabled = !this.disabled;
                }
            }
        }
    },
};
</script>

