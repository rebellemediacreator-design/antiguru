# Vom Tellerwäscher zum Supercoach
## 9-Tage-Challenge Web-App

Deployment-Ready Package für Netlify/GitHub Pages

---

## 📦 Was ist enthalten?

```
supercoach-deploy/
├── index.html          # Vollständige Web-App
├── images/             # Hintergrundbilder für alle Tage
│   ├── day0.png       # Start
│   ├── day1.png       # Tag 1: Mindset
│   ├── day2.png       # Tag 2: Story
│   ├── day3.png       # Tag 3: Pitch
│   ├── day4.png       # Tag 4: Angebot
│   ├── day5.png       # Tag 5: Content
│   ├── day6.png       # Tag 6: Funnel
│   ├── day7.png       # Tag 7: Sales
│   └── day8.png       # Tag 8: Skalierung
└── README.md          # Diese Datei
```

---

## 🚀 Deploy zu Netlify (Empfohlen)

### Option 1: Drag & Drop (Einfachst)

1. Gehe zu [app.netlify.com](https://app.netlify.com)
2. Ziehe den kompletten `supercoach-deploy` Ordner ins Netlify-Fenster
3. Fertig! URL wird automatisch generiert

### Option 2: GitHub + Netlify (Professionell)

1. **GitHub Repository erstellen:**
   ```bash
   cd supercoach-deploy
   git init
   git add .
   git commit -m "Initial commit: Supercoach Challenge App"
   git branch -M main
   git remote add origin https://github.com/DEIN-USERNAME/supercoach-challenge.git
   git push -u origin main
   ```

2. **Mit Netlify verbinden:**
   - Gehe zu [app.netlify.com](https://app.netlify.com)
   - Klicke "New site from Git"
   - Wähle dein GitHub Repository
   - Deploy Settings:
     - Build command: (leer lassen)
     - Publish directory: `.`
   - Klicke "Deploy site"

3. **Custom Domain (Optional):**
   - In Netlify: Site settings → Domain management
   - Füge deine Domain hinzu
   - Folge den DNS-Anweisungen

---

## 🎨 Features

✅ **Alle 9 Tage komplett**  
✅ **Hintergrundbilder pro Tag**  
✅ **Auto-Save via LocalStorage**  
✅ **Progress-Tracking (18 Checkboxen)**  
✅ **Export als JSON**  
✅ **Mobile-optimiert**  
✅ **Keine Backend-Anforderungen**  
✅ **Standalone HTML-Datei**

---

## 🛠️ Lokales Testen

```bash
cd supercoach-deploy

# Option 1: Python Server
python -m http.server 8000

# Option 2: Node.js Server
npx serve

# Dann öffne: http://localhost:8000
```

---

## 📝 Anpassungen

### Texte ändern

Öffne `index.html` und suche nach dem entsprechenden Text.

### Bilder ersetzen

Ersetze die Dateien in `images/`:
- Behalte die Dateinamen (day0.png bis day8.png)
- Empfohlene Größe: 1920x1080px oder größer
- Format: PNG oder JPG

### Farben anpassen

Suche in `index.html` nach:
```css
background: rgba(0, 0, 0, 0.85);  /* Content Box */
color: #fff;                       /* Text */
border: 1px solid rgba(255, 255, 255, 0.1);
```

---

## 🖤 RE:BELLE™ Media

**The Art of Feeling. Amplified.**

rebellemedia.de

---

## 📄 Lizenz

© 2026 RE:BELLE™ Media. Alle Rechte vorbehalten.
