process.env.NODE_ENV= process.env.NODE_ENV || 'development'
process.env.SERVER_PORT= process.env.SERVER_PORT || '4040'
process.env.JWT_SECRET='0a6b944d-d2fb-46fc-a85e-0295c986cd9f'
process.env.MONGO_HOST='mongodb://atlas_admin_123:admin123@cluster0-shard-00-00-3difh.mongodb.net:27017,cluster0-shard-00-01-3difh.mongodb.net:27017,cluster0-shard-00-02-3difh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
process.env.MONGO_PORT='27017'
require('babel-register');
require("babel-polyfill");
require('./server');
