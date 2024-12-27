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
            <button @click="toggleLike(index)" 
                    class="like-button" 
                    :class="{ 'liked': recipe.liked }">
              ♥
            </button>
            <span>{{ recipe.likes }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookingPage',
  data() {
    return {
      recipes: [
        {
          id: 1,
          title: 'First Meal',
          description: 'yadadadadada',
          likes: 0,
          liked: false
        },
        {
          id: 2,
          title: 'Second Meal',
          description: 'Another delicious recipe',
          likes: 0,
          liked: false
        }
      ]
    }
  },
  methods: {
    toggleLike(index) {
      const recipe = this.recipes[index];
      recipe.liked = !recipe.liked;
      recipe.likes += recipe.liked ? 1 : -1;
      this.saveLikesToStorage();
    },
    saveLikesToStorage() {
      const likesData = this.recipes.map(recipe => ({
        id: recipe.id,
        likes: recipe.likes,
        liked: recipe.liked
      }));
      localStorage.setItem('recipeLikes', JSON.stringify(likesData));
    },
    loadLikesFromStorage() {
      const savedLikes = localStorage.getItem('recipeLikes');
      if (savedLikes) {
        const likesData = JSON.parse(savedLikes);
        this.recipes = this.recipes.map(recipe => {
          const savedRecipe = likesData.find(item => item.id === recipe.id);
          if (savedRecipe) {
            recipe.likes = savedRecipe.likes;
            recipe.liked = savedRecipe.liked;
          }
          return recipe;
        });
      }
    }
  },
  mounted() {
    this.loadLikesFromStorage();
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
  gap: 8px;
}

.like-button {
  background: none;
  border: none;
  color: rgba(255, 192, 203, 0.7);
  font-size: 1.2em;
  cursor: pointer;
  transition: transform 0.3s ease;
  padding: 5px;
}

.like-button:hover {
  transform: scale(1.2);
}

.like-button.liked {
  color: pink;
  animation: heartBeat 0.3s ease-in-out;
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
