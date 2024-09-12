# Glassify

Glassify è un'applicazione e-commerce sviluppata con lo stack MERN (MongoDB, Express, React, Node.js) che funge da vetrina per gli acquirenti e offre un pannello di amministrazione per gestire i prodotti.

## Indice
1. [Descrizione](#descrizione)
2. [Tecnologie Utilizzate](#tecnologie-utilizzate)
3. [Installazione](#installazione)
4. [Uso](#uso)

## Descrizione

Glassify è una piattaforma e-commerce che consente agli utenti di navigare e acquistare prodotti da un'interfaccia user-friendly. Gli amministratori del sito possono utilizzare un pannello dedicato per aggiungere, modificare o eliminare prodotti, garantendo una gestione semplice ed efficace del catalogo.

### Funzionalità Principali
- **Vetrina per gli acquirenti**: Visualizzazione dei prodotti disponibili con descrizioni dettagliate, prezzi e immagini.
- **Pannello Admin**: Interfaccia per la gestione dei prodotti, con possibilità di aggiungere, modificare o rimuovere elementi dal catalogo.
- **Autenticazione e Autorizzazione**: Accesso sicuro per utenti e amministratori con registrazione e login.
- **Carrello e Pagamenti**: Funzionalità di aggiunta al carrello e procedura di checkout. 

## Tecnologie Utilizzate

Glassify è stato sviluppato utilizzando il seguente stack tecnologico:

## Tecnologie Utilizzate

- **Frontend**: [React](https://reactjs.org/) con [React Router](https://reactrouter.com/) per la gestione delle pagine.
- **Backend**: [Node.js](https://nodejs.org/) con [Express](https://expressjs.com/) per la gestione delle API.
- **Database**: [MongoDB](https://www.mongodb.com/) per l'archiviazione dei dati.
- **Altri Strumenti**:
  - [Mongoose](https://mongoosejs.com/) per la modellazione degli oggetti di MongoDB.
  - [JWT](https://jwt.io/) per l'autenticazione.
  - [Bcrypt](https://www.npmjs.com/package/bcrypt) per la crittografia delle password.
  - [EmailJS](https://www.emailjs.com/) per l'invio di email (DEM).
  - [Cloudinary](https://cloudinary.com/) per lo storage e gestione delle immagini.
  - [Canva](https://www.canva.com/) per la creazione degli assets.


## Installazione

Segui questi passaggi per installare e avviare il progetto in locale.

### Requisiti
- Node.js >= 14.x
- MongoDB

### Passaggi per l'installazione

1. Clona il repository:

    ```bash
    git clone https://github.com/lucacasp/progetto_finale
    cd glassify
    ```

2. Installa le dipendenze per il frontend:

    ```bash
    npm install
    ```

3. Installa le dipendenze per il backend:

    ```bash
    npm install
    ```

4. Avvia il server e il client:

    ```bash
    # Terminale integrato backend - Avvia il Server
    Inserisci: node server.js

    # Terminale integrato frontend - Avvia il Frontend
    npm start

    # Terminale integrato admin - Avvia il Pannello Admin
    npm start
    ```

5. Assicurati che MongoDB sia in esecuzione.

## Uso

### Frontend (Vetrina)
- Gli utenti possono esplorare i prodotti, visualizzare i dettagli e aggiungerli al carrello.
- Gli utenti registrati possono completare l'acquisto.

### Backend (Pannello Admin)
- Accesso tramite credenziali di amministratore.
- Gestione completa del catalogo prodotti (aggiunta, modifica, eliminazione).
