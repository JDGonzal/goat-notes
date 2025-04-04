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
>### Abrir el archivo **`package.json`** y borra todos los _carets_ (`^`).

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

## 3. Add shacn/ui, Dark Mode, and Toast (0:06:48)

1. De este sitio [shadcn/ui](https://ui.shadcn.com/docs/installation/next),
copiamos el comando para ejecutar en una `TERMINAL`:
```bash
pnpm dlx shadcn@latest init
```
Seleccionamos lo siguiente:
* Neutral

2. De este sitio [Dark mode](https://ui.shadcn.com/docs/dark-mode/next),
copiamos el comando para ejecutar en una `TERMINAL`: 
```bash
pnpm add next-themes
```
3. Creamos la carpeta **"providers"** dentro de **"src"**.
4. Dentro de esta nueva carpeta creamos el archivo 
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
5. Copiamos esto del mismo sitio, en el archivo **`layout.tsx`**, 
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

6. De este sitio [Toast](https://ui.shadcn.com/docs/components/toast),
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

7. Volvemos al arhivo **`layout.tsx`** y ponemos el rederizado o 
llamoado a `<Toaster/>` dentro del `<ThemeProvider`, y luego
la respectiva importación:  
`import { Toaster } from "@/components/ui/sonner";`

## 4. Build Header (0:08:48)

1. Creamos en la carpeta **"src/components"** el archivo **`Header.tsx`**
y le escribimos el _snippet_ de `rfce`:
```js
import React from "react";

function Header() {
  return <div>Header</div>;
}

export default Header;
```
>[!TIP]  
>Estos _snippet_ se logran por que en `Visual Studio Code` se tiene 
>instalada en `Extensions`  el `Simple React Snippets` de `Burke Holland`.

2. Cambiamos en el código el elemento `<div` por `<header`.
3. Cambio el código de **`Header.tsx`**, por esto:
```js
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header>
      <Link href="/">
        <Image 
        src="/goatius.png"
        height={60}
        width={60} 
        alt="logo" 
        className="rounded-full"
        priority/>
      </Link>
    </header>
  );
}

export default Header;
```
4. Lo renderizamos o llamamos en el archivo **`layout.tsx`**, justo
antes de `{children}`, y tambien hacer la importación:
```js
...
import Header from "@/components/Header";
...
export default function RootLayout(...) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider{/* mas propiedades */}> 
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
```
* Así se ve hasta el momento el browser:  
![localhost:3000 + Header](images/2025-03-20_102626.png "localhost:3000 + Header")

5. En el archivo **`layout.tsx`**, encerramos el `<Header` y el
`{children}`, dentro de un elemento `<div>`, con un `className`:
```js
          <div className="flex min-h-screen w-full flex-col">
            <Header />
            {children}
          </div>
```
6. Encierro entre un elemento `<main` a `{children}` con un `className`:
```js
            <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
              {children}
            </main>
```
7. Regreso al archivo **`Header.tsx`** y agrego un `className`y un
`style` al elemento `<header`:
```js
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      ...
    </header>
```
>[!WARNING]  
>Sale un error en `shadow`, mas adelante se hará el arreglo.

8. En la carpeta **"src/styles"**, agreo el archivo **`utils.ts`**, con 
este código:
```js
const glowColor = "rgba(59, 130, 246, 0.3)";

export const shadow = `0 0 5px ${glowColor}, 0 0 10px ${glowColor}, 0 0 15px ${glowColor}, 0 0 20px ${glowColor}`;
```
9. Regreso a **`Header.tsx`** y añado la importación del nuevo archivo
de **`utils.ts`**:
```js
import { shadow } from "@/styles/utils";
```
* Así se ve el browser, hasta el momento:  
![localhost:3000 + styles](images/2025-03-20_135822.png "localhost:3000 + styles")

10. Agrego un `<h1>`, conteniendo un `<span>`, justo debajo del elemento
`<Image`:
```js
        <h1 className="flex flex-col pb-1 text-2xl leading-6 font-semibold">
          GOAT <span>Notes</span>
        </h1>
```
11. Agrego un elemento `<div>` debajo del que cierra `</Link>`:
```js
      <div className="flex gap-4"></div>
```
12. Creo una constante `user` y la inicializo con `null` al inicio de
la función `Header()`:
```js
  const user = null;
```
13. Al momento de renderizar `<Link` le ponemos una `className`:
```js
      <Link className="flex items-end gap-2" href="/">
        ...
      </Link>
```
14. Dentro de este nuevo `<div`, hacemos uso de `user`:
```js
      <div className="flex gap-4">{user ? "logout" : <></>}</div>
```
15. De este sitio [Button](https://ui.shadcn.com/docs/components/button),
copiamos el comando para ejecutar en una `TERMINAL`:
```bash
pnpm dlx shadcn@latest add button
```
16. En medio del elemento vacío de `<>`, agrego el renderizado o 
llamado al componente `<Button>`, y por ende la importación:
```js
...
import { Button } from "./ui/button";

function Header() {
  ...
  return (
    <header {/* Propiedades */}>
      <Link {/* Propiedades */}>
        ...
      </Link>

      <div {/* Propiedades */}>
        {user ? (
          "logout"
        ) : (
          <>
            <Button></Button>
          </>
        )}
      </div>
    </header>
  );
}
```
18. Dentro del renderizado de `<Button` agregamos un `<Link`:
```js
            <Button>
              <Link href="/login">Login</Link>
            </Button>
```
19. A `<Button` le agregamos la propiedad `asChild`.
20. Copio este `<Button` y cambio el contenido por `/Sign-up` y `Sign Up`:
```js
      <div className="flex gap-4">
        {user ? (
          "logout"
        ) : (
          <>
            <Button asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
      </div>
```
21. Al `<Button` de `Login` le agrego como propiedad `variant="outline"`.
22. Al `<Link` de `Sign Up` le agrego un `className`:
```js
      <div className="flex gap-4">
        {user ? (
          "logout"
        ) : (
          <>
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">
                Sign Up
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
      </div>
```
23. En la carperta **"src/components"**, creo el archivo de nombre
**`DarkModeToggle.tsx`**.
24. Del sitio [Dark mode](https://ui.shadcn.com/docs/dark-mode/next), busco el paso `4.` y doy click en `Code`, para copiar el contenido y 
llevarlo al archivo nuevo.
25. Hago unos ajustes para que el nombre de la función sea
`DarkModeToggle()` y la exportación por defecto al final:
```js
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DarkModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DarkModeToggle;
```
>[!WARNING]  
>Tenemos un error en la importación de `"@/components/ui/dropdown-menu"`,
>ya veremos como se soluciona.

26. De este sitio [Dropdown Menu](https://ui.shadcn.com/docs/components/dropdown-menu),
copiamos el comando para ejecutar en una `TERMINAL`:
```bash
pnpm dlx shadcn@latest add dropdown-menu
```
27. En el archivo **`Heaeder.tsx`**, hacemos el renderizado o llamado al
componente `<DarkModeToggle`, antes de cerrar `</div>`, y por
ende la importación.

Así finalmente luce el browser con los tres botónes:  
![](images/2025-03-20_151951.png "")

>[!TIP]  
>### Abrir el archivo **`package.json`** y borra todos los _carets_ (`^`).

## 5. Build LogOutButton (0:17:21)

1. Creamos en la carpeta **"src/components"**, el archivo de
nombre **`LogOutButton.tsx`** y le ponemos el _snippet_ de `rfce`:
```js
import React from "react";

function LogOutButton() {
  return <div>LogOutButton</div>;
}

export default LogOutButton;
```
2. En el archivo **`Header.tsx`**, cambiamos el texto de `"logout"`,
por el renderizado del `<LogOutButton/>`, tambien añadimos la 
importación.
3. Regresando **`LogOutButton.tsx`**, completamos el código con
componentes como `<Button` y las importaciones faltantes:
```js
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

function LogOutButton() {
  useState
  return (
    <Button>
      {loading ? <Loader2 className="animate-spin" /> : <span>Log Out</span>}
    </Button>
  );
}
```
4. Definimos la constante `loading` como un `useState`, dentro de la 
función `LogOutButton()`:
```js
  const [loading, setloading] = useState(false);
```
5. En el tope del código añadimos `"use client";`.
6. Para verificar el nuevo botón `Log Out`, en el archivo 
**`Header.txt`**, cambiamos el `const user = null;`, 
por `const user = 1;`.
* Así se ve en el browser:  
![localhost:3000 -> [Log Out]](images/2025-03-20_171745.png "localhost:3000 -> [Log Out]")
7. Volvemos al archivo **`LogOutButton.tsx`** y al renderizado de 
`<Button`, le agrego `variant`, `onClick`, `className` y
`disabled`:
```js
    <Button
      variant="outline"
      onClick={handleLogOut}
      className="w-24"
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : <span>Log Out</span>}
    </Button>
```
8. Agregamos la función faltante de `handleLogOut()`:
```js
  function handleLogOut() {
    console.log("Logging out...");
  }
```
9. Mejoramos la función `handleLogOut()`, haciéndola asincrónica y
los respectivos elementos:
```js
  async function handleLogOut() {
    setloading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setloading(false);
  }
```
* Si le damos clic al botón aparece la imagen del _spin_.
10. Definimos un `{toast}` usando el _hook_ `useToast()`, 
que debe importarse de `'@/hooks/use-toast'`:
```js
import { useToast } from "@/hooks/use-toast";

function LogOutButton()  {
  const {toast} = useToast();

  ...
}
```

>[!WARNING]  
>Nos aparece un error en la importación del _hook_ `{ useToast }`,
>entonces creamos la carpeta **"src/hooks"** y descargamos el archivo 
>[**`use-toast.ts`**](https://github.com/ColeBlender/goat-notes/blob/main/src/hooks/use-toast.ts) del instructor.

>[!WARNING]  
>Reviso el archivo descargado de **`use-toast.ts`** y tengo un error
>pide el componente `toast.tsx`, entonces tocará descargarlo de
>[**`toaster.tsx`**](https://github.com/ColeBlender/goat-notes/blob/main/src/components/ui/toaster.tsx) y
>[*`toast.tsx`**](https://github.com/ColeBlender/goat-notes/blob/main/src/components/ui/toast.tsx), para ponerlos en la 
>carpeta **"src/components/ui"**
11. Seguimos en **`LogOutButton.tsx`**, ye en la función `handleLogOut()`
ponemos la constante `errorMessage` y la usamos en un condicional:
```js
    const errorMesage = null;
    if (!errorMesage) {
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out",
        variant: "success",
      });
    }
```
12. Verificamos el archivo **`toast.tsx`**, como dice el instructor,
en la constante `toastVariants`, que si exista en `variant`,
el valor de :  
`success: "bg-emerald-700",`.
13. En el archivo **`LogOutButton.tsx`**, definimos el _hook_
`useRouter` y lo importamos:
```js
...
import { useRouter } from "next/navigation";

function LogOutButton()  {
  ...
  const router = useRouter();
  ...
}
```
14. Completamos el condicional de `(!errorMesage)`con el `router`
y el `else`:
```js
    if (!errorMesage) {
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out",
        variant: "success",
      });
      router.push("/");
    } else {
      toast({
        title: "Error",
        description: errorMesage,
        variant: "destructive",
      });
    }
```
15. En el archivo **`layout.tsx`**, cambio la importación de
`Toaster` por:
```js
import { Toaster } from "@/components/ui/toaster";
```
>[!WARNING]  
>Sigo hallando errores en el archivo **`toast.tsx`**, relacionado con
>`"@radix-ui/react-toast";`, entonces abro el archivo **`package.json`**
> y añado esto en las `"dependencies:"` -> 
>`"@radix-ui/react-toast": "1.2.5",`,
>paro el proyecto, escribo el comando en la `TERMINAL`
>```bash
>pnpm i
>```
> y reinicio el proyecto con `pnpm dev`.

16. Pruebo con el botón de `[Log Out]` y aparece el mensaje verde en la
parte inferior:  
![[Log Out] -> success](images/2025-03-20_184302.png "[Log Out] -> success")
17. En el archivo **`LogOutButton.tsx`**, cambiamos la definición
de la constante `errorMesage` por `"Error logging out"`, 
presionamos el botón de `[Log Out]`:  
![[Log Out] -> destructive](images/2025-03-20_184802.png "[Log Out] -> destructive")
18. Regresamos el valor de la constante `errorMesage` a `null`.


## 6. Add Auth Pages (0:22:19)

1. En la carpeta **"src/app"**, creamos la carpea **"login"** y dentro el 
archivo **`page.tsx`**, y completamos con el _snippet_ `rfce`:
```js
import React from "react";

function page() {
  return <div>page</div>;
}

export default page;
```
2. Cambiamos todo lo que diga `page` por `LoginPage`.
3. Podemos probar simplemente agregando a la ruta o `URL` la palabra
`/login`:  
![localhost:3000/login](images/2025-03-21_143005.png "localhost:3000/login")
4. Al elemento `<div` le agrego un `className`:
```js
function LoginPage() {
  return (
    <div className="mt-20 flex flex-1 flex-col items-center">LoginPage</div>
  );
}
```
5. Del sitio [Card](https://ui.shadcn.com/docs/components/card),
copiamos el comando para ejecutar en una `TERMINAL`:
```bash
pnpm dlx shadcn@latest add dropdown-menu
```
```bash
pnpm dlx shadcn@latest add card
```
6. Renderizamos este nuevo componente en vez del texto entre el elemento
`<div`, también lo debemos importar:
```js
import { Card } from "@/components/ui/card";
...
function LoginPage() {
  return (
    <div className="mt-20 flex flex-1 flex-col items-center">
      <Card></Card>
    </div>
  );
}
```
7. Agregamos un `className` al nuevo renderizado de `<Card`:
```js
      <Card className="w-full max-w-md"></Card>
```
8. Agregamos en medio del renderizado de `<Card` el elemento
`<CardHeader`, por ende se añade a la importación de `Card`.
9. Al elemento `<CardHeader` le agregamos un `className`:
```js
      <Card className="w-full max-w-md">
        <CardHeader className="mb-4"></CardHeader>
      </Card>
```
10. Dentro de `<CardHeader`, renderizamos `<CardTitle` y le ponemos
en medio la palabra `Login`, también se debe añadir en la importación:
```js
      <Card className="w-full max-w-md">
        <CardHeader className="mb-4">
          <CardTitle>Login</CardTitle>
        </CardHeader>
      </Card>
```
11. Ponemos un `className` al elemento `<CardTitle`:
```js
          <CardTitle className="text-center text-3xl">Login</CardTitle>
```
12. Creamos en la carpeta **"src/components"**, el archivo 
**`AuthForm.tsx`**, le ponemos el _snippet_ `rfce`:
```js
import React from "react";

function AuthForm() {
  return <div>AuthForm</div>;
}

export default AuthForm;
```
13. Regresamos al archivo **`page.tsx`** de la carpeta **"src/app/login"**, renderizamos el nuevo componente `AuthForm`
debajo del cierre de `</CardHeader`, y añadimos la respectiva importación:
```js
import AuthForm from "@/components/AuthForm";
...

function LoginPage() {
  return (
    <div className="mt-20 flex flex-1 flex-col items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="mb-4">
          ...
        </CardHeader>

        <AuthForm />
      </Card>
    </div>
  );
}
```
14. Le ponemos una propiedad a `AuthForm` de nombre `type`:
```js
        <AuthForm type="login"/>
```
>[!WARNING]  
>El error sale porque falta que el archivo **`AuthForm.tsx`**, 
> se reciba y defina esa propiedad o parámetro.
15. De regreso al archivo **`AuthFrom.tsx`**, definimos un `type`
llamado `Props`:
```js
type Props ={
  type: "login" | "signUp";
}
```
16. Ponemos este parámetro o propiedad en la función `AuthForm()`:
```js
function AuthForm({ type }: Props) {
  return <div>AuthForm</div>;
}
```
17. En el tope de **`AuthFrom.tsx`** le ponemos la directiva 
`"use client"`, para que se renderice en el lado del cliente.
18. Añado una constante de nombre `isLoginForm`, dentro de la
función `AuthForm()`:
```js
  const isLoginForm = type === "login";
```
19. Añadimos una constante `router`, de tipo `useRouter`, por ende
debemos importar de `"next/navigation"`:
```js
import { useRouter } from "next/navigation";
...
function AuthForm({ type }: Props) {
  ...
  const router = useRouter();
  ...
}
```
20. Defino otra constante `{toast}` de `useToast()`, por ende también hago la importación de: `"@/hooks/use-toast"`.
21. Creamos la función `handleSubmit()`:
```js
  function handleSubmit(formData: FormData) {
    console.log("formData", formData);
  }
```
22. En el `return` de la función `AuthForm()`, hacemos unos
cambios:
```js
  return <form action={handleSubmit}>AuthForm</form>;
```
23. Cambiamos el texto en medio de `<form` por el renderizado de
`<CardContent`, con la respectiva importación de `"./ui/card"`.
24. Añado en medio del `<CardContent` un elemento `<div`:
25. Del sitio [Label](https://ui.shadcn.com/docs/components/label),
copiamos el comando para ejecutar en una `TERMINAL`:
```bash
pnpm dlx shadcn@latest add label
```
26. Completamos el contenido del `<div` con un `<Label`, que también
debe importarse de `"./ui/label"`:
```js
    <form action={handleSubmit}>
      <CardContent>
        <div>
          <Label htmlFor="email">Email</Label>
        </div>
      </CardContent>
    </form>
```
27. Del sitio [Input](https://ui.shadcn.com/docs/components/input),
copiamos el comando para ejecutar en una `TERMINAL`:
```bash
pnpm dlx shadcn@latest add input
```
28. Debajo del `<Label`, ponemos un `<Input` y hacemos la respectiva 
importación de `"./ui/input"`:
```js
          <Input id="email" name="email" placeholder="Enter your email" type="email" required />
```
29. Añadimos al `<Input` del `email` una propiedad `disabled` que
depende de `isPending`, que lo debemos definir antes con el _hook_
`useTransition`:
```js
...
import React, { useTransition } from "react";
...
function AuthForm({ type }: Props) {
  ...
  const [isPending, startTransition] = useTransition();
  ...
  return (
    <form action={handleSubmit}>
      <CardContent>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input ... disabled={isPending}
          />
        </div>
      </CardContent>
    </form>
  );
}
```
30. Al elemento `<div` del archivo **`AuthFrom.tsx`**, le agregamos un
`className`:
```js
        <div className="flex flex-col space-y-1.5">
```
31. Clonamos todo el elemento `<div`, abajo y le hacemos unos cambios:
```js
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            required
            disabled={isPending}
          />
        </div>
```
32. Añadimos un `className` al renderizado del componente `<<CardConten`:
```js
      <CardContent className="grid w-full items-center gap-4">
```

>[!TIP]  
>Aquí el instructor sugiere tener instalada la extensión 
>`Multiple cursor case preserve` de `Cardinal90`, respetando el
>_camelCase_ o las _MAYÚSCULAS_ o _minúsculas_.

33. Añadimos otro renderizado o llamado de nombre `<CardFooter`,
junto con la importación de `"./ui/card"`, con al menos un
`<Button` adentro, este de los componentes ya importados de 
[`Button`](https://ui.shadcn.com/docs/components/button):
```js
import { CardContent, CardFooter } from "./ui/card";
...
import { Button } from "./ui/button";
...
function AuthForm({ type }: Props) {
  ...
  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        ...
      </CardContent>
      <CardFooter>
        <Button></Button>
      </CardFooter>
    </form>
  );
}
```
34. Al componente `<Button` le añado un condicional ternario, que incluye un componente `<Loader2` de `"lucide-react"`:
```js
        <Button>
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Sign Up"
          )}
        </Button>
```
* Así se ve el aplicativo en el browser:
![localhost:3000/login](images/2025-03-25_155715.png "localhost:3000/login")
35. Cuando renderiza el `<Button` le agrego un `className`:
```js
        <Button className="w-full">
```
36. Al renderizar el `<CardFooter` otro `className`:
```js
      <CardFooter className="mt-4 flex flex-col gap-6">
```
37. Debajo del cierre del `</Button>`, agrego un elemento `<p>`
con un `ClassName` y un condicional ternario:
```js
        <p className="text-xs">
          {isLoginForm
            ? "Don't have an account yet?"
            : "Already have an account?"}{" "}
        </p>
```
38. Antes del cierre de `</p>`, renderizamos un `<Link`, con un 
condicional ternario para el `className` y otro para lo que se
muestra, agregamos la importación de `"next/link"` para `Link`:
```js
        <p className="text-xs">
          {isLoginForm
            ? "Don't have an account yet?"
            : "Already have an account?"}{" "}
          <Link
            href={isLoginForm ? "/sign-up" : "/login"}
            className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50" : ""}`}
          >
            {isLoginForm ? "Sign Up" : "Login"}
          </Link>
        </p>
```
* Así se ve la página del Login en el browser:  
![localhost:3000/login + <p>](images/2025-03-25_162400.png "localhost:3000/login + <p>")
39. Creamos otro archivo de nombre **`sign-up/page.tsx`**,
en la carpeta **"src/app"** y le copiamos todo lo del 
**`login/page.tsx`**, con algunos cambios:
```js
import AuthForm from "@/components/AuthForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

function SignUpPage() {
  return (
    <div className="mt-20 flex flex-1 flex-col items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="mb-4">
          <CardTitle className="text-center text-3xl">Sign Up</CardTitle>
        </CardHeader>

        <AuthForm type="signUp" />
      </Card>
    </div>
  );
}

export default SignUpPage
```

### Actividad final con el link inferior:  
![localhost:3000 login & sign-up](images/2025-03-25_163515.gif "localhost:3000 login & sign-up")


## 7. Create Supabase Project (0:32:12)

>[!TIP]  
> Debemos ingresar a la página de [supabase](https://supabase.com/dashboard), y crear una cuenta con  `github`:
>
>![Supabase con Github](images/2025-03-29_144114.gif "Supabase con Github")

1. Entramos al sitio [supabase](https://supabase.com/dashboard).
2. Si nos falta o no tenemos la _Organization_ de nombre `Tutorials`, 
damos clic al botón `[New Organization]` y le ponemos de nombre
`Tutorials` y damos clic en el botón `[Create Organization]`:  
![Create a new organization](images/2025-03-29_154115.png "Create a new organization")
3. Regresamos al [supabase/dashboard](https://supabase.com/dashboard)
4. Damos clic al boton de `[New Project]` y dejamos la _Organization_ 
de nombre `Tutorials`.
5. Completamos el formulario:
    * Organization: `Tutorials`
    * Project-name: `giat-notes`
    * Database password: ~~xoxoxoxo~~ (Usamos una buena contraseña)
    * Region: `East US (North Virginia)`
* Así se ve el formulario:  
![Create new project](images/2025-03-29_154939.png "Create new project")
6. Y le damos clic en el botón `[Create new project]`:  
![project: goat-notes](images/2025-03-29_160216.png "project: goat-notes")

7. Regresamos a `Visual Studio Code` y creamos un archivo en la 
raíz del proyecto de nombre **`.env.local`** (ojo que empieza con un
punto `.`), con esta información:
```ini
DB_PASSWORD=xoxoxoxo
```
>[!CAUTION]  
>### Reemplazamos el `xoxoxoxo` del archivo **`env.local`**, por la contraseña que usamos cuando creamos el _Project_ en el paso 5.
8. Regresamos al sitio [projects](https://supabase.com/dashboard/projects) y seleccionamos el projecto
que estamos trabajando `goat-notes`.
9. Damos clic en el botón ![](images/2025-03-29_161402.png) y nos vamos abajo al `Session pooler`, copiamos este texto que empieza con
`postgresql://postgres.` y termina con `@aws-0-us-east-1.pooler.supabase.com:5432/postgres` y lo pegamos en el nuevo
archivo **`.env.local`**, con el nombre de `DATABASE_URL`:
```ini
DATABASE_URL=postgresql://postgres...@aws-0-us-east-1.pooler.supabase.com:5432/postgres
```
10. Copiamos el valor de `DB_PASSWORD=` en el espacio de `[YOUR-PASSWORD]` y borramos la línea donde esta `DB_PASSWORD=`.
11. En el Sitio [goat-notes](https://supabase.com/dashboard), 
y cerramos la ventana de `Connect to your project` y abrimos el 
menú de la izquierda para buscar `Project Settings`:  
![Project Settings](images/2025-03-29_174059.png "Project Settings")
* Busco el de `Database`.
12. Damos clic en `API` o `Data API`:
![API o Data API](images/2025-03-29_174928.png "API o Data API")
13. Copiamos el contenido de la `URL` y la pegamos en el archivo
**`.env.local`** con el nombre de `SUPABASE_URL`:
```ini
SUPABASE_URL=https://... .supabase.co
```
14. Copiamos `Project API Keys` el `anon` `public`, en la
variable: `SUPABASE_ANON_KEY`:
```ini
SUPABASE_ANON_KEY=X0X0X0X0X0
```
15. Creamos la variable `NEXT_PUBLIC_BASE_URL`, en el archivo **`.env.local`**:
```ini
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
16. Vamos dentro de `Settings` a `Authentication` y damos clic a 
`General user signup`:
![Sign In/Up](images/2025-03-29_180656.png "Sign In/Up")
* Que Este activo `Allow new users to sign up`.
* Y `Email`.
17. Buscamos la guía para configurar `Supabase` para 
[`Server-Side Auth for Next.js`](https://supabase.com/docs/guides/auth/server-side/nextjs):  
![Server-Side Auth for Next.js](images/2025-03-29_182720.png "Server-Side Auth for Next.js")
18. Copiamos, ajustamos y ejecutamos en una `TERMINAL` de `Visual Studio Code`:
```bash
pnpm install -E @supabase/supabase-js @supabase/ssr
```

## 8. Add Supabase Code (0:35:48)
1. Creamos un archivo **`auth/server.ts`**, en la carpeta
**"src"** y le pegamos el paso 3 del sitio 
[`Server-Side Auth for Next.js`](https://supabase.com/docs/guides/auth/server-side/nextjs).

2. Creamos en la carpeta **"src"**, el archivo de nombre
**`middleware.ts`** y le pegamos los dos del paso 4 del sitio 
[`Server-Side Auth for Next.js`](https://supabase.com/docs/guides/auth/server-side/nextjs).
3. En el archivo **'middleware.ts'**, ponemos los `import` arriba
y corregimos la ruta que está presentando fallas:
```js
import { NextResponse, type NextRequest } from "next/server";
//import { updateSession } from "@/utils/supabase/middleware";
import { createServerClient } from "@supabase/ssr";
```
4. Quitamos las `options` del primer 
`cookiesToSet.forEach(({ name, value, options }) =>`.
5. Corregimos en el archivo **'middleware.ts'** los valores de 
`process.env.`, por los que están en **`.env.local`**:
```js
  ...
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {...},
  );
```
6. Hacemos lo mismo en el archivo **`auth/server.ts`**:
```js
  ...
  return createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {...},
  );
```
7. Comento debajo de `// IMPORTANT: DO NOT REMOVE auth.getUser()`
hasta nates de `// IMPORTANT: You *must* return the`, en el archivo **'middleware.ts'**
8. Comentamos también todo lo relacionado con
`const supabase = createServerClient(`. y lo sustituimos por
un `console.log`:
```js
  console.log("middleware ran");
```
9. Para probar el texto, intercambiamos con el link de `login` a
`Sign Up` y vemos el resultado en la `TERMINAL` de 
`Visual Studio Code`.
10. Regresamos al archivo **`auth/server.ts`** y hacemos estos cambios:
```js
...
export async function createClient() {
  ...
  const client = createServerClient(
    ...
  );

  return client;
}
```
11. Creamos una función de nombre `getUser()`, para ser exportada:
```js
export async function getUser() {
  const { auth } = await createClient();

  const userObject = await auth.getUser();

  if (userObject.error) {
    console.error(userObject.error);
    return null;
  }

  return userObject.data.user;
}
```

## 9. Add Auth Code Logic (0:40:52)

1. En el componente **`AuthForm.tsx`**, en la función 
`handleSubmit()`, cambiamos el `console.log()`, por este código:
```js
  function handleSubmit(formData: FormData) {
    startTransition(async() => {});
  }
```
2. Dentro de la función `handleSubmit(` completamos el
`startTransition()` cpturando los datos de `formData` y creando
tres variables:
```js
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      let errorMessage = null;
      let title = null;
      let description = null;
```
3. Creamos una condicional con dos elementos `Action` para crear mas tarde:
```js

      if (isLoginForm) {
        errorMessage = (await loginAction(email, password)).errorMessage;
        title = "Logged in";
        description = "You have been successfully logged in";
      } else {
        errorMessage = (await signUpAction(email, password)).errorMessage;
        title = "Signed up";
        description = "Check your email for a confirmation Link";
      }
```

>![!WARNING]  
>Los errores son:
>* Cannot find name loginAction .
>* Cannot find name signUpAction .

4. Agregamos otro condicional para mostrar mensajes tipo `toast`:
```js
      if (!errorMessage) {
        toast({
          title,
          description,
          variant: "success",
        });
        router.replace("/"); // En vez de redirigir a la pagina principal, redirigir a la pagina de confirmacion de correo
      } else {
        toast({
          title: "An error occurred",
          description: errorMessage,
          variant: "destructive",
        });
      }
```
5. Creamos un archivo en la carpeta **"src"** de nombre 
**`actions/users.ts`**, con este código:
```js
"use server";

import { createClient } from "@/auth/server";

export async function loginAction(email: string, password: string) {
  try {
    const { auth } = await createClient();
    const { error } = await auth.signInWithPassword({ email, password });
    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
}
```
6. Por el error de `handleError`, creamos en el archivo 
**`lib/utils.ts`**, cramos la función `handleError()` que sea
exportada:
```js
export function handleError(error: unknown) {
  if (error instanceof Error) {
    return { errorMessage: error.message };
  } else {
    return { errorMessage: "An error occurred" };
  }
}
```
7. Regresamos a **`actions/users.ts`** e importamos la 
función:
```js
import { handleError } from "@/lib/utils";
```
8. Clonamos en **`actions/users.ts`**, la función `loginAction()`
con el nombre de `signUpAction()`, con estos ajustes:
```js
export async function signUpAction(email: string, password: string) {
  try {
    const { auth } = await createClient();
    const { data, error } = await auth.signUp({ email, password });
    if (error) throw error;

    const userId =data.user?.id;
    // Acá estamos usando los usuarios de Supabase
    if (!userId) throw new Error("Error signing up");  

    // Add user to database

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
```
9. Regresamos al componente **`AuthForm.tsx`** y ponemos las 
importaciones faltantes:
```js
import { loginAction, signUpAction } from "@/actions/users";
```
10. Antes de Probar, debemos ir al arhivo **`Header.tsx`** y poner la 
función `Header()`de forma `async` y cambiar el valor de `user`:
```js
...
import { getUser } from "@/auth/server";

async function Header() {
  const user = await getUser();

  return (
    ...
  );
}
```
>[!WARNING]  
>Lo anterior arrojará un error en la `TERMINAL`:
>```bash
>Error [AuthSessionMissingError]: Auth session missing!
>    at <unknown> (../../src/GoTrueClient.ts:1210:48)
>    at SupabaseAuthClient._useSession (../../src/GoTrueClient.ts:1065:19)
>    at async SupabaseAuthClient._getUser (../../src/GoTrueClient.ts:1202:13)
>    at async (../../src/GoTrueClient.ts:1186:13)
>    at async (../../src/GoTrueClient.ts:973:17) {
>  __isAuthError: true,
>  status: 400,
>  code: undefined
>}
>```

>[!NOTE]  
>Este es un ejemplo de ejecución ya permitiendo crear un usuario 
>para luego usarlo en el proceso de _login_:  
>![Sign-Up/Login](images/2025-03-31_183212.gif "Sign-Up/Login")

11. Regresamos al archivo **`actions/users.ts`**, creamos una nueva
función de nombre `logOutAction()`:
```js
export async function logOutAction() {
  try {
    const { auth } = await createClient();
    const { error } = await auth.signOut();
    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
}
```
12. Buscamos el componente **`LogOutButton.tsx`**, borramos esto:  
`await new Promise((resolve) => setTimeout(resolve, 1000));`.
13. Cambiamos esto: `const errorMesage = null;` por esto:
```js
    const { errorMessage } = await logOutAction();
```
* Se corrige el uso del nombre correcto de la constante
`errorMessage`.

14. Se presiona el botón `[Log Out]`, se cierra la sesión del usuario
y muestra abajo este mensaje:  
![Logged Out](images/2025-03-31_190841.png "Logged Out")


## 10. Add Prisma Code (0:50:02)

1. Empezamos en este sition [`What is Prisma ORM?`](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma),
y bajamos a la parte de [`How does Prisma ORM work?`](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma#how-does-prisma-orm-work), le damos copiar al texto que
corresponde a `Relational databases`.
2. Creamos en la carpeta **"src"** un archivo de nombre 
**`db/schema.prisma`** y pegamos lo que copiamos antes.
3. Verificamos que las variables en el **`db/schema.prisma`**,
sean las mismas del archivo **`.env.local`**.
4. Hacemos unos cambios en el archivo **`db/schema.prisma`**:
```ini
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Note {
  id        String    @id @default(uuid())
  text      String
  author    User?     @relation(fields: [authorId], references: [id])
  authorId  String?
  creationAt DateTime @default(now())
  updateAt  DateTime  @updatedAt   @default(now())
}

model User {
  id        String    @id @default(uuid())
  email     String    @unique
  posts     Note[]
  creationAt DateTime @default(now())
  updateAt  DateTime  @updatedAt   @default(now())
}
```
>[!CAUTION]
>### Mucho cuidado al usar el nombre del campo `updateAt` y la función `@updatedAt`, es con la `d`, en pasado.
5. Creamos en la carpeta **"src/db"** el archivo **`db/prisma.ts`**
y le copiamos los dato de este sitio [Best practices for using Prisma Client in development](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help#best-practices-for-using-prisma-client-in-development).

>[!WARNING]  
>Nos sale este error en el archivo **`db/prisma.ts`**:
>```diff
>-Cannot find module '@prisma/client' or its corresponding type declarations.. 
>```

6. Vamos a la `TERMINAL` y ejecutamos este comando:
```bash
pnpm add @prisma/client -E
pnpm install prisma --save-dev -E
```
8. Abrimos el archivo **`package.json`** y añadimos una línea en la
zona de `"scripts":`:
```json
{
  "name": "goat-notes",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    ...
    "migrate": "pnpm dlx prisma generate && env $(cat .env.local | xargs) pnpm dlx prisma migrate dev"
  },
  "prisma": {
    "schema": "src/db/schema.prisma"
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
  }
}
```
9. En el archivo **`db/prisma.ts`**, sigue el error, entonces en la
`TERMINAL` ejecutamos este comando:
```bash
pnpm migrate
```

>[!CAUTION]  
>### Error ejecutando el comando de `pnpm migrate`
>```Diff
>-npm error could not determine executable to run
>-npm error A complete log of this run can be found in: ...    
>-ELIFECYCLE  Command failed with exit code 1.
>```
>En este sitio hallé mucha de la solución a este error:  
>[![Prisma Migrations: A Step-by-Step Guide](images/2025-04-02_153906.png "Prisma Migrations: A Step-by-Step Guide")](https://www.youtube.com/watch?v=ZaCFsFES5yQ)
>
>En Windows se requieren hacer mas pasos:
>1. Instalar la librería `dotenv-cli`:
>```bash
>pnpm add dotenv-cli -D -E
>```
>2. Se ajustó el `"scripts":` de **`package.json`**, para quedar
>así:
>```json
>{
>  ...
>  "scripts": {
>    ...
>    "prisma:generate": "prisma generate --schema=./src/db/schema.prisma",
>    "prisma:migrate": "dotenv -e ./.env.local prisma migrate dev",
>    "migratebash": "pnpm dlx prisma generate && env $(cat .env.local | xargs) pnpm dlx prisma migrate dev"
>  },
>  "prisma": {
>    "schema": "src/db/schema.prisma"
>  },
>  ...
>}
>```
>3. Se ejectutan por aparte dos comandos en la `TERMINAL`,
>el primero:
>```bash
>pnpm prisma:generate
>```
>4. Crea un valor mas en el **`package.json`** de nombre 
>`"goat-notes"`:  
>```json
>  "dependencies": {
>    ...
>    "goat-notes": "file:",
>    ...
>  },
>```
>5. Y esta info en la `TERMINAL`:
>```bash
>Prisma schema loaded from src\db\schema.prisma
>
>✔ Generated Prisma Client (v6.5.0) to .\node_modules\.pnpm\@prisma+client@6.5.0_prisma_fccffc52d17c43e****\node_modules\@prisma\client in 103ms
>
>Start by importing your Prisma Client (See: https://pris.ly/d/importing-client)
>```
>6. Siguiente comando en la `TERMINAL`
>```bash
>pnpm prisma:migrate
>```
>7. Esto aparece en la `TERMINAL`, pide un dato y simplemente le
>escribimos `init`
>```bash
>Prisma schema loaded from src\db\schema.prisma
>Datasource "db": PostgreSQL database "postgres", schema "public" at "aws-0-us-east-1.pooler.supabase.com:5432"
>
>? Enter a name for the new migration: »
>```
>8. Esto aparece en la `TERMINAL`, luego de digitar `init`:
>```dos
>Applying migration `20250402201517_init`
>
>The following migration(s) have been created and applied from new schema changes:
>
>migrations/
>  └─ 20250402201517_init/
>    └─ migration.sql
>
>Your database is now in sync with your schema.
>
>✔ Generated Prisma Client (v6.5.0) to .\node_modules\.pnpm\@prisma+client@6.5.0_prisma_fccffc52d17c43efe****\node_modules\@prisma\client in 116ms
>```
>9. En la carpeta **"src/db"**, tenemos una nueva carpeta de nombre
>**"migrations"** y dentro otras carpetas y archivos, se sugiere 
>no editar ni modificar.
>10. Vamos al sitio de nuestra base de datos en 
>[Supabase/Projects](https://supabase.com/dashboard/projects) y
>vemos que nos parecen tablas nuevas:  
>![Database Tables](images/2025-04-02_153001.png "Database Tables")
>

10. En el archivo **`actions/users.ts`** añadimos a la función
`signUpAction()`, antes del `return` y debajo de 
`// Add user to database` lo siguiente:
```js
    await prisma.user.create({ data: { id: userId, email } });
```
* Así sería la prueba a realizar y verificación en la tabla `user`:  
![prisma.user.create()](images/2025-04-02_172932.gif "prisma.user.create()")


## 11. Build Sidebar (0:58:35)

1. Empezamos teniendo como punto de referencia este sitio
[Sidebar](https://ui.shadcn.com/docs/components/sidebar), y vamos para el punto `2 Add the following colors to your CSS file` y 
lo comparamos con el archivo **`global.css`** y vemos que ya
tiene lo datos cargados previamente.
2. En una `TERMINAL`, del sitio [Sidebar](https://ui.shadcn.com/docs/components/sidebar) 
ejecutamos el comando:
```bash
pnpm dlx shadcn@latest add sidebar -E
```
3. De mismo sitio abajo en `Usage`, detallamos su forma de uso,
y abrimos el archivo **`layout.tsx`** y envolvemos todo el 
elemento `<div`, con `<SidebarProvider>`:
```js
          <SidebarProvider>
            <div className="flex min-h-screen w-full flex-col">
              <Header />
              <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
                {children}
              </main>
            </div>
          </SidebarProvider>
```
* Importar el datos realcionado `import { SidebarProvider } from "@/components/ui/sidebar";`
4. Debajo de la apertura de `<SidebarProvider>`, ponemos este
componente: `<AppSidebar />`.
>[!WARNING]  
>Nos aparece este error:
>```diff
>-Cannot find name 'AppSidebar'.
>```
5. Creamos en la carpeta **"src/components"** el archivo de nombre
**`AppSidebar.tsx`** y del sitio [Sidebar](https://ui.shadcn.com/docs/components/sidebar)
en la parte `components/app-sidebar.tsx` copiamos y pegamos en
el nuevo archivo:
```js
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
```
6. Regresamos al archivo **`layout.tsx`** y ponemos la importación
del nuevo componente:
```js
import { AppSidebar } from "@/components/AppSidebar";
```
* Así nos aparece el browser hasta el momento:  
![Sidebar](images/2025-04-03_111424.png "Sidebar")

7. Hacemos algunos ajustes al componente **`AppSidebar.tsx`**:
```js
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

async  function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;
```
8. Debemos borrar la importación `import { AppSidebar } from "@/components/AppSidebar";` y volver a importar:
```js
import AppSidebar from "@/components/AppSidebar";
```
9. Empezamos añadiendo a la función `AppSidebar()`, algunos 
cambios, antes del `return`, con las respectivas importaciones:
```js
import { getUser } from "@/auth/server";
...
import { prisma } from "@/db/prisma";
import { Note } from "@prisma/client";

async  function AppSidebar() {
  const user = await getUser(); // "@/auth/server"

  let notes : Note[] = []; // "@prisma/client"

  if (user){ // Conditicional para verificar si el usuario existe
    // Query para traer las notas del usuario
    notes = await prisma.note.findMany({ // "@/db/prisma", 
      where: {
        authorId: user.id,
      },
      orderBy: {
        updateAt: "desc",
      },
    });
  }

  return (...);
}
...
```
10. Borramos del componente **`AppSidebar.tsx`**, la línea de
`<SidebarHeader />` y la respectiva importación.
11. Agregamos un `className` al renderizado o llamado del componente
`<SidebarContent`:
```js
      <SidebarContent className="custom-scrollbar">
```
12. Ajustamos el renderizado o llamado de `<SidebarGroup` para dejar
uno solo, llamando otro componente `<SidebarGroupLabel` y la 
respectiva importación:
```js
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
        </SidebarGroup>
```
13. Ponemos un condicional ternario dentro del renderizado de 
`<SidebarGroupLabel`:
```js
          <SidebarGroupLabel>
            {user ? (
              "Your Notes"
            ) : (
              <p>
                <Link href="/login" className="underline">
                  Login
                </Link>{" "}
                to see your notes
              </p>
            )}
          </SidebarGroupLabel>
```
* El `<Link` lo importamos de `"next/link"`.
14. Al renderizado de `<SidebarGroupLabel`, le agregamos un 
`className`:
```js
          <SidebarGroupLabel className="mt-2 mb-2 text-lg">
```
15. Debajo del cierre de `</SidebarGroupLabel>`, ponemos esto:
```js
        <SidebarGroup>
          <SidebarGroupLabel {...}>
           ...
          </SidebarGroupLabel>
          {user && <SidebarGroupContent notes={notes} />}
        </SidebarGroup>
```
>[!WARNING]  
>En la línea de `{user && <SidebarGroupContent notes={notes} />}`
>nos sale un error relacionado con `notes`
>```diff
>-Type '{ notes: { id: string; text: string; authorId: string | null; creationAt: Date; updateAt: Date; }[]; }' is not assignable to type 'IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>'.
  Property 'notes' does not exist on type 'IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>'
>``` 
16. Borramos la importación de `SidebarGroupContent`.
17. Creamos en la carpeta **"src/components"** el archivo de nombre
**`SidebarGroupContent.tsx`**, con el _snippet_ de `rfce`:
```js
import React from "react";

function SidebarGroupContent() {
  return <div>SidebarGroupContent</div>;
}

export default SidebarGroupContent;
```
18. Cambiamos la `import React from "react";` por 
`"use client";`.
19. Añadimos un `Type Props` y la importación `"@prisma/client"`:
```js
"use client";

import { Note } from "@prisma/client";

type Props = {
  notes: Note[]; // "@prisma/client"
};

function SidebarGroupContent(notes: Props) {
  return <div>SidebarGroupContent</div>;
}

export default SidebarGroupContent;
```
20. Regresamos al componente **`AppSidebar.tsx`** y corregimos la 
importación faltante de `<SidebarGroupContent`.
```js
import SidebarGroupContent from "./SidebarGroupContent";
```
21. Regresamos al nuevo componente **`SidebarGroupContent.tsx`**,
para efectuar estos cambios:
```js
"use client";

import { Note } from "@prisma/client";

type Props = {
  notes: Note[]; // "@prisma/client"
};

function SidebarGroupContent(notes: Props) {
  console.log(notes);
  return <div>Your notes here</div>;
}

export default SidebarGroupContent;
```

>[!TIP]  
>### Abrir el archivo **`package.json`** y borra todos los _carets_ (`^`).

## 12. Build Home Page (1:04:25)

1. En el archivo **`app/page.tsx`**, agregamos un
`className`:
```js
    <div className="flex h-full flex-col items-center gap-4">
```
2. El texto de `HomePage` lo cambiamos por un `<div` mas un
`className`:
```js
function HomePage() {
  return (
    <div className="flex h-full flex-col items-center gap-4">
      <div className="flex w-full max-w-4xl justify-end gap-2"></div>
    </div>
  );
}
```
3. Renderizo dos componentes dentro del `<div` interno, y otro 
componente antes de cerrar el `<div` externo:
```js
  return (
    <div className="flex h-full flex-col items-center gap-4">
      <div className="flex w-full max-w-4xl justify-end gap-2">
        <AskAIButton user={user} />
        <NewNoteButton user={user} />
      </div>

      <NoteTextInput noteId={noteId} startingNoteText={note?.text || ""} />
    </div>
  );
```

>[!WARNING]  
>No salen errores por que no existen los componentes:
>* `<AskAIButton `
>* `<NewNoteButton`
>* `<NoteTextInput`

4. La función `function HomePage()`, la hacemos `async` y en una
constante capturamos el `getUser()`:
```js
async function HomePage() {
  const user = await getUser(); // "@/auth/server"
  ...
  );
}
```
5. Creamos otra constante de nombre `noteIdParam`:
```js
  const noteIdParam = (await searchParams).noteId;
```
6. A la función le agregamos un `{searchParams}` de tipo `Props`,
que a su vez lo definimos antes:
```js
...
type Props = {
  searchParams: any;
};

async function HomePage({ searchParams }: Props) {
  ...
}
...
```
7. Definimos mejor el contenido del tipo para `searchParams`:
```js
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
```
8. Definimos dentro de la función la constante `noteId`,
con un ternario:
```js
  const noteId = Array.isArray(noteIdParam)
    ? noteIdParam![0]
    : noteIdParam || "";
```
9. Definimos la constante `note`, importamos a `prisma` de
`"@/db/prisma"`, para hacer un query para obtener las `note`:
```js
  const note = await prisma.note.findUnique({ // "@/db/prisma"
    where: { id: noteId, authorId: user?.id },
  });
```
10. Creamos en la ruta **"src/components"** uno de los componentes
faltantes de nombre **`AskAIButton.tsx`**, y lo completamos
con el _snippet_ de `rfce`:
```js
import React from "react";

function AskAIButton() {
  return <div>AskAIButton</div>;
}

export default AskAIButton;
```
11. Cambiamos `import React from "react";` por `"use client";`.
12. Definimos un `type Props` y lo ponemos como parámetro a la 
función:
```js
...
import { User } from "@supabase/supabase-js";

type Props = { user: User | null} ; // "@supabase/supabase-js"

function AskAIButton({user}: Props) {
  console.log("AskAIButton", user.email);
  return <div>AskAIButton</div>;
}
```
13. En el componente **`app/page.tsx`**, importamos el nuevo componente.
14. Para no dejar el componente  **`app/page.tsx`**, con tantos 
errores, creamos en la misma carpeta **"src/components"**, 
dos componentes con datos muy básicos,
con los nombres **`NewNoteButton.tsx`** y **`NoteTextInput.tsx`**:
* **`NewNoteButton.tsx`**:
```js
"use client";

import { User } from "@supabase/supabase-js";

type Props = { user: User | null} ; // "@supabase/supabase-js"

function NewNoteButton({user}: Props) {
  console.log("NewNoteButton", user?.email);
  return <div>NewNoteButton</div>;
}

export default NewNoteButton;
```
* **`NoteTextInput.tsx`**:
```js
"use client";

type Props = {
  noteId: string;
  startingNoteText: string;
};

function NoteTextInput({ noteId, startingNoteText }: Props) {
  console.log("NoteTextInput", noteId, startingNoteText);
  return <div>NoteTextInput</div>;
}

export default NoteTextInput;
```
15. Completamos la importación de todos los elementos en el 
componente **`app/page.tsx`*:
```js
import AskAIButton from "@/components/AskAIButton";
import NewNoteButton from "@/components/NewNoteButton";
import NoteTextInput from "@/components/NoteTextInput";
```
