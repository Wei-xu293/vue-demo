/// <reference types="../../../node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { reactive } from 'vue';
const data = reactive([
    { name: "adfs1", age: 201 },
    { name: "adfs2", age: 202 },
    { name: "adfs3", age: 203 },
    { name: "adfs4", age: 204 }
]);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...{ class: "header" },
});
/** @type {__VLS_StyleScopedClasses['header']} */ ;
var __VLS_0 = {};
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
    ...{ class: "main" },
});
/** @type {__VLS_StyleScopedClasses['main']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.data))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (index),
    });
    var __VLS_2 = {
        data: (item),
    };
    // @ts-ignore
    [data,];
}
var __VLS_4 = {};
__VLS_asFunctionalElement1(__VLS_intrinsics.footer, __VLS_intrinsics.footer)({
    ...{ class: "footer" },
});
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
var __VLS_6 = {};
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_3 = __VLS_2, __VLS_5 = __VLS_4, __VLS_7 = __VLS_6;
// @ts-ignore
[];
const __VLS_base = (await import('vue')).defineComponent({});
const __VLS_export = {};
export default {};
