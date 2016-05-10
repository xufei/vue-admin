<template>
  <side-nav></side-nav>
  <router-view></router-view>
  <hint-container></hint-container>
</template>

<script>
import SideNav from './components/side-nav'
import HintContainer from './components/hint-container'

export default {
  components: {
    SideNav,
    HintContainer
  }
}
</script>

<style>
</style>
