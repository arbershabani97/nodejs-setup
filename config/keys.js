switch(process.env.NODE_ENV){
  case 'production':
    module.exports = require('./prod');
    break;
    
  case 'development':
    module.exports = require('./dev');
    break;
    
  case 'testing':
    module.exports = require('./test');
    break;
  
  default:
}