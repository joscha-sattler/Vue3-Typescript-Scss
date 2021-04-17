<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <button @click="toggleTheme">Theme</button>
  <router-view />
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class FirstComponent extends Vue {
  // Methoden

  // HTML - DOM Elemente holen und abspeichern
  darkMode = localStorage.getItem('darkMode');

  // Darkmode aktivieren
  enableDarkMode = (): void => {
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'enabled');
  };

  // Darkmode deaktivieren
  disableDarkMode = (): void => {
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', '');
  };

  toggleTheme(): void {
    this.darkMode = localStorage.getItem('darkMode');

    if (this.darkMode !== 'enabled') {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }

  created(): void {
    // wenn Nutzer bereits auf der Seite war und darkmode aktiviert hatte,
    // dann automatisch auf darkmode setzen
    if (this.darkMode === 'enabled') {
      this.enableDarkMode();
    }
  }
}
</script>

<style lang="scss">
*,
::before,
::after {
  box-sizing: border-box;
  transition: color 0.5s, background 0.5s;
}
html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

:root {
  --body-bg-color: #{$body_background_color_light};
  --container-bg-color: #{$container_background_color_light};
  --text-color: #{$text_color_light};
  --title-color: #{$title_color_light};
}

.dark {
  --body-bg-color: #{$body_background_color_dark};
  --container-bg-color: #{$container_background_color_dark};
  --text-color: #{$text_color_dark};
  --title-color: #{$title_color_dark};
}

body {
  font-family: $font_family;
  font-size: $normal_text_font_size;
  color: var(--text-color);

  background: var(--body-bg-color);
  line-height: 1.6;
}

:is(h1, h2, h3, ul, p) {
  margin: 0;
}

ul {
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* nav später ändern und rausnehmen */
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
