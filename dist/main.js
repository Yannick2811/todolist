(()=>{"use strict";const e=document.querySelector("#add-task"),t=(document.querySelector("#main-content"),document.querySelector("#task-input")),n=document.querySelector("#submit"),a=document.querySelector("#cancel"),o=(document.querySelector("#tasks-container"),document.querySelector("#task-list")),l=document.querySelector("#task-input-container"),c=(document.querySelector("#button-container"),document.querySelector(".alert-paragraph"));class r{constructor(e,t){this.title=e,this.description=t}}let s=[];class d{constructor(e,t){this.title=e,this.description=t}}class i{constructor(e,t){this.title=e,this.description=t}}document.querySelector("#add-project-button");const u=document.querySelector("#new-project-input-container"),m=document.querySelector("#project-submit-button"),p=document.querySelector("#project-name-input"),S=(document.querySelector("#sidebar"),document.querySelector("#project-container")),g=(document.querySelector("#form-container"),document.querySelector("#add-task"));let y=[],b=[];e.addEventListener("click",(()=>{l.style.display="flex"})),a.addEventListener("click",(()=>{l.style.display="none"})),n.addEventListener("click",(()=>{if(""===t.value||null===t.value)return void(c.style.display="flex");let e=new r(t.value);s.push(e.title);let n=document.createElement("li");n.classList.add("task-entry");let a=document.createElement("button");a.classList.add("task-entry-button"),a.textContent=e.title;let l=document.createElement("button");l.classList.add("item-delete-button"),n.append(l),n.append(a),o.append(n),n.setAttribute("id",t.value),localStorage.setItem("taskStorage",JSON.stringify(s));let d=JSON.parse(localStorage.getItem("taskStorage"));l.addEventListener("click",(()=>{let t=d.indexOf(e.title);t>=0&&(n.remove(),d.splice(t,1),localStorage.setItem("taskStorage",JSON.stringify(d)))})),t.value="",c.style.display="none",console.log(d)})),m.addEventListener("click",(()=>{let e=new d(p.value);y.push(e.title),console.log(y);let t=document.createElement("button");t.textContent=p.value,t.classList.add("sidebar-button"),S.append(t),t.addEventListener("click",(()=>{let t=document.querySelector("#tasks-container");const n=document.querySelector("#main-content");t.remove();let a=document.createElement("div");a.setAttribute("id",`${e.title}-container`),n.prepend(a),g.remove();let o=document.createElement("button");o.innerText="+ Add Task",o.setAttribute("id","new-add-task"),o.classList.add("add-task"),n.append(o)})),p.value="",u.style.display="none",localStorage.setItem("projectStorage",JSON.stringify(y))})),document.querySelector("#main-project").addEventListener("click",(()=>{window.location.reload()})),window.onload=function(){!function(){let e=JSON.parse(localStorage.getItem("projectStorage"));for(let t=0;t<e.length;t++){y.push(e[t]);let n=document.createElement("button");n.textContent=e[t],n.classList.add("sidebar-button"),S.append(n),localStorage.setItem("projectStorage",JSON.stringify(y)),n.addEventListener("click",(()=>{if(localStorage.getItem(`${e[t]}Storage`)){let n=JSON.parse(localStorage.getItem(`${e[t]}Storage`));for(let e=0;e<n.length;e++)b.push(n[e])}console.log(b),document.querySelector("#task-input-container").style.display="none";let a=document.querySelector("#tasks-container");const o=document.querySelector("#main-content");let l=document.createElement("h2");l.textContent=e[t];let c=document.createElement("button");c.classList.add("trashcan"),c.setAttribute("id",`${e[t]}-delete-icon`);let r=document.createElement("div");r.classList.add("header-container"),r.append(l),r.append(c),c.addEventListener("click",(()=>{let a=e.indexOf(e[t]);a>-1&&(n.remove(),e.splice(a,1),localStorage.setItem("projectStorage",JSON.stringify(e)),window.location.reload())})),l.classList.add("project-header"),a.remove();let s=document.createElement("div");s.classList.add("tasks-container"),s.setAttribute("id",`${e[t]}-container`),s.classList.add("tasks-container");let d=document.createElement("ul");d.classList.add("task-list"),d.setAttribute("id","new-task-list"),s.append(d),o.prepend(s),o.prepend(r),g.remove(),document.querySelector("#main-to-dos-header").remove();let u=document.createElement("button");u.innerText="+ Add Task",u.setAttribute("id","new-add-task"),u.classList.add("add-task"),o.append(u),u.addEventListener("click",(()=>{u.disabled=!0;let n=document.createElement("form");n.setAttribute("onsubmit","return false");let a=document.createElement("div");a.classList.add("task-input-container"),a.style.display="flex";let o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("id","new-task-input"),a.append(o);let l=document.createElement("div");l.classList.add("button-container");let c=document.createElement("button");c.innerText="Submit",c.classList.add("submit"),c.setAttribute("type","submit"),c.addEventListener("click",(()=>{""!==o.value&&null!==o.value||(m.style.display="flex");let n=new i(o.value),a=document.createElement("li");a.classList.add("task-entry");let l=document.createElement("button");l.classList.add("task-entry-button"),l.textContent=n.title;let c=document.createElement("button");if(c.classList.add("item-delete-button"),a.append(c),a.append(l),d.append(a),a.setAttribute("id",o.value),localStorage.getItem(`${e[t]}Storage`)){let a=JSON.parse(localStorage.getItem(`${e[t]}Storage`));a.push(n.title),localStorage.setItem(`${e[t]}Storage`,JSON.stringify(a))}else b.push(n.title),localStorage.setItem(`${e[t]}Storage`,JSON.stringify(b));o.value="",c.addEventListener("click",(()=>{let o=JSON.parse(localStorage.getItem(`${e[t]}Storage`)),l=o.indexOf(n.title);l>-1&&(a.remove(),o.splice(l,1),localStorage.setItem(`${e[t]}Storage`,JSON.stringify(o)))})),console.log(storage)}));let r=document.createElement("button");r.innerText="Cancel",r.classList.add("cancel"),r.addEventListener("click",(()=>{a.style.display="none",u.disabled=!1})),l.append(c),l.append(r),a.append(l),n.append(a);const s=document.querySelector("#main-content");s.append(n);let m=document.createElement("p");m.textContent="Please input your task!",m.classList.add("alert-paragraph"),s.append(m)}));let m=JSON.parse(localStorage.getItem(`${e[t]}Storage`));for(let t=0;t<m.length;t++){b.push(m[t]);let n=document.createElement("li");n.classList.add("task-entry");let a=document.createElement("button");a.classList.add("task-entry-button"),a.textContent=m[t];let o=document.createElement("button");o.classList.add("item-delete-button"),o.addEventListener("click",(()=>{let a=JSON.parse(localStorage.getItem(`${e[t]}Storage`)),o=a.indexOf(m[t]);o>-1&&(n.remove(),a.splice(o,1),localStorage.setItem(`${e[t]}Storage`,JSON.stringify(a)))})),n.append(o),n.append(a),n.setAttribute("id",m[t]),document.querySelector("#new-task-list").append(n)}}))}}()};const k=document.querySelector("#add-project-button"),v=document.querySelector("#new-project-input-container");k.addEventListener("click",(()=>{v.style.display="flex"})),function(e){let t=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){t&&t(),e()}}(function(){let e=JSON.parse(localStorage.getItem("taskStorage"));for(let n=0;n<e.length;n++){s.push(e[n]);let a=document.createElement("li");a.classList.add("task-entry");let l=document.createElement("button");l.classList.add("task-entry-button"),l.textContent=e[n];let r=document.createElement("button");r.classList.add("item-delete-button"),a.append(r),a.append(l),o.append(a),a.setAttribute("id",e[n]),localStorage.setItem("taskStorage",JSON.stringify(s)),JSON.parse(localStorage.getItem("taskStorage")),r.addEventListener("click",(()=>{a.remove();let t=e.indexOf(e[n]);t>=0&&(e.splice(t,1),localStorage.setItem("taskStorage",JSON.stringify(e)))})),t.value="",c.style.display="none"}}())})();