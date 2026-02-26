import type { Exercise } from '@/data/types'

export const examExercises: Exercise[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // Probeklausur – Single Choice  (18 Aufgaben, je 2,5 Punkte = 45 Punkte)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'de-mc-1',
    subjectId: 'nachfrage',
    titleDe: 'Cobb-Douglas-Präferenzen',
    titleEn: 'Cobb-Douglas Preferences',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Ein Individuum habe Nutzenfunktion $U(x_1, x_2) = a \\ln(x_1) + b \\ln(x_2)$. Welche Aussage ist <strong>falsch</strong>?</p>',
    bodyEn:
      '<p>An individual has the utility function $U(x_1, x_2) = a \\ln(x_1) + b \\ln(x_2)$. Which statement is <strong>false</strong>?</p>',
    choicesDe: [
      '$V(x_1, x_2) = (x_1^a \\cdot x_2^b)$ stellt eine monotone Transformation dieser Nutzenfunktion dar.',
      'Die Nutzenfunktion spiegelt Cobb-Douglas Präferenzen wider.',
      'Es liegen keine perfekten Komplemente vor.',
      'Die Nutzenfunktion stellt perfekte Substitute dar.',
    ],
    choicesEn: [
      '$V(x_1, x_2) = (x_1^a \\cdot x_2^b)$ is a monotone transformation of this utility function.',
      'The utility function reflects Cobb-Douglas preferences.',
      'There are no perfect complements.',
      'The utility function represents perfect substitutes.',
    ],
    correctChoiceIndex: 3,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>$U = a\\ln(x_1)+b\\ln(x_2)$ ist die logarithmische Form einer Cobb-Douglas-Nutzenfunktion. ' +
      'Die Exponentialfunktion $V = e^U = x_1^a \\cdot x_2^b$ ist eine streng monotone Transformation und stellt daher dieselben Präferenzen dar (Aussage A richtig). ' +
      'Cobb-Douglas-Indifferenzkurven sind glatte, konvexe Kurven – weder L-förmig (perfekte Komplemente) noch linear (perfekte Substitute). ' +
      'Aussage D ist daher <strong>falsch</strong>: Cobb-Douglas-Präferenzen beschreiben keine perfekten Substitute.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>$U = a\\ln(x_1)+b\\ln(x_2)$ is the logarithmic form of a Cobb-Douglas utility function. ' +
      'The exponential $V = e^U = x_1^a \\cdot x_2^b$ is a strictly monotone transformation and therefore represents the same preferences (statement A correct). ' +
      'Cobb-Douglas indifference curves are smooth and convex – neither L-shaped (perfect complements) nor linear (perfect substitutes). ' +
      'Statement D is therefore <strong>false</strong>: Cobb-Douglas preferences do not represent perfect substitutes.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-2',
    subjectId: 'nachfrage',
    titleDe: 'Optimales Bündel bei Cobb-Douglas',
    titleEn: 'Optimal Bundle with Cobb-Douglas',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Heiner hat die untenstehende Nutzenfunktion. Sein Einkommen ist 120. Der Preis für das erste Gut $x_1$ ist 5 und der Preis für das zweite Gut $x_2$ ist 10. Was ist sein am meisten präferiertes, erschwingliches Güterbündel?</p>' +
      '<p>$$U(x_1; x_2) = x_1^{1/10} x_2^{1/5}$$</p>',
    bodyEn:
      '<p>Heiner has the utility function shown below. His income is 120. The price of the first good $x_1$ is 5 and the price of the second good $x_2$ is 10. What is his most preferred, affordable bundle?</p>' +
      '<p>$$U(x_1, x_2) = x_1^{1/10} x_2^{1/5}$$</p>',
    choicesDe: [
      '$x_1 = 0$ und $x_2 = 10$',
      '$x_1 = 4$ und $x_2 = 10$',
      '$x_1 = 16$ und $x_2 = 4$',
      '$x_1 = 8$ und $x_2 = 8$',
    ],
    choicesEn: [
      '$x_1 = 0$ and $x_2 = 10$',
      '$x_1 = 4$ and $x_2 = 10$',
      '$x_1 = 16$ and $x_2 = 4$',
      '$x_1 = 8$ and $x_2 = 8$',
    ],
    correctChoiceIndex: 3,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Bei Cobb-Douglas $U = x_1^a x_2^b$ mit $a = \\tfrac{1}{10}$ und $b = \\tfrac{1}{5}$ gilt die Budgetaufteilungsregel:</p>' +
      '<p>$$x_1 = \\frac{a}{a+b}\\cdot\\frac{m}{p_1} = \\frac{1/10}{1/10+1/5}\\cdot\\frac{120}{5} = \\frac{1}{3}\\cdot 24 = 8$$</p>' +
      '<p>$$x_2 = \\frac{b}{a+b}\\cdot\\frac{m}{p_2} = \\frac{2}{3}\\cdot 12 = 8$$</p>' +
      '<p>Das optimale Bündel ist $(x_1, x_2) = (8,\\; 8)$.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>For Cobb-Douglas $U = x_1^a x_2^b$ with $a = \\tfrac{1}{10}$ and $b = \\tfrac{1}{5}$, the budget-share rule gives:</p>' +
      '<p>$$x_1 = \\frac{a}{a+b}\\cdot\\frac{m}{p_1} = \\frac{1/10}{1/10+1/5}\\cdot\\frac{120}{5} = \\frac{1}{3}\\cdot 24 = 8$$</p>' +
      '<p>$$x_2 = \\frac{b}{a+b}\\cdot\\frac{m}{p_2} = \\frac{2}{3}\\cdot 12 = 8$$</p>' +
      '<p>The optimal bundle is $(x_1, x_2) = (8,\\; 8)$.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-3',
    subjectId: 'nachfrage',
    titleDe: 'Preiselastizität der Nachfrage',
    titleEn: 'Price Elasticity of Demand',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Angenommen, ein Gut hat die folgende Nachfragefunktion: $q = 4 - p^5$. Welche Aussage ist <strong>korrekt</strong>?</p>',
    bodyEn:
      '<p>Suppose a good has the following demand function: $q = 4 - p^5$. Which statement is <strong>correct</strong>?</p>',
    choicesDe: [
      'Die Preiselastizität der Nachfrage ist konstant für alle $p$.',
      'Die Preiselastizität der Nachfrage ist $-\\frac{5}{3}$ für $p = 1$.',
      'Die Preiselastizität der Nachfrage ist $-\\frac{7}{3}$ für $p = 1$.',
      'Die Preiselastizität der Nachfrage ist steigend für alle $p$.',
    ],
    choicesEn: [
      'The price elasticity of demand is constant for all $p$.',
      'The price elasticity of demand is $-\\frac{5}{3}$ at $p = 1$.',
      'The price elasticity of demand is $-\\frac{7}{3}$ at $p = 1$.',
      'The price elasticity of demand is increasing for all $p$.',
    ],
    correctChoiceIndex: 1,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Die Preiselastizität der Nachfrage ist $\\varepsilon = \\frac{dq}{dp}\\cdot\\frac{p}{q}$. ' +
      'Mit $\\frac{dq}{dp} = -5p^4$ ergibt sich:</p>' +
      '<p>$$\\varepsilon = -5p^4 \\cdot \\frac{p}{4-p^5} = \\frac{-5p^5}{4-p^5}$$</p>' +
      '<p>Für $p = 1$: $\\varepsilon = \\frac{-5}{4-1} = -\\frac{5}{3}$. Die Elastizität ist weder konstant noch monoton steigend, da sie von $p$ abhängt.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>The price elasticity of demand is $\\varepsilon = \\frac{dq}{dp}\\cdot\\frac{p}{q}$. ' +
      'With $\\frac{dq}{dp} = -5p^4$ we get:</p>' +
      '<p>$$\\varepsilon = -5p^4 \\cdot \\frac{p}{4-p^5} = \\frac{-5p^5}{4-p^5}$$</p>' +
      '<p>At $p = 1$: $\\varepsilon = \\frac{-5}{4-1} = -\\frac{5}{3}$. The elasticity is neither constant nor monotonically increasing, as it depends on $p$.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-4',
    subjectId: 'angebot',
    titleDe: 'Skalenerträge und Durchschnittskosten',
    titleEn: 'Returns to Scale and Average Costs',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Angenommen, ein Unternehmen hat die untenstehende Produktionsfunktion. Die Variablen $x_1$ und $x_2$ geben die Inputmengen der Faktoren 1 und 2 an. $y$ steht für die Outputmenge. Welche Aussage ist <strong>richtig</strong>?</p>' +
      '<p>$$y(x_1; x_2) = \\frac{x_1^{0{,}5} \\cdot x_2^{0{,}4}}{6x_1 + 8x_2}$$</p>',
    bodyEn:
      '<p>Suppose a firm has the production function shown below. The variables $x_1$ and $x_2$ denote the input quantities of factors 1 and 2. $y$ denotes the output quantity. Which statement is <strong>correct</strong>?</p>' +
      '<p>$$y(x_1, x_2) = \\frac{x_1^{0.5} \\cdot x_2^{0.4}}{6x_1 + 8x_2}$$</p>',
    choicesDe: [
      'Das Unternehmen hat fallende Skalenerträge und somit sind auch die Durchschnittskosten fallend.',
      'Das Unternehmen hat fallende Skalenerträge und somit sind die Durchschnittskosten steigend.',
      'Das Unternehmen hat steigende Skalenerträge und somit sind die Durchschnittskosten fallend.',
      'Das Unternehmen hat fallende Skalenerträge und somit sind die Durchschnittskosten konstant.',
    ],
    choicesEn: [
      'The firm has decreasing returns to scale and therefore average costs are also falling.',
      'The firm has decreasing returns to scale and therefore average costs are rising.',
      'The firm has increasing returns to scale and therefore average costs are falling.',
      'The firm has decreasing returns to scale and therefore average costs are constant.',
    ],
    correctChoiceIndex: 1,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Skalierung beider Inputs um den Faktor $t > 1$:</p>' +
      '<p>$$y(tx_1,\\, tx_2) = \\frac{(tx_1)^{0{,}5}(tx_2)^{0{,}4}}{6(tx_1)+8(tx_2)} = \\frac{t^{0{,}9}\\, x_1^{0{,}5}\\, x_2^{0{,}4}}{t\\,(6x_1+8x_2)} = t^{-0{,}1}\\, y(x_1,x_2)$$</p>' +
      '<p>Da $t^{-0{,}1} < 1$ für $t > 1$, liegen <strong>fallende Skalenerträge</strong> (DRS) vor. ' +
      'Bei DRS steigen die Durchschnittskosten mit der Ausbringungsmenge, weil immer mehr Inputs pro Outputeinheit benötigt werden.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Scaling both inputs by factor $t > 1$:</p>' +
      '<p>$$y(tx_1,\\, tx_2) = \\frac{(tx_1)^{0.5}(tx_2)^{0.4}}{6(tx_1)+8(tx_2)} = \\frac{t^{0.9}\\, x_1^{0.5}\\, x_2^{0.4}}{t\\,(6x_1+8x_2)} = t^{-0.1}\\, y(x_1,x_2)$$</p>' +
      '<p>Since $t^{-0.1} < 1$ for $t > 1$, there are <strong>decreasing returns to scale</strong> (DRS). ' +
      'Under DRS, average costs rise with output because more and more inputs are needed per unit of output.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-5',
    subjectId: 'angebot',
    titleDe: 'Gewinnmaximierung – Automobilindustrie',
    titleEn: 'Profit Maximization – Automobile Industry',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Angenommen, die untenstehende Funktion stellt Heiners langfristige <strong>Gesamtkosten</strong> (in EUR) für die Herstellung von $a$ Autos pro Woche dar. Wie viele Autos wird Heiner als Gewinnmaximierer langfristig wöchentlich herstellen, wenn er für jedes hergestellte Auto 20.000\u202FEUR erhält?</p>' +
      '<p>$$c(a) = \\frac{a^2}{16} + 4 \\cdot 10^9$$</p>',
    bodyEn:
      '<p>Suppose the function below represents Heiner\'s long-run <strong>total costs</strong> (in EUR) for producing $a$ cars per week. How many cars will Heiner produce weekly as a profit maximizer if he receives 20,000\u202FEUR for each car produced?</p>' +
      '<p>$$c(a) = \\frac{a^2}{16} + 4 \\cdot 10^9$$</p>',
    choicesDe: [
      'Heiner wird wöchentlich 0 Autos herstellen.',
      'Heiner wird wöchentlich 100 Autos herstellen.',
      'Heiner wird wöchentlich 10.000 Autos herstellen.',
      'Heiner wird wöchentlich 160.000 Autos herstellen.',
    ],
    choicesEn: [
      'Heiner will produce 0 cars per week.',
      'Heiner will produce 100 cars per week.',
      'Heiner will produce 10,000 cars per week.',
      'Heiner will produce 160,000 cars per week.',
    ],
    correctChoiceIndex: 3,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Gewinnmaximierung erfordert $P = MC$. Die Grenzkosten sind:</p>' +
      '<p>$$MC = \\frac{dc}{da} = \\frac{a}{8}$$</p>' +
      '<p>Setze $MC = P$: $\\frac{a}{8} = 20\\,000 \\Rightarrow a = 160\\,000$.</p>' +
      '<p>Prüfung, ob langfristig Gewinn $\\geq 0$:</p>' +
      '<p>$$\\pi = 20\\,000 \\cdot 160\\,000 - \\frac{160\\,000^2}{16} - 4 \\cdot 10^9 = 3{,}2 \\cdot 10^9 - 1{,}6 \\cdot 10^9 - 4 \\cdot 10^9 = -2{,}4 \\cdot 10^9 < 0$$</p>' +
      '<p>Der Gewinn ist negativ. Langfristig könnte Heiner den Markt verlassen und 0 produzieren. ' +
      'Allerdings lautet die Kostenfunktion „langfristige Gesamtkosten" – die Fixkosten $4 \\cdot 10^9$ fallen auch bei $a = 0$ an (z.B. Fabrikkosten, die langfristig gebunden sind). ' +
      'Da der Verlust bei $a = 160\\,000$ geringer ausfällt als bei $a = 0$ (Verlust $= -4 \\cdot 10^9$), produziert Heiner 160.000 Autos, um seinen Verlust zu minimieren.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Profit maximization requires $P = MC$. The marginal cost is:</p>' +
      '<p>$$MC = \\frac{dc}{da} = \\frac{a}{8}$$</p>' +
      '<p>Setting $MC = P$: $\\frac{a}{8} = 20{,}000 \\Rightarrow a = 160{,}000$.</p>' +
      '<p>Checking whether long-run profit $\\geq 0$:</p>' +
      '<p>$$\\pi = 20{,}000 \\times 160{,}000 - \\frac{160{,}000^2}{16} - 4 \\times 10^9 = 3.2 \\times 10^9 - 1.6 \\times 10^9 - 4 \\times 10^9 = -2.4 \\times 10^9 < 0$$</p>' +
      '<p>Profit is negative. However, the cost function describes "long-run total costs" – the fixed cost of $4 \\times 10^9$ applies even at $a = 0$. ' +
      'Since the loss at $a = 160{,}000$ ($-2.4 \\times 10^9$) is smaller than at $a = 0$ ($-4 \\times 10^9$), Heiner produces 160,000 cars to minimize his loss.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-6',
    subjectId: 'maerkte',
    titleDe: 'Steuerinzidenz bei fixem Angebot',
    titleEn: 'Tax Incidence with Fixed Supply',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Wir betrachten eine lineare inverse Marktangebotsfunktion mit negativer Steigung. Wir nehmen an, dass die Angebotsmenge fix und unabhängig vom Preis ist. Weiterhin nehmen wir an, dass sich Angebots- und Nachfragekurve sowohl mit als auch ohne Steuer schneiden. Welche Aussage ist <strong>falsch</strong>?</p>',
    bodyEn:
      '<p>We consider a linear inverse market demand function with negative slope. We assume that the supply quantity is fixed and independent of the price. Furthermore, we assume that the supply and demand curves intersect both with and without a tax. Which statement is <strong>false</strong>?</p>',
    choicesDe: [
      'Eine Mengensteuer, die bei den Konsumenten erhoben wird, reduziert die Gleichgewichtsmenge und die Wohlfahrt.',
      'Die Einführung einer Mengensteuer, die bei den Produzenten erhoben wird, verursacht keinen Wohlfahrtsverlust, weil die angebotene Menge fix ist.',
      'Wenn das Marktangebot preisabhängig wird, verursacht eine Mengensteuer, die bei den Produzenten erhoben wird, einen Wohlfahrtsverlust.',
      'Eine feste Angebotsmenge bedeutet, dass die Angebotselastizität $E_s$ Null ist.',
    ],
    choicesEn: [
      'A per-unit tax levied on consumers reduces the equilibrium quantity and welfare.',
      'Introducing a per-unit tax levied on producers causes no deadweight loss because the supplied quantity is fixed.',
      'If market supply becomes price-dependent, a per-unit tax levied on producers causes a deadweight loss.',
      'A fixed supply quantity means that the supply elasticity $E_s$ is zero.',
    ],
    correctChoiceIndex: 0,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Bei einem fixen (perfekt unelastischen) Angebot ist die Angebotskurve vertikal. Eine Mengensteuer – egal ob bei Konsumenten oder Produzenten erhoben – ändert die gehandelte Menge <strong>nicht</strong>, da das Angebot preisunabhängig ist. ' +
      'Der gesamte Steuerbetrag wird von der Marktseite mit der geringeren Elastizität getragen (hier: Produzenten). ' +
      'Es entsteht kein Wohlfahrtsverlust (DWL = 0). Aussage A ist daher <strong>falsch</strong>, da weder Menge noch Wohlfahrt sinken.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>With a fixed (perfectly inelastic) supply, the supply curve is vertical. A per-unit tax – whether levied on consumers or producers – does <strong>not</strong> change the traded quantity, since supply is price-independent. ' +
      'The entire tax burden falls on the side with lower elasticity (here: producers). ' +
      'There is no deadweight loss (DWL = 0). Statement A is therefore <strong>false</strong>, as neither quantity nor welfare decrease.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-7',
    subjectId: 'maerkte',
    titleDe: 'Marktgleichgewicht und Renten',
    titleEn: 'Market Equilibrium and Surplus',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Auf einem Markt existiere das inverse Angebot $p^S(x) = x + 3$ und die inverse Nachfrage $p^D(x) = 9 - x^2$, wobei $x$ und $p$ in der Menge der positiven reellen Zahlen sind. Welche Aussage ist <strong>korrekt</strong>?</p>',
    bodyEn:
      '<p>In a market, the inverse supply is $p^S(x) = x + 3$ and the inverse demand is $p^D(x) = 9 - x^2$, where $x$ and $p$ are in the set of positive real numbers. Which statement is <strong>correct</strong>?</p>',
    choicesDe: [
      'Gleichgewichtspreis ist $p^* = 1$ und die Gleichgewichtsmenge $x^* = 5$.',
      'Gleichgewichtspreis ist $p^* = 2$ und die Gleichgewichtsmenge $x^* = 4$.',
      'Die Produzentenrente ist gleich 2.',
      'Die Konsumentenrente ist gleich 4.',
    ],
    choicesEn: [
      'The equilibrium price is $p^* = 1$ and the equilibrium quantity $x^* = 5$.',
      'The equilibrium price is $p^* = 2$ and the equilibrium quantity $x^* = 4$.',
      'The producer surplus equals 2.',
      'The consumer surplus equals 4.',
    ],
    correctChoiceIndex: 2,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Gleichgewicht: $p^S = p^D \\Rightarrow x + 3 = 9 - x^2 \\Rightarrow x^2 + x - 6 = 0$. ' +
      'Mit der Lösungsformel $(x+3)(x-2) = 0$ folgt $x^* = 2$ (positiver Wert). ' +
      'Der Gleichgewichtspreis ist $p^* = 2 + 3 = 5$.</p>' +
      '<p>Produzentenrente: $PS = \\int_0^2 (p^* - p^S)\\, dx = \\int_0^2 (5 - x - 3)\\, dx = \\int_0^2 (2-x)\\, dx = \\left[2x - \\frac{x^2}{2}\\right]_0^2 = 4 - 2 = 2$.</p>' +
      '<p>Aussage C ($PS = 2$) ist <strong>korrekt</strong>.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Equilibrium: $p^S = p^D \\Rightarrow x + 3 = 9 - x^2 \\Rightarrow x^2 + x - 6 = 0$. ' +
      'Factoring $(x+3)(x-2) = 0$ gives $x^* = 2$ (positive root). ' +
      'The equilibrium price is $p^* = 2 + 3 = 5$.</p>' +
      '<p>Producer surplus: $PS = \\int_0^2 (p^* - p^S)\\, dx = \\int_0^2 (5 - x - 3)\\, dx = \\int_0^2 (2-x)\\, dx = \\left[2x - \\frac{x^2}{2}\\right]_0^2 = 4 - 2 = 2$.</p>' +
      '<p>Statement C ($PS = 2$) is <strong>correct</strong>.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-8',
    subjectId: 'maerkte',
    titleDe: 'Tauschwirtschaft und Pareto-Effizienz',
    titleEn: 'Exchange Economy and Pareto Efficiency',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Wir betrachten eine 2-Güter Tauschwirtschaft mit zwei Konsumenten, die jeweils Cobb-Douglas Präferenzen haben. Welche Aussage ist <strong>richtig</strong>?</p>',
    bodyEn:
      '<p>We consider a 2-good exchange economy with two consumers, each having Cobb-Douglas preferences. Which statement is <strong>correct</strong>?</p>',
    choicesDe: [
      'Die Kurve der Pareto-effizienten Punkte berührt die Achsen des Edgeworth-Diagramms nicht.',
      'Die notwendige Bedingung für Pareto-effiziente Allokationen ist, dass sich die Indifferenzkurven beider Konsumenten schneiden.',
      'Der Preisallokationsmechanismus führt zu einer Pareto-effizienten Allokation.',
      'Innerhalb einer Tauschwirtschaft ist es Konsumenten unabhängig vom Allokationsmechanismus nicht möglich, sich zu verbessern.',
    ],
    choicesEn: [
      'The curve of Pareto-efficient points does not touch the axes of the Edgeworth diagram.',
      'The necessary condition for Pareto-efficient allocations is that the indifference curves of both consumers intersect.',
      'The price allocation mechanism leads to a Pareto-efficient allocation.',
      'Within an exchange economy, it is not possible for consumers to improve their position regardless of the allocation mechanism.',
    ],
    correctChoiceIndex: 2,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Der Erste Hauptsatz der Wohlfahrtsökonomik besagt, dass jedes Walras-Gleichgewicht (Preisallokation) Pareto-effizient ist. ' +
      'Aussage C ist daher <strong>richtig</strong>.</p>' +
      '<p>Aussage A ist falsch: Bei Cobb-Douglas-Präferenzen verläuft die Kontraktkurve von Ursprung zu Ursprung im Edgeworth-Diagramm und berührt damit die Ecken. ' +
      'Aussage B ist falsch: Pareto-Effizienz erfordert Tangenz (nicht Schnitt) der Indifferenzkurven. ' +
      'Aussage D ist falsch: Durch Tausch können sich Konsumenten ausgehend von nicht-effizienten Allokationen verbessern.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>The First Welfare Theorem states that every Walrasian equilibrium (price allocation) is Pareto efficient. ' +
      'Statement C is therefore <strong>correct</strong>.</p>' +
      '<p>Statement A is false: with Cobb-Douglas preferences, the contract curve runs from origin to origin in the Edgeworth box and thus touches the corners. ' +
      'Statement B is false: Pareto efficiency requires tangency (not intersection) of indifference curves. ' +
      'Statement D is false: through trade, consumers can improve from non-efficient allocations.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-9',
    subjectId: 'spieltheorie',
    titleDe: 'Gefangenendilemma – Studierende',
    titleEn: 'Prisoner\'s Dilemma – Students',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Zwei Studierende werden verdächtigt, voneinander abgeschrieben zu haben. Sie werden gleichzeitig in getrennten Räumen verhört. Die Beweislage ist dünn und rechtfertigt jeweils nur eine Monat Suspendierung, falls beide leugnen. Wenn nur eine der beiden gesteht, wird diese Studierende aufgrund der Kronzeugenregelung nicht suspendiert. Die andere Studentin wird für 6 Monate suspendiert. Gestehen beide, so werden sie für 2 Monate suspendiert. Welche Aussage ist <strong>falsch</strong>?</p>',
    bodyEn:
      '<p>Two students are suspected of copying from each other. They are interrogated simultaneously in separate rooms. The evidence is thin and justifies only one month of suspension each if both deny. If only one of them confesses, that student is not suspended due to a leniency rule. The other student is suspended for 6 months. If both confess, they are suspended for 2 months. Which statement is <strong>false</strong>?</p>',
    choicesDe: [
      'Ein Nash-Gleichgewicht liegt vor, wenn beide gestehen.',
      'Leugnen ist für beide eine dominante Strategie.',
      'Gestehen ist für beide eine dominante Strategie.',
      'Wenn B leugnet, wird A gestehen. Gesteht aber A, so wird B auch gestehen.',
    ],
    choicesEn: [
      'A Nash equilibrium exists when both confess.',
      'Denying is a dominant strategy for both.',
      'Confessing is a dominant strategy for both.',
      'If B denies, A will confess. But if A confesses, B will also confess.',
    ],
    correctChoiceIndex: 1,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Auszahlungsmatrix (Suspendierungsmonate, negativ = schlecht):</p>' +
      '<ul>' +
      '<li>(Leugnen, Leugnen): $(-1, -1)$</li>' +
      '<li>(Leugnen, Gestehen): $(-6, 0)$</li>' +
      '<li>(Gestehen, Leugnen): $(0, -6)$</li>' +
      '<li>(Gestehen, Gestehen): $(-2, -2)$</li>' +
      '</ul>' +
      '<p>Gestehen dominiert Leugnen für beide: Wenn der andere leugnet, ist Gestehen besser ($0 > -1$). Wenn der andere gesteht, ist Gestehen ebenfalls besser ($-2 > -6$). ' +
      'Das Nash-Gleichgewicht ist (Gestehen, Gestehen). Aussage B („Leugnen ist dominant") ist daher <strong>falsch</strong>.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Payoff matrix (months of suspension, negative = bad):</p>' +
      '<ul>' +
      '<li>(Deny, Deny): $(-1, -1)$</li>' +
      '<li>(Deny, Confess): $(-6, 0)$</li>' +
      '<li>(Confess, Deny): $(0, -6)$</li>' +
      '<li>(Confess, Confess): $(-2, -2)$</li>' +
      '</ul>' +
      '<p>Confessing dominates denying for both: if the other denies, confessing is better ($0 > -1$); if the other confesses, confessing is also better ($-2 > -6$). ' +
      'The Nash equilibrium is (Confess, Confess). Statement B ("Denying is dominant") is therefore <strong>false</strong>.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-10',
    subjectId: 'spieltheorie',
    titleDe: 'Nash-Gleichgewicht in Matrixspielen',
    titleEn: 'Nash Equilibrium in Matrix Games',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Betrachten Sie ein simultanes Spiel zwischen zwei Spieler:innen mit jeweils zwei Aktionen und der folgenden Auszahlungsmatrix. Welche Aussage ist <strong>richtig</strong>?</p>' +
      '<table>' +
      '<tr><td></td><td></td><td colspan="2"><strong>Spieler:in 2</strong></td></tr>' +
      '<tr><td></td><td></td><td><strong>Schweigen</strong></td><td><strong>Gestehen</strong></td></tr>' +
      '<tr><td rowspan="2"><strong>Spieler:in 1</strong></td><td><strong>Schweigen</strong></td><td>$(17, 62)$</td><td>$(74, 56)$</td></tr>' +
      '<tr><td><strong>Gestehen</strong></td><td>$(57, 90)$</td><td>$(24, 70)$</td></tr>' +
      '</table>',
    bodyEn:
      '<p>Consider a simultaneous game between two players, each with two actions and the following payoff matrix. Which statement is <strong>correct</strong>?</p>' +
      '<table>' +
      '<tr><td></td><td></td><td colspan="2"><strong>Player 2</strong></td></tr>' +
      '<tr><td></td><td></td><td><strong>Silent</strong></td><td><strong>Confess</strong></td></tr>' +
      '<tr><td rowspan="2"><strong>Player 1</strong></td><td><strong>Silent</strong></td><td>$(17, 62)$</td><td>$(74, 56)$</td></tr>' +
      '<tr><td><strong>Confess</strong></td><td>$(57, 90)$</td><td>$(24, 70)$</td></tr>' +
      '</table>',
    choicesDe: [
      'Spieler:in 2 hat die dominante Strategie "Gestehen".',
      '(Gestehen, Gestehen) ist ein Nash-Gleichgewicht.',
      'Es gibt kein Nash-Gleichgewicht in gemischten Strategien.',
      '(Gestehen, Schweigen) ist ein Nash-Gleichgewicht.',
    ],
    choicesEn: [
      'Player 2 has the dominant strategy "Confess".',
      '(Confess, Confess) is a Nash equilibrium.',
      'There is no Nash equilibrium in mixed strategies.',
      '(Confess, Silent) is a Nash equilibrium.',
    ],
    correctChoiceIndex: 3,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Beste Antworten von Spieler:in 1: Wenn S2 Schweigen wählt → S1 wählt Gestehen ($57 > 17$). Wenn S2 Gestehen wählt → S1 wählt Schweigen ($74 > 24$).</p>' +
      '<p>Beste Antworten von Spieler:in 2: Wenn S1 Schweigen wählt → S2 wählt Schweigen ($62 > 56$). Wenn S1 Gestehen wählt → S2 wählt Schweigen ($90 > 70$). ' +
      'S2 hat also die <strong>dominante Strategie Schweigen</strong> (nicht Gestehen → A falsch).</p>' +
      '<p>Prüfe (Gestehen, Schweigen): S1 spielt Gestehen gegen S2 Schweigen → $57$, Abweichung zu Schweigen → $17$ (schlechter ✓). S2 spielt Schweigen gegen S1 Gestehen → $90$, Abweichung zu Gestehen → $70$ (schlechter ✓). ' +
      'Also ist <strong>(Gestehen, Schweigen) ein Nash-Gleichgewicht</strong>.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Player 1 best responses: If P2 Silent → P1 Confess ($57 > 17$). If P2 Confess → P1 Silent ($74 > 24$).</p>' +
      '<p>Player 2 best responses: If P1 Silent → P2 Silent ($62 > 56$). If P1 Confess → P2 Silent ($90 > 70$). ' +
      'P2 has the <strong>dominant strategy Silent</strong> (not Confess → A false).</p>' +
      '<p>Check (Confess, Silent): P1 plays Confess vs P2 Silent → $57$; deviation to Silent → $17$ (worse). P2 plays Silent vs P1 Confess → $90$; deviation to Confess → $70$ (worse). ' +
      'So <strong>(Confess, Silent) is a Nash equilibrium</strong>.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-11',
    subjectId: 'marktmacht',
    titleDe: 'Monopol-Ineffizienz',
    titleEn: 'Monopoly Inefficiency',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Welche Aussage ist <strong>richtig</strong>?</p>',
    bodyEn:
      '<p>Which statement is <strong>correct</strong>?</p>',
    choicesDe: [
      'Die Ineffizienz des Monopols ergibt sich durch die geringere produzierte Gleichgewichtsmenge im Vergleich zum Optimum unter vollkommener Konkurrenz.',
      'Die im Monopol produzierte Gleichgewichtsmenge ist höher als unter vollkommener Konkurrenz.',
      'Im Vergleich zu vollkommener Konkurrenz gibt es im Monopol keine Ineffizienz.',
      'Der Gleichgewichtspreis unter vollkommener Konkurrenz ist höher als im Monopol.',
    ],
    choicesEn: [
      'The inefficiency of the monopoly arises from the lower equilibrium quantity produced compared to the optimum under perfect competition.',
      'The equilibrium quantity produced under monopoly is higher than under perfect competition.',
      'Compared to perfect competition, there is no inefficiency in a monopoly.',
      'The equilibrium price under perfect competition is higher than under monopoly.',
    ],
    correctChoiceIndex: 0,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Ein Monopolist setzt $MR = MC$ und produziert weniger als die Wettbewerbsmenge ($P = MC$), da $MR < P$. ' +
      'Dadurch entsteht ein Wohlfahrtsverlust (Deadweight Loss). ' +
      'Aussage A beschreibt dies korrekt: Die Ineffizienz ergibt sich aus der <strong>geringeren Menge</strong> im Vergleich zum Wettbewerbsoptimum.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>A monopolist sets $MR = MC$ and produces less than the competitive quantity ($P = MC$), since $MR < P$. ' +
      'This creates a deadweight loss. ' +
      'Statement A correctly describes this: the inefficiency arises from the <strong>lower quantity</strong> compared to the competitive optimum.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-12',
    subjectId: 'marktmacht',
    titleDe: 'Monopol – Gewinnmaximierung',
    titleEn: 'Monopoly – Profit Maximization',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Angenommen, ein Monopolist für Kaffeemaschinen habe die Kostenfunktion $C(y) = 10 + 200y + 10y^2$. Die inverse Nachfrage sei $p(y) = 500 - 5y$. Welche Menge wird der Monopolist zu welchem Preis anbieten?</p>',
    bodyEn:
      '<p>Suppose a monopolist for coffee machines has the cost function $C(y) = 10 + 200y + 10y^2$. The inverse demand is $p(y) = 500 - 5y$. What quantity will the monopolist offer at what price?</p>',
    choicesDe: [
      'Der Monopolist wird 20 Kaffeemaschinen zu einem Stückpreis von 400 Geldeinheiten anbieten.',
      'Der Monopolist wird 30 Kaffeemaschinen zu einem Stückpreis von 400 Geldeinheiten anbieten.',
      'Der Monopolist wird 5 Kaffeemaschinen zu einem Stückpreis von 225 Geldeinheiten anbieten.',
      'Der Monopolist wird 10 Kaffeemaschinen zu einem Stückpreis von 450 Geldeinheiten anbieten.',
    ],
    choicesEn: [
      'The monopolist will offer 20 coffee machines at a unit price of 400 monetary units.',
      'The monopolist will offer 30 coffee machines at a unit price of 400 monetary units.',
      'The monopolist will offer 5 coffee machines at a unit price of 225 monetary units.',
      'The monopolist will offer 10 coffee machines at a unit price of 450 monetary units.',
    ],
    correctChoiceIndex: 3,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Erlös: $R(y) = p \\cdot y = (500 - 5y)y = 500y - 5y^2$.</p>' +
      '<p>Grenzerlös: $MR = 500 - 10y$. Grenzkosten: $MC = 200 + 20y$.</p>' +
      '<p>Gewinnmaximierung ($MR = MC$): $500 - 10y = 200 + 20y \\Rightarrow 300 = 30y \\Rightarrow y^* = 10$.</p>' +
      '<p>Preis: $p^* = 500 - 5 \\cdot 10 = 450$.</p>' +
      '<p>Der Monopolist bietet <strong>10 Kaffeemaschinen zu je 450 GE</strong> an.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Revenue: $R(y) = p \\cdot y = (500 - 5y)y = 500y - 5y^2$.</p>' +
      '<p>Marginal revenue: $MR = 500 - 10y$. Marginal cost: $MC = 200 + 20y$.</p>' +
      '<p>Profit maximization ($MR = MC$): $500 - 10y = 200 + 20y \\Rightarrow 300 = 30y \\Rightarrow y^* = 10$.</p>' +
      '<p>Price: $p^* = 500 - 5 \\cdot 10 = 450$.</p>' +
      '<p>The monopolist offers <strong>10 coffee machines at 450 MU each</strong>.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-13',
    subjectId: 'externalitaeten',
    titleDe: 'Externalitäten und öffentliche Güter',
    titleEn: 'Externalities and Public Goods',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Welche Aussage ist <strong>falsch</strong>?</p>',
    bodyEn:
      '<p>Which statement is <strong>false</strong>?</p>',
    choicesDe: [
      'Nach dem Coase Theorem kann eine effiziente Lösung nur erreicht werden, wenn der Schadensverursacher die Kosten der Umweltverschmutzung übernimmt.',
      'Allmende-Weideland wird typischerweise übermäßig genutzt.',
      'Ein reines öffentliches Gut muss das Merkmal der Nicht-Ausschließbarkeit erfüllen.',
      'Die Effizienzbedingung für private Güter besagt, dass die Grenzrate der Substitution jeder einzelnen Person den Grenzkosten der Bereitstellung einer weiteren Einheit des privaten Gutes entsprechen muss.',
    ],
    choicesEn: [
      'According to the Coase theorem, an efficient solution can only be reached if the polluter bears the costs of the pollution.',
      'Common grazing land is typically overused.',
      'A pure public good must satisfy the criterion of non-excludability.',
      'The efficiency condition for private goods states that each individual\'s marginal rate of substitution must equal the marginal cost of providing an additional unit of the private good.',
    ],
    correctChoiceIndex: 0,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Das Coase-Theorem besagt, dass bei klar definierten Eigentumsrechten und ohne Transaktionskosten eine effiziente Lösung <strong>unabhängig</strong> davon erreicht wird, wem die Rechte zugeordnet sind. ' +
      'Es ist also <strong>nicht</strong> nötig, dass der Schadensverursacher die Kosten trägt. Aussage A ist daher <strong>falsch</strong>.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>The Coase theorem states that with clearly defined property rights and no transaction costs, an efficient outcome is reached <strong>regardless</strong> of who holds the rights. ' +
      'It is therefore <strong>not</strong> necessary for the polluter to bear the costs. Statement A is thus <strong>false</strong>.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-14',
    subjectId: 'externalitaeten',
    titleDe: 'Internalisierung externer Effekte',
    titleEn: 'Internalization of External Effects',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Ein Stahlwerk an einem Fluss verschmutzt das Wasser, sodass ein Fischereiunternehmen stromabwärts stark verringerte Fischpopulationen bemerkt. Welche Maßnahme eignet sich <strong>nicht</strong> zur Internalisierung externer Effekte?</p>',
    bodyEn:
      '<p>A steel mill on a river pollutes the water, so that a fishing company downstream notices sharply reduced fish populations. Which measure is <strong>not</strong> suitable for internalizing external effects?</p>',
    choicesDe: [
      'Die Schaffung eines Monopols im Stahlsektor zur Verringerung der produzierten Stahlmenge.',
      'Die Einführung einer sogenannten "Pigou-Steuer", die den optimalen Steuersatz in Höhe der Externalität festlegt.',
      'Die Einführung von Eigentumsrechten, die entweder dem Stahlunternehmen oder dem Fischereiunternehmen Verschmutzungsrechte für den Fluss zuteilt.',
      'Die Fusion beider Betriebe zur Internalisierung der Externalitäten durch Verschmelzung.',
    ],
    choicesEn: [
      'Creating a monopoly in the steel sector to reduce the quantity of steel produced.',
      'Introducing a so-called "Pigou tax" that sets the optimal tax rate at the level of the externality.',
      'Introducing property rights that assign pollution rights for the river to either the steel company or the fishing company.',
      'Merging both firms to internalize the externalities through consolidation.',
    ],
    correctChoiceIndex: 0,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Standardinstrumente zur Internalisierung externer Effekte sind: Pigou-Steuer (B), Eigentumsrechte/Coase-Verhandlung (C) und Fusion/Internalisierung (D). ' +
      'Die Schaffung eines Monopols (A) ist <strong>kein</strong> geeignetes Instrument, da ein Monopol zwar die Menge reduziert, aber eigene Ineffizienzen (Deadweight Loss durch Marktmacht) erzeugt und nicht gezielt die Externalität adressiert.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Standard instruments for internalizing externalities are: Pigou tax (B), property rights/Coase bargaining (C), and merger/internalization (D). ' +
      'Creating a monopoly (A) is <strong>not</strong> a suitable instrument, as a monopoly does reduce output but creates its own inefficiencies (deadweight loss from market power) and does not specifically address the externality.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-15',
    subjectId: 'asymmetrische-info',
    titleDe: 'Adverse Selektion und Moral Hazard',
    titleEn: 'Adverse Selection and Moral Hazard',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Welche Aussage ist <strong>korrekt</strong>?</p>',
    bodyEn:
      '<p>Which statement is <strong>correct</strong>?</p>',
    choicesDe: [
      'Negative Auslese lässt sich nur durch Signale aufheben.',
      'Wir wollen eine Feuerversicherung betrachten. Die Wahrscheinlichkeit eines Feuers soll zwischen zwei Gemeinden stark variieren und die Versicherung basierend auf der durchschnittlichen Feuerrate angeboten werden. Folglich würden nur in Gegenden mit hoher Feuerrate Feuerversicherungen abgeschlossen. Diese Situation wird auch Moral Hazard genannt.',
      'Asymmetrische Information kann dazu führen, dass sich für bestimmte Güter gar kein Markt entwickeln kann.',
      'Negative Auslese ist der Mangel an Anreiz, riskantes Verhalten zu verringern, wenn ein anderer Akteur die Konsequenzen des riskanten Verhalten tragen muss.',
    ],
    choicesEn: [
      'Adverse selection can only be resolved through signals.',
      'Consider fire insurance. Suppose the probability of fire varies greatly between two municipalities and insurance is offered based on the average fire rate. Consequently, only areas with high fire rates would purchase fire insurance. This situation is also called moral hazard.',
      'Asymmetric information can lead to no market developing at all for certain goods.',
      'Adverse selection is the lack of incentive to reduce risky behavior when another party must bear the consequences of that risky behavior.',
    ],
    correctChoiceIndex: 2,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Aussage C beschreibt Akerlofs „Market for Lemons"-Ergebnis: Asymmetrische Information kann dazu führen, dass Märkte zusammenbrechen und gar nicht entstehen. Das ist <strong>korrekt</strong>.</p>' +
      '<p>A ist falsch: Adverse Selektion kann auch durch Screening, Regulierung oder Pooling-Verträge gemildert werden. ' +
      'B ist falsch: Das beschriebene Feuerversicherungsbeispiel ist adverse Selektion (nicht Moral Hazard). ' +
      'D ist falsch: Die Definition beschreibt Moral Hazard, nicht adverse Selektion.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Statement C describes Akerlof\'s "Market for Lemons" result: asymmetric information can cause markets to collapse and not emerge at all. This is <strong>correct</strong>.</p>' +
      '<p>A is false: adverse selection can also be mitigated through screening, regulation, or pooling contracts. ' +
      'B is false: the fire insurance example describes adverse selection (not moral hazard). ' +
      'D is false: the definition describes moral hazard, not adverse selection.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-16',
    subjectId: 'asymmetrische-info',
    titleDe: 'Signaling auf dem Arbeitsmarkt',
    titleEn: 'Job Market Signaling',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Eine Möglichkeit, wie Bewerber:innen auf dem Arbeitsmarkt das Problem asymmetrischer Information beheben können, ist, eine Ausbildung zu machen. Welche Aussage ist <strong>korrekt</strong>?</p>',
    bodyEn:
      '<p>One way for applicants in the labor market to address the problem of asymmetric information is to obtain an education. Which statement is <strong>correct</strong>?</p>',
    choicesDe: [
      'Sind die Kosten der Ausbildung sehr niedrig, haben fähigere Arbeiter:innen einen Anreiz, kein Signal zu senden.',
      'Signale sind ein potenzieller Weg, Pareto-Effizienz trotz asymmetrischer Information zu erreichen.',
      'Typischerweise ist eine staatliche Lösung des Problems adverser Selektion vorzuziehen, da auf kostspielige Signale verzichtet werden kann.',
      'Um potenziell nützlich zu sein, muss die Ausbildung für fähigere Menschen individuell günstiger sein.',
    ],
    choicesEn: [
      'If the cost of education is very low, more able workers have an incentive not to send a signal.',
      'Signals are a potential way to achieve Pareto efficiency despite asymmetric information.',
      'Typically, a government solution to the problem of adverse selection is preferable, since costly signals can be avoided.',
      'To be potentially useful, education must be individually cheaper for more able people.',
    ],
    correctChoiceIndex: 3,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Im Spence-Signaling-Modell funktioniert Bildung als Signal nur, wenn die <strong>Single-Crossing-Bedingung</strong> erfüllt ist: ' +
      'Die Kosten der Ausbildung müssen für fähigere Arbeitnehmer:innen geringer sein als für weniger fähige. ' +
      'Nur so wird das Signal informativ, weil sich die Investition nur für den fähigen Typ lohnt.</p>' +
      '<p>A ist falsch: Bei niedrigen Kosten würden alle das Signal senden, wodurch es uninformativ wird – aber das bedeutet nicht, dass Fähige kein Signal senden wollen. ' +
      'B ist falsch: Signaling ist kostspielig und führt in der Regel nicht zu Pareto-Effizienz. ' +
      'C ist falsch: Staatliche Lösungen haben eigene Informationsprobleme.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>In the Spence signaling model, education works as a signal only if the <strong>single-crossing condition</strong> holds: ' +
      'the cost of education must be lower for more able workers than for less able ones. ' +
      'Only then is the signal informative, because the investment pays off only for the high-ability type.</p>' +
      '<p>A is false: with low costs, everyone would send the signal, making it uninformative – but that does not mean high-ability workers prefer not to signal. ' +
      'B is false: signaling is costly and generally does not achieve Pareto efficiency. ' +
      'C is false: government solutions have their own information problems.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-17',
    subjectId: 'verhaltensoekonomie',
    titleDe: 'Verhaltensökonomische Phänomene',
    titleEn: 'Behavioral Economics Phenomena',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Welche Aussage ist <strong>falsch</strong>?</p>',
    bodyEn:
      '<p>Which statement is <strong>false</strong>?</p>',
    choicesDe: [
      'Die persönliche Wertschätzung für ein Gut ist typischerweise höher, wenn man es bereits besitzt.',
      'Billige oder sogar kostenlose Abonnements, die man innerhalb einer kurzen Frist kündigen kann, funktionieren als Verkaufsstrategie, weil Menschen irrational handeln.',
      'Die Einschätzungen von Experten werden durch ihre Erfahrung und ihr Wissen vollständig "verankert", sodass sie nicht von äußeren Umständen beeinflusst werden.',
      'Indifferenzkurven sind nicht mehr eindeutig definiert, wenn die Anfangsausstattung eine Rolle für die Wertschätzung eines Gutes spielt.',
    ],
    choicesEn: [
      'The personal valuation of a good is typically higher when one already owns it.',
      'Cheap or even free subscriptions that can be cancelled within a short period work as a sales strategy because people act irrationally.',
      'Expert assessments are fully "anchored" by their experience and knowledge, so they are not influenced by external circumstances.',
      'Indifference curves are no longer uniquely defined when the initial endowment plays a role in the valuation of a good.',
    ],
    correctChoiceIndex: 2,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Der Ankereffekt (Anchoring Bias) betrifft auch Expert:innen: Selbst erfahrene Fachleute werden durch irrelevante Anker beeinflusst. ' +
      'Die Aussage, dass Expert:innen vollständig durch Erfahrung „verankert" seien und nicht von äußeren Umständen beeinflusst werden, ist <strong>falsch</strong>.</p>' +
      '<p>A ist richtig (Endowment Effect). B ist richtig (Status-quo-Bias/Endowment Effect bei Probeabonnements). D ist richtig (Indifferenzkurven hängen bei Verlustaversion von der Anfangsausstattung ab).</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>The anchoring bias affects experts too: even experienced professionals are influenced by irrelevant anchors. ' +
      'The statement that experts are fully "anchored" by their experience and unaffected by external circumstances is <strong>false</strong>.</p>' +
      '<p>A is correct (endowment effect). B is correct (status quo bias / endowment effect with trial subscriptions). D is correct (indifference curves depend on the initial endowment when loss aversion is present).</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'de-mc-18',
    subjectId: 'verhaltensoekonomie',
    titleDe: 'Overconfidence – Svenson (1981)',
    titleEn: 'Overconfidence – Svenson (1981)',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'choice',
    bodyDe:
      '<p>Eine bekannte Studie von Svenson (1981) ergab, dass sich Autofahrer im Allgemeinen als überdurchschnittlich sichere Fahrer betrachten, insbesondere im Vergleich zu anderen Fahrern in einer homogenen Gruppe der sie gehören. Welche Aussage ist <strong>korrekt</strong>?</p>',
    bodyEn:
      '<p>A well-known study by Svenson (1981) found that drivers generally consider themselves to be above-average safe drivers, especially compared to other drivers in a homogeneous group to which they belong. Which statement is <strong>correct</strong>?</p>',
    choicesDe: [
      'Das Phänomen, dass sich über 50% der Fahrer als überdurchschnittlich ansehen, wird als "overestimation" bezeichnet.',
      'Menschen neigen auch dazu, ihre Vorhersagen als übermäßig genau einzuschätzen.',
      '"Overplacement" beschreibt ein weit verbreitetes Phänomen: Menschen überschätzen ihren Fähigkeitsrang in der Verteilung innerhalb einer Gruppe.',
      'Selbstüberschätzung führt auf Wertpapierbörsen zu suboptimal aktivem Handeln, insbesondere bei weiblichen Teilnehmern.',
    ],
    choicesEn: [
      'The phenomenon that over 50% of drivers consider themselves above average is called "overestimation".',
      'People also tend to assess their predictions as overly precise.',
      '"Overplacement" describes a widespread phenomenon: people overestimate their ability rank in the distribution within a group.',
      'Overconfidence leads to suboptimally active trading on stock exchanges, especially among female participants.',
    ],
    correctChoiceIndex: 2,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Die drei Formen der Selbstüberschätzung (Overconfidence) sind: <strong>Overestimation</strong> (Überschätzung der eigenen absoluten Leistung), ' +
      '<strong>Overplacement</strong> (Überschätzung des eigenen Rangs in einer Gruppe) und <strong>Overprecision</strong> (Überschätzung der Genauigkeit eigener Prognosen).</p>' +
      '<p>Svensons Studie zeigt Overplacement: Fahrer überschätzen ihren Rang im Vergleich zu anderen. ' +
      'A ist falsch: Das Phänomen heißt Overplacement, nicht Overestimation. ' +
      'D ist falsch: Überaktives Handeln betrifft vor allem männliche Teilnehmer (Barber &amp; Odean, 2001).</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>The three forms of overconfidence are: <strong>overestimation</strong> (overestimating one\'s own absolute performance), ' +
      '<strong>overplacement</strong> (overestimating one\'s rank within a group), and <strong>overprecision</strong> (overestimating the accuracy of one\'s predictions).</p>' +
      '<p>Svenson\'s study demonstrates overplacement: drivers overestimate their rank compared to others. ' +
      'A is false: the phenomenon is called overplacement, not overestimation. ' +
      'D is false: excessively active trading primarily affects male participants (Barber &amp; Odean, 2001).</p>',
    solutionSource: 'suggested',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Probeklausur – Aufgabe 2: Nutzenmaximierung  (20 Punkte, freeform)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'de-ff-2',
    subjectId: 'nachfrage',
    titleDe: 'Nutzenmaximierung – perfekte Komplemente',
    titleEn: 'Utility Maximization – Perfect Complements',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'freeform',
    bodyDe:
      '<p>Betrachten Sie die Nutzenfunktion $u(x_1, x_2) = \\min\\{2x_1,\\; 4x_2\\}$.</p>' +
      '<ol>' +
      '<li>In welcher Beziehung stehen die beiden Güter zueinander? Begründen Sie Ihre Antwort.</li>' +
      '<li>Warum repräsentiert $\\min\\{25x_1 + 2,\\; 50x_2 + 2\\}$ dieselben Präferenzen wie $u$?</li>' +
      '<li>Zeichnen Sie ein Diagramm mit Budgetgerade und Indifferenzkurven und markieren Sie das optimale Bündel.</li>' +
      '<li>Bestimmen Sie das optimale Bündel bei $\\frac{p_1}{p_2} = 0{,}5$ und $m = 100$.</li>' +
      '<li>Erklären Sie das Konzept der Grenzrate der Substitution (GRS). Wo ist die GRS bei perfekten Komplementen nicht definiert?</li>' +
      '<li>Unterscheiden Sie inferiore und normale Güter. Geben Sie jeweils ein Beispiel.</li>' +
      '</ol>',
    bodyEn:
      '<p>Consider the utility function $u(x_1, x_2) = \\min\\{2x_1,\\; 4x_2\\}$.</p>' +
      '<ol>' +
      '<li>What is the relationship between the two goods? Justify your answer.</li>' +
      '<li>Why does $\\min\\{25x_1 + 2,\\; 50x_2 + 2\\}$ represent the same preferences as $u$?</li>' +
      '<li>Draw a diagram with the budget line and indifference curves and indicate the optimal bundle.</li>' +
      '<li>Determine the optimal bundle when $\\frac{p_1}{p_2} = 0.5$ and $m = 100$.</li>' +
      '<li>Explain the concept of the marginal rate of substitution (MRS). Where is the MRS undefined for perfect complements?</li>' +
      '<li>Distinguish between inferior and normal goods. Give an example of each.</li>' +
      '</ol>',
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p><strong>1. Beziehung der Güter</strong></p>' +
      '<p>Die Nutzenfunktion $u(x_1, x_2) = \\min\\{2x_1,\\; 4x_2\\}$ beschreibt <strong>perfekte Komplemente</strong>. ' +
      'Die Güter werden in einem festen Verhältnis konsumiert. Der Nutzen steigt nur, wenn beide Güter proportional erhöht werden. ' +
      'Entlang des optimalen Konsumpfades gilt $2x_1 = 4x_2$, also $x_1 = 2x_2$.</p>' +
      '<p><strong>2. Monotone Transformation</strong></p>' +
      '<p>$\\min\\{25x_1 + 2,\\; 50x_2 + 2\\}$ stellt dieselben Präferenzen dar, weil die Funktion $f(z) = 12{,}5z + 2$ eine streng monoton steigende Transformation ist. ' +
      'Es gilt: $25x_1 + 2 = 12{,}5 \\cdot 2x_1 + 2$ und $50x_2 + 2 = 12{,}5 \\cdot 4x_2 + 2$. ' +
      'Da $f$ streng monoton steigend ist, bleibt die Rangordnung aller Bündel erhalten.</p>' +
      '<p><strong>3. Diagramm</strong></p>' +
      '<p>Die Indifferenzkurven sind L-förmig mit Knickpunkten auf der Geraden $x_1 = 2x_2$ (bzw. $x_2 = \\frac{x_1}{2}$). ' +
      'Das optimale Bündel liegt am Schnittpunkt der Budgetgeraden $p_1 x_1 + p_2 x_2 = m$ mit der Knickpunktgeraden $x_1 = 2x_2$.</p>' +
      '<p><strong>4. Optimales Bündel</strong></p>' +
      '<p>Gegeben: $\\frac{p_1}{p_2} = 0{,}5$ und $m = 100$. Sei $p_2 = p$, dann $p_1 = 0{,}5p$.</p>' +
      '<p>Optimalbedingung: $2x_1 = 4x_2 \\Rightarrow x_1 = 2x_2$.</p>' +
      '<p>Budgetrestriktion: $0{,}5p \\cdot 2x_2 + p \\cdot x_2 = 100 \\Rightarrow 2p \\cdot x_2 = 100 \\Rightarrow x_2 = \\frac{50}{p}$.</p>' +
      '<p>$x_1 = 2x_2 = \\frac{100}{p}$.</p>' +
      '<p>Für konkretes Beispiel $p_1 = 1, p_2 = 2$: $x_2 = \\frac{50}{2} = 25$ und $x_1 = 50$. ' +
      'Probe: $1 \\cdot 50 + 2 \\cdot 25 = 100$ ✓. Nutzen: $\\min\\{100, 100\\} = 100$.</p>' +
      '<p><strong>5. Grenzrate der Substitution (GRS)</strong></p>' +
      '<p>Die GRS misst die Rate, zu der ein Konsument bereit ist, Gut 2 gegen Gut 1 zu tauschen, bei konstantem Nutzenniveau: $GRS = -\\frac{dx_2}{dx_1}\\big|_{u = \\text{const}}$. ' +
      'Alternativ: $GRS = \\frac{MU_1}{MU_2}$.</p>' +
      '<p>Bei perfekten Komplementen ist die GRS am <strong>Knickpunkt</strong> ($2x_1 = 4x_2$) <strong>nicht definiert</strong>, da die Indifferenzkurve dort nicht differenzierbar ist. ' +
      'Auf dem waagerechten Teil ist $GRS = 0$, auf dem senkrechten Teil ist $GRS = \\infty$.</p>' +
      '<p><strong>6. Inferiore und normale Güter</strong></p>' +
      '<p><strong>Normales Gut:</strong> Die nachgefragte Menge steigt mit dem Einkommen ($\\frac{\\partial x}{\\partial m} > 0$). Beispiel: Bio-Lebensmittel.</p>' +
      '<p><strong>Inferiores Gut:</strong> Die nachgefragte Menge sinkt mit steigendem Einkommen ($\\frac{\\partial x}{\\partial m} < 0$). Beispiel: Instant-Nudeln.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p><strong>1. Relationship between the goods</strong></p>' +
      '<p>The utility function $u(x_1, x_2) = \\min\\{2x_1,\\; 4x_2\\}$ describes <strong>perfect complements</strong>. ' +
      'The goods are consumed in a fixed proportion. Utility increases only when both goods are increased proportionally. ' +
      'Along the optimal consumption path: $2x_1 = 4x_2$, i.e., $x_1 = 2x_2$.</p>' +
      '<p><strong>2. Monotone transformation</strong></p>' +
      '<p>$\\min\\{25x_1 + 2,\\; 50x_2 + 2\\}$ represents the same preferences because the function $f(z) = 12.5z + 2$ is a strictly monotonically increasing transformation. ' +
      'We have $25x_1 + 2 = 12.5 \\cdot 2x_1 + 2$ and $50x_2 + 2 = 12.5 \\cdot 4x_2 + 2$. ' +
      'Since $f$ is strictly increasing, the ranking of all bundles is preserved.</p>' +
      '<p><strong>3. Diagram</strong></p>' +
      '<p>The indifference curves are L-shaped with kink points on the line $x_1 = 2x_2$ (or $x_2 = \\frac{x_1}{2}$). ' +
      'The optimal bundle lies at the intersection of the budget line $p_1 x_1 + p_2 x_2 = m$ with the kink line $x_1 = 2x_2$.</p>' +
      '<p><strong>4. Optimal bundle</strong></p>' +
      '<p>Given: $\\frac{p_1}{p_2} = 0.5$ and $m = 100$. Let $p_2 = p$, then $p_1 = 0.5p$.</p>' +
      '<p>Optimality condition: $2x_1 = 4x_2 \\Rightarrow x_1 = 2x_2$.</p>' +
      '<p>Budget constraint: $0.5p \\cdot 2x_2 + p \\cdot x_2 = 100 \\Rightarrow 2p \\cdot x_2 = 100 \\Rightarrow x_2 = \\frac{50}{p}$.</p>' +
      '<p>$x_1 = 2x_2 = \\frac{100}{p}$.</p>' +
      '<p>For a concrete example with $p_1 = 1, p_2 = 2$: $x_2 = \\frac{50}{2} = 25$ and $x_1 = 50$. ' +
      'Check: $1 \\cdot 50 + 2 \\cdot 25 = 100$ ✓. Utility: $\\min\\{100, 100\\} = 100$.</p>' +
      '<p><strong>5. Marginal Rate of Substitution (MRS)</strong></p>' +
      '<p>The MRS measures the rate at which a consumer is willing to trade good 2 for good 1 while maintaining constant utility: $MRS = -\\frac{dx_2}{dx_1}\\big|_{u = \\text{const}}$. ' +
      'Alternatively: $MRS = \\frac{MU_1}{MU_2}$.</p>' +
      '<p>For perfect complements, the MRS is <strong>undefined at the kink point</strong> ($2x_1 = 4x_2$), because the indifference curve is not differentiable there. ' +
      'On the horizontal segment, $MRS = 0$; on the vertical segment, $MRS = \\infty$.</p>' +
      '<p><strong>6. Inferior and normal goods</strong></p>' +
      '<p><strong>Normal good:</strong> Quantity demanded increases with income ($\\frac{\\partial x}{\\partial m} > 0$). Example: organic food.</p>' +
      '<p><strong>Inferior good:</strong> Quantity demanded decreases with rising income ($\\frac{\\partial x}{\\partial m} < 0$). Example: instant noodles.</p>',
    solutionSource: 'suggested',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Probeklausur – Aufgabe 3: Externalitäten  (25 Punkte, freeform)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'de-ff-3',
    subjectId: 'externalitaeten',
    titleDe: 'Externalitäten – Zementindustrie',
    titleEn: 'Externalities – Cement Industry',
    source: 'demo-exam',
    sourceLabel: 'Probeklausur',
    type: 'freeform',
    bodyDe:
      '<p>In der Zementindustrie verursacht die Produktion externe Kosten (z.B. CO$_2$-Emissionen). Die inverse Nachfragefunktion lautet $p_D = 10 - 4q_D$ und die inverse Angebotsfunktion $p_S = -5 + 3q_S$. Die externen Grenzkosten sind quadratisch.</p>' +
      '<ol>' +
      '<li><strong>(4 Punkte)</strong> Erklären Sie das Konzept einer Externalität. Was ist eine negative externe Externalität?</li>' +
      '<li><strong>(4 Punkte)</strong> Bestimmen Sie das soziale Optimum.</li>' +
      '<li><strong>(5 Punkte)</strong> Bestimmen Sie das Marktgleichgewicht und den Wohlfahrtsverlust (DWL).</li>' +
      '<li><strong>(4 Punkte)</strong> Erklären Sie das Konzept einer Pigou-Steuer.</li>' +
      '<li><strong>(5 Punkte)</strong> Berechnen Sie die optimale Pigou-Steuer für diesen Markt.</li>' +
      '<li><strong>(3 Punkte)</strong> Nennen Sie zwei weitere Instrumente zur Internalisierung externer Effekte.</li>' +
      '</ol>',
    bodyEn:
      '<p>In the cement industry, production causes external costs (e.g., CO$_2$ emissions). The inverse demand function is $p_D = 10 - 4q_D$ and the inverse supply function is $p_S = -5 + 3q_S$. The external marginal costs are quadratic.</p>' +
      '<ol>' +
      '<li><strong>(4 points)</strong> Explain the concept of an externality. What is a negative externality?</li>' +
      '<li><strong>(4 points)</strong> Determine the social optimum.</li>' +
      '<li><strong>(5 points)</strong> Determine the market equilibrium and the deadweight loss (DWL).</li>' +
      '<li><strong>(4 points)</strong> Explain the concept of a Pigou tax.</li>' +
      '<li><strong>(5 points)</strong> Calculate the optimal Pigou tax for this market.</li>' +
      '<li><strong>(3 points)</strong> Name two other instruments for internalizing external effects.</li>' +
      '</ol>',
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p><strong>1. Konzept der Externalität</strong></p>' +
      '<p>Eine Externalität liegt vor, wenn die Handlung eines Wirtschaftssubjekts den Nutzen oder die Kosten eines anderen beeinflusst, ohne dass dies über den Marktpreis kompensiert wird. ' +
      'Eine <strong>negative Externalität</strong> entsteht, wenn eine wirtschaftliche Aktivität Dritten Kosten auferlegt, die nicht im Marktpreis enthalten sind ' +
      '(z.B. CO$_2$-Emissionen der Zementproduktion verursachen Umweltschäden).</p>' +
      '<p><strong>2. Soziales Optimum</strong></p>' +
      '<p>Hinweis: Die externen Grenzkosten (EMC) werden als quadratisch angegeben, jedoch fehlt in der Aufgabenstellung die explizite Formel. ' +
      'Wir nehmen eine typische Form an, z.B. $EMC(q) = q^2$.</p>' +
      '<p>Soziale Grenzkosten: $SMC = p_S + EMC = (-5 + 3q) + q^2 = q^2 + 3q - 5$.</p>' +
      '<p>Soziales Optimum: $SMC = p_D$:</p>' +
      '<p>$$q^2 + 3q - 5 = 10 - 4q$$</p>' +
      '<p>$$q^2 + 7q - 15 = 0$$</p>' +
      '<p>$$q^{*}_{\\text{soz}} = \\frac{-7 + \\sqrt{49 + 60}}{2} = \\frac{-7 + \\sqrt{109}}{2} \\approx \\frac{-7 + 10{,}44}{2} \\approx 1{,}72$$</p>' +
      '<p>$p^{*}_{\\text{soz}} = 10 - 4 \\cdot 1{,}72 \\approx 3{,}12$.</p>' +
      '<p><strong>3. Marktgleichgewicht und DWL</strong></p>' +
      '<p>Ohne Berücksichtigung der Externalität: $p_S = p_D$:</p>' +
      '<p>$$-5 + 3q = 10 - 4q \\Rightarrow 7q = 15 \\Rightarrow q^{*}_{\\text{Markt}} = \\frac{15}{7} \\approx 2{,}14$$</p>' +
      '<p>$$p^{*}_{\\text{Markt}} = 10 - 4 \\cdot \\frac{15}{7} = 10 - \\frac{60}{7} = \\frac{10}{7} \\approx 1{,}43$$</p>' +
      '<p>Der Markt produziert zu viel ($q_{\\text{Markt}} > q_{\\text{soz}}$). Der Wohlfahrtsverlust (DWL) entspricht der Fläche zwischen der SMC-Kurve und der Nachfragekurve im Intervall $[q_{\\text{soz}},\\, q_{\\text{Markt}}]$:</p>' +
      '<p>$$DWL = \\int_{q_{\\text{soz}}}^{q_{\\text{Markt}}} (SMC(q) - p_D(q))\\, dq = \\int_{1{,}72}^{2{,}14} (q^2 + 7q - 15)\\, dq$$</p>' +
      '<p>(Der genaue Wert hängt von der konkreten EMC-Funktion ab, die in der Klausur angegeben wurde.)</p>' +
      '<p><strong>4. Konzept der Pigou-Steuer</strong></p>' +
      '<p>Eine Pigou-Steuer ist eine Mengensteuer, die genau in Höhe des externen Grenzschadens im sozialen Optimum erhoben wird. ' +
      'Dadurch werden die privaten Grenzkosten auf das Niveau der sozialen Grenzkosten angehoben und die Marktteilnehmer internalisieren die Externalität. ' +
      'Das Marktergebnis mit Steuer entspricht dann dem sozialen Optimum.</p>' +
      '<p><strong>5. Optimale Pigou-Steuer</strong></p>' +
      '<p>Die optimale Pigou-Steuer entspricht den externen Grenzkosten, bewertet an der sozial optimalen Menge:</p>' +
      '<p>$$t^* = EMC(q^{*}_{\\text{soz}}) = (q^{*}_{\\text{soz}})^2 \\approx (1{,}72)^2 \\approx 2{,}96$$</p>' +
      '<p>Prüfung: Mit Steuer wird das neue Angebot $p_S^{\\prime} = -5 + 3q + t^*$. Im Gleichgewicht mit Nachfrage ergibt sich die sozial optimale Menge.</p>' +
      '<p><strong>6. Weitere Instrumente</strong></p>' +
      '<ul>' +
      '<li><strong>Emissionshandel (Cap-and-Trade):</strong> Festlegung einer Gesamtemissionsmenge und Handel mit Emissionsrechten.</li>' +
      '<li><strong>Coase-Verhandlung:</strong> Zuordnung von Eigentumsrechten und Verhandlung zwischen den betroffenen Parteien (bei niedrigen Transaktionskosten).</li>' +
      '</ul>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p><strong>1. Concept of an externality</strong></p>' +
      '<p>An externality arises when the action of one economic agent affects the utility or costs of another agent without this being reflected in the market price. ' +
      'A <strong>negative externality</strong> occurs when an economic activity imposes costs on third parties that are not included in the market price ' +
      '(e.g., CO$_2$ emissions from cement production cause environmental damage).</p>' +
      '<p><strong>2. Social optimum</strong></p>' +
      '<p>Note: The external marginal costs (EMC) are stated to be quadratic, but the explicit formula is not given in the problem. ' +
      'We assume a typical form, e.g., $EMC(q) = q^2$.</p>' +
      '<p>Social marginal cost: $SMC = p_S + EMC = (-5 + 3q) + q^2 = q^2 + 3q - 5$.</p>' +
      '<p>Social optimum: $SMC = p_D$:</p>' +
      '<p>$$q^2 + 3q - 5 = 10 - 4q$$</p>' +
      '<p>$$q^2 + 7q - 15 = 0$$</p>' +
      '<p>$$q^{*}_{\\text{soc}} = \\frac{-7 + \\sqrt{49 + 60}}{2} = \\frac{-7 + \\sqrt{109}}{2} \\approx \\frac{-7 + 10.44}{2} \\approx 1.72$$</p>' +
      '<p>$p^{*}_{\\text{soc}} = 10 - 4 \\times 1.72 \\approx 3.12$.</p>' +
      '<p><strong>3. Market equilibrium and DWL</strong></p>' +
      '<p>Without considering the externality: $p_S = p_D$:</p>' +
      '<p>$$-5 + 3q = 10 - 4q \\Rightarrow 7q = 15 \\Rightarrow q^{*}_{\\text{mkt}} = \\frac{15}{7} \\approx 2.14$$</p>' +
      '<p>$$p^{*}_{\\text{mkt}} = 10 - 4 \\cdot \\frac{15}{7} = \\frac{10}{7} \\approx 1.43$$</p>' +
      '<p>The market overproduces ($q_{\\text{mkt}} > q_{\\text{soc}}$). The deadweight loss (DWL) is the area between the SMC curve and the demand curve over the interval $[q_{\\text{soc}},\\, q_{\\text{mkt}}]$:</p>' +
      '<p>$$DWL = \\int_{q_{\\text{soc}}}^{q_{\\text{mkt}}} (SMC(q) - p_D(q))\\, dq$$</p>' +
      '<p>(The exact value depends on the specific EMC function given in the exam.)</p>' +
      '<p><strong>4. Concept of a Pigou tax</strong></p>' +
      '<p>A Pigou tax is a per-unit tax set exactly equal to the marginal external damage at the social optimum. ' +
      'This raises private marginal costs to the level of social marginal costs, causing market participants to internalize the externality. ' +
      'The market outcome with the tax then corresponds to the social optimum.</p>' +
      '<p><strong>5. Optimal Pigou tax</strong></p>' +
      '<p>The optimal Pigou tax equals the external marginal cost evaluated at the socially optimal quantity:</p>' +
      '<p>$$t^* = EMC(q^{*}_{\\text{soc}}) = (q^{*}_{\\text{soc}})^2 \\approx (1.72)^2 \\approx 2.96$$</p>' +
      '<p>Verification: with the tax, the new supply is $p_S^{\\prime} = -5 + 3q + t^*$. In equilibrium with demand, the socially optimal quantity results.</p>' +
      '<p><strong>6. Other instruments</strong></p>' +
      '<ul>' +
      '<li><strong>Emissions trading (cap-and-trade):</strong> Setting a total emission cap and trading emission permits.</li>' +
      '<li><strong>Coase bargaining:</strong> Assigning property rights and letting affected parties negotiate (when transaction costs are low).</li>' +
      '</ul>',
    solutionSource: 'suggested',
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // Klausur WiSe 2024/25 – Single Choice  (18 Aufgaben)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'w24-mc-1',
    subjectId: 'nachfrage',
    titleDe: 'Präferenzannahmen',
    titleEn: 'Preference Assumptions',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Präferenzen müssen eine Reihe von Eigenschaften erfüllen, um die Herleitung wohlverhaltener Nachfragefunktionen zu ermöglichen. Welche Aussage zu diesen Annahmen ist <strong>falsch</strong>?</p>',
    bodyEn:
      '<p>Preferences must satisfy a number of properties to enable the derivation of well-behaved demand functions. Which statement about these assumptions is <strong>false</strong>?</p>',
    choicesDe: [
      '„Vernünftige" Präferenzen implizieren, dass ein Konsument alle Optionen gegeneinander abwägen können muss.',
      'Annahmegemäß dürfen keine Zirkelpräferenzen entstehen, bei denen Gut 1 dem Gut 2 vorgezogen wird, Gut 2 dem Gut 3, und Gut 3 dem Gut 1.',
      'Um wohlverhaltene Nachfragefunktionen zu erhalten, muss bei den Konsument/innen eine Sättigung bei steigendem Konsum eintreten.',
      'Präferenzen müssen reflexiv sein.',
    ],
    choicesEn: [
      '"Reasonable" preferences imply that a consumer must be able to compare all options against each other.',
      'By assumption, no circular preferences may arise in which good 1 is preferred to good 2, good 2 to good 3, and good 3 to good 1.',
      'To obtain well-behaved demand functions, consumers must experience satiation as consumption increases.',
      'Preferences must be reflexive.',
    ],
    correctChoiceIndex: 2,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Wohlverhaltene Präferenzen erfordern <strong>Nichtsättigung</strong> (mehr ist besser), nicht Sättigung. Vollständigkeit (Antwort a), Transitivität (Antwort b) und Reflexivität (Antwort d) sind korrekte Annahmen. Die Aussage, dass eine Sättigung eintreten muss, ist falsch – im Gegenteil wird angenommen, dass Konsumenten stets mehr bevorzugen.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Well-behaved preferences require <strong>non-satiation</strong> (more is better), not satiation. Completeness (answer a), transitivity (answer b), and reflexivity (answer d) are correct assumptions. The claim that satiation must occur is false – on the contrary, consumers are assumed to always prefer more.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-2',
    subjectId: 'nachfrage',
    titleDe: 'Nachfragereaktionen auf Preisänderungen',
    titleEn: 'Demand Reactions to Price Changes',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Die Nachfrage nach Gütern und Dienstleistungen kann sehr unterschiedlich auf Preisveränderungen reagieren. Welche Aussage ist <strong>korrekt</strong>?</p>',
    bodyEn:
      '<p>Demand for goods and services can react very differently to price changes. Which statement is <strong>correct</strong>?</p>',
    choicesDe: [
      'Der Substitutionseffekt ist immer positiv.',
      'Giffen Güter sind immer inferiore Güter.',
      'Bei Cobb-Douglas Präferenzen sind Güter immer perfekte Komplemente.',
      'Der Konsum notwendiger Güter weist eine sehr hohe positive Einkommenselastizität auf.',
    ],
    choicesEn: [
      'The substitution effect is always positive.',
      'Giffen goods are always inferior goods.',
      'With Cobb-Douglas preferences, goods are always perfect complements.',
      'The consumption of necessities has a very high positive income elasticity.',
    ],
    correctChoiceIndex: 1,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Ein Giffen-Gut ist definitionsgemäß ein Gut, bei dem die Nachfrage bei steigendem Preis zunimmt. Dies ist nur möglich, wenn der (negative) Einkommenseffekt den Substitutionseffekt überwiegt – und das setzt voraus, dass das Gut inferior ist. Daher sind Giffen-Güter stets inferiore Güter (aber nicht umgekehrt). Der Substitutionseffekt ist stets negativ (nicht positiv), Cobb-Douglas-Präferenzen erzeugen keine perfekten Komplemente, und notwendige Güter haben eine niedrige Einkommenselastizität ($0 < \\varepsilon_I < 1$).</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>A Giffen good is by definition a good whose demand increases when its price rises. This is only possible when the (negative) income effect outweighs the substitution effect, which requires the good to be inferior. Hence Giffen goods are always inferior goods (but not vice versa). The substitution effect is always negative (not positive), Cobb-Douglas preferences do not produce perfect complements, and necessities have a low income elasticity ($0 < \\varepsilon_I < 1$).</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-3',
    subjectId: 'nachfrage',
    titleDe: 'Perfekte Substitute – Streaming',
    titleEn: 'Perfect Substitutes – Streaming',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Streamingdienste wie Netflix oder Amazon Prime sind hochsubstituierbar, auch wenn die meisten Menschen eine Präferenz für einen Anbieter haben. Annes Nutzen kann beispielsweise durch die Funktion $U(x_1, x_2) = x_1 + 0{,}5x_2$ dargestellt werden, wobei $x_i$, $i = 1, 2,$ die Zeit in Minuten darstellt, die sie auf den jeweiligen Plattformen verbringt. Wir nehmen daher an, dass jede Minute Streaming einen Preis von $p_i$, $i=1,2$ hat. Welche Aussage ist <strong>falsch</strong>?</p>',
    bodyEn:
      '<p>Streaming services like Netflix or Amazon Prime are highly substitutable, even though most people have a preference for one provider. Anne\'s utility can be represented by the function $U(x_1, x_2) = x_1 + 0.5x_2$, where $x_i$, $i = 1, 2,$ represents the time in minutes she spends on each platform. We therefore assume that each minute of streaming has a price of $p_i$, $i=1,2$. Which statement is <strong>false</strong>?</p>',
    choicesDe: [
      'Bei $p_1 = 0{,}04$ EUR und $p_2 = 0{,}01$ EUR streamt Anne nur auf Anbieter 2.',
      'Bei einem Budget von 36 EUR und Preisen $p_1 = 0{,}04$ und $p_2 = 0{,}09$ EUR streamt Anne 400 Minuten.',
      'Bei $p_1 = 0{,}08$ EUR darf $p_2$ maximal $0{,}04$ EUR betragen, damit Anne noch bereit wäre, bei Plattform 2 zu streamen.',
      'Anne erhält beim Streaming auf Plattform 1 einen doppelt so hohen Grenznutzen als beim Streaming auf Plattform 2.',
    ],
    choicesEn: [
      'At $p_1 = 0.04$ EUR and $p_2 = 0.01$ EUR, Anne only streams on provider 2.',
      'With a budget of 36 EUR and prices $p_1 = 0.04$ and $p_2 = 0.09$ EUR, Anne streams for 400 minutes.',
      'At $p_1 = 0.08$ EUR, $p_2$ must be at most $0.04$ EUR for Anne to still be willing to stream on platform 2.',
      'Anne receives double the marginal utility from streaming on platform 1 compared to streaming on platform 2.',
    ],
    correctChoiceIndex: 1,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Bei perfekten Substituten vergleicht Anne den Grenznutzen pro Euro: $\\frac{MU_1}{p_1}$ vs. $\\frac{MU_2}{p_2}$. Hier: $MU_1 = 1$, $MU_2 = 0{,}5$.</p>' +
      '<p>Aussage a: $\\frac{1}{0{,}04}=25$ vs. $\\frac{0{,}5}{0{,}01}=50$. Da $50 > 25$, streamt Anne nur auf Plattform 2 – korrekt.</p>' +
      '<p>Aussage b: $\\frac{1}{0{,}04}=25 > \\frac{0{,}5}{0{,}09}\\approx 5{,}6$, Anne wählt nur Plattform 1: $x_1 = \\frac{36}{0{,}04} = 900$ Minuten, nicht 400 – <strong>falsch</strong>.</p>' +
      '<p>Aussage c: Bei $p_1=0{,}08$ streamt Anne auf Plattform 2 wenn $\\frac{0{,}5}{p_2} \\geq \\frac{1}{0{,}08}=12{,}5$, also $p_2 \\leq 0{,}04$ – korrekt.</p>' +
      '<p>Aussage d: $MU_1 = 1 = 2 \\cdot 0{,}5 = 2 \\cdot MU_2$ – korrekt.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>With perfect substitutes, Anne compares marginal utility per euro: $\\frac{MU_1}{p_1}$ vs. $\\frac{MU_2}{p_2}$. Here $MU_1 = 1$, $MU_2 = 0.5$.</p>' +
      '<p>Statement a: $\\frac{1}{0.04}=25$ vs. $\\frac{0.5}{0.01}=50$. Since $50 > 25$, Anne streams only on platform 2 – correct.</p>' +
      '<p>Statement b: $\\frac{1}{0.04}=25 > \\frac{0.5}{0.09}\\approx 5.6$, Anne chooses only platform 1: $x_1 = \\frac{36}{0.04} = 900$ minutes, not 400 – <strong>false</strong>.</p>' +
      '<p>Statement c: At $p_1=0.08$, Anne streams on platform 2 when $\\frac{0.5}{p_2} \\geq \\frac{1}{0.08}=12.5$, so $p_2 \\leq 0.04$ – correct.</p>' +
      '<p>Statement d: $MU_1 = 1 = 2 \\times 0.5 = 2 \\times MU_2$ – correct.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-4',
    subjectId: 'spieltheorie',
    titleDe: 'Gefangenendilemma – Parameter',
    titleEn: 'Prisoner\'s Dilemma – Parameters',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Betrachten Sie eine Art Gefangenendilemma in dem die beiden Spieler entweder Reden oder Schweigen können, aber nicht voneinander wissen, was der andere tut. Die Payoffs lauten wie unten angegeben. Welche Aussage ist <strong>korrekt</strong>?</p>' +
      '<table>' +
      '<tr><td></td><td></td><td colspan="2"><strong>Gefangener 2</strong></td></tr>' +
      '<tr><td></td><td></td><td><strong>Schweigen</strong></td><td><strong>Reden</strong></td></tr>' +
      '<tr><td rowspan="2"><strong>Gefangener 1</strong></td><td><strong>Schweigen</strong></td><td>$A, B$</td><td>$0, 0$</td></tr>' +
      '<tr><td><strong>Reden</strong></td><td>$C, 0$</td><td>$1, 1$</td></tr>' +
      '</table>',
    bodyEn:
      '<p>Consider a type of prisoner\'s dilemma in which the two players can either talk or remain silent, but do not know what the other does. The payoffs are as shown below. Which statement is <strong>correct</strong>?</p>' +
      '<table>' +
      '<tr><td></td><td></td><td colspan="2"><strong>Prisoner 2</strong></td></tr>' +
      '<tr><td></td><td></td><td><strong>Silent</strong></td><td><strong>Talk</strong></td></tr>' +
      '<tr><td rowspan="2"><strong>Prisoner 1</strong></td><td><strong>Silent</strong></td><td>$A, B$</td><td>$0, 0$</td></tr>' +
      '<tr><td><strong>Talk</strong></td><td>$C, 0$</td><td>$1, 1$</td></tr>' +
      '</table>',
    choicesDe: [
      '(Schweigen, Schweigen) ist immer dann ein Nash-Gleichgewicht, wenn $A > C$ und $B > D$.',
      '$A > C$ schließt aus, dass es dominante Strategien gibt.',
      'Das uneinheitliche Gleichgewicht (Reden, Reden) ist stabil solange $D > 1$.',
      'Wenn $C > A$ gibt es ein Gleichgewicht in strikt dominanten Strategien.',
    ],
    choicesEn: [
      '(Silent, Silent) is always a Nash equilibrium when $A > C$ and $B > D$.',
      '$A > C$ rules out the existence of dominant strategies.',
      'The non-uniform equilibrium (Talk, Talk) is stable as long as $D > 1$.',
      'When $C > A$, there is an equilibrium in strictly dominant strategies.',
    ],
    correctChoiceIndex: 3,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Betrachten wir die Payoff-Matrix: Spieler 1 erhält $A$ bei (Schweigen, Schweigen), $0$ bei (Schweigen, Reden), $C$ bei (Reden, Schweigen) und $1$ bei (Reden, Reden). Wenn $C > A$, dann ist Reden für Spieler 1 in beiden Fällen besser: $C > A$ (wenn 2 schweigt) und $1 > 0$ (wenn 2 redet). Reden ist somit strikt dominant für Spieler 1. Im Kontext eines Gefangenendilemmas gilt eine analoge Struktur für Spieler 2 (mit $B < 0$), sodass (Reden, Reden) ein Gleichgewicht in strikt dominanten Strategien ist.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Consider the payoff matrix: Player 1 receives $A$ at (Silent, Silent), $0$ at (Silent, Talk), $C$ at (Talk, Silent), and $1$ at (Talk, Talk). If $C > A$, then Talk is better for Player 1 in both cases: $C > A$ (when 2 is silent) and $1 > 0$ (when 2 talks). Talk is thus strictly dominant for Player 1. In the context of a prisoner\'s dilemma, an analogous structure applies to Player 2 (with $B < 0$), so (Talk, Talk) is an equilibrium in strictly dominant strategies.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-5',
    subjectId: 'spieltheorie',
    titleDe: 'Koordinationsspiel',
    titleEn: 'Coordination Game',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Koordinationsspiele haben oft asymmetrische Payoffs, da Spieler unterschiedlich hohen Nutzen davon haben, sich mit anderen zu koordinieren. Ein solches Spiel ist unten dargestellt. Welche Aussage ist <strong>falsch</strong>?</p>' +
      '<table>' +
      '<tr><td></td><td></td><td colspan="2"><strong>Spieler B</strong></td></tr>' +
      '<tr><td></td><td></td><td><strong>X</strong></td><td><strong>Y</strong></td></tr>' +
      '<tr><td rowspan="2"><strong>Spieler A</strong></td><td><strong>X</strong></td><td>$3, 2$</td><td>$0, 0$</td></tr>' +
      '<tr><td><strong>Y</strong></td><td>$0, 0$</td><td>$2, 3$</td></tr>' +
      '</table>',
    bodyEn:
      '<p>Coordination games often have asymmetric payoffs, since players derive different levels of utility from coordinating with others. Such a game is shown below. Which statement is <strong>false</strong>?</p>' +
      '<table>' +
      '<tr><td></td><td></td><td colspan="2"><strong>Player B</strong></td></tr>' +
      '<tr><td></td><td></td><td><strong>X</strong></td><td><strong>Y</strong></td></tr>' +
      '<tr><td rowspan="2"><strong>Player A</strong></td><td><strong>X</strong></td><td>$3, 2$</td><td>$0, 0$</td></tr>' +
      '<tr><td><strong>Y</strong></td><td>$0, 0$</td><td>$2, 3$</td></tr>' +
      '</table>',
    choicesDe: [
      'Es gibt zwei Gleichgewichte in reinen Strategien.',
      'Es gibt ein Gleichgewicht in gemischten Strategien: A und B spielen mit den Wahrscheinlichkeiten $p_A = \\frac{3}{5}$ und $p_B = \\frac{2}{5}$ die Strategie $X$.',
      'Selbst in Nash-Gleichgewichten ist es nicht garantiert, dass sich die Spieler tatsächlich koordinieren.',
      'Es gibt ein Gleichgewicht in gemischten Strategien: A und B spielen mit den Wahrscheinlichkeiten $p_A = \\frac{3}{5}$ und $p_B = \\frac{2}{5}$ die Strategie $Y$.',
    ],
    choicesEn: [
      'There are two equilibria in pure strategies.',
      'There is a mixed strategy equilibrium: A and B play strategy $X$ with probabilities $p_A = \\frac{3}{5}$ and $p_B = \\frac{2}{5}$.',
      'Even in Nash equilibria, it is not guaranteed that the players actually coordinate.',
      'There is a mixed strategy equilibrium: A and B play strategy $Y$ with probabilities $p_A = \\frac{3}{5}$ and $p_B = \\frac{2}{5}$.',
    ],
    correctChoiceIndex: 3,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Die reinen NE sind $(X,X)$ und $(Y,Y)$ – Aussage a ist korrekt. Für das gemischte GG: A mischt so, dass B indifferent ist: $2p_A + 0(1-p_A) = 0 \\cdot p_A + 3(1-p_A)$ $\\Rightarrow 2p_A = 3 - 3p_A$ $\\Rightarrow p_A = \\frac{3}{5}$. B mischt so, dass A indifferent ist: $3p_B = 2(1-p_B)$ $\\Rightarrow p_B = \\frac{2}{5}$. A spielt also $X$ mit $\\frac{3}{5}$ und B spielt $X$ mit $\\frac{2}{5}$ – das ist Aussage b (korrekt). Aussage d behauptet, $Y$ werde mit $p_A=\\frac{3}{5}$ und $p_B=\\frac{2}{5}$ gespielt. Tatsächlich spielt A $Y$ mit $\\frac{2}{5}$ und B $Y$ mit $\\frac{3}{5}$ – die Zuordnung in d ist also vertauscht und somit <strong>falsch</strong>.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>The pure NE are $(X,X)$ and $(Y,Y)$ – statement a is correct. For the mixed NE: A mixes to make B indifferent: $2p_A = 3(1-p_A)$ $\\Rightarrow p_A = \\frac{3}{5}$. B mixes to make A indifferent: $3p_B = 2(1-p_B)$ $\\Rightarrow p_B = \\frac{2}{5}$. So A plays $X$ with $\\frac{3}{5}$ and B plays $X$ with $\\frac{2}{5}$ – this is statement b (correct). Statement d claims $Y$ is played with $p_A=\\frac{3}{5}$ and $p_B=\\frac{2}{5}$. In fact, A plays $Y$ with $\\frac{2}{5}$ and B plays $Y$ with $\\frac{3}{5}$ – the assignment in d is swapped and therefore <strong>false</strong>.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-6',
    subjectId: 'spieltheorie',
    titleDe: 'Dynamische Spiele',
    titleEn: 'Dynamic Games',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Die Analyse von dynamischen Spielen erfordert eine Reihe von Konzepten. Welche Definition bzw. Beschreibung ist <strong>falsch</strong>?</p>',
    bodyEn:
      '<p>The analysis of dynamic games requires a number of concepts. Which definition or description is <strong>false</strong>?</p>',
    choicesDe: [
      'Rückwärtsinduktion beschreibt einen Algorithmus, der es ermöglicht, alle Nash-Gleichgewichte zu finden.',
      'Bei der grim-trigger-Strategie in wiederholten Gefangendilemma ist ein Spieler solange kooperativ bis der andere Spieler abweicht; in diesem Fall wird anschließend immer defektiert.',
      'Teilspielperfekte Nash-Gleichgewichte sind solche, die in jedem Teilspiel ein Nash-Gleichgewicht induzieren. Zu den Teilspielen gehört auch das gesamte Spiel.',
      'In der Vorlesung haben wir ein Teilspiel durch einen Entscheidungsknoten und alle im Spiel darauf folgenden Entscheidungen und Entscheidungsknoten definiert.',
    ],
    choicesEn: [
      'Backward induction describes an algorithm that makes it possible to find all Nash equilibria.',
      'In the grim trigger strategy in repeated prisoner\'s dilemmas, a player cooperates until the other player deviates; in that case, the player defects permanently thereafter.',
      'Subgame perfect Nash equilibria are those that induce a Nash equilibrium in every subgame. The subgames include the entire game itself.',
      'In the lecture, we defined a subgame by a decision node and all decisions and decision nodes that follow in the game.',
    ],
    correctChoiceIndex: 0,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Rückwärtsinduktion findet <strong>teilspielperfekte</strong> Nash-Gleichgewichte, nicht alle Nash-Gleichgewichte. In extensiven Spielen kann es weitere NE geben, die auf unglaubwürdigen Drohungen basieren und durch Rückwärtsinduktion ausgeschlossen werden. Die anderen Aussagen (Grim-Trigger, SPNE-Definition, Teilspiel-Definition) sind korrekte Beschreibungen.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Backward induction finds <strong>subgame perfect</strong> Nash equilibria, not all Nash equilibria. In extensive-form games there may be additional NE based on non-credible threats that backward induction eliminates. The other statements (grim trigger, SPNE definition, subgame definition) are correct descriptions.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-7',
    subjectId: 'verhaltensoekonomie',
    titleDe: 'Prospect Theory – Wertfunktion',
    titleEn: 'Prospect Theory – Value Function',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Das nebenstehende Diagramm beschreibt die typische „valuation"-Funktion, die dem editing Schritt der Prospect Theory zugrunde liegt. Welche Aussage bzgl. dieser Verhaltenstheorie ist <strong>korrekt</strong>?</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Prospect Theory Wertfunktion</strong><br>Siehe Klausur WiSe 24/25</span></div>',
    bodyEn:
      '<p>The adjacent diagram describes the typical "valuation" function underlying the editing step of Prospect Theory. Which statement regarding this behavioral theory is <strong>correct</strong>?</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Prospect Theory value function</strong><br>See Exam WiSe 24/25</span></div>',
    choicesDe: [
      'Nur bei absoluten Gewinnen sind Menschen risikoavers.',
      'Menschen sind nicht risikofreudig.',
      'Das Diagramm zeigt, dass Menschen große Wahrscheinlichkeiten im allgemeinen unterschätzen.',
      'Der Null- bzw. Referenzpunkt kann durch framing verschoben werden.',
    ],
    choicesEn: [
      'Only for absolute gains are people risk averse.',
      'People are not risk-loving.',
      'The diagram shows that people generally underestimate large probabilities.',
      'The zero or reference point can be shifted by framing.',
    ],
    correctChoiceIndex: 3,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Ein zentrales Merkmal der Prospect Theory ist, dass Bewertungen relativ zu einem <strong>Referenzpunkt</strong> stattfinden, der durch Framing beeinflusst werden kann. Aussage a ist ungenau (Risikoaversion gilt im Gewinnbereich relativ zum Referenzpunkt, nicht bei „absoluten" Gewinnen). Aussage b ist falsch, da Menschen im Verlustbereich risikofreudig sind. Aussage c ist falsch, da das Diagramm die Wertfunktion zeigt, nicht die Wahrscheinlichkeitsgewichtungsfunktion.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>A central feature of Prospect Theory is that evaluations occur relative to a <strong>reference point</strong> that can be influenced by framing. Statement a is imprecise (risk aversion applies in the gain domain relative to the reference point, not for "absolute" gains). Statement b is false because people are risk-seeking in the loss domain. Statement c is false because the diagram shows the value function, not the probability weighting function.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-8',
    subjectId: 'verhaltensoekonomie',
    titleDe: 'Dynamische Optimierung und Diskontierung',
    titleEn: 'Dynamic Optimization and Discounting',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Menschliches Verhalten unterliegt bei dynamischer Optimierung – wie z.B. bei Spar- oder Vorsorgeentscheidungen – gewissen Regularitäten, die zu gravierenden Problemen führen können. Welche Aussage ist <strong>falsch</strong>?</p>',
    bodyEn:
      '<p>Human behavior in dynamic optimization – such as saving or pension decisions – is subject to certain regularities that can lead to serious problems. Which statement is <strong>false</strong>?</p>',
    choicesDe: [
      'Konsument/innen sind durch ihr aktuelles Einkommen beschränkt, auch wenn ein vollständiger Kapitalmarkt gilt.',
      'Exponentielles Diskontieren liegt unternehmerischen Investitionsentscheidungen zugrunde.',
      'Hyperbolisches Diskontieren kann ein Grund dafür sein, dass Menschen heute zu wenig sparen.',
      'Zeitinkonsistenz ist eine Folge Hyperbolischen Diskontierens und kann oft durch Selbstbindung adressiert werden.',
    ],
    choicesEn: [
      'Consumers are constrained by their current income, even when a complete capital market exists.',
      'Exponential discounting underlies entrepreneurial investment decisions.',
      'Hyperbolic discounting can be a reason why people save too little today.',
      'Time inconsistency is a consequence of hyperbolic discounting and can often be addressed through commitment devices.',
    ],
    correctChoiceIndex: 0,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Bei einem <strong>vollständigen Kapitalmarkt</strong> können Konsumenten frei leihen und sparen. Sie sind daher durch ihren <strong>Lebenseinkommensbarwert</strong> (intertemporale Budgetbeschränkung) beschränkt, nicht durch das aktuelle Einkommen. Die Aussage, dass sie auch bei vollständigem Kapitalmarkt nur durch das aktuelle Einkommen beschränkt sind, ist falsch. Exponentielles Diskontieren bei Investitionsentscheidungen, hyperbolisches Diskontieren als Sparhindernis und Selbstbindung gegen Zeitinkonsistenz sind korrekte Aussagen.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>With a <strong>complete capital market</strong>, consumers can freely borrow and save. They are therefore constrained by the <strong>present value of lifetime income</strong> (intertemporal budget constraint), not by current income alone. The claim that consumers are constrained by current income even with a complete capital market is false. Exponential discounting for investment decisions, hyperbolic discounting as a savings barrier, and commitment devices against time inconsistency are all correct statements.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-9',
    subjectId: 'verhaltensoekonomie',
    titleDe: 'Overconfidence',
    titleEn: 'Overconfidence',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Menschen handeln oft auf sub-optimale Weise, weil sie sich selbst überschätzen. Welche Aussage ist <strong>falsch</strong>?</p>',
    bodyEn:
      '<p>People often act in sub-optimal ways because they overestimate themselves. Which statement is <strong>false</strong>?</p>',
    choicesDe: [
      'Das Phänomen die Qualität ihrer Fähigkeiten als Autofahrer überschätzen wird auch als „overestimation" bezeichnet.',
      'Selbstüberschätzung kann zu exzessivem Handel und somit zu Marktversagen führen.',
      'Menschen überschätzen typischerweise ihren Rang innerhalb ihrer Gruppe, wenn es um Wissen oder Fähigkeiten geht.',
      'Selbstüberschätzung führt nachweislich zu reduzierter Gründungsaktivität, also zu ineffizient niedriger Start-up Tätigkeit.',
    ],
    choicesEn: [
      'The phenomenon of overestimating the quality of one\'s abilities as a driver is also called "overestimation".',
      'Overconfidence can lead to excessive trading and thus to market failure.',
      'People typically overestimate their rank within their group when it comes to knowledge or abilities.',
      'Overconfidence has been shown to lead to reduced startup activity, i.e., to inefficiently low start-up activity.',
    ],
    correctChoiceIndex: 3,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Selbstüberschätzung (Overconfidence) führt empirisch zu <strong>erhöhter</strong> Gründungsaktivität, nicht zu reduzierter. Overconfidente Personen überschätzen ihre Erfolgschancen und gründen daher zu häufig Unternehmen – es gibt also <strong>zu viele</strong> Start-ups, nicht zu wenige. Overestimation (Überschätzung eigener Fähigkeiten), exzessiver Handel durch Overconfidence und die Überschätzung des eigenen Rangs (Overplacement) sind korrekte Aussagen.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Overconfidence empirically leads to <strong>increased</strong> startup activity, not reduced. Overconfident individuals overestimate their chances of success and therefore start businesses too often – there are thus <strong>too many</strong> startups, not too few. Overestimation (overestimating one\'s own abilities), excessive trading due to overconfidence, and overplacement (overestimating one\'s rank) are correct statements.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-10',
    subjectId: 'asymmetrische-info',
    titleDe: 'Adverse Selektion – E-Bike-Markt',
    titleEn: 'Adverse Selection – E-Bike Market',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Seit der Corona-Pandemie hat sich ein umfangreicher Markt für gebrauchte E-Bikes entwickelt. Bei diesen komplexen Fahrrädern ist es im Vergleich zu ihren traditionellen mechanischen Pendants deutlich schwieriger, die Qualität von Gebrauchtmaschinen einzuschätzen. Nehmen Sie an, dass alle Kund/innen eine Zahlungsbereitschaft von 800\u202FEUR für ein gutes, aber eine von 500\u202FEUR für ein schlechtes E-Bike haben. Anbieter haben eine Wertschätzung von 600\u202FEUR für ein gutes Gebrauchtstück, für ein schlechtes von 300\u202FEUR. Im Markt befinden sich 60% gute und 40% schlechte E-Bikes, was bereits bekannt ist. Welche Aussage ist <strong>falsch</strong>?</p>',
    bodyEn:
      '<p>Since the Corona pandemic, a large market for used e-bikes has developed. With these complex bicycles, it is significantly harder compared to their traditional mechanical counterparts to assess the quality of used machines. Assume that all customers have a willingness to pay of 800\u202FEUR for a good but 500\u202FEUR for a bad e-bike. Sellers value a good used unit at 600\u202FEUR and a bad one at 300\u202FEUR. The market contains 60% good and 40% bad e-bikes, which is already known. Which statement is <strong>false</strong>?</p>',
    choicesDe: [
      'Kennen nur die Anbieter die Qualität ihres Rades, erfolgen alle Verkäufe zu einem Preis zwischen 300 und 500\u202FEUR.',
      'Bei vollständiger Information finden alle Pareto-effizienten Tauschgeschäfte (Geld gegen E-Bike) statt.',
      'Gebrauchtwaren-Garantien bspw. über eine Laufzeit von einem Jahr stellen eine sichere Lösung für das Problem der negativen Selektion dar.',
      'Kennen nur die Anbieter die Qualität ihres Rades, haben Nachfrager eine Zahlungsbereitschaft von 680\u202FEUR.',
    ],
    choicesEn: [
      'If only sellers know the quality of their bike, all sales occur at a price between 300 and 500\u202FEUR.',
      'With full information, all Pareto-efficient trades (money for e-bike) take place.',
      'Used-goods guarantees, e.g., with a duration of one year, represent a reliable solution to the adverse selection problem.',
      'If only sellers know the quality of their bike, buyers have a willingness to pay of 680\u202FEUR.',
    ],
    correctChoiceIndex: 0,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Die erwartete Zahlungsbereitschaft der Käufer bei asymmetrischer Information ist $0{,}6 \\times 800 + 0{,}4 \\times 500 = 680$ EUR (Aussage d ist korrekt). Da $680 > 600$ (Wertschätzung der Verkäufer guter E-Bikes), sind auch Anbieter guter Räder bereit zu verkaufen. Es kommt also ein <strong>Pooling-Gleichgewicht</strong> zustande, bei dem alle E-Bikes zu einem Preis zwischen 600 und 680 EUR gehandelt werden – nicht zwischen 300 und 500 EUR. Aussage a ist daher <strong>falsch</strong>.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Buyers\' expected WTP under asymmetric information is $0.6 \\times 800 + 0.4 \\times 500 = 680$ EUR (statement d is correct). Since $680 > 600$ (sellers\' valuation for good e-bikes), sellers of good bikes are also willing to sell. A <strong>pooling equilibrium</strong> arises where all e-bikes trade at a price between 600 and 680 EUR – not between 300 and 500 EUR. Statement a is therefore <strong>false</strong>.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-11',
    subjectId: 'asymmetrische-info',
    titleDe: 'Moral Hazard',
    titleEn: 'Moral Hazard',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Moral Hazard ist das Problem versteckter Handlungen, insbesondere nach Vertragsabschluss. Welches der folgenden Probleme entsteht aufgrund von Moral Hazard?</p>',
    bodyEn:
      '<p>Moral hazard is the problem of hidden actions, especially after a contract has been concluded. Which of the following problems arises due to moral hazard?</p>',
    choicesDe: [
      'Ein Kunde schreckt vor den hohen Kosten einer Berufsunfähigkeitsversicherung zurück, da er sein Risiko als gering einschätzt.',
      'In Zeiten hoher Schuldenlasten steigt das durchschnittliche Risiko von Unternehmensinvestitionen an.',
      'Ein Autofahrer mit Vollkaskoversicherung fährt übermäßig vorsichtig.',
      'Ein unbeobachteter Mitarbeiter überarbeitet sich und fällt aus.',
    ],
    choicesEn: [
      'A customer is deterred by the high cost of disability insurance because they consider their risk to be low.',
      'In times of high debt burdens, the average risk of corporate investments increases.',
      'A driver with fully comprehensive insurance drives excessively carefully.',
      'An unobserved employee overworks and falls ill.',
    ],
    correctChoiceIndex: 1,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Bei hoher Verschuldung haben Unternehmen einen Anreiz, riskantere Investitionen zu tätigen (Risk-Shifting / Gambling for Resurrection) – dies ist ein klassisches <strong>Moral-Hazard</strong>-Problem nach Vertragsabschluss (Kreditvertrag). Aussage a beschreibt adverse Selektion (Niedrigrisiko-Kunden verlassen den Markt). Aussage c ist das Gegenteil von Moral Hazard (Vollkaskoversicherung führt zu weniger Vorsicht, nicht mehr). Aussage d widerspricht Moral Hazard (unbeobachtete Mitarbeiter tendieren zu Shirking, nicht zu Überarbeitung).</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>With high debt levels, firms have an incentive to take riskier investments (risk-shifting / gambling for resurrection) – this is a classic <strong>moral hazard</strong> problem after contract conclusion (loan agreement). Statement a describes adverse selection (low-risk customers leaving the market). Statement c is the opposite of moral hazard (comprehensive insurance leads to less caution, not more). Statement d contradicts moral hazard (unobserved employees tend toward shirking, not overwork).</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-12',
    subjectId: 'externalitaeten',
    titleDe: 'Externalitäten – Instrumente',
    titleEn: 'Externalities – Instruments',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Externalitäten sind ein häufiger Grund für Marktversagen. Welche Aussage ist <strong>korrekt</strong>?</p>',
    bodyEn:
      '<p>Externalities are a common cause of market failure. Which statement is <strong>correct</strong>?</p>',
    choicesDe: [
      'Eine Mengensteuer auf Emissionen wird auch als Pigou Steuer bezeichnet.',
      'Fangquoten in der Fischerei sind ein Beispiel dafür, dass Eigentumsrechte Externalitäten effektiv internalisieren können.',
      'In kleinen Gemeinschaften mit vielen wiederholten Interaktionen zwischen Menschen ist es schwieriger, das Allmende-Problem mithilfe „Neuer Institutionen" zu lösen.',
      'Das Coase Theorem besagt, dass Eigentumsrechte irgendeiner Partei zugestanden werden können und der Marktmechanismus anschließend zu einem effizienten Ergebnis führt (soweit es keine Einkommenseffekte gibt).',
    ],
    choicesEn: [
      'A quantity tax on emissions is also called a Pigou tax.',
      'Fishing quotas in the fishing industry are an example of how property rights can effectively internalize externalities.',
      'In small communities with many repeated interactions between people, it is harder to solve the commons problem using "New Institutions".',
      'The Coase theorem states that property rights can be granted to any party and the market mechanism then leads to an efficient outcome (provided there are no income effects).',
    ],
    correctChoiceIndex: 3,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Das <strong>Coase-Theorem</strong> besagt, dass bei klar definierten Eigentumsrechten, niedrigen Transaktionskosten und Abwesenheit von Einkommenseffekten Verhandlungen zu einem effizienten Ergebnis führen – unabhängig davon, welcher Partei die Rechte zugewiesen werden. Aussage a ist ungenau: eine Pigou-Steuer ist eine Korrektursteuer in Höhe des marginalen externen Schadens, nicht jede Mengensteuer auf Emissionen. Aussage b: Fangquoten sind eher ordnungsrechtliche Instrumente als reine Eigentumsrechte. Aussage c ist falsch, da es in kleinen Gemeinschaften mit wiederholten Interaktionen <strong>einfacher</strong> ist, Kooperationslösungen zu finden (Ostrom).</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>The <strong>Coase theorem</strong> states that with clearly defined property rights, low transaction costs, and the absence of income effects, bargaining leads to an efficient outcome – regardless of which party is assigned the rights. Statement a is imprecise: a Pigou tax is a corrective tax equal to the marginal external damage, not any quantity tax on emissions. Statement b: fishing quotas are more of a regulatory instrument than pure property rights. Statement c is false because in small communities with repeated interactions, it is <strong>easier</strong> to find cooperative solutions (Ostrom).</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-13',
    subjectId: 'externalitaeten',
    titleDe: 'Öffentliche Güter',
    titleEn: 'Public Goods',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Öffentliche Güter unterscheiden sich deutlich von privaten Gütern. Welche Aussage ist <strong>falsch</strong>?</p>',
    bodyEn:
      '<p>Public goods differ significantly from private goods. Which statement is <strong>false</strong>?</p>',
    choicesDe: [
      'Bei privaten Gütern kann man andere vom Konsum ausschließen, um die eigene Nutzung zu verbessern. Dies steht im Gegensatz zu öffentlichen Gütern.',
      'Wenn ein privates Gut effizient bereitgestellt wird, entsprechen die Grenz- bzw. Opportunitätskosten der Summe der Grenzraten der Substitution aller Konsument/innen.',
      'Bei der Bereitstellung öffentlicher Güter gibt es unter Umständen ein Trittbrettfahrerproblem.',
      'Das Trittbrettfahrerproblem bezeichnet eine zu niedrige Zahlungsbereitschaft von Konsument/innen, die ihre positive Externalität für andere ignorieren.',
    ],
    choicesEn: [
      'With private goods, one can exclude others from consumption to improve one\'s own use. This is in contrast to public goods.',
      'When a private good is provided efficiently, the marginal or opportunity costs equal the sum of the marginal rates of substitution of all consumers.',
      'In the provision of public goods, a free rider problem may arise under certain circumstances.',
      'The free rider problem refers to a too-low willingness to pay by consumers who ignore their positive externality for others.',
    ],
    correctChoiceIndex: 1,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Bei <strong>privaten Gütern</strong> lautet die Effizienzbedingung: Grenzkosten = MRS jedes einzelnen Konsumenten (nicht die Summe). Die <strong>Samuelson-Bedingung</strong> (MC = Summe der MRS) gilt für <strong>öffentliche Güter</strong>. Aussage b verwechselt die Effizienzbedingungen für private und öffentliche Güter und ist daher <strong>falsch</strong>.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>For <strong>private goods</strong>, the efficiency condition is: marginal cost = MRS of each individual consumer (not the sum). The <strong>Samuelson condition</strong> (MC = sum of MRS) applies to <strong>public goods</strong>. Statement b confuses the efficiency conditions for private and public goods and is therefore <strong>false</strong>.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-14',
    subjectId: 'marktmacht',
    titleDe: 'DA-TU Monopolist',
    titleEn: 'DA-TU Monopolist',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Der Monopol DA-TU hat die Kostenfunktion $C(q_D)=40+2q$ und sieht sich einer inversen Nachfrage von $p_D=5-0{,}1q_D$ gegenüber. Welche Aussage ist <strong>korrekt</strong>?</p>',
    bodyEn:
      '<p>The monopoly DA-TU has the cost function $C(q_D)=40+2q$ and faces an inverse demand of $p_D=5-0.1q_D$. Which statement is <strong>correct</strong>?</p>',
    choicesDe: [
      'Im kurzfristigen Gleichgewicht macht der Monopolist negative Gewinne.',
      'Der Grenzerlös ist $MR(q)= 5-0{,}1q$.',
      'Der Gleichgewichtspreis ist $p^*=3{,}5$ und die Gleichgewichtsmenge ist $q^* = 30$.',
      'In der kurzen Frist sind die Durchschnittskosten gleich den Grenzkosten.',
    ],
    choicesEn: [
      'In the short-run equilibrium, the monopolist makes negative profits.',
      'Marginal revenue is $MR(q)= 5-0.1q$.',
      'The equilibrium price is $p^*=3.5$ and the equilibrium quantity is $q^* = 30$.',
      'In the short run, average costs equal marginal costs.',
    ],
    correctChoiceIndex: 0,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Erlös: $TR = p \\cdot q = (5 - 0{,}1q)q = 5q - 0{,}1q^2$. Grenzerlös: $MR = 5 - 0{,}2q$. Gewinnmaximierung: $MR = MC \\Rightarrow 5 - 0{,}2q = 2 \\Rightarrow q^* = 15$. Preis: $p^* = 5 - 0{,}1 \\cdot 15 = 3{,}5$. Gewinn: $\\pi = 3{,}5 \\cdot 15 - (40 + 2 \\cdot 15) = 52{,}5 - 70 = -17{,}5 < 0$. Der Monopolist macht kurzfristig <strong>negative Gewinne</strong> (Aussage a korrekt). MR ist $5 - 0{,}2q$ (nicht $5 - 0{,}1q$, Aussage b falsch). $q^* = 15$ (nicht 30, Aussage c falsch). AC $= \\frac{40}{q} + 2 \\neq 2 = MC$ (Aussage d falsch).</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Revenue: $TR = p \\cdot q = (5 - 0.1q)q = 5q - 0.1q^2$. Marginal revenue: $MR = 5 - 0.2q$. Profit maximisation: $MR = MC \\Rightarrow 5 - 0.2q = 2 \\Rightarrow q^* = 15$. Price: $p^* = 5 - 0.1 \\times 15 = 3.5$. Profit: $\\pi = 3.5 \\times 15 - (40 + 2 \\times 15) = 52.5 - 70 = -17.5 < 0$. The monopolist makes <strong>negative profits</strong> in the short run (statement a correct). MR is $5 - 0.2q$ (not $5 - 0.1q$, statement b false). $q^* = 15$ (not 30, statement c false). AC $= \\frac{40}{q} + 2 \\neq 2 = MC$ (statement d false).</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-15',
    subjectId: 'marktmacht',
    titleDe: 'Preisdiskriminierung',
    titleEn: 'Price Discrimination',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Welche Aussage bzw. Definition im Themenbereich Preisdiskriminierung ist <strong>falsch</strong>?</p>',
    bodyEn:
      '<p>Which statement or definition in the area of price discrimination is <strong>false</strong>?</p>',
    choicesDe: [
      'Preisdiskriminierung ersten Grades führt nicht zu Marktversagen.',
      'Direkte Preisdiskriminierung liegt dann vor, wenn ein Unternehmen unterschiedliche Kunden(-typen) identifiziert und jeweils unterschiedliche Preise verlangt.',
      'Bei regionaler Marktsegmentierung wird das gleiche Produkt an unterschiedlichen Orten zu unterschiedlichen Preisen angeboten (ohne dass Transportkosten o.ä. diese Unterschiede erklären können).',
      'Wenn die Zahlungsbereitschaft eines Kunden vor dem Kauf überhaupt nicht erkennbar ist, bieten Unternehmen oft Bündel aus verschiedenen Produkten an. Dies ist Preisdiskriminierung zweiten Grades.',
    ],
    choicesEn: [
      'First-degree price discrimination does not lead to market failure.',
      'Direct price discrimination occurs when a firm identifies different customer (types) and charges different prices to each.',
      'With regional market segmentation, the same product is offered at different locations at different prices (without transportation costs or similar explaining these differences).',
      'When a customer\'s willingness to pay is not at all recognizable before the purchase, firms often offer bundles of different products. This is second-degree price discrimination.',
    ],
    correctChoiceIndex: 0,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Preisdiskriminierung ersten Grades setzt Marktmacht voraus, die selbst eine Form von Marktversagen darstellt. Zwar wird bei perfekter Preisdiskriminierung die effiziente Menge produziert (kein Wohlfahrtsverlust), doch die Existenz von Monopolmacht und die vollständige Aneignung der Konsumentenrente bedeuten, dass der Markt nicht dem Ideal des vollkommenen Wettbewerbs entspricht. Die Aussagen b (direkte PD = Identifikation und unterschiedliche Preise), c (regionale Segmentierung) und d (Bündelung als 2.-Grad-PD bei unbeobachtbarer Zahlungsbereitschaft) sind korrekte Definitionen.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>First-degree price discrimination requires market power, which itself constitutes a form of market failure. Although perfect price discrimination produces the efficient quantity (no deadweight loss), the existence of monopoly power and the complete extraction of consumer surplus mean the market does not meet the ideal of perfect competition. Statements b (direct PD = identification and different prices), c (regional segmentation), and d (bundling as 2nd-degree PD with unobservable WTP) are correct definitions.</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-16',
    subjectId: 'maerkte',
    titleDe: 'Edgeworth-Box',
    titleEn: 'Edgeworth Box',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Die Edgeworth Box unten beschreibt Allokationen von zwei Gütern (1 und 2) zwischen zwei Personen (A und B). Die Anfangsausstattung ist wie in der Vorlesung durch $\\omega_{A1}$, $\\omega_{A2}$, $\\omega_{B1}$, und $\\omega_{B2}$ gekennzeichnet. Welche Aussage ist <strong>falsch</strong>?</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Edgeworth Box</strong><br>Siehe Klausur WiSe 24/25</span></div>',
    bodyEn:
      '<p>The Edgeworth box below describes allocations of two goods (1 and 2) between two persons (A and B). The initial endowment is denoted as in the lecture by $\\omega_{A1}$, $\\omega_{A2}$, $\\omega_{B1}$, and $\\omega_{B2}$. Which statement is <strong>false</strong>?</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Edgeworth Box</strong><br>See Exam WiSe 24/25</span></div>',
    choicesDe: [
      'Punkt C ist ein allgemeines Gleichgewicht und verschafft den Personen A und B einen höheren Nutzen als die Anfangsausstattung.',
      'Punkt D liegt eindeutig im Kern der Pareto-Menge.',
      'Die Allokation F ist möglich, aber nicht Pareto-effizient.',
      'In Punkt D ist die Nachfrageänderung nach Gut 2 durch Person A größer als in Punkt C.',
    ],
    choicesEn: [
      'Point C is a general equilibrium and gives persons A and B higher utility than the initial endowment.',
      'Point D clearly lies in the core of the Pareto set.',
      'Allocation F is possible but not Pareto efficient.',
      'At point D, the change in demand for good 2 by person A is larger than at point C.',
    ],
    correctChoiceIndex: 1,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Der <strong>Kern</strong> (Core) ist die Teilmenge der Pareto-effizienten Allokationen, die beide Parteien gegenüber der Anfangsausstattung besser stellen (d.h. der Kern liegt in der „Linse" zwischen den Indifferenzkurven durch die Anfangsausstattung). Punkt D liegt zwar auf der Kontraktkurve (Pareto-effizient), aber typischerweise außerhalb der Linse – er stellt nicht beide Parteien besser als die Anfangsausstattung. „Eindeutig im Kern" ist daher <strong>falsch</strong>. Punkt C als allgemeines Gleichgewicht auf der Budgetgeraden durch die Ausstattung ist korrekt (a). Punkt F als mögliche, aber ineffiziente Allokation ist plausibel (c). Punkt D weiter entfernt von der Ausstattung impliziert eine größere Nachfrageänderung bei Gut 2 für A als bei C (d).</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>The <strong>core</strong> is the subset of Pareto-efficient allocations that make both parties better off compared to the initial endowment (i.e., the core lies in the "lens" between the indifference curves through the endowment). Point D may be on the contract curve (Pareto-efficient) but typically lies outside the lens – it does not make both parties better off than the endowment. "Clearly in the core" is therefore <strong>false</strong>. Point C as a general equilibrium on the budget line through the endowment is correct (a). Point F as a feasible but inefficient allocation is plausible (c). Point D being farther from the endowment implies a larger demand change for good 2 by A than at C (d).</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-17',
    subjectId: 'marktmacht',
    titleDe: 'Cournot-Duopol',
    titleEn: 'Cournot Duopoly',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Im Markt für phosphorhaltige Kaltgetränke gibt es zwei Wettbewerber, C und P, die in Kapazitäten konkurrieren. Sie haben die gleichen konstanten Grenzkosten $c=5$ pro Einheit Kapazität und stehen der inversen Gesamtnachfrage $p=20-2Q$ gegenüber. Welche Aussage ist <strong>korrekt</strong>?</p>',
    bodyEn:
      '<p>In the market for phosphorous cold drinks there are two competitors, C and P, who compete in capacities. They have the same constant marginal costs $c=5$ per unit of capacity and face the inverse aggregate demand $p=20-2Q$. Which statement is <strong>correct</strong>?</p>',
    choicesDe: [
      'Die Kapazitäten sind strategische Komplemente in diesem Wettbewerbsform.',
      'Durch die preissetzende Residualnachfrage machen die beiden Unternehmen keine positiven Gewinne.',
      'Im Gleichgewicht beträgt die produzierte Gesamtmenge ist 30/6 und der Marktpreis bei 10.',
      'Die Reaktionsfunktion von Unternehmen C lautet $q^*=7{,}5-q^*$.',
    ],
    choicesEn: [
      'Capacities are strategic complements in this form of competition.',
      'Due to the price-setting residual demand, the two firms make no positive profits.',
      'In equilibrium, the total quantity produced is 30/6 and the market price is 10.',
      'The reaction function of firm C is $q^*=7.5-q^*$.',
    ],
    correctChoiceIndex: 2,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>Cournot-Duopol: $\\pi_C = (20 - 2(q_C + q_P))q_C - 5q_C$. FOC: $20 - 4q_C - 2q_P - 5 = 0 \\Rightarrow q_C^* = \\frac{15 - 2q_P}{4} = 3{,}75 - 0{,}5q_P$. Symmetrie: $q_C = q_P = q$, also $q = 3{,}75 - 0{,}5q \\Rightarrow 1{,}5q = 3{,}75 \\Rightarrow q = 2{,}5$. Gesamtmenge: $Q = 5 = \\frac{30}{6}$. Preis: $p = 20 - 2 \\cdot 5 = 10$. Aussage c ist <strong>korrekt</strong>. Kapazitäten sind strategische <strong>Substitute</strong> im Cournot-Wettbewerb (a falsch). Die Gewinne sind $\\pi = (10-5) \\cdot 2{,}5 = 12{,}5 > 0$ (b falsch). Die Reaktionsfunktion ist $q_C^* = 3{,}75 - 0{,}5q_P$ (d falsch).</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>Cournot duopoly: $\\pi_C = (20 - 2(q_C + q_P))q_C - 5q_C$. FOC: $20 - 4q_C - 2q_P - 5 = 0 \\Rightarrow q_C^* = \\frac{15 - 2q_P}{4} = 3.75 - 0.5q_P$. By symmetry: $q_C = q_P = q$, so $q = 3.75 - 0.5q \\Rightarrow 1.5q = 3.75 \\Rightarrow q = 2.5$. Total quantity: $Q = 5 = \\frac{30}{6}$. Price: $p = 20 - 2 \\times 5 = 10$. Statement c is <strong>correct</strong>. Capacities are strategic <strong>substitutes</strong> in Cournot competition (a false). Profits are $\\pi = (10-5) \\times 2.5 = 12.5 > 0$ (b false). The reaction function is $q_C^* = 3.75 - 0.5q_P$ (d false).</p>',
    solutionSource: 'suggested',
  },
  {
    id: 'w24-mc-18',
    subjectId: 'angebot',
    titleDe: 'Kostenstruktur',
    titleEn: 'Cost Structure',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'choice',
    bodyDe:
      '<p>Unternehmerische Preisentscheidungen werden maßgeblich durch die Kostenstruktur bestimmt. Welche Aussage ist <strong>falsch</strong>?</p>',
    bodyEn:
      '<p>Entrepreneurial pricing decisions are largely determined by the cost structure. Which statement is <strong>false</strong>?</p>',
    choicesDe: [
      'In der langen Frist können die Durchschnittskosten auch fallen, wenn die variablen Durchschnittskosten steigen.',
      'Die Grenzkostenkurve schneidet die variable Durchschnittskostenkurve immer im Minimum (der variablen Durchschnittskosten).',
      'Die Durchschnittskostenkurve liegt nie unter der variablen Durchschnittskostenkurve.',
      'Langfristig müssen Preise die Durchschnittskosten decken.',
    ],
    choicesEn: [
      'In the long run, average costs can also fall when variable average costs rise.',
      'The marginal cost curve always intersects the average variable cost curve at its minimum (of variable average costs).',
      'The average cost curve never lies below the average variable cost curve.',
      'In the long run, prices must cover average costs.',
    ],
    correctChoiceIndex: 0,
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p>In der <strong>langen Frist</strong> sind alle Kosten variabel, d.h. es gibt keine Fixkosten. Daher gilt $AC = AVC$ – wenn die variablen Durchschnittskosten steigen, steigen auch die Durchschnittskosten. Die Aussage, dass AC in der langen Frist fallen können, während AVC steigen, ist <strong>falsch</strong>. (Dieses Phänomen ist nur kurzfristig möglich, wenn sinkende durchschnittliche Fixkosten den Anstieg der AVC überkompensieren.) MC schneidet AVC im Minimum (b korrekt), AC $\\geq$ AVC wegen AFC $\\geq 0$ (c korrekt), und langfristig müssen Preise AC decken (d korrekt).</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p>In the <strong>long run</strong>, all costs are variable, i.e. there are no fixed costs. Therefore $AC = AVC$ – if average variable costs rise, average costs rise too. The claim that AC can fall in the long run while AVC rises is <strong>false</strong>. (This phenomenon is only possible in the short run when declining average fixed costs more than offset rising AVC.) MC intersects AVC at its minimum (b correct), AC $\\geq$ AVC because AFC $\\geq 0$ (c correct), and long-run prices must cover AC (d correct).</p>',
    solutionSource: 'suggested',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Klausur WiSe 2024/25 – Aufgabe 2: Kostenminimierung  (20 Punkte, freeform)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'w24-ff-2',
    subjectId: 'angebot',
    titleDe: 'Kostenminimierung – Kcrem',
    titleEn: 'Cost Minimization – Kcrem',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'freeform',
    bodyDe:
      '<p>Das Unternehmen Kcrem stellt aus Wasser (Input 1) und einem importierten Pulver (Input 2) ein dermatologisches Medikament her. Dabei bezeichnen $x_1$ und $x_2$ die verwendeten Inputmengen und $y$ die Outputmenge dar. Aufgrund der primär psychosomatischen Wirkung kann die Salbe mehr oder weniger wässrig sein, ohne den Nutzen einzuschränken. Die Produktionsfunktion des Unternehmens lautet</p><p>$$y = x_1^{1/4} x_2^{1/4}$$</p>' +
      '<ol>' +
      '<li><strong>(5 Punkte)</strong> Was verstehen wir unter „Technische Rate der Substitution"? Berechnen Sie diese für das Unternehmen Kcrem und interpretieren Sie sie.</li>' +
      '<li><strong>(3 Punkte)</strong> Erläutern Sie den Begriff „Skalenerträge". Welche Skalenerträge hat das Unternehmen Kcrem? Welche Aussage können Sie schon jetzt bezüglich der Durchschnittskostenkurve treffen?</li>' +
      '<li><strong>(6 Punkte)</strong> Zeichnen Sie ein Diagramm für die Kostenminimierung.&lt;br&gt;- Bezeichnen Sie dazu die Achsen mit den jeweiligen Inputmengen.&lt;br&gt;- Zeichnen Sie eine Isoquante gemäß der Produktionsfunktion für ein bestimmtes Outputniveau $y$ ein. Welche Steigung hat die Isoquante?&lt;br&gt;- Zeichnen Sie zwei Isokostenkurven ein und erläutern Sie deren Eigenschaften. Eine davon sollte helfen, das kostenminimale Inputbündel zu bestimmen. Kennzeichnen Sie es.</li>' +
      '<li><strong>(4 Punkte)</strong> Bestimmen Sie die bedingten Faktornachfragen $x_1^*(w_1, w_2, y)$ und $x_2^*(w_1, w_2, y)$.</li>' +
      '<li><strong>(2 Punkte)</strong> Erklären Sie das Konzept der Grenzkosten.</li>' +
      '</ol>',
    bodyEn:
      '<p>The ice cream company Kcrem has the production function $y = x_1^{0.2} \\cdot x_2^{0.8}$.</p>' +
      '<ol>' +
      '<li><strong>(5 points)</strong> Explain the technical rate of substitution (TRS) and calculate it for the given production function.</li>' +
      '<li><strong>(3 points)</strong> Determine the returns to scale of the production function.</li>' +
      '<li><strong>(6 points)</strong> Illustrate the cost minimization problem graphically. Draw isoquants, isocost lines, and the optimal input mix.</li>' +
      '<li><strong>(4 points)</strong> Determine the conditional factor demands $x_1^*(w_1, w_2, y)$ and $x_2^*(w_1, w_2, y)$.</li>' +
      '<li><strong>(2 points)</strong> Explain the concept of marginal costs.</li>' +
      '</ol>',
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p><strong>Teilaufgabe 1 – Technische Rate der Substitution (TRS):</strong></p>' +
      '<p>Die TRS gibt an, in welchem Verhältnis ein Input durch einen anderen ersetzt werden kann, ohne das Outputniveau zu verändern. Sie entspricht dem (negativen) Verhältnis der Grenzproduktivitäten:</p>' +
      '<p>$$TRS = -\\frac{MP_1}{MP_2}$$</p>' +
      '<p>Grenzproduktivitäten:</p>' +
      '<p>$$MP_1 = \\frac{\\partial y}{\\partial x_1} = \\frac{1}{4}x_1^{-3/4}x_2^{1/4}$$</p>' +
      '<p>$$MP_2 = \\frac{\\partial y}{\\partial x_2} = \\frac{1}{4}x_1^{1/4}x_2^{-3/4}$$</p>' +
      '<p>$$TRS = -\\frac{MP_1}{MP_2} = -\\frac{x_2}{x_1}$$</p>' +
      '<p>Interpretation: Wenn man eine Einheit von $x_1$ aufgibt, benötigt man $\\frac{x_2}{x_1}$ Einheiten mehr von $x_2$, um den gleichen Output zu halten. Die TRS ist die Steigung der Isoquante.</p>' +
      '<p><strong>Teilaufgabe 2 – Skalenerträge:</strong></p>' +
      '<p>Skalenerträge beschreiben, wie sich der Output verändert, wenn alle Inputs proportional um den Faktor $t > 1$ erhöht werden:</p>' +
      '<p>$$f(tx_1, tx_2) = (tx_1)^{1/4}(tx_2)^{1/4} = t^{1/2} \\cdot x_1^{1/4}x_2^{1/4} = t^{1/2} \\cdot y$$</p>' +
      '<p>Da $\\frac{1}{2} < 1$, liegen <strong>abnehmende Skalenerträge</strong> (decreasing returns to scale) vor. Der Output steigt weniger als proportional zur Inputerhöhung.</p>' +
      '<p>Aussage zur Durchschnittskostenkurve: Bei abnehmenden Skalenerträgen ist die <strong>Durchschnittskostenkurve steigend</strong> – größere Produktionsmengen sind pro Stück teurer.</p>' +
      '<p><strong>Teilaufgabe 3 – Diagramm Kostenminimierung:</strong></p>' +
      '<p>Achsen: $x_1$ (horizontal), $x_2$ (vertikal). Die Isoquante für Outputniveau $\\bar{y}$ ist die Menge aller $(x_1, x_2)$ mit $x_1^{1/4}x_2^{1/4} = \\bar{y}$, also $x_2 = \\bar{y}^4 / x_1$. Die Steigung der Isoquante ist $-\\frac{x_2}{x_1}$ (= TRS).</p>' +
      '<p>Die Isokostengerade lautet $C = w_1 x_1 + w_2 x_2$ mit Steigung $-\\frac{w_1}{w_2}$. Isokostengeraden sind parallel; weiter vom Ursprung entfernte Geraden repräsentieren höhere Kosten.</p>' +
      '<p>Das kostenminimale Inputbündel liegt im Tangentialpunkt von Isoquante und Isokostengerade, wo $TRS = -\\frac{w_1}{w_2}$, also $\\frac{x_2}{x_1} = \\frac{w_1}{w_2}$.</p>' +
      '<p><strong>Teilaufgabe 4 – Bedingte Faktornachfragen:</strong></p>' +
      '<p>Bedingung 1 (Tangentialbedingung): $\\frac{x_2}{x_1} = \\frac{w_1}{w_2} \\Rightarrow x_2 = \\frac{w_1}{w_2} x_1$</p>' +
      '<p>Bedingung 2 (Isoquante): $x_1^{1/4} x_2^{1/4} = y$</p>' +
      '<p>Einsetzen: $x_1^{1/4} \\left(\\frac{w_1}{w_2} x_1\\right)^{1/4} = y$</p>' +
      '<p>$$x_1^{1/2} \\left(\\frac{w_1}{w_2}\\right)^{1/4} = y$$</p>' +
      '<p>$$x_1^{1/2} = y \\left(\\frac{w_2}{w_1}\\right)^{1/4}$$</p>' +
      '<p>$$\\boxed{x_1^*(w_1, w_2, y) = y^2 \\left(\\frac{w_2}{w_1}\\right)^{1/2}}$$</p>' +
      '<p>Analog: $x_2 = \\frac{w_1}{w_2} x_1$:</p>' +
      '<p>$$\\boxed{x_2^*(w_1, w_2, y) = y^2 \\left(\\frac{w_1}{w_2}\\right)^{1/2}}$$</p>' +
      '<p><strong>Teilaufgabe 5 – Grenzkosten:</strong></p>' +
      '<p>Die Grenzkosten (MC) geben an, um wie viel sich die Gesamtkosten erhöhen, wenn eine zusätzliche Einheit Output produziert wird: $MC(y) = \\frac{dC(y)}{dy}$.</p>' +
      '<p>Kostenfunktion: $C(y) = w_1 x_1^* + w_2 x_2^* = y^2 \\sqrt{w_1 w_2} + y^2 \\sqrt{w_1 w_2} = 2y^2 \\sqrt{w_1 w_2}$</p>' +
      '<p>$$MC(y) = 4y\\sqrt{w_1 w_2}$$</p>' +
      '<p>Die Grenzkosten steigen linear in $y$, was mit den abnehmenden Skalenerträgen konsistent ist.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p><strong>Part 1 – Technical Rate of Substitution (TRS):</strong></p>' +
      '<p>The TRS indicates the rate at which one input can be substituted for another while keeping output constant. It equals the (negative) ratio of marginal products:</p>' +
      '<p>$$TRS = -\\frac{MP_1}{MP_2}$$</p>' +
      '<p>Marginal products:</p>' +
      '<p>$$MP_1 = \\frac{\\partial y}{\\partial x_1} = \\frac{1}{4}x_1^{-3/4}x_2^{1/4}$$</p>' +
      '<p>$$MP_2 = \\frac{\\partial y}{\\partial x_2} = \\frac{1}{4}x_1^{1/4}x_2^{-3/4}$$</p>' +
      '<p>$$TRS = -\\frac{MP_1}{MP_2} = -\\frac{x_2}{x_1}$$</p>' +
      '<p>Interpretation: Giving up one unit of $x_1$ requires $\\frac{x_2}{x_1}$ additional units of $x_2$ to maintain the same output. The TRS is the slope of the isoquant.</p>' +
      '<p><strong>Part 2 – Returns to Scale:</strong></p>' +
      '<p>Returns to scale describe how output changes when all inputs are scaled by factor $t > 1$:</p>' +
      '<p>$$f(tx_1, tx_2) = (tx_1)^{1/4}(tx_2)^{1/4} = t^{1/2} \\cdot y$$</p>' +
      '<p>Since $\\frac{1}{2} < 1$, there are <strong>decreasing returns to scale</strong>. Output increases less than proportionally to the input increase.</p>' +
      '<p>Implication for average costs: With decreasing returns to scale, the <strong>average cost curve is increasing</strong> – larger quantities are more expensive per unit.</p>' +
      '<p><strong>Part 3 – Cost Minimization Diagram:</strong></p>' +
      '<p>Axes: $x_1$ (horizontal), $x_2$ (vertical). The isoquant for output level $\\bar{y}$ is the set of all $(x_1, x_2)$ with $x_1^{1/4}x_2^{1/4} = \\bar{y}$, i.e. $x_2 = \\bar{y}^4 / x_1$. The slope of the isoquant is $-\\frac{x_2}{x_1}$ (= TRS).</p>' +
      '<p>The isocost line is $C = w_1 x_1 + w_2 x_2$ with slope $-\\frac{w_1}{w_2}$. Isocost lines are parallel; those farther from the origin represent higher costs.</p>' +
      '<p>The cost-minimizing input bundle lies at the tangency point of isoquant and isocost line, where $TRS = -\\frac{w_1}{w_2}$, i.e. $\\frac{x_2}{x_1} = \\frac{w_1}{w_2}$.</p>' +
      '<p><strong>Part 4 – Conditional Factor Demands:</strong></p>' +
      '<p>Condition 1 (tangency): $\\frac{x_2}{x_1} = \\frac{w_1}{w_2} \\Rightarrow x_2 = \\frac{w_1}{w_2} x_1$</p>' +
      '<p>Condition 2 (isoquant): $x_1^{1/4} x_2^{1/4} = y$</p>' +
      '<p>Substituting: $x_1^{1/4} \\left(\\frac{w_1}{w_2} x_1\\right)^{1/4} = y$</p>' +
      '<p>$$x_1^{1/2} \\left(\\frac{w_1}{w_2}\\right)^{1/4} = y$$</p>' +
      '<p>$$x_1^{1/2} = y \\left(\\frac{w_2}{w_1}\\right)^{1/4}$$</p>' +
      '<p>$$\\boxed{x_1^*(w_1, w_2, y) = y^2 \\left(\\frac{w_2}{w_1}\\right)^{1/2}}$$</p>' +
      '<p>Analogously: $x_2 = \\frac{w_1}{w_2} x_1$:</p>' +
      '<p>$$\\boxed{x_2^*(w_1, w_2, y) = y^2 \\left(\\frac{w_1}{w_2}\\right)^{1/2}}$$</p>' +
      '<p><strong>Part 5 – Marginal Costs:</strong></p>' +
      '<p>Marginal cost (MC) indicates how much total costs increase when one additional unit of output is produced: $MC(y) = \\frac{dC(y)}{dy}$.</p>' +
      '<p>Cost function: $C(y) = w_1 x_1^* + w_2 x_2^* = y^2 \\sqrt{w_1 w_2} + y^2 \\sqrt{w_1 w_2} = 2y^2 \\sqrt{w_1 w_2}$</p>' +
      '<p>$$MC(y) = 4y\\sqrt{w_1 w_2}$$</p>' +
      '<p>Marginal costs increase linearly in $y$, consistent with decreasing returns to scale.</p>',
    solutionSource: 'suggested',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Klausur WiSe 2024/25 – Aufgabe 3: Marktgleichgewicht und Steuern  (25 Punkte, freeform)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'w24-ff-3',
    subjectId: 'maerkte',
    titleDe: 'Marktgleichgewicht und Steuern – Aktienhandel',
    titleEn: 'Market Equilibrium and Taxes – Stock Trading',
    source: 'exam-wise2425',
    sourceLabel: 'Klausur WiSe 24/25',
    type: 'freeform',
    bodyDe:
      '<p>Betrachten Sie einen Aktienmarkt mit der inversen Nachfragefunktion $p_D = a - bx$ und der inversen Angebotsfunktion $p_S = c + dx$. Es wird eine Transaktionssteuer $t$ eingeführt.</p>' +
      '<ol>' +
      '<li><strong>(5 Punkte)</strong> Bestimmen Sie das allgemeine Marktgleichgewicht und die Wohlfahrt (Konsumenten- und Produzentenrente).</li>' +
      '<li><strong>(6 Punkte)</strong> Definieren Sie Pareto-Effizienz und erklären Sie den Ersten Hauptsatz der Wohlfahrtsökonomik.</li>' +
      '<li><strong>(4 Punkte)</strong> Welche Arten von Steuern gibt es? Unterscheiden Sie Mengen- und Wertsteuer sowie Konsumenten- und Produzentensteuer.</li>' +
      '<li><strong>(6 Punkte)</strong> Bestimmen Sie das neue Gleichgewicht nach Einführung der Steuer $t$.</li>' +
      '<li><strong>(4 Punkte)</strong> Erklären Sie, wie der Wohlfahrtsverlust (DWL) durch die Steuer entsteht.</li>' +
      '</ol>',
    bodyEn:
      '<p>Consider a stock market with the inverse demand function $p_D = a - bx$ and the inverse supply function $p_S = c + dx$. A transaction tax $t$ is introduced.</p>' +
      '<ol>' +
      '<li><strong>(5 points)</strong> Determine the general market equilibrium and welfare (consumer and producer surplus).</li>' +
      '<li><strong>(6 points)</strong> Define Pareto efficiency and explain the First Welfare Theorem.</li>' +
      '<li><strong>(4 points)</strong> What types of taxes exist? Distinguish between quantity and ad valorem taxes, as well as consumer and producer taxes.</li>' +
      '<li><strong>(6 points)</strong> Determine the new equilibrium after the introduction of tax $t$.</li>' +
      '<li><strong>(4 points)</strong> Explain how the deadweight loss (DWL) arises from the tax.</li>' +
      '</ol>',
    solutionDe:
      '<p><em>Lösungsvorschlag – keine offizielle Lösung.</em></p>' +
      '<p><strong>Teilaufgabe 1 – Marktgleichgewicht und Wohlfahrt:</strong></p>' +
      '<p>Gleichgewicht: $p_D = p_S \\Rightarrow a - bx = c + dx$</p>' +
      '<p>$$x^* = \\frac{a - c}{b + d}$$</p>' +
      '<p>$$p^* = a - b \\cdot \\frac{a-c}{b+d} = \\frac{ad + bc}{b+d}$$</p>' +
      '<p>Konsumentenrente (CS): Dreieck zwischen Nachfragekurve und Gleichgewichtspreis:</p>' +
      '<p>$$CS = \\frac{1}{2}(a - p^*)x^* = \\frac{1}{2} \\cdot b \\cdot \\left(\\frac{a-c}{b+d}\\right)^2 = \\frac{b(a-c)^2}{2(b+d)^2}$$</p>' +
      '<p>Produzentenrente (PS): Dreieck zwischen Gleichgewichtspreis und Angebotskurve:</p>' +
      '<p>$$PS = \\frac{1}{2}(p^* - c)x^* = \\frac{1}{2} \\cdot d \\cdot \\left(\\frac{a-c}{b+d}\\right)^2 = \\frac{d(a-c)^2}{2(b+d)^2}$$</p>' +
      '<p>Gesamtwohlfahrt: $W = CS + PS = \\frac{(a-c)^2}{2(b+d)}$</p>' +
      '<p><strong>Teilaufgabe 2 – Pareto-Effizienz und Erster Hauptsatz:</strong></p>' +
      '<p><strong>Pareto-Effizienz:</strong> Eine Allokation ist Pareto-effizient, wenn es keine andere realisierbare Allokation gibt, die mindestens eine Person besser stellt, ohne eine andere Person schlechter zu stellen.</p>' +
      '<p><strong>Erster Hauptsatz der Wohlfahrtsökonomik:</strong> Unter bestimmten Bedingungen (vollständige Märkte, vollständige Information, keine Externalitäten, keine Marktmacht) führt jedes Wettbewerbsgleichgewicht zu einer Pareto-effizienten Allokation. Das bedeutet, dass der Preismechanismus auf vollkommenen Märkten Ressourcen effizient verteilt.</p>' +
      '<p><strong>Teilaufgabe 3 – Steuerarten:</strong></p>' +
      '<p><strong>Mengensteuer (Stücksteuer):</strong> Ein fester Betrag $t$ pro gehandelter Einheit (z.B. $t$ EUR pro Aktie). Die Steuerlast ist unabhängig vom Preis.</p>' +
      '<p><strong>Wertsteuer (Ad-valorem-Steuer):</strong> Ein Prozentsatz $\\tau$ des Transaktionspreises (z.B. $\\tau \\cdot p$ pro Aktie). Die Steuerlast steigt mit dem Preis.</p>' +
      '<p><strong>Konsumentensteuer:</strong> Die Steuer wird formal auf die Nachfrageseite erhoben. Die Nachfragekurve verschiebt sich nach unten um $t$: $p_D^{\\text{neu}} = (a - t) - bx$.</p>' +
      '<p><strong>Produzentensteuer:</strong> Die Steuer wird formal auf die Angebotsseite erhoben. Die Angebotskurve verschiebt sich nach oben um $t$: $p_S^{\\text{neu}} = (c + t) + dx$.</p>' +
      '<p>Wichtig: Die ökonomische Inzidenz (tatsächliche Belastung) ist unabhängig davon, bei wem die Steuer formal erhoben wird – sie hängt nur von den Elastizitäten ab.</p>' +
      '<p><strong>Teilaufgabe 4 – Gleichgewicht mit Steuer $t$:</strong></p>' +
      '<p>Die Steuer treibt einen Keil zwischen Konsumenten- und Produzentenpreis: $p_D = p_S + t$.</p>' +
      '<p>$$a - bx_t = c + dx_t + t$$</p>' +
      '<p>$$x_t = \\frac{a - c - t}{b + d}$$</p>' +
      '<p>Konsumentenpreis: $p_D^t = a - b \\cdot \\frac{a-c-t}{b+d} = \\frac{ad + bc + bt}{b+d}$</p>' +
      '<p>Produzentenpreis: $p_S^t = c + d \\cdot \\frac{a-c-t}{b+d} = \\frac{ad + bc - dt}{b+d}$</p>' +
      '<p>Es gilt: $p_D^t - p_S^t = t$ (Steuerkeil).</p>' +
      '<p>Steueraufkommen: $T = t \\cdot x_t = \\frac{t(a-c-t)}{b+d}$</p>' +
      '<p><strong>Teilaufgabe 5 – Wohlfahrtsverlust (DWL):</strong></p>' +
      '<p>Die Steuer reduziert die Gleichgewichtsmenge von $x^*$ auf $x_t < x^*$. Für alle Einheiten zwischen $x_t$ und $x^*$ übersteigt die Zahlungsbereitschaft der Konsumenten die Kosten der Produzenten – diese Tauschgeschäfte finden aber wegen der Steuer nicht mehr statt.</p>' +
      '<p>Der DWL entspricht dem Dreieck zwischen Nachfrage- und Angebotskurve im Bereich $[x_t, x^*]$:</p>' +
      '<p>$$DWL = \\frac{1}{2} \\cdot t \\cdot (x^* - x_t) = \\frac{1}{2} \\cdot t \\cdot \\frac{t}{b+d} = \\frac{t^2}{2(b+d)}$$</p>' +
      '<p>Der DWL steigt quadratisch mit der Steuer $t$ – eine Verdopplung der Steuer vervierfacht den Wohlfahrtsverlust. Dies ist das zentrale Argument für niedrige, breit angelegte Steuern statt hoher, enger Steuern.</p>',
    solutionEn:
      '<p><em>Suggested solution – not an official solution.</em></p>' +
      '<p><strong>Part 1 – Market Equilibrium and Welfare:</strong></p>' +
      '<p>Equilibrium: $p_D = p_S \\Rightarrow a - bx = c + dx$</p>' +
      '<p>$$x^* = \\frac{a - c}{b + d}$$</p>' +
      '<p>$$p^* = a - b \\cdot \\frac{a-c}{b+d} = \\frac{ad + bc}{b+d}$$</p>' +
      '<p>Consumer surplus (CS): triangle between demand curve and equilibrium price:</p>' +
      '<p>$$CS = \\frac{1}{2}(a - p^*)x^* = \\frac{b(a-c)^2}{2(b+d)^2}$$</p>' +
      '<p>Producer surplus (PS): triangle between equilibrium price and supply curve:</p>' +
      '<p>$$PS = \\frac{1}{2}(p^* - c)x^* = \\frac{d(a-c)^2}{2(b+d)^2}$$</p>' +
      '<p>Total welfare: $W = CS + PS = \\frac{(a-c)^2}{2(b+d)}$</p>' +
      '<p><strong>Part 2 – Pareto Efficiency and First Welfare Theorem:</strong></p>' +
      '<p><strong>Pareto efficiency:</strong> An allocation is Pareto-efficient if no other feasible allocation exists that makes at least one person better off without making anyone else worse off.</p>' +
      '<p><strong>First Welfare Theorem:</strong> Under certain conditions (complete markets, complete information, no externalities, no market power), every competitive equilibrium leads to a Pareto-efficient allocation. The price mechanism on perfect markets allocates resources efficiently.</p>' +
      '<p><strong>Part 3 – Types of Taxes:</strong></p>' +
      '<p><strong>Quantity tax (per-unit tax):</strong> A fixed amount $t$ per traded unit (e.g. $t$ EUR per share). The tax burden is independent of price.</p>' +
      '<p><strong>Ad valorem tax:</strong> A percentage $\\tau$ of the transaction price (e.g. $\\tau \\cdot p$ per share). The tax burden increases with price.</p>' +
      '<p><strong>Consumer tax:</strong> The tax is formally levied on the demand side. The demand curve shifts down by $t$: $p_D^{\\text{new}} = (a - t) - bx$.</p>' +
      '<p><strong>Producer tax:</strong> The tax is formally levied on the supply side. The supply curve shifts up by $t$: $p_S^{\\text{new}} = (c + t) + dx$.</p>' +
      '<p>Important: The economic incidence (actual burden) is independent of which side the tax is formally levied on – it depends only on the elasticities.</p>' +
      '<p><strong>Part 4 – Equilibrium with Tax $t$:</strong></p>' +
      '<p>The tax drives a wedge between consumer and producer price: $p_D = p_S + t$.</p>' +
      '<p>$$a - bx_t = c + dx_t + t$$</p>' +
      '<p>$$x_t = \\frac{a - c - t}{b + d}$$</p>' +
      '<p>Consumer price: $p_D^t = a - b \\cdot \\frac{a-c-t}{b+d} = \\frac{ad + bc + bt}{b+d}$</p>' +
      '<p>Producer price: $p_S^t = c + d \\cdot \\frac{a-c-t}{b+d} = \\frac{ad + bc - dt}{b+d}$</p>' +
      '<p>We have: $p_D^t - p_S^t = t$ (tax wedge).</p>' +
      '<p>Tax revenue: $T = t \\cdot x_t = \\frac{t(a-c-t)}{b+d}$</p>' +
      '<p><strong>Part 5 – Deadweight Loss (DWL):</strong></p>' +
      '<p>The tax reduces the equilibrium quantity from $x^*$ to $x_t < x^*$. For all units between $x_t$ and $x^*$, consumers\' willingness to pay exceeds producers\' costs – but these trades no longer occur because of the tax.</p>' +
      '<p>The DWL equals the triangle between the demand and supply curves in the range $[x_t, x^*]$:</p>' +
      '<p>$$DWL = \\frac{1}{2} \\cdot t \\cdot (x^* - x_t) = \\frac{1}{2} \\cdot t \\cdot \\frac{t}{b+d} = \\frac{t^2}{2(b+d)}$$</p>' +
      '<p>The DWL increases quadratically with the tax $t$ – doubling the tax quadruples the welfare loss. This is the central argument for low, broad-based taxes instead of high, narrow ones.</p>',
    solutionSource: 'suggested',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Klausur SoSe 2025 – Single Choice  (18 Aufgaben)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 's25-mc-1',
    subjectId: 'nachfrage',
    titleDe: 'Nutzenfunktionen – ordinal vs. kardinal',
    titleEn: 'Utility Functions – Ordinal vs. Cardinal',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Nutzenfunktionen werden üblicherweise genutzt, um Präferenzen über Güterbündel abzubilden. Aufgrund der Annahmen, die hierzu nötig sind, haben Nutzenfunktionen eine Reihe von wichtigen Eigenschaften. Welche Aussage ist <strong>falsch</strong>? Betrachten Sie nur Güterbündel mit strikt positiven Mengen. (2,5 Punkte)</p>',
    bodyEn:
      '<p>Utility functions are typically used to represent preferences over bundles of goods. Due to the assumptions required, utility functions have a number of important properties. Which statement is <strong>false</strong>? Consider only bundles with strictly positive quantities. (2.5 points)</p>',
    choicesDe: [
      'Nutzenfunktionen sind stets ordinal, sodass absolute Unterschiede im Nutzen keine Interpretation haben.',
      'Die Quadratwurzel einer Nutzenfunktion bildet die gleichen Präferenzen ab wie die ursprüngliche Funktion.',
      'Die Subtraktion einer Konstanten von der Nutzenfunktion lässt die zugrundeliegende Präferenzordnung von Güterbündeln unberührt.',
      'Nutzenfunktionen sind stets kardinal, sodass absolute Unterschiede im Nutzen sinnvoll interpretiert werden können.',
    ],
    choicesEn: [
      'Utility functions are always ordinal, so absolute differences in utility have no interpretation.',
      'The square root of a utility function represents the same preferences as the original function.',
      'Subtracting a constant from the utility function leaves the underlying preference ordering of bundles unchanged.',
      'Utility functions are always cardinal, so absolute differences in utility can be meaningfully interpreted.',
    ],
  
    correctChoiceIndex: 3,
    solutionDe:
      '<p><strong>Richtige Antwort: D</strong></p><p>Nutzenfunktionen sind stets <em>ordinal</em>, nicht kardinal. Absolute Unterschiede im Nutzen können nicht sinnvoll interpretiert werden — nur die Rangordnung von Güterbündeln zählt.</p>',
    solutionEn:
      '<p><strong>Correct answer: D</strong></p><p>Utility functions are always <em>ordinal</em>, not cardinal. Absolute differences in utility cannot be meaningfully interpreted — only the ranking of bundles matters.</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-2',
    subjectId: 'nachfrage',
    titleDe: 'Einkommenseffekte',
    titleEn: 'Income Effects',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Die Nachfrage von Konsument:innen hängt sowohl von Preisen als auch von Einkommen ab. Wir betrachten hier zur Veranschaulichung den Zweitgutfall. Welche Aussage ist <strong>korrekt</strong>? (2,5 Punkte)</p>',
    bodyEn:
      '<p>Consumer demand depends on both prices and income. Here we consider the two-good case for illustration. Which statement is <strong>correct</strong>? (2.5 points)</p>',
    choicesDe: [
      'Normale Güter haben monoton fallende Einkommens-Expansionspfade.',
      'Normale Güter haben monoton steigende Engel-Kurven.',
      'Bei inferioren Gütern steigt die Engel-Kurve bei jedem Einkommensniveau.',
      'Liegt die Einkommenselastizität strikt zwischen 0 und 1, sprechen wir von Luxusgütern.',
    ],
    choicesEn: [
      'Normal goods have monotonically falling income expansion paths.',
      'Normal goods have monotonically rising Engel curves.',
      'For inferior goods, the Engel curve rises at every income level.',
      'If the income elasticity is strictly between 0 and 1, we speak of luxury goods.',
    ],
  
    correctChoiceIndex: 1,
    solutionDe:
      '<p><strong>Richtige Antwort: B</strong></p><p>Normale Güter haben monoton steigende Engel-Kurven: Bei steigendem Einkommen steigt die nachgefragte Menge.</p>',
    solutionEn:
      '<p><strong>Correct answer: B</strong></p><p>Normal goods have monotonically rising Engel curves: as income rises, the demanded quantity increases.</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-3',
    subjectId: 'angebot',
    titleDe: 'CES-Produktionsfunktion',
    titleEn: 'CES Production Function',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Die untenstehende Formel beschreibt eine häufig genutzte Produktionsfunktion, nämlich die sog. CES Produktionsfunktion mit konstanter Substitutionselastizität zwischen den Inputs Arbeit (L) und Kapital (K). $A$ ist ein positiver Parameter und $\\rho$, ein Parameter proportional zur Substitutionselastizität, liegt strikt zwischen $-1$ und Unendlich. Welche Aussage ist <strong>falsch</strong>? (2,5 Punkte)</p>' +
      '<p>$$Y = A\\left[L^{-\\rho} + K^{-\\rho}\\right]^{-\\gamma/\\rho}$$</p>',
    bodyEn:
      '<p>The formula below describes a commonly used production function, namely the so-called CES production function with constant elasticity of substitution between the inputs labor (L) and capital (K). $A$ is a positive parameter, and $\\rho$, a parameter proportional to the elasticity of substitution, lies strictly between $-1$ and infinity. Which statement is <strong>false</strong>? (2.5 points)</p>' +
      '<p>$$Y = A\\left[L^{-\\rho} + K^{-\\rho}\\right]^{-\\gamma/\\rho}$$</p>',
    choicesDe: [
      'Wenn $\\gamma < 1$ hat die Produktionsfunktion fallende Skalenerträge.',
      'Wenn $\\gamma = 1$ hat die Produktionsfunktion konstante Skalenerträge.',
      'Wenn $\\gamma > 1$ hat die Produktionsfunktion steigende Skalenerträge.',
      '$\\rho > 1$ impliziert steigende Skalenerträge der Produktionsfunktion.',
    ],
    choicesEn: [
      'If $\\gamma < 1$, the production function has decreasing returns to scale.',
      'If $\\gamma = 1$, the production function has constant returns to scale.',
      'If $\\gamma > 1$, the production function has increasing returns to scale.',
      '$\\rho > 1$ implies increasing returns to scale of the production function.',
    ],
  
    correctChoiceIndex: 3,
    solutionDe:
      '<p><strong>Richtige Antwort: D</strong></p><p>Der Parameter $\\rho$ bestimmt die Substitutionselastizität ($\\sigma = 1/(1+\\rho)$), nicht die Skalenerträge. Die Skalenerträge werden ausschließlich durch $\\gamma$ bestimmt.</p>',
    solutionEn:
      '<p><strong>Correct answer: D</strong></p><p>The parameter $\\rho$ determines the elasticity of substitution ($\\sigma = 1/(1+\\rho)$), not returns to scale. Returns to scale are determined solely by $\\gamma$.</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-4',
    subjectId: 'spieltheorie',
    titleDe: 'Elfmeterschießen – 3x3-Spiel',
    titleEn: 'Penalty Kick – 3x3 Game',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Betrachten Sie die etwas vereinfachte Situation eines Elfmeters bei einem Fußballspiel. Der Schütze kann sich entscheiden, nach links, nach rechts, oder in die Mitte zu schießen. Der Torwart kann dementsprechend nach links hechten, nach rechts hechten, oder in der Mitte stehenbleiben. Die Auszahlungen sind in der Tabelle angegeben. Welche Aussage ist <strong>korrekt</strong>? (2,5 Punkte)</p>' +
      '<table>' +
      '<tr><td></td><td></td><td colspan="3"><strong>Torwart</strong></td></tr>' +
      '<tr><td></td><td></td><td><strong>links</strong></td><td><strong>mitte</strong></td><td><strong>rechts</strong></td></tr>' +
      '<tr><td rowspan="3"><strong>Schütze</strong></td><td><strong>links</strong></td><td>$(0, 1)$</td><td>$(1, 0)$</td><td>$(1, 0)$</td></tr>' +
      '<tr><td><strong>mitte</strong></td><td>$(1, 0)$</td><td>$(0, 1)$</td><td>$(1, 0)$</td></tr>' +
      '<tr><td><strong>rechts</strong></td><td>$(1, 0)$</td><td>$(1, 0)$</td><td>$(0, 1)$</td></tr>' +
      '</table>',
    bodyEn:
      '<p>Consider the somewhat simplified situation of a penalty kick in a football match. The shooter can choose to kick left, right, or to the center. The goalkeeper can correspondingly dive left, dive right, or stay in the center. The payoffs are given in the table. Which statement is <strong>correct</strong>? (2.5 points)</p>' +
      '<table>' +
      '<tr><td></td><td></td><td colspan="3"><strong>Goalkeeper</strong></td></tr>' +
      '<tr><td></td><td></td><td><strong>left</strong></td><td><strong>center</strong></td><td><strong>right</strong></td></tr>' +
      '<tr><td rowspan="3"><strong>Shooter</strong></td><td><strong>left</strong></td><td>$(0, 1)$</td><td>$(1, 0)$</td><td>$(1, 0)$</td></tr>' +
      '<tr><td><strong>center</strong></td><td>$(1, 0)$</td><td>$(0, 1)$</td><td>$(1, 0)$</td></tr>' +
      '<tr><td><strong>right</strong></td><td>$(1, 0)$</td><td>$(1, 0)$</td><td>$(0, 1)$</td></tr>' +
      '</table>',
    choicesDe: [
      '(links, links) ist ein Nash-Gleichgewicht.',
      'Der Schütze hat die dominante Strategie „mittig".',
      'Dieses Spiel hat kein Nash-Gleichgewicht.',
      'Wenn der Schütze nach rechts schießen und der Torwart nach rechts hechten möchte, gibt es einseitig profitable Abweichungen.',
    ],
    choicesEn: [
      '(left, left) is a Nash equilibrium.',
      'The shooter has the dominant strategy "center".',
      'This game has no Nash equilibrium.',
      'If the shooter wants to kick right and the goalkeeper wants to dive right, there are unilaterally profitable deviations.',
    ],
  
    correctChoiceIndex: 3,
    solutionDe:
      '<p><strong>Richtige Antwort: D</strong></p><p>Wenn der Schütze nach rechts schießt und der Torwart nach rechts hechtet, erhält der Schütze $(0)$ — er kann einseitig auf links oder mitte wechseln und $(1)$ erhalten.</p>',
    solutionEn:
      '<p><strong>Correct answer: D</strong></p><p>If the shooter kicks right and the goalkeeper dives right, the shooter receives $(0)$ — they can unilaterally switch to left or center and receive $(1)$.</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-5',
    subjectId: 'spieltheorie',
    titleDe: 'Hawk-Dove-Spiel mit Reputationskosten',
    titleEn: 'Hawk-Dove Game with Reputation Costs',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Betrachten Sie die untenstehende Version des Hawk-Dove Spiels, das wir in der Vorlesung behandelt haben. In diesem Fall gibt es sog. Reputationskosten in Höhe von $P$: eine Taube erscheint schwach, was sich negativ auf den Payoff auswirkt. Nehmen Sie an, dass $C > V > 0$. Welche Aussage ist <strong>falsch</strong>? (2,5 Punkte)</p>' +
      '<table>' +
      '<tr><td></td><td></td><td colspan="2"><strong>Spieler:in 2</strong></td></tr>' +
      '<tr><td></td><td></td><td><strong>Hawk</strong></td><td><strong>Dove</strong></td></tr>' +
      '<tr><td rowspan="2"><strong>Spieler:in 1</strong></td><td><strong>Hawk</strong></td><td>$(0{,}5V - C,\\; 0{,}5V - C)$</td><td>$(V,\\; -P)$</td></tr>' +
      '<tr><td><strong>Dove</strong></td><td>$(-P,\\; V)$</td><td>$(0{,}5V,\\; 0{,}5V)$</td></tr>' +
      '</table>',
    bodyEn:
      '<p>Consider the version of the Hawk-Dove game shown below, which we covered in the lecture. In this case there are so-called reputation costs of $P$: a dove appears weak, which negatively affects the payoff. Assume that $C > V > 0$. Which statement is <strong>false</strong>? (2.5 points)</p>' +
      '<table>' +
      '<tr><td></td><td></td><td colspan="2"><strong>Player 2</strong></td></tr>' +
      '<tr><td></td><td></td><td><strong>Hawk</strong></td><td><strong>Dove</strong></td></tr>' +
      '<tr><td rowspan="2"><strong>Player 1</strong></td><td><strong>Hawk</strong></td><td>$(0.5V - C,\\; 0.5V - C)$</td><td>$(V,\\; -P)$</td></tr>' +
      '<tr><td><strong>Dove</strong></td><td>$(-P,\\; V)$</td><td>$(0.5V,\\; 0.5V)$</td></tr>' +
      '</table>',
    choicesDe: [
      'Wenn $P = 0$ gibt es zwei Nash-Gleichgewichte in reinen Strategien.',
      'Wenn $P > C - 0{,}5V$ ist (Hawk, Hawk) ein Nash-Gleichgewicht.',
      '(Dove, Dove) kann ein Nash-Gleichgewicht sein, wenn die Reputationskosten nicht zu hoch sind.',
      'Im Fall von Reputationsgewinnen bei zurückhaltendem Verhalten ($P < 0$) gibt es zwei Nash-Gleichgewichte.',
    ],
    choicesEn: [
      'If $P = 0$ there are two Nash equilibria in pure strategies.',
      'If $P > C - 0.5V$, (Hawk, Hawk) is a Nash equilibrium.',
      '(Dove, Dove) can be a Nash equilibrium when reputation costs are not too high.',
      'In the case of reputation gains from restrained behavior ($P < 0$), there are two Nash equilibria.',
    ],
  
    correctChoiceIndex: 2,
    solutionDe:
      '<p><strong>Richtige Antwort: C</strong></p><p>(Dove, Dove) kann <em>kein</em> Nash-Gleichgewicht sein: Die Auszahlung ist $(0{,}5V,\; 0{,}5V)$. Abweichung auf Hawk bringt $V > 0{,}5V$ (da $V > 0$). Die einseitige Abweichung ist immer profitabel.</p>',
    solutionEn:
      '<p><strong>Correct answer: C</strong></p><p>(Dove, Dove) can <em>never</em> be a Nash equilibrium: the payoff is $(0.5V,\; 0.5V)$. Deviating to Hawk yields $V > 0.5V$ (since $V > 0$). The unilateral deviation is always profitable.</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-6',
    subjectId: 'spieltheorie',
    titleDe: 'Sequentielles Übernahmespiel',
    titleEn: 'Sequential Buy-Out Game',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Ein großes Unternehmen möchte ein Start-up übernehmen und überlegt, ein Angebot für einen sog. „buy-out" abzugeben. Im Fall eines Angebots können die Eigentümer:innen des Start-ups das Angebot entweder annehmen oder ablehnen. Das Spiel und die payoffs werden in der Grafik gezeigt. Welche Aussage ist <strong>falsch</strong>? (2,5 Punkte)</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Spielbaum: Übernahmespiel</strong><br>Siehe Klausur SoSe 25</span></div>',
    bodyEn:
      '<p>A large company wants to acquire a start-up and is considering making an offer for a so-called "buy-out." If an offer is made, the owners of the start-up can either accept or decline the offer. The game and payoffs are shown in the diagram. Which statement is <strong>false</strong>? (2.5 points)</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Game tree: Buy-out game</strong><br>See Exam SoSe 25</span></div>',
    choicesDe: [
      '(kein Angebot, nicht annehmen) ist ein Nash-Gleichgewicht.',
      '(Angebot, annehmen) ist ein Nash-Gleichgewicht.',
      '(kein Angebot, nicht annehmen) ist <strong>nicht</strong> teilspielperfekt.',
      '(Angebot, nicht annehmen) ist <strong>nicht</strong> teilspielperfekt.',
    ],
    choicesEn: [
      '(no offer, not accept) is a Nash equilibrium.',
      '(offer, accept) is a Nash equilibrium.',
      '(no offer, not accept) is <strong>not</strong> subgame perfect.',
      '(offer, not accept) is <strong>not</strong> subgame perfect.',
    ],
  
    correctChoiceIndex: 2,
    solutionDe:
      '<p><strong>Richtige Antwort: C</strong></p><p>Laut dem Spielbaum ist „nicht annehmen" die optimale Aktion des Start-ups im Teilspiel nach einem Angebot. Damit ist (kein Angebot, nicht annehmen) das teilspielperfekte Nash-Gleichgewicht. Die Aussage, es sei <em>nicht</em> teilspielperfekt, ist daher falsch.</p>',
    solutionEn:
      '<p><strong>Correct answer: C</strong></p><p>According to the game tree, "not accept" is the optimal action of the start-up in the subgame after an offer. Thus (no offer, not accept) is the subgame perfect Nash equilibrium. The claim that it is <em>not</em> subgame perfect is therefore false.</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-7',
    subjectId: 'maerkte',
    titleDe: 'Steuer-Diagramm – Wohlfahrtsverlust',
    titleEn: 'Tax Diagram – Deadweight Loss',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Unten sehen Sie ein Diagramm, das den Markt für ein einfaches Konsumgut mit Preis p und Menge q darstellt. Die Nachfrage- und die Angebotskurve sind in rot und blau eingezeichnet – ihr Schnittpunkt bestimmt den Gleichgewichtspreis $p^*$. Außerdem wird Steuer erhoben, sodass Konsumenten- und Produzentenpreis auseinanderfallen. Welche Aussage ist <strong>falsch</strong>? (2,5 Punkte)</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Steuer-Diagramm</strong><br>Siehe Klausur SoSe 25</span></div>',
    bodyEn:
      '<p>Below you see a diagram showing the market for a simple consumer good with price p and quantity q. The demand and supply curves are drawn in red and blue -- their intersection determines the equilibrium price $p^*$. In addition, a tax is levied so that consumer and producer prices diverge. Which statement is <strong>false</strong>? (2.5 points)</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Tax diagram</strong><br>See Exam SoSe 25</span></div>',
    choicesDe: [
      'Die Fläche $a$ beschreibt den Wohlfahrtsverlust, der dadurch entsteht, dass bestimmte Konsument:innen im Steuergleichgewicht einem Preis oberhalb ihrer Zahlungsbereitschaft bezahlen.',
      'Die Fläche $e$ beschreibt den Wohlfahrtsverlust, der dadurch entsteht, dass einige Produzenten, die Grenzkosten unterhalb der Zahlungsbereitschaft einiger Konsument:innen haben, aber aufgrund des niedrigeren Preises nicht produzieren können.',
      'Die Fläche $c$ beschreibt die Produzentenrente im Gleichgewicht mit Steuern.',
      'Die Fläche $b$ beschreibt den Verlust an Konsumentenrente für Konsument:innen, die auch nach der Steuereinführung konsumieren können.',
    ],
    choicesEn: [
      'Area $a$ describes the deadweight loss arising because certain consumers in the tax equilibrium face a price above their willingness to pay.',
      'Area $e$ describes the deadweight loss arising because some producers whose marginal costs are below some consumers\' willingness to pay cannot produce due to the lower price.',
      'Area $c$ describes the producer surplus in the equilibrium with taxes.',
      'Area $b$ describes the loss of consumer surplus for consumers who can still consume after the tax is introduced.',
    ],
  
    correctChoiceIndex: 0,
    solutionDe:
      '<p><strong>Richtige Antwort: A</strong></p><p>Die gekennzeichnete Fläche beschreibt <em>nicht</em> den Wohlfahrtsverlust durch Konsument:innen, die über ihrer Zahlungsbereitschaft zahlen. Der Wohlfahrtsverlust (DWL) entsteht durch entgangene Tauschgeschäfte.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Steuer- und Wohlfahrtsdiagramm mit Kennzeichnung der Flächen</strong><br>Siehe Lösung Klausur SoSe 25, Aufgabe 1.7</span></div>',
    solutionEn:
      '<p><strong>Correct answer: A</strong></p><p>The labeled area does <em>not</em> describe the deadweight loss from consumers paying above their willingness to pay. The DWL arises from foregone trades.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Tax and welfare diagram with labeled areas</strong><br>See Solution Exam SoSe 25, Question 1.7</span></div>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-8',
    subjectId: 'angebot',
    titleDe: 'Kostenfunktion – Grenz- und Durchschnittskosten',
    titleEn: 'Cost Function – Marginal and Average Costs',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Ein Unternehmen hat die untenstehende Kostenfunktion. Welche Aussage ist <strong>korrekt</strong>? (2,5 Punkte)</p>' +
      '<p>$$C(q) = a + bq + cq^2 + dq^3$$</p>',
    bodyEn:
      '<p>A firm has the cost function shown below. Which statement is <strong>correct</strong>? (2.5 points)</p>' +
      '<p>$$C(q) = a + bq + cq^2 + dq^3$$</p>',
    choicesDe: [
      'Die Grenzkosten sind konstant.',
      'Die Durchschnittskosten betragen $b + cq + dq^2$.',
      'Die variablen Durchschnittskosten sind $b + cq + dq^2$.',
      'Die Grenzkosten sind gleich den variablen Durchschnittskosten.',
    ],
    choicesEn: [
      'Marginal costs are constant.',
      'Average costs are $b + cq + dq^2$.',
      'Average variable costs are $b + cq + dq^2$.',
      'Marginal costs equal average variable costs.',
    ],
  
    correctChoiceIndex: 2,
    solutionDe:
      '<p><strong>Richtige Antwort: C</strong></p><p>Bei $C(q) = a + bq + cq^2 + dq^3$ sind die variablen Kosten $VC(q) = bq + cq^2 + dq^3$, also die variablen Durchschnittskosten $AVC = b + cq + dq^2$.</p>',
    solutionEn:
      '<p><strong>Correct answer: C</strong></p><p>For $C(q) = a + bq + cq^2 + dq^3$, the variable costs are $VC(q) = bq + cq^2 + dq^3$, so the average variable costs are $AVC = b + cq + dq^2$.</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-9',
    subjectId: 'externalitaeten',
    titleDe: 'Trittbrettfahrerproblem',
    titleEn: 'Free Rider Problem',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Das Trittbrettfahrerproblem ist das zentrale Hindernis bei der Bereitstellung öffentlicher Güter. Welche Aussage ist <strong>falsch</strong>? (2,5 Punkte)</p>',
    bodyEn:
      '<p>The free rider problem is the central obstacle in the provision of public goods. Which statement is <strong>false</strong>? (2.5 points)</p>',
    choicesDe: [
      'Das Trittbrettfahrerproblem bezeichnet eine zu niedrige Zahlungsbereitschaft von Konsument:innen, die ihre positive Externalität auf andere ignorieren.',
      'Eine effiziente öffentliche Lösung des Trittbrettfahrerproblems ist in einer Demokratie durch Abstimmung und Zwang möglich.',
      'Die Bereitstellung bestimmter öffentlicher Güter kann auf Altruismus fußen, da der Konsum anderer in das eigene Kalkül eingeht und so eine höhere Zahlungsbereitschaft entsteht.',
      'Die Finanzierung öffentlicher Güter kann durch Reputationskosten unterstützt werden, wenn Trittbrettfahrer sozial sanktioniert werden können.',
    ],
    choicesEn: [
      'The free rider problem refers to a too-low willingness to pay by consumers who ignore their positive externality on others.',
      'An efficient public solution to the free rider problem is possible in a democracy through voting and coercion.',
      'The provision of certain public goods can be based on altruism, since others\' consumption enters one\'s own calculus, creating a higher willingness to pay.',
      'The financing of public goods can be supported by reputation costs when free riders can be socially sanctioned.',
    ],
  
    correctChoiceIndex: 1,
    solutionDe:
      '<p><strong>Richtige Antwort: B</strong></p><p>Eine effiziente öffentliche Lösung durch Abstimmung und Zwang ist in einer Demokratie <em>nicht immer</em> möglich. Abstimmungen führen zum Ergebnis des Medianwählers, das im Allgemeinen nicht der effizienten Bereitstellungsmenge entspricht.</p>',
    solutionEn:
      '<p><strong>Correct answer: B</strong></p><p>An efficient public solution through voting and coercion is <em>not always</em> possible in a democracy. Voting leads to the median voter outcome, which generally does not correspond to the efficient provision level.</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-10',
    subjectId: 'marktmacht',
    titleDe: 'Bündelung – Microsoft',
    titleEn: 'Bundling – Microsoft',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Die Tabelle zeigt die Zahlungsbereitschaften von Bertie und Yvonne f\u00fcr Excel und Word sowie f\u00fcr das B\u00fcndel aus beiden, \u201EOffice\u201C. Microsoft hat marginale Kosten von 0, kennt die Zahlungsbereitschaften der beiden, und kann die Produkte einzeln <strong>ODER</strong> als B\u00fcndel anbieten. Bertie und Yvonne zahlen die gleichen Preise. Welche Aussage ist <strong>falsch</strong>? (2,5 Punkte)</p>' +
      '<table>' +
      '<tr><td></td><td><strong>Excel</strong></td><td><strong>Word</strong></td><td><strong>Office</strong></td></tr>' +
      '<tr><td><strong>Bertie</strong></td><td>$55$</td><td>$A$</td><td>$55 + A$</td></tr>' +
      '<tr><td><strong>Yvonne</strong></td><td>$100$</td><td>$40$</td><td>$140$</td></tr>' +
      '</table>',
    bodyEn:
      '<p>The table shows the willingness to pay of Bertie and Yvonne for Excel and Word as well as for the bundle of both, \u201COffice.\u201D Microsoft has marginal costs of 0, knows both buyers\' willingness to pay, and can offer the products individually <strong>OR</strong> as a bundle. Bertie and Yvonne pay the same prices. Which statement is <strong>false</strong>? (2.5 points)</p>' +
      '<table>' +
      '<tr><td></td><td><strong>Excel</strong></td><td><strong>Word</strong></td><td><strong>Office</strong></td></tr>' +
      '<tr><td><strong>Bertie</strong></td><td>$55$</td><td>$A$</td><td>$55 + A$</td></tr>' +
      '<tr><td><strong>Yvonne</strong></td><td>$100$</td><td>$40$</td><td>$140$</td></tr>' +
      '</table>',
    choicesDe: [
      'Ist $A = 10$, sollte Microsoft nur die Einzelprodukte anbieten, um den Gewinn zu maximieren.',
      'Ist $A = 90$, sollte Microsoft nur das B\u00fcndel anbieten, um den Gewinn zu maximieren.',
      'Ist $A = 110$ kann Microsoft den Gewinn maximieren, indem es Excel zu einem Preis von 100 und Word zu einem Preis von 40 anbietet.',
      'Ist $A = 210$, sollte Microsoft nur das B\u00fcndel anbieten, um seinen Gewinn zu maximieren.',
    ],
    choicesEn: [
      'If $A = 10$, Microsoft should only offer individual products to maximize profit.',
      'If $A = 90$, Microsoft should only offer the bundle to maximize profit.',
      'If $A = 110$, Microsoft can maximize profit by offering Excel at a price of 100 and Word at a price of 40.',
      'If $A = 210$, Microsoft should only offer the bundle to maximize its profit.',
    ],
  
    correctChoiceIndex: 3,
    solutionDe:
      '<p><strong>Richtige Antwort: D</strong></p><p>Ist $A = 210$: Einzelverkauf (Excel 55 + Word 210) bringt 320. Bündelung bei 140 bringt nur 280. Microsoft sollte <em>nicht</em> nur das Bündel anbieten.</p>',
    solutionEn:
      '<p><strong>Correct answer: D</strong></p><p>If $A = 210$: individual sales (Excel 55 + Word 210) yield 320. Bundling at 140 yields only 280. Microsoft should <em>not</em> only offer the bundle.</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-11',
    subjectId: 'maerkte',
    titleDe: 'Edgeworth-Box – Nettonachfrage',
    titleEn: 'Edgeworth Box – Net Demands',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Die Edgeworth Box unten beschreibt Allokationen von zwei G\u00fctern (1 und 2) zwischen zwei Personen (A und B). Die Anfangsausstattung ist wie in der Vorlesung durch $\\omega_{A_1}$, $\\omega_{A_2}$, $\\omega_{B_1}$, und $\\omega_{B_2}$ (also Punkt $\\omega$) gekennzeichnet. Die schwarze Gerade hat die Steigung $p_1/p_2$, sodass $\\mathbf{x}_A$ und $\\mathbf{x}_B$ die Bruttonachfragen beschreiben. Welche Aussage ist bei dem abgebildeten Preisverh\u00e4ltnis <strong>falsch</strong>? (2,5 Punkte)</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Edgeworth Box</strong><br>Siehe Klausur SoSe 25, Aufgabe 1.11</span></div>',
    bodyEn:
      '<p>The Edgeworth box below describes allocations of two goods (1 and 2) between two persons (A and B). The initial endowment is denoted as in the lecture by $\\omega_{A_1}$, $\\omega_{A_2}$, $\\omega_{B_1}$, and $\\omega_{B_2}$ (i.e., point $\\omega$). The black line has slope $p_1/p_2$, so that $\\mathbf{x}_A$ and $\\mathbf{x}_B$ are the gross demands. Which statement is <strong>false</strong> at the depicted price ratio? (2.5 points)</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Edgeworth Box</strong><br>See Exam SoSe 25, Question 1.11</span></div>',
    choicesDe: [
      'Die Nettonachfrage von A nach Gut 1 ist negativ.',
      'Die Nettonachfrage von A nach Gut 2 ist positiv.',
      'Die Nettonachfrage von B nach Gut 1 ist positiv.',
      'Die Nettonachfrage von B nach Gut 2 ist positiv.',
    ],
    choicesEn: [
      'A\'s net demand for good 1 is negative.',
      'A\'s net demand for good 2 is positive.',
      'B\'s net demand for good 1 is positive.',
      'B\'s net demand for good 2 is positive.',
    ],
  
    correctChoiceIndex: 3,
    solutionDe:
      '<p><strong>Richtige Antwort: D</strong></p><p>Wenn A Gut 1 verkauft und Gut 2 kauft, muss B als Gegenpartei Gut 1 kaufen und Gut 2 verkaufen. Die Nettonachfrage von B nach Gut 2 ist daher <em>negativ</em>, nicht positiv.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Edgeworth-Box mit Nettonachfrage-Vektoren</strong><br>Siehe Lösung Klausur SoSe 25, Aufgabe 1.11</span></div>',
    solutionEn:
      '<p><strong>Correct answer: D</strong></p><p>If A sells good 1 and buys good 2, B must buy good 1 and sell good 2. B\'s net demand for good 2 is therefore <em>negative</em>, not positive.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Edgeworth box with net demand vectors</strong><br>See Solution Exam SoSe 25, Question 1.11</span></div>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-12',
    subjectId: 'nachfrage',
    titleDe: 'Heinerfest – Budgetgerade',
    titleEn: 'Heinerfest – Budget Line',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Das unten abgebildete Diagramm ist im Zuge des Heinerfestes entstanden und illustriert die Budgetgerade (blau) einer Studierenden bei gegebenen Preisen in diesem Jahr. Die G\u00fctermengen beziehen sich auf die G\u00fcter Apfelwein und Bratwurst. Welche Aussage ist <strong>falsch</strong>? (2,5 Punkte)</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Budgetgerade Heinerfest</strong><br>Siehe Klausur SoSe 25, Aufgabe 1.12</span></div>',
    bodyEn:
      '<p>The diagram below was created in the context of the Heinerfest and illustrates the budget line (blue) of a student at given prices this year. The quantities refer to the goods apple wine and bratwurst. Which statement is <strong>false</strong>? (2.5 points)</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Budget line Heinerfest</strong><br>See Exam SoSe 25, Question 1.12</span></div>',
    choicesDe: [
      'Die Studierende kann sich G\u00fcterb\u00fcndel $A$ gerade noch leisten.',
      'Das G\u00fcterb\u00fcndel $C$ ist unerschwinglich.',
      'Das G\u00fcterb\u00fcndel $B$ ist erschwinglich.',
      'Das G\u00fcterbündel $D$ wird nicht mehr erschwinglich, wenn der Preis von Apfelwein f\u00e4llt.',
    ],
    choicesEn: [
      'The student can just barely afford bundle $A$.',
      'Bundle $C$ is unaffordable.',
      'Bundle $B$ is affordable.',
      'Bundle $D$ will no longer be affordable if the price of apple wine falls.',
    ],
  
    correctChoiceIndex: 3,
    solutionDe:
      '<p><strong>Richtige Antwort: D</strong></p><p>Wenn der Preis von Apfelwein <em>fällt</em>, dreht sich die Budgetgerade nach außen. Dadurch werden mehr Bündel erschwinglich, nicht weniger.</p>',
    solutionEn:
      '<p><strong>Correct answer: D</strong></p><p>If the price of apple wine <em>falls</em>, the budget line rotates outward. This makes more bundles affordable, not fewer.</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-13',
    subjectId: 'marktmacht',
    titleDe: 'Hotelling-Modell – Eisverkäufer',
    titleEn: 'Hotelling Model – Ice Cream Vendors',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>In den Abbildungen A bis D wird ein Strand mit zwei Eisverkäufern (L und R) skizziert. Jeder Punkt auf der blauen Geraden entspricht der Position einer:s Konsument:in und die Breite entspricht der Gesamtmasse an Konsument:innen. Der blaue vertikale Strich in der Mitte markiert das Zentrum und die schwarzen Punkte geben die jeweilige Position der Verkäufer am Strand an. Jede:r Konsument:in wählt immer den nächstgelegenen Eisverkäufer \u2013 die Wegkosten sind für jede:n gleich \u2013 und wählt mit gleicher Wahrscheinlichkeit zwischen den Eisverkäufern bei gleichen Wegkosten. Der Eispreis ist fix und einheitlich. Welche Aussage ist <strong>korrekt</strong>? (2,5 Punkte)</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Hotelling-Modell Diagramme A-D</strong><br>Siehe Klausur SoSe 25, Aufgabe 1.13</span></div>',
    bodyEn:
      '<p>In diagrams A through D, a beach with two ice cream vendors (L and R) is sketched. Each point on the blue line corresponds to the position of a consumer and the width corresponds to the total mass of consumers. The blue vertical line in the middle marks the center and the black dots indicate the respective positions of the vendors on the beach. Each consumer always chooses the nearest ice cream vendor \u2013 travel costs are the same for everyone \u2013 and chooses with equal probability between the vendors when travel costs are equal. The ice cream price is fixed and uniform. Which statement is <strong>correct</strong>? (2.5 points)</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Hotelling model diagrams A-D</strong><br>See Exam SoSe 25, Question 1.13</span></div>',
    choicesDe: [
      'In Abbildung A liegt eine Positionierung vor, die zwar Pareto-effizient ist, aber kein Nash-Gleichgewicht darstellt.',
      'In Abbildung B sind die Pfeile für die Marktanteile falsch eingezeichnet, der Pfeil für L müsste bis zum Punkt R reichen.',
      'Abbildung C stellt ein mögliches Nash-Gleichgewicht dar.',
      'Positionieren sich die Verkäufer wie in Abbildung D, macht einer der beiden keinen Umsatz.',
    ],
    choicesEn: [
      'In diagram A, the positioning is Pareto efficient but does not constitute a Nash equilibrium.',
      'In diagram B, the arrows for market shares are drawn incorrectly; the arrow for L should extend to point R.',
      'Diagram C represents a possible Nash equilibrium.',
      'If the vendors position themselves as in diagram D, one of them makes no revenue.',
    ],
  
    correctChoiceIndex: 0,
    solutionDe:
      '<p><strong>Richtige Antwort: A</strong></p><p>In Abbildung A stehen die Verkäufer bei den Viertelpositionen. Diese Positionierung ist Pareto-effizient (minimale Wegkosten), aber kein Nash-Gleichgewicht (Anreiz zur Mitte).</p>',
    solutionEn:
      '<p><strong>Correct answer: A</strong></p><p>In diagram A, the vendors are at the quarter positions. This is Pareto efficient (minimal travel costs) but not a Nash equilibrium (incentive to move to center).</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-14',
    subjectId: 'asymmetrische-info',
    titleDe: 'Signaling auf dem Arbeitsmarkt',
    titleEn: 'Job Market Signaling',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Informationsasymmetrien sind in den meisten Märkten ein großes Problem, doch Signale können unter Umständen Abhilfe schaffen. Welche Aussage im Kontext von Arbeitsmärkten ist <strong>korrekt</strong>? (2,5 Punkte)</p>',
    bodyEn:
      '<p>Information asymmetries are a major problem in most markets, but signals can sometimes help. Which statement in the context of labor markets is <strong>correct</strong>? (2.5 points)</p>',
    choicesDe: [
      'Der Wohlfahrtseffekt von Signalen ist stets eindeutig positiv, denn sie lösen das Problem der adversen Selektion.',
      'Damit Signale nützlich sein können, müssen sie für den besseren Typ teurer sein.',
      'Auch wenn Unternehmen die Typen von Arbeiter:innen nicht auseinanderhalten können, zahlen sie im allgemeinen nach Grenzprodukt und das Arbeitsmarktgleichgewicht ist effizient.',
      'Der Pergamenteffekt beschreibt, dass eine Ausbildung insbesondere an Eliteuniversitäten (auch) als Signal an zukünftige Arbeitgeber wirkt, da nur junge Menschen mit großem Talent einen solch teuren Schritt gehen.',
    ],
    choicesEn: [
      'The welfare effect of signals is always unambiguously positive, as they solve the problem of adverse selection.',
      'For signals to be useful, they must be more expensive for the better type.',
      'Even if firms cannot distinguish between worker types, they generally pay marginal product and the labor market equilibrium is efficient.',
      'The parchment effect describes that education, especially at elite universities, serves (also) as a signal to future employers, since only young people with great talent take such an expensive step.',
    ],
  
    correctChoiceIndex: 3,
    solutionDe:
      '<p><strong>Richtige Antwort: D</strong></p><p>Der Pergamenteffekt beschreibt, dass eine Ausbildung insbesondere an Eliteuniversitäten als Signal an zukünftige Arbeitgeber wirkt, da nur talentierte junge Menschen diesen teuren Schritt gehen.</p>',
    solutionEn:
      '<p><strong>Correct answer: D</strong></p><p>The parchment effect describes that education, especially at elite universities, serves as a signal to future employers, since only talented young people take this expensive step.</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-15',
    subjectId: 'asymmetrische-info',
    titleDe: 'Prinzipal-Agent-Modell',
    titleEn: 'Principal-Agent Model',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>In der Vorlesung haben wir uns mit dem Principal-Agent-Modell bekannt gemacht. Welche Aussage zu dessen typischen Annahmen ist <strong>falsch</strong>? (2,5 Punkte)</p>',
    bodyEn:
      '<p>In the lecture we introduced the principal-agent model. Which statement about its typical assumptions is <strong>false</strong>? (2.5 points)</p>',
    choicesDe: [
      'Die Partizipationsbedingung besagt, dass das erwartete Gehalt abzüglich der persönlichen (Anstrengungs-) Kosten des Agenten dessen outside option übersteigen muss, damit der Agent ein hinreichendes Anstrengungsniveau an den Tag legen möchte.',
      'Die Anreizkompatibilitätsbedingung besagt, dass der Agent seine Anstrengung stets so wählt, dass sein erwarteter Nettonutzen aus der Tätigkeit maximiert ist.',
      'Bei einem konstanten Lohn kommt es in aller Regel zu sog. shirking, also einer Situation, in der ein Angestellter nicht das maximale Anstrengungsniveau an den Tag legt.',
      'Im allgemeinen können Anreizprobleme mindestens teilweise durch eine Erfolgskomponente wie bspw. einen Bonus adressiert werden.',
    ],
    choicesEn: [
      'The participation constraint states that expected pay minus the agent\'s personal (effort) costs must exceed the outside option for the agent to exert a sufficient effort level.',
      'The incentive compatibility constraint states that the agent always chooses effort to maximize expected net utility from the activity.',
      'With a constant wage, so-called shirking typically occurs, i.e., a situation where an employee does not exert maximum effort.',
      'In general, incentive problems can be at least partially addressed through a performance component such as a bonus.',
    ],
  
    correctChoiceIndex: 0,
    solutionDe:
      '<p><strong>Richtige Antwort: A</strong></p><p>Die Partizipationsbedingung besagt, dass der Agent den Vertrag <em>annimmt</em> (Nutzen ≥ Outside-Option) — nicht, dass er ein bestimmtes Anstrengungsniveau wählt. Das regelt die Anreizkompatibilitätsbedingung.</p>',
    solutionEn:
      '<p><strong>Correct answer: A</strong></p><p>The participation constraint states that the agent <em>accepts</em> the contract (utility ≥ outside option) — not that they choose a specific effort level. That is governed by the incentive compatibility constraint.</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-16',
    subjectId: 'verhaltensoekonomie',
    titleDe: 'Risikopräferenzen und Sicherheitsäquivalent',
    titleEn: 'Risk Preferences and Certainty Equivalent',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Risikopräferenzen werden in der VWL mithilfe des sog. Sicherheitsäquivalents bzw. der Krümmung der Nutzenfunktion über Lotterien definiert. Welche Aussage ist <strong>korrekt</strong>? (2,5 Punkte)</p>',
    bodyEn:
      '<p>Risk preferences in economics are defined using the so-called certainty equivalent and the curvature of the utility function over lotteries. Which statement is <strong>correct</strong>? (2.5 points)</p>',
    choicesDe: [
      'Das Sicherheitsäquivalent beschreibt den Nutzen einer Person, wenn sie die höchste Auszahlung einer Lotterie ohne Unsicherheit erhält.',
      'Eine Person mit risikofreudigen Präferenzen hat eine konvexe Nutzenfunktion.',
      'Der Nutzen des Sicherheitsäquivalents liegt bei risikoscheuen Personen immer unterhalb des Nutzens des Erwartungswertes der Lotterie.',
      'Risikoneutrale Präferenzen werden mit einer strikt konkaven Nutzenfunktion abgebildet.',
    ],
    choicesEn: [
      'The certainty equivalent describes the utility a person receives when they get the highest payout of a lottery without uncertainty.',
      'A person with risk-loving preferences has a convex utility function.',
      'For risk-averse persons, the utility of the certainty equivalent always lies below the utility of the expected value of the lottery.',
      'Risk-neutral preferences are represented by a strictly concave utility function.',
    ],
  
    correctChoiceIndex: 1,
    solutionDe:
      '<p><strong>Richtige Antwort: B</strong></p><p>Eine Person mit risikofreudigen Präferenzen hat eine konvexe Nutzenfunktion ($u\'\'(x) > 0$).</p>',
    solutionEn:
      '<p><strong>Correct answer: B</strong></p><p>A person with risk-loving preferences has a convex utility function ($u\'\'(x) > 0$).</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-17',
    subjectId: 'verhaltensoekonomie',
    titleDe: 'Besitztumseffekt – Knetsch (1989)',
    titleEn: 'Endowment Effect – Knetsch (1989)',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>In einem der ersten Experimente seiner Art verteilte Jack Knetsch (1989) zufällig an eine Gruppe von Studierenden jeweils eine Tasse oder einen Schokoriegel (von gleichem Nutzen). Anschließend durfte jede:r Studierende wählen, ob er oder sie ihr Gut gegen das jeweils andere eintauschen möchte. Welche Aussage ist <strong>falsch</strong>? (2,5 Punkte)</p>',
    bodyEn:
      '<p>In one of the first experiments of its kind, Jack Knetsch (1989) randomly distributed either a mug or a chocolate bar (of equal utility) to a group of students. Each student could then choose whether to trade their good for the other one. Which statement is <strong>false</strong>? (2.5 points)</p>',
    choicesDe: [
      'Aufgrund klassischer ökonomischer Theorie würde man erwarten, dass in beiden Gruppen jeweils die Hälfte der Studierenden tauschen möchte.',
      'Aufgrund verhaltensökonomischer Erkenntnisse erwartet man, dass weniger als die Hälfte der Studierenden tauschen möchte.',
      'Verhaltensökonomische Erkenntnisse würden vorhersagen, dass etwa die Hälfte der Studierenden den Schokoriegel wählen würde, wenn sie sich nicht zunächst eines der beiden Güter bekäme, sondern direkt zwischen den beiden wählen dürfte.',
      'Klassische ökonomische Theorie sagt voraus, dass Studierende einen höheren Preis verlangen, wenn sie ihr Gut verkaufen, als wenn sie es kaufen wollen.',
    ],
    choicesEn: [
      'Based on classical economic theory, one would expect that in both groups half of the students would want to trade.',
      'Based on behavioral economic insights, one expects that fewer than half of the students would want to trade.',
      'Behavioral economic insights would predict that about half of the students would choose the chocolate bar if they did not first receive one of the two goods but could choose directly between the two.',
      'Classical economic theory predicts that students demand a higher price when selling their good than when buying it.',
    ],
  
    correctChoiceIndex: 3,
    solutionDe:
      '<p><strong>Richtige Antwort: D</strong></p><p>Klassische ökonomische Theorie sagt WTA = WTP voraus. Der Besitztumseffekt (WTA > WTP) ist ein verhaltensökonomisches Phänomen.</p>',
    solutionEn:
      '<p><strong>Correct answer: D</strong></p><p>Classical economic theory predicts WTA = WTP. The endowment effect (WTA > WTP) is a behavioral economics phenomenon.</p>',
    solutionSource: 'official',
  },
  {
    id: 's25-mc-18',
    subjectId: 'verhaltensoekonomie',
    titleDe: 'Ankereffekte',
    titleEn: 'Anchoring Effects',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'choice',
    bodyDe:
      '<p>Im Folgenden finden Sie Beschreibungen von menschlichem Verhalten in tatsächlichen Experimenten. Welches Verhalten kann <strong>nicht</strong> durch anchoring Effekte erklärt werden? (2,5 Punkte)</p>',
    bodyEn:
      '<p>Below you will find descriptions of human behavior in actual experiments. Which behavior can <strong>not</strong> be explained by anchoring effects? (2.5 points)</p>',
    choicesDe: [
      'Ein Glücksrad mit Zahlen verschiedener Höhe wird gedreht und Teilnehmer:innen sehen das Ergebnis. Anschließend schätzen sie unbekannte Größen zu hoch ein.',
      'Richter spielen vor einem Schuldspruch ein Kartenspiel. Wenn sie es verlieren, sprechen sie höhere Strafen aus.',
      'Konsument:innen, die einen niedrigeren Preis z.B. für Butter gesehen haben, kaufen weniger, wenn der Preis erhöht wird.',
      'Sportautos werden oft auf Messen für Yachten ausgestellt.',
    ],
    choicesEn: [
      'A wheel of fortune with numbers of varying magnitude is spun and participants see the result. They subsequently overestimate unknown quantities.',
      'Judges play a card game before a verdict. When they lose, they impose higher sentences.',
      'Consumers who have seen a lower price, e.g. for butter, buy less when the price is increased.',
      'Sports cars are often displayed at yacht exhibitions.',
    ],
  
    correctChoiceIndex: 2,
    solutionDe:
      '<p><strong>Richtige Antwort: C</strong></p><p>Weniger kaufen bei Preisanstieg ist das Gesetz der Nachfrage — kein Anchoring-Effekt.</p>',
    solutionEn:
      '<p><strong>Correct answer: C</strong></p><p>Buying less when prices rise is the law of demand — not an anchoring effect.</p>',
    solutionSource: 'official',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Klausur SoSe 2025 – Aufgabe 2: Externe Effekte  (20 Punkte, freeform)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 's25-ff-2',
    subjectId: 'externalitaeten',
    titleDe: 'Externe Effekte – Impfungen und Herdenimmunität',
    titleEn: 'Externalities – Vaccinations and Herd Immunity',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'freeform',
    bodyDe:
      '<p>Eine der größten Erfolgsgeschichten der modernen Medizin und der Gesundheitspolitik ist die vollständige Ausrottung der Pocken durch eine globale Impfkampagne Mitte des 20. Jahrhunderts. In dieser Aufgabe analysieren wir den zentralen Wirkmechanismus hinter solchen Impfkampagnen: der sogenannte \u201EHerdenschutz\u201C bzw. die Rolle von Externalitäten.</p>' +
      '<ol>' +
      '<li><strong>(4 Punkte)</strong> Definieren Sie den Begriff \u201EExternalität\u201C und erklären Sie, worin die Externalität im Fall von Impfungen besteht.</li>' +
      '<li><strong>(4 Punkte)</strong> Nehmen Sie nun an, dass der Impfschutz vor einer bestimmten Erkrankung eine kontinuierliche Entscheidungsvariable zwischen 0 und 100% ist, z.B. weil man sich mehrfach oder regelmäßig nachimpfen lassen muss. Diese Menge ist im Diagramm unten auf der horizontalen Achse abgetragen. Auf der vertikalen Achse werden sowohl Nutzen als auch Kosten des Impfschutzes angezeigt. Nehmen Sie an, dass die allgemeine Impfrate in der Bevölkerung relativ niedrig ist.<br><br>Zeichnen Sie eine individuelle Grenzkosten-, eine individuelle Grenznutzen- und eine soziale Grenznutzenkurve ein. Treffen Sie sinnvolle Annahmen und begründen Sie diese explizit. Kennzeichnen Sie den optimalen Impfschutz für ein Individuum.</li>' +
      '<li><strong>(3 Punkte)</strong> Erklären Sie, warum die individuelle Entscheidung ineffizient ist.</li>' +
      '<li><strong>(2 Punkte)</strong> Impfkampagnen in Deutschland legen ihr Hauptaugenmerk auf Werbung und Aufklärung. Erklären Sie die Idee hinter diesem Vorgehen.</li>' +
      '<li><strong>(4 Punkte)</strong> Während der Covid-19-Pandemie wurde über eine weitreichende Impfpflicht diskutiert. Welche Art von Lösung für das Externalitätenproblem stellt eine Impfpflicht dar? Welche <strong>zwei</strong> Herausforderungen gibt es hier? Orientieren Sie sich eng an unserer Vorlesung.</li>' +
      '<li><strong>(3 Punkte)</strong> Diskutieren Sie kurz, wie ein finanzieller Anreiz für eine Impfung funktionieren würde und ob dies sinnvoll wäre.</li>' +
      '</ol>',
    bodyEn:
      '<p>One of the greatest success stories of modern medicine and health policy is the complete eradication of smallpox through a global vaccination campaign in the mid-20th century. In this exercise we analyze the central mechanism behind such vaccination campaigns: so-called \u201Cherd protection\u201D and the role of externalities.</p>' +
      '<ol>' +
      '<li><strong>(4 points)</strong> Define the term \u201Cexternality\u201D and explain what the externality consists of in the case of vaccinations.</li>' +
      '<li><strong>(4 points)</strong> Now assume that vaccination protection against a specific disease is a continuous decision variable between 0 and 100%, e.g. because one can get vaccinated multiple times or regularly. This quantity is plotted on the horizontal axis in the diagram below. On the vertical axis, both benefits and costs of vaccination are shown. Assume that the general vaccination rate in the population is relatively low.<br><br>Draw individual marginal cost, individual marginal benefit, and social marginal benefit curves. Make reasonable assumptions and justify them explicitly. Mark the optimal vaccination level for an individual.</li>' +
      '<li><strong>(3 points)</strong> Explain why the individual decision is inefficient.</li>' +
      '<li><strong>(2 points)</strong> Vaccination campaigns in Germany focus primarily on advertising and education. Explain the idea behind this approach.</li>' +
      '<li><strong>(4 points)</strong> During the Covid-19 pandemic, a far-reaching vaccination mandate was discussed. What type of solution for the externality problem does a vaccination mandate represent? What <strong>two</strong> challenges exist here? Follow our lecture closely.</li>' +
      '<li><strong>(3 points)</strong> Briefly discuss how a financial incentive for vaccination would work and whether this would be sensible.</li>' +
      '</ol>',
  
    solutionDe:
      '<p><strong>2.1 (4 Punkte):</strong> Externalitäten sind soziale Auswirkungen individuellen Handelns, die im Kosten-Nutzen-Kalkül des Handelnden nicht berücksichtigt werden. Im Fall von Impfungen vernachlässigen Individuen den Herdenschutz für andere, also dass sich andere mit niedrigerer Wahrscheinlichkeit bei einem anstecken können. Es handelt sich um eine positive Externalität.</p><p><strong>2.2 (4 Punkte):</strong> Individuelle Grenzkosten (IGK) sind konstant — man muss jedes Mal zum Arzt gehen, es ist immer derselbe Aufwand. Individueller Grenznutzen (IGN) nimmt ab — jedes Mal steigt der Schutz etwas weniger; bei 0 Impfschutz ist der Grenznutzen am höchsten. Sozialer Grenznutzen (SGN) liegt über dem individuellen und steigt schneller, da der Herdenschutzeffekt einsetzt. Optimaler individueller Impfschutz: Schnittpunkt von IGN und IGK.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Impfschutz-Diagramm: Individuelle Grenzkosten, individueller und sozialer Grenznutzen</strong><br>Siehe Lösung Klausur SoSe 25, Aufgabe 2</span></div>' +
      '<p><strong>2.3 (3 Punkte):</strong> Der volkswirtschaftliche Grenznutzen einer Impfung ist die Summe aus sozialem und individuellem Grenznutzen. Die effiziente Entscheidung muss auf diesem vollen Grenznutzen basieren. Der oder die Einzelne vernachlässigt den sozialen Nutzen, also die Externalität. Dadurch kommt es zu einem ineffizient geringen Impfschutz.</p><p><strong>2.4 (2 Punkte):</strong> Werbung und Aufklärung soll die wahrgenommenen Grenzkosten reduzieren oder den wahrgenommenen sozialen Grenznutzen erhöhen. Die Externalität soll also durch die Menschen selbst internalisiert werden.</p><p><strong>2.5 (4 Punkte):</strong> Eine Impfpflicht ist eine Mengenregulierung, also eine Mindestmenge, und somit eine öffentliche Lösung. Herausforderungen: (1) Die Regierung muss die Größe der Externalität und die Höhe der unterschiedlichen Grenzkosten kennen. (2) Die Durchsetzung ist teuer und schwer messbar.</p><p><strong>2.6 (3 Punkte):</strong> Ein finanzieller Anreiz erhöht den individuellen Grenznutzen und führt so zu einem höheren Impfschutz.</p>',
    solutionEn:
      '<p><strong>2.1 (4 points):</strong> Externalities are social consequences of individual actions not taken into account in the individual\'s cost-benefit calculus. In the case of vaccinations, individuals neglect the herd protection for others — i.e., that others can be infected with lower probability. This is a positive externality.</p><p><strong>2.2 (4 points):</strong> Individual marginal costs (IMC) are constant — one must visit the doctor each time, the effort is always the same. Individual marginal benefit (IMB) is decreasing — each additional dose provides slightly less additional protection. Social marginal benefit (SMB) lies above the individual one and rises faster, as the herd protection effect sets in. Optimal individual vaccination level: intersection of IMB and IMC.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Vaccination diagram: Individual marginal cost, individual and social marginal benefit</strong><br>See Solution Exam SoSe 25, Question 2</span></div>' +
      '<p><strong>2.3 (3 points):</strong> The total economic marginal benefit of vaccination is the sum of social and individual marginal benefit. The efficient decision must be based on this full marginal benefit. The individual neglects the social benefit, the externality. This leads to an inefficiently low vaccination level.</p><p><strong>2.4 (2 points):</strong> Advertising and education aim to reduce perceived marginal costs or increase the perceived social marginal benefit. The externality is thus to be internalized by the individuals themselves.</p><p><strong>2.5 (4 points):</strong> A vaccination mandate is a quantity regulation, i.e., a minimum quantity, and thus a public solution. Challenges: (1) The government must know the size of the externality and the different marginal costs. (2) Enforcement is expensive and difficult to measure.</p><p><strong>2.6 (3 points):</strong> A financial incentive increases the individual marginal benefit and thus leads to higher vaccination levels.</p>',
    solutionSource: 'official',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Klausur SoSe 2025 – Aufgabe 3: Marktgleichgewicht im unvollständigen Wettbewerb  (25 Punkte, freeform)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 's25-ff-3',
    subjectId: 'marktmacht',
    titleDe: 'Monopol und Duopol – Coca-Cola',
    titleEn: 'Monopoly and Duopoly – Coca-Cola',
    source: 'exam-sose25',
    sourceLabel: 'Klausur SoSe 25',
    type: 'freeform',
    bodyDe:
      '<p>Zu Beginn des 20. Jahrhunderts hielt Coca-Cola ein quasi-Monopol auf Cola, also ein koffeinhaltiges Kaltgetränk. Die inverse Nachfrage für Cola kann mit $p = 90 - q$ beschrieben werden. Die Kosten der Herstellung von $q$ Einheiten sind durch $C(q) = 10 + 30q$ gegeben.</p>' +
      '<ol>' +
      '<li><strong>(3 Punkte)</strong> Berechnen Sie das Marktgleichgewicht (Preis und Menge), wenn Coca-Cola auf dem Markt ein Preisnehmer wäre.</li>' +
      '<li><strong>(5 Punkte)</strong> Berechnen Sie das Marktgleichgewicht, wenn Coca-Cola als Monopolist agiert.</li>' +
      '<li><strong>(6 Punkte)</strong> Berechnen Sie mithilfe der Ergebnisse aus den Teilaufgaben 1 und 2 den Wohlfahrtsverlust, der durch das Monopol entsteht. Erklären Sie außerdem, wie dieser Verlust zustande kommt. [Hinweis: haben Sie in den Teilaufgaben 1 oder 2 kein Ergebnis, treffen Sie sinnvolle Annahmen und machen Sie diese deutlich.]</li>' +
      '</ol>' +
      '<p>Mitte des 20. Jahrhunderts entstand mit Pepsi ein ernsthafter Konkurrent für Coca-Cola und dieses Duopol besteht bis heute. Wir nehmen an, dass die Unternehmen das gleiche Produkt herstellen, in Mengen konkurrieren, und sich der (inversen) Gesamtmarktnachfrage $p(Q) = 90 - Q$ gegenüber sehen. Beide Unternehmen haben die gleiche Kostenstruktur und ihre Kostenfunktionen lauten $C(q) = 30q$.</p>' +
      '<ol start="4">' +
      '<li><strong>(5 Punkte)</strong> Berechnen Sie das Marktgleichgewicht im Duopol.</li>' +
      '<li><strong>(6 Punkte)</strong> Berechnen Sie den Wohlfahrtsverlust in diesem Duopol mithilfe des Ergebnisses aus Teilaufgabe 1 und vergleichen ihn mit dem Wohlfahrtsverlust aus Teilaufgabe 3. Was erwarten Sie bei weiterem Markteintritt und welche Beziehung besteht zum ersten Wohlfahrtstheorem? [Hinweis: haben Sie in den Teilaufgaben 1 oder 3 kein Ergebnis, treffen Sie sinnvolle Annahmen und machen Sie diese deutlich.]</li>' +
      '</ol>',
    bodyEn:
      '<p>At the beginning of the 20th century, Coca-Cola held a quasi-monopoly on cola, a caffeinated cold drink. The inverse demand for cola can be described by $p = 90 - q$. The costs of producing $q$ units are given by $C(q) = 10 + 30q$.</p>' +
      '<ol>' +
      '<li><strong>(3 points)</strong> Calculate the market equilibrium (price and quantity) if Coca-Cola were a price taker in the market.</li>' +
      '<li><strong>(5 points)</strong> Calculate the market equilibrium when Coca-Cola acts as a monopolist.</li>' +
      '<li><strong>(6 points)</strong> Using the results from sub-questions 1 and 2, calculate the deadweight loss caused by the monopoly. Also explain how this loss arises. [Hint: if you have no result from sub-questions 1 or 2, make reasonable assumptions and state them clearly.]</li>' +
      '</ol>' +
      '<p>In the mid-20th century, Pepsi emerged as a serious competitor for Coca-Cola, and this duopoly persists to this day. We assume that the firms produce the same product, compete in quantities, and face the (inverse) total market demand $p(Q) = 90 - Q$. Both firms have the same cost structure and their cost functions are $C(q) = 30q$.</p>' +
      '<ol start="4">' +
      '<li><strong>(5 points)</strong> Calculate the market equilibrium in the duopoly.</li>' +
      '<li><strong>(6 points)</strong> Calculate the deadweight loss in this duopoly using the result from sub-question 1 and compare it with the deadweight loss from sub-question 3. What do you expect with further market entry and what is the relationship to the First Welfare Theorem? [Hint: if you have no result from sub-questions 1 or 3, make reasonable assumptions and state them clearly.]</li>' +
      '</ol>',
  
    solutionDe:
      '<p><strong>3.1 (3 Punkte):</strong> Die Grenzkosten betragen konstant $MC(q) = C\'(q) = 30$. Im vollständigen Wettbewerb gilt Preis gleich Grenzkosten, also $p^W = 30$. Die umgesetzte Menge beträgt somit $q^W = 90 - 30 = 60$.</p><p><strong>3.2 (5 Punkte):</strong> Im Monopol gilt Grenzerlös gleich Grenzkosten. Grenzkosten sind $30$. Der Grenzerlös ist die Ableitung des Erlöses $pq = 90q - q^2$, also $MR = 90 - 2q$. Somit gilt $90 - 2q^M = 30$, sodass $q^M = 30$ und $p^M = 60$.</p><p><strong>3.3 (6 Punkte):</strong> Die Basis des Dreiecks ist die Mengenreduktion: $60 - 30 = 30$. Die Höhe ist die Preiserhöhung: $60 - 30 = 30$. Der Wohlfahrtsverlust ist $0{,}5 \cdot 30 \cdot 30 = 450$. Er kommt dadurch zustande, dass der Monopolist den Preis höher als die Grenzkosten setzt, sodass einige Konsument:innen nicht mehr konsumieren können, obwohl ihre Zahlungsbereitschaft über den Grenzkosten liegt.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Monopol-Wohlfahrtsverlust: Dreieck zwischen Angebot, Nachfrage und Monopolmenge</strong><br>Siehe Lösung Klausur SoSe 25, Aufgabe 3.3</span></div>' +
      '<p><strong>3.4 (5 Punkte):</strong> Die Gewinnfunktion lautet $\\pi_i = (90 - (q_i + q_j))q_i - 30q_i = 60q_i - q_i^2 - q_iq_j$. Reaktionsfunktion: $60 - 2q_i^* - q_j = 0$, also $q_i^* = 30 - 0{,}5q_j$. Im symmetrischen Gleichgewicht $q^* = 20$, $Q^* = 40$, $p = 50$.</p><p><strong>3.5 (6 Punkte):</strong> Der Wohlfahrtsverlust im Duopol beträgt $0{,}5 \cdot (50 - 30) \cdot (60 - 40) = 200$. Er ist geringer als im Monopol (450), da mehr Wettbewerb besteht. Bei weiterem Markteintritt sinkt der Wohlfahrtsverlust gegen null. Das erste Wohlfahrtstheorem besagt, dass jedes wettbewerbliche Gleichgewicht Pareto-effizient ist.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Duopol-Wohlfahrtsverlust: Vergleich mit Monopol</strong><br>Siehe Lösung Klausur SoSe 25, Aufgabe 3.5</span></div>',
    solutionEn:
      '<p><strong>3.1 (3 points):</strong> Marginal costs are constant at $MC(q) = C\'(q) = 30$. In perfect competition, price equals marginal costs, so $p^W = 30$. The quantity traded is $q^W = 90 - 30 = 60$.</p><p><strong>3.2 (5 points):</strong> In monopoly, marginal revenue equals marginal cost. MR is the derivative of revenue $pq = 90q - q^2$, so $MR = 90 - 2q$. Thus $90 - 2q^M = 30$, giving $q^M = 30$ and $p^M = 60$.</p><p><strong>3.3 (6 points):</strong> The base of the triangle is the quantity reduction: $60 - 30 = 30$. The height is the price increase: $60 - 30 = 30$. DWL = $0.5 \cdot 30 \cdot 30 = 450$. It arises because the monopolist sets price above marginal cost, so some consumers cannot purchase despite their willingness to pay exceeding marginal cost.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Monopoly deadweight loss: triangle between supply, demand, and monopoly quantity</strong><br>See Solution Exam SoSe 25, Question 3.3</span></div>' +
      '<p><strong>3.4 (5 points):</strong> Profit function: $\\pi_i = (90 - (q_i + q_j))q_i - 30q_i = 60q_i - q_i^2 - q_iq_j$. Reaction function: $60 - 2q_i^* - q_j = 0$, so $q_i^* = 30 - 0.5q_j$. Symmetric equilibrium: $q^* = 20$, $Q^* = 40$, $p = 50$.</p><p><strong>3.5 (6 points):</strong> Duopoly DWL = $0.5 \cdot (50 - 30) \cdot (60 - 40) = 200$. This is less than the monopoly DWL (450) due to more competition. With further entry, DWL approaches zero. The First Welfare Theorem states that every competitive equilibrium is Pareto efficient.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Duopoly deadweight loss: comparison with monopoly</strong><br>See Solution Exam SoSe 25, Question 3.5</span></div>',
    solutionSource: 'official',
  },
]
