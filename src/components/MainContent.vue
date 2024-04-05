<template>
  <div>
    <v-container class="container-background">
    
      <v-row>
        <v-col lg="6">
          <h2 class="intro-text">Preskilet</h2>
          <p class="descrip">Welcome to preskilet, <br>before you start creating your own videos for your live video profile, <br>go through a brief introduction of sections in our website, <br>it will help you create profile easily.</p>
          <v-btn color="success" class="white--text" rounded>Get Started</v-btn>
          <v-btn color="indigo" class="white--text" rounded></v-btn>
          
        </v-col>
        <v-col lg="6">
          
        </v-col>
      </v-row>
      
    </v-container>

    <section class="section-1">
<p class="para">About</p>
Preskilet stands for presenting your soft skill set ! Preskilet is the world’s first professional video platform, At preskilet<br> you can create your professional video resume containing videos about projects and achivements etc. <br>You can share your video profile with potential recruiters for increasing chances of placements. <br>With preskilet your video profile is live At https://preskilet.com/your email.</section>

 
    <div class="page">
    <v-row>
      <v-col v-for="(feature, index) in features" :key="index" cols="12" md="6">
        <div class="feature-item">
          <img :src="feature.image" :alt="feature.title" class="feature-image">
          <div class="feature-text">
            <h2 class="feature-title">{{ feature.title }}</h2>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
    </div>


</div>

</template>

<script>
export default {
  name: "FeatureApp",
  data() {
    return {
      

    };
  }
}

</script>

<style scoped>
.container-background {
  background-image: url('F:\whatsapp\src\assets\Wallpaper2.jpg');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0; 
  padding: 0; 
}

.container {
  height: calc(100vh - 100px); 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 50px;
  width:100vh;
}

.section-1{
  background-color:white;
  font-size: 20px;
  font-family: sans-serif;
  margin: 32px 0;
  color: darkBlue;
  padding-left:10px;
  text-align: center;
}
.para{
  text-align: center;
  font-size: 50px;
  font-family: sans-serif;
  margin: 32px 0;
  color: darkblue;


}
.heading{
  font-size: 40px;
  font-family: sans-serif;
  color:#43CD66;
  text-align: left;
}

h1.text {
  font-size: 40px;
  font-weight: bold;
  font-family: sans-serif;
  color: darkblue;
  text-align: center; 
  margin: 0; 
  padding: 5px; 
}


.img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px auto; 
}

h2.intro-text {
  font-size: 60px;
  font-weight: bold;
  font-family: sans-serif;
  color: darkblue;
  margin:center;
  padding:20px;
  text-align: center;
}

p.descrip {
  font-size: 20px;
  font-family: sans-serif;
  margin: 32px 0;
  color: darkBlue;
  padding:20px;
  text-align: center;
}


.features-container {
  padding: 5px 100px;
  
}

.feature-item {
  display: flex;
  align-items: flex-start; 
  margin-bottom: 40px;
  padding:60px; 
}
.feature-text {
  flex: 1; 
  padding-left: 80px; 
}
.feature-image {
  max-width: 550px; 
  height: auto;
  margin-left: 40px; 
  box-shadow: 0 0 10px white(0, 0, 0, 0.1); 
  transition: transform 0.3s ease; 
  z-index:0;
  padding:60px;
}

.feature-image:hover {
  transform: scale(1.05); 
}


.feature-title {
  font-size: 60px;
  font-weight: bold;
  font-family: sans-serif;
  color: black;
  text-align: left;
  padding-left:100px;
}

.feature-description {
  font-size: 16px;
  font-family: sans-serif;
  margin: 32px 0;
  color: black;
  padding-left:100px;
}
</style>
