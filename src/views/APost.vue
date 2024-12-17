<template>
  <div class="A Post">
    <div id="form">
      <h3>A Post</h3>
      <label for="body"></label>
      <input name="body" type="text" id="body" required v-model="post.body" />
      <input name="date" type="text" id="date" required v-model="post.date" />
    </div>
    <div class="container">
      <button @click="updatePost" class="updatePost">Update Post</button>
      <button @click="deletePost" class="deletePost">Delete Post</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "APost",
  data() {
    return {
      post: {
          id: "",
          body: "hmmm",
          date: ""
        },
    };
  }
}
  
</script>

<style scoped>
#form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(167, 154, 154);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: rgb(8, 110, 110);
}
label {
  color: rgb(8, 110, 110);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: blue;
}
button {
  background: rgb(8, 110, 110);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.container {
  display: flex;
  justify-content: center;
}
</style>