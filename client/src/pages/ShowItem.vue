<template lang="pug">
div
  h3 資料列表
    br
    br
    el-table(:data="dataList"  style="width: 100%")
      el-table-column(prop="Number" label="車號" width="180")
      el-table-column(prop="Brand" label="廠牌" width="180")
      el-table-column(prop="Type" label="車種" width="180")
      el-table-column(prop="Date" label="售出日期" width="180")
      el-table-column(prop="Name" label="姓名" width="180")
      el-table-column(prop="Phone" label="電話" width="180")
      el-table-column(label="操作" width="180")
        template(slot-scope="scope")
          el-button(@click="handleShowPage(scope.row)") Update  
</template>

<script>
import Update from '@/components/Update';
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      pageShow: false,
      newData: null,
    };
  },
  components: {
    Update,
  },
  computed: {
    ...mapGetters({
      dataList: 'getData',
    }),
  },
  methods: {
    handleShowPage(val) {
      this.pageShow = true;
      this.newData = [{
        getRowBrand: val.Brand,
        getRowNumber: val.Number,
        getRowType: val.Type,
        getRowDate: val.Date,
        getRowName: val.Name,
        getRowPhone: val.Phone,
      }];
    },
  },
  mounted() {
    this.$store.dispatch("actionGetAll");
  }, 
};
</script>

<style >
.routerStyle {
  text-decoration: none;
}
</style>
