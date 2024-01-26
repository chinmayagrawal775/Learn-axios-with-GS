document.getElementById("axbutton").addEventListener("click", makeRequest)

async function makeRequest(){
    console.log("clicked")
    const res = await axios('https://dog.ceo/api/breeds/image/random')
    console.log(res)
    console.log(res.data)
    document.getElementById('image').setAttribute('src', res.data.message)
}

// function makeRequest(){
//     console.log("clicked")
//     axios.post('https://reqres.in/api/users', '{"name": "morpheus","job": "leader"}').then((res) => {
//     console.log(res)
//     console.log(res.data)
//     document.getElementById("axiosdata").innerText = res.data.id
//     })
// }