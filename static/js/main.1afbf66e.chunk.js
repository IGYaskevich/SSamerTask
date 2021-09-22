(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{122:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(9),c=r.n(s),o=(r(96),r(74)),i=r.n(o),l=r(33),u=r.n(l),p=r(80),d=r.n(p),j=r(85),_=r(160),b=r(163),h=r(54),f=r.n(h),m=r(13),O=r(34),g=r.n(O),v=r(50),x=r(62),k=r(75),N=r.n(k).a.create({baseURL:"https://api.github.com/users/"}),B=function(e){return N.get("".concat(e))},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return N.get("".concat(e,"/repos?page=").concat(t,"&per_page=5"))},R=r(56),w=Object(R.b)({name:"app",initialState:{status:"idle",show:!0,error:!1,pageCount:1,page:1},reducers:{setStatusAC:function(e,t){e.status=t.payload.status},catchErrorAC:function(e,t){e.error=t.payload.error},setPageCountAC:function(e,t){e.pageCount=t.payload.pageCount},setPageAC:function(e,t){e.page=t.payload.page}}}),S=w.reducer,I=w.actions,C=I.setStatusAC,U=I.catchErrorAC,A=I.setPageCountAC,E=I.setPageAC,F={avatar_url:"",name:"",followers:0,login:"",following:0,html_url:"",public_repos:0},P=function(e,t,r,a,n,s,c){return{type:"userReducer/SET_USER_NAME",payload:{avatar_url:e,name:t,followers:r,login:a,following:n,html_url:s,public_repos:c}}},G=r(84),L=[{html_url:"",name:"",full_name:"",description:""}],z=function(e,t){return function(){var r=Object(v.a)(g.a.mark((function r(a){var n;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a(C({status:"loading"})),r.next=4,y(e,t);case 4:n=r.sent,a({type:"repositoryReducer/GET_REPOS_USER",payload:n.data}),a(C({status:"succeeded"})),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),a(U({error:!0}));case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},T=r(3),M=n.a.memo((function(){var e=Object(m.b)(),t=Object(a.useState)(""),r=Object(j.a)(t,2),n=r[0],s=r[1],c=Object(a.useCallback)((function(e){var t=e.currentTarget.value.trim();s(t)}),[]),o=Object(a.useCallback)((function(t){"Enter"===t.key&&(e(function(e){return function(){var t=Object(v.a)(g.a.mark((function t(r){var a,n,s,c,o,i,l,u,p;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(C({status:"loading"})),t.next=4,B(e);case 4:a=t.sent,n=a.data,s=n.avatar_url,c=n.name,o=n.followers,i=n.login,l=n.following,u=n.html_url,p=n.public_repos,r(P(s,c,o,i,l,u,p)),r(C({status:"succeeded"})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),r(C({status:"failed"}));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(n)),e(z(n,1)),e(U({error:!1})))}),[e,n]);return Object(T.jsx)("div",{children:Object(T.jsx)("div",{children:Object(T.jsx)(b.a,{onKeyPress:o,onChange:c,className:u.a.textField,size:"small",placeholder:"Enter GitHub username",InputProps:{startAdornment:Object(T.jsx)(_.a,{position:"start",className:u.a.searchIcon,children:Object(T.jsx)(f.a,{})})},variant:"outlined"})})})})),Q=n.a.memo((function(){return Object(T.jsxs)("div",{className:u.a.header,children:[Object(T.jsx)("div",{children:Object(T.jsx)(d.a,{fontSize:"large",className:u.a.gitGubIcon})}),Object(T.jsx)(M,{})]})})),D=r(162),H=r(37),K=r.n(H),Y=r(17),q=r.n(Y),J=r(55),Z=r.n(J),V=r(81),W=r.n(V),X=n.a.memo((function(e){var t=e.avatar_url,r=e.name,a=e.countFollowers,n=e.countFollowing,s=e.login,c=e.html_url;return Object(T.jsx)("div",{className:q.a.userBlock,children:Object(T.jsxs)("div",{className:q.a.userInfo,children:[Object(T.jsx)("div",{className:q.a.blockAvatar,children:Object(T.jsx)("img",{src:t,className:q.a.avatar,alt:"Avatar"})}),Object(T.jsxs)("div",{className:q.a.description,children:[Object(T.jsx)("div",{className:q.a.name,children:Object(T.jsx)("h2",{children:r})}),Object(T.jsx)("div",{className:q.a.login,children:Object(T.jsx)("a",{href:c,className:q.a.hrefLogin,children:s})}),Object(T.jsxs)("div",{className:q.a.follow,children:[Object(T.jsxs)("div",{className:q.a.personIcon,children:[Object(T.jsx)("div",{children:Object(T.jsx)(W.a,{fontSize:"small"})}),a," followers"]}),Object(T.jsxs)("div",{className:q.a.personIcon,children:[Object(T.jsx)("div",{children:Object(T.jsx)(Z.a,{fontSize:"small"})}),n," following"]})]})]})]})})})),$=r(24),ee=r.n($),te=r(83),re=r.n(te),ae=r(161),ne=r(165),se=r(123),ce=r(164),oe=r(82),ie=r.n(oe),le=Object(ae.a)((function(e){return Object(ne.a)({root:{"& > * + *":{marginTop:e.spacing(2)}}})})),ue=n.a.memo((function(){var e=Object(m.c)((function(e){return e.header})),t=e.public_repos,r=e.login,n=Object(m.c)((function(e){return e.app})),s=n.pageCount,c=n.page,o=Object(m.b)(),i=le();return Object(a.useEffect)((function(){o(A({pageCount:Math.ceil(t/5)}))}),[o,t]),Object(T.jsx)("div",{className:i.root,children:Object(T.jsxs)("div",{className:ie.a.rootDiv,children:[Object(T.jsxs)(se.a,{children:[t," items "]}),Object(T.jsx)(ce.a,{count:s,page:c,onChange:function(e,t){o(z(r,t)),o(E({page:t}))}})]})})})),pe=n.a.memo((function(e){var t=e.status,r=e.public_repos,a=e.dataRepos;return Object(T.jsx)("div",{className:ee.a.repositoriesBlock,children:"succeeded"===t&&Object(T.jsxs)("div",{className:ee.a.rep,children:[a.length>0?Object(T.jsxs)("div",{className:ee.a.repositories,children:["Repositories(",r,")"]}):Object(T.jsxs)("div",{className:ee.a.emptyList,children:[Object(T.jsx)(re.a,{fontSize:"large"}),"Repository list is empty"]}),a.map((function(e,t){return Object(T.jsxs)("div",{className:ee.a.listRepos,children:[Object(T.jsx)("a",{className:ee.a.hrefNameRepositories,href:e.html_url,children:Object(T.jsx)("div",{children:e.name})}),e.description]},t)})),Object(T.jsx)("div",{className:ee.a.pagination,children:Object(T.jsx)(ue,{})})]})})})),de=n.a.memo((function(e){var t=e.status,r=Object(m.c)((function(e){return e.repos})),a=Object(m.c)((function(e){return e.header})).public_repos,n=Object(m.c)((function(e){return e.header})),s=Object.assign({},n),c=function(e){return e.toString().length>="1000".length?(e/1e3).toFixed(1)+"k":e};return Object(T.jsxs)("div",{children:["idle"===t&&Object(T.jsx)("div",{className:K.a.count,children:Object(T.jsxs)("div",{className:K.a.startSearch,children:[Object(T.jsx)(f.a,{fontSize:"large"}),"Start with searching a GitHub user"]})}),"succeeded"===t&&Object(T.jsxs)("div",{className:K.a.all,children:[Object(T.jsx)(X,{name:s.name,avatar_url:s.avatar_url,countFollowers:c(s.followers),countFollowing:c(s.following),html_url:s.html_url,login:s.login}),Object(T.jsx)(pe,{public_repos:a,status:t,dataRepos:r})]}),"failed"===t&&Object(T.jsx)("div",{className:K.a.count,children:Object(T.jsxs)("div",{className:K.a.error,children:[Object(T.jsx)(Z.a,{fontSize:"large"}),"User not found"]})})]})})),je=function(){var e=Object(m.c)((function(e){return e.app})).status;return Object(T.jsxs)("div",{className:i.a.app,children:[Object(T.jsx)(Q,{}),"loading"===e&&Object(T.jsx)(D.a,{}),Object(T.jsx)("div",{children:Object(T.jsx)(de,{status:e})})]})},_e=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,166)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))},be=r(16),he=r(44),fe=Object(be.b)({header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"userReducer/SET_USER_NAME":return Object(x.a)(Object(x.a)({},e),t.payload)}return e},repos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"repositoryReducer/GET_REPOS_USER":return Object(G.a)(t.payload)}return e},app:S}),me=Object(R.a)({reducer:fe,middleware:function(e){return e().prepend(he.a)}});window.store=me,c.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(m.a,{store:me,children:Object(T.jsx)(je,{})})}),document.getElementById("root")),_e()},17:function(e,t,r){e.exports={userBlock:"UserBlock_userBlock__3j9uk",userInfo:"UserBlock_userInfo__2t1tB",blockAvatar:"UserBlock_blockAvatar__2RMd9",avatar:"UserBlock_avatar__XQYae",description:"UserBlock_description__3rzvN",name:"UserBlock_name__BabYy",login:"UserBlock_login__3Q5h9",hrefLogin:"UserBlock_hrefLogin__3t5YQ",follow:"UserBlock_follow__19uk3",personIcon:"UserBlock_personIcon__1RYjc"}},24:function(e,t,r){e.exports={rep:"RepositoryBlock_rep__1DP-S",repositoriesBlock:"RepositoryBlock_repositoriesBlock__3pKnR",listRepos:"RepositoryBlock_listRepos__1-AUD",repositories:"RepositoryBlock_repositories__2hSqQ",hrefNameRepositories:"RepositoryBlock_hrefNameRepositories__2QjS-",emptyList:"RepositoryBlock_emptyList__14q-b",pagination:"RepositoryBlock_pagination__3GlpR",all:"RepositoryBlock_all__lQnU0"}},33:function(e,t,r){e.exports={header:"BasicBlock_header__Q0c6g",gitGubIcon:"BasicBlock_gitGubIcon__2G8oI",searchIcon:"BasicBlock_searchIcon__1mrnH",textField:"BasicBlock_textField__3-W60"}},37:function(e,t,r){e.exports={count:"UserInfo_count__2KCeh",startSearch:"UserInfo_startSearch__imyt6",all:"UserInfo_all__13dNb",error:"UserInfo_error__-h_ZZ",userInfo:"UserInfo_userInfo__2OMFV"}},74:function(e,t,r){e.exports={app:"App_app__3Ibq8",userInfo:"App_userInfo__mHjK3",searching:"App_searching__3CNxO",loader:"App_loader__5Brln",spin:"App_spin__wN9vM"}},82:function(e,t,r){e.exports={rootDiv:"pagination_rootDiv__3CnGF"}},96:function(e,t,r){}},[[122,1,2]]]);
//# sourceMappingURL=main.1afbf66e.chunk.js.map