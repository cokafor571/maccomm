"use strict";

//jquery
$(function() { 
  
  // scroll to top call
   $( '#go-to-top' ).click(function() {
        $( 'html,body' ).animate({
             scrollTop: 0 }, 
             'slow'
             );
        return false; 
    });
    
});