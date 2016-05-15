<template>
  <ul>
    <li>{{employee.name}}</li>
    <li>{{employee.gender}}</li>
    <li>{{employee.age}}</li>
  </ul>
</tempate>

<script>
export default {
  data () {
    return {
      employee: {
        name: 'aaa',
        gender: 1,
        age: 5
      }
    }
  }
}
</script>