import type { MetaFunction } from "react-router";
import LegalPage, { LegalSection } from "~/components/site/legalPage";

export const meta: MetaFunction = () => [
  { title: "Impressum | Hannes Schaletzky" },
  { name: "robots", content: "noindex" },
];

export default function Impressum() {
  return (
    <LegalPage title="Impressum" updated="November 2026">
      <LegalSection title="Angaben gemäß § 5 DDG">
        <p>
          Hannes Schaletzky
          <br />
          Fasanenstraße 38
          <br />
          10719 Berlin
        </p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          E-Mail:{" "}
          <a
            href="mailto:info@hschaletzky.com"
            className="text-teal underline underline-offset-4"
          >
            info@hschaletzky.com
          </a>
          <br />
          Telefon:{" "}
          <a
            href="tel:+491628525830"
            className="text-teal underline underline-offset-4"
          >
            +49 162 8525830
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Wirtschafts-Identifikationsnummer">
        <p>
          Wirtschafts-Identifikationsnummer gemäß § 139c Abgabenordnung:
          DE418915944-00001
        </p>
      </LegalSection>

      <LegalSection title="Berufsbezeichnung">
        <p>Freiberuflicher Softwareentwickler</p>
      </LegalSection>

      <LegalSection title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
        <p>
          Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte">
        <p>
          Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Ich bin jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend
          entfernen.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Links">
        <p>
          Mein Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
          Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich.
        </p>
        <p>
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
          Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt
          der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
          der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
          Rechtsverletzungen werde ich derartige Links umgehend entfernen.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde
          ich derartige Inhalte umgehend entfernen.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
