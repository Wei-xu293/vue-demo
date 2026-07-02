import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import Loading from './components/Loading'
import router from './router';

type Events = {
    'on-a-mitt': string;
}

const Mit = mitt<Events>()
const app = createApp(App)

type Lod = {
    show: () => void,
    hide: () => void,
}

type Filters = {
    format<T>(str: T): string
}

//编写ts loading 声明文件放置报错 和 智能提示
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
        $filters: Filters;
        $loading: Lod
    }
}

app.config.globalProperties.$Bus = Mit
app.config.globalProperties.$filters = {
    format<T> (str:T) {
        return `hehe-${str}`
    }
}

app.use(Loading)
app.use(router)

app.mount('#app')

