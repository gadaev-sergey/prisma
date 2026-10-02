const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./style-DmxYHdFd.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Uu="modulepreload",Fu=function(r,e){return new URL(r,e).href},ec={},Ou=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");i=l(t.map(u=>{if(u=Fu(u,n),u in ec)return;ec[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(n)for(let g=a.length-1;g>=0;g--){const v=a[g];if(v.href===u&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Uu,d||(f.as="script"),f.crossOrigin="",f.href=u,c&&f.setAttribute("nonce",c),document.head.appendChild(f),d)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},lo={projection:"orthographic",fov:35,height:11.6,distance:18,centerX:.15,centerY:2.05,follow:"adaptive",offsetX:0,offsetY:1.3,smoothing:3,near:.1,far:100},ku={height:[2,80],distance:[3,100],centerX:[-1e3,1e3],centerY:[-1e3,1e3],offsetX:[-100,100],offsetY:[-100,100],smoothing:[0,20],near:[.01,2],far:[20,2e3]},ls=r=>({...lo,...r}),Bu=["original","none","tile-0","tile-1","tile-2","tile-3","tile-4","tile-5"],ut=r=>{throw new Error(r)},Gt=(r,e,t)=>typeof r=="number"&&Number.isFinite(r)&&r>=e&&r<=t,Kt=(r,e=100)=>typeof r=="string"&&r.length>0&&r.length<=e,tc=r=>typeof r=="string"&&/^#[0-9a-f]{6}$/i.test(r);function zu(r){if(!r||typeof r!="object")return ut("Файл не содержит сцену.");const e=r;if(e.format!=="shelter-scene"||![1,2].includes(e.version)||!Kt(e.template)||e.units!=="m")return ut("Неподдерживаемый формат или версия сцены.");if(!Kt(e.name)||!Array.isArray(e.nodes)||e.nodes.length>2e3||!Array.isArray(e.textures)||e.textures.length>24)return ut("Некорректное имя или слишком большая сцена.");const t=e.environment;if(!t||!Gt(t.time,0,1439)||!Gt(t.haze,0,.2)||!Gt(t.exposure,.2,3)||typeof t.flashlight!="boolean")return ut("Некорректные настройки окружения.");if(e.camera!==void 0&&(!e.camera||!["orthographic","perspective"].includes(e.camera.projection)||!Gt(e.camera.fov,15,100)))return ut("Некорректная камера. FOV должен быть от 15° до 100°.");if(e.camera){const o=ls(e.camera);if(!["adaptive","fixed","horizontal","player"].includes(o.follow)||Object.entries(ku).some(([c,[l,u]])=>!Gt(o[c],l,u))||o.near>=o.far||o.distance>=o.far)return ut("Некорректные параметры камеры: проверьте размеры, слежение и дальность видимости.")}const n=new Set;let i=0;for(const o of e.textures){if(!o||!Kt(o.id)||!Kt(o.name)||n.has(o.id)||!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(o.data)||o.data.length>4e6)return ut("Некорректная текстура. Поддерживаются PNG, JPEG и WebP до 3 МБ.");n.add(o.id),i+=o.data.length}if(i>16e6)return ut("Общий размер текстур превышает 12 МБ.");if(e.nodes.filter(o=>o?.light&&o.visible&&o.light.intensity>0&&o.light.shadows).length>6)return ut("Одновременно поддерживается до 6 источников с тенями. Отключите тени у остальных.");const s=new Set,a=new Set;if(e.groups!==void 0){if(!Array.isArray(e.groups)||e.groups.length>500)return ut("Некорректный список групп.");for(const o of e.groups){if(!o||!Kt(o.id)||!Kt(o.name)||a.has(o.id))return ut("Некорректная или повторяющаяся группа.");a.add(o.id)}}for(const o of e.nodes){if(!o||!Kt(o.id)||s.has(o.id)||!Kt(o.name)||!["source","prefab","box","sphere","plane","point-light","spot-light","model","camera"].includes(o.kind)||!["architecture","props","lights","details"].includes(o.layer))return ut("Некорректный или повторяющийся объект сцены.");if(s.add(o.id),a.has(o.id)||o.groupId!==void 0&&!a.has(o.groupId))return ut("Объект ссылается на неизвестную группу или имеет конфликтующий ID.");if(typeof o.visible!="boolean"||typeof o.locked!="boolean")return ut("Некорректное состояние объекта.");if(o.gameId!==void 0&&!Kt(o.gameId))return ut("Некорректная игровая привязка.");for(const c of["position","rotation","scale"]){const l=o.transform?.[c];if(!Array.isArray(l)||l.length!==3||!l.every(u=>Gt(u,c==="scale"?.01:-1e3,c==="scale"?100:1e3)))return ut("Координаты должны быть конечными числами; масштаб — от 0,01 до 100.")}if(["source","model","prefab"].includes(o.kind)&&!Kt(o.asset,200))return ut("Не указан ресурс объекта.");if(o.folder!==void 0&&!Kt(o.folder))return ut("Некорректная папка.");if(o.components!==void 0&&(!Array.isArray(o.components)||o.components.length>32||o.components.some(c=>!c||!Kt(c.type)||!c.values||typeof c.values!="object"||Object.values(c.values).some(l=>!["string","boolean","number"].includes(typeof l)||typeof l=="number"&&!Number.isFinite(l)))))return ut("Некорректные компоненты.");if(o.surface){const c=o.surface;if(!c||!tc(c.color)||!Gt(c.roughness,0,1)||!Gt(c.metalness,0,1)||!Gt(c.repeat,.1,20)||!(Bu.includes(c.texture)||n.has(c.texture)||/^asset:[a-zA-Z0-9_-]+$/.test(c.texture)))return ut("Некорректный материал объекта.")}if(o.kind.endsWith("-light")){const c=o.light;if(!c||!tc(c.color)||!Gt(c.intensity,0,150)||!Gt(c.range,.1,30)||!Gt(c.angle,5,85)||!Gt(c.penumbra,0,1)||typeof c.shadows!="boolean")return ut("Некорректный источник света.")}}if(e.activeCamera&&!e.nodes.some(o=>o.id===e.activeCamera&&o.kind==="camera"))return ut("Активная камера отсутствует в сцене.");if(e.moduleData&&JSON.stringify(e.moduleData).length>1e6)return ut("Данные модулей превышают 1 МБ.");for(const o of a)if(!e.nodes.some(c=>c.groupId===o))return ut("Группа не содержит объектов.");return structuredClone(e)}function nc(r="Новая сцена",e="empty-3d"){return{format:"shelter-scene",version:2,id:crypto.randomUUID(),template:e,name:r,units:"m",nodes:[],textures:[],camera:{...lo,follow:"fixed"},environment:{time:720,haze:0,exposure:1.3,flashlight:!1}}}function _a(r,e,t=""){return`shelter:${r}:${e}:${t}`}const Hu=[[1,0],[0,1],[-1,0],[0,-1]],xa={amber:"#ffca83",cyan:"#79e5de"},cn=r=>r.kind==="mirror"||r.kind==="splitter",Vu=(r,e)=>e===0?[3,2,1,0][r]:[1,0,3,2][r];function Il(r){const e=r.moduleData?.prisma;if(!e||!Number.isInteger(e.size)||e.size<5||e.size>9||!Number.isInteger(e.chapter)||e.chapter<0||e.chapter>2||typeof e.caption!="string"||typeof e.lesson!="string")throw new Error("Некорректная оптическая сцена: "+r.name);const t=r.nodes.map(i=>{const s=i.components?.find(a=>a.type==="prisma.optic")?.values;if(!s)throw new Error("Отсутствует оптический компонент");return{id:i.id,x:i.transform.position[0],y:i.transform.position[2],kind:s.kind,color:s.color,direction:Number(s.direction),angle:Number(s.angle)}}),n=new Set;for(const i of t){const s=`${i.x},${i.y}`;if(!Number.isInteger(i.x)||!Number.isInteger(i.y)||i.x<0||i.y<0||i.x>=e.size||i.y>=e.size||n.has(s)||!["source","target","mirror","splitter","wall"].includes(i.kind)||!["amber","cyan"].includes(i.color)||!Number.isInteger(i.direction)||i.direction<0||i.direction>3||![0,1].includes(i.angle))throw new Error("Некорректный оптический элемент "+i.id);n.add(s)}if(!t.some(i=>i.kind==="source")||!t.some(i=>i.kind==="target")||t.filter(cn).length>16)throw new Error("Проверьте источники, приёмники и зеркала.");return{id:r.id,name:r.name,...e,pieces:t}}function uo(r,e){const t=new Map(r.pieces.map(d=>[`${d.x},${d.y}`,d])),n=r.pieces.filter(cn),i=new Map(n.map((d,h)=>[d.id,e[h]])),s=r.pieces.filter(d=>d.kind==="source").map(d=>({x:d.x,y:d.y,d:d.direction,color:d.color})),a=[],o=new Set,c=new Set,l=new Set,u=new Set;for(let d=0;d<s.length;d++){let{x:h,y:f,d:g,color:v}=s[d];for(;;){const m=`${h},${f},${g},${v}`;if(u.has(m))break;u.add(m);const[p,b]=Hu[g],w=h+p,y=f+b;if(w<0||y<0||w>=r.size||y>=r.size){a.push({x1:h,y1:f,x2:h+p*.48,y2:f+b*.48,color:v});break}const S=t.get(`${w},${y}`);if(a.push({x1:h,y1:f,x2:w,y2:y,color:v}),h=w,f=y,!S)continue;if(c.add(S.id),S.kind==="target"){S.color===v?o.add(S.id):l.add(S.id);break}if(S.kind==="wall"||S.kind==="source")break;const E=Vu(g,i.get(S.id)??S.angle);S.kind==="splitter"?s.push({x:h,y:f,d:E,color:v}):g=E}}return{segments:a,lit:o,touched:c,wrong:l,won:r.pieces.filter(d=>d.kind==="target").every(d=>o.has(d.id))}}function Gu(r){const e=r.pieces.filter(cn).length,t=[];for(let n=0;n<2**e;n++){const i=Array.from({length:e},(s,a)=>n>>a&1);uo(r,i).won&&t.push(i)}return t}const Ls=(r,e)=>r.reduce((t,n,i)=>t+ +(n!==e[i]),0);class Is{level;angles;history=[];moves=0;hints=0;answers;par;constructor(e){if(this.level=e,this.angles=e.pieces.filter(cn).map(t=>t.angle),this.answers=Gu(e),!this.answers.length)throw new Error("Уровень не имеет решения: "+e.name);this.par=Math.min(...this.answers.map(t=>Ls(t,this.angles)))}get result(){return uo(this.level,this.angles)}rotate(e){const t=this.level.pieces.filter(cn).findIndex(n=>n.id===e);return t<0||this.result.won?!1:(this.history.push([...this.angles]),this.angles[t]=1-this.angles[t],this.moves++,!0)}undo(){const e=this.history.pop();return e?(this.angles=e,this.moves=Math.max(0,this.moves-1),!0):!1}reset(){this.angles=this.level.pieces.filter(cn).map(e=>e.angle),this.history=[],this.moves=0,this.hints=0}hint(){if(this.result.won)return null;const t=this.answers.reduce((n,i)=>Ls(n,this.angles)<=Ls(i,this.angles)?n:i).findIndex((n,i)=>n!==this.angles[i]);return t<0?null:(this.hints++,this.level.pieces.filter(cn)[t].id)}get stars(){return this.result.won?this.hints?1:this.moves<=this.par?3:2:0}save(){return{angles:[...this.angles],moves:this.moves,hints:this.hints}}restore(e){const t=e;return!t||!Array.isArray(t.angles)||t.angles.length!==this.angles.length||t.angles.some(n=>n!==0&&n!==1)||!Number.isInteger(t.moves)||t.moves<0||t.moves>1e6||!Number.isInteger(t.hints)||t.hints<0||t.hints>1e6?!1:(this.angles=[...t.angles],this.moves=t.moves,this.hints=t.hints,this.history=[],!0)}}const zt=r=>70+r*70;function ic(r,e,t,n="prisma"){const i=(r.size+1)*70,s=r.pieces.filter(cn),a=Array.from({length:r.size},(u,d)=>`<text x="${zt(d)}" y="26" text-anchor="middle">${String.fromCharCode(65+d)}</text><text x="24" y="${zt(d)+3}" text-anchor="middle">${d+1}</text>`).join(""),o=Array.from({length:r.size**2},(u,d)=>{const h=d%r.size,f=Math.floor(d/r.size);return`<rect x="${zt(h)-32}" y="${zt(f)-32}" width="64" height="64" rx="9" fill="${(h+f)%2?"#152c30":"#14282d"}" fill-opacity=".62"/><path d="M${zt(h)-2} ${zt(f)}h4m-2-2v4" stroke="#517275" stroke-opacity=".25"/>`}).join(""),c=t.segments.map(u=>`<path d="M${zt(u.x1)} ${zt(u.y1)}L${zt(u.x2)} ${zt(u.y2)}" stroke="${xa[u.color]}"/>`).join(""),l=r.pieces.map(u=>{const d=xa[u.color],h=t.lit.has(u.id),f=t.touched.has(u.id),g=e[s.findIndex(m=>m.id===u.id)]??u.angle;let v="";return u.kind==="wall"&&(v='<rect x="-25" y="-23" width="50" height="49" rx="9" fill="#0b171c" stroke="#294147"/><path d="M-22-15l7-7h30l7 7v28l-9 9h-28l-7-7Z" fill="#22373c" stroke="#3b5357"/><path d="M-11-10 11 12M-12 2l11 10M0-12l13 12" stroke="#486063" opacity=".45"/>'),u.kind==="source"&&(v=`<circle r="28" fill="${d}" opacity=".05"/><circle r="22" fill="#102125" stroke="${d}" stroke-width="1.3"/><circle r="16" stroke="${d}" stroke-dasharray="2 6" fill="none" opacity=".5"/><g transform="rotate(${u.direction*90})"><path d="M-7-8 9 0-7 8Z" fill="${d}"/><path d="M25-7v14" stroke="${d}" stroke-width="3"/></g><circle r="29" class="source-halo" stroke="${d}" fill="none" opacity=".15"/>`),u.kind==="target"&&(v=`${h?`<circle r="32" fill="${d}" opacity=".13"/><circle r="25" fill="none" stroke="${d}" opacity=".3"/>`:""}<circle r="21" fill="${h?"#25433e":"#0e2025"}" stroke="${d}" stroke-opacity="${h?1:.5}" stroke-width="1.5"/><circle r="15" fill="none" stroke="${d}" opacity="${h?.65:.15}"/>${u.color==="cyan"?`<path d="M0-9 9 0 0 9-9 0Z" fill="${h?d:"none"}" stroke="${d}"/>`:`<circle r="7" fill="${h?d:"none"}" stroke="${d}"/>`}${h?'<circle r="4" fill="#fffbed"/>':""}`),cn(u)&&(v=`<circle r="25" fill="#0b1d22" stroke="${f?"#688f91":"#3e585e"}"/><path d="M-21-15a26 26 0 0 1 38-3m-5-1 5 1-1-5M21 15a26 26 0 0 1-38 3m5 1-5-1 1 5" stroke="#5e8084" fill="none" opacity=".6"/>`,u.kind==="splitter"&&(v+='<path d="M0-23 23 0 0 23-23 0Z" fill="#689c9e" fill-opacity=".25" stroke="#b4d9d6" stroke-width="1.2"/><path d="M0-23v46M-23 0h46" stroke="#add4d1" opacity=".25"/>'),v+=`<g transform="rotate(${g===0?-45:45})"><rect x="-21" y="-5" width="42" height="10" rx="3" fill="#63898b"/><rect x="-21" y="-5" width="42" height="4" rx="2" fill="#deeeeb"/><path d="M-18 5h36" stroke="#a2c7c5" opacity=".7"/><circle cx="-17" cy="0" r="1" fill="#f5f7eb"/><circle cx="17" cy="0" r="1" fill="#f5f7eb"/></g>`),`<g transform="translate(${zt(u.x)} ${zt(u.y)})" class="optic optic-${u.kind}${h?" is-lit":""}">${v}</g>`}).join("");return`<svg class="optical-svg" viewBox="0 0 ${i} ${i}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><radialGradient id="${n}-plate"><stop stop-color="#213d3e"/><stop offset="1" stop-color="#0f2228"/></radialGradient><filter id="${n}-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="5"/></filter></defs><rect x="3" y="3" width="${i-6}" height="${i-6}" rx="22" fill="url(#${n}-plate)" stroke="#46666a" stroke-opacity=".45"/><rect x="34" y="34" width="${i-68}" height="${i-68}" rx="14" fill="#0c1e24" stroke="#38565c" stroke-opacity=".7"/>${o}<g fill="#6c9295" font-size="9" font-family="monospace">${a}</g><g fill="#466165">${[[15,15],[i-15,15],[15,i-15],[i-15,i-15]].map(([u,d])=>`<circle cx="${u}" cy="${d}" r="2.5"/><path d="M${u-1.5} ${d+1.5}l3-3" stroke="#0d2025"/>`).join("")}</g><g fill="none" stroke-linecap="round" stroke-width="9" opacity=".6" filter="url(#${n}-glow)">${c}</g><g fill="none" stroke-linecap="round" stroke-width="2.4" opacity=".94">${c}</g><g class="beam-particles" fill="none" stroke-width="2" stroke-dasharray="2 24" opacity=".45">${c}</g>${l}</svg>`}function Wu(r){const e=(r.size+1)*70;return r.pieces.filter(cn).map(t=>`<button class="optic-hit" data-optic="${t.id}" style="left:${(zt(t.x)-31)/e*100}%;top:${(zt(t.y)-31)/e*100}%;width:${62/e*100}%;height:${62/e*100}%" aria-label="${t.kind==="splitter"?"Разделитель":"Зеркало"} ${String.fromCharCode(65+t.x)}${t.y+1}: повернуть" title="${t.kind==="splitter"?"Разделитель":"Зеркало"} ${String.fromCharCode(65+t.x)}${t.y+1} · повернуть"></button>`).join("")}class Xu{muted=!1;context=null;unlock(){if(!this.muted)try{this.context??=new AudioContext,this.context.state==="suspended"&&this.context.resume().catch(()=>{})}catch{}}tone(e,t=0,n=.22){if(this.muted||!this.context||this.context.state!=="running")return;const i=this.context,s=i.createOscillator(),a=i.createGain(),o=i.currentTime+t;s.type="sine",s.frequency.setValueAtTime(e,o),a.gain.setValueAtTime(0,o),a.gain.linearRampToValueAtTime(.085,o+.015),a.gain.exponentialRampToValueAtTime(.001,o+n),s.connect(a),a.connect(i.destination),s.start(o),s.stop(o+n+.02),s.onended=()=>{s.disconnect(),a.disconnect()}}turn(){this.unlock(),this.tone(520,0,.12),this.tone(1040,.015,.07)}light(){this.tone(659,0,.35),this.tone(988,.06,.45)}win(){[523,659,784,1046].forEach((e,t)=>this.tone(e,t*.12,.6))}suspend(){this.context?.state==="running"&&this.context.suspend().catch(()=>{})}dispose(){this.context&&this.context.close().catch(()=>{}),this.context=null}}const qn=r=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${r}</svg>`,Ft={logo:qn('<path d="m12 3 10 18H2Z"/><path d="m12 3 3 18M2 21l13-8 7 8"/>'),arrow:qn('<path d="M4 12h16m-6-6 6 6-6 6"/>'),undo:qn('<path d="M8 4 3 9l5 5M3 9h10a7 7 0 0 1 0 14"/>'),reset:qn('<path d="M20 7v5h-5M4 17v-5h5M5 7a8 8 0 0 1 14 0m0 10a8 8 0 0 1-14 0"/>'),hint:qn('<path d="M9 18v-3a6 6 0 1 1 6 0v3ZM9 21h6M10 18h4"/>'),levels:qn('<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/>'),sound:qn('<path d="M4 9h4l5-5v16l-5-5H4ZM17 8c3 2 3 6 0 8m3-11c5 4 5 10 0 14"/>'),mute:qn('<path d="M4 9h4l5-5v16l-5-5H4ZM17 9l5 6m0-6-5 6"/>')},rc=["Искусство отражения","Свет делится","Два цвета тишины"],vi=r=>String(r).padStart(2,"0"),sc=r=>r.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);async function qu(r){await Ou(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url);const e=r.container,t=document.title;document.title="Призма · Сад света",e.classList.add("prisma-root");const n=r.snapshot.manifest.scenes.map(P=>Il(r.snapshot.scenes[P.id])),i=_a(r.snapshot.manifest.projectId,"progress",r.snapshot.manifest.build.appId),s=_a(r.snapshot.manifest.projectId,"sound"),a=n.map(()=>0),o=n.map(()=>null);let c=Math.max(0,n.findIndex(P=>P.id===r.sceneId)),l=!1,u=!1,d=!1,h=!1,f=!1,g=null;const v=()=>{const P=a.findIndex(B=>B===0);return P<0?n.length-1:P};if(r.savePolicy==="persistent")try{const P=JSON.parse(localStorage.getItem(i)||"null");P?.version===1&&Array.isArray(P.stars)&&P.stars.length===n.length&&P.stars.every(B=>Number.isInteger(B)&&Number(B)>=0&&Number(B)<=3)&&Number.isInteger(P.current)&&P.current>=0&&P.current<n.length&&Array.isArray(P.states)&&P.states.length===n.length&&(a.splice(0,a.length,...P.stars),c=Math.min(P.current,v()),o.splice(0,o.length,...P.states),l=!0)}catch{}let m=new Is(n[c]);o[c]&&m.restore(o[c]);const p=new Xu;if(r.savePolicy==="persistent")try{p.muted=localStorage.getItem(s)==="off"}catch{}e.innerHTML=`<div class="prisma-atmosphere" aria-hidden="true"></div>
 <header class="prisma-header"><a class="brand" href="#" data-home>${Ft.logo}<span>ПРИЗМА<small>САД СВЕТА</small></span></a><div class="header-caption">НЕБОЛЬШАЯ ИГРА О БОЛЬШИХ ОТКРЫТИЯХ</div><nav aria-label="Настройки"><button class="icon-button" data-action="sound" aria-label="Выключить звук"></button><button class="icon-button" data-action="help" aria-label="Как играть">?</button><button class="icon-button" data-action="levels" aria-label="Выбор уровня">${Ft.levels}</button></nav></header>
 <section class="prisma-title"><div class="title-copy"><div class="eyebrow"><span class="tiny-sun">✦</span> ОПТИЧЕСКАЯ ГОЛОВОЛОМКА</div><h1>Всё начинается<br>с одного<br><em>луча.</em></h1><p>Поворачивайте зеркала, разделяйте свет<br class="desktop-break"> и зажигайте маленькие созвездия.</p><button class="primary" data-action="start"><span>${l?"Продолжить путь":"Впустить свет"}</span>${Ft.arrow}</button><div class="title-facts"><span>12 композиций</span><i></i><span>Без спешки</span><i></i><span>В вашем ритме</span></div></div><div class="title-art"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="demo-board"></div><div class="art-caption"><span>ЭТЮД № 11</span><span>СВЕТ ВСЕГДА НАЙДЁТ ПУТЬ</span></div></div></section>
 <main class="prisma-game" hidden><aside class="level-sidebar"><div class="eyebrow" data-chapter></div><div class="level-heading"><span class="level-number" data-number></span><div><span class="eyebrow">КОМПОЗИЦИЯ</span><h1 data-level-name></h1></div></div><p class="level-caption" data-caption></p><div class="chapter-progress" aria-label="Прогресс кампании" data-progress></div><section class="objective"><div class="eyebrow">ПУСТЬ СВЕТ ДОЙДЁТ ДО ЦЕЛИ</div><h2>Зажгите все огни</h2><div class="target-list" data-targets></div></section><section class="lesson"><span class="lesson-symbol">✧</span><p data-lesson></p></section><section class="completion" hidden><div class="eyebrow">КОМПОЗИЦИЯ ЗАВЕРШЕНА</div><h2>Свет найден.</h2><div class="earned-stars" aria-label="Звёзды за уровень"></div><button class="primary" data-action="next">Дальше ${Ft.arrow}</button></section><button class="level-select" data-action="levels">${Ft.levels} Все композиции <span>↗</span></button></aside>
 <section class="board-section" aria-label="Игровое поле"><div class="board-topline"><span><i></i> ОПТИЧЕСКИЙ СТОЛ</span><span class="receiver-count" data-receiver-count></span></div><div class="board-wrap"><div class="board-svg"></div><div class="board-inputs" role="group" aria-label="Зеркала и разделители. Нажмите, чтобы повернуть."></div></div><div class="board-under"><span class="board-instruction" data-board-instruction>Нажмите на зеркало, чтобы повернуть</span><span class="board-coordinate" data-dimensions></span></div><div class="board-toolbar"><div class="move-counter"><strong data-moves>0</strong><span>ПОВОРОТОВ<small data-par></small></span></div><div class="tools"><button data-action="undo" title="Отменить · Z">${Ft.undo}<span>Отменить</span></button><button data-action="reset" title="Сначала · R">${Ft.reset}<span>Сначала</span></button><button data-action="hint" title="Подсказка · H">${Ft.hint}<span>Подсказка</span></button></div></div></section>
 <aside class="field-notes"><span class="eyebrow">ПОЛЕВЫЕ ЗАМЕТКИ</span><div class="legend-item"><span class="legend-source">▸</span><div><b>Источник</b><small>Отсюда начинается свет</small></div></div><div class="legend-item"><span class="legend-mirror">╱</span><div><b>Зеркало</b><small>Меняет направление</small></div></div><div class="legend-item"><span class="legend-splitter">◇</span><div><b>Разделитель</b><small>Прямо и в отражение</small></div></div><div class="legend-item"><span class="legend-target">◎</span><div><b>Приёмник</b><small>Ждёт свой цвет</small></div></div><div class="notes-bottom"><span>01 — 12</span><p>Хорошим идеям<br>нужно немного<br><em>пространства.</em></p><div class="mini-prism">${Ft.logo}</div></div></aside></main>
 <footer class="prisma-footer"><span>SHELTER ENGINE <i>/</i> PRISMA</span><span data-save>ПРОГРЕСС СОХРАНЯЕТСЯ АВТОМАТИЧЕСКИ</span><span>СОЗДАНО ДЛЯ ЛЮБОПЫТНЫХ</span></footer>
 <div class="prisma-toast" role="status" aria-live="polite"></div><dialog class="prisma-dialog" aria-labelledby="prisma-dialog-title"><div class="dialog-inner"></div></dialog>`;const b=P=>e.querySelector(P),w=b("dialog"),y=new AbortController;let S,E=null;const R=new Is(n[Math.min(10,n.length-1)]);b(".demo-board").innerHTML=ic(R.level,R.answers[0],uo(R.level,R.answers[0]),"demo");const x=()=>{if(o[c]=m.save(),r.savePolicy==="persistent")try{localStorage.setItem(i,JSON.stringify({version:1,current:c,stars:a,states:o}))}catch{u=!0,b("[data-save]").textContent="СОХРАНЕНИЕ В БРАУЗЕРЕ НЕДОСТУПНО"}},T=P=>{const B=b(".prisma-toast");B.textContent=P,B.classList.add("visible"),S&&clearTimeout(S),S=setTimeout(()=>B.classList.remove("visible"),4200)},C=()=>{const P=b('[data-action="sound"]');P.innerHTML=p.muted?Ft.mute:Ft.sound,P.setAttribute("aria-label",p.muted?"Включить звук":"Выключить звук"),P.setAttribute("aria-pressed",String(!p.muted))};C();const N=()=>{w.open&&w.close(),E?.focus({preventScroll:!0})},F=P=>{w.open||(E=document.activeElement),b(".dialog-inner").innerHTML=`<button class="dialog-close icon-button" data-action="close" aria-label="Закрыть">×</button>${P}`,w.open||w.showModal(),b(".dialog-inner").querySelector("button")?.focus()},z=()=>F(`<div class="eyebrow">НЕСКОЛЬКО ПРОСТЫХ ПРАВИЛ</div><h2 id="prisma-dialog-title">Следуйте за светом.</h2><div class="help-rules"><p><b>01. Поверните</b>Нажмите на круглое зеркало. Оно повернётся на 90° и изменит направление луча.</p><p><b>02. Разделите</b>Ромб пропускает луч прямо и отражает вторую ветвь. Его тоже можно поворачивать.</p><p><b>03. Соедините</b>Зажгите все приёмники одновременно. Круг ждёт янтарный свет, ромб — бирюзовый. На пустых клетках лучи пересекаются свободно.</p><p><b>04. Не спешите</b>Нет таймера и проигрыша. Подсказка подсвечивает один элемент, который нужно повернуть.</p></div><p class="dialog-note">★★★ — без подсказок, за оптимальное число поворотов.<br>★★ — без подсказок, с любым числом поворотов.<br>★ — решение с подсказкой. Лучший результат сохраняется.</p><div class="key-guide">Tab — выбрать зеркало · Enter / пробел — повернуть<br>Z — отменить · R — сначала · H — подсказка · M — звук · Esc — композиции</div><button class="primary" data-action="close">Всё понятно ${Ft.arrow}</button>`),L=()=>F(`<div class="eyebrow">САД СВЕТА · ${a.filter(Boolean).length} ИЗ ${n.length}</div><h2 id="prisma-dialog-title">Ваши композиции</h2>${rc.map((P,B)=>`<section class="chapter-picker"><h3><span>${vi(B+1)}</span> ${P}</h3><div class="level-grid">${n.map((ie,re)=>ie.chapter!==B?"":`<button data-level="${re}" ${re>v()?"disabled":""} class="${re===c?"current":""}" aria-label="${vi(re+1)}. ${sc(ie.name)}${re>v()?". Закрыто":a[re]?`. Звёзд: ${a[re]}`:""}"><b>${vi(re+1)}</b><span>${sc(ie.name)}</span><small>${re>v()?"ЗАКРЫТО":a[re]?"★".repeat(a[re])+"☆".repeat(3-a[re]):"ПОПРОБОВАТЬ"}</small></button>`).join("")}</div></section>`).join("")}<p class="dialog-note">Следующая композиция открывается после решения предыдущей. К пройденным можно вернуться в любое время.</p>`),W=()=>F(`<div class="finale-prism">${Ft.logo}</div><div class="eyebrow">ВСЕ ОГНИ ЗАЖЖЕНЫ</div><h2 id="prisma-dialog-title">Теперь здесь<br><em>живёт свет.</em></h2><p>Двенадцать композиций сложились в один сад.<br>Спасибо, что дали свету найти свой путь.</p><div class="finale-score"><strong>${a.reduce((P,B)=>P+B,0)}</strong><span>ИЗ ${n.length*3} ЗВЁЗД<br>В ВАШЕМ СОЗВЕЗДИИ</span></div><button class="primary" data-action="levels">Вернуться к композициям ${Ft.arrow}</button><button class="secondary" data-action="close">Посмотреть на сад</button>`);function H(P=!1){const B=m.level,ie=m.result;ie.won&&(a[c]=Math.max(a[c],m.stars)),b(".board-svg").innerHTML=ic(B,m.angles,ie),P&&(b(".board-inputs").innerHTML=Wu(B)),e.querySelectorAll("[data-optic]").forEach(Re=>{const Ne=B.pieces.filter(cn).findIndex(Ye=>Ye.id===Re.dataset.optic);Re.disabled=ie.won,Re.classList.toggle("hinted",Re.dataset.optic===g),Re.setAttribute("aria-pressed",String(m.angles[Ne]===1))}),b("[data-chapter]").textContent=`ГЛАВА ${vi(B.chapter+1)} / ${rc[B.chapter].toUpperCase()}`,b("[data-number]").textContent=vi(c+1),b("[data-level-name]").textContent=B.name,b("[data-caption]").textContent=B.caption,b("[data-lesson]").textContent=B.lesson,b("[data-progress]").innerHTML=n.map((Re,Ne)=>`<span class="${a[Ne]?"done ":""}${Ne===c?"current":""}" title="Композиция ${Ne+1}"></span>`).join("");const re=B.pieces.filter(Re=>Re.kind==="target");b("[data-targets]").innerHTML=re.map((Re,Ne)=>`<span class="target-chip ${ie.lit.has(Re.id)?"lit":""}" style="--light:${xa[Re.color]}" title="${Re.color==="amber"?"Янтарный":"Бирюзовый"} приёмник ${Ne+1}: ${ie.lit.has(Re.id)?"горит":"не горит"}">${Re.color==="amber"?"◎":"◇"}<small>${vi(Ne+1)}</small></span>`).join(""),b("[data-receiver-count]").textContent=`${ie.lit.size} / ${re.length} ОГНЕЙ`,b("[data-receiver-count]").classList.toggle("complete",ie.won),b("[data-dimensions]").textContent=`${B.size} × ${B.size}`,b("[data-moves]").textContent=String(m.moves),b("[data-par]").textContent=`ЦЕЛЬ · ${m.par}`,b('[data-action="undo"]').disabled=m.history.length===0,b('[data-action="hint"]').disabled=ie.won,b(".completion").hidden=!ie.won,b(".lesson").hidden=ie.won,b(".earned-stars").textContent="★".repeat(m.stars)+"☆".repeat(3-m.stars),b(".earned-stars").setAttribute("aria-label",`${m.stars} из 3 звёзд`),b('[data-action="next"]').innerHTML=`${c===n.length-1?"Увидеть весь сад":"Следующая"} ${Ft.arrow}`,b("[data-board-instruction]").textContent=ie.won?"Композиция завершена. Все огни горят.":g?"Поверните подсвеченный элемент":ie.wrong.size?"Приёмнику нужен луч своего цвета":"Нажмите на зеркало, чтобы повернуть",b(".board-wrap").classList.toggle("solved",ie.won)}function X(P=c){x(),c=P,m=new Is(n[c]),o[c]&&m.restore(o[c]),g=null,d=!0,e.classList.add("playing"),b(".prisma-title").hidden=!0,b(".prisma-game").hidden=!1,N(),p.unlock(),H(!0),x(),(e.querySelector("[data-optic]:not(:disabled)")||b('[data-action="next"]')).focus({preventScroll:!0})}function j(P){const B=m.result.lit.size;m.rotate(P)&&(g=null,p.turn(),H(),x(),m.result.won?(p.win(),T(c===n.length-1?"Сад света завершён!":"Все огни зажжены. Новая композиция открыта."),b('[data-action="next"]').focus({preventScroll:!0})):m.result.lit.size>B&&p.light())}function Y(P){if(!(h||f)){if(P==="sound"){if(p.muted=!p.muted,p.muted?p.suspend():(p.unlock(),p.tone(660)),C(),r.savePolicy==="persistent")try{localStorage.setItem(s,p.muted?"off":"on")}catch{}return}if(P==="close")return N();if(P==="help")return z();if(P==="levels")return L();if(P==="start")return X();if(d){if(P==="next"&&m.result.won)return c===n.length-1?W():X(c+1);P==="undo"&&m.undo()&&(g=null,H(),x(),p.turn()),P==="reset"&&(m.reset(),g=null,H(),x(),T("Композиция возвращена в начальное положение.")),P==="hint"&&(g=m.hint(),g&&(H(),x(),T("Поверните элемент в светящейся рамке."),e.querySelector(`[data-optic="${g}"]`)?.focus({preventScroll:!0})))}}}return e.addEventListener("click",P=>{const B=P.target;if(B.closest("[data-home]")){P.preventDefault(),d&&L();return}const ie=B.closest("button");if(!(!ie||ie.disabled||h))if(ie.dataset.optic&&d&&!w.open)j(ie.dataset.optic);else if(ie.dataset.level!==void 0){const re=Number(ie.dataset.level);Number.isInteger(re)&&re>=0&&re<=v()&&X(re)}else ie.dataset.action&&Y(ie.dataset.action)},{signal:y.signal}),e.addEventListener("keydown",P=>{if(P.repeat||P.altKey||P.ctrlKey||P.metaKey||h)return;if(P.code==="KeyM"){P.preventDefault(),Y("sound");return}if(w.open)return;if(P.code==="Escape"){P.preventDefault(),L();return}if(!d)return;const B={KeyZ:"undo",KeyR:"reset",KeyH:"hint"};B[P.code]&&(P.preventDefault(),Y(B[P.code]))},{signal:y.signal}),w.addEventListener("click",P=>{if(P.target===w){const B=w.getBoundingClientRect();(P.clientX<B.left||P.clientX>B.right||P.clientY<B.top||P.clientY>B.bottom)&&N()}},{signal:y.signal}),document.addEventListener("visibilitychange",()=>{document.hidden?(x(),p.suspend()):d&&!h&&p.unlock()},{signal:y.signal}),window.addEventListener("pagehide",x,{signal:y.signal}),H(!0),{pause(P){h=P,e.classList.toggle("paused",P),P?(x(),p.suspend()):d&&p.unlock()},dispose(){f||(x(),f=!0,y.abort(),S&&clearTimeout(S),p.dispose(),w.close(),e.innerHTML="",e.classList.remove("prisma-root","playing","paused"),document.title=t)},diagnostics(){return{level:c,stars:a,saveFailed:u,...m.save(),won:m.result.won}}}}const Yu={id:"prisma",sdk:1,components:[{id:"prisma.optic",name:"Оптический элемент",fields:[{name:"kind",label:"Тип",type:"select",default:"mirror",options:["source","target","mirror","splitter","wall"].map(r=>({value:r,label:{source:"Источник",target:"Приёмник",mirror:"Зеркало",splitter:"Разделитель",wall:"Камень"}[r]}))},{name:"color",label:"Цвет",type:"select",default:"amber",options:[{value:"amber",label:"Янтарный"},{value:"cyan",label:"Бирюзовый"}]},{name:"direction",label:"Направление источника",type:"number",default:0,min:0,max:3},{name:"angle",label:"Положение зеркала",type:"number",default:0,min:0,max:1}]}],validateScene(r){Il(r)},createSession:qu};class $u{components=new Map;modules=new Map;register(e){if(e.sdk!==1||this.modules.has(e.id))throw new Error("Несовместимый или повторяющийся модуль: "+e.id);this.modules.set(e.id,e);for(const t of e.components||[]){if(this.components.has(t.id))throw new Error("Повторяющийся компонент "+t.id);this.components.set(t.id,t)}}validate(e,t){for(const n of this.modules.values())n.validateScene?.(e,t);for(const n of e.nodes)for(const i of n.components||[]){const s=this.components.get(i.type);if(!s)throw new Error("Отсутствует компонент «"+i.type+"» у «"+n.name+"».");for(const a of s.fields){const o=i.values[a.name];if(a.type==="number"&&(typeof o!="number"||!Number.isFinite(o)||o<(a.min??-1/0)||o>(a.max??1/0)))throw new Error(n.name+": проверьте «"+a.label+"».");if(a.type==="boolean"&&typeof o!="boolean")throw new Error("Некорректный переключатель "+a.label);if(a.type==="object"&&o&&!e.nodes.some(c=>c.id===o)||a.type==="scene"&&!t.scenes.some(c=>c.id===o)||a.type==="asset"&&o&&!t.assets.some(c=>c.id===o)||a.type==="select"&&!a.options?.some(c=>c.value===o))throw new Error(n.name+": не найдена связь «"+a.label+"».")}}}}const ho="186",Ku=0,ac=1,Zu=2,ur=1,Ju=2,or=3,ii=0,Ht=1,xn=2,kn=0,dr=1,oc=2,cc=3,lc=4,Qu=5,Ui=100,ju=101,ed=102,td=103,nd=104,id=200,rd=201,sd=202,ad=203,Dl=204,Nl=205,od=206,cd=207,ld=208,ud=209,dd=210,hd=211,fd=212,pd=213,md=214,va=0,ya=1,Ma=2,mr=3,ba=4,Sa=5,Ea=6,Ta=7,Ul=0,gd=1,_d=2,Mn=0,Fl=1,Ol=2,kl=3,fo=4,Bl=5,zl=6,Hl=7,uc="attached",xd="detached",Vl=300,pi=301,Hi=302,Ds=303,Ns=304,Es=306,Sn=1e3,vn=1001,us=1002,bt=1003,Gl=1004,cr=1005,St=1006,ns=1007,Fn=1008,qt=1009,Wl=1010,Xl=1011,gr=1012,po=1013,En=1014,Qt=1015,Tn=1016,mo=1017,go=1018,_r=1020,ql=35902,Yl=35899,$l=1021,Kl=1022,jt=1023,zn=1026,fi=1027,_o=1028,xo=1029,mi=1030,vo=1031,yo=1033,is=33776,rs=33777,ss=33778,as=33779,wa=35840,Aa=35841,Ra=35842,Ca=35843,Pa=36196,La=37492,Ia=37496,Da=37488,Na=37489,ds=37490,Ua=37491,Fa=37808,Oa=37809,ka=37810,Ba=37811,za=37812,Ha=37813,Va=37814,Ga=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,$a=37820,Ka=37821,Za=36492,Ja=36494,Qa=36495,ja=36283,eo=36284,hs=36285,to=36286,xr=2300,vr=2301,Us=2302,dc=2303,hc=2400,fc=2401,pc=2402,vd=2500,yd=0,Zl=1,no=2,Md=3200,io=0,bd=1,Un="",pt="srgb",Yt="srgb-linear",fs="linear",je="srgb",Fs=7680,Sd=519,Ed=512,Td=513,wd=514,Mo=515,Ad=516,Rd=517,bo=518,Cd=519,Jl=35044,mc="300 es",yn=2e3,yr=2001;function Pd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ld(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Mr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Id(){const r=Mr("canvas");return r.style.display="block",r}const gc={};function ps(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ql(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function we(...r){r=Ql(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Le(...r){r=Ql(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ki(...r){const e=r.join(" ");e in gc||(gc[e]=!0,we(...r))}function Dd(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Nd={[va]:ya,[Ma]:Ea,[ba]:Ta,[mr]:Sa,[ya]:va,[Ea]:Ma,[Ta]:ba,[Sa]:mr};class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _c=1234567;const hr=Math.PI/180,Vi=180/Math.PI;function ln(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Xe(r,e,t){return Math.max(e,Math.min(t,r))}function So(r,e){return(r%e+e)%e}function Ud(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Fd(r,e,t){return r!==e?(t-r)/(e-r):0}function fr(r,e,t){return(1-t)*r+t*e}function Od(r,e,t,n){return fr(r,e,1-Math.exp(-t*n))}function kd(r,e=1){return e-Math.abs(So(r,e*2)-e)}function Bd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function zd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Hd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Vd(r,e){return r+Math.random()*(e-r)}function Gd(r){return r*(.5-Math.random())}function Wd(r){r!==void 0&&(_c=r);let e=_c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xd(r){return r*hr}function qd(r){return r*Vi}function Yd(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function $d(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Kd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Zd(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,c*d,c*h,o*l);break;case"YZY":r.set(c*h,o*u,c*d,o*l);break;case"ZXZ":r.set(c*d,c*h,o*u,o*l);break;case"XZX":r.set(o*u,c*g,c*f,o*l);break;case"YXY":r.set(c*f,o*u,c*g,o*l);break;case"ZYZ":r.set(c*g,c*f,o*u,o*l);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function an(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ms={DEG2RAD:hr,RAD2DEG:Vi,generateUUID:ln,clamp:Xe,euclideanModulo:So,mapLinear:Ud,inverseLerp:Fd,lerp:fr,damp:Od,pingpong:kd,smoothstep:Bd,smootherstep:zd,randInt:Hd,randFloat:Vd,randFloatSpread:Gd,seededRandom:Wd,degToRad:Xd,radToDeg:qd,isPowerOfTwo:Yd,ceilPowerOfTwo:$d,floorPowerOfTwo:Kd,setQuaternionFromProperEuler:Zd,normalize:et,denormalize:an},Bo=class Bo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bo.prototype.isVector2=!0;let He=Bo;class Hn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(d!==v||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*v;m<0&&(h=-h,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),w=Math.sin(b);p=Math.sin(p*b)/w,o=Math.sin(o*b)/w,c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+v*o}else{c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+v*o;const b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-o*f,e[t+2]=l*g+u*f+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),d=o(s/2),h=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zo=class zo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-s*d,this.z=i+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Os.copy(this).projectOnVector(e),this.sub(Os)}reflect(e){return this.sub(Os.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zo.prototype.isVector3=!0;let O=zo;const Os=new O,xc=new Hn,Ho=class Ho{constructor(e,t,n,i,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],b=i[1],w=i[4],y=i[7],S=i[2],E=i[5],R=i[8];return s[0]=a*v+o*b+c*S,s[3]=a*m+o*w+c*E,s[6]=a*p+o*y+c*R,s[1]=l*v+u*b+d*S,s[4]=l*m+u*w+d*E,s[7]=l*p+u*y+d*R,s[2]=h*v+f*b+g*S,s[5]=h*m+f*w+g*E,s[8]=h*p+f*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*s,f=l*s-a*c,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*l-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=h*v,e[4]=(u*t-i*c)*v,e[5]=(i*s-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ks.makeScale(e,t)),this}rotate(e){return ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ks.makeRotation(-e)),this}translate(e,t){return ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ho.prototype.isMatrix3=!0;let De=Ho;const ks=new De,vc=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yc=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jd(){const r={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===je&&(i.r=Bn(i.r),i.g=Bn(i.g),i.b=Bn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?fs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ki("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ki("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Yt]:{primaries:e,whitePoint:n,transfer:fs,toXYZ:vc,fromXYZ:yc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:n,transfer:je,toXYZ:vc,fromXYZ:yc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),r}const We=Jd();function Bn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let yi;class Qd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yi===void 0&&(yi=Mr("canvas")),yi.width=e.width,yi.height=e.height;const i=yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Bn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jd=0;class Eo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Bs(i[a].image)):s.push(Bs(i[a]))}else s=Bs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Bs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let eh=0;const zs=new O;class Et extends gi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=vn,i=vn,s=St,a=Fn,o=jt,c=qt,l=Et.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=ln(),this.name="",this.source=new Eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zs).x}get height(){return this.source.getSize(zs).y}get depth(){return this.source.getSize(zs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Vl;Et.DEFAULT_ANISOTROPY=1;const Vo=class Vo{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,y=(f+1)/2,S=(p+1)/2,E=(u+h)/4,R=(d+v)/4,x=(g+m)/4;return w>y&&w>S?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=E/n,s=R/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=x/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=R/s,i=x/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-v)/b,this.z=(h-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vo.prototype.isVector4=!0;let it=Vo;class th extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Et(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Eo(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends th{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jl extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nh extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ss=class Ss{constructor(e,t,n,i,s,a,o,c,l,u,d,h,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,u,d,h,f,g,v,m)}set(e,t,n,i,s,a,o,c,l,u,d,h,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ss().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Mi.setFromMatrixColumn(e,0).length(),s=1/Mi.setFromMatrixColumn(e,1).length(),a=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,v=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,g=l*u,v=l*d;t[0]=h+v*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=v+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,g=l*u,v=l*d;t[0]=h-v*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,v=o*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ih,e,rh)}lookAt(e,t,n){const i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Yn.crossVectors(n,Wt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Yn.crossVectors(n,Wt)),Yn.normalize(),Cr.crossVectors(Wt,Yn),i[0]=Yn.x,i[4]=Cr.x,i[8]=Wt.x,i[1]=Yn.y,i[5]=Cr.y,i[9]=Wt.y,i[2]=Yn.z,i[6]=Cr.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],b=n[3],w=n[7],y=n[11],S=n[15],E=i[0],R=i[4],x=i[8],T=i[12],C=i[1],N=i[5],F=i[9],z=i[13],L=i[2],W=i[6],H=i[10],X=i[14],j=i[3],Y=i[7],P=i[11],B=i[15];return s[0]=a*E+o*C+c*L+l*j,s[4]=a*R+o*N+c*W+l*Y,s[8]=a*x+o*F+c*H+l*P,s[12]=a*T+o*z+c*X+l*B,s[1]=u*E+d*C+h*L+f*j,s[5]=u*R+d*N+h*W+f*Y,s[9]=u*x+d*F+h*H+f*P,s[13]=u*T+d*z+h*X+f*B,s[2]=g*E+v*C+m*L+p*j,s[6]=g*R+v*N+m*W+p*Y,s[10]=g*x+v*F+m*H+p*P,s[14]=g*T+v*z+m*X+p*B,s[3]=b*E+w*C+y*L+S*j,s[7]=b*R+w*N+y*W+S*Y,s[11]=b*x+w*F+y*H+S*P,s[15]=b*T+w*z+y*X+S*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],b=c*f-l*h,w=o*f-l*d,y=o*h-c*d,S=a*f-l*u,E=a*h-c*u,R=a*d-o*u;return t*(v*b-m*w+p*y)-n*(g*b-m*S+p*E)+i*(g*w-v*S+p*R)-s*(g*y-v*E+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+i*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=t*o-n*a,w=t*c-i*a,y=t*l-s*a,S=n*c-i*o,E=n*l-s*o,R=i*l-s*c,x=u*v-d*g,T=u*m-h*g,C=u*p-f*g,N=d*m-h*v,F=d*p-f*v,z=h*p-f*m,L=b*z-w*F+y*N+S*C-E*T+R*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/L;return e[0]=(o*z-c*F+l*N)*W,e[1]=(i*F-n*z-s*N)*W,e[2]=(v*R-m*E+p*S)*W,e[3]=(h*E-d*R-f*S)*W,e[4]=(c*C-a*z-l*T)*W,e[5]=(t*z-i*C+s*T)*W,e[6]=(m*y-g*R-p*w)*W,e[7]=(u*R-h*y+f*w)*W,e[8]=(a*F-o*C+l*x)*W,e[9]=(n*C-t*F-s*x)*W,e[10]=(g*E-v*y+p*b)*W,e[11]=(d*y-u*E-f*b)*W,e[12]=(o*T-a*N-c*x)*W,e[13]=(t*N-n*T+i*x)*W,e[14]=(v*w-g*S-m*b)*W,e[15]=(u*S-d*w+h*b)*W,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,h=s*l,f=s*u,g=s*d,v=a*u,m=a*d,p=o*d,b=c*l,w=c*u,y=c*d,S=n.x,E=n.y,R=n.z;return i[0]=(1-(v+p))*S,i[1]=(f+y)*S,i[2]=(g-w)*S,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(h+p))*E,i[6]=(m+b)*E,i[7]=0,i[8]=(g+w)*R,i[9]=(m-b)*R,i[10]=(1-(h+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Mi.set(i[0],i[1],i[2]).length();const o=Mi.set(i[4],i[5],i[6]).length(),c=Mi.set(i[8],i[9],i[10]).length();s<0&&(a=-a),nn.copy(this);const l=1/a,u=1/o,d=1/c;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,t.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,a,o=yn,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===yn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===yr)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=yn,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===yn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===yr)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ss.prototype.isMatrix4=!0;let ke=Ss;const Mi=new O,nn=new ke,ih=new O(0,0,0),rh=new O(1,1,1),Yn=new O,Cr=new O,Wt=new O,Mc=new ke,bc=new Hn;class ri{constructor(e=0,t=0,n=0,i=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bc.setFromEuler(this),this.setFromQuaternion(bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sh=0;const Sc=new O,bi=new Hn,Cn=new ke,Pr=new O,Zi=new O,ah=new O,oh=new Hn,Ec=new O(1,0,0),Tc=new O(0,1,0),wc=new O(0,0,1),Ac={type:"added"},ch={type:"removed"},Si={type:"childadded",child:null},Hs={type:"childremoved",child:null};class dt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new O,t=new ri,n=new Hn,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new De}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(Ec,e)}rotateY(e){return this.rotateOnAxis(Tc,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ec,e)}translateY(e){return this.translateOnAxis(Tc,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pr.copy(e):Pr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Zi,Pr,this.up):Cn.lookAt(Pr,Zi,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),bi.setFromRotationMatrix(Cn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ac),Si.child=e,this.dispatchEvent(Si),Si.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ch),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ac),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,oh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}dt.DEFAULT_UP=new O(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class en extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lh={type:"move"};class Vs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lh)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Gs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=So(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Gs(a,s,e+1/3),this.g=Gs(a,s,e),this.b=Gs(a,s,e-1/3)}return We.colorSpaceToWorking(this,i),this}setStyle(e,t=pt){function n(s){s!==void 0&&parseFloat(s)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const n=tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return We.workingToColorSpace(Dt.copy(this),e),Math.round(Xe(Dt.r*255,0,255))*65536+Math.round(Xe(Dt.g*255,0,255))*256+Math.round(Xe(Dt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,s=Dt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=pt){We.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Lr);const n=fr($n.h,Lr.h,t),i=fr($n.s,Lr.s,t),s=fr($n.l,Lr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Pe;Pe.NAMES=tu;class To{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new To(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rc extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const rn=new O,Pn=new O,Ws=new O,Ln=new O,Ei=new O,Ti=new O,Cc=new O,Xs=new O,qs=new O,Ys=new O,$s=new it,Ks=new it,Zs=new it;class on{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){rn.subVectors(i,t),Pn.subVectors(n,t),Ws.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(Pn),c=rn.dot(Ws),l=Pn.dot(Pn),u=Pn.dot(Ws),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ln.x),c.addScaledVector(a,Ln.y),c.addScaledVector(o,Ln.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return $s.setScalar(0),Ks.setScalar(0),Zs.setScalar(0),$s.fromBufferAttribute(e,t),Ks.fromBufferAttribute(e,n),Zs.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector($s,s.x),a.addScaledVector(Ks,s.y),a.addScaledVector(Zs,s.z),a}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),Pn.subVectors(e,t),rn.cross(Pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),rn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return on.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ei.subVectors(i,n),Ti.subVectors(s,n),Xs.subVectors(e,n);const c=Ei.dot(Xs),l=Ti.dot(Xs);if(c<=0&&l<=0)return t.copy(n);qs.subVectors(e,i);const u=Ei.dot(qs),d=Ti.dot(qs);if(u>=0&&d<=u)return t.copy(i);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ei,a);Ys.subVectors(e,s);const f=Ei.dot(Ys),g=Ti.dot(Ys);if(g>=0&&f<=g)return t.copy(s);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ti,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Cc.subVectors(s,i),o=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(Cc,o);const p=1/(m+v+h);return a=v*p,o=h*p,t.copy(n).addScaledVector(Ei,a).addScaledVector(Ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Vn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Dr.subVectors(this.max,Ji),wi.subVectors(e.a,Ji),Ai.subVectors(e.b,Ji),Ri.subVectors(e.c,Ji),Kn.subVectors(Ai,wi),Zn.subVectors(Ri,Ai),oi.subVectors(wi,Ri);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-oi.z,oi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,oi.z,0,-oi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-oi.y,oi.x,0];return!Js(t,wi,Ai,Ri,Dr)||(t=[1,0,0,0,1,0,0,0,1],!Js(t,wi,Ai,Ri,Dr))?!1:(Nr.crossVectors(Kn,Zn),t=[Nr.x,Nr.y,Nr.z],Js(t,wi,Ai,Ri,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const In=[new O,new O,new O,new O,new O,new O,new O,new O],sn=new O,Ir=new Vn,wi=new O,Ai=new O,Ri=new O,Kn=new O,Zn=new O,oi=new O,Ji=new O,Dr=new O,Nr=new O,ci=new O;function Js(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ci.fromArray(r,s);const o=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),c=e.dot(ci),l=t.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const vt=new O,Ur=new He;let uh=0;class Vt extends gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jl,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=an(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=an(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=an(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=an(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=an(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class nu extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class iu extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const dh=new Vn,Qi=new O,Qs=new O;class An{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(Qs)),this.expandByPoint(Qi.copy(e.center).sub(Qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hh=0;const Zt=new ke,js=new dt,Ci=new O,Xt=new Vn,ji=new Vn,Rt=new O;class Nt extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pd(e)?iu:nu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return js.lookAt(e),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Xt.min,ji.min),Xt.expandByPoint(Rt),Rt.addVectors(Xt.max,ji.max),Xt.expandByPoint(Rt)):(Xt.expandByPoint(ji.min),Xt.expandByPoint(ji.max))}Xt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Rt.fromBufferAttribute(o,l),c&&(Ci.fromBufferAttribute(e,l),Rt.add(Ci)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new O,c[x]=new O;const l=new O,u=new O,d=new O,h=new He,f=new He,g=new He,v=new O,m=new O;function p(x,T,C){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,C),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(N),o[x].add(v),o[T].add(v),o[C].add(v),c[x].add(m),c[T].add(m),c[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,T=b.length;x<T;++x){const C=b[x],N=C.start,F=C.count;for(let z=N,L=N+F;z<L;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const w=new O,y=new O,S=new O,E=new O;function R(x){S.fromBufferAttribute(i,x),E.copy(S);const T=o[x];w.copy(T),w.sub(S.multiplyScalar(S.dot(T))).normalize(),y.crossVectors(E,T);const N=y.dot(c[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,N)}for(let x=0,T=b.length;x<T;++x){const C=b[x],N=C.start,F=C.count;for(let z=N,L=N+F;z<L;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new O,s=new O,a=new O,o=new O,c=new O,l=new O,u=new O,d=new O;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new Vt(h,u,d)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jl,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Ot=new O;class wo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=an(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=an(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=an(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=an(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=an(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ps("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ps("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ea=new O,ph=new O,mh=new De;class jn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ea.subVectors(n,t).cross(ph.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(ea),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mh.getNormalMatrix(e),i=this.coplanarPoint(ea).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let gh=0;class bn extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=dr,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dl,this.blendDst=Nl,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new jn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dn=new O,ta=new O,Fr=new O,Or=new O;class Ts{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ta.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(ta);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Fr),o=Or.dot(this.direction),c=-Or.dot(Fr),l=Or.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ta).addScaledVector(Fr,h),f}intersectSphere(e,t){if(e.radius<0)return null;Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,b=n.y-a.y,w=n.z-a.z,y=Math.abs(c),S=Math.abs(l),E=Math.abs(u);let R,x,T,C,N,F,z,L,W,H,X,j;if(y>=S&&y>=E?(T=c,F=d,W=g,j=p,c>=0?(R=l,x=u,C=h,N=f,z=v,L=m,H=b,X=w):(R=u,x=l,C=f,N=h,z=m,L=v,H=w,X=b)):S>=E?(T=l,F=h,W=v,j=b,l>=0?(R=u,x=c,C=f,N=d,z=m,L=g,H=w,X=p):(R=c,x=u,C=d,N=f,z=g,L=m,H=p,X=w)):(T=u,F=f,W=m,j=w,u>=0?(R=c,x=l,C=d,N=h,z=g,L=v,H=p,X=b):(R=l,x=c,C=h,N=d,z=v,L=g,H=b,X=p)),T===0)return null;const Y=R/T,P=x/T,B=1/T,ie=C-Y*F,re=N-P*F,Re=z-Y*W,Ne=L-P*W,Ye=H-Y*j,Z=X-P*j,te=Ye*Ne-Z*Re,ve=ie*Z-re*Ye,Ie=Re*re-Ne*ie;if(i){if(te<0||ve<0||Ie<0)return null}else if((te<0||ve<0||Ie<0)&&(te>0||ve>0||Ie>0))return null;const _e=te+ve+Ie;if(_e===0)return null;const Be=B*(te*F+ve*W+Ie*j);return(_e>0?Be<0:Be>0)?null:this.at(Be/_e,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ti extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pc=new ke,li=new Ts,kr=new An,Lc=new O,Br=new O,zr=new O,Hr=new O,na=new O,Vr=new O,Ic=new O,Gr=new O;class mt extends dt{constructor(e=new Nt,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Vr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(na.fromBufferAttribute(d,e),a?Vr.addScaledVector(na,u):Vr.addScaledVector(na.sub(t),u))}t.add(Vr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),li.copy(e.ray).recast(e.near),!(kr.containsPoint(li.origin)===!1&&(li.intersectSphere(kr,Lc)===null||li.origin.distanceToSquared(Lc)>(e.far-e.near)**2))&&(Pc.copy(s).invert(),li.copy(e.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,S=w;y<S;y+=3){const E=o.getX(y),R=o.getX(y+1),x=o.getX(y+2);i=Wr(this,p,e,n,l,u,d,E,R,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const b=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);i=Wr(this,a,e,n,l,u,d,b,w,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,S=w;y<S;y+=3){const E=y,R=y+1,x=y+2;i=Wr(this,p,e,n,l,u,d,E,R,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const b=m,w=m+1,y=m+2;i=Wr(this,a,e,n,l,u,d,b,w,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function _h(r,e,t,n,i,s,a,o){let c;if(e.side===Ht?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===ii,o),c===null)return null;Gr.copy(o),Gr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Gr);return l<t.near||l>t.far?null:{distance:l,point:Gr.clone(),object:r}}function Wr(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Br),r.getVertexPosition(c,zr),r.getVertexPosition(l,Hr);const u=_h(r,e,t,n,Br,zr,Hr,Ic);if(u){const d=new O;on.getBarycoord(Ic,Br,zr,Hr,d),i&&(u.uv=on.getInterpolatedAttribute(i,o,c,l,d,new He)),s&&(u.uv1=on.getInterpolatedAttribute(s,o,c,l,d,new He)),a&&(u.normal=on.getInterpolatedAttribute(a,o,c,l,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new O,materialIndex:0};on.getNormal(Br,zr,Hr,h.normal),u.face=h,u.barycoord=d}return u}const er=new it,Dc=new it,Nc=new it,xh=new it,Uc=new ke,Xr=new O,ia=new An,Fc=new ke,ra=new Ts;class vh extends mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uc,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xr),this.boundingBox.expandByPoint(Xr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xr),this.boundingSphere.expandByPoint(Xr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(i),e.ray.intersectsSphere(ia)!==!1&&(Fc.copy(i).invert(),ra.copy(e.ray).applyMatrix4(Fc),!(this.boundingBox!==null&&ra.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ra)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xd?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Dc.fromBufferAttribute(i.attributes.skinIndex,e),Nc.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(er.copy(t),t.set(0,0,0,0)):(er.set(...t,1),t.set(0,0,0)),er.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=Nc.getComponent(s);if(a!==0){const o=Dc.getComponent(s);Uc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(xh.copy(er).applyMatrix4(Uc),a)}}return t.isVector4&&(t.w=er.w),t.applyMatrix4(this.bindMatrixInverse)}}class ru extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ao extends Et{constructor(e=null,t=1,n=1,i,s,a,o,c,l=bt,u=bt,d,h){super(null,a,o,c,l,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oc=new ke,yh=new ke;class Ro{constructor(e=[],t=[]){this.uuid=ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:yh;Oc.multiplyMatrices(o,t[s]),Oc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ro(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ao(t,e,e,jt,Qt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(we("Skeleton: No bone found with UUID:",s),a=new ru),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class gs extends Vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pi=new ke,kc=new ke,qr=[],Bc=new Vn,Mh=new ke,tr=new mt,nr=new An;class bh extends mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Mh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),Bc.copy(e.boundingBox).applyMatrix4(Pi),this.boundingBox.union(Bc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),nr.copy(e.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),e.ray.intersectsSphere(nr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Pi),kc.multiplyMatrices(n,Pi),tr.matrixWorld=kc,tr.raycast(e,qr);for(let a=0,o=qr.length;a<o;a++){const c=qr[a];c.instanceId=s,c.object=this,t.push(c)}qr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ao(new Float32Array(i*this.count),i,this.count,_o,Qt));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ui=new An,Sh=new He(.5,.5),Yr=new O;class Co{constructor(e=new jn,t=new jn,n=new jn,i=new jn,s=new jn,a=new jn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],v=s[9],m=s[10],p=s[11],b=s[12],w=s[13],y=s[14],S=s[15];if(i[0].setComponents(l-a,f-u,p-g,S-b).normalize(),i[1].setComponents(l+a,f+u,p+g,S+b).normalize(),i[2].setComponents(l+o,f+d,p+v,S+w).normalize(),i[3].setComponents(l-o,f-d,p-v,S-w).normalize(),n)i[4].setComponents(c,h,m,y).normalize(),i[5].setComponents(l-c,f-h,p-m,S-y).normalize();else if(i[4].setComponents(l-c,f-h,p-m,S-y).normalize(),t===yn)i[5].setComponents(l+c,f+h,p+m,S+y).normalize();else if(t===yr)i[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);const t=Sh.distanceTo(e.center);return ui.radius=.7071067811865476+t,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Yr.x=i.normal.x>0?e.max.x:e.min.x,Yr.y=i.normal.y>0?e.max.y:e.min.y,Yr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class su extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _s=new O,xs=new O,zc=new ke,ir=new Ts,$r=new An,sa=new O,Hc=new O;class Po extends dt{constructor(e=new Nt,t=new su){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)_s.fromBufferAttribute(t,i-1),xs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_s.distanceTo(xs);e.setAttribute("lineDistance",new yt(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=s,e.ray.intersectsSphere($r)===!1)return;zc.copy(i).invert(),ir.copy(e.ray).applyMatrix4(zc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),b=u.getX(v+1),w=Kr(this,e,ir,c,p,b,v);w&&t.push(w)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=Kr(this,e,ir,c,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=Kr(this,e,ir,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Kr(this,e,ir,c,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kr(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(_s.fromBufferAttribute(o,i),xs.fromBufferAttribute(o,s),t.distanceSqToSegment(_s,xs,sa,Hc)>n)return;sa.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(sa);if(!(l<e.near||l>e.far))return{distance:l,point:Hc.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Vc=new O,Gc=new O;class Eh extends Po{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Vc.fromBufferAttribute(t,i),Gc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vc.distanceTo(Gc);e.setAttribute("lineDistance",new yt(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Th extends Po{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class au extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wc=new ke,ro=new Ts,Zr=new An,Jr=new O;class ou extends dt{constructor(e=new Nt,t=new au){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=s,e.ray.intersectsSphere(Zr)===!1)return;Wc.copy(i).invert(),ro.copy(e.ray).applyMatrix4(Wc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=h,v=f;g<v;g++){const m=l.getX(g);Jr.fromBufferAttribute(d,m),Xc(Jr,m,c,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,v=f;g<v;g++)Jr.fromBufferAttribute(d,g),Xc(Jr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xc(r,e,t,n,i,s,a){const o=ro.distanceSqToPoint(r);if(o<t){const c=new O;ro.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class cu extends Et{constructor(e=[],t=pi,n,i,s,a,o,c,l,u){super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class br extends Et{constructor(e,t,n=En,i,s,a,o=bt,c=bt,l,u=zn,d=1){if(u!==zn&&u!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class wh extends br{constructor(e,t=En,n=pi,i,s,a=bt,o=bt,c,l=zn){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lu extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class si extends Nt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function g(v,m,p,b,w,y,S,E,R,x,T){const C=y/R,N=S/x,F=y/2,z=S/2,L=E/2,W=R+1,H=x+1;let X=0,j=0;const Y=new O;for(let P=0;P<H;P++){const B=P*N-z;for(let ie=0;ie<W;ie++){const re=ie*C-F;Y[v]=re*b,Y[m]=B*w,Y[p]=L,l.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[p]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(ie/R),d.push(1-P/x),X+=1}}for(let P=0;P<x;P++)for(let B=0;B<R;B++){const ie=h+B+W*P,re=h+B+W*(P+1),Re=h+(B+1)+W*(P+1),Ne=h+(B+1)+W*P;c.push(ie,re,Ne),c.push(re,Re,Ne),j+=6}o.addGroup(f,j,T),f+=j,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Lo extends Nt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,g=n*2+s,v=i+1,m=new O,p=new O;for(let b=0;b<=g;b++){let w=0,y=0,S=0,E=0;if(b<=n){const T=b/n,C=T*Math.PI/2;y=-u-e*Math.cos(C),S=e*Math.sin(C),E=-e*Math.cos(C),w=T*d}else if(b<=n+s){const T=(b-n)/s;y=-u+T*t,S=e,E=0,w=d+T*h}else{const T=(b-n-s)/n,C=T*Math.PI/2;y=u+e*Math.sin(C),S=e*Math.cos(C),E=e*Math.sin(C),w=d+h+T*d}const R=Math.max(0,Math.min(1,w/f));let x=0;b===0?x=.5/i:b===g&&(x=-.5/i);for(let T=0;T<=i;T++){const C=T/i,N=C*Math.PI*2,F=Math.sin(N),z=Math.cos(N);p.x=-S*z,p.y=y,p.z=S*F,o.push(p.x,p.y,p.z),m.set(-S*z,E,S*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(C+x,R)}if(b>0){const T=(b-1)*v;for(let C=0;C<i;C++){const N=T+C,F=T+C+1,z=b*v+C,L=b*v+C+1;a.push(N,F,z),a.push(F,L,z)}}}this.setIndex(a),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Io extends Nt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let g=0;const v=[],m=n/2;let p=0;b(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function b(){const y=new O,S=new O;let E=0;const R=(t-e)/n;for(let x=0;x<=s;x++){const T=[],C=x/s,N=C*(t-e)+e;for(let F=0;F<=i;F++){const z=F/i,L=z*c+o,W=Math.sin(L),H=Math.cos(L);S.x=N*W,S.y=-C*n+m,S.z=N*H,d.push(S.x,S.y,S.z),y.set(W,R,H).normalize(),h.push(y.x,y.y,y.z),f.push(z,1-C),T.push(g++)}v.push(T)}for(let x=0;x<i;x++)for(let T=0;T<s;T++){const C=v[T][x],N=v[T+1][x],F=v[T+1][x+1],z=v[T][x+1];(e>0||T!==0)&&(u.push(C,N,z),E+=3),(t>0||T!==s-1)&&(u.push(N,F,z),E+=3)}l.addGroup(p,E,0),p+=E}function w(y){const S=g,E=new He,R=new O;let x=0;const T=y===!0?e:t,C=y===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,m*C,0),h.push(0,C,0),f.push(.5,.5),g++;const N=g;for(let F=0;F<=i;F++){const L=F/i*c+o,W=Math.cos(L),H=Math.sin(L);R.x=T*H,R.y=m*C,R.z=T*W,d.push(R.x,R.y,R.z),h.push(0,C,0),E.x=W*.5+.5,E.y=H*.5*C+.5,f.push(E.x,E.y),g++}for(let F=0;F<i;F++){const z=S+F,L=N+F;y===!0?u.push(L,L+1,z):u.push(L+1,L,z),x+=3}l.addGroup(p,x,y===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Do extends Io{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Do(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ws extends Nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,d=e/o,h=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const b=p*h-a;for(let w=0;w<l;w++){const y=w*d-s;g.push(y,-b,0),v.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const w=b+l*p,y=b+l*(p+1),S=b+1+l*(p+1),E=b+1+l*p;f.push(w,y,E),f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.widthSegments,e.heightSegments)}}class No extends Nt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new O,h=new O,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const b=[],w=p/n,y=a+w*o,S=e*Math.cos(y),E=Math.sqrt(e*e-S*S);let R=0;p===0&&a===0?R=.5/t:p===n&&c===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){const T=x/t,C=i+T*s;d.x=-E*Math.cos(C),d.y=S,d.z=E*Math.sin(C),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(T+R,1-w),b.push(l++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const w=u[p][b+1],y=u[p][b],S=u[p+1][b],E=u[p+1][b+1];(p!==0||a>0)&&f.push(w,y,E),(p!==n-1||c<Math.PI)&&f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Gi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(qc(i))i.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(qc(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function kt(r){const e={};for(let t=0;t<r.length;t++){const n=Gi(r[t]);for(const i in n)e[i]=n[i]}return e}function qc(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Ah(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function uu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Rh={clone:Gi,merge:kt};var Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=Ah(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Pe().setHex(i.value);break;case"v2":this.uniforms[n].value=new He().fromArray(i.value);break;case"v3":this.uniforms[n].value=new O().fromArray(i.value);break;case"v4":this.uniforms[n].value=new it().fromArray(i.value);break;case"m3":this.uniforms[n].value=new De().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Lh extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ni extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rn extends ni{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ih extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dh extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ei(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function os(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function Nh(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Yc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Uh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Xi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Fh extends Xi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hc,endingEnd:hc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case fc:s=e,o=2*t-n;break;case pc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fc:a=e,c=2*n-t;break;case pc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,b=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,w=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let S=0;S!==o;++S)s[S]=p*a[u+S]+b*a[l+S]+w*a[c+S]+y*a[d+S];return s}}class Oh extends Xi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)s[h]=a[l+h]*d+a[c+h]*u;return s}}class kh extends Xi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bh extends Xi{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,d=this.outTangents;if(!u||!d){const g=(n-t)/(i-t),v=1-g;for(let m=0;m!==o;++m)s[m]=a[l+m]*v+a[c+m]*g;return s}const h=o*2,f=e-1;for(let g=0;g!==o;++g){const v=a[l+g],m=a[c+g],p=f*h+g*2,b=d[p],w=d[p+1],y=e*h+g*2,S=u[y],E=u[y+1],R=Hh(n,t,b,S,i);s[g]=du(R,v,w,E,m)}return s}}function du(r,e,t,n,i){const s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function zh(r,e,t,n,i){const s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function Hh(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){const o=du(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;const c=zh(s,e,t,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}class dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ei(t,this.TimeBufferType),this.values=ei(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ei(e.times,Array),values:ei(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),os(e.settings)&&(n.settings={inTangents:ei(e.settings.inTangents,Array),outTangents:ei(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Bh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case Us:t=this.InterpolantFactoryMethodSmooth;break;case dc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return we("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return Us;case this.InterpolantFactoryMethodBezier:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;os(this.settings)&&($c(this.settings.inTangents,e),$c(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Le("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Le("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Ld(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Us,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){const v=t[d+g];if(v!==t[h+g]||v!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,os(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function $c(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=vr;class qi extends dn{constructor(e,t,n){super(e,t,n)}}qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=xr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;class hu extends dn{constructor(e,t,n,i){super(e,t,n,i)}}hu.prototype.ValueTypeName="color";class Sr extends dn{constructor(e,t,n,i){super(e,t,n,i)}}Sr.prototype.ValueTypeName="number";class Vh extends Xi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Hn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Er extends dn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Vh(this.times,this.values,this.getValueSize(),e)}}Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;class Yi extends dn{constructor(e,t,n){super(e,t,n)}}Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=xr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends dn{constructor(e,t,n,i){super(e,t,n,i)}}vs.prototype.ValueTypeName="vector";class Gh{constructor(e="",t=-1,n=[],i=vd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Xh(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(dn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=Nh(c);c=Yc(c,1,u),l=Yc(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Sr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Wh(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sr;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return hu;case"quaternion":return Er;case"bool":case"boolean":return qi;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Xh(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wh(r.type);if(r.times===void 0){const n=[],i=[];Uh(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),os(r.settings)&&(t.settings={inTangents:ei(r.settings.inTangents,Float32Array),outTangents:ei(r.settings.outTangents,Float32Array)}),t}const On={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Kc(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Kc(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Kc(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class qh{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Yh=new qh;class $i{constructor(e){this.manager=e!==void 0?e:Yh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}$i.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class $h extends Error{constructor(e,t){super(e),this.response=t}}class fu extends $i{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=On.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:n,onError:i});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Nn[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){b();function b(){d.read().then(({done:w,value:y})=>{if(w)p.close();else{v+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let E=0,R=u.length;E<R;E++){const x=u[E];x.onProgress&&x.onProgress(S)}p.enqueue(y),b()}},w=>{p.error(w)})}}});return new Response(m)}else throw new $h(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{On.add(`file:${e}`,l);const u=Nn[e];delete Nn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Nn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Nn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Li=new WeakMap;class Kh extends $i{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=On.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Li.get(a);d===void 0&&(d=[],Li.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=Mr("img");function c(){u(),t&&t(this);const d=Li.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Li.delete(this),s.manager.itemEnd(e)}function l(d){u(),i&&i(d),On.remove(`image:${e}`);const h=Li.get(this)||[];for(let f=0;f<h.length;f++){const g=h[f];g.onError&&g.onError(d)}Li.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),On.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class ys extends $i{constructor(e){super(e)}load(e,t,n,i){const s=new Et,a=new Kh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class wr extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Zh extends wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const aa=new ke,Zc=new O,Jc=new O;class Uo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zc),Jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(aa,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;e.coordinateSystem===yr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qr=new O,jr=new Hn,pn=new O;class pu extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qr,jr,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,jr,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qr,jr,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,jr,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new O,Qc=new He,jc=new He;class Ct extends pu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Qc,jc),t.subVectors(jc,Qc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Jh extends Uo{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Vi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Fi extends wr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Jh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Qh extends Uo{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0}}class Ms extends wr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Wi extends pu{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jh extends Uo{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fo extends wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new jh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class pr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const oa=new WeakMap;class ef extends $i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=On.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{oa.has(a)===!0?(i&&i(oa.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return On.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),oa.set(c,l),On.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});On.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ii=-90,Di=1;class tf extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ct(Ii,Di,e,t);i.layers=this.layers,this.add(i);const s=new Ct(Ii,Di,e,t);s.layers=this.layers,this.add(s);const a=new Ct(Ii,Di,e,t);a.layers=this.layers,this.add(a);const o=new Ct(Ii,Di,e,t);o.layers=this.layers,this.add(o);const c=new Ct(Ii,Di,e,t);c.layers=this.layers,this.add(c);const l=new Ct(Ii,Di,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nf extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Oo="\\[\\]\\.:\\/",rf=new RegExp("["+Oo+"]","g"),ko="[^"+Oo+"]",sf="[^"+Oo.replace("\\.","")+"]",af=/((?:WC+[\/:])*)/.source.replace("WC",ko),of=/(WCOD+)?/.source.replace("WCOD",sf),cf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ko),lf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ko),uf=new RegExp("^"+af+of+cf+lf+"$"),df=["material","materials","bones","map"];class hf{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rf,"")}static parseTrackName(e){const t=uf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);df.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=hf;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Go=class Go{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Go.prototype.isMatrix2=!0;let el=Go;function tl(r,e,t,n){const i=ff(n);switch(t){case $l:return r*e;case _o:return r*e/i.components*i.byteLength;case xo:return r*e/i.components*i.byteLength;case mi:return r*e*2/i.components*i.byteLength;case vo:return r*e*2/i.components*i.byteLength;case Kl:return r*e*3/i.components*i.byteLength;case jt:return r*e*4/i.components*i.byteLength;case yo:return r*e*4/i.components*i.byteLength;case is:case rs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ss:case as:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Aa:case Ca:return Math.max(r,16)*Math.max(e,8)/4;case wa:case Ra:return Math.max(r,8)*Math.max(e,8)/2;case Pa:case La:case Da:case Na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ia:case ds:case Ua:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case za:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Va:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case qa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case $a:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Za:case Ja:case Qa:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ja:case eo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case hs:case to:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ff(r){switch(r){case qt:case Wl:return{byteLength:1,components:1};case gr:case Xl:case Tn:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case En:case po:case Qt:return{byteLength:4,components:1};case ql:case Yl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);function mu(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function pf(r){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=r.createBuffer();r.bindBuffer(c,h),r.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c.updateRanges;if(r.bindBuffer(l,o),d.length===0)r.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];r.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,op=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_p=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Np=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,em=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,um=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Em=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Om=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ym=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:_f,alphamap_pars_fragment:xf,alphatest_fragment:vf,alphatest_pars_fragment:yf,aomap_fragment:Mf,aomap_pars_fragment:bf,batching_pars_vertex:Sf,batching_vertex:Ef,begin_vertex:Tf,beginnormal_vertex:wf,bsdfs:Af,iridescence_fragment:Rf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:If,clipping_planes_vertex:Df,color_fragment:Nf,color_pars_fragment:Uf,color_pars_vertex:Ff,color_vertex:Of,common:kf,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:zf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Vf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Kf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:op,envmap_vertex:Jf,fog_vertex:Qf,fog_pars_vertex:jf,fog_fragment:ep,fog_pars_fragment:tp,gradientmap_pars_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:rp,lights_lambert_pars_fragment:sp,lights_pars_begin:ap,lights_toon_fragment:cp,lights_toon_pars_fragment:lp,lights_phong_fragment:up,lights_phong_pars_fragment:dp,lights_physical_fragment:hp,lights_physical_pars_fragment:fp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,lightprobes_pars_fragment:_p,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:Mp,map_fragment:bp,map_pars_fragment:Sp,map_particle_fragment:Ep,map_particle_pars_fragment:Tp,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Ap,morphinstance_vertex:Rp,morphcolor_vertex:Cp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Lp,morphtarget_vertex:Ip,normal_fragment_begin:Dp,normal_fragment_maps:Np,normal_pars_fragment:Up,normal_pars_vertex:Fp,normal_vertex:Op,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Bp,clearcoat_normal_fragment_maps:zp,clearcoat_pars_fragment:Hp,iridescence_pars_fragment:Vp,opaque_fragment:Gp,packing:Wp,premultiplied_alpha_fragment:Xp,project_vertex:qp,dithering_fragment:Yp,dithering_pars_fragment:$p,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Qp,shadowmap_vertex:jp,shadowmask_pars_fragment:em,skinbase_vertex:tm,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:rm,specularmap_fragment:sm,specularmap_pars_fragment:am,tonemapping_fragment:om,tonemapping_pars_fragment:cm,transmission_fragment:lm,transmission_pars_fragment:um,uv_pars_fragment:dm,uv_pars_vertex:hm,uv_vertex:fm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,backgroundCube_vert:_m,backgroundCube_frag:xm,cube_vert:vm,cube_frag:ym,depth_vert:Mm,depth_frag:bm,distance_vert:Sm,distance_frag:Em,equirect_vert:Tm,equirect_frag:wm,linedashed_vert:Am,linedashed_frag:Rm,meshbasic_vert:Cm,meshbasic_frag:Pm,meshlambert_vert:Lm,meshlambert_frag:Im,meshmatcap_vert:Dm,meshmatcap_frag:Nm,meshnormal_vert:Um,meshnormal_frag:Fm,meshphong_vert:Om,meshphong_frag:km,meshphysical_vert:Bm,meshphysical_frag:zm,meshtoon_vert:Hm,meshtoon_frag:Vm,points_vert:Gm,points_frag:Wm,shadow_vert:Xm,shadow_frag:qm,sprite_vert:Ym,sprite_frag:$m},he={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},_n={basic:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:kt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:kt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:kt([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:kt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:kt([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:kt([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:kt([he.common,he.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:kt([he.lights,he.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};_n.physical={uniforms:kt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const es={r:0,b:0,g:0},Km=new ke,gu=new De;gu.set(-1,0,0,0,1,0,0,0,1);function Zm(r,e,t,n,i,s){const a=new Pe(0);let o=i===!0?0:1,c,l,u=null,d=0,h=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){const y=b.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(b){let w=!1;const y=f(b);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(b,w){const y=f(w);y&&(y.isCubeTexture||y.mapping===Es)?(l===void 0&&(l=new mt(new si(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Gi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(gu),l.material.toneMapped=We.getTransfer(y.colorSpace)!==je,(u!==y||d!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new mt(new ws(2,2),new wn({name:"BackgroundMaterial",uniforms:Gi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=We.getTransfer(y.colorSpace)!==je,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,w){b.getRGB(es,uu(r)),t.buffers.color.setClear(es.r,es.g,es.b,w,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Jm(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(N,F,z,L,W){let H=!1;const X=d(N,L,z,F);s!==X&&(s=X,l(s.object)),H=f(N,L,z,W),H&&g(N,L,z,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(N,F,z,L),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return r.createVertexArray()}function l(N){return r.bindVertexArray(N)}function u(N){return r.deleteVertexArray(N)}function d(N,F,z,L){const W=L.wireframe===!0;let H=n[F.id];H===void 0&&(H={},n[F.id]=H);const X=N.isInstancedMesh===!0?N.id:0;let j=H[X];j===void 0&&(j={},H[X]=j);let Y=j[z.id];Y===void 0&&(Y={},j[z.id]=Y);let P=Y[W];return P===void 0&&(P=h(c()),Y[W]=P),P}function h(N){const F=[],z=[],L=[];for(let W=0;W<t;W++)F[W]=0,z[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:L,object:N,attributes:{},index:null}}function f(N,F,z,L){const W=s.attributes,H=F.attributes;let X=0;const j=z.getAttributes();for(const Y in j)if(j[Y].location>=0){const B=W[Y];let ie=H[Y];if(ie===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor)),B===void 0||B.attribute!==ie||ie&&B.data!==ie.data)return!0;X++}return s.attributesNum!==X||s.index!==L}function g(N,F,z,L){const W={},H=F.attributes;let X=0;const j=z.getAttributes();for(const Y in j)if(j[Y].location>=0){let B=H[Y];B===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(B=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(B=N.instanceColor));const ie={};ie.attribute=B,B&&B.data&&(ie.data=B.data),W[Y]=ie,X++}s.attributes=W,s.attributesNum=X,s.index=L}function v(){const N=s.newAttributes;for(let F=0,z=N.length;F<z;F++)N[F]=0}function m(N){p(N,0)}function p(N,F){const z=s.newAttributes,L=s.enabledAttributes,W=s.attributeDivisors;z[N]=1,L[N]===0&&(r.enableVertexAttribArray(N),L[N]=1),W[N]!==F&&(r.vertexAttribDivisor(N,F),W[N]=F)}function b(){const N=s.newAttributes,F=s.enabledAttributes;for(let z=0,L=F.length;z<L;z++)F[z]!==N[z]&&(r.disableVertexAttribArray(z),F[z]=0)}function w(N,F,z,L,W,H,X){X===!0?r.vertexAttribIPointer(N,F,z,W,H):r.vertexAttribPointer(N,F,z,L,W,H)}function y(N,F,z,L){v();const W=L.attributes,H=z.getAttributes(),X=F.defaultAttributeValues;for(const j in H){const Y=H[j];if(Y.location>=0){let P=W[j];if(P===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(P=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(P=N.instanceColor)),P!==void 0){const B=P.normalized,ie=P.itemSize,re=e.get(P);if(re===void 0)continue;const Re=re.buffer,Ne=re.type,Ye=re.bytesPerElement,Z=Ne===r.INT||Ne===r.UNSIGNED_INT||P.gpuType===po;if(P.isInterleavedBufferAttribute){const te=P.data,ve=te.stride,Ie=P.offset;if(te.isInstancedInterleavedBuffer){for(let _e=0;_e<Y.locationSize;_e++)p(Y.location+_e,te.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<Y.locationSize;_e++)m(Y.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let _e=0;_e<Y.locationSize;_e++)w(Y.location+_e,ie/Y.locationSize,Ne,B,ve*Ye,(Ie+ie/Y.locationSize*_e)*Ye,Z)}else{if(P.isInstancedBufferAttribute){for(let te=0;te<Y.locationSize;te++)p(Y.location+te,P.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let te=0;te<Y.locationSize;te++)m(Y.location+te);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let te=0;te<Y.locationSize;te++)w(Y.location+te,ie/Y.locationSize,Ne,B,ie*Ye,ie/Y.locationSize*te*Ye,Z)}}else if(X!==void 0){const B=X[j];if(B!==void 0)switch(B.length){case 2:r.vertexAttrib2fv(Y.location,B);break;case 3:r.vertexAttrib3fv(Y.location,B);break;case 4:r.vertexAttrib4fv(Y.location,B);break;default:r.vertexAttrib1fv(Y.location,B)}}}}b()}function S(){T();for(const N in n){const F=n[N];for(const z in F){const L=F[z];for(const W in L){const H=L[W];for(const X in H)u(H[X].object),delete H[X];delete L[W]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;const F=n[N.id];for(const z in F){const L=F[z];for(const W in L){const H=L[W];for(const X in H)u(H[X].object),delete H[X];delete L[W]}}delete n[N.id]}function R(N){for(const F in n){const z=n[F];for(const L in z){const W=z[L];if(W[N.id]===void 0)continue;const H=W[N.id];for(const X in H)u(H[X].object),delete H[X];delete W[N.id]}}}function x(N){for(const F in n){const z=n[F],L=N.isInstancedMesh===!0?N.id:0,W=z[L];if(W!==void 0){for(const H in W){const X=W[H];for(const j in X)u(X[j].object),delete X[j];delete W[H]}delete z[L],Object.keys(z).length===0&&delete n[F]}}}function T(){C(),a=!0,s!==i&&(s=i,l(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Qm(r,e,t){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(r.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function jm(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==jt&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==qt&&R!==Qt&&!x&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(we("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:y,maxSamples:S,samples:E}}function e0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new jn,o=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const b=s?0:n,w=b*4;let y=p.clippingState||null;c.value=y,y=u(g,h,w,f);for(let S=0;S!==w;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=f;w!==v;++w,y+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Oi=4,t0=6,n0=20,i0=256,rr=new Wi,nl=new Pe;let ca=null,la=0,ua=0,da=!1;const r0=new O,di=new O;class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=r0}=s;ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ca,la,ua),this._renderer.xr.enabled=da,e.scissorTest=!1,Ni(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:Tn,format:jt,colorSpace:Yt,depthBuffer:!1},i=rl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=s0(s)),this._blurMaterial=o0(s,e,t),this._ggxMaterial=a0(s,e,t)}return i}_compileMaterial(e){const t=new mt(new Nt,e);this._renderer.compile(t,rr)}_sceneToCubeUV(e,t,n,i,s){const c=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(nl),d.toneMapping=Mn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new si,new ti({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(nl),p=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));const S=this._cubeSize;Ni(i,y*S,w>2?S:0,S,S),d.setRenderTarget(i),p&&d.render(v,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===pi||e.mapping===Hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ni(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,rr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Oi?n-g+Oi:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Ni(s,m,p,3*v,2*v),i.setRenderTarget(s),i.render(o,rr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Ni(e,m,p,3*v,2*v),i.setRenderTarget(e),i.render(o,rr)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;const u=this._sizeLods[i],d=3*u*(i>this._lodMax-Oi?i-this._lodMax+Oi:0),h=4*(this._cubeSize-u);Ni(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(c,rr)}}function s0(r){const e=[],t=[];let n=r;const i=r-Oi+1+t0;for(let s=0;s<i;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),v=new Float32Array(f*h*d);for(let p=0;p<d;p++){const b=p%3*2/3-1,w=p>2?0:-1,y=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];g.set(y,f*h*p);for(let S=0;S<h;S++){const E=u[S*2]*2-1,R=u[S*2+1]*2-1;p===0?di.set(1,R,E):p===1?di.set(-E,1,-R):p===2?di.set(-E,R,1):p===3?di.set(-1,R,-E):p===4?di.set(-E,-1,R):di.set(E,R,-1),di.toArray(v,(p*h+S)*f)}}const m=new Nt;m.setAttribute("position",new Vt(g,f)),m.setAttribute("outputDirection",new Vt(v,f)),t.push(new mt(m,null)),n>Oi&&n--}return{lodMeshes:t,sizeLods:e}}function rl(r,e,t){const n=new un(r,e,t);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ni(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function a0(r,e,t){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:i0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:As(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function o0(r,e,t){return new wn({name:"SphericalGaussianBlur",defines:{SAMPLES:n0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:As(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function sl(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:As(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function al(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:As(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function As(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class _u extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new cu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new si(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:kn});s.uniforms.tEquirect.value=t;const a=new mt(i,s),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=St),new tf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function c0(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Ds||f===Ns)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new _u(g.height);return v.fromEquirectangularTexture(r,h),e.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===Ds||f===Ns,v=f===pi||f===Hi;if(g||v){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new il(r)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const b=h.image;return g&&b&&b.height>0||v&&b&&c(b)?(n===null&&(n=new il(r)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Ds?h.mapping=pi:f===Ns&&(h.mapping=Hi),h}function c(h){let f=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function l0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ki("WebGLRenderer: "+n+" extension not supported."),i}}}function u0(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],r.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const b=f.array;v=f.version;for(let w=0,y=b.length;w<y;w+=3){const S=b[w+0],E=b[w+1],R=b[w+2];h.push(S,E,E,R,R,S)}}else{const b=g.array;v=g.version;for(let w=0,y=b.length/3-1;w<y;w+=3){const S=w+0,E=w+1,R=w+2;h.push(S,E,E,R,R,S)}}const m=new(g.count>=65535?iu:nu)(h,1);m.version=v;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function d0(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function l(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function h0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function f0(r,e,t){const n=new WeakMap,i=new it;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let w=0;f===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let y=o.attributes.position.count*w,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*S*4*d),R=new jl(E,y,S,d);R.type=Qt,R.needsUpdate=!0;const x=w*4;for(let C=0;C<d;C++){const N=m[C],F=p[C],z=b[C],L=y*S*4*C;for(let W=0;W<N.count;W++){const H=W*x;f===!0&&(i.fromBufferAttribute(N,W),E[L+H+0]=i.x,E[L+H+1]=i.y,E[L+H+2]=i.z,E[L+H+3]=0),g===!0&&(i.fromBufferAttribute(F,W),E[L+H+4]=i.x,E[L+H+5]=i.y,E[L+H+6]=i.z,E[L+H+7]=0),v===!0&&(i.fromBufferAttribute(z,W),E[L+H+8]=i.x,E[L+H+9]=i.y,E[L+H+10]=i.z,E[L+H+11]=z.itemSize===4?i.w:1)}}h={count:d,texture:R,size:new He(y,S)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function p0(r,e,t,n,i){let s=new WeakMap;function a(l){const u=i.render.frame,d=l.geometry,h=e.get(l,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const m0={[Fl]:"LINEAR_TONE_MAPPING",[Ol]:"REINHARD_TONE_MAPPING",[kl]:"CINEON_TONE_MAPPING",[fo]:"ACES_FILMIC_TONE_MAPPING",[zl]:"AGX_TONE_MAPPING",[Hl]:"NEUTRAL_TONE_MAPPING",[Bl]:"CUSTOM_TONE_MAPPING"};function g0(r,e,t,n,i,s){const a=new un(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Nt;l.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new yt([0,2,0,0,2,0],2));const u=new Lh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new mt(l,u),h=new Wi(-1,1,1,-1,0,1);let f=null,g=null,v=!1,m,p=null,b=[],w=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),c!==null&&c.setSize(y,S);for(let E=0;E<b.length;E++){const R=b[E];R.setSize&&R.setSize(y,S)}},this.setEffects=function(y){b=y,w=b.length>0&&b[0].isRenderPass===!0;const S=a.width,E=a.height;b.length>0&&o===null&&(o=new un(S,E,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),c=new un(S,E,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<b.length;R++){const x=b[R];x.setSize&&x.setSize(S,E)}},this.begin=function(y,S){if(v||y.toneMapping===Mn&&b.length===0)return!1;if(p=S,S!==null){const E=S.width,R=S.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return w===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Mn,!0},this.hasRenderPass=function(){return w},this.end=function(y,S){y.toneMapping=m,v=!0;let E=a,R=o;for(let x=0;x<b.length;x++){const T=b[x];T.enabled!==!1&&(T.render(y,R,E,S),T.needsSwap!==!1&&(E=R,R=R===o?c:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,u.defines={},We.getTransfer(f)===je&&(u.defines.SRGB_TRANSFER="");const x=m0[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(p),y.render(d,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const xu=new Et,so=new br(1,1),vu=new jl,yu=new nh,Mu=new cu,ol=[],cl=[],ll=new Float32Array(16),ul=new Float32Array(9),dl=new Float32Array(4);function Ki(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ol[i];if(s===void 0&&(s=new Float32Array(i),ol[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Rs(r,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function _0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function x0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2fv(this.addr,e),wt(t,e)}}function v0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;r.uniform3fv(this.addr,e),wt(t,e)}}function y0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4fv(this.addr,e),wt(t,e)}}function M0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;dl.set(n),r.uniformMatrix2fv(this.addr,!1,dl),wt(t,n)}}function b0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;ul.set(n),r.uniformMatrix3fv(this.addr,!1,ul),wt(t,n)}}function S0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;ll.set(n),r.uniformMatrix4fv(this.addr,!1,ll),wt(t,n)}}function E0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function T0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2iv(this.addr,e),wt(t,e)}}function w0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3iv(this.addr,e),wt(t,e)}}function A0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4iv(this.addr,e),wt(t,e)}}function R0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function C0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2uiv(this.addr,e),wt(t,e)}}function P0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3uiv(this.addr,e),wt(t,e)}}function L0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4uiv(this.addr,e),wt(t,e)}}function I0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(so.compareFunction=t.isReversedDepthBuffer()?bo:Mo,s=so):s=xu,t.setTexture2D(e||s,i)}function D0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yu,i)}function N0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Mu,i)}function U0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vu,i)}function F0(r){switch(r){case 5126:return _0;case 35664:return x0;case 35665:return v0;case 35666:return y0;case 35674:return M0;case 35675:return b0;case 35676:return S0;case 5124:case 35670:return E0;case 35667:case 35671:return T0;case 35668:case 35672:return w0;case 35669:case 35673:return A0;case 5125:return R0;case 36294:return C0;case 36295:return P0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return U0}}function O0(r,e){r.uniform1fv(this.addr,e)}function k0(r,e){const t=Ki(e,this.size,2);r.uniform2fv(this.addr,t)}function B0(r,e){const t=Ki(e,this.size,3);r.uniform3fv(this.addr,t)}function z0(r,e){const t=Ki(e,this.size,4);r.uniform4fv(this.addr,t)}function H0(r,e){const t=Ki(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function V0(r,e){const t=Ki(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function G0(r,e){const t=Ki(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function W0(r,e){r.uniform1iv(this.addr,e)}function X0(r,e){r.uniform2iv(this.addr,e)}function q0(r,e){r.uniform3iv(this.addr,e)}function Y0(r,e){r.uniform4iv(this.addr,e)}function $0(r,e){r.uniform1uiv(this.addr,e)}function K0(r,e){r.uniform2uiv(this.addr,e)}function Z0(r,e){r.uniform3uiv(this.addr,e)}function J0(r,e){r.uniform4uiv(this.addr,e)}function Q0(r,e,t){const n=this.cache,i=e.length,s=Rs(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=so:a=xu;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function j0(r,e,t){const n=this.cache,i=e.length,s=Rs(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||yu,s[a])}function eg(r,e,t){const n=this.cache,i=e.length,s=Rs(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Mu,s[a])}function tg(r,e,t){const n=this.cache,i=e.length,s=Rs(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||vu,s[a])}function ng(r){switch(r){case 5126:return O0;case 35664:return k0;case 35665:return B0;case 35666:return z0;case 35674:return H0;case 35675:return V0;case 35676:return G0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return q0;case 35669:case 35673:return Y0;case 5125:return $0;case 36294:return K0;case 36295:return Z0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return tg}}class ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F0(t.type)}}class rg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ng(t.type)}}class sg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function hl(r,e){r.seq.push(e),r.map[e.id]=e}function ag(r,e,t){const n=r.name,i=n.length;for(ha.lastIndex=0;;){const s=ha.exec(n),a=ha.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){hl(t,l===void 0?new ig(o,r,e):new rg(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new sg(o),hl(t,d)),t=d}}}class cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);ag(o,c,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function fl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const og=37297;let cg=0;function lg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const pl=new De;function ug(r){We._getMatrix(pl,We.workingColorSpace,r);const e=`mat3( ${pl.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(r)){case fs:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ml(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+lg(r.getShaderSource(e),o)}else return s}function dg(r,e){const t=ug(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const hg={[Fl]:"Linear",[Ol]:"Reinhard",[kl]:"Cineon",[fo]:"ACESFilmic",[zl]:"AgX",[Hl]:"Neutral",[Bl]:"Custom"};function fg(r,e){const t=hg[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ts=new O;function pg(){We.getLuminanceCoefficients(ts);const r=ts.x.toFixed(4),e=ts.y.toFixed(4),t=ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function gg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _g(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function lr(r){return r!==""}function gl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(r){return r.replace(xg,yg)}const vg=new Map;function yg(r,e){let t=Oe[e];if(t===void 0){const n=vg.get(e);if(n!==void 0)t=Oe[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ao(t)}const Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xl(r){return r.replace(Mg,bg)}function bg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function vl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Sg={[ur]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function Eg(r){return Sg[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Tg={[pi]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE_UV"};function wg(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Tg[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ag={[Hi]:"ENVMAP_MODE_REFRACTION"};function Rg(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Ag[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cg={[Ul]:"ENVMAP_BLENDING_MULTIPLY",[gd]:"ENVMAP_BLENDING_MIX",[_d]:"ENVMAP_BLENDING_ADD"};function Pg(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Cg[r.combine]||"ENVMAP_BLENDING_NONE"}function Lg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ig(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Eg(t),l=wg(t),u=Rg(t),d=Pg(t),h=Lg(t),f=mg(t),g=gg(s),v=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),p.length>0&&(p+=`
`)):(m=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),p=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Mn?fg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,dg("linearToOutputTexel",t.outputColorSpace),pg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=ao(a),a=gl(a,t),a=_l(a,t),o=ao(o),o=gl(o,t),o=_l(o,t),a=xl(a),o=xl(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+m+a,y=b+p+o,S=fl(i,i.VERTEX_SHADER,w),E=fl(i,i.FRAGMENT_SHADER,y);i.attachShader(v,S),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(N){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(v)||"",z=i.getShaderInfoLog(S)||"",L=i.getShaderInfoLog(E)||"",W=F.trim(),H=z.trim(),X=L.trim();let j=!0,Y=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,S,E);else{const P=ml(i,S,"vertex"),B=ml(i,E,"fragment");Le("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+P+`
`+B)}else W!==""?we("WebGLProgram: Program Info Log:",W):(H===""||X==="")&&(Y=!1);Y&&(N.diagnostics={runnable:j,programLog:W,vertexShader:{log:H,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(S),i.deleteShader(E),x=new cs(i,v),T=_g(i,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(v,og)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=E,this}let Dg=0;class Ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ug(e),t.set(e,n)),n}}class Ug{constructor(e){this.id=Dg++,this.code=e,this.usedTimes=0}}function Fg(r){return r===mi||r===ds||r===hs}function Og(r,e,t,n,i,s){const a=new eu,o=new Ng,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,T,C,N,F,z){const L=N.fog,W=F.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||H,X),Y=j&&j.mapping===Es?j.image.height:null,P=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&we("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const B=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=B!==void 0?B.length:0;let re=0;W.morphAttributes.position!==void 0&&(re=1),W.morphAttributes.normal!==void 0&&(re=2),W.morphAttributes.color!==void 0&&(re=3);let Re,Ne,Ye,Z;if(P){const at=_n[P];Re=at.vertexShader,Ne=at.fragmentShader}else{Re=x.vertexShader,Ne=x.fragmentShader;const at=o.getVertexShaderStage(x),Ze=o.getFragmentShaderStage(x);o.update(x,at,Ze),Ye=at.id,Z=Ze.id}const te=r.getRenderTarget(),ve=r.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,_e=F.isBatchedMesh===!0,Be=!!x.map,Mt=!!x.matcap,Ve=!!j,Ke=!!x.aoMap,st=!!x.lightMap,qe=!!x.bumpMap&&x.wireframe===!1,lt=!!x.normalMap,At=!!x.displacementMap,Bt=!!x.emissiveMap,ht=!!x.metalnessMap,_t=!!x.roughnessMap,U=x.anisotropy>0,Pt=x.clearcoat>0,Qe=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,k=x.sheen>0,q=x.transmission>0,K=U&&!!x.anisotropyMap,se=Pt&&!!x.clearcoatMap,ae=Pt&&!!x.clearcoatNormalMap,J=Pt&&!!x.clearcoatRoughnessMap,ee=_&&!!x.iridescenceMap,oe=_&&!!x.iridescenceThicknessMap,Ee=k&&!!x.sheenColorMap,de=k&&!!x.sheenRoughnessMap,ce=!!x.specularMap,Te=!!x.specularColorMap,Ce=!!x.specularIntensityMap,Ue=q&&!!x.transmissionMap,D=q&&!!x.thicknessMap,le=!!x.gradientMap,Q=!!x.alphaMap,ue=x.alphaTest>0,me=!!x.alphaHash,ne=!!x.extensions;let Ae=Mn;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ae=r.toneMapping);const be={shaderID:P,shaderType:x.type,shaderName:x.name,vertexShader:Re,fragmentShader:Ne,defines:x.defines,customVertexShaderID:Ye,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:_e,batchingColor:_e&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:Mt,envMap:Ve,envMapMode:Ve&&j.mapping,envMapCubeUVHeight:Y,aoMap:Ke,lightMap:st,bumpMap:qe,normalMap:lt,displacementMap:At,emissiveMap:Bt,normalMapObjectSpace:lt&&x.normalMapType===bd,normalMapTangentSpace:lt&&x.normalMapType===io,packedNormalMap:lt&&x.normalMapType===io&&Fg(x.normalMap.format),metalnessMap:ht,roughnessMap:_t,anisotropy:U,anisotropyMap:K,clearcoat:Pt,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:J,dispersion:Qe,retroreflection:A,iridescence:_,iridescenceMap:ee,iridescenceThicknessMap:oe,sheen:k,sheenColorMap:Ee,sheenRoughnessMap:de,specularMap:ce,specularColorMap:Te,specularIntensityMap:Ce,transmission:q,transmissionMap:Ue,thicknessMap:D,gradientMap:le,opaque:x.transparent===!1&&x.blending===dr&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:ue,alphaHash:me,combine:x.combine,mapUv:Be&&g(x.map.channel),aoMapUv:Ke&&g(x.aoMap.channel),lightMapUv:st&&g(x.lightMap.channel),bumpMapUv:qe&&g(x.bumpMap.channel),normalMapUv:lt&&g(x.normalMap.channel),displacementMapUv:At&&g(x.displacementMap.channel),emissiveMapUv:Bt&&g(x.emissiveMap.channel),metalnessMapUv:ht&&g(x.metalnessMap.channel),roughnessMapUv:_t&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:se&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(x.sheenRoughnessMap.channel),specularMapUv:ce&&g(x.specularMap.channel),specularColorMapUv:Te&&g(x.specularColorMap.channel),specularIntensityMapUv:Ce&&g(x.specularIntensityMap.channel),transmissionMapUv:Ue&&g(x.transmissionMap.channel),thicknessMapUv:D&&g(x.thicknessMap.channel),alphaMapUv:Q&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(lt||U),vertexNormals:!!W.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Be||Q),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&lt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:re,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===je,decodeVideoTextureEmissive:Bt&&x.emissiveMap.isVideoTexture===!0&&We.getTransfer(x.emissiveMap.colorSpace)===je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xn,flipSided:x.side===Ht,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(T,x),b(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const T=f[x.type];let C;if(T){const N=_n[T];C=Rh.clone(N.uniforms)}else C=x.uniforms;return C}function y(x,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new Ig(r,T,x,i),l.push(C),u.set(T,C)),C}function S(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:S,releaseShaderCache:E,programs:l,dispose:R}}function kg(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Bg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function yl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ml(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,v,m,p){let b=r[e];return b===void 0?(b={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},r[e]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=g,b.materialVariant=a(h),b.groupOrder=v,b.renderOrder=h.renderOrder,b.z=m,b.group=p),e++,b}function c(h,f,g,v,m,p,b){b.reversedDepth===!0&&(m=-m);const w=o(h,f,g,v,m,p);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):t.push(w)}function l(h,f,g,v,m,p){const b=o(h,f,g,v,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):t.unshift(b)}function u(h,f){t.length>1&&t.sort(h||Bg),n.length>1&&n.sort(f||yl),i.length>1&&i.sort(f||yl)}function d(){for(let h=e,f=r.length;h<f;h++){const g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:d,sort:u}}function zg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ml,r.set(n,[a])):i>=s.length?(a=new Ml,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Hg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Pe};break;case"SpotLight":t={position:new O,direction:new O,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function Vg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Gg=0;function Wg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Xg(r){const e=new Hg,t=Vg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const i=new O,s=new ke,a=new ke;function o(l){let u=0,d=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,b=0,w=0,y=0,S=0,E=0,R=0,x=0,T=0,C=0;l.sort(Wg);for(let F=0,z=l.length;F<z;F++){const L=l[F],W=L.color,H=L.intensity,X=L.distance;let j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===mi?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=W.r*H,d+=W.g*H,h+=W.b*H;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],H);C++}else if(L.isSunLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const P=L.shadow,B=t.get(L);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[g]=B,n.sunShadowMap[g]=j;const ie=P.getViewportCount();for(let re=0;re<ie;re++)n.sunShadowMatrix[v+re]=P.getMatrix(re),n.sunShadowCascade[v+re]=P._cascadeData[re];v+=ie,g++}n.sun[f]=Y,f++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const P=L.shadow,B=t.get(L);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=Y,m++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(W).multiplyScalar(H),Y.distance=X,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[b]=Y;const P=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,P.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[b]=P.matrix,L.castShadow){const B=t.get(L);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,n.spotShadow[b]=B,n.spotShadowMap[b]=j,R++}b++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(W).multiplyScalar(H),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=Y,w++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const P=L.shadow,B=t.get(L);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,B.shadowCameraNear=P.camera.near,B.shadowCameraFar=P.camera.far,n.pointShadow[p]=B,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=L.shadow.matrix,E++}n.point[p]=Y,p++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(H),Y.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[y]=Y,y++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==b||N.rectAreaLength!==w||N.hemiLength!==y||N.numSunShadows!==g||N.numDirectionalShadows!==S||N.numPointShadows!==E||N.numSpotShadows!==R||N.numSpotMaps!==x||N.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=w,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=b,N.rectAreaLength=w,N.hemiLength=y,N.numSunShadows=g,N.numDirectionalShadows=S,N.numPointShadows=E,N.numSpotShadows=R,N.numSpotMaps=x,N.numLightProbes=C,n.version=Gg++)}function c(l,u){let d=0,h=0,f=0,g=0,v=0,m=0;const p=u.matrixWorldInverse;for(let b=0,w=l.length;b<w;b++){const y=l[b];if(y.isSunLight){const S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),d++}else if(y.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(y.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const S=n.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function bl(r){const e=new Xg(r),t=[],n=[],i=[];function s(h){d.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){i.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function qg(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new bl(r),e.set(i,[o])):s>=a.length?(o=new bl(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kg=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Zg=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Sl=new ke,sr=new O,fa=new O;function Jg(r,e,t){let n=new Co;const i=new He,s=new He,a=new it,o=new Ih,c=new Dh,l={},u=t.maxTextureSize,d={[ii]:Ht,[Ht]:ii,[xn]:xn},h=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Yg,fragmentShader:$g}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new mt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let p=this.type;this.render=function(E,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Ju&&(we("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ur);const T=r.getRenderTarget(),C=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),F=r.state;F.setBlending(kn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=p!==this.type;z&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=E.length;L<W;L++){const H=E[L],X=H.shadow;if(X===void 0){we("WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const j=X.getFrameExtents();i.multiply(j),s.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,X.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,X.mapSize.y=s.y));const Y=r.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===or){if(H.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new un(i.x,i.y,{format:mi,type:Tn,minFilter:St,magFilter:St,generateMipmaps:!1}),X.map.texture.name=H.name+".shadowMap",X.map.depthTexture=new br(i.x,i.y,Qt),X.map.depthTexture.name=H.name+".shadowMapDepth",X.map.depthTexture.format=zn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=bt,X.map.depthTexture.magFilter=bt}else H.isPointLight?(X.map=new _u(i.x),X.map.depthTexture=new wh(i.x,En)):(X.map=new un(i.x,i.y),X.map.depthTexture=new br(i.x,i.y,En)),X.map.depthTexture.name=H.name+".shadowMap",X.map.depthTexture.format=zn,this.type===ur?(X.map.depthTexture.compareFunction=Y?bo:Mo,X.map.depthTexture.minFilter=St,X.map.depthTexture.magFilter=St):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=bt,X.map.depthTexture.magFilter=bt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);const P=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();H.isPointLight!==!0&&X.updateMatrices(H,x);for(let B=0;B<P;B++){const ie=X.getCamera(B);if(H.isPointLight){const re=X.camera,Re=X.matrix,Ne=H.distance||re.far;Ne!==re.far&&(re.far=Ne,re.updateProjectionMatrix()),sr.setFromMatrixPosition(H.matrixWorld),re.position.copy(sr),fa.copy(re.position),fa.add(Kg[B]),re.up.copy(Zg[B]),re.lookAt(fa),re.updateMatrixWorld(),Re.makeTranslation(-sr.x,-sr.y,-sr.z),Sl.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Sl,re.coordinateSystem,re.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,B),r.clear();else{B===0&&(r.setRenderTarget(X.map),r.clear());const re=X.getViewport(B);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),F.viewport(a)}n=X.getFrustum(B),y(R,x,ie,H,this.type)}X.isPointLightShadow!==!0&&this.type===or&&b(X,x),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(T,C,N)};function b(E,R){const x=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new un(i.x,i.y,{format:mi,type:Tn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(R,null,x,h,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(R,null,x,f,v,null)}function w(E,R,x,T){let C=null;const N=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=x.isPointLight===!0?c:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=C.uuid,z=R.uuid;let L=l[F];L===void 0&&(L={},l[F]=L);let W=L[z];W===void 0&&(W=C.clone(),L[z]=W,R.addEventListener("dispose",S)),C=W}if(C.visible=R.visible,C.wireframe=R.wireframe,T===or?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=r.properties.get(C);F.light=x}return C}function y(E,R,x,T,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===or)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const z=e.update(E),L=E.material;if(Array.isArray(L)){const W=z.groups;for(let H=0,X=W.length;H<X;H++){const j=W[H],Y=L[j.materialIndex];if(Y&&Y.visible){const P=w(E,Y,T,C);E.onBeforeShadow(r,E,R,x,z,P,j),r.renderBufferDirect(x,null,z,P,E,j),E.onAfterShadow(r,E,R,x,z,P,j)}}}else if(L.visible){const W=w(E,L,T,C);E.onBeforeShadow(r,E,R,x,z,W,null),r.renderBufferDirect(x,null,z,W,E,null),E.onAfterShadow(r,E,R,x,z,W,null)}}const F=E.children;for(let z=0,L=F.length;z<L;z++)y(F[z],R,x,T,C)}function S(E){E.target.removeEventListener("dispose",S);for(const x in l){const T=l[x],C=E.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Qg(r,e){function t(){let D=!1;const le=new it;let Q=null;const ue=new it(0,0,0,0);return{setMask:function(me){Q!==me&&!D&&(r.colorMask(me,me,me,me),Q=me)},setLocked:function(me){D=me},setClear:function(me,ne,Ae,be,at){at===!0&&(me*=be,ne*=be,Ae*=be),le.set(me,ne,Ae,be),ue.equals(le)===!1&&(r.clearColor(me,ne,Ae,be),ue.copy(le))},reset:function(){D=!1,Q=null,ue.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,Q=null,ue=null,me=null;return{setReversed:function(ne){if(le!==ne){const Ae=e.get("EXT_clip_control");ne?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),le=ne;const be=me;me=null,this.setClear(be)}},getReversed:function(){return le},setTest:function(ne){ne?te(r.DEPTH_TEST):ve(r.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!D&&(r.depthMask(ne),Q=ne)},setFunc:function(ne){if(le&&(ne=Nd[ne]),ue!==ne){switch(ne){case va:r.depthFunc(r.NEVER);break;case ya:r.depthFunc(r.ALWAYS);break;case Ma:r.depthFunc(r.LESS);break;case mr:r.depthFunc(r.LEQUAL);break;case ba:r.depthFunc(r.EQUAL);break;case Sa:r.depthFunc(r.GEQUAL);break;case Ea:r.depthFunc(r.GREATER);break;case Ta:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ue=ne}},setLocked:function(ne){D=ne},setClear:function(ne){me!==ne&&(me=ne,le&&(ne=1-ne),r.clearDepth(ne))},reset:function(){D=!1,Q=null,ue=null,me=null,le=!1}}}function i(){let D=!1,le=null,Q=null,ue=null,me=null,ne=null,Ae=null,be=null,at=null;return{setTest:function(Ze){D||(Ze?te(r.STENCIL_TEST):ve(r.STENCIL_TEST))},setMask:function(Ze){le!==Ze&&!D&&(r.stencilMask(Ze),le=Ze)},setFunc:function(Ze,tn,hn){(Q!==Ze||ue!==tn||me!==hn)&&(r.stencilFunc(Ze,tn,hn),Q=Ze,ue=tn,me=hn)},setOp:function(Ze,tn,hn){(ne!==Ze||Ae!==tn||be!==hn)&&(r.stencilOp(Ze,tn,hn),ne=Ze,Ae=tn,be=hn)},setLocked:function(Ze){D=Ze},setClear:function(Ze){at!==Ze&&(r.clearStencil(Ze),at=Ze)},reset:function(){D=!1,le=null,Q=null,ue=null,me=null,ne=null,Ae=null,be=null,at=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,b=null,w=null,y=null,S=null,E=null,R=null,x=new Pe(0,0,0),T=0,C=!1,N=null,F=null,z=null,L=null,W=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=j>=2);let P=null,B={};const ie=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),Re=new it().fromArray(ie),Ne=new it().fromArray(re);function Ye(D,le,Q,ue){const me=new Uint8Array(4),ne=r.createTexture();r.bindTexture(D,ne),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ae=0;Ae<Q;Ae++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,ue,0,r.RGBA,r.UNSIGNED_BYTE,me):r.texImage2D(le+Ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,me);return ne}const Z={};Z[r.TEXTURE_2D]=Ye(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(mr),qe(!1),lt(ac),te(r.CULL_FACE),Ke(kn);function te(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function ve(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Ie(D,le){return h[D]!==le?(r.bindFramebuffer(D,le),h[D]=le,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=le),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=le),!0):!1}function _e(D,le){let Q=g,ue=!1;if(D){Q=f.get(le),Q===void 0&&(Q=[],f.set(le,Q));const me=D.textures;if(Q.length!==me.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,Ae=me.length;ne<Ae;ne++)Q[ne]=r.COLOR_ATTACHMENT0+ne;Q.length=me.length,ue=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,ue=!0);ue&&r.drawBuffers(Q)}function Be(D){return v!==D?(r.useProgram(D),v=D,!0):!1}const Mt={[Ui]:r.FUNC_ADD,[ju]:r.FUNC_SUBTRACT,[ed]:r.FUNC_REVERSE_SUBTRACT};Mt[td]=r.MIN,Mt[nd]=r.MAX;const Ve={[id]:r.ZERO,[rd]:r.ONE,[sd]:r.SRC_COLOR,[Dl]:r.SRC_ALPHA,[dd]:r.SRC_ALPHA_SATURATE,[ld]:r.DST_COLOR,[od]:r.DST_ALPHA,[ad]:r.ONE_MINUS_SRC_COLOR,[Nl]:r.ONE_MINUS_SRC_ALPHA,[ud]:r.ONE_MINUS_DST_COLOR,[cd]:r.ONE_MINUS_DST_ALPHA,[hd]:r.CONSTANT_COLOR,[fd]:r.ONE_MINUS_CONSTANT_COLOR,[pd]:r.CONSTANT_ALPHA,[md]:r.ONE_MINUS_CONSTANT_ALPHA};function Ke(D,le,Q,ue,me,ne,Ae,be,at,Ze){if(D===kn){m===!0&&(ve(r.BLEND),m=!1);return}if(m===!1&&(te(r.BLEND),m=!0),D!==Qu){if(D!==p||Ze!==C){if((b!==Ui||S!==Ui)&&(r.blendEquation(r.FUNC_ADD),b=Ui,S=Ui),Ze)switch(D){case dr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case oc:r.blendFunc(r.ONE,r.ONE);break;case cc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Le("WebGLState: Invalid blending: ",D);break}else switch(D){case dr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case oc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case cc:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lc:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",D);break}w=null,y=null,E=null,R=null,x.set(0,0,0),T=0,p=D,C=Ze}return}me=me||le,ne=ne||Q,Ae=Ae||ue,(le!==b||me!==S)&&(r.blendEquationSeparate(Mt[le],Mt[me]),b=le,S=me),(Q!==w||ue!==y||ne!==E||Ae!==R)&&(r.blendFuncSeparate(Ve[Q],Ve[ue],Ve[ne],Ve[Ae]),w=Q,y=ue,E=ne,R=Ae),(be.equals(x)===!1||at!==T)&&(r.blendColor(be.r,be.g,be.b,at),x.copy(be),T=at),p=D,C=!1}function st(D,le){D.side===xn?ve(r.CULL_FACE):te(r.CULL_FACE);let Q=D.side===Ht;le&&(Q=!Q),qe(Q),D.blending===dr&&D.transparent===!1?Ke(kn):Ke(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ue=D.stencilWrite;o.setTest(ue),ue&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Bt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):ve(r.SAMPLE_ALPHA_TO_COVERAGE)}function qe(D){N!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),N=D)}function lt(D){D!==Ku?(te(r.CULL_FACE),D!==F&&(D===ac?r.cullFace(r.BACK):D===Zu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ve(r.CULL_FACE),F=D}function At(D){D!==z&&(X&&r.lineWidth(D),z=D)}function Bt(D,le,Q){D?(te(r.POLYGON_OFFSET_FILL),(L!==le||W!==Q)&&(L=le,W=Q,a.getReversed()&&(le=-le),r.polygonOffset(le,Q))):ve(r.POLYGON_OFFSET_FILL)}function ht(D){D?te(r.SCISSOR_TEST):ve(r.SCISSOR_TEST)}function _t(D){D===void 0&&(D=r.TEXTURE0+H-1),P!==D&&(r.activeTexture(D),P=D)}function U(D,le,Q){Q===void 0&&(P===null?Q=r.TEXTURE0+H-1:Q=P);let ue=B[Q];ue===void 0&&(ue={type:void 0,texture:void 0},B[Q]=ue),(ue.type!==D||ue.texture!==le)&&(P!==Q&&(r.activeTexture(Q),P=Q),r.bindTexture(D,le||Z[D]),ue.type=D,ue.texture=le)}function Pt(){const D=B[P];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Qe(){try{r.compressedTexImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function A(){try{r.compressedTexImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function _(){try{r.texSubImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function k(){try{r.texSubImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function K(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function se(){try{r.texStorage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function ae(){try{r.texStorage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function J(){try{r.texImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function ee(){try{r.texImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function oe(D){return d[D]!==void 0?d[D]:r.getParameter(D)}function Ee(D,le){d[D]!==le&&(r.pixelStorei(D,le),d[D]=le)}function de(D){Re.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Re.copy(D))}function ce(D){Ne.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ne.copy(D))}function Te(D,le){let Q=l.get(le);Q===void 0&&(Q=new WeakMap,l.set(le,Q));let ue=Q.get(D);ue===void 0&&(ue=r.getUniformBlockIndex(le,D.name),Q.set(D,ue))}function Ce(D,le){const ue=l.get(le).get(D);c.get(le)!==ue&&(r.uniformBlockBinding(le,ue,D.__bindingPointIndex),c.set(le,ue))}function Ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,B={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,b=null,w=null,y=null,S=null,E=null,R=null,x=new Pe(0,0,0),T=0,C=!1,N=null,F=null,z=null,L=null,W=null,Re.set(0,0,r.canvas.width,r.canvas.height),Ne.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:ve,bindFramebuffer:Ie,drawBuffers:_e,useProgram:Be,setBlending:Ke,setMaterial:st,setFlipSided:qe,setCullFace:lt,setLineWidth:At,setPolygonOffset:Bt,setScissorTest:ht,activeTexture:_t,bindTexture:U,unbindTexture:Pt,compressedTexImage2D:Qe,compressedTexImage3D:A,texImage2D:J,texImage3D:ee,pixelStorei:Ee,getParameter:oe,updateUBOMapping:Te,uniformBlockBinding:Ce,texStorage2D:se,texStorage3D:ae,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:de,viewport:ce,reset:Ue}}function jg(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,_){return g?new OffscreenCanvas(A,_):Mr("canvas")}function m(A,_,k){let q=1;const K=Qe(A);if((K.width>k||K.height>k)&&(q=k/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(q*K.width),ae=Math.floor(q*K.height);h===void 0&&(h=v(se,ae));const J=_?v(se,ae):h;return J.width=se,J.height=ae,J.getContext("2d").drawImage(A,0,0,se,ae),we("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+se+"x"+ae+")."),J}else return"data"in A&&we("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function p(A){return A.generateMipmaps}function b(A){r.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(A,_,k,q,K,se=!1){if(A!==null){if(r[A]!==void 0)return r[A];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae;q&&(ae=e.get("EXT_texture_norm16"),ae||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===r.RED&&(k===r.FLOAT&&(J=r.R32F),k===r.HALF_FLOAT&&(J=r.R16F),k===r.UNSIGNED_BYTE&&(J=r.R8),k===r.UNSIGNED_SHORT&&ae&&(J=ae.R16_EXT),k===r.SHORT&&ae&&(J=ae.R16_SNORM_EXT)),_===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.R8UI),k===r.UNSIGNED_SHORT&&(J=r.R16UI),k===r.UNSIGNED_INT&&(J=r.R32UI),k===r.BYTE&&(J=r.R8I),k===r.SHORT&&(J=r.R16I),k===r.INT&&(J=r.R32I)),_===r.RG&&(k===r.FLOAT&&(J=r.RG32F),k===r.HALF_FLOAT&&(J=r.RG16F),k===r.UNSIGNED_BYTE&&(J=r.RG8),k===r.UNSIGNED_SHORT&&ae&&(J=ae.RG16_EXT),k===r.SHORT&&ae&&(J=ae.RG16_SNORM_EXT)),_===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RG8UI),k===r.UNSIGNED_SHORT&&(J=r.RG16UI),k===r.UNSIGNED_INT&&(J=r.RG32UI),k===r.BYTE&&(J=r.RG8I),k===r.SHORT&&(J=r.RG16I),k===r.INT&&(J=r.RG32I)),_===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RGB8UI),k===r.UNSIGNED_SHORT&&(J=r.RGB16UI),k===r.UNSIGNED_INT&&(J=r.RGB32UI),k===r.BYTE&&(J=r.RGB8I),k===r.SHORT&&(J=r.RGB16I),k===r.INT&&(J=r.RGB32I)),_===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),k===r.UNSIGNED_INT&&(J=r.RGBA32UI),k===r.BYTE&&(J=r.RGBA8I),k===r.SHORT&&(J=r.RGBA16I),k===r.INT&&(J=r.RGBA32I)),_===r.RGB&&(k===r.UNSIGNED_SHORT&&ae&&(J=ae.RGB16_EXT),k===r.SHORT&&ae&&(J=ae.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(J=r.R11F_G11F_B10F)),_===r.RGBA){const ee=se?fs:We.getTransfer(K);k===r.FLOAT&&(J=r.RGBA32F),k===r.HALF_FLOAT&&(J=r.RGBA16F),k===r.UNSIGNED_BYTE&&(J=ee===je?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&ae&&(J=ae.RGBA16_EXT),k===r.SHORT&&ae&&(J=ae.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(A,_){let k;return A?_===null||_===En||_===_r?k=r.DEPTH24_STENCIL8:_===Qt?k=r.DEPTH32F_STENCIL8:_===gr&&(k=r.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===En||_===_r?k=r.DEPTH_COMPONENT24:_===Qt?k=r.DEPTH_COMPONENT32F:_===gr&&(k=r.DEPTH_COMPONENT16),k}function E(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==bt&&A.minFilter!==St?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(A){const _=A.target;_.removeEventListener("dispose",x),N(_)}function T(A){const _=n.get(A);if(_.__webglInit===void 0)return;const k=A.source,q=f.get(k);if(q){const K=q[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(A),Object.keys(q).length===0&&f.delete(k)}n.remove(A)}function C(A){const _=n.get(A);r.deleteTexture(_.__webglTexture);const k=A.source,q=f.get(k);delete q[_.__cacheKey],a.memory.textures--}function N(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let K=0;K<_.__webglFramebuffer[q].length;K++)r.deleteFramebuffer(_.__webglFramebuffer[q][K]);else r.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)r.deleteFramebuffer(_.__webglFramebuffer[q]);else r.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&r.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&r.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=A.textures;for(let q=0,K=k.length;q<K;q++){const se=n.get(k[q]);se.__webglTexture&&(r.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(k[q])}n.remove(A)}let F=0;function z(){F=0}function L(){return F}function W(A){F=A}function H(){const A=F;return A>=i.maxTextures&&we("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,A}function X(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function j(A,_){const k=n.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const q=A.image;if(q===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(k,A,_);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+_)}function Y(A,_){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ve(k,A,_);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+_)}function P(A,_){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ve(k,A,_);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+_)}function B(A,_){const k=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Ie(k,A,_);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+_)}const ie={[Sn]:r.REPEAT,[vn]:r.CLAMP_TO_EDGE,[us]:r.MIRRORED_REPEAT},re={[bt]:r.NEAREST,[Gl]:r.NEAREST_MIPMAP_NEAREST,[cr]:r.NEAREST_MIPMAP_LINEAR,[St]:r.LINEAR,[ns]:r.LINEAR_MIPMAP_NEAREST,[Fn]:r.LINEAR_MIPMAP_LINEAR},Re={[Ed]:r.NEVER,[Cd]:r.ALWAYS,[Td]:r.LESS,[Mo]:r.LEQUAL,[wd]:r.EQUAL,[bo]:r.GEQUAL,[Ad]:r.GREATER,[Rd]:r.NOTEQUAL};function Ne(A,_){if(_.type===Qt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===St||_.magFilter===ns||_.magFilter===cr||_.magFilter===Fn||_.minFilter===St||_.minFilter===ns||_.minFilter===cr||_.minFilter===Fn)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,ie[_.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,ie[_.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,ie[_.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,re[_.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,re[_.minFilter]),_.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,Re[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===bt||_.minFilter!==cr&&_.minFilter!==Fn||_.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ye(A,_){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const q=_.source;let K=f.get(q);K===void 0&&(K={},f.set(q,K));const se=X(_);if(se!==A.__cacheKey){K[se]===void 0&&(K[se]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[se].usedTimes++;const ae=K[A.__cacheKey];ae!==void 0&&(K[A.__cacheKey].usedTimes--,ae.usedTimes===0&&C(_)),A.__cacheKey=se,A.__webglTexture=K[se].texture}return k}function Z(A,_,k){return Math.floor(Math.floor(A/k)/_)}function te(A,_,k,q){const se=A.updateRanges;if(se.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,_.width,_.height,k,q,_.data);else{se.sort((Ee,de)=>Ee.start-de.start);let ae=0;for(let Ee=1;Ee<se.length;Ee++){const de=se[ae],ce=se[Ee],Te=de.start+de.count,Ce=Z(ce.start,_.width,4),Ue=Z(de.start,_.width,4);ce.start<=Te+1&&Ce===Ue&&Z(ce.start+ce.count-1,_.width,4)===Ce?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++ae,se[ae]=ce)}se.length=ae+1;const J=t.getParameter(r.UNPACK_ROW_LENGTH),ee=t.getParameter(r.UNPACK_SKIP_PIXELS),oe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,_.width);for(let Ee=0,de=se.length;Ee<de;Ee++){const ce=se[Ee],Te=Math.floor(ce.start/4),Ce=Math.ceil(ce.count/4),Ue=Te%_.width,D=Math.floor(Te/_.width),le=Ce,Q=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,Ue,D,le,Q,k,q,_.data)}A.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,J),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(r.UNPACK_SKIP_ROWS,oe)}}function ve(A,_,k){let q=r.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=r.TEXTURE_3D);const K=Ye(A,_),se=_.source;t.bindTexture(q,A.__webglTexture,r.TEXTURE0+k);const ae=n.get(se);if(se.version!==ae.__version||K===!0){if(t.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Q=We.getPrimaries(We.workingColorSpace),ue=_.colorSpace===Un?null:We.getPrimaries(_.colorSpace),me=_.colorSpace===Un||Q===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment);let ee=m(_.image,!1,i.maxTextureSize);ee=Pt(_,ee);const oe=s.convert(_.format,_.colorSpace),Ee=s.convert(_.type);let de=y(_.internalFormat,oe,Ee,_.normalized,_.colorSpace,_.isVideoTexture);Ne(q,_);let ce;const Te=_.mipmaps,Ce=_.isVideoTexture!==!0,Ue=ae.__version===void 0||K===!0,D=se.dataReady,le=E(_,ee);if(_.isDepthTexture)de=S(_.format===fi,_.type),Ue&&(Ce?t.texStorage2D(r.TEXTURE_2D,1,de,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,de,ee.width,ee.height,0,oe,Ee,null));else if(_.isDataTexture)if(Te.length>0){Ce&&Ue&&t.texStorage2D(r.TEXTURE_2D,le,de,Te[0].width,Te[0].height);for(let Q=0,ue=Te.length;Q<ue;Q++)ce=Te[Q],Ce?D&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,ce.width,ce.height,oe,Ee,ce.data):t.texImage2D(r.TEXTURE_2D,Q,de,ce.width,ce.height,0,oe,Ee,ce.data);_.generateMipmaps=!1}else Ce?(Ue&&t.texStorage2D(r.TEXTURE_2D,le,de,ee.width,ee.height),D&&te(_,ee,oe,Ee)):t.texImage2D(r.TEXTURE_2D,0,de,ee.width,ee.height,0,oe,Ee,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ce&&Ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,de,Te[0].width,Te[0].height,ee.depth);for(let Q=0,ue=Te.length;Q<ue;Q++)if(ce=Te[Q],_.format!==jt)if(oe!==null)if(Ce){if(D)if(_.layerUpdates.size>0){const me=tl(ce.width,ce.height,_.format,_.type);for(const ne of _.layerUpdates){const Ae=ce.data.subarray(ne*me/ce.data.BYTES_PER_ELEMENT,(ne+1)*me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,ne,ce.width,ce.height,1,oe,Ae)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,ee.depth,oe,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,de,ce.width,ce.height,ee.depth,0,ce.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,ee.depth,oe,Ee,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Q,de,ce.width,ce.height,ee.depth,0,oe,Ee,ce.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ce&&Ue&&t.texStorage2D(r.TEXTURE_2D,le,de,Te[0].width,Te[0].height);for(let Q=0,ue=Te.length;Q<ue;Q++)ce=Te[Q],_.format!==jt?oe!==null?Ce?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,Q,de,ce.width,ce.height,0,ce.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?D&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,ce.width,ce.height,oe,Ee,ce.data):t.texImage2D(r.TEXTURE_2D,Q,de,ce.width,ce.height,0,oe,Ee,ce.data)}else if(_.isDataArrayTexture)if(Ce){if(Ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,de,ee.width,ee.height,ee.depth),D)if(_.layerUpdates.size>0){const Q=tl(ee.width,ee.height,_.format,_.type);for(const ue of _.layerUpdates){const me=ee.data.subarray(ue*Q/ee.data.BYTES_PER_ELEMENT,(ue+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ue,ee.width,ee.height,1,oe,Ee,me)}_.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,oe,Ee,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,ee.width,ee.height,ee.depth,0,oe,Ee,ee.data);else if(_.isData3DTexture)Ce?(Ue&&t.texStorage3D(r.TEXTURE_3D,le,de,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,oe,Ee,ee.data)):t.texImage3D(r.TEXTURE_3D,0,de,ee.width,ee.height,ee.depth,0,oe,Ee,ee.data);else if(_.isFramebufferTexture){if(Ue)if(Ce)t.texStorage2D(r.TEXTURE_2D,le,de,ee.width,ee.height);else{let Q=ee.width,ue=ee.height;for(let me=0;me<le;me++)t.texImage2D(r.TEXTURE_2D,me,de,Q,ue,0,oe,Ee,null),Q>>=1,ue>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in r){const Q=r.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),d.add(_),Q.onpaint=ue=>{const me=ue.changedElements;for(const ne of d)me.includes(ne.image)&&(ne.needsUpdate=!0)},Q.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ee);else{const me=r.RGBA,ne=r.RGBA,Ae=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,me,ne,Ae,ee)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ce&&Ue){const Q=Qe(Te[0]);t.texStorage2D(r.TEXTURE_2D,le,de,Q.width,Q.height)}for(let Q=0,ue=Te.length;Q<ue;Q++)ce=Te[Q],Ce?D&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,oe,Ee,ce):t.texImage2D(r.TEXTURE_2D,Q,de,oe,Ee,ce);_.generateMipmaps=!1}else if(Ce){if(Ue){const Q=Qe(ee);t.texStorage2D(r.TEXTURE_2D,le,de,Q.width,Q.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,Ee,ee)}else t.texImage2D(r.TEXTURE_2D,0,de,oe,Ee,ee);p(_)&&b(q),ae.__version=se.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ie(A,_,k){if(_.image.length!==6)return;const q=Ye(A,_),K=_.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);const se=n.get(K);if(K.version!==se.__version||q===!0){t.activeTexture(r.TEXTURE0+k);const ae=We.getPrimaries(We.workingColorSpace),J=_.colorSpace===Un?null:We.getPrimaries(_.colorSpace),ee=_.colorSpace===Un||ae===J?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const oe=_.isCompressedTexture||_.image[0].isCompressedTexture,Ee=_.image[0]&&_.image[0].isDataTexture,de=[];for(let ne=0;ne<6;ne++)!oe&&!Ee?de[ne]=m(_.image[ne],!0,i.maxCubemapSize):de[ne]=Ee?_.image[ne].image:_.image[ne],de[ne]=Pt(_,de[ne]);const ce=de[0],Te=s.convert(_.format,_.colorSpace),Ce=s.convert(_.type),Ue=y(_.internalFormat,Te,Ce,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,le=se.__version===void 0||q===!0,Q=K.dataReady;let ue=E(_,ce);Ne(r.TEXTURE_CUBE_MAP,_);let me;if(oe){D&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,Ue,ce.width,ce.height);for(let ne=0;ne<6;ne++){me=de[ne].mipmaps;for(let Ae=0;Ae<me.length;Ae++){const be=me[Ae];_.format!==jt?Te!==null?D?Q&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,be.width,be.height,Te,be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,Ue,be.width,be.height,0,be.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,be.width,be.height,Te,Ce,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,Ue,be.width,be.height,0,Te,Ce,be.data)}}}else{if(me=_.mipmaps,D&&le){me.length>0&&ue++;const ne=Qe(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,Ue,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ee){D?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de[ne].width,de[ne].height,Te,Ce,de[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,de[ne].width,de[ne].height,0,Te,Ce,de[ne].data);for(let Ae=0;Ae<me.length;Ae++){const at=me[Ae].image[ne].image;D?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,at.width,at.height,Te,Ce,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,Ue,at.width,at.height,0,Te,Ce,at.data)}}else{D?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te,Ce,de[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,Te,Ce,de[ne]);for(let Ae=0;Ae<me.length;Ae++){const be=me[Ae];D?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,Te,Ce,be.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,Ue,Te,Ce,be.image[ne])}}}p(_)&&b(r.TEXTURE_CUBE_MAP),se.__version=K.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function _e(A,_,k,q,K,se){const ae=s.convert(k.format,k.colorSpace),J=s.convert(k.type),ee=y(k.internalFormat,ae,J,k.normalized,k.colorSpace),oe=n.get(_),Ee=n.get(k);if(Ee.__renderTarget=_,!oe.__hasExternalTextures){const de=Math.max(1,_.width>>se),ce=Math.max(1,_.height>>se);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,se,ee,de,ce,_.depth,0,ae,J,null):t.texImage2D(K,se,ee,de,ce,0,ae,J,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),_t(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,K,Ee.__webglTexture,0,ht(_)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,K,Ee.__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(A,_,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),_.depthBuffer){const q=_.depthTexture,K=q&&q.isDepthTexture?q.type:null,se=S(_.stencilBuffer,K),ae=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;_t(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht(_),se,_.width,_.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht(_),se,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,se,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,A)}else{const q=_.textures;for(let K=0;K<q.length;K++){const se=q[K],ae=s.convert(se.format,se.colorSpace),J=s.convert(se.type),ee=y(se.internalFormat,ae,J,se.normalized,se.colorSpace);_t(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht(_),ee,_.width,_.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht(_),ee,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,ee,_.width,_.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(A,_,k){const q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,_.depthTexture);const oe=s.convert(_.depthTexture.format),Ee=s.convert(_.depthTexture.type);let de;_.depthTexture.format===zn?de=r.DEPTH_COMPONENT24:_.depthTexture.format===fi&&(de=r.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,_.width,_.height,0,oe,Ee,null)}}else j(_.depthTexture,0);const se=K.__webglTexture,ae=ht(_),J=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,ee=_.depthTexture.format===fi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(_.depthTexture.format===zn)_t(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,J,se,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,ee,J,se,0);else if(_.depthTexture.format===fi)_t(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,J,se,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,ee,J,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(A){const _=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=q}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let q=0;q<6;q++)Mt(_.__webglFramebuffer[q],A,q);else{const q=A.texture.mipmaps;q&&q.length>0?Mt(_.__webglFramebuffer[0],A,0):Mt(_.__webglFramebuffer,A,0)}else if(k){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=r.createRenderbuffer(),Be(_.__webglDepthbuffer[q],A,!1);else{const K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,se)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=r.createRenderbuffer(),Be(_.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,se)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(A,_,k){const q=n.get(A);_!==void 0&&_e(q.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Ve(A)}function st(A){const _=A.texture,k=n.get(A),q=n.get(_);A.addEventListener("dispose",x);const K=A.textures,se=A.isWebGLCubeRenderTarget===!0,ae=K.length>1;if(ae||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=_.version,a.memory.textures++),se){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let ee=0;ee<_.mipmaps.length;ee++)k.__webglFramebuffer[J][ee]=r.createFramebuffer()}else k.__webglFramebuffer[J]=r.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)k.__webglFramebuffer[J]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ae)for(let J=0,ee=K.length;J<ee;J++){const oe=n.get(K[J]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&_t(A)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const ee=K[J];k.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[J]);const oe=s.convert(ee.format,ee.colorSpace),Ee=s.convert(ee.type),de=y(ee.internalFormat,oe,Ee,ee.normalized,ee.colorSpace,A.isXRRenderTarget===!0),ce=ht(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,de,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,k.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Be(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)_e(k.__webglFramebuffer[J][ee],A,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else _e(k.__webglFramebuffer[J],A,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&b(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let J=0,ee=K.length;J<ee;J++){const oe=K[J],Ee=n.get(oe);let de=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,Ee.__webglTexture),Ne(de,oe),_e(k.__webglFramebuffer,A,oe,r.COLOR_ATTACHMENT0+J,de,0),p(oe)&&b(de)}t.unbindTexture()}else{let J=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(J,q.__webglTexture),Ne(J,_),_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)_e(k.__webglFramebuffer[ee],A,_,r.COLOR_ATTACHMENT0,J,ee);else _e(k.__webglFramebuffer,A,_,r.COLOR_ATTACHMENT0,J,0);p(_)&&b(J),t.unbindTexture()}A.depthBuffer&&Ve(A)}function qe(A){const _=A.textures;for(let k=0,q=_.length;k<q;k++){const K=_[k];if(p(K)){const se=w(A),ae=n.get(K).__webglTexture;t.bindTexture(se,ae),b(se),t.unbindTexture()}}}const lt=[],At=[];function Bt(A){if(A.samples>0){if(_t(A)===!1){const _=A.textures,k=A.width,q=A.height;let K=r.COLOR_BUFFER_BIT;const se=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(A),J=_.length>1;if(J)for(let oe=0;oe<_.length;oe++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const ee=A.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),J){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ee=n.get(_[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,k,q,0,0,k,q,K,r.NEAREST),c===!0&&(lt.length=0,At.length=0,lt.push(r.COLOR_ATTACHMENT0+oe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(lt.push(se),At.push(se),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,At)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let oe=0;oe<_.length;oe++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ee=n.get(_[oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const _=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_])}}}function ht(A){return Math.min(i.maxSamples,A.samples)}function _t(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function Pt(A,_){const k=A.colorSpace,q=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Yt&&k!==Un&&(We.getTransfer(k)===je?(q!==jt||K!==qt)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",k)),_}function Qe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=W,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=P,this.setTextureCube=B,this.rebindTextures=Ke,this.setupRenderTarget=st,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function e_(r,e){function t(n,i=Un){let s;const a=We.getTransfer(i);if(n===qt)return r.UNSIGNED_BYTE;if(n===mo)return r.UNSIGNED_SHORT_4_4_4_4;if(n===go)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Yl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wl)return r.BYTE;if(n===Xl)return r.SHORT;if(n===gr)return r.UNSIGNED_SHORT;if(n===po)return r.INT;if(n===En)return r.UNSIGNED_INT;if(n===Qt)return r.FLOAT;if(n===Tn)return r.HALF_FLOAT;if(n===$l)return r.ALPHA;if(n===Kl)return r.RGB;if(n===jt)return r.RGBA;if(n===zn)return r.DEPTH_COMPONENT;if(n===fi)return r.DEPTH_STENCIL;if(n===_o)return r.RED;if(n===xo)return r.RED_INTEGER;if(n===mi)return r.RG;if(n===vo)return r.RG_INTEGER;if(n===yo)return r.RGBA_INTEGER;if(n===is||n===rs||n===ss||n===as)if(a===je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===is)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===is)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ss)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===as)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Aa||n===Ra||n===Ca)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ra)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===La||n===Ia||n===Da||n===Na||n===ds||n===Ua)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pa||n===La)return a===je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ia)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Da)return s.COMPRESSED_R11_EAC;if(n===Na)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ds)return s.COMPRESSED_RG11_EAC;if(n===Ua)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fa||n===Oa||n===ka||n===Ba||n===za||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Ka)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fa)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$a)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===Ja||n===Qa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Za)return a===je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ja||n===eo||n===hs||n===to)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ja)return s.COMPRESSED_RED_RGTC1_EXT;if(n===eo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const t_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new lu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new wn({vertexShader:t_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r_ extends gi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new i_,p={},b=t.getContextAttributes();let w=null,y=null;const S=[],E=[],R=new He;let x=null,T=null;const C=new Ct;C.viewport=new it;const N=new Ct;N.viewport=new it;const F=[C,N],z=new nf;let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=S[Z];return te===void 0&&(te=new Vs,S[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=S[Z];return te===void 0&&(te=new Vs,S[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=S[Z];return te===void 0&&(te=new Vs,S[Z]=te),te.getHandSpace()};function H(Z){const te=E.indexOf(Z.inputSource);if(te===-1)return;const ve=S[te];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,l||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",j);for(let Z=0;Z<S.length;Z++){const te=E[Z];te!==null&&(E[Z]=null,S[Z].disconnect(te))}L=null,W=null,m.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(w),f=null,h=null,d=null,i=null,y=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),T!==null){const Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",X),i.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ie=null,_e=null;b.depth&&(_e=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=b.stencil?fi:zn,Ie=b.stencil?_r:En);const Be={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Be),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new un(h.textureWidth,h.textureHeight,{format:jt,type:qt,depthTexture:new br(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ve={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new un(f.framebufferWidth,f.framebufferHeight,{format:jt,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(Z){for(let te=0;te<Z.removed.length;te++){const ve=Z.removed[te],Ie=E.indexOf(ve);Ie>=0&&(E[Ie]=null,S[Ie].disconnect(ve))}for(let te=0;te<Z.added.length;te++){const ve=Z.added[te];let Ie=E.indexOf(ve);if(Ie===-1){for(let Be=0;Be<S.length;Be++)if(Be>=E.length){E.push(ve),Ie=Be;break}else if(E[Be]===null){E[Be]=ve,Ie=Be;break}if(Ie===-1)break}const _e=S[Ie];_e&&_e.connect(ve)}}const Y=new O,P=new O;function B(Z,te,ve){Y.setFromMatrixPosition(te.matrixWorld),P.setFromMatrixPosition(ve.matrixWorld);const Ie=Y.distanceTo(P),_e=te.projectionMatrix.elements,Be=ve.projectionMatrix.elements,Mt=_e[14]/(_e[10]-1),Ve=_e[14]/(_e[10]+1),Ke=(_e[9]+1)/_e[5],st=(_e[9]-1)/_e[5],qe=(_e[8]-1)/_e[0],lt=(Be[8]+1)/Be[0],At=Mt*qe,Bt=Mt*lt,ht=Ie/(-qe+lt),_t=ht*-qe;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(_t),Z.translateZ(ht),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),_e[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const U=Mt+ht,Pt=Ve+ht,Qe=At-_t,A=Bt+(Ie-_t),_=Ke*Ve/Pt*U,k=st*Ve/Pt*U;Z.projectionMatrix.makePerspective(Qe,A,_,k,U,Pt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ie(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let te=Z.near,ve=Z.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),z.near=N.near=C.near=te,z.far=N.far=C.far=ve,(L!==z.near||W!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,W=z.far),z.layers.mask=Z.layers.mask|6,C.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;const Ie=Z.parent,_e=z.cameras;ie(z,Ie);for(let Be=0;Be<_e.length;Be++)ie(_e[Be],Ie);_e.length===2?B(z,C,N):z.projectionMatrix.copy(C.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),re(Z,z,Ie)};function re(Z,te,ve){ve===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Vi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Z){return p[Z]};let Re=null;function Ne(Z,te){if(u=te.getViewerPose(l||a),g=te,u!==null){const ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ie=!1;ve.length!==z.cameras.length&&(z.cameras.length=0,Ie=!0);for(let Ve=0;Ve<ve.length;Ve++){const Ke=ve[Ve];let st=null;if(f!==null)st=f.getViewport(Ke);else{const lt=d.getViewSubImage(h,Ke);st=lt.viewport,Ve===0&&(e.setRenderTargetTextures(y,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(y))}let qe=F[Ve];qe===void 0&&(qe=new Ct,qe.layers.enable(Ve),qe.viewport=new it,F[Ve]=qe),qe.matrix.fromArray(Ke.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Ke.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(st.x,st.y,st.width,st.height),Ve===0&&(z.matrix.copy(qe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ie===!0&&z.cameras.push(qe)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Ve=d.getDepthInformation(ve[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,i.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Ve=0;Ve<ve.length;Ve++){const Ke=ve[Ve].camera;if(Ke){let st=p[Ke];st||(st=new lu,p[Ke]=st);const qe=d.getCameraImage(Ke);st.sourceTexture=qe}}}}for(let ve=0;ve<S.length;ve++){const Ie=E[ve],_e=S[ve];Ie!==null&&_e!==void 0&&_e.update(Ie,te,l||a)}Re&&Re(Z,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ye=new mu;Ye.setAnimationLoop(Ne),this.setAnimationLoop=function(Z){Re=Z},this.dispose=function(){}}}const s_=new ke,bu=new De;bu.set(-1,0,0,0,1,0,0,0,1);function a_(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),w=b.envMap,y=b.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function o_(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){const E=S.program;n.uniformBlockBinding(y,E)}function l(y,S){let E=i[y.id];E===void 0&&(m(y),E=u(y),i[y.id]=E,y.addEventListener("dispose",b));const R=S.program;n.updateUBOMapping(y,R);const x=e.render.frame;s[y.id]!==x&&(h(y),s[y.id]=x)}function u(y){const S=d();y.__bindingPointIndex=S;const E=r.createBuffer(),R=y.__size,x=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,R,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,E),E}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const S=i[y.id],E=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let x=0,T=E.length;x<T;x++){const C=E[x];if(Array.isArray(C))for(let N=0,F=C.length;N<F;N++)f(C[N],x,N,R);else f(C,x,0,R)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,S,E,R){if(v(y,S,E,R)===!0){const x=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let N=0;N<T.length;N++){const F=T[N],z=p(F);g(F,y.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,y.__data)}}function g(y,S,E){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,E)}function v(y,S,E,R){const x=y.value,T=S+"_"+E;if(R[T]===void 0)return typeof x=="number"||typeof x=="boolean"?R[T]=x:ArrayBuffer.isView(x)?R[T]=x.slice():R[T]=x.clone(),!0;{const C=R[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return R[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(y){const S=y.uniforms;let E=0;const R=16;for(let T=0,C=S.length;T<C;T++){const N=Array.isArray(S[T])?S[T]:[S[T]];for(let F=0,z=N.length;F<z;F++){const L=N[F],W=Array.isArray(L.value)?L.value:[L.value];for(let H=0,X=W.length;H<X;H++){const j=W[H],Y=p(j),P=E%R,B=P%Y.boundary,ie=P+B;E+=B,ie!==0&&R-ie<Y.storage&&(E+=R-ie),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=Y.storage}}}const x=E%R;return x>0&&(E+=R-x),y.__size=E,y.__cache={},this}function p(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):we("WebGLRenderer: Unsupported uniform value type.",y),S}function b(y){const S=y.target;S.removeEventListener("dispose",b);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function w(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:c,update:l,dispose:w}}const c_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function l_(){return mn===null&&(mn=new Ao(c_,16,16,mi,Tn),mn.name="DFG_LUT",mn.minFilter=St,mn.magFilter=St,mn.wrapS=vn,mn.wrapT=vn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class u_{constructor(e={}){const{canvas:t=Id(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=qt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=f,m=new Set([yo,vo,xo]),p=new Set([qt,En,gr,_r,mo,go]),b=new Uint32Array(4),w=new Int32Array(4),y=new O;let S=null,E=null;const R=[],x=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1,F=null,z=null,L=null,W=null;this._outputColorSpace=pt;let H=0,X=0,j=null,Y=-1,P=null;const B=new it,ie=new it;let re=null;const Re=new Pe(0);let Ne=0,Ye=t.width,Z=t.height,te=1,ve=null,Ie=null;const _e=new it(0,0,Ye,Z),Be=new it(0,0,Ye,Z);let Mt=!1;const Ve=new Co;let Ke=!1,st=!1;const qe=new ke,lt=new O,At=new it,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function _t(){return j===null?te:1}let U=n;function Pt(M,I){return t.getContext(M,I)}let Qe,A,_,k,q,K,se,ae,J,ee,oe,Ee,de,ce,Te,Ce,Ue,D,le,Q,ue,me,ne;try{const M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ho}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",tn,!1),U===null){const I="webgl2";if(U=Pt(I,M),U===null)throw Pt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(M){throw t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",tn,!1),Le("WebGLRenderer: "+M.message),M}function Ae(){Qe=new l0(U),Qe.init(),ue=new e_(U,Qe),A=new jm(U,Qe,e,ue),_=new Qg(U,Qe),A.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),z=U.createFramebuffer(),L=U.createFramebuffer(),W=U.createFramebuffer(),k=new h0(U),q=new kg,K=new jg(U,Qe,_,q,A,ue,k),se=new c0(C),ae=new pf(U),me=new Jm(U,ae),J=new u0(U,ae,k,me),ee=new p0(U,J,ae,me,k),D=new f0(U,A,K),Te=new e0(q),oe=new Og(C,se,Qe,A,me,Te),Ee=new a_(C,q),de=new zg,ce=new qg(Qe),Ue=new Zm(C,se,_,ee,g,c),Ce=new Jg(C,ee,A),ne=new o_(U,k,A,_),le=new Qm(U,Qe,k),Q=new d0(U,Qe,k),k.programs=oe.programs,C.capabilities=A,C.extensions=Qe,C.properties=q,C.renderLists=de,C.shadowMap=Ce,C.state=_,C.info=k}v!==qt&&(T=new g0(v,t.width,t.height,o,i,s));const be=new r_(C,U);this.xr=be,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=Qe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Qe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(Ye,Z,!1))},this.getSize=function(M){return M.set(Ye,Z)},this.setSize=function(M,I,$=!0){if(be.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=M,Z=I,t.width=Math.floor(M*te),t.height=Math.floor(I*te),$===!0&&(t.style.width=M+"px",t.style.height=I+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(Ye*te,Z*te).floor()},this.setDrawingBufferSize=function(M,I,$){Ye=M,Z=I,te=$,t.width=Math.floor(M*$),t.height=Math.floor(I*$),this.setViewport(0,0,M,I)},this.setEffects=function(M){if(v===qt){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let I=0;I<M.length;I++)if(M[I].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(B)},this.getViewport=function(M){return M.copy(_e)},this.setViewport=function(M,I,$,V){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,I,$,V),_.viewport(B.copy(_e).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(Be)},this.setScissor=function(M,I,$,V){M.isVector4?Be.set(M.x,M.y,M.z,M.w):Be.set(M,I,$,V),_.scissor(ie.copy(Be).multiplyScalar(te).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(M){_.setScissorTest(Mt=M)},this.setOpaqueSort=function(M){ve=M},this.setTransparentSort=function(M){Ie=M},this.getClearColor=function(M){return M.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,$=!0){let V=0;if(M){let G=!1;if(j!==null){const pe=j.texture.format;G=m.has(pe)}if(G){const pe=j.texture.type,xe=p.has(pe),fe=Ue.getClearColor(),ye=Ue.getClearAlpha(),Se=fe.r,Fe=fe.g,Ge=fe.b;xe?(b[0]=Se,b[1]=Fe,b[2]=Ge,b[3]=ye,U.clearBufferuiv(U.COLOR,0,b)):(w[0]=Se,w[1]=Fe,w[2]=Ge,w[3]=ye,U.clearBufferiv(U.COLOR,0,w))}else V|=U.COLOR_BUFFER_BIT}I&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",tn,!1),Ue.dispose(),de.dispose(),ce.dispose(),q.dispose(),se.dispose(),ee.dispose(),me.dispose(),ne.dispose(),oe.dispose(),be.dispose(),be.removeEventListener("sessionstart",Xo),be.removeEventListener("sessionend",qo),ai.stop()};function at(M){M.preventDefault(),ps("WebGLRenderer: Context Lost."),N=!0}function Ze(){ps("WebGLRenderer: Context Restored."),N=!1;const M=k.autoReset,I=Ce.enabled,$=Ce.autoUpdate,V=Ce.needsUpdate,G=Ce.type;Ae(),k.autoReset=M,Ce.enabled=I,Ce.autoUpdate=$,Ce.needsUpdate=V,Ce.type=G}function tn(M){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function hn(M){const I=M.target;I.removeEventListener("dispose",hn),Ru(I)}function Ru(M){Cu(M),q.remove(M)}function Cu(M){const I=q.get(M).programs;I!==void 0&&(I.forEach(function($){oe.releaseProgram($)}),M.isShaderMaterial&&oe.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,$,V,G,pe){I===null&&(I=Bt);const xe=G.isMesh&&G.matrixWorld.determinantAffine()<0,fe=Iu(M,I,$,V,G);_.setMaterial(V,xe);let ye=$.index,Se=1;if(V.wireframe===!0){if(ye=J.getWireframeAttribute($),ye===void 0)return;Se=2}const Fe=$.drawRange,Ge=$.attributes.position;let Me=Fe.start*Se,Je=(Fe.start+Fe.count)*Se;pe!==null&&(Me=Math.max(Me,pe.start*Se),Je=Math.min(Je,(pe.start+pe.count)*Se)),ye!==null?(Me=Math.max(Me,0),Je=Math.min(Je,ye.count)):Ge!=null&&(Me=Math.max(Me,0),Je=Math.min(Je,Ge.count));const xt=Je-Me;if(xt<0||xt===1/0)return;me.setup(G,V,fe,$,ye);let ct,rt=le;if(ye!==null&&(ct=ae.get(ye),rt=Q,rt.setIndex(ct)),G.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*_t()),rt.setMode(U.LINES)):rt.setMode(U.TRIANGLES);else if(G.isLine){let Lt=V.linewidth;Lt===void 0&&(Lt=1),_.setLineWidth(Lt*_t()),G.isLineSegments?rt.setMode(U.LINES):G.isLineLoop?rt.setMode(U.LINE_LOOP):rt.setMode(U.LINE_STRIP)}else G.isPoints?rt.setMode(U.POINTS):G.isSprite&&rt.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))rt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Lt=G._multiDrawStarts,ge=G._multiDrawCounts,Ut=G._multiDrawCount,$e=ye?ae.get(ye).bytesPerElement:1,$t=q.get(V).currentProgram.getUniforms();for(let fn=0;fn<Ut;fn++)$t.setValue(U,"_gl_DrawID",fn),rt.render(Lt[fn]/$e,ge[fn])}else if(G.isInstancedMesh)rt.renderInstances(Me,xt,G.count);else if($.isInstancedBufferGeometry){const Lt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ge=Math.min($.instanceCount,Lt);rt.renderInstances(Me,xt,ge)}else rt.render(Me,xt)};function Wo(M,I,$,V){F!==null&&M.isNodeMaterial&&F.setObject(V,M),Ke===!0&&Te.setState(M,$,!1),M.transparent===!0&&M.side===xn&&M.forceSinglePass===!1?(M.side=Ht,M.needsUpdate=!0,Rr(M,I,V),M.side=ii,M.needsUpdate=!0,Rr(M,I,V),M.side=xn):Rr(M,I,V)}this.compile=function(M,I,$=null){$===null&&($=M),F!==null&&F.renderStart(M,I,$),E=ce.get($),E.init(I),x.push(E),$.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),M!==$&&M.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),st=this.localClippingEnabled,Ke=Te.init(this.clippingPlanes,st),Ke===!0&&Te.setGlobalState(this.clippingPlanes,I),F!==null&&Ce.render(E.state.shadowsArray,$,I);const V=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){const fe=pe[xe];Wo(fe,$,I,G),V.add(fe)}else Wo(pe,$,I,G),V.add(pe)}),E=x.pop(),F!==null&&F.renderEnd(),V},this.compileAsync=function(M,I,$=null){const V=this.compile(M,I,$);return new Promise(G=>{function pe(){if(V.forEach(function(xe){const ye=q.get(xe).currentProgram;(ye===void 0||ye.isReady())&&V.delete(xe)}),V.size===0){G(M);return}setTimeout(pe,10)}Qe.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Cs=null;function Pu(M){Cs&&Cs(M)}function Xo(){ai.stop()}function qo(){ai.start()}const ai=new mu;ai.setAnimationLoop(Pu),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(M){Cs=M,be.setAnimationLoop(M),M===null?ai.stop():ai.start()},be.addEventListener("sessionstart",Xo),be.addEventListener("sessionend",qo),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(M,I);const $=be.enabled===!0&&be.isPresenting===!0,V=T!==null&&(j===null||$)&&T.begin(C,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(I),I=be.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,I,j),E=ce.get(M,x.length),E.init(I),E.state.textureUnits=K.getTextureUnits(),x.push(E),qe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ve.setFromProjectionMatrix(qe,yn,I.reversedDepth),st=this.localClippingEnabled,Ke=Te.init(this.clippingPlanes,st),S=de.get(M,R.length),S.init(),R.push(S),be.enabled===!0&&be.isPresenting===!0){const xe=C.xr.getDepthSensingMesh();xe!==null&&Ps(xe,I,-1/0,C.sortObjects)}Ps(M,I,0,C.sortObjects),S.finish(),F!==null&&F.updateLights(E.state.lightsArray),C.sortObjects===!0&&S.sort(ve,Ie),ht=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,ht&&Ue.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Te.beginShadows();const G=E.state.shadowsArray;if(Ce.render(G,M,I),Ke===!0&&Te.endShadows(),(V&&T.hasRenderPass())===!1){const xe=S.opaque,fe=S.transmissive;if(E.setupLights(),I.isArrayCamera){const ye=I.cameras;if(fe.length>0)for(let Se=0,Fe=ye.length;Se<Fe;Se++){const Ge=ye[Se];$o(xe,fe,M,Ge)}ht&&Ue.render(M);for(let Se=0,Fe=ye.length;Se<Fe;Se++){const Ge=ye[Se];Yo(S,M,Ge,Ge.viewport)}}else fe.length>0&&$o(xe,fe,M,I),ht&&Ue.render(M),Yo(S,M,I)}j!==null&&X===0&&(K.updateMultisampleRenderTarget(j),K.updateRenderTargetMipmap(j)),V&&T.end(C),M.isScene===!0&&M.onAfterRender(C,M,I),me.resetDefaultState(),Y=-1,P=null,x.pop(),x.length>0?(E=x[x.length-1],K.setTextureUnits(E.state.textureUnits),Ke===!0&&Te.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,F!==null&&F.renderEnd()};function Ps(M,I,$,V){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Ve)){V&&At.setFromMatrixPosition(M.matrixWorld).applyMatrix4(qe);const xe=ee.update(M),fe=M.material;fe.visible&&S.push(M,xe,fe,$,At.z,null,I)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Ve))){const xe=ee.update(M),fe=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),At.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),At.copy(xe.boundingSphere.center)),At.applyMatrix4(M.matrixWorld).applyMatrix4(qe)),Array.isArray(fe)){const ye=xe.groups;for(let Se=0,Fe=ye.length;Se<Fe;Se++){const Ge=ye[Se],Me=fe[Ge.materialIndex];Me&&Me.visible&&S.push(M,xe,Me,$,At.z,Ge,I)}}else fe.visible&&S.push(M,xe,fe,$,At.z,null,I)}}const pe=M.children;for(let xe=0,fe=pe.length;xe<fe;xe++)Ps(pe[xe],I,$,V)}function Yo(M,I,$,V){const{opaque:G,transmissive:pe,transparent:xe}=M;E.setupLightsView($),Ke===!0&&Te.setGlobalState(C.clippingPlanes,$),V&&_.viewport(B.copy(V)),G.length>0&&Ar(G,I,$),pe.length>0&&Ar(pe,I,$),xe.length>0&&Ar(xe,I,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function $o(M,I,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const Me=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new un(1,1,{generateMipmaps:!0,type:Me?Tn:qt,minFilter:Fn,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}const pe=E.state.transmissionRenderTarget[V.id],xe=V.viewport||B;pe.setSize(xe.z*C.transmissionResolutionScale,xe.w*C.transmissionResolutionScale);const fe=C.getRenderTarget(),ye=C.getActiveCubeFace(),Se=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(Re),Ne=C.getClearAlpha(),Ne<1&&C.setClearColor(16777215,.5),C.clear(),ht&&Ue.render($);const Fe=C.toneMapping;C.toneMapping=Mn;const Ge=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Ke===!0&&Te.setGlobalState(C.clippingPlanes,V),Ar(M,$,V),K.updateMultisampleRenderTarget(pe),K.updateRenderTargetMipmap(pe),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Je=0,xt=I.length;Je<xt;Je++){const ct=I[Je],{object:rt,geometry:Lt,material:ge,group:Ut}=ct;if(ge.side===xn&&rt.layers.test(V.layers)){const $e=ge.side;ge.side=Ht,ge.needsUpdate=!0,Ko(rt,$,V,Lt,ge,Ut),ge.side=$e,ge.needsUpdate=!0,Me=!0}}Me===!0&&(K.updateMultisampleRenderTarget(pe),K.updateRenderTargetMipmap(pe))}C.setRenderTarget(fe,ye,Se),C.setClearColor(Re,Ne),Ge!==void 0&&(V.viewport=Ge),C.toneMapping=Fe}function Ar(M,I,$){const V=I.isScene===!0?I.overrideMaterial:null;for(let G=0,pe=M.length;G<pe;G++){const xe=M[G],{object:fe,geometry:ye,group:Se}=xe;let Fe=xe.material;Fe.allowOverride===!0&&V!==null&&(Fe=V),fe.layers.test($.layers)&&Ko(fe,I,$,ye,Fe,Se)}}function Ko(M,I,$,V,G,pe){F!==null&&G.isNodeMaterial&&F.setObject(M,G),M.onBeforeRender(C,I,$,V,G,pe),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(C,I,$,V,M,pe),G.transparent===!0&&G.side===xn&&G.forceSinglePass===!1?(G.side=Ht,G.needsUpdate=!0,C.renderBufferDirect($,I,V,G,M,pe),G.side=ii,G.needsUpdate=!0,C.renderBufferDirect($,I,V,G,M,pe),G.side=xn):C.renderBufferDirect($,I,V,G,M,pe),M.onAfterRender(C,I,$,V,G,pe)}function Rr(M,I,$){I.isScene!==!0&&(I=Bt);const V=q.get(M),G=E.state.lights,pe=E.state.shadowsArray,xe=G.state.version,fe=oe.getParameters(M,G.state,pe,I,$,E.state.lightProbeGridArray),ye=oe.getProgramCacheKey(fe);let Se=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,V.fog=I.fog;const Fe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=se.get(M.envMap||V.environment,Fe),V.envMapRotation=V.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Se===void 0&&(M.addEventListener("dispose",hn),Se=new Map,V.programs=Se);let Ge=Se.get(ye);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===xe)return Jo(M,fe),Ge}else fe.uniforms=oe.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,$,fe),M.onBeforeCompile(fe,C),Ge=oe.acquireProgram(fe,ye),Se.set(ye,Ge),V.uniforms=fe.uniforms;const Me=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Me.clippingPlanes=Te.uniform),Jo(M,fe),V.needsLights=Nu(M),V.lightsStateVersion=xe,V.needsLights&&(Me.ambientLightColor.value=G.state.ambient,Me.lightProbe.value=G.state.probe,Me.sunLights.value=G.state.sun,Me.sunLightShadows.value=G.state.sunShadow,Me.directionalLights.value=G.state.directional,Me.directionalLightShadows.value=G.state.directionalShadow,Me.spotLights.value=G.state.spot,Me.spotLightShadows.value=G.state.spotShadow,Me.rectAreaLights.value=G.state.rectArea,Me.ltc_1.value=G.state.rectAreaLTC1,Me.ltc_2.value=G.state.rectAreaLTC2,Me.pointLights.value=G.state.point,Me.pointLightShadows.value=G.state.pointShadow,Me.hemisphereLights.value=G.state.hemi,Me.sunShadowMatrix.value=G.state.sunShadowMatrix,Me.sunShadowCascade.value=G.state.sunShadowCascade,Me.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Me.spotLightMatrix.value=G.state.spotLightMatrix,Me.spotLightMap.value=G.state.spotLightMap,Me.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=Ge,V.uniformsList=null,Ge}function Zo(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=cs.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Jo(M,I){const $=q.get(M);$.outputColorSpace=I.outputColorSpace,$.batching=I.batching,$.batchingColor=I.batchingColor,$.instancing=I.instancing,$.instancingColor=I.instancingColor,$.instancingMorph=I.instancingMorph,$.skinning=I.skinning,$.morphTargets=I.morphTargets,$.morphNormals=I.morphNormals,$.morphColors=I.morphColors,$.morphTargetsCount=I.morphTargetsCount,$.numClippingPlanes=I.numClippingPlanes,$.numIntersection=I.numClipIntersection,$.vertexAlphas=I.vertexAlphas,$.vertexTangents=I.vertexTangents,$.toneMapping=I.toneMapping}function Lu(M,I){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(I.matrixWorld);for(let $=0,V=M.length;$<V;$++){const G=M[$];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function Iu(M,I,$,V,G){I.isScene!==!0&&(I=Bt),K.resetTextureUnits();const pe=I.fog,xe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?I.environment:null,fe=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:We.workingColorSpace,ye=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Se=se.get(V.envMap||xe,ye),Fe=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ge=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Me=!!$.morphAttributes.position,Je=!!$.morphAttributes.normal,xt=!!$.morphAttributes.color;let ct=Mn;V.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ct=C.toneMapping);const rt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Lt=rt!==void 0?rt.length:0,ge=q.get(V),Ut=E.state.lights;if(Ke===!0&&(st===!0||M!==P)){const ot=M===P&&V.id===Y;Te.setState(V,M,ot)}let $e=!1;V.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Ut.state.version||ge.outputColorSpace!==fe||G.isBatchedMesh&&ge.batching===!1||!G.isBatchedMesh&&ge.batching===!0||G.isBatchedMesh&&ge.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&ge.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&ge.instancing===!1||!G.isInstancedMesh&&ge.instancing===!0||G.isSkinnedMesh&&ge.skinning===!1||!G.isSkinnedMesh&&ge.skinning===!0||G.isInstancedMesh&&ge.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ge.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ge.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ge.instancingMorph===!1&&G.morphTexture!==null||ge.envMap!==Se||V.fog===!0&&ge.fog!==pe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Te.numPlanes||ge.numIntersection!==Te.numIntersection)||ge.vertexAlphas!==Fe||ge.vertexTangents!==Ge||ge.morphTargets!==Me||ge.morphNormals!==Je||ge.morphColors!==xt||ge.toneMapping!==ct||ge.morphTargetsCount!==Lt||!!ge.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,ge.__version=V.version);let $t=ge.currentProgram;$e===!0&&($t=Rr(V,I,G),F&&V.isNodeMaterial&&F.onUpdateProgram(V,$t,ge));let fn=!1,Gn=!1,_i=!1;const nt=$t.getUniforms(),ft=ge.uniforms;if(_.useProgram($t.program)&&(fn=!0,Gn=!0,_i=!0),V.id!==Y&&(Y=V.id,Gn=!0),ge.needsLights){const ot=Lu(E.state.lightProbeGridArray,G);ge.lightProbeGrid!==ot&&(ge.lightProbeGrid=ot,Gn=!0)}if(fn||P!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),nt.setValue(U,"projectionMatrix",M.projectionMatrix),nt.setValue(U,"viewMatrix",M.matrixWorldInverse);const Xn=nt.map.cameraPosition;Xn!==void 0&&Xn.setValue(U,lt.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&nt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&nt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),P!==M&&(P=M,Gn=!0,_i=!0)}if(ge.needsLights&&(Ut.state.sunShadowMap.length>0&&nt.setValue(U,"sunShadowMap",Ut.state.sunShadowMap,K),Ut.state.directionalShadowMap.length>0&&nt.setValue(U,"directionalShadowMap",Ut.state.directionalShadowMap,K),Ut.state.spotShadowMap.length>0&&nt.setValue(U,"spotShadowMap",Ut.state.spotShadowMap,K),Ut.state.pointShadowMap.length>0&&nt.setValue(U,"pointShadowMap",Ut.state.pointShadowMap,K)),G.isSkinnedMesh){nt.setOptional(U,G,"bindMatrix"),nt.setOptional(U,G,"bindMatrixInverse");const ot=G.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),nt.setValue(U,"boneTexture",ot.boneTexture,K))}G.isBatchedMesh&&(nt.setOptional(U,G,"batchingTexture"),nt.setValue(U,"batchingTexture",G._matricesTexture,K),nt.setOptional(U,G,"batchingIdTexture"),nt.setValue(U,"batchingIdTexture",G._indirectTexture,K),nt.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&nt.setValue(U,"batchingColorTexture",G._colorsTexture,K));const Wn=$.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&D.update(G,$,$t),(Gn||ge.receiveShadow!==G.receiveShadow)&&(ge.receiveShadow=G.receiveShadow,nt.setValue(U,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&I.environment!==null&&(ft.envMapIntensity.value=I.environmentIntensity),ft.dfgLUT!==void 0&&(ft.dfgLUT.value=l_()),Gn){if(nt.setValue(U,"toneMappingExposure",C.toneMappingExposure),ge.needsLights&&Du(ft,_i),pe&&V.fog===!0&&Ee.refreshFogUniforms(ft,pe),Ee.refreshMaterialUniforms(ft,V,te,Z,E.state.transmissionRenderTarget[M.id]),ge.needsLights&&ge.lightProbeGrid){const ot=ge.lightProbeGrid;ft.probesSH.value=ot.texture,ft.probesMin.value.copy(ot.boundingBox.min),ft.probesMax.value.copy(ot.boundingBox.max),ft.probesResolution.value.copy(ot.resolution)}cs.upload(U,Zo(ge),ft,K)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(cs.upload(U,Zo(ge),ft,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&nt.setValue(U,"center",G.center),nt.setValue(U,"modelViewMatrix",G.modelViewMatrix),nt.setValue(U,"normalMatrix",G.normalMatrix),nt.setValue(U,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){const ot=V.uniformsGroups;for(let Xn=0,xi=ot.length;Xn<xi;Xn++){const jo=ot[Xn];ne.update(jo,$t),ne.bind(jo,$t)}}return $t}function Du(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.sunLights.needsUpdate=I,M.sunLightShadows.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Nu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,I,$){const V=q.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=I,q.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:$,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){const $=q.get(M);$.__webglFramebuffer=I,$.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,$=0){j=M,H=I,X=$;let V=null,G=!1,pe=!1;if(M){const fe=q.get(M);if(fe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,fe.__webglFramebuffer),B.copy(M.viewport),ie.copy(M.scissor),re=M.scissorTest,_.viewport(B),_.scissor(ie),_.setScissorTest(re),Y=-1;return}else if(fe.__webglFramebuffer===void 0)K.setupRenderTarget(M);else if(fe.__hasExternalTextures)K.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Fe=M.depthTexture;if(fe.__boundDepthTexture!==Fe){if(Fe!==null&&q.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(M)}}const ye=M.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(pe=!0);const Se=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Se[I])?V=Se[I][$]:V=Se[I],G=!0):M.samples>0&&K.useMultisampledRTT(M)===!1?V=q.get(M).__webglMultisampledFramebuffer:Array.isArray(Se)?V=Se[$]:V=Se,B.copy(M.viewport),ie.copy(M.scissor),re=M.scissorTest}else B.copy(_e).multiplyScalar(te).floor(),ie.copy(Be).multiplyScalar(te).floor(),re=Mt;if($!==0&&(V=z),_.bindFramebuffer(U.FRAMEBUFFER,V)&&_.drawBuffers(M,V),_.viewport(B),_.scissor(ie),_.setScissorTest(re),G){const fe=q.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,fe.__webglTexture,$)}else if(pe){const fe=I;for(let ye=0;ye<M.textures.length;ye++){const Se=q.get(M.textures[ye]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ye,Se.__webglTexture,$,fe)}}else if(M!==null&&$!==0){const fe=q.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,fe.__webglTexture,$)}Y=-1};function Qo(M){const I=q.get(M);return(I.__readFormat!==M.format||I.__readType!==M.type)&&(I.__readFormat=M.format,I.__readType=M.type,I.__formatReadable=A.textureFormatReadable(M.format),I.__typeReadable=A.textureTypeReadable(M.type)),I}this.readRenderTargetPixels=function(M,I,$,V,G,pe,xe,fe=0){if(!(M&&M.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){_.bindFramebuffer(U.FRAMEBUFFER,ye);try{const Se=M.textures[fe],Fe=Se.format,Ge=Se.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+fe);const Me=Qo(Se);if(Me.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-V&&$>=0&&$<=M.height-G&&U.readPixels(I,$,V,G,ue.convert(Fe),ue.convert(Ge),pe)}finally{const Se=j!==null?q.get(j).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(M,I,$,V,G,pe,xe,fe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye)if(I>=0&&I<=M.width-V&&$>=0&&$<=M.height-G){_.bindFramebuffer(U.FRAMEBUFFER,ye);const Se=M.textures[fe],Fe=Se.format,Ge=Se.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+fe);const Me=Qo(Se);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.bufferData(U.PIXEL_PACK_BUFFER,pe.byteLength,U.STREAM_READ),U.readPixels(I,$,V,G,ue.convert(Fe),ue.convert(Ge),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const xt=j!==null?q.get(j).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,xt);const ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Dd(U,ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Je),U.deleteSync(ct),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,$=0){const V=Math.pow(2,-$),G=Math.floor(M.image.width*V),pe=Math.floor(M.image.height*V),xe=I!==null?I.x:0,fe=I!==null?I.y:0;K.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,xe,fe,G,pe),_.unbindTexture()},this.copyTextureToTexture=function(M,I,$=null,V=null,G=0,pe=0){let xe,fe,ye,Se,Fe,Ge,Me,Je,xt;const ct=M.isCompressedTexture?M.mipmaps[pe]:M.image;if($!==null)xe=$.max.x-$.min.x,fe=$.max.y-$.min.y,ye=$.isBox3?$.max.z-$.min.z:1,Se=$.min.x,Fe=$.min.y,Ge=$.isBox3?$.min.z:0;else{const ft=Math.pow(2,-G);xe=Math.floor(ct.width*ft),fe=Math.floor(ct.height*ft),M.isDataArrayTexture?ye=ct.depth:M.isData3DTexture?ye=Math.floor(ct.depth*ft):ye=1,Se=0,Fe=0,Ge=0}V!==null?(Me=V.x,Je=V.y,xt=V.z):(Me=0,Je=0,xt=0);const rt=ue.convert(I.format),Lt=ue.convert(I.type);let ge;I.isData3DTexture?(K.setTexture3D(I,0),ge=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(K.setTexture2DArray(I,0),ge=U.TEXTURE_2D_ARRAY):(K.setTexture2D(I,0),ge=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const Ut=_.getParameter(U.UNPACK_ROW_LENGTH),$e=_.getParameter(U.UNPACK_IMAGE_HEIGHT),$t=_.getParameter(U.UNPACK_SKIP_PIXELS),fn=_.getParameter(U.UNPACK_SKIP_ROWS),Gn=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,ct.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),_.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge);const _i=M.isDataArrayTexture||M.isData3DTexture,nt=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const ft=q.get(M),Wn=q.get(I),ot=q.get(ft.__renderTarget),Xn=q.get(Wn.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,ot.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let xi=0;xi<ye;xi++)_i&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(M).__webglTexture,G,Ge+xi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(I).__webglTexture,pe,xt+xi)),U.blitFramebuffer(Se,Fe,xe,fe,Me,Je,xe,fe,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||q.has(M)){const ft=q.get(M),Wn=q.get(I);_.bindFramebuffer(U.READ_FRAMEBUFFER,L),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,W);for(let ot=0;ot<ye;ot++)_i?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ft.__webglTexture,G,Ge+ot):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,G),nt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wn.__webglTexture,pe,xt+ot):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Wn.__webglTexture,pe),G!==0?U.blitFramebuffer(Se,Fe,xe,fe,Me,Je,xe,fe,U.COLOR_BUFFER_BIT,U.NEAREST):nt?U.copyTexSubImage3D(ge,pe,Me,Je,xt+ot,Se,Fe,xe,fe):U.copyTexSubImage2D(ge,pe,Me,Je,Se,Fe,xe,fe);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else nt?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(ge,pe,Me,Je,xt,xe,fe,ye,rt,Lt,ct.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(ge,pe,Me,Je,xt,xe,fe,ye,rt,ct.data):U.texSubImage3D(ge,pe,Me,Je,xt,xe,fe,ye,rt,Lt,ct):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pe,Me,Je,xe,fe,rt,Lt,ct.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pe,Me,Je,ct.width,ct.height,rt,ct.data):U.texSubImage2D(U.TEXTURE_2D,pe,Me,Je,xe,fe,rt,Lt,ct);_.pixelStorei(U.UNPACK_ROW_LENGTH,Ut),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$e),_.pixelStorei(U.UNPACK_SKIP_PIXELS,$t),_.pixelStorei(U.UNPACK_SKIP_ROWS,fn),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Gn),pe===0&&I.generateMipmaps&&U.generateMipmap(ge),_.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&K.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?K.setTextureCube(M,0):M.isData3DTexture?K.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?K.setTexture2DArray(M,0):K.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){H=0,X=0,j=null,_.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}function d_(r){const e=new u_({canvas:r,antialias:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(devicePixelRatio||1,1.65)),e.outputColorSpace=pt,e.toneMapping=fo,e.toneMappingExposure=1.3,e.shadowMap.enabled=!0,e.shadowMap.type=ur,e}function Tr(r){const e=new Set,t=new Set,n=new Set;r.traverse(i=>{if(i instanceof mt||i instanceof ou){e.add(i.geometry);for(const s of Array.isArray(i.material)?i.material:[i.material]){t.add(s);for(const a of Object.values(s))a instanceof Et&&n.add(a)}}(i instanceof Ms||i instanceof Fi||i instanceof Fo)&&i.shadow.dispose()});for(const i of e)i.dispose();for(const i of t)i.dispose();for(const i of n)i.dispose()}class h_{constructor(e){this.canvas=e,this.gl=d_(e)}canvas;gl;scene=new Rc;cutScene=new Rc;camera=new Wi(-8,8,5,-5,.1,100);width=1;height=1;angle=0;externalCamera=!1;editorMode=!1;beforeRender;afterRender;cameraSettings=ls();center=new O;configureCamera(e=lo){this.cameraSettings=ls(e);const t=this.camera;e.projection==="perspective"!=t instanceof Ct&&(this.camera=e.projection==="perspective"?new Ct(e.fov,1,.1,100):new Wi(-8,8,5,-5,.1,100),this.camera.position.copy(t.position),this.camera.quaternion.copy(t.quaternion),this.camera.up.copy(t.up),this.camera.zoom=t.zoom),this.camera instanceof Ct&&(this.camera.fov=e.fov),this.camera.near=this.cameraSettings.near,this.camera.far=this.cameraSettings.far,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}resize(){const e=this.canvas.getBoundingClientRect();this.width=Math.max(1,e.width),this.height=Math.max(1,e.height),this.gl.setSize(this.width,this.height,!1)}updateCamera(e){const t=this.cameraSettings,n=this.width/this.height;this.center.lerp(new O(t.centerX,t.centerY,0),t.smoothing?1-Math.exp(-e*t.smoothing):1),this.camera instanceof Ct?this.camera.aspect=n:(this.camera.left=-t.height*n/2,this.camera.right=t.height*n/2,this.camera.top=t.height/2,this.camera.bottom=-t.height/2),this.camera.zoom=1,this.camera.position.set(this.center.x,this.center.y,t.distance),this.camera.up.set(0,1,0),this.camera.rotation.set(0,0,0),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}project(e){const t=e.clone().project(this.camera);return{x:(t.x+1)*this.width/2,y:(1-t.y)*this.height/2}}render(e){this.externalCamera||this.updateCamera(e),this.beforeRender?.(),this.gl.render(this.scene,this.camera),this.afterRender?.()}dispose(){Tr(this.scene),Tr(this.cutScene),this.gl.dispose(),this.gl.forceContextLoss()}}class f_{constructor(e){this.renderer=e,e.scene.add(this.root)}renderer;sources=new Map;instances=new Map;root=new en;prototypes=new Map;textures=new Map;prefabs=new Map;validators=[];initial=nc();document=nc();revision=0;validate(e){const t=zu(e);for(const n of this.validators)n(t);for(const n of t.nodes){if(n.kind==="source"&&!this.sources.has(n.asset))throw new Error("Исходный ресурс недоступен: "+n.name);if(n.kind==="model"&&!this.prototypes.has(n.asset))throw new Error("Модель не загружена: "+n.name)}return t}apply(e){const t=this.validate(e);this.document=t;const n=new Set(t.nodes.map(i=>i.id));for(const[i,s]of this.instances)n.has(i)||(this.disposeInstance(s),this.instances.delete(i));for(const i of this.sources.values())i.wrapper.visible=!1;for(const i of t.nodes){const s=i.kind+":"+(i.asset||"");let a=this.instances.get(i.id);a&&a.key!==s&&(this.disposeInstance(a),this.instances.delete(i.id),a=void 0),a||(a=this.instantiate(i),this.instances.set(i.id,a));const o=a.root;if(o.position.fromArray(i.transform.position),o.rotation.set(...i.transform.rotation.map(ms.degToRad)),o.scale.fromArray(i.transform.scale),o.visible=i.visible,o.name=i.name,o.userData.sceneNode=i.id,o.updateMatrixWorld(!0),this.applySurface(a,i.surface),i.light){const c=o.children.find(l=>l instanceof wr);c.color.set(i.light.color),c.intensity=i.light.intensity,c.distance=i.light.range,c.castShadow=i.light.shadows&&i.light.intensity>0,c instanceof Fi&&(c.angle=ms.degToRad(i.light.angle),c.penumbra=i.light.penumbra)}}this.renderer.gl.toneMappingExposure=t.environment.exposure,this.renderer.cameraSettings=ls(t.camera),(!this.renderer.editorMode||!this.renderer.externalCamera)&&this.renderer.configureCamera(t.camera),this.revision++}instantiate(e){let t=new en,n=!1;if(e.kind==="source"){const s=this.sources.get(e.asset);e.id===e.asset?t=s.wrapper:(t.add(s.prototype.clone(!0)),(s.cut?this.renderer.cutScene:this.root).add(t))}else if(this.root.add(t),e.kind==="model")t.add(this.prototypes.get(e.asset).clone(!0));else if(e.kind==="prefab"){n=!0;const s=this.prefabs.get(e.asset);if(!s)throw new Error("Шаблон не зарегистрирован: "+e.asset);t.add(s())}else if(e.kind.endsWith("-light")){const s=e.kind==="spot-light"?new Fi:new Ms;s.decay=2,s.shadow.mapSize.set(512,512),s.shadow.camera.near=.05,s.shadow.normalBias=.012,t.add(s),s instanceof Fi&&(s.target.position.set(0,0,-1),t.add(s.target))}else if(e.kind==="camera")t.userData.camera=!0;else{n=!0;const s=e.kind==="sphere"?new No(.5,24,16):e.kind==="plane"?new si(1,1,.04):new si(1,1,1),a=new mt(s,new ni({color:9212561,roughness:.9}));a.position.y=.5,a.castShadow=a.receiveShadow=!0,t.add(a)}const i=new Map;return t.traverse(s=>{s instanceof mt&&i.set(s,s.material)}),{root:t,key:e.kind+":"+(e.asset||""),surfaceKey:"",ownedMaterials:new Set,ownedTextures:new Set,originals:i,ownsGeometry:n,ownsMaterials:e.kind!=="prefab"}}applySurface(e,t){const n=t&&this.document.textures.find(a=>a.id===t.texture),i=JSON.stringify(t||null)+(n?.data||"");if(i===e.surfaceKey)return;e.surfaceKey=i;for(const a of e.ownedMaterials)a.dispose();for(const a of e.ownedTextures)a.dispose();e.ownedMaterials.clear(),e.ownedTextures.clear();let s;n&&(s=new ys().load(n.data),s.colorSpace=pt,s.wrapS=s.wrapT=Sn,s.repeat.setScalar(t.repeat),e.ownedTextures.add(s));for(const[a,o]of e.originals){if(!t){a.material=o;continue}const c=(Array.isArray(o)?o:[o]).map(l=>{const u=l instanceof ni?l.clone():new ni({side:l.side});u.color.set(t.color),u.roughness=t.roughness,u.metalness=t.metalness;const d=t.texture==="original"?l.map:this.textures.get(t.texture);if(u.map=null,s?u.map=s:d&&(u.map=d.clone(),u.map.wrapS=u.map.wrapT=Sn,u.map.repeat.setScalar(t.repeat),u.map.needsUpdate=!0,e.ownedTextures.add(u.map)),t.texture!=="original")for(const[h,f]of[["normal","normalMap"],["roughness","roughnessMap"],["metalness","metalnessMap"],["ao","aoMap"]]){const g=this.textures.get(t.texture+":"+h);if(u[f]=null,g){const v=g.clone();v.repeat.setScalar(t.repeat),v.needsUpdate=!0,u[f]=v,e.ownedTextures.add(v)}}return e.ownedMaterials.add(u),u});a.material=Array.isArray(o)?c:c[0]}}beforeRender(e){const t=new Set(this.document.nodes.map(n=>n.id));for(const[n,i]of this.sources)t.has(n)||(i.wrapper.visible=!1);for(const n of this.document.nodes)this.instances.get(n.id).root.visible=n.visible}disposeInstance(e){for(const[t,n]of e.originals)t.material=n;for(const t of e.ownedMaterials)t.dispose();for(const t of e.ownedTextures)t.dispose();if([...this.sources.values()].some(t=>t.wrapper===e.root)){e.root.visible=!1;return}e.root.removeFromParent(),e.root.traverse(t=>{if(e.ownsGeometry&&t instanceof mt&&(t.geometry.dispose(),e.ownsMaterials))for(const n of Array.isArray(t.material)?t.material:[t.material])n.dispose();(t instanceof Ms||t instanceof Fi)&&t.shadow.dispose()})}dispose(){for(const e of this.instances.values())this.disposeInstance(e);this.instances.clear(),this.root.removeFromParent()}}function El(r,e){if(e===yd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===no||e===Zl){let t=r.getIndex();if(t===null){const s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===no)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function p_(r){const e=new Map,t=new Map,n=r.clone();return Su(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Su(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Su(r.children[n],e.children[n],t)}class m_ extends $i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new y_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new P_(t)}),this.register(function(t){return new L_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new C_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new Tl(t,ze.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Tl(t,ze.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new D_(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=pr.extractUrlBase(e);a=pr.resolveURL(l,this.path)}else a=pr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new fu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Eu){try{a[ze.KHR_BINARY_GLTF]=new N_(e)}catch(d){i&&i(d);return}s=JSON.parse(a[ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Y_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case ze.KHR_MATERIALS_UNLIT:a[d]=new x_;break;case ze.KHR_DRACO_MESH_COMPRESSION:a[d]=new U_(s,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:a[d]=new F_;break;case ze.KHR_MESH_QUANTIZATION:a[d]=new O_;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function g_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function gt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class __{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Pe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Yt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Fo(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ms(u),l.distance=d;break;case"spot":l=new Fi(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),gn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class x_{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return ti}extendParams(e,t,n){const i=[];e.color=new Pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Yt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,pt))}return Promise.all(i)}}class v_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=gt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class y_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){const n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(s,s)}return Promise.all(i)}}class M_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){const n=gt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class b_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){const n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class S_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){const n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Yt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,pt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class E_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){const n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class T_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){const n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(s[0],s[1],s[2],Yt),Promise.all(i)}}class w_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){const n=gt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class A_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){const n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(s[0],s[1],s[2],Yt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,pt)),Promise.all(i)}}class R_{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){const n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class C_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){const n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class P_{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class L_{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class I_{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Tl{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(f),u,d,h,i.mode,i.filter),f})})}else return null}}class D_{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Jt.TRIANGLES&&l.mode!==Jt.TRIANGLE_STRIP&&l.mode!==Jt.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],h=l[0].count,f=[];for(const g of d){const v=new ke,m=new O,p=new Hn,b=new O(1,1,1),w=new bh(g.geometry,g.material,h);for(let S=0;S<h;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&b.fromBufferAttribute(c.SCALE,S),w.setMatrixAt(S,v.compose(m,p,b));let y=null;for(const S in c)if(S==="_COLOR_0"){const E=c[S];w.instanceColor=new gs(E.array,E.itemSize,E.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(y===null){const R=w.geometry;y=new Nt,y.name=R.name;for(const x in R.attributes)y.setAttribute(x,R.attributes[x]);for(const x in R.morphAttributes)y.morphAttributes[x]=R.morphAttributes[x];R.index!==null&&y.setIndex(R.index),y.morphTargetsRelative=R.morphTargetsRelative;for(const x of R.groups)y.addGroup(x.start,x.count,x.materialIndex);R.boundingBox!==null&&(y.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(y.boundingSphere=R.boundingSphere.clone()),y.drawRange.start=R.drawRange.start,y.drawRange.count=R.drawRange.count,y.userData=Object.assign({},R.userData),w.geometry=y}const E=c[S];y.setAttribute(S,new gs(E.array,E.itemSize,E.normalized))}dt.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Eu="glTF",ar=12,wl={JSON:1313821514,BIN:5130562};class N_{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ar),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Eu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ar,s=new DataView(e,ar);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===wl.JSON){const l=new Uint8Array(e,ar+a,o);this.content=n.decode(l)}else if(c===wl.BIN){const l=ar+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class U_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const d=oo[u]||u.toLowerCase();o[d]=a[u]}for(const u in e.attributes){const d=oo[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],f=zi[h.componentType];l[d]=f.name,c[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}d(f)},o,l,Yt,h)})})}}class F_{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class O_{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class Tu extends Xi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,d=(n-t)/u,h=d*d,f=h*d,g=e*l,v=g-l,m=-2*f+3*h,p=f-h,b=1-m,w=p-h+d;for(let y=0;y!==o;y++){const S=a[v+y+o],E=a[v+y+c]*u,R=a[g+y+o],x=a[g+y]*u;s[y]=b*S+w*E+m*R+p*x}return s}}const k_=new Hn;class B_ extends Tu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return k_.fromArray(s).normalize().toArray(s),s}}const Jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},zi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Al={9728:bt,9729:St,9984:Gl,9985:ns,9986:cr,9987:Fn},Rl={33071:vn,33648:us,10497:Sn},pa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},oo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},z_={CUBICSPLINE:void 0,LINEAR:vr,STEP:xr},ma={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function H_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ni({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),r.DefaultMaterial}function hi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function gn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function V_(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;a.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;o.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],h=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function G_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function W_(r){let e;const t=r.extensions&&r.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ga(t.attributes):e=r.indices+":"+ga(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ga(r.targets[n]);return e}function ga(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function co(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function X_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const q_=new ke;class Y_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new g_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new ys(this.options.manager):this.textureLoader=new ef(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return hi(s,o,i),gn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())s(u,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(pr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=pa[i.type],o=zi[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Vt(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=pa[i.type],l=zi[i.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,h=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(f&&f!==d){const p=Math.floor(h/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let w=t.cache.get(b);w||(v=new l(o,p*f,i.count*f/u),w=new fh(v,f/u),t.cache.add(b,w)),m=new wo(w,c,h%f/u,g)}else o===null?v=new l(i.count*c):v=new l(o,h,i.count*c),m=new Vt(v,c,g);if(i.sparse!==void 0){const p=pa.SCALAR,b=zi[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new b(a[1],w,i.sparse.count*p),E=new l(a[2],y,i.sparse.count*c);o!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,x=S.length;R<x;R++){const T=S[R];if(m.setX(T,E[R*c]),c>=2&&m.setY(T,E[R*c+1]),c>=3&&m.setZ(T,E[R*c+2]),c>=4&&m.setW(T,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(s.samplers||{})[a.sampler]||{};return u.magFilter=Al[h.magFilter]||St,u.minFilter=Al[h.minFilter]||Fn,u.wrapS=Rl[h.wrapS]||Sn,u.wrapT=Rl[h.wrapT]||Sn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==bt&&u.minFilter!==St,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;const h=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Et(v);m.needsUpdate=!0,h(m)}),t.load(pr.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),gn(d,a),d.userData.mimeType=a.mimeType||X_(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new au,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new su,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ni}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[ze.KHR_MATERIALS_UNLIT]){const d=i[ze.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],Yt),o.opacity=h[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,pt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=xn);const u=s.alphaMode||ma.OPAQUE;if(u===ma.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ma.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ti&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new He(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==ti&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ti){const d=s.emissiveFactor;o.emissive=new Pe().setRGB(d[0],d[1],d[2],Yt)}return s.emissiveTexture!==void 0&&a!==ti&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,pt)),Promise.all(l).then(function(){const d=new a(o);return s.name&&(d.name=s.name),gn(d,s),t.associations.set(d,{materials:e}),s.extensions&&hi(i,d,s),d})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Cl(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=W_(l),d=i[u];if(d)a.push(d.promise);else{let h;l.extensions&&l.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?h=s(l):h=Cl(new Nt,l,t),l.mode===Jt.TRIANGLE_STRIP?h=h.then(f=>El(f,Zl)):l.mode===Jt.TRIANGLE_FAN&&(h=h.then(f=>El(f,no))),i[u]={primitive:l,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?H_(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const v=u[f],m=a[f];let p;const b=l[f];if(m.mode===Jt.TRIANGLES||m.mode===Jt.TRIANGLE_STRIP||m.mode===Jt.TRIANGLE_FAN||m.mode===void 0){const w=s.isSkinnedMesh===!0,y=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");w&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=w&&y?new vh(v,b):new mt(v,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Jt.LINES)p=new Eh(v,b);else if(m.mode===Jt.LINE_STRIP)p=new Po(v,b);else if(m.mode===Jt.LINE_LOOP)p=new Th(v,b);else if(m.mode===Jt.POINTS)p=new ou(v,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&G_(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),gn(p,s),m.extensions&&hi(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&hi(i,d[0],s),d[0];const h=new en;s.extensions&&hi(i,h,s),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ct(ms.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const d=a[l];if(d){o.push(d);const h=new ke;s!==null&&h.fromArray(s.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ro(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){const f=i.channels[d],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),l.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],v=d[3],m=d[4],p=[];for(let w=0,y=h.length;w<y;w++){const S=h[w],E=f[w],R=g[w],x=v[w],T=m[w];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const C=n._createAnimationTracks(S,E,R,x,T);if(C)for(let N=0;N<C.length;N++)p.push(C[N])}const b=new Gh(s,void 0,p);return gn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const u=l[0],d=l[1],h=l[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,q_)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){const f=u.userData.pivot,g=d[0];u.pivot=new O().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new ru:l.length>1?u=new en:l.length===1?u=l[0]:u=new dt,u!==l[0])for(let d=0,h=l.length;d<h;d++)u.add(l[d]);if(s.name&&(u.userData.name=s.name,u.name=a),gn(u,s),s.extensions&&hi(n,u,s),s.matrix!==void 0){const d=new ke;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const d=i.associations.get(u);i.associations.set(u,{...d})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new en;n.name&&(s.name=i.createUniqueName(n.name)),gn(s,n),n.extensions&&hi(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,d=c.length;u<d;u++){const h=c[u];h.parent!==null?s.add(p_(h)):s.add(h)}const l=u=>{const d=new Map;for(const[h,f]of i.associations)(h instanceof bn||h instanceof Et)&&d.set(h,f);return u.traverse(h=>{const f=i.associations.get(h);f!=null&&d.set(h,f)}),d};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Qn[s.path]===Qn.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(Qn[s.path]){case Qn.weights:u=Sr;break;case Qn.rotation:u=Er;break;case Qn.translation:case Qn.scale:u=vs;break;default:n.itemSize===1?u=Sr:u=vs;break}const d=i.interpolation!==void 0?z_[i.interpolation]:vr,h=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){const v=new u(c[f]+"."+Qn[s.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=co(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Er?B_:Tu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function $_(r,e,t){const n=e.attributes,i=new Vn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),o.normalized){const u=co(zi[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new O,c=new O;for(let l=0,u=s.length;l<u;l++){const d=s[l];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const v=co(zi[h.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new An;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Cl(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=oo[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return We.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),gn(r,e),$_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?V_(r,e.targets,t):r})}class K_{models=new Map;textures=new Map;async load(e,t,n=i=>{}){let i=0;try{for(const s of e)if(!(this.models.has(s.id)||this.textures.has("asset:"+s.id))){if(s.type==="model"){const o=(await new m_().loadAsync(t(s.path))).scene;o.scale.multiplyScalar(s.unitScale||1),o.traverse(l=>{l instanceof mt&&(l.castShadow=l.receiveShadow=!0)});const c=new en;c.add(o),this.models.set(s.id,c)}if(s.type==="texture"){const a=await new ys().loadAsync(t(s.path));if(a.image.width>4096||a.image.height>4096)throw a.dispose(),new Error("Текстура превышает 4096 × 4096.");a.colorSpace=pt,a.wrapS=a.wrapT=Sn,this.textures.set("asset:"+s.id,a)}if(s.type==="material")for(const[a,o]of Object.entries(s.maps||{})){const c=await new ys().loadAsync(t(o));if(c.image.width>4096||c.image.height>4096)throw c.dispose(),new Error("Карта материала превышает 4096 × 4096.");c.colorSpace=a==="baseColor"?pt:Un,c.wrapS=c.wrapT=Sn,this.textures.set("asset:"+s.id+(a==="baseColor"?"":":"+a),c)}n(++i/e.length)}}catch(s){throw new Error("Не удалось загрузить ресурс: "+(s instanceof Error?s.message:String(s)))}}bind(e){e.prototypes=this.models;for(const[t,n]of this.textures)e.textures.set(t,n)}dispose(){for(const e of this.models.values())Tr(e);for(const e of this.textures.values())e.dispose();this.models.clear(),this.textures.clear()}}function bs(r){const e=[],t=(o,c)=>e.push({id:o,message:c});if(!r||r.version!==1||!Number.isFinite(r.floorHeight)||r.floorHeight<2.3||r.floorHeight>8||![r.rooms,r.doors,r.stairs,r.openings].every(Array.isArray))return[{id:"layout",message:"Некорректная планировка или высота этажа (2,3–8 м)."}];if(!r.spawn||!Number.isFinite(r.spawn.x)||!Number.isInteger(r.spawn.floor)||[...r.rooms,...r.doors,...r.stairs,...r.openings].some(o=>!o||typeof o.id!="string"||typeof o.name!="string")||r.rooms.some(o=>![o.x,o.width,o.floor,o.depth].every(Number.isFinite))||r.doors.some(o=>![o.x,o.floor].every(Number.isFinite))||r.stairs.some(o=>![o.a,o.b,o.from,o.to].every(Number.isFinite))||r.openings.some(o=>![o.x,o.bottom,o.width,o.height].every(Number.isFinite)))return[{id:"layout",message:"Повреждены данные планировки: проверьте элементы, координаты и появление."}];const n=new Set;for(const o of[...r.rooms,...r.doors,...r.stairs,...r.openings])n.has(o.id)&&t(o.id,"Повторяющийся элемент планировки."),n.add(o.id);for(const o of r.rooms){(!Number.isFinite(o.x)||!Number.isFinite(o.width)||!Number.isInteger(o.floor)||o.width<1||o.width>100||o.depth<1||o.depth>30)&&t(o.id,o.name+": проверьте размеры комнаты.");for(const c of r.rooms)o.id<c.id&&o.floor===c.floor&&o.x<c.x+c.width-.01&&o.x+o.width>c.x+.01&&t(o.id,o.name+": пересечение с комнатой «"+c.name+"».")}const i=(o,c)=>r.rooms.find(l=>l.floor===c&&o>=l.x-.01&&o<=l.x+l.width+.01);for(const o of r.doors)r.rooms.some(c=>c.floor===o.floor&&(Math.abs(c.x-o.x)<.02||Math.abs(c.x+c.width-o.x)<.02))||t(o.id,o.name+": дверь должна находиться на границе комнаты.");for(const o of r.stairs)(!i(o.a,o.from)||!i(o.b,o.to)||o.to!==o.from+1||(o.kind==="ladder"?Math.abs(o.b-o.a)>.01:Math.abs(o.b-o.a)<1.5))&&t(o.id,o.name+": соедините комнаты соседних этажей; длина марша — от 1,5 м.");for(const o of r.openings){const c=r.rooms.find(l=>l.id===o.room);(!c||!["window","breach"].includes(o.kind)||o.plane&&!["back","divider"].includes(o.plane)||o.width<=0||o.height<=0||(o.plane==="divider"?Math.min(Math.abs(o.x-c.x),Math.abs(o.x-c.x-c.width))>.02||o.width>c.depth:o.x-o.width/2<c.x||o.x+o.width/2>c.x+c.width)||o.bottom<0||o.bottom+o.height>r.floorHeight-.15)&&t(o.id,o.name+": проём должен помещаться на выбранной стене комнаты.")}i(r.spawn?.x,r.spawn?.floor)||t("spawn","Точка появления должна быть внутри комнаты.");const s=new Set,a=i(r.spawn?.x,r.spawn?.floor);a&&s.add(a.id);for(let o=0;o<r.rooms.length;o++){for(const c of[...r.doors,...r.openings.filter(wu).map(l=>({x:l.x,floor:r.rooms.find(u=>u.id===l.room)?.floor??0}))]){const l=i(c.x-.05,c.floor),u=i(c.x+.05,c.floor);l&&u&&(s.has(l.id)||s.has(u.id))&&(s.add(l.id),s.add(u.id))}for(const c of r.stairs){const l=i(c.a,c.from),u=i(c.b,c.to);l&&u&&(s.has(l.id)||s.has(u.id))&&(s.add(l.id),s.add(u.id))}}for(const o of r.rooms)s.has(o.id)||t(o.id,o.name+": нет маршрута от точки появления. Добавьте дверь или лестницу.");return e}function Z_(r){const e=bs(r);if(e.length)throw new Error(e.map(t=>t.message).join(`
`))}const wu=r=>r.plane==="divider"&&r.kind==="breach"&&r.bottom===0&&r.height>=1.8&&r.width>0;function J_(r,e,t,n,i){for(const s of r.rooms.filter(a=>a.floor===n))for(const a of[s.x,s.x+s.width])if((e-a)*(t-a)<=0&&e!==t&&!r.doors.some(o=>o.floor===n&&Math.abs(o.x-a)<.02&&i.has(o.id))&&!r.openings.some(o=>wu(o)&&Math.abs(o.x-a)<.02&&r.rooms.find(c=>c.id===o.room)?.floor===n))return a;return null}function Pl(r,e,t,n){const i=(o,c)=>r.rooms.find(l=>l.floor===c&&o>=l.x&&o<=l.x+l.width),s=i(e,t),a=new Set(s?[s.id]:[]);for(let o=0;o<r.rooms.length;o++)for(const c of[...r.doors.filter(l=>n.has(l.id)),...r.openings.filter(l=>l.plane==="divider").map(l=>({x:l.x,floor:r.rooms.find(u=>u.id===l.room)?.floor??0}))]){const l=i(c.x-.05,c.floor),u=i(c.x+.05,c.floor);l&&u&&(a.has(l.id)||a.has(u.id))&&(a.add(l.id),a.add(u.id))}for(const o of r.stairs)if(Math.abs(e-(t===o.from?o.a:o.b))<.8&&(t===o.from||t===o.to)){const c=i(o.a,o.from),l=i(o.b,o.to);c&&l&&(a.has(c.id)||a.has(l.id))&&(a.add(c.id),a.add(l.id))}return a}class Au{constructor(e){this.scene=e,e.add(this.root)}scene;root=new en;doors=new Map;key="";apply(e){const t=bs(e).find(c=>c.id==="layout");if(t)throw new Error(t.message);const n=JSON.stringify(e);if(n===this.key)return;this.key=n,Tr(this.root),this.root.clear(),this.doors.clear();const i=new Set(bs(e).map(c=>c.id)),s=(c,l,u,d,h,f,g,v,m)=>{const p=new mt(new si(Math.max(.01,h),Math.max(.01,f),Math.max(.01,g)),new ni({color:i.has(m)?"#b54f52":v,roughness:.85}));return p.position.set(l,u,d),p.castShadow=p.receiveShadow=!0,p.userData.layoutId=m,c.add(p),p},a=new Set;for(const c of e.rooms){const l=c.floor*e.floorHeight,u=e.floorHeight,d=-c.depth/2,h=e.stairs.filter(m=>m.to===c.floor&&m.b>=c.x&&m.b<=c.x+c.width).map(m=>m.kind==="ladder"?[m.b-.45,m.b+.45]:[Math.min(m.a,m.b),Math.max(m.a,m.b)+.3]);let f=[[c.x,c.x+c.width]];for(const[m,p]of h)f=f.flatMap(([b,w])=>w<=m||b>=p?[[b,w]]:[[b,Math.max(b,m)],[Math.min(w,p),w]].filter(([y,S])=>S-y>.01));for(const[m,p]of f)s(this.root,(m+p)/2,l-.09,0,p-m,.18,c.depth,"#646761",c.id);s(this.root,c.x+c.width/2,l-.09,c.depth/2-.12,c.width,.18,.24,"#42453f",c.id);const g=e.openings.filter(m=>m.room===c.id&&m.plane!=="divider"),v=[c.x,c.x+c.width,...g.flatMap(m=>[m.x-m.width/2,m.x+m.width/2])].sort((m,p)=>m-p);for(let m=1;m<v.length;m++){const p=v[m-1],b=v[m],w=g.find(y=>(p+b)/2>y.x-y.width/2&&(p+b)/2<y.x+y.width/2);w?(w.bottom&&s(this.root,(p+b)/2,l+w.bottom/2,d,b-p,w.bottom,.14,c.color,c.id),s(this.root,(p+b)/2,l+(u+w.bottom+w.height)/2,d,b-p,u-w.bottom-w.height,.14,c.color,c.id)):s(this.root,(p+b)/2,l+u/2,d,b-p,u,.14,c.color,c.id)}for(const m of[c.x,c.x+c.width]){const p=m+":"+c.floor;if(a.has(p))continue;a.add(p);const b=e.doors.find(y=>y.floor===c.floor&&Math.abs(y.x-m)<.02),w=e.openings.find(y=>y.plane==="divider"&&Math.abs(y.x-m)<.02&&e.rooms.find(S=>S.id===y.room)?.floor===c.floor);if(!b&&w){const y=Math.min(w.width,c.depth),S=w.bottom,E=S+w.height;S>0&&s(this.root,m,l+S/2,0,.14,S,c.depth,c.color,w.id),E<u&&s(this.root,m,l+(E+u)/2,0,.14,u-E,c.depth,c.color,w.id);const R=(c.depth-y)/2;if(R>0)for(const x of[-1,1])s(this.root,m,l+(S+E)/2,x*(y+R)/2,.14,w.height,R,c.color,w.id)}else if(!b)s(this.root,m,l+u/2,0,.14,u,c.depth,c.color,c.id);else{s(this.root,m,l+(u+2.1)/2,0,.16,u-2.1,c.depth,c.color,b.id),s(this.root,m,l+1.05,-c.depth/4-.3,.16,2.1,c.depth/2-.6,c.color,b.id),s(this.root,m,l+1.05,c.depth/4+.3,.16,2.1,c.depth/2-.6,c.color,b.id);const y=new en;y.position.set(m,l,-.6),s(y,0,1.03,.6,.08,2.06,1.16,"#6f513a",b.id),this.root.add(y),this.doors.set(b.id,y)}}}for(const c of e.stairs){if(c.kind==="ladder"){for(const u of[-.35,.35])s(this.root,c.a+u,(c.from+.5)*e.floorHeight,-.75,.06,e.floorHeight,.09,"#89877d",c.id);for(let u=.2;u<e.floorHeight;u+=.28)s(this.root,c.a,c.from*e.floorHeight+u,-.75,.7,.05,.08,"#89877d",c.id);continue}const l=16;for(let u=0;u<l;u++){const d=(u+.5)/l;s(this.root,c.a+(c.b-c.a)*d,c.from*e.floorHeight+(u+1)*e.floorHeight/l-.06,-.75,Math.abs(c.b-c.a)/l+.02,.12,1.1,"#89877d",c.id)}}const o=new mt(new Do(.16,.4,16),new ti({color:i.has("spawn")?"#ff5555":"#8fd8bd"}));o.position.set(e.spawn.x,e.spawn.floor*e.floorHeight+.2,0),o.userData.layoutId="spawn",o.userData.editorOnly=!0,this.root.add(o),this.setDoors(new Set(e.doors.filter(c=>c.open).map(c=>c.id)))}setDoors(e){for(const[t,n]of this.doors)n.rotation.y=e.has(t)?Math.PI/2:0}dispose(){Tr(this.root),this.root.removeFromParent()}}function Q_(r,e=!0){const t=new h_(r),n=new f_(t);n.validators.push(a=>{const o=a.moduleData?.layout;if(o){const c=bs(o).find(l=>l.id==="layout");if(c)throw new Error(c.message)}}),t.scene.background=new Pe("#29343c"),t.scene.add(new Zh(13295083,3420195,2));const i=new Fo(16772558,3);i.position.set(-4,10,6),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),Object.assign(i.shadow.camera,{left:-20,right:20,top:20,bottom:-20}),t.scene.add(i);const s=new Au(t.scene);return{renderer:t,runtime:n,floorHeight:3,floorNames:[{value:-1,name:"Подвал"},{value:0,name:"1 этаж"},{value:1,name:"2 этаж"},{value:2,name:"3 этаж"}],prefabs:{},draw:a=>{const o=n.document.moduleData?.layout;o&&e?s.apply(o):s.key&&(s.dispose(),s.key=""),i.intensity=.15+3*Math.max(0,Math.sin((n.document.environment.time-360)/1440*Math.PI*2)),t.scene.fog=new To("#29343c",n.document.environment.haze),t.render(a)},updateCamera:a=>t.updateCamera(a),dispose:()=>{s.dispose(),n.dispose(),t.dispose()}}}async function j_(r){const e=[...r.registry.modules.values()].find(H=>H.createSession);if(e)return e.createSession(r);const t=structuredClone(r.snapshot);let n=r.sceneId,i=!1,s=!1,a=0,o=performance.now(),c,l,u=[],d,h,f,g=new Set,v=0,m=0,p;const b=new Set,w=new AbortController,y=r.container;y.innerHTML='<canvas tabindex="0" aria-label="Игра" style="width:100%;height:100%;display:block"></canvas><div class="runtime-actions" style="position:absolute;bottom:14px;left:14px;display:flex;gap:8px;flex-wrap:wrap"></div>';let S=y.querySelector("canvas");const E=y.querySelector(".runtime-actions"),R=_a(t.manifest.projectId,"progress",t.manifest.build.appId);let x;try{r.savePolicy==="persistent"&&(x=JSON.parse(localStorage.getItem(R)||"null"))}catch{}async function T(H){const X=t.scenes[H];if(!X)throw new Error("Сцена перехода не включена: "+H);r.registry.validate(X,t.manifest),X.moduleData?.layout&&Z_(X.moduleData.layout);const j=new K_;if(await j.load(t.manifest.assets,r.assetUrl),i){j.dispose();return}for(const P of u)r.registry.components.get(P.component.type)?.dispose?.(P);d?.dispose(),c?.dispose(),l?.dispose();const Y=S.cloneNode(!1);if(S.replaceWith(Y),S=Y,l=j,c=Q_(S,!1),l.bind(c.runtime),c.runtime.apply(X),c.renderer.resize(),n=H,c.renderer.beforeRender=()=>{},f=X.moduleData?.layout,d=void 0,h=void 0,p=void 0,E.innerHTML="",f){d=new Au(c.renderer.scene),d.apply(f),d.root.traverse(B=>{B.userData.editorOnly&&(B.visible=!1)}),g=new Set(f.doors.filter(B=>B.open).map(B=>B.id)),v=f.spawn.floor,m=f.spawn.x,h=new mt(new Lo(.18,1.15,6,12),new ni({color:15516541})),c.renderer.scene.add(h);const P=document.createElement("span");P.textContent="A/D — идти · W/S — лестница · E — дверь",P.style.cssText="color:white;background:#111c;padding:8px",E.append(P)}u=X.nodes.flatMap(P=>(P.components||[]).map(B=>({node:P,component:B,runtime:c.runtime,scene:X,transition:N,keys:b})));for(const P of u)if(r.registry.components.get(P.component.type)?.load?.(P),P.component.type==="basic.portal"){const B=document.createElement("button");B.textContent=String(P.component.values.label),B.onclick=()=>N(String(P.component.values.scene)),E.append(B)}c.renderer.updateCamera(100),S.focus()}let C=!1;function N(H){C||s||i||(C=!0,T(H).catch(F).finally(()=>C=!1))}function F(H){const X=document.createElement("p");X.style.cssText="position:absolute;top:10px;background:#511;color:white;padding:12px",X.textContent=String(H),y.append(X)}const z=H=>{if(!H.target.closest("input,textarea,select")&&(["KeyA","KeyD","KeyW","KeyS","KeyE","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(H.code)&&(H.preventDefault(),b.add(H.code)),H.code==="KeyE"&&!H.repeat&&!s&&f)){const X=f.doors.find(j=>j.floor===v&&Math.abs(j.x-m)<1);X&&(g.has(X.id)?g.delete(X.id):g.add(X.id),d?.setDoors(g))}};window.addEventListener("keydown",z,{signal:w.signal}),window.addEventListener("keyup",H=>b.delete(H.code),{signal:w.signal}),window.addEventListener("blur",()=>b.clear(),{signal:w.signal}),await T(x?.sceneId&&t.scenes[x.sceneId]?x.sceneId:n);const L=new ResizeObserver(()=>{c?.renderer.resize(),c?.renderer.updateCamera(100)});L.observe(y);function W(H){if(i)return;const X=Math.min(.05,(H-o)/1e3);if(o=H,!s&&!C&&c){for(const j of u)r.registry.components.get(j.component.type)?.update?.(j,X);if(f&&h){const j=Number(b.has("KeyD")||b.has("ArrowRight"))-Number(b.has("KeyA")||b.has("ArrowLeft"));if(!p){let Y=m+j*2.5*X;const P=J_(f,m,Y,v,g);P!==null&&(Y=P-Math.sign(j)*.025),f.rooms.some(Re=>Re.floor===v&&Y>=Re.x&&Y<=Re.x+Re.width)&&(m=Y);const B=b.has("KeyW")||b.has("ArrowUp"),ie=b.has("KeyS")||b.has("ArrowDown"),re=f.stairs.find(Re=>B&&Re.from===v&&Math.abs(Re.a-m)<.7||ie&&Re.to===v&&Math.abs(Re.b-m)<.7);re&&(p={...re,t:B?0:1,direction:B?1:-1})}p?(p.t+=X*.6*p.direction,m=p.a+(p.b-p.a)*Math.max(0,Math.min(1,p.t)),h.position.set(m,(p.from+Math.max(0,Math.min(1,p.t)))*f.floorHeight+.75,-.75),(p.t>=1||p.t<=0)&&(v=p.direction>0?p.to:p.from,p=void 0)):h.position.set(m,v*f.floorHeight+.75,0)}}if(c){if(f){const Y=Pl(f,m,v,g);for(const P of c.runtime.document.nodes){const B=f.rooms.find(re=>re.floor===Math.floor((P.transform.position[1]+.05)/f.floorHeight)&&P.transform.position[0]>=re.x&&P.transform.position[0]<=re.x+re.width),ie=c.runtime.instances.get(P.id)?.root;ie&&(ie.visible=P.visible&&(!B||!!P.light||Y.has(B.id)))}}const j=c.runtime.document.nodes.find(Y=>Y.id===c.runtime.document.activeCamera);j&&(c.renderer.externalCamera=!0,c.renderer.camera.position.fromArray(j.transform.position),c.renderer.camera.rotation.set(...j.transform.rotation.map(ms.degToRad)),c.renderer.camera.updateMatrixWorld()),c.draw(X)}a=requestAnimationFrame(W)}return a=requestAnimationFrame(W),{pause(H){if(s=H,b.clear(),H)for(const X of u)r.registry.components.get(X.component.type)?.pause?.(X)},dispose(){i=!0,cancelAnimationFrame(a),w.abort(),L.disconnect();for(const H of u)r.registry.components.get(H.component.type)?.dispose?.(H);if(r.savePolicy==="persistent")try{localStorage.setItem(R,JSON.stringify({sceneId:n}))}catch{}d?.dispose(),c?.dispose(),l?.dispose(),y.replaceChildren()},diagnostics:()=>({sceneId:n,paused:s,x:m,floor:v,visibleRooms:f?[...Pl(f,m,v,g)]:[],openDoors:[...g],frames:1,memory:c?.renderer.gl.info.memory})}}const ex={id:"shelter.basic",sdk:1,components:[{id:"basic.rotate",name:"Вращение",fields:[{name:"speed",label:"Скорость",type:"number",default:30,min:-360,max:360,unit:"°/с"},{name:"axis",label:"Ось",type:"select",default:"y",options:[{value:"x",label:"X"},{value:"y",label:"Y"},{value:"z",label:"Z"}]}],update:({runtime:r,node:e,component:t},n)=>{const i=r.instances.get(e.id).root;i.rotation[t.values.axis]+=Number(t.values.speed)*Math.PI/180*n}},{id:"basic.portal",name:"Переход в сцену",fields:[{name:"scene",label:"Куда перейти",type:"scene",default:""},{name:"label",label:"Надпись кнопки",type:"string",default:"Следующая сцена"}]},{id:"basic.bob",name:"Плавное покачивание",fields:[{name:"height",label:"Высота",type:"number",default:.2,min:0,max:3,unit:"м"},{name:"speed",label:"Скорость",type:"number",default:1,min:0,max:5}],update:({runtime:r,node:e,component:t},n)=>{const i=r.instances.get(e.id).root;i.userData.time=(i.userData.time||0)+n,i.position.y=e.transform.position[1]+Math.sin(i.userData.time*Number(t.values.speed))*Number(t.values.height)}}]};async function tx(r,e,t,n,i=!1){const s=new $u;s.register(ex);for(const a of e)s.register(a.default||a);return j_({container:document.querySelector("#app"),snapshot:r,sceneId:t,assetUrl:n,registry:s,savePolicy:i?"isolated":"persistent"})}const nx={format:"shelter-project",version:1,sdk:1,projectId:"prisma-garden-of-light",name:"Призма · Сад света",gameVersion:"1.0.0",startScene:"first-light",scenes:[{id:"first-light",name:"Первый свет",path:"scenes/first-light.scene.json"},{id:"detour",name:"Обходной путь",path:"scenes/detour.scene.json"},{id:"ribbon",name:"Световая лента",path:"scenes/ribbon.scene.json"},{id:"ascent",name:"Восхождение",path:"scenes/ascent.scene.json"},{id:"branch",name:"Разветвление",path:"scenes/branch.scene.json"},{id:"echo",name:"Эхо",path:"scenes/echo.scene.json"},{id:"constellation",name:"Созвездие",path:"scenes/constellation.scene.json"},{id:"cascade",name:"Каскад",path:"scenes/cascade.scene.json"},{id:"duet",name:"Дуэт",path:"scenes/duet.scene.json"},{id:"weave",name:"Переплетение",path:"scenes/weave.scene.json"},{id:"spectrum",name:"Спектр",path:"scenes/spectrum.scene.json"},{id:"garden",name:"Сад света",path:"scenes/garden.scene.json"}],assets:[],modules:[{id:"prisma",version:1,runtime:"scripts/runtime.ts"}],build:{target:"web",mode:"release",base:"./",output:"/Users/gadaev/Documents/ChatGPT/2D GAME/artifacts/builds/prisma",scenes:["first-light","detour","ribbon","ascent","branch","echo","constellation","cascade","duet","weave","spectrum","garden"],dynamicAssets:[],appId:"game.prisma-garden-of-light"}},ix=JSON.parse('{"first-light":{"format":"shelter-scene","version":2,"id":"first-light","template":"prisma-optics-v1","name":"Первый свет","units":"m","nodes":[{"id":"optic-0","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"amber","direction":0,"angle":0}}]},{"id":"optic-1","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-2","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-3","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-4","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-5","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]}],"textures":[],"camera":{"projection":"orthographic","fov":35,"height":12,"distance":20,"follow":"fixed"},"environment":{"time":0,"haze":0,"exposure":1,"flashlight":false},"moduleData":{"prisma":{"size":7,"chapter":0,"caption":"У каждого путешествия есть первый луч.","lesson":"Нажмите на зеркало, чтобы повернуть его. Проведите луч от источника к круглому приёмнику."}}},"detour":{"format":"shelter-scene","version":2,"id":"detour","template":"prisma-optics-v1","name":"Обходной путь","units":"m","nodes":[{"id":"optic-0","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"amber","direction":0,"angle":0}}]},{"id":"optic-1","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-2","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-3","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-4","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-5","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-6","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-7","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-8","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-9","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]}],"textures":[],"camera":{"projection":"orthographic","fov":35,"height":12,"distance":20,"follow":"fixed"},"environment":{"time":0,"haze":0,"exposure":1,"flashlight":false},"moduleData":{"prisma":{"size":7,"chapter":0,"caption":"Иногда короткая дорога ведёт в темноту.","lesson":"Каменные блоки поглощают свет. Найдите путь вокруг них."}}},"ribbon":{"format":"shelter-scene","version":2,"id":"ribbon","template":"prisma-optics-v1","name":"Световая лента","units":"m","nodes":[{"id":"optic-0","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"amber","direction":0,"angle":0}}]},{"id":"optic-1","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-2","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-3","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-4","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-5","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-6","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-7","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-8","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-9","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-10","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-11","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]}],"textures":[],"camera":{"projection":"orthographic","fov":35,"height":12,"distance":20,"follow":"fixed"},"environment":{"time":0,"haze":0,"exposure":1,"flashlight":false},"moduleData":{"prisma":{"size":7,"chapter":0,"caption":"Сложите пространство одним движением света.","lesson":"Лучи свободно пересекаются на пустых клетках. Зеркала отражают свет с обеих сторон."}}},"ascent":{"format":"shelter-scene","version":2,"id":"ascent","template":"prisma-optics-v1","name":"Восхождение","units":"m","nodes":[{"id":"optic-0","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,6],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"amber","direction":3,"angle":0}}]},{"id":"optic-1","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-2","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-3","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-4","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-5","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-6","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-7","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-8","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-9","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-10","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]}],"textures":[],"camera":{"projection":"orthographic","fov":35,"height":12,"distance":20,"follow":"fixed"},"environment":{"time":0,"haze":0,"exposure":1,"flashlight":false},"moduleData":{"prisma":{"size":7,"chapter":0,"caption":"Свет помнит дорогу к небу.","lesson":"Проследите маршрут от источника. Три звезды — за решение без подсказок и лишних поворотов."}}},"branch":{"format":"shelter-scene","version":2,"id":"branch","template":"prisma-optics-v1","name":"Разветвление","units":"m","nodes":[{"id":"optic-0","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"amber","direction":0,"angle":0}}]},{"id":"optic-1","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-2","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-3","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-4","name":"Разделитель","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"splitter","color":"amber","direction":0,"angle":1}}]},{"id":"optic-5","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-6","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-7","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-8","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-9","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]}],"textures":[],"camera":{"projection":"orthographic","fov":35,"height":12,"distance":20,"follow":"fixed"},"environment":{"time":0,"haze":0,"exposure":1,"flashlight":false},"moduleData":{"prisma":{"size":7,"chapter":1,"caption":"Один луч. Две новые возможности.","lesson":"Ромб — разделитель: он пропускает луч прямо и создаёт отражённую ветвь. Зажгите оба приёмника."}}},"echo":{"format":"shelter-scene","version":2,"id":"echo","template":"prisma-optics-v1","name":"Эхо","units":"m","nodes":[{"id":"optic-0","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"amber","direction":0,"angle":0}}]},{"id":"optic-1","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-2","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,0],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-3","name":"Разделитель","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"splitter","color":"amber","direction":0,"angle":1}}]},{"id":"optic-4","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-5","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-6","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-7","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-8","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-9","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-10","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]}],"textures":[],"camera":{"projection":"orthographic","fov":35,"height":12,"distance":20,"follow":"fixed"},"environment":{"time":0,"haze":0,"exposure":1,"flashlight":false},"moduleData":{"prisma":{"size":7,"chapter":1,"caption":"Свет становится щедрее, когда им делятся.","lesson":"Поверните разделитель так, чтобы отражённая ветвь нашла второй приёмник."}}},"constellation":{"format":"shelter-scene","version":2,"id":"constellation","template":"prisma-optics-v1","name":"Созвездие","units":"m","nodes":[{"id":"optic-0","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"amber","direction":0,"angle":0}}]},{"id":"optic-1","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-2","name":"Разделитель","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"splitter","color":"amber","direction":0,"angle":0}}]},{"id":"optic-3","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-4","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-5","name":"Разделитель","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"splitter","color":"amber","direction":0,"angle":0}}]},{"id":"optic-6","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-7","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-8","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,6],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-9","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-10","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-11","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-12","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]}],"textures":[],"camera":{"projection":"orthographic","fov":35,"height":12,"distance":20,"follow":"fixed"},"environment":{"time":0,"haze":0,"exposure":1,"flashlight":false},"moduleData":{"prisma":{"size":7,"chapter":1,"caption":"Три тихих огня складываются в созвездие.","lesson":"Каждый разделитель создаёт дополнительный путь. Все три приёмника должны светиться одновременно."}}},"cascade":{"format":"shelter-scene","version":2,"id":"cascade","template":"prisma-optics-v1","name":"Каскад","units":"m","nodes":[{"id":"optic-0","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"amber","direction":0,"angle":0}}]},{"id":"optic-1","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-2","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-3","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-4","name":"Разделитель","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"splitter","color":"amber","direction":0,"angle":1}}]},{"id":"optic-5","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-6","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,6],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-7","name":"Разделитель","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"splitter","color":"amber","direction":0,"angle":1}}]},{"id":"optic-8","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-9","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-10","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-11","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-12","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]}],"textures":[],"camera":{"projection":"orthographic","fov":35,"height":12,"distance":20,"follow":"fixed"},"environment":{"time":0,"haze":0,"exposure":1,"flashlight":false},"moduleData":{"prisma":{"size":7,"chapter":1,"caption":"Маленький поворот меняет целую реку.","lesson":"У разделённого луча может быть собственное ответвление. Начните с ближайшего к источнику зеркала."}}},"duet":{"format":"shelter-scene","version":2,"id":"duet","template":"prisma-optics-v1","name":"Дуэт","units":"m","nodes":[{"id":"optic-0","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,6],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"amber","direction":0,"angle":0}}]},{"id":"optic-1","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,6],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-2","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-3","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-4","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,0],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-5","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[8,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"cyan","direction":2,"angle":0}}]},{"id":"optic-6","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":1}}]},{"id":"optic-7","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,7],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":1}}]},{"id":"optic-8","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,7],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":1}}]},{"id":"optic-9","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":0}}]},{"id":"optic-10","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"cyan","direction":0,"angle":0}}]},{"id":"optic-11","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-12","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-13","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-14","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[7,0,7],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]}],"textures":[],"camera":{"projection":"orthographic","fov":35,"height":12,"distance":20,"follow":"fixed"},"environment":{"time":0,"haze":0,"exposure":1,"flashlight":false},"moduleData":{"prisma":{"size":9,"chapter":2,"caption":"Два цвета учатся звучать вместе.","lesson":"Янтарный свет нужен приёмникам с кругом. Бирюзовый — с ромбом. Цвета на пересечениях не смешиваются."}}},"weave":{"format":"shelter-scene","version":2,"id":"weave","template":"prisma-optics-v1","name":"Переплетение","units":"m","nodes":[{"id":"optic-0","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"amber","direction":0,"angle":0}}]},{"id":"optic-1","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-2","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-3","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[7,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-4","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[7,0,6],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-5","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[8,0,6],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-6","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,8],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"cyan","direction":3,"angle":0}}]},{"id":"optic-7","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":0}}]},{"id":"optic-8","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":1}}]},{"id":"optic-9","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,7],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":1}}]},{"id":"optic-10","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,7],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":1}}]},{"id":"optic-11","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":1}}]},{"id":"optic-12","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[8,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"cyan","direction":0,"angle":0}}]},{"id":"optic-13","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-14","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-15","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-16","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,6],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-17","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]}],"textures":[],"camera":{"projection":"orthographic","fov":35,"height":12,"distance":20,"follow":"fixed"},"environment":{"time":0,"haze":0,"exposure":1,"flashlight":false},"moduleData":{"prisma":{"size":9,"chapter":2,"caption":"Встречаясь, лучи не теряют себя.","lesson":"Следите за цветом приёмника. Неподходящий луч поглощается, но не зажигает его."}}},"spectrum":{"format":"shelter-scene","version":2,"id":"spectrum","template":"prisma-optics-v1","name":"Спектр","units":"m","nodes":[{"id":"optic-0","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"amber","direction":0,"angle":0}}]},{"id":"optic-1","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[7,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-2","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[7,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-3","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[8,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-4","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,8],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"cyan","direction":3,"angle":0}}]},{"id":"optic-5","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,6],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":0}}]},{"id":"optic-6","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,6],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":0}}]},{"id":"optic-7","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":1}}]},{"id":"optic-8","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"cyan","direction":0,"angle":0}}]},{"id":"optic-9","name":"Разделитель","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"splitter","color":"amber","direction":0,"angle":1}}]},{"id":"optic-10","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-11","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":0}}]},{"id":"optic-12","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,0],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-13","name":"Разделитель","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"splitter","color":"cyan","direction":0,"angle":1}}]},{"id":"optic-14","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":1}}]},{"id":"optic-15","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,0],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"cyan","direction":0,"angle":0}}]},{"id":"optic-16","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-17","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-18","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,6],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-19","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]}],"textures":[],"camera":{"projection":"orthographic","fov":35,"height":12,"distance":20,"follow":"fixed"},"environment":{"time":0,"haze":0,"exposure":1,"flashlight":false},"moduleData":{"prisma":{"size":9,"chapter":2,"caption":"Четыре огня. Две нити. Один узор.","lesson":"Зеркала отражают оба цвета. Разделители тоже работают с любым цветом."}}},"garden":{"format":"shelter-scene","version":2,"id":"garden","template":"prisma-optics-v1","name":"Сад света","units":"m","nodes":[{"id":"optic-0","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"amber","direction":0,"angle":0}}]},{"id":"optic-1","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[7,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-2","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[7,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-3","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[8,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-4","name":"Источник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,8],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"source","color":"cyan","direction":3,"angle":0}}]},{"id":"optic-5","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,6],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":1}}]},{"id":"optic-6","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,6],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":0}}]},{"id":"optic-7","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":0}}]},{"id":"optic-8","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,1],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"cyan","direction":0,"angle":0}}]},{"id":"optic-9","name":"Разделитель","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,4],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"splitter","color":"amber","direction":0,"angle":0}}]},{"id":"optic-10","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-11","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"amber","direction":0,"angle":1}}]},{"id":"optic-12","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,0],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"amber","direction":0,"angle":0}}]},{"id":"optic-13","name":"Разделитель","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[1,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"splitter","color":"cyan","direction":0,"angle":0}}]},{"id":"optic-14","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,3],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":1}}]},{"id":"optic-15","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,0],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"cyan","direction":0,"angle":0}}]},{"id":"optic-16","name":"Разделитель","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,7],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"splitter","color":"cyan","direction":0,"angle":1}}]},{"id":"optic-17","name":"Зеркало","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[7,0,7],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"mirror","color":"cyan","direction":0,"angle":1}}]},{"id":"optic-18","name":"Приёмник","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[7,0,8],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#79e5de","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"target","color":"cyan","direction":0,"angle":0}}]},{"id":"optic-19","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-20","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,0,5],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-21","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,2],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]},{"id":"optic-22","name":"Камень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[8,0,6],"rotation":[0,0,0],"scale":[0.7,0.2,0.7]},"surface":{"texture":"none","color":"#ffca83","roughness":0.4,"metalness":0.4,"repeat":1},"components":[{"type":"prisma.optic","values":{"kind":"wall","color":"amber","direction":0,"angle":0}}]}],"textures":[],"camera":{"projection":"orthographic","fov":35,"height":12,"distance":20,"follow":"fixed"},"environment":{"time":0,"haze":0,"exposure":1,"flashlight":false},"moduleData":{"prisma":{"size":9,"chapter":2,"caption":"Пусть каждый уголок этого сада оживёт.","lesson":"Последняя композиция. Найдите место каждому лучу и зажгите все пять огней."}}}}'),Ll={manifest:nx,scenes:ix},rx=r=>new URL("./"+r,location.href).href;tx(Ll,[Yu],Ll.manifest.startScene,rx).catch(r=>{document.getElementById("app").textContent="Не удалось запустить игру: "+r.message});
