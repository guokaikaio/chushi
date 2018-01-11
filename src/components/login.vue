<template>
  <div class="login">
      <h2>hi,{{message}}</h2>
  </div>
</template>
<script>
export default {
  name: 'login',
  data: function () {
      return {
          message:'login please'
      }
  }
}
</script>
<style scoped>
.login{
    color: red;

}
</style>
