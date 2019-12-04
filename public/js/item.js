$(document).ready(function () {

    $(".users").click(function () {
        console.log("clicked a user")
        $("#list-section").empty();
        var userName = $(this).attr('name');
        $.get("/api/list/" + this.id, function (data) {
            $("#user-name").html(userName);
            for (var i = 0; i < data.length; i++) {
                var itemList = $("<p>");
                itemList.addClass("item");
                itemList.attr("value", data[i].itemID)
                itemList.attr("id", "item-list-" + i);

                $("#list-section").append(itemList);
                $("#item-list-" + i).append(data[i].item);
            }
        })
    })

    $(document).on('click', ".item", function () {
        itemID = parseInt($(this).attr('value'))
        console.log(itemID)
        $.get("/api/item/item-list-" + itemID, function (data) {
            $('#itemDetailModal').modal('show');
            console.log(data.item)
            var itemName = data.item;
            var itemDescription = data.description;
            console.log(itemName)
            $("#item-detail-header").html(itemName)
            $("#item-detail-description").html(itemDescription)
        })
    });

})