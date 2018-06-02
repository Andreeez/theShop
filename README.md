# Grupp-medlemar
Anders Hagelkvist
Thomas van der Ven
Jesper Hansson

#Användings instrucktioner
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

# Check list
## Obligatoriska User Stories
### Som butiksägare
- [x]  **…vill jag ha en fungerande webbshop för den svenska marknaden. (?)**
- [x]  **…vill jag kunna sälja produkter.**
- [x]  **…vill jag kunna testa betalningar.**

### Som kund
- [ ]  …vill jag ha en användarvänlig, responsiv webbshop med tydlig navigation. <--
- [x]  **…vill jag kunna hitta produkter att köpa.**
- [x]  **…vill jag kunna samla varor i en varukorg.**
- [x]  **…vill jag kunna betala mina varor i en kassa (betalning i testläge).**

### Som admin 
- [x]  **…vill jag kunna skapa nya produkter.**

--------------------------------------------------------------------------------------

## Valbara User Stories 
### Som admin
- [x]  **…vill jag kunna se en lista på ordrar.**
- [ ]  …vill jag kunna se kontaktinformation till kunden tillsammans med ordern.
- [ ]  …vill jag kunna sätta priser exkl moms på produkter.
- [x]  **…vill jag kunna skapa produktkategorier.**
- [ ]  …vill jag kunna skapa fristående informationssidor om t ex frakt, villkor, etc.

### Som kund 
- [x]  **…vill jag kunna söka efter produkter.**
- [x]  **…vill jag kunna leta i produktkategorier.**
- [ ]  …vill jag kunna hitta relaterade produkter när jag tittar på en produkt.
- [ ]  …vill jag kunna se min orderhistorik.
- [ ]  …vill jag kunna välja att se priser inkl eller exkl moms.
- [x]  **…vill jag kunna se de tre nyaste produkter på sidan.**
- [ ]  …vill jag kunna välja att betala med faktura.
- [ ]  …vill jag kunna välja att betala med kort.

### Som butiksägare 
- [ ]  …vill jag kunna erbjuda fasta fraktalternativ.
- [ ]  …vill jag erbjuda gratis frakt vid köp över ett visst pris.
- [ ]  …vill jag kunna erbjuda periodiska betalningar (prenumerationer, m m)