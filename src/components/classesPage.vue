<template>
  <div class="classes-container">
    <router-link to="/" class="back-button">
      ← back
    </router-link>
    <h1>
      <span class="name">Classes</span>
      <span class="heart1">♡</span>
    </h1>
      <div class="glow-border"></div>
        <div class="Sub-Classes">
          <h2 class="Sub-Classes1">STEM</h2>
          <div class="content">
            <ul class="classes-list">
              <li><strong>Chem 20A:</strong> Chemical Structure, <strong>Chem 20B:</strong> Chemical Energetics and Change</li>
              <li><strong>Math 31B:</strong> Integration and Infinite Series, <strong>Math 32A: </strong>Calculus of Several Variables</li>
              <li><strong>Physics 1A: </strong>Mechanics</li>
              <li><strong>Biomedical Research</strong>: 5ha</li>
            </ul>
          </div>
        </div>

        
        <div class="Sub-Classes">
          <h2 class="Sub-Classes1">Non-STEM/miscellaneous</h2>
          <div class="content">
            <ul class="classes-list">
              <li><strong>Philosophy 8: </strong>Philosophy of Science</li>
              <!-- <li></li>
              <li></li>
              <li></li> -->
            </ul>
          </div>
        </div>
     
    </div>
 
 
</template>

<script>
export default {
  name: 'ClassesPage'
}
</script>

<style scoped>
.classes-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.name {
  color: pink;
  font-weight: bold;
  font-size: 1.2em;
  letter-spacing: 2px;
  text-shadow: 0 0 10px pink,
               0 0 20px pink,
               0 0 30px pink;
}

.heart1 {
  color: pink;
  font-size: 1em;
  margin-left: 10px;
}



.glow-border {
  background: black;
  border-radius: 10px;
  padding: 20px;
  min-height: 400px;
  margin-bottom: -450px;
}

.Sub-Classes {
  margin: 30px 0;
  border: 1px solid rgba(255, 192, 203, 0.3);
  padding: 20px;
  border-radius: 8px;
  background: linear-gradient(45deg, rgba(255,192,203,0.1), rgba(255,192,203,0.05));
  animation: borderGlow 0.8s ease-in-out infinite alternate;

}

.Sub-Classes1 {
  color: pink;
  font-size: 1.2em;
  letter-spacing: 2px;
  text-shadow: 0 0 10px pink,
               0 0 20px pink,
               0 0 30px pink;
  margin-bottom: 15px;
}

.content {
  color: rgba(255, 192, 203, 0.7);
  font-size: 0.9em;
  line-height: 1.6;
}

.classes-list {
  list-style-type: none;
  padding: 0;
}

.classes-list li {
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
}

.classes-list li::before {
  content: '♡';
  position: absolute;
  left: 0;
  color: pink;
  opacity: 0.7;
}

.back-button {
    color: pink;
    font-weight: bold;
    text-decoration: none;
    margin-left: 20px;
    display: inline-block;
    animation: popIn 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}


.back-button:hover {
  color: pink;
}

@keyframes borderGlow {
  from {
    box-shadow: 0 0 10px rgba(255,192,203,0.3),
                inset 0 0 10px rgba(255,192,203,0.3);
  }
  to {
    box-shadow: 0 0 20px rgba(255,192,203,0.5),
                inset 0 0 20px rgba(255,192,203,0.5);
  }
}
</style>
