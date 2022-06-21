const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

update.addEventListener('click', _ =>{
    //send PUT Request 
fetch('/quotes',{
    method: 'put',
    headers: {'Content-Type':'application/json'}
    body: JSON.stringify({
        name:'Darth Vader',
        quote: 'I find your lack of faith disturbing.'
        })
    })
        .then(response =>{
            if(response.ok) return response.json()
})
    .then(data =>{
        console.log(data)
    })
})

deleteButton.addEventListener('click',_=>{
    fetch('quotes',{
        method: 'delete',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Darth Vader'
        })
    })
        .then(res =>{
        if(response.ok) return response.json('No quote to delete'){
            messageDiv.textContent = 'No Darth Vader quote to delete'
    }else{
            window.location.reload(true)
        }
        })
    .catch(console.error)
})
