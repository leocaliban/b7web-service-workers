if ('serviceWorker' in navigator) {
    window.onload = function () {
        navigator.serviceWorker.register('https://leocaliban.github.io/b7web-service-workers/')
            .then(function () {
                console.log('ServiceWorker registrado!');
            }, function (e) {
                console.log('Ocorreu um erro no registro do ServiceWorker: ');
                console.log(e);
            });
    };
}
