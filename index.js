window.onload = function() {
    $.getJSON('./config.json').then(function(array) {
        for(const i in array) {
            const data = array[i];
            $('#root').append('<div><img class="user-photo" src='+data.path+'/><span>name:'+data.name+'</span></div>')
        }
    })
}
