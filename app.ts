var ausgedachteZahl: number = Math.floor(Math.random() * 1000);
var restTipps: number = 3;
var tippBlocker: number = 0;
var tippAlsString: string = "";
var anzahlVersuche: number = 5;
let eingabe: HTMLInputElement = <HTMLInputElement>document.getElementById("eingabe");
let ausgabe: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
let tippText: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("tippText");
let tippNumber: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("tippNumber");
let restVersuche: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("restVersuche");
tippNumber.innerHTML = restTipps.toString();
restVersuche.innerHTML = anzahlVersuche.toString();
const tippFunktionen: ((zahl: number) => string)[] = [
    berechneQuersumme,
    istPrimzahl,
    teilbarDurch,
    tippZiffernNachGroesse,
    tippBereichWechselDurchUmdrehen,
    tippVergleichMittlereZifferZuDifferenz,
    hatDoppelteZiffern,
    getFirstNumber,
    ersteHaelfteDerBinaerdarstellung,
    bleibtBeiMultiplikationMit3Unter1000,
    getIntervall,
    addiereErsteUndZweiteZiffer
];
let verbleibendeTipps = [...tippFunktionen];

let pruefenButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("pruefenButton");
pruefenButton.onclick = function (mouseEvent) {
    console.log("CLICK");
    console.log("Der Kollege hat eingeben: ", eingabe.valueAsNumber);
    if (anzahlVersuche > 0) {
        anzahlVersuche = anzahlVersuche - 1;
        tippBlocker = tippBlocker - 1;
        if (isNaN(eingabe.valueAsNumber)) {
            console.log("Keine Zahl eingegeben!");
            ausgabe.innerHTML = "Keine Zahl eingegeben!";
            restVersuche.innerHTML = anzahlVersuche.toString();
            if (anzahlVersuche == 0) {
                ausgabe.innerHTML = "Leider Verloren! Du hast alle Versuche aufgebraucht! Die gesuchte Zahl war: " + ausgedachteZahl.toString() + "! Du kannst das Spiel neustarten, indem du eine neue Zufallszahl generierst";

            }

        }

        if (ausgedachteZahl == eingabe.valueAsNumber) {
            console.log("Volltreffer!");
            restVersuche.innerHTML = anzahlVersuche.toString();

            if (anzahlVersuche == 0) {
                ausgabe.innerHTML = "Puh, gerade noch so! Die gesuchte Zahl ist in der Tat " + ausgedachteZahl + "!";
            } else if (anzahlVersuche == 1) {
                ausgabe.innerHTML = "Sehr gut, Sherlock! Die gesuchte Zahl ist in der Tat " + ausgedachteZahl + "!";
            } else if (anzahlVersuche == 2) {
                ausgabe.innerHTML = "Krass, ich glaub' mein Schwein pfeift! Die gesuchte Zahl ist in der Tat " + ausgedachteZahl + "!";
            } else {
                ausgabe.innerHTML = "Volltreffer, geh Lotto spielen! Die gesuchte Zahl ist in der Tat " + ausgedachteZahl + "!";
            }
        }
        if (ausgedachteZahl < eingabe.valueAsNumber) {
            console.log("Eingegebene Zahl ist zu groß!");
            restVersuche.innerHTML = anzahlVersuche.toString();
            if (anzahlVersuche == 0) {
                ausgabe.innerHTML = "Leider Verloren! Du hast alle Versuche aufgebraucht! Die gesuchte Zahl war: " + ausgedachteZahl.toString() + "! Du kannst das Spiel neustarten, indem du eine neue Zufallszahl generierst";
            } else {
                ausgabe.innerHTML = "Eingegebene Zahl ist zu groß!";
            }
        }
        if (ausgedachteZahl > eingabe.valueAsNumber) {
            console.log("Eingegebene Zahl ist zu klein!");
            restVersuche.innerHTML = anzahlVersuche.toString();
            if (anzahlVersuche == 0) {
                ausgabe.innerHTML = "Du hast alle Versuche aufgebraucht! Die gesuchte Zahl war: " + ausgedachteZahl.toString() + "! Du kannst das Spiel neustarten, indem du eine neue Zufallszahl generierst";
            } else {
                ausgabe.innerHTML = "Eingegebene Zahl ist zu klein!";
            }
        }
    } else {
        ausgabe.innerHTML = "Du hast alle Versuche aufgebraucht! Die gesuchte Zahl war: " + ausgedachteZahl.toString() + "! Du kannst das Spiel neustarten, indem du eine neue Zufallszahl generierst";
    }
}

let generiereNeu: HTMLButtonElement = <HTMLButtonElement>document.getElementById("generiereNeu");
generiereNeu.onclick = function (mouseEvent) {
    ausgedachteZahl = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    console.log("Es wurde eine neue Zahl generiert");
    restTipps = 3;
    tippNumber.innerHTML = restTipps.toString();
    anzahlVersuche = 5;
    tippBlocker = 0;
    tippAlsString = "";
    restVersuche.innerHTML = anzahlVersuche.toString();
    tippText.innerHTML = "";
    ausgabe.innerHTML = "";
    verbleibendeTipps = [...tippFunktionen];

}

let tipp: HTMLButtonElement = <HTMLButtonElement>document.getElementById("tipp");
tipp.onclick = function (mouseEvent) {

    if (tippBlocker <= 0) {
        if (restTipps === 3) {
            restTipps = restTipps - 1;
            tippNumber.innerHTML = restTipps.toString();
            //TO DO
            tippAlsString = tippAlsString + zufallsTippOhneWiederholung(ausgedachteZahl).substring(3);
            tippText.innerHTML = tippAlsString;
            tippBlocker = 2;
        } else if (restTipps === 2) {
            restTipps = restTipps - 1;
            tippNumber.innerHTML = restTipps.toString();
            // TO Do
            tippAlsString = tippAlsString + zufallsTippOhneWiederholung(ausgedachteZahl);
            tippText.innerHTML = tippAlsString;
            tippBlocker = 2;

        } else if (restTipps === 1) {
            restTipps = restTipps - 1;
            tippNumber.innerHTML = restTipps.toString();
            // TO DO
            tippAlsString = tippAlsString + zufallsTippOhneWiederholung(ausgedachteZahl);
            tippText.innerHTML = tippAlsString;
            tippBlocker = 2;
        } else {
            tippText.innerHTML = tippAlsString + "\n// Du hast alle Tipps aufgebraucht!"
        }
    } else {
        if (restTipps === 0) {
            tippText.innerHTML = tippAlsString + "\n// Du hast alle Tipps aufgebraucht!"
        } else {
            tippText.innerHTML = "Du musst noch " + tippBlocker + " Mal versuchen, die gesuchte Zufallszahl zu erraten, bevor du um den nächsten Tipp bitten darfst!"
        }
    }


}

function berechneQuersumme(zahl: number): string {
    return "\n// Die Quersumme der gesuchten Zahl beträgt: " + zahl.toString().split('').map(Number).reduce((a: any, b: any) => a + b, 0) + ".";
}


function istPrimzahl(number: number): string {
    if (number <= 1 || number % 2 === 0) {
        if (ausgedachteZahl >= 666) {
            return "\n// Die Zufahlszahl ist keine Primzahl größer-gleich 666!"
        } else if (ausgedachteZahl >= 333 && ausgedachteZahl <= 666) {
            return "\n// Die Zufahlszahl ist keine Primzahl und liegt zwischen 333 und 666!"
        } else {
            return "\n// Die Zufahlszahl ist keine Primzahl und ist kleiner als 333!"
        }
    }
    if (number === 2) return "\n// Die Zufahlszahl ist eine Primzahl kleiner 500!";        // 2 ist eine Primzahl

    // Nur ungerade Teiler bis zur Quadratwurzel prüfen
    const wurzel = Math.sqrt(number);
    let prim: boolean = true;
    for (let i = 3; i <= wurzel; i += 2) {
        if (number % i === 0) prim = false;
    }

    if (prim) {
        if (ausgedachteZahl >= 666) {
            return "\n// Die Zufahlszahl ist eine Primzahl größer-gleich 666!"
        } else if (ausgedachteZahl >= 333 && ausgedachteZahl <= 666) {
            return "\n// Die Zufahlszahl ist eine Primzahl und liegt zwischen 333 und 666!"
        } else {
            return "\n// Die Zufahlszahl ist eine Primzahl und ist kleiner als 333!"
        }
    } else {
        if (ausgedachteZahl >= 666) {
            return "\n// Die Zufahlszahl ist keine Primzahl größer-gleich 666!"
        } else if (ausgedachteZahl >= 333 && ausgedachteZahl <= 666) {
            return "\n// Die Zufahlszahl ist keine Primzahl und liegt zwischen 333 und 666!"
        } else {
            return "\n// Die Zufahlszahl ist keine Primzahl und ist kleiner als 333!"
        }
    }
}

function getFirstNumber(number: number): string {
    const ziffern = number.toString().split('');
    return "\n// Die erste Ziffer der gesuchten Zahl lautet " + Number(ziffern[0]) + "."

}

function getIntervall(number: number): string {
    return "\n// Die Zahl liegt zwischen " + (number - 85) + " und " + (number + 114) + "."
}

function hatDoppelteZiffern(zahl: number): string {
    const ziffern = zahl.toString().split('');
    const gesehen = new Set<string>();

    for (const ziffer of ziffern) {
        if (gesehen.has(ziffer)) {
            return "\n// Die gesuchte Zahl hat mindestens eine identische Ziffer und ist " + ziffern.length + " Ziffern lang."
        }
        gesehen.add(ziffer);
    }

    return "\n// Die gesuchte Zahl hat keine identische Ziffer und ist " + ziffern.length + " Ziffern lang.";

}

function addiereErsteUndZweiteZiffer(zahl: number): string {
    const ziffern = Math.abs(zahl).toString(); // Negativzeichen ignorieren
    const erste = Number(ziffern[0]);
    if (ziffern.length < 2) {
        return "\n// Die Wurzel der ersten Ziffer der gesuchten Zahl beträgt " + Number(Math.sqrt(zahl).toFixed(2)) + ".";
    }

    const zweite = Number(ziffern[1]);
    return "\n// Die Summe der ersten und zweiten Ziffer der gesuchten Zahl beträgt " + (erste + zweite) + ".";
}

function bleibtBeiMultiplikationMit3Unter1000(zahl: number): string {
    if (zahl * 3 < 1000) {
        if (Math.floor(zahl / 2) < 100) {
            return "\n// Wenn man die gesuchte Zahl mit 3 multipliziert, bleibt das Produkt unter 1000. Und wenn man sie halbiert, wird daraus eine zweistellige Zahl.";
        } else {
            return "\n// Wenn man die gesuchte Zahl mit 3 multipliziert, bleibt das Produkt unter 1000. Und wenn man sie halbiert, bleibt es bei einer dreistelligen Zahl.";
        }
    } else if (zahl * 3 <= 1000 && zahl * 3 <= 1500) {
        return "\n// Wenn man die gesuchte Zahl mit 3 multipliziert, landet man bei einer Zahl zwischen 1000 und 1500!";
    } else if (zahl * 3 <= 1500 && zahl * 3 <= 2000) {
        return "\n// Wenn man die gesuchte Zahl mit 3 multipliziert, landet man bei einer Zahl zwischen 1500 und 2000!";
    } else if (zahl * 3 <= 2000 && zahl * 3 <= 2500) {
        return "\n// Wenn man die gesuchte Zahl mit 3 multipliziert, landet man bei einer Zahl zwischen 2000 und 2500!";
    } else {
        return "\n// Wenn man die gesuchte Zahl mit 3 multipliziert, übersteigt das Produkt die 2500!";
    }
}

function ersteHaelfteDerBinaerdarstellung(zahl: number): string {
    const bin = Math.abs(zahl).toString(2);

    // Führende Null hinzufügen, wenn die Länge der Binärdarstellung ungerade ist
    const binMitFuehrenderNull = bin.length % 2 !== 0 ? '0' + bin : bin;

    const haelfteLaenge = binMitFuehrenderNull.length / 2;
    return "\n// Die erste Hälfte der gesuchten Zahl (Leserichtung) in Binärdarstellung lautet " + binMitFuehrenderNull.slice(0, haelfteLaenge) + ".";
}

function tippVergleichMittlereZifferZuDifferenz(zahl: number): string {
    const ziffern = Math.abs(zahl).toString();

    if (ziffern.length !== 3) {
        return "\n// Dieser Tipp gilt nur für dreistellige Zahlen.";
    }

    const erste = Number(ziffern[0]);
    const mitte = Number(ziffern[1]);
    const letzte = Number(ziffern[2]);

    const differenz = Math.abs(erste - letzte);

    if (mitte === differenz) {
        return "\n// Die mittlere Ziffer entspricht genau der Differenz der äußeren Ziffern (erste Ziffer minus letzte Ziffer).";
    } else if (mitte > differenz) {
        return "\n// Die mittlere Ziffer ist größer als die Differenz der äußeren Ziffern (erste Ziffer minus letzte Ziffer).";
    } else {
        return "\n// Die mittlere Ziffer ist kleiner als die Differenz der äußeren Ziffern (erste Ziffer minus letzte Ziffer).";
    }
}

function tippBereichWechselDurchUmdrehen(zahl: number): string {
    const original = Math.abs(zahl);
    const umgedreht = Number(original.toString().split('').reverse().join(''));

    function bereich(n: number): string {
        if (n <= 332) return '(0–332)';
        if (n <= 666) return '(333–666)';
        return '(667–1000)';
    }

    const bereichOriginal = bereich(original);
    const bereichUmdrehen = bereich(umgedreht);

    if (bereichOriginal !== bereichUmdrehen) {
        return `\n// Beim Umdrehen der gesuchten Zahl wechselt die gedrehte Zahl in den Bereich ${bereichUmdrehen}.`;
    } else {
        return `\n// Das Umdrehen der gesuchten Zahl verändert den Bereich nicht – die Zahl bleibt in ${bereichOriginal}.`;
    }
}

function teilbarDurch(zahl: number): string {
    const teiler = [];

    for (let i = 1; i <= 9; i++) {
        if (zahl % i === 0) {
            teiler.push(i);
        }
    }
    if (teiler.length < 2) {
        for (let i1 = 10; i1 <= 19; i1++) {
            if (zahl % i1 === 0) {
                teiler.push(i1);
            }
        }
    }
    if (teiler.length < 2) {
        for (let i2 = 20; i2 <= 29; i2++) {
            if (zahl % i2 === 0) {
                teiler.push(i2);
            }
        }
    }
    if (teiler.length < 2) {
        for (let i3 = 30; i3 <= 39; i3++) {
            if (zahl % i3 === 0) {
                teiler.push(i3);
            }
        }
    }
    if (teiler.length < 2) {
        for (let i4 = 40; i4 <= 49; i4++) {
            if (zahl % i4 === 0) {
                teiler.push(i4);
            }
        }
    }
    if (teiler.length < 2) {
        for (let i5 = 50; i5 <= 59; i5++) {
            if (zahl % i5 === 0) {
                teiler.push(i5);
            }
        }
    }
    if (teiler.length < 2) {
        for (let i6 = 60; i6 <= 69; i6++) {
            if (zahl % i6 === 0) {
                teiler.push(i6);
            }
        }
    }
    if (teiler.length < 2) {
        for (let i7 = 70; i7 <= 79; i7++) {
            if (zahl % i7 === 0) {
                teiler.push(i7);
            }
        }
    }
    if (teiler.length < 2) {
        for (let i8 = 80; i8 <= 89; i8++) {
            if (zahl % i8 === 0) {
                teiler.push(i8);
            }
        }
    }
    if (teiler.length < 2) {
        for (let i9 = 90; i9 <= 99; i9++) {
            if (zahl % i9 === 0) {
                teiler.push(i9);
            }
        }
    }
    return "\n// Die Zufahlszahl ist (mitunter) teilbar durch: " + teilbarDurch(ausgedachteZahl) + ".";
}
function tippZiffernNachGroesse(zahl: number): string {
    const z = Math.abs(zahl);
    if (z < 100 || z > 999) {
        return "\n// Die gesuchte Zahl ist NICHT dreistellig";
    }

    const ziffern = z.toString().split('').map(Number);
    const positionen = ['Hunderterstelle', 'Zehnerstelle', 'Einerstelle'];

    // Array mit Ziffer + Position
    const ziffernMitPosition = ziffern.map((wert, index) => ({
        wert,
        position: positionen[index]
    }));

    // Sortieren nach Zifferngröße (absteigend)
    ziffernMitPosition.sort((a, b) => b.wert - a.wert);

    // Aufbau des Texts
    let tipp = "\n// Die Reihenfolge der Ziffern von groß nach klein:";
    ziffernMitPosition.forEach((ziffer, i) => {
        const stufe = ['größte', 'zweitgrößte', 'kleinste'][i];
        tipp += ` Die ${stufe} Ziffer ist an der ${ziffer.position}.`;
    });
    tipp +=" (Bei gleichen Ziffern gilt die höherwertige Stelle als größer!)"
    return tipp.trim(); // Entfernt letztes Zeilenende
}


function zufallsTippOhneWiederholung(zahl: number): string {
    if (verbleibendeTipps.length === 0) {
        return "// Es gibt keine neuen Tipps mehr.";
    }

    const index = Math.floor(Math.random() * verbleibendeTipps.length);
    const tippFunktion = verbleibendeTipps.splice(index, 1)[0]; // entfernt die Funktion
    return tippFunktion(zahl);
}

class Student {
    constructor(name: string, label: number) {
        this.label = label;
        this.name = name;
    }

    private name: string = "Test";
    private label: number = 0;

    getLabel(label?: number): string {
        if (label)
            this.label = label;
        return "Matrikelnummer " + this.label;
    }
}

let s: Student = new Student("Maic Volnhals", 12345);
let label: string = s.getLabel();
console.log(label);