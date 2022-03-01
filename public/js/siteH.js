$(function () {
    let Datainputs = {
        name: $('[data-role="name"]').val(),
        url: $('[data-role="url"]').val(),
        selector: $('[data-role="selector"]').val(),
    }
    $('[data-role="save-button"]').click(function () {
        let dataInputs = {
            name: $('[data-role="name"]').val(),
            url: $('[data-role="url"]').val(),
            selector: $('[data-role="selector"]').val(),
        }
        $.post('/site', dataInputs, {
            dataInputs
        })
    })

    function populateSite(element, data) {
        element.html()
        $.each(data, function (_, value) {
            let option = $("<option>");
            option.text(value.siteName)
            option.attr('value', value._id)
            element.append(option)
        })
    }
    $.get("/site", (response) => {
        let selectSite = $('[data-role="select-site"]');
        populateSite(selectSite, response.siteData);
    })

    $('[data-role="screp"]').click(function () {
        let id = $('[data-role="select-site"]').val()
        $.get("/site/scrape/" + id, (response) => {
            const div = $('[data-role="text"]');
            div.html(`<li>${response.title}</li>`)
        });
    })
})