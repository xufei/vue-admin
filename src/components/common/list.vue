<template>
  <ul>
    <li v-for="item in data">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>

<style scoped>
li {
  position: relative;
  margin: 0 0 10px;
  padding: 0 0 0 25px;
}

li:before {
  content: '\f00c';
  font: normal 16px FontAwesome;
  top: 0;
  left: 0;
  color: #5b5;
}
</style>