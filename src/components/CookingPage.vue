<template>
  <div class="cooking-page">
    <router-link to="/" class="back-button">
      ← back
    </router-link>    
    <h1><span class="title">My Recipes</span></h1>
    <div class="recipe-grid">
      <div v-for="(recipe, index) in recipes" 
           :key="index" 
           class="recipe-card"
           v-animate-on-scroll>
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>
        <div class="recipe-footer">
          <div class="like-section">
            <button @click="decreaseLike(index)" class="like-button decrease">−</button>
            <span>{{ recipe.likes }}</span>
            <button @click="increaseLike(index)" class="like-button increase">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db } from '../firebase';
import { ref as dbRef, onValue, set, get } from 'firebase/database';

export default {
  name: 'CookingPage',
  data() {  
    return {
      recipes: [
        {
          id: 1,
          title: 'First Meal',
          description: 'yadadadadada',
          likes: 0
        },
        {
          id: 2,
          title: 'Second Meal',
          description: 'Another delicious recipe',
          likes: 0
        }
      ],
      error: null
    }
  },
  methods: {
    async increaseLike(index) {
      try {
        const recipe = this.recipes[index];
        const recipeRef = dbRef(db, `recipes/${recipe.id}`);
        
        const snapshot = await get(recipeRef);
        const currentLikes = (snapshot.val()?.likes || 0);
        const newLikes = currentLikes + 1;
        
        // Update local state
        recipe.likes = newLikes;
        
        // Update Firebase
        await set(recipeRef, {
          likes: newLikes,
          id: recipe.id,
          title: recipe.title
        });
      } catch (error) {
        console.error('Error updating likes:', error);
        recipe.likes = currentLikes;
      }
    },

    async decreaseLike(index) {
      try {
        const recipe = this.recipes[index];
        const recipeRef = dbRef(db, `recipes/${recipe.id}`);
        
        const snapshot = await get(recipeRef);
        const currentLikes = (snapshot.val()?.likes || 0);
        const newLikes = Math.max(0, currentLikes - 1); // Prevent negative likes
        
        // Update local state
        recipe.likes = newLikes;
        
        // Update Firebase
        await set(recipeRef, {
          likes: newLikes,
          id: recipe.id,
          title: recipe.title
        });
      } catch (error) {
        console.error('Error updating likes:', error);
        recipe.likes = currentLikes;
      }
    },
    initializeFirebaseListeners() {
      try {
        console.log('Initializing Firebase listeners');
        this.recipes.forEach(recipe => {
          const recipeRef = dbRef(db, `recipes/${recipe.id}`);
          onValue(recipeRef, (snapshot) => {
            const data = snapshot.val();
            console.log('Received data for recipe', recipe.id, ':', data);
            if (data) {
              recipe.likes = data.likes || 0;
            }
          }, (error) => {
            console.error('Firebase listener error:', error);
          });
        });
      } catch (error) {
        console.error('Error initializing Firebase listeners:', error);
      }
    }
  },
  mounted() {
    console.log('Component mounted, initializing Firebase');
    this.initializeFirebaseListeners();
  },
  directives: {
    animateOnScroll: {
      mounted(el) {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              el.classList.add('visible');
            }
          });
        });
        observer.observe(el);
      }
    }
  }
}
</script>

<style scoped>
.cooking-page {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.title {
  color: pink;
  font-weight: bold;
  text-shadow: 0 0 10px pink,
               0 0 20px pink,
               0 0 30px pink;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.recipe-card {
  border: 1px solid rgba(255, 192, 203, 0.3);
  border-radius: 8px;
  padding: 20px;
  color: rgba(255, 192, 203, 0.7);
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.6s ease-out;
}

.recipe-card.visible {
  transform: translateY(0);
  opacity: 1;
}

.recipe-footer {
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
}

.like-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.like-button {
  background: none;
  border: none;
  color: rgba(255, 192, 203, 0.7);
  font-size: 1.2em;
  cursor: pointer;
  transition: transform 0.3s ease;
  padding: 5px 10px;
  border-radius: 4px;
}

.like-button:hover {
  transform: scale(1.2);
}

.like-button.increase:hover {
  color: #ff69b4;
  background: rgba(255, 105, 180, 0.1);
}

.like-button.decrease:hover {
  color: #ff1493;
  background: rgba(255, 20, 147, 0.1);
}

@keyframes heartBeat {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
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
</style>
