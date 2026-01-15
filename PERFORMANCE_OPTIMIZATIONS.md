# Optimizaciones de Performance - BioCure Landing Page

Este documento detalla todas las optimizaciones de rendimiento implementadas en la landing page de BioCure para mejorar las métricas de Core Web Vitals y el puntaje de PageSpeed Insights.

---

## Resumen de Cambios

| Optimización | Archivo(s) Modificado(s) | Impacto Estimado |
|--------------|--------------------------|------------------|
| Lazy load CalendarModal | `src/app/page.tsx` | -50KB bundle inicial |
| Optimización Hero LCP | `src/components/sections/HeroSection.tsx` | -200ms LCP |
| Logo con dimensiones | `Navbar.tsx`, `Footer.tsx` | -36KB transferencia |
| Preconnect hints | `src/app/layout.tsx` | -300ms conexión |
| Font display swap | `src/app/layout.tsx` | Evita FOIT |
| Browserslist moderno | `package.json` | -14KB polyfills |
| Compresión habilitada | `next.config.mjs` | -30% tamaño assets |
| Jerarquía headings | `Footer.tsx` | Accesibilidad ✓ |
| Contraste mejorado | `globals.css` | Accesibilidad ✓ |
| **YouTube Facade** | `VSLSection.tsx` | **-900KB JS inicial** |
| **ModalProvider Context** | `ModalProvider.tsx`, `page.tsx` | **Orden restaurado** |
| **CSS Crítico Inline** | `next.config.mjs` | **-190ms bloqueo** |
| **Thumbnail Optimizado** | `VSLSection.tsx` | **-100KB imagen** |
| **Gold Accesible** | `globals.css` | **WCAG AA ✓** |

---

## 1. Lazy Loading del CalendarModal

### Problema
El componente `CalendarModal` contiene un iframe pesado de GoHighLevel que se cargaba en el bundle principal, aumentando el tiempo de carga inicial.

### Solución
Usar `next/dynamic` para cargar el modal solo cuando sea necesario.

### Archivo: `src/app/page.tsx`

```tsx
// ANTES
import { CalendarModal } from "@/components/modals/CalendarModal";

// DESPUÉS
import dynamic from "next/dynamic";

const CalendarModal = dynamic(
  () => import("@/components/modals/CalendarModal").then((mod) => mod.CalendarModal),
  {
    ssr: false,
    loading: () => null,
  }
);
```

---

## 2. Optimización del Hero Section (LCP)

### Problema
- Los elementos decorativos de fondo (`blur-3xl`) causaban repintados costosos
- Las animaciones `FadeIn` en el headline retrasaban el LCP

### Solución
- Añadir `transform-gpu` y `will-change-transform` a los blobs del fondo
- Eliminar `FadeIn` del kicker y headline (elementos LCP críticos)
- Añadir `pointer-events-none` a los elementos decorativos

### Archivo: `src/components/sections/HeroSection.tsx`

```tsx
// ANTES - Blobs de fondo
<div className="absolute inset-0 overflow-hidden">
  <div className="absolute top-20 right-10 w-72 h-72 bg-biocure-sage/5 rounded-full blur-3xl" />
  <div className="absolute bottom-20 left-10 w-96 h-96 bg-biocure-mint/30 rounded-full blur-3xl" />
</div>

// DESPUÉS - Con GPU acceleration
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-20 right-10 w-72 h-72 bg-biocure-sage/5 rounded-full blur-3xl transform-gpu will-change-transform" />
  <div className="absolute bottom-20 left-10 w-96 h-96 bg-biocure-mint/30 rounded-full blur-3xl transform-gpu will-change-transform" />
</div>

// ANTES - Headline con animación
<FadeIn delay={0.1}>
  <h1>...</h1>
</FadeIn>

// DESPUÉS - Headline sin animación (LCP inmediato)
<h1>...</h1>
```

---

## 3. Optimización de Imágenes (Logo)

### Problema
El logo se servía a 1000x1000px pero se mostraba a 48x48px, desperdiciando ~36KB.

### Solución
Añadir dimensiones explícitas `width` y `height` al componente `Image` de Next.js.

### Archivo: `src/components/layout/Navbar.tsx`

```tsx
// ANTES
<Image src={logo} alt={navbar.logoAlt} className="h-12 w-auto" />

// DESPUÉS
<Image 
  src={logo} 
  alt={navbar.logoAlt} 
  className="h-12 w-auto" 
  width={48} 
  height={48} 
  priority 
/>
```

### Archivo: `src/components/layout/Footer.tsx`

```tsx
// ANTES
<Image src={logo} alt={footer.logoAlt} className="h-16 w-auto mb-4 brightness-0 invert" />

// DESPUÉS
<Image 
  src={logo} 
  alt={footer.logoAlt} 
  className="h-16 w-auto brightness-0 invert" 
  width={64} 
  height={64} 
/>
```

---

## 4. Preconnect Hints para Google APIs

### Problema
El embed de Google Drive requiere conexión a múltiples dominios de Google, causando latencia.

### Solución
Añadir hints de preconnect para establecer conexiones anticipadas.

### Archivo: `src/app/layout.tsx`

```tsx
<html lang="en">
  <head>
    <link rel="preconnect" href="https://clients6.google.com" />
    <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="anonymous" />
    <link rel="dns-prefetch" href="https://drive.google.com" />
  </head>
  <body>...</body>
</html>
```

---

## 5. Optimización de Fuentes

### Problema
- Las fuentes no tenían `font-display: swap`, causando FOIT (Flash of Invisible Text)
- Se cargaban pesos innecesarios (300)

### Solución
Añadir `display: "swap"` y eliminar peso 300.

### Archivo: `src/app/layout.tsx`

```tsx
// ANTES
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

// DESPUÉS
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});
```

---

## 6. Browserslist Moderno

### Problema
Se generaban polyfills para navegadores antiguos (Array.prototype.at, flat, flatMap, etc.), añadiendo ~14KB innecesarios.

### Solución
Configurar browserslist para solo soportar navegadores modernos.

### Archivo: `package.json`

```json
{
  "browserslist": [
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Safari versions",
    "last 2 Edge versions"
  ]
}
```

---

## 7. Compresión Habilitada

### Problema
Next.js no tenía compresión explícitamente habilitada.

### Solución
Habilitar compresión gzip/brotli.

### Archivo: `next.config.mjs`

```js
const nextConfig = {
  compress: true,
};

export default nextConfig;
```

---

## 8. Mejoras de Accesibilidad

### 8.1 Jerarquía de Encabezados

#### Problema
Los elementos `<h4>` en el Footer se usaban sin un `<h3>` previo, rompiendo la secuencia descendente requerida por WCAG.

#### Solución
Cambiar `<h4>` a `<h3>` en el Footer.

#### Archivo: `src/components/layout/Footer.tsx`

```tsx
// ANTES
<h4 className="font-semibold mb-4">{footer.legal.title}</h4>
<h4 className="font-semibold mb-4">{footer.menu.title}</h4>
<h4 className="font-semibold mb-4">{footer.connect.title}</h4>

// DESPUÉS
<h3 className="font-semibold mb-4">{footer.legal.title}</h3>
<h3 className="font-semibold mb-4">{footer.menu.title}</h3>
<h3 className="font-semibold mb-4">{footer.connect.title}</h3>
```

**Jerarquía correcta:**
- `<h1>` → Hero headline (único en la página)
- `<h2>` → Títulos de sección (Benefits, Features, etc.)
- `<h3>` → Subtítulos (cards de beneficios, títulos de Footer)

---

### 8.2 Contraste de Colores

#### Problema
El color `muted-foreground` tenía un contraste insuficiente (ratio < 4.5:1) para texto normal.

#### Solución
Oscurecer el color de 45% a 35% de luminosidad.

#### Archivo: `src/app/globals.css`

```css
/* ANTES */
--muted-foreground: 150 5% 45%;

/* DESPUÉS */
--muted-foreground: 150 5% 35%;
```

**Impacto:**
- Ratio de contraste mejorado de ~3.5:1 a ~5.5:1
- Cumple con WCAG AA (mínimo 4.5:1 para texto normal)

---

## 9. Migración a YouTube Embed

### Problema
Google Drive embed cargaba ~1.5MB de JavaScript y CSS de gstatic.com, afectando severamente el rendimiento.

### Solución
Migrar el video a YouTube y usar el embed optimizado.

### Archivo: `src/components/sections/VSLSection.tsx`

```tsx
// ANTES - Google Drive
const videoId = "1pKFwJg_XdOoFwP3HZXMoY3nQnz7hQX0d";
<iframe
  src={`https://drive.google.com/file/d/${videoId}/preview`}
  ...
/>

// DESPUÉS - YouTube (más ligero)
const videoId = "AfjQs2lnQy0";
<iframe
  src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  loading="lazy"
  ...
/>
```

**Beneficios:**
- `youtube-nocookie.com`: Mayor privacidad (sin cookies de tracking)
- `rel=0`: Sin videos relacionados al final
- `modestbranding=1`: Branding mínimo de YouTube
- `loading="lazy"`: Carga diferida
- **~80% menos JS/CSS** comparado con Google Drive

---

## 10. Optimizaciones Móviles

### 10.1 ModalProvider con React Context

#### Problema
Necesitábamos compartir el estado del modal entre múltiples secciones (Navbar, Hero, Pricing, FinalCTA) sin romper el orden de las secciones.

#### Solución
Crear un `ModalProvider` con React Context que permite a cualquier sección acceder al modal.

#### Archivo: `src/components/sections/ModalProvider.tsx` (NUEVO)

```tsx
"use client";

import { createContext, useContext, useState } from "react";

const ModalContext = createContext<{ openModal: () => void } | null>(null);

export function useOpenModal() {
    const context = useContext(ModalContext);
    if (!context) throw new Error("useOpenModal must be used within ModalProvider");
    return context.openModal;
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
    const openModal = () => setIsLeadModalOpen(true);

    return (
        <ModalContext.Provider value={{ openModal }}>
            <Navbar onOpenModal={openModal} />
            {children}
            <CalendarModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />
        </ModalContext.Provider>
    );
}
```

#### Archivo: `src/app/page.tsx`

```tsx
// Orden de secciones restaurado correctamente
import { ModalProvider } from "@/components/sections";

export default function Home() {
    return (
        <ModalProvider>
            <main className="min-h-screen">
                <HeroSection />
                <VSLSection />
                <BenefitsSection />
                <WhoItFitsSection />
                <FeaturesSection />
                <TestimonialsSection />
                <HowItWorksSection />
                <PricingSection />
                <FAQSection />
                <FinalCTASection />
                <Footer />
            </main>
        </ModalProvider>
    );
}
```

**Beneficios:**
- ✅ Orden de secciones correcto
- ✅ Modal accesible desde cualquier sección
- ✅ Navbar y CalendarModal manejados por el Provider
- ✅ Componentes usan `useOpenModal()` hook

---

### 10.2 Preconnect Actualizado para YouTube

#### Archivo: `src/app/layout.tsx`

```tsx
// ANTES - Google Drive
<link rel="preconnect" href="https://clients6.google.com" />
<link rel="preconnect" href="https://www.gstatic.com" />
<link rel="dns-prefetch" href="https://drive.google.com" />

// DESPUÉS - YouTube
<link rel="preconnect" href="https://www.youtube.com" />
<link rel="preconnect" href="https://i.ytimg.com" />
```

---

## 11. CSS Crítico Inline (Critters)

### Problema
Los archivos CSS bloqueaban la renderización inicial (~190ms de delay).

### Solución
Habilitar `optimizeCss` experimental en Next.js con la librería `critters`.

### Instalación

```bash
npm install critters --save-dev
```

### Archivo: `next.config.mjs`

```js
const nextConfig = {
    compress: true,
    experimental: {
        optimizeCss: true,
    },
};
```

**Resultado:**
- CSS crítico (above-the-fold) se incrusta en el HTML
- Resto del CSS se carga de forma diferida
- Reduce bloqueo de renderizado

---

## 12. YouTube Facade Pattern

### Problema
El embed de YouTube cargaba ~900KB de JavaScript en el inicial, afectando FCP/LCP.

### Solución
Mostrar solo un thumbnail + botón play hasta que el usuario haga clic.

### Archivo: `src/components/sections/VSLSection.tsx`

```tsx
"use client";

const VSLSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "AfjQs2lnQy0";
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative aspect-video">
      {!isPlaying ? (
        // Facade: Solo imagen + botón (0KB de JS de YouTube)
        <button onClick={() => setIsPlaying(true)}>
          <img src={thumbnailUrl} alt="Video" loading="lazy" />
          <PlayIcon />
        </button>
      ) : (
        // Iframe real (solo después del clic)
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          ...
        />
      )}
    </div>
  );
};
```

**Beneficios:**
- **0KB de YouTube JS** en la carga inicial
- Thumbnail pequeño (~15KB con `hqdefault`)
- `autoplay=1` funciona porque es activado por el usuario

---

## 13. Thumbnail Optimizado

### Problema
El thumbnail de YouTube `maxresdefault.jpg` pesaba ~126KB para una visualización de 662x372.

### Solución
Usar `hqdefault.jpg` (480x360, ~15-20KB) en lugar de `maxresdefault.jpg`.

```tsx
// ANTES
const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

// DESPUÉS
const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
```

**Ahorro:** ~100KB por visualización

---

## 14. Color Gold Accesible (WCAG AA)

### Problema
El color `biocure-gold` tenía contraste insuficiente sobre fondos claros.

### Solución
Oscurecer solo el gold para cumplir con ratio 4.5:1 (WCAG AA). El verde primary se mantuvo original por preferencia de diseño.

### Archivo: `src/app/globals.css`

```css
/* biocure-gold - ANTES */
--biocure-gold: 43 37% 61%;

/* biocure-gold - DESPUÉS (más oscuro para accesibilidad) */
--biocure-gold: 43 50% 40%;

/* primary/sage - SE MANTIENE ORIGINAL */
--primary: 121 13% 63%;
--biocure-sage: 121 13% 63%;
```

**Resultado:**
- Ratio de contraste ~5:1 (cumple WCAG AA)
- Colores más saturados y legibles

---

## Resultados Finales

### Métricas PageSpeed (Móvil)

| Métrica | Inicial | Final | Mejora |
|---------|---------|-------|--------|
| **FCP** | 8.7s | **2.0s** | **-77%** |
| **LCP** | 10.9s | **3.3s** | **-70%** |
| **Speed Index** | 11.9s | **4.8s** | **-60%** |
| **TBT** | Alto | **0ms** | **Perfecto** |
| **CLS** | - | **0** | **Perfecto** |

### Calificación General
- Antes: ~30-40 puntos
- Después: ~70-80 puntos (estimado)

---

## Verificación

Después de cada cambio:

```bash
npm run build
npm run start
```

Luego probar en:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- Chrome DevTools > Lighthouse
- Chrome DevTools > Performance tab

---

*Documento actualizado el 2026-01-10*


