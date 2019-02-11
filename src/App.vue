<template>
  <div id="app">
    <div id="nav">
        <nav class="navbar navbar-default navbar-static-top m-b-0">
            <div class="navbar-header">
              <div class="top-left-part">
                    <a class="logo" href="">
                        <b>
                            <!-- <img src="/src/assets/logo.png" alt="home"> -->
                        </b>
                        <span>
                            <!-- <img src="../plugins/images/logo-text.png" alt="homepage" class="dark-logo"> -->
                        </span>
                    </a>
              </div>
              <ul class="nav navbar-top-links navbar-left hidden-xs">
                    <li>
                        <!-- <a href="javascript:void(0)" class="sidebartoggler font-20 waves-effect waves-light"><i class="icon-arrow-left-circle"></i></a> -->
                    </li>
                    <li>
                        <form role="search" class="app-search hidden-xs">
                            <i class="icon-magnifier"></i>
                            <input type="text" placeholder="Search..." class="form-control">
                        </form>
                    </li>
              </ul>              
            </div>
        </nav>            
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
