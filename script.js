function scroll_top() {
    window.scrollTo({
        top: 0,
        behavior:"smooth",
    })
    
}

function scroll_home() {
    window.scrollTo({ 
        top: 400,
        behavior:"smooth",
    })
}

function scroll_courses() {
    window.scroll({
        top:700,
        behavior:"smooth",
    })
}

function scroll_projects() {
    window.scroll({
        top:2300,
        behavior:"smooth",
})
}

function scroll_services() {
    window.scroll({
        top:2870,
        behavior:"smooth",
    })
}

function scroll_titles() {
    window.scroll({
        top:3550,
        behavior:"smooth",
    })
}

function scroll_contact() {
    window.scroll({
        top:4230,
        behavior:"smooth",
    })
}

function alert_login() {
    var id = document.getElementById("nome").value
    alert("Uma mensagem foi enviada para seu email " + id)
}
