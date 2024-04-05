<template>
  <v-container class="features-container">
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
  </v-container>
  
</template>

<script>
export default {
  name: "FeatureApp",

  data() {
    return {
      features: [
        {
          title: 'Search',
          image: require('@/assets/search.png'),
          description: 'Search people by names with the help of preskilet'
        },
        {
          title: 'Profile',
          image: require('@/assets/Student.png'),
          description: 'Profile is one of the most important part of the Preskilet Profile. Make sure you enter corrent information, because if any recruiter likes your Profile, he will try to contact you based on your contact information.'
        },
        {
          title: 'Video',
          image: require('@/assets/video1.png'),
          description: 'Using Video section you can upload your videos.'
        },
        {
          title: 'Edit Videos',
          image: require('@/assets/videoeditpng.png'),
          description: 'In Edit videos section you can edit or delete your previosly uploaded videos.'
        }
      ]
    };
  }
}
</script>

<style scoped>
.page{
  background-color:#111B21;
}
.features-container {
  padding: 60px 100px;
  height:100vh;
  width:100vh;
}

.feature-item {
  display: flex;
  align-items: flex-start; 
  margin-bottom: 40px;
  padding:30px; 
}
.feature-text {
  flex: 1; 
  padding-left: 80px; 
}
.feature-image {
  max-width: 350px; 
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
  font-size: 50px;
  font-family: sans-serif;
  color: white;
  text-align: left;
  padding-left:100px;
}

.feature-description {
  font-size: 16px;
  font-family: sans-serif;
  margin: 32px 0;
  color: white;
  padding-left:100px;
}
</style>
