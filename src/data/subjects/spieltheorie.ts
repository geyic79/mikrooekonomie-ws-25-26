import type { Subject } from '@/data/types'

export const spieltheorie: Subject = {
  id: 'spieltheorie',
  titleDe: 'Spieltheorie',
  titleEn: 'Game Theory',
  shortDescDe: 'Nash-Gleichgewicht, gemischte Strategien, sequenzielle Spiele und Wiederholung',
  shortDescEn: 'Nash equilibrium, mixed strategies, sequential games and repetition',
  color: '#e47355',
  icon: '🎯',
  videoLinks: [
    { titleDe: 'Spieltheorie 1', titleEn: 'Game Theory 1', url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1697540' },
    { titleDe: 'Spieltheorie 2', titleEn: 'Game Theory 2', url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1698399' },
    { titleDe: 'Spieltheorie 3', titleEn: 'Game Theory 3', url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1699968' },
  ],

  summaryDe: `
<h2>Spieltheorie (Varian Kap. 29, 30)</h2>

<h3>1. Grundlagen der Spieltheorie</h3>
<p>
  Die Spieltheorie analysiert <strong>strategische Interaktionen</strong>, bei denen die Auszahlung
  eines Akteurs von den Entscheidungen der anderen Akteure abh&auml;ngt. Ein Spiel besteht aus drei
  Grundelementen:
</p>
<ul>
  <li><strong>Spieler</strong>: Die beteiligten Entscheidungstr&auml;ger (z.B. Unternehmen, Konsumenten, Staaten)</li>
  <li><strong>Strategien</strong>: Die m&ouml;glichen Handlungsoptionen jedes Spielers</li>
  <li><strong>Auszahlungen</strong>: Der Nutzen oder Gewinn, den jeder Spieler bei jeder Strategiekombination erh&auml;lt</li>
</ul>
<p>
  In der <strong>Normalform</strong> (auch strategische Form) wird ein Spiel als Matrix dargestellt.
  Bei zwei Spielern mit jeweils zwei Strategien ergibt sich eine 2&times;2-Matrix, wobei jede Zelle
  ein Auszahlungspaar $(u_1, u_2)$ enth&auml;lt.
</p>
<p>
  Eine <strong>dominante Strategie</strong> ist eine Strategie, die f&uuml;r einen Spieler
  unabh&auml;ngig von der Wahl des Gegners immer die h&ouml;chste Auszahlung liefert.
  Eine <strong>dominierte Strategie</strong> liefert immer eine niedrigere Auszahlung als eine
  andere verf&uuml;gbare Strategie. Durch <strong>iterative Elimination dominierter Strategien (IEDS)</strong>
  k&ouml;nnen wir das Spiel vereinfachen: Wir streichen nacheinander Strategien, die von einer anderen
  Strategie dominiert werden.
</p>

<h3>2. Das Gefangenendilemma</h3>
<p>
  Das Gefangenendilemma ist das bekannteste Spiel der Spieltheorie. Zwei Gefangene werden getrennt
  verhört und k&ouml;nnen entweder <em>kooperieren</em> (schweigen) oder <em>defektieren</em> (gestehen).
</p>
<table border="1" cellpadding="6" style="border-collapse:collapse; text-align:center;">
  <tr><td></td><td><strong>Kooperieren</strong></td><td><strong>Defektieren</strong></td></tr>
  <tr><td><strong>Kooperieren</strong></td><td>$(-1, -1)$</td><td>$(-3, 0)$</td></tr>
  <tr><td><strong>Defektieren</strong></td><td>$(0, -3)$</td><td>$(-2, -2)$</td></tr>
</table>
<p>
  <strong>Defektieren ist f&uuml;r beide eine dominante Strategie</strong>, obwohl beiderseitige
  Kooperation $(-1,-1)$ besser w&auml;re als beiderseitige Defektion $(-2,-2)$.
  Dies zeigt den Konflikt zwischen <strong>individueller Rationalit&auml;t</strong> und
  <strong>kollektivem Optimum</strong>.
</p>
<p>Reale Anwendungen:</p>
<ul>
  <li>Wettr&uuml;sten zwischen Staaten</li>
  <li>Preiskriege zwischen Unternehmen</li>
  <li>Umweltabkommen und Klimaschutz</li>
  <li>Kartellinstabilit&auml;t</li>
</ul>

<h3>3. Nash-Gleichgewicht</h3>
<p>
  Ein <strong>Nash-Gleichgewicht (NE)</strong> ist ein Strategieprofil $(s_1^*, s_2^*, \\ldots, s_n^*)$,
  bei dem kein Spieler durch einseitige Abweichung seine Auszahlung verbessern kann:
</p>
$$u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) \\quad \\forall s_i \\in S_i, \\forall i$$
<p>
  Die <strong>beste-Antwort-Funktion</strong> gibt die optimale Strategie eines Spielers gegeben die
  Strategien der anderen an:
</p>
$$s_i^* = BR_i(s_{-i})$$
<p>
  Im Nash-Gleichgewicht spielt jeder Spieler simultan seine beste Antwort:
  $s_i^* = BR_i(s_{-i}^*)$ f&uuml;r alle $i$.
</p>
<p>
  <strong>Finden von NE in Matrixspielen</strong> (Unterstreichungsmethode):
</p>
<ol>
  <li>F&uuml;r jeden Spieler: Unterstreiche die h&ouml;chste Auszahlung in jeder Spalte (Spieler 1) bzw. Zeile (Spieler 2)</li>
  <li>Zellen, in denen <em>beide</em> Auszahlungen unterstrichen sind, sind Nash-Gleichgewichte</li>
</ol>
<p>
  Wichtig: Ein reines NE muss nicht existieren (z.B. Matching Pennies).
  Es k&ouml;nnen auch <strong>mehrere Gleichgewichte</strong> existieren.
</p>

<details class="interactive-widget">
<summary>Interaktives Tool: 2&times;2 Spiel-Analysator</summary>
<iframe src="https://tuda-mikro.org/lecture_04/lecture_04.html#gt2x2" loading="lazy" title="Interaktiver 2x2 Spiel-Analysator"></iframe>
</details>

<h3>4. Klassische Spiele</h3>

<h4>Kampf der Geschlechter (Battle of the Sexes)</h4>
<table border="1" cellpadding="6" style="border-collapse:collapse; text-align:center;">
  <tr><td></td><td><strong>Oper</strong></td><td><strong>Fu&szlig;ball</strong></td></tr>
  <tr><td><strong>Oper</strong></td><td>$(3, 2)$</td><td>$(0, 0)$</td></tr>
  <tr><td><strong>Fu&szlig;ball</strong></td><td>$(0, 0)$</td><td>$(2, 3)$</td></tr>
</table>
<p>
  Koordinationsspiel mit <strong>zwei reinen NE</strong>: (Oper, Oper) und (Fu&szlig;ball, Fu&szlig;ball).
  Beide Spieler wollen sich koordinieren, aber haben unterschiedliche Pr&auml;ferenzen.
</p>

<h4>Falke-Taube (Hawk-Dove / Chicken)</h4>
<table border="1" cellpadding="6" style="border-collapse:collapse; text-align:center;">
  <tr><td></td><td><strong>Taube</strong></td><td><strong>Falke</strong></td></tr>
  <tr><td><strong>Taube</strong></td><td>$(3, 3)$</td><td>$(1, 4)$</td></tr>
  <tr><td><strong>Falke</strong></td><td>$(4, 1)$</td><td>$(0, 0)$</td></tr>
</table>
<p>
  Anti-Koordinationsspiel mit <strong>zwei reinen NE</strong>: (Taube, Falke) und (Falke, Taube).
  Beide wollen etwas anderes als der Gegner tun.
</p>

<h4>Matching Pennies</h4>
<table border="1" cellpadding="6" style="border-collapse:collapse; text-align:center;">
  <tr><td></td><td><strong>Kopf</strong></td><td><strong>Zahl</strong></td></tr>
  <tr><td><strong>Kopf</strong></td><td>$(1, -1)$</td><td>$(-1, 1)$</td></tr>
  <tr><td><strong>Zahl</strong></td><td>$(-1, 1)$</td><td>$(1, -1)$</td></tr>
</table>
<p>
  Reines Nullsummenspiel. <strong>Kein reines NE</strong> &ndash; es existiert nur ein gemischtes Gleichgewicht.
</p>

<h3>5. Gemischte Strategien</h3>
<p>
  Eine <strong>gemischte Strategie</strong> ist eine Wahrscheinlichkeitsverteilung &uuml;ber die reinen
  Strategien eines Spielers. Spieler $i$ w&auml;hlt Strategie $s_k$ mit Wahrscheinlichkeit $p_k$,
  wobei $\\sum_k p_k = 1$.
</p>
<p>Der <strong>erwartete Nutzen</strong> ist:</p>
$$EU_i = \\sum_s \\pi(s) \\, u_i(s)$$
<p>wobei $\\pi(s)$ die Wahrscheinlichkeit des Strategieprofils $s$ ist.</p>
<p>
  Im <strong>gemischten Nash-Gleichgewicht</strong> muss jeder Spieler den Gegner <em>indifferent</em>
  zwischen dessen reinen Strategien machen. F&uuml;r ein 2&times;2-Spiel:
</p>
<p>
  Wenn Spieler 1 mit Wahrscheinlichkeit $p$ Strategie A und mit $1-p$ Strategie B spielt, dann muss
  Spieler 2 bei beiden reinen Strategien den gleichen erwarteten Nutzen erhalten:
</p>
$$EU_2(\\text{Links} \\mid p) = EU_2(\\text{Rechts} \\mid p)$$
<p>Aufl&ouml;sen nach $p$ liefert die Gleichgewichtswahrscheinlichkeit.</p>

<h4>Beispiel: Matching Pennies</h4>
<p>
  Spieler 1 spielt Kopf mit Wahrscheinlichkeit $p$. Indifferenzbedingung f&uuml;r Spieler 2:<br/>
  $EU_2(\\text{Kopf}) = p \\cdot (-1) + (1-p) \\cdot 1 = 1 - 2p$<br/>
  $EU_2(\\text{Zahl}) = p \\cdot 1 + (1-p) \\cdot (-1) = 2p - 1$<br/>
  Gleichsetzen: $1 - 2p = 2p - 1 \\Rightarrow p = \\frac{1}{2}$
</p>
<p>Analog spielt Spieler 2 Kopf mit $q = \\frac{1}{2}$. Das gemischte NE ist $(\\frac{1}{2}, \\frac{1}{2})$.</p>

<h4>Beispiel: Kampf der Geschlechter</h4>
<p>
  Spieler 1 spielt Oper mit Wahrscheinlichkeit $p$. Indifferenzbedingung f&uuml;r Spieler 2:<br/>
  $EU_2(\\text{Oper}) = p \\cdot 2 + (1-p) \\cdot 0 = 2p$<br/>
  $EU_2(\\text{Fu\\szlig ball}) = p \\cdot 0 + (1-p) \\cdot 3 = 3(1-p)$<br/>
  Gleichsetzen: $2p = 3 - 3p \\Rightarrow p = \\frac{3}{5}$
</p>
<p>
  Spieler 2 spielt Oper mit $q$. Indifferenz f&uuml;r Spieler 1:<br/>
  $3q = 2(1-q) \\Rightarrow q = \\frac{2}{5}$
</p>

<p>
  <strong>Existenzsatz von Nash</strong>: Jedes endliche Spiel (endlich viele Spieler, endlich viele
  Strategien) besitzt mindestens ein Nash-Gleichgewicht (m&ouml;glicherweise in gemischten Strategien).
</p>

<h3>6. Sequenzielle Spiele</h3>
<p>
  In <strong>sequenziellen Spielen</strong> ziehen Spieler nacheinander. Die Darstellung erfolgt als
  <strong>Spielbaum (Extensivform)</strong> mit:
</p>
<ul>
  <li><strong>Knoten</strong>: Entscheidungspunkte der Spieler</li>
  <li><strong>&Auml;ste</strong>: Verf&uuml;gbare Aktionen</li>
  <li><strong>Informationsmengen</strong>: Was der Spieler beim Entscheiden wei&szlig;</li>
  <li><strong>Endknoten</strong>: Auszahlungen</li>
</ul>
<p>
  L&ouml;sung durch <strong>R&uuml;ckw&auml;rtsinduktion (Backward Induction)</strong>:
</p>
<ol>
  <li>Beginne an den Endknoten</li>
  <li>Bestimme die optimale Aktion des letzten Spielers</li>
  <li>Ersetze den Entscheidungsknoten durch die resultierende Auszahlung</li>
  <li>Wiederhole bis zum Anfangsknoten</li>
</ol>
<p>
  Ein <strong>Teilspiel (Subgame)</strong> ist ein Spiel, das an einem beliebigen Entscheidungsknoten
  beginnt. Ein <strong>Teilspielperfektes Gleichgewicht (SPE)</strong> ist ein Strategieprofil,
  das in <em>jedem</em> Teilspiel ein Nash-Gleichgewicht bildet.
</p>
<p>
  Nicht jedes NE ist teilspielperfekt. <strong>Unglaubw&uuml;rdige Drohungen</strong> k&ouml;nnen
  Teil eines NE sein, werden aber durch SPE ausgeschlossen.
</p>

<h4>Beispiel: Markteintritt</h4>
<p>
  Ein Herausforderer (H) entscheidet, ob er in den Markt eintritt. Falls ja, entscheidet der
  Etablierte (E), ob er einen Preiskrieg f&uuml;hrt oder den Markt teilt:
</p>
<ul>
  <li>H tritt nicht ein: $(0, 3)$</li>
  <li>H tritt ein, E teilt: $(2, 2)$</li>
  <li>H tritt ein, E Preiskrieg: $(-1, -1)$</li>
</ul>
<p>
  R&uuml;ckw&auml;rtsinduktion: E w&auml;hlt "Teilen" (2 &gt; -1). H antizipiert dies und tritt ein (2 &gt; 0).<br/>
  <strong>SPE</strong>: (Eintreten, Teilen). Die Drohung "Preiskrieg" ist <em>unglaubw&uuml;rdig</em>.
</p>

<h3>7. Wiederholte Spiele</h3>
<p>
  Wird ein Stufenspiel (z.B. Gefangenendilemma) mehrfach wiederholt, k&ouml;nnen neue
  Gleichgewichte entstehen.
</p>

<h4>Endlich wiederholte Spiele</h4>
<p>
  Bei $T$ Wiederholungen und eindeutigem NE im Stufenspiel: R&uuml;ckw&auml;rtsinduktion ergibt,
  dass in <em>jeder</em> Runde das Stufenspiel-NE gespielt wird. Kooperation kann nicht aufrechterhalten werden.
</p>

<h4>Unendlich wiederholte Spiele</h4>
<p>
  Mit Diskontfaktor $\\delta \\in (0,1)$ werden zuk&uuml;nftige Auszahlungen abgezinst.
  Der Barwert eines konstanten Stroms $\\pi$ ist:
</p>
$$\\sum_{t=0}^{\\infty} \\delta^t \\pi = \\frac{\\pi}{1 - \\delta}$$

<p><strong>Grim-Trigger-Strategie</strong>:</p>
<ol>
  <li>Kooperiere in Runde 1</li>
  <li>Kooperiere, solange der Gegner immer kooperiert hat</li>
  <li>Defektiere f&uuml;r immer, sobald der Gegner einmal defektiert</li>
</ol>

<p>Kooperation ist aufrechtzuerhalten, wenn:</p>
$$\\delta \\geq \\frac{\\pi^D - \\pi^C}{\\pi^D - \\pi^P}$$
<p>wobei:</p>
<ul>
  <li>$\\pi^C$ = Auszahlung bei beiderseitiger Kooperation</li>
  <li>$\\pi^D$ = Auszahlung bei einseitiger Defektion (Versuchungsauszahlung)</li>
  <li>$\\pi^P$ = Auszahlung bei beiderseitiger Defektion (Bestrafungsauszahlung)</li>
</ul>
<p>
  <strong>Herleitung</strong>: Der Spieler vergleicht den Barwert ewiger Kooperation mit dem einmaligen
  Gewinn durch Defektion plus ewiger Bestrafung:<br/>
  Kooperation: $\\frac{\\pi^C}{1-\\delta}$<br/>
  Defektion: $\\pi^D + \\frac{\\delta \\, \\pi^P}{1-\\delta}$<br/>
  Kooperation lohnt sich, wenn $\\frac{\\pi^C}{1-\\delta} \\geq \\pi^D + \\frac{\\delta \\, \\pi^P}{1-\\delta}$.
  Umstellen ergibt die obige Bedingung.
</p>
<p>
  <strong>Folk-Theorem</strong>: In unendlich wiederholten Spielen kann bei hinreichend hohem $\\delta$
  <em>jedes</em> Auszahlungsprofil als Gleichgewichtsergebnis aufrechterhalten werden, das jeden
  Spieler mindestens so gut stellt wie sein Minimax-Wert.
</p>

<h2>Weiterf&uuml;hrende Lekt&uuml;re (Varian)</h2>
<ul>
<li><strong>Kapitel 29: Spieltheorie</strong> (S. 597&ndash;613) &ndash; Auszahlungsmatrizen, dominante Strategien, Nash-Gleichgewicht in reinen und gemischten Strategien; klassische Beispiele wie Gefangenendilemma und Schere-Stein-Papier.</li>
<li><strong>Kapitel 30: Anwendungen der Spieltheorie</strong> (S. 615&ndash;645) &ndash; Kurven der besten Antwort, Koordinationsspiele (Kampf der Geschlechter, Sicherheitsspiel, Mutprobe), sequenzielle Spiele mit R&uuml;ckw&auml;rtsinduktion und Selbstbindung sowie wiederholte Spiele mit Grim-Trigger-Strategien.</li>
</ul>
`,

  summaryEn: `
<h2>Game Theory (Varian Ch. 29, 30)</h2>

<h3>1. Fundamentals of Game Theory</h3>
<p>
  Game theory analyzes <strong>strategic interactions</strong> where each agent's payoff depends on
  the actions of other agents. A game consists of three fundamental elements:
</p>
<ul>
  <li><strong>Players</strong>: The decision-makers involved (e.g., firms, consumers, nations)</li>
  <li><strong>Strategies</strong>: The possible courses of action available to each player</li>
  <li><strong>Payoffs</strong>: The utility or profit each player receives for every combination of strategies</li>
</ul>
<p>
  In <strong>normal form</strong> (also called strategic form), a game is represented as a matrix.
  With two players each having two strategies, we get a 2&times;2 matrix where each cell contains
  a payoff pair $(u_1, u_2)$.
</p>
<p>
  A <strong>dominant strategy</strong> is one that yields the highest payoff for a player regardless
  of the opponent's choice. A <strong>dominated strategy</strong> always yields a lower payoff than
  some other available strategy. Through <strong>iterated elimination of dominated strategies (IEDS)</strong>,
  we can simplify the game by successively removing strategies that are dominated by another strategy.
</p>

<h3>2. The Prisoner's Dilemma</h3>
<p>
  The Prisoner's Dilemma is the most famous game in game theory. Two prisoners are interrogated
  separately and can either <em>cooperate</em> (stay silent) or <em>defect</em> (confess).
</p>
<table border="1" cellpadding="6" style="border-collapse:collapse; text-align:center;">
  <tr><td></td><td><strong>Cooperate</strong></td><td><strong>Defect</strong></td></tr>
  <tr><td><strong>Cooperate</strong></td><td>$(-1, -1)$</td><td>$(-3, 0)$</td></tr>
  <tr><td><strong>Defect</strong></td><td>$(0, -3)$</td><td>$(-2, -2)$</td></tr>
</table>
<p>
  <strong>Defecting is a dominant strategy for both players</strong>, even though mutual cooperation
  $(-1,-1)$ would be better than mutual defection $(-2,-2)$.
  This illustrates the conflict between <strong>individual rationality</strong> and the
  <strong>collective optimum</strong>.
</p>
<p>Real-world applications:</p>
<ul>
  <li>Arms races between nations</li>
  <li>Price wars between firms</li>
  <li>Environmental agreements and climate policy</li>
  <li>Cartel instability</li>
</ul>

<h3>3. Nash Equilibrium</h3>
<p>
  A <strong>Nash Equilibrium (NE)</strong> is a strategy profile $(s_1^*, s_2^*, \\ldots, s_n^*)$ where
  no player can improve their payoff by unilaterally deviating:
</p>
$$u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) \\quad \\forall s_i \\in S_i, \\forall i$$
<p>
  The <strong>best response function</strong> gives the optimal strategy for a player given the
  strategies of others:
</p>
$$s_i^* = BR_i(s_{-i})$$
<p>
  In a Nash Equilibrium, every player simultaneously plays their best response:
  $s_i^* = BR_i(s_{-i}^*)$ for all $i$.
</p>
<p>
  <strong>Finding NE in matrix games</strong> (underline method):
</p>
<ol>
  <li>For each player: underline the highest payoff in each column (player 1) or row (player 2)</li>
  <li>Cells where <em>both</em> payoffs are underlined are Nash Equilibria</li>
</ol>
<p>
  Important: A pure NE need not exist (e.g., Matching Pennies).
  There can also be <strong>multiple equilibria</strong>.
</p>

<details class="interactive-widget">
<summary>Interactive Tool: 2&times;2 Game Analyzer</summary>
<iframe src="https://tuda-mikro.org/lecture_04/lecture_04.html#gt2x2" loading="lazy" title="Interactive 2x2 game analyzer"></iframe>
</details>

<h3>4. Classic Games</h3>

<h4>Battle of the Sexes</h4>
<table border="1" cellpadding="6" style="border-collapse:collapse; text-align:center;">
  <tr><td></td><td><strong>Opera</strong></td><td><strong>Football</strong></td></tr>
  <tr><td><strong>Opera</strong></td><td>$(3, 2)$</td><td>$(0, 0)$</td></tr>
  <tr><td><strong>Football</strong></td><td>$(0, 0)$</td><td>$(2, 3)$</td></tr>
</table>
<p>
  A coordination game with <strong>two pure NE</strong>: (Opera, Opera) and (Football, Football).
  Both players want to coordinate but have different preferences.
</p>

<h4>Hawk-Dove (Chicken)</h4>
<table border="1" cellpadding="6" style="border-collapse:collapse; text-align:center;">
  <tr><td></td><td><strong>Dove</strong></td><td><strong>Hawk</strong></td></tr>
  <tr><td><strong>Dove</strong></td><td>$(3, 3)$</td><td>$(1, 4)$</td></tr>
  <tr><td><strong>Hawk</strong></td><td>$(4, 1)$</td><td>$(0, 0)$</td></tr>
</table>
<p>
  An anti-coordination game with <strong>two pure NE</strong>: (Dove, Hawk) and (Hawk, Dove).
  Each player wants to do the opposite of their opponent.
</p>

<h4>Matching Pennies</h4>
<table border="1" cellpadding="6" style="border-collapse:collapse; text-align:center;">
  <tr><td></td><td><strong>Heads</strong></td><td><strong>Tails</strong></td></tr>
  <tr><td><strong>Heads</strong></td><td>$(1, -1)$</td><td>$(-1, 1)$</td></tr>
  <tr><td><strong>Tails</strong></td><td>$(-1, 1)$</td><td>$(1, -1)$</td></tr>
</table>
<p>
  A pure zero-sum game. <strong>No pure NE exists</strong> &ndash; only a mixed strategy equilibrium.
</p>

<h3>5. Mixed Strategies</h3>
<p>
  A <strong>mixed strategy</strong> is a probability distribution over a player's pure strategies.
  Player $i$ chooses strategy $s_k$ with probability $p_k$, where $\\sum_k p_k = 1$.
</p>
<p>The <strong>expected utility</strong> is:</p>
$$EU_i = \\sum_s \\pi(s) \\, u_i(s)$$
<p>where $\\pi(s)$ is the probability of strategy profile $s$.</p>
<p>
  In a <strong>mixed Nash Equilibrium</strong>, each player must make the opponent <em>indifferent</em>
  between their pure strategies. For a 2&times;2 game:
</p>
<p>
  If player 1 plays strategy A with probability $p$ and strategy B with $1-p$, then player 2 must
  receive the same expected payoff from both pure strategies:
</p>
$$EU_2(\\text{Left} \\mid p) = EU_2(\\text{Right} \\mid p)$$
<p>Solving for $p$ gives the equilibrium probability.</p>

<h4>Example: Matching Pennies</h4>
<p>
  Player 1 plays Heads with probability $p$. Indifference condition for player 2:<br/>
  $EU_2(\\text{Heads}) = p \\cdot (-1) + (1-p) \\cdot 1 = 1 - 2p$<br/>
  $EU_2(\\text{Tails}) = p \\cdot 1 + (1-p) \\cdot (-1) = 2p - 1$<br/>
  Setting equal: $1 - 2p = 2p - 1 \\Rightarrow p = \\frac{1}{2}$
</p>
<p>Similarly, player 2 plays Heads with $q = \\frac{1}{2}$. The mixed NE is $(\\frac{1}{2}, \\frac{1}{2})$.</p>

<h4>Example: Battle of the Sexes</h4>
<p>
  Player 1 plays Opera with probability $p$. Indifference condition for player 2:<br/>
  $EU_2(\\text{Opera}) = p \\cdot 2 + (1-p) \\cdot 0 = 2p$<br/>
  $EU_2(\\text{Football}) = p \\cdot 0 + (1-p) \\cdot 3 = 3(1-p)$<br/>
  Setting equal: $2p = 3 - 3p \\Rightarrow p = \\frac{3}{5}$
</p>
<p>
  Player 2 plays Opera with $q$. Indifference for player 1:<br/>
  $3q = 2(1-q) \\Rightarrow q = \\frac{2}{5}$
</p>

<p>
  <strong>Nash's Existence Theorem</strong>: Every finite game (finitely many players, finitely many
  strategies) has at least one Nash Equilibrium (possibly in mixed strategies).
</p>

<h3>6. Sequential Games</h3>
<p>
  In <strong>sequential games</strong>, players move one after another. The representation uses a
  <strong>game tree (extensive form)</strong> with:
</p>
<ul>
  <li><strong>Nodes</strong>: Decision points of the players</li>
  <li><strong>Branches</strong>: Available actions</li>
  <li><strong>Information sets</strong>: What the player knows when deciding</li>
  <li><strong>Terminal nodes</strong>: Payoffs</li>
</ul>
<p>
  Solution by <strong>backward induction</strong>:
</p>
<ol>
  <li>Start at the terminal nodes</li>
  <li>Determine the optimal action of the last mover</li>
  <li>Replace the decision node with the resulting payoff</li>
  <li>Repeat until the initial node is reached</li>
</ol>
<p>
  A <strong>subgame</strong> is a game starting from any non-initial decision node.
  A <strong>Subgame Perfect Equilibrium (SPE)</strong> is a strategy profile that constitutes a
  Nash Equilibrium in <em>every</em> subgame.
</p>
<p>
  Not every NE is subgame perfect. <strong>Incredible threats</strong> can be part of a NE but are
  ruled out by SPE.
</p>

<h4>Example: Market Entry</h4>
<p>
  A challenger (C) decides whether to enter the market. If so, the incumbent (I) decides whether
  to wage a price war or share the market:
</p>
<ul>
  <li>C stays out: $(0, 3)$</li>
  <li>C enters, I shares: $(2, 2)$</li>
  <li>C enters, I price war: $(-1, -1)$</li>
</ul>
<p>
  Backward induction: I chooses "Share" (2 &gt; -1). C anticipates this and enters (2 &gt; 0).<br/>
  <strong>SPE</strong>: (Enter, Share). The threat of "price war" is <em>incredible</em>.
</p>

<h3>7. Repeated Games</h3>
<p>
  When a stage game (e.g., Prisoner's Dilemma) is played repeatedly, new equilibria can emerge.
</p>

<h4>Finitely Repeated Games</h4>
<p>
  With $T$ repetitions and a unique NE in the stage game: backward induction shows that the stage
  game NE is played in <em>every</em> round. Cooperation cannot be sustained.
</p>

<h4>Infinitely Repeated Games</h4>
<p>
  With a discount factor $\\delta \\in (0,1)$, future payoffs are discounted. The present value of a
  constant stream $\\pi$ is:
</p>
$$\\sum_{t=0}^{\\infty} \\delta^t \\pi = \\frac{\\pi}{1 - \\delta}$$

<p><strong>Grim Trigger Strategy</strong>:</p>
<ol>
  <li>Cooperate in round 1</li>
  <li>Cooperate as long as the opponent has always cooperated</li>
  <li>Defect forever once the opponent defects</li>
</ol>

<p>Cooperation is sustainable if:</p>
$$\\delta \\geq \\frac{\\pi^D - \\pi^C}{\\pi^D - \\pi^P}$$
<p>where:</p>
<ul>
  <li>$\\pi^C$ = payoff from mutual cooperation</li>
  <li>$\\pi^D$ = payoff from unilateral defection (temptation payoff)</li>
  <li>$\\pi^P$ = payoff from mutual defection (punishment payoff)</li>
</ul>
<p>
  <strong>Derivation</strong>: The player compares the present value of perpetual cooperation with the
  one-time gain from defecting plus perpetual punishment:<br/>
  Cooperation: $\\frac{\\pi^C}{1-\\delta}$<br/>
  Defection: $\\pi^D + \\frac{\\delta \\, \\pi^P}{1-\\delta}$<br/>
  Cooperation pays if $\\frac{\\pi^C}{1-\\delta} \\geq \\pi^D + \\frac{\\delta \\, \\pi^P}{1-\\delta}$.
  Rearranging yields the condition above.
</p>
<p>
  <strong>Folk Theorem</strong>: In infinitely repeated games with a sufficiently high $\\delta$,
  <em>any</em> payoff profile can be sustained as an equilibrium outcome, provided it gives every
  player at least their minimax value.
</p>
`,

  cheatsheetDe: `
<h2>Spieltheorie &ndash; Cheatsheet</h2>

<h3>Grundbegriffe</h3>
<ul>
  <li><strong>Spieler, Strategien, Auszahlungen</strong> &ndash; drei Grundelemente jedes Spiels</li>
  <li><strong>Normalform</strong>: Matrixdarstellung mit Auszahlungspaaren $(u_1, u_2)$</li>
  <li><strong>Dominante Strategie</strong>: Immer optimal, unabh&auml;ngig vom Gegner</li>
  <li><strong>Dominierte Strategie</strong>: Immer schlechter als eine Alternative</li>
  <li><strong>IEDS</strong>: Iterative Elimination dominierter Strategien</li>
</ul>

<h3>Nash-Gleichgewicht (NE)</h3>
<p>Kein Spieler kann sich durch einseitige Abweichung verbessern:</p>
$$u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) \\quad \\forall s_i, \\forall i$$
<p><strong>Beste Antwort</strong>: $s_i^* = BR_i(s_{-i})$</p>
<p><strong>Unterstreichungsmethode</strong>: H&ouml;chste Auszahlung pro Spalte/Zeile unterstreichen; beidseitig unterstrichen = NE</p>

<h3>Klassische Spiele</h3>
<table border="1" cellpadding="4" style="border-collapse:collapse; text-align:center; font-size:0.9em;">
  <tr><th>Spiel</th><th>Typ</th><th>Reine NE</th></tr>
  <tr><td>Gefangenendilemma</td><td>Dominante Strategie</td><td>1 (Defektieren, Defektieren)</td></tr>
  <tr><td>Kampf der Geschlechter</td><td>Koordination</td><td>2</td></tr>
  <tr><td>Falke-Taube</td><td>Anti-Koordination</td><td>2</td></tr>
  <tr><td>Matching Pennies</td><td>Nullsumme</td><td>0 (nur gemischt)</td></tr>
</table>

<h3>Gemischte Strategien</h3>
<p><strong>Erwarteter Nutzen</strong>: $EU_i = \\sum_s \\pi(s) \\, u_i(s)$</p>
<p><strong>Methode</strong>: L&ouml;se Indifferenzbedingung &ndash; Gegner muss bei allen reinen Strategien gleichen $EU$ erhalten</p>
<p><strong>Nash-Existenzsatz</strong>: Jedes endliche Spiel hat mindestens ein NE (evtl. gemischt)</p>

<h3>Sequenzielle Spiele</h3>
<ul>
  <li><strong>Extensivform</strong>: Spielbaum mit Knoten, &Auml;sten, Informationsmengen</li>
  <li><strong>R&uuml;ckw&auml;rtsinduktion</strong>: L&ouml;se von den Endknoten r&uuml;ckw&auml;rts</li>
  <li><strong>Teilspiel</strong>: Spiel ab einem Entscheidungsknoten</li>
  <li><strong>SPE</strong>: NE in jedem Teilspiel; eliminiert unglaubw&uuml;rdige Drohungen</li>
</ul>

<h3>Wiederholte Spiele</h3>
<p><strong>Endlich wiederholt</strong>: Bei eindeutigem Stufenspiel-NE wird dieses jede Runde gespielt</p>
<p><strong>Unendlich wiederholt</strong> mit Diskontfaktor $\\delta$:</p>
<ul>
  <li>Barwert: $\\sum_{t=0}^{\\infty} \\delta^t \\pi = \\frac{\\pi}{1-\\delta}$</li>
  <li><strong>Grim-Trigger</strong>: Kooperiere, bis Gegner defektiert; dann defektiere f&uuml;r immer</li>
  <li>Kooperationsbedingung: $\\delta \\geq \\frac{\\pi^D - \\pi^C}{\\pi^D - \\pi^P}$</li>
</ul>
<p><strong>Folk-Theorem</strong>: Bei hohem $\\delta$ ist jedes Ergebnis &uuml;ber dem Minimax-Wert als GG m&ouml;glich</p>

<h3>Wichtige Formeln</h3>
<table border="1" cellpadding="4" style="border-collapse:collapse; font-size:0.9em;">
  <tr><td>NE-Definition</td><td>$u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) \\; \\forall s_i$</td></tr>
  <tr><td>Beste Antwort</td><td>$s_i^* = BR_i(s_{-i})$</td></tr>
  <tr><td>Erwarteter Nutzen</td><td>$EU_i = \\sum_s \\pi(s) u_i(s)$</td></tr>
  <tr><td>Geometrische Reihe</td><td>$\\sum_{t=0}^{\\infty} \\delta^t = \\frac{1}{1-\\delta}$</td></tr>
  <tr><td>Kooperation m&ouml;glich</td><td>$\\delta \\geq \\frac{\\pi^D - \\pi^C}{\\pi^D - \\pi^P}$</td></tr>
</table>
`,

  cheatsheetEn: `
<h2>Game Theory &ndash; Cheatsheet</h2>

<h3>Basic Concepts</h3>
<ul>
  <li><strong>Players, strategies, payoffs</strong> &ndash; three fundamental elements of every game</li>
  <li><strong>Normal form</strong>: Matrix representation with payoff pairs $(u_1, u_2)$</li>
  <li><strong>Dominant strategy</strong>: Always optimal regardless of opponent's choice</li>
  <li><strong>Dominated strategy</strong>: Always worse than some alternative</li>
  <li><strong>IEDS</strong>: Iterated elimination of dominated strategies</li>
</ul>

<h3>Nash Equilibrium (NE)</h3>
<p>No player can improve by unilateral deviation:</p>
$$u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) \\quad \\forall s_i, \\forall i$$
<p><strong>Best response</strong>: $s_i^* = BR_i(s_{-i})$</p>
<p><strong>Underline method</strong>: Underline highest payoff per column/row; both underlined = NE</p>

<h3>Classic Games</h3>
<table border="1" cellpadding="4" style="border-collapse:collapse; text-align:center; font-size:0.9em;">
  <tr><th>Game</th><th>Type</th><th>Pure NE</th></tr>
  <tr><td>Prisoner's Dilemma</td><td>Dominant strategy</td><td>1 (Defect, Defect)</td></tr>
  <tr><td>Battle of the Sexes</td><td>Coordination</td><td>2</td></tr>
  <tr><td>Hawk-Dove</td><td>Anti-coordination</td><td>2</td></tr>
  <tr><td>Matching Pennies</td><td>Zero-sum</td><td>0 (mixed only)</td></tr>
</table>

<h3>Mixed Strategies</h3>
<p><strong>Expected utility</strong>: $EU_i = \\sum_s \\pi(s) \\, u_i(s)$</p>
<p><strong>Method</strong>: Solve indifference condition &ndash; opponent must get equal $EU$ from all pure strategies</p>
<p><strong>Nash existence theorem</strong>: Every finite game has at least one NE (possibly mixed)</p>

<h3>Sequential Games</h3>
<ul>
  <li><strong>Extensive form</strong>: Game tree with nodes, branches, information sets</li>
  <li><strong>Backward induction</strong>: Solve from terminal nodes backward</li>
  <li><strong>Subgame</strong>: Game starting from a decision node</li>
  <li><strong>SPE</strong>: NE in every subgame; eliminates incredible threats</li>
</ul>

<h3>Repeated Games</h3>
<p><strong>Finitely repeated</strong>: With unique stage game NE, it is played every round</p>
<p><strong>Infinitely repeated</strong> with discount factor $\\delta$:</p>
<ul>
  <li>Present value: $\\sum_{t=0}^{\\infty} \\delta^t \\pi = \\frac{\\pi}{1-\\delta}$</li>
  <li><strong>Grim trigger</strong>: Cooperate until opponent defects; then defect forever</li>
  <li>Cooperation condition: $\\delta \\geq \\frac{\\pi^D - \\pi^C}{\\pi^D - \\pi^P}$</li>
</ul>
<p><strong>Folk theorem</strong>: With high $\\delta$, any outcome above minimax value is sustainable as NE</p>

<h2>Further Reading (Varian)</h2>
<ul>
<li><strong>Chapter 29: Game Theory</strong> (pp. 597&ndash;613) &ndash; Payoff matrices, dominant strategies, Nash equilibrium in pure and mixed strategies; classic examples including the Prisoner's Dilemma and Rock-Paper-Scissors.</li>
<li><strong>Chapter 30: Applications of Game Theory</strong> (pp. 615&ndash;645) &ndash; Best response curves, coordination games (Battle of the Sexes, Assurance Game, Chicken), sequential games with backward induction and commitment, and repeated games with grim trigger strategies.</li>
</ul>

<h3>Key Formulas</h3>
<table border="1" cellpadding="4" style="border-collapse:collapse; font-size:0.9em;">
  <tr><td>NE definition</td><td>$u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) \\; \\forall s_i$</td></tr>
  <tr><td>Best response</td><td>$s_i^* = BR_i(s_{-i})$</td></tr>
  <tr><td>Expected utility</td><td>$EU_i = \\sum_s \\pi(s) u_i(s)$</td></tr>
  <tr><td>Geometric series</td><td>$\\sum_{t=0}^{\\infty} \\delta^t = \\frac{1}{1-\\delta}$</td></tr>
  <tr><td>Cooperation possible</td><td>$\\delta \\geq \\frac{\\pi^D - \\pi^C}{\\pi^D - \\pi^P}$</td></tr>
</table>
`,
}
