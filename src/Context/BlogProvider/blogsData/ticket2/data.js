import remark from 'remark';
import rreact from 'remark-react';

const md = `
## Présentation

Nept-in est une startup lancée en 2016 par _Benjamin Belloyan_ et _Sylvain Boissy_.

Dans l'industrie la plupart des entreprises fonctionnent _à l'ancienne_. Pour gérer leur données ces entreprises utilisent la plupart du temps un système bancale de fichiers excel. 

Ces derniers sont partagées entre  les différentes partie de l'entreprise pour transmettre les informations.

Lors de ces échanges il y a une grande perte de donnes et par conséquent une grande perte d'argent et de temps pour ces industries.

Toutes ces industries ont cependant des problématique qui leurs sont propres. Ces besoins précis aucuns logiciel ERP classique ne peut y répondre de manière efficace et adapté.

**C'est ici que Nept-in intervient**
![Intervention immédiate](https://cdna.artstation.com/p/assets/images/images/002/333/540/large/wojtek-fus-adventure-time2.jpg?1460414158)
> Image par   https://www.artstation.com/artwork/brLEk

## Le projet

Nept-in a pour projet de répondre a cette problématique en concevant des logiciels sur-mesure en fonction de la demande des industriels.

Pour comprendre dans un premier temps les problématique d'une entreprise notre équipe commercial va effectuer un audit chez l'entreprise cliente.

Une fois que l'audit est fait et que les problématiques du client sont clairement identifier nous pouvons commencer à créer la solution.

Mais nous ne comptons pas redémarrer de zéro à chaque projet. Créer un logiciel prend du temps et la demande est importante. En interne nous sommes en train de créer un **générateur d'applications**.

A terme nous pourrons créer des solutions sur mesure très simplement en le paramétrant pour répondre aux besoin du client.

Ce générateur c'est le projet LEESA dont je parlerais en plus ample détails dans un prochain ticket.

![LEESA](https://cdnb.artstation.com/p/assets/images/images/005/162/859/large/oliver-wetter-the-messenger2-9-medium-kopie.jpg?1488957311)
> Image par https://www.artstation.com/artwork/9Qylo

Merci d'avoir lu ce ticket le prochain ticket parlera de l'équipe Nept-in !

`;

const shortContent = `
Introduction à mon stage dans la startup Nept-in !
Dans cette suite de ticket de blog vous allez decouvrir les coullisses de l'entreprise nept-in et comment j'ai vecu un stage de 3 mois dans cette startup innovante et pleine d'ambition.
`

const content = remark().use(rreact).processSync(md);

export default {
    title: 'Stage Nept-in 1 / 5',
    canonical: 'nept-in1',
    img: 'https://i1.wp.com/nept-in.com/wp-content/uploads/2017/03/header2-01-2.jpg?fit=3307%2C1357',
    author: 'Louis Charavner',
    date: '2018-06-23T16:01:59.869Z',
    shortContent: shortContent,
    content: content
}