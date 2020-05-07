// Récupérer des données

var requestURL = 'superheroes.json';
var data;

fetch(requestURL).then(function(response){
  if(response.ok){
    console.log("Reponse ok");
    response.json().then(function(json){
      console.log("JSON recupere");
      data = json;
      parseSuperHeroes();
    });
  } else {
    console.log("Erreur " + response.status + " : " + response.statusText);
  }
});

var parseSuperHeroes = function(){
  console.log(data);
  console.log(data.squadName);
  data.members.forEach(function(member){
    console.log(member.name + ", " + member.age);
    member.powers.forEach(function(power){
      console.log("-> "+ power);
    });
    console.log("-- "+ member["secretIdentity"] + " --");
  });
}
