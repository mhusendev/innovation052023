import{o as c,c as u,a as e,w as d,v as a}from"./index-4f95bf94.js";import{_ as p}from"./logo-30c9d580.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const h={name:"login",components:{},data(){return{email:"",password:""}},methods:{handleLoginClick(){let i={email:this.email,password:this.password};fetch("https://fda1-125-161-89-49.ngrok-free.app"+"/users/login",{method:"POST",credentials:"include",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(i)}).then(l=>l.json()).then(l=>{l.isAdmin&&this.$router.push({name:"dashboard"})})}},created:function(){fetch("https://fda1-125-161-89-49.ngrok-free.app"+"/users/isloggedin",{method:"GET",credentials:"include",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then(s=>s.json()).then(s=>{(s.status!==200||s.isAdmin==!1)&&this.$router.push({name:"login"}),console.log(s.status)}).catch(s=>{})}},m={class:"w-full h-screen overflow-hidden"},g=e("div",{class:"bg-blue-500 w-full h-1/3"},null,-1),b={class:"w-full h-[100%] absolute top-20 md:px-32 lg:px-32 px-10"},w={class:"w-full h-[70%] bg-white rounded-lg flex md:pr-10 lg:pr-10 mt-[1%]"},x=e("div",{class:"md:block lg:block hidden w-1/2 h-full flex flex-col"},[e("div",{class:"w-fit text-center mt-[0%] self-center text-2xl text-blue-400 font-extrabold"},[e("img",{src:p,class:"w-[100%]"})])],-1),_={class:"md:w-1/2 lg:w-1/2 w-full h-full mt-5"},v={class:"w-full h-full shadow-2xl rounded-2xl md:p-10 lg:p-10 p-5"},y=e("h1",{class:"mb-8 text-blue-500 w-full text-center font-bold text"}," Login Admin ",-1),k=e("div",{class:"text-sm font-bold text-gray-700 tracking-wide"}," Email Address ",-1),L={class:"mt-8"},j=e("div",{class:"flex justify-between items-center"},[e("div",{class:"text-sm font-bold text-gray-700 tracking-wide"}," Password "),e("div")],-1),A={class:"mt-10"},U=e("div",{class:"bg-white w-full h-full flex justify-center"},[e("h1",{class:"text-white self-center mt-[5%]"},"© Muhammad Husen")],-1);function C(i,t,s,l,o,r){return c(),u("div",m,[g,e("div",b,[e("div",w,[x,e("div",_,[e("div",v,[y,e("div",null,[k,d(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>o.email=n),class:"text-slate-500 w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500",type:"email",placeholder:"mike@gmail.com"},null,512),[[a,o.email]])]),e("div",L,[j,d(e("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>o.password=n),class:"text-slate-500 w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500",type:"password",placeholder:"Enter your password"},null,512),[[a,o.password]])]),e("div",A,[e("button",{onClick:t[2]||(t[2]=n=>r.handleLoginClick()),class:"bg-blue-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg"}," Log In ")])])])])]),U])}const B=f(h,[["render",C]]);export{B as default};
