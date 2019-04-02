<template>
    <div>
    <br>
    <h4>修改資料</h4>
    <el-form>
        <el-form-item>
            <el-input v-model="inputNumber" placeholder="請輸入車號" ></el-input>
            </el-form-item>
            <el-form-item>
                <el-select v-model="value" placeholder="請選擇">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    ></el-option>
                    </el-select>
            </el-form-item>
            <el-form-item>
                <el-input v-model="inputData" placeholder="請輸入新資料" type="text"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="btnUpdate">確認修改</el-button>
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
            inputNumber: '',
            inputData:'',
            options: [
                {
                    value: "Brand",
                    label: "車牌"
                }, {
                    value: "Number",
                    label: "車號"
                }, {
                    value: "Type",
                    label: "車種"
                }, {
                    value: "Date",
                    label: "日期"
                }, {
                    value: "Name",
                    label: "姓名"
                }, {
                    value: "Phone",
                    label: "電話"
                }
            ],
            value: ''
        };
    },
    components: {
        ShowItem
    },
    computed: mapGetters({
        list: 'getData'
    }),
    methods: {
        btnUpdate() {
            this.$store.dispatch('actionUpdate', {
                Number: this.inputNumber,
                Value: this.value,
                NewData: this.inputData
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

