<template>
  <div>

    <nav>
      <!-- <router-link to="/">Posts</router-link> | -->
      <!-- <router-link to="/addpost">Add a Post</router-link> | -->
      <!-- <router-link to="/signup">SignUp</router-link>| -->
      <router-link to="/login">Home</router-link>
      <router-link to="/contacts">Contacts</router-link>
    </nav>
    <router-view />
  
   
  </div>
</template>

<script>
export default {
  name: "App",
   methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  }, 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex; /* Flexbox > align links horizontally */
  gap: 20px; /* space between links */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
button{
  margin-top: 30px;
  border-radius: 36px;
  background: #FEE996;
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  display: block;
  padding: 10px 16px;
  letter-spacing: 2px;
}
.container {
  display: flex;
  justify-content: center;
}
</style>
