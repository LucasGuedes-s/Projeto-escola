<template>
  <div class="login-container">
    <form class="login-form">
      <h2>Login</h2>
      <div class="form-group">
        <label for="username">Usuário/E-mail:</label>
        <input type="text" id="username" name="username">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
      </div>
      <button type="submit">Login</button>
    </form>
    <img src="@/assets/login-img.jpg" alt="Login Image">
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
<style>
  .login-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .login-form {
    width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
  }

  .login-form h2 {
    margin-top: 0;
  }

  .form-group {
    margin-bottom: 10px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
  }

  .form-group input {
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #5d3476;
    color: #fff;
    cursor: pointer;
  }

  img {
    max-width: 50%;
    height: auto;
    margin-left: 20px;
  }

</style>
