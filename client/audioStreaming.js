/**
 * Created by shanmuv on 11/10/16.
 */
/*
 * paste this code in console of https://google.com
 * Talk to him / her
 * You will hear a motivating voice
 */

var Audio = document.createElement('audio')
Audio.setAttribute('autoplay','')
document.body.appendChild( Audio );
navigator.getUserMedia({
        video:false,
        audio:true
    },
    function success( localMediaStream ){
        console.log( ' suceess')
        Audio.src=window.URL.createObjectURL(localMediaStream )
        console.log( Audio )
    },
    function error( errorMsg ){
        console.log( errorMsg );
    }
)