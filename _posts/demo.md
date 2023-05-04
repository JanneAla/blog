---
title: 'Tämän verkkosivun luominen'
excerpt: 'Käydään läpi kuinka tämä sivu luotiin'
coverImage: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1624968292549/tXlKHbTQt.png'
date: '04/05/2023'
---

![Nextjs ja markdown logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1624968292549/tXlKHbTQt.png)

Tämä sivu tehtiin seuraten Nextjs dynamic routes tutoriaalia:  
 [https://nextjs.org/learn/basics/dynamic-routes](https://nextjs.org/learn/basics/dynamic-routes)  ja ottamalla mallia [https://github.com/vercel/next.js/tree/canary/examples/blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)  
 Molemmat ovat hyvin samanlaisia ja voidaan sekoittaa helposti keskenään. Mainintana vielä että kokemukseni Reactista on vanilla React ja React Native. 

Projektin luominen
------------------

Projekti luotiin tekemällä ensin kansio johon projekti laitetaan ja ajamalla seuraavat komennot powershellissä

```powershell
PS C:\Projektit\Kansio> mkdir React
PS C:\Projektit\Kansio> cd React
PS C:\Projektit\Kansio> npx create-next-app
```
Tässä vaiheessa etsittiin artikkelin alussa mainittu tutoriaali ja alettiin seuraaman sitä.

Kompastukset
------------
React Nativen routeamis kokemuksen jälkeen tämä dynaaminen routeaminen tuli yllätyksenä ja kansio rakenteesta riippuvainen routeaminen oli pieni kompastuskivi kuten myös `getStaticPaths` ja `getStaticProps`. Näitä lukuun ottamatta aikaa meni html tagien käytön ja css muistelemiseen. 
<br>
Kun tuli aika lukea markdown tiedostoja, grey-matter hoiti asiansa mutta tutoriaalissa käytetty remark ja remark-html eivät tehneet työtään niinkuin piti. Linkit eivät näyttäneet oikeilta joten etsin toisen kirjaston ja päädyin Showdown nimiseen pakettiin. Tällä paketilla on oma demo sivusto ([http://demo.showdownjs.com/](http://demo.showdownjs.com/)) jolla voidaan varmistaa että ongelmana ei ole omat markdown tiedostot. 

`getPostBySlug` muuttuu async functiosta synchrooniseksi ja markdown muutos html muotoon muuttuu tästä 
```
import { remark } from 'remark';
import html from 'remark-html';

const processed = await remark()
  .use(html)
  .process(content)

const html = processed.toString()
```
tähän
```
import {
  Converter
} from 'showdown';

const converter = new Converter({ 
  openLinksInNewWindow: true,
  simpleLineBreaks: true 
})

converter.setFlavor('github') // original, vanilla, github
const html = converter.makeHtml(content)
```
