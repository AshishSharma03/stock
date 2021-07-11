
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig={
    images:{
        domains:['onlinetestsindia.com','fakestoreapi.com']
    }
    
}



module.exports = withPlugins([[withImages]],nextConfig);

