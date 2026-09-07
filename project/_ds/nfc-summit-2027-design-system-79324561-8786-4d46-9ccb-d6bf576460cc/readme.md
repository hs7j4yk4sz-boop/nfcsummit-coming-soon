# NFC Summit 2027 — Design System

Festival pop culture et Web3, sixième édition. **27 — 29 mai 2027, Unicorn Factory, Beato, Lisbonne.**
Ce système sert à produire trois choses : des decks sponsors, des pages verticales et des visuels sociaux.

**Le logo est un mot-symbole en deux blocs** : « NFC » en gros, « NFC SUMMIT » dessous, en capitales d'une linéale grasse condensée — la même logique que le titrage Anton. Pas de pictogramme, pas de dragon dans la marque, jamais d'accent dans le mot-symbole : craie sur encre, encre sur craie, encre sur accent.

Quatre fichiers dans `assets/` : `logo.svg` (1024², **fond blanc opaque** — à réserver aux fonds clairs), `logo-white-transparent.png` (craie, alpha), `logo-ink-transparent.png` (encre, alpha — dérivé du blanc par inversion des canaux, l'alpha d'origine est conservé), `logo-black-on-white.png` et `logo-white-on-black.png` (carrés 1024² pleins, pour l'avatar social).

Il manque un SVG à fond transparent : le SVG fourni porte un carré blanc, donc inutilisable sur photo ou sur accent. **Les logos des partenaires** n'ont pas été fournis — le mur de line-up reste en noms composés.

## Données de l'édition 2026

Source : le rapport final NFC Summit 2026 (PDF, 24 pages, fourni par John Karp). Le texte extrait est dans `uploads/report-text.txt`. **Ces chiffres sont les seuls utilisables dans un deck sponsors** — toute autre valeur dans les slides est un placeholder.

5ᵉ édition, 4 — 6 juin 2026, Unicorn Factory, Lisbonne. Un site industriel de 50 000 m², 7 bâtiments, 2 espaces extérieurs, 3 scènes, 8 événements sous un seul billet.

**Audience.** 2 740 visiteurs · 3 243 inscrits · 79 pays · top 5 : Portugal, France, USA, Allemagne, Royaume-Uni · 43 % d'entrepreneurs, 10 % de développeurs, 8 % de KOLs.

**Programme.** 200+ artistes exposés · 50+ exposants d'art · 300+ artistes et collectionneurs de référence · 150+ intervenants · 75 sponsors · 30+ side events (dont 15 organisés dans 8 lieux du site) · un hackathon de 24 h (97 builders, 30 équipes, 25 projets) · 120 adolescents formés à l'IA générative · Longevity Day (30 experts, 150 participants) · Kawaii Summit (20 exposants, 3 tournois TCG).

**Bâtiments.** Art Factory (ancien moulin, 4 niveaux : SYSTEMS par Arab Bank Switzerland au dernier étage, curaté par Nina Roehrs, 7 œuvres de la collection ABS et 3 finalistes du Digital Art Prize ; Rare Art Floor pour les galeries indépendantes ; Grand Hall pour les galeries établies ; AI Cave) · Kawaii Exhibition · bâtiment hackathon · bâtiment side events · Main Stage · Kawaii Stage · Central Plaza (« Kilometer Zero ») et les tunnels en extérieur.

**Communication** (1er mai — 8 juin). 6 M+ d'impressions organiques · 60 k+ d'engagements · 20 k+ de likes · 4 k+ de retweets · 20 k+ d'abonnés newsletter · 40 % de taux d'ouverture · 20 % d'abonnés vérifiés sur X · 10 jours consécutifs en Top News X · 70+ articles, 60+ mentions presse, 3 M+ de portée · sentiment positif à 99 %.

**Verbatim utilisables.** « This is the fifth edition. It is also, in many ways, Year Zero. » — John Karp, fondateur. Adam Weitsman, DANAE.io, VEVE, Matt Medved et Giannis Sourdis ont publié des retours positifs cités dans le rapport.

**Moments 2026.** Le triptyque de Dmitri Cherniak s'allume et révèle la dernière sortie de Ringers ; Gretchen Andrew remporte le ABS Digital Art Prize 2026 ; Adam Weitsman acquiert les 805 Meebits restants de Larva Labs ; les postes française et autrichienne sortent leurs timbres numériques.

## Index

| Fichier | Ce qu'il contient |
|---|---|
| `styles.css` | Point d'entrée CSS — uniquement des `@import` |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `effects` |
| `components/photo/` | GradedPhoto · VideoBackdrop · GradeDefs |
| `components/type/` | DisplayTitle · MonoLabel · Lead · QuoteBlock |
| `components/layout/` | SlideFrame · AccentBand · GhostNumber |
| `components/dragons/` | DragonFrame (+ la table `DRAGONS`) |
| `components/data/` | StatBlock · PriceRow |
| `slides/` | Les vingt-deux mises en page du deck · `index.html` les montre toutes · 13 à 21 sont la famille « fond animé ou photo avec texte dessus » |
| `templates/deck-sponsors/` | Le template Deck sponsors — onze mises en page en Design Component, à forker |
| `thumbnail.html` | La vignette du système sur la page d'accueil |
| `guidelines/` | Les cartes de fondations de l'onglet Design System |
| `assets/photos/` | 33 photos brutes, Guillermo Vidal, éditions 2026 — jours 1 à 4 et la soirée |
| `assets/web/` | Les mêmes, allégées à 1100 px pour l'écran |
| `assets/sponsors/` | Les logos réels de l'édition 2026, rangés par tier (`co-organiser/`, `platinum/`, `gold/`, `silver/`, `bronze/`, `venue/`). Polarités mélangées à la source. Règle du mur : les tracés transparents sombres vont sur craie ; les artworks à fond opaque blanc ont été détourés en alpha (fichiers `*-knock.png`, générés par seuil de luminance sur le fichier fourni, jamais redessinés) ; les artworks blancs ou à fond noir vont sur une tuile encre. 47 logos utilisables sur les 75 sponsors. Turismo de Lisboa n'existe qu'en JPG opaque : il est posé sur une tuile craie assumée. BTC Wine est un tracé fin bleu clair, illisible à l'échelle du mur : il est retiré de la slide 23. |
| `assets/video/` | Sept boucles de fond, toutes étalonnées `#nfc-grade`, toutes tournées à l'édition 2026 : `dmitri-cherniak-screen-01.mp4` (18 Mo, master) et `-02.mp4` (2,8 Mo, la version des slides) — l'écran digital de l'artiste Dmitri Cherniak sur la place centrale ; `art-gallery-ground.mp4` — l'Art Gallery au rez-de-chaussée de l'Art Factory ; `arab-bank-expo.mp4` — l'expo Arab Bank Switzerland, 2e étage ; `art-factory-first-floor.mp4` — le 1er étage, petites galeries et artistes ; `kawaii-summit-hall.mp4` — la salle d'expo du Kawaii Summit ; `opensea-loop.mp4` — interface. |
| `assets/dragons/` | 7 personnages, rendus gris, 800 × 1000 |
| `assets/reference/` | Les 3 images qui fixent l'étalonnage cible |
| `NFC-Summit-2027-Referentiel.dc.html` | Le référentiel lisible — la page de garde du système |

## Fondations visuelles

**Couleurs.** Sept neutres, trois accents, huit accents de dragons. Encre `#0B0B0B` est le fond par défaut ; béton `#DEDBD3` est le fond de toutes les pages qui portent des chiffres. **Deux fonds, pas trois.** Les accents — acide `#B5FF00`, magenta `#FF0976`, jade `#49C1A3` — servent aux prix, aux numéros de section, aux bandes de balayage et aux filets. Jamais au corps de texte. **Un seul accent par page, jamais plus de 5 % de la surface.**

**Typographie.** Anton pour les titres, capitales uniquement, interlignage 0,82 à 0,92, interlettrage −0,02em. Space Grotesk Light pour les chapôs, Regular pour le corps, mesure bornée à 62 caractères. Space Mono capitales pour les labels, dates, prix et numéros de page, interlettrage 0,18 à 0,24em. Rien sous 24 px sur un 1920, rien sous 40 px en Anton.

**Grille.** Marges de 5 % de la largeur du cadre — 96 px en 1920, 54 px en 1080, 70 px en 1410. Colonnes de 4 (pages denses), 8 (programme, murs de logos) ou 3 (éditorial).

**Traitement photo — c'est la signature.** Toute photo passe par le même étalonnage : saturation 62 %, noirs écrasés vers l'encre, hautes lumières plafonnées à la craie, contraste 1,06, split-tone ombres jade / hautes lumières acide à 20 %, frange de canaux rouge −4 px et bleu +4 px mélangée à 55 %, lignes de balayage une ligne toutes les 4 px à 10 %. Ce n'est pas une description : c'est le filtre SVG `#nfc-grade` de `components/photo/GradeDefs.jsx`, appliqué tel quel aux images **et aux vidéos**. `#nfc-bw` est sa variante noir et blanc. Les trois images de `assets/reference/` fixent le rendu cible ; toute nouvelle photo se compare à elles.

La photo couleur plein cadre est la norme sur les pages d'impact. Le noir et blanc est l'exception, réservé aux pages denses sur fond béton où une photo couleur se battrait avec le texte.

**Rien de doux.** Aucun rayon de bordure, aucune ombre portée, aucun dégradé décoratif. Les seuls dégradés du système sont les deux dégradés de protection du texte : vertical remontant du bas sur photo fixe, latéral sur vidéo. Les seuls filets sont à angle vif : 1 px pour les séparateurs, 4 px pour les citations, 6 px pour les accents courts, 10 px pour les bandes plein cadre.

**Animation.** Le système n'anime rien, sauf les boucles vidéo de fond — muettes, 8 à 12 secondes, un seul mouvement continu, sans montage. Aucune transition de survol n'est définie : ces livrables sont des documents, pas des interfaces. Si un support interactif en a besoin, l'état de survol est un passage à la craie sur les textes et à l'acide sur les éléments cliquables, sans transition de couleur progressive.

## Les dragons

Huit personnages. **Gris pendant tout le deck**, chacun portant une seule ligne d'accent, la sienne. Toujours coupé par au moins un bord du cadre — posé au milieu du vide, un dragon devient un sticker. Quatre cadrages : `full`, `head`, `offframe`, `bust`.

Les rendus gris portent un léger halo clair autour de la silhouette. Sur fond encre il est invisible ; **sur fond béton, le dragon prend `mix-blend-mode: multiply`** — sinon le halo se lit comme un cadre blanc. Et on ne lui applique pas `#nfc-bw` : il est déjà gris.

Les huit accents de dragons ne vivent **que** sur les dragons. La mise en page autour continue d'utiliser acide, magenta, jade — sinon la palette du deck passe de trois à onze couleurs.

**La couleur n'apparaît qu'à la dernière slide** : les huit reviennent en couleur, alignés, coupés par les bords. Nulle part ailleurs — une seule fuite et l'effet n'existe plus.

| # | Personnage | Accent | Rendu |
|---|---|---|---|
| 01 | Le collectionneur | `#3ECFBF` | **manquant** |
| 02 | L'analyste | `#2C3A7A` | glitch seul |
| 03 | Le vidéaste | `#3F9E6E` | clean + glitch |
| 04 | La journaliste | `#D63A2A` | clean + glitch |
| 05 | Le chercheur | `#9B7FC0` | clean + glitch |
| 06 | Le dev | `#7EC8E8` | clean + glitch |
| 07 | L'hôte | `#2E7FD6` | clean + glitch |
| 08 | Le street artist | `#4FD1B0` | clean + glitch · pas de version couleur |

## Fondamentaux de contenu

Le ton est celui d'un manifeste. **On affirme, on ne promet pas.** Sujet, verbe, complément. Si une phrase a besoin d'un adverbe pour tenir debout, elle est fausse.

- **Titres** — quatre mots maximum, pas de ponctuation finale, jamais de question.
- **Chiffres** — nus, en Space Mono, sans « plus de ». Un chiffre faux tue le deck : on ne l'arrondit pas vers le haut.
- **Anglicismes** — tolérés quand ils sont le nom de la chose : line-up, container gallery, side event. Pas ailleurs.
- **Emoji** — aucun. Les dragons portent déjà toute la chaleur dont le deck a besoin.

On écrit : « Sixième édition. 27 — 29 mai 2027, Beato. »
On n'écrit pas : « L'événement incontournable qui réunit les acteurs majeurs de l'écosystème. »

## Iconographie

**Le système n'a pas d'icônes, et c'est volontaire.** Aucun jeu d'icônes n'existe dans les sources fournies, et rien n'a été substitué depuis une bibliothèque tierce. Ce qui tient le rôle habituel des icônes :

- les **filets** et les **bandes d'accent** pour la hiérarchie et la séparation ;
- les **numéros fantômes** en Anton pour le repérage de section ;
- les **puces `●` / `—`** en Space Mono dans les tableaux comparatifs ;
- les **dragons** pour toute charge illustrative.

Aucun emoji, aucun caractère unicode décoratif, aucun SVG dessiné à la main. Si un besoin d'icône apparaît (pictogrammes de lieu, de scène, d'accessibilité sur un plan de site), il faut choisir un jeu et l'ajouter ici — pas l'improviser slide par slide.

## Ajouts assumés

Ces éléments ne figuraient pas dans le brief ; ils ont été ajoutés parce que les mises en page demandées les exigeaient. Signalés pour que personne ne les prenne pour de la doctrine :

- **`GhostNumber`** — le numéro de section en 320 px graphite, observé sur l'intercalaire de référence fourni.
- **`glitch` sur `DisplayTitle`** — la frange magenta / jade, observée sur le même intercalaire. Traitée comme un artefact, pas comme un accent.
- **`VideoBackdrop`** — le patron « phrase sur vidéo », demandé en conversation, absent du brief écrit.
- **`--protect-left`** — le dégradé latéral, nécessaire pour que le mouvement d'une vidéo reste visible à droite du texte.

## Ce qui manque

- **Le dragon low-poly en PNG transparent haute résolution.** Les deux slides de référence fournies l'ont cuit dans l'image. Sans le fichier, l'intercalaire dragon ne peut pas se décliner sur les huit personnages.
- **Le dragon 01** (le collectionneur) n'a aucun rendu ; le **02** n'a que sa version glitch.
- **Les huit versions couleur** pour la dernière slide. Le street artist n'en aura pas.
- **Des rendus 1600 × 2000** : les fichiers gris font 800 × 1000, suffisants en vignette et en intercalaire jusqu'à 60 % de la hauteur du cadre, insuffisants en pleine page et en format vertical.
- **Les chiffres réels et la grille tarifaire.** Ceux des slides `05`, `06` et `07` sont des placeholders vraisemblables, marqués comme tels dans les sur-titres.
- **Les fichiers de fontes.** Anton, Space Grotesk et Space Mono sont servies par Google Fonts (`tokens/fonts.css`). Si la marque veut des fontes hébergées, remplacer l'import par des `@font-face` locaux — les noms de familles ne changent pas.
- **Un SVG de logo à fond transparent** (celui fourni a un carré blanc).
- **Les logos des sponsors non fournis en PNG/SVG** : Philaposte, Hash Gallery, Supernova, Nomadz, Mercadia, MOM, Skytalons, Koppu Japones, Crymbo, BoxFun, DegeDog, Espadas y Mas, Covenant Studio, PostLiechtenstein/SwissPost et une quinzaine d'artistes bronze — leurs dossiers ne contiennent que des `.ai`, `.pdf`, `.zip` ou rien.
- **Les logos des partenaires** du mur de line-up.

## Sources

- Brief de marque : `uploads/PROMPT-CLAUDE-DESIGN.md`
- Photos : Guillermo Vidal, éditions NFC 2026 (jours 1 et 2, Vhils × Boldtron)
- Références d'étalonnage : trois images fournies avec le brief
- Slides de référence : `DragonSection@1x.png`, `DragonCitation@1x.png`
- Références de mouvement pour les fonds vidéo : deux liens YouTube fournis en conversation, listés dans le référentiel

## Note sur les cartes

Les cartes de `guidelines/` et les cartes de composants sont écrites en HTML statique lisant `styles.css`, et non montées depuis le bundle React. Elles reflètent donc les tokens en direct mais pas le code des composants : si tu modifies un composant, vérifie sa carte.
