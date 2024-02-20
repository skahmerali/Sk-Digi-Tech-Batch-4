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
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json()
            )
            .then((response) => setPosts(response))
            .catch((error) => {
                console.log(error);
            });

    }
    var names = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Haley", "Ivan", "Jasmine"]
    return (
        <div>
            {posts.map((data, key) => {
                console.log(data.body);
                return (<>
                    <div key={key}>
                        <ul >
                            <li>
                                {data.body}
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
