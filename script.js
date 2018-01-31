    // $('.test').load('https://jsonplaceholder.typicode.com/posts');

    // $.getJSON('https://jsonplaceholder.typicode.com/posts', function (data) {
    //     $.each(data, function (index, value) {
    //         $('.test-ul').append('<li class="test-li">' + 'User Id: ' + value.userId + '</li>')
    //     })
    // })

    //     $.ajax({
    //         url: 'http://jsonplaceholder.typicode.com/users/',
    //         dataType: 'json',
    //     }).done(function (data) {
    //         $.map(data, function (user, i) {
    //             console.log(data[i].name);
    //         });
    //     });
    //
    // $.ajax({
    //     url: 'https://jsonplaceholder.typicode.com/posts',
    //     dataType: 'json'
    // })
    //     .done(function (data) {
    //         $.map(data, function (title, i) {
    //             const userId = data[i].userId;
    //             // $('.test-ul').append('<li class="test-li">' + 'name: ' + getUserById(userId) + '</li>')
    //         })
    //     })



const namesApp = {

    // Variables

    usersData: null,
    postsData: null,
    usersUrl: 'https://jsonplaceholder.typicode.com/users/',
    postsUrl: 'https://jsonplaceholder.typicode.com/posts',
    usersElement: $('.users'),
    postsElement: $('.posts'),
    loaderElement: $('.loader'),

    // Init

    init: function () {

        this.buttonToggle();

        this.getUsers();

        this.getData();
    },

    // Event

    click: function () {
        const self = this;
        $(window).click(function (e) {
            if ($(e.target).hasClass('first-tab')) {

                return $(self.usersElement).toggleClass('open');

            } else if ($(e.target).hasClass('second-tab')) {

                return $(self.postsElement).toggleClass('open');

            }

        })
    },

    // Methods


    buttonToggle: function () {
        const self = this;
        self.click()
        // .hasClass('first-tab').toggleClass('open');
    },

    getUsers: function () {
        const self = this;

        this.loaderElement.addClass('active');
        $.ajax({
            url: this.usersUrl,
            dataType: 'json',
        }).done(function (data) {
            self.usersData = data;
            self.drawUsers();
        }).always(function () {
            self.loaderElement.removeClass('active');
        });
    },

    getData: function () {
        const self = this;
        $.ajax({
            url: self.postsUrl,
            dataType: 'json'
        }).done(function (data) {
            self.postsData = data;
            self.drawData();
        })
    },

    drawUsers: function () {
        var html = this.usersData.map(function (item) {
            return `
                <li>
                    name: ${item.name} <br>
                    login: ${item.username} <br>
                    <a href="mailto:${item.email}">${item.email}</a>
                </li>
            `;
        }).join('');

        this.usersElement.html(html);
    },

    drawData: function () {
        const html = this.postsData.map(function (item) {
            return `
            <li>
                <h4>title: ${item.title}</h4><br>
                <p>body: ${item.body}</p>
            </li>
          `
        });
        this.postsElement.html(html)
    },

};


(function ($) {

namesApp.init();


})(jQuery);

