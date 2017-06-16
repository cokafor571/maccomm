"use strict";

//jquery
$(function() { 

    //form validation 
   // $( 'form' ).validate();
   $( '.aboutajax' ).click(function(e) {
        e.preventDefault(); 

       $.ajax({
            url: '/about',
            type: 'GET',
            dataType: 'html',
            success: function(result) {
                $( '.ajaxcall' ).html( result ).hide().slideDown(); 
                console.log( 'success' );
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log( 'error' );
            }
       }); 
   }); 

   $( '.presidentajax' ).click(function(e) {
        e.preventDefault(); 

       $.ajax({
            url: '/presidentmessage',
            type: 'GET',
            dataType: 'html',
            success: function(result) {
                $( '.ajaxcall' ).html( result ).hide().slideDown(); 
                console.log( 'success' );
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log( 'error' );
            }
       }); 
   }); 

   $( '.serviceajax' ).click(function(e) {
        e.preventDefault(); 

       $.ajax({
            url: '/services',
            type: 'GET',
            dataType: 'html',
            success: function(result) {
                $( '.ajaxcall' ).html( result ).hide().slideDown(); 
                console.log( 'success' );
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log( 'error' );
            }
       }); 
   }); 

   $( '.programajax' ).click(function(e) {
        e.preventDefault(); 

       $.ajax({
            url: '/programs',
            type: 'GET',
            dataType: 'html',
            success: function(result) {
                $( '.ajaxcall' ).html( result ).hide().slideDown(); 
                console.log( 'success' );
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log( 'error' );
            }
       }); 
   }); 

   $( '.committeeajax' ).click(function(e) {
        e.preventDefault(); 

       $.ajax({
            url: '/committees',
            type: 'GET',
            dataType: 'html',
            success: function(result) {
                $( '.ajaxcall' ).html( result ).hide().slideDown(); 
                console.log( 'success' );
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log( 'error' );
            }
       }); 
   }); 

   $( '.youthajax' ).click(function(e) {
        e.preventDefault(); 

       $.ajax({
            url: '/youth',
            type: 'GET',
            dataType: 'html',
            success: function(result) {
                $( '.ajaxcall' ).html( result ).hide().slideDown(); 
                console.log( 'success' );
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log( 'error' );
            }
       }); 
   }); 

   $( '.joinajax' ).click(function(e) {
        e.preventDefault(); 

       $.ajax({
            url: '/join',
            type: 'GET',
            dataType: 'html',
            success: function(result) {
                $( '.ajaxcall' ).html( result ).hide().slideDown(); 
                console.log( 'success' );
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log( 'error' );
            }
       }); 
   }); 

   $( '.valueajax' ).click(function(e) {
        e.preventDefault(); 

       $.ajax({
            url: '/membervalue',
            type: 'GET',
            dataType: 'html',
            success: function(result) {
                $( '.ajaxcall' ).html( result ).hide().slideDown(); 
                console.log( 'success' );
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log( 'error' );
            }
       }); 
   }); 

});