(this["webpackJsonpreusable-comps"]=this["webpackJsonpreusable-comps"]||[]).push([[103],{1105:function(e,t,r){"use strict";var d=r(8),i=r(2),o=r.n(i),c=r(4),n=r(37),a=r(38),u=r(60),s=r(7),l=r(3),O=r(919),v=r(863),f=r(810);t.a=function(e){var t,r,i,b,p,j=e.orderDetails,S=e.updateSetOrderDetails,D=e.children,R=Object(n.b)(),C=Object(c.useContext)(u.a),m=C.userOrderState,E=C.userOrderStateDispatch,I=Object(n.c)((function(e){return e})),h=I.tenantReducer,_=I.appStateReducer,T=I.orderReducer,g=I.postOrderReducer,k=I.cartReducer,y=I.storesReducer,N=I.paymentsContentReducer,w=I.helpReducer,A=I.profileReducer,U=Object(s.Pc)(m.dispositionNew)?JSON.parse(localStorage.getItem(l.ac.DISPOSITION_NEW)):m.dispositionNew,K=function(){S({isMobileView:Object(s.Uc)(window.innerWidth)})},P=(null===(t=window)||void 0===t||null===(r=t.location)||void 0===r?void 0:r.pathname)===(null===l.Wc||void 0===l.Wc?void 0:l.Wc.ORDER_SUMMARY);return Object(c.useEffect)((function(){return window.addEventListener(l.Tc,K),function(){window.removeEventListener(l.Tc,K),S(O.f)}}),[]),Object(c.useEffect)((function(){R&&null!==h&&void 0!==h&&h.tenantId&&Object(O.m)({props:e,dispatch:R,tenantReducer:h,dispositionPaymentPage:U,updateSetOrderDetails:S})}),[R,null===h||void 0===h?void 0:h.tenantId]),Object(c.useEffect)((function(){Object(O.i)({helpReducer:w,updateSetOrderDetails:S})}),[w]),Object(c.useEffect)((function(){null!==_&&void 0!==_&&_.userStatus&&Object(O.g)({appStateReducer:_,updateSetOrderDetails:S})}),[null===_||void 0===_?void 0:_.userStatus]),Object(c.useEffect)((function(){(null!==A&&void 0!==A&&A.favouriteOrders||null!==A&&void 0!==A&&A.savedAddresses)&&Object(O.j)({profileReducer:A,orderDetails:j,updateSetOrderDetails:S})}),[null===A||void 0===A?void 0:A.favouriteOrders,null===A||void 0===A?void 0:A.savedAddresses]),Object(c.useEffect)((function(){var e,t,r,d=sessionStorage.getItem(l.dd.ORDER_TRACKING_CLICK_KFC_ACCOUNT);null!==_&&void 0!==_&&null!==(e=_.userStatus)&&void 0!==e&&e.loggedIn&&d!==(null===A||void 0===A||null===(t=A.basic)||void 0===t?void 0:t.id)&&(sessionStorage.removeItem(l.dd.ORDER_TRACKING_CLICK_KFC_ACCOUNT),S({customerId:null===A||void 0===A||null===(r=A.basic)||void 0===r?void 0:r.id,customer:null===A||void 0===A?void 0:A.basic}))}),[null===_||void 0===_||null===(i=_.userStatus)||void 0===i?void 0:i.loggedIn,null===A||void 0===A||null===(b=A.basic)||void 0===b?void 0:b.id]),Object(c.useEffect)((function(){var e=sessionStorage.getItem(l.dd.ORDER_TRACKING_CLICK_KFC_ACCOUNT);null!==j&&void 0!==j&&j.tenantId&&!e&&(Object(v.p)({dispatch:R,postOrderReducer:g,orderReducer:T,orderDetails:j,updateSetOrderDetails:S}),Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.b.BindOrder();case 2:case"end":return e.stop()}}),e)})))())}),[null===j||void 0===j?void 0:j.tenantId]),Object(c.useEffect)((function(){Object(v.a)({orderReducer:T,paymentsContentReducer:N,orderDetails:j,updateSetOrderDetails:S,props:e})}),[null===T||void 0===T||null===(p=T.response)||void 0===p?void 0:p.order]),Object(c.useEffect)((function(){y&&Object(O.l)({storesReducer:y,updateSetOrderDetails:S})}),[y]),Object(c.useEffect)((function(){!sessionStorage.getItem(l.dd.ORDER_TRACKING_CLICK_KFC_ACCOUNT)&&Object(O.e)({orderReducer:T,postOrderReducer:g})&&(Object(O.k)({postOrderReducer:g,orderReducer:T,paymentsContentReducer:N,isCheckOrderDetails:!1,orderDetails:j,updateSetOrderDetails:S}),null!==j&&void 0!==j&&j.tenantId&&Object(v.n)({dispatch:R,orderDetails:j,updateSetOrderDetails:S}))}),[null===g||void 0===g?void 0:g.orderAccepted,null===T||void 0===T?void 0:T.pastOrderResponse]),Object(c.useEffect)((function(){var e=sessionStorage.getItem(l.dd.ORDER_TRACKING_CLICK_KFC_ACCOUNT);null!==j&&void 0!==j&&j.orderId&&!e&&(Object(v.m)({dispatch:R,postOrderReducer:g,orderReducer:T,orderDetails:j,updateSetOrderDetails:S}),null!==j&&void 0!==j&&j.isGetStoreStatus||!P||(Object(v.c)({orderDetails:j,dispatch:R}),Object(v.l)({orderDetails:j,dispositionPaymentPage:U,userOrderStateDispatch:E}),E({isGetStoreStatus:!0}),S({orderSummarySaveYourOrderCompleted:Object(O.d)(j)})))}),[null===j||void 0===j?void 0:j.orderId]),Object(c.useEffect)((function(){(null===j||void 0===j?void 0:j.orderId)&&(null===j||void 0===j?void 0:j.orderStatus)&&Object(v.j)({dispatch:R,orderDetails:j,cartReducer:k,userOrderState:m,appStateReducer:_,updateSetOrderDetails:S})}),[null===j||void 0===j?void 0:j.orderStatus]),Object(c.useEffect)((function(){Object(f.Q)(j)&&(null===j||void 0===j?void 0:j.displayStagedOrAcceptedPage)&&(null===j||void 0===j?void 0:j.retryCountForGetOrderStatus)>0&&Object(v.m)({dispatch:R,postOrderReducer:g,orderReducer:T,orderDetails:j,updateSetOrderDetails:S})}),[null===j||void 0===j?void 0:j.retryCountForGetOrderStatus]),D}},745:function(e,t,r){"use strict";r.r(t);var d=r(0),i=r(28),o=r(4),c=r(37),n=r(3),a=r(47),u=r(10),s=r(134),l=r(11),O=r(224),v=r(7),f=r(810),b=r(5),p=function(e){var t=e.orderDetails,r=e.updateSetOrderDetails,i=t.orderSummarySaveYourOrderCompleted,c=t.service,p=t.orderStatus;return Object(o.useEffect)((function(){if(Object(v.gd)(c))switch(Object(v.jc)()){case n.H.IN:r({orderSummaryInfoDetailsShowInAccordion:Object(v.Jc)(c)});break;case null===n.H||void 0===n.H?void 0:n.H.AU:r({orderSummaryInfoDetailsShowInAccordion:!0,pickupClosingSoonModal:!0})}}),[c]),Object(o.useEffect)((function(){if(Object(v.gd)(p)&&Object(v.jc)()===(null===n.H||void 0===n.H?void 0:n.H.AU))r({orderSummaryInfoDetailsOpenAccordion:!Object(f.z)(t)})}),[p]),Object(o.useEffect)((function(){i&&Object(v.jc)()===n.H.IN&&(a.b.dark(Object(b.jsx)("div",{className:"img-text-div",children:Object(b.jsxs)("span",{className:"notifyText notifyText-in",children:[Object(b.jsx)("img",{src:null===O.a||void 0===O.a?void 0:O.a.SaveNotifyTick,alt:"tick",className:"TickImg"}),Object(u.e)(null===l.a||void 0===l.a?void 0:l.a.SAVED_THIS_ORDER_IN_MY_FAVORITE_MENU)]})}),{bodyClassName:"toast-for-favorite",hideProgressBar:!0,position:a.b.POSITION.BOTTOM_CENTER}),setTimeout((function(){a.b.dismiss()}),4e3))}),[i]),function(e){return Object(b.jsx)(s.a,Object(d.a)(Object(d.a)({},e),{},{testId:"order_summary_view",importPath:"ORDER_SUMMARY_VIEW"}))}(e)},j=r(919),S=r(863),D=r(1105);t.default=function(e){var t=Object(c.b)(),r=Object(o.useState)(j.f),a=Object(i.a)(r,2),u=a[0],s=a[1],l=Object(o.useCallback)((function(e){s&&s((function(t){return Object(d.a)(Object(d.a)({},t),e)}))}),[]);return Object(o.useEffect)((function(){return window.scrollTo(0,0),window.removeEventListener(n.k,(function(){return Object(S.k)({dispatch:t,beforeUnload:!0,orderDetails:u})}),!0),window.addEventListener(n.k,(function(){return Object(S.k)({dispatch:t,beforeUnload:!0,orderDetails:u})})),Object(S.f)(t),Object(S.d)(t),function(){window.removeEventListener(n.k,(function(){return Object(S.k)({dispatch:t,beforeUnload:!0,orderDetails:u})}),!0),Object(S.k)({dispatch:t,orderDetails:u})}}),[]),Object(o.useEffect)((function(){return Object(S.i)({dispatch:t,orderDetails:u,updateSetOrderDetails:l}),function(){(null===u||void 0===u?void 0:u.dispatchDeliveryOrderTrackerTimer)&&clearTimeout(null===u||void 0===u?void 0:u.dispatchDeliveryOrderTrackerTimer)}}),[null===u||void 0===u?void 0:u.retryCountForGetDeliveryOrderTrackingStatus]),Object(o.useEffect)((function(){(null===u||void 0===u?void 0:u.pickupCancelOrder)&&Object(S.g)({dispatch:t,orderDetails:u,updateSetOrderDetails:l})}),[null===u||void 0===u?void 0:u.pickupCancelOrder]),Object(o.useEffect)((function(){(null===u||void 0===u?void 0:u.isPickupOrderUserConfirmedToCheckIn)&&Object(S.h)({dispatch:t,orderDetails:u,updateSetOrderDetails:l})}),[null===u||void 0===u?void 0:u.isPickupOrderUserConfirmedToCheckIn]),Object(b.jsx)(D.a,Object(d.a)(Object(d.a)({},e),{},{orderDetails:u,updateSetOrderDetails:l,children:Object(b.jsx)(p,Object(d.a)(Object(d.a)({},e),{},{orderDetails:u,updateSetOrderDetails:l}))}))}},760:function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return n}));var d=r(1);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:d.POST_ORDER_ACCEPTED,payload:e,successCallback:t,errorCallback:r}}function o(){return{type:d.RESET_POST_ORDER}}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:d.CANCEL_POST_ORDER,payload:e,successCallback:t,errorCallback:r}}function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:d.CHECK_IN_REQUEST,payload:e,successCallback:t,errorCallback:r}}}}]);