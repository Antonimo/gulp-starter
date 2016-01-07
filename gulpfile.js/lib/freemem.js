var os = require('os');

module.exports = function() {
  
  var memdata = process.memoryUsage();
  
  for( var i in memdata ){
    
    // console.log(i, ( memdata[i] / 1048576 ).toFixed(2) );
    memdata[i] = ( memdata[i] / 1048576 ).toFixed(2)
  }
  
  console.log('os.freemem:', ( os.freemem() / 1048576 ).toFixed(2), memdata );
  
  
  return ( os.freemem() / 1048576 ).toFixed(2);
}