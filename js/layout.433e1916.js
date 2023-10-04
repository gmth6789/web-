(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout"], {
  "162e": function(e, t, c) {
      "use strict";
      c.r(t);
      var o = c("dd3f")
        , a = (c("68ef"),
      c("9312"),
      c("7fb6"))
        , n = (c("cb51"),
      c("3743"),
      c("ae73"),
      c("7a23"));
      const b = {
          class: "home"
      }
        , d = {
          class: "content"
      }
        , l = {
          class: "bottom-bar"
      }
        , u = Object(n["createTextVNode"])("首页")
        , i = Object(n["createTextVNode"])("我的");
      function r(e, t, c, r, O, j) {
          const s = Object(n["resolveComponent"])("router-view")
            , f = a["a"]
            , m = o["a"];
          return Object(n["openBlock"])(),
          Object(n["createElementBlock"])("div", b, [Object(n["createElementVNode"])("div", d, [Object(n["createVNode"])(s, null, {
              default: Object(n["withCtx"])(({Component: t})=>[(Object(n["openBlock"])(),
              Object(n["createBlock"])(n["KeepAlive"], {
                  include: e.includeRoutes
              }, [(Object(n["openBlock"])(),
              Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(t)))], 1032, ["include"]))]),
              _: 1
          })]), Object(n["createElementVNode"])("div", l, [Object(n["createVNode"])(m, {
              modelValue: e.active,
              "onUpdate:modelValue": t[0] || (t[0] = t=>e.active = t),
              "active-color": "#85a5ff"
          }, {
              default: Object(n["withCtx"])(()=>[Object(n["createVNode"])(f, {
                  name: "/home",
                  icon: "home-o"
              }, {
                  default: Object(n["withCtx"])(()=>[u]),
                  _: 1
              }), Object(n["createVNode"])(f, {
                  name: "/about",
                  icon: "award"
              }, {
                  default: Object(n["withCtx"])(()=>[i]),
                  _: 1
              })]),
              _: 1
          }, 8, ["modelValue"])])])
      }
      var O = c("6605")
        , j = Object(n["defineComponent"])({
          name: "LAYOUT",
          setup() {
              const e = Object(O["c"])()
                , t = Object(n["reactive"])({
                  active: "/home",
                  includeRoutes: ["ABOUT"]
              });
              return Object(n["watch"])(()=>t.active, t=>{
                  e.push(t)
              }
              ),
              Object(n["onMounted"])(()=>{
                  t.active = e.currentRoute.value.path
              }
              ),
              {
                  ...Object(n["toRefs"])(t)
              }
          }
      })
        , s = (c("faf9"),
      c("6b0d"))
        , f = c.n(s);
      const m = f()(j, [["render", r], ["__scopeId", "data-v-839cb448"]]);
      t["default"] = m
  },
  "3b5e": function(e, t, c) {},
  9312: function(e, t, c) {},
  ae73: function(e, t, c) {},
  faf9: function(e, t, c) {
      "use strict";
      c("3b5e")
  }
}]);
//# sourceMappingURL=layout.433e1916.js.map
