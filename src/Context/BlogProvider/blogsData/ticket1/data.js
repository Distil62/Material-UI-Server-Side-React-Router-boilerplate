import remark from 'remark';
import rreact from 'remark-react';



const md = `
# Titre 1
---
Pariatur molestias dolor ipsam corporis officia sequi porro eius. Voluptas pariatur deserunt corrupti magnam ut. Tenetur unde odio ea. Doloremque voluptatem quia aut mollitia. Minus ipsum qui laborum sit est quia tempore. Sunt quisquam neque rerum quis.
Facilis nostrum distinctio et sint rerum possimus minus vitae. Magni ut eum molestias. Dolor ea illum ratione ut. Aliquam est aut alias accusamus perferendis non adipisci. Est sed vel itaque.

# Titre 2
    
## Titre 2.1
Mollitia tempora tenetur sit saepe labore voluptatem. Magnam rerum quibusdam quia non expedita. Iure mollitia distinctio officia maiores voluptatibus iure quia incidunt. Beatae error dolorem numquam eveniet.

## Titre 2.2
Explicabo veniam est excepturi nostrum dolores. Et facilis sunt sed quaerat aut iure consequatur. Suscipit expedita facere temporibus repudiandae similique rerum repellat. Earum voluptatibus est cupiditate rem veritatis.

![cover img](https://cdnb.artstation.com/p/assets/images/images/011/430/137/large/zhiqian-liu-sketch25.jpg?1529533587 "Sample of my Work")

`;

const shortContent = `
Bonjour je suis un contenu court.
Je sers a resume ce que vous allez voir dans ce ticket de blog.
En espereant que vous effecturez une agreable lecture.
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