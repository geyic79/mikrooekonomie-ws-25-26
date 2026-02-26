import type { Subject } from '@/data/types'

export const verhaltensoekonomie: Subject = {
  id: 'verhaltensoekonomie',
  titleDe: 'Verhaltensökonomie',
  titleEn: 'Behavioral Economics',
  shortDescDe: 'Framing, Verlustaversion, Zeitinkonsistenz, Prospect Theory und Overconfidence',
  shortDescEn: 'Framing, loss aversion, time inconsistency, prospect theory and overconfidence',
  color: '#f7a88c',
  icon: '\u{1F9E0}',
  videoLinks: [
    {
      titleDe: 'Verhaltensökonomie 1',
      titleEn: 'Behavioral Economics 1',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1716708',
    },
    {
      titleDe: 'Verhaltensökonomie 2',
      titleEn: 'Behavioral Economics 2',
      url: 'https://moodle.tu-darmstadt.de/mod/lti/view.php?id=1718240',
    },
  ],

  summaryDe: `
<h2>Verhaltens&ouml;konomie &ndash; Zusammenfassung</h2>
<p>Dieses Kapitel behandelt systematische Abweichungen menschlichen Verhaltens von den Vorhersagen der neoklassischen &Ouml;konomie. Im Mittelpunkt stehen kognitive Verzerrungen (Biases), die Prospect Theory, intertemporale Inkonsistenzen und Overconfidence (Varian Kap.&nbsp;10, 12, 31).</p>

<h3>1. Framing</h3>
<p>Kahneman &amp; Tversky zeigten, dass die <em>gleiche</em> Information bei unterschiedlicher Pr&auml;sentation zu unterschiedlichen Entscheidungen f&uuml;hrt.</p>
<ul>
  <li><strong>Asian-Disease-Problem:</strong> 600 Menschen sind von einer Krankheit bedroht.
    <ul>
      <li><em>Positiver Frame:</em> &bdquo;200 Menschen werden gerettet&ldquo; (sicher) vs. &bdquo;1/3 Chance, dass alle 600 gerettet werden&ldquo; &rarr; Mehrheit w&auml;hlt die sichere Option (<strong>Risikoaversion</strong>).</li>
      <li><em>Negativer Frame:</em> &bdquo;400 Menschen sterben&ldquo; (sicher) vs. &bdquo;2/3 Chance, dass alle 600 sterben&ldquo; &rarr; Mehrheit w&auml;hlt die riskante Option (<strong>Risikofreude</strong>).</li>
    </ul>
  </li>
  <li><strong>Implikation:</strong> Die Art der Informationspr&auml;sentation ver&auml;ndert Entscheidungen fundamental &ndash; ein Versto&szlig; gegen die Invarianz-Annahme der rationalen Wahl.</li>
</ul>

<h3>2. Endowment-Effekt</h3>
<p>Kahneman, Knetsch &amp; Thaler (1990) untersuchten den Besitztumseffekt im ber&uuml;hmten <strong>Cornell-Tassen-Experiment</strong>.</p>
<ul>
  <li>Studierende erhielten zuf&auml;llig Tassen; nur ca.&nbsp;<strong>20&nbsp;%</strong> der Tassen wurden gehandelt.</li>
  <li><strong>WTA (Willingness to Accept)</strong> &ndash; die Mindestforderung der Besitzer &ndash; lag deutlich &uuml;ber der <strong>WTP (Willingness to Pay)</strong> der Nicht-Besitzer.</li>
  <li>Dies verletzt die Standardannahme, dass Indifferenzkurven unabh&auml;ngig vom Besitzstatus sind.</li>
  <li><strong>Erkl&auml;rung:</strong> Die Verlustaversion l&auml;sst den Verlust eines Gutes st&auml;rker wiegen als den entgangenen Gewinn desselben Gutes.</li>
</ul>

<h3>3. Verlustaversion (Loss Aversion)</h3>
<p>Verluste wiegen psychologisch schwerer als gleich gro&szlig;e Gewinne.</p>
<ul>
  <li><strong>Referenzpunktabh&auml;ngigkeit:</strong> Gewinne und Verluste werden relativ zu einem Referenzpunkt bewertet, nicht absolut.</li>
  <li><strong>Asymmetrie:</strong> Der Nutzenverlust bei einer Einbu&szlig;e von $x$ ist gr&ouml;&szlig;er als der Nutzengewinn bei einem Zugewinn von $x$.</li>
  <li><strong>Anwendungen:</strong>
    <ul>
      <li>Geld-zur&uuml;ck-Garantien (Risikoreduktion f&uuml;r den K&auml;ufer)</li>
      <li>Gratis-Testabonnements (Endowment-Effekt nach Ablauf)</li>
      <li>Marktineffizienzen (z.&nbsp;B. Disposition Effect bei Aktien)</li>
    </ul>
  </li>
</ul>

<h3>4. Ankereffekte (Anchoring)</h3>
<p>Ein vorab pr&auml;sentierter Wert beeinflusst nachfolgende numerische Sch&auml;tzungen systematisch.</p>
<ul>
  <li><strong>Tversky &amp; Kahneman (1974):</strong> Ein Gl&uuml;cksrad (10 oder 65) beeinflusste die Sch&auml;tzung des Anteils afrikanischer L&auml;nder in den UN.</li>
  <li><strong>Englich et al. (2006):</strong> Selbst W&uuml;rfelw&uuml;rfe beeinflussten die Strafma&szlig;e erfahrener Richter.</li>
  <li><strong>Ausnutzung:</strong> Luxusartikel auf Bootsmessen, unverbindliche Preisempfehlungen (UVP), hohe Erstforderungen in Verhandlungen.</li>
</ul>

<h3>5. Intertemporale Entscheidungen</h3>
<p>Wie bewerten Menschen Konsum zu verschiedenen Zeitpunkten?</p>
<ul>
  <li><strong>Budgetrestriktion mit Kapitalmarkt:</strong> $$c_1 + \\frac{c_2}{1+r} = m_1 + \\frac{m_2}{1+r}$$
  Der Barwert des Konsums muss dem Barwert des Einkommens entsprechen.</li>
  <li><strong>Exponentielles Diskontieren (Standardmodell):</strong>
    <p>Der Diskontfaktor $\\delta \\in (0,1)$ ist in jeder Periode gleich:</p>
    $$MRS_{c_1,c_2} = \\delta \\cdot \\frac{MU(c_2)}{MU(c_1)}$$
    <p>Dies f&uuml;hrt zu <strong>zeitkonsistenten</strong> Pr&auml;ferenzen: Ein Plan, der heute optimal ist, bleibt auch morgen optimal.</p>
  </li>
  <li><strong>Hyperbolisches Diskontieren:</strong>
    $$U = \\sum_{t=1}^{\\infty} \\frac{1}{1+k(t-1)}\\, u(c_t)$$
    <p>Mit $k=1$ ergeben sich Gewichte $1,\\; 1/2,\\; 1/3,\\; 1/4, \\ldots$ statt $1,\\; \\delta,\\; \\delta^2,\\; \\delta^3, \\ldots$</p>
    <p>Entscheidend: $1/3 > (1/2)^2 = 1/4$ &ndash; zuk&uuml;nftige Perioden werden <em>relativ zueinander</em> weniger stark diskontiert als beim exponentiellen Modell.</p>
  </li>
  <li><strong>Present Bias:</strong> Unmittelbare Belohnungen werden &uuml;berproportional stark gewichtet (Gegenwartsfehler).</li>
  <li><strong>Konsequenzen:</strong> Zu geringes Sparen, mangelnde Altersvorsorge, unzureichende Klimapolitik.</li>
  <li><strong>Selbstbindung (Commitment Devices):</strong> ETF-Sparpl&auml;ne, betriebliche Altersvorsorge, gesetzliche Rentenversicherung.</li>
</ul>

<div class="interactive-widget"><button class="widget-fullscreen-btn" title="Fullscreen">&#x26F6;</button><button class="widget-exit-fullscreen-btn">&#x2190; Back</button><div class="interactive-widget-title">Interaktives Tool: Diskontfaktoren (exponentiell vs. hyperbolisch)</div><iframe src="https://tuda-mikro.org/lecture_08/lecture_08.html#decay-plot" loading="lazy" title="Interaktives Diagramm zu Diskontfaktoren"></iframe></div>

<h3>6. Entscheidungen unter Unsicherheit</h3>
<p>Das Standardmodell der Erwartungsnutzentheorie und seine Grenzen.</p>
<ul>
  <li><strong>Erwartungswert einer Lotterie:</strong> $$E[L] = \\sum_s \\pi_s\\, c_s$$</li>
  <li><strong>Von-Neumann-Morgenstern-Nutzen:</strong> $$U(L) = \\sum_s \\pi_s\\, u(c_s)$$</li>
  <li><strong>Risikoneigungen &uuml;ber die Kr&uuml;mmung von $u$:</strong>
    <ul>
      <li><em>Risikoavers:</em> $u$ konkav, $u(E[L]) > E[u(L)]$ &ndash; der sichere Erwartungswert wird der Lotterie vorgezogen.</li>
      <li><em>Risikoneutral:</em> $u$ linear, $u(E[L]) = E[u(L)]$.</li>
      <li><em>Risikofreudig:</em> $u$ konvex, $u(E[L]) < E[u(L)]$.</li>
    </ul>
  </li>
  <li><strong>Beispiel:</strong> $u(c) = \\sqrt{c}$, Lotterie $\\{1,\\, 9\\}$ mit gleichen Wahrscheinlichkeiten:
    $$E[u(L)] = 0{,}5 \\cdot \\sqrt{1} + 0{,}5 \\cdot \\sqrt{9} = 0{,}5 \\cdot 1 + 0{,}5 \\cdot 3 = 2$$
    $$u(E[L]) = \\sqrt{0{,}5 \\cdot 1 + 0{,}5 \\cdot 9} = \\sqrt{5} \\approx 2{,}24$$
    Da $u(E[L]) > E[u(L)]$, ist die Person risikoavers.</li>
</ul>

<h3>7. Prospect Theory (Kahneman &amp; Tversky, 1979)</h3>
<p>Die Prospect Theory ist die wichtigste deskriptive Alternative zur Erwartungsnutzentheorie.</p>
<ul>
  <li><strong>Zwei Phasen:</strong>
    <ol>
      <li><em>Editing:</em> Ergebnisse werden relativ zum Referenzpunkt als Gewinne oder Verluste kodiert.</li>
      <li><em>Evaluation:</em> Die bearbeitete Lotterie wird bewertet.</li>
    </ol>
  </li>
  <li><strong>Bewertungsfunktion:</strong> $$V(L) = \\sum_s p(\\pi_s)\\, v(c_s)$$
    Wobei $p(\\pi_s)$ die Wahrscheinlichkeitsgewichtungsfunktion und $v(c_s)$ die Wertfunktion ist.</li>
  <li><strong>Wahrscheinlichkeitsgewichte $p(\\pi)$:</strong>
    <ul>
      <li>Kleine Wahrscheinlichkeiten werden &uuml;bergewichtet: $p(\\pi) > \\pi$ f&uuml;r kleine $\\pi$.</li>
      <li>Gro&szlig;e Wahrscheinlichkeiten werden untergewichtet: $p(\\pi) < \\pi$ f&uuml;r gro&szlig;e $\\pi$.</li>
    </ul>
  </li>
  <li><strong>Wertfunktion $v$:</strong>
    <ul>
      <li>Konkav f&uuml;r Gewinne (Risikoaversion im Gewinnbereich).</li>
      <li>Konvex f&uuml;r Verluste (Risikofreude im Verlustbereich).</li>
      <li>Steiler im Verlustbereich als im Gewinnbereich (Verlustaversion).</li>
    </ul>
  </li>
  <li><strong>Referenzpunktabh&auml;ngigkeit:</strong> Der Nutzen h&auml;ngt nicht vom absoluten Niveau, sondern von der Ver&auml;nderung relativ zum Referenzpunkt ab.</li>
  <li><strong>Linda-Problem:</strong> Konjunktionsfehler &ndash; $P(A \\cap B) \\leq P(A)$ wird verletzt, wenn eine detaillierte Beschreibung &bdquo;repr&auml;sentativer&ldquo; erscheint (Repr&auml;sentativit&auml;tsheuristik).</li>
</ul>

<h3>8. Overconfidence (Selbst&uuml;bersch&auml;tzung)</h3>
<p>Systematische &Uuml;bersch&auml;tzung eigener F&auml;higkeiten und Urteile.</p>
<ul>
  <li><strong>Overestimation:</strong> &Uuml;bersch&auml;tzung eigener F&auml;higkeiten &ndash; Dunning-Kruger-Effekt: Personen mit geringer Kompetenz &uuml;bersch&auml;tzen sich am st&auml;rksten.</li>
  <li><strong>Overplacement:</strong> &Uuml;berzeugung, &uuml;berdurchschnittlich zu sein &ndash; Svenson (1981): 93&nbsp;% der US-Autofahrer sch&auml;tzen sich als &uuml;berdurchschnittlich ein.</li>
  <li><strong>Overprecision:</strong> Zu enge Konfidenzintervalle bei Vorhersagen.</li>
  <li><strong>Finanzmarkteffekte:</strong> Barber &amp; Odean (2001): M&auml;nner handeln 45&nbsp;% mehr als Frauen; Rendite: M&auml;nner $-2{,}65\\%$, Frauen $-1{,}72\\%$ (netto, durch &uuml;berm&auml;&szlig;iges Trading).</li>
  <li><strong>Weitere Folgen:</strong> Exzessives Trading, unternehmerische &Uuml;beroptimismus-Blasen, zu riskante Projektauswahl.</li>
</ul>

<h3>9. Weitere Verzerrungen</h3>
<ul>
  <li><strong>Sunk-Cost-Fallacy:</strong> Bereits versunkene Kosten beeinflussen Entscheidungen, obwohl sie irrelevant sein sollten (Concorde-Beispiel).</li>
  <li><strong>Choice Overload / Entscheidungsm&uuml;digkeit:</strong> Zu viele Optionen f&uuml;hren zu schlechteren Entscheidungen oder Entscheidungsvermeidung.</li>
  <li><strong>Altruismus und soziale Pr&auml;ferenzen:</strong> Menschen verhalten sich nicht rein eigenn&uuml;tzig &ndash; Fairness und Reziprozit&auml;t spielen eine Rolle.</li>
  <li><strong>Soziale Normen und Reziprozit&auml;t:</strong> Ultimatumspiele zeigen, dass unfaire Angebote abgelehnt werden, auch wenn dies &ouml;konomisch irrational ist.</li>
</ul>

<h2>Weiterf&uuml;hrende Lekt&uuml;re (Varian)</h2>
<ul>
<li><strong>Kapitel 10: Intertemporale Entscheidung</strong> (S. 199&ndash;221) &ndash; Intertemporale Budgetbeschr&auml;nkung mit Gegenwarts- und Zukunftswerten, Sparen und Kreditaufnahme bei verschiedenen Zinss&auml;tzen &ndash; die neoklassische Grundlage, von der hyperbolisches Diskontieren abweicht.</li>
<li><strong>Kapitel 12: Unsicherheit</strong> (S. 239&ndash;259) &ndash; Bedingter Konsum, Von-Neumann-Morgenstern-Erwartungsnutzen und Risikopr&auml;ferenzen (risikoavers, -neutral, -freudig) &ndash; das Standardmodell, das die Prospect Theory in Frage stellt.</li>
<li><strong>Kapitel 31: Verhaltensorientierte &Ouml;konomie</strong> (S. 647&ndash;663) &ndash; Framing-Effekte (Krankheitsdilemma), Ankereffekte (Gl&uuml;cksrad-Experiment), Gesetz der kleinen Zahlen, konstruierte Pr&auml;ferenzen und die Grenzen rationaler Entscheidungstheorie.</li>
</ul>
`,

  summaryEn: `
<h2>Behavioral Economics &ndash; Summary</h2>
<p>This chapter covers systematic deviations of human behavior from the predictions of neoclassical economics. The focus is on cognitive biases, Prospect Theory, intertemporal inconsistencies and overconfidence (Varian Ch.&nbsp;10, 12, 31).</p>

<h3>1. Framing</h3>
<p>Kahneman &amp; Tversky showed that the <em>same</em> information presented differently leads to different choices.</p>
<ul>
  <li><strong>Asian disease problem:</strong> 600 people are threatened by a disease.
    <ul>
      <li><em>Positive frame:</em> &ldquo;200 people will be saved&rdquo; (certain) vs. &ldquo;1/3 chance all 600 are saved&rdquo; &rarr; majority chooses the certain option (<strong>risk aversion</strong>).</li>
      <li><em>Negative frame:</em> &ldquo;400 people will die&rdquo; (certain) vs. &ldquo;2/3 chance all 600 die&rdquo; &rarr; majority chooses the risky option (<strong>risk seeking</strong>).</li>
    </ul>
  </li>
  <li><strong>Implication:</strong> The way information is presented fundamentally changes decisions &ndash; a violation of the invariance assumption of rational choice.</li>
</ul>

<h3>2. Endowment Effect</h3>
<p>Kahneman, Knetsch &amp; Thaler (1990) investigated the endowment effect in the famous <strong>Cornell mug experiment</strong>.</p>
<ul>
  <li>Students were randomly given mugs; only about <strong>20%</strong> of mugs were traded.</li>
  <li><strong>WTA (Willingness to Accept)</strong> &ndash; the minimum price demanded by owners &ndash; was significantly higher than the <strong>WTP (Willingness to Pay)</strong> of non-owners.</li>
  <li>This violates the standard assumption that indifference curves are independent of ownership status.</li>
  <li><strong>Explanation:</strong> Loss aversion makes the loss of a good weigh more heavily than the foregone gain of the same good.</li>
</ul>

<h3>3. Loss Aversion</h3>
<p>Losses loom larger than equivalent gains.</p>
<ul>
  <li><strong>Reference point dependence:</strong> Gains and losses are evaluated relative to a reference point, not in absolute terms.</li>
  <li><strong>Asymmetry:</strong> The utility loss from losing $x$ exceeds the utility gain from gaining $x$.</li>
  <li><strong>Applications:</strong>
    <ul>
      <li>Money-back guarantees (risk reduction for the buyer)</li>
      <li>Free trial subscriptions (endowment effect after expiry)</li>
      <li>Market inefficiencies (e.g., disposition effect in stocks)</li>
    </ul>
  </li>
</ul>

<h3>4. Anchoring</h3>
<p>A previously presented value systematically influences subsequent numerical estimates.</p>
<ul>
  <li><strong>Tversky &amp; Kahneman (1974):</strong> A spinning wheel (10 or 65) influenced estimates of the percentage of African countries in the UN.</li>
  <li><strong>Englich et al. (2006):</strong> Even dice rolls influenced sentencing decisions by experienced judges.</li>
  <li><strong>Exploitation:</strong> Luxury items at boat shows, suggested retail prices, high opening demands in negotiations.</li>
</ul>

<h3>5. Intertemporal Decisions</h3>
<p>How do people evaluate consumption at different points in time?</p>
<ul>
  <li><strong>Budget constraint with capital markets:</strong> $$c_1 + \\frac{c_2}{1+r} = m_1 + \\frac{m_2}{1+r}$$
  The present value of consumption must equal the present value of income.</li>
  <li><strong>Exponential discounting (standard model):</strong>
    <p>The discount factor $\\delta \\in (0,1)$ is constant across periods:</p>
    $$MRS_{c_1,c_2} = \\delta \\cdot \\frac{MU(c_2)}{MU(c_1)}$$
    <p>This yields <strong>time-consistent</strong> preferences: a plan that is optimal today remains optimal tomorrow.</p>
  </li>
  <li><strong>Hyperbolic discounting:</strong>
    $$U = \\sum_{t=1}^{\\infty} \\frac{1}{1+k(t-1)}\\, u(c_t)$$
    <p>With $k=1$, the weights are $1,\\; 1/2,\\; 1/3,\\; 1/4, \\ldots$ instead of $1,\\; \\delta,\\; \\delta^2,\\; \\delta^3, \\ldots$</p>
    <p>Key insight: $1/3 > (1/2)^2 = 1/4$ &ndash; future periods are discounted <em>less relative to each other</em> than under exponential discounting.</p>
  </li>
  <li><strong>Present bias:</strong> Immediate rewards are disproportionately overweighted.</li>
  <li><strong>Consequences:</strong> Undersaving, inadequate retirement planning, insufficient climate action.</li>
  <li><strong>Commitment devices:</strong> Automatic savings plans (ETFs), employer pension schemes, mandatory public pensions.</li>
</ul>

<div class="interactive-widget"><button class="widget-fullscreen-btn" title="Fullscreen">&#x26F6;</button><button class="widget-exit-fullscreen-btn">&#x2190; Back</button><div class="interactive-widget-title">Interactive Tool: Discount Factors (exponential vs. hyperbolic)</div><iframe src="https://tuda-mikro.org/lecture_08/lecture_08.html#decay-plot" loading="lazy" title="Interactive diagram for discount factors"></iframe></div>

<h3>6. Decisions Under Uncertainty</h3>
<p>The standard expected utility model and its limits.</p>
<ul>
  <li><strong>Expected value of a lottery:</strong> $$E[L] = \\sum_s \\pi_s\\, c_s$$</li>
  <li><strong>Von Neumann&ndash;Morgenstern utility:</strong> $$U(L) = \\sum_s \\pi_s\\, u(c_s)$$</li>
  <li><strong>Risk preferences via the curvature of $u$:</strong>
    <ul>
      <li><em>Risk averse:</em> $u$ concave, $u(E[L]) > E[u(L)]$ &ndash; the certain expected value is preferred to the lottery.</li>
      <li><em>Risk neutral:</em> $u$ linear, $u(E[L]) = E[u(L)]$.</li>
      <li><em>Risk seeking:</em> $u$ convex, $u(E[L]) < E[u(L)]$.</li>
    </ul>
  </li>
  <li><strong>Example:</strong> $u(c) = \\sqrt{c}$, lottery $\\{1,\\, 9\\}$ with equal probabilities:
    $$E[u(L)] = 0.5 \\cdot \\sqrt{1} + 0.5 \\cdot \\sqrt{9} = 0.5 \\cdot 1 + 0.5 \\cdot 3 = 2$$
    $$u(E[L]) = \\sqrt{0.5 \\cdot 1 + 0.5 \\cdot 9} = \\sqrt{5} \\approx 2.24$$
    Since $u(E[L]) > E[u(L)]$, the person is risk averse.</li>
</ul>

<h3>7. Prospect Theory (Kahneman &amp; Tversky, 1979)</h3>
<p>Prospect Theory is the most important descriptive alternative to expected utility theory.</p>
<ul>
  <li><strong>Two stages:</strong>
    <ol>
      <li><em>Editing:</em> Outcomes are coded as gains or losses relative to the reference point.</li>
      <li><em>Evaluation:</em> The edited lottery is evaluated.</li>
    </ol>
  </li>
  <li><strong>Evaluation function:</strong> $$V(L) = \\sum_s p(\\pi_s)\\, v(c_s)$$
    where $p(\\pi_s)$ is the probability weighting function and $v(c_s)$ is the value function.</li>
  <li><strong>Probability weights $p(\\pi)$:</strong>
    <ul>
      <li>Small probabilities are overweighted: $p(\\pi) > \\pi$ for small $\\pi$.</li>
      <li>Large probabilities are underweighted: $p(\\pi) < \\pi$ for large $\\pi$.</li>
    </ul>
  </li>
  <li><strong>Value function $v$:</strong>
    <ul>
      <li>Concave for gains (risk aversion in the gain domain).</li>
      <li>Convex for losses (risk seeking in the loss domain).</li>
      <li>Steeper for losses than for gains (loss aversion).</li>
    </ul>
  </li>
  <li><strong>Reference point dependence:</strong> Utility depends not on the absolute level but on changes relative to the reference point.</li>
  <li><strong>Linda problem:</strong> Conjunction fallacy &ndash; $P(A \\cap B) \\leq P(A)$ is violated when a detailed description seems more &ldquo;representative&rdquo; (representativeness heuristic).</li>
</ul>

<h3>8. Overconfidence</h3>
<p>Systematic overestimation of one&rsquo;s own abilities and judgments.</p>
<ul>
  <li><strong>Overestimation:</strong> Overestimating own abilities &ndash; Dunning&ndash;Kruger effect: those with the least competence overestimate themselves the most.</li>
  <li><strong>Overplacement:</strong> Belief that one is above average &ndash; Svenson (1981): 93% of US drivers rate themselves as above-average.</li>
  <li><strong>Overprecision:</strong> Excessively narrow confidence intervals in predictions.</li>
  <li><strong>Financial market effects:</strong> Barber &amp; Odean (2001): men trade 45% more than women; net returns: men $-2.65\\%$, women $-1.72\\%$ (due to excessive trading).</li>
  <li><strong>Further consequences:</strong> Excessive trading, entrepreneurial over-optimism bubbles, overly risky project selection.</li>
</ul>

<h3>9. Additional Biases</h3>
<ul>
  <li><strong>Sunk cost fallacy:</strong> Already sunk costs influence decisions even though they should be irrelevant (Concorde example).</li>
  <li><strong>Choice overload / decision fatigue:</strong> Too many options lead to worse decisions or decision avoidance.</li>
  <li><strong>Altruism and social preferences:</strong> People do not behave purely selfishly &ndash; fairness and reciprocity play a role.</li>
  <li><strong>Social norms and reciprocity:</strong> Ultimatum games show that unfair offers are rejected even when this is economically irrational.</li>
</ul>

<h2>Further Reading (Varian)</h2>
<ul>
<li><strong>Chapter 10: Intertemporal Choice</strong> (pp. 199&ndash;221) &ndash; Intertemporal budget constraint with present and future values, saving and borrowing at different interest rates &ndash; the neoclassical foundation from which hyperbolic discounting departs.</li>
<li><strong>Chapter 12: Uncertainty</strong> (pp. 239&ndash;259) &ndash; Contingent consumption, Von Neumann-Morgenstern expected utility and risk preferences (risk-averse, -neutral, -seeking) &ndash; the standard model that Prospect Theory challenges.</li>
<li><strong>Chapter 31: Behavioral Economics</strong> (pp. 647&ndash;663) &ndash; Framing effects (disease dilemma), anchoring effects (spinning wheel experiment), the law of small numbers, constructed preferences and the limits of rational choice theory.</li>
</ul>
`,

  cheatsheetDe: `
<h2>Verhaltens&ouml;konomie &ndash; Cheatsheet</h2>

<h3>Framing &amp; Endowment-Effekt</h3>
<table>
  <tr><td>Framing</td><td>Gleiche Info, andere Pr&auml;sentation &rarr; andere Wahl</td></tr>
  <tr><td>Asian Disease</td><td>Positiver Frame &rarr; Risikoaversion; negativer Frame &rarr; Risikofreude</td></tr>
  <tr><td>Endowment-Effekt</td><td>$WTA \\gg WTP$; Besitz erh&ouml;ht subjektiven Wert</td></tr>
  <tr><td>Ankereffekt</td><td>Vorab-Wert beeinflusst Sch&auml;tzungen systematisch</td></tr>
</table>

<h3>Verlustaversion</h3>
<table>
  <tr><td>Kernidee</td><td>Verluste wiegen st&auml;rker als gleich gro&szlig;e Gewinne</td></tr>
  <tr><td>Referenzpunkt</td><td>Bewertung relativ zum Status quo</td></tr>
  <tr><td>Anwendungen</td><td>Geld-zur&uuml;ck-Garantien, Testabos, Disposition Effect</td></tr>
</table>

<h3>Intertemporale Entscheidungen</h3>
<table>
  <tr><td>Budget (Kapitalmarkt)</td><td>$c_1 + \\frac{c_2}{1+r} = m_1 + \\frac{m_2}{1+r}$</td></tr>
  <tr><td>Expon. Diskontieren</td><td>$MRS = \\delta \\cdot \\frac{MU(c_2)}{MU(c_1)}$ &rarr; zeitkonsistent</td></tr>
  <tr><td>Hyperb. Diskontieren</td><td>$U = \\sum \\frac{1}{1+k(t-1)} u(c_t)$; Gewichte $1, 1/2, 1/3, \\ldots$</td></tr>
  <tr><td>Present Bias</td><td>$1/3 > (1/2)^2$ &rarr; Zukunft relativ weniger diskontiert</td></tr>
  <tr><td>Selbstbindung</td><td>ETF-Sparplan, Betriebsrente, gesetzliche Rente</td></tr>
</table>

<h3>Unsicherheit &amp; Erwartungsnutzen</h3>
<table>
  <tr><td>Erwartungswert</td><td>$E[L] = \\sum_s \\pi_s c_s$</td></tr>
  <tr><td>vNM-Nutzen</td><td>$U(L) = \\sum_s \\pi_s u(c_s)$</td></tr>
  <tr><td>Risikoavers</td><td>$u$ konkav, $u(E[L]) > E[u(L)]$</td></tr>
  <tr><td>Risikoneutral</td><td>$u$ linear, $u(E[L]) = E[u(L)]$</td></tr>
  <tr><td>Risikofreudig</td><td>$u$ konvex, $u(E[L]) < E[u(L)]$</td></tr>
</table>

<h3>Prospect Theory</h3>
<table>
  <tr><td>Phasen</td><td>1. Editing (Kodierung) + 2. Evaluation (Bewertung)</td></tr>
  <tr><td>Bewertung</td><td>$V(L) = \\sum_s p(\\pi_s) v(c_s)$</td></tr>
  <tr><td>Gewichtung $p(\\pi)$</td><td>Kleine $\\pi$ &uuml;bergewichtet, gro&szlig;e $\\pi$ untergewichtet</td></tr>
  <tr><td>Wertfunktion $v$</td><td>Konkav (Gewinne), konvex (Verluste), steiler bei Verlusten</td></tr>
  <tr><td>Linda-Problem</td><td>$P(A \\cap B) \\leq P(A)$ verletzt &rarr; Repr&auml;sentativit&auml;tsheuristik</td></tr>
</table>

<h3>Overconfidence</h3>
<table>
  <tr><td>Overestimation</td><td>&Uuml;bersch&auml;tzung eigener F&auml;higkeiten (Dunning-Kruger)</td></tr>
  <tr><td>Overplacement</td><td>93&nbsp;% halten sich f&uuml;r &uuml;berdurchschnittl. Fahrer (Svenson)</td></tr>
  <tr><td>Overprecision</td><td>Zu enge Konfidenzintervalle</td></tr>
  <tr><td>Finanzm&auml;rkte</td><td>M&auml;nner: 45&nbsp;% mehr Trading, $-2{,}65\\%$ vs. $-1{,}72\\%$ (Barber &amp; Odean)</td></tr>
</table>

<h3>Weitere Verzerrungen</h3>
<table>
  <tr><td>Sunk-Cost-Fallacy</td><td>Versunkene Kosten beeinflussen Entscheidungen (Concorde)</td></tr>
  <tr><td>Choice Overload</td><td>Zu viele Optionen &rarr; schlechtere Entscheidungen</td></tr>
  <tr><td>Soziale Pr&auml;ferenzen</td><td>Altruismus, Fairness, Reziprozit&auml;t</td></tr>
  <tr><td>Ultimatumspiel</td><td>Unfaire Angebote werden abgelehnt</td></tr>
</table>
`,

  cheatsheetEn: `
<h2>Behavioral Economics &ndash; Cheatsheet</h2>

<h3>Framing &amp; Endowment Effect</h3>
<table>
  <tr><td>Framing</td><td>Same info, different presentation &rarr; different choice</td></tr>
  <tr><td>Asian disease</td><td>Positive frame &rarr; risk aversion; negative frame &rarr; risk seeking</td></tr>
  <tr><td>Endowment effect</td><td>$WTA \\gg WTP$; ownership raises subjective value</td></tr>
  <tr><td>Anchoring</td><td>Prior value systematically shifts estimates</td></tr>
</table>

<h3>Loss Aversion</h3>
<table>
  <tr><td>Core idea</td><td>Losses loom larger than equivalent gains</td></tr>
  <tr><td>Reference point</td><td>Evaluation relative to the status quo</td></tr>
  <tr><td>Applications</td><td>Money-back guarantees, trial subs, disposition effect</td></tr>
</table>

<h3>Intertemporal Decisions</h3>
<table>
  <tr><td>Budget (capital mkt)</td><td>$c_1 + \\frac{c_2}{1+r} = m_1 + \\frac{m_2}{1+r}$</td></tr>
  <tr><td>Expon. discounting</td><td>$MRS = \\delta \\cdot \\frac{MU(c_2)}{MU(c_1)}$ &rarr; time consistent</td></tr>
  <tr><td>Hyperb. discounting</td><td>$U = \\sum \\frac{1}{1+k(t-1)} u(c_t)$; weights $1, 1/2, 1/3, \\ldots$</td></tr>
  <tr><td>Present bias</td><td>$1/3 > (1/2)^2$ &rarr; future discounted less relative to each other</td></tr>
  <tr><td>Commitment devices</td><td>Auto savings plans, employer pensions, mandatory pensions</td></tr>
</table>

<h3>Uncertainty &amp; Expected Utility</h3>
<table>
  <tr><td>Expected value</td><td>$E[L] = \\sum_s \\pi_s c_s$</td></tr>
  <tr><td>vNM utility</td><td>$U(L) = \\sum_s \\pi_s u(c_s)$</td></tr>
  <tr><td>Risk averse</td><td>$u$ concave, $u(E[L]) > E[u(L)]$</td></tr>
  <tr><td>Risk neutral</td><td>$u$ linear, $u(E[L]) = E[u(L)]$</td></tr>
  <tr><td>Risk seeking</td><td>$u$ convex, $u(E[L]) < E[u(L)]$</td></tr>
</table>

<h3>Prospect Theory</h3>
<table>
  <tr><td>Stages</td><td>1. Editing (coding) + 2. Evaluation</td></tr>
  <tr><td>Evaluation</td><td>$V(L) = \\sum_s p(\\pi_s) v(c_s)$</td></tr>
  <tr><td>Weighting $p(\\pi)$</td><td>Small $\\pi$ overweighted, large $\\pi$ underweighted</td></tr>
  <tr><td>Value function $v$</td><td>Concave (gains), convex (losses), steeper for losses</td></tr>
  <tr><td>Linda problem</td><td>$P(A \\cap B) \\leq P(A)$ violated &rarr; representativeness heuristic</td></tr>
</table>

<h3>Overconfidence</h3>
<table>
  <tr><td>Overestimation</td><td>Overestimate own abilities (Dunning-Kruger)</td></tr>
  <tr><td>Overplacement</td><td>93% think they are above-average drivers (Svenson)</td></tr>
  <tr><td>Overprecision</td><td>Excessively narrow confidence intervals</td></tr>
  <tr><td>Financial markets</td><td>Men: 45% more trading, $-2.65\\%$ vs. $-1.72\\%$ (Barber &amp; Odean)</td></tr>
</table>

<h3>Additional Biases</h3>
<table>
  <tr><td>Sunk cost fallacy</td><td>Sunk costs influence decisions (Concorde)</td></tr>
  <tr><td>Choice overload</td><td>Too many options &rarr; worse decisions</td></tr>
  <tr><td>Social preferences</td><td>Altruism, fairness, reciprocity</td></tr>
  <tr><td>Ultimatum game</td><td>Unfair offers are rejected</td></tr>
</table>
`,
}
