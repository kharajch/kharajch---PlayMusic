var LangNames = ["Bengali", "Hindi", "English"]
var LangVars = ["Bengali", "Hindi", "English"]

export function LangFilter(e) {
  for (let i = 0; i <= LangNames.length; i++) {
        LangVars[i] = document.querySelectorAll(`[lang='${LangNames[i]}']`)
    }

    for (let i = 0; i <= LangNames.length; i++) {
        LangVars[i].forEach(e => {
            e.style.display = "inline-block"

        })
    }
}

export function LangFilterBeng(e) {
   for (let i = 0; i <= LangNames.length; i++) {
        LangVars[i] = document.querySelectorAll(`[lang='${LangNames[i]}']`)
    }

    for (let i = 0; i <= LangNames.length; i++) {
        LangVars[i].forEach(e => {
            e.style.display = "none"

        })
    }
    LangVars[0].forEach(e =>{
      e.style.display = "inline-block"
    })

}
export function LangFilterHind(e) {
  for (let i = 0; i <= LangNames.length; i++) {
        LangVars[i] = document.querySelectorAll(`[lang='${LangNames[i]}']`)
    }

    for (let i = 0; i <= LangNames.length; i++) {
        LangVars[i].forEach(e => {
            e.style.display = "none"

        })
    }
    LangVars[1].forEach(e =>{
      e.style.display = "inline-block"
    })
}
export function LangFilterEng(e) {
  for (let i = 0; i <= LangNames.length; i++) {
        LangVars[i] = document.querySelectorAll(`[lang='${LangNames[i]}']`)
    }

    for (let i = 0; i <= LangNames.length; i++) {
        LangVars[i].forEach(e => {
            e.style.display = "none"

        })
    }
    LangVars[2].forEach(e =>{
      e.style.display = "inline-block"
    })

}