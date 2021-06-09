//https://console.firebase.google.com/

var canvas, bgImage;
var gameState =0;
var playerCount = 0;
var database;
var form, player, game;

function setup(){
    database = firebase.database();
   
    createCanvas(500,500);
    
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    
}
