# 🔧 Troubleshooting Guide

## ❗ Masalah: Edit Config Tidak Berpengaruh ke Tampilan

### Penyebab & Solusi:

### 1️⃣ **Dev Server Belum Berjalan / Perlu Restart**

```bash
# Stop server (Ctrl+C di terminal)
# Lalu jalankan ulang:
npm run dev
```

### 2️⃣ **Browser Cache**

**Solusi:**
- Tekan `Ctrl + Shift + R` (Linux/Windows)
- Atau `Cmd + Shift + R` (Mac)
- Atau buka DevTools (F12) → klik kanan tombol refresh → "Empty Cache and Hard Reload"

### 3️⃣ **File yang Salah Diedit**

**PENTING:** Sekarang sistem menggunakan file BARU!

❌ **JANGAN EDIT:** `src/content.ts` (file lama, tidak dipakai lagi)
✅ **EDIT INI:** `src/config.ts` (file baru yang aktif)

---

## ✅ Cara Test Perubahan Berhasil:

### Test 1: Edit Nama
```typescript
// Di src/config.ts
profile: {
  name: 'Rifai TEST', // Tambah TEST
  ...
}
```

**Langkah:**
1. Save file (`Ctrl+S`)
2. Lihat terminal → harus ada "page reload" atau "hmr update"
3. Lihat browser → nama berubah jadi "Hi, I'm Rifai TEST"
4. Jika tidak berubah → Hard Refresh (Ctrl+Shift+R)

### Test 2: Edit Skills
```typescript
// Di src/config.ts
skills: [
  'React',
  'TypeScript',
  'TEST SKILL', // Tambah ini
  'Vite',
]
```

**Langkah:**
1. Save
2. Refresh
3. Scroll ke bagian Skills → harus ada "TEST SKILL"

---

## 🚀 Checklist Debugging:

- [ ] Dev server berjalan? (`npm run dev` di terminal)
- [ ] Terminal menunjukkan "localhost:5173"?
- [ ] Edit file `src/config.ts` (BUKAN `src/content.ts`)?
- [ ] Sudah save file? (Ctrl+S)
- [ ] Sudah hard refresh browser? (Ctrl+Shift+R)
- [ ] Browser console ada error? (F12 → tab Console)

---

## 🔍 Cek Status Import

Buka `src/App.tsx` → baris 2 harus seperti ini:

```typescript
import { portfolioConfig } from './config'  ✅ BENAR
```

Jika masih ini:
```typescript
import { profile, projects... } from './content'  ❌ SALAH
```

Berarti ada yang belum update.

---

## 💡 Tips:

1. **Auto Save:** Di VS Code, aktifkan auto-save
   - File → Auto Save (centang)
   
2. **Split Screen:** Buka editor + browser berdampingan untuk lihat perubahan real-time

3. **DevTools:** Buka Network tab di DevTools, kalau ada file merah = ada error

---

## 📞 Jika Masih Bermasalah:

1. Stop server (Ctrl+C)
2. Hapus cache:
   ```bash
   rm -rf node_modules/.vite
   ```
3. Restart:
   ```bash
   npm run dev
   ```
4. Hard refresh browser (Ctrl+Shift+R)
