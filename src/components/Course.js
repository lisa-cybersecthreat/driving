import React, {useEffect} from 'react'

function Course () {

    useEffect(()=>{
        const data= {
            name: "lisa.wang",
            email: "lisa.wang@cybersecthreat.com",
            mobile: "0908117599",
            title: "go hiking"
        }      
        // const data="name=lisa&email=lisa.wang&mobile=0908"

        // const url="http://www.testapp.net/api/reservation/teacher/submit";

        const url="http://www.testapp.net/api/register";
            fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                // mode: "no-cors",
                // credentials: 'same-origin',
                // credentials: 'include',
                // credentials: 'omit',
                headers: {
                  'Content-Type': 'application/json',
                //   'Content-Type': 'text/html',
                //   'Content-Type': 'text/plain',
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header
                // body: data
            })
            .then(res=>{
                res.json()
                res.headers.get('Content-Type')})
            .then(data=> {
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            course
        </div>
    )
}

export default Course;
