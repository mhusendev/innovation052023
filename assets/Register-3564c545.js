import{o as d,c as u,a as e,n as c,t as h,w as o,v as r}from"./index-4cff85fb.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const m={name:"register",data(){return{register:{fullname:"",email:"",password:"",phone:"",instansi:""},message:"",success:!1,hidden:!0}},methods:{handleRegisterclick(){let a="https://vercel-api-innovations.vercel.app",s="/users/register";console.log(s);let i=this.register;console.log(i),fetch(a+s,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(i)}).then(n=>n.json()).then(n=>{n.status==="OK"?(this.message="Registrasi Berhasil Silahkan Login",this.hidden=!1,this.success=!0,setTimeout(()=>{this.hidden=!0},5e3)):(this.message="Registrasi Gagal",this.hidden=!1,this.success=!1,setTimeout(()=>{this.hidden=!0},5e3))})}}},g={class:"bg-slate-900 w-full h-screen overflow-auto px-[5%]"},b={class:"w-full h-full flex justify-center items-center"},x={class:"px-[5%] py-[5%] bg-slate-950 rounded-3xl"},w={class:"w-full"},_=e("h1",{class:"text-white text-center font-bold text-2xl border-b border-white mb-5 pb-5"},"Register",-1),v={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},y=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),k=[y],R={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},j=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"},null,-1),B=[j],U={class:"ml-3"},V={class:"w-full flex"},C={class:"w-full mr-2"},M=e("p",{class:"text-white mb-2 pl-3 font-bold"},"Fullname",-1),T={class:"w-full ml-2"},z=e("p",{class:"text-white mb-2 pl-3 font-bold"},"Email",-1),L={class:"w-full flex mt-10"},P={class:"w-full mr-2"},S=e("p",{class:"text-white mb-2 pl-3 font-bold"},"Phone",-1),N={class:"w-full ml-2"},O=e("p",{class:"text-white mb-2 pl-3 font-bold"},"Instansi",-1),A=e("p",{class:"text-white mb-2 pl-3 font-bold mt-5"},"Password",-1);function D(a,s,i,n,t,p){return d(),u("div",g,[e("div",b,[e("div",x,[e("div",w,[_,e("div",{class:c([t.hidden?"hidden":"","w-full h-10 text-white rounded-lg mb-5"])},[e("div",{class:c(["w-full h-10 px-2 py-2 flex rounded-lg",t.success?"bg-green-800":"bg-red-800"])},[t.success?(d(),u("svg",v,k)):(d(),u("svg",R,B)),e("h1",U,h(t.message),1)],2)],2),e("div",V,[e("div",C,[M,o(e("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>t.register.fullname=l),class:"text-slate-500 placeholder:text-sm w-full rounded-full text-lg py-2 px-5 border-b border-gray-300 focus:outline-none focus:border-blue-500",type:"text",placeholder:"Full Name"},null,512),[[r,t.register.fullname]])]),e("div",T,[z,o(e("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>t.register.email=l),class:"text-slate-500 placeholder:text-sm w-full rounded-full px-5 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500",type:"email",placeholder:"Mike@gmail.com"},null,512),[[r,t.register.email]])])]),e("div",L,[e("div",P,[S,o(e("input",{"onUpdate:modelValue":s[2]||(s[2]=l=>t.register.phone=l),class:"text-slate-500 placeholder:text-sm w-full rounded-full text-lg py-2 px-5 border-b border-gray-300 focus:outline-none focus:border-blue-500",type:"text",placeholder:"08123456789"},null,512),[[r,t.register.phone]])]),e("div",N,[O,o(e("input",{"onUpdate:modelValue":s[3]||(s[3]=l=>t.register.instansi=l),class:"text-slate-500 w-full rounded-full px-5 text-lg py-2 placeholder:text-sm border-b border-gray-300 focus:outline-none focus:border-blue-500",type:"text",placeholder:"huruf kecil"},null,512),[[r,t.register.instansi]])])]),A,o(e("input",{"onUpdate:modelValue":s[4]||(s[4]=l=>t.register.password=l),class:"text-slate-500 w-full rounded-full px-5 text-lg py-2 placeholder:text-sm border-b border-gray-300 focus:outline-none focus:border-blue-500",type:"password",placeholder:"Password"},null,512),[[r,t.register.password]]),e("button",{onClick:s[5]||(s[5]=l=>p.handleRegisterclick()),class:"w-full hover:bg-blue-800 hover:text-yellow-400 rounded-full bg-blue-600 px-5 py-3 mt-12 text-white font-bold"},"Login")])])])])}const G=f(m,[["render",D]]);export{G as default};
