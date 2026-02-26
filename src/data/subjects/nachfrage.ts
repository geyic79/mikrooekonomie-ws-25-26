import type { Subject } from '@/data/types'

const summaryDe =
  '<h2>1. Budgetbeschränkung</h2>' +

  '<div class="definition-box">' +
  '<strong>Budgetmenge (Budget Set):</strong> Die Menge aller Güterbündel, die sich ein Konsument bei gegebenen Preisen und Einkommen leisten kann:' +
  '$$B = \\{(x_1, x_2) : p_1 x_1 + p_2 x_2 \\leq m\\}$$' +
  'wobei $p_1, p_2$ die Preise der Güter 1 und 2 sind und $m$ das verfügbare Einkommen (Budget) darstellt.' +
  '</div>' +

  '<h3>Budgetgerade</h3>' +
  '<p>Die Budgetgerade beschreibt alle Güterbündel, bei denen das gesamte Einkommen ausgegeben wird:</p>' +
  '<div class="formula-block">' +
  '$$p_1 x_1 + p_2 x_2 = m$$' +
  '</div>' +
  '<p>Umgestellt nach $x_2$ ergibt sich:</p>' +
  '<div class="formula-block">' +
  '$$x_2 = \\frac{m}{p_2} - \\frac{p_1}{p_2} x_1$$' +
  '</div>' +
  '<p>Die Steigung der Budgetgeraden beträgt $-\\frac{p_1}{p_2}$. Diese Steigung gibt die <strong>Opportunitätskosten</strong> von Gut 1 in Einheiten von Gut 2 an: Um eine zusätzliche Einheit von Gut 1 zu konsumieren, muss der Konsument auf $\\frac{p_1}{p_2}$ Einheiten von Gut 2 verzichten.</p>' +
  '<p>Der Achsenabschnitt auf der $x_2$-Achse ist $\\frac{m}{p_2}$ (maximale Menge von Gut 2, wenn $x_1 = 0$) und auf der $x_1$-Achse $\\frac{m}{p_1}$ (maximale Menge von Gut 1, wenn $x_2 = 0$).</p>' +

  '<h3>Auswirkungen von Preis- und Einkommensänderungen</h3>' +
  '<div class="insight-box">' +
  '<strong>Einkommensänderung:</strong> Eine Erhöhung von $m$ verschiebt die Budgetgerade parallel nach außen (ohne die Steigung zu ändern). Eine Verringerung verschiebt sie nach innen.' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Preisänderung:</strong> Steigt $p_1$, dreht sich die Budgetgerade um den $x_2$-Achsenabschnitt nach innen (steilere Steigung). Sinkt $p_1$, dreht sie sich nach außen (flachere Steigung). Analoges gilt für Änderungen von $p_2$.' +
  '</div>' +

  '<h3>Numeraire</h3>' +
  '<p>Man kann ein Gut als <strong>Numeraire</strong> (Maßeinheit) wählen und seinen Preis auf 1 normieren. Setzt man z.&thinsp;B. $p_2 = 1$, so werden alle Preise relativ zu Gut 2 gemessen. Die Budgetgerade wird dann:</p>' +
  '<div class="formula-block">' +
  '$$p_1 x_1 + x_2 = m$$' +
  '</div>' +
  '<p>In diesem Fall wird Gut 2 in Geldeinheiten gemessen und $p_1$ ist der relative Preis von Gut 1.</p>' +

  '<h3>Steuern und Subventionen</h3>' +
  '<div class="definition-box">' +
  '<strong>Mengensteuer (Quantity Tax):</strong> Eine Steuer von $t$ pro Einheit von Gut 1 erhöht den effektiven Preis auf $(p_1 + t)$. Die Budgetgerade wird steiler.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Wertsteuer (Ad Valorem Tax):</strong> Eine Steuer von $\\tau$ (als Anteil) auf den Preis von Gut 1 erhöht den effektiven Preis auf $(1 + \\tau) p_1$.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Pauschalsteuer (Lump-Sum Tax):</strong> Eine feste Steuer $T$, die unabhängig vom Konsum erhoben wird, reduziert das verfügbare Einkommen auf $m - T$. Die Budgetgerade verschiebt sich parallel nach innen.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Subventionen:</strong> Wirken spiegelbildlich zu Steuern. Eine Mengensubvention von $s$ pro Einheit senkt den effektiven Preis auf $(p_1 - s)$. Eine Pauschalsubvention erhöht das Einkommen auf $m + S$.' +
  '</div>' +

  '<div class="example-box">' +
  '<strong>Beispiel:</strong> Ein Konsument hat ein Einkommen von $m = 100$, $p_1 = 5$, $p_2 = 10$. Die Budgetgerade lautet $5x_1 + 10x_2 = 100$. Der Achsenabschnitt auf der $x_1$-Achse ist $20$, auf der $x_2$-Achse $10$. Die Steigung beträgt $-1/2$. Eine Mengensteuer von $t = 1$ auf Gut 1 ändert die Gerade zu $6x_1 + 10x_2 = 100$ (neuer $x_1$-Achsenabschnitt: $\\approx 16{,}67$).' +
  '</div>' +

  '<h2>2. Präferenzen</h2>' +

  '<div class="definition-box">' +
  '<strong>Präferenzrelation:</strong> Eine binäre Relation auf der Menge der Güterbündel, die die Vorlieben des Konsumenten beschreibt.' +
  '<ul>' +
  '<li><strong>Strikte Präferenz</strong> $\\succ$: $(x_1, x_2) \\succ (y_1, y_2)$ bedeutet, dass das Bündel $(x_1, x_2)$ strikt bevorzugt wird.</li>' +
  '<li><strong>Schwache Präferenz</strong> $\\succeq$: $(x_1, x_2) \\succeq (y_1, y_2)$ bedeutet &bdquo;mindestens so gut wie&ldquo;.</li>' +
  '<li><strong>Indifferenz</strong> $\\sim$: $(x_1, x_2) \\sim (y_1, y_2)$ bedeutet, dass der Konsument beide Bündel als gleich gut ansieht.</li>' +
  '</ul>' +
  '</div>' +

  '<h3>Axiome rationaler Präferenzen</h3>' +
  '<div class="definition-box">' +
  '<strong>Vollständigkeit:</strong> Für alle Bündel $X$ und $Y$ gilt: $X \\succeq Y$ oder $Y \\succeq X$ (oder beides). Der Konsument kann stets vergleichen.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Transitivität:</strong> Wenn $X \\succeq Y$ und $Y \\succeq Z$, dann $X \\succeq Z$. Keine Widersprüche in der Rangfolge.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Reflexivität:</strong> Jedes Bündel ist mindestens so gut wie es selbst: $X \\succeq X$.' +
  '</div>' +

  '<h3>Indifferenzkurven</h3>' +
  '<p>Eine <strong>Indifferenzkurve</strong> (IK) verbindet alle Güterbündel, zwischen denen der Konsument indifferent ist. Wichtige Eigenschaften:</p>' +
  '<ul>' +
  '<li>Indifferenzkurven <strong>können sich nicht schneiden</strong>. (Beweis durch Widerspruch mit Transitivität.)</li>' +
  '<li>Höhere Indifferenzkurven repräsentieren <strong>höheres Nutzenniveau</strong> (unter Monotonie).</li>' +
  '<li>Jeder Punkt im Güterraum liegt auf genau einer IK.</li>' +
  '</ul>' +

  '<h3>Monotonie</h3>' +
  '<div class="definition-box">' +
  '<strong>Monotonie (&bdquo;mehr ist besser&ldquo;):</strong> Wenn $(x_1, x_2)$ mindestens so viel von jedem Gut enthält wie $(y_1, y_2)$ und strikt mehr von mindestens einem Gut, dann $(x_1, x_2) \\succ (y_1, y_2)$. Unter Monotonie haben Indifferenzkurven eine <strong>negative Steigung</strong>.' +
  '</div>' +

  '<h3>Konvexität</h3>' +
  '<div class="definition-box">' +
  '<strong>Konvexe Präferenzen:</strong> Für zwei Bündel $X$ und $Y$ mit $X \\sim Y$ gilt: $tX + (1-t)Y \\succeq X$ für alle $t \\in [0, 1]$. Durchschnitte (Mischungen) werden mindestens schwach bevorzugt.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Strikt konvexe Präferenzen:</strong> Für zwei verschiedene Bündel $X$ und $Y$ mit $X \\sim Y$ gilt: $tX + (1-t)Y \\succ X$ für alle $t \\in (0, 1)$. Durchschnitte werden strikt bevorzugt. Indifferenzkurven sind strikt gewölbt zum Ursprung.' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Bedeutung der Konvexität:</strong> Konvexe Präferenzen bedeuten, dass der Konsument Vielfalt schätzt und keine extremen Bündel bevorzugt. Die Grenzrate der Substitution nimmt (betragsmäßig) ab.' +
  '</div>' +

  '<h3>Grenzrate der Substitution (MRS)</h3>' +
  '<div class="definition-box">' +
  '<strong>MRS (Marginal Rate of Substitution):</strong> Die Steigung der Indifferenzkurve in einem Punkt. Sie gibt an, wie viel von Gut 2 der Konsument bereit ist aufzugeben, um eine marginale Einheit mehr von Gut 1 zu erhalten:' +
  '$$MRS_{1,2} = -\\frac{\\Delta x_2}{\\Delta x_1} \\bigg|_{u = \\text{const.}}$$' +
  'Konvention: Die MRS wird oft als positiver Wert angegeben (Betrag der Steigung der IK).' +
  '</div>' +

  '<h2>3. Spezielle Präferenzen</h2>' +

  '<h3>Perfekte Substitute</h3>' +
  '<div class="definition-box">' +
  '<strong>Nutzenfunktion:</strong> $u(x_1, x_2) = ax_1 + bx_2$ mit $a, b > 0$.' +
  '</div>' +
  '<p>Eigenschaften:</p>' +
  '<ul>' +
  '<li>Indifferenzkurven sind <strong>Geraden</strong> mit Steigung $-a/b$.</li>' +
  '<li>$MRS = a/b$ (konstant).</li>' +
  '<li>Die Güter sind in einem festen Verhältnis gegeneinander austauschbar.</li>' +
  '</ul>' +
  '<div class="example-box">' +
  '<strong>Beispiel:</strong> Rote und blaue Stifte, die gleich gut schreiben: $u = x_1 + x_2$. Die IK sind Geraden mit Steigung $-1$. Der Konsument kauft nur das billigere Gut (Ecklösung).' +
  '</div>' +

  '<h3>Perfekte Komplemente</h3>' +
  '<div class="definition-box">' +
  '<strong>Nutzenfunktion:</strong> $u(x_1, x_2) = \\min\\{ax_1, bx_2\\}$ mit $a, b > 0$.' +
  '</div>' +
  '<p>Eigenschaften:</p>' +
  '<ul>' +
  '<li>Indifferenzkurven sind <strong>L-förmig</strong> mit dem Knick auf der Linie $ax_1 = bx_2$, also $x_2 = \\frac{a}{b} x_1$.</li>' +
  '<li>Die Güter werden immer im festen Verhältnis $b : a$ konsumiert.</li>' +
  '<li>Die MRS ist an der Knickstelle nicht definiert.</li>' +
  '</ul>' +
  '<div class="example-box">' +
  '<strong>Beispiel:</strong> Linke und rechte Schuhe: $u = \\min\\{x_1, x_2\\}$. Ein linker Schuh ohne rechten Schuh stiftet keinen zusätzlichen Nutzen.' +
  '</div>' +

  '<h3>Cobb-Douglas-Präferenzen</h3>' +
  '<div class="definition-box">' +
  '<strong>Nutzenfunktion:</strong> $u(x_1, x_2) = x_1^a x_2^b$ mit $a, b > 0$.' +
  '</div>' +
  '<p>Eigenschaften:</p>' +
  '<ul>' +
  '<li>Indifferenzkurven sind <strong>glatte, strikt konvexe Kurven</strong>, die sich asymptotisch den Achsen nähern.</li>' +
  '<li>$MRS = \\frac{a}{b} \\cdot \\frac{x_2}{x_1}$.</li>' +
  '<li>Die MRS nimmt entlang einer IK (betragsmäßig) ab.</li>' +
  '<li>Monotone Transformation: $v = a \\ln x_1 + b \\ln x_2$ repräsentiert dieselben Präferenzen.</li>' +
  '</ul>' +
  '<div class="insight-box">' +
  '<strong>Wichtig:</strong> Cobb-Douglas-Präferenzen führen dazu, dass ein fester Anteil des Einkommens für jedes Gut ausgegeben wird (bei Normalform $u = x_1^a x_2^{1-a}$: Anteil $a$ für Gut 1, Anteil $(1-a)$ für Gut 2).' +
  '</div>' +

  '<h3>Quasilineare Präferenzen</h3>' +
  '<div class="definition-box">' +
  '<strong>Nutzenfunktion:</strong> $u(x_1, x_2) = v(x_1) + x_2$, wobei $v$ eine konkave Funktion ist (z.&thinsp;B. $v(x_1) = \\ln x_1$ oder $v(x_1) = \\sqrt{x_1}$).' +
  '</div>' +
  '<p>Eigenschaften:</p>' +
  '<ul>' +
  '<li>Indifferenzkurven sind <strong>vertikal parallel verschoben</strong> &ndash; sie haben bei gleichem $x_1$ dieselbe Steigung.</li>' +
  '<li>$MRS = v\'(x_1)$ &ndash; hängt nur von $x_1$ ab, nicht von $x_2$.</li>' +
  '<li>Die Nachfrage nach Gut 1 ist unabhängig vom Einkommen (kein Einkommenseffekt für Gut 1), sofern eine innere Lösung vorliegt.</li>' +
  '</ul>' +

  '<h2>4. Nutzenfunktionen</h2>' +

  '<div class="definition-box">' +
  '<strong>Nutzenfunktion:</strong> Eine Funktion $u : \\mathbb{R}^2_+ \\to \\mathbb{R}$, die jedem Güterbündel eine reelle Zahl zuordnet, sodass:' +
  '$$u(x_1, x_2) \\geq u(y_1, y_2) \\iff (x_1, x_2) \\succeq (y_1, y_2)$$' +
  '</div>' +

  '<h3>Ordinalität des Nutzens</h3>' +
  '<div class="insight-box">' +
  '<strong>Ordinalität:</strong> Nur die Rangordnung zählt, nicht die absoluten Nutzenwerte. Ob $u(A) = 10$ und $u(B) = 5$ oder $u(A) = 100$ und $u(B) = 1$, spielt keine Rolle &ndash; in beiden Fällen wird $A$ gegenüber $B$ bevorzugt. Die Differenz hat keine Bedeutung.' +
  '</div>' +

  '<h3>Monotone Transformationen</h3>' +
  '<div class="definition-box">' +
  '<strong>Monotone Transformation:</strong> Wenn $u$ eine Nutzenfunktion ist und $f$ eine streng monoton steigende Funktion, dann ist $v = f(u)$ ebenfalls eine Nutzenfunktion, die dieselben Präferenzen repräsentiert.' +
  '</div>' +
  '<div class="example-box">' +
  '<strong>Beispiel:</strong> $u = x_1^2 x_2^3$ und $v = \\ln u = 2 \\ln x_1 + 3 \\ln x_2$ repräsentieren dieselben Präferenzen, da $\\ln$ streng monoton steigend ist.' +
  '</div>' +

  '<h3>Grenznutzen</h3>' +
  '<div class="definition-box">' +
  '<strong>Grenznutzen (Marginal Utility):</strong> Der zusätzliche Nutzen aus einer marginalen Einheit mehr von Gut $i$:' +
  '$$MU_i = \\frac{\\partial u}{\\partial x_i}$$' +
  '</div>' +
  '<p>Der Grenznutzen selbst ist <strong>nicht ordinal invariant</strong> &ndash; er ändert sich bei monotoner Transformation. Jedoch ist das Verhältnis der Grenznutzen ordinal invariant.</p>' +

  '<h3>MRS aus der Nutzenfunktion</h3>' +
  '<p>Entlang einer Indifferenzkurve gilt $du = 0$:</p>' +
  '<div class="formula-block">' +
  '$$du = MU_1 \\, dx_1 + MU_2 \\, dx_2 = 0$$' +
  '$$\\Rightarrow MRS_{1,2} = \\frac{MU_1}{MU_2} = -\\frac{dx_2}{dx_1}\\bigg|_{u = \\text{const.}}$$' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Wichtig:</strong> Das Verhältnis $MU_1 / MU_2$ ist ordinal invariant, obwohl die einzelnen Grenznutzenwerte es nicht sind.' +
  '</div>' +

  '<h2>5. Nutzenmaximierung</h2>' +

  '<p>Der Konsument maximiert seinen Nutzen unter Berücksichtigung seiner Budgetbeschränkung:</p>' +
  '<div class="formula-block">' +
  '$$\\max_{x_1, x_2} \\; u(x_1, x_2) \\quad \\text{s.t.} \\quad p_1 x_1 + p_2 x_2 \\leq m$$' +
  '</div>' +

  '<h3>Tangentialbedingung (Innere Lösung)</h3>' +
  '<div class="definition-box">' +
  '<strong>Tangentialbedingung:</strong> Im Optimum bei einer inneren Lösung tangiert die Indifferenzkurve die Budgetgerade:' +
  '$$MRS_{1,2} = \\frac{p_1}{p_2}$$' +
  'Äquivalent:' +
  '$$\\frac{MU_1}{p_1} = \\frac{MU_2}{p_2}$$' +
  'Der &bdquo;Bang for the Buck&ldquo; (Grenznutzen pro Geldeinheit) muss für beide Güter gleich sein.' +
  '</div>' +

  '<h3>Lagrange-Methode</h3>' +
  '<p>Formulierung des Optimierungsproblems mit Lagrange-Multiplikator:</p>' +
  '<div class="formula-block">' +
  '$$\\mathcal{L} = u(x_1, x_2) + \\lambda (m - p_1 x_1 - p_2 x_2)$$' +
  '</div>' +
  '<p>Die Bedingungen erster Ordnung (FOC) lauten:</p>' +
  '<div class="formula-block">' +
  '$$\\frac{\\partial \\mathcal{L}}{\\partial x_1} = \\frac{\\partial u}{\\partial x_1} - \\lambda p_1 = 0 \\quad \\Rightarrow \\quad MU_1 = \\lambda p_1$$' +
  '$$\\frac{\\partial \\mathcal{L}}{\\partial x_2} = \\frac{\\partial u}{\\partial x_2} - \\lambda p_2 = 0 \\quad \\Rightarrow \\quad MU_2 = \\lambda p_2$$' +
  '$$\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = m - p_1 x_1 - p_2 x_2 = 0$$' +
  '</div>' +
  '<p>Aus den ersten beiden Bedingungen folgt: $\\frac{MU_1}{MU_2} = \\frac{p_1}{p_2}$, also die Tangentialbedingung. Die dritte Bedingung ist die Budgetbeschränkung.</p>' +
  '<div class="insight-box">' +
  '<strong>Interpretation von $\\lambda$:</strong> Der Lagrange-Multiplikator $\\lambda$ gibt den Schattenpreis des Einkommens an: den zusätzlichen Nutzen, den eine marginale Erhöhung des Einkommens bringt ($\\lambda = \\partial u^* / \\partial m$).' +
  '</div>' +

  '<h3>Ecklösungen (Corner Solutions)</h3>' +
  '<p>Wenn die Tangentialbedingung bei keiner positiven Menge beider Güter erfüllt werden kann, liegt eine Ecklösung vor. Der Konsument konsumiert nur ein Gut.</p>' +
  '<div class="example-box">' +
  '<strong>Beispiel perfekte Substitute:</strong> Bei $u = ax_1 + bx_2$ ist $MRS = a/b$ konstant. Falls $a/b > p_1/p_2$, konsumiert der Konsument nur Gut 1: $x_1^* = m/p_1$, $x_2^* = 0$. Falls $a/b < p_1/p_2$, nur Gut 2: $x_1^* = 0$, $x_2^* = m/p_2$. Falls $a/b = p_1/p_2$, ist jede Kombination auf der Budgetgeraden optimal.' +
  '</div>' +

  '<h3>Cobb-Douglas-Optimierung (ausführlich)</h3>' +
  '<div class="example-box">' +
  '<strong>Beispiel:</strong> $u(x_1, x_2) = x_1^a x_2^{1-a}$ mit $0 < a < 1$.' +
  '<br><br>' +
  'Lagrange-Ansatz: $\\mathcal{L} = x_1^a x_2^{1-a} + \\lambda(m - p_1 x_1 - p_2 x_2)$' +
  '<br><br>' +
  'FOC:<br>' +
  '$\\frac{\\partial \\mathcal{L}}{\\partial x_1} = a x_1^{a-1} x_2^{1-a} - \\lambda p_1 = 0$<br>' +
  '$\\frac{\\partial \\mathcal{L}}{\\partial x_2} = (1-a) x_1^a x_2^{-a} - \\lambda p_2 = 0$<br>' +
  '$\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = m - p_1 x_1 - p_2 x_2 = 0$' +
  '<br><br>' +
  'Division der ersten durch die zweite Bedingung:' +
  '$$\\frac{a}{1-a} \\cdot \\frac{x_2}{x_1} = \\frac{p_1}{p_2}$$' +
  '$$\\Rightarrow x_2 = \\frac{(1-a) p_1}{a p_2} x_1$$' +
  'Einsetzen in die Budgetbeschränkung:' +
  '$$p_1 x_1 + p_2 \\cdot \\frac{(1-a) p_1}{a p_2} x_1 = m$$' +
  '$$p_1 x_1 \\left(1 + \\frac{1-a}{a}\\right) = m$$' +
  '$$p_1 x_1 \\cdot \\frac{1}{a} = m$$' +
  '<br>' +
  '<strong>Optimale Nachfrage:</strong>' +
  '$$x_1^* = \\frac{am}{p_1}, \\qquad x_2^* = \\frac{(1-a)m}{p_2}$$' +
  'Der Konsument gibt den Anteil $a$ seines Einkommens für Gut 1 und den Anteil $(1-a)$ für Gut 2 aus. Die Ausgabenanteile sind konstant und unabhängig von den Preisen.' +
  '</div>' +

  '<div class="interactive-widget"><button class="widget-fullscreen-btn" title="Fullscreen">&#x26F6;</button><button class="widget-exit-fullscreen-btn">&#x2190; Back</button>' +
  '<div class="interactive-widget-title">Interaktives Tool: Nutzenmaximierung</div>' +
  '<iframe src="https://tuda-mikro.org/lecture_01/lecture_01.html#/utilitymax" loading="lazy" title="Interaktives Diagramm zur Nutzenmaximierung"></iframe>' +
  '</div>' +

  '<h2>6. Nachfragekurven</h2>' +

  '<h3>Marshallsche Nachfragefunktion</h3>' +
  '<div class="definition-box">' +
  '<strong>Marshallsche Nachfrage:</strong> Die optimale Nachfrage als Funktion der Preise und des Einkommens:' +
  '$$x_i^* = x_i(p_1, p_2, m)$$' +
  'Sie ergibt sich aus der Lösung des Nutzenmaximierungsproblems.' +
  '</div>' +

  '<h3>Nachfragekurve</h3>' +
  '<p>Die Nachfragekurve zeigt die nachgefragte Menge eines Gutes als Funktion seines Preises, wobei $p_2$ und $m$ konstant gehalten werden. Für die meisten Güter ist sie fallend (Gesetz der Nachfrage).</p>' +

  '<div class="interactive-widget"><button class="widget-fullscreen-btn" title="Fullscreen">&#x26F6;</button><button class="widget-exit-fullscreen-btn">&#x2190; Back</button>' +
  '<div class="interactive-widget-title">Interaktives Tool: Marktgleichgewicht</div>' +
  '<iframe src="https://tuda-mikro.org/lecture_01/lecture_01.html#/market" loading="lazy" title="Interaktives Diagramm zum Marktgleichgewicht"></iframe>' +
  '</div>' +

  '<h3>Normale und inferiore Güter</h3>' +
  '<div class="definition-box">' +
  '<strong>Normales Gut:</strong> Ein Gut, dessen Nachfrage mit steigendem Einkommen zunimmt:' +
  '$$\\frac{\\partial x_i}{\\partial m} > 0$$' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Inferiores Gut:</strong> Ein Gut, dessen Nachfrage mit steigendem Einkommen abnimmt:' +
  '$$\\frac{\\partial x_i}{\\partial m} < 0$$' +
  '</div>' +
  '<div class="example-box">' +
  '<strong>Beispiel:</strong> Billige Instantnudeln könnten ein inferiores Gut sein &ndash; steigt das Einkommen, weicht der Konsument auf hochwertigere Lebensmittel aus.' +
  '</div>' +

  '<h3>Engelkurven</h3>' +
  '<div class="definition-box">' +
  '<strong>Engelkurve:</strong> Zeigt die nachgefragte Menge eines Gutes als Funktion des Einkommens bei konstanten Preisen. Für normale Güter ist sie steigend, für inferiore Güter fallend.' +
  '</div>' +

  '<h3>Gewöhnliche und Giffen-Güter</h3>' +
  '<div class="definition-box">' +
  '<strong>Gewöhnliches Gut (ordinary good):</strong> Ein Gut, dessen Nachfrage mit steigendem Eigenpreis abnimmt:' +
  '$$\\frac{\\partial x_i}{\\partial p_i} < 0$$' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Giffen-Gut:</strong> Ein Gut, dessen Nachfrage mit steigendem Eigenpreis zunimmt:' +
  '$$\\frac{\\partial x_i}{\\partial p_i} > 0$$' +
  'Ein Giffen-Gut muss ein inferiores Gut sein, bei dem der Einkommenseffekt den Substitutionseffekt überwiegt (sehr selten in der Praxis).' +
  '</div>' +

  '<h2>7. Slutsky-Zerlegung</h2>' +

  '<p>Die <strong>Slutsky-Zerlegung</strong> zerlegt den Gesamteffekt einer Preisänderung auf die Nachfrage in zwei Komponenten:</p>' +
  '<div class="formula-block">' +
  '$$\\underbrace{\\Delta x_1}_{\\text{Gesamteffekt}} = \\underbrace{\\Delta x_1^s}_{\\text{Substitutionseffekt}} + \\underbrace{\\Delta x_1^n}_{\\text{Einkommenseffekt}}$$' +
  '</div>' +

  '<h3>Substitutionseffekt</h3>' +
  '<div class="definition-box">' +
  '<strong>Substitutionseffekt (Slutsky):</strong> Die Änderung der Nachfrage aufgrund der veränderten relativen Preise, wobei die <strong>Kaufkraft konstant gehalten</strong> wird (d.&thinsp;h. das Einkommen wird so angepasst, dass das ursprüngliche Bündel gerade noch bezahlbar ist).' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Gesetz:</strong> Der Substitutionseffekt wirkt <strong>immer entgegen</strong> der Preisänderung. Steigt $p_1$, sinkt die substituierte Nachfrage nach Gut 1 (und umgekehrt). Formal: $\\Delta x_1^s / \\Delta p_1 \\leq 0$.' +
  '</div>' +

  '<h3>Einkommenseffekt</h3>' +
  '<div class="definition-box">' +
  '<strong>Einkommenseffekt:</strong> Die Änderung der Nachfrage aufgrund der veränderten Kaufkraft. Eine Preiserhöhung von Gut 1 macht den Konsumenten real ärmer.' +
  '<ul>' +
  '<li>Normales Gut: Einkommenseffekt verstärkt den Substitutionseffekt (realer Einkommensverlust senkt Nachfrage).</li>' +
  '<li>Inferiores Gut: Einkommenseffekt wirkt dem Substitutionseffekt entgegen.</li>' +
  '</ul>' +
  '</div>' +

  '<h3>Zusammenhang mit Gutarten</h3>' +
  '<div class="insight-box">' +
  '<strong>Normales Gut:</strong> $SE < 0$ und $IE < 0$ (bei Preiserhöhung) &rarr; Gesamteffekt negativ &rarr; gewöhnliches Gut.' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Inferiores Gut (nicht Giffen):</strong> $SE < 0$ und $IE > 0$, aber $|SE| > |IE|$ &rarr; Gesamteffekt noch negativ &rarr; gewöhnliches Gut.' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Giffen-Gut:</strong> $SE < 0$ und $IE > 0$, aber $|IE| > |SE|$ &rarr; Gesamteffekt positiv. Extrem selten.' +
  '</div>' +

  '<h3>Slutsky-Gleichung</h3>' +
  '<div class="formula-block">' +
  '$$\\frac{\\partial x_i}{\\partial p_j} = \\frac{\\partial x_i^s}{\\partial p_j} - x_j \\frac{\\partial x_i}{\\partial m}$$' +
  '</div>' +
  '<p>Interpretation der Slutsky-Gleichung:</p>' +
  '<ul>' +
  '<li>$\\frac{\\partial x_i}{\\partial p_j}$: Gesamteffekt einer Änderung von $p_j$ auf $x_i$</li>' +
  '<li>$\\frac{\\partial x_i^s}{\\partial p_j}$: Substitutionseffekt (kompensierte Nachfrageänderung)</li>' +
  '<li>$x_j \\frac{\\partial x_i}{\\partial m}$: Einkommenseffekt, gewichtet mit der konsumierten Menge $x_j$</li>' +
  '</ul>' +

  '<div class="example-box">' +
  '<strong>Numerisches Beispiel:</strong> Angenommen, $p_1$ steigt von 4 auf 6, $p_2 = 1$, $m = 120$. Ursprüngliche Nachfrage: $x_1 = 15$, $x_2 = 60$. Slutsky-kompensiertes Einkommen: $m\' = m + \\Delta p_1 \\cdot x_1 = 120 + 2 \\cdot 15 = 150$. Bei $p_1 = 6$ und $m\' = 150$: neue $x_1^s = 12$. Substitutionseffekt: $12 - 15 = -3$. Bei $p_1 = 6$ und $m = 120$: $x_1 = 10$. Einkommenseffekt: $10 - 12 = -2$. Gesamteffekt: $10 - 15 = -5 = -3 + (-2)$.' +
  '</div>' +

  '<h2>8. Elastizitäten</h2>' +

  '<div class="definition-box">' +
  '<strong>Elastizität:</strong> Ein dimensionsloses Maß für die relative Reaktion einer Variablen auf die relative Änderung einer anderen Variablen.' +
  '</div>' +

  '<h3>Preiselastizität der Nachfrage</h3>' +
  '<div class="formula-block">' +
  '$$\\varepsilon_{x,p} = \\frac{\\partial x}{\\partial p} \\cdot \\frac{p}{x} = \\frac{\\%\\Delta x}{\\%\\Delta p}$$' +
  '</div>' +
  '<p>Die Preiselastizität ist in der Regel negativ (für gewöhnliche Güter).</p>' +
  '<div class="definition-box">' +
  '<strong>Elastisch:</strong> $|\\varepsilon_{x,p}| > 1$ &ndash; die prozentuale Mengenänderung übersteigt die prozentuale Preisänderung. Eine Preiserhöhung senkt den Umsatz.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Unelastisch:</strong> $|\\varepsilon_{x,p}| < 1$ &ndash; die prozentuale Mengenänderung ist kleiner als die Preisänderung. Eine Preiserhöhung steigert den Umsatz.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Einheitselastisch:</strong> $|\\varepsilon_{x,p}| = 1$ &ndash; der Umsatz bleibt bei einer Preisänderung konstant.' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Zusammenhang Elastizität und Umsatz:</strong> Der Umsatz $R = p \\cdot x(p)$. Es gilt: $\\frac{dR}{dp} = x(1 + \\varepsilon_{x,p})$. Ist $|\\varepsilon| > 1$ (elastisch), sinkt $R$ bei Preiserhöhung. Ist $|\\varepsilon| < 1$ (unelastisch), steigt $R$.' +
  '</div>' +

  '<h3>Einkommenselastizität</h3>' +
  '<div class="formula-block">' +
  '$$\\varepsilon_{x,m} = \\frac{\\partial x}{\\partial m} \\cdot \\frac{m}{x}$$' +
  '</div>' +
  '<ul>' +
  '<li>$\\varepsilon_{x,m} > 0$: normales Gut</li>' +
  '<li>$\\varepsilon_{x,m} < 0$: inferiores Gut</li>' +
  '<li>$\\varepsilon_{x,m} > 1$: Luxusgut (überproportionaler Nachfrageanstieg bei Einkommenszuwachs)</li>' +
  '<li>$0 < \\varepsilon_{x,m} < 1$: notwendiges Gut</li>' +
  '</ul>' +

  '<h3>Kreuzpreiselastizität</h3>' +
  '<div class="formula-block">' +
  '$$\\varepsilon_{x_i, p_j} = \\frac{\\partial x_i}{\\partial p_j} \\cdot \\frac{p_j}{x_i}$$' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Substitute (Bruttosubstitute):</strong> $\\varepsilon_{x_i, p_j} > 0$ &ndash; steigt der Preis von Gut $j$, steigt die Nachfrage nach Gut $i$ (z.&thinsp;B. Butter und Margarine).' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Komplemente (Bruttokomplemente):</strong> $\\varepsilon_{x_i, p_j} < 0$ &ndash; steigt der Preis von Gut $j$, sinkt die Nachfrage nach Gut $i$ (z.&thinsp;B. Drucker und Druckerpatronen).' +
  '</div>' +

  '<div class="example-box">' +
  '<strong>Beispiel (lineare Nachfrage):</strong> $x = a - bp$. Dann: $\\varepsilon_{x,p} = -b \\cdot \\frac{p}{a - bp}$. Bei $p = 0$: $\\varepsilon = 0$ (perfekt unelastisch). Bei $x = 0$ (also $p = a/b$): $|\\varepsilon| \\to \\infty$ (perfekt elastisch). Am Mittelpunkt ($x = a/2$, $p = a/(2b)$): $|\\varepsilon| = 1$.' +
  '</div>' +

  '<h2>9. Konsumentenrente</h2>' +

  '<div class="definition-box">' +
  '<strong>Zahlungsbereitschaft (Willingness to Pay):</strong> Der maximale Preis, den ein Konsument für eine zusätzliche Einheit eines Gutes zu zahlen bereit ist. Entspricht der Höhe der Nachfragekurve bei der jeweiligen Menge.' +
  '</div>' +

  '<h3>Konsumentenrente (Consumer Surplus)</h3>' +
  '<div class="definition-box">' +
  '<strong>Konsumentenrente:</strong> Die Differenz zwischen der Zahlungsbereitschaft und dem tatsächlich gezahlten Preis, summiert über alle konsumierten Einheiten:' +
  '$$CS = \\int_0^{x^*} p(x)\\, dx - p^* \\cdot x^*$$' +
  'Grafisch: die Fläche unter der Nachfragekurve und oberhalb des Marktpreises.' +
  '</div>' +

  '<div class="insight-box">' +
  '<strong>Interpretation:</strong> Die Konsumentenrente misst den Nettovorteil, den ein Konsument aus dem Kauf eines Gutes zieht. Sie ist die Summe der &bdquo;Schnäppchen&ldquo; &ndash; jede Einheit, für die der Konsument mehr zu zahlen bereit gewesen wäre als er tatsächlich zahlt, generiert einen Surplus.' +
  '</div>' +

  '<h3>Preisänderung und Konsumentenrente</h3>' +
  '<p>Steigt der Preis von $p_0$ auf $p_1$, verringert sich die Konsumentenrente. Der Verlust setzt sich zusammen aus:</p>' +
  '<ul>' +
  '<li>Einem Rechteck: $\\Delta p \\cdot x_1$ (die Mehrkosten für die weiterhin konsumierten Einheiten)</li>' +
  '<li>Einem Dreieck: $\\frac{1}{2} \\Delta p \\cdot \\Delta x$ (der Surplus der nicht mehr konsumierten Einheiten)</li>' +
  '</ul>' +

  '<h3>Kompensierende und äquivalente Variation</h3>' +
  '<div class="definition-box">' +
  '<strong>Kompensierende Variation (CV):</strong> Der Geldbetrag, den man dem Konsumenten nach einer Preiserhöhung zahlen müsste, damit er das <strong>alte Nutzenniveau</strong> erreicht.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Äquivalente Variation (EV):</strong> Der Geldbetrag, den man dem Konsumenten <strong>vor</strong> einer Preiserhöhung wegnehmen müsste, damit er das <strong>neue (niedrigere) Nutzenniveau</strong> erreicht.' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Zusammenhang:</strong> Bei quasilinearen Präferenzen gilt: $CV = EV = \\Delta CS$. Im Allgemeinen gilt $EV \\leq \\Delta CS \\leq CV$ (für ein normales Gut bei Preiserhöhung) bzw. die umgekehrte Reihenfolge bei Preissenkung.' +
  '</div>' +

  '<div class="example-box">' +
  '<strong>Beispiel:</strong> Lineare Nachfrage $x = 20 - 2p$. Preis steigt von $p_0 = 4$ auf $p_1 = 6$. Alte Menge: $x_0 = 12$, neue Menge: $x_1 = 8$. $\\Delta CS = \\frac{1}{2}(12 + 8) \\cdot 2 = 20$. Der Konsument verliert eine Rente von 20 Geldeinheiten.' +
  '</div>' +

  '<h2>Weiterf&uuml;hrende Lekt&uuml;re (Varian)</h2>' +
  '<ul>' +
  '<li><strong>Kapitel 2: Budgetbeschr&auml;nkung</strong> (S. 21&ndash;33) &ndash; Einf&uuml;hrung der Budgetmenge, Budgetgeraden, Auswirkungen von Steuern, Subventionen und Preis&auml;nderungen auf die Konsumm&ouml;glichkeiten.</li>' +
  '<li><strong>Kapitel 3: Pr&auml;ferenzen</strong> (S. 35&ndash;55) &ndash; Axiome rationaler Pr&auml;ferenzen (Vollst&auml;ndigkeit, Transitivit&auml;t), Indifferenzkurven und Grenzrate der Substitution.</li>' +
  '<li><strong>Kapitel 4: Nutzen</strong> (S. 57&ndash;77) &ndash; Nutzenfunktionen als ordinale Repr&auml;sentation von Pr&auml;ferenzen; Cobb-Douglas, perfekte Substitute und Komplemente.</li>' +
  '<li><strong>Kapitel 5: Die Entscheidung</strong> (S. 79&ndash;103) &ndash; Nutzenmaximierung unter Budgetbeschr&auml;nkung, Tangentialbedingung $MRS = p_1/p_2$ und Lagrange-Methode.</li>' +
  '<li><strong>Kapitel 6: Nachfrage</strong> (S. 105&ndash;127) &ndash; Herleitung individueller Nachfragekurven, normale vs. inferiore G&uuml;ter, Engelkurven und Preis-Konsum-Kurven.</li>' +
  '<li><strong>Kapitel 7: Bekundete Pr&auml;ferenzen</strong> (S. 129&ndash;147) &ndash; WARP und SARP: Wie beobachtete Entscheidungen R&uuml;ckschl&uuml;sse auf Pr&auml;ferenzen erlauben, mit Anwendung auf Preisindizes.</li>' +
  '<li><strong>Kapitel 8: Slutsky-Gleichung</strong> (S. 149&ndash;173) &ndash; Zerlegung der Preiswirkung in Substitutions- und Einkommenseffekt; erkl&auml;rt Giffen-G&uuml;ter als inferiore G&uuml;ter mit dominierendem Einkommenseffekt.</li>' +
  '<li><strong>Kapitel 14: Konsumentenrente</strong> (S. 277&ndash;297) &ndash; Messung der Wohlfahrts&auml;nderung durch Konsumentenrente, kompensierende und &auml;quivalente Variation.</li>' +
  '<li><strong>Kapitel 15: Marktnachfrage</strong> (S. 299&ndash;322) &ndash; Aggregation individueller zu Marktnachfragekurven, Preiselastizit&auml;t und der Zusammenhang zwischen Elastizit&auml;t und Erl&ouml;s.</li>' +
  '</ul>'

const summaryEn =
  '<h2>1. Budget Constraint</h2>' +

  '<div class="definition-box">' +
  '<strong>Budget Set:</strong> The set of all commodity bundles that a consumer can afford given prices and income:' +
  '$$B = \\{(x_1, x_2) : p_1 x_1 + p_2 x_2 \\leq m\\}$$' +
  'where $p_1, p_2$ are the prices of goods 1 and 2, and $m$ is the available income (budget).' +
  '</div>' +

  '<h3>Budget Line</h3>' +
  '<p>The budget line describes all bundles where the entire income is spent:</p>' +
  '<div class="formula-block">' +
  '$$p_1 x_1 + p_2 x_2 = m$$' +
  '</div>' +
  '<p>Solving for $x_2$:</p>' +
  '<div class="formula-block">' +
  '$$x_2 = \\frac{m}{p_2} - \\frac{p_1}{p_2} x_1$$' +
  '</div>' +
  '<p>The slope of the budget line is $-\\frac{p_1}{p_2}$. This slope represents the <strong>opportunity cost</strong> of good 1 in terms of good 2: to consume one additional unit of good 1, the consumer must give up $\\frac{p_1}{p_2}$ units of good 2.</p>' +
  '<p>The intercept on the $x_2$-axis is $\\frac{m}{p_2}$ (maximum amount of good 2 when $x_1 = 0$) and on the $x_1$-axis is $\\frac{m}{p_1}$ (maximum amount of good 1 when $x_2 = 0$).</p>' +

  '<h3>Effects of Price and Income Changes</h3>' +
  '<div class="insight-box">' +
  '<strong>Income change:</strong> An increase in $m$ shifts the budget line outward in parallel (without changing the slope). A decrease shifts it inward.' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Price change:</strong> If $p_1$ rises, the budget line rotates inward around the $x_2$-intercept (steeper slope). If $p_1$ falls, it rotates outward (flatter slope). Analogous for changes in $p_2$.' +
  '</div>' +

  '<h3>Numeraire</h3>' +
  '<p>One good can be chosen as the <strong>numeraire</strong> (unit of account) and its price normalized to 1. Setting $p_2 = 1$, all prices are measured relative to good 2. The budget line becomes:</p>' +
  '<div class="formula-block">' +
  '$$p_1 x_1 + x_2 = m$$' +
  '</div>' +
  '<p>In this case, good 2 is measured in monetary units and $p_1$ is the relative price of good 1.</p>' +

  '<h3>Taxes and Subsidies</h3>' +
  '<div class="definition-box">' +
  '<strong>Quantity Tax:</strong> A tax of $t$ per unit of good 1 raises the effective price to $(p_1 + t)$. The budget line becomes steeper.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Ad Valorem Tax:</strong> A tax of $\\tau$ (as a fraction) on the price of good 1 raises the effective price to $(1 + \\tau) p_1$.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Lump-Sum Tax:</strong> A fixed tax $T$ that is independent of consumption reduces available income to $m - T$. The budget line shifts inward in parallel.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Subsidies:</strong> Work as mirror images of taxes. A quantity subsidy of $s$ per unit lowers the effective price to $(p_1 - s)$. A lump-sum subsidy increases income to $m + S$.' +
  '</div>' +

  '<div class="example-box">' +
  '<strong>Example:</strong> A consumer has income $m = 100$, $p_1 = 5$, $p_2 = 10$. The budget line is $5x_1 + 10x_2 = 100$. The $x_1$-intercept is $20$, the $x_2$-intercept is $10$. The slope is $-1/2$. A quantity tax of $t = 1$ on good 1 changes the line to $6x_1 + 10x_2 = 100$ (new $x_1$-intercept: $\\approx 16.67$).' +
  '</div>' +

  '<h2>2. Preferences</h2>' +

  '<div class="definition-box">' +
  '<strong>Preference Relation:</strong> A binary relation on the set of commodity bundles describing the consumer\'s tastes.' +
  '<ul>' +
  '<li><strong>Strict preference</strong> $\\succ$: $(x_1, x_2) \\succ (y_1, y_2)$ means the bundle $(x_1, x_2)$ is strictly preferred.</li>' +
  '<li><strong>Weak preference</strong> $\\succeq$: $(x_1, x_2) \\succeq (y_1, y_2)$ means "at least as good as".</li>' +
  '<li><strong>Indifference</strong> $\\sim$: $(x_1, x_2) \\sim (y_1, y_2)$ means the consumer considers both bundles equally good.</li>' +
  '</ul>' +
  '</div>' +

  '<h3>Axioms of Rational Preferences</h3>' +
  '<div class="definition-box">' +
  '<strong>Completeness:</strong> For all bundles $X$ and $Y$: $X \\succeq Y$ or $Y \\succeq X$ (or both). The consumer can always compare.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Transitivity:</strong> If $X \\succeq Y$ and $Y \\succeq Z$, then $X \\succeq Z$. No contradictions in the ranking.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Reflexivity:</strong> Every bundle is at least as good as itself: $X \\succeq X$.' +
  '</div>' +

  '<h3>Indifference Curves</h3>' +
  '<p>An <strong>indifference curve</strong> (IC) connects all commodity bundles among which the consumer is indifferent. Key properties:</p>' +
  '<ul>' +
  '<li>Indifference curves <strong>cannot cross</strong>. (Proof by contradiction using transitivity.)</li>' +
  '<li>Higher indifference curves represent <strong>higher utility levels</strong> (under monotonicity).</li>' +
  '<li>Every point in the commodity space lies on exactly one IC.</li>' +
  '</ul>' +

  '<h3>Monotonicity</h3>' +
  '<div class="definition-box">' +
  '<strong>Monotonicity ("more is better"):</strong> If $(x_1, x_2)$ contains at least as much of each good as $(y_1, y_2)$ and strictly more of at least one good, then $(x_1, x_2) \\succ (y_1, y_2)$. Under monotonicity, indifference curves have a <strong>negative slope</strong>.' +
  '</div>' +

  '<h3>Convexity</h3>' +
  '<div class="definition-box">' +
  '<strong>Convex preferences:</strong> For two bundles $X$ and $Y$ with $X \\sim Y$: $tX + (1-t)Y \\succeq X$ for all $t \\in [0, 1]$. Averages (mixtures) are weakly preferred.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Strictly convex preferences:</strong> For two distinct bundles $X$ and $Y$ with $X \\sim Y$: $tX + (1-t)Y \\succ X$ for all $t \\in (0, 1)$. Averages are strictly preferred. Indifference curves are strictly bowed toward the origin.' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Significance of convexity:</strong> Convex preferences mean the consumer values variety and does not prefer extreme bundles. The marginal rate of substitution is diminishing (in absolute value).' +
  '</div>' +

  '<h3>Marginal Rate of Substitution (MRS)</h3>' +
  '<div class="definition-box">' +
  '<strong>MRS (Marginal Rate of Substitution):</strong> The slope of the indifference curve at a point. It indicates how much of good 2 the consumer is willing to give up to obtain one more marginal unit of good 1:' +
  '$$MRS_{1,2} = -\\frac{\\Delta x_2}{\\Delta x_1} \\bigg|_{u = \\text{const.}}$$' +
  'Convention: The MRS is often stated as a positive value (the absolute value of the IC slope).' +
  '</div>' +

  '<h2>3. Special Preferences</h2>' +

  '<h3>Perfect Substitutes</h3>' +
  '<div class="definition-box">' +
  '<strong>Utility function:</strong> $u(x_1, x_2) = ax_1 + bx_2$ with $a, b > 0$.' +
  '</div>' +
  '<p>Properties:</p>' +
  '<ul>' +
  '<li>Indifference curves are <strong>straight lines</strong> with slope $-a/b$.</li>' +
  '<li>$MRS = a/b$ (constant).</li>' +
  '<li>The goods are exchangeable at a fixed rate.</li>' +
  '</ul>' +
  '<div class="example-box">' +
  '<strong>Example:</strong> Red and blue pens that write equally well: $u = x_1 + x_2$. The ICs are lines with slope $-1$. The consumer buys only the cheaper good (corner solution).' +
  '</div>' +

  '<h3>Perfect Complements</h3>' +
  '<div class="definition-box">' +
  '<strong>Utility function:</strong> $u(x_1, x_2) = \\min\\{ax_1, bx_2\\}$ with $a, b > 0$.' +
  '</div>' +
  '<p>Properties:</p>' +
  '<ul>' +
  '<li>Indifference curves are <strong>L-shaped</strong> with the kink along the line $ax_1 = bx_2$, i.e., $x_2 = \\frac{a}{b} x_1$.</li>' +
  '<li>The goods are always consumed in the fixed ratio $b : a$.</li>' +
  '<li>The MRS is undefined at the kink.</li>' +
  '</ul>' +
  '<div class="example-box">' +
  '<strong>Example:</strong> Left and right shoes: $u = \\min\\{x_1, x_2\\}$. A left shoe without a right shoe provides no additional utility.' +
  '</div>' +

  '<h3>Cobb-Douglas Preferences</h3>' +
  '<div class="definition-box">' +
  '<strong>Utility function:</strong> $u(x_1, x_2) = x_1^a x_2^b$ with $a, b > 0$.' +
  '</div>' +
  '<p>Properties:</p>' +
  '<ul>' +
  '<li>Indifference curves are <strong>smooth, strictly convex curves</strong> that approach the axes asymptotically.</li>' +
  '<li>$MRS = \\frac{a}{b} \\cdot \\frac{x_2}{x_1}$.</li>' +
  '<li>The MRS diminishes (in absolute value) along an IC.</li>' +
  '<li>Monotonic transformation: $v = a \\ln x_1 + b \\ln x_2$ represents the same preferences.</li>' +
  '</ul>' +
  '<div class="insight-box">' +
  '<strong>Key insight:</strong> Cobb-Douglas preferences result in constant expenditure shares for each good (in the standard form $u = x_1^a x_2^{1-a}$: share $a$ for good 1, share $(1-a)$ for good 2).' +
  '</div>' +

  '<h3>Quasilinear Preferences</h3>' +
  '<div class="definition-box">' +
  '<strong>Utility function:</strong> $u(x_1, x_2) = v(x_1) + x_2$, where $v$ is a concave function (e.g., $v(x_1) = \\ln x_1$ or $v(x_1) = \\sqrt{x_1}$).' +
  '</div>' +
  '<p>Properties:</p>' +
  '<ul>' +
  '<li>Indifference curves are <strong>vertically parallel shifts</strong> of each other &ndash; they have the same slope at the same $x_1$.</li>' +
  '<li>$MRS = v\'(x_1)$ &ndash; depends only on $x_1$, not on $x_2$.</li>' +
  '<li>Demand for good 1 is independent of income (no income effect for good 1), provided an interior solution exists.</li>' +
  '</ul>' +

  '<h2>4. Utility Functions</h2>' +

  '<div class="definition-box">' +
  '<strong>Utility Function:</strong> A function $u : \\mathbb{R}^2_+ \\to \\mathbb{R}$ that assigns a real number to each commodity bundle such that:' +
  '$$u(x_1, x_2) \\geq u(y_1, y_2) \\iff (x_1, x_2) \\succeq (y_1, y_2)$$' +
  '</div>' +

  '<h3>Ordinality of Utility</h3>' +
  '<div class="insight-box">' +
  '<strong>Ordinality:</strong> Only the ranking matters, not the absolute utility values. Whether $u(A) = 10$ and $u(B) = 5$ or $u(A) = 100$ and $u(B) = 1$ is irrelevant &ndash; in both cases $A$ is preferred to $B$. The difference has no meaning.' +
  '</div>' +

  '<h3>Monotonic Transformations</h3>' +
  '<div class="definition-box">' +
  '<strong>Monotonic Transformation:</strong> If $u$ is a utility function and $f$ is a strictly monotonically increasing function, then $v = f(u)$ is also a utility function representing the same preferences.' +
  '</div>' +
  '<div class="example-box">' +
  '<strong>Example:</strong> $u = x_1^2 x_2^3$ and $v = \\ln u = 2 \\ln x_1 + 3 \\ln x_2$ represent the same preferences, since $\\ln$ is strictly monotonically increasing.' +
  '</div>' +

  '<h3>Marginal Utility</h3>' +
  '<div class="definition-box">' +
  '<strong>Marginal Utility:</strong> The additional utility from one more marginal unit of good $i$:' +
  '$$MU_i = \\frac{\\partial u}{\\partial x_i}$$' +
  '</div>' +
  '<p>Marginal utility itself is <strong>not ordinally invariant</strong> &ndash; it changes under monotonic transformation. However, the ratio of marginal utilities is ordinally invariant.</p>' +

  '<h3>MRS from the Utility Function</h3>' +
  '<p>Along an indifference curve, $du = 0$:</p>' +
  '<div class="formula-block">' +
  '$$du = MU_1 \\, dx_1 + MU_2 \\, dx_2 = 0$$' +
  '$$\\Rightarrow MRS_{1,2} = \\frac{MU_1}{MU_2} = -\\frac{dx_2}{dx_1}\\bigg|_{u = \\text{const.}}$$' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Key point:</strong> The ratio $MU_1 / MU_2$ is ordinally invariant, even though the individual marginal utility values are not.' +
  '</div>' +

  '<h2>5. Utility Maximization</h2>' +

  '<p>The consumer maximizes utility subject to the budget constraint:</p>' +
  '<div class="formula-block">' +
  '$$\\max_{x_1, x_2} \\; u(x_1, x_2) \\quad \\text{s.t.} \\quad p_1 x_1 + p_2 x_2 \\leq m$$' +
  '</div>' +

  '<h3>Tangency Condition (Interior Solution)</h3>' +
  '<div class="definition-box">' +
  '<strong>Tangency condition:</strong> At the optimum for an interior solution, the indifference curve is tangent to the budget line:' +
  '$$MRS_{1,2} = \\frac{p_1}{p_2}$$' +
  'Equivalently:' +
  '$$\\frac{MU_1}{p_1} = \\frac{MU_2}{p_2}$$' +
  'The "bang for the buck" (marginal utility per monetary unit) must be equal for both goods.' +
  '</div>' +

  '<h3>Lagrange Method</h3>' +
  '<p>Formulation of the optimization problem using the Lagrange multiplier:</p>' +
  '<div class="formula-block">' +
  '$$\\mathcal{L} = u(x_1, x_2) + \\lambda (m - p_1 x_1 - p_2 x_2)$$' +
  '</div>' +
  '<p>The first-order conditions (FOC) are:</p>' +
  '<div class="formula-block">' +
  '$$\\frac{\\partial \\mathcal{L}}{\\partial x_1} = \\frac{\\partial u}{\\partial x_1} - \\lambda p_1 = 0 \\quad \\Rightarrow \\quad MU_1 = \\lambda p_1$$' +
  '$$\\frac{\\partial \\mathcal{L}}{\\partial x_2} = \\frac{\\partial u}{\\partial x_2} - \\lambda p_2 = 0 \\quad \\Rightarrow \\quad MU_2 = \\lambda p_2$$' +
  '$$\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = m - p_1 x_1 - p_2 x_2 = 0$$' +
  '</div>' +
  '<p>From the first two conditions: $\\frac{MU_1}{MU_2} = \\frac{p_1}{p_2}$, which is the tangency condition. The third condition is the budget constraint.</p>' +
  '<div class="insight-box">' +
  '<strong>Interpretation of $\\lambda$:</strong> The Lagrange multiplier $\\lambda$ represents the shadow price of income: the additional utility from a marginal increase in income ($\\lambda = \\partial u^* / \\partial m$).' +
  '</div>' +

  '<h3>Corner Solutions</h3>' +
  '<p>When the tangency condition cannot be satisfied at any positive quantity of both goods, a corner solution occurs. The consumer consumes only one good.</p>' +
  '<div class="example-box">' +
  '<strong>Example with perfect substitutes:</strong> For $u = ax_1 + bx_2$, $MRS = a/b$ is constant. If $a/b > p_1/p_2$, the consumer buys only good 1: $x_1^* = m/p_1$, $x_2^* = 0$. If $a/b < p_1/p_2$, only good 2: $x_1^* = 0$, $x_2^* = m/p_2$. If $a/b = p_1/p_2$, any combination on the budget line is optimal.' +
  '</div>' +

  '<h3>Cobb-Douglas Optimization (Detailed)</h3>' +
  '<div class="example-box">' +
  '<strong>Example:</strong> $u(x_1, x_2) = x_1^a x_2^{1-a}$ with $0 < a < 1$.' +
  '<br><br>' +
  'Lagrangian: $\\mathcal{L} = x_1^a x_2^{1-a} + \\lambda(m - p_1 x_1 - p_2 x_2)$' +
  '<br><br>' +
  'FOC:<br>' +
  '$\\frac{\\partial \\mathcal{L}}{\\partial x_1} = a x_1^{a-1} x_2^{1-a} - \\lambda p_1 = 0$<br>' +
  '$\\frac{\\partial \\mathcal{L}}{\\partial x_2} = (1-a) x_1^a x_2^{-a} - \\lambda p_2 = 0$<br>' +
  '$\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = m - p_1 x_1 - p_2 x_2 = 0$' +
  '<br><br>' +
  'Dividing the first condition by the second:' +
  '$$\\frac{a}{1-a} \\cdot \\frac{x_2}{x_1} = \\frac{p_1}{p_2}$$' +
  '$$\\Rightarrow x_2 = \\frac{(1-a) p_1}{a p_2} x_1$$' +
  'Substituting into the budget constraint:' +
  '$$p_1 x_1 + p_2 \\cdot \\frac{(1-a) p_1}{a p_2} x_1 = m$$' +
  '$$p_1 x_1 \\left(1 + \\frac{1-a}{a}\\right) = m$$' +
  '$$p_1 x_1 \\cdot \\frac{1}{a} = m$$' +
  '<br>' +
  '<strong>Optimal demand:</strong>' +
  '$$x_1^* = \\frac{am}{p_1}, \\qquad x_2^* = \\frac{(1-a)m}{p_2}$$' +
  'The consumer spends a fraction $a$ of income on good 1 and $(1-a)$ on good 2. The expenditure shares are constant and independent of prices.' +
  '</div>' +

  '<div class="interactive-widget"><button class="widget-fullscreen-btn" title="Fullscreen">&#x26F6;</button><button class="widget-exit-fullscreen-btn">&#x2190; Back</button>' +
  '<div class="interactive-widget-title">Interactive Tool: Utility Maximization</div>' +
  '<iframe src="https://tuda-mikro.org/lecture_01/lecture_01.html#/utilitymax" loading="lazy" title="Interactive diagram for utility maximization"></iframe>' +
  '</div>' +

  '<h2>6. Demand Curves</h2>' +

  '<h3>Marshallian Demand Function</h3>' +
  '<div class="definition-box">' +
  '<strong>Marshallian demand:</strong> The optimal demand as a function of prices and income:' +
  '$$x_i^* = x_i(p_1, p_2, m)$$' +
  'It results from solving the utility maximization problem.' +
  '</div>' +

  '<h3>Demand Curve</h3>' +
  '<p>The demand curve shows the quantity demanded of a good as a function of its price, holding $p_2$ and $m$ constant. For most goods it is downward-sloping (law of demand).</p>' +

  '<div class="interactive-widget"><button class="widget-fullscreen-btn" title="Fullscreen">&#x26F6;</button><button class="widget-exit-fullscreen-btn">&#x2190; Back</button>' +
  '<div class="interactive-widget-title">Interactive Tool: Market Equilibrium</div>' +
  '<iframe src="https://tuda-mikro.org/lecture_01/lecture_01.html#/market" loading="lazy" title="Interactive diagram for market equilibrium"></iframe>' +
  '</div>' +

  '<h3>Normal and Inferior Goods</h3>' +
  '<div class="definition-box">' +
  '<strong>Normal good:</strong> A good whose demand increases with rising income:' +
  '$$\\frac{\\partial x_i}{\\partial m} > 0$$' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Inferior good:</strong> A good whose demand decreases with rising income:' +
  '$$\\frac{\\partial x_i}{\\partial m} < 0$$' +
  '</div>' +
  '<div class="example-box">' +
  '<strong>Example:</strong> Cheap instant noodles might be an inferior good &ndash; as income rises, the consumer switches to higher-quality foods.' +
  '</div>' +

  '<h3>Engel Curves</h3>' +
  '<div class="definition-box">' +
  '<strong>Engel curve:</strong> Shows the quantity demanded of a good as a function of income at constant prices. It is upward-sloping for normal goods and downward-sloping for inferior goods.' +
  '</div>' +

  '<h3>Ordinary and Giffen Goods</h3>' +
  '<div class="definition-box">' +
  '<strong>Ordinary good:</strong> A good whose demand decreases when its own price rises:' +
  '$$\\frac{\\partial x_i}{\\partial p_i} < 0$$' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Giffen good:</strong> A good whose demand increases when its own price rises:' +
  '$$\\frac{\\partial x_i}{\\partial p_i} > 0$$' +
  'A Giffen good must be an inferior good where the income effect outweighs the substitution effect (very rare in practice).' +
  '</div>' +

  '<h2>7. Slutsky Decomposition</h2>' +

  '<p>The <strong>Slutsky decomposition</strong> breaks down the total effect of a price change on demand into two components:</p>' +
  '<div class="formula-block">' +
  '$$\\underbrace{\\Delta x_1}_{\\text{Total effect}} = \\underbrace{\\Delta x_1^s}_{\\text{Substitution effect}} + \\underbrace{\\Delta x_1^n}_{\\text{Income effect}}$$' +
  '</div>' +

  '<h3>Substitution Effect</h3>' +
  '<div class="definition-box">' +
  '<strong>Substitution effect (Slutsky):</strong> The change in demand due to changed relative prices, while <strong>holding purchasing power constant</strong> (i.e., income is adjusted so that the original bundle is just barely affordable).' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Law:</strong> The substitution effect <strong>always works opposite</strong> to the price change. If $p_1$ rises, the substituted demand for good 1 falls (and vice versa). Formally: $\\Delta x_1^s / \\Delta p_1 \\leq 0$.' +
  '</div>' +

  '<h3>Income Effect</h3>' +
  '<div class="definition-box">' +
  '<strong>Income effect:</strong> The change in demand due to changed purchasing power. A price increase of good 1 makes the consumer effectively poorer.' +
  '<ul>' +
  '<li>Normal good: income effect reinforces the substitution effect (real income loss reduces demand).</li>' +
  '<li>Inferior good: income effect works against the substitution effect.</li>' +
  '</ul>' +
  '</div>' +

  '<h3>Relationship with Good Types</h3>' +
  '<div class="insight-box">' +
  '<strong>Normal good:</strong> $SE < 0$ and $IE < 0$ (for price increase) &rarr; total effect negative &rarr; ordinary good.' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Inferior good (non-Giffen):</strong> $SE < 0$ and $IE > 0$, but $|SE| > |IE|$ &rarr; total effect still negative &rarr; ordinary good.' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Giffen good:</strong> $SE < 0$ and $IE > 0$, but $|IE| > |SE|$ &rarr; total effect positive. Extremely rare.' +
  '</div>' +

  '<h3>Slutsky Equation</h3>' +
  '<div class="formula-block">' +
  '$$\\frac{\\partial x_i}{\\partial p_j} = \\frac{\\partial x_i^s}{\\partial p_j} - x_j \\frac{\\partial x_i}{\\partial m}$$' +
  '</div>' +
  '<p>Interpretation of the Slutsky equation:</p>' +
  '<ul>' +
  '<li>$\\frac{\\partial x_i}{\\partial p_j}$: total effect of a change in $p_j$ on $x_i$</li>' +
  '<li>$\\frac{\\partial x_i^s}{\\partial p_j}$: substitution effect (compensated demand change)</li>' +
  '<li>$x_j \\frac{\\partial x_i}{\\partial m}$: income effect, weighted by the consumed quantity $x_j$</li>' +
  '</ul>' +

  '<div class="example-box">' +
  '<strong>Numerical example:</strong> Suppose $p_1$ rises from 4 to 6, $p_2 = 1$, $m = 120$. Original demand: $x_1 = 15$, $x_2 = 60$. Slutsky-compensated income: $m\' = m + \\Delta p_1 \\cdot x_1 = 120 + 2 \\cdot 15 = 150$. At $p_1 = 6$ and $m\' = 150$: new $x_1^s = 12$. Substitution effect: $12 - 15 = -3$. At $p_1 = 6$ and $m = 120$: $x_1 = 10$. Income effect: $10 - 12 = -2$. Total effect: $10 - 15 = -5 = -3 + (-2)$.' +
  '</div>' +

  '<h2>8. Elasticities</h2>' +

  '<div class="definition-box">' +
  '<strong>Elasticity:</strong> A dimensionless measure of the relative response of one variable to the relative change of another variable.' +
  '</div>' +

  '<h3>Price Elasticity of Demand</h3>' +
  '<div class="formula-block">' +
  '$$\\varepsilon_{x,p} = \\frac{\\partial x}{\\partial p} \\cdot \\frac{p}{x} = \\frac{\\%\\Delta x}{\\%\\Delta p}$$' +
  '</div>' +
  '<p>The price elasticity is typically negative (for ordinary goods).</p>' +
  '<div class="definition-box">' +
  '<strong>Elastic:</strong> $|\\varepsilon_{x,p}| > 1$ &ndash; the percentage change in quantity exceeds the percentage change in price. A price increase reduces revenue.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Inelastic:</strong> $|\\varepsilon_{x,p}| < 1$ &ndash; the percentage change in quantity is less than the price change. A price increase raises revenue.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Unit elastic:</strong> $|\\varepsilon_{x,p}| = 1$ &ndash; revenue remains constant when the price changes.' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Elasticity and revenue:</strong> Revenue is $R = p \\cdot x(p)$. We have: $\\frac{dR}{dp} = x(1 + \\varepsilon_{x,p})$. If $|\\varepsilon| > 1$ (elastic), $R$ falls with a price increase. If $|\\varepsilon| < 1$ (inelastic), $R$ rises.' +
  '</div>' +

  '<h3>Income Elasticity</h3>' +
  '<div class="formula-block">' +
  '$$\\varepsilon_{x,m} = \\frac{\\partial x}{\\partial m} \\cdot \\frac{m}{x}$$' +
  '</div>' +
  '<ul>' +
  '<li>$\\varepsilon_{x,m} > 0$: normal good</li>' +
  '<li>$\\varepsilon_{x,m} < 0$: inferior good</li>' +
  '<li>$\\varepsilon_{x,m} > 1$: luxury good (demand grows more than proportionally with income)</li>' +
  '<li>$0 < \\varepsilon_{x,m} < 1$: necessity</li>' +
  '</ul>' +

  '<h3>Cross-Price Elasticity</h3>' +
  '<div class="formula-block">' +
  '$$\\varepsilon_{x_i, p_j} = \\frac{\\partial x_i}{\\partial p_j} \\cdot \\frac{p_j}{x_i}$$' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Substitutes (gross substitutes):</strong> $\\varepsilon_{x_i, p_j} > 0$ &ndash; when the price of good $j$ rises, demand for good $i$ increases (e.g., butter and margarine).' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Complements (gross complements):</strong> $\\varepsilon_{x_i, p_j} < 0$ &ndash; when the price of good $j$ rises, demand for good $i$ decreases (e.g., printers and ink cartridges).' +
  '</div>' +

  '<div class="example-box">' +
  '<strong>Example (linear demand):</strong> $x = a - bp$. Then: $\\varepsilon_{x,p} = -b \\cdot \\frac{p}{a - bp}$. At $p = 0$: $\\varepsilon = 0$ (perfectly inelastic). At $x = 0$ (i.e., $p = a/b$): $|\\varepsilon| \\to \\infty$ (perfectly elastic). At the midpoint ($x = a/2$, $p = a/(2b)$): $|\\varepsilon| = 1$.' +
  '</div>' +

  '<h2>9. Consumer Surplus</h2>' +

  '<div class="definition-box">' +
  '<strong>Willingness to Pay:</strong> The maximum price a consumer is willing to pay for an additional unit of a good. It corresponds to the height of the demand curve at the respective quantity.' +
  '</div>' +

  '<h3>Consumer Surplus (CS)</h3>' +
  '<div class="definition-box">' +
  '<strong>Consumer surplus:</strong> The difference between willingness to pay and the actual market price, summed over all consumed units:' +
  '$$CS = \\int_0^{x^*} p(x)\\, dx - p^* \\cdot x^*$$' +
  'Graphically: the area under the demand curve and above the market price.' +
  '</div>' +

  '<div class="insight-box">' +
  '<strong>Interpretation:</strong> Consumer surplus measures the net benefit a consumer derives from purchasing a good. It is the sum of "bargains" &ndash; each unit for which the consumer would have been willing to pay more than the actual price generates a surplus.' +
  '</div>' +

  '<h3>Price Change and Consumer Surplus</h3>' +
  '<p>When the price rises from $p_0$ to $p_1$, consumer surplus decreases. The loss consists of:</p>' +
  '<ul>' +
  '<li>A rectangle: $\\Delta p \\cdot x_1$ (the extra cost for units still consumed)</li>' +
  '<li>A triangle: $\\frac{1}{2} \\Delta p \\cdot \\Delta x$ (the surplus of units no longer consumed)</li>' +
  '</ul>' +

  '<h3>Compensating and Equivalent Variation</h3>' +
  '<div class="definition-box">' +
  '<strong>Compensating Variation (CV):</strong> The monetary amount one would need to give the consumer after a price increase so that they reach the <strong>original utility level</strong>.' +
  '</div>' +
  '<div class="definition-box">' +
  '<strong>Equivalent Variation (EV):</strong> The monetary amount one would need to take from the consumer <strong>before</strong> a price increase so that they reach the <strong>new (lower) utility level</strong>.' +
  '</div>' +
  '<div class="insight-box">' +
  '<strong>Relationship:</strong> With quasilinear preferences: $CV = EV = \\Delta CS$. In general, $EV \\leq \\Delta CS \\leq CV$ (for a normal good with price increase) or the reverse order for a price decrease.' +
  '</div>' +

  '<div class="example-box">' +
  '<strong>Example:</strong> Linear demand $x = 20 - 2p$. Price rises from $p_0 = 4$ to $p_1 = 6$. Old quantity: $x_0 = 12$, new quantity: $x_1 = 8$. $\\Delta CS = \\frac{1}{2}(12 + 8) \\cdot 2 = 20$. The consumer loses a surplus of 20 monetary units.' +
  '</div>' +

  '<h2>Further Reading (Varian)</h2>' +
  '<ul>' +
  '<li><strong>Chapter 2: Budget Constraint</strong> (pp. 21&ndash;33) &ndash; Introduction of the budget set, budget line, and effects of taxes, subsidies and price changes on consumption possibilities.</li>' +
  '<li><strong>Chapter 3: Preferences</strong> (pp. 35&ndash;55) &ndash; Axioms of rational preferences (completeness, transitivity), indifference curves and the marginal rate of substitution.</li>' +
  '<li><strong>Chapter 4: Utility</strong> (pp. 57&ndash;77) &ndash; Utility functions as ordinal representations of preferences; Cobb-Douglas, perfect substitutes and complements.</li>' +
  '<li><strong>Chapter 5: Choice</strong> (pp. 79&ndash;103) &ndash; Utility maximization subject to the budget constraint, tangency condition $MRS = p_1/p_2$ and the Lagrange method.</li>' +
  '<li><strong>Chapter 6: Demand</strong> (pp. 105&ndash;127) &ndash; Derivation of individual demand curves, normal vs. inferior goods, Engel curves and price-consumption curves.</li>' +
  '<li><strong>Chapter 7: Revealed Preference</strong> (pp. 129&ndash;147) &ndash; WARP and SARP: how observed choices allow inferences about preferences, with application to price indices.</li>' +
  '<li><strong>Chapter 8: Slutsky Equation</strong> (pp. 149&ndash;173) &ndash; Decomposition of the price effect into substitution and income effects; explains Giffen goods as inferior goods with a dominating income effect.</li>' +
  '<li><strong>Chapter 14: Consumer Surplus</strong> (pp. 277&ndash;297) &ndash; Measuring welfare changes via consumer surplus, compensating variation and equivalent variation.</li>' +
  '<li><strong>Chapter 15: Market Demand</strong> (pp. 299&ndash;322) &ndash; Aggregation of individual to market demand curves, price elasticity and the relationship between elasticity and revenue.</li>' +
  '</ul>'

const cheatsheetDe =
  '<h2>Budgetbeschränkung</h2>' +
  '<div class="formula-block">' +
  'Budgetmenge: $B = \\{(x_1, x_2) : p_1 x_1 + p_2 x_2 \\leq m\\}$<br>' +
  'Budgetgerade: $p_1 x_1 + p_2 x_2 = m \\Leftrightarrow x_2 = \\frac{m}{p_2} - \\frac{p_1}{p_2} x_1$<br>' +
  'Steigung: $-p_1/p_2$ (Opportunitätskosten)<br>' +
  'Achsenabschnitte: $m/p_1$ und $m/p_2$<br>' +
  'Mengensteuer $t$: Preis wird $(p_1+t)$ | Wertsteuer $\\tau$: Preis wird $(1+\\tau)p_1$<br>' +
  'Pauschalsteuer $T$: Einkommen wird $m - T$' +
  '</div>' +

  '<h2>Präferenzen</h2>' +
  '<div class="formula-block">' +
  'Axiome: Vollständigkeit, Transitivität, Reflexivität<br>' +
  '$\\succ$ strikt bevorzugt | $\\succeq$ schwach bevorzugt | $\\sim$ indifferent<br>' +
  'IK schneiden sich nicht | Höhere IK = höherer Nutzen<br>' +
  'Monotonie: mehr ist besser &rarr; IK haben negative Steigung<br>' +
  'Konvexität: Durchschnitte werden (schwach) bevorzugt<br>' +
  '$MRS_{1,2} = -\\frac{\\Delta x_2}{\\Delta x_1}\\big|_{u=\\text{const.}}$ (Steigung der IK)' +
  '</div>' +

  '<h2>Spezielle Präferenzen</h2>' +
  '<div class="formula-block">' +
  '<strong>Perfekte Substitute:</strong> $u = ax_1 + bx_2$, IK linear, $MRS = a/b$<br>' +
  '<strong>Perfekte Komplemente:</strong> $u = \\min\\{ax_1, bx_2\\}$, L-förmige IK<br>' +
  '<strong>Cobb-Douglas:</strong> $u = x_1^a x_2^b$, $MRS = \\frac{a}{b} \\cdot \\frac{x_2}{x_1}$<br>' +
  '<strong>Quasilinear:</strong> $u = v(x_1) + x_2$, parallele IK, $MRS = v\'(x_1)$' +
  '</div>' +

  '<h2>Nutzenfunktionen</h2>' +
  '<div class="formula-block">' +
  'Ordinal: nur Rangordnung zählt<br>' +
  'Monotone Transformation $v = f(u)$ mit $f\' > 0$ erhält Präferenzen<br>' +
  'Grenznutzen: $MU_i = \\partial u / \\partial x_i$<br>' +
  '$MRS_{1,2} = MU_1 / MU_2$ (ordinal invariant)' +
  '</div>' +

  '<h2>Nutzenmaximierung</h2>' +
  '<div class="formula-block">' +
  '$\\max u(x_1,x_2)$ u.d.N. $p_1 x_1 + p_2 x_2 \\leq m$<br>' +
  'Tangentialbedingung: $MRS = p_1/p_2 \\Leftrightarrow MU_1/p_1 = MU_2/p_2$<br>' +
  'Lagrange: $\\mathcal{L} = u(x_1,x_2) + \\lambda(m - p_1 x_1 - p_2 x_2)$<br>' +
  'FOC: $MU_i = \\lambda p_i$ für alle $i$, sowie Budgetbeschränkung<br>' +
  '<strong>Cobb-Douglas</strong> $u = x_1^a x_2^{1-a}$: $x_1^* = \\frac{am}{p_1}$, $x_2^* = \\frac{(1-a)m}{p_2}$<br>' +
  'Ecklösung bei perf. Substituten: nur billigeres Gut kaufen' +
  '</div>' +

  '<h2>Nachfragekurven</h2>' +
  '<div class="formula-block">' +
  'Marshallsche Nachfrage: $x_i^* = x_i(p_1, p_2, m)$<br>' +
  'Normales Gut: $\\partial x_i / \\partial m > 0$ | Inferiores Gut: $\\partial x_i / \\partial m < 0$<br>' +
  'Gewöhnliches Gut: $\\partial x_i / \\partial p_i < 0$ | Giffen-Gut: $\\partial x_i / \\partial p_i > 0$<br>' +
  'Engelkurve: $x_i$ als Funktion von $m$ (bei konst. Preisen)' +
  '</div>' +

  '<h2>Slutsky-Zerlegung</h2>' +
  '<div class="formula-block">' +
  '$\\Delta x_1 = \\Delta x_1^s + \\Delta x_1^n$ (Gesamt = Substitution + Einkommen)<br>' +
  'SE immer entgegen Preisänderung ($\\Delta x_1^s / \\Delta p_1 \\leq 0$)<br>' +
  'Normales Gut: SE und IE verstärken sich &rarr; gewöhnlich<br>' +
  'Giffen: inferiores Gut mit $|IE| > |SE|$<br>' +
  'Slutsky-Gleichung: $\\frac{\\partial x_i}{\\partial p_j} = \\frac{\\partial x_i^s}{\\partial p_j} - x_j \\frac{\\partial x_i}{\\partial m}$<br>' +
  'Kompensiertes Einkommen: $m\' = m + \\Delta p_1 \\cdot x_1$' +
  '</div>' +

  '<h2>Elastizitäten</h2>' +
  '<div class="formula-block">' +
  'Preiselastizität: $\\varepsilon_{x,p} = \\frac{\\partial x}{\\partial p} \\cdot \\frac{p}{x}$<br>' +
  'Einkommenselastizität: $\\varepsilon_{x,m} = \\frac{\\partial x}{\\partial m} \\cdot \\frac{m}{x}$<br>' +
  'Kreuzpreiselastizität: $\\varepsilon_{x_i,p_j} = \\frac{\\partial x_i}{\\partial p_j} \\cdot \\frac{p_j}{x_i}$<br>' +
  '$|\\varepsilon| > 1$: elastisch | $|\\varepsilon| < 1$: unelastisch | $|\\varepsilon| = 1$: einheitselastisch<br>' +
  'Substitute: $\\varepsilon_{x_i,p_j} > 0$ | Komplemente: $\\varepsilon_{x_i,p_j} < 0$<br>' +
  'Umsatz: $\\frac{dR}{dp} = x(1 + \\varepsilon_{x,p})$' +
  '</div>' +

  '<h2>Konsumentenrente</h2>' +
  '<div class="formula-block">' +
  '$CS = \\int_0^{x^*} p(x)\\,dx - p^* \\cdot x^*$ (Fläche unter Nachfragekurve über Preis)<br>' +
  'Kompensierende Variation (CV): Zahlung für altes Nutzenniveau nach Preiserhöhung<br>' +
  'Äquivalente Variation (EV): Entzug für neues Nutzenniveau vor Preiserhöhung<br>' +
  'Quasilinear: $CV = EV = \\Delta CS$<br>' +
  'Allgemein (normales Gut, Preiserhöhung): $EV \\leq \\Delta CS \\leq CV$' +
  '</div>'

const cheatsheetEn =
  '<h2>Budget Constraint</h2>' +
  '<div class="formula-block">' +
  'Budget set: $B = \\{(x_1, x_2) : p_1 x_1 + p_2 x_2 \\leq m\\}$<br>' +
  'Budget line: $p_1 x_1 + p_2 x_2 = m \\Leftrightarrow x_2 = \\frac{m}{p_2} - \\frac{p_1}{p_2} x_1$<br>' +
  'Slope: $-p_1/p_2$ (opportunity cost)<br>' +
  'Intercepts: $m/p_1$ and $m/p_2$<br>' +
  'Quantity tax $t$: price becomes $(p_1+t)$ | Ad valorem tax $\\tau$: price becomes $(1+\\tau)p_1$<br>' +
  'Lump-sum tax $T$: income becomes $m - T$' +
  '</div>' +

  '<h2>Preferences</h2>' +
  '<div class="formula-block">' +
  'Axioms: completeness, transitivity, reflexivity<br>' +
  '$\\succ$ strictly preferred | $\\succeq$ weakly preferred | $\\sim$ indifferent<br>' +
  'ICs cannot cross | Higher IC = higher utility<br>' +
  'Monotonicity: more is better &rarr; ICs slope downward<br>' +
  'Convexity: averages (weakly) preferred<br>' +
  '$MRS_{1,2} = -\\frac{\\Delta x_2}{\\Delta x_1}\\big|_{u=\\text{const.}}$ (slope of IC)' +
  '</div>' +

  '<h2>Special Preferences</h2>' +
  '<div class="formula-block">' +
  '<strong>Perfect substitutes:</strong> $u = ax_1 + bx_2$, linear ICs, $MRS = a/b$<br>' +
  '<strong>Perfect complements:</strong> $u = \\min\\{ax_1, bx_2\\}$, L-shaped ICs<br>' +
  '<strong>Cobb-Douglas:</strong> $u = x_1^a x_2^b$, $MRS = \\frac{a}{b} \\cdot \\frac{x_2}{x_1}$<br>' +
  '<strong>Quasilinear:</strong> $u = v(x_1) + x_2$, parallel ICs, $MRS = v\'(x_1)$' +
  '</div>' +

  '<h2>Utility Functions</h2>' +
  '<div class="formula-block">' +
  'Ordinal: only ranking matters<br>' +
  'Monotonic transformation $v = f(u)$ with $f\' > 0$ preserves preferences<br>' +
  'Marginal utility: $MU_i = \\partial u / \\partial x_i$<br>' +
  '$MRS_{1,2} = MU_1 / MU_2$ (ordinally invariant)' +
  '</div>' +

  '<h2>Utility Maximization</h2>' +
  '<div class="formula-block">' +
  '$\\max u(x_1,x_2)$ s.t. $p_1 x_1 + p_2 x_2 \\leq m$<br>' +
  'Tangency: $MRS = p_1/p_2 \\Leftrightarrow MU_1/p_1 = MU_2/p_2$<br>' +
  'Lagrangian: $\\mathcal{L} = u(x_1,x_2) + \\lambda(m - p_1 x_1 - p_2 x_2)$<br>' +
  'FOC: $MU_i = \\lambda p_i$ for all $i$, plus budget constraint<br>' +
  '<strong>Cobb-Douglas</strong> $u = x_1^a x_2^{1-a}$: $x_1^* = \\frac{am}{p_1}$, $x_2^* = \\frac{(1-a)m}{p_2}$<br>' +
  'Corner solution for perfect substitutes: buy only the cheaper good' +
  '</div>' +

  '<h2>Demand Curves</h2>' +
  '<div class="formula-block">' +
  'Marshallian demand: $x_i^* = x_i(p_1, p_2, m)$<br>' +
  'Normal good: $\\partial x_i / \\partial m > 0$ | Inferior good: $\\partial x_i / \\partial m < 0$<br>' +
  'Ordinary good: $\\partial x_i / \\partial p_i < 0$ | Giffen good: $\\partial x_i / \\partial p_i > 0$<br>' +
  'Engel curve: $x_i$ as a function of $m$ (at constant prices)' +
  '</div>' +

  '<h2>Slutsky Decomposition</h2>' +
  '<div class="formula-block">' +
  '$\\Delta x_1 = \\Delta x_1^s + \\Delta x_1^n$ (Total = Substitution + Income)<br>' +
  'SE always opposite to price change ($\\Delta x_1^s / \\Delta p_1 \\leq 0$)<br>' +
  'Normal good: SE and IE reinforce &rarr; ordinary<br>' +
  'Giffen: inferior good with $|IE| > |SE|$<br>' +
  'Slutsky equation: $\\frac{\\partial x_i}{\\partial p_j} = \\frac{\\partial x_i^s}{\\partial p_j} - x_j \\frac{\\partial x_i}{\\partial m}$<br>' +
  'Compensated income: $m\' = m + \\Delta p_1 \\cdot x_1$' +
  '</div>' +

  '<h2>Elasticities</h2>' +
  '<div class="formula-block">' +
  'Price elasticity: $\\varepsilon_{x,p} = \\frac{\\partial x}{\\partial p} \\cdot \\frac{p}{x}$<br>' +
  'Income elasticity: $\\varepsilon_{x,m} = \\frac{\\partial x}{\\partial m} \\cdot \\frac{m}{x}$<br>' +
  'Cross-price elasticity: $\\varepsilon_{x_i,p_j} = \\frac{\\partial x_i}{\\partial p_j} \\cdot \\frac{p_j}{x_i}$<br>' +
  '$|\\varepsilon| > 1$: elastic | $|\\varepsilon| < 1$: inelastic | $|\\varepsilon| = 1$: unit elastic<br>' +
  'Substitutes: $\\varepsilon_{x_i,p_j} > 0$ | Complements: $\\varepsilon_{x_i,p_j} < 0$<br>' +
  'Revenue: $\\frac{dR}{dp} = x(1 + \\varepsilon_{x,p})$' +
  '</div>' +

  '<h2>Consumer Surplus</h2>' +
  '<div class="formula-block">' +
  '$CS = \\int_0^{x^*} p(x)\\,dx - p^* \\cdot x^*$ (area under demand curve above price)<br>' +
  'Compensating Variation (CV): payment to restore old utility after price increase<br>' +
  'Equivalent Variation (EV): taking away to reach new utility before price increase<br>' +
  'Quasilinear: $CV = EV = \\Delta CS$<br>' +
  'General (normal good, price increase): $EV \\leq \\Delta CS \\leq CV$' +
  '</div>'

export const nachfrage: Subject = {
  id: 'nachfrage',
  titleDe: 'Nachfrage',
  titleEn: 'Demand',
  shortDescDe: 'Budgetbeschränkungen, Präferenzen, Nutzen, Optimierung und Nachfragekurven',
  shortDescEn: 'Budget constraints, preferences, utility, optimization and demand curves',
  color: '#0aafbf',
  icon: '\u{1F4CA}',
  videoLinks: [
    {
      titleDe: 'Nachfrage 1',
      titleEn: 'Demand 1',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1622467',
    },
    {
      titleDe: 'Nachfrage 2',
      titleEn: 'Demand 2',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1681186',
    },
    {
      titleDe: 'Zusatzvideo MRS & Lagrange',
      titleEn: 'Extra: MRS & Lagrange',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1681187',
    },
    {
      titleDe: 'Nachfrage 3',
      titleEn: 'Demand 3',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1684254',
    },
  ],
  summaryDe,
  summaryEn,
  cheatsheetDe,
  cheatsheetEn,
}
