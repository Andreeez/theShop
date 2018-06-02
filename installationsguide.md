Vi går ut ifrån att du (användaren) har installerad NodeJS och MongoDB.

För att starta projektet lokalt på din dator gör följande två steg.
1. Kör `mongod` i en terminal (måste köras på disken där MongoDB är installerad)
2. Flytta in till _\theShop_ och använd `npm install` eller `npm upgrade` för att installera och/eller uppdatera alla nödvändiga npm packages.
3. Flytta in till _\theShop\server_ och gör de sista steg för att starta projektet:
    1. Gör en acl import, stå i server mappen och skriv in följande kommando
        ```Shell
        node server.js --import-acl="path\till\acl.json"
        ```
    2. Gör nästan samma som förra utan `--import-acl`.
        ```Shell
        node server.js
        ```
4. Använd din webbläsare och gå in på [localhost med port 3000](http://localhost:3000) för att öppna sidan.