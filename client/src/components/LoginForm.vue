<template>
  <body>
    <div class="wrapper" :class="{ 'flipped': !isLogin }">
      <div :class="{ 'content': !isLogin }">
        <h1>{{ isLogin ? 'Login' : 'Register' }}</h1>
        <div class="input-box" v-if="isLogin">
          <input type="text" placeholder="Username" v-model="state.user.username" required>
        </div>
        <div class="input-box" v-else="!isLogin">
          <input type="text" placeholder="Username" v-model="state.useRegister.username" required>
          <p class="field-error">{{ state.errors.username }}</p>
        </div>
        <div class="input-box" v-show="!isLogin">
          <input type="text" placeholder="Email" v-model="state.useRegister.email" required>
          <p class="field-error">{{ state.errors.email }}</p>
        </div>
        <div class="input-box" v-if="isLogin">
          <input type="password" placeholder="Password" v-model="state.user.password" required>
        </div>
        <div class="input-box" v-else="!isLogin">
          <input type="password" placeholder="Password" v-model="state.useRegister.password" required>
          <p class="field-error">{{ state.errors.password }}</p>
        </div>
        <div class="input-box" v-show="!isLogin">
          <input type="password" placeholder="Repeat Password" v-model="state.useRegister.password2" required>
        </div>
        <button v-if="isLogin" class="btn" @click="login" @keydown.enter="login">Login</button>
        <button v-else="!isLogin" @click="register" class="btn">Register</button>
        <div class="register-link">
          <p>
            {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
            <a @click="isLogin = !isLogin" href="#">
              {{ isLogin ? 'Register Here' : 'Login Here' }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </body>
</template>


<script>
import { getCurrentInstance, reactive, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import errorList from './errorList.vue';

export default {
  components: {
    errorList: errorList,
  },
  props: {
    isLogin: Boolean,
  },
  emits: {
    sendLogin: Object,
    sendRegister: Object,
  },
  setup(props) {
    const { emit } = getCurrentInstance();
    const router = useRouter();
    const isLogin = ref(props.isLogin);
    const state = reactive({
      user: {
        username: '',
        password: '',
      },
      useRegister: {
        username: '',
        email: '',
        password: '',
        password2: '',
      },
      errors: {
        username: '',
        email: '',
        password: '',
      },
    });

    const login = () => {
      const emit_data = state.user;
      emit('sendLogin', emit_data);
    };

    const register = () => {
      validateUsername();
      validateEmail();
      validatePassword();

      if (!hasErrors()) {
        const emit_data = state.useRegister;
        emit('sendRegister', emit_data);
      }
    };

    const validateUsername = () => {
      const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
      if (!usernameRegex.test(state.useRegister.username)) {
        state.errors.username = 'The username format is invalid';
      } else {
        state.errors.username = '';
      }
    };

    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(state.useRegister.email)) {
        state.errors.email = 'The email format is invalid';
      } else {
        state.errors.email = '';
      }
    };

    const validatePassword = () => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (!passwordRegex.test(state.useRegister.password)) {
        state.errors.password = 'The password format is invalid';
      } else if (state.useRegister.password != state.useRegister.password2) {
        state.errors.password = "The password doesn't match";
      } else {
        state.errors.password = '';
      }
    };

    const hasErrors = () => {
      return Object.values(state.errors).some(error => error !== '');
    };


    return { state, login, register, isLogin, hasErrors };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;

}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url(https://i.blogs.es/a1940b/brooke-lark-4j059aga5s4-unsplash/1366_2000.jpg);
  background-size: cover;
  background-position: center;
}

.wrapper {
  position: relative;
  perspective: 1000px;
  transition: transform 0.5s ease;

  width: 420px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;
  position: relative;

}

.content {
  /* transform: rotateZ(180deg);  */
  transform: rotate3d(0, 1, 0, 180deg);
}

.flipped {
  /* transform: rotateZ(180deg);  */
  transform: rotate3d(0, 1, 0, 180deg);
}

.wrapper h1 {
  font-size: 36px;
  text-align: center;
}

.wrapper .input-box {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px 0;
}

.input-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 40px;
  font-size: 16px;
  color: #fff;
  padding: 20px 45px 20px 20px;
}

.input-box input::placeholder {
  color: #fff;
}

.input-box i {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;

}

.wrapper .remember-forgot {
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;
}


.wrapper .btn {
  width: 100%;
  height: 45px;
  border-radius: 40px;
  border: none;
  outline: none;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
}

.wrapper .register-link {
  text-align: center;
  font-size: 14.5px;
  margin: 20px 0 15px;
}

.register-link p a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;

}

.register-link p a:hover {
  text-decoration: underline;
}

.field-error {
  color: red;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
}
</style>