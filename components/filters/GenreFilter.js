export function GenreFilter(e) {
    var sad = document.querySelectorAll('[genre="Sad"]');
    var romantic = document.querySelectorAll('[genre="Romantic"]');
    var energetic = document.querySelectorAll('[genre="Energetic"]');

    sad.forEach(e => {
        e.style.display = "inline-block"
    })
    romantic.forEach(e => {
        e.style.display = "inline-block"
    })
    energetic.forEach(e => {
        e.style.display = "inline-block"
    })


}
export function GenreFilterRomantic(e) {
    var sad = document.querySelectorAll('[genre="Sad"]');
    var romantic = document.querySelectorAll('[genre="Romantic"]');
    var energetic = document.querySelectorAll('[genre="Energetic"]');

    romantic.forEach(e => {
        e.style.display = "inline-block"
    })
    sad.forEach(e => {
        e.style.display = "none"
    })
    energetic.forEach(e => {
        e.style.display = "none"
    })


}
export function GenreFilterEnergetic(e) {
    var sad = document.querySelectorAll('[genre="Sad"]');
    var romantic = document.querySelectorAll('[genre="Romantic"]');
    var energetic = document.querySelectorAll('[genre="Energetic"]');

    energetic.forEach(e => {
        e.style.display = "inline-block"
    })
    sad.forEach(e => {
        e.style.display = "none"
    })
    romantic.forEach(e => {
        e.style.display = "none"
    })


}
export function GenreFilterSad(e) {
    var sad = document.querySelectorAll('[genre="Sad"]');
    var romantic = document.querySelectorAll('[genre="Romantic"]');
    var energetic = document.querySelectorAll('[genre="Energetic"]');

    sad.forEach(e => {
        e.style.display = "inline-block"
    })
    energetic.forEach(e => {
        e.style.display = "none"
    })
    romantic.forEach(e => {
        e.style.display = "none"
    })


}