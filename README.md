# Sake Yuki — la teva web

Guia ràpida, sense tecnicismes. Si t'encalles en algun pas, envia'm un missatge.

## 1. Veure-la abans de publicar-la

Fes doble clic a `index.html`. S'obrirà al navegador i es veurà tal com quedarà online.

## 2. Pujar-la a Hostinger

1. Entra al **hPanel** de Hostinger → **Administrador de fitxers** (File Manager).
2. Ves a la carpeta `public_html` (o la carpeta del teu domini).
3. Arrossega-hi **tots** els fitxers i carpetes d'aquest projecte (`index.html`, `styles.css`, `main.js`, `lib/`, `assets/`, `.htaccess`, aquest `README.md`).
4. Ja està online. Entra al teu domini per comprovar-ho.

⚠️ El fitxer `.htaccess` és invisible al Finder/Explorador d'arxius normal, però sí que es veu dins del File Manager de Hostinger. Assegura't que es pugi també.

## 3. Editar textos, telèfon i adreça

Obre `lib/manifest.js` amb el **Bloc de notas** (Windows) o **TextEdit** (Mac, en mode text sense format).

Hi trobaràs, ben a dalt de tot, coses com:

```
phoneDisplay: "654 75 18 02",
addressLine1: "Carrer de Nonet Escubòs, 14",
```

Canvia el text entre cometes `" "` pel que vulguis. **No toquis** les claus `{ }`, els claudàtors `[ ]` ni les comes `,` — són el que fa que el fitxer funcioni.

Si canvies el número de WhatsApp, edita **dues coses**:
1. `phoneWhatsapp: "34654751802"` dins de `manifest.js` (sense espais, amb el 34 del davant).
2. Res més cal tocar a `index.html` — tots els botons de WhatsApp es generen sols a partir d'aquest número.

## 4. Editar la carta (plats i preus)

Dins de `manifest.js`, busca el bloc `menu:`. Cada categoria (Entrants, Dim Sum, Yakisoba...) té una llista `items` amb aquest format:

```
{ name: "Gyoza de verdura", desc: "Empanadilla saltada de verdura.", price: null },
```

- **Per posar un preu**: canvia `null` per un número amb punt, per exemple `price: 6.50`.
- **Per afegir un plat nou**: copia una línia sencera (des de `{` fins a `},`) i enganxa-la a sota, canviant el nom, la descripció i el preu.
- **Per eliminar un plat**: esborra la línia sencera.

### Important sobre els preus actuals

Ara mateix només tinc **confirmats i reals** els preus de la categoria **Entrants** (Sopa de Miso 3,50 €, Ramen 5,25 €, etc. — els vaig trobar a la carta oficial de Just Eat). La resta de categories (Dim Sum, Yakisoba, Nigiris, Uramaki...) tenen **noms de plats habituals** però el preu marcat com a `null`, que es mostra a la web com «Consulta preu».

No he pogut entrar a Instagram per copiar la carta sencera dels vostres destacats (Instagram bloqueja l'accés automàtic). Si m'envieu captures de pantalla dels destacats amb la carta completa, us la deixo acabada de seguida — o si preferiu, ompliu vosaltres mateixos els preus a `manifest.js` seguint l'exemple d'aquí sobre.

## 5. Canviar fotos

Ara mateix la web fa servir il·lustracions pròpies (no fotos) perquè encara no tinc fotografies reals del local. Quan les tingueu:

1. Deseu-les a `assets/photos/source/` (qualsevol format: JPG, PNG, HEIC de l'iPhone...).
2. Digueu-m'ho i us les integro i optimitzo (format WebP, mida correcta) a `assets/img/`.

## 6. Si fas un canvi i no es veu a la web

Els navegadors guarden una còpia de la pàgina per anar més ràpid, i de vegades no s'actualitza sola.

1. Prova `Ctrl + F5` (Windows) o `Cmd + Shift + R` (Mac) per forçar una recàrrega completa.
2. Si segueix igual, obre `index.html` i `styles.css` i busca al final de la línia `?v=20260726`. Canvia aquest número per la data d'avui (per exemple `?v=20260803`) a **totes** les línies on aparegui, dins de `index.html`. Torna a pujar el fitxer a Hostinger.

## Preguntes freqüents

**Puc editar-ho des del mòbil?** El `manifest.js` és millor editar-lo des d'un ordinador (Bloc de notas / TextEdit). Des del mòbil és més fàcil espatllar sense voler una coma o una cometa.

**Puc afegir més categories a la carta?** Sí — copia un bloc sencer de categoria (des de `{ id: ...` fins al seu `]` de tancament) i enganxa'l abans del `]` final de `menu:`.

Qualsevol dubte, escriu-me i t'ho reviso.
