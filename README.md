# venir-labopp

Comment venir au laboratoire de mathématiques Paul Painlevé de Lille

## adresse web

La page principale se trouve à l'adresse :

* [ktzanev.github.io/venir-labopp](https://ktzanev.github.io/venir-labopp/)

Mais vous pouvez aussi utiliser des liens directs comme par exemple :

* [ktzanev.github.io/venir-labopp/fr/#lille-g](https://ktzanev.github.io/venir-labopp/fr/#lille-g)

qui indique en français (`/fr/`) comment venir des gares de Lille (`#lille-g`).

### Liens courts

Voici quelques liens courts générés par [Git.io](https://git.io) que vous pouvez utiliser également :

- Comment venir (français) : `git.io/vgWNt`
- Comment venir des gares (français) : `git.io/vgWNE`
- Comment venir (anglais) : `git.io/vgWN2`
- Comment venir des gares (anglais) : `git.io/vgWNr`

## la structure des fichiers

- `index.md` est le fichier qui permet de choisir la langue;
- `fr.md`, `en.md`, ... (format `<code pays>.md `) sont les fichiers qui contiennent les informations dans les différentes langues.

## comment contribuer

Si vous trouvez que les informations ne sont pas précises ou qu'il y a des fautes de traduction, vous pouvez directement modifier le fichier en question.

Pour cela il faut avoir un compte GitHub.
Puis il suffit de cliquer sur `modifier` du fichier que vous voulez modifier.
GitHub créer une copie dans votre compte que vous pouvez modifier librement.
Une fois votre travail terminé, vous pouvez faire un "Push request" pour que j'intègre vos modifications au projet.

Vous pouvez également, au lieu de faire la correction directement, signaler le problème dans la section [Issues](https://github.com/ktzanev/venir-labopp/issues).

Merci d'avance pour votre aide.

## comment adapter ce projet pour un autre laboratoire

Il suffit de dupliquer (_to fork_) ce projet (_repo_) sur votre compte. Puis d'adapter les fichiers à vos besoins:

- Les `.md` qui contiennent les descriptifs.
- Les plans qui se trouvent dans `assets/images/maps`. Pour cela il suffit d'exporter une image `.png` de [OSM](http://www.openstreetmap.org/). De le transformer en noir et blanc et de dessiner dessus.
- Les polices d'icônes des villes de départ se trouvent dans `assets/fonts/cityicons` et le fichier `css` correspondant est `_sass/_font_cityicons.scss`. Ces fichiers ont été générés à partir des `svg` en utilisant [Fontello](http://fontello.com/).

