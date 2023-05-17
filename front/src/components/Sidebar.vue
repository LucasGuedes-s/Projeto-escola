<template>
  <div>
    <div class="list">
      <div :class="{ 'sidebar': true, 'minimized': isMinimized }">
        <div class="menu">

          <div class="item" @click="toggleSidebar">
            <router-link to="/dashboardProfessor">
              <img class="icon" src="@/assets/dashboard_prof.svg"/><p>Dashboard</p>
            </router-link>
          </div>

          <div class="item" @click="toggleSidebar">
            <router-link to="/turmas">
              <img class="icon" src="@/assets/redações.svg"/><p>Turmas</p>
            </router-link>
          </div> 

          <div class="item" @click="toggleSidebar">
            <router-link to="/">
              <img class="icon" src="@/assets/logo-img.png"/><p>Algo</p>
            </router-link>
          </div>

        </div>
        <div class="arrasta" @click="toggleSidebar">
          <img src="@/assets/seta.svg"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar-menu',
  data() {
    return {
      isMinimized: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isMinimized = !this.isMinimized;
    },
  },
};
</script>

<style scoped>
  .list{
    align-items: center;
  }
  .sidebar {
    box-shadow: 3px 3px 3px grey;
    text-align: center;
    font-family:'Courier New', Courier, monospace;
    font-size: medium;
    width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: #5d3476;
    transition: left 0.3s;
  }
  .minimized {
    width: 70px;
  }
  .minimized .item p{
    display: none;
  }
  .minimized .menu .item img{
    width: 50px;
    margin-left: 15px;
  }
  .menu .item a{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #ffffff;
    font-size:16px;
    text-decoration: none;
    display: flex; /* adiciona display flex */
    align-items: center; /* centraliza verticalmente */
    line-height: 70px;
  }
  .menu .item{
    margin-top: 50px;
  }
  .menu .item img{
    width: 50px;
    margin-left: 20px
  }
  .menu .item a:hover{
    background: #750075;
    transition: o.3s ease;
  }
  .arrasta img{
    margin-left: 20px;
    margin-top: 70px;
    width: 50px;
  } 
</style>
