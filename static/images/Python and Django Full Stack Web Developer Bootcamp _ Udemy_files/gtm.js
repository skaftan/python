
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"339",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"UD.me.id"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.amount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-1"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-clp-course-id\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"clp\"===document.body.getAttribute(\"data-hotjar-page\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector('div[data-purpose\\x3d\"introduction-video\"]')){var a=document.querySelector(\".current-price\");return a?a.textContent.replace(\"$\",\"\").trim():\"\"}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){channelType=document.body.getAttribute(\"data-hotjar-channel-type\");hotjarPage=document.body.getAttribute(\"data-hotjar-page\");return\"featured\"===channelType||\"logged-in-homepage\"===hotjarPage})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-hotjar-channel-type\")||void 0})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-purpose"
    },{
      "function":"__r"
    },{
      "function":"__j",
      "vtp_name":"UD.request.locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"ja_JP\"==",["escape",["macro",19],8,16],"||\"ja-JP\"==",["escape",["macro",19],8,16],"||\"jp-JP\"==",["escape",["macro",19],8,16],"||\"jp_JP\"==",["escape",["macro",19],8,16],"})();"]
    },{
      "function":"__j",
      "vtp_name":"UD.visiting.visitor_uuid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_first_paid_purchase"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_avg_rating"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_instructor_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_length_minutes"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_locale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_num_enrollments"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_subcategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_topic"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_locale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"has_made_paid_purchase"
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchases"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseId"
    },{
      "function":"__j",
      "vtp_name":"UD.me.encrypted_affiliate_uid"
    },{
      "function":"__j",
      "vtp_name":"UD.me.encrypted_affiliate_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseSku"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.isMarketingBoostAgreed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.affiliateType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableId"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-course-labels-experiment-hotjar\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"peclp\"===document.body.getAttribute(\"data-hotjar-page\")})();"]
    }],
  "tags":[{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E\"undefined\"===typeof fbq\u0026\u0026(!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\"),fbq(\"init\",\"1457291081167286\"),fbq(\"init\",\"399727027340013\"),fbq(\"track\",\"PageView\"));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":13
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E(function(a,e,f,g,b,c,d){a[b]=a[b]||function(){(a[b].a=a[b].a||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/mc.yandex.ru\/metrika\/tag.js\",\"ym\");ym(53931514,\"init\",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src=\"https:\/\/mc.yandex.ru\/watch\/53931514\" style=\"position:absolute; left:-9999px;\" alt=\"\"\u003E\u003C\/div\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":217
    },{
      "function":"__cl",
      "tag_id":28
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"PKv-COL4z1wQk9e00AM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":38
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"userID",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"excluded",
      "vtp_dimension":["list",["map","index","16","dimension",["macro",2]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"courseview",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",9],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",9]],["map","index","6","dimension","offerdetail"],["map","index","8","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"send",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"15_seconds",
      "vtp_eventLabel":"read",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":124
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"course",
      "vtp_eventLabel":"transaction_purchase",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",6],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":133
    },{
      "function":"__img",
      "metadata":["map"],
      "setup_tags":["list",["tag",78,1]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/1fab027e63e94ad4b34e2e8d70e972d9\/pixel?tag=Purchase",
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"business.udemy.com",
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","True"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackerName":"ufbonly",
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-47",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":146
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"linkshare",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"signup",
      "vtp_eventLabel":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":180
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"j88uCJmGiXkQ7em5ogM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":181
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":186
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":196
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":197
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":201
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"21002562",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":205
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"HsE0CKDW8pABEJPXtNAD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":206
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":207
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":208
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":209
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"828847995",
      "vtp_conversionLabel":"mqA6CMD-5ZIBEPvunIsD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":210
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"828847995",
      "vtp_conversionLabel":"E_BECNaa5pIBEPvunIsD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":211
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":212
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"374972",
      "tag_id":213
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":214
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":215
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=2542116;type=gwg;cat=udemy000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1;num=1?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":216
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":221
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":222
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":223
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":224
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715649091",
      "vtp_conversionLabel":"Bc8dCNaqmagBEMPgn9UC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":228
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715649091",
      "vtp_conversionLabel":"OR8bCLmumagBEMPgn9UC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":229
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":374
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":375
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",7],
      "vtp_enableRdpCheckbox":true,
      "tag_id":376
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"GiYPCISDssMBEOSX7KMD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":377
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":378
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=visit"],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":387
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=purchase-success\u0026order_value=",["escape",["macro",6],12],"\u0026new=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":388
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=signup-success"],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":389
    },{
      "function":"__cl",
      "tag_id":390
    },{
      "function":"__cl",
      "tag_id":391
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_139",
      "tag_id":392
    },{
      "function":"__cl",
      "tag_id":393
    },{
      "function":"__cl",
      "tag_id":394
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_344_340","164179_344_392","164179_344_46"],
      "vtp_uniqueTriggerId":"164179_344",
      "tag_id":395
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_340",
      "tag_id":396
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_392",
      "tag_id":398
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_46",
      "tag_id":400
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_386_385","164179_386_320"],
      "vtp_uniqueTriggerId":"164179_386",
      "tag_id":401
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_386_385",
      "tag_id":402
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_386_320",
      "tag_id":404
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/cl.qualaroo.com\/ki.js\/34436\/6GL.js\";b.parentNode.insertBefore(a,b)},1)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=document.body.getAttribute(\"data-clp-course-id\");a\u0026\u0026fbq(\"track\",\"ViewContent\",{content_ids:a,content_type:\"product\",course_avg_rating:",["escape",["macro",26],8,16],",course_category:",["escape",["macro",27],8,16],",course_instructor_name:",["escape",["macro",28],8,16],",course_language:",["escape",["macro",23],8,16],",course_length_minutes:",["escape",["macro",29],8,16],",course_locale:",["escape",["macro",30],8,16],",course_num_enrollments:",["escape",["macro",31],8,16],",course_subcategory:",["escape",["macro",32],8,16],",course_topic:",["escape",["macro",33],8,16],",user_language:",["escape",["macro",24],8,16],",\nuser_locale:",["escape",["macro",34],8,16],",user_location:",["escape",["macro",25],8,16],",has_made_paid_purchase:",["escape",["macro",35],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":40
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003EUD.GoogleAnalytics.setValue(\"dimension7\",\"true\");UD.GoogleAnalytics.trackEvent(\"ismember\",\"ismember\",\"ismember\",void 0,void 0,{nonInteraction:1});fbq(\"trackCustom\",\"isMember\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var b=document.body.getAttribute(\"data-clp-course-id\")||\"NA\",a=document.querySelector(\".price-text__current\");a=a?a.textContent.replace(\"$\",\"\").trim().match(\/\\d+\/):null;void 0!==UD.GoogleAnalytics\u0026\u0026(UD.GoogleAnalytics.setValue(\"dimension5\",b),UD.GoogleAnalytics.setValue(\"dimension6\",\"conversionintent\"),UD.GoogleAnalytics.setValue(\"dimension8\",a),UD.GoogleAnalytics.trackEvent(\"addtocartclick\",b,a,{nonInteraction:1}));fbq(\"track\",\"AddToCart\",{content_name:\"Shopping Cart\",content_ids:b,content_type:\"product\"})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":60
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=",["escape",["macro",37],8,16],".map(function(a){return a.buyableId}),c=",["escape",["macro",37],8,16],".map(function(a){course=a.courseAnalytics;return{id:a.buyableId,quantity:1,course_avg_rating:course.course_avg_rating,course_category:course.course_category,course_instructor_name:course.course_instructor_name,course_language:course.course_language,course_length_minutes:course.course_length_minutes,course_locale:course.course_locale,course_num_enrollments:course.course_num_enrollments,course_subcategory:course.course_subcategory,\ncourse_topic:course.course_topic}});fbq(\"track\",\"Purchase\",{content_ids:b,content_type:\"product\",contents:c,order_id:",["escape",["macro",38],8,16],",value:",["escape",["macro",6],8,16],",currency:\"USD\",user_language:",["escape",["macro",24],8,16],",user_locale:",["escape",["macro",34],8,16],",user_location:",["escape",["macro",25],8,16],",has_made_paid_purchase:",["escape",["macro",35],8,16],",is_first_paid_purchase:",["escape",["macro",22],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/6554.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efbq(\"trackCustom\",\"SignupSuccess\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":128
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Efbq(\"trackCustom\",\"NewUserPurchase\",{value:",["escape",["macro",6],8,16],",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"273-CKQ-053\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efbq(\"trackCustom\",\"LinkshareSignupClick\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"\/\/d.impactradius-event.com\/A380319-1bcf-4b7b-9299-22e85825ceea1.js\",\"script\",\"ire\",document,window);ire(\"identify\",{customerId:",["escape",["macro",40],8,16],",customerEmail:",["escape",["macro",41],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":175
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"ny0dy\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":176
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":177
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new XMLHttpRequest;a.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);a.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");a.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");a.send(JSON.stringify({type:\"aff\"}))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new XMLHttpRequest;a.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);a.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");a.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");a.send(JSON.stringify({type:\"paid_acq\"}))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"88dg1\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/javascript\"\u003E(function(a){window.DataLayer||(window.DataLayer={});DataLayer.events||(DataLayer.events={});DataLayer.events.SPIVersion=DataLayer.events.SPIVersion||\"3.2\";DataLayer.events.SiteSection=\"1\";var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document.location.protocol+\"\/\/intljs.rmtag.com\/111655.ct.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":203
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var Q={affiliateConfig:{ranMID:\"39197\",discountType:\"item\",includeStatus:\"false\",tagType:\"mop\",allowCommission:(\"linkshare\"===",["escape",["macro",48],8,16],").toString()},displayConfig:{rdMID:\"8712\"},orderid:",["escape",["macro",39],8,16],",currency:\"USD\",customerStatus:\"CUSTOMER_STATUS\",conversionType:\"Sale\",customerID:",["escape",["macro",40],8,16],",discountCode:",["escape",["macro",42],8,16],",taxAmount:0,optionalData:{},lineitems:[{quantity:1,unitPrice:",["escape",["macro",43],8,16],"\/100,unitPriceLessTax:",["escape",["macro",43],8,16],"\/100,SKU:",["escape",["macro",49],8,16],",\nproductName:",["escape",["macro",49],8,16],"}]};!function(e,m,y){var f=e.rakutenDataLayerName||\"DataLayer\";e[f]=e[f]||{};e[f].events=e[f].events||{};e[f].events.SPIVersion=\"3.4.1\";e[f].Sale=e[f].Sale||{};e[f].Sale.Basket=e[f].Sale.Basket||{};y.Ready=e[f].Sale.Basket.Ready\u0026\u0026e[f].Sale.Basket.Ready+1||1;e[f].Sale.Basket=y;var J=function(a){for(var b=a+\"\\x3d\",c=m.cookie.split(\";\"),d=0;d\u003Cc.length;d++){for(a=c[d];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"};\ny=function(a){var b=a||\"\",c={};if(a||(b=J(\"rmStore\")),b){for(;b!==decodeURIComponent(b);)b=decodeURIComponent(b);a=b.split(\"|\");for(b=0;b\u003Ca.length;b++)c[a[b].split(\":\")[0]]=a[b].split(\":\")[1]}return c};var I={};I=y();var g=function(a,b,c,d){c=c||\"\";d=d||{};a=I[a||\"\"];b=d[b||\"\"];c=(a=(d=d.ignoreCookie||!1)?0:a)||b||c;return c=(\"string\"!=typeof c||\"false\"!==c.toLowerCase())\u0026\u0026c,c},K=function(a,b,c,d,e){var f=m.createElement(a),g=-1\u003Cm.location.protocol.indexOf(\"s\")?\"https:\":\"http:\",q;for(q in b=b.replace(\"https:\",\ng),f.src=b,d=d||{},\"script\"==a?d.type=d.type||\"text\/javascript\":(d.style=\"display:none;\",\"img\"==a\u0026\u0026(d.alt=\"\",d.height=\"1\",d.width=\"1\")),d)d.hasOwnProperty(q)\u0026\u0026f.setAttribute(q,d[q]);a=m.getElementsByTagName(c);a=a.length?a[0]:m.getElementsByTagName(\"script\")[0].parentElement;e\u0026\u0026(f.onload=e,f.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||e()});a.appendChild(f)},L=function(a){var b=new Date;b=b.getUTCFullYear()+(\"0\"+(b.getUTCMonth()+1)).slice(-2)+(\"0\"+b.getUTCDate()).slice(-2)+\n(\"0\"+b.getUTCHours()).slice(-2)+(\"0\"+b.getUTCMinutes()).slice(-2);return\"NoOID_\"+(a?a+\"_\":\"\")+Math.round(1E5*Math.random())+\"_\"+b},N=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},b=b||a.affiliateConfig||{},c=g(\"amid\",\"ranMID\",\"\",b)||a.ranMID;if(!c)return!1;var d=\"undefined\"==typeof b.allowCommission||\"false\"!==b.allowCommission;if(!d||!(a.orderid||a.lineitems\u0026\u0026a.lineitems.length))return!1;var R=g(\"adn\",\"domain\",\"track.linksynergy.com\",b),n=g(\"atm\",\"tagType\",\"pixel\",b);d=g(\"adr\",\n\"discountType\",\"order\",b);var k=g(\"acs\",\"includeStatus\",\"false\",b),q=g(\"arto\",\"removeOrderTax\",\"false\",b),A=g(\"artp\",\"removeTaxFromProducts\",\"false\",b),u=g(\"artd\",\"removeTaxFromDiscount\",\"false\",b),p=g(\"atr\",\"taxRate\",a.taxRate||0,b),z=g(\"ald\",\"land\",!1,{})||(b.land\u0026\u0026!0===b.land?J(\"ranLandDateTime\"):b.land)||!1,M=g(\"atrv\",\"tr\",!1,{})||(b.tr\u0026\u0026!0===b.tr?J(\"ranSiteID\"):b.tr)||!1,G=g(\"acv\",\"centValues\",\"true\",b),v=g(\"ancc\",\"nonCentCurrencies\",\"JPY\",b);p=Math.abs(+p);var r=(100+p)\/100;b=a.orderid||L(c);\nb=encodeURIComponent(b);var w=a.currency||\"\";w=encodeURIComponent(w.toUpperCase());var B=!1;if(w\u0026\u0026v){v=(v+\"\").split(\",\");for(var l=0;l\u003Cv.length;l++)v[l]==w\u0026\u0026(B=!0)}var m=function(a){return B\u0026\u0026(a=Math.round(a)),G\u0026\u0026\"false\"!==G?(a*=100,a=Math.round(a)):a=Math.round(100*a)\/100,a+\"\"};v=a.taxAmount?Math.abs(+a.taxAmount):0;var C=a.discountAmount?Math.abs(+a.discountAmount):0;l=a.discountAmountLessTax?Math.abs(+a.discountAmountLessTax):0;!l\u0026\u0026C\u0026\u0026u\u0026\u0026p\u0026\u0026(l=C\/r);l=l||C;u=\"ep\";\"mop\"===n\u0026\u0026(u=\"eventnvppixel\");\nC=(a.customerStatus||\"\")+\"\";n=\"\";C\u0026\u0026(k\u0026\u0026\"EXISTING\"==C.toUpperCase()||k\u0026\u0026\"RETURNING\"==C.toUpperCase())\u0026\u0026(n=\"R_\");k=[];for(var E=C=0;E\u003C(a.lineitems?a.lineitems.length:0);E++)if(a.lineitems[E]){var F=!1,h=e.JSON?JSON.parse(JSON.stringify(a.lineitems[E])):a.lineitems[E],y=+h.quantity||0,D=+h.unitPrice||0,t=+h.unitPriceLessTax;D=t||D||0;A\u0026\u0026p\u0026\u0026!t\u0026\u0026(D\/=r);D*=y;for(var H=0;H\u003Ck.length;H++)t=k[H],t.SKU===h.SKU\u0026\u0026(F=!0,t.quantity+=y,t.totalValue+=D);F||(h.quantity=y,h.totalValue=D,k.push(h));C+=D}F=r=p=A=\"\";\nt={};for(E=0;E\u003Ck.length;E++){h=k[E];D=encodeURIComponent(h.SKU);H=h.totalValue;y=h.quantity;var I=encodeURIComponent(h.productName)||\"\";\"item\"===d.toLowerCase()\u0026\u0026l\u0026\u0026(H-=l*H\/C);h=h.optionalData;for(var x in h)h.hasOwnProperty(x)\u0026\u0026(t[x]=t[x]||\"\",t[x]+=encodeURIComponent(h[x])+\"|\");A+=n+D+\"|\";p+=y+\"|\";r+=m(H)+\"|\";F+=n+I+\"|\"}A=A.slice(0,-1);p=p.slice(0,-1);r=r.slice(0,-1);F=F.slice(0,-1);l\u0026\u0026(l=m(l));v\u0026\u0026(v=m(v));l\u0026\u0026\"order\"===d.toLowerCase()\u0026\u0026(A+=\"|\"+n+\"DISCOUNT\",F+=\"|\"+n+\"DISCOUNT\",p+=\"|0\",r+=\"|-\"+l);\nq\u0026\u0026v\u0026\u0026(A+=\"|\"+n+\"ORDERTAX\",p+=\"|0\",r+=\"|-\"+v,F+=\"|\"+n+\"ORDERTAX\");c=\"https:\/\/\"+R+\"\/\"+u+\"?mid\\x3d\"+c;c+=\"\\x26ord\\x3d\"+b;c+=z?\"\\x26land\\x3d\"+z:\"\";c+=M?\"\\x26tr\\x3d\"+M:\"\";c+=\"\\x26cur\\x3d\"+w;c+=\"\\x26skulist\\x3d\"+A;c+=\"\\x26qlist\\x3d\"+p;c+=\"\\x26amtlist\\x3d\"+r;c+=\"\\x26img\\x3d1\";c+=\"\\x26spi\\x3d\"+e[f].events.SPIVersion;l\u0026\u0026\"item\"===d.toLowerCase()\u0026\u0026(c+=\"\\x26discount\\x3d\"+l);h=a.optionalData||{};for(x in a.discountCode\u0026\u0026(h.coupon=a.discountCode),a.customerStatus\u0026\u0026(h.custstatus=a.customerStatus),a.customerID\u0026\u0026\n(h.custid=a.customerID),l\u0026\u0026(h.disamt=l),h)h.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"\\x3d\"+encodeURIComponent(h[x]));for(x in t)t.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"list\\x3d\"+t[x].slice(0,-1),l\u0026\u0026\"order\"===d.toLowerCase()\u0026\u0026(c+=\"|\"),v\u0026\u0026q\u0026\u0026(c+=\"|\"));c+=\"\\x26namelist\\x3d\"+F;if(8E3\u003Cc.length){for(a=8E3;0\u003Ca;)if(\"\\x26\"==c.charAt(a)){c=c.slice(0,a);break}else a--;c+=\"\\x26trunc\\x3dtrue\"}K(\"img\",c,\"body\")},O=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},\nb=b||a.displayConfig||{},c=g(\"dmid\",\"rdMID\",\"\",b);if(!c||!a.orderid\u0026\u0026!a.conversionType)return!1;var d=g(\"dtm\",\"tagType\",\"js\",b),y=g(\"ddn\",\"domain\",\"tags.rd.linksynergy.com\",b),n=g(\"dis\",\"includeStatus\",\"false\",b),k=g(\"dcomm\",\"allowCommission\",\"notset\",b),q=g(\"duup\",\"useUnitPrice\",\"false\",b),A=g(\"drtp\",\"removeTaxFromProducts\",\"false\",b),u=g(\"drtd\",\"removeTaxFromDiscount\",\"false\",b),p=g(\"dtr\",\"taxRate\",a.taxRate||0,b);b=\"\";\"true\"===k||!0===k||\"1\"===k||1===k?b=\"1\":(\"false\"===k||!1===k||\"0\"===k||0===\nk)\u0026\u0026(b=\"0\");d=\"js\"===d||\"if\"===d||\"img\"===d?d:\"js\";k=\"script\";\"if\"===d?k=\"iframe\":\"img\"===d\u0026\u0026(k=\"img\");\"true\"!==q\u0026\u0026!0!==q\u0026\u0026\"1\"!==q\u0026\u00261!==q||(q=!0);var z=(a.customerStatus||\"\")+\"\",m=\"\";z\u0026\u0026n\u0026\u0026(\"EXISTING\"==z.toUpperCase()||\"RETURNING\"==z.toUpperCase())\u0026\u0026(m=\"R_\");(n=a.orderid)||(n=L((a.conversionType+\"\").toLowerCase()+\"_\"+c));n=encodeURIComponent(m+n);m=encodeURIComponent(a.currency||\"\");z=0;var G=\"\";p=Math.abs(+p);var v=(100+p)\/100,r=a.discountAmount?Math.abs(+a.discountAmount):0,w=a.discountAmountLessTax?\nMath.abs(+a.discountAmountLessTax):0;!w\u0026\u0026r\u0026\u0026u\u0026\u0026p\u0026\u0026(w=r\/v);w=w||r;w=isNaN(w)?0:w;for(u=0;u\u003C(a.lineitems?a.lineitems.length:0);u++)if(a.lineitems[u]){r=+a.lineitems[u].quantity;var B=+a.lineitems[u].unitPriceLessTax*r;(!B||q)\u0026\u0026(A\u0026\u0026p?B=+a.lineitems[u].unitPrice\/v*r:B=+a.lineitems[u].unitPrice*r);B=isNaN(B)?0:B;z+=B;G+=encodeURIComponent(a.lineitems[u].SKU)+\",\"}z=Math.round(100*(z-w))\/100;G=G.slice(0,-1);a=\"https:\/\/\"+y+\"\/\"+d+\"\/\"+c;a+=\"\/?pt\\x3dconv\";a+=\"\\x26orderNumber\\x3d\"+n;a+=\"\\x26spi\\x3d\"+e[f].events.SPIVersion;\nz\u0026\u0026(a+=\"\\x26price\\x3d\"+z);m\u0026\u0026(a+=\"\\x26cur\\x3d\"+m);b\u0026\u0026(a+=\"\\x26tvalid\\x3d\"+b);G\u0026\u0026(a+=\"\\x26prodID\\x3d\"+G);K(k,a,\"body\")},P=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},b=a.searchConfig||{},c=1024,d=encodeURIComponent(\"...TRUNCATED\"),m=g(\"smid\",\"rsMID\",\"\",b);if(!m)return!1;var n=g(\"said\",\"accountID\",\"113\",b),k=g(\"sclid\",\"clickID\",\"\",b),q=encodeURIComponent(g(\"sct\",\"conversionType\",a.conversionType\u0026\u0026\"sale\"!==(a.conversionType+\"\").toLowerCase()?a.conversionType:\"conv\",b));K(\"script\",\n\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid\\x3d\"+m,\"body\",null,function(){var b={};if(b.conversionType=q,b.revenue=0,b.currency=encodeURIComponent(a.currency||\"USD\"),b.orderId=encodeURIComponent(a.orderid||L(q)),b.promoCode=encodeURIComponent(a.discountCode||\"\"),k\u0026\u0026(b.ken_gclid=encodeURIComponent(k)),b.discountAmount=+(a.discountAmount||0),b.discountAmount=isNaN(b.discountAmount)?0:Math.abs(b.discountAmount),b.customerStatus=encodeURIComponent(a.customerStatus||\"\"),b.productIDList=\"\",b.productNameList=\n\"\",a.lineitems\u0026\u0026a.lineitems.length){for(var e=0;e\u003Ca.lineitems.length;e++)a.lineitems[e]\u0026\u0026(b.revenue+=+(a.lineitems[e].unitPrice||0)*+a.lineitems[e].quantity,b.productIDList+=(a.lineitems[e].SKU||\"NA\")+\",\",b.productNameList+=(a.lineitems[e].productName||\"NA\")+\",\");b.revenue=Math.round(100*(b.revenue-b.discountAmount))\/100;b.productIDList=encodeURIComponent(b.productIDList.slice(0,-1));b.productNameList=encodeURIComponent(b.productNameList.slice(0,-1));b.productIDList.length\u003Ec\u0026\u0026(b.productIDList=b.productIDList.substring(0,\nc-d.length)+d);b.productNameList.length\u003Ec\u0026\u0026(b.productNameList=b.productNameList.substring(0,c-d.length)+d)}kenshoo.trackConversion(n,m,b)})};e[f].SPI={readRMCookie:J,processRMStoreCookie:y,readRMStoreValue:g,sRAN:N,sDisplay:O,sSearch:P,addElement:K,rmStore:I};N();O();P()}(window,document,Q)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.ym(53931514,\"reachGoal\",\"SIGNUP\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":218
    },{
      "function":"__html",
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.ym(53931514,\"reachGoal\",\"ADD_TO_CART\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":219
    },{
      "function":"__html",
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.ym(53931514,\"reachGoal\",\"PURCHASE\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"1fab027e63e94ad4b34e2e8d70e972d9\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/1fab027e63e94ad4b34e2e8d70e972d9\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar adb_head=document.getElementsByTagName(\"head\")[0],adb_tag=document.createElement(\"script\");adb_tag.src=\"https:\/\/udemy.benesse.co.jp\/js_udemy\/AppMeasurement_js.js\";adb_tag.defer=!0;adb_head.appendChild(adb_tag);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,d,a,e){b[a]=b[a]||[];b[a].push({t:(new Date).getTime(),event:\"snippetRun\"});b=c.getElementsByTagName(d)[0];c=c.createElement(d);a=\"paypalDDL\"!==a?\"\\x26m\\x3d\"+a:\"\";c.async=!0;c.src=\"https:\/\/www.paypal.com\/tagmanager\/pptm.js?t\\x3dxo\\x26id\\x3d\"+e+a;b.parentNode.insertBefore(c,b)})(window,document,\"script\",\"paypalDDL\",\"udemy.com\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":379
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",80,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.paypalDDL=window.paypalDDL||[];paypalDDL.push({event:\"txnSuccess\",txn_id:",["escape",["macro",38],8,16],",tpv:",["escape",["macro",6],8,16],",curr:\"USD\",prcd:",["escape",["macro",42],8,16],",srce:\"other\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":380
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\"});ytag({type:\"yjad_retargeting\",config:{yahoo_retargeting_id:\"L7W82OXY21\",yahoo_retargeting_label:\"\"}});ytag({type:\"yss_retargeting\",config:{yahoo_ss_retargeting_id:\"1001117028\",yahoo_sstag_custom_params:{}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":381
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yss_conversion\",config:{yahoo_conversion_id:\"1001117028\",yahoo_conversion_label:\"N7oaCJGWlccBEJ3bq7wC\",yahoo_conversion_value:\"0\"}});ytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"dSxK7VIOLDUlhexqraaE\",yahoo_ydn_conv_label:\"VJAD6LZA35U102W9UT6686135\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"0\"}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":382
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yss_conversion\",config:{yahoo_conversion_id:\"1001117028\",yahoo_conversion_label:\"BCAiCKantscBEJ3bq7wC\",yahoo_conversion_value:\"0\"}});ytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"dSxK7VIOLDUlhexqraaE\",yahoo_ydn_conv_label:\"A1D9GUOZCCX1QBPLQ7K686506\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"0\"}});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":383
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/create-learning-portal\/"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/tapen\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.js"
    },{
      "function":"_gt",
      "arg0":["macro",4],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_139($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/www.udemy.com\/create-learning-portal\/"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"btn btn-primary btn-huge btn-shadowed btn-lg join-btn"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/affiliate\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/home\/teaching\/onboarding\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?courses\/search\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/learn\/v4\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"subcategory"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/success"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/mobile\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*\\.dev\\.udemy\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"127.0.0.1"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*\\.devs\\.dev-ud\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"localhost"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"add-to-cart"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"signup"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/teaching\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"instructor_analytics"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"signupsuccess=1"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2307940\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2306314\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2306248\/"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?organization\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"udemy.com"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"course-data-ready"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"KZ|RU|BY"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"2u.udemy.com|360E.udemy.com|abtasty.udemy.com|ABD.udemy.com|accesscapital.udemy.com|acemotor.udemy.com|adnatcongsco.udemy.com|adroll.udemy.com|akqa.udemy.com|akhbar.udemy.com|amaysim.udemy.com|Ampush.udemy.com|angelcitydata.udemy.com|anudip.udemy.com|apiheattransfer.udemy.com|aucklandcouncil.udemy.com|avascent.udemy.com|avg.udemy.com|iclas.udemy.com|azumo.udemy.com|bandwidth.udemy.com|bayt.udemy.com|beepi.udemy.com|bethyl.udemy.com|bulletproof.udemy.com|campusexplorer.udemy.com|caribbeanideas.udemy.com|carsguide.udemy.com|cchscarelink.udemy.com|cnu.udemy.com|ciazumano.udemy.com|cision.udemy.com|cloudreach.udemy.com|cacfp.udemy.com|collegespring.udemy.com|chs.udemy.com|continental.udemy.com|dcmservices.udemy.com|delivery.udemy.com|kyna.udemy.com|develappme.udemy.com|dichter-neira.udemy.com|duouniversity.udemy.com|teradyne-std-learning.udemy.com|eastwest.udemy.com|eastexcrude.udemy.com|echo3.udemy.com|edm.udemy.com|esa-ift.udemy.com|crunchyroll.udemy.com|ei.udemy.com|esa.udemy.com|examsoft.udemy.com|fleetmaticsacademy.udemy.com|http:\/\/fullscreen.udemy.com\/|fundamentallabor.udemy.com|fundingcircle.udemy.com|globalstrategies.udemy.com|cdp.udemy.com|glm.udemy.com|companybypeople.udemy.com|harbingergroup.udemy.com|hawaiisnacks.udemy.com|hbconstruction.udemy.com|hostpapa.udemy.com|huddle.udemy.com|ibm.udemy.com|geotecnologies.udemy.com|ignyte.udemy.com|imagineteam.udemy.com|inkblot.udemy.com|insite.udemy.com|instacart.udemy.com|jimenezconsulting.udemy.com|kimble-chase.udemy.com|kookmin.udemy.com|laneconstruct.udemy.com|lightsailenergy.udemy.com|lmuec.udemy.com|lpsoftware.udemy.com|lyft.udemy.com|cmsteam.udemy.com|mareku.udemy.com|MTC.udemy.com|mattex.udemy.com|mb3.udemy.com|melanoma.udemy.com|mmc.udemy.com|meridian.udemy.com|mixpanel.udemy.com|moboom.udemy.com|mre-consulting.udemy.com|michiganlottery.udemy.com|nike.udemy.com|nrtwebservices.udemy.com|ornl.udemy.com|ohiogt.udemy.com|on24.udemy.com|optimizely.udemy.com|optis.udemy.com|odc.udemy.com|oidtraining.udemy.com|pacificwoodtech.udemy.com|pagerduty.udemy.com|pwconsulting.udemy.com|pitneybowes.udemy.com|pjdick.udemy.com|platinum.udemy.com|powertech.udemy.com|powerteq.udemy.com|pretlist.udemy.com|proofpoint.udemy.com|prophet.udemy.com|quemetco.udemy.com|rslempdev.udemy.com|realnet.udemy.com|rottapharm.udemy.com|SLCC.udemy.com|thesentergroup.udemy.com|signaturehealthinc.udemy.com|step.udemy.com|stonehambank.udemy.com|cpfl.udemy.com|sweetwater.udemy.com|syndicatesales.udemy.com|tamkeentech.udemy.com|tegile.udemy.com|tamu.udemy.com|chernin.udemy.com|sideout.udemy.com|wistar.udemy.com|thoughtspot.udemy.com|toptal.udemy.com|tomo.udemy.com|tpipr.udemy.com|trginternational.udemy.com|tricerat.udemy.com|tpl.udemy.com|type1team.udemy.com|redal.udemy.com|unifiedtcg.udemy.com|Valin.udemy.com|viki.udemy.com|walmart.udemy.com|wanhaisg.udemy.com|webair.udemy.com|webanywhere.udemy.com|wedbush.udemy.com|egs.udemy.com|wipro.udemy.com|wolfram.udemy.com|worldpac.udemy.com|xoomworks.udemy.com|xtremeconsulting.udemy.com|yemeksepeti.udemy.com|zeeto.udemy.com|zensar.udemy.com|learning.udemy.com|paulatest.udemy.com"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"organization-manage"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^(va2site|aws-dr|www).udemy.com.*$"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?payment\/^success"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^(aws-dr|www).udemy.com.*$"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/apps\/admin"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_344($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",5],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"full_transaction"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"new_user_transaction_purchase"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/teach\/?$"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/home\/my-courses\/"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"impact_radius"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_386($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"true"
    }],
  "rules":[
    [["if",0,3],["unless",1,2],["add",2,80]],
    [["if",6,7],["add",3,7,8,9,13,18,19,23,26,27,28,30,33,34,37,40,42,71,72,77,78,81,84]],
    [["if",4,5],["add",4],["block",2,6,15,36,38,41,56,0,61,66,69,73,1,79,80,82]],
    [["if",5],["add",4,15,61,44,45,47,48,49,53]],
    [["if",5,9],["unless",8],["add",5,14]],
    [["if",10,11],["add",6]],
    [["if",5,12],["add",10,64]],
    [["if",13,14,15],["add",11,65]],
    [["if",5,16],["add",12,22,25]],
    [["if",5,17],["add",14]],
    [["if",5,18],["add",14]],
    [["if",5,19],["add",14],["block",66]],
    [["if",5,17,20],["add",14]],
    [["if",5,21],["add",14]],
    [["if",5,22],["add",14]],
    [["if",5,23],["add",14]],
    [["if",5,24],["add",14]],
    [["if",5,25],["add",14]],
    [["if",15,30],["add",16,30,32,59,76]],
    [["if",15,31],["add",17]],
    [["if",5,32],["add",20]],
    [["if",33],["add",21]],
    [["if",5,34],["add",24,30,31,35,37,39,43,62,75,83]],
    [["if",5,35],["add",29]],
    [["if",5,36],["add",29]],
    [["if",5,37],["add",29]],
    [["if",0,5,38],["add",36,38,69,79,82]],
    [["if",0,5],["unless",1,39],["add",41,55,66,73]],
    [["if",5,40],["add",46]],
    [["if",42],["unless",41],["add",50]],
    [["if",3],["unless",43],["add",51]],
    [["if",3],["add",52]],
    [["if",3,44],["add",54]],
    [["if",5,26],["add",56],["block",15,66,74,81]],
    [["if",5,45],["unless",46],["add",56]],
    [["if",47,48],["add",56]],
    [["if",5,50],["add",0]],
    [["if",52,53],["add",57]],
    [["if",3,54],["add",58]],
    [["if",55,56],["add",60]],
    [["if",6,57],["add",63]],
    [["if",6,7,38],["add",67,68]],
    [["if",60,61,62,63],["add",70]],
    [["if",61,63],["add",74]],
    [["if",52,64],["add",1]],
    [["if",5,27],["block",15,66,74,81]],
    [["if",5,28],["block",15,66,74,81]],
    [["if",5,29],["block",15,66,74,81]],
    [["if",5,39],["block",56,0]],
    [["if",5,49],["block",56]],
    [["if",5,51],["block",0]],
    [["if",5,58],["block",66]],
    [["if",5,59],["block",66]],
    [["if",3,65],["block",80]]]
},
"runtime":[[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__bzi"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var ha={Tf:!0},ia={};try{ia.__proto__=ha;ea=ia.Tf;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ja=da,ka=function(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(a,b){this.a=a;this.i=b};var qa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ra=function(){this.o={};this.m=!1;this.H={}};ra.prototype.get=function(a){return this.o["dust."+a]};ra.prototype.set=function(a,b){this.m||(a="dust."+a,this.H.hasOwnProperty(a)||(this.o[a]=b))};ra.prototype.has=function(a){return this.o.hasOwnProperty("dust."+a)};var ta=function(a){var b=[],c;for(c in a.o)a.o.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new ra;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};ba=h.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if("length"==a){if(!qa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else qa(a)?this.a[Number(a)]=b:this.i.set(a,b)};ba.get=function(a){return"length"==a?this.length():qa(a)?this.a[Number(a)]:this.i.get(a)};ba.length=function(){return this.a.length};ba.bc=function(){for(var a=ta(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var va=function(a,b){if(qa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.H.hasOwnProperty(d)||delete c.o[d]}};ba=h.prototype;ba.pop=function(){return this.a.pop()};ba.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.a.shift()};ba.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};ba.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
ba.has=function(a){return qa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var wa=function(){function a(f,g){if(b[f]){if(b[f].Ub+g>b[f].max)throw Error("Quota exceeded");b[f].Ub+=g}}var b={},c=void 0,d=void 0,e={jh:function(f){c=f},ve:function(){c&&a(c,1)},lh:function(f){d=f},Ca:function(f){d&&a(d,f)},Gh:function(f,g){b[f]=b[f]||{Ub:0};b[f].max=g},Kg:function(f){return b[f]&&b[f].Ub||0},reset:function(){b={}},rg:a};e.onFnConsume=e.jh;e.consumeFn=e.ve;e.onStorageConsume=e.lh;e.consumeStorage=e.Ca;e.setMax=e.Gh;e.getConsumed=e.Kg;e.reset=e.reset;e.consume=e.rg;return e};var xa=function(a,b){this.H=a;this.P=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new ra;this.a=this.o=void 0};xa.prototype.add=function(a,b){ya(this,a,b,!1)};var ya=function(a,b,c,d){if(!a.i.m)if(a.H.Ca(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.H["dust."+b]=!0}else a.i.set(b,c)};
xa.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.H.Ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};xa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};xa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var za=function(a){var b=new xa(a.H,a);a.o&&(b.o=a.o);b.P=a.P;b.a=a.a;return b};var Ca=function(){},Da=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ea=function(a){return"number"==typeof a&&!isNaN(a)},Ga=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ha=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ia=function(a,b){if(a&&Ga(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ka=function(a,b){if(!Ea(a)||
!Ea(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ma=function(a,b){for(var c=new La,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Na=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Pa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Qa=function(a){return Math.round(Number(a))||0},Ra=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Sa=function(a){var b=[];if(Ga(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ta=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ua=function(){return(new Date).getTime()},La=function(){this.prefix="gtm.";this.values={}};La.prototype.set=function(a,b){this.values[this.prefix+a]=b};La.prototype.get=function(a){return this.values[this.prefix+a]};
var Wa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Xa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ya=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Za=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},$a=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},bb=function(a){for(var b=C,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},cb=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},eb=function(a){var b=[];Na(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var fb=function(a,b){ra.call(this);this.a=a;this.P=b};ka(fb,ra);fb.prototype.toString=function(){return this.a};fb.prototype.bc=function(){return new h(ta(this))};fb.prototype.i=function(a,b){a.H.ve();return this.P.apply(gb(this,a),Array.prototype.slice.call(arguments,1))};var gb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ga(d)?hb(e,d):d};c.prototype.H=function(d){return ib(this.m,d)};c.prototype.o=function(){return b.H};return new c(a,b)};
fb.prototype.Fa=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var ib=function(a,b){for(var c,d=0;d<b.length&&!(c=hb(a,b[d]),c instanceof pa);d++);return c},hb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof fb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.o;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var jb=function(){ra.call(this)};ka(jb,ra);jb.prototype.bc=function(){return new h(ta(this))};var kb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,lb={Fn:"function",Map:"Object",List:"Array"},E=function(a,b,c){for(var d=0;d<b.length;d++){var e=kb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof fb?n="Fn":l instanceof h?n="List":l instanceof jb&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(lb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var mb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,nb=function(a){if(null==a)return String(a);var b=mb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ob=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},pb=function(a){if(!a||"object"!=nb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ob(a,"constructor")&&!ob(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ob(a,b)},F=function(a,b){var c=b||("array"==nb(a)?[]:{}),d;for(d in a)if(ob(a,d)){var e=a[d];"array"==nb(e)?("array"!=nb(c[d])&&(c[d]=[]),c[d]=F(e,c[d])):pb(e)?(pb(c[d])||(c[d]={}),c[d]=F(e,c[d])):c[d]=e}return c};var rb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ta(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=Ha(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.bc(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof jb){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof fb){var t=function(){for(var q=Array.prototype.slice.call(arguments,0),u=0;u<q.length;u++)q[u]=qb(q[u],b);var v=b?b.H:wa(),w=new xa(v);b&&
(w.a=b.a);return f(g.i.apply(g,[w].concat(q)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},qb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=Ha(c,g);if(-1<k)return d[k];if(Ga(g)||Pa(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(pb(g)){var n=
new jb;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new fb("",function(q){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=rb(this.a(u[v]),b);return f((0,this.m.P)(g,g,u))});c.push(g);d.push(r);e(g,r);return r}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var sb={control:function(a,b){return new pa(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.o().Ca(a.length+f.length);return new fb(a,function(){return function(g){var k=za(d);void 0===k.a&&(k.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof pa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.add(e.get(r),l[r]):k.add(e.get(r),void 0);k.add("arguments",new h(l));var t=ib(k,f);if(t instanceof pa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.o();b.Ca(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.o(),c=new jb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ca(g);c.set(e,f)}return c},undefined:function(){}};function tb(a,b){var c=hb(a,b);if(c instanceof pa||c instanceof fb||c instanceof h||c instanceof jb||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var ub=function(){this.m=wa();this.a=new xa(this.m)},vb=function(a,b,c){var d=new fb(b,c);d.m=!0;a.a.set(b,d)};ub.prototype.$b=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};ub.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=tb(this.a,arguments[c]);return b};
ub.prototype.o=function(a,b){var c=za(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=tb(c,arguments[e]);return d};var wb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var xb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=wb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):va(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=wb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):va(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var yb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),zb=new pa("break"),Bb=new pa("continue"),Cb=function(a,b){return this.a(a)+this.a(b)},Db=function(a,b){return this.a(a)&&this.a(b)},Eb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Ha(yb,b))return qb(a[b].apply(a,wb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof fb){var e=wb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ha(xb.supportedMethods,b)){var f=wb(c);f.unshift(this.m);
return xb[b].apply(a,f)}}if(a instanceof fb||a instanceof jb){if(a.has(b)){var g=a.get(b);if(g instanceof fb){var k=wb(c);k.unshift(this.m);return g.i.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof fb?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,wb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Fb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+
b);var d=this.a(b);c.set(a,d);return d},Gb=function(a){var b=za(this.m),c=ib(b,Array.prototype.slice.apply(arguments));if(c instanceof pa)return c},Hb=function(){return zb},Ib=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof pa)return d}},Jb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);ya(b,d,e,!0)}}},Kb=function(){return Bb},Lb=function(a,b,c){var d=new h;b=this.a(b);for(var e=
0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Mb=function(a,b){return this.a(a)/this.a(b)},Nb=function(a,b){return this.a(a)==this.a(b)},Ob=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Pb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=ib(e,c);if(f instanceof pa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof jb||b instanceof h||b instanceof fb)for(var g=b.bc(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=ib(m,c);if(n instanceof pa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Pb(function(e){d.set(a,e);return d},b,c)},Rb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Pb(function(e){var f=za(d);ya(f,a,e,!0);return f},b,c)},Tb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Pb(function(e){var f=za(d);f.add(a,e);return f},b,c)},Ub=function(a){return this.m.get(this.a(a))},Vb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof jb||a instanceof h||a instanceof fb?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:qa(b)&&(c=a[b]));return c},Wb=function(a,b){return this.a(a)>this.a(b)},Xb=function(a,b){return this.a(a)>=this.a(b)},Yb=function(a,b){return this.a(a)===this.a(b)},Zb=function(a,b){return this.a(a)!==this.a(b)},$b=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.H(d);if(e instanceof pa)return e},ac=function(a,b){return this.a(a)<this.a(b)},bc=function(a,b){return this.a(a)<=
this.a(b)},cc=function(a,b){return this.a(a)%this.a(b)},dc=function(a,b){return this.a(a)*this.a(b)},ec=function(a){return-this.a(a)},fc=function(a){return!this.a(a)},gc=function(a,b){return this.a(a)!=this.a(b)},hc=function(){return null},ic=function(a,b){return this.a(a)||this.a(b)},jc=function(a,b){var c=this.a(a);this.a(b);return c},kc=function(a){return this.a(a)},lc=function(a){return Array.prototype.slice.apply(arguments)},mc=function(a){return new pa("return",this.a(a))},nc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof fb||a instanceof h||a instanceof jb)&&a.set(b,c);return c},oc=function(a,b){return this.a(a)-this.a(b)},pc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ga(d)||!Ga(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof pa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof pa&&("return"==f.a||"continue"==f.a)))return f},qc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},rc=function(a){a=this.a(a);return a instanceof fb?"function":typeof a},sc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},tc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.H(f),e instanceof pa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.H(f);if(e instanceof pa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},uc=function(a){return~Number(this.a(a))},vc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},wc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},xc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},yc=function(a,b){return Number(this.a(a))&Number(this.a(b))},zc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Ac=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Cc=function(){this.a=new ub;Bc(this)};Cc.prototype.$b=function(a){return this.a.i(a)};
var Ec=function(a,b){return Dc.a.o(a,b)},Bc=function(a){var b=function(d,e){var f=a.a,g=String(e);sb.hasOwnProperty(d)&&vb(f,g||d,sb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){vb(a.a,String(d),e)};c(0,Cb);c(1,Db);c(2,Eb);c(3,Fb);c(53,Gb);c(4,Hb);c(5,Ib);c(52,Jb);c(6,Kb);c(9,Ib);c(50,Lb);c(10,Mb);c(12,Nb);c(13,Ob);c(47,Qb);c(54,Rb);c(55,Tb);c(15,Ub);c(16,Vb);c(17,Vb);c(18,Wb);c(19,Xb);c(20,Yb);c(21,Zb);c(22,$b);c(23,ac);c(24,bc);c(25,cc);c(26,dc);c(27,
ec);c(28,fc);c(29,gc);c(45,hc);c(30,ic);c(32,jc);c(33,jc);c(34,kc);c(35,kc);c(46,lc);c(36,mc);c(43,nc);c(37,oc);c(38,pc);c(39,qc);c(40,rc);c(41,sc);c(42,tc);c(58,uc);c(57,vc);c(60,wc);c(61,xc);c(56,yc);c(62,zc);c(59,Ac)},Gc=function(){var a=Dc,b=Fc();vb(a.a,"require",b)},Hc=function(a,b){a.a.a.P=b};
var Ic=[],Jc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Kc=function(a){return Jc[a]},Lc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Pc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Qc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Rc=function(a){return Qc[a]};
Ic[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Pc,Rc)+"'"}};var Yc=/['()]/g,Zc=function(a){return"%"+a.charCodeAt(0).toString(16)};Ic[12]=function(a){var b=
encodeURIComponent(String(a));Yc.lastIndex=0;return Yc.test(b)?b.replace(Yc,Zc):b};var $c=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,ad={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},bd=function(a){return ad[a]};Ic[16]=function(a){return a};var dd;
var ed=[],fd=[],gd=[],hd=[],id=[],jd={},kd,ld,md,nd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},od=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=jd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):dd(c,e,b)},qd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=pd(a[e],b,c));
return d},rd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=jd[b];return c?c.priorityOverride||0:0},pd=function(a,b,c){if(Ga(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(pd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=ed[f];if(!g||b.gd(g))return;c[f]=!0;try{var k=qd(g,b,c);k.vtp_gtmEventId=b.id;d=od(k,b);md&&(d=md.ug(d,k))}catch(y){b.Ne&&b.Ne(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[pd(a[l],b,c)]=pd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=pd(a[n],b,c);ld&&(m=m||r===ld.Nb);d.push(r)}return ld&&m?ld.xg(d):d.join("");case "escape":d=pd(a[1],b,c);if(ld&&Ga(a[1])&&"macro"===a[1][0]&&ld.Wg(a))return ld.qh(d);d=String(d);for(var t=2;t<a.length;t++)Ic[a[t]]&&(d=Ic[a[t]](d));return d;case "tag":var q=a[1];if(!hd[q])throw Error("Unable to resolve tag reference "+q+".");return d={Ae:a[2],
index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=sd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},sd=function(a,b,c){try{return kd(qd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var td=function(){var a=function(b){return{toString:function(){return b}}};return{Kd:a("convert_case_to"),Ld:a("convert_false_to"),Md:a("convert_null_to"),Nd:a("convert_true_to"),Od:a("convert_undefined_to"),Zh:a("debug_mode_metadata"),ya:a("function"),tf:a("instance_name"),xf:a("live_only"),zf:a("malware_disabled"),Af:a("metadata"),$h:a("original_vendor_template_id"),Ef:a("once_per_event"),Td:a("once_per_load"),ae:a("setup_tags"),ce:a("tag_id"),de:a("teardown_tags")}}();var ud=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};ka(ud,Error);function vd(a,b){if(Ga(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)vd(a[c],b[c])}};var wd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};ka(wd,Error);var xd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var zd=function(){return function(a,b){a instanceof wd||(a=new wd(a,yd));b&&a.a.push(b);throw a;}};function yd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ea(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Ad=null,Dd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Ad=Bd(a);for(var e=0;e<fd.length;e++){var f=fd[e],g=Cd(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<hd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Cd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ad(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Ad(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Bd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=sd(gd[c],a));return b[c]}};var Ed=function(){this.a={}};function Fd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new ud(c,d,g);}}function Gd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Fd(e,b,d,g);Fd(f,b,d,g)}}}};var Kd=function(a){var b=Hd.B,c=this;this.i=new Ed;this.a={};var d={},e=Gd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Na(a,function(f,g){var k={};Na(g,function(l,m){var n=Id(l,m);k[l]=n.assert;d[l]||(d[l]=n.L)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Jd(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Nd=function(a){return Ld.a[a]||
function(){}};function Id(a,b){var c=nd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Jd;try{return od(c)}catch(d){return{assert:function(e){throw new ud(e,{},"Permission "+e+" is unknown.");},L:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Jd(a,b,c){return new ud(a,b,c)};var Od=!1;var Pd={};Pd.Ph=Ra('');Pd.Dg=Ra('');var Qd=Od,Rd=Pd.Dg,Sd=Pd.Ph;
var fe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ge=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;fe(b,"/*")&&(b=b.slice(0,-2));fe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},he=/^[a-z0-9-]+$/i,ie=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
je=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!he.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!ie.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var q=l.hostname,u=r;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=q.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:q.length===u.length?!0:q.length!==u.length+v?!1:"."===q[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=ge(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ke,le=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.gg&&(l["fix_"+m]=!0),l.Ce=l.Ce||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=r.startTag();
if(q){var u=k.slice(q.length);if(u.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,U:q.U,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var u={};q[2].replace(e,function(v,w,y,x,A){var B=y||x||A||f.test(w)&&w||null,z=document.createElement("div");z.innerHTML=B;u[w]=z.textContent||z.innerText||B});return{tagName:q[1],U:u,Gb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var u=r[q]();return u?(u.type=u.type||q,u.text=k.substr(0,u.length),k=k.slice(u.length),u):null}};l.Ce&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Le=function(){return this[this.length-1]};v.jd=function(z){var D=this.Le();return D&&D.tagName&&D.tagName.toUpperCase()===z.toUpperCase()};v.sg=
function(z){for(var D=0,H;H=this[D];D++)if(H.tagName===z)return!0;return!1};var w=function(z){z&&"startTag"===z.type&&(z.Gb=q.test(z.tagName)||z.Gb);return z},y=t,x=function(){k="</"+v.pop().tagName+">"+k},A={startTag:function(z){var D=z.tagName;"TR"===D.toUpperCase()&&v.jd("TABLE")?(k="<TBODY>"+k,B()):l.ii&&u.test(D)&&v.sg(D)?v.jd(D)?x():(k="</"+z.tagName+">"+k,B()):z.Gb||v.push(z)},endTag:function(z){v.Le()?l.Fg&&!v.jd(z.tagName)?x():v.pop():l.Fg&&(y(),B())}},B=function(){var z=k,D=w(y());k=z;if(D&&
A[D.type])A[D.type](D)};t=function(){B();return w(y())}}();return{append:function(q){k+=q},wh:t,ni:function(q){for(var u;(u=t())&&(!q[u.type]||!1!==q[u.type](u)););},clear:function(){var q=k;k="";return q},oi:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.si="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.ri=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.m=b;a.s=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.U){var t=m.U[r];n+=
" "+r+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Gb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.i=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var g in b)a.a=a.a||!b[g]&&g;ke=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,q){var u,v=r&&r.length||0;for(u=0;u<v;u++)t.call(q,r[u],u)}function d(r,t,q){for(var u in r)r.hasOwnProperty(u)&&t.call(q,u,r[u])}function e(r,
t){d(t,function(q,u){r[q]=u});return r}function f(r,t){r=r||{};d(t,function(q,u){b(r[q])||(r[q]=u)});return r}function g(r){try{return m.call(r)}catch(q){var t=[];c(r,function(u){t.push(u)});return t}}var k={Xf:a,Yf:a,Zf:a,$f:a,hg:a,ig:function(r){return r},done:a,error:function(r){throw r;},zh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(q,u,v){var w="data-ps-"+u;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,u){var v=q.ownerDocument;e(this,{root:q,options:u,Hb:v.defaultView||v.parentWindow,Sa:v,qc:ke("",{gg:!0}),Vc:[q],td:"",ud:v.createElement(q.nodeName),Db:[],Ia:[]});r(this.ud,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Ia,arguments);for(var q;!this.Wb&&this.Ia.length;)q=this.Ia.shift(),"function"===typeof q?this.ng(q):this.Dd(q)};t.prototype.ng=function(q){var u={type:"function",value:q.name||q.toString()};this.pd(u);q.call(this.Hb,this.Sa);this.Re(u)};
t.prototype.Dd=function(q){this.qc.append(q);for(var u,v=[],w,y;(u=this.qc.wh())&&!(w=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.Uh(v);w&&this.Pg(u);y&&this.Qg(u)};t.prototype.Uh=function(q){var u=this.kg(q);u.qe&&(u.ed=this.td+u.qe,this.td+=u.uh,this.ud.innerHTML=u.ed,this.Rh())};t.prototype.kg=function(q){var u=this.Vc.length,v=[],w=[],y=[];c(q,function(x){v.push(x.text);if(x.U){if(!/^noscript$/i.test(x.tagName)){var A=
u++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.U.id&&"ps-style"!==x.U.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.Gb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{ui:q,raw:v.join(""),qe:w.join(""),uh:y.join("")}};t.prototype.Rh=function(){for(var q,u=[this.ud];b(q=u.shift());){var v=1===q.nodeType;if(!v||!r(q,"proxyof")){v&&(this.Vc[r(q,"id")]=q,r(q,"id",null));var w=q.parentNode&&r(q.parentNode,"proxyof");
w&&this.Vc[w].appendChild(q)}u.unshift.apply(u,g(q.childNodes))}};t.prototype.Pg=function(q){var u=this.qc.clear();u&&this.Ia.unshift(u);q.src=q.U.src||q.U.ai;q.src&&this.Db.length?this.Wb=q:this.pd(q);var v=this;this.Th(q,function(){v.Re(q)})};t.prototype.Qg=function(q){var u=this.qc.clear();u&&this.Ia.unshift(u);q.type=q.U.type||q.U.TYPE||"text/css";this.Vh(q);u&&this.write()};t.prototype.Vh=function(q){var u=this.mg(q);this.Tg(u);q.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=q.content:
u.appendChild(this.Sa.createTextNode(q.content)))};t.prototype.mg=function(q){var u=this.Sa.createElement(q.tagName);u.setAttribute("type",q.type);d(q.U,function(v,w){u.setAttribute(v,w)});return u};t.prototype.Tg=function(q){this.Dd('<span id="ps-style"/>');var u=this.Sa.getElementById("ps-style");u.parentNode.replaceChild(q,u)};t.prototype.pd=function(q){q.mh=this.Ia;this.Ia=[];this.Db.unshift(q)};t.prototype.Re=function(q){q!==this.Db[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Db.shift(),this.write.apply(this,q.mh),!this.Db.length&&this.Wb&&(this.pd(this.Wb),this.Wb=null))};t.prototype.Th=function(q,u){var v=this.lg(q),w=this.Ih(v),y=this.options.Xf;q.src&&(v.src=q.src,this.Dh(v,w?y:function(){u();y()}));try{this.Sg(v),q.src&&!w||u()}catch(x){this.options.error(x),u()}};t.prototype.lg=function(q){var u=this.Sa.createElement(q.tagName);d(q.U,function(v,w){u.setAttribute(v,w)});q.content&&(u.text=q.content);return u};t.prototype.Sg=function(q){this.Dd('<span id="ps-script"/>');
var u=this.Sa.getElementById("ps-script");u.parentNode.replaceChild(q,u)};t.prototype.Dh=function(q,u){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+q.src};v();w(y);u()}})};t.prototype.Ih=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.zh&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var w=u.shift(),y;w&&(y=w[w.length-1],y.Yf(),w.stream=t.apply(null,w),y.Zf())}function t(w,y,x){function A(H){H=x.ig(H);v.write(H);x.$f(H)}v=new n(w,x);v.id=q++;v.name=x.name||v.id;var B=w.ownerDocument,z={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return A(g(arguments).join(""))},writeln:function(){return A(g(arguments).join("")+"\n")}});var D=v.Hb.onerror||a;v.Hb.onerror=function(H,L,O){x.error({li:H+
" - "+L+":"+O});D.apply(v.Hb,arguments)};v.write(y,function(){e(B,z);v.Hb.onerror=D;x.done();v=null;r()});return v}var q=0,u=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.ki?w[0]:w;var A=[w,y,x];w.ph={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.hg(A);u.push(A);v||r();return w.ph},{streams:{},mi:u,ci:n})}();le=l.postscribe}})();function me(a){return""+a}
function ne(a,b){var c=[];return c};var oe=function(a,b){var c=new fb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},pe=function(a,b){var c=new jb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Da(e)?c.set(d,oe(a+"_"+d,e)):(Ea(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var qe=function(a,b){E(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new jb;return d=pe("AssertApiSubject",c)};var re=function(a,b){E(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new jb;return d=pe("AssertThatSubject",c)};function se(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(rb(arguments[d],c));return qb(a.apply(null,b))}}var ue=function(){for(var a=Math,b=te,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=se(a[e].bind(a)))}return c};var ve=function(a){var b;return b};var we=function(a){var b;return b};var xe=function(a){E(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var ye=function(a){E(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var ze=function(a){E(this.i.a,["message:?string"],arguments);};var Ae=function(a,b){E(this.i.a,["min:!number","max:!number"],arguments);return Ka(a,b)};var Be=function(){return(new Date).getTime()};var Ce=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.fg.apply(null,Array.prototype.slice.call(arguments,1))};var De=function(){Ce(this,"read_container_data");var a=new jb;a.set("containerId",'GTM-7BF3X');a.set("version",'339');a.set("environmentName",'');a.set("debugMode",Qd);a.set("previewMode",Sd);a.set("environmentMode",Rd);a.m=!0;return a};var Ee=function(a){return null===a?"null":a instanceof h?"array":a instanceof fb?"function":typeof a};var Fe=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Qd||Sd)&&a.call(this,e.message)}}}return{parse:b(function(c){return qb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(rb(c))})}};var Ge=function(a){return Qa(rb(a,this.m))};var He=function(a){return Number(rb(a,this.m))};var Ie=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Je=function(a,b,c){var d=null,e=!1;return e?d:null};var te="floor ceil round max min abs pow sqrt".split(" ");var Ke=function(){var a={};return{Lg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Hh:function(b,c){a[b]=c},reset:function(){a={}}}},Le=function(a,b){E(this.i.a,["apiName:!string","mock:?*"],arguments);};var Me=function(){this.a={}};Me.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Me.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Da(b)?oe(a,b):pe(a,b)};function Ne(){var a={};return a};var G={fb:"_ee",Tc:"_syn",bi:"_uei",Hc:"event_callback",Mb:"event_timeout",K:"gtag.config",ja:"allow_ad_personalization_signals",Ic:"restricted_data_processing",cb:"allow_google_signals",ka:"cookie_expires",Lb:"cookie_update",eb:"session_duration",ma:"user_properties",xa:"transport_url",O:"ads_data_redaction"};G.Me=[G.ja,G.cb,G.Lb];G.Pe=[G.ka,G.Mb,G.eb];G.s="ad_storage",G.J="analytics_storage",G.Lh="region",G.Oh="wait_for_update";var C=window,I=document,Oe=navigator,Pe=I.currentScript&&I.currentScript.src,Qe=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Re=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Se=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Re(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=I.getElementsByTagName("script")[0]||I.body||I.head;l.parentNode.insertBefore(d,l);return d},Te=function(){if(Pe){var a=Pe.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ue=function(a,b){var c=I.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=I.body&&I.body.lastChild||
I.body||I.head;d.parentNode.insertBefore(c,d);Re(c,b);void 0!==a&&(c.src=a);return c},Ve=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},We=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Xe=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},K=function(a){C.setTimeout(a,0)},Ye=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ze=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},$e=function(a){var b=I.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},af=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},bf=function(a){Oe.sendBeacon&&Oe.sendBeacon(a)||Ve(a)},cf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var df={},N=function(a,b){df[a]=df[a]||[];df[a][b]=!0},ef=function(a){for(var b=[],c=df[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ff={},gf=function(a){return void 0==ff[a]?!1:ff[a]};var hf=[];function jf(){var a=Qe("google_tag_data",{});a.ics||(a.ics={entries:{},set:kf,update:lf,addListener:mf,notifyListeners:nf,active:!1});return a.ics}
function kf(a,b,c,d,e,f){var g=jf();g.active=!0;if(void 0!=b){var k=g.entries,l=k[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&C.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,of(a),nf(),N("TAGGING",2))},f)}}}
function lf(a,b){var c=jf();c.active=!0;if(void 0!=b){var d=pf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=pf(a);f.quiet?(f.quiet=!1,of(a)):g!==d&&of(a)}}function mf(a,b){hf.push({ue:a,Gg:b})}function of(a){for(var b=0;b<hf.length;++b){var c=hf[b];Ga(c.ue)&&-1!==c.ue.indexOf(a)&&(c.Ve=!0)}}function nf(){for(var a=0;a<hf.length;++a){var b=hf[a];if(b.Ve){b.Ve=!1;try{b.Gg.call()}catch(c){}}}}
var pf=function(a){var b=jf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},qf=function(a){return!(jf().entries[a]||{}).quiet},rf=function(){return gf("gtag_cs_api")?jf().active:!1},sf=function(a,b){jf().addListener(a,b)},tf=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!qf(b[e]))return!0;return!1}if(c()){var d=!1;sf(b,function(){d||c()||(d=!0,a())})}else a()},uf=function(a,b){if(!1===pf(b)){var c=!1;sf([b],function(){!c&&pf(b)&&(a(),c=!0)})}};var vf=[G.s,G.J],wf=function(a){var b=a[G.Lh];b&&N("GTM",40);var c=a[G.Oh];c&&N("GTM",41);for(var d=Ga(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<vf.length;f++){var g=vf[f],k=a[vf[f]],l=d[e];jf().set(g,k,l,"PL","PL-MA",c)}},xf=function(a){for(var b=0;b<vf.length;b++){var c=vf[b],d=a[vf[b]];jf().update(c,d)}jf().notifyListeners()},yf=function(a){var b=pf(a);return void 0!=b?b:!0},zf=function(){for(var a=[],b=0;b<vf.length;b++){var c=pf(vf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},Af=function(a){uf(a,G.s)},Bf=function(a,b){tf(a,b)};var Df=function(a){return Cf?I.querySelectorAll(a):null},Ef=function(a,b){if(!Cf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!I.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ff=!1;if(I.querySelectorAll)try{var Gf=I.querySelectorAll(":root");Gf&&1==Gf.length&&Gf[0]==I.documentElement&&(Ff=!0)}catch(a){}var Cf=Ff;var Hd={},T=null,Uf=Math.random();Hd.B="GTM-7BF3X";Hd.Rb="6h1";Hd.Sd="";var Vf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Wf="www.googletagmanager.com/gtm.js";
var Xf=Wf,Yf=null,Zf=null,$f=null,ag="//www.googletagmanager.com/a?id="+Hd.B+"&cv=339",bg={},cg={},dg=function(){var a=T.sequence||0;T.sequence=a+1;return a};
var eg=function(){return"&tc="+hd.filter(function(a){return a}).length},hg=function(){fg||(fg=C.setTimeout(gg,500))},gg=function(){fg&&(C.clearTimeout(fg),fg=void 0);void 0===ig||jg[ig]&&!kg&&!lg||(mg[ig]||ng.Yg()||0>=og--?(N("GTM",1),mg[ig]=!0):(ng.xh(),Ve(pg()),jg[ig]=!0,qg=rg=lg=kg=""))},pg=function(){var a=ig;if(void 0===a)return"";var b=ef("GTM"),c=ef("TAGGING");return[sg,jg[a]?"":"&es=1",tg[a],b?"&u="+b:"",c?"&ut="+c:"",eg(),kg,lg,rg,qg,"&z=0"].join("")},ug=function(){return[ag,"&v=3&t=t","&pid="+
Ka(),"&rv="+Hd.Rb].join("")},vg="0.005000">Math.random(),sg=ug(),wg=function(){sg=ug()},jg={},kg="",lg="",qg="",rg="",ig=void 0,tg={},mg={},fg=void 0,ng=function(a,b){var c=0,d=0;return{Yg:function(){if(c<a)return!1;Ua()-d>=b&&(c=0);return c>=a},xh:function(){Ua()-d>=b&&(c=0);c++;d=Ua()}}}(2,1E3),og=1E3,xg=function(a,b){if(vg&&!mg[a]&&ig!==a){gg();ig=a;qg=kg="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";tg[a]="&e="+c+"&eid="+a;hg()}},yg=function(a,b,c){if(vg&&!mg[a]&&
b){a!==ig&&(gg(),ig=a);var d,e=String(b[td.ya]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;kg=kg?kg+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(jd[g]?"1":"2")+d;qg=qg?qg+"."+k:"&ti="+k;hg();2022<=pg().length&&gg()}},zg=function(a,b,c){if(vg&&!mg[a]){a!==ig&&(gg(),ig=a);var d=c+b;lg=lg?lg+
"."+d:"&epr="+d;hg();2022<=pg().length&&gg()}};var Ag={},Bg=new La,Cg={},Dg={},Gg={name:"dataLayer",set:function(a,b){F(cb(a,b),Cg);Eg()},get:function(a){return Fg(a,2)},reset:function(){Bg=new La;Cg={};Eg()}},Fg=function(a,b){if(2!=b){var c=Bg.get(a);if(vg){var d=Hg(a);c!==d&&N("GTM",5)}return c}return Hg(a)},Hg=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:Ig(b)},Ig=function(a){for(var b=Cg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Jg=function(a,b){Dg.hasOwnProperty(a)||(Bg.set(a,b),F(cb(a,b),Cg),Eg())},Eg=function(a){Na(Dg,function(b,c){Bg.set(b,c);F(cb(b,void 0),Cg);F(cb(b,c),Cg);a&&delete Dg[b]})},Kg=function(a,b,c){Ag[a]=Ag[a]||{};var d=1!==c?Hg(b):Bg.get(b);"array"===nb(d)||"object"===nb(d)?Ag[a][b]=F(d):Ag[a][b]=d},Lg=function(a,b){if(Ag[a])return Ag[a][b]},Mg=function(a,b){Ag[a]&&delete Ag[a][b]};var Pg=/:[0-9]+$/,Qg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Tg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Rg(a.protocol)||Rg(C.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
C.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||C.location.hostname).replace(Pg,"").toLowerCase());return Sg(a,b,c,d,e)},Sg=function(a,b,c,d,e){var f,g=Rg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Ug(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Pg,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||N("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ha(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Qg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Rg=function(a){return a?a.replace(":",
"").toLowerCase():""},Ug=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Vg=function(a){var b=I.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||N("TAGGING",1),c="/"+c);var d=b.hostname.replace(Pg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Wg=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Vg(a),f=a.split(/[?#]/)[0],g=e.search,k=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===k[0]&&(k=k.substring(1));g=c(g);k=c(k);""!==g&&(g="?"+g);""!==k&&(k="#"+k);var l=""+f+g+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Xg(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Zg=function(a,b,c,d){return Yg(d)?Xg(a,String(b||document.cookie),c):[]},bh=function(a,b,c,d,e){if(Yg(e)){var f=$g(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ah(f,function(g){return g.Xb},b);if(1===f.length)return f[0].id;f=ah(f,function(g){return g.Bb},c);return f[0]?f[0].id:void 0}}};function ch(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Zg(b,f,!1,d).indexOf(c)}
var gh=function(a,b,c,d){function e(w,y,x){if(null==x)return delete k[y],w;k[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete k[y],w;k[y]=!0;return w+"; "+y}if(!Yg(c.Ea))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=dh(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.gh);g=e(g,"samesite",
c.Bh);c.Eh&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=eh(),r=void 0,t=!1,q=0;q<n.length;++q){var u="none"!==n[q]?n[q]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,k)}catch(w){r=w;continue}t=!0;if(!fh(u,c.path)&&ch(v,a,b,c.Ea))return 0}if(r&&!t)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,k);return fh(m,c.path)?1:ch(g,a,b,c.Ea)?0:1},hh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return gh(a,b,c)};
function ah(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function $g(a,b,c){for(var d=[],e=Zg(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Xb:1*l[0]||1,Bb:1*l[1]||1}))}}return d}
var dh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},ih=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,jh=/(^|\.)doubleclick\.net$/i,fh=function(a,b){return jh.test(document.location.hostname)||"/"===b&&ih.test(a)},eh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;jh.test(e)||ih.test(e)||a.push("none");
return a},Yg=function(a){if(!gf("gtag_cs_api")||!a||!rf())return!0;if(!qf(a))return!1;var b=pf(a);return null==b?!0:!!b};var kh=function(){for(var a=Oe.userAgent+(I.cookie||"")+(I.referrer||""),b=a.length,c=C.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ua()/1E3)].join(".")},oh=function(a,b,c,d,e){var f=mh(b);return bh(a,f,nh(c),d,e)},ph=function(a,b,c,d){var e=""+mh(c),f=nh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},mh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},nh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function qh(a,b,c){var d,e=a.zb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ua())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var rh=["1"],sh={},wh=function(a){var b=th(a.prefix);sh[b]||uh(b,a.path,a.domain)||(vh(b,kh(),a),uh(b,a.path,a.domain))};function vh(a,b,c){var d=ph(b,"1",c.domain,c.path),e=qh(c);e.Ea="ad_storage";hh(a,d,e)}function uh(a,b,c){var d=oh(a,b,c,rh,"ad_storage");d&&(sh[a]=d);return d}function th(a){return(a||"_gcl")+"_au"};var xh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function yh(){for(var a=zh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ah(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var zh,Bh;function Ch(a){zh=zh||Ah();Bh=Bh||yh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(zh[l],zh[m],zh[n],zh[r])}return b.join("")}
function Dh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Bh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}zh=zh||Ah();Bh=Bh||yh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var Eh;var Ih=function(){var a=Fh,b=Gh,c=Hh(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){We(I,"mousedown",d);We(I,"keyup",d);We(I,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Jh=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Hh().decorators.push(f)},Kh=function(a,b,c){for(var d=Hh().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==I.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[r])||n&&0<=l[r].indexOf(m)){k=!0;break a}k=!1}if(k){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Ya(e,g.callback())}}return e},Hh=function(){var a=Qe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Lh=/(.*?)\*(.*?)\*(.*)/,Mh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Nh=/^(?:www\.|m\.|amp\.)+/,Oh=/([^?#]+)(\?[^#]*)?(#.*)?/;function Ph(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Rh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ch(String(d))))}var e=b.join("*");return["1",Qh(e),e].join("*")},Qh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Eh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Eh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Eh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Th=function(){return function(a){var b=Vg(C.location.href),c=b.search.replace("?",""),d=Qg(c,"_gl",!1,!0)||"";a.query=Sh(d)||{};var e=Tg(b,"fragment").match(Ph("_gl"));a.fragment=Sh(e&&e[3]||"")||{}}},Uh=function(a){var b=Th(),c=Hh();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ya(d,e.query),a&&Ya(d,e.fragment));return d},
Sh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Lh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===Qh(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Dh(t[q+1]);return r}}}}catch(u){}};
function Vh(a,b,c,d){function e(n){var r=n,t=Ph(a).exec(r),q=r;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}n=q;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Oh.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function Wh(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Kh(b,1,c),e=Kh(b,2,c),f=Kh(b,3,c);if(Za(d)){var g=Rh(d);c?Xh("_gl",g,a):Yh("_gl",g,a,!1)}if(!c&&Za(e)){var k=Rh(e);Yh("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Yh(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Xh(m,n,r);break a}}"string"==typeof r&&Vh(m,n,r,void 0)}}
function Yh(a,b,c,d){if(c.href){var e=Vh(a,b,c.href,void 0===d?!1:d);xh.test(e)&&(c.href=e)}}
function Xh(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=I.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Vh(a,b,c.action);xh.test(m)&&(c.action=m)}}}
var Fh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Wh(e,e.hostname)}}catch(g){}},Gh=function(a){try{if(a.action){var b=Tg(Vg(a.action),"host");Wh(a,b)}}catch(c){}},Zh=function(a,b,c,d){Ih();Jh(a,b,"fragment"===c?2:1,!!d,!1)},$h=function(a,b){Ih();Jh(a,[Sg(C.location,"host",!0)],b,!0,!0)},ai=function(){var a=I.location.hostname,b=Mh.exec(I.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Nh,""),l=e.replace(Nh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},bi=function(a,b){return!1===a?!1:a||b||ai()};var ci=/^\w+$/,di=/^[\w-]+$/,ei=/^~?[\w-]+$/,fi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},gi=function(){if(!gf("gtag_cs_api")||!rf())return!0;var a=pf("ad_storage");return null==a?!0:!!a},hi=function(a,b){qf("ad_storage")?gi()?a():uf(a,"ad_storage"):b?N("TAGGING",3):tf(function(){hi(a,!0)},["ad_storage"])},ki=function(a){var b=[];if(!I.cookie)return b;var c=Zg(a,I.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=ii(c[d]);e&&-1===Ha(b,e)&&b.push(e)}return ji(b)};
function li(a){return a&&"string"==typeof a&&a.match(ci)?a:"_gcl"}
var ni=function(){var a=Vg(C.location.href),b=Tg(a,"query",!1,void 0,"gclid"),c=Tg(a,"query",!1,void 0,"gclsrc"),d=Tg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Qg(e,"gclid",!1,void 0);c=c||Qg(e,"gclsrc",!1,void 0)}return mi(b,c,d)},mi=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(di))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":gf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},pi=function(a){var b=ni();hi(function(){return oi(b,a)})};
function oi(a,b,c){function d(m,n){var r=qi(m,e);r&&(hh(r,n,f),g=!0)}b=b||{};var e=li(b.prefix);c=c||Ua();var f=qh(b,c,!0);f.Ea="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.vi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var si=function(a,b){var c=Uh(!0);hi(function(){for(var d=li(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==fi[f]){var g=qi(f,d),k=c[g];if(k){var l=Math.min(ri(k),Ua()),m;b:{for(var n=l,r=Zg(g,I.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(ri(r[t])>n){m=!0;break b}m=!1}if(!m){var q=qh(b,l,!0);q.Ea="ad_storage";hh(g,k,q)}}}}oi(mi(c.gclid,c.gclsrc),b)})},qi=function(a,b){var c=fi[a];if(void 0!==c)return b+c},ri=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ii(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ti=function(a,b,c,d,e){if(Ga(b)){var f=li(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=qi(a[l],f);if(m){var n=Zg(m,I.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};hi(function(){Zh(g,b,c,d)})}},ji=function(a){return a.filter(function(b){return ei.test(b)})},ui=function(a,b){for(var c=li(b.prefix),d={},e=0;e<a.length;e++)fi[a[e]]&&(d[a[e]]=fi[a[e]]);hi(function(){Na(d,function(f,g){var k=Zg(c+g,I.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=ri(l),
n={};n[f]=[ii(l)];oi(n,b,m)}})})};function vi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var wi=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(rf()){var c=ni();if(vi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);$h(function(){return d},3);$h(function(){var e={};return e._up="1",e},1)}}},xi=function(){var a;if(gi()){for(var b=[],c=I.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Ad:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[k].Ad]||(g[b[k].Ad]=[]),g[b[k].Ad].push({timestamp:l[1],Ig:l[2]}))}a=g}else a={};return a};var yi=/^\d+\.fls\.doubleclick\.net$/;function zi(a,b){qf(G.s)?yf(G.s)?a():Af(a):b?N("GTM",42):Bf(function(){zi(a,!0)},[G.s])}function Ai(a){var b=Vg(C.location.href),c=Tg(b,"host",!1);if(c&&c.match(yi)){var d=Tg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Bi(a,b,c){if("aw"==a||"dc"==a){var d=Ai("gcl"+a);if(d)return d.split(".")}var e=li(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!yf(G.s)&&c,g;g=ni()[a]||[];if(0<g.length)return f?["0"]:g}var k=qi(a,e);return k?ki(k):[]}
var Ci=function(a){var b=Ai("gac");if(b)return!yf(G.s)&&a?"0":decodeURIComponent(b);var c=xi(),d=[];Na(c,function(e,f){for(var g=[],k=0;k<f.length;k++)g.push(f[k].Ig);g=ji(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Di=function(a,b){var c=ni().dc||[];zi(function(){wh(b);var d=sh[th(b.prefix)],e=!1;if(d&&0<c.length){var f=T.joined_au=T.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;bf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=th(b.prefix),n=sh[m];n&&vh(m,n,b)}})};var Ei=/[A-Z]+/,Fi=/\s/,Gi=function(a){if(p(a)&&(a=Ta(a),!Fi.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ei.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],C:d}}}}},Ii=function(a){for(var b={},c=0;c<a.length;++c){var d=Gi(a[c]);d&&(b[d.id]=d)}Hi(b);var e=[];Na(b,function(f,g){e.push(g)});return e};
function Hi(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.C[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ji=function(){var a=!1;return a};var Li=function(a,b,c,d){return(2===Ki()||d||"http:"!=C.location.protocol?a:b)+c},Ki=function(){var a=Te(),b;if(1===a)a:{var c=Xf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=I.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Zi=function(a){return yf(G.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Wg(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var $i=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),aj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},bj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},cj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ej=function(a){var b=Fg("gtm.whitelist");b&&N("GTM",9);var c=b&&$a(Sa(b),aj),d=Fg("gtm.blacklist");d||(d=Fg("tagTypeBlacklist"))&&N("GTM",3);d?
N("GTM",8):d=[];dj()&&(d=Sa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ha(Sa(d),"google")&&N("GTM",2);var e=d&&$a(Sa(d),bj),f={};return function(g){var k=g&&g[td.ya];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=cg[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>Ha(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>Ha(c,l[r])){N("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=Ha(e,k);if(q)t=q;else{var u=Ma(e,l||[]);u&&N("GTM",10);t=u}}var v=!m||t;v||!(0<=Ha(l,"sandboxedScripts"))||c&&-1!==Ha(c,"sandboxedScripts")||(v=Ma(e,cj));return f[k]=v}},dj=function(){return $i.test(C.location&&C.location.hostname)};var fj={ug:function(a,b){b[td.Kd]&&"string"===typeof a&&(a=1==b[td.Kd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(td.Md)&&null===a&&(a=b[td.Md]);b.hasOwnProperty(td.Od)&&void 0===a&&(a=b[td.Od]);b.hasOwnProperty(td.Nd)&&!0===a&&(a=b[td.Nd]);b.hasOwnProperty(td.Ld)&&!1===a&&(a=b[td.Ld]);return a}};var gj={active:!0,isWhitelisted:function(){return!0}},hj=function(a){var b=T.zones;!b&&a&&(b=T.zones=a());return b};var ij=function(){};var jj=!1,kj=0,lj=[];function mj(a){if(!jj){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){jj=!0;for(var e=0;e<lj.length;e++)K(lj[e])}lj.push=function(){for(var f=0;f<arguments.length;f++)K(arguments[f]);return 0}}}function nj(){if(!jj&&140>kj){kj++;try{I.documentElement.doScroll("left"),mj()}catch(a){C.setTimeout(nj,50)}}}var oj=function(a){jj?a():lj.push(a)};var pj={},qj={},rj=function(a,b,c,d){if(!qj[a]||Vf[b]||"__zone"===b)return-1;var e={};pb(d)&&(e=F(d,e));e.id=c;e.status="timeout";return qj[a].tags.push(e)-1},sj=function(a,b,c,d){if(qj[a]){var e=qj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function tj(a){for(var b=pj[a]||[],c=0;c<b.length;c++)b[c]();pj[a]={push:function(d){d(Hd.B,qj[a])}}}
var wj=function(a,b,c){qj[a]={tags:[]};Da(b)&&uj(a,b);c&&C.setTimeout(function(){return tj(a)},Number(c));return vj(a)},uj=function(a,b){pj[a]=pj[a]||[];pj[a].push(Xa(function(){return K(function(){b(Hd.B,qj[a])})}))};function vj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Xa(function(){b++;d&&b>=c&&tj(a)})},eg:function(){d=!0;b>=c&&tj(a)}}};var xj=function(){function a(d){return!Ea(d)||0>d?0:d}if(!T._li&&C.performance&&C.performance.timing){var b=C.performance.timing.navigationStart,c=Ea(Gg.get("gtm.start"))?Gg.get("gtm.start"):0;T._li={cst:a(c-b),cbt:a(Zf-b)}}};var Bj={},Cj=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]},Dj=!1;
var Ej=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(C[b])C.hasOwnProperty(b)||N("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}xj();return C[b]},Fj=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Cj();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Hj=function(a){},Gj=function(){return C.GoogleAnalyticsObject||"ga"};var Nj=function(){return!1},Oj=function(){var a={};return function(b,c,d){}};function Pj(a,b,c,d){var e=hd[a],f=Qj(a,b,c,d);if(!f)return null;var g=pd(e[td.ae],c,[]);if(g&&g.length){var k=g[0];f=Pj(k.index,{F:f,D:1===k.Ae?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qj(a,b,c,d){function e(){if(f[td.zf])k();else{var w=qd(f,c,[]),y=rj(c.id,String(f[td.ya]),Number(f[td.ce]),w[td.Af]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ua()-B;yg(c.id,hd[a],"5");sj(c.id,y,"success",z);g()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ua()-B;yg(c.id,hd[a],"6");sj(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;yg(c.id,f,"1");var A=function(){var z=Ua()-B;yg(c.id,f,"7");sj(c.id,y,"exception",z);x||(x=!0,k())};var B=Ua();try{od(w,c)}catch(z){A(z)}}}var f=hd[a],g=b.F,k=b.D,l=b.terminate;if(c.gd(f))return null;var m=pd(f[td.de],c,[]);if(m&&m.length){var n=m[0],r=Pj(n.index,{F:g,D:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.Ae?l:r}if(f[td.Td]||f[td.Ef]){var t=f[td.Td]?id:c.Jh,q=g,u=k;if(!t[a]){e=Xa(e);var v=Rj(a,t,e);g=v.F;k=v.D}return function(){t[a](q,u)}}return e}
function Rj(a,b,c){var d=[],e=[];b[a]=Sj(d,e,c);return{F:function(){b[a]=Tj;for(var f=0;f<d.length;f++)d[f]()},D:function(){b[a]=Uj;for(var f=0;f<e.length;f++)e[f]()}}}function Sj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Tj(a){a()}function Uj(a,b){b()};var Xj=function(a,b){for(var c=[],d=0;d<hd.length;d++)if(a.Ab[d]){var e=hd[d];var f=b.add();try{var g=Pj(d,{F:f,D:f,terminate:f},a,d);g?c.push({df:d,We:rd(e),$b:g}):(Vj(d,a),f())}catch(l){f()}}b.eg();c.sort(Wj);for(var k=0;k<c.length;k++)c[k].$b();return 0<c.length};function Wj(a,b){var c,d=b.We,e=a.We;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.df,k=b.df;f=g>k?1:g<k?-1:0}return f}
function Vj(a,b){if(!vg)return;var c=function(d){var e=b.gd(hd[d])?"3":"4",f=pd(hd[d][td.ae],b,[]);f&&f.length&&c(f[0].index);yg(b.id,hd[d],e);var g=pd(hd[d][td.de],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Yj=!1,Zj=function(a,b,c,d,e){if("gtm.js"==b){if(Yj)return!1;Yj=!0}xg(a,b);var f=wj(a,d,e);Kg(a,"event",1);Kg(a,"ecommerce",1);Kg(a,"gtm");var g={id:a,name:b,gd:ej(c),Ab:[],Jh:[],Ne:function(){N("GTM",6)}};g.Ab=Dd(g);var k=Xj(g,f);"gtm.js"!==b&&"gtm.sync"!==b||Hj(Hd.B);if(!k)return k;for(var l=0;l<g.Ab.length;l++)if(g.Ab[l]){var m=hd[l];if(m&&!Vf[String(m[td.ya])])return!0}return!1};function bk(a,b){}function ck(a,b){return dk()?bk(a,b):void 0}
function dk(){var a=!1;return a};var ek=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.F=function(){};this.D=function(){};this.eventId=void 0},fk=function(a){var b=new ek;b.eventModel=a;return b},gk=function(a,b){a.targetConfig=b;return a},hk=function(a,b){a.containerConfig=b;return a},ik=function(a,b){a.a=b;return a},jk=function(a,b){a.globalConfig=b;return a},kk=function(a,b){a.F=b;return a},lk=function(a,b){a.D=b;return a};
ek.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var mk=function(a){function b(e){Na(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Na(c,function(e){d.push(e)});return d};var nk;if(3===Hd.Rb.length)nk="g";else{var ok="G";nk=ok}
var pk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:nk,OPT:"o"},qk=function(a){var b=Hd.B.split("-"),c=b[0].toUpperCase(),d=pk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Hd.Rb.length){var g="w";f="2"+g}else f="";return f+d+Hd.Rb+e};function rk(){var a=!1;a=rf();return a}
function sk(a,b,c){function d(r){var t;T.reported_gclid||(T.reported_gclid={});t=T.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],v=function(B,z){z&&u.push(B+"="+encodeURIComponent(z))},w="https://www.google.com";if(rf()){var y=yf(G.s);v("gcs",zf());r&&v("gcu","1");v("rnd",n);if((!f||g&&"aw.ds"!==g)&&yf(G.s)){var x=ki("_gcl_aw");v("gclaw",x.join("."))}v("url",String(C.location).split(/[?#]/)[0]);v("dclid",tk(b,k));!y&&b&&(w="https://pagead2.googlesyndication.com")}
"1"===Uh(!1)._up&&v("gtm_up","1");v("gclid",tk(b,f));v("gclsrc",g);v("gtm",qk(!c));var A=w+"/pagead/landing?"+u.join("&");bf(A)}}var e=ni(),f=e.gclid||"",g=e.gclsrc,k=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=rk();if(l||m){var n=""+kh();m?Bf(function(){d();yf(G.s)||Af(function(){return d(!0)})},[G.s]):d()}}
function tk(a,b){var c=a&&!yf(G.s);if(b&&c)return"0";return b}function xl(){var a=T;return a.gcq=a.gcq||new yl}
var zl=function(a,b,c){xl().register(a,b,c)},Al=function(a,b,c,d){xl().push("event",[b,a],c,d)},Bl=function(a,b){xl().push("config",[a],b)},Cl={},Dl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},El=function(a,b,c,d,e){this.type=a;this.m=b;this.da=c||"";this.a=d;this.i=e},yl=function(){this.m={};this.i={};this.a=[]},Fl=function(a,b){var c=Gi(b);return a.m[c.containerId]=a.m[c.containerId]||new Dl},Gl=function(a,b,c){if(b){var d=Gi(b);if(d&&1===
Fl(a,b).status){Fl(a,b).status=2;var e={};vg&&(e.timeoutId=C.setTimeout(function(){N("GTM",38);hg()},3E3));a.push("require",[e],d.containerId);Cl[d.containerId]=Ua();if(Ji()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=C.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=ck(c,g)||k;Se(l)}}}},Hl=function(a,b,c,d){if(d.da){var e=Fl(a,d.da),f=e.m;if(f){var g=F(c),k=F(e.targetConfig[d.da]),l=F(e.containerConfig),m=F(e.i),n=F(a.i),r=Fg("gtm.uniqueEventId"),t=Gi(d.da).prefix,q=lk(kk(jk(ik(hk(gk(fk(g),k),l),m),n),function(){
zg(r,t,"2");}),function(){zg(r,t,"3");});try{zg(r,t,"1");f(d.da,b,d.m,q)}catch(u){zg(r,t,"4");}}}};
yl.prototype.register=function(a,b,c){if(3!==Fl(this,a).status){Fl(this,a).m=b;Fl(this,a).status=3;c&&(Fl(this,a).i=c);var d=Gi(a),e=Cl[d.containerId];if(void 0!==e){var f=T[d.containerId].bootstrap,g=d.prefix.toUpperCase();T[d.containerId]._spx&&(g=g.toLowerCase());var k=Fg("gtm.uniqueEventId"),l=g,m=Ua()-f;if(vg&&!mg[k]){k!==ig&&(gg(),ig=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);rg=rg?rg+","+n:"&cl="+n}delete Cl[d.containerId]}this.flush()}};
yl.prototype.push=function(a,b,c,d){var e=Math.floor(Ua()/1E3);Gl(this,c,b[0][G.xa]||this.i[G.xa]);this.a.push(new El(a,e,c,b,d));d||this.flush()};
yl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Fl(this,c.da).status&&!a)return;vg&&C.clearTimeout(c.a[0].timeoutId);break;case "set":Na(c.a[0],function(l,m){F(cb(l,m),b.i)});break;case "config":var d=c.a[0],e=!!d[G.wc];delete d[G.wc];var f=Fl(this,c.da),g=Gi(c.da),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.da]={});f.a&&e||Hl(this,G.K,d,c);f.a=!0;delete d[G.fb];k?F(d,f.containerConfig):
F(d,f.targetConfig[c.da]);break;case "event":Hl(this,c.a[1],c.a[0],c)}this.a.shift()}};var Il=function(a){};var Jl=function(a,b){return!0};var Kl=function(a,b){var c;return c};var Ll=function(a){};var Ml=function(a,b){var c;var d=qb(c,this.m);void 0===d&&void 0!==c&&N("GTM",45);return d};var Nl=function(a){var b;var f=qb(b,this.m);void 0===f&&void 0!==b&&N("GTM",45);return f};var Ol=function(a,b){var c=null;return qb(c,this.m)};var Pl=function(a){var b;return qb(b,this.m)};var Ql=function(a){var b;return b};var Rl=function(a,b){b=void 0===b?!0:b;var c;return c};var Sl=function(a,b){var c;return c};var Tl=function(a,b){var c;return c};var Ul=function(a){var b="";return b};var Vl=function(a){var b="";return b};var Wl=function(a,b){};var Xl={},Yl=function(a,b,c,d){E(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ce(this,"inject_script",a);var e=this.m,f=function(){b instanceof fb&&b.Fa(e)},g=function(){c instanceof fb&&c.Fa(e)};if(!d){Se(a,f,g);return}var k=d;Xl[k]?(Xl[k].onSuccess.push(f),Xl[k].onFailure.push(g)):(Xl[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Xl[k].onSuccess,m=0;m<l.length;m++)K(l[m]);l.push=function(n){K(n);
return 0}},g=function(){for(var l=Xl[k].onFailure,m=0;m<l.length;m++)K(l[m]);Xl[k]=null},Se(a,f,g));};var Zl=function(){return!1},$l={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var am=function(){};var bm=function(a,b){var c=!1;return c};var cm=function(){var a="";return a};var dm=function(){var a="";return a};var em=function(a,b,c){};var fm=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var gm=function(a,b,c){E(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ce(this,"access_globals","readwrite",a);var d=a.split("."),e=C,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=rb(b,this.m),!0;return!1};var hm=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var im=function(a,b,c){var d=this;};var jm={},km={};jm.getItem=function(a){var b=null;return b};
jm.setItem=function(a,b){};
jm.removeItem=function(a){};jm.clear=function(){};var lm=function(a){var b;return b};var Fc=function(){var a=new Me;Ji()?(a.add("injectHiddenIframe",Ca),a.add("injectScript",Ca)):(a.add("injectHiddenIframe",Wl),a.add("injectScript",Yl));var b=em;a.add("Math",ue());a.add("TestHelper",Ne());a.add("addEventCallback",Il);a.add("aliasInWindow",Jl);a.add("assertApi",qe);a.add("assertThat",re);a.add("callInWindow",
Kl);a.add("callLater",Ll);a.add("copyFromDataLayer",Ml);a.add("copyFromWindow",Nl);a.add("createArgumentsQueue",Ol);a.add("createQueue",Pl);a.add("decodeUri",ve);a.add("decodeUriComponent",we);a.add("encodeUri",xe);a.add("encodeUriComponent",ye);a.add("fail",ze);a.add("fromBase64",Ql,!("atob"in C));a.add("generateRandom",Ae);a.add("getContainerVersion",De);a.add("getCookieValues",Rl);a.add("getQueryParameters",Sl);a.add("getReferrerQueryParameters",Tl);a.add("getReferrerUrl",Ul);a.add("getTimestamp",
Be);a.add("getType",Ee);a.add("getUrl",Vl);a.add("localStorage",$l,!Zl());a.add("logToConsole",am);a.add("makeInteger",Ge);a.add("makeNumber",He);a.add("makeString",Ie);a.add("makeTableMap",Je);a.add("mock",Le);a.add("queryPermission",bm);a.add("readCharacterSet",cm);a.add("readTitle",dm);a.add("sendPixel",b);a.add("setCookie",fm);a.add("setInWindow",gm);a.add("sha256",im);a.add("toBase64",lm,!("btoa"in C));a.add("JSON",Fe(function(c){var d=this.m.a;
d&&d.log.call(this,"error",c)}));a.add("templateStorage",jm);return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Dc,Ld;
function mm(){var a=data.runtime||[],b=data.runtime_lines;Dc=new Cc;nm();dd=function(e,f,g){om(f);var k=new jb;Na(f,function(q,u){var v=qb(u);void 0===v&&void 0!==u&&N("GTM",44);k.set(q,v)});Dc.a.a.o=zd();var l={fg:Nd(e),eventId:void 0!==g?g.id:void 0,Zb:e,log:function(){}};if(Nj()){var m=Oj(),n=void 0,r=void 0;l.fa={i:{},a:function(q,u,v){1===u&&(n=q);7===u&&(r=v);m(q,u,v)},m:Ke()};l.log=function(q,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:q,source:r,message:v})}}}var t=Ec(l,
[e,k]);Dc.a.a.o=void 0;t instanceof pa&&"return"===t.a&&(t=t.i);return rb(t)};Gc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ga(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&vd(d,b[c]);Dc.$b(d)}}function om(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Da(b)&&(a.gtmOnSuccess=function(){K(b)});Da(c)&&(a.gtmOnFailure=function(){K(c)})}
function nm(){var a=Dc;T.SANDBOXED_JS_SEMAPHORE=T.SANDBOXED_JS_SEMAPHORE||0;Hc(a,function(b,c,d){T.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{T.SANDBOXED_JS_SEMAPHORE--}})}function pm(a){void 0!==a&&Na(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");cg[e]=cg[e]||[];cg[e].push(b)}})};var qm=["HA","GF","GP","G"],rm="G".split(/,/);rm.push("DC");rm.push("UA");rm.push("AW");
var sm=null,tm={},um={},vm,wm=!1;function xm(a,b){var c={event:a};b&&(c.eventModel=F(b),b[G.Hc]&&(c.eventCallback=b[G.Hc]),b[G.Mb]&&(c.eventTimeout=b[G.Mb]));return c}
var Cm={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!pb(a[2])&&void 0!=a[2])return;c=a[2]}var d=xm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return wm=!0,{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Ld.i;d.a[b]?d.a[b].push(c):
d.a[b]=[c]}},set:function(a){var b;2==a.length&&pb(a[1])?b=F(a[1]):3==a.length&&p(a[1])&&(b={},pb(a[2])||Ga(a[2])?b[a[1]]=F(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};
Cm.consent=function(a){if(3===a.length){var b=function(){c&&F(a[2],{subcommand:a[1]})};N("GTM",39);var c=!1;var d=a[1];if("default"===d){b();wf(a[2]);return}if("update"===d){b();xf(a[2]);return}}};
var Dm={policy:!0},Em=function(a,b){if(a.length&&p(a[0])){var c=Cm[a[0]];if(c&&(!b||!Dm[a[0]]))return c(a)}};var Fm=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Hm=function(a){var b=Gm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Im=!1,Jm=[];function Km(){if(!Im){Im=!0;for(var a=0;a<Jm.length;a++)K(Jm[a])}}var Lm=function(a){Im?K(a):Jm.push(a)};var bn=function(a){if(an(a))return a;this.a=a};bn.prototype.Og=function(){return this.a};var an=function(a){return!a||"object"!==nb(a)||pb(a)?!1:"getUntrustedUpdateValue"in a};bn.prototype.getUntrustedUpdateValue=bn.prototype.Og;var cn=[],dn=!1,en=function(a){return C["dataLayer"].push(a)},fn=function(a){var b=T["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function gn(a){var b=a._clear;Na(a,function(f,g){"_clear"!==f&&(b&&Jg(f,void 0),Jg(f,g))});Yf||(Yf=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=dg(),a["gtm.uniqueEventId"]=d,Jg("gtm.uniqueEventId",d));$f=c;var e=hn(a);$f=null;switch(c){case "gtm.init":N("GTM",19),e&&N("GTM",20)}return e}
function hn(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=T.zones;d=e?e.checkState(Hd.B,c):gj;return d.active?Zj(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function jn(){for(var a=!1;!dn&&0<cn.length;){dn=!0;delete Cg.eventModel;Eg();var b=cn.shift();if(null!=b){var c=an(b);if(c){var d=b;b=an(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=Fg(g,1);if(Ga(k)||pb(k))k=F(k);Dg[g]=k}}try{if(Da(b))try{b.call(Gg)}catch(q){}else if(Ga(b)){var l=b;if(p(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=Fg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(q){}}}else{if(Pa(b)&&(b=Em(b,c),!b)){dn=!1;continue}a=gn(b)||a}}finally{c&&Eg(!0)}}dn=!1}return!a}function kn(){var a=jn();try{Fm(C["dataLayer"],Hd.B)}catch(b){}return a}
var mn=function(){var a=Qe("dataLayer",[]),b=Qe("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};oj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Lm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<T.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new bn(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);cn.push.apply(cn,e);if(300<
this.length)for(N("GTM",4);300<this.length;)this.shift();var k="boolean"!==typeof g||g;return jn()&&k};var d=a.slice(0);cn.push.apply(cn,d);ln()&&K(kn)},ln=function(){var a=!0;return a};var nn={};nn.Nb=new String("undefined");
var on=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===nn.Nb?b:a[d]);return c.join("")}};on.prototype.toString=function(){return this.a("undefined")};on.prototype.valueOf=on.prototype.toString;nn.Nf=on;nn.Sc={};nn.xg=function(a){return new on(a)};var pn={};nn.yh=function(a,b){var c=dg();pn[c]=[a,b];return c};nn.we=function(a){var b=a?0:1;return function(c){var d=pn[c];if(d&&"function"===typeof d[b])d[b]();pn[c]=void 0}};nn.Wg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};nn.qh=function(a){if(a===nn.Nb)return a;var b=dg();nn.Sc[b]=a;return'google_tag_manager["'+Hd.B+'"].macro('+b+")"};nn.hh=function(a,b,c){a instanceof nn.Nf&&(a=a.a(nn.yh(b,c)),b=Ca);return{ed:a,F:b}};var qn=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ye(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},rn=function(a){T.hasOwnProperty("autoEventsSettings")||(T.autoEventsSettings={});var b=T.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},sn=function(a,b,c){rn(a)[b]=c},tn=function(a,b,c,d){var e=rn(a),f=Wa(e,b,d);e[b]=c(f)},un=function(a,b,c){var d=rn(a);return Wa(d,b,c)};var vn=["input","select","textarea"],wn=["button","hidden","image","reset","submit"],xn=function(a){var b=a.tagName.toLowerCase();return!Ia(vn,function(c){return c===b})||"input"===b&&Ia(wn,function(c){return c===a.type.toLowerCase()})?!1:!0},yn=function(a){return a.form?a.form.tagName?a.form:I.getElementById(a.form):af(a,["form"],100)},zn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(xn(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var An=!!C.MutationObserver,Bn=void 0,Cn=function(a){if(!Bn){var b=function(){var c=I.body;if(c)if(An)(new MutationObserver(function(){for(var e=0;e<Bn.length;e++)K(Bn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;We(c,"DOMNodeInserted",function(){d||(d=!0,K(function(){d=!1;for(var e=0;e<Bn.length;e++)K(Bn[e])}))})}};Bn=[];I.body?b():K(b)}Bn.push(a)};var Xn=C.clearTimeout,Yn=C.setTimeout,U=function(a,b,c){if(Ji()){b&&K(b)}else return Se(a,b,c)},Zn=function(){return C.location.href},$n=function(a){return Tg(Vg(a),"fragment")},ao=function(a){return Ug(Vg(a))},V=function(a,b){return Fg(a,b||2)},bo=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=en(a)):d=en(a);return d},co=function(a,b){C[a]=b},W=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=
b);return C[a]},eo=function(a,b,c){return Zg(a,b,void 0===c?!0:!!c)},fo=function(a,b){if(Ji()){b&&K(b)}else Ue(a,b)},go=function(a){return!!un(a,"init",!1)},ho=function(a){sn(a,"init",!0)},io=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Xf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";U(Li("https://","http://",c))},jo=function(a,b){var c=a[b];return c};
var ko=nn.hh;function Ho(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Io=new La;function Jo(a,b){function c(g){var k=Vg(g),l=Tg(k,"protocol"),m=Tg(k,"host",!0),n=Tg(k,"port"),r=Tg(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Ko(a){return Lo(a)?1:0}
function Lo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ga(c)){for(var d=0;d<c.length;d++)if(Ko({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return Ho(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=Ha(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var n=String(c)+m,r=Io.get(n);r||(r=new RegExp(c,m),Io.set(n,r));l=r.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Jo(b,c)}return!1};var Mo=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var No={},Oo=encodeURI,X=encodeURIComponent,Po=Ve;var Qo=function(a,b){if(!a)return!1;var c=Tg(Vg(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Ro=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};No.Xg=function(){var a=!1;return a};function jq(){return C.gaGlobal=C.gaGlobal||{}}var kq=function(){var a=jq();a.hid=a.hid||Ka();return a.hid};var tq=window,uq=document,vq=function(a){var b=tq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===tq["ga-disable-"+a])return!0;try{var c=tq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Xg("AMP_TOKEN",String(uq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return uq.getElementById("__gaOptOutExtension")?!0:!1};function yq(a,b){delete b.eventModel[G.fb];if(a!==G.K){var c=b.getWithConfig(G.mc);if(Ga(c)){N("GTM",26);for(var d={},e=0;e<c.length;e++){var f=c[e],g=b.getWithConfig(f);void 0!==g&&(d[f]=g)}b.eventModel=d}}Aq(b.eventModel)}var Aq=function(a){Na(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[G.ma]||{};Na(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Dq=function(a,b,c){Al(b,c,a)},Eq=function(a,b,c){Al(b,c,a,!0)},Gq=function(a,b){};
function Fq(a,b){}var Z={b:{}};

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=W("google_trackConversion");if(Da(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=Ro(a.vtp_customParams,
"key","value"));var k={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(k.value=a.vtp_eventValue),a.vtp_eventItems&&(k.items=a.vtp_eventItems));var l={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_gtag_event_data:k,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:qk()};a.vtp_rdp&&(l.google_restricted_data_processing=!0);a.vtp_userId&&(l.google_user_id=a.vtp_userId);
f(l)||c()}else c()},e=function(){U(b,d,c)};if(rf()){Bf(function(){yf(G.s)?e():Af(e)},[G.s]);return}xj();e()})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(Lg(a.vtp_gtmEventId,"event"))})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=qn(c,"gtm.click");bo(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!go("cl")){var c=W("document");We(c,"click",a,!0);ho("cl")}K(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!p(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<Ha(e,t))return}else if("write"===r){if(-1<Ha(f,t))return}else if("readwrite"===r){if(-1<Ha(f,t)&&-1<Ha(e,t))return}else if("execute"===r){if(-1<Ha(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},L:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ka(a.vtp_min,a.vtp_max)})}();
Z.b.tg=["google"],function(){function a(k){g.push(k);1<g.length||K(function(){var l=g.join(",");g=[];bo({event:"gtm.triggerGroup","gtm.triggers":l})})}function b(k,l){var m=d[l],n=m.indexOf(k);-1!==n&&(m.splice(n,1),m.length||a(l))}function c(k){K(k.vtp_gtmOnSuccess);var l=k.vtp_uniqueTriggerId,m=k.vtp_triggerIds,n=k.vtp_firingId;if(k.vtp_isListeningTag){var r=e[n];r?b(n,r):f.push(n)}else{d[l]=m;for(var t=0,q;q=m[t];t++)e[q]=l;for(var u=0;u<f.length;u++)b(f[u],l)}}var d={},e={},f=[],g=[];Z.__tg=c;Z.__tg.g="tg";Z.__tg.h=!0;Z.__tg.priorityOverride=0}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=V("gtm.url",1);c=c||Zn();var d=b[a("vtp_component")];if(!d||"URL"==d)return ao(String(c));var e=Vg(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ga(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Tg(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Tg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=V(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.kd&&b.md>=b.kd)b.fd&&W("self").clearInterval(b.fd);else{b.md++;var c=(new Date).getTime();bo({event:b.T,"gtm.timerId":b.fd,"gtm.timerEventNumber":b.md,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.kd,"gtm.timerStartTime":b.cf,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.cf,"gtm.triggers":b.Nh})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){K(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{T:b.vtp_eventName,md:0,interval:Number(b.vtp_interval),kd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Nh:String(b.vtp_uniqueTriggerId||"0"),cf:(new Date).getTime()};c.fd=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){var a,b={},c=function(e){Bf(function(){d(e)},[G.J,G.s])},d=function(e){var f={},g={},k={},l={},m={};if(e.vtp_gaSettings){var n=e.vtp_gaSettings;F(Ro(n.vtp_fieldsToSet,"fieldName","value"),g);F(Ro(n.vtp_contentGroup,"index","group"),k);F(Ro(n.vtp_dimension,"index","dimension"),l);F(Ro(n.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=F(n);e=F(e,r)}F(Ro(e.vtp_fieldsToSet,
"fieldName","value"),g);F(Ro(e.vtp_contentGroup,"index","group"),k);F(Ro(e.vtp_dimension,"index","dimension"),l);F(Ro(e.vtp_metric,"index","metric"),m);yf(G.J)||(g.storage="none"),yf(G.s)||(g.allowAdFeatures=!1,g.storeGac=!1);var t=Ej(e.vtp_functionName);if(Da(t)){var q="",u="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(u=e.vtp_trackerName,q=u+"."):(u="gtm"+dg(),
q=u+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,
storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},y=function(P){var S=[].slice.call(arguments,0);S[0]=q+S[0];t.apply(window,S)},x=function(P,S){return void 0===S?S:P(S)},A=function(P,S){if(S)for(var Ja in S)S.hasOwnProperty(Ja)&&y("set",P+Ja,S[Ja])},B=function(){},
z=function(P,S,Ja){var ab=0;if(P)for(var Fa in P)if(P.hasOwnProperty(Fa)&&(Ja&&v[Fa]||!Ja&&void 0===v[Fa])){var Va=w[Fa]?Ra(P[Fa]):P[Fa];"anonymizeIp"!=Fa||Va||(Va=void 0);S[Fa]=Va;ab++}return ab},D={name:u};z(g,D,!0);t("create",
e.vtp_trackingId||f.trackingId,D);y("set","&gtm",qk(!0));rf()&&y("set","&gcs",zf());e.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(P,S){void 0!==e[S]&&y("set",P,e[S])})("nonInteraction","vtp_nonInteraction");A("contentGroup",
k);A("dimension",l);A("metric",m);var H={};z(g,H,!1)&&y("set",H);var L;e.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var P=g&&g.hitCallback;Da(P)&&P();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){e.vtp_enableEcommerce&&
(y("require","ec","ec.js"),B());var O={hitType:"event",eventCategory:String(e.vtp_eventCategory||f.category),eventAction:String(e.vtp_eventAction||f.action),eventLabel:x(String,e.vtp_eventLabel||f.label),eventValue:x(Qa,e.vtp_eventValue||f.value)};z(L,O,!1);y("send",O);}else if("TRACK_SOCIAL"==e.vtp_trackType){}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==e.vtp_trackType){}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==e.vtp_trackType){}else{e.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var aa="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:aa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var Ba="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");y("require","adfeatures",{cookieName:Ba})}L?y("send","pageview",L):y("send","pageview");e.vtp_autoLinkDomains&&Fj(q,e.vtp_autoLinkDomains,!!e.vtp_useHashAutoLink,!!e.vtp_decorateFormsAutoLink);}if(!a){var Aa=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&(Aa="internal/"+Aa);a=!0;var Oa=ck(g._x_19,"/analytics.js"),
sa=Li("https:","http:","//www.google-analytics.com/"+Aa,g&&g.forceSSL);U("analytics.js"===Aa&&Oa?Oa:sa,function(){var P=Cj();P&&P.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else K(e.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(je(Vg(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},L:a}})}();





Z.b.aev=["google"],function(){function a(q,u){var v=Lg(q,"gtm");if(v)return v[u]}function b(q,u,v,w){w||(w="element");var y=q+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(q,w);if(A&&(x=v(A),n[y]=x,r.push(y),35<r.length)){var B=r.shift();delete n[B]}}return x}function c(q,u,v){var w=a(q,t[u]);return void 0!==w?w:v}function d(q,u){if(!q)return!1;var v=e(Zn());Ga(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(q))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!Qo(q,w)}function e(q){m.test(q)||(q="http://"+q);return Tg(Vg(q),"HOST",!0)}function f(q,u,v){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Ye(q,"value");case "button":return Ze(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,v=0;v<q.elements.length;v++)xn(q.elements[v])&&u++;return u}}function l(q,u,v){var w=a(q,"interactedFormField");return w&&Ye(w,u)||v}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,Ze)||v;case "URL":var x;a:{var A=String(a(u,"elementUrl")||v||""),B=Vg(A),z=String(q.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=Tg(B,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(u,w,v);else{var H=q.vtp_attribute,L=a(u,"element");D=L&&Ye(L,H)||v||""}return D;case "MD":var O=q.vtp_mdValue,Q=b(u,"MD",Jn);return O&&Q?Mn(Q,O)||
v:Q||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();


Z.b.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(k){function l(){var v=!0;v&&b.push(m)}xj();var m={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:qk()};k.vtp_rdp&&(m.google_restricted_data_processing=!0);void 0!=V(G.O)&&!1!==V(G.O)&&(m.google_gtm_url_processor=
function(v){return v=Zi(v)});var n=function(v){return function(w,y,x){var A="DATA_LAYER"==v?V(x):k[y];A&&(m[w]=A)}},r=n("JSON");r("google_conversion_currency","vtp_currencyCode");r("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(r=n(k.vtp_productReportingDataSource),r("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),r("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),r("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),
r("google_basket_discount","vtp_discount","discount"),r("google_conversion_items","vtp_items","items"),m.google_conversion_items&&m.google_conversion_items.map&&(m.google_conversion_items=m.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));var t=function(v,w){(m.google_additional_conversion_params=m.google_additional_conversion_params||{})[v]=w},q=function(v){return function(w,y,x,A){var B="DATA_LAYER"==v?V(x):k[y];A(B)&&t(w,B)}};var u=ck(k.vtp_transportUrl,"/pagead/conversion_async.js");u||(u=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");k.vtp_enableNewCustomerReporting&&(r=q(k.vtp_newCustomerReportingDataSource),r("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),r("vdltv",
"vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(m.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),m.google_read_gcl_cookie_opt_out=!1):m.google_read_gcl_cookie_opt_out=!0;"1"===Uh(!1)._up&&t("gtm_up","1");(function(){var v=!1;
v=!0;v&&rf()?Bf(function(){var w=yf(G.s),y=!w&&void 0!=V(G.O)&&!1!==V(G.O);!k.vtp_transportUrl&&y&&(m.google_transport_url="https://pagead2.googlesyndication.com/");t("gcs",zf());l();w||Af(function(){m=F(m);!k.vtp_transportUrl&&m.google_transport_url&&delete m.google_transport_url;t("gcs",zf());t("gcu","1");l()})},[G.s]):l()})();a||(a=!0,U(u,f(),e(u)))};
Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=0}();

Z.b.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=W(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},g=function(k,l){void 0!==c[k]&&(f[l]=c[k])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{U("//bat.bing.com/bat.js",
function(){var k=Mo(W("UET"),{ti:c.vtp_tagId,q:e});C[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){K(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0}();



Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){K(a.vtp_gtmOnFailure)})}();

Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=I.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Re(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){K(g)}}}var b=function(d,e,f){oj(function(){var g,k=T;k.postscribe||(k.postscribe=le);g=k.postscribe;var l={done:e},m=I.createElement("div");m.style.display="none";m.style.visibility="hidden";I.body.appendChild(m);try{g(m,d,l)}catch(n){K(f)}})};var c=function(d){if(I.body){var e=
d.vtp_gtmOnFailure,f=ko(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.ed,k=f.F;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(I.body,$e(g),k,e)()}else Yn(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();




Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=$e('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Po(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var Hq={};Hq.macro=function(a){if(nn.Sc.hasOwnProperty(a))return nn.Sc[a]},Hq.onHtmlSuccess=nn.we(!0),Hq.onHtmlFailure=nn.we(!1);Hq.dataLayer=Gg;Hq.callback=function(a){bg.hasOwnProperty(a)&&Da(bg[a])&&bg[a]();delete bg[a]};function Iq(){T[Hd.B]=Hq;Ya(cg,Z.b);ld=ld||nn;md=fj}
function Jq(){ff.gtm_3pds=!0;ff.gtag_cs_api=!0;T=C.google_tag_manager=C.google_tag_manager||{};if(T[Hd.B]){var a=T.zones;a&&a.unregisterChild(Hd.B);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)ed.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)hd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)gd.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);fd.push(r)}jd=Z;kd=Ko;var q=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;mm();Ld=new Kd(q);if(void 0!==
u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");cg[x]=w}pm(v);Iq();mn();jj=!1;kj=0;if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)mj();else{We(I,"DOMContentLoaded",mj);We(I,"readystatechange",mj);if(I.createEventObject&&I.documentElement.doScroll){var A=!0;try{A=!C.frameElement}catch(H){}A&&nj()}We(C,"load",mj)}Im=!1;"complete"===I.readyState?Km():We(C,"load",Km);a:{if(!vg)break a;C.setInterval(wg,864E5);}
Zf=(new Date).getTime();}}
(function(a){a()})(Jq);

})()
