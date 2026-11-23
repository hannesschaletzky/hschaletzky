---
titel: PHP-Sicherheitslücke:
hervorhebung: Ist meine Website betroffen?
beschreibung: Was hinter den Meldungen über Lücken in PHP steckt, wie Sie in fünf Minuten selbst prüfen, ob Ihre Website betroffen ist, und was Vereine tun können, wenn sich niemand mehr um die Seite kümmert.
datum: 2026-11-16
thema: Sicherheit
angebot: /websites/sicherheit#php
angebotTitel: Website-Sicherheit
angebotText: Ich prüfe, wo Ihre Website steht, behebe die dringenden Punkte und halte sie danach aktuell. Der Check-up kostet 250 €, die Wartung für WordPress-Seiten 60 € im Monat.
entwurf: nein
---

Alle paar Monate taucht in den Nachrichten eine Sicherheitslücke in PHP auf. Wer eine Website hat, fragt sich dann zu Recht: Betrifft mich das? Die ehrliche Antwort lautet: vielleicht. Das hängt von zwei Dingen ab, die Sie in wenigen Minuten selbst herausfinden können.

## Was PHP mit Ihrer Website zu tun hat.

PHP ist eine Programmiersprache, die auf dem Server läuft, also auf dem Rechner, auf dem Ihre Website liegt. WordPress ist in PHP geschrieben, ebenso Joomla, TYPO3 und viele Vereins- und Shop-Systeme. Wenn Ihre Website mit einem dieser Systeme gebaut ist, läuft sie mit PHP. Bei den meisten kleinen Websites ist das so.

Von PHP gibt es verschiedene Versionen. Jede bekommt einige Jahre lang Sicherheitsupdates, danach nicht mehr. Wird in einer alten Version eine Lücke gefunden, wird sie nicht mehr geschlossen.

## Warum gerade kleine Websites gefährdet sind.

Viele denken, ihre Seite sei zu unwichtig für einen Angriff. Leider stimmt das nicht. Die meisten Angriffe sind nicht gezielt. Programme durchsuchen rund um die Uhr das Internet nach Seiten mit bekannten Lücken und probieren sie automatisch aus. Ob dahinter ein Konzern steckt oder ein Sportverein, spielt dabei keine Rolle.

Eine gehackte Seite wird dann zum Beispiel genutzt, um Spam zu verschicken, Besucher auf Betrugsseiten umzuleiten oder Schadsoftware zu verteilen. Oft merkt das monatelang niemand, bis Google die Seite als gefährlich markiert oder der Anbieter sie sperrt.

## So prüfen Sie, ob Sie betroffen sind.

Entscheidend sind zwei Fragen: Welche PHP-Version nutzt Ihre Website, und wird sie noch mit Updates versorgt?

**Wenn Ihre Website mit WordPress läuft,** melden Sie sich an und öffnen Sie *Werkzeuge → Website-Zustand*. Im Reiter *Bericht* finden Sie unter *Server* die PHP-Version. WordPress warnt dort auch selbst, wenn die Version veraltet ist.

**Bei anderen Systemen** finden Sie die Version im Kundenbereich Ihres Hosting-Anbieters, also dort, wo Sie auch Domain und E-Mail verwalten. Bei den meisten Anbietern gibt es einen Punkt wie *PHP-Einstellungen* oder *PHP-Version*.

Vergleichen Sie die Version dann mit der [Liste der unterstützten Versionen auf php.net](https://www.php.net/supported-versions.php). Steht Ihre Version dort nicht mehr, bekommt sie keine Sicherheitsupdates, und Sie sollten handeln.

## Wer ist zuständig?

Das ist oft die eigentliche Frage. Grob gilt:

- **Ihr Hosting-Anbieter** spielt die Updates für die PHP-Version ein, die Sie eingestellt haben. Ob Sie auf eine neuere Version wechseln, entscheiden aber meistens Sie. Manche Anbieter stellen alte Versionen irgendwann zwangsweise um oder verlangen Aufpreis für den Weiterbetrieb.
- **Für WordPress, Plugins und Themes** ist zuständig, wer die Seite betreut. Ohne Wartungsvertrag sind das Sie selbst.

Bei Vereinen kommt eine typische Lücke dazu: Die Website hat vor Jahren ein Mitglied gebaut, das sich inzwischen um anderes kümmert oder gar nicht mehr dabei ist. Die Zugangsdaten liegen irgendwo, und niemand fühlt sich verantwortlich. Genau solche Seiten laufen oft mit uralter Software.

Wenn das bei Ihnen so ist, ist der erste Schritt nicht technisch: Klären Sie, wer die Zugänge zu Hosting, Domain und Website hat, und legen Sie sie an einem Ort ab, den der Vorstand kennt.

## Was tun, wenn die Version veraltet ist?

Ein Update der PHP-Version ist meist nur ein Klick im Kundenbereich. Trotzdem sollten Sie es nicht einfach ausprobieren. Ältere Plugins oder Themes vertragen eine neue PHP-Version manchmal nicht, und dann zeigt die Seite nur noch eine Fehlermeldung.

So gehen Sie sicher vor:

1. Machen Sie eine vollständige Sicherung, Dateien und Datenbank. Viele Anbieter bieten das im Kundenbereich an.
2. Bringen Sie WordPress, Plugins und Theme auf den neuesten Stand. Plugins, die seit Jahren keine Updates mehr bekommen haben, sollten Sie ersetzen.
3. Stellen Sie dann die PHP-Version um und prüfen Sie die wichtigsten Seiten, das Kontaktformular und gegebenenfalls den Mitgliederbereich.
4. Geht etwas schief, stellen Sie die alte Version wieder ein und holen sich Hilfe.

Wer sich das nicht zutraut, ist damit nicht allein. Es ist völlig in Ordnung, das jemandem zu überlassen, der es regelmäßig macht.

## Mein Rat.

Schauen Sie einmal nach, welche PHP-Version Ihre Website nutzt. Das dauert fünf Minuten und gibt Ihnen Klarheit. Ist sie aktuell und kümmert sich jemand um die Updates, ist alles gut. Ist sie veraltet oder weiß niemand so genau, wer zuständig ist, sollten Sie das bald angehen, nicht erst, wenn die Seite gehackt ist.

Wenn Sie Unterstützung möchten: Im Website-Check-up sehe ich mir Ihre Seite von außen an, ohne dass Sie mir Zugangsdaten geben müssen, und sage Ihnen, was dringend ist und was warten kann.
