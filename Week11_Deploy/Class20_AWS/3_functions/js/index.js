$(function(){

    $('#callFunction').on('click', function(){

        //call a function
        sayHello()

        //can you pass sayHello a name and have it output "Hello " + name?
        sayHello("Josh");

        //can you call a function sayGoodbye()?
        sayGoodbye();

        //can you create a function say() that takes TWO parameters: name and greeting
        // where you can pass a name and a greeting and it will say like "Hello Jonathan"
        say("Hello", "Jonathan");
    });

    function say(greeting, name)
    {
        $('#output').append(greeting + " " + name + '\n');
    }

    //This is a function definition or declaration
    //It begins with the word "function"
    //This is a named function
    function sayHello(name)
    {
        if(name)
        {
            $('#output').append('Hello ' + name + '\n');
        }
    }

    function sayGoodbye()
    {
        $('#output').append("Goodbye\n");
    }

});
