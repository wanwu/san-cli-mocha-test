module.exports = (async()=>{
    const Service = require('san-cli-service');
    const service = new Service();

    await service.run();

    return service.getWebpackConfig();
})();
