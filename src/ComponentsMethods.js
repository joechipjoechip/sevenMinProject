import { TimelineLite } from "gsap/TweenMax";

const lettersRoll = function(el) {
    // exemple de fonctions qu'on va faire :


    // Let's go ! 
    // on stock l'élement qui contient le texte
    const element = el;

    // on pecho les animsparams pour quand on va lancer l'anim
    const mesOptions = JSON.parse(element.dataset.animparams);

    // on stock le texte (.innerHTML vien de l'api de base (mdn))
    const texte = element.innerHTML;

    // on découpe le texte pour mettre chaque lettre isolée dans un array commun
    const texteArr = texte.split('');

    // on enveloppe chaque lettre d'un span.oneLetter
    element.innerHTML = texteArr.map(lettre => {
        let lettreOk = lettre;
        if (lettreOk === ' ') {
        // on remplace simplement un espace par un &nbsp; (espace insécable)
        lettreOk = '&nbsp;';
        }
        // on retourne la lettre enveloppée
        return `<span class="oneLetter">${lettreOk}</span>`;
    })
    // on .join() le tableau pour retrouver une string
    .join('');

    // ici on fait une grosse séléction de tous les éléments contennant une lettre
    // ( donc nos 'enveloppes' )
    // Array.from() permet de transformer une NodeList (ce que nous donne un querySelectorAll) en Array bien propre
    const letters = Array.from(element.querySelectorAll('.oneLetter'));

    // on initialise le Gsap TimelineLite pour gérer les anims
    const tl = new TimelineLite();
    
    // et ici on lance l'anim sur l'ensemble des lettres isolées
    // https://greensock.com/docs/TimelineMax/staggerFrom
    tl.staggerFrom(
        // array contenant toute les lettres isolées
        letters, 
        // duration d'une anim (obligé de le parseFloat car de base nous avons un texte)
        // alors que le parametre attendu ici doit etre un chiffre (float ou int) (en secondes)
        parseFloat(mesOptions.duration), 
        // options de l'anim
        {
            autoAlpha: 0,
            scale: 0.5,
            rotation: 90,
            y: 250
        },
        // combien de temps entre chaque anim (obligé de le parseFloat car de base nous avons un texte)
        // alors que le parametre attendu ici doit etre un chiffre (float ou int) (en secondes)
        parseFloat(mesOptions.stagger)
    );

    // "et voilà"
};

export { 
    lettersRoll
 };