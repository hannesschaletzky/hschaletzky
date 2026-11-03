import type { MetaFunction } from "react-router";
import LegalPage, {
  ExternalLink,
  LegalSection,
} from "~/components/site/legalPage";

export const meta: MetaFunction = () => [
  { title: "Datenschutzerklärung | Hannes Schaletzky" },
  { name: "robots", content: "noindex" },
];

export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung" updated="November 2026">
      <LegalSection title="1. Verantwortlicher">
        <p>
          Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser
          Website ist:
        </p>
        <p>
          Hannes Schaletzky
          <br />
          Fasanenstraße 38
          <br />
          10719 Berlin
          <br />
          E-Mail: info@hschaletzky.com
        </p>
      </LegalSection>

      <LegalSection title="2. Hosting">
        <p>
          Diese Website läuft auf einem Server, den ich bei der Hetzner Online
          GmbH, Industriestr. 25, 91710 Gunzenhausen, miete. Der Server steht in
          einem Rechenzentrum in Nürnberg, eine Übermittlung in Länder außerhalb
          der EU findet nicht statt. Mit Hetzner besteht ein Vertrag zur
          Auftragsverarbeitung nach Art. 28 DSGVO. Weitere Informationen finden
          Sie in der{" "}
          <ExternalLink href="https://www.hetzner.com/legal/privacy-policy">
            Datenschutzerklärung von Hetzner
          </ExternalLink>
          .
        </p>
        <p>
          Rechtsgrundlage für das Hosting ist Art. 6 Abs. 1 lit. f DSGVO; das
          berechtigte Interesse liegt in einer sicheren, schnellen und
          zuverlässigen Bereitstellung der Website.
        </p>
      </LegalSection>

      <LegalSection title="3. Server-Log-Dateien">
        <p>
          Bei jedem Aufruf der Website werden automatisch Informationen in
          sogenannten Server-Log-Dateien gespeichert. Dazu gehören insbesondere:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>aufgerufene Seiten bzw. Dateien und übertragene Datenmenge</li>
          <li>Referrer-URL</li>
          <li>Browsertyp und Betriebssystem</li>
        </ul>
        <p>
          Die Verarbeitung dient dem sicheren und stabilen Betrieb der Website
          sowie der Erkennung und Abwehr von Störungen und Angriffen.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Log-Dateien werden
          nach 14 Tagen automatisch gelöscht.
        </p>
      </LegalSection>

      <LegalSection title="4. Schriftarten">
        <p>
          Die auf dieser Website verwendeten Schriftarten werden direkt vom
          eigenen Hosting geladen. Es findet keine Verbindung zu Servern von
          Google oder anderen Schriftart-Anbietern statt.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies und Analysewerkzeuge">
        <p>
          Diese Website verwendet keine Cookies und keine Analyse- oder
          Tracking-Werkzeuge. Sollte sich das ändern, wird diese
          Datenschutzerklärung entsprechend angepasst.
        </p>
      </LegalSection>

      <LegalSection title="6. Kontakt per E-Mail">
        <p>
          Wenn Sie mir eine E-Mail schreiben, verarbeite ich Ihre Angaben (z. B.
          Name, E-Mail-Adresse, Inhalt der Nachricht), um Ihre Anfrage zu
          beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern
          Ihre Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen
          zusammenhängt, und im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
          Interesse an der Beantwortung von Anfragen).
        </p>
        <p>
          Für E-Mails nutze ich Microsoft 365 (Microsoft Ireland Operations
          Limited, One Microsoft Place, South County Business Park,
          Leopardstown, Dublin 18, Irland). Ihre Nachrichten werden gelöscht,
          sobald sie nicht mehr erforderlich sind, sofern keine gesetzlichen
          Aufbewahrungspflichten bestehen.
        </p>
      </LegalSection>

      <LegalSection title="7. Externe Links">
        <p>
          Diese Website enthält Links zu externen Angeboten wie LinkedIn, GitHub
          und cal.com. Daten werden erst übertragen, wenn Sie einen solchen Link
          anklicken; ab dann gilt die Datenschutzerklärung des jeweiligen
          Anbieters.
        </p>
        <p>
          Für die Buchung von Gesprächsterminen verlinke ich auf cal.com
          (Cal.com, Inc., USA). Wenn Sie dort einen Termin buchen, werden die
          von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse,
          Terminwunsch) von cal.com verarbeitet und an mich übermittelt, damit
          ich das Gespräch vorbereiten und durchführen kann. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. b DSGVO. Weitere Informationen finden Sie in der{" "}
          <ExternalLink href="https://cal.com/privacy">
            Datenschutzerklärung von cal.com
          </ExternalLink>
          .
        </p>
      </LegalSection>

      <LegalSection title="8. Ihre Rechte">
        <p>
          Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf
          Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17),
          Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit
          (Art. 20). Einer Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f
          DSGVO können Sie aus Gründen, die sich aus Ihrer besonderen Situation
          ergeben, widersprechen (Art. 21 DSGVO).
        </p>
        <p>
          Außerdem haben Sie das Recht, sich bei einer
          Datenschutz-Aufsichtsbehörde zu beschweren, zum Beispiel bei der
          Berliner Beauftragten für Datenschutz und Informationsfreiheit (
          <ExternalLink href="https://www.datenschutz-berlin.de">
            datenschutz-berlin.de
          </ExternalLink>
          ).
        </p>
      </LegalSection>

      <LegalSection title="9. Pflicht zur Bereitstellung von Daten">
        <p>
          Für den rein informatorischen Aufruf der Website müssen Sie keine
          zusätzlichen Angaben zu Ihrer Person machen. Technisch erforderliche
          Verbindungsdaten werden jedoch verarbeitet, damit die Website
          ausgeliefert werden kann.
        </p>
      </LegalSection>

      <LegalSection title="10. Aktualität">
        <p>
          Diese Datenschutzerklärung wird angepasst, wenn sich die Website oder
          die eingesetzten Dienste ändern.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
