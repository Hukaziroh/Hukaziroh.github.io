const toast=document.querySelector("#toast");let toastTimer;
function notify(message){toast.textContent=message;toast.classList.add("is-visible");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("is-visible"),2800);}
async function copyText(text){try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);return;}}catch{}
const area=document.createElement("textarea");area.value=text;area.setAttribute("readonly","");area.style.position="fixed";area.style.left="-9999px";document.body.append(area);area.select();const copied=document.execCommand("copy");area.remove();if(!copied)throw new Error("copy");}
const menu=document.querySelector(".menu-toggle"),nav=document.querySelector("#main-nav");
function closeMenu(){menu?.setAttribute("aria-expanded","false");menu?.setAttribute("aria-label","메뉴 열기");nav?.classList.remove("is-open");}
menu?.addEventListener("click",()=>{const open=menu.getAttribute("aria-expanded")!=="true";menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"메뉴 닫기":"메뉴 열기");nav.classList.toggle("is-open",open);});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeMenu();});
document.querySelectorAll("[data-copy-email]").forEach(button=>button.addEventListener("click",async()=>{try{await copyText("best5798@naver.com");notify("이메일 주소를 복사했습니다.");}catch{notify("복사하지 못했습니다. 이메일 주소를 직접 선택해 주세요.");}}));
document.querySelectorAll("[data-share]").forEach(button=>button.addEventListener("click",async()=>{const url=window.location.origin+window.location.pathname;try{if(navigator.share){await navigator.share({title:document.title,url});}else{await copyText(url);notify("페이지 링크를 복사했습니다.");}}catch(error){if(error.name!=="AbortError")notify("공유하지 못했습니다. 주소창의 링크를 복사해 주세요.");}}));

