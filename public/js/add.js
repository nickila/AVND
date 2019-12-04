$(document).ready(function () {
    $("#add-btn").on("click", function (event) {
        event.preventDefault();
        var newItem = {
            item: $("#item").val().trim(),
            description: $("#description").val().trim(),
            userID: parseInt($("#userID").val().trim())
        }

        $.post("/api/new", newItem)
            .done(function (data) {
            })

        $("#item").val("");
        $("#description").val("");
        $('#addItemModal').modal('toggle');
    })

    $("#purchase-btn").on("click", function (event) {
        event.preventDefault();
        console.log("purchase button clicked!")
        itemID = parseInt(itemID)
        var purchasedItem = {
            itemID: itemID
        }

        $.post("/api/item/removed", purchasedItem)
            .done(function (data) {

            })
        $("#itemDetailModal").modal('toggle');

    })
    $("#pending-btn").on("click", function (event) {
        event.preventDefault();
        itemID = parseInt(itemID)
        var pendingItem = {
            itemID: itemID
        }
        $.post("/api/item/pending", pendingItem)
            .done(function (data) {

            })
        $("#itemDetailModal").modal('toggle');

    })

})

