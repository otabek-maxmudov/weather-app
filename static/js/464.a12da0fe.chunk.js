"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[464],{2464:function(s,i,l){l.r(i);var a=l(1413),e=l(8687),n=l(5585),d=l(978),c=l(5763),r=l(1578),x=l(6856),o=l(7425),t=l(184);i.default=(0,e.$j)((function(s){var i=s.app;return(0,a.Z)({},i)}))((function(s){var i=s.currentForecast,l=s.astro_data,a=i.wind_mph,e=i.wind_kph,m=i.wind_dir,h=i.pressure_mb,p=i.pressure_in,j=i.precip_mm,b=i.precip_in,u=i.humidity,g=i.cloud,v=i.gust_mph,N=i.gust_kph,f=i.vis_km,_=i.vis_miles,C=i.air_quality,k=l.sunrise,w=l.sunset,y=l.moonrise,M=l.moonset,F=l.moon_phase,S=l.moon_illumination,D=function(s){var i=s.title,l=s.icon,a=s.children,e=s.extraClass;return(0,t.jsxs)("div",{className:"w-auto bg-white dark:bg-gray-700 text-gray-400 rounded-2xl p-4 ".concat(e),children:[(0,t.jsxs)("h1",{className:"flex font-semibold text-base sm:text-sm text-black dark:text-gray-100 mb-4",children:[(0,t.jsx)("span",{className:"mr-3 text-xl sm:text-lg",children:l}),i]}),(0,t.jsx)("div",{className:"flex gap-x-8 sm:text-xs md:text-sm",children:a})]})};return(0,t.jsxs)("div",{className:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4 sm:mb-14 md:h-auto sm:h-screen",children:[(0,t.jsxs)(D,{title:"Wind",icon:(0,t.jsx)(o.ZhS,{}),extraClass:"lg:col-span-2 md:col-span-2 sm:col-span-2",children:[(0,t.jsxs)("p",{children:[a," m/h"]}),(0,t.jsxs)("p",{children:[e," km/h"]}),(0,t.jsxs)("p",{children:["Direction: ",m]})]}),(0,t.jsxs)(D,{title:"Pressure",icon:(0,t.jsx)(o.Osd,{}),extraClass:"lg:col-span-1 md:col-span-1 sm:col-span-1",children:[(0,t.jsxs)("p",{children:["Millibars: ",h]}),(0,t.jsxs)("p",{children:["Inches: ",p]})]}),(0,t.jsxs)(D,{title:"Precipitation amount",icon:(0,t.jsx)(d.xIr,{}),extraClass:"lg:col-span-1 md:col-span-2 sm:col-span-1",children:[(0,t.jsxs)("p",{children:["Millibars: ",j]}),(0,t.jsxs)("p",{children:["Inches: ",b]})]}),(0,t.jsx)(D,{title:"Humidity",icon:(0,t.jsx)(n.$2C,{}),extraClass:"lg:col-span-1 md:col-span-1 sm:col-span-1",children:(0,t.jsxs)("p",{children:[u," %"]})}),(0,t.jsx)(D,{title:"Cloud",icon:(0,t.jsx)(o.FHd,{}),extraClass:"lg:col-span-1 md:col-span-1 sm:col-span-1",children:(0,t.jsxs)("p",{children:[g," %"]})}),(0,t.jsxs)(D,{title:"Wind gust",icon:(0,t.jsx)(o.MdK,{}),extraClass:"lg:col-span-1 md:col-span-1 sm:col-span-1",children:[(0,t.jsxs)("p",{children:[v," m/h"]}),(0,t.jsxs)("p",{children:[N," km/h"]})]}),(0,t.jsxs)(D,{title:"Visibility",icon:(0,t.jsx)(x.O9$,{}),extraClass:"lg:col-span-1 md:col-span-1 sm:col-span-1",children:[(0,t.jsxs)("p",{children:[f," km"]}),(0,t.jsxs)("p",{children:[_," mi"]})]}),(0,t.jsx)(D,{title:"Astronomy",icon:(0,t.jsx)(c.HwV,{}),extraClass:"lg:col-span-4 md:col-span-3 sm:col-span-2",children:(0,t.jsxs)("div",{className:"flex flex-wrap gap-x-14 md:gap-x-10 sm:gap-x-0 text-justify",children:[(0,t.jsxs)("div",{className:"lg:basis-auto md:basis-1/4 sm:basis-1/3",children:[(0,t.jsx)("b",{children:"Sunrise"}),(0,t.jsx)("p",{children:k})]}),(0,t.jsxs)("div",{className:"lg:basis-auto md:basis-1/4 sm:basis-1/3",children:[(0,t.jsx)("b",{children:"Sunset"}),(0,t.jsx)("p",{children:w})]}),(0,t.jsxs)("div",{className:"lg:basis-auto md:basis-1/4 sm:basis-1/3",children:[(0,t.jsx)("b",{children:"Moonrise"}),(0,t.jsx)("p",{children:y})]}),(0,t.jsxs)("div",{className:"lg:basis-auto md:basis-1/4 sm:basis-1/3",children:[(0,t.jsx)("b",{children:"Moonset"}),(0,t.jsx)("p",{children:M})]}),(0,t.jsxs)("div",{className:"lg:basis-auto md:basis-1/4 sm:basis-1/3",children:[(0,t.jsx)("b",{children:"Moon phase"}),(0,t.jsx)("p",{children:F})]}),(0,t.jsxs)("div",{className:"lg:basis-auto md:basis-1/4 sm:basis-1/3",children:[(0,t.jsx)("b",{children:"Moon illumination"}),(0,t.jsx)("p",{children:S})]})]})}),(0,t.jsx)(D,{title:"Air quality",icon:(0,t.jsx)(r.dcM,{}),extraClass:"lg:col-span-4 md:col-span-3 sm:col-span-2",children:(0,t.jsxs)("div",{className:"flex flex-wrap gap-x-20 md:gap-x-10 sm:gap-x-0 text-justify",children:[(0,t.jsxs)("div",{className:" lg:basis-auto md:basis-1/4 sm:basis-1/3",children:[(0,t.jsx)("b",{children:"Carbon Monoxide"}),(0,t.jsx)("p",{children:null===C||void 0===C?void 0:C.co.toFixed()})]}),(0,t.jsxs)("div",{className:" lg:basis-auto md:basis-1/4 sm:basis-1/3",children:[(0,t.jsx)("b",{children:"Nitrogen Dioxide"}),(0,t.jsx)("p",{children:null===C||void 0===C?void 0:C.no2.toFixed()})]}),(0,t.jsxs)("div",{className:" lg:basis-auto md:basis-1/4 sm:basis-1/3",children:[(0,t.jsx)("b",{children:"Ozone"}),(0,t.jsx)("p",{children:null===C||void 0===C?void 0:C.o3.toFixed()})]}),(0,t.jsxs)("div",{className:" lg:basis-auto md:basis-1/4 sm:basis-1/3",children:[(0,t.jsx)("b",{children:"Sulfur Dioxide"}),(0,t.jsx)("p",{children:null===C||void 0===C?void 0:C.so2.toFixed()})]}),(0,t.jsxs)("div",{className:" lg:basis-auto md:basis-1/4 sm:basis-1/3",children:[(0,t.jsx)("b",{children:"PM10"}),(0,t.jsx)("p",{children:null===C||void 0===C?void 0:C.pm10.toFixed()})]})]})})]})}))}}]);
//# sourceMappingURL=464.a12da0fe.chunk.js.map