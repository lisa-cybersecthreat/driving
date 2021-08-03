import React, {useEffect} from 'react';

function Retake () {
    useEffect(()=>{
        // var url="http://localhost:9000/todos" 
        var url="https://todo-lit.herokuapp.com/todos" 
        const data= {
            name: "lisa.wang",
            email: "lisa.wang@cybersecthreat.com",
            mobile: "0908117599",
            title: "go hiking 2"
        }      
        
            fetch(url, {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                //   'Content-Type': 'text/html',
                //   'Content-Type': 'text/plain',
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            })
            .then(res=>{
                res.json()
                console.log(res)
                console.log(res.headers.get("Content-Type"))
            })
            .then(data=> {
                console.log(data)
            })
            .catch(err => console.error(err))
    }, [])
    return(
        <div>
            retake
        </div>
    )
}

export default Retake;