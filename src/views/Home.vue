<template>
  <div class="home">
    <!-- <link href="bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"> -->
    <!-- ===== Plugin CSS ===== -->
    <!-- ===== Animation CSS ===== -->
    <link href="/css/animate.css" rel="stylesheet">
    <!-- ===== Custom CSS ===== -->
    <link href="/css/style.css" rel="stylesheet">
    <!-- ===== Color CSS ===== -->
    <link href="/css/colors/default.css" id="theme" rel="stylesheet">     
  </div>
</template>

<script>
// @ is an alias to /src
import ComponentsHome from '@/components/ComponentsHome.vue'

export default {
  name: 'home',
  components: {
    ComponentsHome
  }
}
</script>
