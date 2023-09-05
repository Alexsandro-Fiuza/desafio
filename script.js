//const dataatual2 = new Date()
var data = window.prompt("Digite uma data no formato -> yyyy/mm/dd")
var res = document.getElementById("res")
var final = document.getElementById("fim")
const dias = document.getElementById("days")
const horas = document.getElementById("hours")
const minutos = document.getElementById("minutes")
const segundos = document.getElementById("seconds")

if (data.length.value == 0) {
  final.innerHTML = "<strong>Digite uma data acima!<strong>"
} else {
  final.innerHTML = ""
}

function contador() {
  const datareal = new Date(`${data}`)
  const dataatual = new Date()

  const segundostotais = (datareal - dataatual) / 1000

  const dias1 = Math.floor(segundostotais / 3600 / 24)
  const horas1 = Math.floor(segundostotais / 3600) % 24
  const minutos1 = Math.floor(segundostotais / 60) % 60
  const segundos1 = Math.floor(segundostotais) % 60

  res.style.width = "170px"

  dias.innerHTML = `<strong>${dias1}d:<strong>`
  horas.innerHTML = `<strong>${horas1}h:<strong>`
  minutos.innerHTML = `<strong>${minutos1}m:<strong>`
  segundos.innerHTML = `<strong>${segundos1}s<strong>`
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

contador()

setInterval(contador, 1000)
