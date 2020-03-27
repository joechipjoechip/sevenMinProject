export default {

    videos: {

        salon: {

            self: {

                url: "1_salon.mp4",
                controls: true,
                options: {
                    endPoint: 500
                }
 
            },

            components: {

                choices: {

                    availableChoices: [

                        {
                            id: "ouiPoint",
                            text: "Oui !",
                            route: "cuisine",
                            displayTime: 250
                            
                        },
    
                        {
                            id: "nonPoint",
                            text: "Non !",
                            route: "vtff",
                            displayTime: 290
                        }

                    ],

                    relance: {
                        delay: 700,
                        url: "",
                        sequences: [
                               '1_salon_relance_ohgary.wav',
                               '1_salon_relance_tuclickoukwa.wav'
                        ]
                  
                    }

                }

            }

        },
        
        gtfo: {

            self: { 

                url: "1_gtfo.mp4",
                controls: true,
                options: {
                    endPoint: 600
                }
 
            },

            components: {

                choices: {

                    availableChoices: [

                        {
                            id: "garage",
                            text: "allé au garage",
                            route: "garage",
                            displayTime: 150

                        },

                        {
                            id: "sport",
                            text: "aller aux sports",
                            route: "sport",
                            displayTime: 190
                        }

                    ],

                    relance: {
                        delay: 1000,
                        url: "",
                       
                    }
                }

            }

        },

        intro: {

            self: {

                url: "2_intro.mp4",
                controls: true,
                options: {
                    endPoint: 500
                }
 
            },

            components: {


                choices: {

                    availableChoices: [

                        {
                            id: "ordinateur",
                            text: "Chercher sur l'ordinateur",
                            route: "ordinateur",
                            displayTime: 150

                        },

                        {
                            id: "tradeur",
                            text: "Appeler le mec du trading",
                            route: "tradeur",
                            displayTime: 290
                        },

                        {
                            id: "weed",
                            text: "Fumer le bon de campagne",
                            route: "weed",
                            displayTime: 300
                        }

                    ],

                    relance: {
                        delay: 1000,
                        url: "",
                        sequences: [
                            '2_intro_relance.wav',
                        ]
                    }
                }

            }

        }
    
    }

}
