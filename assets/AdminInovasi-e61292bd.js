import{i as x}from"./index-c11b1bdc.js";import{T as v,S as y}from"./Topbar-a9fd321c.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{r as _,o as c,c as r,a as g,b as e,n as p,t as s,F as u,d as m,i as w}from"./index-eb1aa05f.js";import"./logo-30c9d580.js";console.log(document.cookie);const j={name:"admininovasi",components:{Topbar:v,Sidebar:y},data(){return{baseURL:"http://localhost:3000",tableInovasi:[],warning:!1,background:"",alertmessage:"",datamodal:[]}},methods:{rejectInovasi(n){let i="http://localhost:3000",l="/inovasi/reject_inovasi",o="Bearer "+localStorage.getItem("token");fetch(i+l,{method:"POST",credentials:"include",headers:{Authorization:o,"Bypass-Tunnel-Reminder":"true",Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({id:n})}).then(t=>t.json()).then(t=>{console.log(t),this.warning=!0,this.background="bg-green-600 text-white ",this.alertmessage="Berhasil Reject Pengajuan",setTimeout(()=>{this.warning="false",this.alertmessage="",this.background=""},1500),this.getAll()})},accInovasi(n){let i="http://localhost:3000",l="/inovasi/acc_inovasi",o="Bearer "+localStorage.getItem("token");fetch(i+l,{method:"POST",credentials:"include",headers:{Authorization:o,"Bypass-Tunnel-Reminder":"true",Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({id:n})}).then(t=>t.json()).then(t=>{console.log(t),this.warning=!0,this.background="bg-green-600 text-white ",this.alertmessage="Berhasil Acc Pengajuan",setTimeout(()=>{this.warning="false",this.alertmessage="",this.background=""},1500),this.getAll()})},showDetail(n){this.datamodal=n,my_modal_2.showModal()},getAll(){let n="http://localhost:3000",i="/inovasi/";""+localStorage.getItem("token"),fetch(n+i,{method:"GET",credentials:"include",headers:{"Bypass-Tunnel-Reminder":"true",Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then(l=>l.json()).then(l=>{this.tableInovasi=l})}},mounted:function(){x(),this.getAll()},created:function(){let n="http://localhost:3000",i="/users/isloggedin",l="Bearer "+localStorage.getItem("token");fetch(n+i,{method:"GET",credentials:"include",headers:{Authorization:l,"Bypass-Tunnel-Reminder":"true",Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then(o=>o.json()).then(o=>{(o.status!==200||o.isAdmin==!1)&&this.$router.push({name:"login"}),console.log(o.status)}).catch(o=>{this.$router.push({name:"login"})})}},T={class:"flex bg-white"},A={class:"w-full"},S={class:"w-full px-[5%] py-[5%]"},C=w('<div class="relative overflow-x-auto sm:rounded-lg"><div class="flex items-center justify-between"><div></div><label for="table-search" class="sr-only">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"></div></div></div>',1),B={class:"w-full max-h-96 mt-10 overflow-y-scroll"},I={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},R=e("thead",{class:"text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"},"nama inovasi"),e("th",{scope:"col",class:"px-6 py-3"},"jenis"),e("th",{scope:"col",class:"px-6 py-3"},"inovator"),e("th",{scope:"col",class:"px-6 py-3"},"inisiator"),e("th",{scope:"col",class:"px-6 py-3"},"ACC"),e("th",{scope:"col",class:"px-6 py-3"},"Action")])],-1),L={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},z={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},U={class:"px-6 py-4"},N={class:"px-6 py-4"},P={class:"px-6 py-4"},D={class:"px-6 py-4"},O={class:"px-6 py-4"},E={class:"flex gap-2"},F=["onClick"],M=["onClick"],V=["onClick"],G={id:"my_modal_2",class:"modal"},J={class:"modal-box"},q=e("h3",{class:"font-bold pb-2 text-center"},"Detail Pengajuan",-1),H={class:"font-light text-xs border-b pb-2 text-center"},K={class:"w-full"},Q={class:"flex gap-4 mt-3"},W=e("p",{class:"w-[37%]"},"nama perangkat daerah",-1),X={class:"flex gap-4"},Y=e("p",{class:"w-[37%]"},"tahapan inovasi ",-1),Z={class:"flex gap-4"},$=e("p",{class:"w-[37%]"},"bentuk inovasi ",-1),ee={class:"flex gap-4"},te=e("p",{class:"w-[37%]"},"inovasi thdp covid19 ",-1),se={class:"flex gap-4"},ae=e("p",{class:"w-[37%]"},"jenis urusan invoasi ",-1),oe={class:"flex gap-4"},ne=e("p",{class:"w-[37%]"},"tema ",-1),le={class:"mt-5"},ie=e("p",{class:"w-fit border-b pb-1 pr-3"},"keterangan ",-1),ce={class:"w-full h-fit overflow-y-scroll"},re={class:"w-full flex"},de=["href"],he=e("form",{method:"dialog",class:"modal-backdrop"},[e("button",null,"close")],-1);function pe(n,i,l,o,t,d){const b=_("Sidebar"),f=_("Topbar");return c(),r("div",T,[g(b),e("div",A,[g(f),e("div",S,[C,e("div",{class:p([t.warning?t.background+"block":"hidden","w-full px-5 py-2 text-center"])},s(t.alertmessage),3),e("div",B,[e("table",I,[R,e("tbody",null,[(c(!0),r(u,null,m(t.tableInovasi,a=>(c(),r("tr",L,[e("td",z,s(a.nama_inovasi),1),e("td",U,s(a.jenis),1),e("td",N,s(a.inovator),1),e("td",P,s(a.inisiator),1),e("td",D,s(a.acc),1),e("td",O,[e("div",E,[e("button",{class:"btn",onClick:h=>d.showDetail(a)},"detail",8,F),e("button",{class:p([a.acc==="sudah"?"hidden":"","btn btn-success text-white"]),onClick:h=>d.accInovasi(a.id)},"acc",10,M),e("button",{class:p([a.acc==="sudah"||a.acc==="rejected"?"hidden":"","btn bg-red-700 text-white"]),onClick:h=>d.rejectInovasi(a.id)},"reject",10,V)])])]))),256))])])])]),e("dialog",G,[e("div",J,[q,e("h3",H,s(t.datamodal.tanggal),1),e("div",K,[e("div",Q,[W,e("p",null,": "+s(t.datamodal.nama_perangkat_daerah),1)]),e("div",X,[Y,e("p",null,": "+s(t.datamodal.tahapan),1)]),e("div",Z,[$,e("p",null,": "+s(t.datamodal.bentuk),1)]),e("div",ee,[te,e("p",null,": "+s(t.datamodal.inovasi_thdp_covid),1)]),e("div",se,[ae,e("p",null,": "+s(t.datamodal.jenis_urusan_inovasi),1)]),e("div",oe,[ne,e("p",null,": "+s(t.datamodal.tema),1)]),e("div",le,[ie,e("p",null,s(t.datamodal.keterangan),1)]),e("div",ce,[e("div",re,[(c(!0),r(u,null,m(t.datamodal.docs,(a,h)=>(c(),r("a",{href:t.baseURL+"/"+a.url_dokumen,target:"_blank",class:"btn mt-2 mr-2"},s(a.jenis_docs),9,de))),256))])])])]),he])])])}const fe=k(j,[["render",pe]]);export{fe as default};
