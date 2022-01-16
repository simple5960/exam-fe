<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    axios.get('/rest').then(res => {
        console.log(res);
    });
  }
});
</script>
