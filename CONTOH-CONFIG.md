# Contoh Penggunaan Config.ts

## Contoh 1: Dengan Foto Profil

```typescript
export const portfolioConfig: PortfolioConfig = {
  profile: {
    name: 'Muhammad Rifai',
    subtitle: 'Full Stack Developer & UI/UX Enthusiast',
    avatar: '/avatar.jpg', // Taruh foto di folder public/avatar.jpg
    bio: 'Saya adalah developer yang passionate dalam membuat aplikasi web modern dengan fokus pada user experience dan performance.'
  },
  
  projects: [
    {
      year: '2025',
      title: 'E-Commerce Dashboard',
      desc: 'Dashboard admin untuk mengelola produk, order, dan customer dengan real-time analytics.',
      href: '#',
      pdfUrl: '/projects/ecommerce-dashboard.pdf',
      simulateButton: true
    },
    {
      year: '2024',
      title: 'Mobile Banking App',
      desc: 'Aplikasi mobile banking dengan fitur transfer, pembayaran, dan cek saldo.',
      href: '#',
      pdfUrl: '/projects/mobile-banking.pdf',
      simulateButton: false
    },
  ],
  
  interns: [
    {
      year: '2024',
      title: 'Frontend Developer Intern — PT Digital Indonesia',
      desc: 'Mengembangkan UI components, implementasi responsive design, dan optimasi performance website.'
    },
    {
      year: '2023',
      title: 'Web Developer Intern — Startup Tech',
      desc: 'Membuat landing pages, integrasi API, dan maintenance website perusahaan.'
    },
  ],
  
  skills: [
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'Docker',
    'AWS'
  ],
  
  contacts: {
    email: 'rifai@example.com',
    github: 'https://github.com/riffffff',
    linkedin: 'https://linkedin.com/in/muhammadrifai',
    cvUrl: '/cv-rifai.pdf'
  }
}
```

## Contoh 2: Tanpa Foto Profil (Pakai Animasi Gradient)

```typescript
export const portfolioConfig: PortfolioConfig = {
  profile: {
    name: 'Rifai',
    subtitle: 'Frontend Engineer crafting clean, fast interfaces.',
    // Jangan uncomment avatar, biarkan kosong untuk animasi gradient
    bio: 'I build responsive, accessible, and delightful web experiences. I focus on performance, semantics, and micro-interactions — especially on mobile.'
  },
  // ... sisanya sama
}
```

## Tips:

1. **Foto Profil**:
   - Format: JPG, PNG, atau WebP
   - Ukuran rekomendasi: 400x400px (persegi)
   - Ukuran file: < 200KB
   - Taruh di folder `public/`

2. **PDF Projects**:
   - Taruh semua PDF di folder `public/projects/`
   - Referensi dengan `/projects/nama-file.pdf`

3. **CV**:
   - Taruh di `public/cv-nama.pdf`
   - Update `cvUrl` di contacts

4. **Testing**:
   ```bash
   npm run dev
   ```
   Lalu buka http://localhost:5173
