import type { Subject } from '@/data/types'

export const marktmacht: Subject = {
  id: 'marktmacht',
  titleDe: 'Marktmacht',
  titleEn: 'Market Power',
  shortDescDe:
    'Monopol, Oligopol (Bertrand, Cournot, Stackelberg), Preisdiskriminierung und Produktdifferenzierung',
  shortDescEn:
    'Monopoly, oligopoly (Bertrand, Cournot, Stackelberg), price discrimination and product differentiation',
  color: '#bf3a22',
  icon: '\u{1F451}',
  videoLinks: [
    {
      titleDe: 'Marktmacht 1',
      titleEn: 'Market Power 1',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1702128',
    },
    {
      titleDe: 'Marktmacht 2',
      titleEn: 'Market Power 2',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1702128',
    },
    {
      titleDe: 'Marktmacht 3',
      titleEn: 'Market Power 3',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1705183',
    },
    {
      titleDe: 'Zusatzvideo Horizontale Differenzierung',
      titleEn: 'Extra: Horizontal Differentiation',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1705184',
    },
  ],

  summaryDe: `
<h2>1. Monopolverhalten</h2>

<h3>Gewinnmaximierung</h3>
<p>
  Ein Monopolist ist der einzige Anbieter auf dem Markt und sieht sich der gesamten Marktnachfrage
  gegen&uuml;ber. Sein Optimierungsproblem lautet:
</p>
$$\\max_y \\; p(y) \\cdot y - c(y)$$
<p>
  Die Bedingung erster Ordnung lautet <strong>Grenz&shy;erl&ouml;s = Grenzkosten</strong> (MR = MC):
</p>
$$p(y)\\!\\left[1 + \\frac{1}{\\varepsilon_{y,p}}\\right] = MC(y)$$
<p>
  Dabei ist $\\varepsilon_{y,p}$ die Preiselastizit&auml;t der Nachfrage. Es folgt die
  <strong>Aufschlags&shy;formel</strong> (Markup):
</p>
$$p = \\frac{|\\varepsilon|}{|\\varepsilon| - 1} \\cdot MC$$
<p>
  Je unelastischer die Nachfrage (kleines $|\\varepsilon|$), desto h&ouml;her der Aufschlag &uuml;ber
  die Grenzkosten.
</p>

<h3>Lineares Nachfragebeispiel</h3>
<p>
  Sei $p(y) = a - by$ und $c(y) = dy^2$, also $MC = 2dy$. Dann:
</p>
$$y^{*,M} = \\frac{a}{2(b+d)}, \\qquad p^{*,M} = \\frac{a(b+2d)}{2(b+d)}$$
$$\\pi^{*,M} = \\frac{a^2}{4(b+d)}$$

<h3>Wohlfahrt</h3>
<p>
  Der Monopolist schr&auml;nkt die Produktion ein, um den Preis zu erh&ouml;hen. Dadurch entsteht ein
  <strong>Wohlfahrtsverlust</strong> (Deadweight Loss, DWL). Die Konsumentenrente sinkt; die Produzentenrente
  kann steigen, reicht aber nicht aus, um den Verlust zu kompensieren.
</p>
<p>
  Ein <strong>nat&uuml;rliches Monopol</strong> liegt vor, wenn die Durchschnittskosten im relevanten
  Bereich sinken &ndash; ein einziger Anbieter kann den Markt effizienter bedienen als mehrere.
</p>

<details class="interactive-widget">
<summary>Interaktives Tool: Monopol</summary>
<iframe src="https://tuda-mikro.org/lecture_05/lecture_05.html#mono-app" loading="lazy" title="Interaktives Diagramm zum Monopol"></iframe>
</details>

<h2>2. Bertrand-Duopol</h2>
<p>
  Zwei Firmen mit identischen Produkten konkurrieren &uuml;ber <strong>Preise</strong>. Die Nachfrage
  geht vollst&auml;ndig an das g&uuml;nstigere Unternehmen; bei gleichem Preis wird geteilt.
</p>
<p>
  <strong>Beste Antwort:</strong> Unterbiete den Preis des Konkurrenten um ein $\\varepsilon$,
  solange $p_j > c$.
</p>
<p>
  <strong>Nash-Gleichgewicht:</strong>
</p>
$$p_1 = p_2 = c$$
<p>
  Schon bei nur zwei Firmen ergibt sich das kompetitive Ergebnis! Dies wird als
  <strong>Bertrand-Paradoxon</strong> bezeichnet.
</p>

<h2>3. Cournot-Duopol</h2>
<p>
  Zwei Firmen konkurrieren &uuml;ber <strong>Mengen</strong>. Inverse Nachfrage: $p = a - bQ$,
  wobei $Q = q_1 + q_2$ und $c = 0$.
</p>
<p><strong>Beste-Antwort-Funktion:</strong></p>
$$q_i^* = \\frac{a - bq_j}{2b}$$
<p><strong>Nash-Gleichgewicht (symmetrisch):</strong></p>
$$q_i^* = \\frac{a}{3b}, \\qquad p^* = \\frac{a}{3}$$
<p>
  Mit $n$ Firmen verallgemeinert sich das Gleichgewicht zu:
</p>
$$q_i^* = \\frac{a}{(n+1)b}$$
<p>
  F&uuml;r $n \\to \\infty$ konvergiert das Cournot-Ergebnis gegen das kompetitive Gleichgewicht.
</p>

<h2>4. Stackelberg (Sequenzielle Mengenwahl)</h2>
<p>
  Firma&nbsp;1 (Leader) legt zuerst ihre Menge $q_1$ fest. Firma&nbsp;2 (Follower) beobachtet $q_1$ und
  w&auml;hlt dann $q_2$.
</p>
<p>
  <strong>R&uuml;ckw&auml;rtsinduktion:</strong> Zuerst die beste Antwort des Followers bestimmen,
  dann optimiert der Leader.
</p>
$$q_1^* = \\frac{a}{2b}, \\qquad q_2^* = \\frac{a}{4b}$$
$$p^* = \\frac{a}{4}$$
<p>
  <strong>First-Mover-Vorteil:</strong>
  $\\pi_1 > \\pi^{\\text{Cournot}} > \\pi_2$. Der Leader produziert mehr und erzielt einen h&ouml;heren
  Gewinn als im symmetrischen Cournot-Gleichgewicht.
</p>

<h2>5. Kartelle</h2>
<p>
  Firmen <strong>kolludieren</strong> und verhalten sich wie ein gemeinsamer Monopolist. Die
  Kartellmenge liegt unter der Cournot-Menge, der Kartellpreis dar&uuml;ber.
</p>
<p>
  <strong>Instabilit&auml;t:</strong> Jede einzelne Firma hat einen Anreiz, von der Kartellvereinbarung
  abzuweichen und mehr zu produzieren. Kartelle k&ouml;nnen durch <strong>wiederholte Spiele</strong> mit
  hinreichend hohem Diskontfaktor $\\delta$ stabilisiert werden.
</p>

<h2>6. Preisdiskriminierung</h2>

<h3>1.&nbsp;Grades (Perfekte PD)</h3>
<p>
  Jeder Konsument zahlt seine maximale Zahlungsbereitschaft. Das Ergebnis ist
  <strong>effizient</strong> (kein DWL), aber die gesamte Rente geht an den Produzenten.
</p>

<h3>2.&nbsp;Grades (Selbstselektion)</h3>
<p>
  Der Monopolist bietet ein <strong>Men&uuml;</strong> an Optionen an (z.&nbsp;B. Mengenrabatte,
  Versionierung). Konsumenten w&auml;hlen selbst. Die
  <strong>Anreizkompatibilit&auml;tsbedingung</strong> (IC) stellt sicher, dass jeder Typ die f&uuml;r
  ihn vorgesehene Option w&auml;hlt.
</p>

<h3>3.&nbsp;Grades (Marktsegmentierung)</h3>
<p>
  Der Monopolist segmentiert den Markt nach beobachtbaren Merkmalen und verlangt
  <strong>h&ouml;here Preise im unelastischeren Segment</strong>.
</p>
<p>
  <em>Beispiel:</em> Kinotickets &ndash; Studierendenrabatt f&uuml;r die elastischere Gruppe.
</p>

<h2>7. B&uuml;ndelung &amp; Zweiteilige Tarife</h2>
<p>
  <strong>B&uuml;ndelung:</strong> Produkte werden zusammen verkauft, um mehr Konsumentenrente
  abzusch&ouml;pfen (unterschiedliche Zahlungsbereitschaften werden ausgeglichen).
</p>
<p>
  <strong>Zweiteiliger Tarif:</strong> Fixgeb&uuml;hr + St&uuml;ckpreis. Optimaler zweiteiliger
  Tarif: St&uuml;ckpreis = MC, Fixgeb&uuml;hr = Konsumentenrente bei diesem Preis.
</p>

<h2>8. Produktdifferenzierung</h2>

<h3>Hotelling-Modell</h3>
<p>
  Zwei Anbieter positionieren sich auf dem Intervall $[0,1]$. Konsumenten sind gleichm&auml;&szlig;ig
  verteilt und bevorzugen den n&auml;heren Anbieter.
</p>
<p>
  <strong>Nash-Gleichgewicht (nur Standortwahl):</strong> Minimale Differenzierung &ndash; beide
  w&auml;hlen die Mitte ($\\frac{1}{2}$). F&uuml;r Konsumenten suboptimal.
</p>
<p>
  <strong>Mit Preiswettbewerb:</strong> Differenzierung schafft Marktmacht &ndash; Firmen k&ouml;nnen
  Preise &uuml;ber den Grenzkosten setzen.
</p>

<h3>Monopolistische Konkurrenz</h3>
<p>
  Viele Firmen mit differenzierten Produkten. Jede Firma sieht sich einer fallenden Nachfragekurve
  gegen&uuml;ber. Freier Marktzutritt f&uuml;hrt langfristig zu <strong>Nullgewinnen</strong>.
</p>
<p>
  Ergebnis: $p > MC$ (allokative Ineffizienz) und <strong>&Uuml;berkapazit&auml;t</strong> &ndash;
  Firmen produzieren weniger als die kosteneffiziente Menge.
</p>

<h2>Weiterführende Lektüre (Varian)</h2>
<ul>
<li><strong>Kapitel 25: Monopol</strong> (S. 507–529) – Leitet die Gewinnmaximierungsbedingung MR = MC her, zeigt die Markup-Formel über die Preiselastizität und analysiert den Wohlfahrtsverlust des Monopols einschließlich des Sonderfalls der Besteuerung bei linearer Nachfrage.</li>
<li><strong>Kapitel 26: Monopolverhalten</strong> (S. 531–556) – Behandelt Preisdiskriminierung 1.–3. Grades (perfekte PD, Selbstselektion, Marktsegmentierung), Bündelung, zweiteilige Tarife (Disneyland-Dilemma) sowie das Hotelling-Modell der räumlichen Produktdifferenzierung und monopolistische Konkurrenz mit Nullgewinnen bei freiem Marktzutritt.</li>
<li><strong>Kapitel 28: Oligopol</strong> (S. 569–596) – Stellt die vier klassischen Oligopolmodelle vor: Stackelberg-Mengenführerschaft, simultane Mengenwahl (Cournot mit Reaktionsfunktionen und Nash-Gleichgewicht), simultane Preiswahl (Bertrand-Paradoxon) sowie Kartellabsprachen und deren Instabilität.</li>
</ul>
`,

  summaryEn: `
<h2>1. Monopoly Behavior</h2>

<h3>Profit Maximization</h3>
<p>
  A monopolist is the sole seller in the market and faces the entire market demand. The optimization
  problem is:
</p>
$$\\max_y \\; p(y) \\cdot y - c(y)$$
<p>
  The first-order condition is <strong>Marginal Revenue = Marginal Cost</strong> (MR = MC):
</p>
$$p(y)\\!\\left[1 + \\frac{1}{\\varepsilon_{y,p}}\\right] = MC(y)$$
<p>
  Here $\\varepsilon_{y,p}$ is the price elasticity of demand. This yields the
  <strong>markup formula</strong>:
</p>
$$p = \\frac{|\\varepsilon|}{|\\varepsilon| - 1} \\cdot MC$$
<p>
  The more inelastic the demand (smaller $|\\varepsilon|$), the higher the markup above marginal cost.
</p>

<h3>Linear Demand Example</h3>
<p>
  Let $p(y) = a - by$ and $c(y) = dy^2$, so $MC = 2dy$. Then:
</p>
$$y^{*,M} = \\frac{a}{2(b+d)}, \\qquad p^{*,M} = \\frac{a(b+2d)}{2(b+d)}$$
$$\\pi^{*,M} = \\frac{a^2}{4(b+d)}$$

<h3>Welfare</h3>
<p>
  The monopolist restricts output to raise the price. This creates a
  <strong>deadweight loss</strong> (DWL). Consumer surplus falls; producer surplus may rise but does
  not compensate for the loss.
</p>
<p>
  A <strong>natural monopoly</strong> arises when average costs are falling over the relevant range of
  output &mdash; a single firm can serve the market more efficiently than multiple firms.
</p>

<details class="interactive-widget">
<summary>Interactive Tool: Monopoly</summary>
<iframe src="https://tuda-mikro.org/lecture_05/lecture_05.html#mono-app" loading="lazy" title="Interactive diagram for monopoly"></iframe>
</details>

<h2>2. Bertrand Duopoly</h2>
<p>
  Two firms with identical products compete on <strong>prices</strong>. All demand goes to the cheaper
  firm; at equal prices, demand is split.
</p>
<p>
  <strong>Best response:</strong> Undercut the rival's price by $\\varepsilon$ as long as $p_j > c$.
</p>
<p>
  <strong>Nash equilibrium:</strong>
</p>
$$p_1 = p_2 = c$$
<p>
  With just two firms, the competitive outcome obtains! This is known as the
  <strong>Bertrand paradox</strong>.
</p>

<h2>3. Cournot Duopoly</h2>
<p>
  Two firms compete on <strong>quantities</strong>. Inverse demand: $p = a - bQ$, where
  $Q = q_1 + q_2$ and $c = 0$.
</p>
<p><strong>Best-response function:</strong></p>
$$q_i^* = \\frac{a - bq_j}{2b}$$
<p><strong>Nash equilibrium (symmetric):</strong></p>
$$q_i^* = \\frac{a}{3b}, \\qquad p^* = \\frac{a}{3}$$
<p>
  With $n$ firms the equilibrium generalizes to:
</p>
$$q_i^* = \\frac{a}{(n+1)b}$$
<p>
  As $n \\to \\infty$, the Cournot outcome converges to the competitive equilibrium.
</p>

<h2>4. Stackelberg (Sequential Quantity Competition)</h2>
<p>
  Firm&nbsp;1 (leader) commits to $q_1$ first. Firm&nbsp;2 (follower) observes $q_1$ and then
  chooses $q_2$.
</p>
<p>
  <strong>Backward induction:</strong> First solve the follower's best response, then the leader
  optimizes.
</p>
$$q_1^* = \\frac{a}{2b}, \\qquad q_2^* = \\frac{a}{4b}$$
$$p^* = \\frac{a}{4}$$
<p>
  <strong>First-mover advantage:</strong>
  $\\pi_1 > \\pi^{\\text{Cournot}} > \\pi_2$. The leader produces more and earns higher profit than in
  the symmetric Cournot equilibrium.
</p>

<h2>5. Cartels</h2>
<p>
  Firms <strong>collude</strong> and behave as a joint monopolist. Cartel output is below Cournot
  output; cartel price is above.
</p>
<p>
  <strong>Instability:</strong> Each firm has an incentive to deviate from the cartel agreement and
  produce more. Cartels can be sustained through <strong>repeated games</strong> with a sufficiently
  high discount factor $\\delta$.
</p>

<h2>6. Price Discrimination</h2>

<h3>1st Degree (Perfect PD)</h3>
<p>
  Each consumer is charged their maximum willingness to pay. The outcome is
  <strong>efficient</strong> (no DWL), but all surplus goes to the producer.
</p>

<h3>2nd Degree (Self-Selection)</h3>
<p>
  The monopolist offers a <strong>menu</strong> of options (e.g., quantity discounts, versioning).
  Consumers self-select. The <strong>incentive compatibility constraint</strong> (IC) ensures that
  each type picks the option designed for them.
</p>

<h3>3rd Degree (Market Segmentation)</h3>
<p>
  The monopolist segments the market by observable characteristics and charges a
  <strong>higher price in the less elastic segment</strong>.
</p>
<p>
  <em>Example:</em> Cinema tickets &mdash; student discounts for the more elastic group.
</p>

<h2>7. Bundling &amp; Two-Part Pricing</h2>
<p>
  <strong>Bundling:</strong> Products sold together to extract more consumer surplus (heterogeneous
  valuations are averaged out).
</p>
<p>
  <strong>Two-part tariff:</strong> Fixed fee + per-unit price. Optimal two-part tariff: per-unit
  price = MC, fixed fee = consumer surplus at that price.
</p>

<h2>8. Product Differentiation</h2>

<h3>Hotelling Model</h3>
<p>
  Two firms locate on the interval $[0,1]$. Consumers are uniformly distributed and prefer the
  nearest firm.
</p>
<p>
  <strong>Nash equilibrium (location choice only):</strong> Minimal differentiation &mdash; both
  locate at the center ($\\frac{1}{2}$). Suboptimal for consumers.
</p>
<p>
  <strong>With price competition:</strong> Differentiation creates market power &mdash; firms can
  set prices above marginal cost.
</p>

<h3>Monopolistic Competition</h3>
<p>
  Many firms with differentiated products. Each firm faces a downward-sloping demand curve.
  Free entry drives long-run profits to <strong>zero</strong>.
</p>
<p>
  Result: $p > MC$ (allocative inefficiency) and <strong>excess capacity</strong> &mdash; firms
  produce less than the cost-efficient quantity.
</p>

<h2>Further Reading (Varian)</h2>
<ul>
<li><strong>Chapter 25: Monopoly</strong> (pp. 507–529) – Derives the profit-maximization condition MR = MC, presents the markup formula via price elasticity of demand, and analyzes the welfare loss of monopoly including the special case of taxation under linear demand.</li>
<li><strong>Chapter 26: Monopoly Behavior</strong> (pp. 531–556) – Covers first-, second-, and third-degree price discrimination (perfect PD, self-selection, market segmentation), bundling, two-part tariffs (the Disneyland dilemma), the Hotelling model of spatial product differentiation, and monopolistic competition with zero profits under free entry.</li>
<li><strong>Chapter 28: Oligopoly</strong> (pp. 569–596) – Presents the four classic oligopoly models: Stackelberg quantity leadership, simultaneous quantity setting (Cournot with reaction functions and Nash equilibrium), simultaneous price setting (Bertrand paradox), and cartel agreements with their inherent instability.</li>
</ul>
`,

  cheatsheetDe: `
<h2>Marktmacht &ndash; Formel&uuml;bersicht</h2>

<h3>Monopol</h3>
<table>
  <tr><td>Gewinnmaximierung</td><td>$\\max_y \\; p(y)y - c(y)$</td></tr>
  <tr><td>MR = MC</td><td>$p(y)\\bigl[1 + \\frac{1}{\\varepsilon}\\bigr] = MC(y)$</td></tr>
  <tr><td>Markup</td><td>$p = \\frac{|\\varepsilon|}{|\\varepsilon|-1} \\cdot MC$</td></tr>
  <tr><td>Lin. Nachfr. $p=a-by$, $MC=2dy$</td><td>$y^M = \\frac{a}{2(b+d)}$, $p^M = \\frac{a(b+2d)}{2(b+d)}$, $\\pi^M = \\frac{a^2}{4(b+d)}$</td></tr>
</table>

<h3>Bertrand-Duopol</h3>
<table>
  <tr><td>Wettbewerb &uuml;ber</td><td>Preise, identische Produkte</td></tr>
  <tr><td>Nash-GG</td><td>$p_1 = p_2 = c$ (Bertrand-Paradoxon)</td></tr>
</table>

<h3>Cournot-Duopol</h3>
<table>
  <tr><td>Wettbewerb &uuml;ber</td><td>Mengen, $p = a - bQ$, $c = 0$</td></tr>
  <tr><td>Beste Antwort</td><td>$q_i^* = \\frac{a - bq_j}{2b}$</td></tr>
  <tr><td>NE (2 Firmen)</td><td>$q_i^* = \\frac{a}{3b}$, $p^* = \\frac{a}{3}$</td></tr>
  <tr><td>NE ($n$ Firmen)</td><td>$q_i^* = \\frac{a}{(n+1)b}$</td></tr>
  <tr><td>Grenzwert</td><td>$n \\to \\infty$: kompetitives GG</td></tr>
</table>

<h3>Stackelberg</h3>
<table>
  <tr><td>Methode</td><td>R&uuml;ckw&auml;rtsinduktion</td></tr>
  <tr><td>Leader</td><td>$q_1^* = \\frac{a}{2b}$</td></tr>
  <tr><td>Follower</td><td>$q_2^* = \\frac{a}{4b}$</td></tr>
  <tr><td>Preis</td><td>$p^* = \\frac{a}{4}$</td></tr>
  <tr><td>Gewinne</td><td>$\\pi_1 > \\pi^{\\text{Cournot}} > \\pi_2$</td></tr>
</table>

<h3>Kartelle</h3>
<table>
  <tr><td>Verhalten</td><td>Gemeinsame Gewinnmax. (Monopol)</td></tr>
  <tr><td>Stabilit&auml;t</td><td>Wiederholte Spiele, Diskontfaktor $\\delta$</td></tr>
</table>

<h3>Preisdiskriminierung</h3>
<table>
  <tr><td>1. Grades</td><td>$p_i = $ max. Zahlungsbereitschaft, kein DWL, gesamte Rente beim Produzenten</td></tr>
  <tr><td>2. Grades</td><td>Men&uuml; / Selbstselektion, IC-Bedingung</td></tr>
  <tr><td>3. Grades</td><td>Marktsegmentierung; h&ouml;herer Preis im unelast. Segment</td></tr>
</table>

<h3>B&uuml;ndelung &amp; Zweiteiliger Tarif</h3>
<table>
  <tr><td>B&uuml;ndelung</td><td>Produkte zusammen &rarr; mehr Rente absch&ouml;pfen</td></tr>
  <tr><td>Zweiteiliger Tarif</td><td>Fixgeb&uuml;hr + St&uuml;ckpreis ($= MC$); Fix = CS</td></tr>
</table>

<h3>Produktdifferenzierung</h3>
<table>
  <tr><td>Hotelling</td><td>$[0,1]$, NE: minimale Diff. ($\\frac{1}{2}$)</td></tr>
  <tr><td>Mit Preiswettb.</td><td>Diff. schafft Marktmacht, $p > MC$</td></tr>
  <tr><td>Monopol. Konkurrenz</td><td>Viele diff. Firmen, freier Eintritt &rarr; $\\pi = 0$, &Uuml;berkapazit&auml;t</td></tr>
</table>
`,

  cheatsheetEn: `
<h2>Market Power &ndash; Formula Overview</h2>

<h3>Monopoly</h3>
<table>
  <tr><td>Profit max.</td><td>$\\max_y \\; p(y)y - c(y)$</td></tr>
  <tr><td>MR = MC</td><td>$p(y)\\bigl[1 + \\frac{1}{\\varepsilon}\\bigr] = MC(y)$</td></tr>
  <tr><td>Markup</td><td>$p = \\frac{|\\varepsilon|}{|\\varepsilon|-1} \\cdot MC$</td></tr>
  <tr><td>Lin. demand $p=a-by$, $MC=2dy$</td><td>$y^M = \\frac{a}{2(b+d)}$, $p^M = \\frac{a(b+2d)}{2(b+d)}$, $\\pi^M = \\frac{a^2}{4(b+d)}$</td></tr>
</table>

<h3>Bertrand Duopoly</h3>
<table>
  <tr><td>Competition on</td><td>Prices, identical products</td></tr>
  <tr><td>Nash eq.</td><td>$p_1 = p_2 = c$ (Bertrand paradox)</td></tr>
</table>

<h3>Cournot Duopoly</h3>
<table>
  <tr><td>Competition on</td><td>Quantities, $p = a - bQ$, $c = 0$</td></tr>
  <tr><td>Best response</td><td>$q_i^* = \\frac{a - bq_j}{2b}$</td></tr>
  <tr><td>NE (2 firms)</td><td>$q_i^* = \\frac{a}{3b}$, $p^* = \\frac{a}{3}$</td></tr>
  <tr><td>NE ($n$ firms)</td><td>$q_i^* = \\frac{a}{(n+1)b}$</td></tr>
  <tr><td>Limit</td><td>$n \\to \\infty$: competitive eq.</td></tr>
</table>

<h3>Stackelberg</h3>
<table>
  <tr><td>Method</td><td>Backward induction</td></tr>
  <tr><td>Leader</td><td>$q_1^* = \\frac{a}{2b}$</td></tr>
  <tr><td>Follower</td><td>$q_2^* = \\frac{a}{4b}$</td></tr>
  <tr><td>Price</td><td>$p^* = \\frac{a}{4}$</td></tr>
  <tr><td>Profits</td><td>$\\pi_1 > \\pi^{\\text{Cournot}} > \\pi_2$</td></tr>
</table>

<h3>Cartels</h3>
<table>
  <tr><td>Behavior</td><td>Joint profit max. (monopoly)</td></tr>
  <tr><td>Stability</td><td>Repeated games, discount factor $\\delta$</td></tr>
</table>

<h3>Price Discrimination</h3>
<table>
  <tr><td>1st degree</td><td>$p_i = $ max WTP, no DWL, all surplus to producer</td></tr>
  <tr><td>2nd degree</td><td>Menu / self-selection, IC constraint</td></tr>
  <tr><td>3rd degree</td><td>Market segmentation; higher price in less elastic segment</td></tr>
</table>

<h3>Bundling &amp; Two-Part Tariff</h3>
<table>
  <tr><td>Bundling</td><td>Products together &rarr; extract more surplus</td></tr>
  <tr><td>Two-part tariff</td><td>Fixed fee + per-unit price ($= MC$); Fee = CS</td></tr>
</table>

<h3>Product Differentiation</h3>
<table>
  <tr><td>Hotelling</td><td>$[0,1]$, NE: minimal diff. ($\\frac{1}{2}$)</td></tr>
  <tr><td>With price comp.</td><td>Diff. creates market power, $p > MC$</td></tr>
  <tr><td>Monopolistic comp.</td><td>Many diff. firms, free entry &rarr; $\\pi = 0$, excess capacity</td></tr>
</table>
`,
}
