document.getElementById("axbutton").addEventListener("click", makeRequest)

async function makeRequest(e){
    e.preventDefault()
    console.log("clicked")
    let nm = document.getElementById('name').value
    let job = document.getElementById('job').value
    data = JSON.stringify({name:nm, job:job})
    console.log(data)
    const res = await axios.post('https://reqres.in/api/users', data)
    console.log(res)
    console.log(res.data)
    document.getElementById("axiosdata").innerText = res.data.id
}

// function makeRequest(){
//     console.log("clicked")
//     axios.post('https://reqres.in/api/users', '{"name": "morpheus","job": "leader"}').then((res) => {
//     console.log(res)
//     console.log(res.data)
//     document.getElementById("axiosdata").innerText = res.data.id
//     })
// }