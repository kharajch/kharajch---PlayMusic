var SingerNames = ["Arijit Singh", "Shreya Ghoshal", "Mohit Chauhan", "Raj Barman", "Salman Muqtadir", "Ankan", "Afrin"]
var SingerVars = ["Arijit_Singh", "Shreya_Ghoshal", "Mohit_Chauhan", "Raj_Barman", "Salman_Muqtadir", "Ankan", "Afrin"]

export function SingerFilter(e) {
    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i] = document.querySelectorAll(`[singer*='${SingerNames[i]}']`)
    }

    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i].forEach(e => {
            e.style.display = "inline-block"

        })
    }
}

export function SingerFilterArijitSingh(e) {
    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i] = document.querySelectorAll(`[singer*='${SingerNames[i]}']`)
    }

    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i].forEach(e => {
            e.style.display = "none"

        })
    }
    SingerVars[0].forEach(e => {
        e.style.display = "inline-block"
    })



}

export function SingerFilterShreyaGhoshal(e) {
    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i] = document.querySelectorAll(`[singer*='${SingerNames[i]}']`)
    }

    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i].forEach(e => {
            e.style.display = "none"

        })
    }
    SingerVars[1].forEach(e => {
        e.style.display = "inline-block"
    })



}

export function SingerFilterMohitChauhan(e) {
    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i] = document.querySelectorAll(`[singer*='${SingerNames[i]}']`)
    }

    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i].forEach(e => {
            e.style.display = "none"

        })
    }
    SingerVars[2].forEach(e => {
        e.style.display = "inline-block"
    })



}

export function SingerFilterRajBarman(e) {
    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i] = document.querySelectorAll(`[singer*='${SingerNames[i]}']`)
    }

    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i].forEach(e => {
            e.style.display = "none"

        })
    }
    SingerVars[3].forEach(e => {
        e.style.display = "inline-block"
    })



}

export function SingerFilterSalmanMuqtadir(e) {
    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i] = document.querySelectorAll(`[singer*='${SingerNames[i]}']`)
    }

    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i].forEach(e => {
            e.style.display = "none"

        })
    }
    SingerVars[4].forEach(e => {
        e.style.display = "inline-block"
    })



}

export function SingerFilterAnkan(e) {
    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i] = document.querySelectorAll(`[singer*='${SingerNames[i]}']`)
    }

    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i].forEach(e => {
            e.style.display = "none"

        })
    }
    SingerVars[5].forEach(e => {
        e.style.display = "inline-block"
    })



}

export function SingerFilterAfrin(e) {
    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i] = document.querySelectorAll(`[singer*='${SingerNames[i]}']`)
    }

    for (let i = 0; i <= SingerNames.length; i++) {
        SingerVars[i].forEach(e => {
            e.style.display = "none"

        })
    }
    SingerVars[6].forEach(e => {
        e.style.display = "inline-block"
    })



}
