import{o as c,c as u,a as e,w as a,v as d}from"./index-d997a353.js";import{_ as p,a as h}from"./_plugin-vue_export-helper-4121e85f.js";const f={name:"login",components:{},data(){return{email:"",password:""}},methods:{handleLoginClick(){let n={email:this.email,password:this.password};fetch("https://159e-125-161-89-49.ngrok-free.app"+"/users/login",{method:"POST",credentials:"include",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(n)}).then(i=>i.json()).then(i=>{this.$router.push({name:"dashboard"})})}},created:function(){fetch("https://159e-125-161-89-49.ngrok-free.app"+"/users/isloggedin",{method:"GET",credentials:"include",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then(s=>{s.status==200&&this.$router.push({name:"dashboard"})}).catch(s=>{})}},m={class:"w-full h-screen overflow-hidden"},b=e("div",{class:"bg-blue-500 w-full h-1/3"},null,-1),w={class:"w-full h-[100%] absolute top-20 px-32"},x={class:"w-full h-[70%] bg-white rounded-lg flex pr-10 mt-[1%]"},g=e("div",{class:"w-1/2 h-full flex flex-col"},[e("div",{class:"w-fit text-center mt-[0%] self-center text-2xl text-blue-400 font-extrabold"},[e("img",{src:h,class:"w-[100%]"})])],-1),_={class:"w-1/2 h-full mt-5"},v={class:"w-full h-full shadow-2xl rounded-2xl p-10"},y=e("h1",{class:"mb-8 text-blue-500 w-full text-center font-bold text"}," Login Admin ",-1),k=e("div",{class:"text-sm font-bold text-gray-700 tracking-wide"}," Email Address ",-1),L={class:"mt-8"},j=e("div",{class:"flex justify-between items-center"},[e("div",{class:"text-sm font-bold text-gray-700 tracking-wide"}," Password "),e("div")],-1),U={class:"mt-10"},C=e("div",{class:"bg-white w-full h-full flex justify-center"},[e("h1",{class:"text-white self-center mt-[5%]"},"© Muhammad Husen")],-1);function T(n,t,s,i,o,r){return c(),u("div",m,[b,e("div",w,[e("div",x,[g,e("div",_,[e("div",v,[y,e("div",null,[k,a(e("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>o.email=l),class:"text-slate-500 w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500",type:"email",placeholder:"mike@gmail.com"},null,512),[[d,o.email]])]),e("div",L,[j,a(e("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>o.password=l),class:"text-slate-500 w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500",type:"password",placeholder:"Enter your password"},null,512),[[d,o.password]])]),e("div",U,[e("button",{onClick:t[2]||(t[2]=l=>r.handleLoginClick()),class:"bg-blue-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg"}," Log In ")])])])])]),C])}const R=p(f,[["render",T]]);export{R as default};
