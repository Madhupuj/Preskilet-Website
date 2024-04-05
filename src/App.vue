<template>
  <div class="page">
    <div class="background-image"></div>
      <div class="nav" :style="navStyle">
      <header class="nav-header">
      
         <router-link to="/" class="nav-link logo">Preskilet</router-link>
        
        <div class="dropdown">
          <span class="nav-link">Quick Links</span>
          <div class="dropdown-content">
            <router-link to="/AboutUs" class="nav-link">About Us</router-link>
            <router-link to="/StudentInfo" class="nav-link">For Student</router-link>
            <router-link to="/TeacherInfo" class="nav-link"> For Teacher</router-link>
            <router-link to="/TermCondition" class="nav-link">Term Condition</router-link>
            <router-link to="/PrivacyApp" class="nav-link">Privacy</router-link>
            <router-link to="/ContactUs" class="nav-link">Contact</router-link>

            </div>
           <span class="arrow"></span>
        </div>
        <router-link to="/AboutUs" class="nav-link">About Us</router-link>
        <router-link to="/StudentInfo" class="nav-link">For Students</router-link>
        <router-link to="/TeacherInfo" class="nav-link"> For Teachers</router-link>
        <router-link to="/TermCondition" class="nav-link">Term & Condition</router-link>
        <router-link to="/PrivacyApp" class="nav-link">Privacy</router-link>
        <router-link to="/" class="nav-link">account</router-link>
        


      </header>
    </div>
    <router-view></router-view>
    <v-footer class="footer">
      <span>&copy; 2024 Your Company</span>
    </v-footer>
  </div>
</template>

<script>


export default {

  data() {
    return {
      navStyle: {
        backgroundColor: 'darkgreen', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%' 
      }
    };
  }
};
</script>

<style>
.page {
  position: relative; 
}



.nav {
  
}

.nav-header {
  padding: 10px; 
  position: fixed; 
  top: 0; 
  left: 0; 
  
  width: 100%; 
  z-index: 999; 
  background-color:darkblue;
}

.nav-link {
  float: left;
  color: #f2f2f2;
  text-align: right;
  padding: 10px 14px;
  text-decoration: none;
  font-size: 16px;
  margin-right: 4px;
  font-family: sans-serif;
}

.nav-link:first-child {
  margin-right: 50px;
  color:lightblue;
}

.nav-link:hover {
  background-color: #ddd;
  color: #222;
  
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color:darkblue;
  min-width: 160px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: #222;
}
.dropdown .arrow {
  position: absolute;
  top: 15px; 
  right: 10px; 
  width: 0;
  height: 0;
  border-left: 5px solid transparent; 
  border-right: 5px solid transparent; 
  border-bottom: 5px solid white; 
}

.footer {
  position: fixed;
  bottom: 0; 
  left: 0; 
  width: 100%; 
  background-color: darkblue; 
  color: white; 
  padding: 20px; 
  text-align: center; 
}

.logo {
  font-size: 30px; /* Adjust size as needed */
  font-weight: bold; /* Adjust weight as needed */
  margin-right: 20px; /* Add space between logo and navigation */
}
.nav-links .nav-link:not(:last-child) {
  margin-right: 40px;
  text-align:left; /* Adjust space between navigation items */
}
</style>
