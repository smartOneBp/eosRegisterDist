webpackJsonp([1],{"/NoM":function(t,e){},"1vTY":function(t,e){},"3wlc":function(t,e){},"7Yb6":function(t,e){},"7Zc5":function(t,e){},"90Tz":function(t,e){},"9qFK":function(t,e){},CYXL:function(t,e){},"Cl+S":function(t,e){},Cq0m:function(t,e){},Esib:function(t,e){},Esr8:function(t,e){},IS45:function(t,e){},Kkdd:function(t,e){},"L0+G":function(t,e){},MY2E:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};a.d(i,"accountName",function(){return Lt}),a.d(i,"email",function(){return Rt}),a.d(i,"ownerPublicKey",function(){return At}),a.d(i,"ownerPrivateKey",function(){return Ot}),a.d(i,"activePublicKey",function(){return Ut}),a.d(i,"activePrivateKey",function(){return qt}),a.d(i,"paymentType",function(){return Yt});a("L0+G"),a("xBry");var n=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},s,!1,function(t){a("MY2E")},null,null).exports,o=a("/ocq"),l=a("HW6M"),c=a.n(l),d={props:{tag:{type:String,default:"nav"},expand:{type:String,default:"large"},dark:{type:Boolean,default:!1},position:{type:String},target:{type:String,default:"#navbarSupportedContent"},scrolling:{type:Boolean,default:!1},color:{type:String},transparent:{type:Boolean},navStyle:{type:String}},data:function(){return{scrolled:!1,toggleClicked:!0}},computed:{navClass:function(){return c()("navbar",this.dark?"navbar-dark":"navbar-light",this.color&&!this.transparent?this.color+"-color":"","small"===this.expand?"navbar-expand-sm":"medium"===this.expand?"navbar-expand-md":"large"===this.expand?"navbar-expand-lg":"navbar-expand-lx","top"===this.position?"fixed-top":"bottom"===this.position?"fixed-bottom":"",this.scrolling?"scrolling-navbar":"")},navStyles:function(){return this.navStyle}},methods:{toggle:function(){var t=this;this.toggleClicked?(this.collapse.classList.toggle("show-navbar"),this.collapse.classList.remove("hide-navbar"),this.collapse.classList.toggle("collapse"),this.collapse.style.overflow="hidden",this.collapseOverflow=setTimeout(function(){t.collapse.style.overflow="initial"},300),this.toggleClicked=!1):(this.collapse.classList.add("hide-navbar"),this.collapse.classList.toggle("show-navbar"),this.collapse.style.overflow="hidden",this.collapseOverflow=setTimeout(function(){t.collapse.classList.toggle("collapse"),t.collapse.style.overflow="initial"},300),this.toggleClicked=!0)},close:function(){var t=this;this.collapse.classList.add("hide-navbar"),this.collapse.classList.remove("show-navbar"),this.collapse.style.overflow="hidden",this.collapseOverflow=setTimeout(function(){t.collapse.classList.add("collapse"),t.collapse.style.overflow="initial"},300),this.toggleClicked=!0},handleScroll:function(){this.scrolling&&(window.scrollY>100&&!1===this.scrolled?(this.$el.style.paddingTop="5px",this.$el.style.paddingBottom="5px",this.transparent&&this.$el.classList.add(this.color+"-color"),this.scrolled=!0):window.scrollY<100&&!0===this.scrolled&&(this.$el.style.paddingTop="12px",this.$el.style.paddingBottom="12px",this.transparent&&this.$el.classList.remove(this.color+"-color"),this.scrolled=!1))},onClick:function(t){if(t.target.classList.contains("navbar-toggler")||t.target.parentNode.classList.contains("navbar-toggler"))this.toggle();else if(!1===this.toggleClicked){var e=t.target,a=document.getElementsByTagName("body")[0];if(!e.classList.contains("navbar-link"))for(;e!==a;){if(e.classList.contains("navbar"))return;e=e.parentNode}this.close()}}},mounted:function(){document.addEventListener("click",this.onClick),this.collapse=this.$el.children.navbarSupportedContent,this.collapse.classList.add("collapse")},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){document.removeEventListener("click",this.onClick),window.removeEventListener("scroll",this.handleScroll)}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e(this.tag,{tag:"component",class:this.navClass,style:this.navStyles},[e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":this.target,"aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var p=a("VU/8")(d,u,!1,function(t){a("90Tz")},"data-v-16d6007e",null).exports,f=(a("3wlc"),{methods:{wave:function(t){this.waves&&(this.target=t.target.classList.contains("ripple-parent")?t.currentTarget:t.target.parentElement,this.getOffsets(t),this.waveData={top:t.pageY-this.offsetTop,left:t.pageX-this.offsetLeft,height:this.$el.offsetHeight,width:this.$el.offsetWidth},this.wavesFixed&&(this.waveData.top=t.clientY-this.offsetTop),this.createRipple(),this.rippleAnimate(),this.rippleRemove(this.target,this.rippleElement))},getOffsets:function(t){if(this.target.offsetParent)for(this.offsetLeft=this.target.offsetLeft,this.offsetTop=this.target.offsetTop,this.parentOffset=this.target.offsetParent;this.parentOffset;)this.offsetLeft+=this.parentOffset.offsetLeft,this.offsetTop+=this.parentOffset.offsetTop,this.parentOffset=this.parentOffset.offsetParent},createRipple:function(){this.rippleElement=document.createElement("div"),this.rippleElement.classList.add("ripple"),this.rippleElement.style.top=this.waveData.top-this.waveData.width/2+"px",this.rippleElement.style.left=this.waveData.left-this.waveData.width/2+"px",this.rippleElement.style.height=this.waveData.width+"px",this.rippleElement.style.width=this.waveData.width+"px",this.darkWaves&&(this.rippleElement.style.background="rgba(0, 0, 0, 0.2)"),this.target.appendChild(this.rippleElement)},rippleAnimate:function(){this.rippleElement.classList.add("is-reppling")},rippleRemove:function(t,e){this.remove=setTimeout(function(){t.removeChild(e)},600)}}}),h={props:{tag:{type:String,default:"li"},active:{type:Boolean,default:!1},href:{type:String,default:"#"},waves:{type:Boolean,default:!0},wavesFixed:{type:Boolean,default:!1},disabled:{type:Boolean},router:{type:Boolean,default:!1},exact:{type:Boolean,default:!1}},computed:{className:function(){return c()("nav-item",this.waves&&"ripple-parent")},anchorClassName:function(){return c()({"nav-link":!0,"navbar-link":!0,disabled:this.disabled,active:this.active})},link:function(){return this.router?this.href:"#"+this.href}},mixins:[f]},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",class:t.className,on:{click:t.wave}},[t.router?t._e():a("a",{class:t.anchorClassName,attrs:{href:t.link}},[t._t("default")],2),t._v(" "),t.router?a("router-link",{class:t.anchorClassName,attrs:{tag:"a",exact:t.exact,"active-class":"active","exact-active-class":"active",to:t.link}},[t._t("default")],2):t._e()],1)},staticRenderFns:[]};var m=a("VU/8")(h,v,!1,function(t){a("Cl+S")},"data-v-2c6dedcf",null).exports,g={props:{tag:{type:String,default:"ul"},right:{type:Boolean,default:!1}},computed:{className:function(){return c()("navbar-nav",this.right?"ml-auto":"mr-auto")}}},y={render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:this.className},[this._t("default")],2)},staticRenderFns:[]};var _=a("VU/8")(g,y,!1,function(t){a("pAfM")},"data-v-7a34da9d",null).exports,b={props:{tag:{type:String,default:"nav"},id:{type:String,default:"navbarSupportedContent"}},computed:{className:function(){return c()("navbar-collapse")}}},w={render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:this.className,attrs:{id:this.id}},[this._t("default")],2)},staticRenderFns:[]};var C=a("VU/8")(b,w,!1,function(t){a("CYXL")},"data-v-e7b5ec34",null).exports,k={props:{tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1},freeBird:{type:Boolean,default:!1}},computed:{className:function(){return c()(this.fluid?"container-fluid":"container",this.freeBird?"free-bird":"")}}},x={render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:this.className},[this._t("default")],2)},staticRenderFns:[]};var E=a("VU/8")(k,x,!1,function(t){a("ZWdF")},"data-v-793d126a",null).exports,P=a("WEHx"),S={props:{tag:{type:String,default:"div"},show:{type:Boolean},btnGroup:{type:Boolean},dropup:{type:Boolean,default:!1},dropright:{type:Boolean,default:!1},dropleft:{type:Boolean,default:!1},split:{type:Boolean,default:!1}},data:function(){return{toggle:!1}},mixins:[P.mixin],methods:{away:function(){this.toggle=!1}},computed:{className:function(){return c()(this.btnGroup?"btn-group":"dropdown",this.show&&"show",this.dropup&&"dropup",this.dropright&&"dropright",this.dropleft&&"dropleft")},style:function(){return{"margin-left":this.split&&"-0.3rem"}}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",class:t.className,style:t.style},[a("span",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.away,expression:"away"}],on:{click:function(e){t.toggle=!t.toggle}}},[t._t("toggle")],2),t._v(" "),t.toggle?a("div",[t._t("default")],2):t._e()])},staticRenderFns:[]};var B=a("VU/8")(S,N,!1,function(t){a("tCz0"),a("ztVT")},"data-v-29971b44",null).exports,K={props:{tag:{type:String,default:"a"},href:{type:String,default:"#"},disabled:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},computed:{className:function(){return c()("dropdown-item",this.disabled?"disabled":"",this.active?"active":"")}}},$={render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:this.className,attrs:{href:this.href}},[this._t("default")],2)},staticRenderFns:[]};var M=a("VU/8")(K,$,!1,function(t){a("7Zc5")},"data-v-4db1911b",null).exports,F={props:{tag:{type:String,default:"div"},dropup:{type:Boolean,default:!1},right:{type:Boolean,default:!1},dropright:{type:Boolean,default:!1},dropleft:{type:Boolean,default:!1},color:{type:String}},computed:{className:function(){return c()("dropdown-menu","show",this.right?"dropdown-menu-right":"",this.dropup?"dropup":"",this.color?"dropdown-"+this.color:"",this.dropright?"dropright":"",this.dropleft?"dropleft":"")}}},T={render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:this.className,attrs:{"data-toggle":"dropdown-menu"}},[this._t("default")],2)},staticRenderFns:[]};var V=a("VU/8")(F,T,!1,function(t){a("IS45")},"data-v-527d4cad",null).exports,L={props:{tag:{type:String,default:"button"},navLink:{type:Boolean,default:!1},color:{type:String,default:"default"},outline:{type:String},size:{type:String},block:{type:Boolean,default:!1},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},waves:{type:Boolean,default:!0},wavesFixed:{type:Boolean,default:!1},srOnly:{type:Boolean,default:!1}},computed:{className:function(){return c()(this.navLink?"nav-link":"btn",this.outline?"btn-outline-"+this.outline:"btn-"+this.color,this.size?"btn-"+this.size:"",this.block?"btn-block":"",this.active?"active":"",this.disabled?"disabled":"","dropdown-toggle")}},mixins:[f]},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",class:[t.className,{"ripple-parent":t.waves}],attrs:{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{click:function(e){return e.preventDefault(),t.wave(e)}}},[a("span",{staticClass:"sr-only",attrs:{if:t.srOnly}},[t._v("Toggle Dropdown")]),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var A=a("VU/8")(L,R,!1,function(t){a("9qFK")},"data-v-087a99c7",null).exports,O={props:{basic:{type:Boolean,default:!1},name:{type:String},required:{type:Boolean,default:!1},tag:{type:String,default:"input"},type:{type:String,default:"text"},id:{type:String},label:{type:String},filled:{type:Boolean},icon:{type:String},placeholder:{type:String},size:{type:String},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},navInput:{type:Boolean,default:!1},gap:{type:Boolean,default:!1},waves:{type:Boolean,default:!1},wavesFixed:{type:Boolean,default:!1},value:{type:[String,Number],default:""},labelColor:{type:String},iconClass:{type:String},inline:{type:Boolean},successMsg:{type:String},errorMsg:{type:String},valid:{type:Boolean},invalid:{type:Boolean},active:{type:Boolean,default:!1}},data:function(){return{innerValue:this.value,innerRadio:"",isTouched:this.active,innerChecked:this.checked}},computed:{className:function(){return c()("form-control",{"validate valid":this.valid,"validate invalid":this.invalid,"filled-in":this.filled,"with-gap":this.gap},"checkbox"===this.type&&(!this.gap&&"form-check-input"),"radio"===this.type&&"form-check-input")},wrapperClass:function(){return this.basic?null:c()("checkbox"!==this.type&&"radio"!==this.type||!this.inline?"checkbox"===this.type||"radio"===this.type?"form-check my-3":"md-form":"form-check",this.size&&"form-"+this.size,this.waves&&"ripple-parent")},iconClasses:function(){return c()("prefix fa fa-"+this.icon,this.isTouched&&"active",this.iconClass)},labelClass:function(){return c()({active:this.placeholder||this.isTouched||""!==this.innerValue,disabled:this.disabled,"form-check-label mr-5":"checkbox"===this.type||"radio"===this.type},this.labelColor&&"text-"+this.labelColor)}},methods:{focus:function(t){this.isTouched=!0,this.disabled||this.$refs.input.focus(),this.navInput&&(this.$el.firstElementChild.style.borderColor="transparent",this.$el.firstElementChild.style.boxShadow="none")},blur:function(t){this.isTouched=!1,this.navInput&&(this.$el.firstElementChild.style.borderColor="#fff")},onChange:function(t){"text"!=this.type&&"email"!=this.type&&"password"!=this.type&&"radio"!=this.type||(this.$emit("input",t.target.value),this.innerValue=t.target.value),"checkbox"==this.type&&(this.$emit("change",t.target.checked),this.innerChecked=t.target.checked),this.$forceUpdate()}},mixins:[f]},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.wrapperClass},[t.icon?a("i",{class:t.iconClasses}):t._e(),t._v(" "),t.label&&t.basic?a("label",{ref:"label",class:t.labelClass,attrs:{for:t.id},on:{click:t.focus}},[t._v(t._s(t.label))]):t._e(),t._v(" "),a(t.tag,{ref:"input",tag:"component",class:t.className,attrs:{id:t.id,type:t.type,placeholder:t.placeholder,disabled:t.disabled,name:t.name,required:t.required,checked:t.innerChecked,value:t.innerValue},on:{focus:t.focus,blur:t.blur,click:t.wave,change:t.onChange,input:t.onChange}}),t._v(" "),t.label&&!t.basic?a("label",{ref:"label",class:t.labelClass,attrs:{for:t.id},on:{click:t.focus}},[t._v(t._s(t.label))]):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var q=a("VU/8")(O,U,!1,function(t){a("dqvK")},"data-v-cbba2254",null).exports,Y={props:{tag:{type:String,default:"a"},href:{type:String}}},z={render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"navbar-brand",attrs:{href:this.href}},[this._t("default")],2)},staticRenderFns:[]};var D=a("VU/8")(Y,z,!1,function(t){a("NhBd")},"data-v-295700c5",null).exports,j=(a("e0XP"),{props:{icon:{type:String},size:{type:[Boolean,String],default:!1},fixed:{type:Boolean,default:!1},pull:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!1},spin:{type:Boolean,default:!1},pulse:{type:Boolean,default:!1},rotate:{type:[Boolean,String],default:!1},flip:{type:[Boolean,String],default:!1},inverse:{type:[Boolean,String],default:!1},stack:{type:[Boolean,String],default:!1}},computed:{className:function(){return c()("fa",this.icon?"fa-"+this.icon:"",!!this.size&&"fa-"+this.size,!!this.fixed&&"fa-fw",!!this.pull&&"fa-pull-"+this.pull,!!this.border&&"fa-border",!!this.spin&&"fa-spin",!!this.pulse&&"fa-pulse",!!this.rotate&&"fa-rotate-"+this.rotate,!!this.flip&&"fa-flip-"+this.flip,!!this.inverse&&"fa-inverse",!!this.stack&&"fa-"+this.stack)}}}),H={render:function(){var t=this.$createElement;return(this._self._c||t)("i",{class:this.className})},staticRenderFns:[]};var W=a("VU/8")(j,H,!1,function(t){a("1vTY")},"data-v-1d2eb5ea",null).exports,I={props:{tag:{type:String,default:"div"},start:{type:Boolean,default:!1},end:{type:Boolean,default:!1},center:{type:Boolean,default:!1},between:{type:Boolean,default:!1},around:{type:Boolean,default:!1}},computed:{className:function(){return c()("row",this.start&&"justify-content-start",this.end&&"justify-content-end",this.center&&"justify-content-center",this.between&&"justify-content-between",this.around&&"justify-content-around")}}},X={render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:this.className},[this._t("default")],2)},staticRenderFns:[]};var Z=a("VU/8")(I,X,!1,function(t){a("WS/f")},"data-v-16218701",null).exports,G={name:"NavbarPage",components:{Navbar:p,NavbarItem:m,NavbarNav:_,NavbarCollapse:C,Container:E,Dropdown:B,DropdownItem:M,DropdownMenu:V,DropdownToggle:A,mdbInput:q,mdbNavbarBrand:D,Fa:W,Row:Z}},Q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("container",[a("container",[a("navbar",{attrs:{dark:"",position:"top",color:"primary",scrolling:""}},[a("mdb-navbar-brand",{attrs:{href:"#"}},[t._v("\n        SmartOne\n      ")]),t._v(" "),a("navbar-collapse",[a("navbar-nav",{attrs:{right:""}},[a("navbar-item",{attrs:{href:"#","waves-fixed":""}},[t._v("Home")]),t._v(" "),a("navbar-item",{attrs:{href:"#","waves-fixed":""}},[t._v("Faq")]),t._v(" "),a("navbar-item",{attrs:{href:"#","waves-fixed":""}},[t._v("About")]),t._v(" "),a("dropdown",{staticClass:"nav-item",attrs:{tag:"li"}},[a("dropdown-toggle",{attrs:{slot:"toggle",tag:"a",navLink:"",color:"primary","waves-fixed":""},slot:"toggle"},[t._v("Language")]),t._v(" "),a("dropdown-menu",[a("dropdown-item",[t._v("English")]),t._v(" "),a("dropdown-item",[t._v("日本語")]),t._v(" "),a("dropdown-item",[t._v("中国語")])],1)],1)],1),t._v(" "),a("form",[a("mdb-input",{staticClass:"text-white",attrs:{type:"text",placeholder:"Search","aria-label":"Search",label:"",navInput:"",waves:"","waves-fixed":""}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var J=a("VU/8")(G,Q,!1,function(t){a("trSy")},"data-v-7d48942a",null).exports,tt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bread"},[e("div",{staticClass:"bread-wrap"},[e("nav",{},[e("a",{attrs:{href:"/"}},[this._v("\n                Home\n            ")]),this._v(" "),this._t("default")],2)])])},staticRenderFns:[]};var et=a("VU/8")({data:function(){return{msg:"hello vue"}}},tt,!1,function(t){a("Kkdd")},null,null).exports,at={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{align:"center"}},[a("div",{staticClass:"check-step"},[a("ul",[a("li",{class:{cur:t.step>=1}},[a("span",[t._v("Choose Account Name")])]),t._v(" "),a("li",{class:{cur:t.step>=2}},[a("span",[t._v("Privide Public Key")])]),t._v(" "),a("li",{class:{cur:t.step>=3}},[a("span",[t._v("Make Payment")])]),t._v(" "),a("li",{class:{cur:t.step>=4}},[a("span",[t._v("Finish")])])])])])},staticRenderFns:[]};var it=a("VU/8")({props:["step"],data:function(){return{}}},at,!1,function(t){a("xlty")},"data-v-389d8bd3",null).exports,nt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{attrs:{id:"footer"}},[a("div",{staticClass:"inner"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"copyright"},[t._v("\n        © Design: "),a("a",{attrs:{href:"https://smartone.io"}},[t._v("SmartOne")])]),t._v(" "),a("ul",{staticClass:"icons"},[a("li",[a("a",{staticClass:"icon fa-facebook",attrs:{href:"#"}},[a("span",{staticClass:"label"},[t._v("Facebook")])])]),t._v(" "),a("li",[a("a",{staticClass:"icon fa-twitter",attrs:{href:"#"}},[a("span",{staticClass:"label"},[t._v("Twitter")])])]),t._v(" "),a("li",[a("a",{staticClass:"icon fa-linkedin",attrs:{href:"#"}},[a("span",{staticClass:"label"},[t._v("linkedIn")])])]),t._v(" "),a("li",[a("a",{staticClass:"icon fa-pinterest-p",attrs:{href:"#"}},[a("span",{staticClass:"label"},[t._v("Pinterest")])])]),t._v(" "),a("li",[a("a",{staticClass:"icon fa-vimeo",attrs:{href:"#"}},[a("span",{staticClass:"label"},[t._v("Vimeo")])])])])])])])}]};var st=a("VU/8")(null,nt,!1,function(t){a("Esr8")},"data-v-72818977",null).exports,rt={props:{tag:{type:String,default:"div"},col:{type:String},sm:{type:String},md:{type:String},lg:{type:String},xl:{type:String},offset:{type:String},offsetSm:{type:String},offsetMd:{type:String},offsetLg:{type:String},offsetXl:{type:String}},computed:{className:function(){return c()(this.col?"col-"+this.col:"",this.sm?"col-sm-"+this.sm:"",this.md?"col-md-"+this.md:"",this.lg?"col-lg-"+this.lg:"",this.xl?"col-xl-"+this.xl:"",this.col||this.sm||this.md||this.lg||this.xl?"":"col",this.offset?"offset-"+this.offset:"",this.offsetSm?"offset-sm-"+this.offsetSm:"",this.offsetMd?"offset-md-"+this.offsetMd:"",this.offsetLg?"offset-lg-"+this.offsetLg:"",this.offsetXl?"offset-xl-"+this.offsetXl:"")}}},ot={render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:this.className},[this._t("default")],2)},staticRenderFns:[]};var lt=a("VU/8")(rt,ot,!1,function(t){a("Esib")},"data-v-67a6ca55",null).exports,ct={props:{tag:{type:String,default:"div"},cascade:{type:Boolean,default:!1},wide:{type:Boolean,default:!1},narrow:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},testimonial:{type:Boolean,default:!1},personal:{type:Boolean,default:!1},news:{type:Boolean,default:!1},ecommerce:{type:Boolean,default:!1},collection:{type:Boolean,default:!1},pricing:{type:Boolean,default:!1},color:{type:String},textColor:{type:String},border:{type:String}},computed:{className:function(){return c()("card",this.cascade?"card-cascade":"",this.wide?"card-cascade wider":"",this.narrow?"card-cascade narrower":"",this.reverse?"card-cascade wider reverse":"",this.dark?"card-dark":"",this.testimonial?"testimonial-card":"",this.personal?"card-personal":"",this.news?"news-card":"",this.ecommerce&&"card-ecommerce",this.collection&&"collection-card",this.pricing&&"pricing-card",this.color&&!this.textColor?this.color+" white-text":!!this.textColor&&this.color+" "+this.textColor+"-text",this.border&&"border-"+this.border)}}},dt={render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:this.className},[this._t("default")],2)},staticRenderFns:[]};var ut=a("VU/8")(ct,dt,!1,function(t){a("7Yb6")},"data-v-54e1f707",null).exports,pt={props:{tag:{type:String,default:"div"},color:{type:String},cascade:{type:Boolean}},computed:{className:function(){return c()("card-body",this.color?this.color+"-color":"",this.cascade&&"card-body-cascade")}}},ft={render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:this.className},[this._t("default")],2)},staticRenderFns:[]};var ht=a("VU/8")(pt,ft,!1,function(t){a("Cq0m")},"data-v-6181ccb6",null).exports,vt=a("NYxO"),mt=a("mtWM"),gt=a.n(mt),yt={data:function(){return{accountNamePage:"1qazxsw23edc",emailPage:"liquanyong@gmail.com",pick:"1"==this.$store.state.pick?"1":"0",verificationCode:"",accountNameErrorMsg:"",emailErrorMsg:"",verificationCodeErrorMsg:""}},computed:{isMailVerified:function(){return"0"!=this.pick},accountNameExistMsg:function(){var t=this;if(12!=this.accountNamePage.length&&this.accountNamePage.length>0)return this.accountNameErrorMsg="","Account names must be exactly 12 characters long!";gt.a.get("/api/ear/check-account-exist",{params:{eos_account_name:this.accountNamePage}}).then(function(e){var a=e.data;"200"==a.code?t.accountNameErrorMsg="Account Name is Exist!":console.log("checkAccountExist Result:"+a.code)}).catch(function(t){return console.log(t)})}},methods:{trunToCreatePublickey:function(){var t=this;this.accountNamePage.length<=0?this.accountNameErrorMsg="AccountName Required!":this.emailPage.length<=0?this.emailErrorMsg="Email required.":this.validEmail(this.emailPage)?"0"==this.pick?this.verificationCode.length<=0?this.verificationCodeErrorMsg="verificationCode required!":(alert("pick=0"),gt.a.get("/api/ear/verify-email-address",{params:{email_address:this.emailPage,confirm_code:this.verificationCode}}).then(function(e){var a=e.data;alert(a.code),"400"==a.code?t.emailErrorMsg=a.msg:(t.$store.state.accountName=t.accountNamePage,t.$store.state.email=t.emailPage,t.$store.state.pick=t.pick,t.$router.push({path:"/CreatePublicKey"}))}).catch(function(t){return console.log(t)})):gt.a.get("/api/ear/check-email-verified",{params:{email_address:this.emailPage}}).then(function(e){"400"==e.data.code?t.emailErrorMsg="email not verified! new Mail Recive Verification code":(t.$store.state.accountName=t.accountNamePage,t.$store.state.email=t.emailPage,t.$store.state.pick=t.pick,t.$router.push({path:"/CreatePublicKey"}))}).catch(function(t){return console.log(t)}):this.emailErrorMsg="Valid email required."},validEmail:function(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},checkEmailVerify:function(){var t=this;this.emailPage.length<=0?this.emailErrorMsg="Email required.":this.validEmail(this.emailPage)?gt.a.get("/api/ear/check-email-verified",{params:{email_address:this.emailPage}}).then(function(e){"200"!=e.data.code&&t.sendMail()}).catch(function(t){return console.log(t)}):this.emailErrorMsg="Valid email required."},sendMail:function(){alert("sendMail"),gt.a.get("/api/ear/send-confirm-code",{params:{email_address:this.emailPage}}).then(function(t){t.data.code}).catch(function(t){return console.log(t)})}},components:{MyHeader:J,NavBread:et,CheckStep:it,Container:E,Row:Z,Column:lt,Card:ut,CardBody:ht,MyFooter:st}},_t={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("my-header"),t._v(" "),a("check-step",{attrs:{step:1}}),t._v(" "),a("main",[a("container",[a("br"),t._v(" "),a("row",[a("column",{attrs:{md:"6"}},[a("card",[a("card-body",[a("form",[a("h2",[t._v("Choose account name")]),t._v(" "),a("hr"),t._v("\n\t\t\t\t\t\t\t\t\tEOS Account names must be exactly 12 characters long and consist of lower case characters and digits up until 5."),a("br"),t._v(" "),a("br"),t._v("Account Name: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.accountNamePage,expression:"accountNamePage"}],staticClass:"form-control",domProps:{value:t.accountNamePage},on:{input:function(e){e.target.composing||(t.accountNamePage=e.target.value)}}}),t._v(" "),t.accountNameExistMsg?a("p",{staticClass:"errorMsg"},[t._v(t._s(t.accountNameExistMsg))]):t._e(),t._v(" "),t.accountNameErrorMsg?a("p",{staticClass:"errorMsg"},[t._v(t._s(t.accountNameErrorMsg))]):t._e(),t._v(" "),a("br"),t._v("Your Email Address:\n\t\t\t\t\t\t\t\t\t"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.emailPage,expression:"emailPage"}],staticClass:"form-control",domProps:{value:t.emailPage},on:{input:function(e){e.target.composing||(t.emailPage=e.target.value)}}}),t._v(" "),t.emailErrorMsg?a("p",{staticClass:"errorMsg"},[t._v(t._s(t.emailErrorMsg))]):t._e(),t._v(" "),a("br"),t._v(" "),a("div",{attrs:{align:"center"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pick,expression:"pick"}],attrs:{type:"radio",id:"new"},domProps:{value:0,checked:t._q(t.pick,0)},on:{change:function(e){t.pick=0}}}),a("label",{attrs:{for:"new"}},[t._v("New Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pick,expression:"pick"}],attrs:{type:"radio",id:"verfied"},domProps:{value:1,checked:t._q(t.pick,1)},on:{change:function(e){t.pick=1}}}),a("label",{attrs:{for:"verfied"}},[t._v("Verified Email")])]),t._v(" "),t.isMailVerified?t._e():a("div",[a("br"),t._v(" "),a("span",[t._v("Verification Code: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.verificationCode,expression:"verificationCode"}],attrs:{maxlength:"86",size:"10"},domProps:{value:t.verificationCode},on:{input:function(e){e.target.composing||(t.verificationCode=e.target.value)}}}),t._v("  "),a("a",{attrs:{href:"#"},on:{click:t.checkEmailVerify}},[t._v("receive Verification Code")])]),t._v(" "),t.verificationCodeErrorMsg?a("p",{staticClass:"errorMsg"},[t._v(t._s(t.verificationCodeErrorMsg))]):t._e()]),t._v(" "),a("div",{staticClass:"text-right py-4 mt-3"},[a("router-link",{staticClass:"btn btn-primary",staticStyle:{width:"140px"},attrs:{to:""},nativeOn:{click:function(e){return t.trunToCreatePublickey(e)}}},[t._v("Next")])],1)])])],1)],1)],1)],1)],1),t._v(" "),a("br"),t._v(" "),a("my-footer")],1)},staticRenderFns:[]};var bt=a("VU/8")(yt,_t,!1,function(t){a("/NoM")},"data-v-e56cdd0e",null).exports,wt=a("Dd8w"),Ct=a.n(wt),kt={data:function(){return{sendKeyToEmaiMessage:""}},methods:{sendKeyToEmail:function(){var t=this;gt.a.get("/api/ear/send-keys",{params:{email_address:this.email}}).then(function(e){"200"==e.data.code&&(t.sendKeyToEmaiMessage="Send keyPairs Sucessful, Please check your Email!")}).catch(function(t){return console.log(t)})}},computed:Ct()({},Object(vt.b)(["accountName","email"])),components:{MyHeader:J,NavBread:et,CheckStep:it,Container:E,Row:Z,Column:lt,Card:ut,CardBody:ht,MyFooter:st}},xt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("my-header"),t._v(" "),a("check-step",{attrs:{step:2}}),t._v(" "),a("main",[a("container",[a("br"),t._v(" "),a("row",[a("column",{attrs:{md:"6"}},[a("card",[a("card-body",[a("h2",[t._v("Provide public keys")]),t._v(" "),a("hr"),t._v("\n\t\t\t\t\t\t\t\tPlease provide the public keys for your new account. Active Public Key can be the same as Owner Public Key but not recommended for security."),a("br"),t._v(" "),a("br"),t._v("Owner Public Key:"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.ownerPublicKey,expression:"$store.state.ownerPublicKey"}],staticClass:"form-control",domProps:{value:t.$store.state.ownerPublicKey},on:{input:function(e){e.target.composing||t.$set(t.$store.state,"ownerPublicKey",e.target.value)}}}),t._v(" "),a("br"),t._v("Active Public Key:"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.activePublicKey,expression:"$store.state.activePublicKey"}],staticClass:"form-control",domProps:{value:t.$store.state.activePublicKey},on:{input:function(e){e.target.composing||t.$set(t.$store.state,"activePublicKey",e.target.value)}}}),a("br"),t._v(" "),a("div",{staticClass:"text-right py-4 mt-3"},[a("router-link",{staticClass:"btn btn-primary btn-rounded float-left",staticStyle:{width:"140px"},attrs:{to:"/"}},[t._v("Previous")]),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-rounded float-right",staticStyle:{width:"140px"},attrs:{to:"/Payment",disabled:""}},[t._v("Next")])],1)])],1)],1),t._v(" "),a("column",{attrs:{md:"6"}},[a("ul",[a("li",[a("h5",[t._v("Your chosen EOS Account Name is: "),a("font",{attrs:{color:"5385c1"}},[t._v(t._s(t.accountName))])],1)]),t._v(" "),a("li",[a("h5",[t._v("Your Email Address is: "),a("font",{attrs:{color:"5385c1"}},[t._v(t._s(t.email))])],1)])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("In order to access your new EOS account, you will need two key pairs, owner and active. Each key pair consists of a private key and a public key. The public key is safe to give out and will be publicly visible in the blockchain. The private key must be kept secret and stored securely.\nHere are several generators you can use:")]),t._v(" "),a("ul",[a("li",[a("a",{staticClass:"btn btn-unique btn-rounded",on:{click:t.sendKeyToEmail}},[t._v("Send KeyPairs to Mail")]),t._v("\n\t\t\t\t\t(send KeyPairs to your Email)"),a("br"),t.sendKeyToEmaiMessage?a("p",{staticClass:"errorMsg"},[t._v(t._s(t.sendKeyToEmaiMessage))]):t._e()]),t._v(" "),a("li",[a("a",{attrs:{href:"https://ipfs.io/ipfs/QmW4XxaEg8cWsYisfjnjqLFi1MbHMYjt7nbCh8ZHwgg9c2"}},[t._v("Simple javascript generator")]),t._v("(easiest to use)")])])])],1)],1)],1),t._v(" "),a("br"),t._v(" "),a("my-footer")],1)},staticRenderFns:[]};var Et=a("VU/8")(kt,xt,!1,function(t){a("QxwE")},"data-v-4d44e97d",null).exports,Pt={data:function(){return{selected:""}},methods:{payment:function(){"1"==this.selected||window.open("https://commerce.coinbase.com/checkout/51aa71c1-1937-46aa-a693-a80869a5bbdc")}},computed:Ct()({},Object(vt.b)(["accountName","email","ownerPublicKey","ownerPrivateKey","activePublicKey","activePrivateKey"])),components:{MyHeader:J,NavBread:et,CheckStep:it,Container:E,Row:Z,Column:lt,Card:ut,CardBody:ht,MyFooter:st}},St={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("my-header"),t._v(" "),a("check-step",{attrs:{step:3}}),t._v(" "),a("main",[a("container",[a("br"),t._v(" "),a("row",[a("column",{attrs:{md:"6"}},[a("card",[a("card-body",[a("h2",[t._v("Make Payment")]),t._v(" "),a("hr"),t._v("\n                  After successful payment we will create the EOS account for you."),a("br"),t._v(" "),a("br"),a("div",{attrs:{align:"center"}},[a("h3",[a("font",{attrs:{color:"#d1434a"}},[t._v("$ 99")])],1)]),t._v(" "),a("br"),t._v("Choose payment option:"),a("br"),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("---Please select one---")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v(" Credit Card")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("Cryptocurrency(Bitcoin,Ethereum,...)")])]),t._v(" "),a("div",{staticClass:"text-right py-4 mt-3"},[a("router-link",{staticClass:"btn btn-primary btn-rounded float-left",staticStyle:{width:"140px"},attrs:{to:"/CreatePublicKey"}},[t._v("Previous")]),t._v(" "),a("a",{staticClass:"btn btn-primary btn-rounded float-right",staticStyle:{width:"140px"},attrs:{to:"/"},on:{click:function(e){t.payment()}}},[t._v("payment")])],1)])],1)],1),t._v(" "),a("column",{attrs:{md:"6"}},[a("ul",[a("li",[a("h5",[t._v("Your chosen EOS Account Name is: "),a("font",{attrs:{color:"5385c1"}},[t._v(t._s(t.accountName))])],1)]),t._v(" "),a("li",[a("h5",[t._v("Your Email Address is: "),a("font",{attrs:{color:"5385c1"}},[t._v(t._s(t.email))])],1)]),t._v(" "),a("li",[a("h6",[t._v("Owner Public Key:")])]),t._v(" "),a("font",{attrs:{color:"5385c1"}},[t._v(t._s(t.ownerPublicKey))]),t._v(" "),a("li",[a("h6",[t._v("Active Public Key:"),a("br"),a("font",{attrs:{color:"5385c1"}},[t._v(t._s(t.activePublicKey))])],1)])],1)])],1)],1)],1),t._v(" "),a("br"),t._v(" "),a("my-footer")],1)},staticRenderFns:[]},Nt=a("VU/8")(Pt,St,!1,null,null,null).exports,Bt={props:{tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},computed:{className:function(){return c()("jumbotron",this.fluid?"jumbotron-fluid":"")}}},Kt={render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",class:this.className},[this._t("default")],2)},staticRenderFns:[]};var $t=a("VU/8")(Bt,Kt,!1,function(t){a("Z8/v")},"data-v-9b5bd422",null).exports,Mt={data:function(){return{}},methods:{turnToCreatePublicKey:function(){this.$router.push({path:"/CreatePublicKey"})},turnToPayment:function(){this.$router.push({path:"/Payment"})}},computed:Ct()({},Object(vt.b)(["accountName","email","ownerPublicKey","ownerPrivateKey","activePublicKey","activePrivateKey"])),components:{MyHeader:J,NavBread:et,CheckStep:it,Container:E,Jumbotron:$t,MyFooter:st}},Ft={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("my-header"),t._v(" "),a("check-step",{attrs:{step:4}}),t._v(" "),a("main",[a("container",[a("br"),t._v(" "),a("jumbotron",{staticClass:"mt-4"},[a("h2",[t._v("Congratulations! Your EOS Account has been created.")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("h5",[t._v("Your chosen EOS Account Name is: "),a("font",{attrs:{color:"5385c1"}},[t._v(t._s(t.accountName))])],1)]),t._v(" "),a("li",[a("h5",[t._v("Your Email Address is: "),a("font",{attrs:{color:"5385c1"}},[t._v(t._s(t.email))])],1)]),t._v(" "),a("li",[a("h6",[t._v("Owner Public Key:")])]),t._v(" "),a("font",{attrs:{color:"5385c1"}},[t._v(t._s(t.ownerPublicKey))]),t._v(" "),a("li",[a("h6",[t._v("Owner Private Key:"),a("br"),a("font",{attrs:{color:"5385c1"}},[t._v(t._s(t.ownerPrivateKey))])],1)]),t._v(" "),a("li",[a("h6",[t._v("Active Public Key:"),a("br"),a("font",{attrs:{color:"5385c1"}},[t._v(t._s(t.activePublicKey))])],1)]),t._v(" "),a("li",[a("h6",[t._v("Active Private Key:"),a("br"),a("font",{attrs:{color:"5385c1"}},[t._v(t._s(t.activePrivateKey))])],1)])],1),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"text-center py-2 mt-3"},[a("button",{staticClass:"btn btn-outline-purple",attrs:{type:"submit"}},[t._v("Send"),a("i",{staticClass:"fa fa-paper-plane-o ml-2"})])])])],1)],1),t._v(" "),a("br"),t._v(" "),a("my-footer")],1)},staticRenderFns:[]},Tt=a("VU/8")(Mt,Ft,!1,null,null,null).exports;n.default.use(o.a);var Vt=new o.a({mode:"history",base:"/eosRegisterDist",routes:[{path:"/",name:"CreateAccountName",component:bt},{path:"/CreatePublicKey",name:"CreatePublicKey",component:Et},{path:"/Payment",name:"Payment",component:Nt},{path:"/Finish",name:"Finish",component:Tt}]}),Lt=function(t){return t.accountName},Rt=function(t){return t.email},At=function(t){return t.ownerPublicKey},Ot=function(t){return t.ownerPrivateKey},Ut=function(t){return t.activePublicKey},qt=function(t){return t.activePrivateKey},Yt=function(t){return t.paymentType};n.default.use(vt.a);var zt=new vt.a.Store({state:{accountName:"",email:"",pick:"",ownerPublicKey:"",ownerPrivateKey:"",activePublicKey:"",activePrivateKey:"",paymentType:"0"},getters:i});n.default.config.productionTip=!1,new n.default({el:"#app",router:Vt,store:zt,components:{App:r},template:"<App/>"})},NhBd:function(t,e){},QxwE:function(t,e){},"WS/f":function(t,e){},"Z8/v":function(t,e){},ZWdF:function(t,e){},dqvK:function(t,e){},e0XP:function(t,e){},pAfM:function(t,e){},tCz0:function(t,e){},trSy:function(t,e){},xBry:function(t,e){},xlty:function(t,e){},ztVT:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.42a6f6679b881c94f3a2.js.map