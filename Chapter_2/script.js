document.getElementById("axbutton").addEventListener("click", makeRequest)

async function makeRequest(){
    console.log("clicked")

    const res = await axios('data.json')
    console.log(res.data)
    document.getElementById("axiosdata").innerText = res.data.name
}

// function makeRequest(){
//     console.log("clicked")
//     axios('data.json').then((res) => {
//         console.log(res.data)
//         document.getElementById("axiosdata").innerHTML = res.data.name
//     })
// }