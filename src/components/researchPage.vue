<template>
  <div class="research-container">
    <router-link to="/" class="back-button">
      ← back
    </router-link>
    <h1>
      <span class="name">Research</span>
      <span class="heart">♡</span>
    </h1>
    <div class="research-box">
      <div class="glow-border">
        <div class="Sub-Research">
            <h2 class="Sub-Research1">Publications</h2>
        </div>
        <div class="content">
            <p>• Comparison between pre-operative Ga68-PSMA PET lymph nodes
              involvement, in intermediate/high risk Prostate cancer and
              histopathological lymphhadenectomoy results after Robot
              -Assisted Radical Prostatectomy.
            </p>
            <p>
                • To Aid Emotion Expression for Non-Verbal Autistic Individuals
                , in an app-less (features) is more (better).
            </p>
        </div>
        <div class="Sub-Research">
            <h2 class="Sub-Research1">In Progress</h2>
            <div class="content">
                <p>
                    • Identifying Unmet needs for patients living with 
                    neuromuscular disease and respiratory muscle weakness
                     A Qualitative Study <em>:(submitted to American Thoracic Society)</em>
                </p>
                </div>
            </div>
            <div class="labs-section">
              <div class="Sub-Research">
                <h2 class="Sub-Research1">Research Labs</h2>
                <div class="content">
                  <p class="lab-name">
                    Upsilon Lab - Computational Fluid Dynamics
                  </p>
                  <u class="focus-header">Areas of focus:</u>
                  <ul class="focus-list">
                    <li>Black hole accretion disks</li>
                    <li>Digital blood veseel modeling</li>
                    <li>OpenFOAM, C++</li>
                  </ul>
                </div>
              </div>

              <div class="Sub-Research">
                <h2 class="Sub-Research1">Passionate People Project</h2>
                <div class="content">
                  <p>
                    <u class="focus-header1">Areas of Focus:</u>
                  </p>
                  <ul class="focus-list">
                    <li>Psychological correlaton between happiness and success in careers</li>
                    <li>Interviewing professionals in a variety of fields</li>
                    <li>Analyzing data between keywords and ideas covered in interview transcripts</li>
                  </ul>
                </div>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchPage'
}
</script>

<style scoped>
.research-container {
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
  animation: popIn 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  display: inline-block;
}

.heart {
  color: pink;
  font-size: 2em;
  margin-left: 10px;
  animation: heartBeat 1.2s ease-in-out infinite;
}

.research-box {
  margin-top: 30px;
  padding: 3px;
  border-radius: 12px;
  background: linear-gradient(45deg, rgba(255,192,203,0.5), rgba(255,192,203,0.2));
  animation: borderGlow 0.4s ease-in-out infinite alternate;
}

.glow-border {
  background: black;
  border-radius: 10px;
  padding: 20px;
  min-height: 400px;
}

.content {
  color: rgba(255, 192, 203, 0.7);
  font-size: 0.9em;
  line-height: 1.6;
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

.sub-research {
  margin-top: 30px;
    border: 1px solid rgba(255, 192, 203, 0.3);
    padding: 15px;
    width: 200px;
    border-radius: 8px;
    margin-left: 6%;
    background: linear-gradient(45deg, rgba(255,192,203,0.5), rgba(255,192,203,0.2));
    animation: borderGlow 0.1s ease-in-out infinite alternate;

}

.Sub-Research1 {
  color: pink;
  font-size: 1.2em;
  letter-spacing: 2px;
  text-shadow: 0 0 10px pink,
               0 0 20px pink,
               0 0 30px pink;
}

.lab-name {
  color: pink;
  font-size: 1.1em;
  margin-bottom: 10px;
  margin-top: -9px
}

.focus-header {
  display: block;
  margin-top: -15px;
  color: rgba(255, 192, 203, 0.8);
}

.focus-header1{
  display: block;
  font-size: 1.1em;
  margin-top: -10px;
  color: rgba(255, 192, 203, 0.8);
}

.focus-list {
  margin-top: -8px;
  padding-left: 25px;
}

.focus-list li {
  margin: 6px 0;
}

.labs-section {
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  margin-top: 20px;
}

.Sub-Research {
  flex: 1;
  max-width: 400px;
  margin-top: 0;
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
