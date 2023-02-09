let url = "https://kontests.net/api/v1/all"

let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contests) => {
  console.log(contests)

  ihtml = ""
  for (item in contests) {
    console.log(contests[item])

    ihtml += ` <div class="card" style="width: 45rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdb3Cd52nUd8xKvqUbkBEad0ZqlJO93pMKHSR78ns_lCm1nDfB5iVpKvLWedN6iqHl340&usqp=CAU" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text">Status is ${contests[item].status} </p>
          <p class="card-text">in_24_hours ${contests[item].in_24_hours} </p>
          <p>Start at: ${contests[item].start_time} </p>
          <p> Start at: ${contests[item].end_time}<p/>
          <a href="${contests[item].url}" class="btn btn-primary">Visit Contests</a>
        </div>
`

  }
  cardContainer.innerHTML = ihtml
})
ihtmll = ""
ihtmll += ``

texth.innerHTML = ihtmll

