<template>
  <div>
    <h1>This is an about page</h1>
    <div class="sidebar-menu">
      <SidebarNav/>
    </div>
  </div>
</template>
<script>
import SidebarNav from '@/components/Sidebar.vue';

export default {
  name: 'HomeView',
  components:{
    SidebarNav
  }

}

</script>

