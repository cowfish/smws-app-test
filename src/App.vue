<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" class="navbar-brand">SMWS Distilleries</a>
      <div class="navbar-nav mr-auto">
          <li class="nav-item"><a class="nav-link" href="/whiskies">Whiskies</a></li>
          <li class="nav-item"><a class="nav-link" href="/distilleries">Distilleries</a></li>
      </div>
    </nav>
    
    <router-view />
  </div>	
</template>

<script>
  export default {
  name: 'app'
  }
</script>
