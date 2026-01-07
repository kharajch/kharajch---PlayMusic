var GenreNames = ["Sad", "Romantic", "Energetic"]
var GenreVars = ["Sad", "Romantic", "Energetic"]

export function GenreFilter(e) {
  for (let i = 0; i <= GenreNames.length; i++) {
        GenreVars[i] = document.querySelectorAll(`[genre='${GenreNames[i]}']`)
    }

    for (let i = 0; i <= GenreNames.length; i++) {
        GenreVars[i].forEach(e => {
            e.style.display = "inline-block"

        })
    }
}

export function GenreFilterSad(e) {
   for (let i = 0; i <= GenreNames.length; i++) {
        GenreVars[i] = document.querySelectorAll(`[Genre='${GenreNames[i]}']`)
    }

    for (let i = 0; i <= GenreNames.length; i++) {
        GenreVars[i].forEach(e => {
            e.style.display = "none"

        })
    }
    GenreVars[0].forEach(e =>{
      e.style.display = "inline-block"
    })

}
export function GenreFilterRomantic(e) {
  for (let i = 0; i <= GenreNames.length; i++) {
        GenreVars[i] = document.querySelectorAll(`[Genre='${GenreNames[i]}']`)
    }

    for (let i = 0; i <= GenreNames.length; i++) {
        GenreVars[i].forEach(e => {
            e.style.display = "none"

        })
    }
    GenreVars[1].forEach(e =>{
      e.style.display = "inline-block"
    })
}
export function GenreFilterEnergetic(e) {
  for (let i = 0; i <= GenreNames.length; i++) {
        GenreVars[i] = document.querySelectorAll(`[Genre='${GenreNames[i]}']`)
    }

    for (let i = 0; i <= GenreNames.length; i++) {
        GenreVars[i].forEach(e => {
            e.style.display = "none"

        })
    }
    GenreVars[2].forEach(e =>{
      e.style.display = "inline-block"
    })

}