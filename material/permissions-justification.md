# Chrome Extension Permissions Justification

This document explains why Step1 requires each permission listed in the manifest.json file.

---

## Storage Permission

**Permission**: `storage`

**Justification**:
We use the storage permission to save user preferences and locally cache extracted design tokens (colors, fonts, spacing values) for quick access across browsing sessions. This allows users to:

- Store their preferred export formats (CSS Variables, Tailwind, JSON)
- Cache recently extracted styles for easy access
- Save component templates for reuse

**Data Handling**: All stored data remains local to the user's browser. No personal data is stored or transmitted to external servers.

---

## ActiveTab Permission

**Permission**: `activeTab`

**Justification**:
The activeTab permission allows Step1 to analyze the DOM structure and computed styles of elements on the current webpage when the user actively clicks on the extension icon. This enables our core functionality:

- Reading CSS properties of selected elements
- Analyzing the layout structure of components
- Extracting design tokens from the current page

**Privacy Protection**: Access is only granted for the active tab and only when explicitly triggered by the user clicking the extension icon. We do not passively monitor or collect any browsing data.

---

## Host Permissions

**Permission**: `host_permissions: ["<all_urls>"]`

**Justification**:
Step1 requires host permissions to function on any website the user visits. This is essential because:

- Users need to clone designs from various websites across the internet
- Design inspiration can come from any website, not just a predefined list
- The extension must inject content scripts to analyze page elements

**Privacy Commitment**:
- We do not collect, store, or transmit any browsing data or website content to external servers
- All design extraction happens locally in the user's browser
- No third-party tracking or analytics are performed on user browsing behavior

---

## Summary

| Permission | Purpose | Data Handling |
|------------|---------|---------------|
| storage | Save preferences & cached styles | Local only |
| activeTab | Analyze current page elements | User-triggered only |
| host_permissions | Work on any website | Local processing only |

For more information about our data practices, please refer to our Privacy Policy at https://step1.dev/privacy

---

*Last updated: January 2025*
