import { _ as _export_sfc, d as defineComponent, r as ref, g as computed, o as openBlock, c as createElementBlock, a as createBaseVNode, w as withDirectives, v as vModelText, F as Fragment, b as renderList, u as unref, t as toDisplayString, e as createCommentVNode, p as pushScopeId, h as popScopeId, f as createVNode } from "./app.2bf54c2c.js";
const data = JSON.parse("[]");
var ApiIndex_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-ff6eadd4"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "api-index" };
const _hoisted_2 = { class: "header" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "WWW Notes", -1));
const _hoisted_4 = { class: "api-filter" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "api-filter" }, "Filter", -1));
const _hoisted_6 = ["id"];
const _hoisted_7 = { class: "api-groups" };
const _hoisted_8 = ["href"];
const _hoisted_9 = {
  key: 0,
  class: "no-match"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const query = ref("");
    const normalize = (s) => s.toLowerCase().replace(/-/g, " ");
    const filtered = computed(() => {
      const q = normalize(query.value);
      const matches = (text) => normalize(text).includes(q);
      return data.map((section) => {
        if (matches(section.text)) {
          return section;
        }
        const matchedGroups = section.items.map((item) => {
          if (matches(item.text)) {
            return item;
          }
          if (q.includes("ssr") && item.text.startsWith("Server")) {
            return item;
          }
          const matchedHeaders = item.headers.filter(matches);
          return matchedHeaders.length ? { text: item.text, link: item.link, headers: matchedHeaders } : null;
        }).filter((i) => i);
        return matchedGroups.length ? { text: section.text, items: matchedGroups } : null;
      }).filter((i) => i);
    });
    function slugify(text) {
      return text.replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g, "-").replace(/\-{2,}/g, "-").replace(/^\-+|\-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            _hoisted_5,
            withDirectives(createBaseVNode("input", {
              type: "search",
              placeholder: "Enter keyword",
              id: "api-filter",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value = $event)
            }, null, 512), [
              [vModelText, query.value]
            ])
          ])
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filtered), (section) => {
          return openBlock(), createElementBlock("div", {
            key: section.text,
            class: "api-section"
          }, [
            createBaseVNode("h2", {
              id: slugify(section.text)
            }, toDisplayString(section.text), 9, _hoisted_6),
            createBaseVNode("div", _hoisted_7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(section.items, (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.text,
                  class: "api-group"
                }, [
                  createBaseVNode("h3", null, toDisplayString(item.text), 1),
                  createBaseVNode("ul", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.headers, (h) => {
                      return openBlock(), createElementBlock("li", { key: h }, [
                        createBaseVNode("a", {
                          href: item.link + ".html#" + slugify(h)
                        }, toDisplayString(h), 9, _hoisted_8)
                      ]);
                    }), 128))
                  ])
                ]);
              }), 128))
            ])
          ]);
        }), 128)),
        !unref(filtered).length ? (openBlock(), createElementBlock("div", _hoisted_9, ' No API matching "' + toDisplayString(query.value) + '" found. ', 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
var ApiIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ff6eadd4"]]);
const __pageData = '{"title":"API Reference","description":"","frontmatter":{"title":"API Reference","page":true,"footer":false},"relativePath":"www-notes/index.md","lastUpdated":1648606790913}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(ApiIndex)
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
