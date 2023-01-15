import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "error",
  __ssrInlineRender: true,
  props: ["error"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4 max-w-sm mx-auto text-center card" }, _attrs))}><p class="mt-4 text-7xl font-bold">${ssrInterpolate(__props.error.statusCode)}</p><p class="mt-4 text-6xl">Oooops.</p><p class="mt-4">${ssrInterpolate(__props.error.message)}</p><button class="btn my-4">Go Home...</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _sfc_main$1 = _sfc_main;

export { _sfc_main$1 as default };
//# sourceMappingURL=error-component.bd202b13.mjs.map
