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
          title: 'Groups',
          image: require('@/assets/gropusT.png'),
          description: 'You can create groups (Batch-wise, Division-wise, Department-wise, College-wise) on preskilet to create tasks (assignments) for that group. Interested Users can follow those groups and you will get a group request. As soon as you accept the request, each group member will get notifications whenever you assign task (Assignment) for that group.'
        },
        {
          title: 'Tasks',
          image: require('@/assets/Task.jpg'),
          description: 'Profile is one of the most important part of the Preskilet Profile. Make sure you enter corrent information, because if any recruiter likes your Profile, he will try to contact you based on your contact information.'
        },
        {
          title: 'Download Excel',
          image: require('@/assets/xcelpng.png'),
          description: 'Using Video section you can upload your videos.'
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
