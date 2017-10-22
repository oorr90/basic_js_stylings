window.onload = init;


function init() {
    
    /* Pretty much unrelated to the project goal, but practicing using .style with the title text */
    var h1 = document.querySelector("h1");
    h1.style.textTransform= "uppercase";
    h1.style.marginTop = "40px";
    
    var p = document.querySelector("p");
    p.style.marginBottom = "30px";
    
    
    // BEGIN PROJECT
    
    /* Gather all of the elements that need to be affected when the user chooses a new color palette and store them in variables for later use */
    var roboPrimary = document.querySelectorAll(".color-primary");
    var roboSecondary = document.querySelectorAll(".color-secondary");
    var roboEye = document.querySelectorAll(".single-eye");
    var roboMouth = document.getElementById("mouth");
    var roboShoulder = document.querySelectorAll(".shoulder");
    var roboArm = document.querySelectorAll(".arm");
    var roboHand = document.querySelectorAll(".hand");
    var roboLeg = document.querySelectorAll(".leg");
    var roboFoot = document.querySelectorAll(".foot");
    
    /* Colors set to default on window.onload */
    changeColors("default-");
    
    /* When this function is called, it will accept one parameter in order to change the color palette.  */
    function changeColors(color) {
        
        //Loop through the classes when querySelectorAll was used to create the variable
            //Use setAttribute to alter the class names
            //+ color + is the first part of the class name, which is different each time the function is called depending on the user's choice
        for (var i = 0; i < roboPrimary.length; i++) {
            roboPrimary[i].setAttribute("class", "color-primary " + color + "primary");
        }
        
        for (var i = 0; i < roboSecondary.length; i++) {
            roboSecondary[i].setAttribute("class", "color-secondary " + color + "secondary");
        }
        
        for (var i = 0; i < roboEye.length; i++) {
            roboEye[i].setAttribute("class", "single-eye " + color + "eye");
        }
        
        roboMouth.setAttribute("class", ""+ color + "mouth");
        
        for (var i = 0; i < roboShoulder.length; i++) {
            roboShoulder[i].setAttribute("class", "shoulder " + color + "shoulder");
        }
        
        for (var i = 0; i < roboArm.length; i++) {
            roboArm[i].setAttribute("class", "arm " + color + "arm");
        }
        
        for (var i = 0; i < roboHand.length; i++) {
            roboHand[i].setAttribute("class", "hand " + color + "hand");
        }
        
        for (var i = 0; i < roboLeg.length; i++) {
            roboLeg[i].setAttribute("class", "leg " + color + "leg");
        }
        
        for (var i = 0; i < roboFoot.length; i++) {
            roboFoot[i].setAttribute("class", "foot " + color + "foot");
        }
        
    }

    /* I am not sure if there is a way to further refactor lines 80 - 98? */
    
    var warm = document.getElementById("warm-button"); //Grab onto the button for the color change
    warm.wasClicked = false; //The button hasn't been clicked yet, so this is set to false
    warm.colorPrefix = "warm-"; //Set the colorPrefix, which corresponds to a class that has already been styled with CSS
    warm.onclick = selectColor; //When the button is clicked, call the selectColor function
    
    var cool = document.getElementById("cool-button");
    cool.wasClicked = false;
    cool.colorPrefix = "cool-";
    cool.onclick = selectColor;
    
    var earth = document.getElementById("earth-button");
    earth.wasClicked = false;
    earth.colorPrefix = "earth-";
    earth.onclick = selectColor;
    
    var bw = document.getElementById("bw-button");
    bw.wasClicked = false;
    bw.colorPrefix = "bw-";
    bw.onclick = selectColor;
    
    var defaultCo = document.getElementById("default-button");
    defaultCo.wasClicked = false;
    defaultCo.colorPrefix = "default-";
    defaultCo.onclick = selectColor;
    
    //Change .wasClicked to true, which then allows the changeColors function to be called with .colorPrefix passed as a parameter
    function selectColor() {
        this.wasClicked = true;
        if (this.wasClicked) {
            changeColors(this.colorPrefix);
        }
    }
    
}


// A NOTE ON NESTING FUNCTIONS
    //I am not sure why I couldn't declare the robo variables outside of init()?
    //I wanted to to this ^ so I could access these variables in the changeColors function
    //Since I couldn't figure out why this was so, I nested changeColors and selectColor inside of init. Not sure if I missed something obvious here...



