(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e51e4"],{"92b7":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container orderlist_all"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("section",{staticClass:"d-flex justify-content-center mt-4"},[a("div",{staticClass:"step_all mb-4"},[t._m(0),a("div",{staticClass:"step_list text-center"},[a("div",{staticClass:"step"},[a("div",{staticClass:"step_txt step_txt2",class:{active:!t.order.is_paid}},[t._v("\n\t\t\t\t\t\t2\n\t\t\t\t\t")])]),a("p",{staticClass:"step_ct"},[t._v("金流付款")])]),a("div",{staticClass:"step_list text-center"},[a("div",{staticClass:"step"},[a("div",{staticClass:"step_txt step_txt3",class:{active:t.order.is_paid}},[t._v("\n\t\t\t\t\t\t3\n\t\t\t\t\t")])]),a("p",{staticClass:"step_ct"},[t._v("完成")])])])]),a("div",{staticClass:"row justify-content-center text-left"},[a("div",{staticClass:"col-md-8"},[a("form",{on:{submit:function(s){return s.preventDefault(),t.payOrder(s)}}},[a("table",{staticClass:"table table_pdlist"},[t._m(1),a("tbody",[t._m(2),t._l(t.order.products,function(s){return a("tr",{key:s.id},[a("td",[a("img",{staticClass:"pd_img",attrs:{src:s.product.imageUrl,alt:""}})]),a("td",{staticClass:"align-middle"},[t._v(t._s(s.product.title))]),a("td",{staticClass:"align-middle"},[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))]),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(s.final_total)))])])})],2),a("tfoot",[a("tr",[a("td",{staticClass:"text-right total_txt",attrs:{colspan:"4"}},[t._v("總計 "+t._s(t._f("currency")(t.order.total)))])])])]),a("table",{staticClass:"table table_user"},[t._m(3),a("tbody",[a("tr",[a("th",{attrs:{width:"100"}},[t._v("Email")]),a("td",[t._v(t._s(t.order.user.email))])]),a("tr",[a("th",[t._v("姓名")]),a("td",[t._v(t._s(t.order.user.name))])]),a("tr",[a("th",[t._v("收件人電話")]),a("td",[t._v(t._s(t.order.user.tel))])]),a("tr",[a("th",{attrs:{width:"120"}},[t._v("收件人地址")]),a("td",[t._v(t._s(t.order.user.address))])]),a("tr",{staticClass:"pay_status_row"},[a("th",[t._v("付款狀態")]),a("td",[t.order.is_paid?a("span",{staticClass:"text-success paid_finish"},[t._v("付款完成")]):a("span",{staticClass:"not_paid"},[t._v("尚未付款")])])])])]),a("div",{staticClass:"text-right btn_group"},[t.order.is_paid?a("button",{staticClass:"btn btn_backto_pd",on:{click:t.backtoHome}},[t._v("<  回到產品列表")]):a("button",{staticClass:"btn btn-danger btn_goto_pay",on:{click:t.emptyCart}},[t._v("確認付款去")])])])])])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"step_list text-center active"},[a("div",{staticClass:"step"},[a("div",{staticClass:"step_txt"},[t._v("1")])]),a("p",{staticClass:"step_ct"},[t._v("輸入資料")]),a("div",{staticClass:"bg_line_all"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("th",{attrs:{colspan:"4"}},[t._v("購物明細")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",{staticClass:"cart_menu_title"},[a("td"),a("td",[t._v("品名")]),a("td",[t._v("數量")]),a("td",{staticClass:"text-right"},[t._v("單價")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("th",{attrs:{colspan:"2"}},[t._v("個人資訊")])])}],r={data:function(){return{order:{user:{}},orderId:"",cart:{carts:[]},isLoading:!1}},methods:{getOrder:function(){var t=this,s="".concat("https://vue-course-api.herokuapp.com","/api/").concat("ying","/order/").concat(t.orderId);t.isLoading=!0,this.$http.get(s).then(function(s){console.log(s),t.order=s.data.order,t.isLoading=!1})},payOrder:function(){var t=this,s="".concat("https://vue-course-api.herokuapp.com","/api/").concat("ying","/pay/").concat(t.orderId);t.isLoading=!0,this.$http.post(s).then(function(s){console.log(s),s.data.success&&(t.getOrder(),t.$bus.$emit("messsage:push","已付款完成","success"),t.isLoading=!1)})},getCart:function(){var t=this,s="".concat("https://vue-course-api.herokuapp.com","/api/").concat("ying","/cart");this.$http.get(s).then(function(s){console.log(s),t.cart=s.data.data})},emptyCart:function(){this.$bus.$emit("emptyCart")},backtoHome:function(){this.$router.push("/")}},created:function(){this.getCart(),this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()}},c=r,n=a("2877"),o=Object(n["a"])(c,e,i,!1,null,null,null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0e51e4.12ec641c.js.map