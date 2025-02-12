// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import AOS from "aos";
import { h, watch } from 'vue'
import { useRoute } from 'vitepress'
import Confetti from "./components/Confetti.vue";
import Home from "./components/Home.vue";
import "./style/index.css"; //引入自定义的样式

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component("Confetti", Confetti);
    app.component("Home", Home);
  },
  Layout() {
    const route = useRoute()
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => {
        return route.path === '/' ? h(Home) : null
      }
    })
  }
};