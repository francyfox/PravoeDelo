require("./bootstrap");

import '@fontsource-variable/jetbrains-mono'
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3"; // устарел, нету в доках
import { InertiaProgress } from "@inertiajs/progress";


const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: "#4B5563" });
