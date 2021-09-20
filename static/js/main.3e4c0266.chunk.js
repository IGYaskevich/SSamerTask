(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),c=a(9),n=a.n(c),o=(a(94),a(72)),i=a.n(o),l=a(33),u=a.n(l),d=a(78),p=a.n(d),j=a(83),_=a(157),b=a(160),h=a(52),f=a.n(h),m=a(13),O=a(60),g=a(73),v=a.n(g).a.create({baseURL:"https://api.github.com/users/"}),x=function(e){return v.get("".concat(e))},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return v.get("".concat(e,"/repos?page=").concat(t,"&per_page=5"))},k=a(54),N=Object(k.b)({name:"app",initialState:{status:"idle",show:!0,error:!1,pageCount:1,page:1},reducers:{setStatusAC:function(e,t){e.status=t.payload.status},catchErrorAC:function(e,t){e.error=t.payload.error},setPageCountAC:function(e,t){e.pageCount=t.payload.pageCount},setPageAC:function(e,t){e.page=t.payload.page}}}),y=N.reducer,w=N.actions,R=w.setStatusAC,S=w.catchErrorAC,I=w.setPageCountAC,C=w.setPageAC,U={avatar_url:"",name:"",followers:0,login:"",following:0,html_url:"",public_repos:0},A=a(82),E=[{html_url:"",name:"",full_name:"",description:""}],F=function(e,t){return function(a){a(R({status:"loading"})),B(e,t).then((function(e){a({type:"repositoryReducer/GET_REPOS_USER",payload:e.data}),a(R({status:"succeeded"}))})).catch((function(){a(S({error:!0}))}))}},P=a(3),L=s.a.memo((function(){var e=Object(m.b)(),t=Object(r.useState)(""),a=Object(j.a)(t,2),s=a[0],c=a[1],n=Object(r.useCallback)((function(e){var t=e.currentTarget.value.trim();c(t)}),[]),o=Object(r.useCallback)((function(t){"Enter"===t.key&&(e(function(e){return function(t){t(R({status:"loading"})),x(e).then((function(e){var a=e.data,r=a.avatar_url,s=a.name,c=a.followers,n=a.login,o=a.following,i=a.html_url,l=a.public_repos;t(function(e,t,a,r,s,c,n){return{type:"userReducer/SET_USER_NAME",payload:{avatar_url:e,name:t,followers:a,login:r,following:s,html_url:c,public_repos:n}}}(r,s,c,n,o,i,l)),t(R({status:"succeeded"}))})).catch((function(){t(R({status:"failed"}))}))}}(s)),e(F(s,1)),e(S({error:!1})))}),[e,s]);return Object(P.jsx)("div",{children:Object(P.jsx)("div",{children:Object(P.jsx)(b.a,{onKeyPress:o,onChange:n,className:u.a.textField,size:"small",placeholder:"Enter GitHub username",InputProps:{startAdornment:Object(P.jsx)(_.a,{position:"start",className:u.a.searchIcon,children:Object(P.jsx)(f.a,{})})},variant:"outlined"})})})})),z=s.a.memo((function(){return Object(P.jsxs)("div",{className:u.a.header,children:[Object(P.jsx)("div",{children:Object(P.jsx)(p.a,{fontSize:"large",className:u.a.gitGubIcon})}),Object(P.jsx)(L,{})]})})),G=a(159),T=a(36),D=a.n(T),K=a(17),M=a.n(K),H=a(53),J=a.n(H),Q=a(79),q=a.n(Q),Y=s.a.memo((function(e){var t=e.avatar_url,a=e.name,r=e.countFollowers,s=e.countFollowing,c=e.login,n=e.html_url;return Object(P.jsx)("div",{className:M.a.userBlock,children:Object(P.jsxs)("div",{className:M.a.userInfo,children:[Object(P.jsx)("div",{className:M.a.blockAvatar,children:Object(P.jsx)("img",{src:t,className:M.a.avatar,alt:"Avatar"})}),Object(P.jsxs)("div",{className:M.a.description,children:[Object(P.jsx)("div",{className:M.a.name,children:Object(P.jsx)("h2",{children:a})}),Object(P.jsx)("div",{className:M.a.login,children:Object(P.jsx)("a",{href:n,className:M.a.hrefLogin,children:c})}),Object(P.jsxs)("div",{className:M.a.follow,children:[Object(P.jsxs)("div",{className:M.a.personIcon,children:[Object(P.jsx)("div",{children:Object(P.jsx)(q.a,{fontSize:"small"})}),r," followers"]}),Object(P.jsxs)("div",{className:M.a.personIcon,children:[Object(P.jsx)("div",{children:Object(P.jsx)(J.a,{fontSize:"small"})}),s," following"]})]})]})]})})})),Z=a(24),X=a.n(Z),V=a(81),W=a.n(V),$=a(158),ee=a(162),te=a(120),ae=a(161),re=a(80),se=a.n(re),ce=Object($.a)((function(e){return Object(ee.a)({root:{"& > * + *":{marginTop:e.spacing(2)}}})})),ne=s.a.memo((function(){var e=Object(m.c)((function(e){return e.header})),t=e.public_repos,a=e.login,s=Object(m.c)((function(e){return e.app})),c=s.pageCount,n=s.page,o=Object(m.b)(),i=ce();return Object(r.useEffect)((function(){o(I({pageCount:Math.ceil(t/5)}))}),[o,t]),Object(P.jsx)("div",{className:i.root,children:Object(P.jsxs)("div",{className:se.a.rootDiv,children:[Object(P.jsxs)(te.a,{children:[t," items "]}),Object(P.jsx)(ae.a,{count:c,page:n,onChange:function(e,t){o(F(a,t)),o(C({page:t}))}})]})})})),oe=s.a.memo((function(e){var t=e.status,a=e.public_repos,r=e.dataRepos;return Object(P.jsx)("div",{className:X.a.repositoriesBlock,children:"succeeded"===t&&Object(P.jsxs)("div",{className:X.a.rep,children:[r.length>0?Object(P.jsxs)("div",{className:X.a.repositories,children:["Repositories(",a,")"]}):Object(P.jsxs)("div",{className:X.a.emptyList,children:[Object(P.jsx)(W.a,{fontSize:"large"}),"Repository list is empty"]}),r.map((function(e,t){return Object(P.jsxs)("div",{className:X.a.listRepos,children:[Object(P.jsx)("a",{className:X.a.hrefNameRepositories,href:e.html_url,children:Object(P.jsx)("div",{children:e.name})}),e.description]},t)})),Object(P.jsx)("div",{className:X.a.pagination,children:Object(P.jsx)(ne,{})})]})})})),ie=s.a.memo((function(e){var t=e.status,a=Object(m.c)((function(e){return e.repos})),r=Object(m.c)((function(e){return e.header})).public_repos,s=Object(m.c)((function(e){return e.header})),c=Object.assign({},s),n=function(e){return e.toString().length>="1000".length?(e/1e3).toFixed(1)+"k":e};return Object(P.jsxs)("div",{children:["idle"===t&&Object(P.jsx)("div",{className:D.a.count,children:Object(P.jsxs)("div",{className:D.a.startSearch,children:[Object(P.jsx)(f.a,{fontSize:"large"}),"Start with searching a GitHub user"]})}),"succeeded"===t&&Object(P.jsxs)("div",{className:D.a.all,children:[Object(P.jsx)(Y,{name:c.name,avatar_url:c.avatar_url,countFollowers:n(c.followers),countFollowing:n(c.following),html_url:c.html_url,login:c.login}),Object(P.jsx)(oe,{public_repos:r,status:t,dataRepos:a})]}),"failed"===t&&Object(P.jsx)("div",{className:D.a.count,children:Object(P.jsxs)("div",{className:D.a.error,children:[Object(P.jsx)(J.a,{fontSize:"large"}),"User not found"]})})]})})),le=function(){var e=Object(m.c)((function(e){return e.app})).status;return Object(P.jsxs)("div",{className:i.a.app,children:[Object(P.jsx)(z,{}),"loading"===e&&Object(P.jsx)(G.a,{}),Object(P.jsx)("div",{children:Object(P.jsx)(ie,{status:e})})]})},ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,163)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),r(e),s(e),c(e),n(e)}))},de=a(16),pe=a(43),je=Object(de.b)({header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"userReducer/SET_USER_NAME":return Object(O.a)(Object(O.a)({},e),t.payload)}return e},repos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"repositoryReducer/GET_REPOS_USER":return Object(A.a)(t.payload)}return e},app:y}),_e=Object(k.a)({reducer:je,middleware:function(e){return e().prepend(pe.a)}});window.store=_e,n.a.render(Object(P.jsx)(s.a.StrictMode,{children:Object(P.jsx)(m.a,{store:_e,children:Object(P.jsx)(le,{})})}),document.getElementById("root")),ue()},17:function(e,t,a){e.exports={userBlock:"UserBlock_userBlock__2sCPi",userInfo:"UserBlock_userInfo__ajLe4",blockAvatar:"UserBlock_blockAvatar__ADLBC",avatar:"UserBlock_avatar__3sQwh",description:"UserBlock_description__2r9Ja",name:"UserBlock_name__hP1rQ",login:"UserBlock_login__3hYBE",hrefLogin:"UserBlock_hrefLogin__1iK98",follow:"UserBlock_follow__11DKK",personIcon:"UserBlock_personIcon__2crpY"}},24:function(e,t,a){e.exports={rep:"RepositoryBlock_rep__iIt8B",repositoriesBlock:"RepositoryBlock_repositoriesBlock__1KcSh",listRepos:"RepositoryBlock_listRepos__1Tyaw",repositories:"RepositoryBlock_repositories__3gw-5",hrefNameRepositories:"RepositoryBlock_hrefNameRepositories__1q-5z",emptyList:"RepositoryBlock_emptyList__cyXob",pagination:"RepositoryBlock_pagination__3zudw",all:"RepositoryBlock_all__2q1U3"}},33:function(e,t,a){e.exports={header:"BasicBlock_header__3PonS",gitGubIcon:"BasicBlock_gitGubIcon__jGfg_",searchIcon:"BasicBlock_searchIcon__2B5_b",textField:"BasicBlock_textField__34uDb"}},36:function(e,t,a){e.exports={count:"UserInfo_count__BOcEK",startSearch:"UserInfo_startSearch__2b1Fm",all:"UserInfo_all__acZFk",error:"UserInfo_error__16sQ3",userInfo:"UserInfo_userInfo__3_999"}},72:function(e,t,a){e.exports={app:"App_app__1ZNxU",userInfo:"App_userInfo__1i6i3",searching:"App_searching__3PaiG",loader:"App_loader__14O0E",spin:"App_spin__3SC5a"}},80:function(e,t,a){e.exports={rootDiv:"pagination_rootDiv__3HtvN"}},94:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.3e4c0266.chunk.js.map