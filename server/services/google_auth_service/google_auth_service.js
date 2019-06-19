import keys from '../../config/keys';
import express from 'express';
import GoogleStrategy  from 'passport-google-oauth20';
import Passport from 'passport';
const MainGoogleStrategy = GoogleStrategy.Strategy;
//console.developers.google.com
const router  = express().Router;
passport.use(
	new MainGoogleStrategy({
		clientID:     keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL:'/auth/google/callback'
	    }, (accessToken, refreshToken,profile,done) => {
	          console.log("granted")
	    }
	)
);

router.get('/auth/google', passport.authenticate('google', {
     scope:['profile', 'email']
  })

);

//now there is a status code
router.get('/auth/google/callback',passport.authenticate('google')
);
 
export default router;