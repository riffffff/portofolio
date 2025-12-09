# 📝 Cara Mengatur Portfolio Anda

Untuk mengubah konten portfolio, edit file `src/config.ts`.

## 🎯 Struktur Konfigurasi

### 1. **Profile Section** (Bagian Profil)
```typescript
profile: {
  name: 'Nama Anda',
  subtitle: 'Deskripsi singkat tentang Anda',
  avatar: '/path/to/foto-anda.jpg', // Optional - foto profil
  bio: 'Deskripsi lengkap tentang diri Anda'
}
```

**Cara menambahkan foto profil:**
1. Taruh foto Anda di folder `public/` (misalnya: `public/avatar.jpg`)
2. Uncomment baris `avatar` di config dan isi dengan `/avatar.jpg`
3. Jika tidak ada foto, akan muncul animasi gradient otomatis

### 2. **Projects Section** (Pengalaman/Proyek)
```typescript
projects: [
  {
    year: '2025',
    title: 'Judul Project',
    desc: 'Deskripsi singkat project',
    href: '#', 
    pdfUrl: '/project.pdf', // Path ke file PDF preview
    simulateButton: true // true = tampilkan tombol simulasi
  }
]
```

### 3. **Internship Section** (Pengalaman Magang)
```typescript
interns: [
  {
    year: '2024',
    title: 'Posisi — Nama Perusahaan',
    desc: 'Deskripsi pekerjaan dan pencapaian'
  }
]
```

### 4. **Skills Section**
```typescript
skills: [
  'React',
  'TypeScript',
  'CSS',
  // Tambahkan skill lainnya...
]
```

### 5. **Contact Section**
```typescript
contacts: {
  email: 'email@example.com',
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
  cvUrl: '/cv.pdf' // Optional - path ke CV
}
```

## 🖼️ Cara Menambahkan File (PDF, Foto, dll)

1. Taruh semua file asset di folder `public/`
2. Referensi dengan path `/namafile.ext`
   - Contoh: `public/cv.pdf` → gunakan `/cv.pdf`
   - Contoh: `public/avatar.jpg` → gunakan `/avatar.jpg`

## 🎨 Responsive Design

Website sudah dioptimalkan untuk:
- 📱 **Mobile** (320px - 639px): Layout compact & nyaman
- 📲 **Tablet** (640px - 959px): Layout 2 kolom
- 💻 **Desktop** (960px+): Layout 3 kolom & spacing luas

## 🚀 Testing Lokal

```bash
npm run dev
```

Buka browser dan cek di berbagai ukuran layar!
