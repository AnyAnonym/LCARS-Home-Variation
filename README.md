# LCARS-Home-Variation
making a LCARS interface for Home Automation

this is a project for my Home, in which I have a Siemens and Beckhoff SPS.
I mainly want to controll the LED Lights.
But I also want to replace my old HMI through this in the near future.

Help is always appreciated.

## Ordnerstruktur

Das Projekt ist wie folgt strukturiert:

```
LCARS-Home-Variation/
├── README.md                    # Diese Datei mit Projektbeschreibung
|                                # Hauptordner für die Weboberfläche
├── docs/                        # Dokumentation
│   └── README.md                # Detaillierte Anweisungen für die Website
├── package.json                 # Node.js Abhängigkeiten für den Server
├── plc/                         # Code für die Kommunikation mit SPS (Siemens/Beckhoff)
├── public/                      # Statische Webdateien
│   ├── css/                     # Stylesheets (z.B. LCARS-Design)
│   ├── images/                  # Bilder und Assets
│   ├── index.html               # Haupt-HTML-Seite
│   └── js/                      # JavaScript-Dateien für die Interaktion
└── server/                      # Backend-Server-Code
│   └── app.js                   # Express-Server für API-Endpunkte
└── .git/                        # Git-Repository-Daten
```

### Erklärung der Ordner:
- **Website/public/**: Enthält die statischen Dateien der Weboberfläche (HTML, CSS, JS, Bilder).
- **Website/server/**: Backend-Code, der die Kommunikation zwischen Weboberfläche und SPS handhabt.
- **Website/plc/**: Spezifischer Code für die SPS-Integration (z.B. Modbus, Profinet).
- **Website/docs/**: Zusätzliche Dokumentation und Anleitungen.

Die Struktur kann bei Bedarf angepasst werden, z.B. ohne den `Website/`-Ordner, indem die Unterordner direkt ins Root-Verzeichnis verschoben werden.
