// src/components/Team.js
import React, {useState, useEffect} from "react";

function Team() {

    /**
     * Localhost location for the database, where all the Teams are stored
     
    const host = "http://localhost:3000/teams";

    /**
     * useState to hold all the teams
     */
    //const [teams, setTeams] = useState([]);

    /**
     * runs when the project starts, fetches all the Teams and put them
     * into the teams useState
     */
    /*
    useEffect(() =>{
        fetch(`${host}`)
        .then ((result) => result.json())
        .then ((data) => {
            const team = data.map((char) => (char));
            setTeams(team);
        });
    }, [setTeams]);
    */
    /**
     * Deletes a team from the database
     */
    /*
    function deleteTeamFromDataBase(id){
        fetch(`${host}/${id}`, {
        method: "DELETE",
        })
        .then((reponse) => reponse.json())
        .then(() => {
        setTeams(teams.filter((team) => team.id !== id))
        }); 
    } 
    */
    /**
     * Adds a new team to the database
     */
    /*
    function addTeamToDataBase(team){
        fetch(`${host}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            team_name: team.team_name,
            user_id: team.user_id,
            char1_id: team.char1.id,
            char2_id: team.char2.id,
            char3_id: team.char3.id
        }),
        })
    }
    */
    return (
        <div>
            <p>
            In Team
            </p>
        </div>
    )
}

export default Team;