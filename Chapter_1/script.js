document.getElementById("axbutton").addEventListener("click", makeRequest)

async function makeRequest(){
    console.log("clicked")

    const res = await axios('data.txt')
    console.log(res.data)
    document.getElementById("axiosdata").innerText = res.data
}

// function makeRequest(){
//     console.log("clicked")
//     axios('data.txt').then((res) => {
//         console.log(res.data)
//         document.getElementById("axiosdata").innerHTML = res.data
//     })
// }