# Compilatore Sass per Joomla 4 con Vite JS
Il progetto "Compilatore Sass per Joomla 4 con Vite JS" è stato creato per semplificare il processo di compilazione dei fogli di stile Sass all'interno del CMS Joomla 4, sfruttando la potenza e la velocità di Vite JS.

<div align="center">
  <a href="https://github.com/joomla/joomla-cms" target="_blank" rel="noopener noreferrer">
    <img src="https://www.joomla.it/images/immagini/sampledata/Joomla-flat-logo-en.png" alt="Logo Joomla" width="100" height="100">
  </a>
  <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">
    <img src="https://vitejs.dev/logo.svg" alt="Logo Vite JS" width="100" height="100">
  </a>
  <a href="https://github.com/sass/sass" target="_blank" rel="noopener noreferrer">
    <img src="https://rawgit.com/sass/sass-site/main/source/assets/img/logos/logo.svg" alt="Logo Sass" width="100" height="100">
  </a>
</div>

## Descrizione
Joomla è un potente sistema di gestione dei contenuti, e il preprocessore Sass offre un modo efficiente per organizzare e strutturare lo stile della tua applicazione. Tuttavia, integrare questa tecnologia con un sistema di build veloce e moderno può risultare complesso.

Questo progetto fornisce un'interfaccia semplificata per la compilazione automatica dei file Sass all'interno di Joomla 4, grazie all'integrazione di Vite JS. Vite JS, con la sua architettura basata su ESM (ECMAScript Modules), offre una compilazione veloce e una gestione efficiente delle dipendenze, rendendo il processo di sviluppo più fluido ed efficiente.

## Caratteristiche Principali
* **Compilazione Automatica**: I file Sass vengono compilati automaticamente durante lo sviluppo, consentendo un flusso di lavoro senza interruzioni.
* **Integrazione con Vite JS**: Sfrutta la potenza di Vite JS per una compilazione rapida e efficiente, con gestione delle dipendenze e ricarica live.
* **Facile Configurazione**: L'installazione e la configurazione sono semplificate per garantire un'inclusione agevole nel tuo progetto Joomla.

## Prerequisiti
Prima di utilizzare questo progetto, assicurati di soddisfare i seguenti prerequisiti:

> [!WARNING]
> * **Joomla 4**: Verifica di utilizzare la versione raccomandata di PHP 8.2.
> * **Vite JS**: Assicurati di avere installata una versione di Node.js pari a 18.0.0 o superiore, ma inferiore a 20.0.0.

## Come Iniziare
Segui le istruzioni nel README per installare e configurare il compilatore Sass con Vite JS all'interno del tuo progetto Joomla. Inizia a sfruttare i vantaggi di una compilazione veloce e di un flusso di lavoro ottimizzato per lo sviluppo frontend.

### Installazione e Configurazione di Joomla
1. **Scarica Joomla:**
Visita [la pagina di download di Joomla](https://downloads.joomla.org/it/latest) e scarica l'ultima versione del CMS Joomla.

2. **Estrai i File:**
Dopo aver scaricato il file zip, estrailo nella directory del tuo server web. Puoi utilizzare strumenti come WinZip o un'utility di estrazione integrata.

3. **Database MySQL:**
Assicurati di avere un database MySQL pronto per essere utilizzato. Crea un nuovo database e un utente associato attraverso il tuo strumento di gestione del database (ad esempio, phpMyAdmin).

4. **Configurazione File `configuration.php`:**
Rinomina il file `configuration.php-dist` nella directory principale di Joomla in `configuration.php`. Modifica questo file con le informazioni del tuo database e altre configurazioni necessarie.

5. **Installazione da Browser:**
Accedi al tuo sito Joomla attraverso un browser. Segui la procedura di installazione guidata. Sarai guidato attraverso la configurazione della lingua, la connessione al database e la configurazione del sito.

6. **Configurazione Amministratore:**
Durante l'installazione, verrà richiesto di configurare l'account amministratore principale. Fornisci le informazioni richieste, inclusa l'email e la password.

7. **Rimozione Installazione:**
Dopo aver completato la procedura di installazione, assicurati di rimuovere la cartella installation dal tuo server per motivi di sicurezza.

8. **Accesso al Pannello di Controllo:**
Accedi al pannello di controllo amministrativo di Joomla utilizzando le credenziali dell'account amministratore.

### Creazione del File `package.json`

1. **Apri un Terminale:**
Assicurati di trovarati nella directory principale del tuo progetto Joomla.

2. **Crea il File `package.json`:**
Utilizza il tuo editor di testo preferito o il comando touch per creare il file `package.json` nella directory principale del tuo progetto. Incolla al suo interno il seguente codice:

```json
{
    "name": "joomla",
    "version": "5.0.2",
    "description": "Joomla CMS",
    "license": "GPL-2.0-or-later",
    "devDependencies": {
        "sass": "^1.69.5",
        "vite": "^5.0.0"
    }
}
```

### Esecuzione del Comando `npm install`
1. **Apri un Terminale:**
Assicurati di essere ancora nella directory principale del tuo progetto Joomla.

2. **Esegui il Comando `npm install`:**
Digita il seguente comando e premi Invio per eseguire l'installazione delle dipendenze elencate nel file `package.json`:

```bash
npm install
```
Questo comando installerà le dipendenze necessarie, inclusi Sass e Vite, nel tuo progetto.

3. **Attendi il Completamento:**
L'installazione richiederà qualche istante. Attendi pazientemente finché il processo non è completato.

### Creazione del File `package.json` in `media/templates/site/cassiopeia`

1. **Apri un Terminale:**
Assicurati di essere nella directory `media/templates/site/cassiopeia` del tuo progetto Joomla.

```
joomla
    └── media
        └── templates
            └── administrator
            └── site
                └── cassiopeia
```

2. **Crea il File `package.json`:**
Utilizza il tuo editor di testo preferito o il comando touch per creare il file `package.json` nella directory `media/templates/site/cassiopeia`. Incolla al suo interno il seguente codice:

```json
{
    "name": "cassiopeia",
    "private": true,
    "version": "5.0.2",
    "description": "Joomla CMS",
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "vite build --emptyOutDir",
        "preview": "vite preview"
    }
}
```

### Creazione del File `vite.config.js` in `media/templates/site/cassiopeia`

1. **Apri un Editor di Testo:**
Utilizza il tuo editor di testo preferito per creare il file `vite.config.js` nella directory `media/templates/site/cassiopeia`.

2. **Incolla il Codice in `vite.config.js`:**
Incolla il seguente codice nel file `vite.config.js`:

```javascript
import { defineConfig } from "vite";

export default defineConfig({
    root: './scss',
    build: {
        rollupOptions: {
            input: '/user.scss',
            output: {
                dir: './css',
                assetFileNames: `[name].[ext]`
            }
        }
    }
});
```

### Creazione del File `user.scss` in `media/templates/site/cassiopeia/scss`

```
joomla
    └── media
        └── templates
            └── administrator
            └── site
                └── cassiopeia
                    └── css
                    └── scss
                        ├── user.scss
```

1. **Apri un Editor di Testo:**
Utilizza il tuo editor di testo preferito per creare il file `user.scss` nella directory `media/templates/site/cassiopeia/scss`.

2. **Aggiungi il Contenuto:**
Aggiungi il tuo codice Sass o SCSS all'interno del file `user.scss`. Ad esempio:

```scss
body {
    background-color: #f0f0f0;
    color: #333;

    h1 {
        color: #000;
    }
}
```

Personalizza il contenuto di user.scss in base alle tue esigenze.

### Esecuzione del Comando `npm run build`

1. **Apri un Terminale:**
Assicurati di essere nella directory `media/templates/site/cassiopeia`.

2. **Esegui il Comando di Build:**
Digita il seguente comando e premi Invio per eseguire la build del tuo progetto con Vite:

```bash
npm run build
```

Questo comando avvierà il processo di compilazione e genererà i file di output nella directory specificata nel file `vite.config.js`, nel nostro caso `./css`.

3. **Verifica i Risultati:**
Controlla la directory specificata nel tuo file di configurazione (`./css` in questo caso) per assicurarti che i file CSS compilati siano presenti.

Ora hai completato con successo la compilazione del tuo foglio di stile utilizzando Vite JS. Assicurati che il file CSS risulti incluso nelle tue pagine Joomla per applicare gli stili definiti nel tuo file `user.scss`.