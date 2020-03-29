export default {

    videos: {

        salon: {

            self: {

                url: "1_salon.mp4",
                controls: true,
                options: {}
 
            },

            components: {

                choices: [
                    {
                        id: "ouiPoint",
                        text: "Oui !",
                        route: "cuisine",
                        choiceTimeCode: 4
                    },

                    {
                        id: "nonPoint",
                        text: "Non !",
                        route: "vtff",
                        choiceTimeCode: 2
                    }

                ],

                relances: [
                    { delay: 1000, url: "" }
                ]

            },

        

        },
        
        gtfo: {

            self: { 

                url: "1_gtfo.mp4",
                controls: true,
                options: {}
 
            },

            components: {

                choices: [
                    {
                        id: "garage",
                        text: "allé au garage",
                        route: "garage",
                        choiceTimeCode: 150
                    },
                    {
                        id: "sport",
                        text: "aller aux sports",
                        route: "sport",
                        choiceTimeCode: 190
                    }
                ],

                relances: [
                    { delay: 1000, url: "" }
                ]

            }

        },

        intro: {

            self: {

                url: "2_intro.mp4",
                controls: true,
                options: {}
 
            },

            components: {


                choices: [
                    {
                        id: "ordinateur",
                        text: "Chercher sur l'ordinateur",
                        route: "ordinateur",
                        choiceTimeCode: 150
                    },
                    {
                        id: "tradeur",
                        text: "Appeler le mec du trading",
                        route: "tradeur",
                        choiceTimeCode: 290
                    },
                    {
                        id: "weed",
                        text: "Fumer le bon de campagne",
                        route: "weed",
                        choiceTimeCode: 300
                    }
                ],

            relances: [
                    { delay: 1000, url: "" }
                ]

            }

        }
    
    }

}
