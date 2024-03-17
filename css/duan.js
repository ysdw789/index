/*
使用请保留注释，谢谢
https://pojie.tengxunl.top
*/

window.addEventListener('load', function () {
    var vpnIPs = ['1.1.1.1','2.2.5.2'];
    var currentIP = '';

    function checkIP() {
        var script = document.createElement('script');
        script.src = 'https://api.ipify.org?format=jsonp&callback=getIP';
        document.body.appendChild(script);
        // 若使用抓包软件断点、超时等；则视为未连接VPN
        setTimeout(function() {
            if (!currentIP) {
                alert('您必须连接到指定端口！');
            }
        }, 3000);
    }

    window.getIP = function (response) {
        currentIP = response.ip;

        if (!vpnIPs.includes(currentIP)) {
            alert('您必须连接到指定端口！');
        }
    }

    setInterval(checkIP);
});
