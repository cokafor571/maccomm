var express = require('express' );
var router = express.Router(); 

var path = require( 'path' ); 

router.get( '/', function( req, res ) {
    res.render( 'index' ); 
});

router.get( '/about', function( req, res ) {
    res.render( 'about' ); 
});

router.get( '/presidentmessage', function( req, res ) {
    res.render( 'presidentmessage' ); 
});

router.get( '/services', function( req, res ) {
    res.render( 'services' ); 
});

router.get( '/programs', function( req, res ) {
    res.render( 'programs' ); 
});

router.get( '/committees', function( req, res ) {
    res.render( 'committees' ); 
});

router.get( '/join', function( req, res ) {
    res.render( 'join' ); 
});

router.get( '/membervalue', function( req, res ) {
    res.render( 'membervalue' ); 
});

router.get( '/youth', function( req, res ) {
    res.render( 'youth' ); 
});

router.get( '/contact', function( req, res ) {
    res.render( 'contact' ); 
});

module.exports = router; 