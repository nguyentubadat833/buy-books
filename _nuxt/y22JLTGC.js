import{_ as o}from"./DF4v3hgk.js";import{d as h,p as i,L as m,a1 as u,H as l,a2 as d,c as f,Z as g,C as r,a3 as p}from"./D3bPmrbb.js";const b=h({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const n=i().public.mdc.useNuxtImage?o:"img",t=e,c=m(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const a=u(l(i().app.baseURL));if(a!=="/"&&!t.src.startsWith(a))return d(a,t.src)}return t.src});return(s,a)=>(f(),g(p(r(n)),{src:r(c),alt:e.alt,width:e.width,height:e.height},null,8,["src","alt","width","height"]))}});export{b as default};