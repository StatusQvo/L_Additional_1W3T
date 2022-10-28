let m1 = 'Сколько клиент потратил сегодня?'
let m2 = 'Сколько клиент потратил за все время?'
let discount = 0

let clientName = prompt('Введите имя клиента').trim()
if (clientName) {
  clientName.trim()
}

let clientSpentToday = checkforNaN(m1)
let clientSpentForAllTime = checkforNaN(m2)

function checkforNaN(question) {
  return +prompt(question)
}

if (!clientSpentForAllTime || !clientSpentToday) {
  alert(
    'Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку'
  )
} else {
  if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10
  } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20
  } else if (clientSpentForAllTime >= 500) {
    discount = 30
  }

  if (discount) {
    alert(`Вам предоставляется скидка в ${discount}%!`)
    clientSpentToday -= (clientSpentToday * discount) / 100
    clientSpentForAllTime += clientSpentToday
  }

  alert(
    `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
  )
}
