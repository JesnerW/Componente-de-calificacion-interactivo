import{d as f,r as o,v as d,x as t,L as s,M as p,N as m,y as u,t as c,O as v}from"./entry.aa759d7c.js";const g=""+new URL("icon-star.3e70bfda.svg",import.meta.url).href,b=""+new URL("illustration-thank-you.a52834b7.svg",import.meta.url).href,k=["hidden"],w={class:"start"},y=["src"],x=t("h1",null,"How did we do?",-1),C=t("p",null," Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! ",-1),B={class:"option"},L=["onClick"],S=["disabled"],T=["hidden"],U=["src"],D={class:"info"},E=t("h2",null,"Thank you!",-1),F=t("p",null," We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch! ",-1),R=f({__name:"index",setup(I){const a=o(!1),r=o(!0),e=o(3),i=o([{id:1,status:!1},{id:2,status:!1},{id:3,status:!1},{id:4,status:!1},{id:5,status:!1}]);function _(n){e.value!==0&&(i.value[e.value-1].status=!1),i.value[n.id-1].status=!0,e.value=n.id,r.value=!1}function h(){a.value=!0}return(n,M)=>(c(),d("main",null,[t("div",{class:"card",hidden:s(a)},[t("div",w,[t("img",{src:s(g),alt:"icon start"},null,8,y)]),x,C,t("div",B,[(c(!0),d(p,null,m(s(i),l=>(c(),d("div",{class:v(["start number",l.status&&"active"]),onClick:N=>_(l)},u(l.id),11,L))),256))]),t("button",{onClick:h,disabled:s(r)},"SUBMIT",8,S)],8,k),t("div",{class:"card finish",hidden:!s(a)},[t("img",{src:s(b),alt:"icon finish"},null,8,U),t("div",D," You selected "+u(s(e))+" out of "+u(s(i).length),1),E,F],8,T)]))}});export{R as default};