(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,a,t){e.exports=t(66)},39:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),s=t.n(l),c=(t(39),t(6)),m=t(4),i=t(18),o=t.n(i);var u=function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"background-home"}))},p=t(2),d=function(e){window.localStorage.setItem("token",e)},f=function(){return window.localStorage.getItem("token")},E=function(){var e=f();if(!e)return!1;var a=e.split(".");return!(a.length<3)&&JSON.parse(window.atob(a[1]))},v=function(){var e=E();return!!e&&Math.round(Date.now()/1e3)<e.exp},h=function(){localStorage.removeItem("token")};var g=function(){var e=r.a.useState(v()),a=Object(p.a)(e,2),t=a[0],n=a[1],l=Object(m.h)().pathname,s=Object(m.g)();return r.a.useEffect((function(){n(v())}),[l]),r.a.createElement("nav",null,r.a.createElement("div",{className:"main-nav"},r.a.createElement("div",{className:"left-nav"},r.a.createElement(c.b,{className:"nav-item",to:"/"},"Home")),r.a.createElement("div",{className:"right-nav"},t&&r.a.createElement(c.b,{className:"nav-item",to:"/findlove"},"Find Love"),t&&r.a.createElement(c.b,{className:"nav-item",to:"/myprofile"},"My Profile"),!t&&r.a.createElement(c.b,{className:"auth-nav-item",to:"/login"},"Login"),!t&&r.a.createElement(c.b,{className:"auth-nav-item",to:"/register"},"Sign up"),t&&r.a.createElement("span",{className:"nav-item",onClick:function(){h(),s.push("/")}},"Log Out"))))},b=t(1),N=t.n(b),_=t(7),x=t(13),w=t(3),k=t(9),y=t.n(k),O=function(){return{headers:{Authorization:"Bearer ".concat(f())}}},j=function(e){return y.a.post("".concat("/api","/auth/register/"),e)},C=function(){return y.a.get("".concat("/api","/auth/myprofile/"),O())},S=function(){return y.a.get("".concat("/api","/auth/users/"),O())},F=function(e){return y.a.get("".concat("/api","/auth/profile/").concat(e,"/"),O())},M=function(e){return y.a.put("".concat("/api","/auth/myprofile/"),e,O())},D=function(e){return y.a.post("".concat("/api","/liked/"),e,O())},L=function(e){return y.a.post("".concat("/api","/disliked/"),e,O())},I={background:"#332d2d",text:"#fff"},Y=function(e){i.notify.show(e,"custom",2e3,I)};var B=function(){var e=Object(m.g)(),a=r.a.useState({email:"",password:""}),t=Object(p.a)(a,2),n=t[0],l=t[1],s=r.a.useState(""),c=Object(p.a)(s,2),i=c[0],o=c[1],u=function(e){o(""),l(Object(w.a)(Object(w.a)({errors:i},n),{},Object(x.a)({},e.target.name,e.target.value)))},f=function(){var a=Object(_.a)(N.a.mark((function a(t){var r;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,l=n,y.a.post("".concat("/api","/auth/login/"),l);case 4:r=a.sent,Y(r.data.message),d(r.data.token),e.push("/myprofile"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),o(a.t0.response);case 13:case"end":return a.stop()}var l}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}();return n?r.a.createElement("div",{className:"main-page"},r.a.createElement("h1",null,"Login Page"),r.a.createElement("div",{className:"auth-box login-box"},r.a.createElement("form",{onSubmit:f,className:"auth-form"},r.a.createElement("div",{className:"auth-input"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",name:"email",value:n.email,onChange:u,className:i?"red":""})),r.a.createElement("div",{className:"auth-input"},r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:n.password,onChange:u,className:i?"red":""})),r.a.createElement("div",null,r.a.createElement("button",null,"Submit"))))):null},P=function(e){return y.a.post("https://api.cloudinary.com/v1_1/dsz79ulhu/image/upload",e)};var V=function(){var e=Object(m.g)(),a=r.a.useState({email:"",username:"",password:"",password_confirmation:"",first_name:"",gender:"",gender_preference:"",about_bio:"",other_interests:"",political_preferences:"",music_preferences:"",literature_preferences:"",film_preferences:"",television_preferences:""}),t=Object(p.a)(a,2),n=t[0],l=t[1],s=r.a.useState({}),c=Object(p.a)(s,2),i=c[0],o=c[1],u=r.a.useState(""),f=Object(p.a)(u,2),E=f[0],v=f[1],h=function(e){o(Object(w.a)(Object(w.a)({},i),{},Object(x.a)({},e.target.name,""))),l(Object(w.a)(Object(w.a)({},n),{},Object(x.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(_.a)(N.a.mark((function e(a){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.preventDefault(),(t=new FormData).append("file",a.target.files[0]),t.append("upload_preset","rbt41gvu"),e.next=7,P(t);case 7:n=e.sent,v(n.data.url),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),o({profile_image:"Unable to upload, please try a different picture."});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}(),b=function(){var a=Object(_.a)(N.a.mark((function a(t){var r,l;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,r=Object(w.a)(Object(w.a)({},n),{},{profile_image:E}),a.next=5,j(r);case 5:l=a.sent,d(l.data.token),e.push("/login"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),o(a.t0.response.data);case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}();return n?r.a.createElement("div",{className:"main-page"},r.a.createElement("h1",null,"Register Page"),r.a.createElement("div",{className:"auth-box"},r.a.createElement("form",{onSubmit:b,className:"auth-form"},r.a.createElement("div",{className:"auth-input"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",name:"email",value:n.email,onChange:h,className:i.email?"red":""})),r.a.createElement("div",{className:"errors-small"},i.email&&r.a.createElement("small",{className:"help is-danger"},i.email)),r.a.createElement("div",{className:"auth-input"},r.a.createElement("label",null,"First name:"),r.a.createElement("input",{type:"text",name:"first_name",value:n.first_name,onChange:h,className:i.first_name?"red":""})),r.a.createElement("div",{className:"errors-small"},i.first_name&&r.a.createElement("small",{className:"help is-danger"},i.first_name)),r.a.createElement("div",{className:"auth-input"},r.a.createElement("label",null,"Profile Image:"),r.a.createElement("input",{type:"file",name:"profile_image",onChange:g,className:i.profile_image?"red":""})),r.a.createElement("div",{className:"errors-small"},i.profile_image&&r.a.createElement("small",{className:"help is-danger"},i.profile_image)),r.a.createElement("div",{className:"auth-input"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:n.username,onChange:h,className:i.username?"red":""})),r.a.createElement("div",{className:"errors-small"},i.username&&r.a.createElement("small",{className:"help is-danger"},i.username)),r.a.createElement("div",{className:"auth-input"},r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:n.password,onChange:h,className:i.password?"red":""})),r.a.createElement("div",{className:"errors-small"},i.password&&r.a.createElement("small",{className:"help is-danger"},i.password)),r.a.createElement("div",{className:"auth-input"},r.a.createElement("label",null,"Confirm your password:"),r.a.createElement("input",{type:"password",name:"password_confirmation",value:n.password_confirmation,onChange:h,className:i.password_confirmation?"red":""})),r.a.createElement("div",{className:"errors-small"},i.password_confirmation&&r.a.createElement("small",{className:"help is-danger"},i.password_confirmation)),r.a.createElement("div",{className:"auth-select"},r.a.createElement("label",null,"Your gender:"),r.a.createElement("select",{name:"gender",onChange:h,value:n.gender,className:i.gender?"red":""},r.a.createElement("option",{disabled:!0,value:""}),r.a.createElement("option",{value:"M"},"Male"),r.a.createElement("option",{value:"F"},"Female"))),r.a.createElement("div",{className:"errors-small"},i.gender&&r.a.createElement("small",{className:"help is-danger"},i.gender)),r.a.createElement("div",{className:"auth-select"},r.a.createElement("label",null,"Youre interested in..."),r.a.createElement("select",{name:"gender_preference",onChange:h,className:i.gender_preference?"red":"",value:n.gender_preference},r.a.createElement("option",{disabled:!0,value:""}),r.a.createElement("option",{value:"M"},"Male"),r.a.createElement("option",{value:"F"},"Female"),r.a.createElement("option",{value:"B"},"Both"))),r.a.createElement("div",{className:"errors-small"},i.gender_preference&&r.a.createElement("small",{className:"help is-danger"},i.gender_preference)),r.a.createElement("div",{className:"auth-textarea"},r.a.createElement("label",null,"About you:"),r.a.createElement("textarea",{maxLength:"400",onChange:h,name:"about_bio",value:n.about_bio,className:i.about_bio?"red":""})),r.a.createElement("div",{className:"errors-small"},i.about_bio&&r.a.createElement("small",{className:"help is-danger"},i.about_bio)),r.a.createElement("div",{className:"auth-textarea"},r.a.createElement("label",null,"Interests:"),r.a.createElement("textarea",{maxLength:"300",onChange:h,name:"other_interests",value:n.other_interests,className:i.other_interests?"red":""})),r.a.createElement("div",{className:"errors-small"},i.other_interests&&r.a.createElement("small",{className:"help is-danger"},i.other_interests)),r.a.createElement("div",{className:"auth-textarea"},r.a.createElement("label",null,"Important political issues to you:"),r.a.createElement("textarea",{maxLength:"300",onChange:h,name:"political_preferences",value:n.political_preferences,className:i.political_preferences?"red":""})),r.a.createElement("div",{className:"errors-small"},i.political_preferences&&r.a.createElement("small",{className:"help is-danger"},i.political_preferences)),r.a.createElement("div",{className:"auth-textarea"},r.a.createElement("label",null,"Some music you like:"),r.a.createElement("textarea",{maxLength:"300",onChange:h,name:"music_preferences",value:n.music_preferences,className:i.music_preferences?"red":""})),r.a.createElement("div",{className:"errors-small"},i.music_preferences&&r.a.createElement("small",{className:"help is-danger"},i.music_preferences)),r.a.createElement("div",{className:"auth-textarea"},r.a.createElement("label",null,"Some of your favourite books:"),r.a.createElement("textarea",{maxLength:"300",onChange:h,name:"literature_preferences",value:n.literature_preferences,className:i.literature_preferences?"red":""})),r.a.createElement("div",{className:"errors-small"},i.literature_preferences&&r.a.createElement("small",{className:"help is-danger"},i.literature_preferences)),r.a.createElement("div",{className:"auth-textarea"},r.a.createElement("label",null,"Some of your favourite films:"),r.a.createElement("textarea",{maxLength:"300",onChange:h,name:"film_preferences",value:n.film_preferences,className:i.film_preferences?"red":""})),r.a.createElement("div",{className:"errors-small"},i.film_preferences&&r.a.createElement("small",{className:"help is-danger"},i.film_preferences)),r.a.createElement("div",{className:"auth-textarea"},r.a.createElement("label",null,"Some of your favourite TV shows:"),r.a.createElement("textarea",{maxLength:"300",onChange:h,name:"television_preferences",value:n.television_preferences,className:i.television_preferences?"red":""})),r.a.createElement("div",{className:"errors-small"},i.television_preferences&&r.a.createElement("small",{className:"help is-danger"},i.television_preferences)),r.a.createElement("div",null,r.a.createElement("button",null,"Submit"))))):null},T={data:null,error:null,loading:!0};var A=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=r.a.useState(T),n=Object(p.a)(t,2),l=n[0],s=n[1],c=r.a.useCallback(Object(_.a)(N.a.mark((function t(){var n,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(a);case 3:n=t.sent,r=n.data,s({data:r,loading:!1,error:null}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),s({error:!0,loading:!1,data:null});case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),[e,a]);r.a.useEffect((function(){c()}),[c]);var m=function(){s(T),c()};return Object(w.a)(Object(w.a)({},l),{},{refetchData:m})};var U=function(e){var a=Object(n.useState)(e.chat),t=Object(p.a)(a,1)[0];return r.a.createElement("div",{className:"modalcasing"},e.modalStatus?null:r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"messages"},r.a.createElement("div",{className:"message"},t.reply.map((function(e){return r.a.createElement("div",{className:"message-card",key:e.id},r.a.createElement("small",null,e.owner.username),r.a.createElement("p",null,e.reply))}))),r.a.createElement("div",null,r.a.createElement("form",{className:"messages-input"},r.a.createElement("textarea",{name:"reply",rows:"5",value:e.formData.reply,onChange:e.handleMessageChange}),r.a.createElement("div",{className:"errors-small"},e.errors.reply&&r.a.createElement("small",{className:"help is-danger"},e.errors.reply)),r.a.createElement("button",{onClick:e.sendMessage,value:t.id},"Submit"))))))};var R=function(e){var a=r.a.useState(e.match),t=Object(p.a)(a,1)[0],n=A(C),l=n.data,s=n.loading,i=n.error,o=n.refetchData,u=r.a.useState(!0),d=Object(p.a)(u,2),f=d[0],E=d[1],v=r.a.useState({reply:""}),h=Object(p.a)(v,2),g=h[0],b=h[1],k=r.a.useState({}),j=Object(p.a)(k,2),S=j[0],F=j[1];if(!l)return null;var M=function(e){F(""),b(Object(w.a)(Object(w.a)({},g),{},Object(x.a)({},e.target.name,e.target.value)))},D=function(){var e=Object(_.a)(N.a.mark((function e(a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),e.prev=1,""!==g.reply){e.next=6;break}F({reply:"Cannot send empty reply"}),e.next=11;break;case 6:return e.next=8,t=a.target.value,n=g,y.a.post("".concat("/api","/responses/").concat(t,"/"),n,O());case 8:Y("Message sent!"),b({reply:""}),o();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),Y("Message could not be sent");case 16:case"end":return e.stop()}var t,n}),e,null,[[1,13]])})));return function(a){return e.apply(this,arguments)}}(),L=function(){E(!f)};if(i)return r.a.createElement(m.a,{to:"/notfound"});var I=l.inbox.concat(l.outbox);return t?r.a.createElement(r.a.Fragment,null,s?r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"background-home"})):r.a.createElement("div",null,r.a.createElement("div",{className:"fav-user-card"},r.a.createElement(c.b,{to:"profile/".concat(t.liked_user.username)},r.a.createElement("img",{className:"liked-image",src:t.liked_user.profile_image,alt:t.liked_user.username,height:"100",width:"100"})),r.a.createElement(c.b,{to:"profile/".concat(t.liked_user.username)},r.a.createElement("p",null," ",t.liked_user.username)),r.a.createElement("div",{className:"profile-buttons"},r.a.createElement("button",{onClick:L,value:t.liked_user.id},"Message"),r.a.createElement("div",{className:"chats"}),r.a.createElement("button",{value:t.liked_user.id,onClick:e.handleDelete},"Remove"))),r.a.createElement("div",{className:"message-board"},(e&&t?I.filter((function(e){return t.liked_user.id===e.second_user.id||e.owner===t.liked_user.id})):null).map((function(e){return r.a.createElement(U,{key:e.id,modalStatus:f,toggleModal:L,formData:g,handleMessageChange:M,sendMessage:D,chat:e,errors:S})}))))):r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"background-home"},r.a.createElement("h1",null,"You have no matches"),r.a.createElement(c.b,null,"Find Love?")))};var J=function(){var e=A(C),a=e.data,t=e.loading,n=e.error,l=e.refetchData,s=r.a.useState(!0),i=Object(p.a)(s,2),o=i[0],u=i[1],d=Object(m.g)();if(!a)return null;var f=function(){var e=Object(_.a)(N.a.mark((function e(a){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.target.value,e.next=4,D({liked_user:t});case 4:return e.next=6,L({disliked_user:t});case 6:Y("User Removed"),l(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),Y("Could not remove user");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}(),E=function(){var e=Object(_.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("".concat("/api","/auth/myprofile/"),O());case 3:return e.next=5,h();case 5:d.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Y("something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();if(n)return r.a.createElement(m.a,{to:"/notfound"});if(!a)return null;var v=a.users_liked.filter((function(e){return a.liked_by.some((function(a){return e.liked_user.id===a.owner}))}));return function(){var e=Object(_.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{v.forEach((function(e){var t,n=a.outbox.some((function(a){return a.owner===e.owner&&a.second_user.id===e.liked_user.id}));a.inbox.some((function(a){return a.second_user.id===e.owner&&a.owner===e.liked_user.id}))||n||(t={second_user:e.liked_user.id},y.a.post("".concat("/api","/chats/"),t,O()),l())}))}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"background-home"})):r.a.createElement("div",{className:"main-page"},r.a.createElement("h1",null,"My profile"),r.a.createElement("div",{className:"profile-top"},r.a.createElement("img",{className:"user-dashboard",src:a.profile_image,alt:"".concat(a.username),height:"200",width:"200"})),r.a.createElement("div",{className:"buttons"},r.a.createElement(c.b,{to:"/myprofile/edit"},r.a.createElement("button",null,"Edit Profile")),r.a.createElement("button",{onClick:E},"Delete Profile")),r.a.createElement("div",{className:"favourites"},r.a.createElement("h1",null,"Matches"),v.map((function(e){return r.a.createElement(R,{key:e.id,match:e,handleDelete:f,refetchData:l})}))),r.a.createElement("div",{className:"info",onClick:function(){u(!o)}},r.a.createElement("h1",null,"Your info"),r.a.createElement("small",null,"(Click to expand)"),o?null:r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info-section"},r.a.createElement("label",null,"Your Bio:"),r.a.createElement("p",null,a.about_bio)),r.a.createElement("div",{className:"info-section"},r.a.createElement("label",null,"Your Interests:"),r.a.createElement("p",null,a.other_interests)),r.a.createElement("div",{className:"info-section"},r.a.createElement("label",null,"Your Political Views:"),r.a.createElement("p",null,a.political_preferences)),r.a.createElement("div",{className:"info-section"},r.a.createElement("label",null,"Your Favourite Music:"),r.a.createElement("p",null,a.music_preferences)),r.a.createElement("div",{className:"info-section"},r.a.createElement("label",null,"Your Favourite Books:"),r.a.createElement("p",null,a.literature_preferences)),r.a.createElement("div",{className:"info-section"},r.a.createElement("label",null,"Your Favourite Films:"),r.a.createElement("p",null,a.film_preferences)),r.a.createElement("div",{className:"info-section"},r.a.createElement("label",null,"Your Favourite TV"),r.a.createElement("p",null,a.television_preferences))))))},z=t(33);var H=function(e){return r.a.createElement(r.a.Fragment,null,e.noMore?r.a.createElement("div",{className:"main-page"},r.a.createElement("h1",null," No more users ")):r.a.createElement("div",{className:"main-page"},r.a.createElement("div",{className:"info info-two"},r.a.createElement("div",{className:"info-section info-section-two"},r.a.createElement("label",null,"Bio:"),r.a.createElement("p",null,e.user.about_bio)),r.a.createElement("div",{className:"info-section info-section-two"},r.a.createElement("label",null,"Interests:"),r.a.createElement("p",null,e.user.other_interests)),r.a.createElement("div",{className:"info-section info-section-two"},r.a.createElement("label",null,"Political Views:"),r.a.createElement("p",null,e.user.political_preferences)),r.a.createElement("div",{className:"info-section info-section-two"},r.a.createElement("label",null,"Favourite Music:"),r.a.createElement("p",null,e.user.music_preferences)),r.a.createElement("div",{className:"info-section info-section-two"},r.a.createElement("label",null,"Favourite Books:"),r.a.createElement("p",null,e.user.literature_preferences)),r.a.createElement("div",{className:"info-section info-section-two"},r.a.createElement("label",null,"Favourite Films:"),r.a.createElement("p",null,e.user.film_preferences)),r.a.createElement("div",{className:"info-section info-section-two"},r.a.createElement("label",null,"Favourite TV"),r.a.createElement("p",null,e.user.television_preferences)))))};var q=function(){var e=A(S),a=e.data,t=e.loading,n=e.error,l=e.refetchData,s=r.a.useState(!1),c=Object(p.a)(s,2),i=c[0],o=c[1],u=A(C).data,d=r.a.useState(0),f=Object(p.a)(d,2),E=f[0],v=f[1];if(!a||!u)return null;var h=u.users_disliked.map((function(e){return e.disliked_user})).concat(u.users_liked.map((function(e){return e.liked_user.id}))),g=function(e){return e&&u?"B"===u.gender_preference?e:e.filter((function(e){return e.gender===u.gender_preference})):null}(a).filter((function(e){if(e.id!==u.id)return!h.includes(e.id)})),b=function(){var e=Object(_.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D({liked_user:g[E].id});case 3:E<g.length-1?v(E+1):o(!0),l(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Y("Action could not be performed");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(_.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L({disliked_user:g[E].id});case 3:E<g.length-1?v(E+1):o(!0),l(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Y("Action could not be performed");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return n?r.a.createElement(m.a,{to:"/notfound"}):g.length<1?r.a.createElement("div",{className:"main-page"},r.a.createElement("h1",null,"No users available")):r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"background-home"})):r.a.createElement("div",null,r.a.createElement("div",{className:"judgement-button"},r.a.createElement("button",{onClick:x,className:"reject"},"Not my kind of person"),r.a.createElement("button",{onClick:b},"My kind of person!")),r.a.createElement(z.a,{onSwipedRight:b,onSwipedLeft:x,preventDefaultTouchmoveEvent:!0},r.a.createElement(H,{user:g[E],noMore:i}))))};var G=function(){var e=Object(m.i)(),a=A(F,e.username),t=a.data,n=a.loading;return a.error?r.a.createElement(m.a,{to:"/notfound"}):r.a.createElement("div",{className:"main-page"},n?r.a.createElement("h1",null,"loading"):r.a.createElement("div",{className:"main-page"},r.a.createElement("h1",null,t.username),r.a.createElement("div",{className:"profile-top"},r.a.createElement("img",{className:"user-dashboard",src:t.profile_image,alt:"".concat(t.username),height:"200",width:"200"})),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info-section"},r.a.createElement("label",null,"Bio:"),r.a.createElement("p",null,t.about_bio)),r.a.createElement("div",{className:"info-section"},r.a.createElement("label",null,"Interests:"),r.a.createElement("p",null,t.other_interests)),r.a.createElement("div",{className:"info-section"},r.a.createElement("label",null,"Political views:"),r.a.createElement("p",null,t.political_preferences)),r.a.createElement("div",{className:"info-section"},r.a.createElement("label",null,"Favourite music:"),r.a.createElement("p",null,t.music_preferences)),r.a.createElement("div",{className:"info-section"},r.a.createElement("label",null,"Favourite books:"),r.a.createElement("p",null,t.literature_preferences)),r.a.createElement("div",{className:"info-section"},r.a.createElement("label",null,"Favourite films:"),r.a.createElement("p",null,t.film_preferences)),r.a.createElement("div",{className:"info-section"},r.a.createElement("label",null,"Favourite TV:"),r.a.createElement("p",null,t.television_preferences)))))};var K=function(){var e=r.a.useState(null),a=Object(p.a)(e,2),t=a[0],n=a[1],l=Object(m.g)(),s=r.a.useState({}),c=Object(p.a)(s,2),i=c[0],o=c[1],u=r.a.useState(""),d=Object(p.a)(u,2),f=d[0],E=d[1];r.a.useEffect((function(){(function(){var e=Object(_.a)(N.a.mark((function e(){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:a=e.sent,n(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=function(e){o(Object(w.a)(Object(w.a)({},i),{},Object(x.a)({},e.target.name,""))),n(Object(w.a)(Object(w.a)({},t),{},Object(x.a)({},e.target.name,e.target.value)))},h=function(){var e=Object(_.a)(N.a.mark((function e(a){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.preventDefault(),(t=new FormData).append("file",a.target.files[0]),t.append("upload_preset","rbt41gvu"),e.next=7,P(t);case 7:n=e.sent,E(n.data.url),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),o({profile_image:"Unable to upload, please try a different picture."});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}(),g=function(){var e=Object(_.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n=Object(w.a)(Object(w.a)({},t),{},{profile_image:f}),e.next=5,M(n);case 5:l.push("/myprofile"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return t?r.a.createElement("div",{className:"main-page"},r.a.createElement("h1",null,"Edit your profile"),r.a.createElement("div",{className:"auth-box"},r.a.createElement("form",{onSubmit:g,className:"auth-form"},r.a.createElement("div",{className:"auth-input"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",name:"email",value:t.email,onChange:v,className:i.email?"red":""})),r.a.createElement("div",{className:"errors-small"},i.email&&r.a.createElement("small",{className:"help is-danger"},i.email)),r.a.createElement("div",{className:"auth-input"},r.a.createElement("label",null,"First name:"),r.a.createElement("input",{type:"text",name:"first_name",value:t.first_name,onChange:v,className:i.first_name?"red":""})),r.a.createElement("div",{className:"errors-small"},i.first_name&&r.a.createElement("small",{className:"help is-danger"},i.first_name)),r.a.createElement("div",{className:"auth-input"},r.a.createElement("label",null,"Profile Image:"),r.a.createElement("input",{type:"file",name:"profile_image",onChange:h,className:i.profile_image?"red":""})),r.a.createElement("div",{className:"errors-small"},i.profile_image&&r.a.createElement("small",{className:"help is-danger"},i.profile_image)),r.a.createElement("div",{className:"auth-input"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t.username,onChange:v,className:i.username?"red":""})),r.a.createElement("div",{className:"errors-small"},i.username&&r.a.createElement("small",{className:"help is-danger"},i.username)),r.a.createElement("div",{className:"auth-select"},r.a.createElement("label",null,"Your gender:"),r.a.createElement("select",{name:"gender",onChange:v,value:t.gender,className:i.gender?"red":""},r.a.createElement("option",{disabled:!0,value:""}),r.a.createElement("option",{value:"M"},"Male"),r.a.createElement("option",{value:"F"},"Female"))),r.a.createElement("div",{className:"errors-small"},i.gender&&r.a.createElement("small",{className:"help is-danger"},i.gender)),r.a.createElement("div",{className:"auth-select"},r.a.createElement("label",null,"Youre interested in..."),r.a.createElement("select",{name:"gender_preference",onChange:v,className:i.gender_preference?"red":"",value:t.gender_preference},r.a.createElement("option",{disabled:!0,value:""}),r.a.createElement("option",{value:"M"},"Male"),r.a.createElement("option",{value:"F"},"Female"),r.a.createElement("option",{value:"B"},"Both"))),r.a.createElement("div",{className:"errors-small"},i.gender_preference&&r.a.createElement("small",{className:"help is-danger"},i.gender_preference)),r.a.createElement("div",{className:"auth-textarea"},r.a.createElement("label",null,"About you:"),r.a.createElement("textarea",{maxLength:"400",rows:"10",onChange:v,name:"about_bio",value:t.about_bio,className:i.about_bio?"red":""})),r.a.createElement("div",{className:"errors-small"},i.about_bio&&r.a.createElement("small",{className:"help is-danger"},i.about_bio)),r.a.createElement("div",{className:"auth-textarea"},r.a.createElement("label",null,"Interests:"),r.a.createElement("textarea",{maxLength:"300",rows:"10",onChange:v,name:"other_interests",value:t.other_interests,className:i.other_interests?"red":""})),r.a.createElement("div",{className:"errors-small"},i.other_interests&&r.a.createElement("small",{className:"help is-danger"},i.other_interests)),r.a.createElement("div",{className:"auth-textarea"},r.a.createElement("label",null,"Important political issues to you:"),r.a.createElement("textarea",{maxLength:"300",rows:"10",onChange:v,name:"political_preferences",value:t.political_preferences,className:i.political_preferences?"red":""})),r.a.createElement("div",{className:"errors-small"},i.political_preferences&&r.a.createElement("small",{className:"help is-danger"},i.political_preferences)),r.a.createElement("div",{className:"auth-textarea"},r.a.createElement("label",null,"Some music you like:"),r.a.createElement("textarea",{maxLength:"300",rows:"10",onChange:v,name:"music_preferences",value:t.music_preferences,className:i.music_preferences?"red":""})),r.a.createElement("div",{className:"errors-small"},i.music_preferences&&r.a.createElement("small",{className:"help is-danger"},i.music_preferences)),r.a.createElement("div",{className:"auth-textarea"},r.a.createElement("label",null,"Some of your favourite books:"),r.a.createElement("textarea",{maxLength:"300",rows:"10",onChange:v,name:"literature_preferences",value:t.literature_preferences,className:i.literature_preferences?"red":""})),r.a.createElement("div",{className:"errors-small"},i.literature_preferences&&r.a.createElement("small",{className:"help is-danger"},i.literature_preferences)),r.a.createElement("div",{className:"auth-textarea"},r.a.createElement("label",null,"Some of your favourite films:"),r.a.createElement("textarea",{maxLength:"300",rows:"10",onChange:v,name:"film_preferences",value:t.film_preferences,className:i.film_preferences?"red":""})),r.a.createElement("div",{className:"errors-small"},i.film_preferences&&r.a.createElement("small",{className:"help is-danger"},i.film_preferences)),r.a.createElement("div",{className:"auth-textarea"},r.a.createElement("label",null,"Some of your favourite TV shows:"),r.a.createElement("textarea",{maxLength:"300",rows:"10",onChange:v,name:"television_preferences",value:t.television_preferences,className:i.television_preferences?"red":""})),r.a.createElement("div",{className:"errors-small"},i.television_preferences&&r.a.createElement("small",{className:"help is-danger"},i.television_preferences)),r.a.createElement("div",null,r.a.createElement("button",null,"Submit"))))):r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"background-home"}))};var Q=function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"errors-head"},r.a.createElement("h1",null,"Oh no! Something went wrong")),r.a.createElement("div",{className:"background-home"}))};var W=function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("div",null))};var X=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,null),r.a.createElement(g,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:u}),r.a.createElement(m.b,{path:"/login",component:B}),r.a.createElement(m.b,{path:"/register",component:V}),r.a.createElement(m.b,{path:"/myprofile/edit",component:K}),r.a.createElement(m.b,{path:"/myprofile",component:J}),r.a.createElement(m.b,{path:"/findlove",component:q}),r.a.createElement(m.b,{path:"/profile/:username",component:G}),r.a.createElement(m.b,{path:"/*",component:Q})),r.a.createElement(W,{className:"Footer"}))};s.a.render(r.a.createElement(X,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8fa94f6c.chunk.js.map