/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = "amzn1.ask.skill.a5698149-debd-4d04-8585-053201d4554e";

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'During civil disturbance be like an adolescent camel, which has neither a back strong enough for riding nor udders for milking.',
                'He who adopts greed as a habit devalues himself; he who discloses his hardship agrees to humiliation; and he who allows his tongue to overpower his soul debases the soul.',
                'Miserliness is shame; cowardice is a defect; poverty disables an intelligent man from arguing his case; and a destitute person is a stranger in his home town.',
                'Incapability is a catastrophe; endurance is bravery; abstinence is riches; self-restraint is a shield; and the best companion is submission to Allahs will.',
                'The bosom of the wise is the safe of his secrets; cheerfulness is the bond of friendship; effective forbearance is the grave of short-comings.',
                'Charity is an effective cure, and the actions of people in their present life will be before their eyes in the next life. ',
                'How wonderful is man that sees with fat, talks with a piece of flesh, hears with a bone and breathes through a hole.',
                'When this world advances towards anyone it attributes to him others good; and when it turns away from him it deprives him of his own good.',
                'Meet people in such a manner that if you die they should weep for you and if you live they should long for you.',
                'When you gain power over your adversary pardon him by way of thanks for being able to overpower him.',
                'The most helpless of all men is he who cannot find a few brothers during his life, but still more helpless. is he who finds such a brother but loses him.',
                'When you get small favours do not push them away through lack of gratefulness.',
                'He who is abandoned by near ones is dear to remote ones.',
                'All matters are subject to destiny, so much so that sometimes death results from effort.',
                'He who gallops with loose rein collides with death.',
                'Forgive the shortcomings of people of virtue and honor because when they fall into error Allah raises them up.',
                'The consequence of fear is disappointment and of bashfulness is frustration. Opportunity passes away like the cloud. Therefore, make use of good opportunities.',
                'He whose deeds accord him a back position cannot be given a front position because of his lineage.',
                'Rendering relief to the grief-stricken and providing comfort in hardship are among the means of atonement for great sins.',
                'O son of Adam, when you see that your Lord, the Glorified, bestows His favours on you while you are disobeying Him, you should fear Him. ',
                'Whenever a person conceals a thing in his heart it manifests itself through unintentional words from his tongue and the expressions of his face.',
                'When you are running away from the world and death is approaching, there is no question of delay in the encounter.',
                'Fear! Fear! By Allah, He has hidden your sins so much so as though He has forgiven.',
                'Faith stands on four supports: on endurance, conviction, justice and struggle',
                'The doer of good is better than the good itself, and the doer of evil is worse than the evil itself.',
                'Be generous but not extravagant; be thrifty but not miserly.',
                'The best of riches is the abandonement of desires.',
                'Whoever prolongs his desire ruins his actions.',
                'The richest of riches is intelligence; the biggest destitution is foolishness; the wildest wildness is vanity and the best achievement is goodness of the moral character.',
                'Avoid making friends with a fool because he may intend to benefit you but may harm you',
                'Avoid making friends with a miser because he will run away from you when you need him most',
                'You should avoid making friends with a sinful person because he will sell you for nought',
                'Avoid making friends with a liar because he is like a mirage, making you feel far things near and near things far.',
                'The tongue of the wise man is behind his mind, and the mind of the fool is behind his tongue.',
                'May Allah make your illness a means for writing off your sins, because there is no reward for sickness but that it erases sins and makes them fall like dried leaves.',
                'Blessed is the person who kept in mind the next life, acted so as to be able to render account, remained content with what sufficed him and remained pleased with Allah.',
                'The sin that displeases you is better in the view of Allah than the virtue which makes you proud.',
                'The worth of a man is according to his courage, his truthfulness is according to his balance of temper, his valour is according to his self-respect and his chasteness is according to his sense of shame.',
                'Victory is by determination; determination is by the turning over of thoughts; and thoughts are formed by guarding secrets.',
                'Fear the attack of a noble person when he is hungry, and that of an ignoble person when he is satiated.',
                'So long as your position is good, your defects will remain covered.',
                'The most capable of pardoning is he who is the most powerful to punish.',
                'Generosity is that which is by ones own initiative, because giving on being asked is either out of self-respect or to avoid rebuke.',
                'There is no wealth like wisdom, no destitution like ignorance, no inheritance like refinement and no support like consultation.',
                'Patience is of two kinds, patience over what pains you, and patience against what you covet.',
                'With wealth a foreign land is a homeland, while with destitution even a homeland is a foreign land.',
                'Contentment is wealth that does not diminish.',
                'The tongue is a beast; if it is let loose, it devours.',
                'If you are met with a greeting, give better greetings in return. If a hand of help is extended to you, do a better favour in return, although the credit would remain with the one who was first.',
                'The people of the world are like travellers who are being carried while they are asleep.',
                'To miss what one needs is easier than to beg from an inappropriate person.',
                'Do not feel ashamed for giving little because refusal is smaller than that.',
                'Charity is the adornment of destitution while gratefulness is the adornment of riches.',
                'You will not find an ignorant person but at one extreme or the other',
                'As intelligence increases, speech decreases.',
                'Time wears our bodies, renews desires, brings death nearer and takes away aspirations. Whoever is successful with it encounters grief and whoever misses its favours also undergoes hardships.',
                'Whoever places himself as a leader of the people should commence with educating his own self before educating others; and his teaching should be by his own conduct before teaching by the tongue.',
                'Every countable thing is to pass away and every expected thing must come about.',
                'Take wisdom from wherever they may be, because if a wise saying is in the bosom of a hypocrite it flutters in his bosom till it comes out and settles with others of its like in the bosom of the believer.',
                'No one of you should repose hope save in his Lord (Allah); no one of you should fear anything save his sin; no one should feel ashamed of saying "I do not know" when he is asked a matter which he does not know; no one should feel ashamed of learning a thing that he does not know; and you should practise endurance, because endurance is for belief what the head is for the body, so that just as there is no good in a body without the head there is no good in belief without endurance.',
                'Whoever abandons saying, "I do not know." meets his destruction.',
                'I wonder about the man who loses hope despite the possibility of seeking forgiveness.',
                'If a man sets right matters between himself and Allah, then Allah sets right matters between him and other people; and if a man sets right the affairs of his next life then Allah sets right for him the affairs of this world. Whoever is a preacher for himself is protected by Allah.',
                'The perfect jurist is he who does not let people lose hope from the mercy of Allah, does not make them despondent of Allahs kindness and does not make them feel safe from Allahs punishment.',
                'The lowest form of knowledge is that which remains on the tongue and the most superior form is that which manifests itself through the actions of the body.',
                'Good is not that your wealth and progeny should be much, but good is that your knowledge should be much, your forbearance should be great, and that you should vie with other people in worship of Allah.',
                'Action accompanied by fear for Allah does not fail, and how can a thing fail that has been accepted.',
                'The persons most attached to the prophets are those who know most what the prophets have brought.',
                'Sleeping in a state of firm belief is better than praying in a state of doubtfulness.',
                'Islam is submission, submission is conviction, conviction is affirmation, affirmation is acknowledgement, acknowledgement is discharge of obligations, and discharge of obligations is action.'

            ],
            SKILL_NAME: 'Imam Ali Quotes',
            GET_FACT_MESSAGE: "Imam Ali said: ",
            HELP_MESSAGE: 'You can say tell me a quote, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
