if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/MTG_Counter/sw.js', { scope: '/MTG_Counter/' })})}