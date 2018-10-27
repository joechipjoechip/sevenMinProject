<template>
  <div id="app">
    <div id="nav">
      <p>ici c'est App.vue avec le div#app à la bien</p>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/bonjour">Bonjour</router-link> |
      <router-link to="/go">Go</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

  // const navArr = [
  //   {
  //     name: 'Home',
  //     route: '/'
  //   },
  //   {
  //     name: 'About',
  //     route: '/about'
  //   }
  // ];

  // const makeNav = arr => {
  //   let nav = document.getElementById('nav');

  //   arr.forEach(element => {
  //     const link = document.createElement('router-link');
  //     link.setAttribute('to', element.route);
  //     link.innerHTML = element.name;
  //     nav.appendChild(link);
  //   });


  // };

  // makeNav(navArr);

</script>

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
