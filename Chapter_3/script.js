document.getElementById("axbutton").addEventListener("click", makeRequest)

async function makeRequest(){
    console.log("clicked")
    const res = await axios('https://jsonplaceholder.typicode.com/posts/1')
    console.log(res)
    console.log(res.data)
    document.getElementById("axiosdata").innerText = res.data.body
}

// async function makeRequest(){
//     console.log("clicked")
//     config = { 
//         params: {id:1 }
//     }
//     const res = await axios('https://jsonplaceholder.typicode.com/posts/', config)
//     console.log(res)
//     console.log(res.data[0])
//     document.getElementById("axiosdata").innerText = res.data[0].body
// }

// function makeRequest(){
//     console.log("clicked")
//     axios('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
//     console.log(res)
//     console.log(res.data)
//     document.getElementById("axiosdata").innerText = res.data.body
//     })
// }

// function makeRequest(){
//     console.log("clicked")
//     config = { 
//         params: {id:1 }
//     }
//     axios('https://jsonplaceholder.typicode.com/posts/', config).then((res) => {
//         console.log(res)
//         console.log(res.data[0])
//         document.getElementById("axiosdata").innerText = res.data[0].body
//     })
// }