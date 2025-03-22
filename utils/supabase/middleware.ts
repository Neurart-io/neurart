import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Rotas que não precisam de autenticação
const publicRoutes = [
  "/login",
  "/registro",
  "/forgot-password",
  "/auth/callback",
  "/",
];

// Rotas protegidas que requerem autenticação
const protectedRoutes = ["/gerar-imagem", "/minhas-imagens", "/suporte"];

export async function updateSession(request: NextRequest) {
  console.log("🔐 Middleware executando para:", request.nextUrl.pathname);

  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: DO NOT REMOVE auth.getUser()
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(
      "🧑 Status do usuário:",
      user ? "Autenticado" : "Não autenticado"
    );

    const { pathname } = request.nextUrl;

    // Verifica se é uma rota pública
    const isPublicRoute = publicRoutes.some((route) =>
      pathname.startsWith(route)
    );
    console.log("📍 Rota pública?", isPublicRoute);

    // Verifica se é uma rota protegida
    const isProtectedRoute =
      protectedRoutes.some((route) => pathname.startsWith(route)) ||
      !publicRoutes.some((route) => pathname.startsWith(route));
    console.log("🛡️ Rota protegida?", isProtectedRoute);

    // Redireciona para login se o usuário não está autenticado e tenta acessar rota protegida
    if (!user && isProtectedRoute) {
      console.log(
        "⚠️ Usuário não autenticado tentando acessar rota protegida. Redirecionando para login."
      );
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }

    console.log("✅ Acesso permitido");
    return supabaseResponse;
  } catch (error) {
    console.error("❌ Erro no middleware:", error);

    // Em caso de erro, permita o acesso para evitar bloqueios completos do site
    return supabaseResponse;
  }
}
