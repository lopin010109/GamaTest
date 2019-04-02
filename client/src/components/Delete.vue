<template>
<div>
    <br>
    <h4>刪除資料</h4>
    <el-form>
        <el-form-item>
            <el-input v-model="inputNumber" placeholder="请输入車號" style=""></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="btnDelete">確認刪除</el-button>
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
            inputNumber: ''
        };
    },
    components:{
        ShowItem
    },
    computed: mapGetters({
        list: 'getData'
    }),
    methods: {
        btnDelete() {
            this.$store.dispatch('actionDelete', this.inputNumber)
        }
    }
};
</script>

<style>
.el-input {
    width: 180px;
}

</style>
