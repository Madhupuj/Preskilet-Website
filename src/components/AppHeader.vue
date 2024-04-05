<template>
  <div class="nav">
    
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style>
.nav {
    background-color: darkgreen;
    overflow: hidden;
}
.nav a {
    float: left;
    color: #f2f2f2;
    text-align: right;
    padding: 10px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;

}
.nav a:first-child {
    margin-right: 100px;
}
.nav a:hover {
    background-color: #ddd;
    color: #222;
}
</style>
