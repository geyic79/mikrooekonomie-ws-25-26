import type { Subject } from '@/data/types'

export const angebot: Subject = {
  id: 'angebot',
  titleDe: 'Angebot',
  titleEn: 'Supply',
  shortDescDe: 'Produktionstechnologie, Kostenminimierung, Gewinnmaximierung und Angebotskurven',
  shortDescEn: 'Production technology, cost minimization, profit maximization and supply curves',
  color: '#02888c',
  icon: '🏭',
  videoLinks: [
    {
      titleDe: 'Angebot 1',
      titleEn: 'Supply 1',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1687862',
    },
    {
      titleDe: 'Angebot 2',
      titleEn: 'Supply 2',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1689655',
    },
    {
      titleDe: 'Angebot 3 & Markt 1',
      titleEn: 'Supply 3 & Market 1',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1690703',
    },
  ],

  summaryDe: '<h2>Angebot: Produktion, Kosten und Gewinnmaximierung</h2>'
    + '<p>Dieses Kapitel behandelt die <strong>Angebotsseite</strong> der Mikro&ouml;konomie: Wie Unternehmen produzieren, ihre Kosten minimieren, Gewinne maximieren und daraus Angebotskurven ableiten. Es basiert auf Varian, Kapitel 19 und 21&ndash;24.</p>'

    // ===== 1. Produktionstechnologie =====
    + '<h3>1. Produktionstechnologie</h3>'
    + '<p>Die <strong>Produktionsfunktion</strong> beschreibt den Zusammenhang zwischen Inputs (Produktionsfaktoren) und Output:</p>'
    + '<p>$$y = f(x_1, x_2)$$</p>'
    + '<p>wobei $x_1$ und $x_2$ die eingesetzten Faktormengen sind und $y$ die produzierte Outputmenge.</p>'

    + '<h4>1.1 Grenzprodukt (Marginal Product)</h4>'
    + '<p>Das <strong>Grenzprodukt</strong> eines Faktors gibt an, wie viel zus&auml;tzlicher Output durch eine marginale Erh&ouml;hung dieses Faktors entsteht, bei Konstanz aller anderen Faktoren:</p>'
    + '<p>$$MP_1 = \\frac{\\partial f(x_1, x_2)}{\\partial x_1}, \\quad MP_2 = \\frac{\\partial f(x_1, x_2)}{\\partial x_2}$$</p>'
    + '<p>Das <strong>Gesetz der abnehmenden Grenzertr&auml;ge</strong> besagt, dass bei Erh&ouml;hung eines einzelnen Inputs (ceteris paribus) das Grenzprodukt dieses Inputs ab einem bestimmten Punkt sinkt:</p>'
    + '<p>$$\\frac{\\partial MP_i}{\\partial x_i} = \\frac{\\partial^2 f}{\\partial x_i^2} < 0$$</p>'

    + '<h4>1.2 Technische Rate der Substitution (TRS)</h4>'
    + '<p>Die <strong>Technische Rate der Substitution</strong> (TRS) gibt an, in welchem Verh&auml;ltnis ein Faktor durch den anderen ersetzt werden kann, ohne das Outputniveau zu ver&auml;ndern:</p>'
    + '<p>$$TRS_{1,2} = -\\frac{MP_1}{MP_2} = -\\frac{\\partial f / \\partial x_1}{\\partial f / \\partial x_2}$$</p>'
    + '<p>Die TRS entspricht der Steigung der Isoquante im Punkt $(x_1, x_2)$. Sie ist typischerweise negativ und nimmt dem Betrag nach ab (abnehmende TRS), was konvexe Isoquanten impliziert.</p>'

    + '<h4>1.3 Isoquanten</h4>'
    + '<p><strong>Isoquanten</strong> sind Niveaukurven der Produktionsfunktion. Eine Isoquante verbindet alle Input-Kombinationen $(x_1, x_2)$, die dasselbe Outputniveau $y$ erzeugen:</p>'
    + '<p>$$f(x_1, x_2) = \\bar{y}$$</p>'
    + '<p>Isoquanten haben &auml;hnliche Eigenschaften wie Indifferenzkurven: Sie schneiden sich nicht, weiter au&szlig;en liegende repr&auml;sentieren h&ouml;heren Output, und sie sind typischerweise konvex zum Ursprung.</p>'

    + '<h4>1.4 Skalenenertr&auml;ge (Returns to Scale)</h4>'
    + '<p>Skalenenertr&auml;ge beschreiben, wie sich der Output ver&auml;ndert, wenn <em>alle</em> Inputs proportional um den Faktor $t > 1$ erh&ouml;ht werden:</p>'
    + '<ul>'
    + '<li><strong>Konstante Skalenenertr&auml;ge:</strong> $f(tx_1, tx_2) = t \\cdot f(x_1, x_2)$ &ndash; Output steigt proportional.</li>'
    + '<li><strong>Zunehmende Skalenenertr&auml;ge:</strong> $f(tx_1, tx_2) > t \\cdot f(x_1, x_2)$ &ndash; Output steigt &uuml;berproportional.</li>'
    + '<li><strong>Abnehmende Skalenenertr&auml;ge:</strong> $f(tx_1, tx_2) < t \\cdot f(x_1, x_2)$ &ndash; Output steigt unterproportional.</li>'
    + '</ul>'
    + '<p><strong>Wichtig:</strong> Skalenenertr&auml;ge (alle Inputs skaliert) und abnehmende Grenzertr&auml;ge (ein Input variiert) sind verschiedene Konzepte! Eine Cobb-Douglas-Funktion kann zunehmende Skalenenertr&auml;ge und gleichzeitig abnehmende Grenzertr&auml;ge haben.</p>'

    + '<h4>1.5 Kurzfristig vs. Langfristig</h4>'
    + '<p>In der <strong>kurzen Frist</strong> ist mindestens ein Faktor fix (z.B. $x_2 = \\bar{x}_2$). Die Produktionsfunktion reduziert sich zu $y = f(x_1, \\bar{x}_2)$. In der <strong>langen Frist</strong> sind alle Faktoren variabel.</p>'

    // ===== 2. Spezielle Produktionsfunktionen =====
    + '<h3>2. Spezielle Produktionsfunktionen</h3>'

    + '<h4>2.1 Perfekte Substitute</h4>'
    + '<p>$$f(x_1, x_2) = ax_1 + bx_2$$</p>'
    + '<p>Die Inputs sind vollst&auml;ndig austauschbar. Isoquanten sind Geraden mit Steigung $-a/b$. TRS ist konstant: $TRS_{1,2} = -a/b$. Konstante Skalenenertr&auml;ge.</p>'

    + '<h4>2.2 Perfekte Komplemente (Leontief)</h4>'
    + '<p>$$f(x_1, x_2) = \\min\\{ax_1,\\, bx_2\\}$$</p>'
    + '<p>Die Inputs m&uuml;ssen in einem festen Verh&auml;ltnis eingesetzt werden. Isoquanten sind L-f&ouml;rmig (rechtwinklig). Im Optimum gilt $ax_1 = bx_2$, also $x_1/x_2 = b/a$. Konstante Skalenenertr&auml;ge.</p>'

    + '<h4>2.3 Cobb-Douglas</h4>'
    + '<p>$$f(x_1, x_2) = A x_1^a x_2^b$$</p>'
    + '<p>Die Skalenenertr&auml;ge h&auml;ngen von der Summe der Exponenten ab:</p>'
    + '<ul>'
    + '<li>$a + b = 1$: Konstante Skalenenertr&auml;ge</li>'
    + '<li>$a + b > 1$: Zunehmende Skalenenertr&auml;ge</li>'
    + '<li>$a + b < 1$: Abnehmende Skalenenertr&auml;ge</li>'
    + '</ul>'
    + '<p>Grenzprodukte: $MP_1 = Aax_1^{a-1}x_2^b$ und $MP_2 = Abx_1^a x_2^{b-1}$. TRS: $TRS_{1,2} = -\\frac{a}{b} \\cdot \\frac{x_2}{x_1}$.</p>'

    // ===== 3. Kostenminimierung =====
    + '<h3>3. Kostenminimierung</h3>'
    + '<p>Das Unternehmen m&ouml;chte ein gegebenes Outputniveau $y$ zu minimalen Kosten produzieren.</p>'

    + '<h4>3.1 Das Optimierungsproblem</h4>'
    + '<p>$$\\min_{x_1, x_2} \\; w_1 x_1 + w_2 x_2 \\quad \\text{s.t.} \\quad f(x_1, x_2) = y$$</p>'
    + '<p>wobei $w_1$ und $w_2$ die Faktorpreise sind.</p>'

    + '<h4>3.2 Tangenzbedingung</h4>'
    + '<p>Im Optimum ist die Isoquante tangential zur Isokostengerade. Die <strong>Tangenzbedingung</strong> lautet:</p>'
    + '<p>$$|TRS_{1,2}| = \\frac{w_1}{w_2} \\quad \\Leftrightarrow \\quad \\frac{MP_1}{w_1} = \\frac{MP_2}{w_2}$$</p>'
    + '<p>Interpretation: Im Optimum liefert der letzte ausgegebene Euro bei beiden Faktoren denselben zus&auml;tzlichen Output.</p>'

    + '<h4>3.3 Lagrange-Methode</h4>'
    + '<p>Wir l&ouml;sen das Problem mit der Lagrange-Funktion:</p>'
    + '<p>$$\\mathcal{L} = w_1 x_1 + w_2 x_2 + \\mu\\bigl(y - f(x_1, x_2)\\bigr)$$</p>'
    + '<p>Bedingungen erster Ordnung (FOC):</p>'
    + '<p>$$\\frac{\\partial \\mathcal{L}}{\\partial x_1} = w_1 - \\mu \\frac{\\partial f}{\\partial x_1} = 0 \\quad \\Rightarrow \\quad w_1 = \\mu \\cdot MP_1$$</p>'
    + '<p>$$\\frac{\\partial \\mathcal{L}}{\\partial x_2} = w_2 - \\mu \\frac{\\partial f}{\\partial x_2} = 0 \\quad \\Rightarrow \\quad w_2 = \\mu \\cdot MP_2$$</p>'
    + '<p>$$\\frac{\\partial \\mathcal{L}}{\\partial \\mu} = y - f(x_1, x_2) = 0$$</p>'
    + '<p>Der Lagrange-Multiplikator $\\mu$ gibt die Grenzkosten einer zus&auml;tzlichen Outputeinheit an: $\\mu = \\partial c^* / \\partial y$.</p>'

    + '<h4>3.4 Bedingte Faktornachfrage</h4>'
    + '<p>Die L&ouml;sung liefert die <strong>bedingten Faktornachfragefunktionen</strong> $x_1^*(w_1, w_2, y)$ und $x_2^*(w_1, w_2, y)$, die angeben, welche Faktormengen bei gegebenen Faktorpreisen und Outputniveau kostenminimal sind.</p>'

    + '<h4>3.5 Kostenfunktion</h4>'
    + '<p>Einsetzen der optimalen Faktormengen in die Kostenfunktion ergibt:</p>'
    + '<p>$$c(w_1, w_2, y) = w_1 x_1^*(w_1, w_2, y) + w_2 x_2^*(w_1, w_2, y)$$</p>'

    + '<h4>3.6 Cobb-Douglas-Beispiel</h4>'
    + '<p>Sei $f(x_1, x_2) = x_1^a x_2^b$ mit $a + b = 1$ (konstante Skalenenertr&auml;ge). Die Lagrange-Bedingungen ergeben:</p>'
    + '<p>$$w_1 = \\mu a x_1^{a-1} x_2^b, \\quad w_2 = \\mu b x_1^a x_2^{b-1}$$</p>'
    + '<p>Division liefert:</p>'
    + '<p>$$\\frac{w_1}{w_2} = \\frac{a}{b} \\cdot \\frac{x_2}{x_1} \\quad \\Rightarrow \\quad x_2 = \\frac{b \\cdot w_1}{a \\cdot w_2} x_1$$</p>'
    + '<p>Einsetzen in die Nebenbedingung $x_1^a x_2^b = y$ liefert die bedingten Faktornachfragen:</p>'
    + '<p>$$x_1^* = y \\left(\\frac{a \\cdot w_2}{b \\cdot w_1}\\right)^b, \\quad x_2^* = y \\left(\\frac{b \\cdot w_1}{a \\cdot w_2}\\right)^a$$</p>'
    + '<p>Die Kostenfunktion ist dann:</p>'
    + '<p>$$c(y) = y \\cdot \\left[w_1 \\left(\\frac{a w_2}{b w_1}\\right)^b + w_2 \\left(\\frac{b w_1}{a w_2}\\right)^a\\right]$$</p>'
    + '<p>Bei konstanten Skalenenertr&auml;gen ($a+b=1$) sind die Kosten linear in $y$.</p>'

    + '<div class="interactive-widget"><button class="widget-fullscreen-btn" title="Fullscreen">&#x26F6;</button><button class="widget-exit-fullscreen-btn">&#x2190; Back</button><div class="interactive-widget-title">Interaktives Tool: Kostenminimierung (Isoquanten &amp; Isokostengeraden)</div><iframe src="https://tuda-mikro.org/lecture_02/lecture_02.html#iso-app" loading="lazy" title="Interaktives Diagramm zur Kostenminimierung"></iframe></div>'

    // ===== 4. Kostenarten =====
    + '<h3>4. Kostenarten</h3>'

    + '<h4>4.1 Kostenzerlegung</h4>'
    + '<ul>'
    + '<li><strong>Fixkosten (FC):</strong> Kosten, die unabh&auml;ngig von der Produktionsmenge anfallen (z.B. Miete, Maschinenkauf).</li>'
    + '<li><strong>Variable Kosten (VC):</strong> Kosten, die mit der Produktionsmenge variieren (z.B. Material, Arbeitsstunden).</li>'
    + '<li><strong>Gesamtkosten:</strong> $TC(y) = FC + VC(y)$</li>'
    + '</ul>'

    + '<h4>4.2 Versunkene Kosten (Sunk Costs)</h4>'
    + '<p><strong>Versunkene Kosten</strong> sind bereits get&auml;tigte, unwiderrufliche Ausgaben. Sie sollten f&uuml;r zuk&uuml;nftige Entscheidungen <em>irrelevant</em> sein (obwohl Menschen in der Praxis h&auml;ufig dem &laquo;Sunk Cost Fallacy&raquo; unterliegen). Beispiel: Eine bereits bezahlte, nicht r&uuml;ckerstattbare Lizenzgeb&uuml;hr.</p>'

    + '<h4>4.3 Durchschnittskosten</h4>'
    + '<p>$$AC(y) = \\frac{TC(y)}{y} = \\frac{FC + VC(y)}{y}$$</p>'
    + '<p>$$AVC(y) = \\frac{VC(y)}{y}, \\quad AFC(y) = \\frac{FC}{y}$$</p>'
    + '<p>Es gilt: $AC(y) = AVC(y) + AFC(y)$. Da $AFC(y) = FC/y$ mit steigendem $y$ f&auml;llt, n&auml;hern sich $AC$ und $AVC$ an.</p>'

    + '<h4>4.4 Grenzkosten (Marginal Cost)</h4>'
    + '<p>$$MC(y) = \\frac{dTC(y)}{dy} = \\frac{dVC(y)}{dy}$$</p>'
    + '<p>(Fixkosten &auml;ndern sich nicht, daher sind Grenzkosten = Ableitung der variablen Kosten.)</p>'

    + '<h4>4.5 Zusammenhang MC, AC, AVC</h4>'
    + '<p>Es gilt ein wichtiger Zusammenhang:</p>'
    + '<ul>'
    + '<li>$MC(y) < AC(y) \\Rightarrow AC$ f&auml;llt</li>'
    + '<li>$MC(y) > AC(y) \\Rightarrow AC$ steigt</li>'
    + '<li>$MC(y) = AC(y) \\Rightarrow AC$ hat ein Minimum</li>'
    + '</ul>'
    + '<p>Beweis: $\\frac{d}{dy}AC(y) = \\frac{d}{dy}\\frac{c(y)}{y} = \\frac{MC(y) \\cdot y - c(y)}{y^2} = \\frac{MC(y) - AC(y)}{y}$.</p>'
    + '<p>Analog schneidet die MC-Kurve die AVC-Kurve in deren Minimum.</p>'

    + '<h4>4.6 Kurzfristige vs. Langfristige Kostenkurven</h4>'
    + '<p>In der <strong>kurzen Frist</strong> sind einige Faktoren fix, was zu h&ouml;heren Kosten f&uuml;hren kann. Die kurzfristige Kostenkurve liegt daher stets oberhalb (oder tangential an) der langfristigen Kostenkurve. Die langfristige Durchschnittskostenkurve (LAC) ist die <strong>Einh&uuml;llende (Envelope)</strong> aller kurzfristigen Durchschnittskostenkurven (SAC).</p>'

    // ===== 5. Gewinnmaximierung =====
    + '<h3>5. Gewinnmaximierung</h3>'

    + '<h4>5.1 Gewinnfunktion</h4>'
    + '<p>Der Gewinn eines preisnehmenden Unternehmens ist:</p>'
    + '<p>$$\\pi(y) = p \\cdot y - c(y)$$</p>'
    + '<p>wobei $p$ der (gegebene) Marktpreis und $c(y)$ die Kostenfunktion ist.</p>'

    + '<h4>5.2 Bedingung erster Ordnung (FOC)</h4>'
    + '<p>$$\\frac{d\\pi}{dy} = p - MC(y) = 0 \\quad \\Rightarrow \\quad p = MC(y)$$</p>'
    + '<p>Das Unternehmen produziert die Menge, bei der der Preis gleich den Grenzkosten ist.</p>'

    + '<h4>5.3 Bedingung zweiter Ordnung (SOC)</h4>'
    + '<p>$$\\frac{d^2\\pi}{dy^2} = -MC\'(y) \\leq 0 \\quad \\Rightarrow \\quad MC\'(y) \\geq 0$$</p>'
    + '<p>Die Grenzkosten m&uuml;ssen im Optimum steigend sein (oder zumindest nicht fallend). Nur der <em>steigende</em> Ast der MC-Kurve kommt als Angebotskurve in Frage.</p>'

    + '<h4>5.4 Die Angebotskurve des Unternehmens</h4>'
    + '<p>Die <strong>kurzfristige Angebotskurve</strong> eines preisnehmenenden Unternehmens ist der Teil der MC-Kurve, der oberhalb des Minimums der AVC-Kurve liegt:</p>'
    + '<p>$$y^*(p) = \\begin{cases} MC^{-1}(p) & \\text{falls } p \\geq \\min AVC \\\\ 0 & \\text{falls } p < \\min AVC \\end{cases}$$</p>'

    + '<h4>5.5 Stilllegungsbedingung (Shutdown Condition)</h4>'
    + '<p>Wenn der Preis unter das Minimum der durchschnittlichen variablen Kosten f&auml;llt ($p < \\min AVC$), deckt der Erl&ouml;s nicht einmal die variablen Kosten. Das Unternehmen produziert $y = 0$ und erleidet nur den Verlust der Fixkosten.</p>'
    + '<p>Bei der <strong>langfristigen</strong> Angebotskurve gibt es keine Fixkosten. Die Stilllegungsbedingung wird: $p < \\min AC$.</p>'

    + '<h4>5.6 Produzentenrente (Producer Surplus)</h4>'
    + '<p>Die <strong>Produzentenrente</strong> ist der Erl&ouml;s abz&uuml;glich der variablen Kosten:</p>'
    + '<p>$$PS = p \\cdot y - VC(y) = \\int_0^y \\bigl[p - MC(s)\\bigr]\\, ds$$</p>'
    + '<p>Grafisch ist die Produzentenrente die Fl&auml;che zwischen dem Preis und der MC-Kurve (oberhalb von MC, unterhalb von $p$). Sie entspricht dem Gewinn plus Fixkosten: $PS = \\pi + FC$.</p>'

    + '<div class="interactive-widget"><button class="widget-fullscreen-btn" title="Fullscreen">&#x26F6;</button><button class="widget-exit-fullscreen-btn">&#x2190; Back</button><div class="interactive-widget-title">Interaktives Tool: Angebotskurve</div><iframe src="https://tuda-mikro.org/lecture_02/lecture_02.html#app-app" loading="lazy" title="Interaktives Diagramm zur Angebotskurve"></iframe></div>'

    // ===== 6. Industrieangebot =====
    + '<h3>6. Industrieangebot</h3>'

    + '<h4>6.1 Horizontale Aggregation</h4>'
    + '<p>Die <strong>Industrieangebotskurve</strong> (Marktangebotskurve) ergibt sich durch horizontale Addition der individuellen Angebotskurven aller Unternehmen:</p>'
    + '<p>$$Y^S(p) = \\sum_{i=1}^{n} y_i^*(p)$$</p>'
    + '<p>Bei jedem Preis $p$ wird die von allen Unternehmen angebotene Menge summiert.</p>'

    + '<h4>6.2 Kurzfristiges Gleichgewicht</h4>'
    + '<p>In der kurzen Frist ist die Anzahl der Unternehmen fix. Der Gleichgewichtspreis ergibt sich aus dem Schnittpunkt von Marktangebot und Marktnachfrage. Einzelne Unternehmen k&ouml;nnen positive oder negative Gewinne erzielen.</p>'

    + '<h4>6.3 Langfristiges Gleichgewicht und Markteintritt</h4>'
    + '<p>In der langen Frist gibt es <strong>freien Markteintritt und -austritt</strong>. Unternehmen treten ein, wenn Gewinne positiv sind, und verlassen den Markt bei negativen Gewinnen. Im langfristigen Gleichgewicht gilt:</p>'
    + '<p>$$\\pi = 0 \\quad \\Rightarrow \\quad p = \\min AC$$</p>'
    + '<p>Jedes aktive Unternehmen produziert an der effizienten Skala (Minimum der Durchschnittskosten).</p>'

    + '<h4>6.4 Konstante, zunehmende und abnehmende Kostenindustrien</h4>'
    + '<ul>'
    + '<li><strong>Konstante Kostenindustrie:</strong> Markteintritt ver&auml;ndert die Faktorpreise nicht. Die langfristige Angebotskurve ist horizontal bei $p = \\min AC$.</li>'
    + '<li><strong>Zunehmende Kostenindustrie:</strong> Markteintritt erh&ouml;ht die Faktorpreise (z.B. weil ein Faktor knapp wird), sodass $\\min AC$ steigt. Die langfristige Angebotskurve ist steigend.</li>'
    + '<li><strong>Abnehmende Kostenindustrie:</strong> Markteintritt senkt die Faktorpreise (z.B. durch Netzwerkeffekte oder Skalenvorteile bei Zulieferern), sodass $\\min AC$ sinkt. Die langfristige Angebotskurve ist fallend.</li>'
    + '</ul>'

    + '<h2>Weiterf&uuml;hrende Lekt&uuml;re (Varian)</h2>'
    + '<ul>'
    + '<li><strong>Kapitel 19: Technologie</strong> (S. 387&ndash;401) &ndash; Produktionsfunktionen, Isoquanten und technologische Beschr&auml;nkungen; zeigt die Parallelen zwischen Isoquanten und Indifferenzkurven der Konsumtheorie.</li>'
    + '<li><strong>Kapitel 21: Kostenminimierung</strong> (S. 425&ndash;439) &ndash; Das Kostenminimierungsproblem, Tangentialbedingung $TRS = w_1/w_2$, bedingte Faktornachfrage und Herleitung der Kostenfunktion.</li>'
    + '<li><strong>Kapitel 22: Kostenkurven</strong> (S. 441&ndash;457) &ndash; Durchschnitts-, variable und Grenzkosten; Beziehung $MC = AC$ im Minimum der Durchschnittskosten; kurz- vs. langfristige Kostenkurven.</li>'
    + '<li><strong>Kapitel 23: Angebot der Unternehmung</strong> (S. 459&ndash;477) &ndash; Gewinnmaximierung bei vollkommener Konkurrenz mit $p = MC$, Herleitung der Angebotskurve und Betriebsminimum ($p \\geq \\min AVC$).</li>'
    + '<li><strong>Kapitel 24: Marktangebot einer Branche</strong> (S. 479&ndash;505) &ndash; Horizontale Aggregation zu Branchenangebotskurven, langfristiges Gleichgewicht mit Nullgewinnen und konstante/zunehmende/abnehmende Kostenindustrien.</li>'
    + '</ul>',

  summaryEn: '<h2>Supply: Production, Costs and Profit Maximization</h2>'
    + '<p>This chapter covers the <strong>supply side</strong> of microeconomics: how firms produce, minimize costs, maximize profits, and derive supply curves. It is based on Varian, Chapters 19 and 21&ndash;24.</p>'

    // ===== 1. Production Technology =====
    + '<h3>1. Production Technology</h3>'
    + '<p>The <strong>production function</strong> describes the relationship between inputs (factors of production) and output:</p>'
    + '<p>$$y = f(x_1, x_2)$$</p>'
    + '<p>where $x_1$ and $x_2$ are the quantities of inputs employed and $y$ is the quantity of output produced.</p>'

    + '<h4>1.1 Marginal Product</h4>'
    + '<p>The <strong>marginal product</strong> of an input measures how much additional output is produced by a marginal increase in that input, holding all other inputs constant:</p>'
    + '<p>$$MP_1 = \\frac{\\partial f(x_1, x_2)}{\\partial x_1}, \\quad MP_2 = \\frac{\\partial f(x_1, x_2)}{\\partial x_2}$$</p>'
    + '<p>The <strong>law of diminishing marginal product</strong> states that as one input is increased (ceteris paribus), the marginal product of that input eventually declines:</p>'
    + '<p>$$\\frac{\\partial MP_i}{\\partial x_i} = \\frac{\\partial^2 f}{\\partial x_i^2} < 0$$</p>'

    + '<h4>1.2 Technical Rate of Substitution (TRS)</h4>'
    + '<p>The <strong>Technical Rate of Substitution</strong> (TRS) indicates the rate at which one input can be substituted for another while keeping output constant:</p>'
    + '<p>$$TRS_{1,2} = -\\frac{MP_1}{MP_2} = -\\frac{\\partial f / \\partial x_1}{\\partial f / \\partial x_2}$$</p>'
    + '<p>The TRS equals the slope of the isoquant at the point $(x_1, x_2)$. It is typically negative and diminishing in absolute value, which implies convex isoquants.</p>'

    + '<h4>1.3 Isoquants</h4>'
    + '<p><strong>Isoquants</strong> are level curves of the production function. An isoquant connects all input combinations $(x_1, x_2)$ that produce the same output level $y$:</p>'
    + '<p>$$f(x_1, x_2) = \\bar{y}$$</p>'
    + '<p>Isoquants share properties with indifference curves: they do not cross, those further from the origin represent higher output, and they are typically convex to the origin.</p>'

    + '<h4>1.4 Returns to Scale</h4>'
    + '<p>Returns to scale describe how output changes when <em>all</em> inputs are scaled proportionally by a factor $t > 1$:</p>'
    + '<ul>'
    + '<li><strong>Constant returns to scale:</strong> $f(tx_1, tx_2) = t \\cdot f(x_1, x_2)$ &ndash; output scales proportionally.</li>'
    + '<li><strong>Increasing returns to scale:</strong> $f(tx_1, tx_2) > t \\cdot f(x_1, x_2)$ &ndash; output scales more than proportionally.</li>'
    + '<li><strong>Decreasing returns to scale:</strong> $f(tx_1, tx_2) < t \\cdot f(x_1, x_2)$ &ndash; output scales less than proportionally.</li>'
    + '</ul>'
    + '<p><strong>Important:</strong> Returns to scale (all inputs scaled) and diminishing marginal product (one input varied) are distinct concepts! A Cobb-Douglas function can exhibit increasing returns to scale and diminishing marginal product simultaneously.</p>'

    + '<h4>1.5 Short Run vs. Long Run</h4>'
    + '<p>In the <strong>short run</strong>, at least one factor is fixed (e.g., $x_2 = \\bar{x}_2$). The production function reduces to $y = f(x_1, \\bar{x}_2)$. In the <strong>long run</strong>, all factors are variable.</p>'

    // ===== 2. Special Production Functions =====
    + '<h3>2. Special Production Functions</h3>'

    + '<h4>2.1 Perfect Substitutes</h4>'
    + '<p>$$f(x_1, x_2) = ax_1 + bx_2$$</p>'
    + '<p>Inputs are perfectly interchangeable. Isoquants are straight lines with slope $-a/b$. The TRS is constant: $TRS_{1,2} = -a/b$. Constant returns to scale.</p>'

    + '<h4>2.2 Perfect Complements (Leontief)</h4>'
    + '<p>$$f(x_1, x_2) = \\min\\{ax_1,\\, bx_2\\}$$</p>'
    + '<p>Inputs must be used in a fixed proportion. Isoquants are L-shaped (right-angled). At the optimum, $ax_1 = bx_2$, so $x_1/x_2 = b/a$. Constant returns to scale.</p>'

    + '<h4>2.3 Cobb-Douglas</h4>'
    + '<p>$$f(x_1, x_2) = A x_1^a x_2^b$$</p>'
    + '<p>Returns to scale depend on the sum of exponents:</p>'
    + '<ul>'
    + '<li>$a + b = 1$: Constant returns to scale</li>'
    + '<li>$a + b > 1$: Increasing returns to scale</li>'
    + '<li>$a + b < 1$: Decreasing returns to scale</li>'
    + '</ul>'
    + '<p>Marginal products: $MP_1 = Aax_1^{a-1}x_2^b$ and $MP_2 = Abx_1^a x_2^{b-1}$. TRS: $TRS_{1,2} = -\\frac{a}{b} \\cdot \\frac{x_2}{x_1}$.</p>'

    // ===== 3. Cost Minimization =====
    + '<h3>3. Cost Minimization</h3>'
    + '<p>The firm wants to produce a given output level $y$ at minimum cost.</p>'

    + '<h4>3.1 The Optimization Problem</h4>'
    + '<p>$$\\min_{x_1, x_2} \\; w_1 x_1 + w_2 x_2 \\quad \\text{s.t.} \\quad f(x_1, x_2) = y$$</p>'
    + '<p>where $w_1$ and $w_2$ are the factor prices.</p>'

    + '<h4>3.2 Tangency Condition</h4>'
    + '<p>At the optimum, the isoquant is tangent to the isocost line. The <strong>tangency condition</strong> is:</p>'
    + '<p>$$|TRS_{1,2}| = \\frac{w_1}{w_2} \\quad \\Leftrightarrow \\quad \\frac{MP_1}{w_1} = \\frac{MP_2}{w_2}$$</p>'
    + '<p>Interpretation: at the optimum, the last euro spent on each input yields the same additional output.</p>'

    + '<h4>3.3 Lagrange Method</h4>'
    + '<p>We solve the problem using the Lagrangian:</p>'
    + '<p>$$\\mathcal{L} = w_1 x_1 + w_2 x_2 + \\mu\\bigl(y - f(x_1, x_2)\\bigr)$$</p>'
    + '<p>First-order conditions (FOC):</p>'
    + '<p>$$\\frac{\\partial \\mathcal{L}}{\\partial x_1} = w_1 - \\mu \\frac{\\partial f}{\\partial x_1} = 0 \\quad \\Rightarrow \\quad w_1 = \\mu \\cdot MP_1$$</p>'
    + '<p>$$\\frac{\\partial \\mathcal{L}}{\\partial x_2} = w_2 - \\mu \\frac{\\partial f}{\\partial x_2} = 0 \\quad \\Rightarrow \\quad w_2 = \\mu \\cdot MP_2$$</p>'
    + '<p>$$\\frac{\\partial \\mathcal{L}}{\\partial \\mu} = y - f(x_1, x_2) = 0$$</p>'
    + '<p>The Lagrange multiplier $\\mu$ represents the marginal cost of an additional unit of output: $\\mu = \\partial c^* / \\partial y$.</p>'

    + '<h4>3.4 Conditional Factor Demands</h4>'
    + '<p>The solution yields the <strong>conditional factor demand functions</strong> $x_1^*(w_1, w_2, y)$ and $x_2^*(w_1, w_2, y)$, which specify the cost-minimizing input quantities given factor prices and output level.</p>'

    + '<h4>3.5 Cost Function</h4>'
    + '<p>Substituting the optimal input quantities into the cost expression gives:</p>'
    + '<p>$$c(w_1, w_2, y) = w_1 x_1^*(w_1, w_2, y) + w_2 x_2^*(w_1, w_2, y)$$</p>'

    + '<h4>3.6 Cobb-Douglas Example</h4>'
    + '<p>Let $f(x_1, x_2) = x_1^a x_2^b$ with $a + b = 1$ (constant returns to scale). The Lagrange conditions give:</p>'
    + '<p>$$w_1 = \\mu a x_1^{a-1} x_2^b, \\quad w_2 = \\mu b x_1^a x_2^{b-1}$$</p>'
    + '<p>Dividing yields:</p>'
    + '<p>$$\\frac{w_1}{w_2} = \\frac{a}{b} \\cdot \\frac{x_2}{x_1} \\quad \\Rightarrow \\quad x_2 = \\frac{b \\cdot w_1}{a \\cdot w_2} x_1$$</p>'
    + '<p>Substituting into the constraint $x_1^a x_2^b = y$ yields the conditional factor demands:</p>'
    + '<p>$$x_1^* = y \\left(\\frac{a \\cdot w_2}{b \\cdot w_1}\\right)^b, \\quad x_2^* = y \\left(\\frac{b \\cdot w_1}{a \\cdot w_2}\\right)^a$$</p>'
    + '<p>The cost function is then:</p>'
    + '<p>$$c(y) = y \\cdot \\left[w_1 \\left(\\frac{a w_2}{b w_1}\\right)^b + w_2 \\left(\\frac{b w_1}{a w_2}\\right)^a\\right]$$</p>'
    + '<p>With constant returns to scale ($a+b=1$), costs are linear in $y$.</p>'

    + '<div class="interactive-widget"><button class="widget-fullscreen-btn" title="Fullscreen">&#x26F6;</button><button class="widget-exit-fullscreen-btn">&#x2190; Back</button><div class="interactive-widget-title">Interactive Tool: Cost Minimization (Isoquants &amp; Isocost Lines)</div><iframe src="https://tuda-mikro.org/lecture_02/lecture_02.html#iso-app" loading="lazy" title="Interactive diagram for cost minimization"></iframe></div>'

    // ===== 4. Cost Types =====
    + '<h3>4. Cost Types</h3>'

    + '<h4>4.1 Cost Decomposition</h4>'
    + '<ul>'
    + '<li><strong>Fixed costs (FC):</strong> Costs that do not vary with output (e.g., rent, machinery purchase).</li>'
    + '<li><strong>Variable costs (VC):</strong> Costs that vary with output (e.g., materials, labor hours).</li>'
    + '<li><strong>Total costs:</strong> $TC(y) = FC + VC(y)$</li>'
    + '</ul>'

    + '<h4>4.2 Sunk Costs</h4>'
    + '<p><strong>Sunk costs</strong> are expenditures that have already been incurred and cannot be recovered. They should be <em>irrelevant</em> for future decisions (although in practice, people often fall prey to the "sunk cost fallacy"). Example: a non-refundable license fee already paid.</p>'

    + '<h4>4.3 Average Costs</h4>'
    + '<p>$$AC(y) = \\frac{TC(y)}{y} = \\frac{FC + VC(y)}{y}$$</p>'
    + '<p>$$AVC(y) = \\frac{VC(y)}{y}, \\quad AFC(y) = \\frac{FC}{y}$$</p>'
    + '<p>We have $AC(y) = AVC(y) + AFC(y)$. Since $AFC(y) = FC/y$ declines as $y$ increases, $AC$ and $AVC$ converge.</p>'

    + '<h4>4.4 Marginal Cost</h4>'
    + '<p>$$MC(y) = \\frac{dTC(y)}{dy} = \\frac{dVC(y)}{dy}$$</p>'
    + '<p>(Fixed costs do not change, so marginal cost equals the derivative of variable costs.)</p>'

    + '<h4>4.5 Relationship between MC, AC, and AVC</h4>'
    + '<p>A key relationship holds:</p>'
    + '<ul>'
    + '<li>$MC(y) < AC(y) \\Rightarrow AC$ is falling</li>'
    + '<li>$MC(y) > AC(y) \\Rightarrow AC$ is rising</li>'
    + '<li>$MC(y) = AC(y) \\Rightarrow AC$ is at a minimum</li>'
    + '</ul>'
    + '<p>Proof: $\\frac{d}{dy}AC(y) = \\frac{d}{dy}\\frac{c(y)}{y} = \\frac{MC(y) \\cdot y - c(y)}{y^2} = \\frac{MC(y) - AC(y)}{y}$.</p>'
    + '<p>Similarly, the MC curve intersects the AVC curve at the AVC minimum.</p>'

    + '<h4>4.6 Short-Run vs. Long-Run Cost Curves</h4>'
    + '<p>In the <strong>short run</strong>, some factors are fixed, which can lead to higher costs. The short-run cost curve therefore lies above (or is tangent to) the long-run cost curve. The long-run average cost curve (LAC) is the <strong>envelope</strong> of all short-run average cost curves (SAC).</p>'

    // ===== 5. Profit Maximization =====
    + '<h3>5. Profit Maximization</h3>'

    + '<h4>5.1 Profit Function</h4>'
    + '<p>The profit of a price-taking firm is:</p>'
    + '<p>$$\\pi(y) = p \\cdot y - c(y)$$</p>'
    + '<p>where $p$ is the (given) market price and $c(y)$ is the cost function.</p>'

    + '<h4>5.2 First-Order Condition (FOC)</h4>'
    + '<p>$$\\frac{d\\pi}{dy} = p - MC(y) = 0 \\quad \\Rightarrow \\quad p = MC(y)$$</p>'
    + '<p>The firm produces the quantity where price equals marginal cost.</p>'

    + '<h4>5.3 Second-Order Condition (SOC)</h4>'
    + '<p>$$\\frac{d^2\\pi}{dy^2} = -MC\'(y) \\leq 0 \\quad \\Rightarrow \\quad MC\'(y) \\geq 0$$</p>'
    + '<p>Marginal cost must be non-decreasing at the optimum. Only the <em>upward-sloping</em> portion of the MC curve qualifies as the supply curve.</p>'

    + '<h4>5.4 The Firm\'s Supply Curve</h4>'
    + '<p>The <strong>short-run supply curve</strong> of a price-taking firm is the portion of the MC curve that lies above the minimum of the AVC curve:</p>'
    + '<p>$$y^*(p) = \\begin{cases} MC^{-1}(p) & \\text{if } p \\geq \\min AVC \\\\ 0 & \\text{if } p < \\min AVC \\end{cases}$$</p>'

    + '<h4>5.5 Shutdown Condition</h4>'
    + '<p>If the price falls below the minimum of average variable cost ($p < \\min AVC$), revenue does not even cover variable costs. The firm produces $y = 0$ and incurs only the loss of fixed costs.</p>'
    + '<p>For the <strong>long-run</strong> supply curve, there are no fixed costs. The shutdown condition becomes: $p < \\min AC$.</p>'

    + '<h4>5.6 Producer Surplus</h4>'
    + '<p><strong>Producer surplus</strong> is revenue minus variable costs:</p>'
    + '<p>$$PS = p \\cdot y - VC(y) = \\int_0^y \\bigl[p - MC(s)\\bigr]\\, ds$$</p>'
    + '<p>Graphically, producer surplus is the area between the price and the MC curve (above MC, below $p$). It equals profit plus fixed costs: $PS = \\pi + FC$.</p>'

    + '<div class="interactive-widget"><button class="widget-fullscreen-btn" title="Fullscreen">&#x26F6;</button><button class="widget-exit-fullscreen-btn">&#x2190; Back</button><div class="interactive-widget-title">Interactive Tool: Supply Curve</div><iframe src="https://tuda-mikro.org/lecture_02/lecture_02.html#app-app" loading="lazy" title="Interactive diagram for supply curve"></iframe></div>'

    // ===== 6. Industry Supply =====
    + '<h3>6. Industry Supply</h3>'

    + '<h4>6.1 Horizontal Aggregation</h4>'
    + '<p>The <strong>industry supply curve</strong> (market supply curve) is obtained by horizontally summing the individual firms\' supply curves:</p>'
    + '<p>$$Y^S(p) = \\sum_{i=1}^{n} y_i^*(p)$$</p>'
    + '<p>At each price $p$, the quantities supplied by all firms are summed.</p>'

    + '<h4>6.2 Short-Run Equilibrium</h4>'
    + '<p>In the short run, the number of firms is fixed. The equilibrium price is determined by the intersection of market supply and market demand. Individual firms may earn positive or negative profits.</p>'

    + '<h4>6.3 Long-Run Equilibrium and Entry</h4>'
    + '<p>In the long run, there is <strong>free entry and exit</strong>. Firms enter when profits are positive and exit when profits are negative. In long-run equilibrium:</p>'
    + '<p>$$\\pi = 0 \\quad \\Rightarrow \\quad p = \\min AC$$</p>'
    + '<p>Every active firm produces at the efficient scale (minimum of average cost).</p>'

    + '<h4>6.4 Constant, Increasing and Decreasing Cost Industries</h4>'
    + '<ul>'
    + '<li><strong>Constant cost industry:</strong> Entry does not change factor prices. The long-run supply curve is horizontal at $p = \\min AC$.</li>'
    + '<li><strong>Increasing cost industry:</strong> Entry raises factor prices (e.g., because a factor becomes scarce), so $\\min AC$ rises. The long-run supply curve is upward-sloping.</li>'
    + '<li><strong>Decreasing cost industry:</strong> Entry lowers factor prices (e.g., through network effects or supplier economies of scale), so $\\min AC$ falls. The long-run supply curve is downward-sloping.</li>'
    + '</ul>'

    + '<h2>Further Reading (Varian)</h2>'
    + '<ul>'
    + '<li><strong>Chapter 19: Technology</strong> (pp. 387&ndash;401) &ndash; Production functions, isoquants and technological constraints; shows the parallels between isoquants and indifference curves from consumer theory.</li>'
    + '<li><strong>Chapter 21: Cost Minimization</strong> (pp. 425&ndash;439) &ndash; The cost minimization problem, tangency condition $TRS = w_1/w_2$, conditional factor demands and derivation of the cost function.</li>'
    + '<li><strong>Chapter 22: Cost Curves</strong> (pp. 441&ndash;457) &ndash; Average, variable and marginal costs; the relationship $MC = AC$ at minimum average cost; short-run vs. long-run cost curves.</li>'
    + '<li><strong>Chapter 23: Firm Supply</strong> (pp. 459&ndash;477) &ndash; Profit maximization under perfect competition with $p = MC$, derivation of the supply curve and shutdown point ($p \\geq \\min AVC$).</li>'
    + '<li><strong>Chapter 24: Industry Supply</strong> (pp. 479&ndash;505) &ndash; Horizontal aggregation to industry supply curves, long-run equilibrium with zero profits, and constant/increasing/decreasing cost industries.</li>'
    + '</ul>',

  cheatsheetDe: '<h2>Angebot &ndash; Formelsammlung</h2>'

    + '<h3>Produktionstechnologie</h3>'
    + '<table><tr><td><strong>Produktionsfunktion</strong></td><td>$y = f(x_1, x_2)$</td></tr>'
    + '<tr><td><strong>Grenzprodukt</strong></td><td>$MP_i = \\partial f / \\partial x_i$</td></tr>'
    + '<tr><td><strong>TRS</strong></td><td>$TRS_{1,2} = -MP_1 / MP_2$</td></tr>'
    + '<tr><td><strong>Abnehmende Grenzertr&auml;ge</strong></td><td>$\\partial^2 f / \\partial x_i^2 < 0$</td></tr>'
    + '</table>'

    + '<h3>Skalenenertr&auml;ge</h3>'
    + '<table><tr><td>Konstant</td><td>$f(tx) = tf(x)$</td></tr>'
    + '<tr><td>Zunehmend</td><td>$f(tx) > tf(x)$</td></tr>'
    + '<tr><td>Abnehmend</td><td>$f(tx) < tf(x)$</td></tr>'
    + '</table>'

    + '<h3>Spezielle Produktionsfunktionen</h3>'
    + '<table><tr><td>Perfekte Substitute</td><td>$f = ax_1 + bx_2$</td></tr>'
    + '<tr><td>Leontief</td><td>$f = \\min\\{ax_1, bx_2\\}$</td></tr>'
    + '<tr><td>Cobb-Douglas</td><td>$f = Ax_1^a x_2^b$, Skalen: $a+b$</td></tr>'
    + '</table>'

    + '<h3>Kostenminimierung</h3>'
    + '<table><tr><td><strong>Problem</strong></td><td>$\\min w_1 x_1 + w_2 x_2$ s.t. $f(x_1,x_2)=y$</td></tr>'
    + '<tr><td><strong>Tangenz</strong></td><td>$MP_1/w_1 = MP_2/w_2$</td></tr>'
    + '<tr><td><strong>Lagrange</strong></td><td>$\\mathcal{L} = w_1x_1 + w_2x_2 + \\mu(y-f)$</td></tr>'
    + '<tr><td><strong>Bedingte Faktornachfrage</strong></td><td>$x_i^*(w_1,w_2,y)$</td></tr>'
    + '<tr><td><strong>Kostenfunktion</strong></td><td>$c(y) = w_1 x_1^* + w_2 x_2^*$</td></tr>'
    + '</table>'

    + '<h3>Kostenarten</h3>'
    + '<table><tr><td>$TC = FC + VC$</td><td>$AC = TC/y$</td></tr>'
    + '<tr><td>$AVC = VC/y$</td><td>$AFC = FC/y$</td></tr>'
    + '<tr><td>$MC = dTC/dy = dVC/dy$</td><td>MC schneidet AC &amp; AVC im Minimum</td></tr>'
    + '</table>'

    + '<h3>Gewinnmaximierung</h3>'
    + '<table><tr><td><strong>Gewinn</strong></td><td>$\\pi = py - c(y)$</td></tr>'
    + '<tr><td><strong>FOC</strong></td><td>$p = MC(y)$</td></tr>'
    + '<tr><td><strong>SOC</strong></td><td>$MC\'(y) \\geq 0$</td></tr>'
    + '<tr><td><strong>Angebotskurve</strong></td><td>$y^*(p) = MC^{-1}(p)$ f&uuml;r $p \\geq \\min AVC$</td></tr>'
    + '<tr><td><strong>Stilllegung</strong></td><td>$p < \\min AVC \\Rightarrow y = 0$</td></tr>'
    + '<tr><td><strong>Produzentenrente</strong></td><td>$PS = py - VC = \\pi + FC$</td></tr>'
    + '</table>'

    + '<h3>Industrieangebot</h3>'
    + '<table><tr><td><strong>Aggregation</strong></td><td>$Y^S(p) = \\sum_i y_i^*(p)$</td></tr>'
    + '<tr><td><strong>Langfristiges GG</strong></td><td>$\\pi = 0 \\Rightarrow p = \\min AC$</td></tr>'
    + '<tr><td>Konstante Kosten</td><td>LR-Angebot horizontal</td></tr>'
    + '<tr><td>Zunehmende Kosten</td><td>LR-Angebot steigend</td></tr>'
    + '<tr><td>Abnehmende Kosten</td><td>LR-Angebot fallend</td></tr>'
    + '</table>',

  cheatsheetEn: '<h2>Supply &ndash; Formula Sheet</h2>'

    + '<h3>Production Technology</h3>'
    + '<table><tr><td><strong>Production function</strong></td><td>$y = f(x_1, x_2)$</td></tr>'
    + '<tr><td><strong>Marginal product</strong></td><td>$MP_i = \\partial f / \\partial x_i$</td></tr>'
    + '<tr><td><strong>TRS</strong></td><td>$TRS_{1,2} = -MP_1 / MP_2$</td></tr>'
    + '<tr><td><strong>Diminishing marginal product</strong></td><td>$\\partial^2 f / \\partial x_i^2 < 0$</td></tr>'
    + '</table>'

    + '<h3>Returns to Scale</h3>'
    + '<table><tr><td>Constant</td><td>$f(tx) = tf(x)$</td></tr>'
    + '<tr><td>Increasing</td><td>$f(tx) > tf(x)$</td></tr>'
    + '<tr><td>Decreasing</td><td>$f(tx) < tf(x)$</td></tr>'
    + '</table>'

    + '<h3>Special Production Functions</h3>'
    + '<table><tr><td>Perfect substitutes</td><td>$f = ax_1 + bx_2$</td></tr>'
    + '<tr><td>Leontief</td><td>$f = \\min\\{ax_1, bx_2\\}$</td></tr>'
    + '<tr><td>Cobb-Douglas</td><td>$f = Ax_1^a x_2^b$, scale: $a+b$</td></tr>'
    + '</table>'

    + '<h3>Cost Minimization</h3>'
    + '<table><tr><td><strong>Problem</strong></td><td>$\\min w_1 x_1 + w_2 x_2$ s.t. $f(x_1,x_2)=y$</td></tr>'
    + '<tr><td><strong>Tangency</strong></td><td>$MP_1/w_1 = MP_2/w_2$</td></tr>'
    + '<tr><td><strong>Lagrangian</strong></td><td>$\\mathcal{L} = w_1x_1 + w_2x_2 + \\mu(y-f)$</td></tr>'
    + '<tr><td><strong>Conditional factor demands</strong></td><td>$x_i^*(w_1,w_2,y)$</td></tr>'
    + '<tr><td><strong>Cost function</strong></td><td>$c(y) = w_1 x_1^* + w_2 x_2^*$</td></tr>'
    + '</table>'

    + '<h3>Cost Types</h3>'
    + '<table><tr><td>$TC = FC + VC$</td><td>$AC = TC/y$</td></tr>'
    + '<tr><td>$AVC = VC/y$</td><td>$AFC = FC/y$</td></tr>'
    + '<tr><td>$MC = dTC/dy = dVC/dy$</td><td>MC intersects AC &amp; AVC at minima</td></tr>'
    + '</table>'

    + '<h3>Profit Maximization</h3>'
    + '<table><tr><td><strong>Profit</strong></td><td>$\\pi = py - c(y)$</td></tr>'
    + '<tr><td><strong>FOC</strong></td><td>$p = MC(y)$</td></tr>'
    + '<tr><td><strong>SOC</strong></td><td>$MC\'(y) \\geq 0$</td></tr>'
    + '<tr><td><strong>Supply curve</strong></td><td>$y^*(p) = MC^{-1}(p)$ for $p \\geq \\min AVC$</td></tr>'
    + '<tr><td><strong>Shutdown</strong></td><td>$p < \\min AVC \\Rightarrow y = 0$</td></tr>'
    + '<tr><td><strong>Producer surplus</strong></td><td>$PS = py - VC = \\pi + FC$</td></tr>'
    + '</table>'

    + '<h3>Industry Supply</h3>'
    + '<table><tr><td><strong>Aggregation</strong></td><td>$Y^S(p) = \\sum_i y_i^*(p)$</td></tr>'
    + '<tr><td><strong>Long-run eq.</strong></td><td>$\\pi = 0 \\Rightarrow p = \\min AC$</td></tr>'
    + '<tr><td>Constant cost</td><td>LR supply horizontal</td></tr>'
    + '<tr><td>Increasing cost</td><td>LR supply upward-sloping</td></tr>'
    + '<tr><td>Decreasing cost</td><td>LR supply downward-sloping</td></tr>'
    + '</table>',
}
