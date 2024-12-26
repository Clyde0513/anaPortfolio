<template>
  <div class="app">
    <div class="header-content">
      <h1>
        <span class="name">ILAANA</span>
        <span class="heart">♡</span>
      </h1>
      <div class="subtitle">
        <p class="major">biophysics @ ucla</p>
        <p class="location">2028 • austin & orlando</p>
      </div>
    </div>
    <div class="contact-section">
      <div class="contact-box">
        <div class="contact-header">get in touch!</div>
        <div class="divider"></div>
        <div class="contact-item">
          <a href="https://www.linkedin.com/in/ilaanak" target="_blank" class="underline">linkedin</a>
        </div>
        <div class="divider"></div>
        <div class="contact-item">
          <a href="mailto:ilaanak@ucla.edu" class="underline">ilaanak@ucla.edu</a>
        </div>
        <div class="divider"></div>
        <div class="contact-item">
          <a href="https://www.instagram.com/ilaanahk" target="_blank" class="underline">@ilaanahk on IG</a>
        </div>
      </div>
      <div class="image-container">
        <img class="image-box" src="../assets/bird-removebg-preview.png" alt="bird" width="300px" height="200px">
      </div>
    </div>
    <div class="description-box">
      <p class="description-text">
        I like doing <router-link to="/research" class="underline">research</router-link>, sometimes I play Genshin - <span class="underline">check out my horrible builds</span>! I occasionally cook, I tutor and direct at <a href="https://www.learn-with-us.com" target="_blank" class="underline">Learn With Us</a>, and I am learning LaTeX and Python!
      </p>
      <p class="description-text">
        fun facts: I'm a first responder (EMT-B), I have a 900+ day duolingo streak, my #1 artist on 
        <a href="https://open.spotify.com/user/qzb3ddjid5miubsa789fuxb7x?si=64a5c97c2f8143b9" target="_blank" class="underline">spotify</a> 
        was Beach House this year, I grew up in florida and then moved to texas halfway through highschool, and I wrote my Common App Essay on how much I hate eggs :D
      </p>
      <p class="description-text emphasis">
        <span class="underline">Here's</span> what I am involved in, <span class="underline">classes</span> I've taken, <span class="underline">certifications/licenses</span> I hold
      </p>

      <p class="description-text">
        <em>Last updated: 12/25/2024</em>
        <br/>
        <em>p.s. - tap on the pink underlined words, they're links!!</em>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>

<style>
body {
  margin: 0;
  background-color: black;
  color: white;
}

.app {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
}

h1 {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-right: 50%;
}

.name {
  color: pink;
  margin-left: 180px;
  font-weight: bold;
  font-size: 1.2em;
  letter-spacing: 2px;
  text-shadow: 0 0 10px pink,
               0 0 20px pink,
               0 0 30px pink;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px pink,
                 0 0 20px pink,
                 0 0 30px pink;
  }
  to {
    text-shadow: 0 0 20px pink,
                 0 0 30px pink,
                 0 0 40px pink;
  }
}

.heart {
  color: pink;
  font-size: 2em;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subtitle {
  text-align: center;
  margin-top: -10px;
  margin-right: 66%
}

.major {
  color: rgba(255, 192, 203, 0.9);
  font-size: 0.9em;
  margin: 0;
  letter-spacing: 1px;
}

.location {
  color: rgba(255, 192, 203, 0.7);
  font-size: 0.8em;
  margin: 5px 0 0 0;
  letter-spacing: 1px;
  white-space: nowrap;
  transform: scaleX(1.1);
  margin-left: 12%;
}

.contact-box {
  margin-top: 30px;
  border: 1px solid rgba(255, 192, 203, 0.3);
  padding: 15px;
  width: 200px;
  border-radius: 8px;
  margin-left: 6%;
}

.contact-header {
  color: pink;
  font-size: 0.9em;
  margin-bottom: 8px;
  text-align: left;
  letter-spacing: 1px;
  font-weight: bold;
  white-space: nowrap;
  padding-left: 10px;
}

.divider {
  height: 1px;
  background-color: rgba(255, 192, 203, 0.3);
  margin: 8px 0;
}

.contact-item {
  color: rgba(255, 192, 203, 0.7);
  font-size: 0.8em;
  margin: 8px 0;
  text-align: center;
  letter-spacing: 0.5px;
  margin-right: 78%;
  white-space: nowrap;
  transform: scaleX(1.1);
}

.contact-item:hover {
  color: pink;
  cursor: pointer;
  transition: color 0.3s ease;
}

.description-box {
  margin-top: 30px;
  border: 1px solid rgba(255, 192, 203, 0.3);
  padding: 20px;
  width: 530px;
  border-radius: 8px;
  margin-right: 9%;
}

.description-text {
  color: rgba(255, 192, 203, 0.7);
  font-size: 0.8em;
  line-height: 1.5;
  margin: 12px 0;
  letter-spacing: 0.5px;
}

.description-text.emphasis {
  color: pink;
  font-weight: bold;
}

.underline {
  text-decoration: underline;
  text-decoration-color: pink;
  text-decoration-thickness: 1px;
  cursor: pointer;
  color: inherit;  
}

a {
  text-decoration: none;
  color: inherit;
}

.underline:hover {
  color: pink;
  text-decoration-thickness: 2px;
  transition: all 0.3s ease;
}

.contact-section {
  display: flex;
  align-items: flex-start;
  gap: 40px;  
  margin-top: 30px;
}

.image-box {
  margin-left: -10px; /* Changed from 10px to -10px */
}

.image-container {
  display: flex;
  align-items: center;
  margin-left: -5px; /* Changed from 10px to -5px */
}
</style>
