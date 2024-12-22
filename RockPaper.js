var computerscore = 0,
  yourscore = 0,
  yourchoice,
  computerchoice,
  winningscore = 5,
  usersetvalue = 0,
  setswonuser = 0,
  setswoncomputer = 0;

const setsFunction = () => {
  usersetvalue = document.getElementById("sets").value;
  if(usersetvalue == null || undefined || '' ||" "||""){
    document.getElementById("error").innerHTML = "You havent entered a number. Please Enter a number";
  }
  if(usersetvalue == "0"){
    document.getElementById("error").innerHTML = "You enetred 0, Enter no greater than 0";
  }

  if(usersetvalue > 0){
    document.getElementById("main").style.display = "none";
    document.getElementById("inbox").style.display = "block";
    document.getElementById("displayscore").style.display = "block";
    document.getElementById("aboutsets").style.display = "block";
    document.getElementById("spanaboutsets").innerHTML = usersetvalue;
  }
};

const nextSet = (playercontainer, computercontainer) => {
  (computerscore = 0), (yourscore = 0);
  document.getElementById(playercontainer).innerHTML = "";
  document.getElementById(computercontainer).innerHTML = "";
  document.getElementById("dispbuttons").style.display = "block";
  document.getElementById("newbuttons").style.display = "none";
  document.getElementById("newsetbuttons").style.display = "none";
  document.getElementById("yscore").innerHTML = yourscore;
  document.getElementById("cscore").innerHTML = computerscore;
};

const evaluateSetScore = (setswoncomputer, setswonuser) => {
  var tot = setswoncomputer + setswonuser;
  if (setswonuser == setswoncomputer && tot == usersetvalue) {
    document.getElementById("newsetbuttons").style.display = "none";
    console.log("draw");
    document.getElementById("change").innerHTML = "It's a Draw .";
  } else if (setswonuser > setswoncomputer && tot == usersetvalue) {
    document.getElementById("newsetbuttons").style.display = "none";
    console.log("u won game");
    document.getElementById("change").innerHTML =
      "Congratulation! You've won the game.";
  } else if (setswoncomputer > setswonuser && tot == usersetvalue) {
    document.getElementById("newsetbuttons").style.display = "none";
    console.log("computer won the game");
    document.getElementById("change").innerHTML =
      "Sorry! You've lost the game.";
  } else {
    console.log("pass");
  }
};
const getComputerChoice = () => {
  const arr = ["rock", "paper", "scissor"];
  computerchoice = arr[Math.floor(Math.random() * arr.length)];
  var dont = document.getElementById("computercontainer");
  var abc = document.createElement("p");
  abc.textContent = computerchoice;
  dont.appendChild(abc);
  //document.getElementById("cchoice").innerHTML = computerchoice;
};
const evaluateScore = () => {
  console.log("evaluation is called");
  if (yourchoice == computerchoice) {
    document.getElementById("change").innerHTML = "Oops its a Draw";
  } else if (yourchoice == "rock" && computerchoice == "scissor") {
    yourscore++;
    document.getElementById("change").innerHTML = "You Won This Round";
    document.getElementById("yscore").innerHTML = yourscore;
  } else if (yourchoice == "rock" && computerchoice == "paper") {
    computerscore++;
    document.getElementById("change").innerHTML = "You Lose This Round";
    document.getElementById("cscore").innerHTML = computerscore;
  } else if (yourchoice == "paper" && computerchoice == "rock") {
    yourscore++;
    document.getElementById("change").innerHTML = "You Won This Round";
    document.getElementById("yscore").innerHTML = yourscore;
  } else if (yourchoice == "paper" && computerchoice == "scissor") {
    computerscore++;
    document.getElementById("change").innerHTML = "You Lose This Round";
    document.getElementById("cscore").innerHTML = computerscore;
  } else if (yourchoice == "scissor" && computerchoice == "paper") {
    yourscore++;
    document.getElementById("change").innerHTML = "You Won This Round";
    document.getElementById("yscore").innerHTML = yourscore;
  } else if (yourchoice == "scissor" && computerchoice == "rock") {
    computerscore++;
    document.getElementById("change").innerHTML = "You Lose This Round";
    document.getElementById("cscore").innerHTML = computerscore;
  }
  isMatchOver();
};

const rock = () => {
  yourchoice = "rock";

  var dont = document.getElementById("playercontainer");
  var abc = document.createElement("p");
  abc.textContent = "rock";
  dont.appendChild(abc);
  //document.getElementById("ychoice").innerHTML = yourchoice;
  getComputerChoice();
  evaluateScore();
};

const paper = () => {
  yourchoice = "paper";

  var dont = document.getElementById("playercontainer");
  var abc = document.createElement("p");
  abc.textContent = "paper";
  dont.appendChild(abc);

  //document.getElementById("ychoice").innerHTML = yourchoice;
  getComputerChoice();
  evaluateScore();
};

const scissor = () => {
  yourchoice = "scissor";

  var dont = document.getElementById("playercontainer");
  var abc = document.createElement("p");
  abc.textContent = "scissor";
  dont.appendChild(abc);

  //document.getElementById("ychoice").innerHTML = yourchoice;
  getComputerChoice();
  evaluateScore();
};
const newGame = () => {
  document.getElementById("newbuttons").addEventListener("click", () => {
    window.location.reload();
  });
};

const isMatchOver = () => {
  if (computerscore == "5") {
    document.getElementById("change").innerHTML = "Sorry! You've lost the Set.";
    document.getElementById("dispbuttons").style.display = "none";
    document.getElementById("newbuttons").style.display = "inline";
    document.getElementById("newsetbuttons").style.display = "inline";
    setswoncomputer++;
    evaluateSetScore(setswoncomputer, setswonuser);
    document.getElementById("cset").innerHTML = setswoncomputer;
  } else if (yourscore == "5") {
    document.getElementById("change").innerHTML =
      "Congratulation! You've won the Set.";
    document.getElementById("dispbuttons").style.display = "none";
    document.getElementById("newbuttons").style.display = "inline";
    document.getElementById("newsetbuttons").style.display = "inline";
    setswonuser++;
    evaluateSetScore(setswoncomputer, setswonuser);
    document.getElementById("uset").innerHTML = setswonuser;
  } else {
  }
};
