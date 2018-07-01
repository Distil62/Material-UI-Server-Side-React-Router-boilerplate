import remark from 'remark';
import rreact from 'remark-react';

const md = `
Bienvenue sur  mon blog personnel ! Prenez une place et du pop-corn ici est le repère de tous les geeks, tous les nerd fan de i3w et de tous les barbus dont le coverage depasse les 9000% !

---

![Welcome](https://cdn.discordapp.com/attachments/266953688801738752/461471370426056714/rawpixel-617391-unsplash.jpg)

---

## Qui suis-je ?
Je suis étudiant en programmation au campus Ynov Lyon. Passionne par les technologies émergentes (aka : Programmation Quantique, Réalité mixte, IA Google Duplex...)
Et la bière bien fraiche !

## Pourquoi ce blog ?
À la base ce blog a été fait dans le cadre de mes études aux campus de Ynov Lyon pour raconter comment ce déroule mon stage.
Ca sera d'ailleurs le premier sujet aborde dans ma première série de tickets de blog.
Mais je compte l'étendre a divers sujets lié à la programmation et il servira de support écrit à divers projets de programmations.

## Tes projets actuel ?
Je suis entrain de me lancer dans le développement freelance en parallèle de mes études.
Dans le cadre d'un projet hébergé  par l'école nous allons une petite équipe et moi-même concevoir une plateforme de référencement de foodtrucks.
Je suis membre d'un groupe Meetup le [Microsoft User Group](https://www.meetup.com/fr-FR/MUGLyon/) venez nous voir sur Lyon !.
Et je travaille comme développeur junior pour la société Nept-in.

## Kinder bueno ou chocotube ?
Chocotube bien-évidemment.


Merci d'avoir lu ce ticket jusqu'au bout la prochaine série de ticket portera sur mon stage chez Nept-in.

`;

const shortContent = `
Hello, world ! Venez lire mon premier ticket qui presente ce magnifique blog de developpeur !
`

const content = remark().use(rreact).processSync(md);

export default {
    title: "ticket1",
    img: "https://cdna.artstation.com/p/assets/images/images/010/307/676/large/louis-charavner-flatspace.jpg?1523730134",
    author: 'Louis Charavner',
    date: '2018-06-23T16:01:59.869Z',
    shortContent: shortContent,
    content: content
}