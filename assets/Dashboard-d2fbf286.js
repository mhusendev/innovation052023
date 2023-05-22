import{_ as a,a as f}from"./_plugin-vue_export-helper-4121e85f.js";import{b as i,o as l,c,r,d as o,a as n}from"./index-d997a353.js";const m={},h=i('<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"><div class="min-h-screen flex flex-row bg-gray-100"><div class="flex flex-col w-56 bg-white overflow-hidden"><div class="flex items-center justify-center h-20"><img src="'+f+'" class="pt-12" alt=""></div><ul class="flex flex-col py-4 mt-5"><li><a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"><span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span><span class="text-sm font-medium">Dashboard</span></a></li><li><a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"><span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-box"></i></span><span class="text-sm font-medium">Post Event</span></a></li><li><a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"><span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-drink"></i></span><span class="text-sm font-medium">Innovation Users</span></a></li><li><a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"><span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-calendar"></i></span><span class="text-sm font-medium">Post competition winner</span></a></li><li><a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"><span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span><span class="text-sm font-medium">Logout</span></a></li></ul></div></div>',2);function p(t,s){return h}const u=a(m,[["render",p]]),g={},_={class:"flex justify-between px-10 py-5 rounded-full shadow-lg items-center bg-white"},b=i('<h1 class="text-base text-slate-600 font-medium border-b-2 border-slate-600 pb-2">Dashboard</h1><div class="flex items-center"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg><input class="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..."></div></div>',2),v=[b];function y(t,s){return l(),c("nav",_,v)}const w=a(g,[["render",y]]);console.log(document.cookie);const $={name:"dashboard",components:{Topbar:w,Sidebar:u},data(){return{}},methods:{},mounted:function(){},created:function(){fetch("https://159e-125-161-89-49.ngrok-free.app"+"/users/isloggedin",{method:"GET",credentials:"include",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then(e=>{e.status!==200&&this.$router.push({name:"login"}),console.log(e.status)}).catch(e=>{this.$router.push({name:"login"})})}},k={class:"flex"},j={class:"w-full"},S=n("div",{class:"w-full px-[15%] py-[5%]"},[n("h1",{class:"w-full p-10 text-center mt-[10%] font-bold text-2xl shadow-xl rounded-2xl text-gray-500"},"Selamat datang di System Ruang Publik Inovasi Daerah")],-1);function T(t,s,e,B,D,C){const x=r("Sidebar"),d=r("Topbar");return l(),c("div",k,[o(x),n("div",j,[o(d),S])])}const N=a($,[["render",T]]);export{N as default};
