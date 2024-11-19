1. OWASP står för: Open Worldwide Application Security Project. Det är en ideell stiftelse, dedikerad till att förbättra mjukvarusäkerheten. De jobbar under en "öppen gemenskap"-modell, och innebär att vem som helst kan delta i och bidra till OWASP-relaterade onlinechattar, projekt och mer.

2. Injektion är en typ av attack som inträffar när osäker data skickas till en programmerare, till exempel genom formdata eller en annan dataöverföring i en webbapplikation. Detta kan leda till att skadlig kod utförs av programmet, vilket riskerar dess säkerhet.

3. De absolut bästa idag är att kräva tvåfaktorsautentisering (2FA): Detta innebär att användaren, utöver sitt lösenord, måste ange en extra verifieringsmetod, till exempel en kod skickad till deras mobiltelefon eller genererad av en autentiseringsapp.

Ett annat alternativ är att begränsa upprepade inloggningsförsök. Genom att införa hastighetsbegränsning kan systemet förhindra eller fördröja flera snabba inloggningsförsök från samma källa. Detta motverkar automatiserade attacker eller kan även motverka DDoS-attacker. Felkod: 429.

4. Osäker deserialisering uppstår när data från opålitliga källor omvandlas eller “deserialiseras”, vilket kan få allvarliga konsekvenser, såsom DDoS-attacker och åtkomst till fjärrstyrning.
   Det säkraste sättet att skydda sig är att aldrig tillåta deserialisering av data från okända eller opålitliga källor. Det är även bra att övervaka och implementera typkontroller vilket innebär att hålla koll på processen där data omvandlas och se till att bara rätt typ av data hanteras. Mer om det i nästa fråga.

5. Cross-Site Scripting (XSS) är en svaghet som gör att en attack kan ta del av skadlig kod i en webbsida där kod körs av en användares webbläsare. Angriparen kan då stjäla information, modifiera innehåll eller vidta andra åtgärder på webbplatsen, som vanligen sker genom missbruk av otillräcklig kontroll av data som matas in av användare.

Figurativt så skulle jag dra sig till en pålitlig VPN men enligt artikeln så rekommenderas:

Input av giltig data – För att hantera giltig data behöver man skapa mekanismer som kontrollerar informationen användare skickar genom formulär. Målet är att säkerställa att endast verifierad och säker data accepteras.
Till exempel, om en webbplats begär användarens namn, kan man begränsa inmatningen till enbart bokstäver och siffror för att förhindra att skadlig kod används i ett formulärfält, vilket kan utnyttjas för attacker på andra användares webbläsare.

Sanering av data – När data har skickats säkerställs all potentiell skadlig kod tas bort innan den visas på en webbsida. Detta är ett kritiskt steg för att förhindra XSS-attacker som kan inträffa efter att data har bearbetats.
