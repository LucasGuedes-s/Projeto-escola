<template>

  <div class="login-container">
    <form class="login-form" @submit.prevent="getlogin">
      <h2>Login</h2>
      <div class="form-group">
        <label for="username">Usuário/E-mail:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit" click="getlogin">Login</button>
      <p class="mb-5 pb-lg-2">Não tem acesso? <a href="/cadastro" >Registre-se</a></p>
    </form>
    <img src="@/assets/logo-img.png" alt="Login Image">
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';

export default {
  name: 'HomeView',
  data(){
    return{
      username: "",
      password: ""
    }
  },
  methods:{
    async Cadastro(){
      axios.post('http://localhost:3333/CadastrarProfessor',
      {
        usuario: 20191214010009,
        senha: 'lucas123'
      },{   
      }).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.error(error);
        });
    },
    async getlogin(){
      axios.post('http://localhost:3333/LoginProfessor', {   
          user:{
              login: this.username,
              senha: this.password,
          }
      }).then(response => {
            console.log(response)
            //console.log(response.headers);
            console.log(response.headers.authorization);

            this.store.token = response.headers.authorization // atualiza o token no estado do store
            //Cookie.remove('token')

            router.push('/dashboard')
        }).catch(error => {
            console.error(error);
        });
    }
  }
}
</script>
<style>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
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
  :hover button{
    background-color: #38005a;
  }

  img {
    max-width: 50%;
    height: auto;
    margin-right: 20px;
  }

  @media screen and (max-width: 600px) {
    img {
      display: none;
    }
  }
</style>
