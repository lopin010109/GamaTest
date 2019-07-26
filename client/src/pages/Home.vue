<template lang="pug">
div 
  h2 Home Pages
  router-link(to='/showItem')
  router-link.routerStyle.el-button(to='/create') Create
  router-view
</template>

<script>
import ShowItem from './ShowItem';

export default {
  components: {
    ShowItem,
  },
};
</script>
