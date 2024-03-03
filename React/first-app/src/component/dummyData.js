import React, { useEffect, useState } from 'react'

export default function DummyData() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts();
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then((response) => response.json()
        //         // console.log(response.json())
        //     )
        //     .then((response) => setPosts(response))
        //     .catch((error) => {
        //         console.log(error);
        //     });

    }, []);



    function getPosts() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json()
            )
            .then((response) => { setPosts(response)})
            .catch((error) => {
                console.log(error);
            });

    }
    const getItem = (id) =>{
        console.log(id);
    }
  
    var names = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Haley", "Ivan", "Jasmine"]
    return (
        <div>
            {posts.map((data, key) => {
                console.log(data);
                return (<>
                    <div key={key}>
                        <ul >
                            <li  >
                                {data.title} <button onClick={()=>getItem(data.id)}>update</button>
                            </li>
                        </ul>
                        
                    </div>
                </>)
            })}
            {/* {console.log(posts)} */}
            {/* <button onClick={getPosts}>clickme</button> */}
        </div>
    )
}
