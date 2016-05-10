<template>
  <ul>
    <li>no position: absolute</li>
    <li>no float</li>
    <li>no clearfix</li>
    <li>no faux columns</li>
    <li>no javascript</li>
  </ul>
</template>

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