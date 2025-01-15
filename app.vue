<template>
  <div>
    <UIStHeader />
    <main>
      <NuxtPage />
    </main>
    <UIStFooter/>
  </div>
</template>

<script>
import AOS from "aos";
import 'aos/dist/aos.css';

export default {
  mounted() {
    if (process.client) {
      AOS.init();
    }
  },
}
</script>
