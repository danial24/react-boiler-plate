var pack = require('./package.json');
var argv = require('yargs').argv;


// var getEnvironment = function(){
//   var env = argv.env || 'develop';
//   if(env=='production'){
//     return require('./app/ProductionConfig.js');
//   }else if(env=='staging'){
//     return require('./app/StagingConfig.js');
//   }else{
//     return require('./app/DevConfig.js');
//   }
// };


var config = {
  env: argv.env || 'develop',
  src: pack.paths.src,
  dest: pack.dest.dist + "-" + (argv.env || 'develop'),
  version: pack.version,
  license: pack.license,
  licenseOptions: {
    organization: pack.licenseOptions
  },
  envConfig : getEnvironment()
};

module.exports = config;
