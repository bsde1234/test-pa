---
---
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://bsde1234.github.io/sw.js')
    .then((reg) => console.log('sw registered', reg))
    .catch((err) => console.log('sw not registered', err))
}