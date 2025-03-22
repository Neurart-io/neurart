import { NextResponse } from "next/server";
// The client you created from the Server-Side Auth instructions
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/gerar-imagem";

  // Debug
  console.log(
    "🔑 Callback recebido com código:",
    code ? "presente" : "ausente"
  );

  if (!code) {
    console.error("❌ Código de autenticação não encontrado");
    return NextResponse.redirect(`${origin}/login?error=no_code`);
  }

  try {
    const supabase = await createClient();

    // Troca o código por uma sessão
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("❌ Erro na troca do código por sessão:", error);
      return NextResponse.redirect(
        `${origin}/login?error=${encodeURIComponent(error.message)}`
      );
    }

    // Obter usuário para verificar se a sessão foi criada com sucesso
    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user) {
      console.error("❌ Usuário não encontrado após troca de código");
      return NextResponse.redirect(`${origin}/login?error=user_not_found`);
    }

    console.log("✅ Autenticação bem-sucedida para:", userData.user.email);

    // Adiciona um parâmetro de timestamp para evitar cache
    const timestamp = Date.now();
    return NextResponse.redirect(`${origin}${next}?auth_success=${timestamp}`);
  } catch (err) {
    console.error("❌ Erro no processamento do callback:", err);
    return NextResponse.redirect(`${origin}/login?error=internal_error`);
  }
}
