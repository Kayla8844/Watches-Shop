(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-688d72d2"],{"2e4f":function(s,t,a){},4379:function(s,t,a){"use strict";var e=a("e8b9"),n=a.n(e);n.a},"5ccd":function(s,t,a){"use strict";var e=a("2e4f"),n=a.n(e);n.a},a55b:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("loading",{attrs:{active:s.isLoading},on:{"update:active":function(t){s.isLoading=t}}}),a("form",{staticClass:"form-signin",on:{submit:function(t){return t.preventDefault(),s.signin(t)}}},[a("img",{staticClass:"mb-4",attrs:{src:"/docs/4.3/assets/brand/bootstrap-solid.svg",alt:"",width:"72",height:"72"}}),a("h1",{staticClass:"h3 mb-3"},[s._v("會員登入")]),a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[s._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:s.user.username},on:{input:function(t){t.target.composing||s.$set(s.user,"username",t.target.value)}}}),a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[s._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:s.user.password},on:{input:function(t){t.target.composing||s.$set(s.user,"password",t.target.value)}}}),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[s._v("登入")])])],1)},n=[],r=(a("cadf"),a("551c"),a("f751"),a("097d"),{name:"Login",data:function(){return{user:{username:"",password:""},isLoading:!1}},methods:{signin:function(){var s="".concat("https://vue-course-api.herokuapp.com","/admin/signin"),t=this;t.isLoading=!0,this.$http.post(s,t.user).then(function(s){console.log(s.data),s.data.success&&t.$router.push("/admin/products"),t.isLoading=!1})}}}),i=r,o=(a("4379"),a("5ccd"),a("2877")),u=Object(o["a"])(i,e,n,!1,null,"05d0e6f2",null);t["default"]=u.exports},e8b9:function(s,t,a){}}]);
//# sourceMappingURL=chunk-688d72d2.1ee0389a.js.map