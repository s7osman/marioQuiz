$(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        //STORE THE VALUES OF EACH QUESTION

        const q1 = $('input[name=question1]:checked').val();
        const q2 = $('input[name=question2]:checked').val();
        const q3 = $('input[name=question3]:checked').val();
        const q4 = $('input[name=question4]:checked').val();

        // IF THEY CHOOSE MARIO THEY GET ONE POINT FOR EACH QUESTION

        let check = 0 
// create score system {1 point for every Mario answer}
                if (q1 == "mario") {check++};
                if (q2 == "mario") {check++};
                if (q3 == "mario") {check++};
                if (q4 == "mario") {check++};

            console.log(check)

            const character = []; 

//Determine results based on score
            if (check >= 3){
                character.push('mario')
            } else if (check === 2 || check === 1){
                character.push('luigi')
            } else {
                character.push('bowser')
            };

            console.log(character);

            // Display Results on the screen

        $('.scrollDown').html('<p class="scrollMessage"> Scroll down for results!</p>');
        $('.results').html(`<h1 class="phrase">YOU ARE ${character}!!</h1>`);
    })

});

