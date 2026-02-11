

# Implementation des modeles contractuels renforces

## Analyse du document

Le fichier contient **3 modeles de contrats** distincts, une **logique conditionnelle** pour choisir le bon modele, et des notes de conformite ACPR :

1. **Contrat de credit entre particuliers** (pret civil) -- pour les prets personnels, auto, travaux
2. **Contrat de financement professionnel** -- pour les prets business/projet
3. **Contrat de rachat de credit** -- pour la consolidation de dettes

Chaque modele a une version complete (10 articles juridiques) et une version allegee (UX/signature electronique).

## Etat actuel

Le composant `ContractPreviewModal.tsx` genere un **contrat PDF unique et generique** pour tous les types de prets, avec des clauses basiques non conformes aux modeles fournis.

## Plan d'implementation

### Etape 1 -- Creer un module de generation de contrats par type

Creer un fichier `src/lib/contractTemplates.ts` contenant :

- Une fonction par type de contrat (`generateCivilContract`, `generateProContract`, `generateRachatContract`)
- Chaque fonction ecrit les articles specifiques dans le PDF via jsPDF
- Les donnees dynamiques (montant, duree, taux, identite) sont injectees dans les placeholders

### Etape 2 -- Implementer le moteur conditionnel

Creer une fonction `selectContractTemplate(loanType, amount)` dans le meme module qui applique la logique :

- `personal`, `auto`, `home_improvement` --> Contrat civil
  - Si montant > 15 000 : ajouter reconnaissance de dette en annexe
  - Si montant > 40 000 : ajouter garantie renforcee
- `business`, `project` --> Contrat professionnel
  - Si montant > 30 000 : ajouter caution dirigeant
- `consolidation` --> Contrat rachat de credit
  - Clause declarative sur les dettes existantes

### Etape 3 -- Mettre a jour ContractPreviewModal

Modifier `src/components/admin/ContractPreviewModal.tsx` pour :

- Importer le nouveau module
- Remplacer la fonction `generatePdf()` actuelle par un appel au moteur conditionnel qui selectionne et genere le bon template
- Conserver l'en-tete Fundia Invest, le tableau recapitulatif et les zones de signature

### Etape 4 -- Adapter les articles juridiques dans chaque template

Pour chaque type de contrat, integrer les articles du document fourni :

**Contrat civil (10 articles)** : Nature juridique, Montant et remise des fonds, Duree, Modalites de remboursement, Interets, Decheance du terme, Clause penale, Garanties, Independance des parties (Fundia non-partie), Droit applicable

**Contrat professionnel (10 articles)** : Objet, Declaration professionnelle, Montant, Affectation des fonds, Remuneration, Garanties, Clause d'autonomie, Decheance du terme, Clause resolutoire, Droit applicable

**Contrat rachat (7 articles)** : Objet, Declarations, Nouveau financement, Modalites, Garanties, Clause d'absence d'intermediation, Droit applicable

### Resume des fichiers modifies

| Fichier | Action |
|---|---|
| `src/lib/contractTemplates.ts` | Nouveau -- logique de selection et generation PDF par type |
| `src/components/admin/ContractPreviewModal.tsx` | Modifie -- utilise le nouveau module au lieu du PDF generique |

### Points d'attention

- La gestion multi-pages jsPDF sera necessaire car les contrats complets depasseront une page
- Le titre du PDF changera selon le type (ex: "CONTRAT DE CREDIT ENTRE PARTICULIERS" vs "CONTRAT DE FINANCEMENT PROFESSIONNEL")
- Les clauses conditionnelles (reconnaissance de dette, caution dirigeant) seront ajoutees comme sections supplementaires en fin de contrat

