(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Coe3:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class a{}var o=t("pMnS"),r=t("VDRc"),i=t("/q54"),u=t("NvT6"),d=t("W5yJ"),s=t("/HVE"),b=t("SVse"),c=t("omvX"),p=t("bujt"),f=t("Fwaw"),m=t("5GAg"),g=t("HsOI"),h=t("Mr+X"),y=t("Gi4r"),A=t("Mc5n"),x=t("IP0z"),k=t("lzlj"),_=t("igqZ"),v=t("dJrM"),L=t("Xd0L"),C=t("s7LF"),w=t("ZwOa"),F=t("oapL");class q{transform(l,n,t){if(!l)return[];if(!t)return l;const e=new RegExp(t,"i");return l.filter(l=>l[n].match(e))}}var I=t("2Vo4");class O{constructor(l){this.api=l,this.products=this.api.initProduct(),this.order=[this.products],this.dataSource=this.products,this.isLoading$=new I.a(!1),this.displayedColumns=["name","value","qty"]}getProducts(){this.isLoading$.next(!0),this.api.getProducts$().subscribe(l=>{this.products=l,this.matTable(),this.isLoading$.next(!1)})}matTable(){this.dataSource=this.products}drop(l){l.previousContainer===l.container?Object(A.i)(l.container.data,l.previousIndex,l.currentIndex):Object(A.j)(l.previousContainer.data,l.container.data,l.previousIndex,l.currentIndex)}addQty(l){l.qty++}subtractQty(l){l.qty--}ngOnInit(){this.getProducts()}}var G=t("vkgz"),P=t("JIr8"),S=t("z6cu"),D=t("AytR"),M=t("IheW");const j=(()=>{class l{constructor(l){this.http=l,this.apiURL=`${D.a.API_URL}products`}initProduct(){return{id:this.uniqueID(),name:"",value:"",qty:-1}}uniqueID(){const l=Date.now(),n=Math.random();return Math.pow(l,n).toString().toString().replace(".",l.toString())}getProducts$(){return this.http.get(this.apiURL)}getProduct$(l){return this.http.get(`${this.apiURL}/${l}`)}addProduct$(l){return this.http.post(this.apiURL,l).pipe(Object(G.a)(l=>console.log(`added Product: id=${l}`)),Object(P.a)(l=>(console.log(l),Object(S.a)(l))))}deleteProduct$(l){return this.http.delete(`${this.apiURL}/${l}`)}editProduct$(l){return this.http.put(`${this.apiURL}/${l.id}`,l).pipe(Object(G.a)(l=>console.log(`edited Product: id=${l.id}`)),Object(P.a)(l=>(console.log(l),Object(S.a)(l))))}}return l.ngInjectableDef=e.Mb({factory:function(){return new l(e.Qb(M.c))},token:l,providedIn:"root"}),l})();var $=e.ob({encapsulation:0,styles:[[".stock-order[_ngcontent-%COMP%]{margin:10px}.stock-order[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{color:green}.stock-order[_ngcontent-%COMP%]   .spinner-container[_ngcontent-%COMP%]{position:absolute;height:80vh;width:100vw;background-color:#fafafa;z-index:1}.stock-order[_ngcontent-%COMP%]   .stockList[_ngcontent-%COMP%]{width:50%}.stock-order[_ngcontent-%COMP%]   .stockList[_ngcontent-%COMP%]   .productList[_ngcontent-%COMP%]{min-height:2rem;max-height:60vh;overflow-y:auto}.stock-order[_ngcontent-%COMP%]   .half-width[_ngcontent-%COMP%]{min-width:200px;width:50%}.stock-order[_ngcontent-%COMP%]   .qtyInput[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function R(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,4,"div",[["class","spinner-container"],["fxLayout",""],["fxLayoutAlign","center center"]],null,null,null,null,null)),e.pb(1,671744,null,0,r.d,[e.k,i.i,[2,r.k],i.f],{fxLayout:[0,"fxLayout"]},null),e.pb(2,671744,null,0,r.c,[e.k,i.i,[2,r.i],i.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),e.qb(3,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,u.b,u.a)),e.pb(4,49152,null,0,d.d,[e.k,s.a,[2,b.d],[2,c.a],d.a],null,null)],function(l,n){l(n,1,0,""),l(n,2,0,"center center")},function(l,n){l(n,3,0,e.Ab(n,4)._noopAnimations,e.Ab(n,4).diameter,e.Ab(n,4).diameter)})}function z(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,5,"button",[["aria-label","Clear"],["mat-button",""],["mat-icon-button",""],["matSuffix",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==(l.component.pattern="")&&e),e},p.d,p.b)),e.pb(1,180224,null,0,f.b,[e.k,m.h,[2,c.a]],null,null),e.pb(2,16384,[[11,4]],0,g.g,[],null,null),(l()(),e.qb(3,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),e.pb(4,9158656,null,0,y.b,[e.k,y.d,[8,null],[2,y.a]],null,null),(l()(),e.Ib(-1,0,["close"]))],function(l,n){l(n,4,0)},function(l,n){l(n,0,0,e.Ab(n,1).disabled||null,"NoopAnimations"===e.Ab(n,1)._animationMode),l(n,3,0,e.Ab(n,4).inline,"primary"!==e.Ab(n,4).color&&"accent"!==e.Ab(n,4).color&&"warn"!==e.Ab(n,4).color)})}function N(l){return e.Kb(0,[(l()(),e.qb(0,16777216,null,null,11,"div",[["cdkDrag",""],["class","example-box cdk-drag"]],[[2,"cdk-drag-disabled",null],[2,"cdk-drag-dragging",null]],null,null,null,null)),e.Fb(6144,null,A.k,null,[A.c]),e.pb(2,4866048,[[12,4]],3,A.c,[e.k,[3,A.b],b.d,e.y,e.O,A.a,[2,x.b],A.f,e.h],null,null),e.Gb(603979776,13,{_handles:1}),e.Gb(603979776,14,{_previewTemplate:0}),e.Gb(603979776,15,{_placeholderTemplate:0}),(l()(),e.qb(6,0,null,null,5,"mat-card",[["class","mat-card"]],null,null,null,k.d,k.a)),e.pb(7,49152,null,0,_.a,[],null,null),(l()(),e.Ib(8,0,[" "," "])),(l()(),e.qb(9,0,null,0,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),e.pb(10,16384,null,0,_.f,[],null,null),(l()(),e.Ib(11,null,["Quantity: ",""])),(l()(),e.fb(0,null,null,0))],null,function(l,n){l(n,0,0,e.Ab(n,2).disabled,e.Ab(n,2)._dragRef.isDragging()),l(n,8,0,n.context.$implicit.name),l(n,11,0,n.context.$implicit.qty)})}function T(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,7,"span",[["fxLayout","row"],["fxLayoutAlign","center center"],["fxLayoutGap","1rem"]],null,null,null,null,null)),e.pb(1,671744,null,0,r.d,[e.k,i.i,[2,r.k],i.f],{fxLayout:[0,"fxLayout"]},null),e.pb(2,1720320,null,0,r.e,[e.k,e.y,x.b,i.i,[2,r.j],i.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),e.pb(3,671744,null,0,r.c,[e.k,i.i,[2,r.i],i.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),e.qb(4,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Total products: "])),(l()(),e.qb(6,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ib(7,null,["",""]))],function(l,n){l(n,1,0,"row"),l(n,2,0,"1rem"),l(n,3,0,"center center")},function(l,n){l(n,7,0,n.component.order.length-1)})}function X(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,41,"mat-card",[["class","mat-card"],["fxFlex",""],["fxLayoutGap","1rem"]],null,null,null,k.d,k.a)),e.pb(1,1720320,null,0,r.e,[e.k,e.y,x.b,i.i,[2,r.j],i.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),e.pb(2,671744,null,0,r.b,[e.k,i.i,i.e,r.h,i.f],{fxFlex:[0,"fxFlex"]},null),e.pb(3,49152,null,0,_.a,[],null,null),(l()(),e.qb(4,0,null,0,3,"span",[["fxFlex",""],["fxFlexAlign","center"]],null,null,null,null,null)),e.pb(5,671744,null,0,r.a,[e.k,i.i,[2,r.f],i.f],{fxFlexAlign:[0,"fxFlexAlign"]},null),e.pb(6,671744,null,0,r.b,[e.k,i.i,i.e,r.h,i.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.Ib(7,null,["",""])),(l()(),e.qb(8,0,null,0,5,"button",[["fxFlexAlign","center"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.subtractQty(l.parent.context.$implicit)&&e),e},p.d,p.b)),e.pb(9,671744,null,0,r.a,[e.k,i.i,[2,r.f],i.f],{fxFlexAlign:[0,"fxFlexAlign"]},null),e.pb(10,180224,null,0,f.b,[e.k,m.h,[2,c.a]],null,null),(l()(),e.qb(11,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["color","warn"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),e.pb(12,9158656,null,0,y.b,[e.k,y.d,[8,null],[2,y.a]],{color:[0,"color"]},null),(l()(),e.Ib(-1,0,["keyboard_arrow_down"])),(l()(),e.qb(14,0,null,0,20,"mat-form-field",[["class","qtyInput mat-form-field"],["fxFlex","4rem"],["fxFlexAlign","center"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,v.b,v.a)),e.pb(15,671744,null,0,r.a,[e.k,i.i,[2,r.f],i.f],{fxFlexAlign:[0,"fxFlexAlign"]},null),e.pb(16,671744,null,0,r.b,[e.k,i.i,i.e,r.h,i.f],{fxFlex:[0,"fxFlex"]},null),e.pb(17,7520256,null,9,g.c,[e.k,e.h,[2,L.j],[2,x.b],[2,g.a],s.a,e.y,[2,c.a]],null,null),e.Gb(603979776,20,{_controlNonStatic:0}),e.Gb(335544320,21,{_controlStatic:0}),e.Gb(603979776,22,{_labelChildNonStatic:0}),e.Gb(335544320,23,{_labelChildStatic:0}),e.Gb(603979776,24,{_placeholderChild:0}),e.Gb(603979776,25,{_errorChildren:1}),e.Gb(603979776,26,{_hintChildren:1}),e.Gb(603979776,27,{_prefixChildren:1}),e.Gb(603979776,28,{_suffixChildren:1}),(l()(),e.qb(27,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","Quantity"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,t){var a=!0;return"input"===n&&(a=!1!==e.Ab(l,28)._handleInput(t.target.value)&&a),"blur"===n&&(a=!1!==e.Ab(l,28).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Ab(l,28)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Ab(l,28)._compositionEnd(t.target.value)&&a),"blur"===n&&(a=!1!==e.Ab(l,33)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==e.Ab(l,33)._focusChanged(!0)&&a),"input"===n&&(a=!1!==e.Ab(l,33)._onInput()&&a),"ngModelChange"===n&&(a=!1!==(l.parent.context.$implicit.qty=t)&&a),a},null,null)),e.pb(28,16384,null,0,C.d,[e.D,e.k,[2,C.a]],null,null),e.Fb(1024,null,C.j,function(l){return[l]},[C.d]),e.pb(30,671744,null,0,C.o,[[8,null],[8,null],[8,null],[6,C.j]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,C.k,null,[C.o]),e.pb(32,16384,null,0,C.l,[[4,C.k]],null,null),e.pb(33,999424,null,0,w.a,[e.k,s.a,[6,C.k],[2,C.n],[2,C.g],L.d,[8,null],F.a,e.y],{placeholder:[0,"placeholder"]},null),e.Fb(2048,[[20,4],[21,4]],g.d,null,[w.a]),(l()(),e.qb(35,0,null,0,6,"button",[["fxFlex","3rem"],["fxFlexAlign","center"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.addQty(l.parent.context.$implicit)&&e),e},p.d,p.b)),e.pb(36,671744,null,0,r.a,[e.k,i.i,[2,r.f],i.f],{fxFlexAlign:[0,"fxFlexAlign"]},null),e.pb(37,671744,null,0,r.b,[e.k,i.i,i.e,r.h,i.f],{fxFlex:[0,"fxFlex"]},null),e.pb(38,180224,null,0,f.b,[e.k,m.h,[2,c.a]],null,null),(l()(),e.qb(39,0,null,0,2,"mat-icon",[["class","green mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),e.pb(40,9158656,null,0,y.b,[e.k,y.d,[8,null],[2,y.a]],null,null),(l()(),e.Ib(-1,0,["keyboard_arrow_up"]))],function(l,n){l(n,1,0,"1rem"),l(n,2,0,""),l(n,5,0,"center"),l(n,6,0,""),l(n,9,0,"center"),l(n,12,0,"warn"),l(n,15,0,"center"),l(n,16,0,"4rem"),l(n,30,0,n.parent.context.$implicit.qty),l(n,33,0,"Quantity"),l(n,36,0,"center"),l(n,37,0,"3rem"),l(n,40,0)},function(l,n){l(n,7,0,n.parent.context.$implicit.name),l(n,8,0,e.Ab(n,10).disabled||null,"NoopAnimations"===e.Ab(n,10)._animationMode),l(n,11,0,e.Ab(n,12).inline,"primary"!==e.Ab(n,12).color&&"accent"!==e.Ab(n,12).color&&"warn"!==e.Ab(n,12).color),l(n,14,1,["standard"==e.Ab(n,17).appearance,"fill"==e.Ab(n,17).appearance,"outline"==e.Ab(n,17).appearance,"legacy"==e.Ab(n,17).appearance,e.Ab(n,17)._control.errorState,e.Ab(n,17)._canLabelFloat,e.Ab(n,17)._shouldLabelFloat(),e.Ab(n,17)._hasFloatingLabel(),e.Ab(n,17)._hideControlPlaceholder(),e.Ab(n,17)._control.disabled,e.Ab(n,17)._control.autofilled,e.Ab(n,17)._control.focused,"accent"==e.Ab(n,17).color,"warn"==e.Ab(n,17).color,e.Ab(n,17)._shouldForward("untouched"),e.Ab(n,17)._shouldForward("touched"),e.Ab(n,17)._shouldForward("pristine"),e.Ab(n,17)._shouldForward("dirty"),e.Ab(n,17)._shouldForward("valid"),e.Ab(n,17)._shouldForward("invalid"),e.Ab(n,17)._shouldForward("pending"),!e.Ab(n,17)._animationsEnabled]),l(n,27,1,[e.Ab(n,32).ngClassUntouched,e.Ab(n,32).ngClassTouched,e.Ab(n,32).ngClassPristine,e.Ab(n,32).ngClassDirty,e.Ab(n,32).ngClassValid,e.Ab(n,32).ngClassInvalid,e.Ab(n,32).ngClassPending,e.Ab(n,33)._isServer,e.Ab(n,33).id,e.Ab(n,33).placeholder,e.Ab(n,33).disabled,e.Ab(n,33).required,e.Ab(n,33).readonly&&!e.Ab(n,33)._isNativeSelect||null,e.Ab(n,33)._ariaDescribedby||null,e.Ab(n,33).errorState,e.Ab(n,33).required.toString()]),l(n,35,0,e.Ab(n,38).disabled||null,"NoopAnimations"===e.Ab(n,38)._animationMode),l(n,39,0,e.Ab(n,40).inline,"primary"!==e.Ab(n,40).color&&"accent"!==e.Ab(n,40).color&&"warn"!==e.Ab(n,40).color)})}function J(l){return e.Kb(0,[(l()(),e.qb(0,16777216,null,null,7,"div",[["cdkDrag",""],["class","example-box cdk-drag"]],[[2,"cdk-drag-disabled",null],[2,"cdk-drag-dragging",null]],null,null,null,null)),e.Fb(6144,null,A.k,null,[A.c]),e.pb(2,4866048,[[16,4]],3,A.c,[e.k,[3,A.b],b.d,e.y,e.O,A.a,[2,x.b],A.f,e.h],null,null),e.Gb(603979776,17,{_handles:1}),e.Gb(603979776,18,{_previewTemplate:0}),e.Gb(603979776,19,{_placeholderTemplate:0}),(l()(),e.fb(16777216,null,null,1,null,X)),e.pb(7,16384,null,0,b.l,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(0,null,null,0))],function(l,n){l(n,7,0,n.context.$implicit.qty>-1)},function(l,n){l(n,0,0,e.Ab(n,2).disabled,e.Ab(n,2)._dragRef.isDragging())})}function U(l){return e.Kb(0,[e.Cb(0,q,[]),e.Gb(402653184,1,{sort:0}),e.Gb(402653184,2,{paginator:0}),(l()(),e.qb(3,0,null,null,58,"div",[["class","stock-order"],["fxLayout","column"]],null,null,null,null,null)),e.pb(4,671744,null,0,r.d,[e.k,i.i,[2,r.k],i.f],{fxLayout:[0,"fxLayout"]},null),(l()(),e.fb(16777216,null,null,2,null,R)),e.pb(6,16384,null,0,b.l,[e.O,e.L],{ngIf:[0,"ngIf"]},null),e.Cb(131072,b.b,[e.h]),(l()(),e.qb(8,0,null,null,51,"div",[],null,null,null,null,null)),(l()(),e.qb(9,0,null,null,50,"div",[["cdkDropListGroup",""],["fxLayout","row"],["fxLayout.xs","column"],["fxLayoutAlign","space-between start"],["fxLayoutAlign.xs","stretch stretch"],["fxLayoutGap","0.5rem"],["fxLayoutGap.xs","0.2rem"]],null,null,null,null,null)),e.pb(10,147456,null,0,A.e,[],null,null),e.pb(11,671744,null,0,r.d,[e.k,i.i,[2,r.k],i.f],{fxLayout:[0,"fxLayout"],"fxLayout.xs":[1,"fxLayout.xs"]},null),e.pb(12,1720320,null,0,r.e,[e.k,e.y,x.b,i.i,[2,r.j],i.f],{fxLayoutGap:[0,"fxLayoutGap"],"fxLayoutGap.xs":[1,"fxLayoutGap.xs"]},null),e.pb(13,671744,null,0,r.c,[e.k,i.i,[2,r.i],i.f],{fxLayoutAlign:[0,"fxLayoutAlign"],"fxLayoutAlign.xs":[1,"fxLayoutAlign.xs"]},null),(l()(),e.qb(14,0,null,null,32,"mat-card",[["class","stockList mat-card"]],null,null,null,k.d,k.a)),e.pb(15,49152,null,0,_.a,[],null,null),(l()(),e.qb(16,0,null,0,20,"mat-form-field",[["class","add-form-field half-width mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,v.b,v.a)),e.pb(17,7520256,null,9,g.c,[e.k,e.h,[2,L.j],[2,x.b],[2,g.a],s.a,e.y,[2,c.a]],null,null),e.Gb(603979776,3,{_controlNonStatic:0}),e.Gb(335544320,4,{_controlStatic:0}),e.Gb(603979776,5,{_labelChildNonStatic:0}),e.Gb(335544320,6,{_labelChildStatic:0}),e.Gb(603979776,7,{_placeholderChild:0}),e.Gb(603979776,8,{_errorChildren:1}),e.Gb(603979776,9,{_hintChildren:1}),e.Gb(603979776,10,{_prefixChildren:1}),e.Gb(603979776,11,{_suffixChildren:1}),(l()(),e.qb(27,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","Filter Product"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,t){var a=!0,o=l.component;return"input"===n&&(a=!1!==e.Ab(l,28)._handleInput(t.target.value)&&a),"blur"===n&&(a=!1!==e.Ab(l,28).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Ab(l,28)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Ab(l,28)._compositionEnd(t.target.value)&&a),"blur"===n&&(a=!1!==e.Ab(l,33)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==e.Ab(l,33)._focusChanged(!0)&&a),"input"===n&&(a=!1!==e.Ab(l,33)._onInput()&&a),"ngModelChange"===n&&(a=!1!==(o.pattern=t)&&a),a},null,null)),e.pb(28,16384,null,0,C.d,[e.D,e.k,[2,C.a]],null,null),e.Fb(1024,null,C.j,function(l){return[l]},[C.d]),e.pb(30,671744,null,0,C.o,[[8,null],[8,null],[8,null],[6,C.j]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,C.k,null,[C.o]),e.pb(32,16384,null,0,C.l,[[4,C.k]],null,null),e.pb(33,999424,null,0,w.a,[e.k,s.a,[6,C.k],[2,C.n],[2,C.g],L.d,[8,null],F.a,e.y],{placeholder:[0,"placeholder"],type:[1,"type"]},null),e.Fb(2048,[[3,4],[4,4]],g.d,null,[w.a]),(l()(),e.fb(16777216,null,4,1,null,z)),e.pb(36,16384,null,0,b.l,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(37,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Stock"])),(l()(),e.qb(39,0,null,0,7,"div",[["cdkDropList",""],["class","productList cdk-drop-list"]],[[8,"id",0],[2,"cdk-drop-list-disabled",null],[2,"cdk-drop-list-dragging",null],[2,"cdk-drop-list-receiving",null]],[[null,"cdkDropListDropped"]],function(l,n,t){var e=!0;return"cdkDropListDropped"===n&&(e=!1!==l.component.drop(t)&&e),e},null,null)),e.Fb(6144,null,A.b,null,[A.d]),e.pb(41,1196032,null,1,A.d,[e.k,A.f,e.h,[2,x.b],[3,A.e]],{data:[0,"data"]},{dropped:"cdkDropListDropped"}),e.Gb(603979776,12,{_draggables:1}),e.Fb(256,null,A.e,void 0,[]),(l()(),e.fb(16777216,null,null,2,null,N)),e.pb(45,278528,null,0,b.k,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null),e.Eb(46,3),(l()(),e.qb(47,0,null,null,12,"mat-card",[["class","stockList mat-card"]],null,null,null,k.d,k.a)),e.pb(48,49152,null,0,_.a,[],null,null),(l()(),e.fb(16777216,null,0,1,null,T)),e.pb(50,16384,null,0,b.l,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(51,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Order"])),(l()(),e.qb(53,0,null,0,6,"div",[["cdkDropList",""],["class","productList cdk-drop-list"]],[[8,"id",0],[2,"cdk-drop-list-disabled",null],[2,"cdk-drop-list-dragging",null],[2,"cdk-drop-list-receiving",null]],[[null,"cdkDropListDropped"]],function(l,n,t){var e=!0;return"cdkDropListDropped"===n&&(e=!1!==l.component.drop(t)&&e),e},null,null)),e.Fb(6144,null,A.b,null,[A.d]),e.pb(55,1196032,null,1,A.d,[e.k,A.f,e.h,[2,x.b],[3,A.e]],{data:[0,"data"]},{dropped:"cdkDropListDropped"}),e.Gb(603979776,16,{_draggables:1}),e.Fb(256,null,A.e,void 0,[]),(l()(),e.fb(16777216,null,null,1,null,J)),e.pb(59,278528,null,0,b.k,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Ib(60,null,["\n","\n"])),e.Cb(0,b.f,[])],function(l,n){var t=n.component;l(n,4,0,"column"),l(n,6,0,e.Jb(n,6,0,e.Ab(n,7).transform(t.isLoading$))),l(n,11,0,"row","column"),l(n,12,0,"0.5rem","0.2rem"),l(n,13,0,"space-between start","stretch stretch"),l(n,30,0,t.pattern),l(n,33,0,"Filter Product","text"),l(n,36,0,t.pattern),l(n,41,0,t.dataSource);var a=e.Jb(n,45,0,l(n,46,0,e.Ab(n,0),t.products,"name",t.pattern));l(n,45,0,a),l(n,50,0,t.order.length-1>0),l(n,55,0,t.order),l(n,59,0,t.order)},function(l,n){var t=n.component;l(n,16,1,["standard"==e.Ab(n,17).appearance,"fill"==e.Ab(n,17).appearance,"outline"==e.Ab(n,17).appearance,"legacy"==e.Ab(n,17).appearance,e.Ab(n,17)._control.errorState,e.Ab(n,17)._canLabelFloat,e.Ab(n,17)._shouldLabelFloat(),e.Ab(n,17)._hasFloatingLabel(),e.Ab(n,17)._hideControlPlaceholder(),e.Ab(n,17)._control.disabled,e.Ab(n,17)._control.autofilled,e.Ab(n,17)._control.focused,"accent"==e.Ab(n,17).color,"warn"==e.Ab(n,17).color,e.Ab(n,17)._shouldForward("untouched"),e.Ab(n,17)._shouldForward("touched"),e.Ab(n,17)._shouldForward("pristine"),e.Ab(n,17)._shouldForward("dirty"),e.Ab(n,17)._shouldForward("valid"),e.Ab(n,17)._shouldForward("invalid"),e.Ab(n,17)._shouldForward("pending"),!e.Ab(n,17)._animationsEnabled]),l(n,27,1,[e.Ab(n,32).ngClassUntouched,e.Ab(n,32).ngClassTouched,e.Ab(n,32).ngClassPristine,e.Ab(n,32).ngClassDirty,e.Ab(n,32).ngClassValid,e.Ab(n,32).ngClassInvalid,e.Ab(n,32).ngClassPending,e.Ab(n,33)._isServer,e.Ab(n,33).id,e.Ab(n,33).placeholder,e.Ab(n,33).disabled,e.Ab(n,33).required,e.Ab(n,33).readonly&&!e.Ab(n,33)._isNativeSelect||null,e.Ab(n,33)._ariaDescribedby||null,e.Ab(n,33).errorState,e.Ab(n,33).required.toString()]),l(n,39,0,e.Ab(n,41).id,e.Ab(n,41).disabled,e.Ab(n,41)._dropListRef.isDragging(),e.Ab(n,41)._dropListRef.isReceiving()),l(n,53,0,e.Ab(n,55).id,e.Ab(n,55).disabled,e.Ab(n,55)._dropListRef.isDragging(),e.Ab(n,55)._dropListRef.isReceiving()),l(n,60,0,e.Jb(n,60,0,e.Ab(n,61).transform(t.order)))})}function K(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-product-list",[],null,null,null,U,$)),e.pb(1,114688,null,0,O,[j],null,null)],function(l,n){l(n,1,0)},null)}var Q=e.mb("app-product-list",O,K,{},{},[]),V=t("t68o"),E=t("zbXB"),B=t("NcP4"),W=t("xYTU"),H=t("hOhj"),Y=t("QQfA"),Z=t("/Co4"),ll=t("POq0"),nl=t("s6ns"),tl=t("821u"),el=t("gavF"),al=t("JjoW"),ol=t("Mz6y"),rl=t("cUpR"),il=t("OIZN"),ul=t("7kcP"),dl=t("iInd");class sl{}var bl=t("ura0"),cl=t("Nhcz"),pl=t("u9T3"),fl=t("zMNK"),ml=t("r0V8"),gl=t("02hT"),hl=t("5Bek"),yl=t("c9fC"),Al=t("Q+lL"),xl=t("8P0U"),kl=t("elxJ"),_l=t("BV1i"),vl=t("pBi1"),Ll=t("dFDH"),Cl=t("zQui"),wl=t("8rEH"),Fl=t("rWV4"),ql=t("BzsH"),Il=t("R8a3");t.d(n,"StockModuleNgFactory",function(){return Ol});var Ol=e.nb(a,[],function(l){return e.xb([e.yb(512,e.j,e.ab,[[8,[o.a,Q,V.a,E.b,E.a,B.a,W.a,W.b]],[3,e.j],e.w]),e.yb(4608,b.n,b.m,[e.t,[2,b.C]]),e.yb(4608,C.r,C.r,[]),e.yb(4608,A.f,A.f,[b.d,e.y,H.e,A.h]),e.yb(5120,e.b,function(l,n){return[i.j(l,n)]},[b.d,e.A]),e.yb(4608,Y.c,Y.c,[Y.i,Y.e,e.j,Y.h,Y.f,e.q,e.y,b.d,x.b,[2,b.h]]),e.yb(5120,Y.j,Y.k,[Y.c]),e.yb(5120,Z.a,Z.b,[Y.c]),e.yb(4608,ll.c,ll.c,[]),e.yb(5120,nl.b,nl.c,[Y.c]),e.yb(135680,nl.d,nl.d,[Y.c,e.q,[2,b.h],[2,nl.a],nl.b,[3,nl.d],Y.e]),e.yb(4608,tl.h,tl.h,[]),e.yb(5120,tl.a,tl.b,[Y.c]),e.yb(4608,L.d,L.d,[]),e.yb(5120,el.a,el.d,[Y.c]),e.yb(4608,L.c,L.y,[[2,L.h],s.a]),e.yb(5120,al.a,al.b,[Y.c]),e.yb(5120,ol.b,ol.c,[Y.c]),e.yb(4608,rl.e,L.e,[[2,L.i],[2,L.n]]),e.yb(5120,il.c,il.a,[[3,il.c]]),e.yb(5120,ul.d,ul.a,[[3,ul.d]]),e.yb(1073742336,b.c,b.c,[]),e.yb(1073742336,dl.o,dl.o,[[2,dl.t],[2,dl.l]]),e.yb(1073742336,sl,sl,[]),e.yb(1073742336,C.q,C.q,[]),e.yb(1073742336,C.h,C.h,[]),e.yb(1073742336,A.g,A.g,[]),e.yb(1073742336,i.c,i.c,[]),e.yb(1073742336,x.a,x.a,[]),e.yb(1073742336,r.g,r.g,[]),e.yb(1073742336,bl.d,bl.d,[]),e.yb(1073742336,cl.a,cl.a,[]),e.yb(1073742336,pl.a,pl.a,[[2,i.g],e.A]),e.yb(1073742336,L.n,L.n,[[2,L.f],[2,rl.f]]),e.yb(1073742336,s.b,s.b,[]),e.yb(1073742336,L.x,L.x,[]),e.yb(1073742336,L.v,L.v,[]),e.yb(1073742336,L.s,L.s,[]),e.yb(1073742336,fl.g,fl.g,[]),e.yb(1073742336,H.c,H.c,[]),e.yb(1073742336,Y.g,Y.g,[]),e.yb(1073742336,Z.c,Z.c,[]),e.yb(1073742336,f.c,f.c,[]),e.yb(1073742336,_.e,_.e,[]),e.yb(1073742336,ll.d,ll.d,[]),e.yb(1073742336,ml.b,ml.b,[]),e.yb(1073742336,ml.a,ml.a,[]),e.yb(1073742336,nl.g,nl.g,[]),e.yb(1073742336,m.a,m.a,[]),e.yb(1073742336,tl.i,tl.i,[]),e.yb(1073742336,gl.a,gl.a,[]),e.yb(1073742336,hl.c,hl.c,[]),e.yb(1073742336,yl.d,yl.d,[]),e.yb(1073742336,g.e,g.e,[]),e.yb(1073742336,y.c,y.c,[]),e.yb(1073742336,F.c,F.c,[]),e.yb(1073742336,w.b,w.b,[]),e.yb(1073742336,L.o,L.o,[]),e.yb(1073742336,Al.c,Al.c,[]),e.yb(1073742336,el.c,el.c,[]),e.yb(1073742336,el.b,el.b,[]),e.yb(1073742336,L.z,L.z,[]),e.yb(1073742336,L.p,L.p,[]),e.yb(1073742336,al.d,al.d,[]),e.yb(1073742336,ol.e,ol.e,[]),e.yb(1073742336,il.d,il.d,[]),e.yb(1073742336,xl.c,xl.c,[]),e.yb(1073742336,d.c,d.c,[]),e.yb(1073742336,kl.a,kl.a,[]),e.yb(1073742336,_l.h,_l.h,[]),e.yb(1073742336,ul.e,ul.e,[]),e.yb(1073742336,vl.a,vl.a,[]),e.yb(1073742336,Ll.e,Ll.e,[]),e.yb(1073742336,Cl.p,Cl.p,[]),e.yb(1073742336,wl.m,wl.m,[]),e.yb(1073742336,Fl.a,Fl.a,[]),e.yb(1073742336,ql.b,ql.b,[]),e.yb(1073742336,Il.a,Il.a,[]),e.yb(1073742336,a,a,[]),e.yb(1024,dl.j,function(){return[[{path:"",component:O}]]},[]),e.yb(256,L.g,L.k,[])])})},NvT6:function(l,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return u});var e=t("8Y7J"),a=(t("W5yJ"),t("SVse"));t("IP0z"),t("Xd0L"),t("cUpR"),t("/HVE"),t("omvX");var o=e.ob({encapsulation:2,styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],data:{}});function r(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"animation-name",null],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,function(l,n){var t=n.component;l(n,0,0,t._circleRadius,"mat-progress-spinner-stroke-rotate-"+t.diameter,t._strokeDashOffset,t._strokeCircumference,t._circleStrokeWidth)})}function i(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,function(l,n){var t=n.component;l(n,0,0,t._circleRadius,t._strokeDashOffset,t._strokeCircumference,t._circleStrokeWidth)})}function u(l){return e.Kb(2,[(l()(),e.qb(0,0,null,null,5,":svg:svg",[["focusable","false"],["preserveAspectRatio","xMidYMid meet"]],[[4,"width","px"],[4,"height","px"],[1,"viewBox",0]],null,null,null,null)),e.pb(1,16384,null,0,a.p,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),e.fb(16777216,null,null,1,null,r)),e.pb(3,278528,null,0,a.q,[e.O,e.L,a.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),e.fb(16777216,null,null,1,null,i)),e.pb(5,278528,null,0,a.q,[e.O,e.L,a.p],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(l,n){l(n,1,0,"indeterminate"===n.component.mode),l(n,3,0,!0),l(n,5,0,!1)},function(l,n){var t=n.component;l(n,0,0,t.diameter,t.diameter,t._viewBox)})}}}]);