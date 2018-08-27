---
layout: post
title:  "Créer une nouvelle page de membre"
date:   2018-06-07
ref: post2
lang: fr
anchor: False
---

Pour cela rien de plus facile !
Il vous suffit d'éditer le fichier `members.yml` présent dans le dossier `_data`. Ensuite, un certain nombre de champs sont à remplir:

<!--more-->

```
- full_name: "Le prenom + nom" tel qu'il sera affiché
  flatname: "prenom-nom" sans accents ni majuscule
  picture: "le nom de la photo dans le dossier assets/img/people"
  lang: "la langue de cette page perso (fr ou en)"
  status: "Le status du membre tel qu'il sera affciché (pr, mc, phd...)"
  statuscode: "pr/pa/phd, utile pour afficher des infos pertinentes sur certaines pages"
  institution: "institution principale"
  themes: "liste des thèmes de recherche"
  authors: "listes d'auteurs"
  external: "lien vers d'autres sites"
  contact: "mail"
  twitter: "compte twitter, si existant"
  free_text: "texte perso, bio, description,..."
```

Un _exemple_ de fiche de membre:

```
- full_name: Cléo Chassonnery-Zaïgouche
  flatname: cleo-cz
  picture: "cleo-cz.jpg"
  lang: "en"
  status: "Teaching assistant, Post Doctoral"
  statuscode: "pa"
  institution: Université de Lausanne
  themes:
      - Discriminations
      - Expertise
      - Wages
      - Equal Pay
  authors:
      - Beatrice Webb
      - Milicent Fawcett
      - Eleanor Rathbone
      - Kenneth Arrow
      - Gary Becker
  external:
    - name: "Thèses.fr"
      link: "http://www.theses.fr/s90024"
    - name: "RePEc"
      link: "https://ideas.repec.org/f/pch1191.html"
    - name: "LinkedIn"
      link: "https://www.linkedin.com/in/cl%C3%A9o-chassonnery-za%C3%AFgouche-9a5933a6"
      
  contact: "cleo.chassonnery-zaigouche@unil.ch"
  twitter: "@cleocz"
  free_text: >
    I am mainly working on the history of Labour Economics and Applied Microeconomics, 
    as well as to the more [...]
```


