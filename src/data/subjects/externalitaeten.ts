import type { Subject } from '@/data/types'

export const externalitaeten: Subject = {
  id: 'externalitaeten',
  titleDe: 'Externalitäten und Öffentliche Güter',
  titleEn: 'Externalities and Public Goods',
  shortDescDe: 'Externe Effekte, Pigou-Steuern, Coase-Theorem, Allmendeproblem und öffentliche Güter',
  shortDescEn: 'External effects, Pigouvian taxes, Coase theorem, tragedy of the commons and public goods',
  color: '#88defd',
  icon: '\u{1F30D}',
  videoLinks: [
    { titleDe: 'Externalitäten', titleEn: 'Externalities', url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1708888' },
    { titleDe: 'Öffentliche Güter', titleEn: 'Public Goods', url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1710789' },
  ],

  summaryDe: `
<h2>1. Externe Effekte</h2>

<div class="definition-box">
  <strong>Definition:</strong> Eine Externalität liegt vor, wenn die Handlungen eines Wirtschaftsakteurs den Nutzen oder die Kosten
  eines anderen Akteurs beeinflussen, ohne dass dies über den Marktpreis abgegolten wird.
</div>

<h3>Klassifikation</h3>
<table>
  <tr><th></th><th>Produktion</th><th>Konsum</th></tr>
  <tr><td><strong>Negativ</strong></td><td>Fabrikemissionen verschmutzen Fluss</td><td>Zigarettenrauch belästigt Mitmenschen</td></tr>
  <tr><td><strong>Positiv</strong></td><td>Imker bestäubt Obstplantage</td><td>Geimpfte Person schützt andere (Herdenimmunität)</td></tr>
</table>

<h3>Private vs. Soziale Kosten</h3>
<p>Ein gewinnmaximierendes Unternehmen berücksichtigt nur seine <em>privaten</em> Grenzkosten $MC_I$. Die sozialen Grenzkosten beinhalten zusätzlich die externen Grenzkosten:</p>

<div class="formula-block">
  $$SMC = MC_I + EMC$$
</div>

<p>wobei $EMC$ die <strong>externen Grenzkosten</strong> (External Marginal Cost) bezeichnet.</p>

<div class="insight-box">
  <strong>Kernergebnis:</strong> Bei negativen Externalitäten produziert der Markt <em>zu viel</em> ($Q^{priv} > Q^{opt}$),
  bei positiven Externalitäten <em>zu wenig</em> ($Q^{priv} < Q^{opt}$). Das private Optimum weicht vom sozialen Optimum ab.
</div>

<h2>2. Lösungen: Regulierung und Steuern</h2>

<h3>Pigou-Steuer</h3>
<p>Eine Pigou-Steuer internalisiert die externe Wirkung, indem sie dem Verursacher genau die externen Grenzkosten auferlegt:</p>

<div class="formula-block">
  $$t^* = EMC(Q^{opt})$$
</div>

<p>Die Steuer wird so gesetzt, dass sie den externen Grenzkosten <em>bei der effizienten Menge</em> entspricht.
Nach der Steuer maximiert das Unternehmen:</p>

<div class="formula-block">
  $$\\max_Q \\; p \\cdot Q - C(Q) - t^* \\cdot Q \\quad \\Rightarrow \\quad p = MC_I(Q) + t^*$$
</div>

<h3>Weitere Instrumente</h3>
<ul>
  <li><strong>Mengenbeschränkungen (Quoten):</strong> Direkte Vorgabe der maximal zulässigen Emissionsmenge</li>
  <li><strong>Handelbare Emissionsrechte:</strong> Kombination aus Mengensteuerung und Marktmechanismus (z.&nbsp;B. EU-ETS)</li>
  <li><strong>Subventionen:</strong> Bei positiven Externalitäten (z.&nbsp;B. Impfzuschüsse, Bildungsförderung)</li>
  <li><strong>Staatliche Bereitstellung:</strong> Direkte Produktion durch den Staat</li>
</ul>

<div class="example-box">
  <strong>Beispiel &ndash; Congestion Pricing NYC:</strong> Seit 2025 erhebt New York eine Mautgebühr für die Einfahrt nach Manhattan
  unterhalb der 60.&nbsp;Straße. Die Gebühr internalisiert die externen Kosten von Stau, Luftverschmutzung und Lärm.
</div>

<h3>Herausforderungen</h3>
<ul>
  <li>Informationsanforderungen: Der Staat muss $EMC$ kennen, um $t^*$ korrekt zu setzen</li>
  <li>Durchsetzungskosten und politische Widerstände</li>
  <li>Steuern vs. Quoten: Bei Unsicherheit über Grenzkosten können die Instrumente unterschiedliche Wohlfahrtsergebnisse liefern</li>
</ul>

<h2>3. Eigentumsrechte und das Coase-Theorem</h2>

<div class="definition-box">
  <strong>Coase-Theorem:</strong> Sind die Transaktionskosten null und die Präferenzen quasi-linear, so führt die Verhandlung
  zwischen den Parteien <em>unabhängig von der Zuweisung der Eigentumsrechte</em> zur effizienten Allokation.
</div>

<h3>Beispiel: Raucher und Nichtraucher als Mitbewohner</h3>
<p>Angenommen, der Raucher bewertet das Rauchen mit $A$ und der Nichtraucher erleidet einen Schaden von $B$.</p>

<table>
  <tr><th>Szenario</th><th>Eigentumsrecht beim Raucher</th><th>Eigentumsrecht beim Nichtraucher</th></tr>
  <tr><td>$A > B$</td><td>Raucher raucht (keine Zahlung nötig)</td><td>Raucher zahlt $B$ an Nichtraucher, raucht</td></tr>
  <tr><td>$A < B$</td><td>Nichtraucher zahlt $A$ an Raucher, kein Rauch</td><td>Kein Rauch (keine Zahlung nötig)</td></tr>
</table>

<p>In beiden Fällen ergibt sich das effiziente Ergebnis: Geraucht wird genau dann, wenn $A > B$.</p>

<h3>Grenzen des Coase-Theorems</h3>
<ul>
  <li><strong>Transaktionskosten:</strong> Bei vielen Beteiligten (z.&nbsp;B. Luftverschmutzung) sind Verhandlungen praktisch unmöglich</li>
  <li><strong>Einkommenseffekte:</strong> Ohne quasi-lineare Präferenzen hängt das Ergebnis von der Verteilung der Eigentumsrechte ab</li>
  <li><strong>Andere Marktversagen:</strong> Asymmetrische Information, Marktmacht etc.</li>
</ul>

<h2>4. Allmendeproblem (Tragedy of the Commons)</h2>

<div class="definition-box">
  <strong>Definition:</strong> Bei gemeinsam genutzten Ressourcen (Allmendegüter) berücksichtigt jeder Nutzer nur seine privaten Kosten,
  nicht die <em>sozialen</em> Kosten der Übernutzung. Ergebnis: Überausbeutung der Ressource.
</div>

<p>Jeder Nutzer $i$ setzt: $MC_I = p$, aber sozial wäre $SMC = p$ nötig. Da $SMC > MC_I$, wird die Ressource stärker genutzt als effizient.</p>

<h3>Lösungsansätze</h3>
<ul>
  <li><strong>Privatisierung:</strong> Eigentumsrechte schaffen Anreize zur nachhaltigen Nutzung</li>
  <li><strong>Staatliche Regulierung:</strong> Quoten, Lizenzen, Steuern</li>
  <li><strong>Selbstorganisation (Elinor Ostrom, Nobelpreis 2009):</strong> Gemeinschaften können durch
    gemeinsame Institutionen, Überwachung und abgestufte Sanktionen eine effiziente Nutzung erreichen &ndash;
    ohne Privatisierung oder staatlichen Eingriff</li>
</ul>

<h2>5. Öffentliche Güter</h2>

<h3>Zwei Dimensionen</h3>
<ul>
  <li><strong>Rivalität:</strong> Vermindert die Nutzung durch eine Person die verfügbare Menge für andere?</li>
  <li><strong>Ausschließbarkeit:</strong> Kann man Personen von der Nutzung ausschließen?</li>
</ul>

<h3>Gütertaxonomie</h3>
<table>
  <tr><th></th><th>Ausschließbar</th><th>Nicht ausschließbar</th></tr>
  <tr><td><strong>Rival</strong></td><td>Private Güter (Brot, Kleidung)</td><td>Allmendegüter (Fischbestand, Weide)</td></tr>
  <tr><td><strong>Nicht-rival</strong></td><td>Klubgüter (Pay-TV, Mautstraße)</td><td>Öffentliche Güter (Landesverteidigung, Leuchtturm)</td></tr>
</table>

<h2>6. Effiziente Bereitstellung</h2>

<h3>Private Güter: Horizontale Aggregation</h3>
<p>Bei privaten Gütern werden die individuellen Nachfragekurven <em>horizontal</em> addiert. Im Optimum gilt:</p>

<div class="formula-block">
  $$MRS_{x,p}^i = MC_x \\quad \\text{für alle } i$$
</div>

<h3>Öffentliche Güter: Vertikale Aggregation</h3>
<p>Bei öffentlichen Gütern konsumieren alle dieselbe Menge. Die Zahlungsbereitschaften werden <em>vertikal</em> addiert.</p>

<div class="definition-box">
  <strong>Samuelson-Bedingung:</strong> Die effiziente Bereitstellung eines öffentlichen Gutes erfordert:
</div>

<div class="formula-block">
  $$\\sum_{i=1}^{n} |MRS_{G,P}^i| = MC_G$$
</div>

<p>Die Summe der Grenzraten der Substitution (Zahlungsbereitschaften) aller Individuen muss den Grenzkosten der Bereitstellung entsprechen.</p>

<h3>Numerisches Beispiel</h3>
<p>Zwei Personen ($i = 1,2$) mit Nutzenfunktion $u_i(x_i, F) = 2\\ln(x_i) + \\ln(F)$, wobei $x_i$ das private Gut und $F = F_1 + F_2$ das öffentliche Gut ist. Budget: $p_x = p_F = 1$, $m_i = 100$.</p>

<h4>Soziales Optimum</h4>
<p>Samuelson-Bedingung: $\\sum_i MRS_{F,x}^i = \\frac{x_1}{F} + \\frac{x_2}{F} = 1$.</p>
<p>Mit der Budgetbedingung $x_1 + x_2 + F = 200$:</p>

<div class="formula-block">
  $$\\frac{200 - F}{F} = 1 \\quad \\Rightarrow \\quad F^{opt} = 100 \\cdot \\frac{2}{3} \\approx 66{,}7$$
</div>

<h4>Nash-Gleichgewicht (Trittbrettfahren)</h4>
<p>Jede Person maximiert individuell und nimmt den Beitrag der anderen als gegeben:</p>

<div class="formula-block">
  $$\\max_{F_i} \\; 2\\ln(100 - F_i) + \\ln(F_i + \\bar{F}_j)$$
</div>

<p>Reaktionsfunktion:</p>
<div class="formula-block">
  $$F_i^* = \\frac{100 - 2\\bar{F}_j}{3}$$
</div>

<p>Im symmetrischen Gleichgewicht ($F_1 = F_2$):</p>
<div class="formula-block">
  $$F^* = F_1^* + F_2^* = 2 \\cdot 20 = 40 < 66{,}7 = F^{opt}$$
</div>

<div class="insight-box">
  <strong>Ergebnis:</strong> Das Nash-Gleichgewicht liefert $F^* = 40$, deutlich weniger als das soziale Optimum $F^{opt} \\approx 66{,}7$.
  Das Trittbrettfahren führt zur systematischen Unterversorgung mit dem öffentlichen Gut.
</div>

<h2>7. Trittbrettfahrerproblem</h2>

<p>Beim Trittbrettfahren setzt jedes Individuum seine <em>eigene</em> Grenzrate der Substitution gleich den Grenzkosten:</p>

<div class="formula-block">
  $$|MRS_{G,P}^i| = MC_G$$
</div>

<p>statt der Samuelson-Bedingung $\\sum_i |MRS_{G,P}^i| = MC_G$. Die positiven Externalitäten des eigenen Beitrags auf andere werden ignoriert.</p>

<h3>Private Lösungsansätze</h3>
<ul>
  <li><strong>Hohe individuelle Nachfrage:</strong> Wenn ein Akteur besonders stark profitiert, kann er allein einen Großteil bereitstellen</li>
  <li><strong>Altruismus:</strong> Internalisierung der externen Effekte durch prosoziale Präferenzen</li>
  <li><strong>Warm Glow:</strong> Spenden erzeugt direkten Nutzen unabhängig vom Gesamtbeitrag</li>
  <li><strong>Sozialer Druck:</strong> Reputationseffekte und Normen</li>
</ul>

<h2>8. Öffentliche Bereitstellung</h2>

<h3>Abstimmung und Besteuerung</h3>
<p>Der Staat kann das Trittbrettfahrerproblem durch Zwangsbeiträge (Steuern) lösen und die Bereitstellungsmenge durch demokratische Abstimmung bestimmen.</p>

<h3>Medianwählermodell</h3>
<p>Bei Mehrheitsabstimmung über ein eindimensionales Thema mit eingipfligen Präferenzen setzt sich die vom <strong>Medianwähler</strong> bevorzugte Menge durch.</p>

<div class="insight-box">
  <strong>Probleme der öffentlichen Bereitstellung:</strong>
  <ul>
    <li>Nicht-eingipflige Präferenzen können zu Zyklen führen (Condorcet-Paradoxon)</li>
    <li>Crowding Out: Staatliche Bereitstellung kann private Beiträge verdrängen</li>
    <li>Informationsprobleme: Präferenzen der Bürger sind schwer zu ermitteln</li>
  </ul>
</div>

<h2>Weiterführende Lektüre (Varian)</h2>
<ul>
<li><strong>Kapitel 35: Externe Effekte</strong> (S. 737–761) – Analysiert externe Effekte im Konsum und in der Produktion anhand des Raucher/Nichtraucher-Beispiels in der Edgeworth-Box, leitet das Coase-Theorem bei quasi-linearen Präferenzen ab und behandelt Pigou-Steuern, handelbare Emissionsrechte sowie die Tragödie der Allmende mit dem Stahl-/Fischerei-Beispiel.</li>
<li><strong>Kapitel 37: Öffentliche Güter</strong> (S. 793–827) – Entwickelt die Samuelson-Bedingung für die effiziente Bereitstellung öffentlicher Güter (vertikale Aggregation der Zahlungsbereitschaften), illustriert das Trittbrettfahrerproblem am Fernseher-Beispiel zweier Mitbewohner und diskutiert Abstimmungsmechanismen, den Clarke-Steuer-Mechanismus und die Grenzen des Medianwählermodells.</li>
</ul>
`,

  summaryEn: `
<h2>1. Externalities</h2>

<div class="definition-box">
  <strong>Definition:</strong> An externality arises when one economic agent's actions affect the utility or costs
  of another agent without being reflected in market prices.
</div>

<h3>Classification</h3>
<table>
  <tr><th></th><th>Production</th><th>Consumption</th></tr>
  <tr><td><strong>Negative</strong></td><td>Factory emissions pollute river</td><td>Cigarette smoke harms bystanders</td></tr>
  <tr><td><strong>Positive</strong></td><td>Beekeeper pollinates orchard</td><td>Vaccinated person protects others (herd immunity)</td></tr>
</table>

<h3>Private vs. Social Cost</h3>
<p>A profit-maximising firm considers only its <em>private</em> marginal cost $MC_I$. Social marginal cost additionally includes external marginal cost:</p>

<div class="formula-block">
  $$SMC = MC_I + EMC$$
</div>

<p>where $EMC$ denotes the <strong>External Marginal Cost</strong>.</p>

<div class="insight-box">
  <strong>Key result:</strong> With negative externalities the market produces <em>too much</em> ($Q^{priv} > Q^{opt}$);
  with positive externalities it produces <em>too little</em> ($Q^{priv} < Q^{opt}$). The private optimum diverges from the social optimum.
</div>

<h2>2. Solutions: Regulation and Taxes</h2>

<h3>Pigouvian Tax</h3>
<p>A Pigouvian tax internalises the externality by charging the polluter exactly the external marginal cost:</p>

<div class="formula-block">
  $$t^* = EMC(Q^{opt})$$
</div>

<p>The tax is set equal to the external marginal cost <em>at the efficient quantity</em>.
After the tax, the firm maximises:</p>

<div class="formula-block">
  $$\\max_Q \\; p \\cdot Q - C(Q) - t^* \\cdot Q \\quad \\Rightarrow \\quad p = MC_I(Q) + t^*$$
</div>

<h3>Other Instruments</h3>
<ul>
  <li><strong>Quantity restrictions (quotas):</strong> Direct cap on the maximum permissible emission level</li>
  <li><strong>Tradable emission permits:</strong> Combines quantity control with market mechanism (e.g. EU-ETS)</li>
  <li><strong>Subsidies:</strong> For positive externalities (e.g. vaccination subsidies, education grants)</li>
  <li><strong>Government provision:</strong> Direct production by the state</li>
</ul>

<div class="example-box">
  <strong>Example &ndash; Congestion Pricing NYC:</strong> Since 2025, New York charges a toll for driving into Manhattan
  below 60th Street. The charge internalises the external costs of congestion, air pollution and noise.
</div>

<h3>Challenges</h3>
<ul>
  <li>Information requirements: the government must know $EMC$ to set $t^*$ correctly</li>
  <li>Enforcement costs and political resistance</li>
  <li>Taxes vs. quotas: under uncertainty about marginal costs, the instruments can yield different welfare outcomes</li>
</ul>

<h2>3. Property Rights and the Coase Theorem</h2>

<div class="definition-box">
  <strong>Coase Theorem:</strong> If transaction costs are zero and preferences are quasi-linear, bargaining
  between the parties leads to the efficient outcome <em>regardless of the initial allocation of property rights</em>.
</div>

<h3>Example: Smoker and Non-Smoker Roommates</h3>
<p>Suppose the smoker values smoking at $A$ and the non-smoker suffers a damage of $B$.</p>

<table>
  <tr><th>Scenario</th><th>Property right with smoker</th><th>Property right with non-smoker</th></tr>
  <tr><td>$A > B$</td><td>Smoker smokes (no payment needed)</td><td>Smoker pays $B$ to non-smoker, smokes</td></tr>
  <tr><td>$A < B$</td><td>Non-smoker pays $A$ to smoker, no smoke</td><td>No smoke (no payment needed)</td></tr>
</table>

<p>In both cases, the efficient outcome obtains: smoking occurs if and only if $A > B$.</p>

<h3>Limits of the Coase Theorem</h3>
<ul>
  <li><strong>Transaction costs:</strong> With many parties (e.g. air pollution), bargaining is practically infeasible</li>
  <li><strong>Income effects:</strong> Without quasi-linear preferences, the outcome depends on the distribution of property rights</li>
  <li><strong>Other market failures:</strong> Asymmetric information, market power, etc.</li>
</ul>

<h2>4. Tragedy of the Commons</h2>

<div class="definition-box">
  <strong>Definition:</strong> With commonly owned resources (common-pool goods), each user considers only private costs,
  not the <em>social</em> cost of overuse. Result: overexploitation of the resource.
</div>

<p>Each user $i$ sets $MC_I = p$, but social efficiency requires $SMC = p$. Since $SMC > MC_I$, the resource is used more than is efficient.</p>

<h3>Solutions</h3>
<ul>
  <li><strong>Privatisation:</strong> Property rights create incentives for sustainable use</li>
  <li><strong>Government regulation:</strong> Quotas, licences, taxes</li>
  <li><strong>Self-governance (Elinor Ostrom, Nobel Prize 2009):</strong> Communities can achieve efficient use through
    shared institutions, monitoring and graduated sanctions &ndash; without privatisation or government intervention</li>
</ul>

<h2>5. Public Goods</h2>

<h3>Two Dimensions</h3>
<ul>
  <li><strong>Rivalry:</strong> Does one person's consumption reduce the amount available to others?</li>
  <li><strong>Excludability:</strong> Can individuals be prevented from using the good?</li>
</ul>

<h3>Goods Taxonomy</h3>
<table>
  <tr><th></th><th>Excludable</th><th>Non-excludable</th></tr>
  <tr><td><strong>Rival</strong></td><td>Private goods (bread, clothing)</td><td>Common-pool goods (fish stock, pasture)</td></tr>
  <tr><td><strong>Non-rival</strong></td><td>Club goods (pay-TV, toll road)</td><td>Public goods (national defence, lighthouse)</td></tr>
</table>

<h2>6. Efficient Provision</h2>

<h3>Private Goods: Horizontal Aggregation</h3>
<p>For private goods, individual demand curves are added <em>horizontally</em>. At the optimum:</p>

<div class="formula-block">
  $$MRS_{x,p}^i = MC_x \\quad \\text{for all } i$$
</div>

<h3>Public Goods: Vertical Aggregation</h3>
<p>For public goods, everyone consumes the same quantity. Willingness to pay is added <em>vertically</em>.</p>

<div class="definition-box">
  <strong>Samuelson Condition:</strong> Efficient provision of a public good requires:
</div>

<div class="formula-block">
  $$\\sum_{i=1}^{n} |MRS_{G,P}^i| = MC_G$$
</div>

<p>The sum of the marginal rates of substitution (willingness to pay) of all individuals must equal the marginal cost of provision.</p>

<h3>Numerical Example</h3>
<p>Two persons ($i = 1,2$) with utility $u_i(x_i, F) = 2\\ln(x_i) + \\ln(F)$, where $x_i$ is the private good and $F = F_1 + F_2$ is the public good. Budget: $p_x = p_F = 1$, $m_i = 100$.</p>

<h4>Social Optimum</h4>
<p>Samuelson condition: $\\sum_i MRS_{F,x}^i = \\frac{x_1}{F} + \\frac{x_2}{F} = 1$.</p>
<p>With the budget constraint $x_1 + x_2 + F = 200$:</p>

<div class="formula-block">
  $$\\frac{200 - F}{F} = 1 \\quad \\Rightarrow \\quad F^{opt} = 100 \\cdot \\frac{2}{3} \\approx 66.7$$
</div>

<h4>Nash Equilibrium (Free Riding)</h4>
<p>Each person maximises individually, taking the other's contribution as given:</p>

<div class="formula-block">
  $$\\max_{F_i} \\; 2\\ln(100 - F_i) + \\ln(F_i + \\bar{F}_j)$$
</div>

<p>Reaction function:</p>
<div class="formula-block">
  $$F_i^* = \\frac{100 - 2\\bar{F}_j}{3}$$
</div>

<p>In the symmetric equilibrium ($F_1 = F_2$):</p>
<div class="formula-block">
  $$F^* = F_1^* + F_2^* = 2 \\times 20 = 40 < 66.7 = F^{opt}$$
</div>

<div class="insight-box">
  <strong>Result:</strong> The Nash equilibrium yields $F^* = 40$, well below the social optimum $F^{opt} \\approx 66.7$.
  Free riding leads to systematic under-provision of the public good.
</div>

<h2>7. Free-Rider Problem</h2>

<p>When free riding, each individual sets their <em>own</em> marginal rate of substitution equal to marginal cost:</p>

<div class="formula-block">
  $$|MRS_{G,P}^i| = MC_G$$
</div>

<p>instead of the Samuelson condition $\\sum_i |MRS_{G,P}^i| = MC_G$. The positive externalities of one's own contribution on others are ignored.</p>

<h3>Private Solutions</h3>
<ul>
  <li><strong>High individual demand:</strong> If one agent benefits disproportionately, they may provide much of the good alone</li>
  <li><strong>Altruism:</strong> Internalisation of external effects through pro-social preferences</li>
  <li><strong>Warm glow:</strong> Donating generates direct utility independent of total contributions</li>
  <li><strong>Social pressure:</strong> Reputation effects and norms</li>
</ul>

<h2>8. Public Provision</h2>

<h3>Voting and Taxation</h3>
<p>The government can solve the free-rider problem through compulsory contributions (taxes) and determine the provision level through democratic voting.</p>

<h3>Median Voter Model</h3>
<p>Under majority voting on a single-dimensional issue with single-peaked preferences, the quantity preferred by the <strong>median voter</strong> prevails.</p>

<div class="insight-box">
  <strong>Problems with public provision:</strong>
  <ul>
    <li>Non-single-peaked preferences can lead to cycles (Condorcet paradox)</li>
    <li>Crowding out: government provision may displace private contributions</li>
    <li>Information problems: citizens' preferences are difficult to elicit</li>
  </ul>
</div>

<h2>Further Reading (Varian)</h2>
<ul>
<li><strong>Chapter 35: Externalities</strong> (pp. 737–761) – Analyzes consumption and production externalities using the smoker/non-smoker example in the Edgeworth box, derives the Coase theorem under quasi-linear preferences, and covers Pigouvian taxes, tradable emission permits, and the tragedy of the commons with the steel/fishery example.</li>
<li><strong>Chapter 37: Public Goods</strong> (pp. 793–827) – Develops the Samuelson condition for efficient public goods provision (vertical aggregation of willingness to pay), illustrates the free-rider problem with the TV-set example of two roommates, and discusses voting mechanisms, the Clarke tax mechanism, and the limits of the median voter model.</li>
</ul>
`,

  cheatsheetDe: `
<h2>Externalitäten und Öffentliche Güter &ndash; Spickzettel</h2>

<h3>Externe Effekte</h3>
<ul>
  <li>Soziale Grenzkosten: $SMC = MC_I + EMC$</li>
  <li>Negativ: $Q^{priv} > Q^{opt}$ (zu viel Produktion)</li>
  <li>Positiv: $Q^{priv} < Q^{opt}$ (zu wenig Produktion)</li>
</ul>

<h3>Pigou-Steuer</h3>
<div class="formula-block">
  $$t^* = EMC(Q^{opt})$$
</div>
<p>Setze Steuer = externe Grenzkosten bei effizienter Menge. Danach: $p = MC_I + t^*$.</p>

<h3>Coase-Theorem</h3>
<p>Transaktionskosten = 0 und quasi-lineare Präferenzen $\\Rightarrow$ Verhandlung führt zur Effizienz, <em>unabhängig</em> von der Zuteilung der Eigentumsrechte.</p>
<p>Grenzen: Transaktionskosten, Einkommenseffekte, viele Beteiligte.</p>

<h3>Allmende (Tragedy of the Commons)</h3>
<p>Gemeinsame Ressource $\\Rightarrow$ Übernutzung, da $MC_I < SMC$.</p>
<p>Lösungen: Privatisierung, Regulierung, Selbstorganisation (Ostrom).</p>

<h3>Gütertaxonomie</h3>
<table>
  <tr><th></th><th>Ausschließbar</th><th>Nicht ausschließbar</th></tr>
  <tr><td><strong>Rival</strong></td><td>Privat</td><td>Allmende</td></tr>
  <tr><td><strong>Nicht-rival</strong></td><td>Klub</td><td>Öffentlich</td></tr>
</table>

<h3>Effiziente Bereitstellung</h3>
<ul>
  <li>Private Güter (horizontal): $MRS^i = MC$ für alle $i$</li>
  <li>Öffentliche Güter (vertikal / Samuelson): $\\sum_i |MRS_{G,P}^i| = MC_G$</li>
</ul>

<h3>Numerisches Beispiel</h3>
<p>$u_i = 2\\ln(x_i) + \\ln(F)$, $m_i = 100$, $p_x = p_F = 1$</p>
<ul>
  <li>Soziales Optimum: $F^{opt} = \\frac{200}{3} \\approx 66{,}7$</li>
  <li>Reaktionsfunktion: $F_i^* = \\frac{100 - 2\\bar{F}_j}{3}$</li>
  <li>Nash-GG: $F^* = 40 < F^{opt}$ (Unterversorgung)</li>
</ul>

<h3>Trittbrettfahrer</h3>
<p>Individuell: $|MRS^i| = MC$ statt $\\sum |MRS^i| = MC$.</p>
<p>Private Lösungen: hohe Einzelnachfrage, Altruismus, Warm Glow, sozialer Druck.</p>

<h3>Öffentliche Bereitstellung</h3>
<p>Medianwählermodell: eingipflige Präferenzen $\\Rightarrow$ Medianwähler entscheidet.</p>
<p>Probleme: Condorcet-Paradoxon, Crowding Out, Informationsprobleme.</p>
`,

  cheatsheetEn: `
<h2>Externalities and Public Goods &ndash; Cheat Sheet</h2>

<h3>Externalities</h3>
<ul>
  <li>Social marginal cost: $SMC = MC_I + EMC$</li>
  <li>Negative: $Q^{priv} > Q^{opt}$ (overproduction)</li>
  <li>Positive: $Q^{priv} < Q^{opt}$ (underproduction)</li>
</ul>

<h3>Pigouvian Tax</h3>
<div class="formula-block">
  $$t^* = EMC(Q^{opt})$$
</div>
<p>Set tax = external marginal cost at efficient quantity. Then: $p = MC_I + t^*$.</p>

<h3>Coase Theorem</h3>
<p>Transaction costs = 0 and quasi-linear preferences $\\Rightarrow$ bargaining yields efficiency, <em>regardless</em> of property-rights allocation.</p>
<p>Limits: transaction costs, income effects, many parties.</p>

<h3>Tragedy of the Commons</h3>
<p>Shared resource $\\Rightarrow$ overuse because $MC_I < SMC$.</p>
<p>Solutions: privatisation, regulation, self-governance (Ostrom).</p>

<h3>Goods Taxonomy</h3>
<table>
  <tr><th></th><th>Excludable</th><th>Non-excludable</th></tr>
  <tr><td><strong>Rival</strong></td><td>Private</td><td>Common-pool</td></tr>
  <tr><td><strong>Non-rival</strong></td><td>Club</td><td>Public</td></tr>
</table>

<h3>Efficient Provision</h3>
<ul>
  <li>Private goods (horizontal): $MRS^i = MC$ for all $i$</li>
  <li>Public goods (vertical / Samuelson): $\\sum_i |MRS_{G,P}^i| = MC_G$</li>
</ul>

<h3>Numerical Example</h3>
<p>$u_i = 2\\ln(x_i) + \\ln(F)$, $m_i = 100$, $p_x = p_F = 1$</p>
<ul>
  <li>Social optimum: $F^{opt} = \\frac{200}{3} \\approx 66.7$</li>
  <li>Reaction function: $F_i^* = \\frac{100 - 2\\bar{F}_j}{3}$</li>
  <li>Nash eq.: $F^* = 40 < F^{opt}$ (under-provision)</li>
</ul>

<h3>Free-Rider Problem</h3>
<p>Individual: $|MRS^i| = MC$ instead of $\\sum |MRS^i| = MC$.</p>
<p>Private solutions: high individual demand, altruism, warm glow, social pressure.</p>

<h3>Public Provision</h3>
<p>Median voter model: single-peaked preferences $\\Rightarrow$ median voter decides.</p>
<p>Problems: Condorcet paradox, crowding out, information problems.</p>
`,
}
