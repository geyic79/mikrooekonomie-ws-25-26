import type { Subject } from '@/data/types'

export const asymmetrischeInfo: Subject = {
  id: 'asymmetrische-info',
  titleDe: 'Asymmetrische Information',
  titleEn: 'Asymmetric Information',
  shortDescDe: 'Adverse Selektion, Signaling, Moral Hazard und das Principal-Agent-Modell',
  shortDescEn: 'Adverse selection, signaling, moral hazard and the principal-agent model',
  color: '#005957',
  icon: '\uD83D\uDD0D',
  videoLinks: [
    { titleDe: 'Adverse Selektion', titleEn: 'Adverse Selection', url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1713847' },
    { titleDe: 'Moral Hazard', titleEn: 'Moral Hazard', url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1714624' },
  ],

  summaryDe: `
<h2>1. Taxonomie asymmetrischer Information</h2>

<div class="definition-box">
  <strong>Asymmetrische Information:</strong> Eine Marktseite besitzt entscheidungsrelevantes Wissen, das der anderen Seite fehlt.
</div>

<p>Informationsprobleme lassen sich nach dem <strong>Zeitpunkt</strong> der Informationsasymmetrie einteilen:</p>

<table>
  <tr><th>Kategorie</th><th>Zeitpunkt</th><th>Verborgenes Element</th><th>Marktversagen</th></tr>
  <tr><td>Verborgene Eigenschaften</td><td>Vor Vertragsschluss (ex ante)</td><td>Typ / Qualit&auml;t</td><td>Adverse Selektion</td></tr>
  <tr><td>Verborgene Handlungen</td><td>Nach Vertragsschluss (ex post)</td><td>Anstrengung / Sorgfalt</td><td>Moral Hazard</td></tr>
</table>

<h2>2. Adverse Selektion</h2>

<h3>2.1 Akerlofs &bdquo;Market for Lemons&ldquo; (1970)</h3>

<p>George Akerlof zeigte, dass asymmetrische Qualit&auml;tsinformation zum <strong>Marktversagen</strong> f&uuml;hren kann. Das Standardbeispiel ist der Gebrauchtwagenmarkt.</p>

<div class="example-box">
  <strong>Mickey-Mouse-Modell:</strong> 100 Gebrauchtwagen &ndash; 50 gute (<em>Plums</em>, Wert f&uuml;r K&auml;ufer: &euro;2.400) und 50 schlechte (<em>Lemons</em>, Wert f&uuml;r K&auml;ufer: &euro;1.200). Verk&auml;ufer bewerten Plums mit &euro;2.000, Lemons mit &euro;1.000.
</div>

<h4>Vollst&auml;ndige Information</h4>
<p>Beide Typen werden gehandelt. Plums zu einem Preis $p \\in [2000,\\, 2400]$, Lemons zu $p \\in [1000,\\, 1200]$. Konsumenten- und Produzentenrente werden maximiert.</p>

<h4>Asymmetrische Information</h4>
<p>K&auml;ufer k&ouml;nnen Qualit&auml;t nicht beobachten. Der erwartete Wert eines zuf&auml;lligen Wagens ist:</p>

<div class="formula-block">
  $$E[V] = 0{,}5 \\cdot 2400 + 0{,}5 \\cdot 1200 = 1800$$
</div>

<p>Da $1800 &lt; 2000$ (Reservationspreis der Plum-Verk&auml;ufer), bieten Plum-Besitzer ihre Wagen nicht an. Es werden <strong>nur Lemons</strong> gehandelt, zum Preis $p = 1200$.</p>

<div class="insight-box">
  <strong>Market Unraveling:</strong> Die guten Typen verlassen den Markt &rarr; der Durchschnittswert sinkt &rarr; weitere gute Typen verlassen den Markt &rarr; nur die schlechtesten Typen bleiben &uuml;brig. Die adverse Selektion zerst&ouml;rt den Markt von innen heraus.
</div>

<h3>2.2 Gegenma&szlig;nahmen</h3>
<ul>
  <li><strong>Garantien / Gew&auml;hrleistungen:</strong> Gute Verk&auml;ufer bieten freiwillig Garantien an</li>
  <li><strong>Zertifikate &amp; Pr&uuml;fsiegel:</strong> Unabh&auml;ngige Dritte best&auml;tigen Qualit&auml;t (z.&thinsp;B. T&Uuml;V)</li>
  <li><strong>Signaling:</strong> Informierte Seite sendet kostspieliges Signal (s.&thinsp;u.)</li>
  <li><strong>Screening:</strong> Uninformierte Seite bietet Men&uuml; von Vertr&auml;gen an</li>
</ul>

<h2>3. Signale &ndash; Das Spence-Modell</h2>

<div class="definition-box">
  <strong>Signaling (Spence, 1973):</strong> Die <em>informierte</em> Seite ergreift eine kostspielige, beobachtbare Handlung (das Signal), um ihren verborgenen Typ glaubhaft zu offenbaren.
</div>

<h3>3.1 Bildung als Signal</h3>

<p>Bildung erh&ouml;ht hier <strong>nicht</strong> die Produktivit&auml;t &ndash; sie dient ausschlie&szlig;lich als Signal.</p>

<p>Zwei Arbeiter-Typen:</p>
<ul>
  <li><strong>Niedrig-Typ:</strong> Produktivit&auml;t $a_L$, Kosten pro Bildungseinheit $c_L$</li>
  <li><strong>Hoch-Typ:</strong> Produktivit&auml;t $a_H$, Kosten pro Bildungseinheit $c_H$</li>
</ul>

<p><strong>Schl&uuml;sselannahme (Single-Crossing):</strong> $c_H &lt; c_L$ &ndash; Bildung ist f&uuml;r den Hoch-Typ <em>billiger</em>.</p>

<h3>3.2 Trennendes Gleichgewicht (Separating Equilibrium)</h3>

<p>Hoch-Typen erwerben Bildungsniveau $e^*$, Niedrig-Typen erwerben $e = 0$. Firmen zahlen $a_H$ bei $e \\ge e^*$ und $a_L$ bei $e &lt; e^*$.</p>

<p>Damit sich Typen korrekt selbst sortieren, muss gelten:</p>

<div class="formula-block">
  $$\\frac{a_H - a_L}{c_L} \\;&lt;\\; e^* \\;&lt;\\; \\frac{a_H - a_L}{c_H}$$
</div>

<ul>
  <li><strong>Linke Ungleichung:</strong> Niedrig-Typ imitiert nicht &rarr; Kosten der Bildung &uuml;bersteigen den Lohnzuwachs: $c_L \\cdot e^* &gt; a_H - a_L$</li>
  <li><strong>Rechte Ungleichung:</strong> Hoch-Typ investiert &rarr; Lohnzuwachs &uuml;bersteigt Kosten: $a_H - a_L &gt; c_H \\cdot e^*$</li>
</ul>

<h3>3.3 Pooling-Gleichgewicht</h3>

<p>Beide Typen w&auml;hlen dasselbe Bildungsniveau. Die Firma zahlt den Durchschnittslohn $\\bar{a} = \\lambda a_H + (1-\\lambda) a_L$. Es findet <strong>keine Trennung</strong> statt.</p>

<div class="insight-box">
  <strong>Wohlfahrt:</strong> Signaling ist sozial verschwenderisch, wenn die Information auch auf g&uuml;nstigerem Weg bereitgestellt werden k&ouml;nnte. Die Bildungsinvestition ist ein reiner Sortierungsmechanismus ohne produktiven Mehrwert.
</div>

<h2>4. Moral Hazard</h2>

<div class="definition-box">
  <strong>Moral Hazard:</strong> Nach Vertragsschluss reduziert der Agent seine Anstrengung oder Sorgfalt, weil die andere Partei sein Verhalten nicht (vollst&auml;ndig) beobachten kann.
</div>

<h3>4.1 Fahrradversicherung &ndash; Numerisches Beispiel</h3>

<p>Ein Konsument kann durch Sorgfalt $q \\in [0, 1]$ die Wahrscheinlichkeit erh&ouml;hen, dass sein Fahrrad (Wert $V$) nicht gestohlen wird. Kosten der Sorgfalt: $\\tfrac{1}{2}q^2$.</p>

<h4>Ohne Versicherung</h4>
<div class="formula-block">
  $$\\max_q \\; qV - \\tfrac{1}{2}q^2 \\quad\\Rightarrow\\quad q^* = V$$
</div>
<p>Sorgfalt ist maximal, denn der Konsument tr&auml;gt das volle Risiko.</p>

<h4>Mit Vollversicherung</h4>
<div class="formula-block">
  $$q^{mh} = 0$$
</div>
<p>Kein Anreiz zur Sorgfalt, da der Versicherer den Schaden tr&auml;gt. Die <strong>faire Pr&auml;mie</strong> ist $\\pi = V$ (Fahrrad wird sicher gestohlen).</p>

<h4>First-Best (beobachtbare Sorgfalt)</h4>
<div class="formula-block">
  $$q^{fb} = V, \\qquad \\pi^{fb} = V(1 - V)$$
</div>

<h4>Second-Best: Selbstbeteiligung $S$</h4>
<p>Mit einer Selbstbeteiligung $S$ internalisiert der Versicherte einen Teil des Schadens:</p>
<div class="formula-block">
  $$q^S = S, \\qquad \\pi = (1 - S)(V - S)$$
</div>
<p>Je h&ouml;her $S$, desto mehr Sorgfalt, aber desto weniger Versicherungsschutz &rarr; <strong>Trade-off zwischen Anreiz und Risikoabsicherung</strong>.</p>

<h2>5. Das Principal-Agent-Modell</h2>

<div class="definition-box">
  <strong>Principal-Agent-Problem:</strong> Der Prinzipal (z.&thinsp;B. Eigent&uuml;mer) beauftragt einen Agenten (z.&thinsp;B. Manager), kann aber dessen Anstrengung nicht beobachten.
</div>

<h3>5.1 Modellrahmen</h3>
<ul>
  <li>Erl&ouml;s: $y = e + \\varepsilon$, wobei $E[\\varepsilon] = 0$</li>
  <li>Kosten der Anstrengung: $c(e) = \\tfrac{1}{2}e^2$</li>
  <li>Reservationsnutzen des Agenten: $\\bar{u}$</li>
</ul>

<h3>5.2 Festgehalt</h3>
<p>Bei einem fixen Gehalt $s$ gilt f&uuml;r den Agenten: $\\max_e \\; s - \\tfrac{1}{2}e^2$. Ergebnis: $e^* = 0$ (Moral Hazard).</p>

<h3>5.3 Linearer Vertrag $s(y) = s_0 + s_1 y$</h3>

<p><strong>FOC des Agenten:</strong></p>
<div class="formula-block">
  $$s_1 = e^* \\quad \\text{(Anstrengung = Erl&ouml;santeil)}$$
</div>

<p><strong>Teilnahmebedingung (Participation Constraint):</strong></p>
<div class="formula-block">
  $$s_0 + s_1 \\cdot e^* - \\tfrac{1}{2}(e^*)^2 \\;\\ge\\; \\bar{u} \\quad\\Rightarrow\\quad s_0 = \\bar{u} - \\tfrac{1}{2}s_1^2$$
</div>

<p><strong>Optimierung des Prinzipals:</strong></p>
<div class="formula-block">
  $$\\max_{s_1} \\; E[y] - s_0 - s_1 \\cdot E[y] = e^* - \\bar{u} + \\tfrac{1}{2}s_1^2 - s_1^2$$
</div>
<p>Einsetzen von $e^* = s_1$:</p>
<div class="formula-block">
  $$\\max_{s_1} \\; s_1 - \\bar{u} - \\tfrac{1}{2}s_1^2 \\quad\\Rightarrow\\quad s_1^* = \\frac{1}{2}$$
</div>

<p>Erwarteter Output: $E[y] = e^* = \\tfrac{1}{2}$. Der Agent erh&auml;lt die H&auml;lfte des Erl&ouml;ses.</p>

<div class="insight-box">
  <strong>Kernaussage:</strong> Der optimale Vertrag balanciert den <em>Trade-off zwischen Anreiz und Risikoabsicherung</em>. Volle Anreizsetzung ($s_1 = 1$) w&uuml;rde den risikoaversen Agenten dem vollen Risiko aussetzen; kein Anreiz ($s_1 = 0$) f&uuml;hrt zu null Anstrengung.
</div>

<h2>Weiterführende Lektüre (Varian)</h2>
<ul>
<li><strong>Kapitel 38: Asymmetrische Information</strong> (S. 829–856) – Behandelt negative Auslese (Akerlofs Lemons-Modell mit Markt-Unraveling und verpflichtendem Versicherungskauf als Pareto-Verbesserung), Moral Hazard (Fahrradversicherung mit dem Trade-off zwischen Versicherungsschutz und Sorgfaltsanreiz durch Selbstbeteiligung), Signaling (Spences Bildungsmodell mit Unterscheidungs- vs. Vereinigungsgleichgewicht und dem &bdquo;Pergament-Effekt&ldquo;) sowie die Gestaltung optimaler Anreizsysteme im Principal-Agent-Rahmen.</li>
</ul>
`,

  summaryEn: `
<h2>1. Taxonomy of Asymmetric Information</h2>

<div class="definition-box">
  <strong>Asymmetric Information:</strong> One side of the market possesses decision-relevant knowledge that the other side lacks.
</div>

<p>Information problems can be classified by the <strong>timing</strong> of the information asymmetry:</p>

<table>
  <tr><th>Category</th><th>Timing</th><th>Hidden Element</th><th>Market Failure</th></tr>
  <tr><td>Hidden characteristics</td><td>Before contracting (ex ante)</td><td>Type / Quality</td><td>Adverse selection</td></tr>
  <tr><td>Hidden actions</td><td>After contracting (ex post)</td><td>Effort / Care</td><td>Moral hazard</td></tr>
</table>

<h2>2. Adverse Selection</h2>

<h3>2.1 Akerlof&rsquo;s &ldquo;Market for Lemons&rdquo; (1970)</h3>

<p>George Akerlof showed that asymmetric quality information can lead to <strong>market failure</strong>. The standard example is the used car market.</p>

<div class="example-box">
  <strong>Mickey Mouse Model:</strong> 100 used cars &ndash; 50 good ones (<em>Plums</em>, buyer value: &euro;2,400) and 50 bad ones (<em>Lemons</em>, buyer value: &euro;1,200). Sellers value plums at &euro;2,000 and lemons at &euro;1,000.
</div>

<h4>Full Information</h4>
<p>Both types are traded. Plums at a price $p \\in [2000,\\, 2400]$, lemons at $p \\in [1000,\\, 1200]$. Consumer and producer surplus are maximized.</p>

<h4>Asymmetric Information</h4>
<p>Buyers cannot observe quality. The expected value of a random car is:</p>

<div class="formula-block">
  $$E[V] = 0.5 \\cdot 2400 + 0.5 \\cdot 1200 = 1800$$
</div>

<p>Since $1800 &lt; 2000$ (the plum sellers&rsquo; reservation price), plum owners do not offer their cars. <strong>Only lemons</strong> are traded at price $p = 1200$.</p>

<div class="insight-box">
  <strong>Market Unraveling:</strong> Good types leave the market &rarr; average value drops &rarr; more good types leave &rarr; only the worst types remain. Adverse selection destroys the market from within.
</div>

<h3>2.2 Countermeasures</h3>
<ul>
  <li><strong>Warranties / Guarantees:</strong> Good sellers voluntarily offer warranties</li>
  <li><strong>Certificates &amp; Quality seals:</strong> Independent third parties verify quality</li>
  <li><strong>Signaling:</strong> Informed side sends a costly signal (see below)</li>
  <li><strong>Screening:</strong> Uninformed side offers a menu of contracts</li>
</ul>

<h2>3. Signals &ndash; The Spence Model</h2>

<div class="definition-box">
  <strong>Signaling (Spence, 1973):</strong> The <em>informed</em> side takes a costly, observable action (the signal) to credibly reveal their hidden type.
</div>

<h3>3.1 Education as a Signal</h3>

<p>Here, education does <strong>not</strong> increase productivity &ndash; it serves solely as a signal.</p>

<p>Two worker types:</p>
<ul>
  <li><strong>Low type:</strong> Productivity $a_L$, cost per unit of education $c_L$</li>
  <li><strong>High type:</strong> Productivity $a_H$, cost per unit of education $c_H$</li>
</ul>

<p><strong>Key assumption (Single-Crossing):</strong> $c_H &lt; c_L$ &ndash; education is <em>cheaper</em> for the high type.</p>

<h3>3.2 Separating Equilibrium</h3>

<p>High types acquire education level $e^*$, low types acquire $e = 0$. Firms pay $a_H$ if $e \\ge e^*$ and $a_L$ if $e &lt; e^*$.</p>

<p>For types to correctly self-sort, the following must hold:</p>

<div class="formula-block">
  $$\\frac{a_H - a_L}{c_L} \\;&lt;\\; e^* \\;&lt;\\; \\frac{a_H - a_L}{c_H}$$
</div>

<ul>
  <li><strong>Left inequality:</strong> Low type does not imitate &rarr; cost of education exceeds the wage gain: $c_L \\cdot e^* &gt; a_H - a_L$</li>
  <li><strong>Right inequality:</strong> High type invests &rarr; wage gain exceeds cost: $a_H - a_L &gt; c_H \\cdot e^*$</li>
</ul>

<h3>3.3 Pooling Equilibrium</h3>

<p>Both types choose the same education level. The firm pays the average wage $\\bar{a} = \\lambda a_H + (1-\\lambda) a_L$. There is <strong>no separation</strong>.</p>

<div class="insight-box">
  <strong>Welfare:</strong> Signaling is socially wasteful if information could be provided more cheaply. The education investment is a pure sorting mechanism with no productive value added.
</div>

<h2>4. Moral Hazard</h2>

<div class="definition-box">
  <strong>Moral Hazard:</strong> After contracting, the agent reduces effort or care because the other party cannot (fully) observe their behavior.
</div>

<h3>4.1 Bicycle Insurance &ndash; Numerical Example</h3>

<p>A consumer can increase the probability that their bicycle (value $V$) is not stolen through care $q \\in [0, 1]$. Cost of care: $\\tfrac{1}{2}q^2$.</p>

<h4>Without Insurance</h4>
<div class="formula-block">
  $$\\max_q \\; qV - \\tfrac{1}{2}q^2 \\quad\\Rightarrow\\quad q^* = V$$
</div>
<p>Care is maximal because the consumer bears the full risk.</p>

<h4>With Full Insurance</h4>
<div class="formula-block">
  $$q^{mh} = 0$$
</div>
<p>No incentive for care since the insurer bears the loss. The <strong>fair premium</strong> is $\\pi = V$ (bicycle is certain to be stolen).</p>

<h4>First Best (Observable Care)</h4>
<div class="formula-block">
  $$q^{fb} = V, \\qquad \\pi^{fb} = V(1 - V)$$
</div>

<h4>Second Best: Deductible $S$</h4>
<p>With a deductible $S$, the insured internalizes part of the damage:</p>
<div class="formula-block">
  $$q^S = S, \\qquad \\pi = (1 - S)(V - S)$$
</div>
<p>The higher $S$, the more care but the less insurance coverage &rarr; <strong>trade-off between incentives and risk-sharing</strong>.</p>

<h2>5. The Principal-Agent Model</h2>

<div class="definition-box">
  <strong>Principal-Agent Problem:</strong> The principal (e.g., owner) hires an agent (e.g., manager) but cannot observe the agent&rsquo;s effort.
</div>

<h3>5.1 Model Setup</h3>
<ul>
  <li>Revenue: $y = e + \\varepsilon$, where $E[\\varepsilon] = 0$</li>
  <li>Cost of effort: $c(e) = \\tfrac{1}{2}e^2$</li>
  <li>Agent&rsquo;s reservation utility: $\\bar{u}$</li>
</ul>

<h3>5.2 Flat Wage</h3>
<p>With a fixed wage $s$, the agent solves: $\\max_e \\; s - \\tfrac{1}{2}e^2$. Result: $e^* = 0$ (moral hazard).</p>

<h3>5.3 Linear Contract $s(y) = s_0 + s_1 y$</h3>

<p><strong>Agent&rsquo;s FOC:</strong></p>
<div class="formula-block">
  $$s_1 = e^* \\quad \\text{(effort = revenue share)}$$
</div>

<p><strong>Participation Constraint:</strong></p>
<div class="formula-block">
  $$s_0 + s_1 \\cdot e^* - \\tfrac{1}{2}(e^*)^2 \\;\\ge\\; \\bar{u} \\quad\\Rightarrow\\quad s_0 = \\bar{u} - \\tfrac{1}{2}s_1^2$$
</div>

<p><strong>Principal&rsquo;s Optimization:</strong></p>
<div class="formula-block">
  $$\\max_{s_1} \\; E[y] - s_0 - s_1 \\cdot E[y] = e^* - \\bar{u} + \\tfrac{1}{2}s_1^2 - s_1^2$$
</div>
<p>Substituting $e^* = s_1$:</p>
<div class="formula-block">
  $$\\max_{s_1} \\; s_1 - \\bar{u} - \\tfrac{1}{2}s_1^2 \\quad\\Rightarrow\\quad s_1^* = \\frac{1}{2}$$
</div>

<p>Expected output: $E[y] = e^* = \\tfrac{1}{2}$. The agent receives half of the revenue.</p>

<div class="insight-box">
  <strong>Key Insight:</strong> The optimal contract balances the <em>trade-off between incentives and risk-sharing</em>. Full incentives ($s_1 = 1$) would expose the risk-averse agent to full risk; no incentives ($s_1 = 0$) lead to zero effort.
</div>

<h2>Further Reading (Varian)</h2>
<ul>
<li><strong>Chapter 38: Asymmetric Information</strong> (pp. 829–856) – Covers adverse selection (Akerlof's lemons model with market unraveling and compulsory insurance purchase as a Pareto improvement), moral hazard (bicycle insurance with the trade-off between coverage and care incentives via deductibles), signaling (Spence's education model with separating vs. pooling equilibria and the "sheepskin effect"), and the design of optimal incentive schemes in the principal-agent framework.</li>
</ul>
`,

  cheatsheetDe: `
<h2>Asymmetrische Information &ndash; Spickzettel</h2>

<h3>Taxonomie</h3>
<table>
  <tr><th>Problem</th><th>Zeitpunkt</th><th>Verborgen</th><th>Folge</th></tr>
  <tr><td>Adverse Selektion</td><td>Ex ante</td><td>Typ / Qualit&auml;t</td><td>Markt-Unraveling</td></tr>
  <tr><td>Moral Hazard</td><td>Ex post</td><td>Anstrengung</td><td>Unterversorgung an Sorgfalt</td></tr>
</table>

<h3>Adverse Selektion (Akerlof, 1970)</h3>
<ul>
  <li>50 Plums (K&auml;uferwert &euro;2.400, Verk&auml;uferwert &euro;2.000) &amp; 50 Lemons (&euro;1.200 / &euro;1.000)</li>
  <li>$E[V] = 0{,}5 \\cdot 2400 + 0{,}5 \\cdot 1200 = 1800 &lt; 2000$ &rarr; nur Lemons gehandelt</li>
  <li>Gegenma&szlig;nahmen: Garantien, Zertifikate, Signaling, Screening</li>
</ul>

<h3>Signaling (Spence, 1973)</h3>
<ul>
  <li>Hoch-Typ: $(a_H,\\, c_H)$, Niedrig-Typ: $(a_L,\\, c_L)$, mit $c_H &lt; c_L$</li>
  <li>Trennendes GG: Hoch-Typ w&auml;hlt $e^*$, Niedrig-Typ w&auml;hlt $e = 0$</li>
</ul>
<div class="formula-block">
  $$\\frac{a_H - a_L}{c_L} < e^* < \\frac{a_H - a_L}{c_H}$$
</div>
<ul>
  <li>Pooling-GG: beide gleiche Bildung, Durchschnittslohn $\\bar{a}$</li>
  <li>Signal sozial verschwenderisch, wenn billigere Alternative existiert</li>
</ul>

<h3>Moral Hazard &ndash; Fahrradversicherung</h3>
<table>
  <tr><th>Szenario</th><th>Sorgfalt $q$</th><th>Pr&auml;mie $\\pi$</th></tr>
  <tr><td>Ohne Versicherung</td><td>$q^* = V$</td><td>&ndash;</td></tr>
  <tr><td>Vollversicherung</td><td>$q^{mh} = 0$</td><td>$V$</td></tr>
  <tr><td>First-Best</td><td>$q^{fb} = V$</td><td>$V(1-V)$</td></tr>
  <tr><td>Selbstbeteiligung $S$</td><td>$q^S = S$</td><td>$(1-S)(V-S)$</td></tr>
</table>

<h3>Principal-Agent-Modell</h3>
<ul>
  <li>$y = e + \\varepsilon$, $E[\\varepsilon]=0$, $c(e) = \\tfrac{1}{2}e^2$</li>
  <li>Linearer Vertrag: $s(y) = s_0 + s_1 y$</li>
  <li>FOC Agent: $e^* = s_1$</li>
  <li>Teilnahmebedingung: $s_0 = \\bar{u} - \\tfrac{1}{2}s_1^2$</li>
</ul>
<div class="formula-block">
  $$\\max_{s_1}\\; s_1 - \\bar{u} - \\tfrac{1}{2}s_1^2 \\;\\Rightarrow\\; s_1^* = \\tfrac{1}{2}, \\quad E[y] = \\tfrac{1}{2}$$
</div>
<ul>
  <li>Trade-off: Anreiz ($s_1$ hoch) vs. Risikoabsicherung ($s_1$ niedrig)</li>
  <li>Festgehalt: $e = 0$ (Moral Hazard)</li>
</ul>
`,

  cheatsheetEn: `
<h2>Asymmetric Information &ndash; Cheat Sheet</h2>

<h3>Taxonomy</h3>
<table>
  <tr><th>Problem</th><th>Timing</th><th>Hidden</th><th>Consequence</th></tr>
  <tr><td>Adverse Selection</td><td>Ex ante</td><td>Type / Quality</td><td>Market unraveling</td></tr>
  <tr><td>Moral Hazard</td><td>Ex post</td><td>Effort</td><td>Under-provision of care</td></tr>
</table>

<h3>Adverse Selection (Akerlof, 1970)</h3>
<ul>
  <li>50 Plums (buyer value &euro;2,400, seller value &euro;2,000) &amp; 50 Lemons (&euro;1,200 / &euro;1,000)</li>
  <li>$E[V] = 0.5 \\cdot 2400 + 0.5 \\cdot 1200 = 1800 &lt; 2000$ &rarr; only lemons traded</li>
  <li>Countermeasures: warranties, certificates, signaling, screening</li>
</ul>

<h3>Signaling (Spence, 1973)</h3>
<ul>
  <li>High type: $(a_H,\\, c_H)$, low type: $(a_L,\\, c_L)$, with $c_H &lt; c_L$</li>
  <li>Separating eq.: high type chooses $e^*$, low type chooses $e = 0$</li>
</ul>
<div class="formula-block">
  $$\\frac{a_H - a_L}{c_L} < e^* < \\frac{a_H - a_L}{c_H}$$
</div>
<ul>
  <li>Pooling eq.: both same education, average wage $\\bar{a}$</li>
  <li>Signal is socially wasteful if cheaper alternative exists</li>
</ul>

<h3>Moral Hazard &ndash; Bicycle Insurance</h3>
<table>
  <tr><th>Scenario</th><th>Care $q$</th><th>Premium $\\pi$</th></tr>
  <tr><td>No insurance</td><td>$q^* = V$</td><td>&ndash;</td></tr>
  <tr><td>Full insurance</td><td>$q^{mh} = 0$</td><td>$V$</td></tr>
  <tr><td>First best</td><td>$q^{fb} = V$</td><td>$V(1-V)$</td></tr>
  <tr><td>Deductible $S$</td><td>$q^S = S$</td><td>$(1-S)(V-S)$</td></tr>
</table>

<h3>Principal-Agent Model</h3>
<ul>
  <li>$y = e + \\varepsilon$, $E[\\varepsilon]=0$, $c(e) = \\tfrac{1}{2}e^2$</li>
  <li>Linear contract: $s(y) = s_0 + s_1 y$</li>
  <li>Agent FOC: $e^* = s_1$</li>
  <li>Participation constraint: $s_0 = \\bar{u} - \\tfrac{1}{2}s_1^2$</li>
</ul>
<div class="formula-block">
  $$\\max_{s_1}\\; s_1 - \\bar{u} - \\tfrac{1}{2}s_1^2 \\;\\Rightarrow\\; s_1^* = \\tfrac{1}{2}, \\quad E[y] = \\tfrac{1}{2}$$
</div>
<ul>
  <li>Trade-off: incentives ($s_1$ high) vs. risk-sharing ($s_1$ low)</li>
  <li>Flat wage: $e = 0$ (moral hazard)</li>
</ul>
`,
}
