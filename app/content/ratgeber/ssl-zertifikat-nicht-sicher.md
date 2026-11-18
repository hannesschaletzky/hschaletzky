---
titel: Das Schloss im Browser fehlt:
hervorhebung: SSL einfach erklärt.
beschreibung: Ihr Browser zeigt bei Ihrer Website „Nicht sicher“? Was ein SSL-Zertifikat ist, warum es heute Pflicht ist, was es kostet (meist nichts) und wie Sie die Warnung loswerden.
datum: 2027-01-05
thema: Sicherheit
angebot: /websites/sicherheit
angebotTitel: Website-Sicherheit
angebotText: Ich richte SSL richtig ein, behebe die Ursache von Warnungen und sorge dafür, dass sich das Zertifikat von allein erneuert.
entwurf: nein
---

Sie öffnen Ihre eigene Website, und neben der Adresse steht „Nicht sicher“. Oder ein Kunde schickt Ihnen einen Screenshot mit einer großen Warnseite. Das wirkt alarmierend, ist aber meistens schnell behoben. Wichtig ist nur, die Ursache zu kennen.

## Was das Schloss bedeutet.

Das Schloss in der Adresszeile zeigt, dass die Verbindung zwischen Besucher und Website verschlüsselt ist. Chrome hat das Schloss inzwischen durch ein schlichtes Einstellungssymbol ersetzt, Firefox und Safari zeigen es weiterhin. Die Warnung „Nicht sicher“ gibt es aber überall. Was jemand in Ihr Kontaktformular tippt, kann unterwegs niemand mitlesen. Die Adresse beginnt dann mit `https://` statt `http://`.

Damit das funktioniert, braucht die Website ein Zertifikat, oft SSL-Zertifikat genannt. Es bestätigt, dass die Seite wirklich zu Ihrer Domain gehört.

Fehlt es, warnen alle gängigen Browser. Viele Besucher brechen dann ab, und auch Google bewertet Seiten ohne Verschlüsselung schlechter. Für eine Seite mit Kontaktformular ist es außerdem datenschutzrechtlich praktisch Pflicht.

## Was es kostet.

In den allermeisten Fällen nichts. Die gemeinnützige Organisation Let’s Encrypt stellt Zertifikate kostenlos aus, und fast alle Hosting-Anbieter bieten sie im Kundenbereich an, oft mit einem einzigen Klick. Für eine normale Website reicht so ein kostenloses Zertifikat völlig.

Bezahlte Zertifikate gibt es auch. Für kleine Betriebe und Vereine bringen sie in der Regel keinen Vorteil. Wenn Ihnen jemand eins für 100 € im Jahr verkaufen will, fragen Sie ruhig nach, warum.

## Die häufigsten Ursachen für die Warnung.

**Es gibt gar kein Zertifikat.** Bei älteren Hosting-Verträgen muss man es oft selbst aktivieren. Schauen Sie im Kundenbereich nach einem Punkt wie *SSL*, *HTTPS* oder *Let’s Encrypt*.

**Das Zertifikat ist abgelaufen.** Zertifikate gelten nur eine begrenzte Zeit und müssen regelmäßig erneuert werden. Die Laufzeiten werden in den nächsten Jahren sogar noch kürzer. Bei Let’s Encrypt passiert die Erneuerung normalerweise automatisch. Wenn sie einmal hakt, steht plötzlich eine Warnseite vor Ihrer Website.

**Das Zertifikat passt nicht zur Adresse.** Es gilt etwa für `ihr-betrieb.de`, aber nicht für `www.ihr-betrieb.de`. Dann funktioniert die eine Schreibweise, die andere nicht.

**Gemischte Inhalte.** Die Seite selbst ist verschlüsselt, lädt aber einzelne Bilder oder Skripte noch über `http://`. Der Browser meldet dann, dass die Verbindung nicht vollständig sicher ist. Das passiert oft nach einer Umstellung, wenn alte Links im Inhalt stehen geblieben sind.

## So prüfen Sie es selbst.

1. Rufen Sie Ihre Seite einmal mit und einmal ohne `www` auf. Bei keiner darf „Nicht sicher“ oder eine Warnseite erscheinen.
2. Tippen Sie die Adresse mit `http://` ein. Sie sollten automatisch auf `https://` weitergeleitet werden.
3. Klicken Sie auf das Symbol links neben der Adresse und dann auf die Angaben zur Verbindung. Dort sehen Sie, bis wann das Zertifikat gültig ist.
4. Prüfen Sie ein paar Unterseiten, besonders die mit Bildern und dem Kontaktformular.

## Mein Rat.

Aktivieren Sie das kostenlose Zertifikat bei Ihrem Anbieter, sorgen Sie für die automatische Weiterleitung auf `https://`, und schauen Sie einmal nach, ob die Erneuerung automatisch läuft. Dann ist das Thema für Jahre erledigt. Wenn die Warnung trotzdem bleibt, steckt meist eine der oben genannten Kleinigkeiten dahinter, und die ist in der Regel schnell gefunden.
