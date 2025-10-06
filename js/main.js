
let section=document.querySelector("main section")

let sectionar=data.map((auto) => `<div>${auto.modelo}</div>`)

section.innerHTML=sectionar

console.log(section)
