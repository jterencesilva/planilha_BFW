// Inicializa o cliente Supabase
const supabase = window.supabase.createClient(
  'https://bjdpjwibveiabymncbyc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZHBqd2lidmVpYWJ5bW5jYnljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMjk3MzcsImV4cCI6MjA2NjkwNTczN30.ky4_HbYwJ5lfnbhHB5wSxfda6RoDysbAo0KxWSG2Gm0'
);

// Função de login
async function login(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert("Preencha e-mail e senha.");
    return;
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert("Erro ao logar: " + error.message);
    return;
  }

  // Redireciona após login bem-sucedido (com delay para garantir sessão)
  setTimeout(() => {
    window.location.href = "index_botao.html";
  }, 500);
}

// Adiciona o evento de clique ao botão após o DOM estar carregado
document.addEventListener('DOMContentLoaded', () => {
  const btnLogin = document.getElementById('btnLogin');
  if (btnLogin) {
    btnLogin.addEventListener('click', login);
  }
});
