---
---
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('{{ site.url }}/sw.js')
    .then((reg) => console.log('sw registered', reg))
    .then((err) => console.log('sw not registered', err))
}