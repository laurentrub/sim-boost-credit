
## Correction de la clé de traduction manquante

**Probleme** : Le texte brut `admin.status.document_requested` s'affiche dans l'interface admin au lieu d'un libellé traduit.

**Solution** : Ajouter la clé `"document_requested": "Documents demandés"` dans la section `admin.status` du fichier `src/i18n/locales/fr.json`.

### Details techniques

- **Fichier modifie** : `src/i18n/locales/fr.json`
- **Section** : `admin.status`
- **Cle ajoutee** : `"document_requested": "Documents demandés"`
