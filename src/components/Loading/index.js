import { createVNode, render } from 'vue';
import Loading from './index.vue';
export default {
    install(app) {
        // createVNode: Vue's low-level method to create a Virtual DOM node
        const vnode = createVNode(Loading);
        // render: Converts the VNode to a real DOM node and mounts it
        render(vnode, document.body);
        // Vue's global properties configuration
        app.config.globalProperties.$loading = {
            show: () => vnode.component?.exposed?.show(),
            hide: () => vnode.component?.exposed?.hide()
        };
    }
};
