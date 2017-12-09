"use strict";

module.exports = Object.freeze({
    
    // App-ID. TODO: set to your own Skill App ID from the developer portal.
    appId : 'amzn1.ask.skill.8183f15a-0a4b-4fbf-a366-ebda77e01cc3',

    appName: 'al Furqan',

    basmalaUrl: 'https://s3.amazonaws.com/duasmobi/basmala.mp3',

    greeting: 'Welcome to AlFurqan. You can say play Surahe Yaseen to begin recitation',
    repromptGreeting: 'You can say, play chapter 1, to begin.',
    
    //  DynamoDB Table name for sessions
    dynamoDBTableName : 'AlFurqan',
    
    /*
     *  States:
     *  START_MODE : Welcome state when the audio list has not begun.
     *  PLAY_MODE :  When a playlist is being played. Does not imply only active play.
     *               It remains in the state as long as the playlist is not finished.
     *  RESUME_DECISION_MODE : When a user invokes the skill in PLAY_MODE with a LaunchRequest,
     *                         the skill provides an option to resume from last position, or to start over the playlist.
     */
    states : {
        START_MODE : '',
        PLAY_MODE : '_PLAY_MODE',
        RESUME_DECISION_MODE : '_RESUME_DECISION_MODE'
    }
});
