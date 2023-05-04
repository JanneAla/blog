---
title: 'Nextjs sivuston julkaiseminen Github Pagesissa'
excerpt: 'Tämän sivuston julkaisu github pagesissa'
coverImage: 'https://repository-images.githubusercontent.com/318599822/717eb0e5-78ae-4359-a524-a7a1df7ac11b'
date: '04/05/2023'
---

![React ja Github logo](https://repository-images.githubusercontent.com/318599822/717eb0e5-78ae-4359-a524-a7a1df7ac11b)
Jälleen kerran käytettiin tutoriaali verkosta ja oli yllättävän virtaviivainen prosessi [https://dev.to/github/how-to-host-a-static-nextjs-site-on-github-pages-4pe0](https://dev.to/github/how-to-host-a-static-nextjs-site-on-github-pages-4pe0)

Vaatimukset
-----------
- Github tili
- Github repo johon on puskettu jokin projekti kuten tämä nextjs sivu

Valmistelus
-----------
On hyvä testata että kaikki toimii buildaus vaiheesse eikä sittenkun pitäisi ola verkkosivu pystyssä ja näkyy vain 404 sivu. Oma nilkka kolahti showdown paketin types tiedoostojen puuttumiseen mutta onneksi npm on tarpeeksi viisas ja osaa ehdottaa oikeata komentoa jolla vika saatiin korjattua. Tämän jälkeen ongelma olikin yhden function tiedon palautus tyypin määrittelemättä jättäminen ja tarkemmin ottaen mitä typescript oletti sen palauttavan. Tämä oli `getSortedPostsData` functiossa oleva map joka oletti string arrayn palauttavan samanlaisen takaisin mutta palautettiinkin objekti joten täytyi käydä määrittelemässä tämä tieto sinne ja ongelmat katosivat.

Github Actions
--------------
Tämä oli aika lailla paina ok kaikkeen prosessi. Kun mainitsin tämän olevan aika virtaviivaista niin ainut oman pään käyttö oli oikean Github Actionsin valinta mutta sekään ei tuottanut ongelmia.