'use strict';
const $=(s,e=document)=>e.querySelector(s),LS='studyhub-v1';
const T={dash:['الرئيسية','Dashboard'],tasks:['المهام','Tasks'],subjects:['المواد','Subjects'],timer:['المؤقت','Timer'],schedule:['الجدول','Schedule'],stats:['الإحصائيات','Analytics'],notes:['الملاحظات','Notes'],settings:['الإعدادات','Settings'],
hello:['أهلاً بك 👋','Welcome 👋'],tag:['نظّم مذاكرتك، تابع تقدمك، وحقق أهدافك.','Organize your study, track progress, reach your goals.'],
tdy:['مذاكرة اليوم','Today\'s study'],wk:['مذاكرة الأسبوع','Weekly study'],dn:['المهام المكتملة','Completed tasks'],stk:['سلسلة المذاكرة','Study streak'],prg:['التقدم الكلي','Overall progress'],best:['أطول سلسلة','Longest streak'],days:['يوم','days'],
goal:['هدف اليوم','Daily goal'],upc:['مهام قادمة','Upcoming tasks'],tds:['جدول اليوم','Today\'s schedule'],
add:['إضافة','Add'],del:['حذف','Delete'],save:['حفظ','Save'],cancel:['إلغاء','Cancel'],ok:['تأكيد','Confirm'],
name:['الاسم','Name'],color:['اللون','Color'],target:['الساعات المستهدفة','Target hours'],prog:['التقدم %','Progress %'],note:['ملاحظات','Notes'],addS:['إضافة مادة','Add subject'],editS:['تعديل المادة','Edit subject'],
ttl:['العنوان','Title'],sub:['المادة','Subject'],desc:['الوصف','Description'],due:['تاريخ الاستحقاق','Due date'],pri:['الأولوية','Priority'],est:['الوقت المقدّر (دقيقة)','Estimated (min)'],low:['منخفضة','Low'],med:['متوسطة','Medium'],high:['عالية','High'],
addT:['إضافة مهمة','Add task'],editT:['تعديل المهمة','Edit task'],all:['الكل','All'],today:['اليوم','Today'],upcoming:['القادمة','Upcoming'],completed:['المكتملة','Completed'],over:['متأخرة','Overdue'],search:['بحث...','Search...'],
nosub:['بدون مادة','No subject'],noT:['لا توجد مهام بعد 📚|أضف أول مهمة مذاكرة للبدء.','No tasks yet 📚|Add your first study task to get started.'],noS:['لا توجد مواد 📖|أضف مادتك الأولى.','No subjects 📖|Add your first subject.'],noN:['لا توجد ملاحظات 📝|أنشئ ملاحظتك الأولى.','No notes 📝|Create your first note.'],noSes:['لا توجد جلسات بعد.','No sessions yet.'],none:['لا يوجد','Nothing'],
total:['إجمالي الوقت','Total time'],ntask:['مهام','tasks'],
focus:['مذاكرة','Focus'],sbrk:['استراحة قصيرة','Short break'],lbrk:['استراحة طويلة','Long break'],start:['ابدأ','Start'],pause:['إيقاف مؤقت','Pause'],resume:['استئناف','Resume'],reset:['إعادة','Reset'],addSes:['إضافة جلسة يدوياً','Add session manually'],dur:['المدة (دقيقة)','Duration (min)'],date:['التاريخ','Date'],sdone:['انتهت الجلسة وتم تسجيلها 🎉','Session complete and recorded 🎉'],bdone:['انتهت الاستراحة، هيا نذاكر','Break over, back to focus'],recent:['آخر الجلسات','Recent sessions'],
day:['اليوم','Day'],from:['من','Start'],to:['إلى','End'],addC:['إضافة حصة','Add slot'],badT:['وقت النهاية يجب أن يكون بعد البداية','End must be after start'],
byDay:['المذاكرة هذا الأسبوع','Study this week'],bySub:['المذاكرة حسب المادة','Study by subject'],prod:['الإنتاجية (مهام مكتملة)','Productivity (tasks done)'],topS:['أكثر مادة مذاكرة','Most studied subject'],topD:['أكثر يوم إنتاجية','Most productive day'],
appear:['المظهر','Appearance'],dark:['داكن','Dark'],light:['فاتح','Light'],lang:['اللغة','Language'],notif:['تفعيل الإشعارات','Enable notifications'],studyD:['مدة المذاكرة (دقيقة)','Study (min)'],brkD:['الاستراحة (دقيقة)','Break (min)'],longD:['الاستراحة الطويلة (دقيقة)','Long break (min)'],goalM:['هدف اليوم (دقيقة)','Daily goal (min)'],
data:['البيانات','Data'],exp:['تصدير JSON','Export JSON'],imp:['استيراد JSON','Import JSON'],clr:['مسح كل البيانات','Clear all data'],rmDemo:['إزالة البيانات التجريبية','Remove demo data'],conf:['هل أنت متأكد؟ لا يمكن التراجع عن هذا الإجراء.','Are you sure? This cannot be undone.'],
inv:['قيمة غير صحيحة','Invalid value'],err:['تعذّر الحفظ','Could not save'],impBad:['ملف غير صالح','Invalid file'],impOk:['تمت استعادة البيانات','Data restored'],saved:['تم الحفظ','Saved'],newN:['ملاحظة جديدة','New note'],calendar:['التقويم','Calendar'],goals:['الأهداف','Goals'],addG:['إضافة هدف','Add goal'],editG:['تعديل الهدف','Edit goal'],gType:['النوع','Type'],gTarget:['الهدف (دقائق أو عدد)','Target (minutes or count)'],gStudy:['دقائق مذاكرة','Study minutes'],gTasks:['مهام مكتملة اليوم','Tasks completed today'],gCheck:['هدف يدوي (تأشير)','Manual goal (check)'],noG:['لا توجد أهداف 🎯|أضف هدفك اليومي الأول.','No goals yet 🎯|Add your first daily goal.'],noDay:['لا شيء في هذا اليوم','Nothing on this day'],foot:['StudyHub by SPM','StudyHub by SPM']};
const DA=['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'],DE=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],ORD=[6,0,1,2,3,4,5];
const DEF=()=>({s:{lang:'ar',theme:'dark',study:25,brk:5,long:15,goal:120,notif:false},subjects:[],tasks:[],sessions:[],schedule:[],notes:[],goals:[],demo:false});
const uid=()=>Math.random().toString(36).slice(2,9),pad=n=>String(n).padStart(2,'0');
const ds=d=>{d=d||new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())};
const addD=n=>{const d=new Date();d.setDate(d.getDate()+n);return ds(d)};
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function seed(){const a=ds(),ar=true,d=DEF();d.demo=true;
const S=[['Mathematics','الرياضيات','#6d7bff',60],['Physics','الفيزياء','#a06bff',40],['English','الإنجليزية','#34d399',25]].map((x,i)=>({id:'m'+i,name:x[1],color:x[2],target:x[3],p:[55,30,70][i],note:'',d:1}));
d.subjects=S;d.tasks=[['Study Algebra','مذاكرة الجبر','m0',1,'high',45,0],['Review Physics Chapter 2','مراجعة الفصل الثاني فيزياء','m1',2,'med',60,0],['Practice English Vocabulary','تدرّب على مفردات الإنجليزية','m2',-1,'low',20,1]].map((x,i)=>({id:'t'+i,title:x[1],sub:x[2],desc:'',due:addD(x[3]),pri:x[4],est:x[5],done:!!x[6],d:1}));
d.sessions=[['m0',30,0],['m1',45,-1],['m2',25,-2],['m0',40,-3]].map((x,i)=>({id:'s'+i,sub:x[0],min:x[1],date:addD(x[2]),d:1}));d.goals=[{id:'g0',title:'ساعتان مذاكرة',type:'study',target:120,last:'',d:1},{id:'g1',title:'إنجاز 3 مهام',type:'tasks',target:3,last:'',d:1}];return d}
function load(){try{const r=JSON.parse(localStorage.getItem(LS));if(r&&r.s)return Object.assign(DEF(),r,{s:Object.assign(DEF().s,r.s)})}catch(e){}return DEF()}
let D=load(),L=D.s.lang;const t=k=>(T[k]||[k,k])[L=='ar'?0:1];
const save=()=>{try{localStorage.setItem(LS,JSON.stringify(D))}catch(e){toast(t('err'))}};
function toast(m){const e=$('#toast');e.innerHTML='<div></div>';e.firstChild.textContent=m;clearTimeout(toast.h);toast.h=setTimeout(()=>e.innerHTML='',2600)}
const U=L=>L=='ar'?['س','د']:['h','m'];
const fm=m=>{m=Math.round(m);const u=U(L),h=Math.floor(m/60);return h?h+u[0]+' '+(m%60)+u[1]:m+u[1]};
const sub=id=>D.subjects.find(s=>s.id==id),sn=id=>sub(id)?sub(id).name:t('nosub'),sc=id=>sub(id)?sub(id).color:'#8890b5';
const minsOn=d=>D.sessions.filter(x=>x.date==d).reduce((a,x)=>a+x.min,0);
const subMins=id=>D.sessions.filter(x=>x.sub==id).reduce((a,x)=>a+x.min,0);
const back=()=>(new Date().getDay()+1)%7,weekD=()=>[...Array(7)].map((_,i)=>addD(i-back()));
function streaks(){const days=[...new Set(D.sessions.filter(x=>x.min>0).map(x=>x.date))].sort(),set=new Set(days);let lg=0,run=0,pv=null;
for(const d of days){run=pv&&Math.round((new Date(d)-new Date(pv))/864e5)==1?run+1:1;lg=Math.max(lg,run);pv=d}
let c=0,i=set.has(ds())?0:1;while(set.has(addD(-i))){c++;i++}return{cur:c,lg}}
const overall=()=>Math.round(D.subjects.length?D.subjects.reduce((a,s)=>a+s.p,0)/D.subjects.length:D.tasks.length?D.tasks.filter(x=>x.done).length/D.tasks.length*100:0);
const empty=k=>{const[a,b]=t(k).split('|');return`<div class="empty"><h3>${a}</h3><p>${b}</p></div>`};
const subOpts=()=>[['',t('nosub')],...D.subjects.map(s=>[s.id,s.name])];
// ---- modal / forms
function form(title,fs,v,ok){v=v||{};const m=$('#modal');
m.innerHTML=`<div class="ov"><form class="dlg" novalidate role="dialog" aria-modal="true"><h3>${title}</h3>${fs.map(f=>`<label>${t(f.l)}${f.type=='textarea'?`<textarea name="${f.n}">${esc(v[f.n])}</textarea>`:f.type=='select'?`<select name="${f.n}">${f.o.map(o=>`<option value="${esc(o[0])}"${o[0]==v[f.n]?' selected':''}>${esc(o[1])}</option>`).join('')}</select>`:`<input name="${f.n}" type="${f.type||'text'}" value="${esc(v[f.n])}"${f.min!=null?' min='+f.min:''}${f.max!=null?' max='+f.max:''}>`}</label>`).join('')}<p class="er" id="fe"></p><div class="row"><button class="btn p">${t('save')}</button><button type="button" class="btn" data-a="close">${t('cancel')}</button></div></form></div>`;
const fo=$('form',m);fo.onsubmit=e=>{e.preventDefault();const o={};
for(const f of fs){let x=fo.elements[f.n].value.trim();if(f.type=='number'&&x!=='')x=Number(x);
const bad=(f.r&&x==='')||(f.type=='number'&&x!==''&&(isNaN(x)||x<(f.min!=null?f.min:-1e9)||x>(f.max!=null?f.max:1e9)))||(f.type=='date'&&x!==''&&isNaN(new Date(x)));
if(bad){$('#fe').textContent=t('inv')+': '+t(f.l);return}o[f.n]=x}
const r=ok(o);if(r){$('#fe').textContent=r;return}m.innerHTML='';save();render()};fo.elements[0].focus()}
let CB=null;function confirmBox(fn){CB=fn;$('#modal').innerHTML=`<div class="ov"><div class="dlg" role="alertdialog"><h3>${t('conf')}</h3><div class="row"><button class="btn d" data-a="yes">${t('ok')}</button><button class="btn" data-a="close">${t('cancel')}</button></div></div></div>`}
// ---- forms defs
const SF=[{n:'name',l:'name',r:1},{n:'color',l:'color',type:'color'},{n:'target',l:'target',type:'number',min:0,max:1000},{n:'p',l:'prog',type:'number',min:0,max:100},{n:'note',l:'note',type:'textarea'}];
const TF=()=>[{n:'title',l:'ttl',r:1},{n:'sub',l:'sub',type:'select',o:subOpts()},{n:'desc',l:'desc',type:'textarea'},{n:'due',l:'due',type:'date'},{n:'pri',l:'pri',type:'select',o:[['low',t('low')],['med',t('med')],['high',t('high')]]},{n:'est',l:'est',type:'number',min:0,max:1440}];
const SES=()=>[{n:'sub',l:'sub',type:'select',o:subOpts()},{n:'min',l:'dur',type:'number',min:1,max:1440,r:1},{n:'date',l:'date',type:'date',r:1}];
const CH=()=>[{n:'day',l:'day',type:'select',o:ORD.map(i=>[i,dn(i)])},{n:'sub',l:'sub',type:'select',o:subOpts()},{n:'start',l:'from',type:'time',r:1},{n:'end',l:'to',type:'time',r:1},{n:'note',l:'note'}];
const dn=i=>(L=='ar'?DA:DE)[i];
const find=(a,id)=>D[a].find(x=>x.id==id);
const A={close:()=>$('#modal').innerHTML='',yes:()=>{const f=CB;CB=null;A.close();f&&f()},
sadd:()=>form(t('addS'),SF,{color:'#6d7bff',target:10,p:0},o=>{D.subjects.push({id:uid(),...o,target:o.target||0,p:o.p||0})}),
sed:id=>{const s=find('subjects',id);s&&form(t('editS'),SF,s,o=>{Object.assign(s,o,{target:o.target||0,p:o.p||0})})},
sdel:id=>confirmBox(()=>{D.subjects=D.subjects.filter(x=>x.id!=id);save();render()}),
tadd:()=>form(t('addT'),TF(),{pri:'med',due:ds()},o=>{D.tasks.push({id:uid(),...o,est:o.est||0,done:false})}),
ted:id=>{const x=find('tasks',id);x&&form(t('editT'),TF(),x,o=>{Object.assign(x,o,{est:o.est||0})})},
tdel:id=>confirmBox(()=>{D.tasks=D.tasks.filter(x=>x.id!=id);save();render()}),
tg:id=>{const x=find('tasks',id);if(x){x.done=!x.done;x.doneOn=x.done?ds():'';save();render()}},
flt:id=>{F=id;render()},
sesadd:()=>form(t('addSes'),SES(),{date:ds(),min:45},o=>{D.sessions.push({id:uid(),sub:o.sub,min:o.min,date:o.date});toast(t('saved'))}),
sesdel:id=>{D.sessions=D.sessions.filter(x=>x.id!=id);save();render()},
cadd:id=>form(t('addC'),CH(),{day:id,start:'16:00',end:'17:00'},o=>{if(o.end<=o.start)return t('badT');D.schedule.push({id:uid(),...o,day:Number(o.day)})}),
ced:id=>{const x=find('schedule',id);x&&form(t('addC'),CH(),x,o=>{if(o.end<=o.start)return t('badT');Object.assign(x,o,{day:Number(o.day)})})},
cdel:id=>{D.schedule=D.schedule.filter(x=>x.id!=id);save();render()},
nadd:()=>{D.notes.unshift({id:uid(),title:t('newN'),content:'',sub:'',date:ds()});save();render()},
ndel:id=>confirmBox(()=>{D.notes=D.notes.filter(x=>x.id!=id);save();render()}),
tstart:()=>{if(TM.left==null)TM.left=dur(TM.mode);TM.end=Date.now()+TM.left*1000;TM.run=true;render()},
tpause:()=>{TM.left=Math.max(0,Math.round((TM.end-Date.now())/1000));TM.run=false;render()},
treset:()=>{TM.run=false;TM.left=dur(TM.mode);render()},
tmode:id=>{TM.mode=id;TM.run=false;TM.left=dur(id);render()},
exp:()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(D,null,1)],{type:'application/json'}));a.download='studyhub-'+ds()+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)},
clr:()=>confirmBox(()=>{const s=D.s;D=DEF();D.s=s;save();render()}),
rmd:()=>{for(const k of['subjects','tasks','sessions','goals'])D[k]=D[k].filter(x=>!x.d);D.demo=false;save();render()}};
// ---- timer
const TM={mode:'study',left:null,end:0,run:false,cyc:0,sub:''},dur=m=>(D.s[{study:'study',short:'brk',long:'long'}[m]]||25)*60;
function notify(m){toast(m);try{if(D.s.notif&&window.Notification&&Notification.permission=='granted')new Notification('StudyHub',{body:m,icon:'icon-192.png'});navigator.vibrate&&navigator.vibrate(200)}catch(e){}}
function finish(){TM.run=false;if(TM.mode=='study'){D.sessions.push({id:uid(),sub:TM.sub,min:D.s.study,date:ds()});TM.cyc++;save();notify(t('sdone'));TM.mode=TM.cyc%4==0?'long':'short'}else{notify(t('bdone'));TM.mode='study'}TM.left=dur(TM.mode);render()}
const mmss=s=>pad(Math.floor(s/60))+':'+pad(s%60);
setInterval(()=>{if(TM.run){TM.left=Math.max(0,Math.round((TM.end-Date.now())/1000));if(!TM.left){finish();return}}
const e=$('#tm');if(e&&TM.left!=null){e.textContent=mmss(TM.left);$('#tr').style.strokeDashoffset=565.5*(1-TM.left/dur(TM.mode))}document.title=TM.run?mmss(TM.left)+' · StudyHub':'StudyHub | ستادي هب'},250);
// ---- pages
let F='all',Q='',NQ='';const P={};
const stc=(l,v)=>`<div class="card st"><small>${l}</small><b>${v}</b></div>`;
P.dash=()=>{const k=streaks(),td=minsOn(ds()),g=D.s.goal,gp=Math.min(100,Math.round(td/g*100)),w=weekD().reduce((a,d)=>a+minsOn(d),0);
const up=D.tasks.filter(x=>!x.done).sort((a,b)=>(a.due||'9').localeCompare(b.due||'9')).slice(0,5),ts=D.schedule.filter(x=>x.day==new Date().getDay()).sort((a,b)=>a.start.localeCompare(b.start));
return`<h1>${t('hello')}</h1><p class="sub">${new Date().toLocaleDateString(L=='ar'?'ar':'en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})} — ${t('tag')}</p>
<div class="grid">${stc(t('tdy'),fm(td))}${stc(t('wk'),fm(w))}${stc(t('dn'),D.tasks.filter(x=>x.done).length)}${stc(t('stk'),k.cur+' '+t('days')+' 🔥')}${stc(t('prg'),overall()+'%')}</div>
<div class="grid g2"><div class="card"><h3>${t('goal')}</h3><b>${fm(td)} / ${fm(g)}</b> · ${gp}%<div class="bar"><i style="width:${gp}%"></i></div>${goalsMini()}<small>${t('best')}: ${k.lg} ${t('days')}</small></div>
<div class="card"><h3>${t('tds')}</h3>${ts.length?ts.map(x=>`<div class="slot" style="--c:${sc(x.sub)}"><b>${x.start}–${x.end}</b> ${esc(sn(x.sub))}</div>`).join(''):`<small>${t('none')}</small>`}</div></div>
<h3>${t('upc')}</h3>${up.length?up.map(row).join(''):empty('noT')}`};
function row(x){const od=!x.done&&x.due&&x.due<ds();return`<div class="card trow ${x.done?'dn':''}"><button class="ck" data-a="tg" data-id="${x.id}" aria-label="${t('completed')}">${x.done?'✓':''}</button><div class="gr"><b>${esc(x.title)}</b><small>${esc(x.desc)}</small><div class="meta"><span class="chip" style="--c:${sc(x.sub)}">${esc(sn(x.sub))}</span><span class="pr ${x.pri}">${t(x.pri)}</span>${x.due?`<span class="${od?'od':''}">📅 ${x.due}${od?' · '+t('over'):''}</span>`:''}${x.est?`<span>⏱ ${fm(x.est)}</span>`:''}</div></div><button class="ib" data-a="ted" data-id="${x.id}" aria-label="Edit">✏️</button><button class="ib" data-a="tdel" data-id="${x.id}" aria-label="${t('del')}">🗑️</button></div>`}
function tl(){const d=ds();let l=D.tasks.filter(x=>F=='all'||(F=='today'&&x.due==d&&!x.done)||(F=='upcoming'&&!x.done&&x.due>d)||(F=='completed'&&x.done));
if(Q)l=l.filter(x=>(x.title+' '+x.desc).toLowerCase().includes(Q));l.sort((a,b)=>(a.done-b.done)||(a.due||'9').localeCompare(b.due||'9'));return l.length?l.map(row).join(''):empty('noT')}
P.tasks=()=>`<div class="row"><h1 class="sp">${t('tasks')}</h1><button class="btn p" data-a="tadd">+ ${t('addT')}</button></div><div class="row">${['all','today','upcoming','completed'].map(f=>`<button class="chip ${F==f?'on':''}" data-a="flt" data-id="${f}">${t(f)}</button>`).join('')}</div><input id="tq" type="search" placeholder="${t('search')}" aria-label="${t('search')}" value="${esc(Q)}" style="margin-bottom:14px"><div id="tl">${tl()}</div>`;
P.subjects=()=>`<div class="row"><h1 class="sp">${t('subjects')}</h1><button class="btn p" data-a="sadd">+ ${t('addS')}</button></div>${D.subjects.length?`<div class="grid">${D.subjects.map(s=>`<div class="card"><div class="row" style="margin:0"><b class="sp" style="color:${s.color}">● ${esc(s.name)}</b><button class="ib" data-a="sed" data-id="${s.id}" aria-label="Edit">✏️</button><button class="ib" data-a="sdel" data-id="${s.id}" aria-label="${t('del')}">🗑️</button></div><b style="font-size:22px">${s.p}%</b><div class="bar"><i style="width:${s.p}%;--c:${s.color}"></i></div><small>${t('total')}: ${fm(subMins(s.id))}${s.target?' / '+s.target+U(L)[0]:''}<br>${D.tasks.filter(x=>x.sub==s.id).length} ${t('ntask')}</small>${s.note?`<p><small>${esc(s.note)}</small></p>`:''}</div>`).join('')}</div>`:empty('noS')}`;
P.timer=()=>{if(TM.left==null)TM.left=dur(TM.mode);const mid=TM.left<dur(TM.mode)&&TM.left>0;const rs=[...D.sessions].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,6);
return`<h1>${t('timer')}</h1><div class="card tm"><div class="row">${[['study','focus'],['short','sbrk'],['long','lbrk']].map(m=>`<button class="chip ${TM.mode==m[0]?'on':''}" data-a="tmode" data-id="${m[0]}">${t(m[1])}</button>`).join('')}</div>
<div class="ring"><svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" stroke="var(--bd)"/><circle id="tr" cx="100" cy="100" r="90" stroke="var(--ac)" stroke-linecap="round" stroke-dasharray="565.5" style="stroke-dashoffset:${565.5*(1-TM.left/dur(TM.mode))}"/></svg><b id="tm">${mmss(TM.left)}</b></div>
<label style="max-width:260px;margin:auto auto 14px">${t('sub')}<select id="tsub">${subOpts().map(o=>`<option value="${esc(o[0])}"${o[0]==TM.sub?' selected':''}>${esc(o[1])}</option>`).join('')}</select></label>
<div class="row">${TM.run?`<button class="btn p" data-a="tpause">${t('pause')}</button>`:`<button class="btn p" data-a="tstart">${mid?t('resume'):t('start')}</button>`}<button class="btn" data-a="treset">${t('reset')}</button><button class="btn" data-a="sesadd">+ ${t('addSes')}</button></div></div>
<h3 style="margin-top:18px">${t('recent')}</h3>${rs.length?rs.map(x=>`<div class="card trow"><div class="gr"><b>${esc(sn(x.sub))}</b><small>${x.date}</small></div><b>${fm(x.min)}</b><button class="ib" data-a="sesdel" data-id="${x.id}" aria-label="${t('del')}">🗑️</button></div>`).join(''):`<p class="sub">${t('noSes')}</p>`}`};
P.schedule=()=>`<h1>${t('schedule')}</h1><p class="sub"></p><div class="sch">${ORD.map(d=>`<div class="card"><div class="row" style="margin-bottom:8px"><b class="sp">${dn(d)}</b><button class="ib" data-a="cadd" data-id="${d}" aria-label="${t('addC')}">➕</button></div>${D.schedule.filter(x=>x.day==d).sort((a,b)=>a.start.localeCompare(b.start)).map(x=>`<div class="slot" style="--c:${sc(x.sub)}"><b>${x.start}–${x.end}</b><br>${esc(sn(x.sub))}${x.note?`<br><small>${esc(x.note)}</small>`:''}<div class="row"><button class="ib" data-a="ced" data-id="${x.id}" aria-label="Edit">✏️</button><button class="ib" data-a="cdel" data-id="${x.id}" aria-label="${t('del')}">🗑️</button></div></div>`).join('')||`<small>${t('none')}</small>`}</div>`).join('')}</div>`;
const bars=(items)=>{const mx=Math.max(1,...items.map(i=>i[1]));return`<div class="bars">${items.map(i=>`<span>${esc(i[0])}</span><div class="bar"><i style="width:${i[1]/mx*100}%;--c:${i[2]||''}"></i></div><b>${fm(i[1])}</b>`).join('')}</div>`};
P.stats=()=>{const k=streaks(),wd=weekD(),by={},wk=[0,0,0,0,0,0,0];
D.sessions.forEach(x=>{by[x.sub]=(by[x.sub]||0)+x.min;const i=new Date(x.date+'T00:00').getDay();wk[i]+=x.min});
const subs=Object.keys(by).sort((a,b)=>by[b]-by[a]),bd=wk.indexOf(Math.max(...wk)),dn_=D.tasks.filter(x=>x.done).length,pc=D.tasks.length?Math.round(dn_/D.tasks.length*100):0;
return`<h1>${t('stats')}</h1><p class="sub"></p><div class="grid">${stc(t('stk'),k.cur+' 🔥')}${stc(t('best'),k.lg+' '+t('days'))}${stc(t('dn'),dn_)}${stc(t('prod'),pc+'%')}${stc(t('topS'),subs.length?esc(sn(subs[0])):'—')}${stc(t('topD'),Math.max(...wk)>0?dn(bd):'—')}</div>
<div class="grid g2"><div class="card"><h3>${t('byDay')}</h3>${bars(wd.map(d=>[dn(new Date(d+'T00:00').getDay()),minsOn(d)]))}</div><div class="card"><h3>${t('bySub')}</h3>${subs.length?bars(subs.map(s=>[sn(s),by[s],sc(s)])):`<small>${t('noSes')}</small>`}</div></div>`};
const nl=()=>{const l=D.notes.filter(n=>!NQ||(n.title+' '+n.content).toLowerCase().includes(NQ));return l.length?`<div class="grid">${l.map(n=>`<div class="card"><input data-n="title" data-id="${n.id}" value="${esc(n.title)}" aria-label="${t('ttl')}" style="font-weight:700"><select data-n="sub" data-id="${n.id}" aria-label="${t('sub')}" style="margin:8px 0">${subOpts().map(o=>`<option value="${esc(o[0])}"${o[0]==n.sub?' selected':''}>${esc(o[1])}</option>`).join('')}</select><textarea data-n="content" data-id="${n.id}" aria-label="${t('note')}" style="min-height:130px">${esc(n.content)}</textarea><div class="row" style="margin:6px 0 0"><small class="sp">${n.date}</small><button class="ib" data-a="ndel" data-id="${n.id}" aria-label="${t('del')}">🗑️</button></div></div>`).join('')}</div>`:empty('noN')};
P.notes=()=>`<div class="row"><h1 class="sp">${t('notes')}</h1><button class="btn p" data-a="nadd">+ ${t('newN')}</button></div><input id="nq" type="search" placeholder="${t('search')}" aria-label="${t('search')}" value="${esc(NQ)}" style="margin-bottom:14px"><div id="nl">${nl()}</div>`;
const si=(k,l,min,max)=>`<label>${t(l)}<input type="number" data-s="${k}" min="${min}" max="${max}" value="${D.s[k]}"></label>`;
P.settings=()=>`<h1>${t('settings')}</h1><p class="sub"></p><div class="grid g2"><div class="card"><h3>${t('appear')} / ${t('lang')}</h3><label>${t('appear')}<select data-s="theme"><option value="dark"${D.s.theme=='dark'?' selected':''}>${t('dark')}</option><option value="light"${D.s.theme=='light'?' selected':''}>${t('light')}</option></select></label><label>${t('lang')}<select data-s="lang"><option value="ar"${L=='ar'?' selected':''}>العربية</option><option value="en"${L=='en'?' selected':''}>English</option></select></label><label><input type="checkbox" data-s="notif"${D.s.notif?' checked':''}> ${t('notif')}</label></div>
<div class="card"><h3>${t('timer')}</h3>${si('study','studyD',1,180)}${si('brk','brkD',1,60)}${si('long','longD',1,90)}${si('goal','goalM',1,1440)}</div>
<div class="card"><h3>${t('data')}</h3><div class="row"><button class="btn" data-a="exp">${t('exp')}</button><label class="btn" style="margin:0;cursor:pointer;color:var(--tx)">${t('imp')}<input type="file" id="imp" accept="application/json,.json" hidden></label>${D.demo?`<button class="btn" data-a="rmd">${t('rmDemo')}</button>`:''}<button class="btn d" data-a="clr">${t('clr')}</button></div></div></div>`;
// ---- goals + calendar
function gprog(g){let v,m,tx;if(g.type=='study'){v=minsOn(ds());m=g.target;tx=fm(v)+' / '+fm(m)}else if(g.type=='tasks'){v=D.tasks.filter(x=>x.done&&x.doneOn==ds()).length;m=g.target;tx=v+' / '+m}else{v=g.last==ds()?1:0;m=1;tx=v?'✓':'—'}return{pc:Math.min(100,Math.round(v/(m||1)*100)),tx}}
const goalsMini=()=>D.goals.length?`<div style="margin:10px 0">${D.goals.map(g=>{const r=gprog(g);return`<small>${esc(g.title)} · ${r.tx}</small><div class="bar"><i style="width:${r.pc}%"></i></div>`}).join('')}</div>`:'';
const GF=()=>[{n:'title',l:'ttl',r:1},{n:'type',l:'gType',type:'select',o:[['study',t('gStudy')],['tasks',t('gTasks')],['check',t('gCheck')]]},{n:'target',l:'gTarget',type:'number',min:1,max:1440}];
Object.assign(A,{gadd:()=>form(t('addG'),GF(),{type:'study',target:120},o=>{D.goals.push({id:uid(),...o,target:o.target||1,last:''})}),
ged:id=>{const g=find('goals',id);g&&form(t('editG'),GF(),g,o=>{Object.assign(g,o,{target:o.target||1})})},
gdel:id=>confirmBox(()=>{D.goals=D.goals.filter(x=>x.id!=id);save();render()}),
gck:id=>{const g=find('goals',id);if(g){g.last=g.last==ds()?'':ds();save();render()}},
cprev:()=>{CM--;if(CM<0){CM=11;CY--}render()},cnext:()=>{CM++;if(CM>11){CM=0;CY++}render()},
cday:id=>{CS=id;render()},ctoday:()=>{const n=new Date();CY=n.getFullYear();CM=n.getMonth();CS=ds();render()}});
let CY=new Date().getFullYear(),CM=new Date().getMonth(),CS=ds();
P.goals=()=>`<div class="row"><h1 class="sp">${t('goals')}</h1><button class="btn p" data-a="gadd">+ ${t('addG')}</button></div>${D.goals.length?`<div class="grid">${D.goals.map(g=>{const r=gprog(g);return`<div class="card trow"><div class="gring" style="--p:${r.pc}"><b>${r.pc}%</b></div><div class="gr"><b>${esc(g.title)}</b><small>${r.tx}</small></div>${g.type=='check'?`<button class="btn" data-a="gck" data-id="${g.id}">${g.last==ds()?'↩':'✓'}</button>`:''}<button class="ib" data-a="ged" data-id="${g.id}" aria-label="Edit">✏️</button><button class="ib" data-a="gdel" data-id="${g.id}" aria-label="${t('del')}">🗑️</button></div>`}).join('')}</div>`:empty('noG')}`;
P.calendar=()=>{const off=(new Date(CY,CM,1).getDay()+1)%7,n=new Date(CY,CM+1,0).getDate(),c=[];for(let i=0;i<off;i++)c.push('<span></span>');
for(let d=1;d<=n;d++){const k=CY+'-'+pad(CM+1)+'-'+pad(d),tk=D.tasks.some(x=>x.due==k),se=minsOn(k)>0;c.push(`<button class="cal${k==ds()?' td':''}${k==CS?' sel':''}" data-a="cday" data-id="${k}" aria-label="${k}"><b>${d}</b><i>${tk?'<u class="t"></u>':''}${se?'<u class="s"></u>':''}</i></button>`)}
const tk=D.tasks.filter(x=>x.due==CS),se=D.sessions.filter(x=>x.date==CS),wd=new Date(CS+'T00:00').getDay(),sl=D.schedule.filter(x=>x.day==wd).sort((a,b)=>a.start.localeCompare(b.start));
return`<div class="row"><h1 class="sp">${t('calendar')}</h1><button class="btn" data-a="ctoday">${t('today')}</button></div><div class="card"><div class="row"><button class="ib" data-a="${L=='ar'?'cnext':'cprev'}" aria-label="prev">◀</button><b class="sp" style="text-align:center">${new Date(CY,CM,1).toLocaleDateString(L=='ar'?'ar':'en-US',{month:'long',year:'numeric'})}</b><button class="ib" data-a="${L=='ar'?'cprev':'cnext'}" aria-label="next">▶</button></div><div class="calg">${ORD.map(d=>`<small>${dn(d).slice(0,3)}</small>`).join('')}${c.join('')}</div></div>
<h3 style="margin-top:18px">${CS} · ${dn(wd)}</h3>${tk.length||se.length||sl.length?tk.map(row).join('')+se.map(x=>`<div class="card trow"><div class="gr"><b>⏱ ${esc(sn(x.sub))}</b></div><b>${fm(x.min)}</b></div>`).join('')+sl.map(x=>`<div class="slot" style="--c:${sc(x.sub)}"><b>${x.start}–${x.end}</b> ${esc(sn(x.sub))}</div>`).join(''):`<p class="sub">${t('noDay')}</p>`}`};
// ---- shell
const ICO={dash:'🏠',tasks:'✅',subjects:'📚',timer:'⏱️',schedule:'🗓️',stats:'📊',notes:'📝',settings:'⚙️',calendar:'📅',goals:'🎯'},NAV=['dash','tasks','calendar','subjects','goals','timer','schedule','stats','notes','settings'];
function render(){L=D.s.lang;const h=document.documentElement;h.lang=L;h.dir=L=='ar'?'rtl':'ltr';h.dataset.theme=D.s.theme;$('meta[name=theme-color]').content=D.s.theme=='dark'?'#0b1020':'#f3f5fc';
let pg=location.hash.slice(1);if(!P[pg])pg='dash';
$('#nav').innerHTML=`<div class="logo">StudyHub | ستادي هب</div>`+NAV.map(k=>`<a href="#${k}" class="${k==pg?'on':''}"${k==pg?' aria-current="page"':''}><span aria-hidden="true">${ICO[k]}</span><span>${t(k)}</span></a>`).join('');
let html;try{html=P[pg]()}catch(e){console.error(e);html=`<div class="empty"><h3>${t('err')}</h3></div>`}
$('#main').innerHTML=html+`<footer><b>${t('foot')}</b><br>Turning Ideas Into Digital Products.</footer>`}
// ---- events
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(b&&A[b.dataset.a])A[b.dataset.a](b.dataset.id,b);else if(e.target.classList.contains('ov'))A.close()});
document.addEventListener('keydown',e=>{if(e.key=='Escape')A.close()});
document.addEventListener('input',e=>{const x=e.target;if(x.id=='tq'){Q=x.value.toLowerCase();$('#tl').innerHTML=tl()}else if(x.id=='nq'){NQ=x.value.toLowerCase();$('#nl').innerHTML=nl()}
else if(x.dataset.n){const n=find('notes',x.dataset.id);if(n){n[x.dataset.n]=x.value;save()}}});
document.addEventListener('change',e=>{const x=e.target;if(x.id=='tsub')TM.sub=x.value;
else if(x.id=='imp'){const f=x.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const o=JSON.parse(r.result);if(!o||typeof o!='object'||!o.s||!['subjects','tasks','sessions','schedule','notes'].every(k=>Array.isArray(o[k])))throw 0;
const c=a=>a.filter(i=>i&&typeof i=='object'&&i.id);D=Object.assign(DEF(),o,{s:Object.assign(DEF().s,o.s)});if(!Array.isArray(D.goals))D.goals=[];for(const k of['subjects','tasks','sessions','schedule','notes','goals'])D[k]=c(D[k]);
D.sessions=D.sessions.filter(s=>Number(s.min)>0&&/^\d{4}-\d\d-\d\d$/.test(s.date));save();TM.left=null;render();toast(t('impOk'))}catch(er){toast(t('impBad'))}};r.readAsText(f);x.value=''}
else if(x.dataset.s){const k=x.dataset.s,s=D.s;if(k=='notif'){if(x.checked&&window.Notification&&Notification.permission=='default')Notification.requestPermission();s.notif=x.checked}
else if(k=='lang'||k=='theme')s[k]=x.value;else{const v=Math.round(Number(x.value));if(!(v>=x.min&&v<=Number(x.max))){toast(t('inv'));x.value=s[k];return}s[k]=v;if(!TM.run)TM.left=null}save();render();toast(t('saved'))}});
window.addEventListener('hashchange',render);
if('serviceWorker'in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
render();
