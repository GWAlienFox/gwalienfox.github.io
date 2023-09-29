var OriginTitle = document.title;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '别走啊~😭 ';
    }else {
        document.title = '欢迎回来！';
        setTimeout(function () {
            if(!document.hidden){
                document.title = OriginTitle;
            }
        }, 2000);
    }
});