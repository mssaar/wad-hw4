<template>
<div class="AllPosts">
    <div class="button"> 
      <button   @click="logOut" class="center">Logout</button>
    </div>
    <div id="post-list">
      <h1>All Posts</h1>
      <div class="container">
      </div>
          <ul>
            <div class="item" v-for="post in posts" :key="post.id">
              <a class= 'singlepost' :href="'/api/posts/' + post.id">
                <span class="body"> <b></b> {{ post.body }} </span> <br />
              </a>
            </div>
          </ul>
  </div>
    <div class="button">
      <button   @click="deleteAll" class="center">Delete all</button>
      <button   @click="addPostMethod" class="center">Add a post</button>
    </div>
</div>
</template>


<script>
import auth from '@/auth';

export default {
  name: "AllPosts",
  data() {
    return {
      posts: [],
      authResult: auth.authenticated()
    };
  },
  methods: {
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
    logOut() {
      fetch(`http://localhost:3000/auth/logout`, {
        method: "GET",
        credentials: 'include'
      })
      .then(response => response.json())
      .then((data) => {
        console.log(data.msg);
        this.$router.push("/login");
      })
      .catch((err) => {
        console.error("error on logout", err);
      });
    },
    deleteAll() {
      // TODO
    },
    addPostMethod(){
      this.$router.push("/addpost")
    }
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.item {
  background: rgb(189, 212, 199);
  margin-bottom: 5px;
  padding: 3px 5px;
  border-radius: 10px;
}
#post-list {
  background: #6e8b97;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 50%;
  border-radius: 20px;
}
#post-list ul {
  padding: 0;
}
#post-list li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}

.button {
  display: flex; /* Use flexbox */
  justify-content: center; /* Centers items horizontally */
  margin: 9px;
  gap: 5px;
}
</style>