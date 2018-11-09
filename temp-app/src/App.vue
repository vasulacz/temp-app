<template>
  <div id="app" :class="{'collapsed' : collapsed}">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <test msg= "Hello msg"></test> -->
    <!-- <users></users> -->
    <sidebar-menu :menu="menu" :collapsed="collapsed" @collapse="onCollapse" />
    <router-view/>
  </div>
</template>

<script>
import Test from './components/test'
import Users from './components/users'

export default {
  name: 'App',
  components: {
    Test,
    Users
  },
  data() {
    return {
      menu: [
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fa fa-user'
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'fa fa-chart-area'
        },
        {
          href: '/tables',
          title: 'Tables',
          icon: 'fa fa-table'
        },
        {
          href: '/users',
          title: 'Users',
          icon: 'fa fa-table'
        },
        {
          href: '/test',
          title: 'Only Test component',
          icon: 'fa fa-table'
        },
      ],
      collapsed: false
    }
  },
  methods: {
    onCollapse(val) {
      console.log(`collapsed ${val}`)
      this.collapsed = val
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-left: 350px;
}
#app.collapsed {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-left: 50px;
}
</style>
