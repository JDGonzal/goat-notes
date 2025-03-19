# Build a Full Stack AI Note Taking App with Next.js and Supabase – Tutorial
## goat-notes

[![Build a Full Stack AI Note Taking App with Next.js and Supabase – Tutorial](images/2025-03-19_110657.png "Build a Full Stack AI Note Taking App with Next.js and Supabase – Tutorial")](https://www.youtube.com/watch?v=6ChzCaljcaI&t=164s)

## 1. Intro (0:00:00)

1. Instalar `NODEJS` y `npm` en su sistema, usando el `nvm`:
  [Instalar múltiples versiones de Node.js en Windows](https://rafaelneto.dev/blog/instalar-multiples-versiones-nodejs-windows/).
```bash
   nvm install [version]
   nvm use [version]
```
2. Verificar las versiones de `NODEJS` instaladas en una `TERMINAL`:
 ```bash
   nvm list
 ```
3. Instalar también el `pnpm` [pnpm installation](https://pnpm.io/installation), es mas rápido que el  `npm`.
4. Instalar [Visual Studio Code](https://code.visualstudio.com/insiders/).

## 2. Start Project (0:02:44)

1. En una `TERMINAL`, ejecutar el comando:
```bash
pnpm dlx create-next-app@latest goat-notes
```
* Responder a las solictudes de la siguiente manera:
```bash
Packages: +1
+
Progress: resolved 1, reused 0, downloaded 1, added 1, done
? Would you like to use TypeScript? » No / Yes <- Yes
? Would you like to use ESLint? » No / Yes -> Yes
? Would you like to use Tailwind CSS? » No / Yes <- Yes
? Would you like your code inside a `src/` directory? » No / Yes <- Yes
? Would you like to use App Router? (recommended) » No / Yes <- Yes
? Would you like to use Turbopack for `next dev`? ... No / Yes <- Yes
? Would you like to customize the import alias (`@/*` by default)? » No / Yes <- No
```
* Hace el proceso de instalación y listo:
```bash
Creating a new Next.js app in e:\tutorials\nodejs\goat-notes.

Using pnpm.

Initializing project with template: app-tw


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- @tailwindcss/postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc
```
2. Cambiamos al directorio que acaba de crear y ejecutamos el comando para inicalizar `Visual Studio Code`:
```bash
cd goat-notes
code .
```
>[!NOTE]  
>Este es el contenido del **`README.md`** que deja:
>```r
>This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
>
>## Getting Started
>
>First, run the development server:
>
>/```bash
>npm run dev
># or
>yarn dev
># or
>pnpm dev
># or
>bun dev
>/```
>
>Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
>
>You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
>
>This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
>
>## Learn More
>
>To learn more about Next.js, take a look at the following resources:
>
>- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
>- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
>
>You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
>
>## Deploy on Vercel
>
>The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
>
>Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>```

>[!NOTE]  
>Este es el contenido del **`.gitignore`**, que aperece:
>```yml
># See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
>
># dependencies
>/node_modules
>/.pnp
>.pnp.*
>.yarn/*
>!.yarn/patches
>!.yarn/plugins
>!.yarn/releases
>!.yarn/versions
>
># testing
>/coverage
>
># next.js
>/.next/
>/out/
>
># production
>/build
>
># misc
>.DS_Store
>*.pem
>
># debug
>npm-debug.log*
>yarn-debug.log*
>yarn-error.log*
>.pnpm-debug.log*
>
># env files (can opt-in for committing if needed)
>.env*
>
># vercel
>.vercel
>
># typescript
>*.tsbuildinfo
>next-env.d.ts
>```
> Se procede a unir con el **`.gitignore`** existente.

3. Puedo ejecutar y ver en el browser lo que va hasta el momento:
```bash
pnpm dev
```
![localhost:3000, inicial](images/2025-03-19_165025.png "localhost:3000")

4. Abrimos **`layout.tsx`**, y removemos del `return`, el `className`
del `<body>`.
5. Borramos las constantes para definir los tipos de letras de
 `geistSans` y `geistMono`.
6. Borramos la importación de:  
`import { Geist, Geist_Mono } from "next/font/google";`.
7. Cambio el `title:` a `GOAT Notes` y el `description:` a
`Build a Full Stack AI Note Taking App with Next.js and Supabase – Tutorial`.
8. En el archivo **`layout.tsx`**, presiono las teclas `[Shift]`
+`[Alt]`+`[F]`

>[!TIP]  
>Si lo anterior no funciona, para _formatear_ el código, tambíen se 
>puede con las teclas `[Shif]`+`[Ctrl]`+`[p]` y escribe o busca
>`Format Document`.

* Así se ve el código de **`layout.tsx`**:
```js
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GOAT Notes',
  description:
    'Build a Full Stack AI Note Taking App with Next.js and Supabase – Tutorial',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
```
9. Abrimos el archivo **`page.tsx`**, borramos todo y lo sustituimos
por el _snippet_ de `rfce`:
```js
import React from 'react';

function page() {
  return <div>page</div>;
}

export default page;
```
10. Cambiamos en las tres(3) veces que dice  `page` por `HomePage`.
11. Creamos la carpeta **"styles"**, dentro de **"src"**.
12. Movemos el archivo **`global.css`** a la nueva carpeta

>[!WARNING]  
>Acá va a generarse un error, enseguida lo vamos a corregir.

13. De regreso al archivo **`layout.tsx`**, hacemos la corrección:
```js
import '../styles/globals.css';
```
o esta:
```js
import '@/styles/globals.css';
```
14. Removemos los cinco(5) archivos de la carpeta **"public"**. 
15. En la carpeta **"public"**, agregamos el archivo 
[github->**`goatius.png`**](https://github.com/ColeBlender/goat-notes/blob/main/public/goatius.png).
16. Tambien borramos el archivo **`favicon.ico`**.
17. Y ponemos en la carpeta **"app"** el archivo 
[github->**`favicon.ico`**](https://github.com/ColeBlender/goat-notes/blob/main/src/app/favicon.ico).
18. Agregamos en una `TERMINAL` el `tailwind` en modo _desarrollo_:
```bash
pnpm add -D -E prettier prettier-plugin-tailwindcss
```
Respuesta esperada en mi ambiente y en la fecha de hoy:
```bash
devDependencies:
+ prettier 3.5.3
+ prettier-plugin-tailwindcss 0.6.11

╭ Warning ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│   Ignored build scripts: sharp.                                                            │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.   │
│                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────╯
```

>[!TIP]  
>Abrir el archivo **`package.json`** y borra todos los _carets_ (`^`).

19. En la raíz del proyecto, creamos el achivo **`.prettierrc`**, con
este código:
```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

>[!IMPORTANT]  
>Solo a modo de prueba inserta esto en el archivo **`page.tsx`**, en
>el elemento `<div>`
>```js
>function HomePage() {
>  return <div className='h-20 bg-red-400 text-blue-300'>HomePage</div>;
>}
>```
>* Y mira como cambia lo visto en el browser.  
>* Luego lo dejas como como estaba.

20. Abre el archivo **`eslint.config.mjs`** y le agregas esta regla:
```js
...
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  }
];
...
```
>[!NOTE]  
>Requerido para que cuando se despliegue en `VERCEL`, no genere errores
>al usar caracteres especiales.
21. De este sitio [shadcn/ui](https://ui.shadcn.com/docs/installation/next),
copiamos el comando para ejecutar en una `TERMINAL`:
```bash
pnpm dlx shadcn@latest init
```
Seleccionamos lo siguiente:
* Neutral

22. De este sitio [Dark mode](https://ui.shadcn.com/docs/dark-mode/next),
copiamos el comando para ejecutar en una `TERMINAL`: 
```bash
pnpm add next-themes
```
23. Creamos la carpeta **"providers"** dentro de **"src"**.
24. Dentro de esta nueva carpeta creamos el archivo 
**`ThemeProvider.tsx`** y copiamos este código del sitio anterior:
```js
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```
25. Copiamos esto del mismo sitio, en el archivo **`layout.tsx`**, 
y debe quedar así:
```js
import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
...
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

>[!TIP]  
>Se sugiere detener el proceso de `pnpm dev` y volverlo a ejecutar

26. De este sitio [Toast](https://ui.shadcn.com/docs/components/toast),
copiamos el comando para ejecutar en una `TERMINAL`:
```bash
pnpm dlx shadcn@latest add toast
```

>[!WARNING]  
>Sale esta advertencia:  
>`The toast component is deprecated. Use the sonner component instead.`
>
>Debo ejecutar en vez del anterior, el que si funciona, copiándolo
> de este sitio [sonner](https://ui.shadcn.com/docs/components/sonner):
>```bash
>pnpm dlx shadcn@latest add sonner
>```

27. Volvemos al arhivo **`layout.tsx`** y ponemos el rederizado o 
llamoado a `<Toaster/>` dentro del `<ThemeProvider`, y luego
la respectiva importación:  
`import { Toaster } from "@/components/ui/sonner";`
