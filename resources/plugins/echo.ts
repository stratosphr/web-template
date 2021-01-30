import Echo from 'laravel-echo'

declare global {
    // noinspection JSUnusedGlobalSymbols
    interface Window {
        Pusher: any
        Echo: Echo
    }
}

// window.Pusher = require('pusher-js')
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'ABCDEFG',
//     cluster: 'mt1',
//     wsHost: 'web-template',
//     wsPort: 6001,
//     disableStats: true,
//     forceTLS: false
// })
