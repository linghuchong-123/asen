import{o as a,c as s,F as t,a as e,b as c}from"./app.606de75f.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const o={},r=e("h1",{id:"_1-canvas-\u6E32\u67D3\u548C-dom-\u6E32\u67D3\u7684\u4E0D\u540C",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-canvas-\u6E32\u67D3\u548C-dom-\u6E32\u67D3\u7684\u4E0D\u540C","aria-hidden":"true"},"#"),c(" 1.canvas \u6E32\u67D3\u548C DOM \u6E32\u67D3\u7684\u4E0D\u540C")],-1),d=e("p",null,"\u{1F3C0}canvas \u6E32\u67D3\u7C7B\u4F3C\u4E8E\u653E\u7535\u5F71\u4E00\u6837\u4E00\u5E27\u4E00\u5E27\u7684\u5237\u65B0\uFF0C\u7ED8\u5236\u7684\u56FE\u5F62\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4F1A\u628A\u4E4B\u524D\u7684\u56FE\u5F62\u653E\u5230\u4E00\u4E2A\u7F13\u5B58\u5E27\u4E2D\uFF0C\u7136\u540E\u5C06\u4F4D\u56FE\u6574\u4E2A\u6E05\u9664\uFF0C\u7136\u540E\u5C06\u65B0\u7684\u56FE\u5F62\u91CD\u65B0\u6E32\u67D3\u51FA\u6765\uFF0C\u6BD4\u5982 canvas \u753B\u677F\u5F53\u753B\u4E0B\u4E00\u7B14\u65F6\u4F1A\u5C06\u4E4B\u524D\u753B\u7684\u5168\u90E8\u6E05\u9664\u751F\u6210\u65B0\u7684\uFF0C\u7531\u4E8E\u5728\u6E32\u67D3\u7684\u8FC7\u7A0B\u4E2D\u4E0D\u9700\u8981\u7C7B\u4F3C DOM \u6E32\u67D3\uFF0C\u6D4F\u89C8\u5668\u8981\u5BF9\u5143\u7D20\u5927\u5C0F\u8FDB\u884C\u8BA1\u7B97\u8FDB\u884C layout\uFF0C\u8FD9\u662F\u4E00\u5F20\u4F4D\u56FE\uFF0C\u6D4F\u89C8\u5668\u53EA\u9700\u8981\u7167\u7740\u753B\u5C31\u884C\u4E86\uFF0C\u6240\u4EE5\u6E32\u67D3\u4F1A\u5FEB\u4E00\u4E9B\uFF0C\u5C24\u5176\u662F\u5BF9\u5728\u7EBF\u8868\u683C\u8FD9\u79CD\u542B\u6709\u7279\u522B\u591A\u5143\u7D20\u7684\uFF08\u4F46\u662F\u73B0\u5728\u8FD8\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u5C31\u662F\u7F13\u5B58\u5E27\u548C\u65B0\u753B\u7684\u90A3\u4E00\u7B14\u662F\u5728\u4EC0\u4E48\u65F6\u5019\u8BA1\u7B97\u7684\uFF0C\u8BA1\u7B97\u4E5F\u9700\u8981\u65F6\u95F4\uFF0C\u800C\u4E14\u8FD9\u8FD8\u4E0D\u662F\u90A3\u79CD\u5FAA\u73AF\u5224\u65AD\u90A3\u79CD\u72EC\u7ACB\u8BA1\u7B97\uFF0C\u4E5F\u8BB8\u4ED6\u4E0D\u9700\u8981\u8BA1\u7B97\uFF0C\u53EA\u662F\u6839\u636E\u5750\u6807\u8FDB\u884C\u7ED8\u5236\uFF0C\u8FD9\u6837\u5C31\u7701\u65F6\u95F4\u4E86\u3002\u4E3B\u8981\u7684\u4EFB\u52A1\u5C31\u4EA4\u7ED9\u4E86\u5F00\u53D1\u4EBA\u5458\uFF0C\u5F00\u53D1\u4EBA\u5458\u8981\u4FDD\u8BC1\u4F4D\u56FE\u7ED8\u5236\u4FE1\u606F\u7684\u51C6\u786E\uFF09",-1),_=e("p",null,"\u{1F98D}DOM \u5F53\u6709\u5143\u7D20\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4E0D\u4F1A\u5BF9\u6574\u4E2A\u9875\u9762\u8FDB\u884C\u6E05\u9664\uFF0C\u800C\u662F\u53EA\u5C06\u76F8\u5E94\u7684\u5143\u7D20\u8FDB\u884C\u6539\u53D8\uFF0C\u7136\u540E\u6D4F\u89C8\u5668\u91CD\u65B0 layout\uFF0C\u91CD\u7ED8\u989C\u8272\u7B49\u7B49\uFF0C\u8FD9\u4E00\u5207\u90FD\u662F\u7531\u6D4F\u89C8\u5668\u8FDB\u884C\u7684\uFF0C\u8BA1\u7B97\u7684\u8FC7\u7A0B\u5E94\u8BE5\u4F1A\u5C06\u53D8\u5316\u5143\u7D20\u7684\u7236\u7EA7\u5143\u7D20\u53CA\u7236\u7EA7\u4E00\u76F4\u5411\u4E0A\u8BA1\u7B97\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u663E\u7136\u5C31\u6CA1\u6709\u4F4D\u56FE\u7684\u90A3\u79CD\u5750\u6807\u6765\u7684\u5FEB\uFF0C\u6E32\u67D3\u7684\u8FC7\u7A0B\u4E5F\u662F DOM \u4F1A\u6D89\u53CA\u7236\u7EA7\u7236\u7EA7\u7B49\u76F8\u5173\u7684\u5143\u7D20\uFF0C\u4F4D\u56FE\u5219\u4E0D\u4F1A\u8003\u8651\u8FD9\u4E9B\uFF0C\u5F00\u53D1\u4EBA\u5458\u600E\u4E48\u5199\uFF0C\u6D4F\u89C8\u5668\u5C31\u6267\u884C\u600E\u4E48\u6E32\u67D3\u3002",-1);function l(i,p){return a(),s(t,null,[r,d,_],64)}var m=n(o,[["render",l]]);export{m as default};
