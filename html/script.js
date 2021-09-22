fivemac = {}

$(function() {
    function display(bool) {
        if (bool) {
            $("#container").show();
        } else {
            $("#container").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })

    $("#yazi").click(function() {
        let inputValue = $("#yazi").val()
        return;
    })
})

$(document).on('keydown', function() {
    switch (event.keyCode) {
        case 27:
            fivemac.Close();
            break;
    }
});

fivemac.Close = function() {
    $("#container").fadeOut(175);
    $.post('http://fc-admin/close');
}


$("#exit").click(function() {
    fivemac.Close();

});


$("#vehicleremove").click(function() {
    $.post('https://fc-admin/deletevehicle', JSON.stringify({}));
});

$("#noperm").click(function() {
    $.post('http://fc-admin/close', JSON.stringify({}));
});


$("#deleteped").click(function() {
    $.post('https://fc-admin/deleteped', JSON.stringify({}));
});

$("#deleteobject").click(function() {
    $.post('https://fc-admin/deleteobject', JSON.stringify({}));
});

$("#communitydelete").click(function() {
    $.post('https://fc-admin/deletecom', JSON.stringify({}));
});

$("#deletebil").click(function() {
    $.post('https://fc-admin/deletebilling', JSON.stringify({}));
});

$("#deleteuser").click(function() {
    $.post('https://fc-admin/deleteuser', JSON.stringify({}));
});

$("#deleteuserinventory").click(function() {
    $.post('https://fc-admin/deleteuserinventory', JSON.stringify({}));
});

$("#deleteownedvehicles").click(function() {
    $.post('https://fc-admin/deleteownedvehicles', JSON.stringify({}));
});
