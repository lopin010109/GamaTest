<template>
<div>
    <br>
    <h4>新增資料</h4>
    <el-form label-width="80px">
        <el-form-item label="廠牌">
            <el-input v-model="inputBrand" placeholder="请输入廠牌" type="text"></el-input>
            <span>顯示：{{ inputBrand }}</span>
        </el-form-item >
        <el-form-item label="車號">
            <el-input v-model="inputNumber" placeholder="请输入車號" type="text"></el-input>
        </el-form-item>
        <el-form-item label="車種">
            <el-input v-model="inputType" placeholder="请输入車種" type="text"></el-input>
        </el-form-item>
        <el-form-item label="售出日期"> 
            <el-input v-model="inputDate" placeholder="请输入售出日期" type="text"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
            <el-input v-model="inputName" placeholder="请输入姓名" type="text"></el-input>
        </el-form-item>
        <el-form-item label="電話">
            <el-input v-model="inputPhone" placeholder="请输入電話" type="text"></el-input>
        </el-form-item>
        <el-form-item>
               <el-button @click="btnCreate">確認新增</el-button>
        </el-form-item>
    </el-form>
    <br><br>
    <ShowItem :list="list"/>
</div>
</template>

<script>
import ShowItem from '../components/ShowItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            inputBrand: '',
            inputNumber: '',
            inputType:'',
            inputDate:'',                
            inputName:'',
            inputPhone:'',    
        };
    },
    components: {
        ShowItem
    },
    computed: mapGetters({
        list: 'getData'
    }),
    methods: {
        btnCreate() {
            this.$store.dispatch('actionCreate', { 
                Brand: this.inputBrand,
                Number: this.inputNumber,
                Type: this.inputType,
                Date: this.inputDate,
                Name: this.inputName,
                Phone: this.inputPhone
            });
        }
    }
};
</script>

<style>
.el-input {
    width: 180px;
}
</style>
