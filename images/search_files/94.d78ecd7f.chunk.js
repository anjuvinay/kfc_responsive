(this["webpackJsonpreusable-comps"]=this["webpackJsonpreusable-comps"]||[]).push([[94],{1046:function(e,t,a){"use strict";var s=a(28),n=a(4),c=a(757),i=a(264),d=a(265),l=a(20),r=a(765),o=a(185),O=a.n(o),u=a(27),E=a.n(u),j=a(10),m=a(37),T=a(7),p=a(789),b=a(854),N=a(775),v=a(96),_=a(5),h=void 0;t.a=function(e){var t,a=e.orderItem,o=Object(m.c)((function(e){return e.tenantReducer})),u=o||{},R=u.currencySymbol,A=u.currencyConversionFactor,C=u.addHope,I=u.carryBag,x=Object(m.c)((function(e){return e.paymentsContentReducer})).tendersContent.items,S=void 0===x?[]:x,D=a.fulfillmentDateTime,f=a.deliveryAddress,y=a.store,L=a.foodLines,M=a.subTotal,g=a.total,U=a.taxLines,P=a.paymentReferences,F=a.posOrderId,H=a.inclusiveTaxTotal,G=a.additionalChargeLines,V=a.discountTotal,B=a.service,Y=y.phoneNumber,X=r.d.YOUR_ORDER,k=r.d.DELIVER_TO,K=r.d.PAYMENT,w=r.d.ORDER_FROM,W=r.d.GET_DIRECTION,q=r.d.TOTAL,Q=r.d.SUBTOTAL,J=r.d.ORDER,z=r.d.AT,Z=r.d.COMPLETED,$=r.d.GST,ee=r.d.DISCOUNT,te=r.d.SEARCH_IN_CART,ae=r.d.LARGE_CARRY_BAG,se=r.d.ADD_HOPE_TEXT,ne=Object(l.s)(D,"ll"),ce=Object(l.s)(D,"h:mm A"),ie=Object(n.useState)(""),de=Object(s.a)(ie,2),le=de[0],re=de[1],oe=Object(n.useState)(""),Oe=Object(s.a)(oe,2),ue=Oe[0],Ee=Oe[1],je=Object(n.useState)(0),me=Object(s.a)(je,2),Te=me[0],pe=me[1],be=Object(n.useState)(0),Ne=Object(s.a)(be,2),ve=Ne[0],_e=Ne[1],he=Object(n.useState)([]),Re=Object(s.a)(he,2),Ae=Re[0],Ce=Re[1],Ie=Object(n.useState)(!1),xe=Object(s.a)(Ie,2),Se=xe[0],De=xe[1],fe=Object(m.b)();Object(n.useEffect)((function(){fe(Object(N.a)({object:Object(v.a)(),contentFull:{content_type:"tenders",include:5,select:"sys.id,fields"}}))}),[]),Object(n.useEffect)((function(){if(Object(T.S)(C,I)){var e={setAddHopeDataExistsId:Ee,setAddHopeDataPrice:pe},t={setCarryBagDataExistsId:re,setCarryBagDataPrice:_e};Object(p.i)(a,C,I,te,e,t,o);var s=Object(T.yb)(L,C,I);Ce(s)}}),[a]);var ye=function(e){return(e/A).toFixed(2)};return Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:"reciept-header",children:[Object(_.jsx)("span",{className:"your-order",children:Object(j.e)(X)}),Object(_.jsxs)("span",{className:"receipt-number",children:[Object(j.e)(J),"# ",F]})]}),Object(_.jsx)("hr",{className:"horizontal-bar"}),Object(_.jsxs)("div",{className:"reciept-order-detail",children:[Object(_.jsxs)("div",{className:"reciept-details-heading",children:[Object(_.jsx)("span",{className:"receipt-sub-heading",children:Object(j.e)(Z)}),Object(_.jsx)("span",{className:"receipt-sub-detail",children:ne+" ".concat(Object(j.e)(z)," ")+ce})]}),f&&Object(_.jsxs)("div",{className:"reciept-details-heading",children:[Object(_.jsx)("span",{className:"receipt-sub-heading",children:Object(j.e)(k)}),Object(_.jsxs)("span",{className:"receipt-sub-detail width-style-lg",children:[(null===f||void 0===f?void 0:f.addressLines[2])&&Object(_.jsxs)("span",{children:[null===f||void 0===f?void 0:f.addressLines[2],", "]}),(null===f||void 0===f?void 0:f.addressLines[1])&&Object(_.jsxs)("span",{children:[null===f||void 0===f?void 0:f.addressLines[1],", "]}),(null===f||void 0===f?void 0:f.addressLines[0])&&Object(_.jsxs)("span",{children:[null===f||void 0===f?void 0:f.addressLines[0],", "]}),(null===f||void 0===f?void 0:f.state)&&Object(_.jsxs)("span",{children:[null===f||void 0===f?void 0:f.state,", "]}),(null===f||void 0===f?void 0:f.pinCode)&&Object(_.jsxs)("span",{children:[null===f||void 0===f?void 0:f.pinCode,", "]}),(null===f||void 0===f?void 0:f.country)&&Object(_.jsx)("span",{children:null===f||void 0===f?void 0:f.country})]})]}),Object(_.jsxs)("div",{className:"reciept-details-heading",children:[Object(_.jsx)("span",{className:"receipt-sub-heading",children:Object(j.e)(K)}),Object(_.jsx)("span",{className:"receipt-sub-detail",children:function(){var e,t,a,s,n,c,i,d,l=O()(P,{}),r=O()(S.filter((function(e){var t;return(null===e||void 0===e||null===(t=e.fields)||void 0===t?void 0:t.title)===(null===l||void 0===l?void 0:l.paymentType)})),{});return"Only image"===(null===r||void 0===r||null===(e=r.fields)||void 0===e?void 0:e.displayFormat)?Object(_.jsx)("img",{src:null===r||void 0===r||null===(t=r.fields)||void 0===t||null===(a=t.icon)||void 0===a||null===(s=a.fields)||void 0===s||null===(n=s.desktopImage)||void 0===n||null===(c=n.fields)||void 0===c||null===(i=c.file)||void 0===i?void 0:i.url,alt:"paymentMethod"}):Object(_.jsx)("span",{className:"dateCompleted",children:null===r||void 0===r||null===(d=r.fields)||void 0===d?void 0:d.displayName})}()})]}),Object(_.jsxs)("div",{className:"reciept-details-heading",children:[Object(_.jsx)("span",{className:"receipt-sub-heading",children:Object(j.e)(w)}),null!==y&&void 0!==y&&Object(_.jsxs)("span",{className:"receipt-sub-detail width-style-lg",children:[y.name,Object(_.jsx)("br",{}),null===y||void 0===y||null===(t=y.address)||void 0===t?void 0:t.addressLines]})]}),Object(_.jsxs)("div",{className:"CompletedCallAndDirection mt-2",id:"DirectionTest",children:[Object(_.jsx)("span",{children:" "}),Object(_.jsxs)("span",{className:"callAndDirection",children:[Object(_.jsxs)("span",{className:"KfcphoneNums",children:[Object(_.jsx)("img",{src:i.a,alt:"phone",className:"KfcphoneIcon"}),Object(_.jsx)("a",{href:"tel:"+Y,className:"anchorTags",children:function(e){e.substr(0,e.indexOf(" "));var t=e.substr(e.indexOf(" ")+1);return t.slice(0,3)+"-"+t.slice(3,6)+"-"+t.slice(6)}(Y)})]}),Object(_.jsxs)("span",{className:"KfcphoneNums",id:"DirectionClick",onClick:function(){return De(!0)},children:[Object(_.jsx)("img",{src:d.a,alt:"phone",className:"KfcDirectionIcon"}),Object(j.e)(W)]})]})]})]}),Object(_.jsx)("section",{className:"reciept-accordian",children:Object(_.jsx)(c.a,{header:"".concat(Ae.length," ITEM"),children:Ae.map((function(e){return Object(_.jsx)("section",{className:"",children:Object(_.jsxs)("div",{className:"reciept-order-item",children:[Object(_.jsxs)("div",{className:"reciept-item-details",children:[Object(_.jsx)("div",{className:"item-count-box mr",children:Object(_.jsx)("span",{className:"item-count ml",children:e.quantity})}),Object(_.jsxs)("div",{className:"item-desc-section",children:[Object(_.jsx)("span",{className:"item-desc",children:e.item.displayName}),Object(_.jsx)("span",{className:"item-desc-quantity",children:(t=e.item,E()(t,"modGrps",[]).map((function(e){return e.modifiers})).flat().map((function(e){return"".concat(e.quantity,"x ").concat(e.name)})).join())})]})]}),Object(_.jsxs)("span",{className:"item-amount",children:[R,ye.call(h,e.item.quantity*e.item.unitPrice)," "]})]})});var t}))},"orderItem-".concat(a.id))}),Object(_.jsxs)("div",{className:"reciept-order-detail",children:[Object(_.jsxs)("div",{className:"reciept-payment-details",children:[Object(_.jsx)("span",{className:"payment-type",children:Object(j.e)(Q)}),Object(_.jsxs)("span",{className:"payment-amount",children:[R,ye(M)]})]}),U&&Object(_.jsxs)("div",{className:"reciept-payment-details",children:[Object(_.jsx)("span",{className:"payment-type",children:$}),Object(_.jsxs)("span",{className:"payment-amount",children:[R,ye(H)]})]}),G.map((function(e,t){return Object(_.jsxs)("div",{className:"reciept-payment-details",children:[Object(_.jsxs)("span",{className:"payment-type",children:[" ",e.chargeType]}),Object(_.jsxs)("span",{className:"payment-amount",children:[R,ye.call(h,e.amount)," "]})]},t)})),V>0&&Object(_.jsxs)("div",{className:"reciept-payment-details",children:[Object(_.jsx)("span",{className:"payment-type",children:Object(j.e)(ee)}),Object(_.jsxs)("span",{className:"payment-amount",children:[" ","- ",R,ye(V)]})]}),"PICKUP"===B.toUpperCase()&&le&&Object(_.jsxs)("div",{className:"reciept-payment-details",id:"priceListData",children:[Object(_.jsx)("span",{className:"payment-type",id:"fontStyle",children:Object(j.e)(ae)}),Object(_.jsx)("span",{className:"payment-amount",id:"amountStyle",children:ve})]}),Boolean(ue)&&Object(_.jsxs)("div",{className:"reciept-payment-details",id:"priceListData",children:[Object(_.jsx)("span",{className:"payment-type",id:"fontStyle",children:Object(j.e)(se)}),Object(_.jsx)("span",{className:"payment-amount",id:"amountStyle",children:Te})]}),Object(_.jsxs)("div",{className:"reciept-payment-details mt-4",children:[Object(_.jsx)("span",{className:"payment-total",children:Object(j.e)(q)}),Object(_.jsxs)("span",{className:"payment-total-amount",children:[R,ye(g)]})]}),Se&&Object(_.jsx)("div",{children:Object(_.jsx)(b.a,{"data-testid":"map-modal",isOpen:Se,handleClose:function(){return De(!1)},OrderReducerData:a})})]})]})}},1272:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(28),c=a(4),i=a(37),d=a(44),l=a(10),r=a(760),o=a(133),O=a(1046),u=a(3),E=function(e){var t,a,s;return(null===e||void 0===e?void 0:e.fulfillmentDateTime)&&(null===e||void 0===e||null===(t=e.store)||void 0===t?void 0:t.phoneNumber)&&(null===e||void 0===e||null===(a=e.foodLines)||void 0===a?void 0:a.length)&&(null===e||void 0===e?void 0:e.subTotal)&&(null===e||void 0===e?void 0:e.total)&&(null===e||void 0===e||null===(s=e.paymentReferences)||void 0===s?void 0:s.length)&&(null===e||void 0===e?void 0:e.posOrderId)&&(null===e||void 0===e?void 0:e.service)},j=a(5);t.default=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],m=t[1],T=Object(i.c)((function(e){return e})),p=T.tenantReducer,b=T.profileReducer,N=T.postOrderReducer,v=(void 0===N?{}:N).orderAccepted,_=void 0===v?{}:v,h=Object(i.b)(),R=Object(d.g)(),A=Object(d.i)().order_id,C=function(){m(!1),R.push({pathname:u.Wc.ORDER_DETAILS})};Object(c.useEffect)((function(){var e={tenantId:null===p||void 0===p?void 0:p.tenantId,orderId:A,customerId:null===b||void 0===b?void 0:b.customerId};(null===p||void 0===p?void 0:p.tenantId)&&h(Object(r.c)(e,(function(e){var t;null!==e&&void 0!==e&&e.id&&(null===e||void 0===e||null===(t=e.status)||void 0===t?void 0:t.toUpperCase())===u.Ac.SENT_TO_POS_COMPLETED&&E(e)?m(!0):C()}),C))}),[null===p||void 0===p?void 0:p.tenantId,null===b||void 0===b?void 0:b.customerId]);var I={role:"dialog",modalTitleId:"order-details-modal",show:!0,classNames:"Base-modal Receipt-modal",showCloseBtn:!0,closeButtonHandler:function(){m(!1),R.push({pathname:u.Wc.HOME_PAGE})},modalTitle:Object(l.e)("orderReceipt"),showBackBtn:!1,closeDataTestId:"close-order-details-modal",id:"OrderDetailsModal",autoFocus:!0};return E(_)&&a?Object(j.jsx)(o.a,Object(s.a)(Object(s.a)({},I),{},{children:Object(j.jsx)("div",{"data-testid":"order-details-receipt-modal",className:"ReceiptModal",children:Object(j.jsx)(O.a,{orderItem:_})})})):null}},760:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return d}));var s=a(1);function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:s.POST_ORDER_ACCEPTED,payload:e,successCallback:t,errorCallback:a}}function c(){return{type:s.RESET_POST_ORDER}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:s.CANCEL_POST_ORDER,payload:e,successCallback:t,errorCallback:a}}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:s.CHECK_IN_REQUEST,payload:e,successCallback:t,errorCallback:a}}},765:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c}));t.d={CLOSED:"CLOSED",SEARCH_IN_CART:"SEARCH_IN_CART",CANCEL:"cancelButtonText",SUBMIT:"Submit",OCCASSOIN_HEADING:"occasionGiveName",OREDER_PLACEHOLDER:"nameThisOrder",YOUR_ORDER:"yourOrder",DELIVER_TO:"deliveryTo",PAYMENT:"payment",ORDER_FROM:"orderFrom",GET_DIRECTION:"getDirection",SUBTOTAL:"subTotal",GST:"GST",REST_HANDLING:"cartIncluTax",DISCOUNT:"DiscountText",GIFT_CARD:"giftCard",TOTAL:"total",COMPLETED:"completed",NO_ORDER_MSG:"noOrderFor12",REFUND_MSG:"refundMessage",HAVE_A_QUESTION:"haveAQuestion",CONNECT_WITH_SPECIALIST:"connectWithASpecialist",YOUR_PAST_ORDER:"yourPastOrder",LOOKING_FOR_OFFER:"lookingForSpecificOrder",ORDER_HISTORY_TAG:"orderHistory",REFUND_INIT:"refund-initiated",SCHEDULE:"scheduled",REORDER_TEXT:"reorderBtn",GOOD_EVE:"",MSG:"message",MY_FAV_MENU:"myFavorite",ADDRESS:"address",ACCOUNT_SETTING:"accoundSetting",SIGN_OUT:"signOut",REFUND_INIT_TEXT:"refundInitiated",ORDER:"order",TRACK_YOUR_ORDER:"trackYourOrder",AT:"at",GET_HELP:"getHelp",LOAD_MORE:"loadMore",VIEWED:"Viewed",OF:"of",ORDER_LOOKUP:"orderLookup",VIEW_MENU:"viewMenu",ADD_TO_OCCASION:"addToOccasion",VIEW_RECEIPT:"viewReceipt",SAVE:"save",EDIT_OCCASSION_DIALOG_TITLE:"Edit Occasion Name",OCCASSION_LABEL:"Occasion Name",SAME_OCCASSIONNAME_ERROR:"Occasion name already exists",EMPTY_OCCASSION_FIELD_ERROR:"Occasion name should not be empty",ADD_TO_CART_OCCASSION:"Add to Cart",STORE_CLOSED_BUTTON_TEXT:"storeClosedButtonText",ITEM_UNAVAILABLE:"Unavailable",VIEW_ORDER_HISTORY_BTN:"View Order History",MY_OCCASSION_TEXT:"My Occasions",MY_OCCASSION_UNAVAILABLE_TITLE:"You haven't created any occasions yet",DELETE_OCCASSION_TEXT:"Delete this Occassion",REORDER_OCCASSION:"Reorder",MY_FAVOURITE_MENU_TITLE_TEXT:"My Favorite Menu",MY_FAVOURITE_NO_ITEMS_TEXT:"You haven't favorited any items yet",MY_FAVOURITE_BROWSE_MENU:"Browse the menu",EDIT_ITEM_TEXT:"editItemText",MORNING:"morning",NOON:"noon",EVENING:"evening",ACCOUNT_FAV_PAGE:"Account - Favorite Menu",KFC_LOVER:"KFC LOVER",TODAY_AT:"todayAt",ADD_ITEM_TO_CART_TEXT:"addItemToCartText",LARGE_CARRY_BAG:"largeCarryBag",ADD_HOPE_TEXT:"addhope",NAME_EXIST:"nameExistMsg",OCCASION_NAME_VALIDATION:"OccasionNameValidation",UNFAVOURITE_ITEM_MESSAGE:"unFavoriteItemMessage",ACCOUNT_ORDERS:"Account - Order History",TRACK_ORDER:"trackOrder",CANCELLED:"Cancelled",DELIVERED:"Delivered",PICK_UP:"PICK UP"};var s={ACCOUNT_SETTINGS_TEXT:"accoundSetting",DELETE_ACCOUNT_TEXT:"deleteAccount",EDIT_PERSONAL_INFO:"editPersonalInfo",FIRST_NAME_TEXT:"firstNamePlaceholder",LAST_NAME_TEXT:"lastNamePlaceHolder",EMAIL_TEXT:"emailPlaceholder",PHONE_NUMBER_TEXT:"phonePlaceholder",CANCEL:"cancelButtonText",SAVE:"save",PERSONAL_INFO_TEXT:"personalInfo",EDIT:"edit",DELETE_ACCOUNT_MESSAGE:"areYouSureToDeleteAccountText",CONFIRM:"confirm",emailHelpText:"emailHelpText",phoneHelpText:"phoneHelpText",firstNameHelpText:"firstNameHelpText",lastNameHelpText:"lastNameHelpText"},n={COMMUNICATION_PREFERENCES_TEXT:"communicationPreferences",LEAVE:"leaveText",SAVE:"save"},c="https://"},775:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(1);function n(e){return{type:s.GET_TENDERS_CONTENT,payload:e}}}}]);