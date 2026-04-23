const menutoggle = document.getElementById('menubar');
const navlink = document.querySelector('.nav-links');

menutoggle.addEventListener('click', ()=>{
    navlink.classList.toggle('show')
    console.log("Menu Clicked");
    
})


// order form 
const table = document.querySelector('#table');


fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    console.table(data);
    let rows = `
    <thead> 
               <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
               </tr>
            </thead>
    `;
    data.forEach(user => {
    rows += `<tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.address.city}</td>
    <td>${user.phone}</td>
    </tr>`
       
    table.innerHTML = rows
       
    });
})


// const table = document.querySelector('#table')
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(resposne => resposne.json())
//             .then(data => {
//                 console.log(data);
//                 let rows = ""
//                 data.forEach(user => {
//                     rows += `<tr><td>${user.name}</td><td>${user.email}</td></tr>`
//                 });
//                 table.innerHTML = rows
//             })