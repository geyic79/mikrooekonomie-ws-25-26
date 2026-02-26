import type { Subject } from '@/data/types'

export const maerkte: Subject = {
  id: 'maerkte',
  titleDe: 'Märkte',
  titleEn: 'Markets',
  shortDescDe: 'Marktgleichgewicht, Steuern, allgemeines Gleichgewicht und Wohlfahrtstheoreme',
  shortDescEn: 'Market equilibrium, taxes, general equilibrium and welfare theorems',
  color: '#52d7fa',
  icon: '⚖️',
  videoLinks: [
    {
      titleDe: 'Angebot 3 & Markt 1',
      titleEn: 'Supply 3 & Market 1',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1690703',
    },
    {
      titleDe: 'Markt 2',
      titleEn: 'Market 2',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1693595',
    },
    {
      titleDe: 'Markt 3',
      titleEn: 'Market 3',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1695272',
    },
    {
      titleDe: 'Zusatzvideo Wohlfahrtstheoreme',
      titleEn: 'Extra: Welfare Theorems',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1695321',
    },
  ],

  summaryDe: `
<h2>Märkte &ndash; Zusammenfassung</h2>
<p>Dieses Kapitel behandelt das Zusammenspiel von Angebot und Nachfrage auf Wettbewerbsmärkten, die Wohlfahrtsanalyse, Steuern und deren Inzidenz sowie das allgemeine Gleichgewicht in einer Tauschwirtschaft (Edgeworth-Box) und die fundamentalen Wohlfahrtstheoreme (Varian Kap.&nbsp;16, 32).</p>

<h3>1. Marktgleichgewicht</h3>
<p>In einem Wettbewerbsmarkt bestimmen Angebot und Nachfrage gemeinsam den Gleichgewichtspreis $p^*$ und die Gleichgewichtsmenge $Q^*$.</p>
<ul>
  <li><strong>Inverse Nachfragefunktion:</strong> $p^D(Q)$ &ndash; Preis, den Konsumenten bei Menge $Q$ zu zahlen bereit sind.</li>
  <li><strong>Inverse Angebotsfunktion:</strong> $p^S(Q)$ &ndash; Preis, den Produzenten bei Menge $Q$ mindestens verlangen.</li>
  <li><strong>Gleichgewichtsbedingung:</strong> $$Q^D(p^*) = Q^S(p^*)$$</li>
  <li><strong>Tâtonnement-Prozess:</strong> Walrasianischer Auktionator ruft Preise aus; bei Überschussnachfrage steigt der Preis, bei Überschussangebot sinkt er, bis sich das Gleichgewicht einstellt.</li>
  <li><strong>Komparative Statik:</strong> Verschiebungen der Nachfrage- oder Angebotskurve (z.&nbsp;B. durch Einkommensänderungen, Technologie, Inputpreise) verändern $p^*$ und $Q^*$ vorhersagbar.</li>
</ul>

<h3>2. Wohlfahrt im Gleichgewicht</h3>
<p>Die Wohlfahrt misst den Gesamtnutzen, den Marktteilnehmer aus dem Handel ziehen.</p>
<ul>
  <li><strong>Konsumentenrente (CS):</strong> $$CS = \\int_0^{Q^*} p^D(Q)\\, dQ - p^* \\cdot Q^*$$
  Die Fläche zwischen der inversen Nachfragekurve und dem Gleichgewichtspreis.</li>
  <li><strong>Produzentenrente (PS):</strong> $$PS = p^* \\cdot Q^* - \\int_0^{Q^*} p^S(Q)\\, dQ$$
  Die Fläche zwischen dem Gleichgewichtspreis und der inversen Angebotskurve.</li>
  <li><strong>Gesamtrente:</strong> $W = CS + PS$ &ndash; wird im Wettbewerbsgleichgewicht maximiert.</li>
  <li><strong>Allokative Effizienz:</strong> Kein anderer Preis/Menge-Paar erzeugt eine höhere Gesamtrente &ndash; der Wettbewerbsmarkt ist allokativ effizient.</li>
</ul>

<h3>3. Steuern</h3>
<p>Steuern schaffen einen Keil zwischen dem Preis, den der Käufer zahlt ($p^D$), und dem Preis, den der Verkäufer erhält ($p^S$).</p>
<ul>
  <li><strong>Mengensteuer (spezifische Steuer):</strong> Pro-Einheit-Steuer $t$ mit $$p^D = p^S + t$$</li>
  <li><strong>Steuerinzidenz:</strong> Die Verteilung der Steuerlast hängt von den Elastizitäten ab, <em>nicht</em> davon, wer die Steuer nominell abführt. Die <em>unelastischere</em> Marktseite trägt den größeren Anteil der Last.</li>
  <li><strong>Steueraufkommen:</strong> $$T = t \\cdot Q^{\\text{tax}}$$</li>
  <li><strong>Wohlfahrtsverlust (Deadweight Loss, DWL):</strong> Das Harberger-Dreieck &ndash; der Wohlfahrtsverlust, weil die gehandelte Menge unter das effiziente Niveau sinkt: $$DWL = \\frac{1}{2} \\cdot t \\cdot (Q^* - Q^{\\text{tax}})$$</li>
  <li><strong>Wertsteuer (Ad-valorem-Steuer):</strong> Prozentuale Steuer auf den Preis, z.&nbsp;B. Mehrwertsteuer: $p^D = (1+\\tau) \\cdot p^S$.</li>
  <li><strong>Subvention:</strong> Entspricht einer negativen Steuer; senkt den Käuferpreis und erhöht den Verkäuferpreis.</li>
</ul>

<div class="interactive-widget"><button class="widget-fullscreen-btn" title="Fullscreen">&#x26F6;</button><button class="widget-exit-fullscreen-btn">&#x2190; Back</button><div class="interactive-widget-title">Interaktives Tool: Marktgleichgewicht &amp; Steuern</div><iframe src="https://tuda-mikro.org/lecture_03/lecture_03.html#/market" loading="lazy" title="Interaktives Diagramm zu Marktgleichgewicht und Steuern"></iframe></div>

<h3>4. Allgemeines Gleichgewicht &ndash; Edgeworth-Box</h3>
<p>Betrachtet wird eine reine Tauschwirtschaft mit 2 Konsumenten ($A$, $B$) und 2 Gütern.</p>
<ul>
  <li><strong>Edgeworth-Box:</strong> Breite = Gesamtausstattung von Gut&nbsp;1 ($\\omega_1^A + \\omega_1^B$), Höhe = Gesamtausstattung von Gut&nbsp;2 ($\\omega_2^A + \\omega_2^B$). Jeder Punkt repräsentiert eine durchführbare Allokation.</li>
  <li><strong>Anfangsausstattung:</strong> Der Punkt $(\\omega_1^A, \\omega_2^A)$ in der Box.</li>
  <li><strong>Durchführbarkeit:</strong> $$x_1^A + x_1^B = \\omega_1^A + \\omega_1^B \\quad \\text{und} \\quad x_2^A + x_2^B = \\omega_2^A + \\omega_2^B$$</li>
  <li><strong>Budgetrestriktion mit Preisen:</strong> $$p_1 x_1^i + p_2 x_2^i = p_1 \\omega_1^i + p_2 \\omega_2^i \\quad \\text{für } i = A, B$$
  Die Budgetgerade verläuft durch die Anfangsausstattung.</li>
  <li><strong>Walras-Gesetz:</strong> Wenn ein Markt im Gleichgewicht ist, ist es auch der andere: $$\\sum_i (p_1 x_1^i + p_2 x_2^i) = \\sum_i (p_1 \\omega_1^i + p_2 \\omega_2^i)$$</li>
</ul>

<h3>5. Paretoeffizienz</h3>
<ul>
  <li><strong>Pareto-Verbesserung:</strong> Eine Umverteilung, die mindestens einen Konsumenten besser stellt, ohne einen anderen schlechter zu stellen.</li>
  <li><strong>Pareto-Effizienz:</strong> Eine Allokation, bei der keine Pareto-Verbesserung möglich ist.</li>
  <li><strong>Bedingung in der Edgeworth-Box:</strong> $$MRS^A = MRS^B$$
  Die Indifferenzkurven der beiden Konsumenten sind tangential zueinander.</li>
  <li><strong>Kontraktkurve:</strong> Der geometrische Ort aller Pareto-effizienten Allokationen in der Edgeworth-Box.</li>
  <li><strong>Kern (Core):</strong> Die Menge der Pareto-effizienten Allokationen, die beide Konsumenten gegenüber der Anfangsausstattung bevorzugen (oder gleich bewerten).</li>
</ul>

<div class="interactive-widget"><button class="widget-fullscreen-btn" title="Fullscreen">&#x26F6;</button><button class="widget-exit-fullscreen-btn">&#x2190; Back</button><div class="interactive-widget-title">Interaktives Tool: Edgeworth-Box</div><iframe src="https://berndneumann.eu/project/ysidro.php" loading="lazy" title="Interaktive Edgeworth-Box"></iframe></div>

<h3>6. Wohlfahrtstheoreme</h3>
<ul>
  <li><strong>1. Wohlfahrtstheorem (First Welfare Theorem):</strong>
    <p>Jedes Wettbewerbsgleichgewicht ist Pareto-effizient.</p>
    <p><em>Voraussetzungen:</em> Vollständige Märkte, keine Externalitäten, keine Marktmacht.</p>
    <p><em>Intuition:</em> Die &bdquo;unsichtbare Hand&ldquo; &ndash; dezentrale Märkte führen zu einer effizienten Allokation, ohne zentrale Planung.</p>
  </li>
  <li><strong>2. Wohlfahrtstheorem (Second Welfare Theorem):</strong>
    <p>Jede Pareto-effiziente Allokation kann als Wettbewerbsgleichgewicht realisiert werden &ndash; bei geeigneter Umverteilung der Anfangsausstattungen (Pauschal&shy;transfers).</p>
    <p><em>Voraussetzungen:</em> Konvexe Präferenzen, Möglichkeit von Pauschal&shy;transfers (lump-sum transfers).</p>
    <p><em>Bedeutung:</em> Trennung von Effizienz und Gerechtigkeit &ndash; die Gesellschaft kann über die Verteilung entscheiden, ohne auf die Effizienz des Marktes verzichten zu müssen.</p>
  </li>
</ul>

<h2>Weiterführende Lektüre (Varian)</h2>
<ul>
<li><strong>Kapitel 16: Gleichgewicht</strong> (S. 323–346) – Entwickelt die partielle Gleichgewichtsanalyse auf Wettbewerbsmärkten mit inverser Angebots- und Nachfragefunktion, komparativer Statik sowie Steuerwirkungen (Mengen- und Wertsteuern, Deadweight Loss, Steuerinzidenz).</li>
<li><strong>Kapitel 32: Tausch</strong> (S. 665–693) – Führt die Edgeworth-Box als zentrales Werkzeug der allgemeinen Gleichgewichtsanalyse ein: Ausgehend von Anfangsausstattungen zweier Konsumenten werden durchführbare Allokationen, die Kontraktkurve und der Kern abgeleitet, und es wird gezeigt, wie der Walrasianische Preismechanismus zu einem Pareto-effizienten Gleichgewicht führt (Erstes und Zweites Wohlfahrtstheorem).</li>
</ul>
`,

  summaryEn: `
<h2>Markets &ndash; Summary</h2>
<p>This chapter covers the interplay of supply and demand in competitive markets, welfare analysis, taxes and tax incidence, general equilibrium in a pure exchange economy (Edgeworth box), and the fundamental welfare theorems (Varian Ch.&nbsp;16, 32).</p>

<h3>1. Market Equilibrium</h3>
<p>In a competitive market, supply and demand jointly determine the equilibrium price $p^*$ and equilibrium quantity $Q^*$.</p>
<ul>
  <li><strong>Inverse demand function:</strong> $p^D(Q)$ &ndash; the price consumers are willing to pay at quantity $Q$.</li>
  <li><strong>Inverse supply function:</strong> $p^S(Q)$ &ndash; the minimum price producers require at quantity $Q$.</li>
  <li><strong>Equilibrium condition:</strong> $$Q^D(p^*) = Q^S(p^*)$$</li>
  <li><strong>T&acirc;tonnement process:</strong> A Walrasian auctioneer calls out prices; excess demand drives the price up, excess supply drives it down, until equilibrium is reached.</li>
  <li><strong>Comparative statics:</strong> Shifts in demand or supply curves (e.g., due to income changes, technology, input prices) predictably alter $p^*$ and $Q^*$.</li>
</ul>

<h3>2. Welfare in Equilibrium</h3>
<p>Welfare measures the total benefit market participants derive from trade.</p>
<ul>
  <li><strong>Consumer surplus (CS):</strong> $$CS = \\int_0^{Q^*} p^D(Q)\\, dQ - p^* \\cdot Q^*$$
  The area between the inverse demand curve and the equilibrium price.</li>
  <li><strong>Producer surplus (PS):</strong> $$PS = p^* \\cdot Q^* - \\int_0^{Q^*} p^S(Q)\\, dQ$$
  The area between the equilibrium price and the inverse supply curve.</li>
  <li><strong>Total surplus:</strong> $W = CS + PS$ &ndash; maximized at the competitive equilibrium.</li>
  <li><strong>Allocative efficiency:</strong> No other price/quantity pair generates higher total surplus &ndash; the competitive market is allocatively efficient.</li>
</ul>

<h3>3. Taxes</h3>
<p>Taxes create a wedge between the price buyers pay ($p^D$) and the price sellers receive ($p^S$).</p>
<ul>
  <li><strong>Specific tax (per-unit tax):</strong> A per-unit tax $t$ satisfying $$p^D = p^S + t$$</li>
  <li><strong>Tax incidence:</strong> The distribution of the tax burden depends on elasticities, <em>not</em> on who nominally remits the tax. The more <em>inelastic</em> side bears the greater share.</li>
  <li><strong>Tax revenue:</strong> $$T = t \\cdot Q^{\\text{tax}}$$</li>
  <li><strong>Deadweight loss (DWL):</strong> The Harberger triangle &ndash; welfare lost because the traded quantity falls below the efficient level: $$DWL = \\frac{1}{2} \\cdot t \\cdot (Q^* - Q^{\\text{tax}})$$</li>
  <li><strong>Ad-valorem tax:</strong> A percentage tax on price, e.g., VAT: $p^D = (1+\\tau) \\cdot p^S$.</li>
  <li><strong>Subsidy:</strong> Equivalent to a negative tax; lowers the buyer price and raises the seller price.</li>
</ul>

<div class="interactive-widget"><button class="widget-fullscreen-btn" title="Fullscreen">&#x26F6;</button><button class="widget-exit-fullscreen-btn">&#x2190; Back</button><div class="interactive-widget-title">Interactive Tool: Market Equilibrium &amp; Taxes</div><iframe src="https://tuda-mikro.org/lecture_03/lecture_03.html#/market" loading="lazy" title="Interactive diagram for market equilibrium and taxes"></iframe></div>

<h3>4. General Equilibrium &ndash; Edgeworth Box</h3>
<p>Consider a pure exchange economy with 2 consumers ($A$, $B$) and 2 goods.</p>
<ul>
  <li><strong>Edgeworth box:</strong> Width = total endowment of good&nbsp;1 ($\\omega_1^A + \\omega_1^B$), height = total endowment of good&nbsp;2 ($\\omega_2^A + \\omega_2^B$). Each point represents a feasible allocation.</li>
  <li><strong>Initial endowment:</strong> The point $(\\omega_1^A, \\omega_2^A)$ in the box.</li>
  <li><strong>Feasibility:</strong> $$x_1^A + x_1^B = \\omega_1^A + \\omega_1^B \\quad \\text{and} \\quad x_2^A + x_2^B = \\omega_2^A + \\omega_2^B$$</li>
  <li><strong>Budget constraint with prices:</strong> $$p_1 x_1^i + p_2 x_2^i = p_1 \\omega_1^i + p_2 \\omega_2^i \\quad \\text{for } i = A, B$$
  The budget line passes through the initial endowment.</li>
  <li><strong>Walras&rsquo;s Law:</strong> If one market clears, the other must clear as well: $$\\sum_i (p_1 x_1^i + p_2 x_2^i) = \\sum_i (p_1 \\omega_1^i + p_2 \\omega_2^i)$$</li>
</ul>

<h3>5. Pareto Efficiency</h3>
<ul>
  <li><strong>Pareto improvement:</strong> A reallocation that makes at least one consumer better off without making any other worse off.</li>
  <li><strong>Pareto efficiency:</strong> An allocation where no Pareto improvement is possible.</li>
  <li><strong>Condition in the Edgeworth box:</strong> $$MRS^A = MRS^B$$
  The indifference curves of the two consumers are tangent to each other.</li>
  <li><strong>Contract curve:</strong> The locus of all Pareto-efficient allocations in the Edgeworth box.</li>
  <li><strong>Core:</strong> The set of Pareto-efficient allocations that both consumers (weakly) prefer to the initial endowment.</li>
</ul>

<div class="interactive-widget"><button class="widget-fullscreen-btn" title="Fullscreen">&#x26F6;</button><button class="widget-exit-fullscreen-btn">&#x2190; Back</button><div class="interactive-widget-title">Interactive Tool: Edgeworth Box</div><iframe src="https://berndneumann.eu/project/ysidro.php" loading="lazy" title="Interactive Edgeworth box"></iframe></div>

<h3>6. Welfare Theorems</h3>
<ul>
  <li><strong>First Welfare Theorem:</strong>
    <p>Every competitive equilibrium is Pareto efficient.</p>
    <p><em>Conditions:</em> Complete markets, no externalities, no market power.</p>
    <p><em>Intuition:</em> The &ldquo;invisible hand&rdquo; &ndash; decentralized markets achieve an efficient allocation without central planning.</p>
  </li>
  <li><strong>Second Welfare Theorem:</strong>
    <p>Every Pareto-efficient allocation can be achieved as a competitive equilibrium with appropriate redistribution of initial endowments (lump-sum transfers).</p>
    <p><em>Conditions:</em> Convex preferences, feasibility of lump-sum transfers.</p>
    <p><em>Implication:</em> Separation of efficiency and equity &ndash; society can choose the distribution without sacrificing market efficiency.</p>
  </li>
</ul>

<h2>Further Reading (Varian)</h2>
<ul>
<li><strong>Chapter 16: Equilibrium</strong> (pp. 323–346) – Develops partial equilibrium analysis in competitive markets with inverse supply and demand functions, comparative statics, and the effects of taxes (per-unit and ad-valorem taxes, deadweight loss, tax incidence).</li>
<li><strong>Chapter 32: Exchange</strong> (pp. 665–693) – Introduces the Edgeworth box as the central tool of general equilibrium analysis: starting from initial endowments of two consumers, feasible allocations, the contract curve and the core are derived, and it is shown how the Walrasian price mechanism leads to a Pareto-efficient equilibrium (First and Second Welfare Theorems).</li>
</ul>
`,

  cheatsheetDe: `
<h2>Märkte &ndash; Cheatsheet</h2>

<h3>Marktgleichgewicht</h3>
<table>
  <tr><td>Gleichgewicht</td><td>$Q^D(p^*) = Q^S(p^*)$</td></tr>
  <tr><td>Inverse Nachfrage</td><td>$p^D(Q)$</td></tr>
  <tr><td>Inverse Angebot</td><td>$p^S(Q)$</td></tr>
</table>

<h3>Wohlfahrt</h3>
<table>
  <tr><td>Konsumentenrente</td><td>$CS = \\int_0^{Q^*} p^D(Q)\\, dQ - p^* Q^*$</td></tr>
  <tr><td>Produzentenrente</td><td>$PS = p^* Q^* - \\int_0^{Q^*} p^S(Q)\\, dQ$</td></tr>
  <tr><td>Gesamtrente</td><td>$W = CS + PS$ (max. im Wettbewerbsgleichgewicht)</td></tr>
</table>

<h3>Steuern</h3>
<table>
  <tr><td>Mengensteuer</td><td>$p^D = p^S + t$</td></tr>
  <tr><td>Steueraufkommen</td><td>$T = t \\cdot Q^{\\text{tax}}$</td></tr>
  <tr><td>DWL</td><td>$DWL = \\frac{1}{2} \\cdot t \\cdot (Q^* - Q^{\\text{tax}})$</td></tr>
  <tr><td>Wertsteuer</td><td>$p^D = (1+\\tau) \\cdot p^S$</td></tr>
  <tr><td>Inzidenz</td><td>Unelastischere Seite tr&auml;gt mehr Last</td></tr>
</table>

<h3>Edgeworth-Box &amp; Allg. Gleichgewicht</h3>
<table>
  <tr><td>Durchf&uuml;hrbarkeit</td><td>$x_1^A + x_1^B = \\omega_1^A + \\omega_1^B$, analog f&uuml;r Gut&nbsp;2</td></tr>
  <tr><td>Budget</td><td>$p_1 x_1^i + p_2 x_2^i = p_1 \\omega_1^i + p_2 \\omega_2^i$</td></tr>
  <tr><td>Walras-Gesetz</td><td>Ein Markt im GG $\\Rightarrow$ alle M&auml;rkte im GG</td></tr>
</table>

<h3>Paretoeffizienz</h3>
<table>
  <tr><td>Bedingung</td><td>$MRS^A = MRS^B$</td></tr>
  <tr><td>Kontraktkurve</td><td>Menge aller Pareto-effizienten Allokationen</td></tr>
  <tr><td>Kern</td><td>Pareto-eff. Allokationen $\\succeq$ Anfangsausstattung f&uuml;r beide</td></tr>
</table>

<h3>Wohlfahrtstheoreme</h3>
<table>
  <tr><td>1.&nbsp;WT</td><td>Wettbewerbsgleichgewicht $\\Rightarrow$ Pareto-effizient</td></tr>
  <tr><td></td><td><em>Bed.:</em> vollst. M&auml;rkte, keine Externalit&auml;ten, keine Marktmacht</td></tr>
  <tr><td>2.&nbsp;WT</td><td>Jede Pareto-eff. Allokation ist als GG erreichbar (mit Umverteilung)</td></tr>
  <tr><td></td><td><em>Bed.:</em> konvexe Pr&auml;ferenzen, Pauschaltransfers m&ouml;glich</td></tr>
</table>
`,

  cheatsheetEn: `
<h2>Markets &ndash; Cheatsheet</h2>

<h3>Market Equilibrium</h3>
<table>
  <tr><td>Equilibrium</td><td>$Q^D(p^*) = Q^S(p^*)$</td></tr>
  <tr><td>Inverse demand</td><td>$p^D(Q)$</td></tr>
  <tr><td>Inverse supply</td><td>$p^S(Q)$</td></tr>
</table>

<h3>Welfare</h3>
<table>
  <tr><td>Consumer surplus</td><td>$CS = \\int_0^{Q^*} p^D(Q)\\, dQ - p^* Q^*$</td></tr>
  <tr><td>Producer surplus</td><td>$PS = p^* Q^* - \\int_0^{Q^*} p^S(Q)\\, dQ$</td></tr>
  <tr><td>Total surplus</td><td>$W = CS + PS$ (max. at competitive eq.)</td></tr>
</table>

<h3>Taxes</h3>
<table>
  <tr><td>Specific tax</td><td>$p^D = p^S + t$</td></tr>
  <tr><td>Tax revenue</td><td>$T = t \\cdot Q^{\\text{tax}}$</td></tr>
  <tr><td>DWL</td><td>$DWL = \\frac{1}{2} \\cdot t \\cdot (Q^* - Q^{\\text{tax}})$</td></tr>
  <tr><td>Ad-valorem tax</td><td>$p^D = (1+\\tau) \\cdot p^S$</td></tr>
  <tr><td>Incidence</td><td>More inelastic side bears greater burden</td></tr>
</table>

<h3>Edgeworth Box &amp; General Equilibrium</h3>
<table>
  <tr><td>Feasibility</td><td>$x_1^A + x_1^B = \\omega_1^A + \\omega_1^B$, analogously for good&nbsp;2</td></tr>
  <tr><td>Budget</td><td>$p_1 x_1^i + p_2 x_2^i = p_1 \\omega_1^i + p_2 \\omega_2^i$</td></tr>
  <tr><td>Walras&rsquo;s Law</td><td>One market clears $\\Rightarrow$ all markets clear</td></tr>
</table>

<h3>Pareto Efficiency</h3>
<table>
  <tr><td>Condition</td><td>$MRS^A = MRS^B$</td></tr>
  <tr><td>Contract curve</td><td>Locus of all Pareto-efficient allocations</td></tr>
  <tr><td>Core</td><td>Pareto-eff. allocations $\\succeq$ endowment for both</td></tr>
</table>

<h3>Welfare Theorems</h3>
<table>
  <tr><td>1st&nbsp;WT</td><td>Competitive equilibrium $\\Rightarrow$ Pareto efficient</td></tr>
  <tr><td></td><td><em>Req.:</em> complete markets, no externalities, no market power</td></tr>
  <tr><td>2nd&nbsp;WT</td><td>Every Pareto-eff. allocation achievable as eq. (with redistribution)</td></tr>
  <tr><td></td><td><em>Req.:</em> convex preferences, lump-sum transfers feasible</td></tr>
</table>
`,
}
