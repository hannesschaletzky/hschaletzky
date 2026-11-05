import type { MetaFunction } from "react-router";
import LegalPage, { LegalSection } from "~/components/site/legalPage";

export const meta: MetaFunction = () => [
  { title: "Widerrufsbelehrung | Hannes Schaletzky" },
  { name: "robots", content: "noindex" },
];

// statutory model text for services (Anlage 1 und 2 zu Art. 246a EGBGB),
// only relevant for consumers; it is also sent along with every offer
export default function Widerruf() {
  return (
    <LegalPage title="Widerrufsbelehrung" updated="November 2026">
      <p>
        Die folgende Belehrung gilt für Verbraucher im Sinne von § 13 BGB. Für
        Unternehmen, Selbstständige und Vereine, die im Rahmen ihrer
        geschäftlichen Tätigkeit bestellen, besteht kein gesetzliches
        Widerrufsrecht.
      </p>

      <LegalSection title="Widerrufsrecht">
        <p>
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
          diesen Vertrag zu widerrufen.
        </p>
        <p>
          Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des
          Vertragsabschlusses.
        </p>
        <p>
          Um Ihr Widerrufsrecht auszuüben, müssen Sie mich (Hannes Schaletzky,
          Fasanenstraße 38, 10719 Berlin, Telefon: +49 162 8525830, E-Mail:
          info@hschaletzky.com) mittels einer eindeutigen Erklärung (z. B. ein
          mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss,
          diesen Vertrag zu widerrufen, informieren. Sie können dafür das unten
          stehende Muster-Widerrufsformular verwenden, das jedoch nicht
          vorgeschrieben ist.
        </p>
        <p>
          Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung
          über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
          absenden.
        </p>
      </LegalSection>

      <LegalSection title="Folgen des Widerrufs">
        <p>
          Wenn Sie diesen Vertrag widerrufen, habe ich Ihnen alle Zahlungen, die
          ich von Ihnen erhalten habe, unverzüglich und spätestens binnen
          vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
          Ihren Widerruf dieses Vertrags bei mir eingegangen ist. Für diese
          Rückzahlung verwende ich dasselbe Zahlungsmittel, das Sie bei der
          ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen
          wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden
          Ihnen wegen dieser Rückzahlung Entgelte berechnet.
        </p>
        <p>
          Haben Sie verlangt, dass die Dienstleistungen während der
          Widerrufsfrist beginnen sollen, so haben Sie mir einen angemessenen
          Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie
          mich von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags
          unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum
          Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
        </p>
      </LegalSection>

      <LegalSection title="Vorzeitiges Erlöschen des Widerrufsrechts">
        <p>
          Das Widerrufsrecht erlischt vorzeitig, wenn ich die Dienstleistung
          vollständig erbracht habe und mit der Ausführung erst begonnen habe,
          nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben und
          gleichzeitig bestätigt haben, dass Sie wissen, dass Sie Ihr
          Widerrufsrecht bei vollständiger Vertragserfüllung durch mich
          verlieren.
        </p>
      </LegalSection>

      <LegalSection title="Muster-Widerrufsformular">
        <p>
          Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses
          Formular aus und senden Sie es zurück.
        </p>
        <div className="space-y-3 rounded-xl border border-white/10 px-5 py-4">
          <p>
            An Hannes Schaletzky, Fasanenstraße 38, 10719 Berlin, E-Mail:
            info@hschaletzky.com
          </p>
          <p>
            Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
            Vertrag über die Erbringung der folgenden Dienstleistung:
          </p>
          <p>Bestellt am:</p>
          <p>Name des/der Verbraucher(s):</p>
          <p>Anschrift des/der Verbraucher(s):</p>
          <p>
            Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):
          </p>
          <p>Datum:</p>
          <p className="text-sm text-slate-400">
            (*) Unzutreffendes streichen.
          </p>
        </div>
      </LegalSection>
    </LegalPage>
  );
}
