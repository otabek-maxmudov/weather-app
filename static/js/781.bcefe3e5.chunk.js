"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[781],{3781:function(e,r,t){t.r(r);var a=t(1413),n=t(8820),o=t(1479),s=t(2426),c=t.n(s),u=t(8687),l=t(3415),h=t(184);r.default=(0,u.$j)((function(e){var r=e.app;return(0,a.Z)({},r)}),{getCurrentForecast:l.Az,getSearchResult:l.s,getCurrentAstronomy:l.Hd,getWeekdaysForecast:l.$q})((function(e){var r=e.getCurrentForecast,t=e.getSearchResult,a=e.searchResult,s=e.getCurrentAstronomy,u=e.getWeekdaysForecast;return(0,h.jsx)(o.Z,{options:a,onSelect:function(e){r("current.json",{q:e}),s("astronomy.json",{q:e,dt:c()().format("YYYY-MM-DD")}),u("forecast/daily",{q:e})},onSearch:function(e){return t("search.json",{q:e})},notFoundContent:"No Data",allowClear:!0,bordered:!1,placeholder:"Search for places ...",className:"h-6 md:h-8 sm:h-10 w-full dark:text-gray-200 bg-gray transition-colors rounded-lg",clearIcon:(0,h.jsx)(n.XzY,{})})}))}}]);
//# sourceMappingURL=781.bcefe3e5.chunk.js.map