import localStrategy from 'passport-http';
const BasicStrategy = localStrategy.BasicStrategy;

const auth = new BasicStrategy(
  function(username ,password, done) {
      if(username ==='admin' && password ==='admin'){
        return done(null, true)
      }else{
        return  done(null, false)
      }
  }
);

export { auth }