(this.webpackJsonpreact_full_test=this.webpackJsonpreact_full_test||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),c=n.n(o),i=(n(59),n(2)),s=n(3),l=n(5),u=n(4),d=(n(60),n(14)),h=n(7),m=n(15),p="http://localhost:9000",f=function(){return"".concat(p,"/student/all")},v=function(){return"".concat(p,"/employees/log-in")},g=function(){return"".concat(p,"/employees/sign-up")},E=function(){return"".concat(p,"/student/create")},b=function(){return"".concat(p,"/interview/all")},w=function(){return"".concat(p,"/interview/create")},C=function(e,t){return"".concat(p,"/interview/select/student?interview_id=").concat(e,"&&student_id=").concat(t)},y=function(e,t,n){return"".concat(p,"/interview/changeResult?interview_id=").concat(e,"&&student_id=").concat(t,"&&status=").concat(n)};function S(e){var t=[];for(var n in e){var a=encodeURIComponent(n),r=encodeURIComponent(e[n]);t.push(a+"="+r)}return t.join("&")}function O(){return localStorage.getItem("token")}function j(e){return function(t){var n=g();fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:S(e)}).then((function(e){return e.json()})).then((function(e){console.log("new employees data",e),t({type:"SIGN_UP_SUCCESS",message:e.message})}))}}var _=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleLogOut=function(){localStorage.removeItem("token"),a.props.dispatch({type:"LOG_OUT"})},a.showform=function(){"none"===a.state.formStyle?a.setState({formStyle:"flex"}):a.setState({formStyle:"none"})},a.handleForm=function(e){var t;e.preventDefault(),a.props.dispatch((t=a.state,function(e){var n=E();fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(O())},body:S(t)}).then((function(e){return e.json()})).then((function(t){console.log("new student data",t),t.success&&e({type:"CREATE_STUDENT",student:t.student})}))}))},a.handleChange=function(e,t){a.setState(Object(d.a)({},e,t))},a.state={formStyle:"none",name:"",batch:"",collageName:"",status:"",dscScore:"",reactScore:"",wev_devScore:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.auth,n=t.isLoggedIn,a=(t.error,t.inProgress,t.user);return r.a.createElement("div",{className:"Navbar"},r.a.createElement("form",{className:"student-form",style:{display:this.state.formStyle}},r.a.createElement("input",{type:"text",name:"name",placeholder:"Student Name",required:!0,onChange:function(t){e.handleChange("name",t.target.value)}}),r.a.createElement("input",{type:"text",name:"batch",placeholder:"Student Batch",required:!0,onChange:function(t){e.handleChange("batch",t.target.value)}}),r.a.createElement("input",{type:"text",name:"collage_name",placeholder:"Collage Name",required:!0,onChange:function(t){e.handleChange("collageName",t.target.value)}}),r.a.createElement("input",{type:"text",name:"status",placeholder:"Placement status",required:!0,onChange:function(t){e.handleChange("status",t.target.value)}}),r.a.createElement("input",{type:"text",name:"dsa_Score",placeholder:"DSA final Score",required:!0,onChange:function(t){e.handleChange("dsaScore",t.target.value)}}),r.a.createElement("input",{type:"text",name:"react_Score",placeholder:"React final Score",required:!0,onChange:function(t){e.handleChange("reactScore",t.target.value)}}),r.a.createElement("input",{type:"text",name:"web_devScore",placeholder:"Web development final score",required:!0,onChange:function(t){e.handleChange("web_devScore",t.target.value)}}),r.a.createElement("input",{className:"submit-btn",type:"submit",value:"create",onClick:this.handleForm})),r.a.createElement("div",{className:"left-nav"},r.a.createElement(m.b,{to:"/",style:{textDecoration:"none",color:"white"}},r.a.createElement("h1",null," Student Database"))),0==n?r.a.createElement("div",{className:"right-nav"},r.a.createElement(m.b,{to:"/"},r.a.createElement("div",null,"Log-in")),r.a.createElement(m.b,{to:"/signup"},r.a.createElement("div",null,"Register"))):r.a.createElement("div",{className:"right-nav"},r.a.createElement("div",{onClick:this.showform},r.a.createElement("button",null,"Create New Student")),r.a.createElement("div",null,r.a.createElement(m.b,{to:"/interviews"},r.a.createElement("button",null,"Interviews"))),r.a.createElement("div",{className:"user-avatar"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/145/145867.svg"}),r.a.createElement("span",null,a.name)),r.a.createElement("div",{onClick:this.handleLogOut},"logout")))}}]),n}(a.Component),N=Object(h.b)((function(e){return{auth:e.auth}}))(_),T=n(51),I=n.n(T),L=n(6);var R=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleSignup=function(e){e.preventDefault(),a.props.dispatch(j(a.state))},a.handleChange=function(e,t){a.setState(Object(d.a)({},e,t))},a.state={email:"",name:"",password:"",confrimPassword:""},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"CLEAR_AUTH"})}},{key:"render",value:function(){var e=this,t=this.props.auth,n=t.isLoggedIn,a=t.error;return n?r.a.createElement(L.a,{to:"/"}):r.a.createElement("form",{className:"form"},r.a.createElement("h2",null,"Register Here"),a&&r.a.createElement("div",{className:"alert error-dailog"},a),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter Your Email",required:!0,onChange:function(t){e.handleChange("email",t.target.value)}}),r.a.createElement("input",{type:"name",name:"text",placeholder:"Name",required:!0,onChange:function(t){e.handleChange("name",t.target.value)}}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",required:!0,onChange:function(t){e.handleChange("password",t.target.value)}}),r.a.createElement("input",{type:"password",name:"confrimPassword",placeholder:"confirm password",required:!0,onChange:function(t){e.handleChange("confirmPassword",t.target.value)}}),r.a.createElement("button",{className:"login-btn",onClick:this.handleSignup},"Create"))}}]),n}(a.Component),k=Object(h.b)((function(e){return{}}))(R),A=n(52),U=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleDownload=function(){a.props.student;var e=a.state.csvData,t=new Blob([e],{type:"text/csv"}),n=window.URL.createObjectURL(t),r=document.createElement("a");r.setAttribute("hidden",""),r.setAttribute("href",n),r.setAttribute("download","download.csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)},a.state={},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){for(var e=this,t=this.props.student,n=[["Student id","student name","student college","student status","DSA Final Score","WebD Final Score","React Final Score","interview date","interview company","interview student result"]],a=0;a<t.interviewInfo.length;a++){var r=[t._id,t.name,t.collageName,t.status,t.dsaScore,t.web_devScore,t.reactScore,t.interviewInfo[a].date,t.interviewInfo[a].company,t.interviewInfo[a].status];n.push(r)}Object(A.writeToString)(n).then((function(t){e.setState({csvData:t})}))}},{key:"render",value:function(){var e=this.props.student;return r.a.createElement("div",{className:"student"},r.a.createElement("div",{className:"student-info"},r.a.createElement("div",null,r.a.createElement("span",null,"Name"),r.a.createElement("span",null,e.name)),r.a.createElement("div",null,r.a.createElement("span",null,"Batch"),r.a.createElement("span",null,e.batch))),r.a.createElement("button",{className:"downloadBtn",onClick:this.handleDownload},"download"))}}]),n}(r.a.Component);var D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e,t){a.setState(Object(d.a)({},e,t))},a.handleSubmitBtn=function(e){var t;e.preventDefault(),a.props.dispatch((t=a.state,function(e){e({type:"USER_LOGIN_START"});var n=v();fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:S(t)}).then((function(e){return e.json()})).then((function(t){console.log("login data",t),t.success?(localStorage.setItem("token",t.token),e({type:"USER_LOGIN_SUCCESS"})):e({type:"USER_LOGIN_FAILED",message:t.message})}))}))},a.state={email:"",password:""},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"CLEAR_AUTH"})}},{key:"render",value:function(){var e=this,t=this.props.auth,n=t.error,a=t.inProgress;return r.a.createElement("form",{className:"form"},r.a.createElement("h2",null,"Log in"),n&&r.a.createElement("div",{className:"alert error-dailog"},n),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter Your Email",required:!0,onChange:function(t){e.handleChange("email",t.target.value)}}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",required:!0,onChange:function(t){e.handleChange("password",t.target.value)}}),r.a.createElement("button",{className:"login-btn",onClick:this.handleSubmitBtn,disabled:a},"Log in"))}}]),n}(a.Component),P=Object(h.b)((function(e){return{auth:e.auth}}))(D);var x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.students;return r.a.createElement("div",{className:"student-list"},e.map((function(e){return r.a.createElement(U,{student:e})})))}}]),n}(a.Component),q=Object(h.b)((function(e){return{students:e.students}}))(x),B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.isLoggedIn;return r.a.createElement("div",{className:"home"},!0===e?r.a.createElement(q,null):r.a.createElement(P,null))}}]),n}(a.Component),F=n(24);function G(e){return function(t){var n=w();fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(O())},body:S(e)}).then((function(e){return e.json()})).then((function(e){console.log("new interview data",e),e.success&&t(function(e){return{type:"CREATE_INTERVIEW",data:e}}(e.interview))}))}}function H(e,t){return function(n){var a=C(e,t);fetch(a,{method:"GET",headers:{"Content-Type":"none",Authorization:"Bearer ".concat(O())}}).then((function(e){return e.json()})).then((function(t){var a,r,o;console.log("selected student data",t),t.success&&n((a=t.student,r=e,o=t.interview.interviewInfo,{type:"SELECT_FOR_INTERVIEW",student:a,id:r,interviewInfo:o}))}))}}function W(e,t,n){return console.log("fetch function"),console.log(e,t),function(a){var r=y(t,e,n);fetch(r,{method:"GET",headers:{"Content-Type":"none",Authorization:"Bearer ".concat(O())}}).then((function(e){return e.json()})).then((function(e){console.log("changed interview result data",e),e.success&&a({type:"FETCH_INTERVIEW_RESULT",result:e.interview})}))}}var V=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSelectStudent=function(){var t=e.props,n=t.interview_id,a=t.student;e.props.dispatch(H(n,a._id))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.student;return r.a.createElement("div",{className:"list",key:e._id},r.a.createElement("span",null,e.name),r.a.createElement("button",{onClick:this.handleSelectStudent},"select"))}}]),n}(a.Component),z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleChangeResult=function(t){var n=e.props,a=n.student,r=n.interview;e.props.dispatch(W(a._id,r._id,t.target.value))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.student,n=e.index,a=e.interview;return r.a.createElement("div",{className:"upper-list",key:t._id},r.a.createElement("span",null,t.name),r.a.createElement("select",{name:"result",defaultValue:a.interviewInfo[n].status,onChange:this.handleChangeResult},r.a.createElement("option",null,"PASS"),r.a.createElement("option",null,"FAIL"),r.a.createElement("option",null,"On-Hold"),r.a.createElement("option",null,"Did Not Attempt")))}}]),n}(a.Component),M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).toggleStudentList=function(){"none"==a.state.toggleList?a.setState({toggleList:"block"}):a.setState({toggleList:"none"})},a.state={toggleList:"none"},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=(t.students,t.interview);return r.a.createElement("div",{className:"interview-list",onClick:this.toggleStudentList},r.a.createElement("div",{className:"interview"},r.a.createElement("h3",null,n.name),r.a.createElement("small",null,n.date)),r.a.createElement("div",{className:"students",style:{display:this.state.toggleList}},n.selected.length>0&&n.selected.map((function(t,a){return r.a.createElement(z,{student:t,dispatch:e.props.dispatch,interview:n,index:a,key:a})})),n.students&&n.students.map((function(t){return r.a.createElement(V,{student:t,interview_id:n._id,dispatch:e.props.dispatch,key:t._id})}))))}}]),n}(a.Component);var J=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleCreateBtn=function(){"none"===a.state.formDispaly&&a.setState({formDispaly:"flex"})},a.handleSubmitBtn=function(e){e.preventDefault(),a.props.dispatch(G({name:a.state.name,date:a.state.date})),a.setState({formDispaly:"none"})},a.handleChange=function(e,t){a.setState(Object(d.a)({},e,t))},a.state={formDispaly:"none",name:"",date:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.auth,n=t.isLoggedIn,a=(t.error,this.props),o=a.interviews,c=a.students;return n?r.a.createElement("div",{className:"interview-list-container"},r.a.createElement("button",{className:"heading",onClick:this.handleCreateBtn},"Create Interview"),r.a.createElement("form",{className:"interview-form",style:{display:this.state.formDispaly}},r.a.createElement("input",{type:"text",name:"name",placeholder:"Subject Name",required:!0,onChange:function(t){e.handleChange("name",t.target.value)}}),r.a.createElement("input",{type:"date",name:"date",placeholder:"Date",required:!0,onChange:function(t){e.handleChange("date",t.target.value)}}),r.a.createElement("button",{onClick:this.handleSubmitBtn},"Create")),o.length>0&&o.map((function(t){return r.a.createElement(M,{interview:t,students:c,key:t._id,dispatch:e.props.dispatch})}))):r.a.createElement(L.a,{to:"/"})}}]),n}(a.Component),Y=Object(h.b)((function(e){return{auth:e.auth,interviews:e.interviews,students:e.students}}))(J),K=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch((function(e){var t=f();fetch(t).then((function(e){return e.json()})).then((function(t){console.log("student data",t),t.success&&e({type:"UPDATE_STUDENT",students:t.students})}))})),this.props.dispatch((function(e){var t=b();fetch(t).then((function(e){return e.json()})).then((function(t){console.log("interviews data",t),t.success&&e(function(e){return{type:"FETCH_INTERVIEW",data:e}}(t.interviews))}))}));this.props.auth;var e=localStorage.getItem("token");if(e){var t=I()(e);console.log("user",t),this.props.dispatch(function(e){return{type:"AUTHENTICATE_USER",user:e}}({email:t.email,_id:t._id,name:t.name}))}}},{key:"render",value:function(){var e=this;console.log("props",this.props);var t=this.props.auth,n=(t.user,t.isLoggedIn);t.inProgress,t.error;return r.a.createElement(m.a,null,r.a.createElement(N,null),r.a.createElement(L.d,null,r.a.createElement(L.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(B,Object.assign({},e,{isLoggedIn:n}))}}),r.a.createElement(L.b,{path:"/signup",render:function(t){return r.a.createElement(k,Object.assign({},t,{auth:e.props.auth}))}}),r.a.createElement(L.b,{path:"/interviews",render:function(e){return r.a.createElement(Y,e)}})))}}]),n}(r.a.Component);var Q=Object(h.b)((function(e){return{students:e.students,auth:e.auth,interviews:e.interviews}}))(K),X=n(17),Z=n(53),$=n(11),ee={user:{},error:null,isLoggedIn:!1,inProgress:!1};var te=Object(X.c)({students:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_STUDENT":return t.students;case"CREATE_STUDENT":return[t.student].concat(Object(F.a)(e));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_AUTH":return Object($.a)(Object($.a)({},e),{},{error:null});case"USER_LOGIN_START":return Object($.a)(Object($.a)({},e),{},{inProgress:!0});case"USER_LOGIN_SUCCESS":return Object($.a)(Object($.a)({},e),{},{isLoggedIn:!0,inProgress:!1});case"USER_LOGIN_FAILED":case"SIGN_UP_SUCCESS":return Object($.a)(Object($.a)({},e),{},{error:t.message});case"AUTHENTICATE_USER":return Object($.a)(Object($.a)({},e),{},{user:t.user,isLoggedIn:!0,inProgress:!1});case"LOG_OUT":return Object($.a)(Object($.a)({},e),{},{user:{},error:null,isLoggedIn:!1,inProgress:!1});default:return e}},interviews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_INTERVIEW":return t.data;case"CREATE_INTERVIEW":return[t.data].concat(Object(F.a)(e));case"SELECT_FOR_INTERVIEW":var n=e.filter((function(e){if(e._id==t.id){var n=e.students.filter((function(e){return e._id!=t.student._id}));return e.selected=[].concat(Object(F.a)(e.selected),[t.student]),e.interviewInfo=t.interviewInfo,e.students=n,e}return e}));return n;case"FETCH_INTERVIEW_RESULT":return t.result;default:return e}}}),ne=Object(X.d)(te,Object(X.a)(Z.a));c.a.render(r.a.createElement(h.a,{store:ne},r.a.createElement(Q,null)),document.getElementById("root"))},54:function(e,t,n){e.exports=n(102)},59:function(e,t,n){},60:function(e,t,n){},73:function(e,t){},75:function(e,t){}},[[54,1,2]]]);
//# sourceMappingURL=main.4c5742ea.chunk.js.map