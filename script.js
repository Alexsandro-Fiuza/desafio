//const dataatual2 = new Date()
var data = window.prompt("Digite uma data no formato -> yyyy/mm/dd")
var res = document.getElementById("res")




function contador() {
  const datareal = new Date(`${data}`)
  const dataatual = new Date()

  const segundostotais = (datareal - dataatual) / 1000

  const dias1 = Math.floor(segundostotais / 3600 / 24)
  const horas1 = Math.floor(segundostotais / 3600) % 24
  const minutos1 = Math.floor(segundostotais / 60) % 60
  const segundos1 = Math.floor(segundostotais) % 60

  
  const result =
    `<strong>${dias1}d:<strong>` +
    `<strong>${horas1}h:<strong>` +
    `<strong>${minutos1}m:<strong>` + `<strong>${segundos1}s<strong>`
  //console.log(result)
  res.innerHTML = result
}


function formatTime(time) {
  return time < 10 ? `0${time}` : time
}



setInterval(contador, 1000)