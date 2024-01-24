import { createApp } from 'vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
//svg插件需要配置代码
import 'virtual:svg-icons-register';
import globalComponent from './components';
import '@/styles/index.scss';
import App from '@/App.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(globalComponent);
app.use(ElementPlus, {
  locale: zhCn,
});

app.mount('#app');
