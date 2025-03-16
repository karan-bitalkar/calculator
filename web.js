let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string =""; // result store karege
let arr = Array.from(buttons); // array ek variable hai
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){ // agar equal button hai to otput dikhe
             string  = eval(string); // eal ek inblit function hai jo stringmay jo store hai usko eual kareg mathemtick form may
              input.value = string;
        }

            else if(e.target.innerHTML == 'AC'){ // AC button par clck karege to all clear hona padega
              string = "";  // emp ho
              input.value=string;// input may ka value he dikhe sirf
            }
             
            else if(e.target.innerHTML =='DEL'){ // agar Del vale button par loi clck karta hai to last wala number delet hona chihihai
                string = string.substring(0, string.length-1); // last se ek sting remove kar dega
                input.value=string;// aur jo bi shikal hai usiko show karega
            }

            else{ 
              string += e.target.innerHTML;   // agar equal button nahi hai to use hum add karte chale jayege(+=)se 
              input.value=string; // input box may dikh jayega
            }  
    })
})