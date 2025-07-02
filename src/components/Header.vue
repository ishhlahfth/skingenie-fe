<template>
  <header id="header" class="header d-flex flex-column justify-content-center">
    <i class="header-toggle d-xl-none bi bi-list"></i>
    <nav id="navmenu" class="navmenu">
      <ul>
        <li>
          <a href="#hero" class="active"><i class="bi bi-house navicon"></i><span>Home</span></a>
        </li>
        <li>
          <a href="#about"><i class="bi bi-person navicon"></i><span>About</span></a>
        </li>
        <li>
          <a href="#contact"><i class="bi bi-envelope navicon"></i><span>Contact</span></a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: {},
});
</script>
