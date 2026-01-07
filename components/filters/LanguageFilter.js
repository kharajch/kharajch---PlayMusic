export function LangFilter(e) {
  var bengali = document.querySelectorAll('[lang="Bengali"]');
  var hindi = document.querySelectorAll('[lang="Hindi"]');
  var english = document.querySelectorAll('[lang="English"]');

  bengali.forEach(e => {
    e.style.display = "inline-block"
  })
  hindi.forEach(e => {
    e.style.display = "inline-block"
  })
  english.forEach(e => {
    e.style.display = "inline-block"
  })


}

export function LangFilterBeng(e) {
  var bengali = document.querySelectorAll('[lang="Bengali"]');
  var hindi = document.querySelectorAll('[lang="Hindi"]');
  var english = document.querySelectorAll('[lang="English"]');

  bengali.forEach(e => {
    e.style.display = "inline-block"
  })
  hindi.forEach(e => {
    e.style.display = "none"
  })
  english.forEach(e => {
    e.style.display = "none"
  })


}
export function LangFilterHind(e) {
  var bengali = document.querySelectorAll('[lang="Bengali"]');
  var hindi = document.querySelectorAll('[lang="Hindi"]');
  var english = document.querySelectorAll('[lang="English"]');

  hindi.forEach(e => {
    e.style.display = "inline-block"
  })
  bengali.forEach(e => {
    e.style.display = "none"
  })
  english.forEach(e => {
    e.style.display = "none"
  })


}
export function LangFilterEng(e) {
  var bengali = document.querySelectorAll('[lang="Bengali"]');
  var hindi = document.querySelectorAll('[lang="Hindi"]');
  var english = document.querySelectorAll('[lang="English"]');

  english.forEach(e => {
    e.style.display = "inline-block"
  })
  hindi.forEach(e => {
    e.style.display = "none"
  })
  bengali.forEach(e => {
    e.style.display = "none"
  })

}