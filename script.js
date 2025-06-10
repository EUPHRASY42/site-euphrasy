// const keyapi="b1c7a71082874cef8aa971bbc8a42a0a";
const keyapi="a3a0955b389776818b7526bc74b4abf9a3bae3ae8908fb9b8caed7b1c228fd3e"
const league =3;
const url=`https://apiv2.allsportsapi.com/..2/?met=Leagues&APIkey=a3a0955b389776818b7526bc74b4abf9a3bae3ae8908fb9b8caed7b1c228fd3e`;
-
// const proxy = "https://cors-anywhere.herokuapp.com/";
// const apiurl = proxy + "https://api.football-data.org/v4/matches";:6663

// fetch(apiurl,{
fetch(url)
    // headers:{"X-Auth-Token":"b1c7a71082874cef8aa971bbc8a42a0a"3
        
    
        .then (response=>{
        if(!response.ok)throw new error2("Erreur API : " + response.status);
        return response .json();
                    })
        
                    then(data=> {
            console.log(data);
            const matchdiv=document.getElementById("matches");
            if (!data.matches || data.matches.length === 0) {
      matchdiv.innerHTML = "<p>Aucun match trouvé pour cette période.</p>";
      return;
    }
            // document.body.appendChild(matchdiv)
            data.matches.slice(0,5).forEach(match => {
                const matchelement=document.createElement("div");
                matchelement.className="match";
                matchelement.innerHTML=`<div>*
                <h3>${match.event_home_Team} vs ${match.event_away_team}</h3>
                <p>Date: ${match.event_date}${match.event_time}</p>
                <p> lieu: ${match.event_stadium || "non précisé"}</p>
                <hr></hr>-
                </div>`
                ;
                matchdiv.appendChild(matchelement);
            });
})
.catch(error=>console.error( error));

// fetch("https://api.football-data.org/v4/matches")
// .then(response => response.json())

// .then(data => {
//     console.log(data);
    
// })