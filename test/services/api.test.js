api = require('../../src/service/api')


const query = {
    limit:10,
    size:20,
    emptyText : '',
    null : null,
    zero : 0,
    ohFalse : false
}

//console.log(api.buildQuery(query))
//console.log('?limit=10&size=20&zero=0&ohFalse=false')

//console.log(api.api('/mito', query))

//api.GET('/todos/1')
//.then(response => {  console.log(response.data)  } )
//.catch(err => { console.log(err) } );



//api.GET('/todos/1')
//.then(response => {  console.log(response.data)  } )
//.catch(err => { console.log(err) } );

const todo = {
    userId: 1,
    title: 'delectus aut autem',
    completed: false 
}

const username = 'rafael-juliao';
api.ENDPOINT('https://api.github.com')
api.GET(`/users/${username}/repos`)
    .then(response => {  console.log(response.data.repositories)  } )
    .catch(err => { console.log(err) } );
    