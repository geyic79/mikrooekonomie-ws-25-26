import type { Exercise } from '@/data/types'

export const exerciseSheetExercises: Exercise[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // Übung 1 – Nachfrage  (8 Aufgaben)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'es1-1',
    subjectId: 'nachfrage',
    titleDe: 'Budgetmengen',
    titleEn: 'Budget Sets',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 1',
    type: 'freeform',
    bodyDe:
      '<p>Angenommen, Sie haben ein Einkommen von 40\u202F€ und konsumieren zwei Güter. Gut 1 kostet 10\u202F€, Gut 2 kostet 5\u202F€ pro Einheit.</p>' +
      '<ol>' +
      '<li>Definieren Sie Ihre Budgetgerade und Ihre Budgetmenge.</li>' +
      '<li>Wenn Sie ihr gesamtes Einkommen für Gut 1 bzw. Gut 2 ausgeben, welche Menge können Sie jeweils kaufen?</li>' +
      '<li>Zeichnen Sie die Budgetmenge. Ist diese konvex?</li>' +
      '<li>Wie lauten die Achsenabschnitte in den folgenden Szenarien (jeweils ausgehend von der Ursprungssituation)? Zeichnen Sie die Budgetgeraden für alle Szenarien. Verifizieren Sie diese mit Hilfe des interaktiven Diagramms aus Vorlesung 1.' +
        '<ol type="a">' +
        '<li>Preis für Gut 1 halbiert sich.</li>' +
        '<li>Preis für Gut 2 verdoppelt sich.</li>' +
        '<li>Beide Preise halbieren sich.</li>' +
        '<li>Beide Preise und das Einkommen verdoppeln sich (z.\u202FB. durch Inflation oder eine Währungsumstellung).</li>' +
        '<li>Es wird eine Umsatzsteuer auf beide Produkte von jeweils 25 Prozent eingeführt.</li>' +
        '<li>Das Einkommen unterliegt einer Einkommenssteuer von 25 Prozent.</li>' +
        '</ol>' +
      '</li>' +
      '</ol>',
    bodyEn:
      '<p>Suppose you have an income of €40 and consume two goods. Good 1 costs €10, Good 2 costs €5 per unit.</p>' +
      '<ol>' +
      '<li>Define your budget line and your budget set.</li>' +
      '<li>If you spend your entire income on Good 1 or Good 2 respectively, how many units can you buy?</li>' +
      '<li>Draw the budget set. Is it convex?</li>' +
      '<li>What are the intercepts in the following scenarios (each starting from the original situation)? Draw the budget lines for all scenarios. Verify them using the interactive diagram from Lecture 1.' +
        '<ol type="a">' +
        '<li>The price of Good 1 is halved.</li>' +
        '<li>The price of Good 2 is doubled.</li>' +
        '<li>Both prices are halved.</li>' +
        '<li>Both prices and income are doubled (e.g., due to inflation or a currency conversion).</li>' +
        '<li>A sales tax of 25 percent is imposed on both products.</li>' +
        '<li>Income is subject to an income tax of 25 percent.</li>' +
        '</ol>' +
      '</li>' +
      '</ol>',
    solutionDe:
      '<ol>' +
      '<li><strong>Budgetmenge:</strong> Menge aller Güterbündel $(x_1, x_2)$ mit $p_1 x_1 + p_2 x_2 \\leq m$, hier: $10x_1 + 5x_2 \\leq 40$.<br><strong>Budgetgerade</strong> (obere Grenze der Budgetmenge): $10x_1 + 5x_2 = 40$.</li>' +
      '<li>$x_2 = 0 \\Rightarrow x_1 = 4$ bzw. $x_1 = 0 \\Rightarrow x_2 = 8$.</li>' +
      '<li>Budgetgerade: $x_2 = 8 - 2x_1$.<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Budgetmenge</strong><br>Siehe Lösung Übung 1, Aufgabe 1</span></div><br>Die Menge ist konvex, da alle Verbindungslinien von zwei $(x_1, x_2)$-Bündeln aus der Menge wieder in ihr enthalten sind. Formale Bedingung: $A \\subseteq \\mathbb{R}$ ist konvex wenn $\\forall x, y \\in A\\; \\forall \\lambda \\in [0,1]: \\lambda x + (1-\\lambda)y \\in A$.</li>' +
      '<li>' +
        '<ol type="a">' +
        '<li>$5x_1 + 5x_2 = 40 \\Rightarrow$ Achsenabschnitte: $x_1 = 8;\\; x_2 = 8$.</li>' +
        '<li>$10x_1 + 10x_2 = 40 \\Rightarrow$ Achsenabschnitte: $x_1 = 4;\\; x_2 = 4$.</li>' +
        '<li>$5x_1 + 2{,}5 x_2 = 40 \\Rightarrow$ Achsenabschnitte: $x_1 = 8;\\; x_2 = 16$.</li>' +
        '<li>$20x_1 + 10x_2 = 80 \\Rightarrow$ Achsenabschnitte: $x_1 = 4;\\; x_2 = 8$ (identisch zur Ausgangslage).</li>' +
        '<li>$1{,}25 \\cdot 10x_1 + 1{,}25 \\cdot 5x_2 = 12{,}5 x_1 + 6{,}25 x_2 = 40 \\Rightarrow$ Achsenabschnitte: $x_1 = 3{,}2;\\; x_2 = 6{,}4$. Anmerkung: Äquivalent zu einer Einkommensteuer von $20\\% = 1 - \\frac{1}{1{,}25}$.</li>' +
        '<li>$10x_1 + 5x_2 = 0{,}75 \\cdot 40 = 30 \\Rightarrow$ Achsenabschnitte: $x_1 = 3;\\; x_2 = 6$.</li>' +
        '</ol>' +
        '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Budgetgeraden für Szenarien a)–f)</strong><br>Siehe Lösung Übung 1, Aufgabe 1</span></div>' +
      '</li>' +
      '</ol>',
    solutionEn:
      '<ol>' +
      '<li><strong>Budget set:</strong> Set of all bundles $(x_1, x_2)$ with $p_1 x_1 + p_2 x_2 \\leq m$, here: $10x_1 + 5x_2 \\leq 40$.<br><strong>Budget line</strong> (upper boundary of the budget set): $10x_1 + 5x_2 = 40$.</li>' +
      '<li>$x_2 = 0 \\Rightarrow x_1 = 4$ and $x_1 = 0 \\Rightarrow x_2 = 8$.</li>' +
      '<li>Budget line: $x_2 = 8 - 2x_1$.<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Budget set</strong><br>See Solution Sheet 1, Exercise 1</span></div><br>The set is convex since all connecting lines between two $(x_1, x_2)$-bundles from the set are again contained in it. Formal condition: $A \\subseteq \\mathbb{R}$ is convex if $\\forall x, y \\in A\\; \\forall \\lambda \\in [0,1]: \\lambda x + (1-\\lambda)y \\in A$.</li>' +
      '<li>' +
        '<ol type="a">' +
        '<li>$5x_1 + 5x_2 = 40 \\Rightarrow$ Intercepts: $x_1 = 8;\\; x_2 = 8$.</li>' +
        '<li>$10x_1 + 10x_2 = 40 \\Rightarrow$ Intercepts: $x_1 = 4;\\; x_2 = 4$.</li>' +
        '<li>$5x_1 + 2.5 x_2 = 40 \\Rightarrow$ Intercepts: $x_1 = 8;\\; x_2 = 16$.</li>' +
        '<li>$20x_1 + 10x_2 = 80 \\Rightarrow$ Intercepts: $x_1 = 4;\\; x_2 = 8$ (identical to the original situation).</li>' +
        '<li>$1.25 \\cdot 10x_1 + 1.25 \\cdot 5x_2 = 12.5 x_1 + 6.25 x_2 = 40 \\Rightarrow$ Intercepts: $x_1 = 3.2;\\; x_2 = 6.4$. Note: Equivalent to an income tax of $20\\% = 1 - \\frac{1}{1.25}$.</li>' +
        '<li>$10x_1 + 5x_2 = 0.75 \\cdot 40 = 30 \\Rightarrow$ Intercepts: $x_1 = 3;\\; x_2 = 6$.</li>' +
        '</ol>' +
        '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Budget lines for scenarios a)–f)</strong><br>See Solution Sheet 1, Exercise 1</span></div>' +
      '</li>' +
      '</ol>',
    solutionSource: 'official',
  },
  {
    id: 'es1-2',
    subjectId: 'nachfrage',
    titleDe: 'Opportunitätskosten',
    titleEn: 'Opportunity Costs',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 1',
    type: 'freeform',
    bodyDe:
      '<ol>' +
      '<li>Definieren Sie Opportunitätskosten.</li>' +
      '<li>Frau Schmidt hat 100.000\u202F€ gespart. Was sind die Opportunitätskosten, wenn Sie den Betrag in Aktien investiert?</li>' +
      '<li>Nehmen wir an, wir befinden uns im Jahr 2007 kurz vor der globalen Finanzkrise. Was sind die Opportunitätskosten von Frau Schmidt, wenn Sie ihr Erspartes in Aktien investiert?</li>' +
      '</ol>',
    bodyEn:
      '<ol>' +
      '<li>Define opportunity costs.</li>' +
      '<li>Mrs. Schmidt has saved €100,000. What are the opportunity costs if she invests the amount in stocks?</li>' +
      '<li>Suppose we are in 2007, shortly before the global financial crisis. What are the opportunity costs of Mrs. Schmidt if she invests her savings in stocks?</li>' +
      '</ol>',
    solutionDe:
      '<ol>' +
      '<li>Die Opportunitätskosten beschreiben den entgangenen (monetären) Nutzen einer nicht gewählten oder nicht realisierbaren Handlungsalternative.</li>' +
      '<li>Die Opportunitätskosten sind die risikofreie Rendite, die Frau Schmidt auf ihr Erspartes erhält. Das kann der Habenzinssatz der Bank sein, oder auch der Kupon von als sehr sicher eingestuften Staatsanleihen (z.\u202FB. USA oder Deutschland).</li>' +
      '<li>Die Opportunitätskosten sind dieselben wie in 2. Wenn sich der erwartete Nutzen einer Alternative ändert, muss sich nicht der Nutzen der anderen Alternative verändern. Die Unsicherheit auf den Finanzmärkten beeinflusst ex ante nicht die Habenzinsen von Banken. Außerdem kennt Frau Schmidt ex ante das Risiko der Finanzkrise nicht und lässt es somit auch nicht in ihre Entscheidung mit einfließen.</li>' +
      '</ol>',
    solutionEn:
      '<ol>' +
      '<li>Opportunity costs describe the foregone (monetary) benefit of a not-chosen or not-realisable alternative action.</li>' +
      '<li>The opportunity costs are the risk-free return Mrs.\u202FSchmidt would receive on her savings. This could be the bank\'s deposit interest rate, or the coupon of government bonds rated as very safe (e.g. USA or Germany).</li>' +
      '<li>The opportunity costs are the same as in 2. If the expected utility of one alternative changes, the utility of the other alternative need not change. The uncertainty in financial markets does not ex ante affect banks\' deposit rates. Moreover, Mrs.\u202FSchmidt does not know the risk of the financial crisis ex ante and therefore does not factor it into her decision.</li>' +
      '</ol>',
    solutionSource: 'official',
  },
  {
    id: 'es1-3',
    subjectId: 'nachfrage',
    titleDe: 'Präferenzen',
    titleEn: 'Preferences',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 1',
    type: 'freeform',
    bodyDe:
      '<ol>' +
      '<li>Wenn wir beobachten, dass eine Konsumentin $(x_1, x_2)$ wählt, wenn ihr $(y_1, y_2)$ ebenfalls zur Verfügung steht, dürfen wir daraus $(x_1, x_2) \\succ (y_1, y_2)$ schließen?</li>' +
      '<li>Der Trainer einer Fußballmannschaft stellt fest, dass er von zwei Stürmern A und B immer den bevorzugen wird, der größer <em>und</em> schneller ist. Ist diese Präferenzrelation transitiv? Ist sie vollständig?</li>' +
      '</ol>',
    bodyEn:
      '<ol>' +
      '<li>If we observe that a consumer chooses $(x_1, x_2)$ when $(y_1, y_2)$ is also available, may we conclude $(x_1, x_2) \\succ (y_1, y_2)$?</li>' +
      '<li>The coach of a football team determines that he will always prefer whichever of two strikers A and B is both taller <em>and</em> faster. Is this preference relation transitive? Is it complete?</li>' +
      '</ol>',
    solutionDe:
      '<ol>' +
      '<li>Nein. Es könnte sein, dass die Konsumentin zwischen den zwei Bündeln indifferent war. Es ist lediglich zulässig, daraus zu schließen, dass $(x_1, x_2) \\succsim (y_1, y_2)$.</li>' +
      '<li>Sie ist transitiv, aber nicht vollständig. Welchen würde er bevorzugen, wenn A größer, jedoch langsamer als B wäre?</li>' +
      '</ol>',
    solutionEn:
      '<ol>' +
      '<li>No. The consumer might have been indifferent between the two bundles. We may only conclude that $(x_1, x_2) \\succsim (y_1, y_2)$.</li>' +
      '<li>It is transitive, but not complete. Which one would he prefer if A were taller but slower than B?</li>' +
      '</ol>',
    solutionSource: 'official',
  },
  {
    id: 'es1-4',
    subjectId: 'nachfrage',
    titleDe: 'Nutzenfunktion und Indifferenzkurve',
    titleEn: 'Utility Function and Indifference Curve',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 1',
    type: 'freeform',
    bodyDe:
      '<ol>' +
      '<li>Grenzen Sie die Begriffe Nutzenfunktion und Indifferenzkurve voneinander ab.</li>' +
      '<li>Nehmen Sie $U(x_1, x_2) = x_1 + x_2$. Zeichnen Sie die Indifferenzkurven in ein zweidimensionales Diagramm ($x_2$ kommt auf die y-Achse.). Verifizieren Sie die Zeichnung mit dem interaktiven Diagramm aus Vorlesung 1.</li>' +
      '<li>Nehmen Sie $U(x_1, x_2) = x_1 + x_2$. Erstellen Sie eine dreidimensionale Zeichnung, in welcher der Nutzen auf der vertikalen z-Achse in Abhängigkeit vom Konsum der beiden Güter dargestellt wird. Tragen Sie in dieser Zeichnung Höhenlinien (=Indifferenzkurven) ein.</li>' +
      '</ol>',
    bodyEn:
      '<ol>' +
      '<li>Distinguish between the concepts of a utility function and an indifference curve.</li>' +
      '<li>Take $U(x_1, x_2) = x_1 + x_2$. Draw the indifference curves in a two-dimensional diagram ($x_2$ on the y-axis). Verify the drawing using the interactive diagram from Lecture 1.</li>' +
      '<li>Take $U(x_1, x_2) = x_1 + x_2$. Create a three-dimensional drawing in which the utility is shown on the vertical z-axis as a function of the consumption of both goods. Include contour lines (=indifference curves) in this drawing.</li>' +
      '</ol>',
    solutionDe:
      '<ol>' +
      '<li><strong>Nutzenfunktion:</strong> Beschreibt die Beziehung zwischen konsumierten Gütern und dem daraus resultierenden Nutzen. <strong>Indifferenzkurve:</strong> Stellt Kombinationen von zwei Gütern dar, die dem Konsumenten denselben Nutzen bieten. Indifferenzkurven sind die Höhenlinien der Nutzenfunktion.</li>' +
      '<li>Die allgemeine Funktion der Indifferenzkurven ist $x_2 = \\bar{U} - x_1$. Für verschiedene Nutzenniveaus $\\bar{U}$ ergeben sich parallele Geraden mit Steigung $-1$. Dies sind die Indifferenzkurven von perfekten Substituten.<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Indifferenzkurven von U(x₁,x₂) = x₁ + x₂</strong><br>Siehe Lösung Übung 1, Aufgabe 4</span></div></li>' +
      '<li>In der 3D-Ansicht ergibt sich eine Ebene $U = x_1 + x_2$, deren Höhenlinien die parallelen Indifferenzkurven in der $(x_1, x_2)$-Ebene sind.<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>3D-Nutzenfunktion U(x₁,x₂) = x₁ + x₂</strong><br>Siehe Lösung Übung 1, Aufgabe 4</span></div></li>' +
      '</ol>',
    solutionEn:
      '<ol>' +
      '<li><strong>Utility function:</strong> Describes the relationship between consumed goods and the resulting utility. <strong>Indifference curve:</strong> Represents combinations of two goods that give the consumer the same utility. Indifference curves are the contour lines of the utility function.</li>' +
      '<li>The general equation of the indifference curves is $x_2 = \\bar{U} - x_1$. For different utility levels $\\bar{U}$, this yields parallel lines with slope $-1$. These are the indifference curves of perfect substitutes.<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Indifference curves of U(x₁,x₂) = x₁ + x₂</strong><br>See Solution Sheet 1, Exercise 4</span></div></li>' +
      '<li>In 3D, the utility function $U = x_1 + x_2$ forms a plane whose contour lines are the parallel indifference curves in the $(x_1, x_2)$-plane.<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>3D utility function U(x₁,x₂) = x₁ + x₂</strong><br>See Solution Sheet 1, Exercise 4</span></div></li>' +
      '</ol>',
    solutionSource: 'official',
  },
  {
    id: 'es1-5',
    subjectId: 'nachfrage',
    titleDe: 'Indifferenzkurven und Konvexität',
    titleEn: 'Indifference Curves and Convexity',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 1',
    type: 'freeform',
    bodyDe:
      '<p>Charlie konsumiert ausschließlich Äpfel ($x_A$) und Bananen ($x_B$). Im letzten Monat hat Charlie 20 Äpfel und 5 Bananen konsumiert. Diejenigen Konsumbündel $(x_A, x_B)$, für die Charlie indifferent zwischen $(x_A, x_B)$ und $(20, 5)$ ist, sind durch die Gleichung $x_B = \\frac{100}{x_A}$ gegeben.</p>' +
      '<ol>' +
      '<li>Zeichnen Sie die resultierende Indifferenzkurve und die dazugehörige \'Bessermenge\', also die Menge aller Güterbündel, die ein schwach höheres Nutzenniveau bedeuten.</li>' +
      '<li>Ist die Menge der Güterbündel, die Charlie dem Bündel $(20, 5)$ schwach vorzieht, konvex?</li>' +
      '<li>Ist die Menge der Güterbündel, denen Charlie das Bündel $(20, 5)$ schwach vorzieht, konvex?</li>' +
      '<li>Geben Sie Charlies Grenzrate der Substitution allgemein und für die Bündel $(10, 10)$, $(5, 20)$ und $(20, 5)$ an. Interpretieren Sie die GRS in den Punkten $(5, 20)$ und $(10, 10)$ an. Ist die Grenzrate der Substitution steigend in $x_A$?</li>' +
      '<li>Charlie trifft einen Händler, der ihm anbietet, einen (marginalen) Apfel gegen 4 (marginale) Bananen zu tauschen. Für welche Anfangsausstattungen auf der anfänglichen Indifferenzkurve würde Charlie den Handel eingehen?</li>' +
      '</ol>',
    bodyEn:
      '<p>Charlie consumes exclusively apples ($x_A$) and bananas ($x_B$). Last month, Charlie consumed 20 apples and 5 bananas. The consumption bundles $(x_A, x_B)$ for which Charlie is indifferent between $(x_A, x_B)$ and $(20, 5)$ are given by the equation $x_B = \\frac{100}{x_A}$.</p>' +
      '<ol>' +
      '<li>Draw the resulting indifference curve and the corresponding \'better set\', i.e., the set of all bundles that represent a weakly higher utility level.</li>' +
      '<li>Is the set of bundles that Charlie weakly prefers to the bundle $(20, 5)$ convex?</li>' +
      '<li>Is the set of bundles to which Charlie weakly prefers the bundle $(20, 5)$ convex?</li>' +
      '<li>State Charlie\'s marginal rate of substitution in general and for the bundles $(10, 10)$, $(5, 20)$, and $(20, 5)$. Interpret the MRS at the points $(5, 20)$ and $(10, 10)$. Is the marginal rate of substitution increasing in $x_A$?</li>' +
      '<li>Charlie meets a trader who offers to exchange one (marginal) apple for 4 (marginal) bananas. For which initial endowments on the initial indifference curve would Charlie accept the trade?</li>' +
      '</ol>',
    solutionDe:
      '<ol>' +
      '<li>Gegebene Indifferenzkurve: $x_B = \\frac{100}{x_A}$, also mögliche Nutzenfunktion: $U(x_A, x_B) = x_A \\cdot x_B = 100$. Die Bessermenge liegt oberhalb der Indifferenzkurve.<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Indifferenzkurve mit Bessermenge</strong><br>Siehe Lösung Übung 1, Aufgabe 5</span></div></li>' +
      '<li>Ja, die schwach bevorzugte Menge ist (strikt) konvex, da alle Verbindungslinien von zwei Bündeln $(x_A, x_B)$ aus der schwach bevorzugten Menge wieder in ihr enthalten sind.</li>' +
      '<li>Nein, die Schlechtermenge ist nicht konvex. Beispiel: $(8, 10)$ und $(100, 0)$ sind in der Schlechtermenge, da $U(8, 10) = 80 < 100$ und $U(100, 0) = 0 < 100$. Aber $U\\!\\left(\\frac{8+100}{2},\\, \\frac{10+0}{2}\\right) = U(54,\\, 5) = 270 > 100$.</li>' +
      '<li>$$\\text{GRS} = -\\frac{\\partial U / \\partial x_A}{\\partial U / \\partial x_B} = -\\frac{x_B}{x_A}$$' +
      '$\\text{GRS}(5, 20) = -4$, $\\text{GRS}(10, 10) = -1$, $\\text{GRS}(20, 5) = -\\frac{1}{4}$.<br>' +
      'Die GRS ist steigend in $x_A$: $\\frac{\\partial \\text{GRS}}{\\partial x_A} = \\frac{x_B}{x_A^2} > 0$.<br>' +
      '<strong>Interpretation:</strong> Im Punkt $(5, 20)$ gäbe Charlie 4 Bananen auf, um 1 Apfel mehr zu konsumieren. Im Punkt $(10, 10)$ ist die Tauschrate 1:1.</li>' +
      '<li>Charlie geht den Handel ein, wenn seine GRS betragsmäßig kleiner als der Tauschpreis 4 ist, also $\\left|\\frac{x_B}{x_A}\\right| < 4$, d.\u202Fh. für alle Bündel rechts von $(5, 20)$ auf der Indifferenzkurve. Bei $(5, 20)$ ist Charlie genau indifferent ($|\\text{GRS}| = 4$).<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Tauschpfeil bei (20,5)</strong><br>Siehe Lösung Übung 1, Aufgabe 5</span></div><br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Optimales Konsumverhältnis bei (5,20)</strong><br>Siehe Lösung Übung 1, Aufgabe 5</span></div></li>' +
      '</ol>',
    solutionEn:
      '<ol>' +
      '<li>Given indifference curve: $x_B = \\frac{100}{x_A}$, so a possible utility function is $U(x_A, x_B) = x_A \\cdot x_B = 100$. The better set lies above the indifference curve.<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Indifference curve with better set</strong><br>See Solution Sheet 1, Exercise 5</span></div></li>' +
      '<li>Yes, the weakly preferred set is (strictly) convex, since all connecting lines between two bundles $(x_A, x_B)$ from the weakly preferred set are again contained in it.</li>' +
      '<li>No, the worse set is not convex. Example: $(8, 10)$ and $(100, 0)$ are in the worse set since $U(8, 10) = 80 < 100$ and $U(100, 0) = 0 < 100$. But $U\\!\\left(\\frac{8+100}{2},\\, \\frac{10+0}{2}\\right) = U(54,\\, 5) = 270 > 100$.</li>' +
      '<li>$$\\text{MRS} = -\\frac{\\partial U / \\partial x_A}{\\partial U / \\partial x_B} = -\\frac{x_B}{x_A}$$' +
      '$\\text{MRS}(5, 20) = -4$, $\\text{MRS}(10, 10) = -1$, $\\text{MRS}(20, 5) = -\\frac{1}{4}$.<br>' +
      'The MRS is increasing in $x_A$: $\\frac{\\partial \\text{MRS}}{\\partial x_A} = \\frac{x_B}{x_A^2} > 0$.<br>' +
      '<strong>Interpretation:</strong> At $(5, 20)$, Charlie would give up 4 bananas for 1 more apple. At $(10, 10)$, the exchange rate is 1:1.</li>' +
      '<li>Charlie accepts the trade when his MRS is less than the trade price of 4 in absolute value, i.e. $\\left|\\frac{x_B}{x_A}\\right| < 4$, meaning for all bundles to the right of $(5, 20)$ on the indifference curve. At $(5, 20)$, Charlie is exactly indifferent ($|\\text{MRS}| = 4$).<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Trade arrow at (20,5)</strong><br>See Solution Sheet 1, Exercise 5</span></div><br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Optimal consumption ratio at (5,20)</strong><br>See Solution Sheet 1, Exercise 5</span></div></li>' +
      '</ol>',
    solutionSource: 'official',
  },
  {
    id: 'es1-6',
    subjectId: 'nachfrage',
    titleDe: 'Optimale Entscheidung – Cobb-Douglas',
    titleEn: 'Optimal Choice – Cobb-Douglas',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 1',
    type: 'freeform',
    bodyDe:
      '<p>Charlie hat 50\u202F€, geht gerne ins Kino und hat eine Cobb-Douglas Nutzenfunktion für den Konsum von Kinotickets ($x_1$) und Popcorn ($x_2$). Ein Ticket kostet 10\u202F€, eine Portion Popcorn 5\u202F€. Charlies Nutzenfunktion ist $U(x_1, x_2) = x_1^{\\alpha} x_2^{1-\\alpha}$, wobei $\\alpha = \\frac{1}{3}$.</p>' +
      '<ol>' +
      '<li>Zeigen Sie, dass sich diese Präferenzen durch eine monotone Transformation der Nutzenfunktion wie folgt repräsentieren lassen: $V(x_1, x_2) = x_1 x_2^2$.</li>' +
      '<li>Berechnen Sie Charlies optimale Nachfrage mit Hilfe der monotonen Transformation der Nutzenfunktion $V(\\cdot)$.</li>' +
      '<li>Bestimmen Sie die generelle Lösung für die Cobb-Douglas Nutzenfunktion mit zwei Gütern, d.h. für $U(x_1, x_2) = x_1^{\\alpha} x_2^{\\beta}$ und $m = p_1 x_1 + p_2 x_2$.</li>' +
      '</ol>',
    bodyEn:
      '<p>Charlie has €50, likes going to the cinema, and has a Cobb-Douglas utility function for the consumption of cinema tickets ($x_1$) and popcorn ($x_2$). A ticket costs €10, a portion of popcorn €5. Charlie\'s utility function is $U(x_1, x_2) = x_1^{\\alpha} x_2^{1-\\alpha}$, where $\\alpha = \\frac{1}{3}$.</p>' +
      '<ol>' +
      '<li>Show that these preferences can be represented by a monotone transformation of the utility function as follows: $V(x_1, x_2) = x_1 x_2^2$.</li>' +
      '<li>Calculate Charlie\'s optimal demand using the monotone transformation of the utility function $V(\\cdot)$.</li>' +
      '<li>Determine the general solution for the Cobb-Douglas utility function with two goods, i.e., for $U(x_1, x_2) = x_1^{\\alpha} x_2^{\\beta}$ and $m = p_1 x_1 + p_2 x_2$.</li>' +
      '</ol>',
    solutionDe:
      '<ol>' +
      '<li>$V = f(U) = U^3 \\Rightarrow f\\!\\left(U(x_1, x_2)\\right) = \\left(x_1^{1/3} x_2^{2/3}\\right)^3 = x_1 x_2^2$. Da $f(U) = U^3$ streng monoton steigend ist, repräsentiert $V$ dieselben Präferenzen.</li>' +
      '<li><strong>Lagrangefunktion:</strong>' +
      '$$\\mathcal{L}(x_1, x_2, \\lambda) = x_1 \\cdot x_2^2 + \\lambda(50 - 10x_1 - 5x_2)$$' +
      '<strong>Bedingungen erster Ordnung:</strong>' +
      '$$\\frac{\\partial \\mathcal{L}}{\\partial x_1} = x_2^2 - 10\\lambda = 0 \\quad (1)$$' +
      '$$\\frac{\\partial \\mathcal{L}}{\\partial x_2} = 2x_1 x_2 - 5\\lambda = 0 \\quad (2)$$' +
      '$$\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = 50 - 10x_1 - 5x_2 = 0 \\quad (3)$$' +
      'Aus (1) und (2) gleichgesetzt: $\\frac{x_2^2}{10} = \\frac{2x_1 x_2}{5} \\Leftrightarrow x_2 = 4x_1$. Einsetzen in (3): $50 = 10x_1 + 20x_1 = 30x_1$.' +
      '$$x_1^* = \\frac{5}{3} \\approx 1{,}67, \\quad x_2^* = \\frac{20}{3} \\approx 6{,}67$$</li>' +
      '<li><strong>Allgemeine Lösung:</strong> Analog ergibt sich aus den FOCs: $x_2 = \\frac{p_1 \\beta}{p_2 \\alpha} x_1$. Einsetzen in die Budgetrestriktion:' +
      '$$x_1^* = \\frac{m}{p_1} \\cdot \\frac{\\alpha}{\\alpha + \\beta}, \\quad x_2^* = \\frac{m}{p_2} \\cdot \\frac{\\beta}{\\alpha + \\beta}$$' +
      'Das optimale Ausgabenverhältnis ist: $\\frac{x_1^* p_2}{x_2^* p_1} = \\frac{\\alpha}{\\beta}$.</li>' +
      '</ol>',
    solutionEn:
      '<ol>' +
      '<li>$V = f(U) = U^3 \\Rightarrow f\\!\\left(U(x_1, x_2)\\right) = \\left(x_1^{1/3} x_2^{2/3}\\right)^3 = x_1 x_2^2$. Since $f(U) = U^3$ is strictly monotonically increasing, $V$ represents the same preferences.</li>' +
      '<li><strong>Lagrangian:</strong>' +
      '$$\\mathcal{L}(x_1, x_2, \\lambda) = x_1 \\cdot x_2^2 + \\lambda(50 - 10x_1 - 5x_2)$$' +
      '<strong>First-order conditions:</strong>' +
      '$$\\frac{\\partial \\mathcal{L}}{\\partial x_1} = x_2^2 - 10\\lambda = 0 \\quad (1)$$' +
      '$$\\frac{\\partial \\mathcal{L}}{\\partial x_2} = 2x_1 x_2 - 5\\lambda = 0 \\quad (2)$$' +
      '$$\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = 50 - 10x_1 - 5x_2 = 0 \\quad (3)$$' +
      'From (1) and (2): $\\frac{x_2^2}{10} = \\frac{2x_1 x_2}{5} \\Leftrightarrow x_2 = 4x_1$. Substituting into (3): $50 = 10x_1 + 20x_1 = 30x_1$.' +
      '$$x_1^* = \\frac{5}{3} \\approx 1.67, \\quad x_2^* = \\frac{20}{3} \\approx 6.67$$</li>' +
      '<li><strong>General solution:</strong> From the FOCs analogously: $x_2 = \\frac{p_1 \\beta}{p_2 \\alpha} x_1$. Substituting into the budget constraint:' +
      '$$x_1^* = \\frac{m}{p_1} \\cdot \\frac{\\alpha}{\\alpha + \\beta}, \\quad x_2^* = \\frac{m}{p_2} \\cdot \\frac{\\beta}{\\alpha + \\beta}$$' +
      'The optimal expenditure ratio is: $\\frac{x_1^* p_2}{x_2^* p_1} = \\frac{\\alpha}{\\beta}$.</li>' +
      '</ol>',
    solutionSource: 'official',
  },
  {
    id: 'es1-7',
    subjectId: 'nachfrage',
    titleDe: 'Preiselastizität',
    titleEn: 'Price Elasticity',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 1',
    type: 'freeform',
    bodyDe:
      '<p>Das Marketing-Team eines Unternehmens, das ein Smartphone (Handy H) produziert, überlegt, die Preise für dieses Handy zu erhöhen. Um die Auswirkungen auf die Nachfrage abzuschätzen, führt das Team eine Kundenbefragung durch, um herauszufinden, wie sich eine Preisänderung auf die nachgefragte Menge auswirkt. Aktuell kostet das Handy 800\u202F€.</p>' +
      '<p>Tabelle 1 zeigt die Ergebnisse der Umfrage. Die zweite Spalte zeigt die Anzahl an Befragten, die für den Preis in der ersten Spalte das Handy kaufen würden.</p>' +
      '<table><thead><tr><th>$p$ für H (€)</th><th>Anzahl an Befragten mit einer Zahlungsbereitschaft $&gt; p$</th></tr></thead>' +
      '<tbody>' +
      '<tr><td>800</td><td>40</td></tr>' +
      '<tr><td>820</td><td>36</td></tr>' +
      '<tr><td>840</td><td>32</td></tr>' +
      '<tr><td>860</td><td>28</td></tr>' +
      '<tr><td>880</td><td>24</td></tr>' +
      '</tbody></table>' +
      '<ol>' +
      '<li>Zeichnen Sie die Nachfragekurve in Abhängigkeit vom Preis.</li>' +
      '<li>Definieren Sie die Preiselastizität der Nachfrage. Was sagt die Formel aus?</li>' +
      '<li>Berechnen Sie die Preiselastizität der Nachfrage für das Handy für $p = \\{800, 820, 880\\}$ und interpretieren Sie das Ergebnis.</li>' +
      '</ol>',
    bodyEn:
      '<p>The marketing team of a company that produces a smartphone (Phone H) is considering raising the prices for this phone. To estimate the impact on demand, the team conducts a customer survey to find out how a price change affects the quantity demanded. The phone currently costs €800.</p>' +
      '<p>Table 1 shows the results of the survey. The second column shows the number of respondents who would buy the phone at the price in the first column.</p>' +
      '<table><thead><tr><th>$p$ for H (€)</th><th>Number of respondents with willingness to pay $&gt; p$</th></tr></thead>' +
      '<tbody>' +
      '<tr><td>800</td><td>40</td></tr>' +
      '<tr><td>820</td><td>36</td></tr>' +
      '<tr><td>840</td><td>32</td></tr>' +
      '<tr><td>860</td><td>28</td></tr>' +
      '<tr><td>880</td><td>24</td></tr>' +
      '</tbody></table>' +
      '<ol>' +
      '<li>Draw the demand curve as a function of price.</li>' +
      '<li>Define the price elasticity of demand. What does the formula express?</li>' +
      '<li>Calculate the price elasticity of demand for the phone for $p = \\{800, 820, 880\\}$ and interpret the result.</li>' +
      '</ol>',
    solutionDe:
      '<ol>' +
      '<li>Die Nachfragekurve verläuft linear fallend von $(p, H) = (800, 40)$ bis $(880, 24)$.<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Nachfragekurve aus der Befragung</strong><br>Siehe Lösung Übung 1, Aufgabe 7</span></div></li>' +
      '<li>Die Preiselastizität der Nachfrage wird berechnet als:' +
      '$$E_d = \\frac{\\%\\text{-Änderung der nachgefragten Menge}}{\\%\\text{-Änderung des Preises}} = \\frac{\\partial X_1(p_1)}{\\partial p_1} \\cdot \\frac{p_1}{X_1(p_1)}$$' +
      'Interpretation: Wenn sich $p_1$ um 1\u202F% ändert, ändert sich $X_1(p_1)$ um $E_d$\u202F%.</li>' +
      '<li>Aus zwei Punkten $(40, 800)$ und $(24, 880)$: $H(p) = 200 - 0{,}2p$, also $\\frac{\\partial H}{\\partial p} = -0{,}2$.' +
      '$$E_d(800) = -0{,}2 \\cdot \\frac{800}{40} = -4$$' +
      '$$E_d(820) = -0{,}2 \\cdot \\frac{820}{36} \\approx -4{,}56$$' +
      '$$E_d(880) = -0{,}2 \\cdot \\frac{880}{24} \\approx -7{,}33$$' +
      'Mit stärkeren Preiserhöhungen sinkt die Nachfrage immer stärker (die Nachfrage ist elastisch).</li>' +
      '</ol>',
    solutionEn:
      '<ol>' +
      '<li>The demand curve is linear, falling from $(p, H) = (800, 40)$ to $(880, 24)$.<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Demand curve from survey</strong><br>See Solution Sheet 1, Exercise 7</span></div></li>' +
      '<li>The price elasticity of demand is calculated as:' +
      '$$E_d = \\frac{\\%\\text{ change in quantity demanded}}{\\%\\text{ change in price}} = \\frac{\\partial X_1(p_1)}{\\partial p_1} \\cdot \\frac{p_1}{X_1(p_1)}$$' +
      'Interpretation: If $p_1$ changes by 1%, then $X_1(p_1)$ changes by $E_d$%.</li>' +
      '<li>From two points $(40, 800)$ and $(24, 880)$: $H(p) = 200 - 0.2p$, so $\\frac{\\partial H}{\\partial p} = -0.2$.' +
      '$$E_d(800) = -0.2 \\cdot \\frac{800}{40} = -4$$' +
      '$$E_d(820) = -0.2 \\cdot \\frac{820}{36} \\approx -4.56$$' +
      '$$E_d(880) = -0.2 \\cdot \\frac{880}{24} \\approx -7.33$$' +
      'With larger price increases, demand drops ever more sharply (demand is elastic).</li>' +
      '</ol>',
    solutionSource: 'official',
  },
  {
    id: 'es1-8',
    subjectId: 'nachfrage',
    titleDe: 'Optimale Nachfrage bei Substituten und Komplimenten',
    titleEn: 'Optimal Demand with Substitutes and Complements',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 1',
    type: 'freeform',
    bodyDe:
      '<p>Lisa möchte sich <em>ein</em> neues Handy kaufen und hat die Wahl zwischen zwei Modellen, S und M. Sie hat die folgende Nutzenfunktion: $U(x_S, x_M) = 3x_S + x_M$.</p>' +
      '<ol>' +
      '<li>Was sagt die Nutzenfunktion über Lisas Präferenzen aus? Welches Handy findet Sie besser?</li>' +
      '<li>Lisa hat 800\u202F€ gespart. Wie lautet Ihre Nachfrage, wenn $p_S = 700$ und $p_M = 300$?</li>' +
      '<li>Wie lautet Lisas Nachfrage bei generellen Preisen $p_S, p_M$? (Tipp: relative Preise spielen eine Rolle.)</li>' +
      '<li>Wenn $p_S = 700$, wie hoch darf $p_M$ maximal sein, damit Lisa sich <em>nicht</em> für S entscheidet?</li>' +
      '</ol>' +
      '<p>Lisa möchte sich nun auch <em>ein</em> Paar Kopfhörer kaufen. Es gibt nur ein verfügbares Modell und sie kann es entweder kaufen $h = 1$ oder nicht $h = 0$. Die neue Nutzenfunktion lautet $U_h(x_S, x_M) = (3x_S + x_M) \\cdot (1 + \\phi_h h)$.</p>' +
      '<ol start="5">' +
      '<li>Was sagt die neue Nutzenfunktion über Lisas Präferenzen aus? Welche Rolle spielen die Kopfhörer? Was ist die Funktion des Parameters $\\phi_h$?</li>' +
      '<li>Die Kopfhörer kosten $p_h = 200$ und $\\phi_h = 2$. Lisa hat weiterhin 800\u202F€ gespart und $p_S = 700, p_M = 300$. Für welches Handy entscheidet sich Lisa nun? Kauft sie Kopfhörer oder nicht?</li>' +
      '</ol>',
    bodyEn:
      '<p>Lisa wants to buy <em>one</em> new phone and has the choice between two models, S and M. She has the following utility function: $U(x_S, x_M) = 3x_S + x_M$.</p>' +
      '<ol>' +
      '<li>What does the utility function say about Lisa\'s preferences? Which phone does she prefer?</li>' +
      '<li>Lisa has saved €800. What is her demand when $p_S = 700$ and $p_M = 300$?</li>' +
      '<li>What is Lisa\'s demand at general prices $p_S, p_M$? (Hint: relative prices play a role.)</li>' +
      '<li>If $p_S = 700$, how high can $p_M$ be at most so that Lisa does <em>not</em> choose S?</li>' +
      '</ol>' +
      '<p>Lisa now also wants to buy <em>one</em> pair of headphones. There is only one available model and she can either buy it $h = 1$ or not $h = 0$. The new utility function is $U_h(x_S, x_M) = (3x_S + x_M) \\cdot (1 + \\phi_h h)$.</p>' +
      '<ol start="5">' +
      '<li>What does the new utility function say about Lisa\'s preferences? What role do the headphones play? What is the function of the parameter $\\phi_h$?</li>' +
      '<li>The headphones cost $p_h = 200$ and $\\phi_h = 2$. Lisa still has €800 saved and $p_S = 700, p_M = 300$. Which phone does Lisa choose now? Does she buy headphones or not?</li>' +
      '</ol>',
    solutionDe:
      '<ol>' +
      '<li>Für Lisa sind drei Handys vom Typ M so gut wie ein Handy vom Typ S (dreimal so gut). Die Nutzenfunktion hat keine Variable für Erspartes, d.\u202Fh. es spielt für Lisas Nutzen keine Rolle, wie viel sie ausgibt.</li>' +
      '<li>Da Lisa nur ein Handy kauft und sich beide leisten kann: $U(1, 0) = 3 > U(0, 1) = 1$. Lisa kauft Handy S.</li>' +
      '<li>Die GRS $\\frac{\\partial U/\\partial x_S}{\\partial U/\\partial x_M} = 3$ ist Lisas subjektive Tauschrate. Das Preisverhältnis $\\frac{p_S}{p_M}$ ist die Markt-Tauschrate. Lisa bevorzugt S, solange $\\frac{p_S}{p_M} < 3$. Für $\\frac{p_S}{p_M} > 3$ wählt sie M. Bei $\\frac{p_S}{p_M} = 3$ ist sie indifferent.<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Ecklösungen bei perfekten Substituten</strong><br>Siehe Lösung Übung 1, Aufgabe 8</span></div></li>' +
      '<li>Damit Lisa M (schwach) bevorzugt, muss $\\frac{p_S}{p_M^{\\max}} \\geq 3$ gelten. Mit $p_S = 700$: $p_M^{\\max} \\leq \\frac{700}{3} \\approx 233{,}33$\u202F€.</li>' +
      '</ol>' +
      '<ol start="5">' +
      '<li>Die neue Nutzenfunktion ist eine monotone Transformation der ursprünglichen. Die relative Handy-Präferenz ($\\text{MRS} = 3$) bleibt unverändert. Die Kopfhörer sind ein multiplikatives, perfektes Komplement zum Handy – sie erhöhen den Nutzen um den Faktor $(1 + \\phi_h h)$. Ohne Handy bringen die Kopfhörer keinen Nutzen. $\\phi_h$ gibt die Intensität der Nutzensteigerung an.</li>' +
      '<li>' +
      '<table><thead><tr><th>Option</th><th>Kosten (€)</th><th>Handy-Nutzen</th><th>$U_h$</th><th>Kaufbar?</th></tr></thead>' +
      '<tbody>' +
      '<tr><td>M ohne Kopfhörer</td><td>300</td><td>1</td><td>$1 \\cdot 1 = 1$</td><td>Ja</td></tr>' +
      '<tr><td>M mit Kopfhörer</td><td>500</td><td>1</td><td>$1 \\cdot 3 = 3$</td><td>Ja</td></tr>' +
      '<tr><td>S ohne Kopfhörer</td><td>700</td><td>3</td><td>$3 \\cdot 1 = 3$</td><td>Ja</td></tr>' +
      '<tr><td>S mit Kopfhörer</td><td>900</td><td>3</td><td>$3 \\cdot 3 = 9$</td><td>Nein</td></tr>' +
      '</tbody></table>' +
      '<p>Lisa ist indifferent zwischen „S ohne Kopfhörer" und „M mit Kopfhörer" (jeweils $U_h = 3$). Sobald $\\phi_h > 2$, würde Lisa M mit Kopfhörer strikt bevorzugen.</p>' +
      '</li>' +
      '</ol>',
    solutionEn:
      '<ol>' +
      '<li>For Lisa, three phones of type M are as good as one phone of type S (three times better). The utility function has no variable for savings, meaning it does not matter for Lisa\'s utility how much she spends.</li>' +
      '<li>Since Lisa only buys one phone and can afford both: $U(1, 0) = 3 > U(0, 1) = 1$. Lisa buys phone S.</li>' +
      '<li>The MRS $\\frac{\\partial U/\\partial x_S}{\\partial U/\\partial x_M} = 3$ is Lisa\'s subjective trade rate. The price ratio $\\frac{p_S}{p_M}$ is the market trade rate. Lisa prefers S as long as $\\frac{p_S}{p_M} < 3$. For $\\frac{p_S}{p_M} > 3$ she chooses M. At $\\frac{p_S}{p_M} = 3$ she is indifferent.<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Corner solutions for perfect substitutes</strong><br>See Solution Sheet 1, Exercise 8</span></div></li>' +
      '<li>For Lisa to (weakly) prefer M, we need $\\frac{p_S}{p_M^{\\max}} \\geq 3$. With $p_S = 700$: $p_M^{\\max} \\leq \\frac{700}{3} \\approx 233.33$.</li>' +
      '</ol>' +
      '<ol start="5">' +
      '<li>The new utility function is a monotone transformation of the original. The relative phone preference ($\\text{MRS} = 3$) remains unchanged. The headphones are a multiplicative, perfect complement to the phone — they increase utility by the factor $(1 + \\phi_h h)$. Without a phone, the headphones provide no utility. $\\phi_h$ determines the intensity of the utility increase.</li>' +
      '<li>' +
      '<table><thead><tr><th>Option</th><th>Cost (€)</th><th>Phone utility</th><th>$U_h$</th><th>Affordable?</th></tr></thead>' +
      '<tbody>' +
      '<tr><td>M without headphones</td><td>300</td><td>1</td><td>$1 \\cdot 1 = 1$</td><td>Yes</td></tr>' +
      '<tr><td>M with headphones</td><td>500</td><td>1</td><td>$1 \\cdot 3 = 3$</td><td>Yes</td></tr>' +
      '<tr><td>S without headphones</td><td>700</td><td>3</td><td>$3 \\cdot 1 = 3$</td><td>Yes</td></tr>' +
      '<tr><td>S with headphones</td><td>900</td><td>3</td><td>$3 \\cdot 3 = 9$</td><td>No</td></tr>' +
      '</tbody></table>' +
      '<p>Lisa is indifferent between "S without headphones" and "M with headphones" (both $U_h = 3$). As soon as $\\phi_h > 2$, Lisa would strictly prefer M with headphones.</p>' +
      '</li>' +
      '</ol>',
    solutionSource: 'official',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Übung 2 – Angebot  (5 Aufgaben)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'es2-1',
    subjectId: 'angebot',
    titleDe: 'Kostenminimum',
    titleEn: 'Cost Minimum',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 2',
    type: 'freeform',
    bodyDe:
      '<p>Zeigen Sie für eine allgemeine Kostenfunktion $C(y)$, dass im Minimum der Durchschnittskosten die Grenzkosten gleich den Durchschnittskosten sind.</p>',
    bodyEn:
      '<p>Show for a general cost function $C(y)$ that at the minimum of average costs, marginal costs equal average costs.</p>',
    solutionDe:
      '<p>Definition: $AC = \\frac{C(y)}{y}$, $MC = \\frac{\\partial C(y)}{\\partial y}$.</p>' +
      '<p>Minimierung der Durchschnittskosten:</p>' +
      '$$\\frac{\\partial AC}{\\partial y} = \\frac{y \\cdot \\frac{\\partial C(y)}{\\partial y} - C(y)}{y^2} \\stackrel{!}{=} 0$$' +
      '$$\\Leftrightarrow \\frac{C(y)}{y} = \\frac{\\partial C(y)}{\\partial y}$$' +
      '$$\\Leftrightarrow AC = MC$$' +
      '<p>Die Grenzkosten schneiden die Durchschnittskosten also im Minimum, sofern die Bedingung zweiter Ordnung erfüllt ist ($\\frac{\\partial^2 AC}{\\partial y^2} > 0$), d.\u202Fh. überall dort, wo wir steigende Grenzkosten haben.</p>',
    solutionEn:
      '<p>Definition: $AC = \\frac{C(y)}{y}$, $MC = \\frac{\\partial C(y)}{\\partial y}$.</p>' +
      '<p>Minimizing average costs:</p>' +
      '$$\\frac{\\partial AC}{\\partial y} = \\frac{y \\cdot \\frac{\\partial C(y)}{\\partial y} - C(y)}{y^2} \\stackrel{!}{=} 0$$' +
      '$$\\Leftrightarrow \\frac{C(y)}{y} = \\frac{\\partial C(y)}{\\partial y}$$' +
      '$$\\Leftrightarrow AC = MC$$' +
      '<p>Marginal costs therefore intersect average costs at their minimum, provided the second-order condition holds ($\\frac{\\partial^2 AC}{\\partial y^2} > 0$), i.e. wherever marginal costs are increasing.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es2-2',
    subjectId: 'angebot',
    titleDe: 'Technologie',
    titleEn: 'Technology',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 2',
    type: 'freeform',
    bodyDe:
      '<p>Gegeben sei eine Produktionsfunktion $f(x_1, x_2) = \\sqrt{x_1} + x_2^2$.</p>' +
      '<ol>' +
      '<li>Sind die Grenzprodukte von Faktor 1 und 2 zunehmend, konstant oder abnehmend?</li>' +
      '<li>Bestimmen Sie, ob die Funktionen $g_1(x_1) = \\sqrt{x_1}$, $g_2(x_2) = x_2^2$ steigende, fallende oder konstante Skalenerträge haben. Bestimmen Sie dann die Art der Skalenerträge von $f(x_1, x_2) = \\sqrt{x_1} + x_2^2$. Interpretieren Sie das Ergebnis.</li>' +
      '<li>Nennen Sie je eine Inputkombination, bei welcher sich der Output nach Verdopplung beider Inputs um mehr (a) bzw. weniger (b) als das Doppelte erhöht.</li>' +
      '</ol>',
    bodyEn:
      '<p>Given a production function $f(x_1, x_2) = \\sqrt{x_1} + x_2^2$.</p>' +
      '<ol>' +
      '<li>Are the marginal products of factor 1 and 2 increasing, constant, or decreasing?</li>' +
      '<li>Determine whether the functions $g_1(x_1) = \\sqrt{x_1}$, $g_2(x_2) = x_2^2$ have increasing, decreasing, or constant returns to scale. Then determine the type of returns to scale of $f(x_1, x_2) = \\sqrt{x_1} + x_2^2$. Interpret the result.</li>' +
      '<li>Give an input combination where doubling both inputs increases output by more than (a) and less than (b) double.</li>' +
      '</ol>',
    solutionDe:
      '<ol>' +
      '<li>Das Grenzprodukt von Faktor 1 ist <strong>abnehmend</strong>: $MP_1 = \\frac{1}{2} x_1^{-1/2}$, $\\frac{\\partial MP_1}{\\partial x_1} = -\\frac{1}{4} x_1^{-3/2} < 0$.<br>' +
      'Das Grenzprodukt von Faktor 2 ist <strong>zunehmend</strong>: $MP_2 = 2x_2$, $\\frac{\\partial MP_2}{\\partial x_2} = 2 > 0$.</li>' +
      '<li>$g_1(x_1) = \\sqrt{x_1}$: $g_1(\\lambda x_1) = \\lambda^{0{,}5} g_1(x_1) < \\lambda g_1(x_1)$ für $\\lambda > 1$ → <strong>fallende</strong> Skalenerträge (Homogenitätsgrad $0{,}5 < 1$).<br>' +
      '$g_2(x_2) = x_2^2$: $g_2(\\lambda x_2) = \\lambda^2 g_2(x_2) > \\lambda g_2(x_2)$ für $\\lambda > 1$ → <strong>steigende</strong> Skalenerträge (Homogenitätsgrad $2 > 1$).<br>' +
      'Für $f(x_1, x_2) = \\sqrt{x_1} + x_2^2$: $f(\\lambda x_1, \\lambda x_2) = \\lambda^{0{,}5} \\sqrt{x_1} + \\lambda^2 x_2^2$. Da $f$ in $x_1$ fallende und in $x_2$ steigende Skalenerträge hat, hängt die Art der Skalenerträge von den spezifischen Werten von $x_1, x_2$ ab – keine allgemeine Aussage möglich.</li>' +
      '<li>(a) Mehr als verdoppeln: z.\u202FB. $x_1 = 1, x_2 = 4$: $f(2, 8) = \\sqrt{2} + 64 \\approx 65{,}4 > 2 \\cdot (1 + 16) = 34$. ✓<br>' +
      '(b) Weniger als verdoppeln: z.\u202FB. $x_1 = 4, x_2 = 0$: $f(8, 0) = \\sqrt{8} \\approx 2{,}83 < 2\\sqrt{4} = 4$. ✓</li>' +
      '</ol>',
    solutionEn:
      '<ol>' +
      '<li>The marginal product of factor 1 is <strong>decreasing</strong>: $MP_1 = \\frac{1}{2} x_1^{-1/2}$, $\\frac{\\partial MP_1}{\\partial x_1} = -\\frac{1}{4} x_1^{-3/2} < 0$.<br>' +
      'The marginal product of factor 2 is <strong>increasing</strong>: $MP_2 = 2x_2$, $\\frac{\\partial MP_2}{\\partial x_2} = 2 > 0$.</li>' +
      '<li>$g_1(x_1) = \\sqrt{x_1}$: $g_1(\\lambda x_1) = \\lambda^{0.5} g_1(x_1) < \\lambda g_1(x_1)$ for $\\lambda > 1$ → <strong>decreasing</strong> returns to scale (degree of homogeneity $0.5 < 1$).<br>' +
      '$g_2(x_2) = x_2^2$: $g_2(\\lambda x_2) = \\lambda^2 g_2(x_2) > \\lambda g_2(x_2)$ for $\\lambda > 1$ → <strong>increasing</strong> returns to scale (degree of homogeneity $2 > 1$).<br>' +
      'For $f(x_1, x_2) = \\sqrt{x_1} + x_2^2$: $f(\\lambda x_1, \\lambda x_2) = \\lambda^{0.5} \\sqrt{x_1} + \\lambda^2 x_2^2$. Since $f$ has decreasing returns in $x_1$ and increasing returns in $x_2$, the type of returns to scale depends on the specific values of $x_1, x_2$ — no general statement is possible.</li>' +
      '<li>(a) More than double: e.g. $x_1 = 1, x_2 = 4$: $f(2, 8) = \\sqrt{2} + 64 \\approx 65.4 > 2(1 + 16) = 34$. ✓<br>' +
      '(b) Less than double: e.g. $x_1 = 4, x_2 = 0$: $f(8, 0) = \\sqrt{8} \\approx 2.83 < 2\\sqrt{4} = 4$. ✓</li>' +
      '</ol>',
    solutionSource: 'official',
  },
  {
    id: 'es2-3',
    subjectId: 'angebot',
    titleDe: 'Kostenminimierung und Skalenerträge',
    titleEn: 'Cost Minimization and Returns to Scale',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 2',
    type: 'freeform',
    bodyDe:
      '<p>Eine Firma hat die Produktionsfunktion $y(L, K) = (LK)^{\\frac{1}{3}}$. Die Preise für die Inputs Arbeit und Kapital sind $w$ und $r$.</p>' +
      '<ol>' +
      '<li>Zeichnen Sie die Isoquante für $\\bar{y} = 4$ bei $r = w = 2$ und die Isokostengerade, die durch den Punkt $(K, L) = (8, 8)$ geht. Handelt es sich hierbei um kostenminimierende Inputmengen? Welcher Zusammenhang zwischen Isoquante und Isokostenkurve muss im Minimum gelten? (Tipp: Die interaktiven Diagramme aus der Vorlesung können nützlich sein, auch wenn man nicht denselben Exponenten für beide Inputs der CD Funktion einstellen kann.)</li>' +
      '<li>Stellen Sie das zugehörige Kostenminimierungsproblem auf und finden Sie die kostenminimalen Inputmengen $L^*$ und $K^*$ für generelle Werte von $y, L, K, w, r$. (Hinweis: Die Lösung lautet $L^* = y^{\\frac{3}{2}} \\sqrt{\\frac{r}{w}}$, $K^* = y^{\\frac{3}{2}} \\sqrt{\\frac{w}{r}}$.)</li>' +
      '<li>Wie lautet die minimale Kostenfunktion $C(y)$ des Unternehmens?</li>' +
      '<li>Wie entwickeln sich die Durchschnittskosten (AC) mit steigenden Outputmengen und wie hängt dies mit den Skalenerträgen zusammen?</li>' +
      '</ol>',
    bodyEn:
      '<p>A firm has the production function $y(L, K) = (LK)^{\\frac{1}{3}}$. The prices for the inputs labour and capital are $w$ and $r$.</p>' +
      '<ol>' +
      '<li>Draw the isoquant for $\\bar{y} = 4$ at $r = w = 2$ and the isocost line passing through the point $(K, L) = (8, 8)$. Are these cost-minimizing input quantities? What relationship between isoquant and isocost curve must hold at the minimum? (Hint: The interactive diagrams from the lecture can be useful, even though one cannot set the same exponent for both inputs of the CD function.)</li>' +
      '<li>Set up the corresponding cost minimization problem and find the cost-minimizing input quantities $L^*$ and $K^*$ for general values of $y, L, K, w, r$. (Note: The solution is $L^* = y^{\\frac{3}{2}} \\sqrt{\\frac{r}{w}}$, $K^* = y^{\\frac{3}{2}} \\sqrt{\\frac{w}{r}}$.)</li>' +
      '<li>What is the minimal cost function $C(y)$ of the firm?</li>' +
      '<li>How do average costs (AC) evolve with increasing output levels and how is this related to returns to scale?</li>' +
      '</ol>',
    solutionDe:
      '<ol>' +
      '<li>Isoquante für $\\bar{y} = 4$: $K = \\frac{\\bar{y}^3}{L} = \\frac{64}{L}$. Isokostengerade durch $(8, 8)$: $2 \\cdot 8 + 2 \\cdot 8 = 32$, also $K = \\frac{32 - 2L}{2} = 16 - L$.<br>' +
      'Ja, $L = 8, K = 8$ sind kostenminimierend. Im Optimum tangieren sich Isoquante und Isokostengerade, d.\u202Fh. $\\text{TRS} = \\frac{w}{r}$. Hier: $\\text{TRS} = \\frac{K}{L} = \\frac{8}{8} = 1 = \\frac{w}{r}$. ✓<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Isoquante und Isokostengerade</strong><br>Siehe Lösung Übung 2, Aufgabe 3</span></div></li>' +
      '<li>Kostenminimierungsproblem: $\\min_{L,K} C = Lw + Kr$ u.d.N. $y = (LK)^{1/3}$.<br>' +
      'Optimalitätsbedingung: $\\frac{MP_L}{MP_K} = \\frac{w}{r} \\Rightarrow \\frac{K}{L} = \\frac{w}{r} \\Rightarrow K = L\\frac{w}{r}$.<br>' +
      'Einsetzen in NB: $y = \\left(L^2 \\frac{w}{r}\\right)^{1/3} \\Rightarrow L^* = y^{3/2} \\sqrt{\\frac{r}{w}}$, $K^* = y^{3/2} \\sqrt{\\frac{w}{r}}$.</li>' +
      '<li>$$C(y) = L^* w + K^* r = y^{3/2} \\sqrt{\\frac{r}{w}} \\cdot w + y^{3/2} \\sqrt{\\frac{w}{r}} \\cdot r = 2y^{3/2} \\sqrt{rw}$$</li>' +
      '<li>$AC(y) = \\frac{C(y)}{y} = 2y^{1/2} \\sqrt{rw}$. Da $\\frac{\\partial AC}{\\partial y} = y^{-1/2} \\sqrt{rw} > 0$, steigen die Durchschnittskosten mit $y$.<br>' +
      'Zusammenhang: Steigende AC ↔ sinkende Skalenerträge. Prüfung: $y(tL, tK) = t^{2/3} y(L,K) < t \\cdot y$ für $t > 1$ (Homogenitätsgrad $\\frac{2}{3} < 1$). ✓</li>' +
      '</ol>',
    solutionEn:
      '<ol>' +
      '<li>Isoquant for $\\bar{y} = 4$: $K = \\frac{\\bar{y}^3}{L} = \\frac{64}{L}$. Isocost line through $(8, 8)$: $2 \\cdot 8 + 2 \\cdot 8 = 32$, so $K = 16 - L$.<br>' +
      'Yes, $L = 8, K = 8$ are cost-minimizing. At the optimum, the isoquant and isocost line are tangent, i.e. $\\text{TRS} = \\frac{w}{r}$. Here: $\\text{TRS} = \\frac{K}{L} = 1 = \\frac{w}{r}$. ✓<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Isoquant and isocost line</strong><br>See Solution Sheet 2, Exercise 3</span></div></li>' +
      '<li>Cost minimization problem: $\\min_{L,K} C = Lw + Kr$ s.t. $y = (LK)^{1/3}$.<br>' +
      'Optimality condition: $\\frac{MP_L}{MP_K} = \\frac{w}{r} \\Rightarrow \\frac{K}{L} = \\frac{w}{r} \\Rightarrow K = L\\frac{w}{r}$.<br>' +
      'Substituting into constraint: $y = \\left(L^2 \\frac{w}{r}\\right)^{1/3} \\Rightarrow L^* = y^{3/2} \\sqrt{\\frac{r}{w}}$, $K^* = y^{3/2} \\sqrt{\\frac{w}{r}}$.</li>' +
      '<li>$$C(y) = L^* w + K^* r = 2y^{3/2} \\sqrt{rw}$$</li>' +
      '<li>$AC(y) = \\frac{C(y)}{y} = 2y^{1/2} \\sqrt{rw}$. Since $\\frac{\\partial AC}{\\partial y} = y^{-1/2} \\sqrt{rw} > 0$, average costs increase with $y$.<br>' +
      'Relationship: Rising AC ↔ decreasing returns to scale. Check: $y(tL, tK) = t^{2/3} y(L,K) < t \\cdot y$ for $t > 1$ (degree of homogeneity $\\frac{2}{3} < 1$). ✓</li>' +
      '</ol>',
    solutionSource: 'official',
  },
  {
    id: 'es2-4',
    subjectId: 'angebot',
    titleDe: 'Kostenkurven und Angebot des Unternehmens',
    titleEn: 'Cost Curves and Firm Supply',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 2',
    type: 'freeform',
    bodyDe:
      '<p>Die Produktionsfunktion sei dieselbe wie in Aufgabe 3: $y(L, K) = (LK)^{\\frac{1}{3}}$. Wir nehmen an, dass $w = r = 2$ gilt.</p>' +
      '<ol>' +
      '<li>Berechnen Sie den optimalen Einsatz von $K, L$ mit Hilfe der Lösung der vorherigen Aufgabe und zeichnen Sie die Kostenkurven ($C$, $AC$ und $MC$) in Abhängigkeit der Menge $y$.</li>' +
      '<li>Wie lautet die (kurzfristige) Angebotskurve des Unternehmens (unter perfekter Konkurrenz)?</li>' +
      '<li>Berechnen Sie die Profite und Produzentenrente bei einem Preis $p$. Verwenden Sie dafür die <em>inverse</em> Angebotskurve. Was muss gelten, damit der Gewinn der Produzentenrente entspricht?</li>' +
      '</ol>',
    bodyEn:
      '<p>The production function is the same as in Exercise 3: $y(L, K) = (LK)^{\\frac{1}{3}}$. We assume that $w = r = 2$.</p>' +
      '<ol>' +
      '<li>Calculate the optimal use of $K, L$ using the solution of the previous exercise and draw the cost curves ($C$, $AC$, and $MC$) as a function of quantity $y$.</li>' +
      '<li>What is the (short-run) supply curve of the firm (under perfect competition)?</li>' +
      '<li>Calculate profits and producer surplus at a price $p$. Use the <em>inverse</em> supply curve for this. What must hold for profit to equal producer surplus?</li>' +
      '</ol>',
    solutionDe:
      '<ol>' +
      '<li>Mit $w = r = 2$: $L^* = K^* = y^{3/2}$. Kostenkurven:' +
      '$$C(y) = 4y^{3/2}, \\quad AC(y) = 4y^{1/2}, \\quad MC(y) = 6y^{1/2}$$' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Kostenfunktionen C, MC, AC</strong><br>Siehe Lösung Übung 2, Aufgabe 4</span></div></li>' +
      '<li>Angebot eines Preisnehmers: $p = MC$, solange $MC$ steigend und $MC > AVC$. Da keine Fixkosten: $AVC = AC$. Es gilt $MC = 6y^{1/2} > 4y^{1/2} = AC$. Also:' +
      '$$p = MC = 6\\sqrt{y} \\Rightarrow y = \\frac{p^2}{36}$$</li>' +
      '<li><strong>Gewinn:</strong>' +
      '$$\\pi(y^*) = py^* - C(y^*) = p \\cdot \\frac{p^2}{36} - 4\\left(\\frac{p^2}{36}\\right)^{3/2} = \\frac{p^3}{36} - \\frac{p^3}{54} = \\frac{p^3}{108}$$' +
      '<strong>Produzentenrente:</strong> Fläche zwischen Preis und inverser Angebotskurve:' +
      '$$PR = \\int_0^{p^2/36} \\left(p - 6y^{1/2}\\right) dy = \\frac{p^3}{108}$$' +
      'Produzentenrente = Gewinn, da keine Fixkosten! Allgemein: Gewinn + Fixkosten = Produzentenrente.<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Produzentenrente</strong><br>Siehe Lösung Übung 2, Aufgabe 4</span></div></li>' +
      '</ol>',
    solutionEn:
      '<ol>' +
      '<li>With $w = r = 2$: $L^* = K^* = y^{3/2}$. Cost curves:' +
      '$$C(y) = 4y^{3/2}, \\quad AC(y) = 4y^{1/2}, \\quad MC(y) = 6y^{1/2}$$' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Cost functions C, MC, AC</strong><br>See Solution Sheet 2, Exercise 4</span></div></li>' +
      '<li>Supply of a price taker: $p = MC$, as long as $MC$ is rising and $MC > AVC$. Since there are no fixed costs: $AVC = AC$. We have $MC = 6y^{1/2} > 4y^{1/2} = AC$. So:' +
      '$$p = MC = 6\\sqrt{y} \\Rightarrow y = \\frac{p^2}{36}$$</li>' +
      '<li><strong>Profit:</strong>' +
      '$$\\pi(y^*) = py^* - C(y^*) = p \\cdot \\frac{p^2}{36} - 4\\left(\\frac{p^2}{36}\\right)^{3/2} = \\frac{p^3}{36} - \\frac{p^3}{54} = \\frac{p^3}{108}$$' +
      '<strong>Producer surplus:</strong> Area between price and inverse supply curve:' +
      '$$PS = \\int_0^{p^2/36} \\left(p - 6y^{1/2}\\right) dy = \\frac{p^3}{108}$$' +
      'Producer surplus = profit since there are no fixed costs! In general: profit + fixed costs = producer surplus.<br><div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Producer surplus</strong><br>See Solution Sheet 2, Exercise 4</span></div></li>' +
      '</ol>',
    solutionSource: 'official',
  },
  {
    id: 'es2-5',
    subjectId: 'angebot',
    titleDe: 'Profitmaximierung',
    titleEn: 'Profit Maximization',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 2',
    type: 'freeform',
    bodyDe:
      '<p>Alternativ zur Kostenminimierung kann die Firma direkt die optimalen Inputmengen finden, indem sie den Gewinn maximiert. Dafür löst sie folgendes Problem:</p>' +
      '$$\\max_{L,K} \\pi(L, K) = p \\cdot y(L, K) - C(L, K).$$' +
      '<p>Verwenden Sie weiterhin $y(L, K) = (LK)^{\\frac{1}{3}}$ sowie die Inputpreise $w = r = 2$ und lösen Sie das Problem, um die gewinnmaximierenden Inputmengen $L^*$ und $K^*$ zu finden. Bestimmen Sie anschließend die Angebotskurve $y(p) = y(L^*, K^*)$. Kommen Sie auf dasselbe Ergebnis wie in der vorherigen Aufgabe?</p>',
    bodyEn:
      '<p>As an alternative to cost minimization, the firm can find the optimal input quantities directly by maximizing profit. To do so, it solves the following problem:</p>' +
      '$$\\max_{L,K} \\pi(L, K) = p \\cdot y(L, K) - C(L, K).$$' +
      '<p>Continue using $y(L, K) = (LK)^{\\frac{1}{3}}$ and input prices $w = r = 2$, and solve the problem to find the profit-maximizing input quantities $L^*$ and $K^*$. Then determine the supply curve $y(p) = y(L^*, K^*)$. Do you arrive at the same result as in the previous exercise?</p>',
    solutionDe:
      '<p>$\\max_{L,K} \\pi = p L^{1/3} K^{1/3} - wL - rK$</p>' +
      '<p><strong>Bedingungen erster Ordnung:</strong></p>' +
      '$$\\frac{\\partial \\pi}{\\partial L} = \\frac{p}{3} L^{-2/3} K^{1/3} - w = 0 \\quad (1)$$' +
      '$$\\frac{\\partial \\pi}{\\partial K} = \\frac{p}{3} L^{1/3} K^{-2/3} - r = 0 \\quad (2)$$' +
      '<p>Aus $\\frac{(1)}{(2)}$: $\\frac{K}{L} = \\frac{w}{r} \\Rightarrow K = L\\frac{w}{r}$. Einsetzen in (1) und Auflösen:</p>' +
      '$$L^* = \\frac{p^3}{27 w^2 r}, \\quad K^* = \\frac{p^3}{27 w r^2}$$' +
      '<p>Die Angebotskurve:</p>' +
      '$$y(L^*, K^*) = \\left(\\frac{p^3}{27w^2r} \\cdot \\frac{p^3}{27wr^2}\\right)^{1/3} = \\frac{p^2}{9wr}$$' +
      '<p>Mit $w = r = 2$: $y = \\frac{p^2}{36}$. Dasselbe Ergebnis wie bei Kostenminimierung. ✓</p>',
    solutionEn:
      '<p>$\\max_{L,K} \\pi = p L^{1/3} K^{1/3} - wL - rK$</p>' +
      '<p><strong>First-order conditions:</strong></p>' +
      '$$\\frac{\\partial \\pi}{\\partial L} = \\frac{p}{3} L^{-2/3} K^{1/3} - w = 0 \\quad (1)$$' +
      '$$\\frac{\\partial \\pi}{\\partial K} = \\frac{p}{3} L^{1/3} K^{-2/3} - r = 0 \\quad (2)$$' +
      '<p>From $\\frac{(1)}{(2)}$: $\\frac{K}{L} = \\frac{w}{r} \\Rightarrow K = L\\frac{w}{r}$. Substituting into (1) and solving:</p>' +
      '$$L^* = \\frac{p^3}{27 w^2 r}, \\quad K^* = \\frac{p^3}{27 w r^2}$$' +
      '<p>The supply curve:</p>' +
      '$$y(L^*, K^*) = \\left(\\frac{p^3}{27w^2r} \\cdot \\frac{p^3}{27wr^2}\\right)^{1/3} = \\frac{p^2}{9wr}$$' +
      '<p>With $w = r = 2$: $y = \\frac{p^2}{36}$. Same result as with cost minimization. ✓</p>',
    solutionSource: 'official',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Übung 3 – Märkte  (4 Aufgaben)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'es3-1',
    subjectId: 'maerkte',
    titleDe: 'Gleichgewicht und Steuern',
    titleEn: 'Equilibrium and Taxes',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 3',
    type: 'freeform',
    bodyDe:
      '<p>Auf einem Markt existiere das inverse Angebot $p(S) = 3S + 5$ und eine Nachfrage von $D(p) = 13 - p$.</p>' +
      '<ol>' +
      '<li>Bestimmen Sie Gleichgewichtspreis und Gleichgewichtsmenge und berechnen Sie Konsumenten- und Produzentenrente. Stellen Sie die Lösung grafisch dar. (Tipps: Benutzen Sie die Dreiecksformel. Die interaktive Grafik aus der Vorlesung kann zur Hilfe verwendet werden.)</li>' +
      '<li>Eine Mengensteuer von $t = 2$ wird eingeführt. Wie lautet das neue Gleichgewicht, der Wohlfahrtsverlust und die Steuerlast für Produzenten und Konsumenten? Stellen Sie Ihre Lösung auch grafisch dar. Verifizieren Sie Ihre Zeichnung mit Hilfe des interaktiven Diagramms aus Vorlesung 3.</li>' +
      '<li>Welcher Steuersatz maximiert die Steuereinnahmen?</li>' +
      '</ol>',
    bodyEn:
      '<p>In a market, the inverse supply is $p(S) = 3S + 5$ and demand is $D(p) = 13 - p$.</p>' +
      '<ol>' +
      '<li>Determine the equilibrium price and equilibrium quantity and calculate consumer and producer surplus. Present the solution graphically. (Tips: Use the triangle formula. The interactive graphic from the lecture can be used for help.)</li>' +
      '<li>A per-unit tax of $t = 2$ is introduced. What is the new equilibrium, the welfare loss, and the tax burden on producers and consumers? Present your solution graphically as well. Verify your drawing using the interactive diagram from Lecture 3.</li>' +
      '<li>Which tax rate maximizes tax revenue?</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Im Gleichgewicht entspricht die nachgefragte Menge dem Angebot, d.\u202Fh. $q^* = D(p^*) = S(p^*)$:</p>' +
      '$$3q + 5 = 13 - q \\Leftrightarrow q^* = 2$$' +
      '$$\\Rightarrow p(q^*) = p(2) = 13 - 2 = 11$$' +
      '$$CR = \\frac{(13 - 11) \\cdot 2}{2} = 2$$' +
      '$$PR = \\frac{(11 - 5) \\cdot 2}{2} = 6$$' +
      '$$WF = CR + PR = 8$$' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Gleichgewicht mit CR und PR</strong><br>Siehe Lösung Übung 3, Aufgabe 1</span></div>' +
      '<p><strong>2.</strong> Die Mengensteuer wird zum Preis der Produzenten addiert:</p>' +
      '$$p_{new}(S) = p(S) + 2 = 3S + 7 \\Rightarrow S_n(p_{new}) = \\frac{p_{new} - 7}{3}$$' +
      '<p>Neues Gleichgewicht:</p>' +
      '$$D(p^*_{new}) = S(p^*_{new}) \\Leftrightarrow 13 - p^*_{new} = \\frac{p^*_{new} - 7}{3}$$' +
      '$$\\Leftrightarrow 4p^*_{new} = 46 \\Leftrightarrow p^*_{new} = 11{,}5 \\text{ (Konsumentenpreis)}$$' +
      '$$\\Rightarrow p_P = 11{,}5 - 2 = 9{,}5 \\text{ (Produzentenpreis)}$$' +
      '$$\\Rightarrow D(11{,}5) = 13 - 11{,}5 = 1{,}5$$' +
      '<p>Neue PR, CR und WF mit der Dreiecksformel:</p>' +
      '$$CR = \\frac{(13 - 11{,}5) \\cdot 1{,}5}{2} = 1{,}125$$' +
      '$$PR = \\frac{(9{,}5 - 5) \\cdot 1{,}5}{2} = 3{,}375$$' +
      '$$T = t \\cdot q^* = 1{,}5 \\cdot 2 = 3$$' +
      '$$WF = T + CR + PR = 7{,}5$$' +
      '$$\\Delta WF = 8 - 7{,}5 = 0{,}5$$' +
      '<p>Steuerlast (TB) für Produzenten und Konsumenten ergibt sich aus deren Preisveränderung:</p>' +
      '$$TB_C = q_{new} \\cdot (p^*_{new} - p_{old}) = (11{,}5 - 11) \\cdot 1{,}5 = 0{,}75$$' +
      '$$TB_P = q_{new} \\cdot (p_{old} - p) = (11 - 9{,}5) \\cdot 1{,}5 = 2{,}25$$' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Gleichgewicht mit Steuern</strong><br>Siehe Lösung Übung 3, Aufgabe 1</span></div>' +
      '<p><strong>3.</strong> Steuereinnahmen: $T = D(p^*_n) \\cdot t$.</p>' +
      '<p>Angebot mit Steuern: $p_{new}(S) = 3S + 5 + t$. Gleichgewicht in Abhängigkeit der Steuern:</p>' +
      '$$p^*_n = \\frac{44 + t}{4} = 11 + \\frac{t}{4}$$' +
      '$$D(p^*_n) = 13 - p^*_n = 2 - \\frac{t}{4}$$' +
      '<p>Optimale Steuer zur Maximierung der Steuereinnahmen:</p>' +
      '$$\\max_t T = \\left(2 - \\frac{t}{4}\\right) \\cdot t$$' +
      '$$\\frac{\\partial T}{\\partial t} = 2 - 0{,}5t \\stackrel{!}{=} 0 \\Rightarrow t^* = 4$$' +
      '$$\\Rightarrow p^*_n = 12 \\text{ und } D(p^*_n) = 1$$' +
      '<p>BzO: $\\frac{\\partial^2 T}{\\partial t^2} = -0{,}5 < 0$ $\\Rightarrow$ Maximum.</p>',
    solutionEn:
      '<p><strong>1.</strong> In equilibrium, quantity demanded equals supply, i.e. $q^* = D(p^*) = S(p^*)$:</p>' +
      '$$3q + 5 = 13 - q \\Leftrightarrow q^* = 2$$' +
      '$$\\Rightarrow p(q^*) = p(2) = 13 - 2 = 11$$' +
      '$$CR = \\frac{(13 - 11) \\cdot 2}{2} = 2$$' +
      '$$PR = \\frac{(11 - 5) \\cdot 2}{2} = 6$$' +
      '$$WF = CR + PR = 8$$' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Equilibrium with CR and PR</strong><br>See Solution Sheet 3, Exercise 1</span></div>' +
      '<p><strong>2.</strong> The per-unit tax is added to the producers\' price:</p>' +
      '$$p_{new}(S) = p(S) + 2 = 3S + 7 \\Rightarrow S_n(p_{new}) = \\frac{p_{new} - 7}{3}$$' +
      '<p>New equilibrium:</p>' +
      '$$D(p^*_{new}) = S(p^*_{new}) \\Leftrightarrow 13 - p^*_{new} = \\frac{p^*_{new} - 7}{3}$$' +
      '$$\\Leftrightarrow 4p^*_{new} = 46 \\Leftrightarrow p^*_{new} = 11.5 \\text{ (consumer price)}$$' +
      '$$\\Rightarrow p_P = 11.5 - 2 = 9.5 \\text{ (producer price)}$$' +
      '$$\\Rightarrow D(11.5) = 13 - 11.5 = 1.5$$' +
      '<p>New PR, CR and WF using the triangle formula:</p>' +
      '$$CR = \\frac{(13 - 11.5) \\cdot 1.5}{2} = 1.125$$' +
      '$$PR = \\frac{(9.5 - 5) \\cdot 1.5}{2} = 3.375$$' +
      '$$T = t \\cdot q^* = 1.5 \\cdot 2 = 3$$' +
      '$$WF = T + CR + PR = 7.5$$' +
      '$$\\Delta WF = 8 - 7.5 = 0.5$$' +
      '<p>Tax burden (TB) for producers and consumers from their price changes:</p>' +
      '$$TB_C = q_{new} \\cdot (p^*_{new} - p_{old}) = (11.5 - 11) \\cdot 1.5 = 0.75$$' +
      '$$TB_P = q_{new} \\cdot (p_{old} - p) = (11 - 9.5) \\cdot 1.5 = 2.25$$' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Equilibrium with taxes</strong><br>See Solution Sheet 3, Exercise 1</span></div>' +
      '<p><strong>3.</strong> Tax revenue: $T = D(p^*_n) \\cdot t$.</p>' +
      '<p>Supply with taxes: $p_{new}(S) = 3S + 5 + t$. Equilibrium as a function of the tax:</p>' +
      '$$p^*_n = \\frac{44 + t}{4} = 11 + \\frac{t}{4}$$' +
      '$$D(p^*_n) = 13 - p^*_n = 2 - \\frac{t}{4}$$' +
      '<p>Optimal tax to maximize tax revenue:</p>' +
      '$$\\max_t T = \\left(2 - \\frac{t}{4}\\right) \\cdot t$$' +
      '$$\\frac{\\partial T}{\\partial t} = 2 - 0.5t \\stackrel{!}{=} 0 \\Rightarrow t^* = 4$$' +
      '$$\\Rightarrow p^*_n = 12 \\text{ and } D(p^*_n) = 1$$' +
      '<p>SOC: $\\frac{\\partial^2 T}{\\partial t^2} = -0.5 < 0$ $\\Rightarrow$ Maximum.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es3-2',
    subjectId: 'maerkte',
    titleDe: 'Gleichgewicht im globalen Automobilmarkt',
    titleEn: 'Equilibrium in the Global Automobile Market',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 3',
    type: 'freeform',
    bodyDe:
      '<p>Die Nachfrage nach deutschen Autos der kompakten Mittelklasse hat zwei Komponenten: die Inlandsnachfrage und die Auslandsnachfrage. Wenn $p$ der Preis solcher Autos ist (in 1000 Euros), dann ist die Inlandsnachfrage gegeben durch $D^I(p) = \\max\\{20 - \\frac{1}{2}p,\\; 0\\}$ und die Auslandsnachfrage durch $D^A(p) = \\max\\{30 - p,\\; 0\\}$ (jeweils in 100.000 Stück). Das aggregierte Angebot ist gegeben durch $S(p) = \\max\\{2p - 20,\\; 0\\}$.</p>' +
      '<ol>' +
      '<li>Was sagt die Verwendung des mathematischen Operators $\\max\\{\\}$ über die Nachfrage- und Angebotsfunktionen aus?</li>' +
      '<li>Bestimmen Sie die globale Gesamtnachfrage und stellen Sie diese grafisch dar. (Tipps: Beachten Sie, dass es verschiedene Nachfragefunktionen für unterschiedliche Preisintervalle gibt. Bestimmen Sie zunächst die Nachfrage als Funktion vom Preis $D(p)$ und verwenden Sie dann die inverse Nachfrage $p(D)$ für den Grafen.)</li>' +
      '<li>Bestimmen Sie das Marktgleichgewicht (Preis und Menge).</li>' +
      '</ol>',
    bodyEn:
      '<p>The demand for German compact mid-range cars has two components: domestic demand and foreign demand. If $p$ is the price of such cars (in 1000 euros), then domestic demand is given by $D^I(p) = \\max\\{20 - \\frac{1}{2}p,\\; 0\\}$ and foreign demand by $D^A(p) = \\max\\{30 - p,\\; 0\\}$ (each in units of 100,000). The aggregate supply is given by $S(p) = \\max\\{2p - 20,\\; 0\\}$.</p>' +
      '<ol>' +
      '<li>What does the use of the mathematical operator $\\max\\{\\}$ tell us about the demand and supply functions?</li>' +
      '<li>Determine the global total demand and present it graphically. (Tips: Note that there are different demand functions for different price intervals. First determine demand as a function of price $D(p)$ and then use the inverse demand $p(D)$ for the graph.)</li>' +
      '<li>Determine the market equilibrium (price and quantity).</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Der Operator $\\max\\{\\}$ wird verwendet, um sicherzustellen, dass keine negativen Mengen angeboten oder nachgefragt werden.</p>' +
      '<p>Ohne den Operator hätten wir z.\u202FB. $S(5) = 2 \\cdot 5 - 20 = -10$, mit dem Operator ist es $S(5) = \\max\\{2 \\cdot 5 - 20,\\; 0\\} = 0$.</p>' +
      '<p><strong>2.</strong> Die inländische Nachfrage:</p>' +
      '$$D^I(p) = \\begin{cases} 20 - \\frac{1}{2}p & \\text{wenn } p < 40 \\\\ 0 & \\text{wenn } p \\geq 40 \\end{cases} \\quad \\Rightarrow p(D^I) = 2 \\cdot (20 - D^I)$$' +
      '<p>Die ausländische Nachfrage:</p>' +
      '$$D^A(p) = \\begin{cases} 30 - p & \\text{wenn } p < 30 \\\\ 0 & \\text{wenn } p \\geq 30 \\end{cases} \\quad \\Rightarrow p(D^A) = 30 - D^A$$' +
      '<p>Die globale Nachfrage ist die Summe der inländischen und ausländischen Nachfrage:</p>' +
      '$$D^G(p) = \\begin{cases} 50 - \\frac{3}{2}p & \\text{wenn } p < 30 \\\\ 20 - \\frac{1}{2}p & \\text{wenn } 30 \\leq p < 40 \\\\ 0 & \\text{wenn } p \\geq 40 \\end{cases}$$' +
      '<p>Inverse Nachfrage:</p>' +
      '$$p(D^G) = \\begin{cases} 2 \\cdot (20 - D^G) & \\text{wenn } D^G < 5 \\\\ \\frac{2}{3} \\cdot (50 - D^G) & \\text{wenn } D^G \\geq 5 \\end{cases}$$' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Globale Nachfrage</strong><br>Siehe Lösung Übung 3, Aufgabe 2</span></div>' +
      '<p><strong>3.</strong> Im Gleichgewicht: $D^G(p) = S(p)$, mit $S(p) = \\max\\{2p - 20,\\; 0\\}$, also $p(S) = \\frac{1}{2}(S + 20)$.</p>' +
      '$$50 - \\frac{3}{2}p \\stackrel{!}{=} 2p - 20$$' +
      '$$\\Leftrightarrow \\frac{7}{2}p = 70 \\Leftrightarrow p^* = 20$$' +
      '$$\\Rightarrow D^G(p^*) = S(p^*) = 20$$' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Gleichgewicht im globalen Automarkt</strong><br>Siehe Lösung Übung 3, Aufgabe 2</span></div>',
    solutionEn:
      '<p><strong>1.</strong> The $\\max\\{\\}$ operator ensures that no negative quantities are supplied or demanded.</p>' +
      '<p>Without the operator we would have e.g. $S(5) = 2 \\cdot 5 - 20 = -10$, with the operator it is $S(5) = \\max\\{2 \\cdot 5 - 20,\\; 0\\} = 0$.</p>' +
      '<p><strong>2.</strong> Domestic demand:</p>' +
      '$$D^I(p) = \\begin{cases} 20 - \\frac{1}{2}p & \\text{if } p < 40 \\\\ 0 & \\text{if } p \\geq 40 \\end{cases} \\quad \\Rightarrow p(D^I) = 2 \\cdot (20 - D^I)$$' +
      '<p>Foreign demand:</p>' +
      '$$D^A(p) = \\begin{cases} 30 - p & \\text{if } p < 30 \\\\ 0 & \\text{if } p \\geq 30 \\end{cases} \\quad \\Rightarrow p(D^A) = 30 - D^A$$' +
      '<p>Global demand is the sum of domestic and foreign demand:</p>' +
      '$$D^G(p) = \\begin{cases} 50 - \\frac{3}{2}p & \\text{if } p < 30 \\\\ 20 - \\frac{1}{2}p & \\text{if } 30 \\leq p < 40 \\\\ 0 & \\text{if } p \\geq 40 \\end{cases}$$' +
      '<p>Inverse demand:</p>' +
      '$$p(D^G) = \\begin{cases} 2 \\cdot (20 - D^G) & \\text{if } D^G < 5 \\\\ \\frac{2}{3} \\cdot (50 - D^G) & \\text{if } D^G \\geq 5 \\end{cases}$$' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Global demand</strong><br>See Solution Sheet 3, Exercise 2</span></div>' +
      '<p><strong>3.</strong> In equilibrium: $D^G(p) = S(p)$, with $S(p) = \\max\\{2p - 20,\\; 0\\}$, so $p(S) = \\frac{1}{2}(S + 20)$.</p>' +
      '$$50 - \\frac{3}{2}p \\stackrel{!}{=} 2p - 20$$' +
      '$$\\Leftrightarrow \\frac{7}{2}p = 70 \\Leftrightarrow p^* = 20$$' +
      '$$\\Rightarrow D^G(p^*) = S(p^*) = 20$$' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Equilibrium in global auto market</strong><br>See Solution Sheet 3, Exercise 2</span></div>',
    solutionSource: 'official',
  },
  {
    id: 'es3-3',
    subjectId: 'maerkte',
    titleDe: 'Wohnungsmarkt mit Mietpreisbremse',
    titleEn: 'Housing Market with Rent Control',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 3',
    type: 'freeform',
    bodyDe:
      '<p>Betrachten Sie den Wohnungsmarkt in einer Stadt, in der Nachfrage und Angebot nach Mietwohnungen durch die folgende Funktion beschrieben wird:</p>' +
      '$$Q_D = 3000 - 2P$$' +
      '$$Q_S = 1000 + \\frac{1}{2}P,$$' +
      '<p>wobei $Q_D$ die nachgefragte Menge an Mietwohnungen, $Q_S$ das Angebot und $P$ die Miete in Euro ist.</p>' +
      '<ol>' +
      '<li>Berechnen Sie den Gleichgewichtspreis $P^*$ und die Gleichgewichtsmenge $Q^*$ auf dem Wohnungsmarkt. Berechnen Sie außerdem die Konsumenten- und Produzentenrente, sowie die Gesamtwohlfahrt. (Tipp: Nehmen Sie die inverse Angebots- und Nachfragefunktionen für PR und CR. Berücksichtigen Sie, dass es erst ab einer gewissen Menge ein Angebot gibt.)</li>' +
      '<li>Angenommen, die Stadt führt eine Mietpreisbremse von $P_{max} = 600$ Euro ein. Berechnen Sie das neue Gleichgewicht. Gibt es einen Angebots- oder Nachfrageüberhang?</li>' +
      '<li>Berechnen Sie Wohlfahrt (Konsumentenrente $CR$ und Produzentenrente $PR$) im neuen Gleichgewicht und evaluieren Sie die Wohlfahrtseffekte der Mietpreisbremse. (Tipp: Die CR besteht aus einem Dreieck und einem Rechteck.)</li>' +
      '</ol>',
    bodyEn:
      '<p>Consider the housing market in a city where demand and supply for rental apartments are described by the following functions:</p>' +
      '$$Q_D = 3000 - 2P$$' +
      '$$Q_S = 1000 + \\frac{1}{2}P,$$' +
      '<p>where $Q_D$ is the quantity demanded of rental apartments, $Q_S$ is the supply, and $P$ is the rent in euros.</p>' +
      '<ol>' +
      '<li>Calculate the equilibrium price $P^*$ and the equilibrium quantity $Q^*$ in the housing market. Also calculate consumer and producer surplus, as well as total welfare. (Tip: Use the inverse supply and demand functions for PR and CR. Note that supply only exists above a certain quantity.)</li>' +
      '<li>Suppose the city introduces a rent control of $P_{max} = 600$ euros. Calculate the new equilibrium. Is there a supply or demand overhang?</li>' +
      '<li>Calculate welfare (consumer surplus $CR$ and producer surplus $PR$) in the new equilibrium and evaluate the welfare effects of the rent control. (Tip: The CR consists of a triangle and a rectangle.)</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Im Gleichgewicht: $Q_D = Q_S$:</p>' +
      '$$3000 - 2P = 1000 + \\frac{1}{2}P \\Leftrightarrow P^* = \\frac{2000}{2{,}5} = 800$$' +
      '$$Q^* = Q_D(P^*) = 3000 - 2 \\cdot 800 = 1400$$' +
      '<p>An der Angebotsfunktion $Q_S$ sehen wir, dass das kleinste ökonomisch sinnvolle Angebot ($P \\geq 0$) bei $Q_S = 1000$ liegt.</p>' +
      '<p>Inverse Funktionen: $P_D(Q) = \\frac{3000 - Q}{2}$, $P_S(Q) = 2Q - 2000$.</p>' +
      '$$PR = \\frac{P^* - 0}{2} \\cdot (Q^* - 1000) = \\frac{800}{2} \\cdot 400 = 160.000$$' +
      '$$CR = \\frac{P_D(1000) - P^*}{2} \\cdot (Q^* - 1000) = \\frac{1000 - 800}{2} \\cdot 400 = 40.000$$' +
      '$$WF = PR + CR = 200.000$$' +
      '<p><strong>2.</strong> Da $P_{max} < P^*$ greift die Mietpreisbremse und es entsteht ein Nachfrageüberhang. Das neue Gleichgewicht richtet sich nach dem Angebot:</p>' +
      '$$Q^*_{max} = Q_S(P_{max}) = 1000 + 0{,}5 \\cdot 600 = 1300$$' +
      '$$\\text{Überhang: } Q_D(P_{max}) - Q_S(P_{max}) = 1800 - 1300 = 500$$' +
      '<p><strong>3.</strong> Inverse Funktionen: $P_D(Q) = \\frac{3000 - Q}{2}$, $P_S(Q) = 2(Q - 1000)$.</p>' +
      '$$PR = \\frac{P_{max} - 0}{2} \\cdot (Q_S(600) - Q_S(0)) = \\frac{600}{2} \\cdot (1300 - 1000) = 90.000$$' +
      '$$CR = \\frac{P_D(1000) - P_D(1300)}{2} \\cdot (1300 - 1000) + (P_D(1300) - 600) \\cdot (1300 - 1000)$$' +
      '$$= 300 \\cdot \\left(\\frac{1000 - 850}{2} + (850 - 600)\\right) = 300 \\cdot 325 = 97.500$$' +
      '$$WF = 90.000 + 97.500 = 187.500$$' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Wohlfahrt im Wohnungsmarkt</strong><br>Siehe Lösung Übung 3, Aufgabe 3</span></div>' +
      '<table><tr><th></th><th>Ohne Regulation</th><th>Mit Mietpreisbremse</th></tr>' +
      '<tr><td>PR</td><td>160.000</td><td>90.000</td></tr>' +
      '<tr><td>CR</td><td>40.000</td><td>97.500</td></tr>' +
      '<tr><td>WF</td><td>200.000</td><td>187.500</td></tr></table>' +
      '<p>Die Mietpreisbremse wirkt sich positiv auf die CR und negativ auf die PR aus. Die Gesamtwohlfahrt sinkt. Intuition: Die Mieten sinken, wovon die Mieter profitieren -- wenn sie eine Wohnung bekommen. Allerdings gibt es zu dem neuen Preis weniger Vermieter, die Wohnungen anbieten, wodurch ein Nachfrageüberhang entsteht. Insgesamt ist dieser vereinfacht dargestellte Eingriff ineffizient und reduziert die Gesamtwohlfahrt.</p>',
    solutionEn:
      '<p><strong>1.</strong> In equilibrium: $Q_D = Q_S$:</p>' +
      '$$3000 - 2P = 1000 + \\frac{1}{2}P \\Leftrightarrow P^* = \\frac{2000}{2.5} = 800$$' +
      '$$Q^* = Q_D(P^*) = 3000 - 2 \\cdot 800 = 1400$$' +
      '<p>From the supply function $Q_S$ we see that the smallest economically meaningful supply ($P \\geq 0$) is at $Q_S = 1000$.</p>' +
      '<p>Inverse functions: $P_D(Q) = \\frac{3000 - Q}{2}$, $P_S(Q) = 2Q - 2000$.</p>' +
      '$$PR = \\frac{P^* - 0}{2} \\cdot (Q^* - 1000) = \\frac{800}{2} \\cdot 400 = 160{,}000$$' +
      '$$CR = \\frac{P_D(1000) - P^*}{2} \\cdot (Q^* - 1000) = \\frac{1000 - 800}{2} \\cdot 400 = 40{,}000$$' +
      '$$WF = PR + CR = 200{,}000$$' +
      '<p><strong>2.</strong> Since $P_{max} < P^*$, the rent control is binding and creates excess demand. The new equilibrium is determined by supply:</p>' +
      '$$Q^*_{max} = Q_S(P_{max}) = 1000 + 0.5 \\cdot 600 = 1300$$' +
      '$$\\text{Excess demand: } Q_D(P_{max}) - Q_S(P_{max}) = 1800 - 1300 = 500$$' +
      '<p><strong>3.</strong> Inverse functions: $P_D(Q) = \\frac{3000 - Q}{2}$, $P_S(Q) = 2(Q - 1000)$.</p>' +
      '$$PR = \\frac{P_{max} - 0}{2} \\cdot (Q_S(600) - Q_S(0)) = \\frac{600}{2} \\cdot (1300 - 1000) = 90{,}000$$' +
      '$$CR = \\frac{P_D(1000) - P_D(1300)}{2} \\cdot (1300 - 1000) + (P_D(1300) - 600) \\cdot (1300 - 1000)$$' +
      '$$= 300 \\cdot \\left(\\frac{1000 - 850}{2} + (850 - 600)\\right) = 300 \\cdot 325 = 97{,}500$$' +
      '$$WF = 90{,}000 + 97{,}500 = 187{,}500$$' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Welfare in housing market</strong><br>See Solution Sheet 3, Exercise 3</span></div>' +
      '<table><tr><th></th><th>Without regulation</th><th>With rent control</th></tr>' +
      '<tr><td>PR</td><td>160,000</td><td>90,000</td></tr>' +
      '<tr><td>CR</td><td>40,000</td><td>97,500</td></tr>' +
      '<tr><td>WF</td><td>200,000</td><td>187,500</td></tr></table>' +
      '<p>The rent control has a positive effect on CR and a negative effect on PR. Total welfare decreases. Intuition: Rents fall, benefiting tenants -- if they can find an apartment. However, at the new price fewer landlords offer apartments, creating excess demand. Overall, this simplified intervention is inefficient and reduces total welfare.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es3-4',
    subjectId: 'maerkte',
    titleDe: 'Tausch und Preise',
    titleEn: 'Exchange and Prices',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 3',
    type: 'freeform',
    bodyDe:
      '<p><em>Hinweis: In dieser Aufgabe berechnen wir das allgemeine Marktgleichgewicht im Zweigüterfall mit konkreten Nutzenfunktionen und Werten. Dies ist relativ fortgeschritten, und es empfiehlt sich, die einzelnen Schritte mithilfe einer Grafik intuitiv zu durchdringen.</em></p>' +
      '<p>Betrachten Sie eine Tauschwirtschaft mit den beiden Gütern Quiche ($Q$) und Wein ($W$) sowie die Konsumenten Anna ($A$) und Bert ($B$). Annas Anfangsausstattung besteht aus 3 Quiches und 2 Flaschen Wein. Bert hingegen nennt eine Quiche und 6 Flaschen Wein sein Eigentum. Beide haben dieselbe Nutzenfunktion $U(Q_i, W_i) = Q_i W_i$ wobei $i = A, B$.</p>' +
      '<ol>' +
      '<li>Zeichnen Sie die resultierende Edgeworthbox. Tragen Sie die Anfangsausstattung ein und skizzieren Sie außerdem für beide Konsumenten die jeweilige Indifferenzkurve durch die Anfangsausstattung.</li>' +
      '<li>Geben Sie die notwendige Bedingung für Pareto-effiziente Allokationen (Pareto Menge / Kontraktkurve) an. (Tipp: Die MRS spielt eine Rolle.)</li>' +
      '<li>Leiten Sie die Pareto Menge (Kontraktkurve) her und zeichnen Sie diese in die Edgeworthbox ein. (Vorgehen: Mit Anfangsausstattungen und Nettonachfragen stellen wir <em>für jedes Produkt einzeln</em> eine Beziehung zwischen dem Konsum von Anna und Bert her. Wie viel Wein gibt es und wie viel trinkt Anna, wenn Bert $W_B$ trinkt? Mit Hilfe der MRS bestimmen wir dann die Beziehung von Wein- und Quichekonsum einer Person. Ergebnis: $W_A = 2 \\cdot Q_A$).</li>' +
      '<li>Geben Sie die Steigung von Annas Indifferenzkurven an den Pareto-effizienten Punkten an und leiten Sie hieraus die relativen Preise für ein Wettbewerbsgleichgewicht her. (Tipp: Die Budgetgerade von Anna lautet $M_A = Q_A \\cdot p_Q + W_A \\cdot p_W$. Diese können wir nehmen, um die relativen Preise zu bestimmen.)</li>' +
      '<li>Geben Sie die Güterbündel beider Konsumenten im Wettbewerbsgleichgewicht an. Zeichnen Sie diese Allokation sowie Annas Budgetgerade in die Edgeworthbox ein.</li>' +
      '</ol>',
    bodyEn:
      '<p><em>Note: In this exercise, we calculate the general market equilibrium in the two-good case with specific utility functions and values. This is relatively advanced, and it is recommended to work through the individual steps intuitively using a graph.</em></p>' +
      '<p>Consider an exchange economy with two goods, Quiche ($Q$) and Wine ($W$), and two consumers, Anna ($A$) and Bert ($B$). Anna\'s initial endowment consists of 3 quiches and 2 bottles of wine. Bert, on the other hand, owns one quiche and 6 bottles of wine. Both have the same utility function $U(Q_i, W_i) = Q_i W_i$ where $i = A, B$.</p>' +
      '<ol>' +
      '<li>Draw the resulting Edgeworth box. Mark the initial endowment and also sketch the respective indifference curve through the initial endowment for both consumers.</li>' +
      '<li>State the necessary condition for Pareto-efficient allocations (Pareto set / contract curve). (Hint: The MRS plays a role.)</li>' +
      '<li>Derive the Pareto set (contract curve) and draw it in the Edgeworth box. (Approach: Using initial endowments and net demands, we establish <em>for each product individually</em> a relationship between the consumption of Anna and Bert. How much wine is there and how much does Anna drink when Bert drinks $W_B$? Using the MRS, we then determine the relationship between wine and quiche consumption of one person. Result: $W_A = 2 \\cdot Q_A$).</li>' +
      '<li>State the slope of Anna\'s indifference curves at the Pareto-efficient points and derive the relative prices for a competitive equilibrium. (Hint: Anna\'s budget line is $M_A = Q_A \\cdot p_Q + W_A \\cdot p_W$. We can use this to determine the relative prices.)</li>' +
      '<li>State the commodity bundles of both consumers in the competitive equilibrium. Draw this allocation as well as Anna\'s budget line in the Edgeworth box.</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Zuerst bestimmen wir die Indifferenzkurven auf dem Nutzenniveau der initialen Ausstattung:</p>' +
      '$$U(\\omega_A) = U(3, 2) = 6; \\quad U(\\omega_B) = U(1, 6) = 6 \\quad \\Rightarrow W_i(Q_i \\mid U_i = 6) = \\frac{6}{Q_i}$$' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Edgeworthbox</strong><br>Siehe Lösung Übung 3, Aufgabe 4</span></div>' +
      '<p><strong>2.</strong> Bei jeder Pareto-effizienten Allokation muss Annas MRS gleich der von Bert sein:</p>' +
      '$$MRS_A = -\\frac{\\partial U_A / \\partial Q_A}{\\partial U_A / \\partial W_A} = -\\frac{W_A}{Q_A} \\qquad (1)$$' +
      '$$MRS_B = -\\frac{\\partial U_B / \\partial Q_B}{\\partial U_B / \\partial W_B} = -\\frac{W_B}{Q_B} \\qquad (2)$$' +
      '<p>(1) und (2) müssen gleich sein: $\\frac{W_B}{Q_B} = \\frac{W_A}{Q_A}$</p>' +
      '<p><strong>3.</strong> Mit den Ressourcenausstattungen und der MRS-Bedingung:</p>' +
      '$$Q_A - \\omega^Q_A = \\omega^Q_B - Q_B \\Leftrightarrow Q_A - 3 = 1 - Q_B \\Leftrightarrow Q_B = 4 - Q_A$$' +
      '$$W_A - \\omega^W_A = \\omega^W_B - W_B \\Leftrightarrow W_A - 2 = 6 - W_B \\Leftrightarrow W_B = 8 - W_A$$' +
      '<p>MRS-Bedingung einsetzen:</p>' +
      '$$\\frac{W_A}{Q_A} = \\frac{W_B}{Q_B} = \\frac{8 - W_A}{4 - Q_A}$$' +
      '$$\\Leftrightarrow (4 - Q_A) \\cdot \\frac{W_A}{Q_A} = 8 - W_A \\Leftrightarrow 4 \\cdot \\frac{W_A}{Q_A} = 8$$' +
      '$$\\Rightarrow W_A = 2 \\cdot Q_A$$' +
      '<p><strong>4.</strong></p>' +
      '<p>i) Steigung der Indifferenzkurve $= MRS = -\\frac{W_A}{Q_A} = -\\frac{2Q_A}{Q_A} = -2$.</p>' +
      '<p>ii) Im Optimum ist die Steigung der Budgetgeraden $= -\\frac{p_Q}{p_W}$ gleich der MRS:</p>' +
      '$$-\\frac{p_Q}{p_W} = MRS = -2 \\Rightarrow p_Q = 2p_W$$' +
      '<p>Intuition: Da beide die gleiche Nutzenfunktion haben und Quiche nur halb so oft vorhanden ist wie Wein, ist Quiche doppelt so teuer wie Wein.</p>' +
      '<p><strong>5.</strong> Annas Einkommen zu Gleichgewichtspreisen:</p>' +
      '$$M_A = 3 \\cdot p_Q + 2 \\cdot p_W = 3 \\cdot (2p_W) + 2 \\cdot p_W = 8p_W$$' +
      '<p>Da $MRS = -2$, konsumiert sie $Q_A = 0{,}5 \\cdot W_A$:</p>' +
      '$$M_A = Q_A \\cdot p_Q + W_A \\cdot p_W = \\frac{1}{2}W_A \\cdot (2p_W) + W_A \\cdot p_W = 2W_A p_W$$' +
      '$$\\Rightarrow 2W_A p_W = 8p_W \\Rightarrow W_A = 4$$' +
      '$$\\Rightarrow Q_A = \\frac{1}{2}W_A = 2$$' +
      '$$\\Rightarrow W_B = W_{ges} - W_A = 8 - 4 = 4$$' +
      '$$\\Rightarrow Q_B = Q_{ges} - Q_A = 4 - 2 = 2$$',
    solutionEn:
      '<p><strong>1.</strong> First we determine the indifference curves at the utility level of the initial endowment:</p>' +
      '$$U(\\omega_A) = U(3, 2) = 6; \\quad U(\\omega_B) = U(1, 6) = 6 \\quad \\Rightarrow W_i(Q_i \\mid U_i = 6) = \\frac{6}{Q_i}$$' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Edgeworth box</strong><br>See Solution Sheet 3, Exercise 4</span></div>' +
      '<p><strong>2.</strong> At every Pareto-efficient allocation, Anna\'s MRS must equal Bert\'s MRS:</p>' +
      '$$MRS_A = -\\frac{\\partial U_A / \\partial Q_A}{\\partial U_A / \\partial W_A} = -\\frac{W_A}{Q_A} \\qquad (1)$$' +
      '$$MRS_B = -\\frac{\\partial U_B / \\partial Q_B}{\\partial U_B / \\partial W_B} = -\\frac{W_B}{Q_B} \\qquad (2)$$' +
      '<p>(1) and (2) must be equal: $\\frac{W_B}{Q_B} = \\frac{W_A}{Q_A}$</p>' +
      '<p><strong>3.</strong> Using the resource endowments and MRS condition:</p>' +
      '$$Q_A - \\omega^Q_A = \\omega^Q_B - Q_B \\Leftrightarrow Q_A - 3 = 1 - Q_B \\Leftrightarrow Q_B = 4 - Q_A$$' +
      '$$W_A - \\omega^W_A = \\omega^W_B - W_B \\Leftrightarrow W_A - 2 = 6 - W_B \\Leftrightarrow W_B = 8 - W_A$$' +
      '<p>Substituting the MRS condition:</p>' +
      '$$\\frac{W_A}{Q_A} = \\frac{W_B}{Q_B} = \\frac{8 - W_A}{4 - Q_A}$$' +
      '$$\\Leftrightarrow (4 - Q_A) \\cdot \\frac{W_A}{Q_A} = 8 - W_A \\Leftrightarrow 4 \\cdot \\frac{W_A}{Q_A} = 8$$' +
      '$$\\Rightarrow W_A = 2 \\cdot Q_A$$' +
      '<p><strong>4.</strong></p>' +
      '<p>i) Slope of the indifference curve $= MRS = -\\frac{W_A}{Q_A} = -\\frac{2Q_A}{Q_A} = -2$.</p>' +
      '<p>ii) At the optimum, the slope of the budget line $= -\\frac{p_Q}{p_W}$ equals the MRS:</p>' +
      '$$-\\frac{p_Q}{p_W} = MRS = -2 \\Rightarrow p_Q = 2p_W$$' +
      '<p>Intuition: Since both have the same utility function and quiche is only half as available as wine, quiche is twice as expensive as wine.</p>' +
      '<p><strong>5.</strong> Anna\'s income at equilibrium prices:</p>' +
      '$$M_A = 3 \\cdot p_Q + 2 \\cdot p_W = 3 \\cdot (2p_W) + 2 \\cdot p_W = 8p_W$$' +
      '<p>Since $MRS = -2$, she consumes $Q_A = 0.5 \\cdot W_A$:</p>' +
      '$$M_A = Q_A \\cdot p_Q + W_A \\cdot p_W = \\frac{1}{2}W_A \\cdot (2p_W) + W_A \\cdot p_W = 2W_A p_W$$' +
      '$$\\Rightarrow 2W_A p_W = 8p_W \\Rightarrow W_A = 4$$' +
      '$$\\Rightarrow Q_A = \\frac{1}{2}W_A = 2$$' +
      '$$\\Rightarrow W_B = W_{total} - W_A = 8 - 4 = 4$$' +
      '$$\\Rightarrow Q_B = Q_{total} - Q_A = 4 - 2 = 2$$',
    solutionSource: 'official',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Übung 4 – Spieltheorie  (4 Aufgaben)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'es4-1',
    subjectId: 'spieltheorie',
    titleDe: '(Nash-) Gleichgewichte',
    titleEn: '(Nash) Equilibria',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 4',
    type: 'freeform',
    bodyDe:
      '<p>Beantworten Sie folgende Fragen für die folgenden Spiele:</p>' +
      '<p>a) Gibt es eine (strikt) dominante Strategie für eine der beiden Spieler:innen?</p>' +
      '<p>b) Gibt es ein Nash-Gleichgewicht in reinen und/oder gemischten Strategien? Wie lautet es / lauten diese?</p>' +
      '<p>Am Ende von Vorlesung 4 finden Sie eine App, mit welcher Sie Spiele zur weiteren Übung generieren können.</p>' +
      '<p><strong>1. 2x2 Spiel:</strong></p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>A</th><th>B</th></tr></thead>' +
      '<tbody>' +
      '<tr><td><strong>A</strong></td><td>(50, 50)</td><td>(-100, 100)</td></tr>' +
      '<tr><td><strong>B</strong></td><td>(100, -100)</td><td>(0, 0)</td></tr>' +
      '</tbody></table>' +
      '<p><strong>2. 2x2 Spiel:</strong></p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>1</th><th>2</th></tr></thead>' +
      '<tbody>' +
      '<tr><td><strong>1</strong></td><td>(15, 15)</td><td>(5, 25)</td></tr>' +
      '<tr><td><strong>2</strong></td><td>(25, 5)</td><td>(10, 10)</td></tr>' +
      '</tbody></table>' +
      '<p><strong>3. 2x2 Spiel:</strong></p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>A</th><th>B</th></tr></thead>' +
      '<tbody>' +
      '<tr><td><strong>A</strong></td><td>(40, 40)</td><td>(20, 30)</td></tr>' +
      '<tr><td><strong>B</strong></td><td>(30, 20)</td><td>(10, 10)</td></tr>' +
      '</tbody></table>' +
      '<p><strong>4. 2x2 Spiel:</strong></p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>C</th><th>D</th></tr></thead>' +
      '<tbody>' +
      '<tr><td><strong>C</strong></td><td>(30, 30)</td><td>(0, 20)</td></tr>' +
      '<tr><td><strong>D</strong></td><td>(20, 0)</td><td>(10, 10)</td></tr>' +
      '</tbody></table>' +
      '<p><strong>5. 2x2 Spiel:</strong></p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>A</th><th>B</th></tr></thead>' +
      '<tbody>' +
      '<tr><td><strong>A</strong></td><td>(0, 0)</td><td>(30, 10)</td></tr>' +
      '<tr><td><strong>B</strong></td><td>(10, 30)</td><td>(20, 20)</td></tr>' +
      '</tbody></table>' +
      '<p><strong>6. Zwei Spieler:innen wählen jeweils zwischen drei Strategien: A, B und C.</strong></p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>A</th><th>B</th><th>C</th></tr></thead>' +
      '<tbody>' +
      '<tr><td><strong>A</strong></td><td>(3, 3)</td><td>(0, 5)</td><td>(1, 0)</td></tr>' +
      '<tr><td><strong>B</strong></td><td>(5, 0)</td><td>(2, 2)</td><td>(4, 1)</td></tr>' +
      '<tr><td><strong>C</strong></td><td>(0, 1)</td><td>(1, 4)</td><td>(3, 3)</td></tr>' +
      '</tbody></table>' +
      '<p><strong>7. 2x2 Spiel Wettrüsten:</strong></p>' +
      '<table><thead><tr><th>USA \\ UdSSR</th><th>Rüste nicht</th><th>Rüste</th></tr></thead>' +
      '<tbody>' +
      '<tr><td><strong>Rüste nicht</strong></td><td>(4, 4)</td><td>(1, 3)</td></tr>' +
      '<tr><td><strong>Rüste</strong></td><td>(3, 1)</td><td>(2, 2)</td></tr>' +
      '</tbody></table>',
    bodyEn:
      '<p>Answer the following questions for the following games:</p>' +
      '<p>a) Is there a (strictly) dominant strategy for either player?</p>' +
      '<p>b) Is there a Nash equilibrium in pure and/or mixed strategies? What is it / what are they?</p>' +
      '<p>At the end of Lecture 4 you will find an app with which you can generate games for further practice.</p>' +
      '<p><strong>1. 2x2 Game:</strong></p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>A</th><th>B</th></tr></thead>' +
      '<tbody>' +
      '<tr><td><strong>A</strong></td><td>(50, 50)</td><td>(-100, 100)</td></tr>' +
      '<tr><td><strong>B</strong></td><td>(100, -100)</td><td>(0, 0)</td></tr>' +
      '</tbody></table>' +
      '<p><strong>2. 2x2 Game:</strong></p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>1</th><th>2</th></tr></thead>' +
      '<tbody>' +
      '<tr><td><strong>1</strong></td><td>(15, 15)</td><td>(5, 25)</td></tr>' +
      '<tr><td><strong>2</strong></td><td>(25, 5)</td><td>(10, 10)</td></tr>' +
      '</tbody></table>' +
      '<p><strong>3. 2x2 Game:</strong></p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>A</th><th>B</th></tr></thead>' +
      '<tbody>' +
      '<tr><td><strong>A</strong></td><td>(40, 40)</td><td>(20, 30)</td></tr>' +
      '<tr><td><strong>B</strong></td><td>(30, 20)</td><td>(10, 10)</td></tr>' +
      '</tbody></table>' +
      '<p><strong>4. 2x2 Game:</strong></p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>C</th><th>D</th></tr></thead>' +
      '<tbody>' +
      '<tr><td><strong>C</strong></td><td>(30, 30)</td><td>(0, 20)</td></tr>' +
      '<tr><td><strong>D</strong></td><td>(20, 0)</td><td>(10, 10)</td></tr>' +
      '</tbody></table>' +
      '<p><strong>5. 2x2 Game:</strong></p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>A</th><th>B</th></tr></thead>' +
      '<tbody>' +
      '<tr><td><strong>A</strong></td><td>(0, 0)</td><td>(30, 10)</td></tr>' +
      '<tr><td><strong>B</strong></td><td>(10, 30)</td><td>(20, 20)</td></tr>' +
      '</tbody></table>' +
      '<p><strong>6. Two players each choose between three strategies: A, B and C.</strong></p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>A</th><th>B</th><th>C</th></tr></thead>' +
      '<tbody>' +
      '<tr><td><strong>A</strong></td><td>(3, 3)</td><td>(0, 5)</td><td>(1, 0)</td></tr>' +
      '<tr><td><strong>B</strong></td><td>(5, 0)</td><td>(2, 2)</td><td>(4, 1)</td></tr>' +
      '<tr><td><strong>C</strong></td><td>(0, 1)</td><td>(1, 4)</td><td>(3, 3)</td></tr>' +
      '</tbody></table>' +
      '<p><strong>7. 2x2 Arms Race Game:</strong></p>' +
      '<table><thead><tr><th>USA \\ USSR</th><th>Don\'t arm</th><th>Arm</th></tr></thead>' +
      '<tbody>' +
      '<tr><td><strong>Don\'t arm</strong></td><td>(4, 4)</td><td>(1, 3)</td></tr>' +
      '<tr><td><strong>Arm</strong></td><td>(3, 1)</td><td>(2, 2)</td></tr>' +
      '</tbody></table>',
    solutionDe:
      '<p><strong>1.</strong> a) Spieler 1 spielt B (dominant), Spieler 2 spielt B (dominant). b) NGG: $(B, B) = (0, 0)$.</p>' +
      '<p><strong>2.</strong> a) Spieler 1 spielt 2 (dominant), Spieler 2 spielt 2 (dominant). b) NGG: $(2, 2) = (10, 10)$.</p>' +
      '<p><strong>3.</strong> a) Spieler 1 spielt A (dominant), Spieler 2 spielt A (dominant). b) NGG: $(A, A) = (40, 40)$.</p>' +
      '<p><strong>4.</strong> a) Nein, es gibt keine dominanten Strategien für keine der beiden Spieler:innen.</p>' +
      '<p>b) In reinen Strategien haben wir zwei NGG: $(C, C) = (30, 30)$ und $(D, D) = (10, 10)$.</p>' +
      '<p>Gemischte Strategien: $P_1(C) \\equiv q$, $P_2(C) \\equiv p$.</p>' +
      '<p>Spielerin 1: $30p + 0(1-p) = 20p + 10(1-p) \\Leftrightarrow p = \\frac{1}{2}$</p>' +
      '<p>Spielerin 2: $30q + 0(1-q) = 20q + 10(1-q) \\Leftrightarrow q = \\frac{1}{2}$</p>' +
      '<p>GG in gemischten Strategien: beide spielen jede Strategie mit 50% Wahrscheinlichkeit.</p>' +
      '<p><strong>5.</strong> a) Nein, es gibt keine dominanten Strategien.</p>' +
      '<p>b) In reinen Strategien: $(A, B) = (30, 10)$ und $(B, A) = (10, 30)$.</p>' +
      '<p>Gemischte Strategien: $P_1(A) \\equiv q$, $P_2(A) \\equiv p$.</p>' +
      '<p>Spielerin 1: $0p + 30(1-p) = 10p + 20(1-p) \\Leftrightarrow p = \\frac{1}{2}$</p>' +
      '<p>Spielerin 2: $0q + 30(1-q) = 10q + 20(1-q) \\Leftrightarrow q = \\frac{1}{2}$</p>' +
      '<p><strong>6.</strong> a) Spieler 1 spielt B (dominant), Spieler 2 spielt B (dominant). b) NGG: $(B, B) = (2, 2)$.</p>' +
      '<p><strong>7.</strong> a) Nein, es gibt keine dominanten Strategien.</p>' +
      '<p>b) In reinen Strategien: $(RN, RN) = (4, 4)$ und $(R, R) = (2, 2)$.</p>' +
      '<p>Gemischte Strategien: $P_{USA}(RN) \\equiv q$, $P_{UdSSR}(RN) \\equiv p$.</p>' +
      '<p>USA: $4p + 1(1-p) = 3p + 2(1-p) \\Leftrightarrow p = \\frac{1}{2}$</p>' +
      '<p>UdSSR: $4q + 1(1-q) = 3q + 2(1-q) \\Leftrightarrow q = \\frac{1}{2}$</p>',
    solutionEn:
      '<p><strong>1.</strong> a) Player 1 plays B (dominant), Player 2 plays B (dominant). b) NE: $(B, B) = (0, 0)$.</p>' +
      '<p><strong>2.</strong> a) Player 1 plays 2 (dominant), Player 2 plays 2 (dominant). b) NE: $(2, 2) = (10, 10)$.</p>' +
      '<p><strong>3.</strong> a) Player 1 plays A (dominant), Player 2 plays A (dominant). b) NE: $(A, A) = (40, 40)$.</p>' +
      '<p><strong>4.</strong> a) No, there are no dominant strategies for either player.</p>' +
      '<p>b) In pure strategies we have two NE: $(C, C) = (30, 30)$ and $(D, D) = (10, 10)$.</p>' +
      '<p>Mixed strategies: $P_1(C) \\equiv q$, $P_2(C) \\equiv p$.</p>' +
      '<p>Player 1: $30p + 0(1-p) = 20p + 10(1-p) \\Leftrightarrow p = \\frac{1}{2}$</p>' +
      '<p>Player 2: $30q + 0(1-q) = 20q + 10(1-q) \\Leftrightarrow q = \\frac{1}{2}$</p>' +
      '<p>Mixed strategy equilibrium: both play each strategy with 50% probability.</p>' +
      '<p><strong>5.</strong> a) No, there are no dominant strategies.</p>' +
      '<p>b) In pure strategies: $(A, B) = (30, 10)$ and $(B, A) = (10, 30)$.</p>' +
      '<p>Mixed strategies: $P_1(A) \\equiv q$, $P_2(A) \\equiv p$.</p>' +
      '<p>Player 1: $0p + 30(1-p) = 10p + 20(1-p) \\Leftrightarrow p = \\frac{1}{2}$</p>' +
      '<p>Player 2: $0q + 30(1-q) = 10q + 20(1-q) \\Leftrightarrow q = \\frac{1}{2}$</p>' +
      '<p><strong>6.</strong> a) Player 1 plays B (dominant), Player 2 plays B (dominant). b) NE: $(B, B) = (2, 2)$.</p>' +
      '<p><strong>7.</strong> a) No, there are no dominant strategies.</p>' +
      '<p>b) In pure strategies: $(DA, DA) = (4, 4)$ and $(A, A) = (2, 2)$.</p>' +
      '<p>Mixed strategies: $P_{USA}(DA) \\equiv q$, $P_{USSR}(DA) \\equiv p$.</p>' +
      '<p>USA: $4p + 1(1-p) = 3p + 2(1-p) \\Leftrightarrow p = \\frac{1}{2}$</p>' +
      '<p>USSR: $4q + 1(1-q) = 3q + 2(1-q) \\Leftrightarrow q = \\frac{1}{2}$</p>',
    solutionSource: 'official',
  },
  {
    id: 'es4-2',
    subjectId: 'spieltheorie',
    titleDe: 'Sequenzielle Spiele und Teilspiele',
    titleEn: 'Sequential Games and Subgames',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 4',
    type: 'freeform',
    bodyDe:
      '<p>Berechnen Sie die Nash-Gleichgewichte und die teilspielperfekten Gleichgewichte des folgenden Spiels. (Tipps: Berücksichtigen Sie nur „reine" Strategien. Es kann helfen, das Spiel und die Teilspiele in „Normalform", also tabellarisch, darzustellen.)</p>' +
      '<p>Erinnerung: Nash-Gleichgewichte bestehen aus Strategien, die für jeden Entscheidungsknoten eine Entscheidung spezifizieren – also auch abseits des Gleichgewichtspfades.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Spielbaum: Spieler 1 wählt U oder D. Bei U: Spieler 2 wählt A→(2,3) oder B→(5,4). Bei D: Spieler 2 wählt C oder D. Bei C: Spieler 1 wählt E→(6,2) oder F→(2,6). Bei D→(0,2).</strong><br>Siehe Übung 4, Aufgabe 2</span></div>',
    bodyEn:
      '<p>Calculate the Nash equilibria and the subgame-perfect equilibria of the following game. (Tips: Consider only "pure" strategies. It can help to represent the game and the subgames in "normal form", i.e., in tabular form.)</p>' +
      '<p>Reminder: Nash equilibria consist of strategies that specify a decision for every decision node – including off the equilibrium path.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Game tree: Player 1 chooses U or D. If U: Player 2 chooses A→(2,3) or B→(5,4). If D: Player 2 chooses C or D. If C: Player 1 chooses E→(6,2) or F→(2,6). If D→(0,2).</strong><br>See Exercise Sheet 4, Exercise 2</span></div>',
    solutionDe:
      '<p><strong>Generelles Vorgehen:</strong></p>' +
      '<ol>' +
      '<li>Teilspiele bestimmen und in Normalform umschreiben</li>' +
      '<li>Mit Rückwärtsinduktion und/oder Normalform NGG in den Teilspielen finden</li>' +
      '<li>Gesamtes Spiel in Normalform darstellen (jeder Spieler braucht für alle Entscheidungen eine Strategie)</li>' +
      '<li>NGG für das gesamte Spiel finden</li>' +
      '<li>Überprüfen, ob die NGG des gesamten Spiels teilspielperfekt sind</li>' +
      '</ol>' +
      '<p>Es gibt vier Teilspiele: das Spiel ab Knoten 2 im oberen Ast (TSP1), das Spiel ab Knoten 1 im unteren Ast (TSP2 mit nur E/F), das Spiel ab Knoten 2 im unteren Ast (TSP3), und das gesamte Spiel.</p>' +
      '<p><strong>TSP1:</strong> NGG ist B (da $(5,4) > (2,3)$ für Spieler 2).</p>' +
      '<p><strong>TSP2:</strong> NGG ist E (da $(6,2) > (2,6)$ für Spieler 1).</p>' +
      '<p><strong>TSP3</strong> (Spieler 1 wählt E/F, Spieler 2 wählt C/D):</p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>C</th><th>D</th></tr></thead>' +
      '<tbody>' +
      '<tr><td>E</td><td>(6, 2)</td><td>(0, 2)</td></tr>' +
      '<tr><td>F</td><td>(2, 6)</td><td>(0, 2)</td></tr>' +
      '</tbody></table>' +
      '<p>NGG in TSP3: $(E, C)$ und $(E, D)$.</p>' +
      '<p><strong>Gesamtes Spiel:</strong></p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>AC</th><th>AD</th><th>BC</th><th>BD</th></tr></thead>' +
      '<tbody>' +
      '<tr><td>UE</td><td>(2, 3)</td><td>(2, 3)</td><td>(5, 4)</td><td>(5, 4)</td></tr>' +
      '<tr><td>UF</td><td>(2, 3)</td><td>(2, 3)</td><td>(5, 4)</td><td>(5, 4)</td></tr>' +
      '<tr><td>DE</td><td>(6, 2)</td><td>(0, 2)</td><td>(6, 2)</td><td>(0, 2)</td></tr>' +
      '<tr><td>DF</td><td>(2, 6)</td><td>(0, 2)</td><td>(2, 6)</td><td>(0, 2)</td></tr>' +
      '</tbody></table>' +
      '<p>NGG: $(UE, BD)$, $(DE, BC)$, $(UF, BD)$, $(DE, AC)$.</p>' +
      '<p><strong>Teilspielperfekt</strong> sind davon nur $(UE, BD)$ und $(DE, BC)$.</p>' +
      '<p>$(UF, BD)$ ist nicht teilspielperfekt, da 1 niemals F in TSP2 spielt. $(DE, AC)$ ist nicht teilspielperfekt, da 2 niemals A in TSP1 spielt.</p>',
    solutionEn:
      '<p><strong>General approach:</strong></p>' +
      '<ol>' +
      '<li>Identify subgames and convert to normal form</li>' +
      '<li>Find NE in subgames using backward induction and/or normal form</li>' +
      '<li>Represent the full game in normal form (each player needs a strategy for all decision nodes)</li>' +
      '<li>Find NE for the full game</li>' +
      '<li>Check whether the NE of the full game are subgame-perfect</li>' +
      '</ol>' +
      '<p>There are four subgames: the game from node 2 in the upper branch (SG1), the game from node 1 in the lower branch (SG2 with only E/F), the game from node 2 in the lower branch (SG3), and the full game.</p>' +
      '<p><strong>SG1:</strong> NE is B (since $(5,4) > (2,3)$ for Player 2).</p>' +
      '<p><strong>SG2:</strong> NE is E (since $(6,2) > (2,6)$ for Player 1).</p>' +
      '<p><strong>SG3</strong> (Player 1 chooses E/F, Player 2 chooses C/D):</p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>C</th><th>D</th></tr></thead>' +
      '<tbody>' +
      '<tr><td>E</td><td>(6, 2)</td><td>(0, 2)</td></tr>' +
      '<tr><td>F</td><td>(2, 6)</td><td>(0, 2)</td></tr>' +
      '</tbody></table>' +
      '<p>NE in SG3: $(E, C)$ and $(E, D)$.</p>' +
      '<p><strong>Full game:</strong></p>' +
      '<table><thead><tr><th>1 \\ 2</th><th>AC</th><th>AD</th><th>BC</th><th>BD</th></tr></thead>' +
      '<tbody>' +
      '<tr><td>UE</td><td>(2, 3)</td><td>(2, 3)</td><td>(5, 4)</td><td>(5, 4)</td></tr>' +
      '<tr><td>UF</td><td>(2, 3)</td><td>(2, 3)</td><td>(5, 4)</td><td>(5, 4)</td></tr>' +
      '<tr><td>DE</td><td>(6, 2)</td><td>(0, 2)</td><td>(6, 2)</td><td>(0, 2)</td></tr>' +
      '<tr><td>DF</td><td>(2, 6)</td><td>(0, 2)</td><td>(2, 6)</td><td>(0, 2)</td></tr>' +
      '</tbody></table>' +
      '<p>NE: $(UE, BD)$, $(DE, BC)$, $(UF, BD)$, $(DE, AC)$.</p>' +
      '<p><strong>Subgame-perfect</strong> are only $(UE, BD)$ and $(DE, BC)$.</p>' +
      '<p>$(UF, BD)$ is not subgame-perfect because Player 1 would never play F in SG2. $(DE, AC)$ is not subgame-perfect because Player 2 would never play A in SG1.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es4-3',
    subjectId: 'spieltheorie',
    titleDe: 'Erpressung am Bau',
    titleEn: 'Construction Holdup Problem',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 4',
    type: 'freeform',
    bodyDe:
      '<p>Ein Bauunternehmen errichtet für Sie ein Lagerhaus. Die Pläne sind bereits genehmigt, und das Gebäude steht kurz vor der Fertigstellung. Plötzlich gefällt Ihnen jedoch die gewählte Farbe nicht mehr. Sie bitten den Bauunternehmer, diese zu ändern, was eigentlich nur geringe Mehrkosten verursachen sollte. Der Bauunternehmer erwidert jedoch: „Kein Problem, aber das kostet Sie 1.500 Euro!"</p>' +
      '<p>Sie stellen fest, dass eine Verzögerung – etwa bis Sie ein Malerunternehmen gefunden haben – mindestens ebenso teuer wäre. Gleichzeitig wollen Sie die neue Farbe unbedingt haben. Sie fluchen also innerlich, bezahlen die geforderte Summe und akzeptieren die Zusatzkosten. Herzlichen Glückwunsch: Sie sind soeben Opfer einer Erpressung geworden.</p>' +
      '<p>Natürlich sind Bauunternehmen nicht die einzigen, die in diesem Spiel unfair agieren können. Auch Bauherren haben die Möglichkeit, Zahlungen zurückzuhalten und so Druck auf die Unternehmer auszuüben.</p>' +
      '<p>Nehmen wir an, der Bauherr bewertet die neue Farbe mit 1.500\u202F€, während die tatsächlichen Kosten lediglich 200\u202F€ betragen. Berechnet der Bauunternehmer 1.500\u202F€, erzielt er einen Gewinn von 1.300\u202F€. Dem Bauherrn bleibt dabei ein Nettonutzen von null.</p>' +
      '<p>Entscheidet sich der Bauherr hingegen, einen anderen Maler zu beauftragen, entstehen ihm Kosten von 200\u202F€ für die Arbeit und 1.400\u202F€ durch die Verzögerung. Zwar erhält er die gewünschte Farbe, die ihm 1.500\u202F€ wert ist, doch die Gesamtkosten von 1.600\u202F€ übersteigen diesen Wert. Am Ende erleidet er also einen Nettoverlust von 100\u202F€.</p>' +
      '<p>Würde der Bauunternehmer hingegen nur die tatsächlichen Kosten von 200\u202F€ in Rechnung stellen, ginge er mit einem Nullgewinn aus. Der Bauherr erhielte jedoch für 200\u202F€ einen Wert von 1.500\u202F€ und hätte somit eine Nettoauszahlung von 1.300\u202F€.</p>' +
      '<p>Zusammengefasst: Das Bauunternehmen kann wählen, ob es lediglich die tatsächlichen Kosten verrechnet oder den Kunden unter Druck setzt. Danach muss der Bauherr entscheiden, ob er nachgibt oder nach einem anderen Anbieter sucht.</p>' +
      '<ol>' +
      '<li>Wählen Sie die richtige Form, um das Spiel darzustellen: Normalform (Matrix) <em>oder</em> Extensivform (Spielbaum). (Tipp: Die erste Entscheidung trifft der Bauunternehmer: Erpressung oder faires Angebot?)</li>' +
      '<li>Ermitteln Sie das/die Nashgleichgewicht(e).</li>' +
      '</ol>',
    bodyEn:
      '<p>A construction company is building a warehouse for you. The plans have already been approved, and the building is close to completion. Suddenly, however, you no longer like the chosen colour. You ask the contractor to change it, which should actually only cause minor additional costs. However, the contractor replies: "No problem, but that will cost you 1,500 euros!"</p>' +
      '<p>You realize that a delay – for example, until you have found a painting company – would be at least as expensive. At the same time, you absolutely want the new colour. So you curse inwardly, pay the demanded sum, and accept the additional costs. Congratulations: you have just become the victim of a holdup.</p>' +
      '<p>Of course, construction companies are not the only ones who can act unfairly in this game. Clients also have the option of withholding payments and thus putting pressure on the contractors.</p>' +
      '<p>Let us assume the client values the new colour at €1,500, while the actual costs are only €200. If the contractor charges €1,500, he makes a profit of €1,300. The client is left with a net benefit of zero.</p>' +
      '<p>If the client instead decides to hire a different painter, he incurs costs of €200 for the work and €1,400 due to the delay. He does receive the desired colour, which is worth €1,500 to him, but the total costs of €1,600 exceed this value. In the end, he suffers a net loss of €100.</p>' +
      '<p>If the contractor were to charge only the actual costs of €200, he would end up with zero profit. The client, however, would receive a value of €1,500 for €200 and would thus have a net payoff of €1,300.</p>' +
      '<p>In summary: The construction company can choose whether to merely charge the actual costs or to put pressure on the client. Then the client must decide whether to give in or to look for another provider.</p>' +
      '<ol>' +
      '<li>Choose the correct form to represent the game: normal form (matrix) <em>or</em> extensive form (game tree). (Hint: The first decision is made by the contractor: holdup or fair offer?)</li>' +
      '<li>Determine the Nash equilibrium/equilibria.</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Das Spiel ist sequenziell und wird daher in Extensivform (Spielbaum) dargestellt. Die erste Entscheidung trifft der Bauunternehmer (B): Erpressung oder tatsächliche Kosten berechnen.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Spielbaum Erpressung am Bau</strong><br>Siehe Lösung Übung 4, Aufgabe 3</span></div>' +
      '<p>Auszahlungen (Bauunternehmer, Kunde):</p>' +
      '<ul>' +
      '<li>Erpresse $\\rightarrow$ Gibt nach: $(1300, 0)$</li>' +
      '<li>Erpresse $\\rightarrow$ Suche Maler: $(0, -100)$</li>' +
      '<li>Tatsächliche Kosten: $(0, 1300)$</li>' +
      '</ul>' +
      '<p><strong>2.</strong> Zwei Teilspiele: Das gesamte Spiel und das Spiel ab Knoten K.</p>' +
      '<p>Im Teilspiel ab K muss sich nur K entscheiden und wählt immer "Gibt nach" (da $0 > -100$).</p>' +
      '<p>Normalform des Gesamtspiels:</p>' +
      '<table><thead><tr><th>B \\ K</th><th>Gibt nach (GN)</th><th>Suche Maler (SM)</th></tr></thead>' +
      '<tbody>' +
      '<tr><td>Erpresse (E)</td><td>(1300, 0)</td><td>(0, -100)</td></tr>' +
      '<tr><td>Tatsl. Kosten (TK)</td><td>(0, 1300)</td><td>(0, 1300)</td></tr>' +
      '</tbody></table>' +
      '<p>Mit Rückwärtsinduktion: B weiß, dass K bei Erpressung immer "Gibt nach" wählt. So ist B besser gestellt als bei tatsächlichen Kosten. Das einzige teilspielperfekte NGG ist <strong>(Erpresse, Gibt nach)</strong> mit Auszahlung $(1300, 0)$.</p>',
    solutionEn:
      '<p><strong>1.</strong> The game is sequential and is therefore represented in extensive form (game tree). The first decision is made by the contractor (B): holdup or charge actual costs.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Game tree construction holdup</strong><br>See Solution Sheet 4, Exercise 3</span></div>' +
      '<p>Payoffs (contractor, client):</p>' +
      '<ul>' +
      '<li>Holdup $\\rightarrow$ Give in: $(1300, 0)$</li>' +
      '<li>Holdup $\\rightarrow$ Find painter: $(0, -100)$</li>' +
      '<li>Actual costs: $(0, 1300)$</li>' +
      '</ul>' +
      '<p><strong>2.</strong> Two subgames: the full game and the game from node K.</p>' +
      '<p>In the subgame from K, only K decides and always chooses "Give in" (since $0 > -100$).</p>' +
      '<p>Normal form of the full game:</p>' +
      '<table><thead><tr><th>B \\ K</th><th>Give in (GN)</th><th>Find painter (SM)</th></tr></thead>' +
      '<tbody>' +
      '<tr><td>Holdup (E)</td><td>(1300, 0)</td><td>(0, -100)</td></tr>' +
      '<tr><td>Actual costs (TK)</td><td>(0, 1300)</td><td>(0, 1300)</td></tr>' +
      '</tbody></table>' +
      '<p>Using backward induction: B knows that K will always choose "Give in" in case of holdup. Thus B is better off than with actual costs. The unique subgame-perfect NE is <strong>(Holdup, Give in)</strong> with payoff $(1300, 0)$.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es4-4',
    subjectId: 'spieltheorie',
    titleDe: 'Ein Spiel mit Briefumschlägen',
    titleEn: 'A Game with Envelopes',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 4',
    type: 'freeform',
    bodyDe:
      '<p>In diesem Spiel gibt es zwei Spieler und zwei Briefumschläge. Einer der Umschläge ist mit „Spieler 1" gekennzeichnet, und der andere ist mit „Spieler 2" gekennzeichnet. Zu Beginn des Spiels enthält jeder Umschlag einen Euro. Spieler 1 hat die Wahl, das Spiel zu beenden oder fortzufahren. Wenn er sich entscheidet, das Spiel zu beenden, erhält jeder Spieler das Geld in seinem eigenen Umschlag. Wenn Spieler 1 sich entscheidet fortzufahren, wird ein Euro aus seinem Umschlag entfernt und zwei Euro werden dem Umschlag von Spieler 2 gelegt. Dann muss Spieler 2 wählen, ob er das Spiel beenden oder fortfahren möchte. Wenn er stoppt, endet das Spiel, und jeder Spieler behält das Geld in seinem eigenen Umschlag. Wenn Spieler 2 sich entscheidet fortzufahren, wird ein Euro aus seinem Umschlag entfernt und zwei Euro werden dem Umschlag von Spieler 1 hinzugefügt. Das Spiel wird auf diese Weise fortgesetzt, wobei die Spieler abwechselnd spielen, bis einer von ihnen entscheidet, zu stoppen, oder $k$ Runden gespielt wurden. Wenn keiner der Spieler bis zum Ende der $k$-ten Runde wählt, zu stoppen, erhalten beide Spieler null.</p>' +
      '<p>Beide Spieler streben den größtmöglichen Gewinn an. Dabei ist es für sie unwichtig, ob die Auszahlung sofort oder erst später erfolgt; beides zählt für sie gleich.</p>' +
      '<ol>' +
      '<li>Zeichnen Sie den Spielbaum (Extensivform) des Spiels für $k = 5$.</li>' +
      '<li>Benutzen Sie Rückwärtsinduktion, um das teilspielperfekte Gleichgewicht für $k = 5$ zu finden.</li>' +
      '<li>Wie lautet die generelle Lösung für einen endlichen Wert von $k$?</li>' +
      '</ol>',
    bodyEn:
      '<p>In this game there are two players and two envelopes. One envelope is labelled "Player 1" and the other is labelled "Player 2". At the start of the game, each envelope contains one euro. Player 1 has the choice to end the game or to continue. If he decides to end the game, each player receives the money in their own envelope. If Player 1 decides to continue, one euro is removed from his envelope and two euros are placed in Player 2\'s envelope. Then Player 2 must choose whether to end or continue the game. If he stops, the game ends and each player keeps the money in their own envelope. If Player 2 decides to continue, one euro is removed from his envelope and two euros are added to Player 1\'s envelope. The game continues in this manner, with players alternating, until one of them decides to stop, or $k$ rounds have been played. If neither player chooses to stop by the end of the $k$-th round, both players receive zero.</p>' +
      '<p>Both players aim for the greatest possible payoff. It is irrelevant to them whether the payoff comes immediately or later; both count equally for them.</p>' +
      '<ol>' +
      '<li>Draw the game tree (extensive form) of the game for $k = 5$.</li>' +
      '<li>Use backward induction to find the subgame-perfect equilibrium for $k = 5$.</li>' +
      '<li>What is the general solution for a finite value of $k$?</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Wir kürzen abbrechen mit $S$ (stop) und fortfahren mit $C$ (continue) ab.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Spielbaum Briefumschläge k=5</strong><br>Siehe Lösung Übung 4, Aufgabe 4</span></div>' +
      '<p>Auszahlungen bei Stop in Runde $r$: Wenn ein Spieler in seiner Runde stoppt, behält jeder das Geld in seinem Umschlag. Die Auszahlungen an den Stop-Knoten sind: $(1,1)$, $(0,3)$, $(2,2)$, $(1,4)$, $(3,3)$. Falls beide bis zum Ende von Runde 5 fortfahren: $(0,0)$.</p>' +
      '<p><strong>2.</strong> Rückwärtsinduktion: In Runde 5 (Spieler 1) wählt er $S$, da er $3 > 0$ erhält. In Runde 4 (Spieler 2) weiß er, dass Spieler 1 in Runde 5 stoppt, und stoppt selbst (Auszahlung $4 > 3$). In Runde 3 stoppt Spieler 1 ($2 > 1$). In Runde 2 stoppt Spieler 2 ($3 > 2$). In Runde 1 stoppt Spieler 1 ($1 > 0$).</p>' +
      '<p>Ergebnis: Spieler 1 bricht in Runde 1 ab. Beide Spieler erhalten <strong>1 Euro</strong>.</p>' +
      '<p><strong>3.</strong> Die Lösung lässt sich analog finden. Der Spieler, der in Runde $k-1$ spielt, wird abbrechen wollen, da sein Outcome in der folgenden Periode um eins verringert wird. Wenn wir Rückwärtsinduktion für $k$ Runden anwenden, finden wir, dass Spieler 1 das Spiel nach der ersten Runde abbricht und <strong>beide Spieler 1 Euro erhalten</strong>.</p>',
    solutionEn:
      '<p><strong>1.</strong> We abbreviate stop with $S$ and continue with $C$.</p>' +
      '<div class="graphic-source"><span class="graphic-source-icon">&#128202;</span><span><strong>Game tree envelopes k=5</strong><br>See Solution Sheet 4, Exercise 4</span></div>' +
      '<p>Payoffs at stop in round $r$: When a player stops in their round, each keeps the money in their envelope. The payoffs at the stop nodes are: $(1,1)$, $(0,3)$, $(2,2)$, $(1,4)$, $(3,3)$. If both continue through round 5: $(0,0)$.</p>' +
      '<p><strong>2.</strong> Backward induction: In round 5 (Player 1) he chooses $S$, since he gets $3 > 0$. In round 4 (Player 2) he knows Player 1 will stop in round 5, and stops himself (payoff $4 > 3$). In round 3, Player 1 stops ($2 > 1$). In round 2, Player 2 stops ($3 > 2$). In round 1, Player 1 stops ($1 > 0$).</p>' +
      '<p>Result: Player 1 stops in round 1. Both players receive <strong>1 euro</strong>.</p>' +
      '<p><strong>3.</strong> The solution can be found analogously. The player who acts in round $k-1$ will want to stop, since their outcome in the following period decreases by one. Applying backward induction for $k$ rounds, we find that Player 1 stops the game after the first round and <strong>both players receive 1 euro</strong>.</p>',
    solutionSource: 'official',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Übung 5 – Marktmacht  (6 Aufgaben)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'es5-1',
    subjectId: 'marktmacht',
    titleDe: 'Monopol',
    titleEn: 'Monopoly',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 5',
    type: 'freeform',
    bodyDe:
      '<p>Eine Monopolistin hat die folgende Kostenfunktion $C(Q)$ und sieht sich der Nachfrage $D(p)$ gegenüber:</p>' +
      '$$C(Q) = 0{,}25Q^2 - 5Q + 300$$' +
      '$$D(p) = 70 - p$$' +
      '<p>(Tipp: Die interaktive Grafik aus Vorlesung 5 kann bei der Lösung helfen.)</p>' +
      '<ol>' +
      '<li>Bestimmen Sie das Marktgleichgewicht und die Wohlfahrt. Stellen Sie Ihre Lösung auch grafisch dar und verifizieren Sie Ihren Grafen mit Hilfe des interaktiven Diagramms aus Vorlesung 5.</li>' +
      '<li>Bestimmen Sie den Aufschlag (Markup).</li>' +
      '<li>Wie lautet die Beziehung zwischen Kosten und Preisen unter vollständigem Wettbewerb? Gibt es einen Unterschied in der Wohlfahrt im Vergleich zu vollständigem Wettbewerb?</li>' +
      '<li>Nehmen wir an, es gibt einen Schock auf die Fixkosten der Monopolistin. Die neue Kostenkurve lautet: $C(Q) = 0{,}25Q^2 - 5Q + 1200$. Bestimmen Sie das Marktgleichgewicht und die Wohlfahrt. Interpretieren Sie das Ergebnis.</li>' +
      '</ol>',
    bodyEn:
      '<p>A monopolist has the following cost function $C(Q)$ and faces demand $D(p)$:</p>' +
      '$$C(Q) = 0.25Q^2 - 5Q + 300$$' +
      '$$D(p) = 70 - p$$' +
      '<p>(Tip: The interactive graphic from Lecture 5 can help with the solution.)</p>' +
      '<ol>' +
      '<li>Determine the market equilibrium and welfare. Present your solution graphically and verify your graph using the interactive diagram from Lecture 5.</li>' +
      '<li>Determine the markup.</li>' +
      '<li>What is the relationship between costs and prices under perfect competition? Is there a difference in welfare compared to perfect competition?</li>' +
      '<li>Suppose there is a shock to the monopolist\'s fixed costs. The new cost curve is: $C(Q) = 0.25Q^2 - 5Q + 1200$. Determine the market equilibrium and welfare. Interpret the result.</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Die Monopolistin maximiert den Gewinn gegeben der inversen Nachfrage $p(Q) = 70 - Q$:</p>' +
      '$$\\max_Q \\pi(Q) = Q \\cdot (70 - Q) - (0{,}25Q^2 - 5Q + 300)$$' +
      '$$\\frac{\\partial \\pi}{\\partial Q} = 70 - 2Q - 0{,}5Q + 5 = 0$$' +
      '$$\\Rightarrow Q^* = 30, \\quad p^* = 70 - 30 = 40$$' +
      '$$\\pi(Q^*) = 40 \\cdot 30 - (225 - 150 + 300) = 1200 - 375 = 825$$' +
      '<p>Im Optimum gilt $MR = MC$. Die Wohlfahrt:</p>' +
      '$$CS = Q^* \\cdot \\frac{p(0) - p(Q^*)}{2} = 30 \\cdot \\frac{70 - 40}{2} = 450$$' +
      '$$PS = Q^* \\cdot p^* - \\int_0^{Q^*} MC(Q)\\,dQ = 1200 - \\left[0{,}25Q^2 - 5Q\\right]_0^{30} = 1200 - 75 = 1125$$' +
      '$$WF = CS + PS = 1575$$' +
      '<p><strong>2.</strong> Markup: $\\mu = \\frac{p(Q^*)}{MC(Q^*)}$. Mit $MC = 0{,}5Q - 5$, $MC(30) = 10$:</p>' +
      '$$\\mu = \\frac{40}{10} = 4$$' +
      '<p>Alternativ über die Elastizität: $\\varepsilon_{Q,p} = \\frac{\\partial Q}{\\partial p} \\cdot \\frac{p}{Q} = -1 \\cdot \\frac{40}{30} = -\\frac{4}{3}$, also $\\mu = \\frac{|\\varepsilon|}{|\\varepsilon| - 1} = \\frac{4/3}{1/3} = 4$.</p>' +
      '<p><strong>3.</strong> Unter vollständigem Wettbewerb: $p = MC$:</p>' +
      '$$0{,}5Q - 5 = 70 - Q \\Rightarrow Q^* = 50, \\quad p^* = 20$$' +
      '$$CS = \\frac{70 - 20}{2} \\cdot 50 = 1250$$' +
      '$$PS = \\frac{20 + 5}{2} \\cdot 50 = 625$$' +
      '$$WF = 1875$$' +
      '<p>Die Wohlfahrt steigt um 300 im Vergleich zum Monopol. CS steigt, PS sinkt.</p>' +
      '<p><strong>4.</strong> Die marginalen Kosten ändern sich nicht, daher bleibt $Q^* = 30$, $p^* = 40$. Aber:</p>' +
      '$$\\pi(Q^*) = 40 \\cdot 30 - (225 - 150 + 1200) = 1200 - 1275 = -75$$' +
      '$$AVC = \\frac{C(Q^*)}{Q^*} = \\frac{1275}{30} = 42{,}5 > p^* = 40$$' +
      '<p>Da die Monopolistin Verluste macht ($AVC > p^*$), tritt sie nicht in den Markt ein. $Q^* = 0$ und $WF = 0$.</p>',
    solutionEn:
      '<p><strong>1.</strong> The monopolist maximizes profit given inverse demand $p(Q) = 70 - Q$:</p>' +
      '$$\\max_Q \\pi(Q) = Q \\cdot (70 - Q) - (0.25Q^2 - 5Q + 300)$$' +
      '$$\\frac{\\partial \\pi}{\\partial Q} = 70 - 2Q - 0.5Q + 5 = 0$$' +
      '$$\\Rightarrow Q^* = 30, \\quad p^* = 70 - 30 = 40$$' +
      '$$\\pi(Q^*) = 40 \\cdot 30 - (225 - 150 + 300) = 1200 - 375 = 825$$' +
      '<p>At the optimum, $MR = MC$. Welfare:</p>' +
      '$$CS = Q^* \\cdot \\frac{p(0) - p(Q^*)}{2} = 30 \\cdot \\frac{70 - 40}{2} = 450$$' +
      '$$PS = Q^* \\cdot p^* - \\int_0^{Q^*} MC(Q)\\,dQ = 1200 - \\left[0.25Q^2 - 5Q\\right]_0^{30} = 1200 - 75 = 1125$$' +
      '$$WF = CS + PS = 1575$$' +
      '<p><strong>2.</strong> Markup: $\\mu = \\frac{p(Q^*)}{MC(Q^*)}$. With $MC = 0.5Q - 5$, $MC(30) = 10$:</p>' +
      '$$\\mu = \\frac{40}{10} = 4$$' +
      '<p>Alternatively via elasticity: $\\varepsilon_{Q,p} = \\frac{\\partial Q}{\\partial p} \\cdot \\frac{p}{Q} = -1 \\cdot \\frac{40}{30} = -\\frac{4}{3}$, so $\\mu = \\frac{|\\varepsilon|}{|\\varepsilon| - 1} = \\frac{4/3}{1/3} = 4$.</p>' +
      '<p><strong>3.</strong> Under perfect competition: $p = MC$:</p>' +
      '$$0.5Q - 5 = 70 - Q \\Rightarrow Q^* = 50, \\quad p^* = 20$$' +
      '$$CS = \\frac{70 - 20}{2} \\cdot 50 = 1250$$' +
      '$$PS = \\frac{20 + 5}{2} \\cdot 50 = 625$$' +
      '$$WF = 1875$$' +
      '<p>Welfare increases by 300 compared to monopoly. CS rises, PS falls.</p>' +
      '<p><strong>4.</strong> Marginal costs do not change, so $Q^* = 30$, $p^* = 40$ remains. But:</p>' +
      '$$\\pi(Q^*) = 40 \\cdot 30 - (225 - 150 + 1200) = 1200 - 1275 = -75$$' +
      '$$AVC = \\frac{C(Q^*)}{Q^*} = \\frac{1275}{30} = 42.5 > p^* = 40$$' +
      '<p>Since the monopolist makes losses ($AVC > p^*$), she does not enter the market. $Q^* = 0$ and $WF = 0$.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es5-2',
    subjectId: 'marktmacht',
    titleDe: 'Bertrand-Wettbewerb',
    titleEn: 'Bertrand Competition',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 5',
    type: 'freeform',
    bodyDe:
      '<p>Betrachten Sie einen Bertrand-Wettbewerb zwischen zwei Firmen, A und B, die identische Produkte anbieten. Beide Firmen haben keine Kapazitätsbeschränkung und stehen miteinander im Wettbewerb durch Preissetzung. Die gesamte Nachfrage ist $Q$, die Firmen wählen Preis $p_i$ und verkaufen Menge $q_i$, wobei $i \\in \\{A, B\\}$.</p>' +
      '<ol>' +
      '<li>Beide Firmen haben die gleichen marginalen Kosten $c_A = c_B = 10$. Finden Sie das Gleichgewicht.</li>' +
      '<li>Firma B wird von einem unerwarteten Kostenschock getroffen. Die neuen marginalen Kosten sind nun $c_A = 10$ und $c_B = 15$. Finden Sie das Gleichgewicht. Inwiefern unterscheidet es sich zum Fall mit symmetrischen marginalen Kosten?</li>' +
      '</ol>',
    bodyEn:
      '<p>Consider a Bertrand competition between two firms, A and B, that offer identical products. Both firms have no capacity constraints and compete through price setting. Total demand is $Q$, the firms choose price $p_i$ and sell quantity $q_i$, where $i \\in \\{A, B\\}$.</p>' +
      '<ol>' +
      '<li>Both firms have the same marginal costs $c_A = c_B = 10$. Find the equilibrium.</li>' +
      '<li>Firm B is hit by an unexpected cost shock. The new marginal costs are now $c_A = 10$ and $c_B = 15$. Find the equilibrium. How does it differ from the case with symmetric marginal costs?</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Die Nachfragefunktion von Firma $i$ hängt vom eigenen Preis $p_i$ und dem der Konkurrenz $p_j$ ab:</p>' +
      '$$q_i(p_i, p_j) = \\begin{cases} Q & \\text{falls } p_i < p_j \\\\ Q/2 & \\text{falls } p_i = p_j \\\\ 0 & \\text{falls } p_i > p_j \\end{cases}$$' +
      '<p>Reaktionsfunktionen für allgemeine $c_i$:</p>' +
      '$$p_i^*(p_j) = \\begin{cases} p_j - \\varepsilon & \\text{falls } p_j > c_i \\\\ c_i & \\text{falls } p_j = c_i \\\\ [c_i, \\infty) & \\text{falls } p_j < c_i \\end{cases}$$' +
      '<p>Da $c_A = c_B = 10$: $p_A^* = p_B^* = 10$, $q_i = Q/2$, Nullgewinne. Schon mit zwei Firmen erhalten wir ein effizientes Ergebnis (<strong>Bertrand-Paradox</strong>).</p>' +
      '<p><strong>2.</strong> Mit $c_A = 10$, $c_B = 15$: Firma A unterbietet B und setzt $p_A = 15 - \\varepsilon \\approx 14{,}99$, verkauft $q_A = Q$ Einheiten mit Gewinn $\\approx 4{,}99$ pro Einheit. Firma B bietet $p_B = 15$ an und verkauft nichts ($q_B = 0$).</p>' +
      '<p>Firma B kann nur bis $p_B = 15$ mitgehen, da sonst Verluste entstehen. A kennt Bs Kosten und setzt den Preis genau so, dass B nicht mehr konkurrieren kann.</p>',
    solutionEn:
      '<p><strong>1.</strong> The demand function of firm $i$ depends on its own price $p_i$ and competitor\'s $p_j$:</p>' +
      '$$q_i(p_i, p_j) = \\begin{cases} Q & \\text{if } p_i < p_j \\\\ Q/2 & \\text{if } p_i = p_j \\\\ 0 & \\text{if } p_i > p_j \\end{cases}$$' +
      '<p>Reaction functions for general $c_i$:</p>' +
      '$$p_i^*(p_j) = \\begin{cases} p_j - \\varepsilon & \\text{if } p_j > c_i \\\\ c_i & \\text{if } p_j = c_i \\\\ [c_i, \\infty) & \\text{if } p_j < c_i \\end{cases}$$' +
      '<p>Since $c_A = c_B = 10$: $p_A^* = p_B^* = 10$, $q_i = Q/2$, zero profits. Already with two firms we get an efficient outcome (<strong>Bertrand paradox</strong>).</p>' +
      '<p><strong>2.</strong> With $c_A = 10$, $c_B = 15$: Firm A undercuts B and sets $p_A = 15 - \\varepsilon \\approx 14.99$, sells $q_A = Q$ units with profit $\\approx 4.99$ per unit. Firm B offers $p_B = 15$ and sells nothing ($q_B = 0$).</p>' +
      '<p>Firm B can only compete down to $p_B = 15$ since lower prices would mean losses. A knows B\'s costs and sets the price exactly so that B can no longer compete.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es5-3',
    subjectId: 'marktmacht',
    titleDe: 'Cournot-Wettbewerb mit n Firmen',
    titleEn: 'Cournot Competition with n Firms',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 5',
    type: 'freeform',
    bodyDe:
      '<p>Betrachten Sie einen Cournot-Wettbewerb zwischen $n$ Firmen, die identische Produkte anbieten. Die inverse Nachfragefunktion lautet $p(Q) = 100 - 2Q$, wobei $Q = q_1 + q_2 + \\ldots + q_n = \\sum_{i=1}^{n} q_i$ die Gesamtmenge ist, die von allen Firmen verkauft wird. Alle Firmen können die Produkte ohne (Grenz-)Kosten produzieren.</p>' +
      '<ol>' +
      '<li>Berechnen Sie das Cournot-Gleichgewicht (Mengen und Preis) mit diesen $n$ Firmen.</li>' +
      '<li>Berechnen Sie den Wohlfahrtsverlust im Vergleich zu vollständigem Wettbewerb.</li>' +
      '<li>Untersuchen Sie, was passiert, wenn eine weitere Firma in den Markt eintritt. Bestimmen Sie die neuen Reaktionsfunktionen und das neue Gleichgewicht.</li>' +
      '</ol>',
    bodyEn:
      '<p>Consider a Cournot competition between $n$ firms that offer identical products. The inverse demand function is $p(Q) = 100 - 2Q$, where $Q = q_1 + q_2 + \\ldots + q_n = \\sum_{i=1}^{n} q_i$ is the total quantity sold by all firms. All firms can produce without (marginal) costs.</p>' +
      '<ol>' +
      '<li>Calculate the Cournot equilibrium (quantities and price) with these $n$ firms.</li>' +
      '<li>Calculate the welfare loss compared to perfect competition.</li>' +
      '<li>Investigate what happens when an additional firm enters the market. Determine the new reaction functions and the new equilibrium.</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Gewinnmaximierung von Firma $j$:</p>' +
      '$$\\max_{q_j} \\pi_j = (100 - 2Q) \\cdot q_j = \\left(100 - 2\\sum_{i=1}^{n} q_i\\right) \\cdot q_j$$' +
      '$$\\frac{\\partial \\pi_j}{\\partial q_j} = 100 - 2q_j - 2\\sum_{i=1}^{n} q_i = 0$$' +
      '<p>Reaktionsfunktion:</p>' +
      '$$q_j^* = 25 - \\frac{1}{2}\\sum_{i \\neq j} q_i$$' +
      '<p>Im symmetrischen GG ($q_i^* = q_j^*$ für alle $i,j$):</p>' +
      '$$q_j = 25 - \\frac{1}{2}(n-1)q_j \\Rightarrow q_j \\cdot \\frac{n+1}{2} = 25 \\Rightarrow q_j^* = \\frac{50}{n+1}$$' +
      '$$Q^* = \\frac{50n}{n+1}, \\quad p^* = 100 - 2Q^* = \\frac{100}{n+1}$$' +
      '<p><strong>2.</strong> Wohlfahrt in Abhängigkeit von $n$ (MC = 0):</p>' +
      '$$CS = 50 \\cdot \\left(\\frac{n}{n+1}\\right)^2, \\quad PS = \\frac{5000n}{(n+1)^2}$$' +
      '$$WF = \\frac{5000n + 2500n^2}{(n+1)^2}$$' +
      '<p>Unter vollst. Wettbewerb ($MC = 0$): $(Q^*, p^*) = (50, 0)$, $CS = 2500$, $PS = 0$, $WF = 2500$.</p>' +
      '<p>$WF_{Cournot} < WF_{VW}$ für alle endlichen $n$, da $2500(n+1)^2 > 5000n + 2500n^2 \\Leftrightarrow 2500 > 0$.</p>' +
      '<p><strong>3.</strong> Mit $m = n + 1$ Firmen:</p>' +
      '$$q_j^* = \\frac{50}{n+2}, \\quad Q^* = \\frac{50(n+1)}{n+2}, \\quad p^* = \\frac{100}{n+2}$$' +
      '<p>Es gilt: $CS_m > CS_n$ (mehr Konsumentenrente), $PS_m < PS_n$ (weniger Produzentenrente, falls $n \\geq 1$), $WF_m > WF_n$ (höhere Gesamtwohlfahrt). Je mehr Firmen, desto näher am vollständigen Wettbewerb.</p>',
    solutionEn:
      '<p><strong>1.</strong> Profit maximization of firm $j$:</p>' +
      '$$\\max_{q_j} \\pi_j = (100 - 2Q) \\cdot q_j = \\left(100 - 2\\sum_{i=1}^{n} q_i\\right) \\cdot q_j$$' +
      '$$\\frac{\\partial \\pi_j}{\\partial q_j} = 100 - 2q_j - 2\\sum_{i=1}^{n} q_i = 0$$' +
      '<p>Reaction function:</p>' +
      '$$q_j^* = 25 - \\frac{1}{2}\\sum_{i \\neq j} q_i$$' +
      '<p>In the symmetric equilibrium ($q_i^* = q_j^*$ for all $i,j$):</p>' +
      '$$q_j = 25 - \\frac{1}{2}(n-1)q_j \\Rightarrow q_j \\cdot \\frac{n+1}{2} = 25 \\Rightarrow q_j^* = \\frac{50}{n+1}$$' +
      '$$Q^* = \\frac{50n}{n+1}, \\quad p^* = 100 - 2Q^* = \\frac{100}{n+1}$$' +
      '<p><strong>2.</strong> Welfare as a function of $n$ (MC = 0):</p>' +
      '$$CS = 50 \\cdot \\left(\\frac{n}{n+1}\\right)^2, \\quad PS = \\frac{5000n}{(n+1)^2}$$' +
      '$$WF = \\frac{5000n + 2500n^2}{(n+1)^2}$$' +
      '<p>Under perfect competition ($MC = 0$): $(Q^*, p^*) = (50, 0)$, $CS = 2500$, $PS = 0$, $WF = 2500$.</p>' +
      '<p>$WF_{Cournot} < WF_{PC}$ for all finite $n$, since $2500(n+1)^2 > 5000n + 2500n^2 \\Leftrightarrow 2500 > 0$.</p>' +
      '<p><strong>3.</strong> With $m = n + 1$ firms:</p>' +
      '$$q_j^* = \\frac{50}{n+2}, \\quad Q^* = \\frac{50(n+1)}{n+2}, \\quad p^* = \\frac{100}{n+2}$$' +
      '<p>We have: $CS_m > CS_n$ (more consumer surplus), $PS_m < PS_n$ (less producer surplus, if $n \\geq 1$), $WF_m > WF_n$ (higher total welfare). The more firms, the closer to perfect competition.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es5-4',
    subjectId: 'marktmacht',
    titleDe: 'Stackelberg-Wettbewerb mit 2 Firmen',
    titleEn: 'Stackelberg Competition with 2 Firms',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 5',
    type: 'freeform',
    bodyDe:
      '<p>Betrachten Sie nun einen Markt, in welchem zwei Firmen, A und B, identische Produkte anbieten. Die inverse Nachfragefunktion lautet $p(Q) = 100 - 2Q$, wobei $Q = q_A + q_B$ die Gesamtmenge ist, die von allen Firmen verkauft wird. Beide Firmen haben positive marginale Kosten, $c_A = c_B = 8$.</p>' +
      '<ol>' +
      '<li>Finden Sie das Gleichgewichtig, gegeben, dass Firma A als erste Firma (Führer) und Firma B als zweite Firma (Folger) agiert.</li>' +
      '<li>Unterscheiden sich die Gewinne der beiden Firmen?</li>' +
      '<li>Inwiefern unterscheidet sich dieses Stackelberg-Gleichgewicht zu einem Cournot-Gleichgewicht? Vergleichen Sie auch die Gewinne. (Tipp: Sie können Teile der Lösung der vorherigen Aufgabe wiederverwenden.)</li>' +
      '</ol>',
    bodyEn:
      '<p>Now consider a market in which two firms, A and B, offer identical products. The inverse demand function is $p(Q) = 100 - 2Q$, where $Q = q_A + q_B$ is the total quantity sold by all firms. Both firms have positive marginal costs, $c_A = c_B = 8$.</p>' +
      '<ol>' +
      '<li>Find the equilibrium, given that Firm A acts as the first mover (leader) and Firm B as the second mover (follower).</li>' +
      '<li>Do the profits of the two firms differ?</li>' +
      '<li>How does this Stackelberg equilibrium differ from a Cournot equilibrium? Also compare the profits. (Tip: You can reuse parts of the solution from the previous exercise.)</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Rückwärtsinduktion. Zuerst Bs optimale Entscheidung:</p>' +
      '$$\\max_{q_B} \\pi_B = (100 - 2(q_A + q_B)) \\cdot q_B - 8q_B$$' +
      '$$\\frac{\\partial \\pi_B}{\\partial q_B} = 100 - 2q_A - 4q_B - 8 = 0 \\Rightarrow q_B^* = 23 - \\frac{1}{2}q_A$$' +
      '<p>Einsetzen in As Gewinnfunktion:</p>' +
      '$$\\pi_A = \\left(100 - 2\\left(q_A + 23 - \\frac{1}{2}q_A\\right)\\right) \\cdot q_A - 8q_A = 46q_A - q_A^2 - 8q_A$$' +
      '$$\\frac{\\partial \\pi_A}{\\partial q_A} = 46 - 2q_A = 0 \\Rightarrow q_A^* = 23$$' +
      '$$q_B^* = 23 - \\frac{23}{2} = 11{,}5$$' +
      '$$Q^* = 34{,}5, \\quad p^* = 100 - 69 = 31$$' +
      '<p><strong>2.</strong> Gewinne:</p>' +
      '$$\\pi_A = 31 \\cdot 23 - 8 \\cdot 23 = 529$$' +
      '$$\\pi_B = 31 \\cdot 11{,}5 - 8 \\cdot 11{,}5 = 264{,}5$$' +
      '<p>Firma A hat einen <em>First-Mover-Advantage</em>.</p>' +
      '<p><strong>3.</strong> Cournot-GG mit $c = 8$: Reaktionsfunktion $q_i^* = 23 - \\frac{1}{2}q_j$. Im symm. GG: $q_A^* = q_B^* = \\frac{46}{3} \\approx 15{,}33$.</p>' +
      '$$Q^* = \\frac{92}{3} \\approx 30{,}67, \\quad p^* = \\frac{116}{3} \\approx 38{,}67$$' +
      '$$\\pi_A = \\pi_B = \\frac{46 \\cdot 92}{9} = \\frac{4232}{9} \\approx 470{,}22$$' +
      '<table><thead><tr><th></th><th>Stackelberg</th><th>Cournot</th></tr></thead>' +
      '<tbody>' +
      '<tr><td>$q_A$</td><td>23</td><td>15,33</td></tr>' +
      '<tr><td>$q_B$</td><td>11,5</td><td>15,33</td></tr>' +
      '<tr><td>$Q$</td><td>34,5</td><td>30,67</td></tr>' +
      '<tr><td>$p$</td><td>31</td><td>38,67</td></tr>' +
      '<tr><td>$\\pi_A$</td><td>529</td><td>470,22</td></tr>' +
      '<tr><td>$\\pi_B$</td><td>264,5</td><td>470,22</td></tr>' +
      '</tbody></table>' +
      '<p>Unter Stackelberg verkauft A mehr und B weniger. Der Gesamtoutput ist höher, der Preis niedriger. A profitiert vom First-Mover-Advantage, B wird schlechtergestellt.</p>',
    solutionEn:
      '<p><strong>1.</strong> Backward induction. First B\'s optimal decision:</p>' +
      '$$\\max_{q_B} \\pi_B = (100 - 2(q_A + q_B)) \\cdot q_B - 8q_B$$' +
      '$$\\frac{\\partial \\pi_B}{\\partial q_B} = 100 - 2q_A - 4q_B - 8 = 0 \\Rightarrow q_B^* = 23 - \\frac{1}{2}q_A$$' +
      '<p>Substituting into A\'s profit function:</p>' +
      '$$\\pi_A = \\left(100 - 2\\left(q_A + 23 - \\frac{1}{2}q_A\\right)\\right) \\cdot q_A - 8q_A = 46q_A - q_A^2 - 8q_A$$' +
      '$$\\frac{\\partial \\pi_A}{\\partial q_A} = 46 - 2q_A = 0 \\Rightarrow q_A^* = 23$$' +
      '$$q_B^* = 23 - \\frac{23}{2} = 11.5$$' +
      '$$Q^* = 34.5, \\quad p^* = 100 - 69 = 31$$' +
      '<p><strong>2.</strong> Profits:</p>' +
      '$$\\pi_A = 31 \\cdot 23 - 8 \\cdot 23 = 529$$' +
      '$$\\pi_B = 31 \\cdot 11.5 - 8 \\cdot 11.5 = 264.5$$' +
      '<p>Firm A has a <em>first-mover advantage</em>.</p>' +
      '<p><strong>3.</strong> Cournot equilibrium with $c = 8$: Reaction function $q_i^* = 23 - \\frac{1}{2}q_j$. In the symmetric eq.: $q_A^* = q_B^* = \\frac{46}{3} \\approx 15.33$.</p>' +
      '$$Q^* = \\frac{92}{3} \\approx 30.67, \\quad p^* = \\frac{116}{3} \\approx 38.67$$' +
      '$$\\pi_A = \\pi_B = \\frac{46 \\cdot 92}{9} = \\frac{4232}{9} \\approx 470.22$$' +
      '<table><thead><tr><th></th><th>Stackelberg</th><th>Cournot</th></tr></thead>' +
      '<tbody>' +
      '<tr><td>$q_A$</td><td>23</td><td>15.33</td></tr>' +
      '<tr><td>$q_B$</td><td>11.5</td><td>15.33</td></tr>' +
      '<tr><td>$Q$</td><td>34.5</td><td>30.67</td></tr>' +
      '<tr><td>$p$</td><td>31</td><td>38.67</td></tr>' +
      '<tr><td>$\\pi_A$</td><td>529</td><td>470.22</td></tr>' +
      '<tr><td>$\\pi_B$</td><td>264.5</td><td>470.22</td></tr>' +
      '</tbody></table>' +
      '<p>Under Stackelberg, A sells more and B less. Total output is higher, price lower. A benefits from the first-mover advantage, B is worse off.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es5-5',
    subjectId: 'marktmacht',
    titleDe: 'Preisdiskriminierung in der Reisebranche',
    titleEn: 'Price Discrimination in the Travel Industry',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 5',
    type: 'freeform',
    bodyDe:
      '<p>Betrachten Sie eine Fluggesellschaft, die <em>als einzige</em> einen Flug zwischen Frankfurt und London anbietet. Dieser Flug wird von Geschäftsreisenden und Touristen genutzt, welche die folgenden inversen Nachfragekurven haben</p>' +
      '<p>Geschäftsreisende: $p_1(q_1) = 300 - 10q_1$</p>' +
      '<p>Touristen: $p_2(q_2) = 200 - 5q_2$.</p>' +
      '<p>Die Grenzkosten für die Fluggesellschaft betragen $c = 50$ und sie hat keine Fixkosten.</p>' +
      '<ol>' +
      '<li>Nehmen Sie an, dass die Fluggesellschaft die Gesamtnachfrage beobachten kann, aber <em>nicht</em> die beiden Kundengruppen unterscheiden kann. Finden Sie das Gleichgewicht und bestimmen Sie die Gesamtwohlfahrt sowie alle Komponenten.</li>' +
      '</ol>' +
      '<p>Die Fluggesellschaft benutzt jetzt eine neue Software, welche es ihr ermöglicht, die Identität der Kaufenden schon während der Flugsuche zu erkennen: Man sieht, ob jemand ein Ticket über einen Firmencomputer oder ein privates Gerät sucht. Daher kann die Fluggesellschaft nun zwei separate Tickets anbieten, für Touristen und Geschäftsreisende.</p>' +
      '<ol start="2">' +
      '<li>Um welchen Grad von Preisdiskriminierung handelt es sich?</li>' +
      '<li>Bestimmen Sie das Gleichgewicht mit Segmentierung.</li>' +
      '<li>Berechnen Sie die Gesamtwohlfahrt und ihre Komponenten. Wie unterscheiden diese sich zu der Situation ohne Preisdiskriminierung?</li>' +
      '</ol>',
    bodyEn:
      '<p>Consider an airline that is the <em>only one</em> offering a flight between Frankfurt and London. This flight is used by business travelers and tourists, who have the following inverse demand curves</p>' +
      '<p>Business travelers: $p_1(q_1) = 300 - 10q_1$</p>' +
      '<p>Tourists: $p_2(q_2) = 200 - 5q_2$.</p>' +
      '<p>The marginal costs for the airline are $c = 50$ and it has no fixed costs.</p>' +
      '<ol>' +
      '<li>Assume that the airline can observe total demand but <em>cannot</em> distinguish between the two customer groups. Find the equilibrium and determine total welfare as well as all components.</li>' +
      '</ol>' +
      '<p>The airline now uses new software that allows it to identify buyers during the flight search: one can see whether someone is searching for a ticket via a company computer or a private device. Therefore, the airline can now offer two separate tickets, for tourists and business travelers.</p>' +
      '<ol start="2">' +
      '<li>What degree of price discrimination is this?</li>' +
      '<li>Determine the equilibrium with segmentation.</li>' +
      '<li>Calculate total welfare and its components. How do they differ from the situation without price discrimination?</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Aggregierte Nachfrage: $q_1(p) = 30 - \\frac{p}{10}$, $q_2(p) = 40 - \\frac{p}{5}$.</p>' +
      '$$Q(p) = 70 - \\frac{3}{10}p \\Rightarrow p(Q) = \\frac{10}{3}(70 - Q)$$' +
      '<p>Gewinnmaximierung:</p>' +
      '$$\\frac{\\partial \\pi}{\\partial Q} = \\frac{10}{3}(70 - 2Q) - 50 = 0 \\Rightarrow 70 - 2Q = 15 \\Rightarrow Q^* = 27{,}5$$' +
      '$$p^* = \\frac{10}{3} \\cdot 42{,}5 = \\frac{425}{3} \\approx 141{,}67$$' +
      '$$\\pi = \\frac{10}{3}(70 \\cdot 27{,}5 - 27{,}5^2) - 50 \\cdot 27{,}5 \\approx 2520{,}83$$' +
      '$$CS = 27{,}5 \\cdot \\frac{700/3 - 425/3}{2} \\approx 1260{,}42$$' +
      '$$PS = \\pi \\approx 2520{,}83$$' +
      '$$WF \\approx 3781{,}25$$' +
      '<p><strong>2.</strong> Es handelt sich um <strong>Preisdiskriminierung 3. Grades</strong>. Die Fluggesellschaft sieht den Grund der Reise, aber nicht die individuelle Zahlungsbereitschaft.</p>' +
      '<p><strong>3.</strong> Separate Gewinnmaximierung:</p>' +
      '<p>Geschäftsreisende: $\\frac{\\partial \\pi_1}{\\partial q_1} = 300 - 20q_1 - 50 = 0 \\Rightarrow q_1^* = 12{,}5$, $p_1^* = 175$, $\\pi_1 = 1562{,}5$.</p>' +
      '<p>Touristen: $\\frac{\\partial \\pi_2}{\\partial q_2} = 200 - 10q_2 - 50 = 0 \\Rightarrow q_2^* = 15$, $p_2^* = 125$, $\\pi_2 = 1125$.</p>' +
      '$$Q^* = 27{,}5, \\quad \\pi_{total} = 2687{,}5$$' +
      '<p><strong>4.</strong></p>' +
      '$$CS_1 = 12{,}5 \\cdot \\frac{300 - 175}{2} = 781{,}25$$' +
      '$$CS_2 = 15 \\cdot \\frac{200 - 125}{2} = 562{,}5$$' +
      '$$CS = 1343{,}75, \\quad WF = 4031{,}25$$' +
      '<p>Die Gesamtmenge bleibt gleich ($Q^* = 27{,}5$), aber durch Segmentierung steigen sowohl die Gewinne der Firma als auch die Konsumentenrente. Touristen profitieren mehr als Geschäftsleute verlieren.</p>',
    solutionEn:
      '<p><strong>1.</strong> Aggregate demand: $q_1(p) = 30 - \\frac{p}{10}$, $q_2(p) = 40 - \\frac{p}{5}$.</p>' +
      '$$Q(p) = 70 - \\frac{3}{10}p \\Rightarrow p(Q) = \\frac{10}{3}(70 - Q)$$' +
      '<p>Profit maximization:</p>' +
      '$$\\frac{\\partial \\pi}{\\partial Q} = \\frac{10}{3}(70 - 2Q) - 50 = 0 \\Rightarrow 70 - 2Q = 15 \\Rightarrow Q^* = 27.5$$' +
      '$$p^* = \\frac{10}{3} \\cdot 42.5 = \\frac{425}{3} \\approx 141.67$$' +
      '$$\\pi = \\frac{10}{3}(70 \\cdot 27.5 - 27.5^2) - 50 \\cdot 27.5 \\approx 2520.83$$' +
      '$$CS = 27.5 \\cdot \\frac{700/3 - 425/3}{2} \\approx 1260.42$$' +
      '$$PS = \\pi \\approx 2520.83$$' +
      '$$WF \\approx 3781.25$$' +
      '<p><strong>2.</strong> This is <strong>third-degree price discrimination</strong>. The airline can see the reason for travel but not individual willingness to pay.</p>' +
      '<p><strong>3.</strong> Separate profit maximization:</p>' +
      '<p>Business travelers: $\\frac{\\partial \\pi_1}{\\partial q_1} = 300 - 20q_1 - 50 = 0 \\Rightarrow q_1^* = 12.5$, $p_1^* = 175$, $\\pi_1 = 1562.5$.</p>' +
      '<p>Tourists: $\\frac{\\partial \\pi_2}{\\partial q_2} = 200 - 10q_2 - 50 = 0 \\Rightarrow q_2^* = 15$, $p_2^* = 125$, $\\pi_2 = 1125$.</p>' +
      '$$Q^* = 27.5, \\quad \\pi_{total} = 2687.5$$' +
      '<p><strong>4.</strong></p>' +
      '$$CS_1 = 12.5 \\cdot \\frac{300 - 175}{2} = 781.25$$' +
      '$$CS_2 = 15 \\cdot \\frac{200 - 125}{2} = 562.5$$' +
      '$$CS = 1343.75, \\quad WF = 4031.25$$' +
      '<p>Total quantity remains the same ($Q^* = 27.5$), but through segmentation both firm profits and consumer surplus increase. Tourists benefit more than business travelers lose.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es5-6',
    subjectId: 'marktmacht',
    titleDe: 'Wettbewerb um Wählerstimmen in der Politik',
    titleEn: 'Electoral Competition for Votes',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 5',
    type: 'freeform',
    bodyDe:
      '<p>Betrachten wir das Problem von politischen Parteien, die ihre optimale Position im politischen Spektrum bestimmen möchten. Das Ziel der Parteien ist es, möglichst viele Wählerstimmen zu erhalten. Das politische Spektrum ist eindimensional; das heißt, eine Partei kann nur entscheiden, wie links oder rechts sie ist.</p>' +
      '<p>Wir nehmen an, es gibt nur zwei Parteien $i \\in \\{1, 2\\}$. Wir definieren die politische Position einer Partei $i$ als $t_i \\in [0, 1]$, wobei $t = 0$ die linke und $t = 1$ die rechte Ecke des politischen Spektrums ist. Die politischen Ansichten der Wähler sind gleich verteilt zwischen 0 und 1. Die Wähler haben je eine Stimme und wählen die politische Partei, die ihnen am nächsten ist. Wenn zwei Parteien gleich nah sind, wählen sie zufällig eine Partei. Wenn eine Wähler:in mit Einstellung $x$ eine Partei mit Position $t_i$ wählt, erfährt sie einen Nutzenverlust von $(x - t_i)^2$.</p>' +
      '<p>(Tipp: Die Situation ähnelt dem Beispiel der Eisverkäufer aus der Vorlesung.)</p>' +
      '<ol>' +
      '<li>Nehmen Sie an, Partei 1 wählt $t_1 < t_2$. Zeigen Sie, dass der Anteil aller Stimmen von Partei 1 $s_1 = t_1 + \\frac{t_2 - t_1}{2}$ und der von Partei 2 $s_2 = 1 - \\left(t_1 + \\frac{t_2 - t_1}{2}\\right)$ ist. Ist $t_1 < t_2$ ein Nash-Gleichgewicht?</li>' +
      '<li>Wie müssen $t_1$ und $t_2$ lauten, damit wir ein Nash-Gleichgewicht erhalten?</li>' +
      '<li>Ist die Konsumenten-Wohlfahrt im Nash-Gleichgewicht maximiert? Wie würde die optimale Positionierung aussehen? Argumentieren Sie auch anhand von Berechnungen.</li>' +
      '</ol>',
    bodyEn:
      '<p>Let us consider the problem of political parties that want to determine their optimal position in the political spectrum. The goal of the parties is to obtain as many votes as possible. The political spectrum is one-dimensional; that is, a party can only decide how left or right it is.</p>' +
      '<p>We assume there are only two parties $i \\in \\{1, 2\\}$. We define the political position of a party $i$ as $t_i \\in [0, 1]$, where $t = 0$ is the left and $t = 1$ is the right end of the political spectrum. The political views of voters are uniformly distributed between 0 and 1. Voters each have one vote and vote for the political party closest to them. If two parties are equally close, they randomly choose a party. If a voter with position $x$ votes for a party with position $t_i$, they experience a utility loss of $(x - t_i)^2$.</p>' +
      '<p>(Hint: The situation is similar to the ice cream seller example from the lecture.)</p>' +
      '<ol>' +
      '<li>Assume Party 1 chooses $t_1 < t_2$. Show that the share of all votes for Party 1 is $s_1 = t_1 + \\frac{t_2 - t_1}{2}$ and for Party 2 is $s_2 = 1 - \\left(t_1 + \\frac{t_2 - t_1}{2}\\right)$. Is $t_1 < t_2$ a Nash equilibrium?</li>' +
      '<li>What must $t_1$ and $t_2$ be for us to have a Nash equilibrium?</li>' +
      '<li>Is consumer welfare maximized in the Nash equilibrium? What would the optimal positioning look like? Also argue using calculations.</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Bei $t_1 < t_2$ wählen alle Wähler links von $t_1$ (Anteil $t_1$) Partei 1. Zudem erhält Partei 1 die Hälfte der Wähler zwischen $t_1$ und $t_2$:</p>' +
      '$$s_1 = t_1 + \\frac{t_2 - t_1}{2} = \\frac{t_1 + t_2}{2}$$' +
      '$$s_2 = 1 - s_1 = 1 - \\frac{t_1 + t_2}{2}$$' +
      '<p>Das ist <strong>kein</strong> Nash-Gleichgewicht. Gegeben $t_2 > t_1$ kann Partei 1 ihren Stimmenanteil erhöhen, indem sie sich an $t_2$ annähert (ohne $t_1 = t_2$). Symmetrisch für Partei 2.</p>' +
      '<p><strong>2.</strong> Bei gegebenem $t_1$ kann Partei 2 immer die Hälfte erhalten mit $t_2^* = t_1$.</p>' +
      '<p>Falls $t_1 < 1/2$: Partei 2 wählt $t_2 = t_1 + \\varepsilon$ und erhält fast $1 - t_1 > 1/2$. Falls $t_1 > 1/2$: Partei 2 wählt $t_2 = t_1 - \\varepsilon$. Nur bei $t_1 = 1/2$ ist $t_2^* = t_1 = 1/2$ optimal.</p>' +
      '<p>Das Nash-Gleichgewicht ist $t_1^* = t_2^* = \\frac{1}{2}$ (Medianwählertheorem).</p>' +
      '<p><strong>3.</strong> Die Wohlfahrt ist <strong>nicht</strong> maximiert im NGG. Der aggregierte Verlust:</p>' +
      '$$U = \\frac{1}{3}\\left(t_1^3 + (1 - t_2)^3 + \\frac{1}{4}(t_2 - t_1)^3\\right)$$' +
      '<p>Beispiel 1: $t_1 = t_2 = 0{,}5$: Verlust $= \\frac{1}{12}$.</p>' +
      '<p>Beispiel 2: $t_1 = 0{,}1$, $t_2 = 0{,}9$: Verlust $= 2 \\cdot \\frac{13}{600}$.</p>' +
      '<p>Beispiel 3: $t_1 = 0{,}25$, $t_2 = 0{,}75$: Verlust $= 2 \\cdot \\frac{1}{96}$ (minimal).</p>' +
      '<p>BeO: $\\frac{\\partial U}{\\partial t_1} = 0$ und $\\frac{\\partial U}{\\partial t_2} = 0$ ergibt die Bedingung $t_1^* = 1 - t_2^*$ und:</p>' +
      '$$t_1^* = \\frac{1}{4}, \\quad t_2^* = \\frac{3}{4}$$' +
      '<p>Die optimale Positionierung bei $t_1 = 1/4$, $t_2 = 3/4$ minimiert die maximale Entfernung eines Wählers zu seiner nächsten Partei auf $1/4$.</p>',
    solutionEn:
      '<p><strong>1.</strong> With $t_1 < t_2$, all voters left of $t_1$ (share $t_1$) vote for Party 1. In addition, Party 1 gets half of the voters between $t_1$ and $t_2$:</p>' +
      '$$s_1 = t_1 + \\frac{t_2 - t_1}{2} = \\frac{t_1 + t_2}{2}$$' +
      '$$s_2 = 1 - s_1 = 1 - \\frac{t_1 + t_2}{2}$$' +
      '<p>This is <strong>not</strong> a Nash equilibrium. Given $t_2 > t_1$, Party 1 can increase its vote share by moving closer to $t_2$ (without $t_1 = t_2$). Symmetrically for Party 2.</p>' +
      '<p><strong>2.</strong> Given $t_1$, Party 2 can always get half with $t_2^* = t_1$.</p>' +
      '<p>If $t_1 < 1/2$: Party 2 chooses $t_2 = t_1 + \\varepsilon$ and gets almost $1 - t_1 > 1/2$. If $t_1 > 1/2$: Party 2 chooses $t_2 = t_1 - \\varepsilon$. Only at $t_1 = 1/2$ is $t_2^* = t_1 = 1/2$ optimal.</p>' +
      '<p>The Nash equilibrium is $t_1^* = t_2^* = \\frac{1}{2}$ (median voter theorem).</p>' +
      '<p><strong>3.</strong> Welfare is <strong>not</strong> maximized in the NE. The aggregate loss:</p>' +
      '$$U = \\frac{1}{3}\\left(t_1^3 + (1 - t_2)^3 + \\frac{1}{4}(t_2 - t_1)^3\\right)$$' +
      '<p>Example 1: $t_1 = t_2 = 0.5$: Loss $= \\frac{1}{12}$.</p>' +
      '<p>Example 2: $t_1 = 0.1$, $t_2 = 0.9$: Loss $= 2 \\cdot \\frac{13}{600}$.</p>' +
      '<p>Example 3: $t_1 = 0.25$, $t_2 = 0.75$: Loss $= 2 \\cdot \\frac{1}{96}$ (minimal).</p>' +
      '<p>FOC: $\\frac{\\partial U}{\\partial t_1} = 0$ and $\\frac{\\partial U}{\\partial t_2} = 0$ yields the condition $t_1^* = 1 - t_2^*$ and:</p>' +
      '$$t_1^* = \\frac{1}{4}, \\quad t_2^* = \\frac{3}{4}$$' +
      '<p>The optimal positioning at $t_1 = 1/4$, $t_2 = 3/4$ minimizes the maximum distance of any voter to their nearest party to $1/4$.</p>',
    solutionSource: 'official',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Übung 6 – Externalitäten  (4 Aufgaben)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'es6-1',
    subjectId: 'externalitaeten',
    titleDe: 'Externalitäten von Erdölraffinerien',
    titleEn: 'Externalities from Oil Refineries',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 6',
    type: 'freeform',
    bodyDe:
      '<p>Bei der Weiterverarbeitung von Erdöl zu Benzin, Diesel und vielen weiteren Produkten produzieren Raffinerien Abgase. Um den Effekt dieser Externalitäten auf die Wohlfahrt zu analysieren, modellieren wir den Markt für Raffinerieprodukte wie folgt:</p>' +
      '<p>Unter vollständigem Wettbewerb bieten Raffinerien ihre Produkte zu $p_S(Q) = MC = 2 + Q$ an, wobei $Q$ die produzierte Menge eines allgemeinen Raffinerieproduktes ist. Die dabei erzeugten Abgase verursachen marginale externe Kosten von $EMC = 0{,}5 \\cdot Q$ pro produzierter Einheit. Die inverse Nachfrage lautet $p_D(Q) = 24 - Q$.</p>' +
      '<ol>' +
      '<li>Berechnen Sie das Marktgleichgewicht und die Wohlfahrt <em>ohne</em> Berücksichtigung der Externalitäten.</li>' +
      '<li>Berechnen Sie das Marktgleichgewicht und Wohlfahrt <em>unter</em> Berücksichtigung der Externalitäten, das heißt, das soziale Optimum.</li>' +
      '<li>Berechnen Sie den Wohlfahrtsverlust, der in Teilaufgabe 1 entsteht, weil die Umweltschäden nicht eingepreist werden.</li>' +
      '<li>Vergleichen Sie die Wohlfahrt der vorigen drei Teilaufgaben.</li>' +
      '<li>Der Staat erkennt das Marktversagen und führt eine Mengensteuer ein: Die Raffinerien müssen pro produzierter Einheit eine Steuer von $T = 2$ zahlen. Wie verändert sich die marginale Kostenkurve? Berechnen Sie das Marktgleichgewicht und den Wohlfahrtsverlust.</li>' +
      '<li>Eine neue Regierung wird gewählt und setzt die Steuer ab. Stattdessen führt sie eine Beschränkung der gesamten produzierten Menge von $Q_{max} = 9$ ein. Berechnen Sie das Marktgleichgewicht und den Wohlfahrtsverlust.</li>' +
      '</ol>',
    bodyEn:
      '<p>In the further processing of crude oil into gasoline, diesel, and many other products, refineries produce exhaust gases. To analyze the effect of these externalities on welfare, we model the market for refinery products as follows:</p>' +
      '<p>Under perfect competition, refineries offer their products at $p_S(Q) = MC = 2 + Q$, where $Q$ is the quantity produced of a general refinery product. The exhaust gases produced cause marginal external costs of $EMC = 0.5 \\cdot Q$ per unit produced. The inverse demand is $p_D(Q) = 24 - Q$.</p>' +
      '<ol>' +
      '<li>Calculate the market equilibrium and welfare <em>without</em> considering externalities.</li>' +
      '<li>Calculate the market equilibrium and welfare <em>with</em> consideration of externalities, i.e., the social optimum.</li>' +
      '<li>Calculate the welfare loss that arises in sub-question 1 because the environmental damages are not priced in.</li>' +
      '<li>Compare the welfare of the previous three sub-questions.</li>' +
      '<li>The government recognizes the market failure and introduces a per-unit tax: Refineries must pay a tax of $T = 2$ per unit produced. How does the marginal cost curve change? Calculate the market equilibrium and the welfare loss.</li>' +
      '<li>A new government is elected and removes the tax. Instead, it introduces a restriction on total produced quantity of $Q_{max} = 9$. Calculate the market equilibrium and the welfare loss.</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Schnittpunkt von Nachfrage und Angebot:</p>' +
      '$$24 - Q^* = 2 + Q^* \\Rightarrow Q^* = 11, \\quad p^* = 13$$' +
      '$$CS = \\frac{1}{2}(24 - 13) \\cdot 11 = 60{,}5$$' +
      '$$PS = \\frac{1}{2}(13 - 2) \\cdot 11 = 60{,}5$$' +
      '$$WF = 121$$' +
      '<p><strong>2.</strong> Soziale Grenzkosten: $SMC = MC + EMC = Q + 2 + 0{,}5Q = \\frac{3}{2}Q + 2$.</p>' +
      '$$\\frac{3}{2}Q^* + 2 = 24 - Q^* \\Rightarrow Q^* = 8{,}8, \\quad p^* = 15{,}2$$' +
      '$$CS = \\frac{1}{2}(24 - 15{,}2) \\cdot 8{,}8 = 38{,}72$$' +
      '$$PS = \\frac{1}{2}(15{,}2 - 2) \\cdot 8{,}8 = 58{,}08$$' +
      '$$WF = 96{,}8$$' +
      '<p><strong>3.</strong> $SMC(11) = \\frac{3}{2} \\cdot 11 + 2 = 18{,}5$.</p>' +
      '$$DWL = \\frac{1}{2}(18{,}5 - 13)(11 - 8{,}8) = 6{,}05$$' +
      '<p><strong>4.</strong> Vergleich: (1) Ohne Ext. $WF = 121$. (2) Soziales Opt. $WF = 96{,}8$. (3) Ohne Ext. minus DWL: $121 - 6{,}05 = 114{,}95$.</p>' +
      '<p><strong>5.</strong> Neue Angebotskurve: $p^T_S = Q + 4$. GG: $24 - Q = Q + 4 \\Rightarrow Q^*_T = 10$, $p^* = 14$.</p>' +
      '$$SMC(10) = 17 \\Rightarrow DWL = \\frac{1}{2}(17 - 14)(10 - 8{,}8) = 1{,}8$$' +
      '<p>Die Pigou-Steuer reduziert den DWL (von 6,05 auf 1,8), eliminiert ihn aber nicht vollständig.</p>' +
      '<p><strong>6.</strong> Bei $Q_{max} = 9$: $p_D(9) = 15$, $SMC(9) = 15{,}5$.</p>' +
      '$$DWL = \\frac{1}{2}(15{,}5 - 15)(9 - 8{,}8) = 0{,}05$$' +
      '<p>Da $Q_{max} = 9$ fast dem sozialen Optimum entspricht, ist der DWL sehr klein.</p>',
    solutionEn:
      '<p><strong>1.</strong> Intersection of demand and supply:</p>' +
      '$$24 - Q^* = 2 + Q^* \\Rightarrow Q^* = 11, \\quad p^* = 13$$' +
      '$$CS = \\frac{1}{2}(24 - 13) \\cdot 11 = 60.5$$' +
      '$$PS = \\frac{1}{2}(13 - 2) \\cdot 11 = 60.5$$' +
      '$$WF = 121$$' +
      '<p><strong>2.</strong> Social marginal costs: $SMC = MC + EMC = Q + 2 + 0.5Q = \\frac{3}{2}Q + 2$.</p>' +
      '$$\\frac{3}{2}Q^* + 2 = 24 - Q^* \\Rightarrow Q^* = 8.8, \\quad p^* = 15.2$$' +
      '$$CS = \\frac{1}{2}(24 - 15.2) \\cdot 8.8 = 38.72$$' +
      '$$PS = \\frac{1}{2}(15.2 - 2) \\cdot 8.8 = 58.08$$' +
      '$$WF = 96.8$$' +
      '<p><strong>3.</strong> $SMC(11) = \\frac{3}{2} \\cdot 11 + 2 = 18.5$.</p>' +
      '$$DWL = \\frac{1}{2}(18.5 - 13)(11 - 8.8) = 6.05$$' +
      '<p><strong>4.</strong> Comparison: (1) Without ext. $WF = 121$. (2) Social opt. $WF = 96.8$. (3) Without ext. minus DWL: $121 - 6.05 = 114.95$.</p>' +
      '<p><strong>5.</strong> New supply curve: $p^T_S = Q + 4$. Eq.: $24 - Q = Q + 4 \\Rightarrow Q^*_T = 10$, $p^* = 14$.</p>' +
      '$$SMC(10) = 17 \\Rightarrow DWL = \\frac{1}{2}(17 - 14)(10 - 8.8) = 1.8$$' +
      '<p>The Pigouvian tax reduces the DWL (from 6.05 to 1.8) but does not fully eliminate it.</p>' +
      '<p><strong>6.</strong> With $Q_{max} = 9$: $p_D(9) = 15$, $SMC(9) = 15.5$.</p>' +
      '$$DWL = \\frac{1}{2}(15.5 - 15)(9 - 8.8) = 0.05$$' +
      '<p>Since $Q_{max} = 9$ is close to the social optimum, the DWL is very small.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es6-2',
    subjectId: 'externalitaeten',
    titleDe: 'Eigentumsrechte',
    titleEn: 'Property Rights',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 6',
    type: 'freeform',
    bodyDe:
      '<p>Die Fahrgäste Ken und Gérard sitzen zufällig gemeinsam im Zugabteil. Ken ist ein gesprächiger Typ, der gerne telefoniert. Gérard hingegen ist ein stiller und reservierter Mensch, der die Reisezeit zum Lesen nutzen möchte. In anderen Worten, Ken hat einen positiven Nutzen aus seinen Telefonaten, während Gérard die Telefonate als negative Externalität wahrnimmt.</p>' +
      '<p>Der Nutzen von Ken kann durch die Funktion</p>' +
      '$$U_K = m_K + 4\\sqrt{h_K}$$' +
      '<p>abgebildet werden, wobei $h_K$ die Anzahl der Anrufe ist, die Ken während der Reise tätigt, und $m_K$ den Konsum des Numéraire-Guts darstellt ($m$ für „money"). Der Nutzen von Ken steigt also mit der Anzahl der Anrufe, aber jedes zusätzliche Telefongespräch bringt ihm einen kleineren Nutzen.</p>' +
      '<p>Der Nutzen von Gérard ergibt sich aus der Funktion</p>' +
      '$$U_G = m_G - h_K.$$' +
      '<p>Die Handy-Anrufe von Ken verringern in proportionaler Weise den Nutzen von Gérard und stellen eine negative Externalität dar. Ken kann gegen den Marktpreis von einer Geldeinheit einen Anruf tätigen. Seine Budgetgleichung lautet</p>' +
      '$$m_K + h_K = y_K,$$' +
      '<p>wobei $y_K$ Kens Einkommen ist. Gérards Budgetgleichung ist $y_G = m_G$.</p>' +
      '<ol>' +
      '<li>Wie viele Anrufe tätigt Ken? Wie hoch ist der Nutzen von Ken und Gérard im Gleichgewicht?</li>' +
      '<li>Wie lautet das sozial optimale Ergebnis? (Hinweis: Betrachten Sie den gemeinsamen Nutzen von Ken und Gérard.)</li>' +
      '<li>Können Eigentumsrechte diese Situation verbessern? Erörtern Sie.</li>' +
      '<li>Wie könnte ein monetärer Transfer aussehen, der zu einer Pareto-Verbesserung führt? (Hinweis: In Teilaufgabe 1 haben wir im Gleichgewicht $\\hat{U}_K = y_K + 4$ und $\\hat{U}_G = y_G - 4$.)</li>' +
      '<li>Warum könnte eine Lösung mit Eigentumsrechten in der Realität scheitern?</li>' +
      '</ol>',
    bodyEn:
      '<p>The passengers Ken and Gérard happen to share a train compartment. Ken is a chatty type who likes to make phone calls. Gérard, on the other hand, is a quiet and reserved person who wants to use the travel time for reading. In other words, Ken derives positive utility from his phone calls, while Gérard perceives the calls as a negative externality.</p>' +
      '<p>Ken\'s utility can be represented by the function</p>' +
      '$$U_K = m_K + 4\\sqrt{h_K}$$' +
      '<p>where $h_K$ is the number of calls Ken makes during the journey, and $m_K$ represents consumption of the numéraire good ($m$ for "money"). Ken\'s utility thus increases with the number of calls, but each additional phone call brings him less additional utility.</p>' +
      '<p>Gérard\'s utility is given by the function</p>' +
      '$$U_G = m_G - h_K.$$' +
      '<p>Ken\'s phone calls reduce Gérard\'s utility proportionally and represent a negative externality. Ken can make a call at a market price of one monetary unit. His budget equation is</p>' +
      '$$m_K + h_K = y_K,$$' +
      '<p>where $y_K$ is Ken\'s income. Gérard\'s budget equation is $y_G = m_G$.</p>' +
      '<ol>' +
      '<li>How many calls does Ken make? What is the utility of Ken and Gérard in equilibrium?</li>' +
      '<li>What is the socially optimal outcome? (Hint: Consider the joint utility of Ken and Gérard.)</li>' +
      '<li>Can property rights improve this situation? Discuss.</li>' +
      '<li>What could a monetary transfer look like that leads to a Pareto improvement? (Hint: In sub-question 1, we have in equilibrium $\\hat{U}_K = y_K + 4$ and $\\hat{U}_G = y_G - 4$.)</li>' +
      '<li>Why might a solution with property rights fail in practice?</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Ken maximiert seinen Nutzen: $\\max_{h_K} U_K = y_K - h_K + 4\\sqrt{h_K}$.</p>' +
      '$$\\frac{\\partial U_K}{\\partial h_K} = -1 + \\frac{2}{\\sqrt{h_K}} = 0 \\Rightarrow \\hat{h}_K = 4$$' +
      '$$\\hat{U}_K = y_K - 4 + 4\\sqrt{4} = y_K + 4$$' +
      '$$\\hat{U}_G = y_G - 4$$' +
      '<p><strong>2.</strong> Soziales Optimum: $\\max_{h_K} U_T = U_K + U_G = y_K + y_G - 2h_K + 4\\sqrt{h_K}$.</p>' +
      '$$\\frac{\\partial U_T}{\\partial h_K} = -2 + \\frac{2}{\\sqrt{h_K}} = 0 \\Rightarrow h_K^* = 1$$' +
      '<p>Ein Anruf ist das sozial effiziente Ergebnis.</p>' +
      '<p><strong>3.</strong> Ja, Eigentumsrechte können die Situation verbessern. Hat Ken das Recht zu telefonieren, wird G\\u00e9rard ihn bezahlen, sich zurückzuhalten. Hat G\\u00e9rard das Recht auf Stille, muss Ken ihn entschädigen. In beiden Fällen wird die effiziente Menge ($h_K = 1$) erreicht. Die Eigentumsrechte bestimmen die Verteilung des Überschusses.</p>' +
      '<p><strong>4.</strong> Pareto-Verbesserung: Ken tätigt nur 1 Anruf und erhält 2 Geldeinheiten von G\\u00e9rard ($m_K = y_K - 1 + 2$; $m_G = y_G - 2$):</p>' +
      '$$U_K^* = y_K + 1 + 4\\sqrt{1} = y_K + 5 > \\hat{U}_K = y_K + 4$$' +
      '$$U_G^* = y_G - 2 - 1 = y_G - 3 > \\hat{U}_G = y_G - 4$$' +
      '<p><strong>5.</strong> Mögliche Gründe für das Scheitern:</p>' +
      '<ul>' +
      '<li>Unvollständige Information über Externalitäten</li>' +
      '<li>Transaktionskosten bei Verhandlungen</li>' +
      '<li>Unvollständige Verträge (Ken könnte trotzdem häufiger telefonieren)</li>' +
      '<li>Verteilungsprobleme bei der Zuweisung der Eigentumsrechte</li>' +
      '<li>Anderes Marktversagen (z.\u202FB. Interessenkonflikte)</li>' +
      '</ul>',
    solutionEn:
      '<p><strong>1.</strong> Ken maximizes his utility: $\\max_{h_K} U_K = y_K - h_K + 4\\sqrt{h_K}$.</p>' +
      '$$\\frac{\\partial U_K}{\\partial h_K} = -1 + \\frac{2}{\\sqrt{h_K}} = 0 \\Rightarrow \\hat{h}_K = 4$$' +
      '$$\\hat{U}_K = y_K - 4 + 4\\sqrt{4} = y_K + 4$$' +
      '$$\\hat{U}_G = y_G - 4$$' +
      '<p><strong>2.</strong> Social optimum: $\\max_{h_K} U_T = U_K + U_G = y_K + y_G - 2h_K + 4\\sqrt{h_K}$.</p>' +
      '$$\\frac{\\partial U_T}{\\partial h_K} = -2 + \\frac{2}{\\sqrt{h_K}} = 0 \\Rightarrow h_K^* = 1$$' +
      '<p>One call is the socially efficient outcome.</p>' +
      '<p><strong>3.</strong> Yes, property rights can improve the situation. If Ken has the right to call, G\\u00e9rard will pay him to restrain himself. If G\\u00e9rard has the right to silence, Ken must compensate him. In both cases, the efficient quantity ($h_K = 1$) is reached. Property rights determine the distribution of the surplus.</p>' +
      '<p><strong>4.</strong> Pareto improvement: Ken makes only 1 call and receives 2 units of money from G\\u00e9rard ($m_K = y_K - 1 + 2$; $m_G = y_G - 2$):</p>' +
      '$$U_K^* = y_K + 1 + 4\\sqrt{1} = y_K + 5 > \\hat{U}_K = y_K + 4$$' +
      '$$U_G^* = y_G - 2 - 1 = y_G - 3 > \\hat{U}_G = y_G - 4$$' +
      '<p><strong>5.</strong> Possible reasons for failure:</p>' +
      '<ul>' +
      '<li>Incomplete information about externalities</li>' +
      '<li>Transaction costs in negotiations</li>' +
      '<li>Incomplete contracts (Ken might still call more often)</li>' +
      '<li>Distribution problems in assigning property rights</li>' +
      '<li>Other market failures (e.g., conflicts of interest)</li>' +
      '</ul>',
    solutionSource: 'official',
  },
  {
    id: 'es6-3',
    subjectId: 'externalitaeten',
    titleDe: 'Die Tragik der Allmende',
    titleEn: 'The Tragedy of the Commons',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 6',
    type: 'freeform',
    bodyDe:
      '<p>In der Nähe eines kleinen Ortes sprudelt eine natürliche Quelle, die für alle Bewohner zugänglich ist. Jeder Landbesitzer hat die Möglichkeit, einen eigenen Brunnen zu graben und Wasser aus dieser Quelle zu entnehmen.</p>' +
      '<p>Aus den Kosten für den Brunnenbau ergibt sich folgende aggregierte Angebotsfunktion für $Q$ Einheiten an Wasser: $MC = 10 + \\frac{1}{40} \\cdot Q$.</p>' +
      '<p>Es gibt jedoch ein Problem: Je mehr Bewohner einen Brunnen bauen, desto weniger Wasser kann man mit einem einzelnen Brunnen gewinnen. Diese sozialen Kosten lauten daher $EMC = \\frac{3}{40} \\cdot Q$.</p>' +
      '<p>Der Ort hat eine inverse Nachfrage nach Wasser von $P_D(Q) = 40 - \\frac{1}{20}Q$.</p>' +
      '<ol>' +
      '<li>Wie lautet das Gleichgewicht <em>ohne</em> Berücksichtigung der sozialen Kosten?</li>' +
      '<li>Wie lautet das Gleichgewicht <em>unter</em> Berücksichtigung der sozialen Kosten?</li>' +
      '<li>Wenn der Ort die Menge des entnommenen Wassers beschränken könnte, was wäre die sozial optimale Menge? Was wäre dann der Preis pro Einheit Wasser?</li>' +
      '</ol>',
    bodyEn:
      '<p>Near a small town, a natural spring flows that is accessible to all residents. Each landowner has the opportunity to dig their own well and extract water from this spring.</p>' +
      '<p>From the costs of well construction, the following aggregate supply function for $Q$ units of water results: $MC = 10 + \\frac{1}{40} \\cdot Q$.</p>' +
      '<p>However, there is a problem: the more residents dig a well, the less water can be obtained from a single well. These social costs are therefore $EMC = \\frac{3}{40} \\cdot Q$.</p>' +
      '<p>The town has an inverse demand for water of $P_D(Q) = 40 - \\frac{1}{20}Q$.</p>' +
      '<ol>' +
      '<li>What is the equilibrium <em>without</em> considering social costs?</li>' +
      '<li>What is the equilibrium <em>with</em> consideration of social costs?</li>' +
      '<li>If the town could restrict the amount of water extracted, what would be the socially optimal quantity? What would then be the price per unit of water?</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Im Gleichgewicht: $P_D(Q) = MC$:</p>' +
      '$$40 - \\frac{1}{20}Q = 10 + \\frac{1}{40}Q \\Rightarrow 30 = \\frac{3}{40}Q \\Rightarrow Q^* = 400$$' +
      '$$P_D(400) = 40 - \\frac{400}{20} = 20$$' +
      '<p><strong>2.</strong> $SMC = MC + EMC = 10 + \\frac{1}{40}Q + \\frac{3}{40}Q = 10 + \\frac{1}{10}Q$.</p>' +
      '$$40 - \\frac{1}{20}Q = 10 + \\frac{1}{10}Q \\Rightarrow 30 = \\frac{3}{20}Q \\Rightarrow Q^* = 200$$' +
      '$$P_D(200) = 40 - \\frac{200}{20} = 30$$' +
      '<p><strong>3.</strong> Die Mengenbeschränkung sollte bei $Q_{MB} = 200$ gesetzt werden. Dies führt zu $P_D(Q_{MB}) = 30$.</p>',
    solutionEn:
      '<p><strong>1.</strong> In equilibrium: $P_D(Q) = MC$:</p>' +
      '$$40 - \\frac{1}{20}Q = 10 + \\frac{1}{40}Q \\Rightarrow 30 = \\frac{3}{40}Q \\Rightarrow Q^* = 400$$' +
      '$$P_D(400) = 40 - \\frac{400}{20} = 20$$' +
      '<p><strong>2.</strong> $SMC = MC + EMC = 10 + \\frac{1}{40}Q + \\frac{3}{40}Q = 10 + \\frac{1}{10}Q$.</p>' +
      '$$40 - \\frac{1}{20}Q = 10 + \\frac{1}{10}Q \\Rightarrow 30 = \\frac{3}{20}Q \\Rightarrow Q^* = 200$$' +
      '$$P_D(200) = 40 - \\frac{200}{20} = 30$$' +
      '<p><strong>3.</strong> The quantity restriction should be set at $Q_{MB} = 200$. This leads to $P_D(Q_{MB}) = 30$.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es6-4',
    subjectId: 'externalitaeten',
    titleDe: 'Trittbrettfahrer',
    titleEn: 'Free Riding',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 6',
    type: 'freeform',
    bodyDe:
      '<p>Zwei Personen $i = 1, 2$ haben Präferenzen über ein privates ($x_i$) und ein öffentliches Gut ($G$)</p>' +
      '<p>$$u_i(x_i, G) = 2 \\cdot x_i + 4 \\cdot \\sqrt{G}$$</p>' +
      '<p>Die Menge/Qualität des öffentlichen Gutes hängt direkt von den Zahlungen $G_i$ der Personen ab</p>' +
      '<p>$$G = G_1 + G_2$$</p>' +
      '<p>Die Budgetbeschränkung lautet $x_i + G_i = 100$; die Grenzkosten des öffentlichen Gutes sind $MC_G = 1$.</p>' +
      '<ol>' +
      '<li>Wie lautet die sozial optimale Menge des öffentlichen Gutes $G$? Berechnen Sie die Wohlfahrt, hier bestehend aus dem Nutzen der Personen. (Tipp: Bestimmen Sie die Samuelson Bedingung. Bedenken Sie, dass alle Personen gleich besteuert werden und verwenden Sie die Budgetbeschränkung für die optimale Menge des privaten Gutes.)</li>' +
      '<li>Wie lautet die angebotene Menge von $G$, wenn beide Personen individuell ihren Nutzen optimieren? Entsteht ein effizientes Angebot des öffentlichen Gutes?</li>' +
      '<li>Gehen Sie davon aus, dass die Personen das öffentliche Gut nun mehr wertschätzen. Die neue Nutzenfunktion beider Agenten lautet $u_i(x_i, G) = 2 \\cdot x_i + 16 \\cdot \\sqrt{G}$. Berechnen Sie erneut die angebotene Menge wie in 2. Ist das Angebot effizient?</li>' +
      '</ol>',
    bodyEn:
      '<p>Two persons $i = 1, 2$ have preferences over a private good ($x_i$) and a public good ($G$)</p>' +
      '<p>$$u_i(x_i, G) = 2 \\cdot x_i + 4 \\cdot \\sqrt{G}$$</p>' +
      '<p>The quantity/quality of the public good depends directly on the payments $G_i$ of the persons</p>' +
      '<p>$$G = G_1 + G_2$$</p>' +
      '<p>The budget constraint is $x_i + G_i = 100$; the marginal cost of the public good is $MC_G = 1$.</p>' +
      '<ol>' +
      '<li>What is the socially optimal quantity of the public good $G$? Calculate the welfare, here consisting of the utility of the persons. (Tip: Determine the Samuelson condition. Note that all persons are taxed equally and use the budget constraint for the optimal quantity of the private good.)</li>' +
      '<li>What is the supplied quantity of $G$ when both persons individually optimize their utility? Does an efficient supply of the public good result?</li>' +
      '<li>Assume that the persons now value the public good more highly. The new utility function of both agents is $u_i(x_i, G) = 2 \\cdot x_i + 16 \\cdot \\sqrt{G}$. Calculate again the supplied quantity as in 2. Is the supply efficient?</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Samuelson-Bedingung: $\\sum_i \\frac{\\partial u_i / \\partial G}{\\partial u_i / \\partial x_i} = MC_G$.</p>' +
      '$$\\frac{2/\\sqrt{G}}{2} + \\frac{2/\\sqrt{G}}{2} = 1 \\Rightarrow \\frac{2}{\\sqrt{G}} = 1 \\Rightarrow G^s = 4$$' +
      '<p>Da beide identisch: $G_i^s = 2$, $x_i^s = 98$.</p>' +
      '$$u_i = 2 \\cdot 98 + 4 \\cdot 2 = 204, \\quad WF = 408$$' +
      '<p><strong>2.</strong> Individuelle Nutzenmaximierung:</p>' +
      '$$\\max_{G_i} u_i = 2(100 - G_i) + 4\\sqrt{G_i + \\bar{G}_j}$$' +
      '$$\\frac{\\partial u_i}{\\partial G_i} = -2 + \\frac{2}{\\sqrt{G_i + \\bar{G}_j}} = 0 \\Rightarrow G_i^* = 1 - \\bar{G}_j$$' +
      '<p>Im Nash-GG ($G_i = G_j$): $G_i^* = \\frac{1}{2}$, $G = 1 < G^s = 4$.</p>' +
      '$$x_i^* = 99{,}5, \\quad u_i = 2 \\cdot 99{,}5 + 4 \\cdot 1 = 203 < 204$$' +
      '<p>Das Angebot des öffentlichen Gutes ist <strong>nicht effizient</strong> (Trittbrettfahrerproblem).</p>' +
      '<p><strong>3.</strong> Neue Nutzenfunktion: $u_i = 2x_i + 16\\sqrt{G}$.</p>' +
      '$$\\frac{\\partial u_i}{\\partial G_i} = -2 + \\frac{8}{\\sqrt{G_i + \\bar{G}_j}} = 0 \\Rightarrow G_i^* = 16 - \\bar{G}_j$$' +
      '<p>Im Nash-GG: $G_i^* = 8$, $G = 16$, $x_i = 92$.</p>' +
      '$$u_i = 2 \\cdot 92 + 16 \\cdot 4 = 248$$' +
      '<p>Samuelson-Bedingung: $\\frac{2 \\cdot 8/\\sqrt{G}}{2} = 1 \\Rightarrow G^s = 64$, $G_i^s = 32$, $x_i^s = 68$.</p>' +
      '$$u_i^s = 2 \\cdot 68 + 16 \\cdot 8 = 264 > 248$$' +
      '<p>Auch hier ist das Angebot <strong>nicht effizient</strong>, da $G = 16 < G^s = 64$.</p>',
    solutionEn:
      '<p><strong>1.</strong> Samuelson condition: $\\sum_i \\frac{\\partial u_i / \\partial G}{\\partial u_i / \\partial x_i} = MC_G$.</p>' +
      '$$\\frac{2/\\sqrt{G}}{2} + \\frac{2/\\sqrt{G}}{2} = 1 \\Rightarrow \\frac{2}{\\sqrt{G}} = 1 \\Rightarrow G^s = 4$$' +
      '<p>Since both are identical: $G_i^s = 2$, $x_i^s = 98$.</p>' +
      '$$u_i = 2 \\cdot 98 + 4 \\cdot 2 = 204, \\quad WF = 408$$' +
      '<p><strong>2.</strong> Individual utility maximization:</p>' +
      '$$\\max_{G_i} u_i = 2(100 - G_i) + 4\\sqrt{G_i + \\bar{G}_j}$$' +
      '$$\\frac{\\partial u_i}{\\partial G_i} = -2 + \\frac{2}{\\sqrt{G_i + \\bar{G}_j}} = 0 \\Rightarrow G_i^* = 1 - \\bar{G}_j$$' +
      '<p>In the Nash equilibrium ($G_i = G_j$): $G_i^* = \\frac{1}{2}$, $G = 1 < G^s = 4$.</p>' +
      '$$x_i^* = 99.5, \\quad u_i = 2 \\cdot 99.5 + 4 \\cdot 1 = 203 < 204$$' +
      '<p>The public good supply is <strong>not efficient</strong> (free rider problem).</p>' +
      '<p><strong>3.</strong> New utility function: $u_i = 2x_i + 16\\sqrt{G}$.</p>' +
      '$$\\frac{\\partial u_i}{\\partial G_i} = -2 + \\frac{8}{\\sqrt{G_i + \\bar{G}_j}} = 0 \\Rightarrow G_i^* = 16 - \\bar{G}_j$$' +
      '<p>In the Nash eq.: $G_i^* = 8$, $G = 16$, $x_i = 92$.</p>' +
      '$$u_i = 2 \\cdot 92 + 16 \\cdot 4 = 248$$' +
      '<p>Samuelson condition: $\\frac{2 \\cdot 8/\\sqrt{G}}{2} = 1 \\Rightarrow G^s = 64$, $G_i^s = 32$, $x_i^s = 68$.</p>' +
      '$$u_i^s = 2 \\cdot 68 + 16 \\cdot 8 = 264 > 248$$' +
      '<p>Here too, the supply is <strong>not efficient</strong>, since $G = 16 < G^s = 64$.</p>',
    solutionSource: 'official',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Übung 7 – Asymmetrische Information  (4 Aufgaben)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'es7-1',
    subjectId: 'asymmetrische-info',
    titleDe: 'Adverse Selektion auf dem Versicherungsmarkt',
    titleEn: 'Adverse Selection in the Insurance Market',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 7',
    type: 'freeform',
    bodyDe:
      '<p>Im Folgenden schauen wir uns einen Versicherungsmarkt mit adverser Selektion an. Diese tritt dann auf, wenn die Versicherungsnehmer:innen besser über das Risiko eines Versicherungsfalls informiert sind als die Versicherungsfirma. Ziel ist es, zu verstehen, wie sich asymmetrische Information auf das Angebot von Versicherungsunternehmen auswirkt und inwiefern Versicherte davon profitieren oder Verluste erleiden.</p>' +
      '<p>Hier widmen wir uns dem Beispiel einer Zahnzusatzversicherung. Nehmen wir an, es gibt zwei Gruppen von Personen, die komplett identisch sind, bis auf ihr Risiko, Zahnprobleme zu bekommen (eine Gruppe putzt z.\u202FB. häufiger Zähne als die andere). Gruppe $L$ bekommt mit Wahrscheinlichkeit $p_L = 0{,}2$ Zahnprobleme, und Gruppe $H$ mit $p_H = 0{,}4$. Die Hälfte der Bevölkerung gehört zu Gruppe $L$, die andere zu $H$. Im Fall von Zahnproblemen müssen beide Gruppen den gleichen Betrag $Z = 500$ für die Behandlung bezahlen. Beide Gruppen haben dasselbe Anfangsvermögen $y_0 = 1000$. Personen beider Gruppen sind risikoavers und haben dieselbe Nutzenfunktion</p>' +
      '<p>$$w(y) = \\frac{y^{1-\\sigma}}{1-\\sigma} \\quad \\text{wobei } \\sigma = 2$$</p>' +
      '<p>$$\\Leftrightarrow \\quad w(y) = -\\frac{1}{y}$$</p>' +
      '<p>Versicherungen konkurrieren im perfekten Wettbewerb. Sie bieten identische Policen an, bei welchen die Versicherungsnehmer:innen eine Prämie $P$ zahlen können, um im Fall von Zahnproblemen $X$ zurückzuerhalten. Wenn sie die Versicherung wählen, sieht ihr Einkommen wie folgt aus:</p>' +
      '<p>$$Y_G = y_0 - P$$</p>' +
      '<p>$$Y_B = y_0 - Z + X - P,$$</p>' +
      '<p>wobei $B$ (bad) für die Situation mit Zahnproblemen und $G$ (good) für die Situation ohne Zahnprobleme steht. Aufgrund des vollständigen Wettbewerbs machen die Versicherungen keine Gewinne und zahlen die vollständigen Kosten der Behandlung zurück, sodass $X = Z = 500$.</p>' +
      '<p>Nehmen Sie zunächst an, dass die Versicherungsunternehmen die (Risiko-)Gruppen unterscheiden können.</p>' +
      '<ol>' +
      '<li>Wie lauten die Prämien $P_L$, $P_H$, welche die beiden Gruppen zahlen müssten? (Hinweis: Stellen Sie die Gleichung für den erwarteten Gewinn eines Versicherungsunternehmens pro Police $E[\\pi_i]$ auf. Diese Gewinne sind aufgrund des vollständigen Wettbewerbs gleich 0.)</li>' +
      '<li>Wie hoch sind das erwartete Vermögen und der erwartete Nutzen der Personen in den beiden Gruppen? (Hinweis: Die Prämien sind $P_L = 100$, $P_H = 200$.)</li>' +
      '</ol>' +
      '<p>Nehmen Sie nun an, dass die Versicherungen die Gruppen nicht unterscheiden können. Die Versicherungen können daher nur <strong>eine</strong> Police anbieten.</p>' +
      '<ol start="3">' +
      '<li>Berechnen Sie die durchschnittliche Wahrscheinlichkeit für einen Versicherungsfall.</li>' +
      '<li>Wie hoch muss die Versicherungsprämie sein? Vergleichen Sie den neuen Nutzen von Personen der beiden Gruppen. (Hinweis: Gehen Sie wie bei Teilaufgabe 1 vor. Das Ergebnis von 3. ist $3/10$.)</li>' +
      '</ol>',
    bodyEn:
      '<p>In the following, we examine an insurance market with adverse selection. This occurs when the policyholders are better informed about the risk of a claim than the insurance company. The goal is to understand how asymmetric information affects the supply of insurance companies and to what extent insured persons benefit or suffer losses.</p>' +
      '<p>Here we consider the example of supplementary dental insurance. Assume there are two groups of persons who are completely identical, except for their risk of developing dental problems (one group brushes their teeth more frequently than the other, for example). Group $L$ develops dental problems with probability $p_L = 0.2$, and group $H$ with $p_H = 0.4$. Half of the population belongs to group $L$, the other half to $H$. In case of dental problems, both groups must pay the same amount $Z = 500$ for treatment. Both groups have the same initial wealth $y_0 = 1000$. Persons in both groups are risk-averse and have the same utility function</p>' +
      '<p>$$w(y) = \\frac{y^{1-\\sigma}}{1-\\sigma} \\quad \\text{where } \\sigma = 2$$</p>' +
      '<p>$$\\Leftrightarrow \\quad w(y) = -\\frac{1}{y}$$</p>' +
      '<p>Insurers compete in perfect competition. They offer identical policies where policyholders can pay a premium $P$ to receive $X$ back in case of dental problems. If they choose insurance, their income is as follows:</p>' +
      '<p>$$Y_G = y_0 - P$$</p>' +
      '<p>$$Y_B = y_0 - Z + X - P,$$</p>' +
      '<p>where $B$ (bad) denotes the situation with dental problems and $G$ (good) the situation without. Due to perfect competition, insurers make no profits and reimburse the full treatment costs, so $X = Z = 500$.</p>' +
      '<p>First assume that the insurance companies can distinguish the (risk) groups.</p>' +
      '<ol>' +
      '<li>What are the premiums $P_L$, $P_H$ that the two groups would have to pay? (Hint: Set up the equation for the expected profit of an insurance company per policy $E[\\pi_i]$. These profits are zero due to perfect competition.)</li>' +
      '<li>How high are the expected wealth and the expected utility of persons in both groups? (Hint: The premiums are $P_L = 100$, $P_H = 200$.)</li>' +
      '</ol>' +
      '<p>Now assume that the insurers cannot distinguish the groups. The insurers can therefore only offer <strong>one</strong> policy.</p>' +
      '<ol start="3">' +
      '<li>Calculate the average probability of a claim.</li>' +
      '<li>How high must the insurance premium be? Compare the new utility of persons in both groups. (Hint: Proceed as in sub-task 1. The result of 3. is $3/10$.)</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Erwarteter Gewinn einer Versicherung pro Police:</p>' +
      '$$E[\\pi_i] = p_i(P_i - X) + (1-p_i)P_i = P_i - p_i \\cdot 500 = 0$$' +
      '$$\\Rightarrow P_i = p_i \\cdot 500$$' +
      '$$P_L = 0{,}2 \\cdot 500 = 100, \\quad P_H = 0{,}4 \\cdot 500 = 200$$' +
      '<p><strong>2.</strong> Erwartetes Vermögen mit Versicherung: $E[y_i^V] = 1000 - P_i$.</p>' +
      '$$E[y_L^V] = 900, \\quad E[y_H^V] = 800$$' +
      '$$u(E[y_L^V]) = -\\frac{1}{900} \\approx -0{,}00111$$' +
      '$$u(E[y_H^V]) = -\\frac{1}{800} = -0{,}00125$$' +
      '<p>Gruppe L hat höheres erwartetes Vermögen und höheren Nutzen.</p>' +
      '<p><strong>3.</strong> Durchschnittliche Wahrscheinlichkeit:</p>' +
      '$$\\bar{p} = \\frac{1}{2} \\cdot p_L + \\frac{1}{2} \\cdot p_H = \\frac{1}{2} \\cdot \\frac{1}{5} + \\frac{1}{2} \\cdot \\frac{2}{5} = \\frac{3}{10}$$' +
      '<p><strong>4.</strong> $P = \\bar{p} \\cdot 500 = \\frac{3}{10} \\cdot 500 = 150$.</p>' +
      '$$E[y_L^V] = E[y_H^V] = 1000 - 150 = 850$$' +
      '$$u(850) = -\\frac{1}{850} \\approx -0{,}001176$$' +
      '<p>Gruppe H ist bessergestellt (vorher $-0{,}00125$, jetzt $-0{,}001176$), Gruppe L ist schlechtergestellt (vorher $-0{,}00111$). Die Niedrigrisiko-Gruppe subventioniert die Hochrisiko-Gruppe.</p>',
    solutionEn:
      '<p><strong>1.</strong> Expected profit of an insurer per policy:</p>' +
      '$$E[\\pi_i] = p_i(P_i - X) + (1-p_i)P_i = P_i - p_i \\cdot 500 = 0$$' +
      '$$\\Rightarrow P_i = p_i \\cdot 500$$' +
      '$$P_L = 0.2 \\cdot 500 = 100, \\quad P_H = 0.4 \\cdot 500 = 200$$' +
      '<p><strong>2.</strong> Expected wealth with insurance: $E[y_i^V] = 1000 - P_i$.</p>' +
      '$$E[y_L^V] = 900, \\quad E[y_H^V] = 800$$' +
      '$$u(E[y_L^V]) = -\\frac{1}{900} \\approx -0.00111$$' +
      '$$u(E[y_H^V]) = -\\frac{1}{800} = -0.00125$$' +
      '<p>Group L has higher expected wealth and higher utility.</p>' +
      '<p><strong>3.</strong> Average probability:</p>' +
      '$$\\bar{p} = \\frac{1}{2} \\cdot p_L + \\frac{1}{2} \\cdot p_H = \\frac{1}{2} \\cdot \\frac{1}{5} + \\frac{1}{2} \\cdot \\frac{2}{5} = \\frac{3}{10}$$' +
      '<p><strong>4.</strong> $P = \\bar{p} \\cdot 500 = \\frac{3}{10} \\cdot 500 = 150$.</p>' +
      '$$E[y_L^V] = E[y_H^V] = 1000 - 150 = 850$$' +
      '$$u(850) = -\\frac{1}{850} \\approx -0.001176$$' +
      '<p>Group H is better off (before $-0.00125$, now $-0.001176$), Group L is worse off (before $-0.00111$). The low-risk group subsidizes the high-risk group.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es7-2',
    subjectId: 'asymmetrische-info',
    titleDe: 'Signale auf dem Arbeitsmarkt',
    titleEn: 'Signals in the Labor Market',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 7',
    type: 'freeform',
    bodyDe:
      '<p>Asymmetrische Information spielt auf dem Arbeitsmarkt eine wichtige Rolle. Viele persönliche Eigenschaften wie Selbstorganisation oder Konzentrationsfähigkeit erhöhen die individuelle Produktivität, sind für Firmen jedoch nur schwer durch Bewerbungsgespräche abzuwerten. Wir betrachten daher in einem einfachen Modell, wie Arbeitnehmer:innen mithilfe eines Studiums den potenziellen Arbeitgeber:innen signalisieren können, wie produktiv sie sind. Ziel ist es, nachzuvollziehen, inwiefern asymmetrische Information Studienentscheidungen und Löhne beeinflusst.</p>' +
      '<p>Wir davon aus, dass jeweils die Hälfte der Bevölkerung entweder eine hohe ($q_h$) oder eine niedrige individuelle Produktivität ($q_l$) hat. Die gesamte Bevölkerung und auch die Unternehmen kennen diese Verteilung. Firmen stellen nur eine Person ein, stehen in vollständigem Wettbewerb miteinander, und zahlen den Arbeitnehmer:innen ein Gehalt, das von der produzierten Menge abhängt. Der Lohn hängt somit vom Umsatz, und daher indirekt von der individuellen Produktivität ab:</p>' +
      '<p>$$w_j = f(q(y_j)), \\quad j \\in \\{h, l\\}$$</p>' +
      '<p>Per Annahme erhalten Arbeitnehmer:innen mit hoher Produktivität einen Lohn $w_h = q(y_h) = 250.000$\u202F€, und solche mit niedriger Produktivität $w_l = q(y_l) = 125.000$\u202F€. Aufgrund des vollständigen Wettbewerbs entspricht der Lohn dem gesamten Umsatz der Firmen, sodass sie Nullgewinne erzielen. Die Löhne werden vor Arbeitsbeginn vertraglich festgelegt, und Firmen können nicht von den Verträgen abweichen.</p>' +
      '<p>Des Weiteren können Arbeitnehmer:innen studieren. Das Studium an sich erhöht die Produktivität der Individuen nicht, aber die beiden Gruppen haben unterschiedliche Ausbildungskosten</p>' +
      '<p>$$C_h = 100.000\\text{\u202F€}$$</p>' +
      '<p>$$C_l = 200.000\\text{\u202F€}$$</p>' +
      '<p>Arbeitnehmer:innen mit hoher Produktivität fällt die Ausbildung leichter, und sie haben daher geringere Ausbildungskosten. Wenn Firmen den Ausbildungsstatus der Personen feststellen können, bezahlen sie im (Unterscheidungs-) Gleichgewicht allen Personen ihr Grenzprodukt. Arbeitnehmer:innen mit Studium erhalten den hohen Lohn $w_h$, die ohne Studium $w_l$.</p>' +
      '<p>Gehen Sie zunächst davon aus, dass Firmen die Produktivität der Arbeitnehmer:innen erkennen können (symmetrische Information).</p>' +
      '<ol>' +
      '<li>Schließen Arbeitnehmer:innen der beiden Gruppen ein Studium ab? Wie lautet ihr Nettoeinkommen (Gehalt abzüglich Ausbildungskosten)?</li>' +
      '</ol>' +
      '<p>Gehen Sie nun davon aus, dass die Arbeitnehmer:innen über ihre Produktivität Bescheid wissen, die Firmen diese aber nicht beobachten können (asymmetrische Information).</p>' +
      '<ol start="2">' +
      '<li>Angenommen, die Universität ist geschlossen, weshalb niemand ein Studium abschließen kann. Es gibt also kein Produktivitätssignal. Welche Löhne bieten die Firmen den Arbeitnehmer:innen der beiden Gruppen an? Wie lauten ihr Nettoeinkommen? (Hinweise: Wir nehmen zur Vereinfachung an, dass erfolgsbasierte Löhne ausgeschlossen sind. Erwartete Produktivität spielt eine Rolle.)</li>' +
      '<li>Angenommen, Arbeitnehmer:innen können nun ein Studium abschließen und Firmen können den Abschluss überprüfen. Wer schließt ein Studium ab? (Hinweis: Bestimmen Sie die Nettoeinkommen der Arbeitnehmer:innen.)</li>' +
      '</ol>',
    bodyEn:
      '<p>Asymmetric information plays an important role in the labor market. Many personal traits such as self-organization or concentration ability increase individual productivity, but are difficult for firms to assess through job interviews. We therefore consider in a simple model how workers can use a university degree to signal their productivity to potential employers. The goal is to understand to what extent asymmetric information influences education decisions and wages.</p>' +
      '<p>We assume that half of the population has either high ($q_h$) or low individual productivity ($q_l$). The entire population and also the firms know this distribution. Firms hire only one person, compete in perfect competition with each other, and pay workers a salary that depends on the quantity produced. The wage thus depends on revenue, and therefore indirectly on individual productivity:</p>' +
      '<p>$$w_j = f(q(y_j)), \\quad j \\in \\{h, l\\}$$</p>' +
      '<p>By assumption, workers with high productivity receive a wage $w_h = q(y_h) = 250{,}000$\u202F€, and those with low productivity $w_l = q(y_l) = 125{,}000$\u202F€. Due to perfect competition, the wage equals the firm\'s total revenue, so they earn zero profits. Wages are contractually fixed before work begins, and firms cannot deviate from contracts.</p>' +
      '<p>Furthermore, workers can study. The degree itself does not increase the productivity of individuals, but the two groups have different education costs</p>' +
      '<p>$$C_h = 100{,}000\\text{\u202F€}$$</p>' +
      '<p>$$C_l = 200{,}000\\text{\u202F€}$$</p>' +
      '<p>Workers with high productivity find education easier, and therefore have lower education costs. If firms can verify the education status of persons, in the (separating) equilibrium they pay all persons their marginal product. Workers with a degree receive the high wage $w_h$, those without $w_l$.</p>' +
      '<p>First assume that firms can recognize the productivity of workers (symmetric information).</p>' +
      '<ol>' +
      '<li>Do workers in both groups complete a degree? What is their net income (salary minus education costs)?</li>' +
      '</ol>' +
      '<p>Now assume that workers know their own productivity, but firms cannot observe it (asymmetric information).</p>' +
      '<ol start="2">' +
      '<li>Suppose the university is closed, so nobody can complete a degree. There is therefore no productivity signal. What wages do firms offer workers in both groups? What is their net income? (Hints: We assume for simplicity that performance-based wages are excluded. Expected productivity plays a role.)</li>' +
      '<li>Suppose workers can now complete a degree and firms can verify the degree. Who completes a degree? (Hint: Determine the net incomes of the workers.)</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Da das Studium die Produktivität nicht beeinflusst und Firmen die Produktivität beobachten können, schließt niemand ein Studium ab. Nettoeinkommen:</p>' +
      '$$w_h = 250.000\\text{\u202F\\euro}, \\quad w_l = 125.000\\text{\u202F\\euro}$$' +
      '<p><strong>2.</strong> Ohne Produktivitätssignale bieten Firmen den erwarteten Lohn:</p>' +
      '$$w_i = \\frac{1}{2}w_l + \\frac{1}{2}w_h = \\frac{1}{2} \\cdot 125.000 + \\frac{1}{2} \\cdot 250.000 = 187.500\\text{\u202F\\euro}$$' +
      '<p>Personen mit niedriger Produktivität werden über, solche mit hoher Produktivität unter ihrem Grenzprodukt bezahlt.</p>' +
      '<p><strong>3.</strong> Hohe Produktivität:</p>' +
      '$$\\text{Mit Studium: } 250.000 - 100.000 = 150.000$$' +
      '$$\\text{Ohne Studium: } 125.000$$' +
      '$$\\Rightarrow \\text{Differenz: } +25.000 \\Rightarrow \\textbf{studiert}$$' +
      '<p>Niedrige Produktivität:</p>' +
      '$$\\text{Mit Studium: } 250.000 - 200.000 = 50.000$$' +
      '$$\\text{Ohne Studium: } 125.000$$' +
      '$$\\Rightarrow \\text{Differenz: } -75.000 \\Rightarrow \\textbf{studiert nicht}$$' +
      '<p>Die Signalwirkung der Ausbildung löst die asymmetrische Information auf: Für niedrig produktive Personen sind die Opportunitätskosten zu hoch, sodass sie sich gegen ein Studium entscheiden.</p>',
    solutionEn:
      '<p><strong>1.</strong> Since education does not affect productivity and firms can observe productivity, nobody completes a degree. Net income:</p>' +
      '$$w_h = 250{,}000\\text{\u202F\\euro}, \\quad w_l = 125{,}000\\text{\u202F\\euro}$$' +
      '<p><strong>2.</strong> Without productivity signals, firms offer the expected wage:</p>' +
      '$$w_i = \\frac{1}{2}w_l + \\frac{1}{2}w_h = \\frac{1}{2} \\cdot 125{,}000 + \\frac{1}{2} \\cdot 250{,}000 = 187{,}500\\text{\u202F\\euro}$$' +
      '<p>Low-productivity workers are paid above, high-productivity workers below their marginal product.</p>' +
      '<p><strong>3.</strong> High productivity:</p>' +
      '$$\\text{With degree: } 250{,}000 - 100{,}000 = 150{,}000$$' +
      '$$\\text{Without degree: } 125{,}000$$' +
      '$$\\Rightarrow \\text{Difference: } +25{,}000 \\Rightarrow \\textbf{studies}$$' +
      '<p>Low productivity:</p>' +
      '$$\\text{With degree: } 250{,}000 - 200{,}000 = 50{,}000$$' +
      '$$\\text{Without degree: } 125{,}000$$' +
      '$$\\Rightarrow \\text{Difference: } -75{,}000 \\Rightarrow \\textbf{does not study}$$' +
      '<p>The signaling effect of education resolves the asymmetric information: for low-productivity workers the opportunity costs are too high, so they decide against studying.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es7-3',
    subjectId: 'asymmetrische-info',
    titleDe: 'Moral Hazard auf dem Markt für Kredite',
    titleEn: 'Moral Hazard in the Credit Market',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 7',
    type: 'freeform',
    bodyDe:
      '<p>In dieser Aufgabe betrachten wir Firmenfinanzierung unter Moral Hazard. Ziel ist es, in einem einfachen Modell nachzuvollziehen, wie Moral Hazard zu Ineffizienz auf dem Kreditmarkt führt.</p>' +
      '<p>Um neue Projekte zu finanzieren, müssen sich Firmen Kapital in Höhe von $K = 1$ leihen. Dieses Kapital können sie in zwei verschiedene Projekte investieren: Ein gutes Projekt, welches eine Gesamtauszahlung von $G$ mit einer Wahrscheinlichkeit $\\pi_G$ erzielt, und ein schlechtes Projekt, welches eine Gesamtauszahlung von $B$ mit einer Wahrscheinlichkeit $\\pi_B$ erzielt. Wenn die Projekte nicht erfolgreich sind, erhalten die Firmen keine Auszahlung mit Wahrscheinlichkeit $(1 - \\pi_i)$, wobei $i \\in \\{G, B\\}$. Da sich die Firmen 100% ihres Kapitals leihen, können sie keine Verluste machen. Im schlechtesten Fall erhalten sie Nullgewinne.</p>' +
      '<p>Gute Projekte zeichnen sich durch ein geringes Risiko und eine positive erwartete Rendite aus: ihre erwartete Rendite übersteigt also das eingesetzte Kapital ($K$). Schlechte Projekte hingegen haben eine negative erwartete Rendite und weisen ein höheres Risiko auf, aber dafür haben sie eine höhere Auszahlung in einem Erfolgsfall. Da die Firmen das Projekt vollständig fremdfinanzieren, liegt das Risiko primär bei dem Kreditgeber. Formal ausgedrückt lautet diese Annahme mit $K = 1$:</p>' +
      '<p>$$\\pi_G G + (1 - \\pi_G) \\cdot 0 > 1 > \\pi_B B + (1 - \\pi_B) \\cdot 0 \\quad \\Rightarrow \\quad \\pi_G G > 1 > \\pi_B B$$</p>' +
      '<p>$$B > G > K = 1.$$</p>' +
      '<ol>' +
      '<li>Zeigen Sie, dass die Erfolgswahrscheinlichkeit vom guten Projekt größer ist als die vom schlechten Projekt. Das heißt, zeigen Sie, dass $\\pi_G > \\pi_B$ gilt.</li>' +
      '</ol>' +
      '<p>Firmen sind Kreditnehmer, während Banken als Kreditgeber auftreten. Letztere können weder sehen, für welches Projekt sich die Firmen entscheiden, noch können sie die Gesamtauszahlung beobachten. Kreditgeber leihen den Firmen das Kapital $K = 1$ nur dann, wenn diese versprechen, ihnen $R$ zurückzuzahlen. Annahme gemäß können Firmen nur im Erfolgsfall $R$ zurückzahlen. Ansonsten erhält der Kreditgeber keine Rückzahlung und macht einen Verlust in Höhe von $K = 1$. Es muss gelten:</p>' +
      '<p>$$B > G > R > K = 1.$$</p>' +
      '<p>Abschließend bestimmen wir den erwarteten Gewinn $H$ der Firmen unter Berücksichtigung der Kreditrückzahlung</p>' +
      '<p>$$E[H_G] = \\pi_G(G - R) = \\pi_G G - \\pi_G R$$</p>' +
      '<p>$$E[H_B] = \\pi_B(B - R) = \\pi_B B - \\pi_B R$$</p>' +
      '<ol start="2">' +
      '<li>Zeichnen Sie den erwarteten Gewinn des schlechten und des guten Projekts in Abhängigkeit der Rückzahlung $R$ in ein Koordinatensystem. Benutzen Sie folgende Zahlenwerte für die Parameter: $\\pi_G = 0{,}5$, $\\pi_B = 0{,}1$, $G = 3$, $B = 6$, $K = 1{,}5$. Berechnen Sie den Schnittpunkt der beiden Geraden. Was sagen der Graph und der Schnittpunkt über die Projektauswahl der Firmen in Abhängigkeit von $R$ aus? Erläutern Sie.</li>' +
      '<li>Berechnen Sie den allgemeinen Wert des Rückzahlungsbetrags $R_0$, bis zu welchem die Firmen das gute Projekt bevorzugen. Benutzen Sie nicht die Parameter von zuvor, sondern die allgemeinen Variablen. Was passiert, wenn der Wert der Auszahlung $B$ des schlechten Projektes steigt? (Hinweis: Starten Sie mit dem erwarteten Gewinn der Projekte. Verwenden Sie die partielle Ableitung für den zweiten Teil der Aufgabe.)</li>' +
      '</ol>' +
      '<p>Aus Sicht eines Kreditgebers hängt die Rückzahlungswahrscheinlichkeit vom vereinbarten Rückzahlungsbetrag $R$ und vom kritischen Wert $R_0$ ab. Nur wenn $R \\leq R_0$, entscheidet sich die Firma für das gute Projekt.</p>' +
      '<p>$$\\pi(R) = \\begin{cases} \\pi_G, & \\text{wenn } R \\leq R_0 \\\\ \\pi_B, & \\text{wenn } R > R_0 \\end{cases}$$</p>' +
      '<p>Das heißt auch, dass der erwartete Rückzahlungsbetrag $E[R] = \\pi(R) \\cdot R$ von $R_0$ abhängt.</p>' +
      '<ol start="4">' +
      '<li>Im Gleichgewicht gilt $\\pi(R)R = 1$. Begründen Sie, warum das der Fall ist. (Hinweis: Zeigen Sie, dass die schlechten Projekte des Kreditgebers Verluste bringen $\\pi_B R_0 < 1$. Was würde passieren, wenn $\\pi_B R_0 < 1$? Nehmen Sie an, dass vollständiger Wettbewerb unter den Banken herrscht.)</li>' +
      '</ol>',
    bodyEn:
      '<p>In this exercise we consider corporate financing under moral hazard. The goal is to understand in a simple model how moral hazard leads to inefficiency in the credit market.</p>' +
      '<p>To finance new projects, firms must borrow capital of $K = 1$. They can invest this capital in two different projects: A good project yielding a total payoff of $G$ with probability $\\pi_G$, and a bad project yielding a total payoff of $B$ with probability $\\pi_B$. If the projects are unsuccessful, firms receive no payoff with probability $(1 - \\pi_i)$, where $i \\in \\{G, B\\}$. Since firms borrow 100% of their capital, they cannot make losses. In the worst case they receive zero profits.</p>' +
      '<p>Good projects are characterized by low risk and a positive expected return: their expected return exceeds the invested capital ($K$). Bad projects, on the other hand, have a negative expected return and higher risk, but they have a higher payoff in case of success. Since firms fully debt-finance the project, the risk lies primarily with the lender. Formally, this assumption with $K = 1$ reads:</p>' +
      '<p>$$\\pi_G G + (1 - \\pi_G) \\cdot 0 > 1 > \\pi_B B + (1 - \\pi_B) \\cdot 0 \\quad \\Rightarrow \\quad \\pi_G G > 1 > \\pi_B B$$</p>' +
      '<p>$$B > G > K = 1.$$</p>' +
      '<ol>' +
      '<li>Show that the success probability of the good project is greater than that of the bad project. That is, show that $\\pi_G > \\pi_B$ holds.</li>' +
      '</ol>' +
      '<p>Firms are borrowers while banks act as lenders. The latter can neither see which project the firms choose, nor can they observe the total payoff. Lenders lend the capital $K = 1$ to firms only if they promise to repay $R$. By assumption, firms can only repay $R$ in case of success. Otherwise the lender receives no repayment and makes a loss of $K = 1$. It must hold:</p>' +
      '<p>$$B > G > R > K = 1.$$</p>' +
      '<p>Finally, we determine the expected profit $H$ of firms taking into account the loan repayment</p>' +
      '<p>$$E[H_G] = \\pi_G(G - R) = \\pi_G G - \\pi_G R$$</p>' +
      '<p>$$E[H_B] = \\pi_B(B - R) = \\pi_B B - \\pi_B R$$</p>' +
      '<ol start="2">' +
      '<li>Plot the expected profit of the bad and the good project as a function of the repayment $R$ in a coordinate system. Use the following parameter values: $\\pi_G = 0.5$, $\\pi_B = 0.1$, $G = 3$, $B = 6$, $K = 1.5$. Calculate the intersection of the two lines. What do the graph and the intersection tell us about the project choice of firms depending on $R$? Explain.</li>' +
      '<li>Calculate the general value of the repayment amount $R_0$ up to which firms prefer the good project. Do not use the specific parameters, but the general variables. What happens when the payoff value $B$ of the bad project increases? (Hint: Start with the expected profit of the projects. Use the partial derivative for the second part of the exercise.)</li>' +
      '</ol>' +
      '<p>From a lender\'s perspective, the repayment probability depends on the agreed repayment amount $R$ and the critical value $R_0$. Only when $R \\leq R_0$ does the firm choose the good project.</p>' +
      '<p>$$\\pi(R) = \\begin{cases} \\pi_G, & \\text{if } R \\leq R_0 \\\\ \\pi_B, & \\text{if } R > R_0 \\end{cases}$$</p>' +
      '<p>This also means that the expected repayment amount $E[R] = \\pi(R) \\cdot R$ depends on $R_0$.</p>' +
      '<ol start="4">' +
      '<li>In equilibrium, $\\pi(R)R = 1$ holds. Explain why this is the case. (Hint: Show that bad projects cause losses for the lender $\\pi_B R_0 < 1$. What would happen if $\\pi_B R_0 < 1$? Assume that there is perfect competition among banks.)</li>' +
      '</ol>',
    solutionDe:
      '<p><strong>1.</strong> Gegeben: $\\pi_G G > 1 > \\pi_B B$ und $B > G$.</p>' +
      '<p>Da $\\pi_G G > \\pi_B B$ und $G < B$, muss $\\pi_G > \\pi_B$ gelten. Wenn die Auszahlung im Erfolgsfall beim guten Projekt kleiner ist, muss die Erfolgswahrscheinlichkeit höher sein, damit der Erwartungswert höher bleibt.</p>' +
      '<p><strong>2.</strong> Mit $\\pi_G = 0{,}5$, $\\pi_B = 0{,}1$, $G = 3$, $B = 6$:</p>' +
      '$$E[\\Pi_G] = 0{,}5(3 - R) = 1{,}5 - 0{,}5R$$' +
      '$$E[\\Pi_B] = 0{,}1(6 - R) = 0{,}6 - 0{,}1R$$' +
      '<p>Schnittpunkt:</p>' +
      '$$1{,}5 - 0{,}5R = 0{,}6 - 0{,}1R \\Rightarrow 0{,}4R = 0{,}9 \\Rightarrow R_C = 2{,}25$$' +
      '<p>Für $R < R_C$: Firmen wählen das gute Projekt. Für $R > R_C$: Firmen wählen das schlechte Projekt (Moral Hazard). Der erwartete Gewinn des guten Projekts sinkt schneller in $R$, da $\\pi_G > \\pi_B$.</p>' +
      '<p><strong>3.</strong> Allgemein: $E[\\Pi_G] > E[\\Pi_B]$:</p>' +
      '$$\\pi_G G - \\pi_G R > \\pi_B B - \\pi_B R$$' +
      '$$\\Rightarrow R_C = \\frac{\\pi_G G - \\pi_B B}{\\pi_G - \\pi_B}$$' +
      '<p>Einfluss von $B$: $\\frac{\\partial R_C}{\\partial B} = -\\frac{\\pi_B}{\\pi_G - \\pi_B} < 0$. Je höher die Auszahlung des schlechten Projekts, desto kleiner muss $R$ sein, damit Firmen das gute Projekt wählen. Moral Hazard steigt mit $B$.</p>' +
      '<p><strong>4.</strong> Da $B > G \\geq R$ und $\\pi_B B < 1$: $\\pi_B R < \\pi_B B < 1$. Schlechte Projekte bringen den Kreditgebern Verluste. Kreditgeber finanzieren daher nur gute Projekte ($R \\leq R_C$). Unter vollständigem Wettbewerb machen Banken Nullgewinne: $\\pi(R) \\cdot R = 1$, wobei $\\pi(R) = \\pi_G$ für $R \\leq R_C$.</p>',
    solutionEn:
      '<p><strong>1.</strong> Given: $\\pi_G G > 1 > \\pi_B B$ and $B > G$.</p>' +
      '<p>Since $\\pi_G G > \\pi_B B$ and $G < B$, it must be that $\\pi_G > \\pi_B$. If the payoff of the good project in case of success is smaller, the success probability must be higher to maintain a higher expected value.</p>' +
      '<p><strong>2.</strong> With $\\pi_G = 0.5$, $\\pi_B = 0.1$, $G = 3$, $B = 6$:</p>' +
      '$$E[\\Pi_G] = 0.5(3 - R) = 1.5 - 0.5R$$' +
      '$$E[\\Pi_B] = 0.1(6 - R) = 0.6 - 0.1R$$' +
      '<p>Intersection:</p>' +
      '$$1.5 - 0.5R = 0.6 - 0.1R \\Rightarrow 0.4R = 0.9 \\Rightarrow R_C = 2.25$$' +
      '<p>For $R < R_C$: firms choose the good project. For $R > R_C$: firms choose the bad project (moral hazard). The expected profit of the good project decreases faster in $R$ since $\\pi_G > \\pi_B$.</p>' +
      '<p><strong>3.</strong> In general: $E[\\Pi_G] > E[\\Pi_B]$:</p>' +
      '$$\\pi_G G - \\pi_G R > \\pi_B B - \\pi_B R$$' +
      '$$\\Rightarrow R_C = \\frac{\\pi_G G - \\pi_B B}{\\pi_G - \\pi_B}$$' +
      '<p>Effect of $B$: $\\frac{\\partial R_C}{\\partial B} = -\\frac{\\pi_B}{\\pi_G - \\pi_B} < 0$. The higher the payoff of the bad project, the smaller $R$ must be for firms to prefer the good project. Moral hazard increases with $B$.</p>' +
      '<p><strong>4.</strong> Since $B > G \\geq R$ and $\\pi_B B < 1$: $\\pi_B R < \\pi_B B < 1$. Bad projects cause losses for lenders. Lenders therefore only finance good projects ($R \\leq R_C$). Under perfect competition, banks make zero profits: $\\pi(R) \\cdot R = 1$, where $\\pi(R) = \\pi_G$ for $R \\leq R_C$.</p>',
    solutionSource: 'official',
  },
  {
    id: 'es7-4',
    subjectId: 'asymmetrische-info',
    titleDe: 'Handyladen Mitarbeiter',
    titleEn: 'Mobile Phone Store Employee',
    source: 'exercise-sheet',
    sourceLabel: 'Übung 7',
    type: 'freeform',
    bodyDe:
      '<p>Firmen können Arbeitnehmer:innen nicht dazu zwingen, sich bei der Arbeit anzustrengen. Anstrengung führt aber meistens zu besseren Ergebnissen. In dieser Aufgabe untersuchen wir mit Hilfe eines einfachen Principal-Agent Modells, wie monetäre Anreizsysteme genutzt werden können, um Arbeitnehmer:innen zur Anstrengung zu motivieren.</p>' +
      '<p>Celine besitzt einen kleinen Handyladen in einem Einkaufszentrum. Im Laden arbeitet Johannes als einziger Mitarbeiter. Der tägliche Gewinn vom Laden hängt davon ab, ob Johannes sich anstrengt oder nicht. Wenn er sich anstrengt, erzielt der Laden 1000\u202F€ Gewinn mit einer Wahrscheinlichkeit von 80%, und 500\u202F€ Gewinn mit einer Wahrscheinlichkeit von 20%. Wenn Johannes sich keine Mühe gibt, erzielt der Laden 500\u202F€ Gewinn mit einer Wahrscheinlichkeit von 80%, und 1000\u202F€ Gewinn mit einer Wahrscheinlichkeit von 20%. Der Gewinn berücksichtigt hier variable und fixe Kosten des Ladens (z.\u202FB. Miete, Materialkosten), nicht aber Johannes Gehalt.</p>' +
      '<p>Johannes strengt sich nicht gerne an und tut das deswegen nur, wenn er mindestens 150\u202F€ pro Tag erhält. Mit anderen Worten, Anstrengung kostet ihn 150\u202F€. Sein Nettonutzen entspricht seinem Gehalt abzüglich der Kosten für Anstrengung.</p>' +
      '<p>Es gibt keinen Mindestlohn, kein Arbeitslosengeld, Celine kann Johannes jederzeit entlassen, und dieser kann auch jederzeit kündigen.</p>' +
      '<p>Außerdem nehmen wir an, dass Johannes sich immer für eine Aktion entscheidet, die den Handyladen besserstellt wenn er sonst indifferent ist. Bei einem Lohn von 0\u202F€ ist er z.\u202FB. indifferent zwischen Arbeiten und zuhause Bleiben, und wir nehmen an, dass er arbeitet.</p>' +
      '<ol>' +
      '<li>Gehen Sie davon aus, dass Celine eine Kamera im Laden installiert hat und daher erkennen kann, ob Johannes sich anstrengt oder nicht. Welches Gehalt pro Tag zahlt sie ihm? Wie hoch ist der erwartete Gewinn des Handyladens? Wie hoch ist Johannes erwarteter Nettonutzen?</li>' +
      '<li>Die Gewerbeaufsicht kontrolliert routinemäßig Celines Laden und entdeckt die illegale Überwachung von Johannes. Celine wird angewiesen, die Kamera wieder zu entfernen. Johannes ist ein pflichtbewusster Mensch: Wenn er genug Geld bekommt, strengt er sich auch an. Wie hoch muss Celine Johannes Tagesgehalt ansetzen, damit dieser sich anstrengt? Wie viel erwarteten Gewinn macht der Handyladen? Wie hoch ist Johannes erwarteter Nettonutzen?</li>' +
      '<li>Johannes stellt fest, dass er in der Situation der Teilaufgabe 2 auch dann sein Tagesgehalt erhält, wenn er sich nicht anstrengt, und dass Celine nicht erkennen kann, ob er sich anstrengt oder nicht. Celine muss daher den Vertrag anpassen und entwickelt ein System für erfolgsbasierte Entlohnung. So bietet sie Johannes nun zwei Gehälter an, die vom Gewinn des Ladens abhängen. Wie lauten die zwei Tarife? Wie hoch ist der erwartete Gewinn des Handyladens? Wie hoch ist Johannes erwarteter Nettonutzen?</li>' +
      '</ol>',
    bodyEn:
      '<p>Firms cannot force workers to exert effort on the job. However, effort usually leads to better results. In this exercise, we use a simple principal-agent model to examine how monetary incentive systems can be used to motivate workers to exert effort.</p>' +
      '<p>Celine owns a small mobile phone store in a shopping center. Johannes is the only employee in the store. The daily profit of the store depends on whether Johannes exerts effort or not. If he exerts effort, the store earns 1,000\u202F€ profit with a probability of 80%, and 500\u202F€ profit with a probability of 20%. If Johannes does not make an effort, the store earns 500\u202F€ profit with a probability of 80%, and 1,000\u202F€ profit with a probability of 20%. The profit here accounts for variable and fixed costs of the store (e.g., rent, material costs), but not Johannes\'s salary.</p>' +
      '<p>Johannes does not like to exert effort and only does so when he receives at least 150\u202F€ per day. In other words, effort costs him 150\u202F€. His net utility equals his salary minus the cost of effort.</p>' +
      '<p>There is no minimum wage, no unemployment benefits, Celine can fire Johannes at any time, and he can also quit at any time.</p>' +
      '<p>Furthermore, we assume that Johannes always chooses an action that benefits the store when he is otherwise indifferent. At a wage of 0\u202F€, he is e.g. indifferent between working and staying home, and we assume that he works.</p>' +
      '<ol>' +
      '<li>Assume that Celine has installed a camera in the store and can therefore tell whether Johannes exerts effort or not. What daily wage does she pay him? What is the expected profit of the store? What is Johannes\'s expected net utility?</li>' +
      '<li>The trade inspection routinely inspects Celine\'s store and discovers the illegal surveillance of Johannes. Celine is instructed to remove the camera. Johannes is a conscientious person: if he receives enough money, he will also exert effort. How high must Celine set Johannes\'s daily wage so that he exerts effort? How much expected profit does the store make? What is Johannes\'s expected net utility?</li>' +
      '<li>Johannes realizes that in the situation of sub-task 2, he receives his daily wage even when he does not exert effort, and that Celine cannot tell whether he exerts effort or not. Celine must therefore adjust the contract and develops a system for performance-based compensation. She now offers Johannes two salary levels that depend on the store\'s profit. What are the two tariffs? What is the expected profit of the store? What is Johannes\'s expected net utility?</li>' +
      '</ol>',
    solutionDe:
      '<p>Im Folgenden benutzen wir $e$ als Variable für Johannes Anstrengung. Wenn $e = 1$, dann strengt sich Johannes an, wenn $e = 0$ dann strengt er sich nicht an.</p>' +
      '<h3>1. Beobachtbare Anstrengung (Kamera)</h3>' +
      '<p>Celines Ziel ist es, ihren Gewinn zu maximieren. Wir betrachten zunächst den erwarteten Gewinn ohne Johannes Gehalt:</p>' +
      '<p>J. strengt sich an:</p>' +
      '$$E[\\pi(e=1)] = \\frac{80}{100} \\cdot 1000 + \\frac{20}{100} \\cdot 500 = 900$$' +
      '<p>J. strengt sich nicht an:</p>' +
      '$$E[\\pi(e=0)] = \\frac{20}{100} \\cdot 1000 + \\frac{80}{100} \\cdot 500 = 600$$' +
      '<p>Wenn Johannes sich anstrengt, ist der erwartete Gewinn höher als wenn er sich nicht anstrengt. Celine profitiert von Johannes Anstrengung, solange sein Gehalt nicht zu hoch ist. Da $E[\\pi(e=1)] - E[\\pi(e=0)] = 300$, ist Celine grundsätzlich bereit bis zu 300\u202F€ dafür zu bezahlen, dass sich Johannes anstrengt $\\Rightarrow w(e=1) \\leq 300$.</p>' +
      '<p>Da Celine ihren Gewinn maximiert, zahlt sie Johannes gerade so viel, dass dieser sich anstrengt. Johannes verlangt mindestens 150\u202F€, um sich anzustrengen. Somit zahlt Celine ihm $w^*(e=1) = 150$\u202F€.</p>' +
      '<p><strong>Johannes Nettonutzen ist 0</strong> und der <strong>erwartete Gewinn ist 900\u202F€</strong> beziehungsweise <strong>750\u202F€ nach Abzug des Gehalts</strong>.</p>' +
      '<h3>2. Ohne Kamera, pflichtbewusster Johannes</h3>' +
      '<p>In dieser Situation kann Celine ausnutzen, dass Johannes pflichtbewusst ist. Wenn sie ihm 150\u202F€ zahlt, weiß sie, dass er sich anstrengt. Wir erhalten also <strong>dieselbe Lösung wie zuvor</strong>. Johannes Nettonutzen beträgt <strong>0</strong>, und der erwartete Gewinn liegt bei <strong>900\u202F€ beziehungsweise 750\u202F€ nach Abzug des Gehalts</strong>.</p>' +
      '<p>Ohne Johannes Pflichtbewusstsein würde es Celine nicht gelingen, ihn mit nur einem vorher festgelegten Gehalt zur Anstrengung zu bewegen. Da sie nicht beobachten kann, ob Johannes sich anstrengt, würde er das in keinem Fall tun, auch wenn das Gehalt höher als 150\u202F€ wäre. Auch der Gewinn gibt kein Indiz für Anstrengung; denn das schlechte Ergebnis von 500\u202F€ kann auch unter Anstrengung erzielt werden. Sie würde ihm also nur gerade so viel bezahlen, dass er überhaupt erscheint, also 0\u202F€.</p>' +
      '<h3>3. Erfolgsbasierte Entlohnung (Incentive-Compatible Pay)</h3>' +
      '<p>Der Handyladen kann pro Tag entweder 500\u202F€ oder 1000\u202F€ Gewinn machen. Celine kann Johannes also ein Angebot machen, in welchem sein Gehalt $w$ vom Tagesgewinn $\\pi$ abhängt:</p>' +
      '<p>$w_1 = w(\\pi = 500)$ und $w_2 = w(\\pi = 1000)$</p>' +
      '<p>In Aufgabe 1 haben wir festgestellt, dass Celine Johannes zu Anstrengung incentivieren möchte, solange sie ihm nicht mehr als 300\u202F€ zahlen muss. Generell versucht Celine immer den Lohn so niedrig wie möglich zu setzen, gegeben der Anreize die sie setzen möchte. Celines Ziel ist es also, den einen Lohn so zu setzen, dass Johannes sich anstrengt und den anderen so, dass er sich nicht anstrengt und dafür auch weniger entlohnt wird. Formal:</p>' +
      '$$300 \\geq w_2 > w_1 \\geq 0$$' +
      '<p>Damit Johannes zur Arbeit erscheint, muss Celine ihm mindestens 0\u202F€ bezahlen. Das ist Johannes <strong>Partizipationsbeschränkung (PB)</strong>. Damit Johannes sich anstrengt, muss er mindestens 150\u202F€ erhalten. Das ist seine <strong>Anreizkompatibilitätsbeschränkung (AB)</strong>. Da Johannes Lohn vom Gewinn abhängt, er aber nur die Wahrscheinlichkeit eines hohen Gewinns beeinflussen kann, müssen wir sein erwartetes Gehalt in der AB berücksichtigen. Formal haben wir:</p>' +
      '$$w_1 \\geq 0 \\qquad \\text{(PB)}$$' +
      '$$p(\\pi=1000|e=1) \\cdot w_2 + (1 - p(\\pi=1000|e=1)) \\cdot w_1 - 150 \\geq p(\\pi=1000|e=0) \\cdot w_2 + (1 - p(\\pi=1000|e=0)) \\cdot w_1 \\qquad \\text{(AB)}$$' +
      '$$\\Rightarrow 0{,}8 \\cdot w_2 + 0{,}2 \\cdot w_1 - 150 \\geq 0{,}2 \\cdot w_2 + 0{,}8 \\cdot w_1$$' +
      '<p>Die letzte Zeile ist die AB mit eingesetzten Zahlen. Auf der linken Seite der Gleichung haben wir Johannes erwarteten Lohn unter Anstrengung abzüglich seiner Kosten für Anstrengung. Auf der rechten Seite ist sein erwarteter Lohn ohne Anstrengung.</p>' +
      '<p>Wir wählen nun die optimalen Löhne $w_1^*$, $w_2^*$ die Celines Gewinn maximieren und die PB und AB erfüllen. Damit die PB erfüllt ist und $w_1$ möglichst klein ist, setzt Celine $w_1^* = 0$. Dieses Resultat können wir in die AB einsetzen und dann nach $w_2$ umstellen:</p>' +
      '$$0{,}8 \\cdot w_2 + 0{,}2 \\cdot 0 - 150 \\geq 0{,}2 \\cdot w_2 + 0{,}8 \\cdot 0$$' +
      '$$\\Leftrightarrow 0{,}6 \\cdot w_2 \\geq 150$$' +
      '$$\\Rightarrow w_2 \\geq \\frac{10}{6} \\cdot 150 = 250$$' +
      '<p>Da auch hier Celine nicht mehr zahlen möchte als nötig, wählt sie $w_2^* = 250$.</p>' +
      '<p>Im Optimum bietet Celine Johannes also $w_1^* = w(\\pi = 500) = 0$ und $w_2^* = w(\\pi = 1000) = 250$ an. Bei diesem Angebot zahlt Celine gerade genug, sodass Johannes Partizipationsbeschränkung und Anreizkompatibilitätsbeschränkung erfüllt sind und es sich für Johannes lohnt, sich anzustrengen.</p>' +
      '<p>Aus Teilaufgabe 1 wissen wir, dass Celine bessergestellt ist, wenn Johannes sich anstrengt ($w_2^* = 250 < 300$). Aber ist es auch für ihn besser sich anzustrengen? Durch die AB ist das gegeben:</p>' +
      '$$0{,}8 \\cdot 250 + 0{,}2 \\cdot 0 - 150 \\geq 0{,}2 \\cdot 250 + 0{,}8 \\cdot 0$$' +
      '$$\\Leftrightarrow 200 - 150 \\geq 50$$' +
      '$$\\Leftrightarrow 50 \\geq 50$$' +
      '<p>Johannes ist indifferent zwischen dem Lohn mit und ohne Anstrengung und entscheidet sich deswegen per Annahme für Anstrengung. <strong>Sein erwarteter Nutzen ist 50\u202F€</strong>.</p>' +
      '<p><strong>Celines erwarteter Gewinn:</strong></p>' +
      '$$\\pi(e=1, w_1=0, w_2=250) = \\frac{80}{100} \\cdot (1000 - 250) + \\frac{20}{100} \\cdot (500 - 0) = \\mathbf{700}$$',
    solutionEn:
      '<p>In the following, we use $e$ as a variable for Johannes\'s effort. When $e = 1$, Johannes exerts effort; when $e = 0$, he does not.</p>' +
      '<h3>1. Observable Effort (Camera)</h3>' +
      '<p>Celine\'s goal is to maximize her profit. We first consider the expected profit without Johannes\'s salary:</p>' +
      '<p>J. exerts effort:</p>' +
      '$$E[\\pi(e=1)] = \\frac{80}{100} \\cdot 1000 + \\frac{20}{100} \\cdot 500 = 900$$' +
      '<p>J. does not exert effort:</p>' +
      '$$E[\\pi(e=0)] = \\frac{20}{100} \\cdot 1000 + \\frac{80}{100} \\cdot 500 = 600$$' +
      '<p>When Johannes exerts effort, the expected profit is higher than when he does not. Celine benefits from Johannes\'s effort as long as his salary is not too high. Since $E[\\pi(e=1)] - E[\\pi(e=0)] = 300$, Celine is in principle willing to pay up to 300\u202F\u20AC for Johannes to exert effort $\\Rightarrow w(e=1) \\leq 300$.</p>' +
      '<p>Since Celine maximizes her profit, she pays Johannes just enough for him to exert effort. Johannes requires at least 150\u202F\u20AC to exert effort. Thus Celine pays him $w^*(e=1) = 150$\u202F\u20AC.</p>' +
      '<p><strong>Johannes\'s net utility is 0</strong> and the <strong>expected profit is 900\u202F\u20AC</strong>, or <strong>750\u202F\u20AC after deducting salary</strong>.</p>' +
      '<h3>2. Without Camera, Conscientious Johannes</h3>' +
      '<p>In this situation, Celine can exploit the fact that Johannes is conscientious. If she pays him 150\u202F\u20AC, she knows he will exert effort. We therefore obtain the <strong>same solution as before</strong>. Johannes\'s net utility is <strong>0</strong>, and the expected profit is <strong>900\u202F\u20AC, or 750\u202F\u20AC after deducting salary</strong>.</p>' +
      '<p>Without Johannes\'s conscientiousness, Celine would not be able to motivate him to exert effort with just a fixed salary. Since she cannot observe whether Johannes exerts effort, he would never do so, even if the salary were higher than 150\u202F\u20AC. The profit also provides no indication of effort, because the bad outcome of 500\u202F\u20AC can also occur under effort. She would therefore pay him just enough for him to show up at all, i.e., 0\u202F\u20AC.</p>' +
      '<h3>3. Performance-Based Pay (Incentive-Compatible)</h3>' +
      '<p>The store can earn either 500\u202F\u20AC or 1,000\u202F\u20AC profit per day. Celine can therefore make Johannes an offer where his salary $w$ depends on the daily profit $\\pi$:</p>' +
      '<p>$w_1 = w(\\pi = 500)$ and $w_2 = w(\\pi = 1000)$</p>' +
      '<p>From task 1, we established that Celine wants to incentivize Johannes to exert effort as long as she doesn\'t have to pay more than 300\u202F\u20AC. In general, Celine always tries to set wages as low as possible given the incentives she wants to create. Formally:</p>' +
      '$$300 \\geq w_2 > w_1 \\geq 0$$' +
      '<p>For Johannes to show up for work, Celine must pay him at least 0\u202F\u20AC. This is Johannes\'s <strong>participation constraint (PC)</strong>. For Johannes to exert effort, he must receive at least 150\u202F\u20AC. This is his <strong>incentive compatibility constraint (IC)</strong>. Since Johannes\'s wage depends on profit, but he can only influence the probability of a high profit, we must consider his expected wage in the IC. Formally:</p>' +
      '$$w_1 \\geq 0 \\qquad \\text{(PC)}$$' +
      '$$p(\\pi=1000|e=1) \\cdot w_2 + (1 - p(\\pi=1000|e=1)) \\cdot w_1 - 150 \\geq p(\\pi=1000|e=0) \\cdot w_2 + (1 - p(\\pi=1000|e=0)) \\cdot w_1 \\qquad \\text{(IC)}$$' +
      '$$\\Rightarrow 0.8 \\cdot w_2 + 0.2 \\cdot w_1 - 150 \\geq 0.2 \\cdot w_2 + 0.8 \\cdot w_1$$' +
      '<p>The last line is the IC with the numbers substituted in. On the left side we have Johannes\'s expected wage under effort minus his cost of effort. On the right side is his expected wage without effort.</p>' +
      '<p>We now choose the optimal wages $w_1^*$, $w_2^*$ that maximize Celine\'s profit and satisfy the PC and IC. For the PC to be satisfied and $w_1$ to be as small as possible, Celine sets $w_1^* = 0$. We can substitute this into the IC and solve for $w_2$:</p>' +
      '$$0.8 \\cdot w_2 + 0.2 \\cdot 0 - 150 \\geq 0.2 \\cdot w_2 + 0.8 \\cdot 0$$' +
      '$$\\Leftrightarrow 0.6 \\cdot w_2 \\geq 150$$' +
      '$$\\Rightarrow w_2 \\geq \\frac{10}{6} \\cdot 150 = 250$$' +
      '<p>Since Celine does not want to pay more than necessary, she chooses $w_2^* = 250$.</p>' +
      '<p>Optimally, Celine offers Johannes $w_1^* = w(\\pi = 500) = 0$ and $w_2^* = w(\\pi = 1000) = 250$. With this offer, Celine pays just enough so that Johannes\'s participation constraint and incentive compatibility constraint are satisfied and it is worthwhile for Johannes to exert effort.</p>' +
      '<p>From sub-task 1, we know that Celine is better off when Johannes exerts effort ($w_2^* = 250 < 300$). But is it also better for him to exert effort? The IC guarantees this:</p>' +
      '$$0.8 \\cdot 250 + 0.2 \\cdot 0 - 150 \\geq 0.2 \\cdot 250 + 0.8 \\cdot 0$$' +
      '$$\\Leftrightarrow 200 - 150 \\geq 50$$' +
      '$$\\Leftrightarrow 50 \\geq 50$$' +
      '<p>Johannes is indifferent between the wage with and without effort and therefore, by assumption, chooses effort. <strong>His expected utility is 50\u202F\u20AC</strong>.</p>' +
      '<p><strong>Celine\'s expected profit:</strong></p>' +
      '$$\\pi(e=1, w_1=0, w_2=250) = \\frac{80}{100} \\cdot (1000 - 250) + \\frac{20}{100} \\cdot (500 - 0) = \\mathbf{700}$$',
    solutionSource: 'official',
  },
]
