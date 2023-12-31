<template>
  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center me-auto me-lg-0">
        <router-link to="/home" class="link">
          <img src="../assets/img/logoletra.png" alt="" />
        </router-link>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <router-link to="/home" class="link">
              <a class="nav-link">Home</a>
            </router-link>
          </li>

          <li>
            <router-link to="/Bookings" class="link">
              <a class="nav-link">Bookings</a>
            </router-link>
          </li>

          <li v-if="!state.isAuth">
            <router-link to="/Login" class="link">
              <a class="nav-link">Register/Login</a>
            </router-link>
          </li>
          <li v-if="state.isAuth">
            <div class="btn-group user-profile">
              <img :src="state.profile.photo" alt=""
                style="border-radius: 50%; width: 50px; height: 50px; margin-top: 8px;">
              <div class="drp-dwn">

                <button type="button" class="btn dropdown-toggle user-btn" data-bs-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false" style="color: #000;">
                  Hello, <b>{{ state.profile.username }}</b>
                </button>
                <div class="dropdown-menu" style="background-color: solid;" :class="{ 'show': isDropdownOpen }">
                  <h6 class="dropdown-header">Your account</h6>
                  <a class="dropdown-item"><router-link to="/Profile" class="link">Profile</router-link></a>
                  <a class="dropdown-item" v-if="state.isAdmin"><router-link to="/Dashboard" class="link">Dashboard
                      Admin</router-link></a>
                  <hr>
                  <a class="dropdown-item" @click="logout()">Logout<i class="fa-solid fa-right-from-bracket"></i></a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <br /><br /><br /><br />
</template>

<script>
import { useStore } from "vuex";
import Constant from "../Constant";
import { computed, reactive } from "vue";

export default {
  setup() {
    const store = useStore();
    const state = reactive({
      profile: computed(() => store.getters['user/GetProfile']),
      isAdmin: computed(() => store.getters["user/GetIsAdmin"]),
      isAuth: computed(() => store.getters['user/GetIsAuth']),
    });
    const logout = () => {
      store.dispatch(`user/${Constant.LOGOUT}`);
    };

    return {
      state,
      logout,
    };
  },
};
</script>

<style lang="scss">
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
.header {
  background: #fff;
  transition: all 0.5s;
  z-index: 997;
  height: 90px;
  border-bottom: 1px solid #fff;
}

@media (max-width: 575px) {
  .header {
    height: 70px;
  }
}

.header.sticked {
  border-color: #fff;
  border-color: #eee;
}

.header .logo img {
  max-height: 40px;
  margin-right: 6px;
}

.header .logo h1 {
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin: 0;
  font-family: var(--font-secondary);
}

.header .logo h1 span {
  color: var(--color-primary);
}

.header .btn-book-a-table,
.header .btn-book-a-table:focus {
  font-size: 14px;
  color: #fff;
  background: var(--color-primary);
  padding: 8px 20px;
  margin-left: 30px;
  border-radius: 50px;
  transition: 0.3s;
}

.header .btn-book-a-table:hover,
.header .btn-book-a-table:focus:hover {
  color: #fff;
  background: rgba(206, 18, 18, 0.8);
}

section {
  scroll-margin-top: 90px;
}

/*--------------------------------------------------------------
# Desktop Navigation
--------------------------------------------------------------*/
@media (min-width: 1280px) {
  .navbar {
    padding: 0;
  }

  .navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navbar li {
    position: relative;
  }

  .navbar>ul>li {
    white-space: nowrap;
    padding: 10px 0 10px 28px;
  }

  .navbar a,
  .navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3px;
    font-family: var(--font-secondary);
    font-size: 16px;
    font-weight: 600;
    color: #050505;
    white-space: nowrap;
    transition: 0.3s;
    position: relative;
  }

  .navbar a i,
  .navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
  }

  .navbar>ul>li>a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -6px;
    left: 0;
    background-color: var(--color-primary);
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
  }

  .navbar a:hover:before,
  .navbar li:hover>a:before,
  .navbar .active:before {
    visibility: visible;
    width: 100%;
  }

  .navbar a:hover,
  .navbar .active,
  .navbar .active:focus,
  .navbar li:hover>a {
    color: #000;
  }

  .navbar .dropdown ul {
    display: block;
    position: absolute;
    left: 28px;
    top: calc(100% + 30px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
    border-radius: 4px;
  }

  .navbar .dropdown ul li {
    min-width: 200px;
  }

  .navbar .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
    font-weight: 600;
  }

  .navbar .dropdown ul a i {
    font-size: 12px;
  }

  .navbar .dropdown ul a:hover,
  .navbar .dropdown ul .active:hover,
  .navbar .dropdown ul li:hover>a {
    color: var(--color-primary);
  }

  .navbar .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .navbar .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
  }

  .navbar .dropdown .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: 100%;
    visibility: visible;
  }
}

@media (min-width: 1280px) and (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }

  .navbar .dropdown .dropdown:hover>ul {
    left: -100%;
  }
}

@media (min-width: 1280px) {

  .mobile-nav-show,
  .mobile-nav-hide {
    display: none;
  }
}

body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}

header {
  background-color: #000;
  color: #fff;
  padding: 15px 20px;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header a {
  text-decoration: none;
  color: #363434;
  padding: 8px 12px;
  display: inline-block;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

header a:hover {
  background-color: #ffffff;
  color: #f10d05;
}

.navbar-toggler {
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 1.5rem;
}

.navbar-toggler:focus {
  outline: none;
}

.navbar-toggler-icon {
  background-color: #fff;
  height: 2px;
  width: 20px;
}

.navbar-nav {
  display: flex;
  gap: 15px;
  align-items: center;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
}

.nav-link:hover {
  color: #000;
}

img {
  width: 150px;
  border-radius: 5px;
}


/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
#content {
  width: calc(100% - 250px);
  min-height: 100vh;
  transition: all 0.3s;
  position: absolute;
  top: 0;
  right: 0;
}

#content.active {
  width: 100%;
}

a[data-toggle="collapse"] {
  position: relative;
}

a[aria-expanded="false"]::before,
a[aria-expanded="true"]::before {
  content: '\e259';
  display: block;
  position: absolute;
  right: 20px;
  font-family: 'Glyphicons Halflings';
  font-size: 0.6em;
}

a[aria-expanded="true"]::before {
  content: '\e260';
}

.pdr-icon {
  padding-right: 10px;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }

  #sidebar.active {
    margin-left: 0;
  }
}

.navbar-nav>li>.dropdown-menu {
  margin-top: 40px;
}


/* ---------------------------------------------------
    BOOTSTRAP OVERRIDE
----------------------------------------------------- */

.user-profile>.btn,
.user-profile>.btn.focus,
.user-profile>.btn:focus,
.user-profile>.btn:not(:disabled):not(.disabled).active,
.user-profile>.btn:not(:disabled):not(.disabled):active,
.user-profile>.show>.btn.dropdown-toggle {
  background-color: rgb(233, 231, 231);
  border: none;
  box-shadow: none;
}

.user-profile>.dropdown-menu {
  margin: 1.125rem 0 0;
}

.jumbotron {
  background-color: #1d1c1c;
  border: 1px solid #E5E5E5;
  padding: 1rem;
  border-radius: 0;
}

.drp-dwn a:hover {
  color: #f50404;
  cursor: pointer;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */
@media (max-width: 768px) {

  #content {
    width: 100%;
  }

  #content.active {
    width: calc(100% - 250px);
  }

}
</style>
