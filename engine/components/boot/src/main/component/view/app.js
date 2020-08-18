
if (navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
        if (!(registrations.length > 0)) {
            navigator.serviceWorker.register('https://' + window.location.host + '/content/data?input=cloudoffice/cockpit/boot/view/server-agent.js', {scope: '/'})
                    .then(function (registration) {
                        console.log(registration);
                    })
                    .catch(function (e) {
                        console.error(e);
                    });
        }
    });
}

 