import{o as n,c as i,a as e,n as a,t as p,w as c,v as u}from"./index-9a6a41d2.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const m={name:"userlogin",data(){return{login:{email:"",password:""},message:"",hidden:!0,success:!1}},methods:{handleLoginUser(){let r="https://loud-baths-peel.loca.lt/",s="/users/login";console.log(s);let d=this.login;fetch(r+s,{method:"POST",credentials:"include",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(d)}).then(o=>o.json()).then(o=>{o.status==="OK"?(this.message="Login Berhasil",this.hidden=!1,this.success=!0,setTimeout(async()=>{this.hidden=!0,this.$router.push({name:"home"})},5e3)):(this.message="Login Gagal",this.hidden=!1,this.success=!1,setTimeout(async()=>{this.hidden=!0},5e3))})}}},f={class:"bg-slate-900 w-full h-screen px-[5%]"},w={class:"w-full h-full flex justify-center items-center"},b={class:"px-[5%] py-[5%] bg-slate-950 rounded-3xl"},x={class:"w-full p-5"},_=e("h1",{class:"text-white text-center font-bold text-2xl border-b border-white mb-5 pb-5"},"Login",-1),v={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},y=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),k=[y],L={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},j=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"},null,-1),B=[j],U={class:"ml-3"},C=e("p",{class:"text-white mb-2 pl-3 font-bold"},"Email",-1),T=e("p",{class:"text-white mb-2 mt-10 pl-3 font-bold"},"Password",-1);function z(r,s,d,o,t,h){return n(),i("div",f,[e("div",w,[e("div",b,[e("div",x,[_,e("div",{class:a([t.hidden?"hidden":"","w-full h-10 text-white rounded-lg mb-5"])},[e("div",{class:a(["w-full h-10 px-2 py-2 flex rounded-lg",t.success?"bg-green-800":"bg-red-800"])},[t.success?(n(),i("svg",v,k)):(n(),i("svg",L,B)),e("h1",U,p(t.message),1)],2)],2),C,c(e("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>t.login.email=l),class:"text-slate-500 w-full rounded-full text-lg py-2 px-5 border-b border-gray-300 focus:outline-none focus:border-blue-500",type:"email",placeholder:"mike@gmail.com"},null,512),[[u,t.login.email]]),T,c(e("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>t.login.password=l),class:"text-slate-500 w-full rounded-full px-5 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500",type:"password",placeholder:"Enter your password"},null,512),[[u,t.login.password]]),e("button",{onClick:s[2]||(s[2]=l=>h.handleLoginUser()),class:"w-full hover:bg-blue-800 hover:text-yellow-400 rounded-full bg-blue-600 px-5 py-3 mt-12 text-white font-bold"},"Login")])])])])}const O=g(m,[["render",z]]);export{O as default};
