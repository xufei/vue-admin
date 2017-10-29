<template>
<nav>
  <header>
    <i></i>
    <span>Xu Fei</span>
    <a></a>
  </header>

  <ul>
    <li><span>Navigation</span></li>
    <li v-for="menu in menus" @click="switchMenu(menu)">
      <router-link :to="menu.state" >{{menu.name}}</router-link>
    </li>
  </ul>
</nav>
</template>

<script>
import DashboardIcon from './icons/dashboard'

export default {
  data () {
    return {
      menus: [
        {name: 'Dashboard', state: 'dashboard'},
        {name: 'Employees', state: 'employee'},
        {name: 'Roadmap', state: 'dashboard'},
        {name: 'Milestones', state: 'dashboard'},
        {name: 'Tickets', state: 'dashboard'},
        {name: 'GitHub', state: 'dashboard'},
        {name: 'FAQ', state: 'dashboard'}
      ],
      activeMenu: null
    }
  },
  components: {
    DashboardIcon
  },
  methods: {
    switchMenu (menu) {
      this.activeMenu = menu
    }
  },
  ready () {
    this.activeMenu = this.menus[0]
  }
}
</script>

<style>
nav {
    width: 250px;
    background: #3b4854;
}

nav header {
    position: relative;
    height: 80px;
    padding: 20px 0 0 15px;
    font-size: 16px;
    color: #fff;
    border-bottom: 1px solid #465563;
    background: #303b45;
}

nav header i {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 36px;
    margin: 0 10px 0 0;
    vertical-align: middle;
    border: 1px solid #fff;
}

nav header i:before {
    content: '\f007';
    font: normal 20px FontAwesome;
    top: 7px;
    left: 9px;
}

nav header i:before {
    content: '\f08b';
    font: normal 20px FontAwesome;
    top: 28px;
    right: 15px;
}

nav ul span {
    display: block;
    padding: 15px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    border-bottom: 1px solid #465563;
}

nav ul a {
    position: relative;
    display: block;
    padding: 15px 15px 17px 50px;
    color: #fff;
    border-bottom: 1px solid #465563;
}

nav ul a:hover,
nav ul a.active {
    background: #576674;
}


nav ul a:before {
    content: '\f08b';
    font: normal 16px FontAwesome;
    left: 20px;
}
</style>
