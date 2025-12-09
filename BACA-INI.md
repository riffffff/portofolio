# 🎯 PENTING: Cara Edit Portfolio

## ⚠️ FILE YANG HARUS DIEDIT:

### ✅ **EDIT FILE INI:**
```
src/config.ts
```

### ❌ **JANGAN EDIT FILE INI:**
```
src/content.ts (FILE LAMA - TIDAK DIPAKAI!)
```

---

## 📋 LANGKAH-LANGKAH EDIT:

### 1. Buka File yang Benar
```bash
# Di VS Code, buka:
src/config.ts
```

### 2. Edit Konten Anda
Cari bagian ini dan edit:

```typescript
export const portfolioConfig: PortfolioConfig = {
  profile: {
    name: 'NAMA ANDA DI SINI',
    subtitle: 'TAGLINE ANDA DI SINI',
    bio: 'DESKRIPSI LENGKAP ANDA DI SINI'
  },
  
  projects: [
    // Edit atau tambah project di sini
  ],
  
  skills: [
    // Edit atau tambah skill di sini
  ],
  
  contacts: {
    // Edit kontak Anda di sini
  }
}
```

### 3. Save File
```
Ctrl + S (Windows/Linux)
Cmd + S (Mac)
```

### 4. Jalankan Dev Server (jika belum)
```bash
npm run dev
```

### 5. Buka Browser
```
http://localhost:5173
```

### 6. Hard Refresh Browser
```
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

---

## 🧪 TEST: Apakah Sudah Benar?

### Test Cepat:
1. Buka `src/config.ts`
2. Edit baris ini:
   ```typescript
   name: 'TEST BERHASIL',
   ```
3. Save (Ctrl+S)
4. Refresh browser (Ctrl+Shift+R)
5. Lihat halaman → harus muncul "Hi, I'm TEST BERHASIL"

**Jika TIDAK berubah:**
- Pastikan edit di `src/config.ts` BUKAN `src/content.ts`
- Pastikan dev server running
- Hard refresh: Ctrl+Shift+R

---

## 🔍 CARA CEK FILE YANG SEDANG DIPAKAI:

Buka `src/App.tsx` → baris 2:

```typescript
import { portfolioConfig } from './config'  ✅ INI YANG BENAR
```

Jika masih ini:
```typescript
import { ... } from './content'  ❌ INI SALAH
```

---

## 💡 TIPS PENTING:

1. **Selalu edit** `src/config.ts`
2. **Jangan edit** `src/content.ts`
3. **Hard refresh** setelah save (Ctrl+Shift+R)
4. **Cek terminal** ada "hmr update" atau "page reload"

---

## 🚨 JIKA MASIH TIDAK BERFUNGSI:

### Solusi 1: Restart Server
```bash
# Tekan Ctrl+C di terminal
# Lalu jalankan ulang:
npm run dev
```

### Solusi 2: Clear Cache
```bash
rm -rf node_modules/.vite
npm run dev
```

### Solusi 3: Hard Refresh Browser
```
Tekan F12 → klik kanan icon refresh → "Empty Cache and Hard Reload"
```

---

## ✨ CONTOH LENGKAP:

File: `src/config.ts`

```typescript
export const portfolioConfig: PortfolioConfig = {
  profile: {
    name: 'Muhammad Rifai',
    subtitle: '✨ Full Stack Developer',
    bio: 'Saya seorang developer passionate dalam web development.'
  },

  projects: [
    {
      year: '2025',
      title: 'My Amazing Project',
      desc: 'Deskripsi project saya',
      href: '#',
      pdfUrl: '/project.pdf',
      simulateButton: true
    }
  ],

  interns: [
    {
      year: '2024',
      title: 'Developer Intern — Tech Company',
      desc: 'Pengalaman kerja saya'
    }
  ],

  skills: [
    'React',
    'TypeScript',
    'Node.js',
    'PostgreSQL'
  ],

  contacts: {
    email: 'rifai@example.com',
    github: 'https://github.com/riffffff',
    linkedin: 'https://linkedin.com/in/rifai'
  }
}
```

Save file ini → Refresh browser → DONE! ✅
