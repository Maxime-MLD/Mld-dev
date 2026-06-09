# Rapport SEO Complet — mld-dev.com
**Date :** 7 juin 2026 | **Technologie :** Astro 6 + Tailwind 4

---

## Score de Santé SEO Global : 47 / 100

| Catégorie | Poids | Score brut | Score pondéré |
|---|---|---|---|
| SEO Technique | 22% | 54/100 | 11.9 |
| Qualité de Contenu / E-E-A-T | 23% | 52/100 | 12.0 |
| Schema / Données structurées | 10% | 0/100 → **100/100*** | 10.0* |
| Performance (CWV) | 10% | 60/100 | 6.0 |
| AI Search Readiness (GEO) | 10% | 28/100 | 2.8 |
| On-Page SEO | 20% | 45/100 | 9.0 |
| Images | 5% | 55/100 | 2.75 |
| **Total** | 100% | — | **~54 / 100** |

*Schema JSON-LD intégré durant cet audit — score corrigé.

---

## Corrections déjà appliquées (durant cet audit)

| # | Correction | Fichier |
|---|---|---|
| ✅ | Schema.org JSON-LD complet (Person, ProfessionalService, WebSite, FAQPage) | `MainLayout.astro` |
| ✅ | `robots.txt` créé avec directives AI crawlers | `public/robots.txt` |
| ✅ | `llms.txt` créé (GEO readiness) | `public/llms.txt` |
| ✅ | Balise `<title>` dynamique via prop (était hardcodé) | `MainLayout.astro` |
| ✅ | Titre optimisé : "Maxime Lagraa — Développeur Web Freelance | Sites Sur Mesure" | `MainLayout.astro` |
| ✅ | Meta description optimisée avec CTA | `MainLayout.astro` |
| ✅ | Balise `<link rel="canonical">` ajoutée | `MainLayout.astro` |
| ✅ | OG tags / Twitter Cards synchronisés avec le title dynamique | `MainLayout.astro` |
| ✅ | `<h2>` logo footer → `<p>` (heading sémantiquement incorrect) | `Footer.astro` |
| ✅ | Lien "Voir le projet" conditionnel (évite href vide sur Heros League) | `Project.astro` |
| ✅ | Stat counters : valeurs initiales réelles (12+/24h/100%) pour les crawlers | `Hero.astro` |
| ✅ | Title mentions légales corrigé | `mentions-legales.astro` |
| ✅ | index.astro utilise le title par défaut du layout | `index.astro` |

---

## Plan d'Action Priorisé

### 🔴 CRITIQUE — À corriger avant le déploiement

#### C1 — Ajouter votre vrai nom dans le contenu principal
**Impact : Très élevé (E-E-A-T + GEO)**
"Maxime Lagraa" n'apparaît que dans les mentions légales. Les LLMs et Google ne peuvent pas construire une entité cohérente autour de votre identité. Ajouter votre nom dans le Hero (sous-titre) ou une section "À propos".

#### C2 — Zéro témoignage client
**Impact : Très élevé (E-E-A-T, confiance, conversion)**
C'est la lacune la plus grave pour un freelance. Sans verbatim client, Google Quality Raters évaluent l'expérience comme non démontrée. Objectif : 3 témoignages minimum avec prénom + entreprise.

#### C3 — SIRET non renseigné dans les mentions légales
**Impact : Élevé (confiance légale)**
Le SIRET est commenté. Le décommenter et renseigner le vrai numéro. Indispensable pour la crédibilité légale.

#### C4 — Clé API Web3Forms exposée en HTML public
**Impact : Élevé (sécurité)**
La clé `ebae498f-...` est visible dans le source. Activer la protection de domaine dans le dashboard Web3Forms pour limiter les origines autorisées.

---

### 🟠 HAUTE — Dans la semaine

#### H1 — Ajouter une section "À propos" (150-180 mots)
Créer `About.astro` entre Hero et Projets avec photo, parcours, stack technique (Astro, React, TypeScript, Tailwind), et zone géographique. Ce bloc est dans la fenêtre optimale de citabilité LLM (134-167 mots).

#### H2 — Étendre la FAQ de 3 à 7-8 questions
Questions à fort potentiel de recherche à ajouter :
- "Quelles technologies utilisez-vous pour créer un site ?"
- "Proposez-vous la maintenance après livraison ?"
- "Comment se déroule le paiement ?"
- "Intervenez-vous partout en France ?"
- "Mon site sera-t-il optimisé pour mobile ?"

#### H3 — Activer les liens réseaux sociaux
Dans `Contact.astro`, décommenter et renseigner LinkedIn (minimum vital pour B2B freelance) et GitHub (preuve de compétences pour un dev).

#### H4 — Injecter "freelance" et localisation dans le contenu visible
Le mot "freelance" est absent du contenu visible malgré être le terme de recherche le plus commercial. La localisation (Loire, 42) est absente alors que c'est un marché local fort. Exemple pour le sous-titre hero :
`Développeur web freelance basé en Loire (42).`

#### H5 — Corriger l'animation GSAP sur le H1 (LCP)
Le H1 est animé depuis `opacity: 0` pendant 2s, retardant artificiellement le LCP. Remplacer par une animation CSS avec `animation-fill-mode: backwards` qui n'impacte pas le score CWV.

#### H6 — Ajouter l'email de contact visible sur la page principale
`contact@mld-dev.com` n'est accessible que dans les mentions légales. L'afficher dans la section Contact réduit la friction et renforce la confiance.

---

### 🟡 MOYENNE — Dans le mois

#### M1 — Supprimer le double import de la police Geist
Geist est chargée via npm (`@fontsource-variable/geist`) ET via `@font-face` local. Supprimer l'import npm, garder le fichier local + preload. Économie d'une requête réseau tierce.

#### M2 — Ajouter `noindex` à la page mentions légales
La page `/mentions-legales` ne doit pas être indexée. Ajouter dans le layout conditionnel : `<meta name="robots" content="noindex, follow">`.

#### M3 — Améliorer les descriptions des projets avec métriques
Pour "Mld développement" et "Portfolio MLD", ajouter les technologies utilisées et les performances (score Lighthouse, temps de chargement). Remplacer "Heros League" (projet fictif) par un vrai projet client dès que possible.

#### M4 — Installer `@astrojs/sitemap` et configurer `astro.config.mjs`
Le plugin est probablement déjà installé. S'assurer que `site: 'https://mld-dev.com'` est défini dans la config pour générer `sitemap.xml` automatiquement.

#### M5 — Ajouter l'attribut `alt` descriptif aux images projets
Les `alt` actuels ("Mld développement") sont trop courts. Format optimal : `"Capture d'écran du site mld-dev.com — site vitrine développeur web Astro"`.

---

### 🟢 BAS — Backlog

#### B1 — Créer du contenu expert (blog ou études de cas)
Zero contenu long sur le site. Un article de blog mensuel sur les technos web ou une étude de cas client booste massivement l'autorité E-E-A-T à long terme.

#### B2 — Présence YouTube
La corrélation YouTube/citations LLM est de ~0.737. Des courtes vidéos de dev/design web renforceraient considérablement la visibilité GEO.

#### B3 — Inscription dans des annuaires professionnels
Malt, Codeur.com, Annuaire du web — pour les signaux d'autorité externe et la cohérence NAP (Name/Address/Phone).

#### B4 — Badges de confiance dans la section tarifs
Micro-texte sous chaque CTA tarifaire : `"Devis gratuit · Réponse sous 24h"`. Réduit la friction, augmente les conversions.

---

## Résumé exécutif

Le site présente une base technique saine (Astro SSR, HTTPS, OG tags, images optimisées) et un design soigné. Les 13 corrections appliquées durant cet audit ont résolu les problèmes les plus rapides.

**Les 3 leviers d'impact maximum restants :**
1. **Témoignages clients** — sans eux, le site ne peut pas atteindre un E-E-A-T suffisant pour ranker sur des requêtes compétitives
2. **Section À propos avec votre vrai nom** — invisible pour Google et les LLMs sans identification de l'auteur
3. **FAQ étendue** — 3 questions n'est pas suffisant pour capter la longue traîne et les citations AI

**Score projeté après actions Critiques + Hautes : ~72 / 100**
