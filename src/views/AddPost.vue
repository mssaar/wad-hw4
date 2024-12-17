<template>
  <div class="form">
    <h3>Add a Post</h3>
    <label for="body">Body </label>
    <input name="body" type="text" id="body" placeholder="body" required v-model="post.body" />
    <label for="date"></label>
    <input name="date" type="text" id="date" required v-model="post.date" />
    <div v-if="errMes">{{errMes}} </div>
    <button @click="addPost" class="addPost">Add Post</button>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        body: "",
        date: this.getCurrentDateTime()
      },
    };
  },
  methods: {
    addPost() {
      if (this.body == "") {
        console.log("Body cannot be empty.");
        this.errMes = "Body cannot be empty."
        return; // Stop the function if validation fails
      }
      var data = {
        body: this.post.body,
        date: this.post.date
      };
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response.data);
        this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
    },
        // Method to get the current date in "YYYY-MM-DD" format and also Time
    getCurrentDateTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0"); // Add leading zero
      const day = String(now.getDate()).padStart(2, "0"); // Add leading zero
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
  },
};
</script>

<style scoped>
.form {
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
  align-items: center;
  text-align: center;
}
</style>