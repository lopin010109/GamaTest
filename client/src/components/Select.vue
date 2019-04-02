<template>
<div>
    <br>
    <h4>查詢資料</h4>
    <el-form rules="rules">
        <el-form-item prop="number">
            <el-input v-model="inputNumber" placeholder="請輸入車號" type="text" @keyup.enter="btnGetSelect" clearable></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="btnGetSelect">確認查詢</el-button>
        </el-form-item>
    </el-form>
    <br>
    <h4>全部查詢</h4>
    <el-button @click="btnGetall">查詢全部</el-button>
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
            inputNumber: '',
            rules: {
                number: [
                    {require: true, message: '请输入活动名称', trigger: 'blur'},
                    {min: 3, max: 5, message: '打錯拉！', trigger: 'blur'}
                ]
            }
        };
    },
    components: {
        ShowItem
    },
    computed: mapGetters({
        list: 'getData'
    }),
    methods: {
        btnGetall() {
            this.$store.dispatch('actionGetAll')
        },
        btnGetSelect() {
            console.log(this.inputNumber);
            this.$store.dispatch('actionGetSelect', this.inputNumber)
        }
    }
};
</script>

<style>
.el-input {
    width: 180px;
}
</style>

