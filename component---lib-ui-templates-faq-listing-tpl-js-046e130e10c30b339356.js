(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Ft1e:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h})),a.d(t,"pageQuery",(function(){return l}));a("E5k/");var n=a("q1tI"),r=a.n(n),i=a("vOnD"),s=a("09zK"),c=a("a65r"),o=a("I+8Q");var p=Object(i.c)(c.j).withConfig({displayName:"FAQListingTpl__Questions",componentId:"sc-1ekg2v0-0"})(["",";display:",";margin-left:auto;margin-right:auto;max-width:900px;"],Object(o.b)("pah"),(function(e){return e.isActive?"block":"none"})),h=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={tab:"partnership"},a.switchTab=a.switchTab.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.switchTab=function(e){this.setState({tab:e})},i.render=function(){var e=this,t=this.props.data.markdownRemark.frontmatter,a=this.props.data.membership.edges[0].node.html,n=this.props.data.partnership.edges[0].node.html;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,Object.assign({},this.props,{title:"Frequently Asked Questions"})),r.a.createElement(s.d,this.props,r.a.createElement(s.b,null,r.a.createElement("h1",{className:"hero"},t.heading),r.a.createElement("p",{className:"para"},t.subheading)),r.a.createElement(s.a,{style:{marginLeft:"auto",marginRight:"auto",maxWidth:"900px"}},r.a.createElement(c.i,{count:2},r.a.createElement(c.h,{handleClick:function(){return e.switchTab("partnership")},isActive:"partnership"===this.state.tab},t.partnershipTab),r.a.createElement(c.h,{handleClick:function(){return e.switchTab("membership")},isActive:"membership"===this.state.tab},t.membershipTab)),r.a.createElement(p,{isActive:"partnership"===this.state.tab,limit:!0},r.a.createElement(c.c,{dangerouslySetInnerHTML:{__html:n}})),r.a.createElement(p,{isActive:"membership"===this.state.tab,limit:!0},r.a.createElement(c.c,{dangerouslySetInnerHTML:{__html:a}})))))},n}(n.Component),l="111719683"}}]);
//# sourceMappingURL=component---lib-ui-templates-faq-listing-tpl-js-046e130e10c30b339356.js.map