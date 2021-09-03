
export function teamLogoName(team){
    switch (team) {
        case "OAK":
            return "LV";
        case "STL":
            return "LA";
        case "JAC":
            return "JAX";
        case "SD":
            return "LAC";
    
        default:
            return team;
    }
}

export function getTeamAllNamesArr(team){
    switch (team) {
        case "LV":
            return ["OAK", "LV"];
        case "LA":
            return ["STL","LA"];
        case "JAX":
            return ["JAC","JAX"];
        case "LAC":
            return ["SD","LAC"];
    
        default:
            return [team];
    }
}
