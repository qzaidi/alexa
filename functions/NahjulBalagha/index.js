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
                'Knowledge is a venerable estate; good manners are new dresses; and thinking is clear mirror.',
                'The bosom of the wise is the safe of his secrets; cheerfulness is the bond of friendship; effective forbearance is the grave of short-comings.',
                'Charity is an effective cure, and the actions of people in their present life will be before their eyes in the next life. ',
                'How wonderful is man that sees with fat, talks with a piece of flesh, hears with a bone and breathes through a hole.',
                'When this world advances towards anyone it attributes to him others good; and when it turns away from him it deprives him of his own good.',
                'Meet people in such a manner that if you die they should weep for you and if you live they should long for you.',
                'When you gain power over your adversary pardon him by way of thanks for being able to overpower him.',
                'The most helpless of all men is he who cannot find a few brothers during his life, but still more helpless. is he who finds such a brother but loses him.',
                'When you get small favours do not push them away through lack of gratefulness.',
                'He who is abandoned by near ones is dear to remote ones.',
                'Every mischief monger cannot even be reproved.',
                'All matters are subject to destiny, so much so that sometimes death results from effort.',
                'He who gallops with loose rein collides with death.',
                'Forgive the shortcomings of people of virtue and honor because when they fall into error Allah raises them up.',
                'The consequence of fear is disappointment and of bashfulness is frustration. Opportunity passes away like the cloud. Therefore, make use of good opportunities.',
                'He whose deeds accord him a back position cannot be given a front position because of his lineage.',
                'Rendering relief to the grief-stricken and providing comfort in hardship are among the means of atonement for great sins.',
                'O son of Adam, when you see that your Lord, the Glorified, bestows His favours on you while you are disobeying Him, you should fear Him. ',
                'Whenever a person conceals a thing in his heart it manifests itself through unintentional words from his tongue and the expressions of his face.',
                'The best abstemiousness is to conceal it.',
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
                'Supererogatory worship cannot bring about nearness to Allah if it hampers the obligatory.',
                'The tongue of the wise man is behind his mind, and the mind of the fool is behind his tongue.',
                'May Allah make your illness a means for writing off your sins, because there is no reward for sickness but that it erases sins and makes them fall like dried leaves.',
                'Blessed is the person who kept in mind the next life, acted so as to be able to render account, remained content with what sufficed him and remained pleased with Allah.',
                'The sin that displeases you is better in the view of Allah than the virtue which makes you proud.',
                'The worth of a man is according to his courage, his truthfulness is according to his balance of temper, his valour is according to his self-respect and his chasteness is according to his sense of shame.',
                'Victory is by determination; determination is by the turning over of thoughts; and thoughts are formed by guarding secrets.',
                'Fear the attack of a noble person when he is hungry, and that of an ignoble person when he is satiated.',
                'The hearts of the people are like wild beasts. Whoever tames them, they would pounce upon him.',
                'So long as your position is good, your defects will remain covered.',
                'The most capable of pardoning is he who is the most powerful to punish.',
                'Generosity is that which is by ones own initiative, because giving on being asked is either out of self-respect or to avoid rebuke.',
                'There is no wealth like wisdom, no destitution like ignorance, no inheritance like refinement and no support like consultation.',
                'Patience is of two kinds, patience over what pains you, and patience against what you covet.',
                'With wealth a foreign land is a homeland, while with destitution even a homeland is a foreign land.',
                'Contentment is wealth that does not diminish.',
                'Wealth is the root of desires.',
                'Whoever warns you is like one who gives you good tidings.',
                'The tongue is a beast; if it is let loose, it devours.',
                'If you are met with a greeting, give better greetings in return. If a hand of help is extended to you, do a better favour in return, although the credit would remain with the one who was first.',
                'The interceder is the wing of the seeker.',
                'The people of the world are like travellers who are being carried while they are asleep.',
                'A lack of friends means strangeness.',
                'To miss what one needs is easier than to beg from an inappropriate person.',
                'Do not feel ashamed for giving little because refusal is smaller than that.',
                'Charity is the adornment of destitution while gratefulness is the adornment of riches.',
                'You will not find an ignorant person but at one extreme or the other',
                'As intelligence increases, speech decreases.',
                'Time wears our bodies, renews desires, brings death nearer and takes away aspirations. Whoever is successful with it encounters grief and whoever misses its favours also undergoes hardships.',
                'Whoever places himself as a leader of the people should commence with educating his own self before educating others; and his teaching should be by his own conduct before teaching by the tongue.',
                'The breath of a man is a step towards his death',
                'Every countable thing is to pass away and every expected thing must come about.',
                'Take wisdom from wherever they may be, because if a wise saying is in the bosom of a hypocrite it flutters in his bosom till it comes out and settles with others of its like in the bosom of the believer.',
                'Wisdom is a lost article of the believer. Therefore, get wise sayings even though from people of hypocrisy.',
                'The worth of every man is in his attainments.',
                'No one of you should repose hope save in his Lord (Allah); no one of you should fear anything save his sin; no one should feel ashamed of saying "I do not know" when he is asked a matter which he does not know; no one should feel ashamed of learning a thing that he does not know; and you should practise endurance, because endurance is for belief what the head is for the body, so that just as there is no good in a body without the head there is no good in belief without endurance.',
                'Whoever abandons saying, "I do not know." meets his destruction.',
                'I wonder about the man who loses hope despite the possibility of seeking forgiveness.',
                'If a man sets right matters between himself and Allah, then Allah sets right matters between him and other people; and if a man sets right the affairs of his next life then Allah sets right for him the affairs of this world. Whoever is a preacher for himself is protected by Allah.',
                'The perfect jurist is he who does not let people lose hope from the mercy of Allah, does not make them despondent of Allahs kindness and does not make them feel safe from Allahs punishment.',
                ' The hearts get weary as bodies get weary; so look for beautiful wise sayings for them ',
                'The lowest form of knowledge is that which remains on the tongue and the most superior form is that which manifests itself through the actions of the body.',
                'Good is not that your wealth and progeny should be much, but good is that your knowledge should be much, your forbearance should be great, and that you should vie with other people in worship of Allah.',
                'In this world good is for two persons only; the man who commits sins but rectifies them by repentance; and the man who hastens towards good actions.',
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
            GET_CARD_PREFIX: " قَال أمير المُؤمنين عليه السلام"
        },
    },
    // alexa doesn't support arabic, but we can use this to enrich cards with originals
    ar : {
      translation: {
        FACTS: [
          'كُنْ فِي الْفِتْنَةِ كَابْنِ اللَّبُونِ ، لاَ ظَهْرٌ فَيُرْكَبَ، وَلاَ ضَرْعٌ فَيُحْلَبَ.',
          'أَزْرَى بِنَفْسِهِ مَنِ اسْتَشْعَرَ الطَّمَعَ وَ رَضِيَ بِالذُّلِّ مَنْ كَشَفَ عَنْ ضُرِّهِ وَ هَانَتْ عَلَيْهِ نَفْسُهُ مَنْ أَمَّرَ عَلَيْهَا لِسَانَهُ.',
          'الْبُخْلُ عَارٌ وَ الْجُبْنُ مَنْقَصَةٌ وَ الْفَقْرُ يُخْرِسُ الْفَطِنَ عَنْ حُجَّتِهِ وَ الْمُقِلُّ غَرِيبٌ فِي بَلْدَتِهِ',
          'الْعَجْزُ آفَةٌ وَ الصَّبْرُ شَجَاعَةٌ وَ الزُّهْدُ ثَرْوَةٌ وَ الْوَرَعُ جُنَّةٌ وَ نِعْمَ الْقَرِينُ الرِّضَى',
          'الْعِلْمُ وِرَاثَةٌ كَرِيمَةٌ وَ الْآدَابُ حُلَلٌ مُجَدَّدَةٌ وَ الْفِكْرُ مِرْآةٌ صَافِيَةٌ',
          'الصَّدَقَةُ دَوَاءٌ مُنْجِحٌ، وَأَعْمَالُ الْعِبَادِ فِي عَاجِلِهِمْ، نُصْبُ أَعْيُنِهِمْ فِي آجِلِهِمْ',
          'اعْجَبُوا لِهذَا الاْنْسَانِ يَنْظُرُ بِشَحْمٍ و يَتَكَلَّم بِلَحْمٍ وَيَسْمَعُ بِعَظْمٍ، وَيَتَنَفَّسُ مِنْ خَرْمٍ',
          ' إِذَا أَقْبَلَتِ الدُّنْيَا عَلَى أَحَدٍ أَعَارَتْهُ مَحَاسِنَ غَيْرِهِ وَ إِذَا أَدْبَرَتْ عَنْهُ سَلَبَتْهُ مَحَاسِنَ نَفْسِهِ.',
          'خَالِطُوا النَّاسَ مُخَالَطَةً إِنْ مِتُّمْ مَعَهَا بَكَوْا عَلَيْكُمْ وَ إِنْ عِشْتُمْ حَنُّوا إِلَيْكُمْ.',
          'إِذَا قَدَرْتَ عَلَى عَدُوِّكَ فَاجْعَلِ الْعَفْوَ عَنْهُ شُكْراً لِلْقُدْرَةِ عَلَيْهِ',
          'عْجَزُ النَّاسِ مَنْ عَجَزَ عَنِ اكْتِسَابِ الْإِخْوَانِ وَ أَعْجَزُ مِنْهُ مَنْ ضَيَّعَ مَنْ ظَفِرَ بِهِ مِنْهُمْ',
          'ذَا وَصَلَتْ إِلَيْكُمْ أَطْرَافُ النِّعَمِ فَلَا تُنَفِّرُوا أَقْصَاهَا بِقِلَّةِ الشُّكْرِ.',
          'مَنْ ضَيَّعَهُ الْأَقْرَبُ أُتِيحَ لَهُ الْأَبْعَدُ.',
          'مَا كُلُّ مَفْتُونٍ يُعَاتَبُ',
          'تَذِلُّ الْأُمُورُ لِلْمَقَادِيرِ حَتَّى يَكُونَ الْحَتْفُ فِي التَّدْبِيرِ.',
          ' مَنْ جَرَى فِي عِنَانِ أَمَلِهِ عَثَرَ بِأَجَلِهِ .',
          ' أَقِيلُوا ذَوِي الْمُرُوءَاتِ عَثَرَاتِهِمْ فَمَا يَعْثُرُ مِنْهُمْ عَاثِرٌ إِلاَّ وَيَدُهُ بِيَدِ اللهِ يَرْفَعُهُ',
          'قُرِنَتِ الْهَيْبَةُ بِالْخَيْبَةِ وَالْحَيَاءُ بِالْحِرْمَانِ وَالْفُرْصَةُ تَمُرُّ مَرَّ السَّحَابِ، فَانْتَهِزُوا فُرَصَ الْخَيْرِ',
          'مَنْ أَبْطَأَ بِهِ عَمَلُهُ لَمْ يُسْرِعْ بِهِ حَسَبُهُ.',
          'مِنْ كَفَّارَاتِ الذُّنُوبِ الْعِظَامِ إِغَاثَةُ الْمَلْهُوفِ، وَالتَّنْفِيسُ عَنِ الْمكْرُوبِ.',
          ' يَابْنَ آدَمَ، إِذَا رَأَيْتَ رَبَّكَ سُبْحَانَهُ يُتَابِعُ عَلَيْكَ نِعَمَهُ وَأَنْتَ تَعْصِيهِ فَاحْذَرْهُ',
          'مَا أَضْمَرَ أَحَدٌ شَيْئاً إِلَّا ظَهَرَ فِي فَلَتَاتِ لِسَانِهِ وَ صَفَحَاتِ وَجْهِهِ',
          'أَفْضَلُ الزُّهْدِ إِخْفَاءُ الزُّهْدِ.',
          'إِذَا كُنْتَ فِي إِدْبَارٍ وَالْمَوْتُ فِي إِقْبَالٍ فَمَا أسْرَعَ الْمُلْتَقَى.',
          'الْحَذَرَ الْحَذَرَ! فَوَاللهِ لَقَدْ سَتَرَ، حتَّى كَأَنَّهُ قَدْ غَفَرَ.',
          'الاْيمَانُ عَلَى أَرْبَعِ دَعَائِمَ: عَلَى الصَّبْرِ، والْيَقِينِ، وَالْعَدْلِ، وَالْجَهَادِ.',
          ' فَاعِلُ الْخَيْرِ خَيْرٌ مِنْهُ، وَفَاعِلُ الشَّرِّ شَرٌّ مِنْهُ .',
          'كُنْ سَمَحاً وَلاَ تَكُنْ مُبَذِّراً، وَكُنْ مُقَدِّراًوَلاَ تَكُنْ مُقَتِّراً',
          ' أَشْرَفُ الْغِنَى تَرْكُ الْمُنى',
          'مَنْ أَطَالَ الاْمَلَ أَسَاءَ الْعَمَلَ',
          'يَا بُنَيَّ، احْفَظْ عَنِّي أَرْبَعاً وَأَرْبَعاً، لاَ _يَضُرَّكَ مَا عَمِلْتَ مَعَهُنَّ: إِنَّ أَغْنَى الْغِنَىُ الْعَقْلُ، وَأَكْبَرَ الْفَقْرِ الْحُمْقُ، وَأَوحَشَ الْوَحْشَةِ الْعُجْبُ وَأَكْرَمَ الْحَسَبَ حُسْنُ الْخُلُقِ.',
          'يَا بُنَيَّ، إِيَّاكَ وَمُصَادَقَةَ الاْحْمَقِ، فَإِنَّهُ يُريِدُ أَنْ يَنْفَعَكَ فَيَضُرَّكَ',
          'وَإِيَّاكَ وَمُصَادَقَةَ الْبَخِيلِ، فَإِنَّهُ يَقْعُدُ عَنْكَ أَحْوَجَ مَا تَكُونُ إِلَيْهِ',
          ' وَإِيَّاكَ وَمُصَادَقَةَ الْفَاجِرِ، فَإِنَّهُ يَبِيعُكَ بِالتَّافِهِ',
          'وَإِيَّاكَ وَمُصَادَقَةَ الْكَذَّابِ، فَإِنَّهُ كَالسَّرَابِ يُقَرِّبُ عَلَيْكَ الْبَعِيدَ، وَيُبَعِّدُ عَلَيْكَ الْقَرِيبَ',
          'لاَ قُرْبَةَ بِالنَّوَافِلِ إِذَا أَضَرَّتْ بِالْفَرَائِضِ',
          ' لِسَانُ الْعَاقِلِ وَرَاءَ قَلْبِهِ، وَقَلْبُ الاْحْمَقِ وَرَاءَ لِسَانِهِ',
          ' لبعض أَصحابه في علّة اعتلّها: جَعَلَ اللهُ مَا كَانَ مِنْ شَكْوَاكَ حطّاً لِسَيِّئَاتِكَ، فَإِنَّ الْمَرَضَ لاَ أَجْرَ فِيهِ، وَلكِنَّهُ يَحُطُّ السَّيِّئَاتِ، وَيَحُتُّهَا حَتَّ الاْوْرَاقِ، وَإِنَّمَا الاْجْرُ فِي الْقَوْلِ بِالّلسَانِ، وَالْعَمَلِ بِالاْيْدِي وَالاْقْدَامِ، وَإِنَّ اللهَ سُبْحَانَهُ يُدْخِلُ بِصِدْقِ النِّيَّةِ وَالسَّرِيرَةِ الصَّالِحَةِ مَنْ يَشَاءُ مِنْ عَبَادِهِ الْجَنَّةَ',
          ' لبعض أَصحابه في علّة اعتلّها: جَعَلَ اللهُ مَا كَانَ مِنْ شَكْوَاكَ حطّاً لِسَيِّئَاتِكَ، فَإِنَّ الْمَرَضَ لاَ أَجْرَ فِيهِ، وَلكِنَّهُ يَحُطُّ السَّيِّئَاتِ، وَيَحُتُّهَا حَتَّ الاْوْرَاقِ، وَإِنَّمَا الاْجْرُ فِي الْقَوْلِ بِالّلسَانِ، وَالْعَمَلِ بِالاْيْدِي وَالاْقْدَامِ، وَإِنَّ اللهَ سُبْحَانَهُ يُدْخِلُ بِصِدْقِ النِّيَّةِ وَالسَّرِيرَةِ الصَّالِحَةِ مَنْ يَشَاءُ مِنْ عَبَادِهِ الْجَنَّةَ',
          'طُوبَى لِمَنْ ذَكَرَ الْمَعَادَ، وَعَمِلَ لِلْحِسَابِ، وَقَنِعَ بِالْكَفَافِ، وَرَضِيَ عَنِ اللهِ',
          ' سَيِّئَةٌ تَسُوءُكَ خَيْرٌ عِنْدَاللهِ مِنْ حَسَنَةٍ تُعْجِبُكَ',
          ' سَيِّئَةٌ تَسُوءُكَ خَيْرٌ عِنْدَاللهِ مِنْ حَسَنَةٍ تُعْجِبُكَ',
          ' الظَّفَرُ بالْحَزْمِ، وَالْحَزْمُ بِإِجَالَةِ الرَّأْيِ، وَالرَّأْيُ بِتَحْصِينِ الاْسْرَارِ',
          'احْذَرُوا صَوْلَةَ الْكَرِيمِ إذَا جَاعَ، واللَّئِيمِ إِذَا شَبِعَ',
          ' قُلُوبُ الرِّجَالِ وَحْشِيَّةٌ، فَمَنْ تَأَلَّفَهَا أَقْبَلَتْ عَلَيْهِ',
          'عَيْبُكَ مَسْتُورٌ مَا أَسْعَدَكَ جَدُّكَ',
          'أَوْلَى النَّاسِ بِالْعَفْوِ أَقْدَرُهُمْ عَلَى الْعُقُوبَةِ',
          'السَّخَاءُ مَا كَانَ ابْتِدَاءً، فَأَمَّا مَا كَانَ عَنْ مَسْأَلَةِ فَحَيَاءٌ وَتَذَمُّمٌ',
          ' لاَ غِنَى كَالْعَقْلِ، وَلاَ فَقْرَ كَالْجَهْلِ، وَلاَ مِيرَاثَ كَالاْدَبِ، وَلاَ ظَهِيرَ كَالْمُشَاوَرَةِ',
          'الصَّبْرُ صَبْرَانِ: صَبْرٌ عَلَى مَا تَكْرَهُ، وَصَبْرٌ عَمَّا تُحِبُّ',
          'الْغِنَى فِي الْغُرْبَةِ وَطَنٌ، وَالْفَقْرُ فِي الْوَطَنِ غُرْبَةٌ',
          ' الْقَنَاعَةُ مَالٌ لاَ يَنْفَدُ',
          'الْمَالُ مَادَّةُ الشَّهَوَاتِ',
          'مَنْ حَذَّرَكَ كَمَنْ بَشَّرَكَ',
          'الِّلسَانُ سَبُعٌ، إِنْ خُلِّيَ عَنْهُ عَقَرَ',
          ' إِذَا حُيِّيْتَ بِتَحِيَّةٍ فَحَيِّ بِأَحْسَنَ مِنْهَا، وإِذَا أُسْدِيَتْ إِلَيْكَ يَدٌ فَكَافِئْهَا بِمَا يُرْبِي عَلَيْهَا، وَالْفَضْلُ مَعَ ذلِكَ لِلْبَادِىءِ',
          'الشَّفِيعُ جَنَاحُ الطَّالِبِ',
          'أَهْلُ الدُّنْيَا كَرَكْبٍ يُسَارُ بِهِمْ وَهُمْ نِيَامٌ',
          'فَقْدُ الاْحِبَّةِ غُرْبَةٌ',
          ' فَوْتُ الْحَاجَةِ أَهْوَنُ مِنْ طَلَبِهَا إِلَى غَيْرِ أَهْلِهَا',
          'لاَ تَسْتَحِ مِنْ إِعْطَاءِ الْقَلِيلِ، فَإِنَّ الْحِرْمَانَ أَقَلُّ مِنْهُ',
          'الْعَفَافُ زِينَةُ الْفَقْرِ، والشُّكْرُ زِينَةُ الغِنَى',
          ' لَا تَرَى الْجَاهِلَ إِلَّا مُفْرِطاً أَوْ مُفَرِّطاً',
          'إِذَا تَمَّ الْعَقْلُ نَقَصَ الْكَلاَمُ',
          'الدَّهرُ يُخْلِقُ الاْبْدَانَ، وَيُجَدِّدُ الاْمَالَ، وَيُقَرِّبُ الْمَنِيَّةَ، ويُبَاعِدُ الاْمْنِيَّةَ، مَنْ ظَفِرَ بِهِ نَصِبَ، ومَنْ فَاتَهُ تَعِبَ',
          'مَنْ نَصَبَ نَفْسَهُ لِلنَّاسِ إِمَاماً فَعَلَيْهِ أَنْ يَبْدَأَ بِتَعْلِيمِ نَفْسِهِ قَبْلَ تَعْلِيمِ غَيْرِهِ، وَلْيَكُنْ تَأْدِيبُهُ بِسِيرَتِهِ قَبْلَ تَأْدِيبِهِ بِلِسَانِهِ',
          'نَفْسُ الْمَرْءِ خُطَاهُ إِلَى أَجَلِ',
          'كُلُّ مَعْدُود مُنْقَض، وَكُلُّ مُتَوَقَّع آت',
          'خُذِ الْحِكْمَةَ أَنَّى كَانَتْ فَإِنَّ الْحِكْمَةَ تَكُونُ فِي صَدْرِ الْمُنَافِقِ فَتَلَجْلَجُ فِي صَدْرِهِ حَتَّى تَخْرُجَ فَتَسْكُنَ إِلَى صَوَاحِبِهَا فِي صَدْرِ الْمُؤْمِن',
          'الْحِكْمَةُ ضَالَّةُ الْمُؤْمِنِ فَخُذِ الْحِكْمَةَ وَ لَوْ مِنْ أَهْلِ النِّفَاقِ',
          'قِيمَةُ كُلِّ امْرِئٍ مَا يُحْسِنُهُ',
          'أُوصِيكُمْ بِخَمْسٍ لَوْ ضَرَبْتُمْ إِلَيْهَا آبَاطَ الْإِبِلِ لَكَانَتْ لِذَلِكَ أَهْلًا . لَا يَرْجُوَنَّ أَحَدٌ مِنْكُمْ إِلَّا رَبَّهُ وَ لَا يَخَافَنَّ إِلَّا ذَنْبَهُ وَ لَا يَسْتَحِيَنَّ أَحَدٌ مِنْكُمْ إِذَا سُئِلَ عَمَّا لَا يَعْلَمُ أَنْ يَقُولَ لَا أَعْلَمُ وَ لَا يَسْتَحِيَنَّ أَحَدٌ إِذَا لَمْ يَعْلَمِ الشَّيْ‏ءَ أَنْ يَتَعَلَّمَهُ . وَ عَلَيْكُمْ بِالصَّبْرِ فَإِنَّ الصَّبْرَ مِنَ الْإِيمَانِ كَالرَّأْسِ مِنَ الْجَسَدِ وَ لَا خَيْرَ فِي جَسَدٍ لَا رَأْسَ مَعَهُ وَ لَا فِي إِيمَانٍ لَا صَبْرَ مَعَهُ',
          'مَنْ تَرَكَ قَوْلَ لَا أَدْرِي أُصِيبَتْ مَقَاتِلُهُ',
          'عَجِبْتُ لِمَنْ يَقْنَطُ وَمَعَهُ الاِسْتِغْفَارُ',
          'مَنْ أَصْلَحَ مَا بَيْنَهُ وَبَيْنَ اللهِ أَصْلَحَ اللهُ مَا بَيْنَهُ وَبَيْنَ النَّاسِ، وَمَنْ أَصْلَحَ أَمْرَ آخِرَتِهِ أَصْلَحَ اللهُ لَهُ أَمْرَ دُنْيَاهُ، وَمَنْ كَانَ لَهُ مِنْ نَفْسِهِ وَاعِظٌ كَانَ عَلَيْهِ مِنَ اللهِ حَافِظٌ',
          'الْفَقِيهُ كُلُّ الْفَقِيهِ مَنْ لَمْ يُقَنِّطِ النَّاسَ مِنْ رَحْمَةِ اللهِ، وَلَمْ يُؤْيِسْهُمْ مِنْ رَوْحِ اللهِ وَلَمْ يُؤْمِنْهُمْ مِنْ مَكْرِالله',
          'إِنَّ هذِهِ الْقُلُوبَ تَمَلُّ كَمَا تَمَلُّ الاْبْدَانُ، فَابْتَغُوا لَهَا طَرَائِفَ الْحِكْمَةِ',
          'أَوْضَعُ الْعِلْمِ مَا وُقِفَ عَلَى اللِّسَانِ وَأَرْفَعُهُ مَا ظَهَرَ فِي الْجَوَارِحِ وَالاْرْكَانِ',
          'وَ سُئِلَ عَنِ الْخَيْرِ مَا هُوَ فَقَالَ لَيْسَ الْخَيْرُ أَنْ يَكْثُرَ مَالُكَ وَ وَلَدُكَ وَ لَكِنَّ الْخَيْرَ أَنْ يَكْثُرَ عِلْمُكَ وَ أَنْ يَعْظُمَ حِلْمُكَ وَ أَنْ تُبَاهِيَ النَّاسَ بِعِبَادَةِ رَبِّكَ فَإِنْ أَحْسَنْتَ حَمِدْتَ اللَّهَ ',
          'خَيْرَ فِى الدُّنْيَا إِلَّا لِرَجُلَيْنِ رَجُلٍ أَذْنَبَ ذُنُوباً فَهُوَ يَتَدَارَكُهَا بِالتَّوْبَةِ وَ رَجُلٍ يُسَارِعُ فِى الْخَيْرَاتِ',
          ' لَا يَقِلُّ عَمَلٌ مَعَ التَّقْوَى وَ كَيْفَ يَقِلُّ مَا يُتَقَبَّلُ',
          'إِنَّ أَوْلَى النَّاسِ بِالاْنْبِيَاءِ أَعْلَمُهُمْ بِمَا جَاؤُوا بِهِ',
          'نَوْمٌ عَلَى يَقِينٍ خَيْرٌ مِنْ صَلَاةٍ فِى شَكٍّ',
          ' لَأَنْسُبَنَّ الْإِسْلَامَ نِسْبَةً لَمْ يَنْسُبْهَا أَحَدٌ قَبْلِى الْإِسْلَامُ هُوَ التَّسْلِيمُ وَ التَّسْلِيمُ هُوَ الْيَقِينُ وَ الْيَقِينُ هُوَ التَّصْدِيقُ وَ التَّصْدِيقُ هُوَ الْإِقْرَارُ وَ الْإِقْرَارُ هُوَ الْأَدَاءُ وَ الْأَدَاءُ هُوَ الْعَمَلُ'
        ]
      }
    }
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
        const cardMessage = this.t('GET_CARD_PREFIX') + '\n' + languageStrings.ar.translation.FACTS[factIndex] + '\n\n' + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), cardMessage);
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
