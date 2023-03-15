const {createBooksHandler}  = require('./handler')

const routes = [
    {
        method:'GET',
        path:'/',
        handler: ()=>{
            return 'Ini adalah halaman home'
        }

    },
    {
        method:'POST',
        path:'/books',
        handler: createBooksHandler
    },
    {
        method:'*',
        path:'/',
        handler: ()=>{
            return 'Halaman ini tidak dapat diakses dengan menggunakan method ini'
        }
    }
]

module.exports = routes