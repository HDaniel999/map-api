module.exports = {
    port: process.env.PORT || 9000,
    //8080
    database_url: process.env.STRING_CONNECTION || 'mongodb+srv://admin:admin@parcomap-cluster-rogeh.gcp.mongodb.net/test?retryWrites=true&w=majority'
    //'mongodb://localhost:8080'
}