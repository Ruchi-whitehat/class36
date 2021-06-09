class Form{
    constructor(){}

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(530,100);

        var input = createInput("Name");
        var button = createButton("Play");
        var greeting = createElement("h3");

        input.position(500, 250);
        button.position(500, 300);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();

            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello " + name);
            greeting.position(500,300);

        });
    }
}