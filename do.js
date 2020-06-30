$(() => {
    $(".start").on(click, () => {
        setTimeout(() => {
            $("<div>").empty(), 60000
        }, timeout);
    })
})

$(() => {
    $(".start").click(function () {
        $(".flower7").hide();
    })
})

$(() => {
    $(".day").click(function () {
        $(".flower").hide();
        $("#environment").css("background-color", "#fffacd");
        $(".day").click(function () {
            $(".flower").show();
            $("#environment").css("background-color", "#ffffff");

        })
    })
})

$(() => {
    $(".night").click(function () {
        $(".flower").hide();
        $("#environment").css("background-color", "#000000");
        $(".night").click(function () {
            $(".flower").show();
            $("#environment").css("background-color", "#ffffff");

        })
    })
})

$(() => {
    $(".night").click(function () {
        $(".flower").hide();
        $("#environment").css("background-color", "#000000");
        $(".night").click(function () {
            $(".flower").show();
            $("#environment").css("background-color", "#ffffff");

        })
    })
})

$(() => {
    $(".water").click(function () {
        $(".flower").hide();
        $("#environment").css("background-color", "#87cefa");
        $(".water").click(function () {
            $("#flower0-2").css("display", "inline-block");
            $("#environment").css("background-color", "#ffffff");

        })
    })
})

$(() => {
    $(".food").click(function () {
        $(".flower").hide();
        $("#environment").css("background-color", "#996b1f");
        $(".food").click(function () {
            $("#flower7").css("display", "inline-block");
            $("flower7").show();
            $("#environment").css("background-color", "#ffffff");

        })
    })
})

$(() => {
    $(".music").click(function () {
        $(".flower").hide();
        $("#environment").css("background-color", "#ffd9e6");
        $(".music").click(function () {
            $("#flower9").css("display", "inline-block");
            $("flower9").show();
            $("flower0").hide();
            $("#environment").css("background-color", "#ffffff");

        })
    })
})

$(() => {
    $(".gan").click(function () {
        $(".flower").hide();
        $("#environment").css("background-color", "#778899");
        $(".gan").click(function () {
            $("#flower10 #flower00").css("display", "inline-block");
            $("#flower00").show();
            $("flower0").hide();
            $("#environment").css("background-color", "#ffffff");

        })
    })
})