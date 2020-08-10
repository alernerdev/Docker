const express=require('express');
const redis=require('redis');

const app=express();
// redis-server is the container name
const client=redis.createClient({
    // redis client doesnt know what this string is.  Docker handles it
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);


app.get('/', (req,res) => {
    client.get('visits', (err, visits) => {
        res.send("number of visits is " + visits);
        client.set('visits', parseInt(visits)+1);
    });
})

app.listen(8081, ()=> {
    console.log("listening on port 8081");
});