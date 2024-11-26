<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>페이지를 찾을 수 없습니다</h2>
    <p>요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
    <router-link to="/" class="home-link">
      홈으로 돌아가기
    </router-link>
  </div>
</template>

<script setup>
// 필요한 경우 여기에 스크립트 추가
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px 20px;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 6rem;
  margin: 0;
  color: #ff4757;
}

h2 {
  font-size: 2rem;
  margin: 20px 0;
  color: #2f3542;
}

p {
  color: #747d8c;
  margin-bottom: 30px;
}

.home-link {
  display: inline-block;
  padding: 12px 24px;
  background-color: #1e90ff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.home-link:hover {
  background-color: #147ae0;
}
</style>