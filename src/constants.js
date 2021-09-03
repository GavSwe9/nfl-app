let constants = {
    "BASE_URL": "https://nhzirmaxvg.execute-api.us-east-1.amazonaws.com",
    "PLAY_TYPE_COLORS": {
        "rush": "#6366F1",
        "pass": "#10B981",
        "fieldGoal": "#FBBF24",
        "punt": "#F87171"
    },
    "PLAY_TYPE_DISPLAY": {
        "rush": "Rush",
        "pass": "Pass",
        "fieldGoal": "Field Goal",
        "punt": "Punt"
    },
    "DOWN_ORDINAL": {
        1: "1st",
        2: "2nd",
        3: "3rd",
        4: "4th"
    },
    "STOCK_DISTANCE_DISPLAY": {
        "1-3": "Short",
        "4-6": "Medium",
        "7-10": "Long",
        "11-99": "Beyond",
    },
    "STAT_DISPLAY": {
        season: {
            abbreviation: "Year",
            full: "Year"
        },
        games: {
            abbreviation: "G",
            full: "Games"
        },

        // Passing
        attempts: {
            abbreviation: "Att",
            full: "Attempts"
        },
        completions: {
            abbreviation: "Cmp",
            full: "completions"
        },
        passingYards: {
            abbreviation: "Yds",
            full: "Passing Yards"
        },
        interceptions: {
            abbreviation: "Int",
            full: "interceptions"
        },
        airYardsAttempted: {
            abbreviation: "AttAY",
            full: "Attempted Air Yards"
        },
        airYardsCompleted: {
            abbreviation: "CmpAY",
            full: "Completed Air Yards"
        },
        attemptsPerGame: {
            abbreviation: "Att/G",
            full: "Attempts Per Game",
            decimals: 1
        },
        completionsPerGame: {
            abbreviation: "Cmp/G",
            full: "Completions Per Game",
            decimals: 1
        },
        completionsPerAttempts: {
            abbreviation: "Cmp%",
            full: "Completions Per Attempts",
            decimals: 1
        },
        passingYardsPerGame: {
            abbreviation: "Yds/G",
            full: "Passing Yards Per Game",
            decimals: 1
        },
        interceptionsPerGame: {
            abbreviation: "Int/G",
            full: "Interceptions Per Game",
            decimals: 2
        },
        airYardsAttemptedPerGame: {
            abbreviation: "AttAY/G",
            full: "Attempted Air Yards Per Game",
            decimals: 1
        },
        airYardsCompletedPerGame: {
            abbreviation: "CmpAY/G",
            full: "Completed Air Yards Per Game",
            decimals: 1
        },
        airYardCompletionPercentage: {
            abbreviation: "CmpAY%",
            full: "Completed Air Yards Percentage",
            decimals: 1
        },
        

        // Rushing 
        rushingAttempts: {
            abbreviation: "Att",
            full: "Rushing Attempts"
        },
        rushingYards: {
            abbreviation: "Yds",
            full: "Rushing Yards"
        },
        rushingAttemptsPerGame: {
            abbreviation: "Att/G",
            full: "Rushing Attempts Per Game",
            decimals: 1
        },
        rushingYardsPerGame: {
            abbreviation: "Yds/G",
            full: "Rushing Yards Per Game",
            decimals: 1
        },
        rushingYardsPerAttempt: {
            abbreviation: "Yds/A",
            full: "Rushing Yards Per Attempt",
            decimals: 2
        },
        totalYards: {
            abbreviation: "TotYds",
            full: "Total Yards"
        },

        // Receiving
        receivingYards: {
            abbreviation: "Yds",
            full: "Receiving Yards"
        },
        yardsPerReception: {
            abbreviation: "Yds/R",
            full: "Yards Per Receptions",
            decimals: 2
        },
        receptions: {
            abbreviation: "Rec",
            full: "Total Yards"
        },
        receptionsPerTarget: {
            abbreviation: "Rec/T",
            full: "Receptions/Target",
            decimals: 2
        },

        targets: {
            abbreviation: "T",
            full: "Targets"
        },
        targetsPerGame: {
            abbreviation: "T/G",
            full: "Targets Per Game",
            decimals: 2
        },
        totalYardsPerGame: {
            abbreviation: "TY/G",
            full: "Total Yards Per Game",
            decimals: 1
        },
        yardsAfterCatch: {
            abbreviation: "YAC",
            full: "Yards After Catch"
        },
        yardsAfterCatchPerReception: {
            abbreviation: "YAC/R",
            full: "Yards After Catch Per Reception",
            decimals: 2
        },

    }
}

exports.constants = constants
