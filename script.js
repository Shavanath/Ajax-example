$(function () {
    // $('.test').load('https://jsonplaceholder.typicode.com/posts');

    // $.getJSON('https://jsonplaceholder.typicode.com/posts', function (data) {
    //     $.each(data, function (index, value) {
    //         $('.test-ul').append('<li class="test-li">' + 'User Id: ' + value.userId + '</li>')
    //     })
    // })

    function getUserById(i) {
        if(i < 11 && i >= 0){
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',
                dataType: 'json'
            }).done(function (data) {
                return data[i].name;
            });
        }}

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType: 'json'
    })
        .done(function (data) {
            console.log(data);
            $.map(data, function (title, i) {
                const userId = data[i].userId;
                // console.log('i: ' + i);
                // console.log('title: ' + data[i].title);
                console.log('userId: ' + userId);
                // $('.test-ul').append('<li class="test-li">' + 'name: ' + getUserById(userId) + '</li>')
            })
        })
});