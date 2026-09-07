# NFC Summit 2027 Coming Soon

_Started 2026-09-06 23:16 UTC_

---

## User

BRIEF CLAUDE DESIGN v2 — nfcsummit.com provisoire : COMING SOON + sponsors live (REMPLACE le brief précédent)
Une seule page, hyper simple. Mockup desktop + mobile 390. Screenshot du header actuel fourni pour référence.
Direction artistique
Langue des decks ON THE WALL : Anton (titres), IBM Plex Mono (labels/eyebrows), Inter (corps). Mix monochrome + couleur : fond/photo en N&B ou très désaturé, la mascotte dragon RESTE en couleur (son bleu = l'accent unique). Sobre, typographique, zéro décoration.
1) LE HAUT — bannière coming soon
Titre : « NFC SUMMIT 2027 » en Anton, pleine largeur (même esprit de composition que le site actuel).
Le dragon, présent mais en rappel (pas forcément plein écran comme aujourd'hui — à toi de doser).
« Where imagination Connects » reste.
Bloc infos mono : « 27–29 MAY 2027 · UNICORN FACTORY, LISBON » + une mention COMING SOON (mono, discrète mais claire — c'est une page d'attente assumée).
DEUX liens/CTA seulement : « BECOME A SPONSOR » (→ Typeform, URL fournie par John) · « NEWSLETTER & NEWS » (→ lien fourni par John). Pas de Register.
2) EN DESSOUS — « SPONSORS 2027 », à l'ancienne, live
Le cœur de la page. Une page partenaires de conférence CLASSIQUE, volontairement traditionnelle dans sa structure — sauf que les entrées viennent du mur ON THE WALL en temps réel.
Eyebrow mono : « LIVE — ON THE WALL » (ou équivalent sobre). Titre Anton : « SPONSORS 2027 ».
TEXTE SEULEMENT. Aucun visuel, aucune carte, aucun logo : des noms, en Plex Mono/Inter, classés par tier du plus haut au plus bas.
Les tiers (labels à l'ancienne, mapping campagne — VALIDÉ par John) :
ORGANIZER — NFT MORNING (en dur, toujours affiché)
CO-ORGANIZER — le flagship (1 nom max, le plus grand corps)
PLATINUM SPONSORS — les artist murals (2 max)
GOLD SPONSORS — les community houses (4 max)
COMMUNITY SPONSORS — la PFP wall (50 max, corps moyen, liste dense)
NAMES ON THE WALL — les 500 noms (petit corps, mur de noms séparés par « · » — le titre du tier reprend volontairement le nom de la campagne)
La taille typographique décroît avec le tier — hiérarchie purement typo.
État vide = juste le titre du tier + une mention entre parenthèses — rien d'autre, pas de cases, pas de placeholders visuels. Ex : « CO-ORGANIZER ( open ) », la parenthèse cliquable → onthewall.nfcsummit.com. Si un tier est vide, il est vide et ça se voit — c'est assumé.
Ordre d'affichage dans chaque tier : premier arrivé, premier servi (ordre de mint). Pas de tri alphabétique.
Le mockup montre l'état MIXTE : Co-organizer rempli (1 nom fictif neutre), Platinum 1 nom + ( open ), Gold 2 noms, Community ~10 noms, Names on the wall ~40 noms + « + 460 more to come ». ET une vignette de l'état 100 % vide (jour 1) — les deux doivent être beaux.
Clôture : une ligne « Every sponsor above bought a piece of the venue — painted for real, recorded on-chain. → GET ON THE WALL » (onthewall.nfcsummit.com).
Interdits copy : jamais « permanent » ; noms fictifs neutres uniquement.
Livrables
Mockup desktop pleine page + mobile 390 + la vignette état vide. Pour validation — le code viendra via Claude Code (données = API positions ON THE WALL, pas ton sujet).

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: image_metadata]_

_[tool: view_image]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: copy_files]_

_[tool: run_script]_

_[tool: view_image]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: ready_for_verification]_

Trois écrans sur un canvas : desktop 1440 (état mixte), mobile 390, et la vignette état vide.

Notes :
- Dragon : le rendu couleur n'existant pas, j'ai teinté le rendu gris 07 (l'hôte) en monochrome bleu `#2E7FD6` — seul accent de la page. Si tu as le PNG détouré du vrai dragon bleu, dépose-le et je le remplace.
- Fontes : Anton / IBM Plex Mono / Inter comme dans ton brief v2 (le DS 2027 prévoit Space Grotesk/Mono — dis-moi si tu veux revenir dessus).
- « Where imagination Connects » en Inter italique léger, pas en script — à confirmer.
- Les liens Typeform et newsletter sont des placeholders (`#typeform`, `#newsletter`).

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Titre desktop réduit pour tenir pleine largeur, dragon ramené à ~56 % de la hauteur et décalé sous le titre — coupé par le bord bas uniquement.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Mobile : dragon réduit (82cqw) et remonté entre le titre et le bloc texte, avec un dégradé de protection encre sous la tagline / infos / CTA pour garder la lisibilité.

## User

on va commencer par le hero. reporduit le meme here mais chnage le style pour que le dragon soit un de nos nouveau dragons brutalists.
NFC Summut 2027 avec la date 27 May 27-28-29
Enleve les mots lcés en bas a gauche et enleve les boutons

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Hero desktop refait sur la composition du site actuel : titre pleine largeur, dragon brutaliste (rendu gris 07, en multiply sur béton) centré et coupé en bas, tagline à droite, date « 27 · 28 · 29 May 2027 · Unicorn Factory, Lisbon » à gauche. Mots bas-gauche et boutons retirés ; « Coming soon » remplace Register now dans le header.

Le mobile garde l'ancien hero pour l'instant — je l'aligne dès que le desktop est validé.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Filet 1 px encre entre hero et sponsors (l'arête de coupe du dragon), et le hero mobile aligné sur le desktop : béton, dragon gris en multiply coupé en bas, date 27 · 28 · 29, plus de boutons.

## User

enleve le imagination connect

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Tagline retirée sur desktop et mobile.

## User

met ce dragons plutot

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Le street artist (glitch animé) remplace l'hôte sur les deux heros, toujours en multiply sur béton.

## User

parfait. Peux tu me faire un .mp4 du drragon aussi?

## Assistant

_[tool: run_script]_

_[tool: run_script]_

_[tool: present_fs_item_for_download]_

MP4 du dragon (400 × 589, 3 boucles, fond béton `#DEDBD3` — le MP4 ne gère pas la transparence). Si tu le veux sur fond encre ou à une autre taille, dis-moi.

## User

on fait une mise a jour en dessous du hero
D'abord, NFC is coming back in 2027 Save the date May 27-29
Puis in the meantime, you can already get your ticket and your name on the wall (je te laisse rediger et mettre en forme propre.
More info on onthewall.nfcsummit.com

Puis la section. Il sont deja sponsors pour 2027

Vire ensuite organizers et nft morning.

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Ajouté sous le hero (desktop + mobile), sur fond encre : eyebrow « Save the date », titre Anton « NFC is coming back in 2027 », date mono, puis « In the meantime, you can already get your ticket — and put your name on the wall of the venue. » avec le lien onthewall. L'eyebrow des sponsors devient « Already sponsors for 2027 · live from the wall ». Ligne Organizer / NFT Morning retirée partout (compteur ajusté).

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Lien mobile raccourci en « → onthewall.nfcsummit.com » pour tenir sur une ligne.

## User

ok par contre garde en tete que les community sponsors ca serait des images carrés de pfp

## Assistant

Noté : Community sponsors = grille de PFP carrées (pas une liste de noms). Je l'intègre à la prochaine passe sur la section — dis-moi quand : 50 vignettes, N&B ou couleur, avec ou sans nom dessous ?

## User

juste vignetes

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Community sponsors : grille de vignettes carrées (10 colonnes desktop, 5 mobile), N&B, sans nom ; placeholders gris neutres en attendant les vraies PFP. La parenthèse « ( 40 open )» reste dessous.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Les « ( … open ) » ne se coupent plus (nowrap sur tous les liens bleus). L'erreur console restante est un artefact du chargement progressif, sans effet visible.

