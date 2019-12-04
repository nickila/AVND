$(document).ready(function () {
    $("#login-btn").click(function (event) {
        event.preventDefault();
        console.log("clicked the login button")
        var username = $("#username").val().trim()
        console.log(username)

        $.get("/api/login/" + username, function (data) {
            console.log(data)
        })
    })

})