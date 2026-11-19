import { useId, useRef } from "react";
import { useLang, type Lang } from "~/i18n";

// anonymised architecture diagrams for the selected work on the cloud page,
// drawn as inline SVG so they stay sharp, light and translatable

type Text = { de: string; en: string };

export type Diagram = {
  title: Text;
  sub: Text;
  viewBox: string;
  frames: { x: number; y: number; w: number; h: number; label: Text }[];
  nodes: {
    x: number;
    y: number;
    w: number;
    h: number;
    title: Text;
    // "\n" breaks the line
    text?: Text;
    tone?: "highlight" | "external";
  }[];
  edges: {
    points: [number, number][];
    label?: { x: number; y: number; text: Text; onFrame?: boolean };
    dashed?: boolean;
  }[];
};

const xurrent = (x: number, y: number): Diagram["nodes"][number] => ({
  x,
  y,
  w: 150,
  h: 70,
  title: { de: "Xurrent", en: "Xurrent" },
  text: { de: "beim Kunden", en: "at the customer" },
  tone: "external",
});

const aws: Text = {
  de: "AWS · eu-central-1 (Frankfurt)",
  en: "AWS · eu-central-1 (Frankfurt)",
};

const backend: Text = {
  de: "prüft und validiert Anfragen",
  en: "checks and validates requests",
};

const secrets: Text = {
  de: "verschlüsselt je Mandant",
  en: "encrypted per tenant",
};

const writesBack: Text = {
  de: "schreibt Ergebnis zurück",
  en: "writes the result back",
};

export const diagrams = {
  platform: {
    title: {
      de: "Mandantenfähige Integrationsplattform",
      en: "Multi-tenant integration platform",
    },
    sub: {
      de: "Backend, Engine und Integrations-Jobs auf AWS, Anbindung an die Microsoft Cloud des Kunden.",
      en: "Backend, engine and integration jobs on AWS, connected to the customer's Microsoft cloud.",
    },
    viewBox: "30 130 1140 730",
    frames: [
      { x: 250, y: 300, w: 900, h: 540, label: aws },
      {
        x: 640,
        y: 150,
        w: 510,
        h: 120,
        label: {
          de: "Microsoft Cloud des Kunden",
          en: "Customer's Microsoft cloud",
        },
      },
    ],
    nodes: [
      xurrent(50, 520),
      {
        x: 290,
        y: 690,
        w: 210,
        h: 80,
        title: { de: "Backend", en: "Backend" },
        text: backend,
      },
      {
        x: 590,
        y: 690,
        w: 220,
        h: 80,
        title: { de: "Engine", en: "Engine" },
        text: {
          de: "ordnet Prozess zu, startet Job",
          en: "assigns the process, starts the job",
        },
      },
      {
        x: 890,
        y: 690,
        w: 220,
        h: 80,
        title: { de: "Integration", en: "Integration" },
        text: {
          de: "Docker-Job auf ECS/Fargate",
          en: "Docker job on ECS/Fargate",
        },
        tone: "highlight",
      },
      {
        x: 290,
        y: 380,
        w: 210,
        h: 76,
        title: { de: "DynamoDB", en: "DynamoDB" },
        text: {
          de: "Lizenzen, Status, Protokolle",
          en: "licences, status, logs",
        },
      },
      {
        x: 590,
        y: 380,
        w: 220,
        h: 76,
        title: { de: "Secrets Manager", en: "Secrets Manager" },
        text: secrets,
      },
      {
        x: 890,
        y: 380,
        w: 220,
        h: 76,
        title: { de: "Hybrid Worker", en: "Hybrid worker" },
        text: {
          de: "Windows-VM für PowerShell",
          en: "Windows VM for PowerShell",
        },
      },
      {
        x: 670,
        y: 190,
        w: 210,
        h: 64,
        title: { de: "Entra ID", en: "Entra ID" },
        text: { de: "über Graph API", en: "via Graph API" },
      },
      {
        x: 910,
        y: 190,
        w: 210,
        h: 64,
        title: { de: "Exchange Online", en: "Exchange Online" },
        text: { de: "über PowerShell", en: "via PowerShell" },
      },
    ],
    edges: [
      {
        points: [
          [200, 570],
          [290, 715],
        ],
        label: { x: 230, y: 660, text: { de: "Anfrage", en: "request" } },
      },
      {
        points: [
          [500, 730],
          [590, 730],
        ],
      },
      {
        points: [
          [810, 730],
          [890, 730],
        ],
        label: {
          x: 850,
          y: 705,
          text: { de: "startet", en: "starts" },
          onFrame: true,
        },
      },
      {
        points: [
          [890, 700],
          [810, 440],
        ],
        label: {
          x: 835,
          y: 560,
          text: { de: "holt Secret", en: "fetches secret" },
          onFrame: true,
        },
      },
      {
        points: [
          [1000, 690],
          [1000, 456],
        ],
        label: {
          x: 1000,
          y: 600,
          text: { de: "erstellt Job", en: "creates job" },
          onFrame: true,
        },
      },
      {
        points: [
          [1015, 380],
          [1015, 254],
        ],
        label: { x: 1015, y: 330, text: { de: "führt aus", en: "runs" } },
      },
      {
        points: [
          [940, 690],
          [775, 254],
        ],
        label: { x: 820, y: 330, text: { de: "Graph API", en: "Graph API" } },
      },
      {
        points: [
          [395, 690],
          [395, 456],
        ],
        dashed: true,
        label: {
          x: 395,
          y: 600,
          text: { de: "Status", en: "status" },
          onFrame: true,
        },
      },
      {
        points: [
          [700, 690],
          [500, 440],
        ],
        dashed: true,
      },
      {
        points: [
          [1000, 770],
          [1000, 810],
          [125, 810],
          [125, 590],
        ],
        label: { x: 560, y: 810, text: writesBack, onFrame: true },
      },
    ],
  },
  bridge: {
    title: {
      de: "Hybrid-Cloud-Bridge zu On-Prem-Systemen",
      en: "Hybrid cloud bridge to on-premise systems",
    },
    sub: {
      de: "Prozesslogik läuft direkt beim Kunden, nur ausgehendes HTTPS, Aufträge und Ergebnisse asynchron über SQS und S3.",
      en: "Process logic runs inside the customer's environment, outbound HTTPS only, jobs and results asynchronously via SQS and S3.",
    },
    viewBox: "30 130 1140 730",
    frames: [
      {
        x: 250,
        y: 150,
        w: 900,
        h: 250,
        label: {
          de: "Rechenzentrum des Kunden (On-Prem)",
          en: "Customer data centre (on-premise)",
        },
      },
      { x: 250, y: 470, w: 900, h: 370, label: aws },
    ],
    nodes: [
      xurrent(50, 640),
      {
        x: 700,
        y: 220,
        w: 280,
        h: 100,
        title: { de: "Mid-Server", en: "Mid server" },
        text: {
          de: "Docker · nur ausgehendes HTTPS\nführt Skripte lokal aus",
          en: "Docker · outbound HTTPS only\nruns scripts locally",
        },
        tone: "highlight",
      },
      {
        x: 300,
        y: 200,
        w: 200,
        h: 60,
        title: { de: "Active Directory", en: "Active Directory" },
      },
      {
        x: 300,
        y: 290,
        w: 200,
        h: 60,
        title: { de: "Datenbanken", en: "Databases" },
        text: { de: "MS SQL, PostgreSQL", en: "MS SQL, PostgreSQL" },
      },
      {
        x: 290,
        y: 700,
        w: 210,
        h: 80,
        title: { de: "Backend", en: "Backend" },
        text: backend,
      },
      {
        x: 590,
        y: 700,
        w: 220,
        h: 80,
        title: { de: "Engine", en: "Engine" },
        text: { de: "ordnet Prozess zu", en: "assigns the process" },
      },
      {
        x: 590,
        y: 540,
        w: 220,
        h: 70,
        title: { de: "Secrets Manager", en: "Secrets Manager" },
        text: secrets,
      },
      {
        x: 890,
        y: 560,
        w: 220,
        h: 90,
        title: { de: "SQS & S3", en: "SQS & S3" },
        text: {
          de: "Aufträge und Ergebnisse\nasynchron und entkoppelt",
          en: "jobs and results\nasync and decoupled",
        },
      },
    ],
    edges: [
      {
        points: [
          [200, 675],
          [290, 735],
        ],
        label: { x: 240, y: 690, text: { de: "Anfrage", en: "request" } },
      },
      {
        points: [
          [500, 740],
          [590, 740],
        ],
      },
      {
        points: [
          [700, 700],
          [700, 610],
        ],
        label: {
          x: 700,
          y: 655,
          text: { de: "Secret", en: "secret" },
          onFrame: true,
        },
      },
      {
        points: [
          [810, 725],
          [960, 650],
        ],
        label: {
          x: 880,
          y: 700,
          text: { de: "1 Auftrag", en: "1 job" },
          onFrame: true,
        },
      },
      {
        points: [
          [920, 560],
          [800, 320],
        ],
        label: {
          x: 835,
          y: 450,
          text: { de: "2 holt Auftrag", en: "2 fetches job" },
        },
      },
      {
        points: [
          [700, 250],
          [500, 230],
        ],
        label: {
          x: 600,
          y: 225,
          text: { de: "PowerShell", en: "PowerShell" },
          onFrame: true,
        },
      },
      {
        points: [
          [700, 295],
          [500, 320],
        ],
        label: {
          x: 600,
          y: 322,
          text: { de: "SQL", en: "SQL" },
          onFrame: true,
        },
      },
      {
        points: [
          [940, 320],
          [1040, 560],
        ],
        label: {
          x: 1040,
          y: 450,
          text: { de: "3 Ergebnis", en: "3 result" },
        },
      },
      {
        points: [
          [1050, 650],
          [1050, 800],
          [760, 800],
          [760, 780],
        ],
        label: {
          x: 900,
          y: 800,
          text: { de: "4 liest Ergebnis", en: "4 reads result" },
          onFrame: true,
        },
      },
      {
        points: [
          [590, 760],
          [540, 820],
          [125, 820],
          [125, 710],
        ],
        label: { x: 330, y: 820, text: writesBack, onFrame: true },
      },
    ],
  },
  assets: {
    title: {
      de: "Beispiel: Asset-Management",
      en: "Example: asset management",
    },
    sub: {
      de: "Geräte aus drei Quellsystemen werden automatisch vereinheitlicht, abgeglichen und in Xurrent importiert.",
      en: "Devices from three source systems are unified, matched and imported into Xurrent automatically.",
    },
    viewBox: "40 130 1130 630",
    frames: [
      {
        x: 60,
        y: 150,
        w: 330,
        h: 420,
        label: { de: "Quellsysteme", en: "Source systems" },
      },
      {
        x: 460,
        y: 150,
        w: 420,
        h: 590,
        label: { de: "Middleware auf AWS", en: "Middleware on AWS" },
      },
    ],
    nodes: [
      {
        x: 90,
        y: 200,
        w: 270,
        h: 80,
        title: { de: "Client-Management", en: "Client management" },
        text: {
          de: "Clients, Monitore · MS SQL",
          en: "clients, monitors · MS SQL",
        },
        tone: "external",
      },
      {
        x: 90,
        y: 320,
        w: 270,
        h: 80,
        title: { de: "Lagerverwaltung", en: "Warehouse management" },
        text: {
          de: "Geräte, Modelle, Standorte · PostgreSQL",
          en: "devices, models, locations · PostgreSQL",
        },
        tone: "external",
      },
      {
        x: 90,
        y: 440,
        w: 270,
        h: 80,
        title: {
          de: "Mobile Device Management",
          en: "Mobile device management",
        },
        text: {
          de: "Smartphones, Tablets · REST API",
          en: "smartphones, tablets · REST API",
        },
        tone: "external",
      },
      {
        x: 500,
        y: 200,
        w: 340,
        h: 70,
        title: { de: "1 · Daten holen", en: "1 · Collect" },
        text: {
          de: "über Mid-Server beim Kunden und REST",
          en: "via the mid server on site and REST",
        },
      },
      {
        x: 500,
        y: 310,
        w: 340,
        h: 70,
        title: { de: "2 · Vereinheitlichen", en: "2 · Normalise" },
        text: {
          de: "Felder, Kategorien, Hersteller, Modelle",
          en: "fields, categories, manufacturers, models",
        },
      },
      {
        x: 500,
        y: 420,
        w: 340,
        h: 70,
        title: { de: "3 · Abgleichen", en: "3 · Match" },
        text: {
          de: "Seriennummern, Duplikate, letzte Änderung",
          en: "serial numbers, duplicates, last change",
        },
      },
      {
        x: 500,
        y: 530,
        w: 340,
        h: 70,
        title: { de: "4 · Import", en: "4 · Import" },
        text: {
          de: "nur Änderungen, getrennt nach Gerätetyp",
          en: "changes only, split by device type",
        },
        tone: "highlight",
      },
      {
        x: 500,
        y: 640,
        w: 340,
        h: 70,
        title: { de: "5 · Ergebnisbericht", en: "5 · Report" },
        text: {
          de: "was neu, geändert oder fehlerhaft ist",
          en: "what is new, changed or failed",
        },
      },
      {
        x: 960,
        y: 420,
        w: 190,
        h: 90,
        title: { de: "Xurrent", en: "Xurrent" },
        text: {
          de: "Produkte, Kategorien,\nKonfigurationselemente",
          en: "products, categories,\nconfiguration items",
        },
        tone: "external",
      },
    ],
    edges: [
      {
        points: [
          [360, 240],
          [500, 235],
        ],
      },
      {
        points: [
          [360, 360],
          [500, 240],
        ],
      },
      {
        points: [
          [360, 480],
          [500, 245],
        ],
      },
      {
        points: [
          [670, 270],
          [670, 310],
        ],
      },
      {
        points: [
          [670, 380],
          [670, 420],
        ],
      },
      {
        points: [
          [670, 490],
          [670, 530],
        ],
      },
      {
        points: [
          [670, 600],
          [670, 640],
        ],
      },
      {
        points: [
          [840, 565],
          [960, 480],
        ],
        label: { x: 905, y: 545, text: { de: "Import", en: "import" } },
      },
      {
        points: [
          [960, 440],
          [840, 455],
        ],
        dashed: true,
        label: { x: 900, y: 425, text: { de: "Bestand", en: "current data" } },
      },
      {
        points: [
          [840, 675],
          [1055, 675],
          [1055, 510],
        ],
        label: { x: 960, y: 675, text: { de: "Bericht", en: "report" } },
      },
    ],
  },
  // public: drawn from the open-source UseID repos (Paula flow, ADR 0008 and 0011)
  bundesident: {
    title: {
      de: "BundesIdent: Ausweisen mit dem Smartphone",
      en: "BundesIdent: identifying with a smartphone",
    },
    sub: {
      de: "Online-Dienste binden ein Widget ein, die App liest den Personalausweis per NFC. Das Backend vermittelt zum eID-Server und speichert dabei keine Ausweisdaten.",
      en: "Online services embed a widget, the app reads the ID card via NFC. The backend mediates to the eID server and never stores any identity data.",
    },
    viewBox: "20 130 1120 610",
    frames: [
      {
        x: 250,
        y: 290,
        w: 560,
        h: 380,
        label: { de: "DigitalService", en: "DigitalService" },
      },
    ],
    nodes: [
      {
        x: 40,
        y: 150,
        w: 200,
        h: 70,
        title: { de: "Nutzer", en: "User" },
        text: { de: "im mobilen Browser", en: "in the mobile browser" },
        tone: "external",
      },
      {
        x: 460,
        y: 150,
        w: 260,
        h: 80,
        title: { de: "Online-Dienst", en: "Online service" },
        text: {
          de: "einer Behörde oder Firma\nbindet das Widget ein",
          en: "of an authority or company\nembeds the widget",
        },
        tone: "external",
      },
      {
        x: 280,
        y: 330,
        w: 220,
        h: 76,
        title: { de: "Web-Widget", en: "Web widget" },
        text: {
          de: "als iframe im Online-Dienst",
          en: "as an iframe in the service",
        },
      },
      {
        x: 560,
        y: 330,
        w: 220,
        h: 90,
        title: { de: "UseID-Backend", en: "UseID backend" },
        text: {
          de: "Kotlin, Spring Boot\nspeichert keine Ausweisdaten",
          en: "Kotlin, Spring Boot\nstores no identity data",
        },
        tone: "highlight",
      },
      {
        x: 280,
        y: 540,
        w: 220,
        h: 90,
        title: { de: "BundesIdent-App", en: "BundesIdent app" },
        text: {
          de: "iOS und Android\nliest den Ausweis",
          en: "iOS and Android\nreads the ID card",
        },
      },
      {
        x: 560,
        y: 540,
        w: 220,
        h: 76,
        title: { de: "PostgreSQL", en: "PostgreSQL" },
        text: { de: "nur Sitzungsdaten", en: "session data only" },
      },
      {
        x: 40,
        y: 550,
        w: 180,
        h: 70,
        title: { de: "Personalausweis", en: "ID card" },
        text: { de: "mit NFC-Chip", en: "with NFC chip" },
        tone: "external",
      },
      {
        x: 880,
        y: 430,
        w: 240,
        h: 90,
        title: { de: "eID-Server", en: "eID server" },
        text: {
          de: "D-Trust\nentschlüsselt die Ausweisdaten",
          en: "D-Trust\ndecrypts the identity data",
        },
        tone: "external",
      },
    ],
    edges: [
      {
        points: [
          [240, 185],
          [460, 185],
        ],
        label: { x: 350, y: 162, text: { de: "HTTPS", en: "HTTPS" } },
      },
      {
        points: [
          [520, 230],
          [390, 330],
        ],
        label: { x: 440, y: 262, text: { de: "bindet ein", en: "embeds" } },
      },
      {
        points: [
          [650, 230],
          [670, 330],
        ],
        label: {
          x: 700,
          y: 262,
          text: {
            de: "startet Ablauf, holt Ergebnis",
            en: "starts flow, fetches result",
          },
        },
      },
      {
        points: [
          [390, 406],
          [390, 540],
        ],
        dashed: true,
        label: {
          x: 390,
          y: 473,
          text: { de: "Deep Link", en: "deep link" },
          onFrame: true,
        },
      },
      {
        points: [
          [470, 540],
          [600, 420],
        ],
        label: {
          x: 535,
          y: 480,
          text: { de: "holt tcToken", en: "fetches tcToken" },
          onFrame: true,
        },
      },
      {
        points: [
          [670, 420],
          [670, 540],
        ],
      },
      {
        points: [
          [220, 585],
          [280, 585],
        ],
        label: { x: 250, y: 562, text: { de: "NFC", en: "NFC" } },
      },
      {
        points: [
          [780, 375],
          [1000, 375],
          [1000, 430],
        ],
        label: { x: 890, y: 375, text: { de: "SOAP", en: "SOAP" } },
      },
      {
        points: [
          [390, 630],
          [390, 710],
          [1000, 710],
          [1000, 520],
        ],
        label: {
          x: 700,
          y: 710,
          text: {
            de: "verschlüsselte Ausweisdaten",
            en: "encrypted identity data",
          },
        },
      },
    ],
  },
} satisfies Record<string, Diagram>;

const colors = {
  page: "#15233a",
  frame: "#1a2a44",
  border: "#34496b",
  node: "#1f3150",
  external: "#26395a",
  highlight: "#1b3a46",
  teal: "#3fb8a0",
  muted: "#9fb0c6",
};

function DiagramSvg({ diagram, lang }: { diagram: Diagram; lang: Lang }) {
  // own marker id per diagram: a marker inside a closed dialog does not render
  const arrow = useId();
  return (
    <svg
      viewBox={diagram.viewBox}
      role="img"
      aria-label={diagram.title[lang]}
      className="h-auto w-full min-w-[880px]"
    >
      <defs>
        <marker
          id={arrow}
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0 0L10 5L0 10z" fill={colors.teal} />
        </marker>
      </defs>
      {diagram.frames.map((frame) => (
        <g key={frame.label.en}>
          <rect
            x={frame.x}
            y={frame.y}
            width={frame.w}
            height={frame.h}
            rx={16}
            fill={colors.frame}
            stroke={colors.border}
            strokeWidth={1.5}
          />
          <text
            x={frame.x + 16}
            y={frame.y + 26}
            fill="#8fa0b8"
            fontSize={15}
            fontWeight={700}
            letterSpacing="0.12em"
          >
            {frame.label[lang].toUpperCase()}
          </text>
        </g>
      ))}
      {diagram.edges.map((edge, i) => (
        <path
          key={i}
          d={"M " + edge.points.map((p) => p.join(" ")).join(" L ")}
          fill="none"
          stroke={colors.teal}
          strokeWidth={2}
          strokeDasharray={edge.dashed ? "6 5" : undefined}
          markerEnd={`url(#${arrow})`}
        />
      ))}
      {diagram.nodes.map((node) => {
        const lines = node.text?.[lang].split("\n") ?? [];
        // title and text lines centred together in the box
        const top = node.y + node.h / 2 - (lines.length * 17) / 2 + 6;
        return (
          <g key={node.title.en}>
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height={node.h}
              rx={10}
              fill={
                node.tone === "highlight"
                  ? colors.highlight
                  : node.tone === "external"
                    ? colors.external
                    : colors.node
              }
              stroke={node.tone === "highlight" ? colors.teal : colors.border}
              strokeWidth={1.5}
            />
            <text
              x={node.x + node.w / 2}
              y={top}
              textAnchor="middle"
              fill="#fff"
              fontSize={17}
              fontWeight={700}
            >
              {node.title[lang]}
            </text>
            {lines.map((line, j) => (
              <text
                key={line}
                x={node.x + node.w / 2}
                y={top + 21 + j * 17}
                textAnchor="middle"
                fill="#b4c0d0"
                fontSize={13.5}
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}
      {diagram.edges.map((edge, i) => {
        if (!edge.label) return null;
        const label = edge.label.text[lang];
        const width = label.length * 7 + 12;
        return (
          <g key={i}>
            <rect
              x={edge.label.x - width / 2}
              y={edge.label.y - 11}
              width={width}
              height={22}
              rx={4}
              fill={edge.label.onFrame ? colors.frame : colors.page}
            />
            <text
              x={edge.label.x}
              y={edge.label.y + 5}
              textAnchor="middle"
              fill={colors.muted}
              fontSize={13.5}
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// a small link that opens the diagram in a dialog
export default function ArchitectureLink({
  diagram,
  label,
  className = "text-left font-semibold text-teal hover:text-teal-light",
}: {
  diagram: Diagram;
  label: string;
  className?: string;
}) {
  const lang = useLang();
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className={className}
      >
        {label} →
      </button>
      {/* Esc closes the dialog natively, the click only adds closing by the backdrop */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <dialog
        ref={dialog}
        // a click on the backdrop closes the dialog
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current.close();
        }}
        className="m-auto w-[min(72rem,calc(100vw-2rem))] max-w-none rounded-3xl border border-white/10 bg-navy p-0 text-slate-300 backdrop:bg-black/70"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {diagram.title[lang]}
              </h3>
              <p className="mt-2 max-w-3xl leading-relaxed">
                {diagram.sub[lang]}
              </p>
            </div>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label={lang === "de" ? "Schließen" : "Close"}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-xl leading-none text-white transition hover:border-white"
            >
              ×
            </button>
          </div>
          {/* wide diagram: on phones it scrolls sideways */}
          <p className="mt-4 text-sm text-teal md:hidden">
            {lang === "de"
              ? "Zum Ansehen seitlich wischen →"
              : "Swipe sideways to see it all →"}
          </p>
          <div className="mt-6 overflow-x-auto">
            <DiagramSvg diagram={diagram} lang={lang} />
          </div>
          <p className="mt-4 text-sm text-slate-400">
            {lang === "de"
              ? "Vereinfacht und anonymisiert, ohne Kundendaten."
              : "Simplified and anonymised, without customer data."}
          </p>
        </div>
      </dialog>
    </>
  );
}
