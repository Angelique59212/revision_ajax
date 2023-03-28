async function fetchUsers() {
    //Pour récupérer les données
    // const r = await fetch('https://jsonplaceholder.typicode.com/users', {
    //     method: 'GET',
    //     headers: {
    //         "Accept" : "application/json",
    //     },
    // });
    //Pour envoyer les données
    const r = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({title: 'Mon premier titre'})
    })
    if (r.ok === true) {
        return r.json();
    }
    throw new Error('Impossible de contacter le serveur');
}

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(r=> r.json())
//     .then()

    //Pour récuperer 2 appels
    //
    // Promise.race([
    //     fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5&_delay=2000'),
    //     fetch('https://jsonplaceholder.typicode.com/users/?_limit=3')
    // ]).then(r => r.json()).then(console.log)

// }

