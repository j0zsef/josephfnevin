import __nuxt_component_0 from './Icon.cb84d003.mjs';
import { u as useHead } from './composables.02e34f26.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { b as _export_sfc } from '../server.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import '../../nitro/netlify.mjs';
import 'node-fetch-native/polyfill';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:url';
import 'ipx';

const __default__ = {
  name: "contact.vue"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contact",
      meta: [
        { name: "description", content: "Joseph Nevin Contact" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-623e584e><div data-v-623e584e><p class="pb-4" data-v-623e584e>Please feel free to reach out to me on any of these platforms. Email being best.</p><ul data-v-623e584e><li data-v-623e584e><a href="mailto:josephfnevin@gmail.com" data-v-623e584e>`);
      _push(ssrRenderComponent(_component_Icon, { name: "ic:round-email" }, null, _parent));
      _push(`Email</a></li><li data-v-623e584e><a href="https://www.linkedin.com/in/joseph-nevin-2a0b56113/" data-v-623e584e>`);
      _push(ssrRenderComponent(_component_Icon, { name: "uil:linkedin" }, null, _parent));
      _push(`LinkedIn</a></li><li data-v-623e584e><a href="https://github.com/j0zsef" data-v-623e584e>`);
      _push(ssrRenderComponent(_component_Icon, { name: "uil:github" }, null, _parent));
      _push(`GitHub</a></li><li data-v-623e584e><a href="https://twitter.com/JozsefNevin" data-v-623e584e>`);
      _push(ssrRenderComponent(_component_Icon, { name: "uil:twitter" }, null, _parent));
      _push(`Twitter</a></li></ul></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-623e584e"]]);

export { contact as default };
//# sourceMappingURL=contact.b189d8fc.mjs.map
