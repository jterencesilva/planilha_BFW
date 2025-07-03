// Inicializa Supabase (substitua apenas se criar outro projeto)
const supabase = window.supabase.createClient(
  'https://bjdpjwibveiabymncbyc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZHBqd2lidmVpYWJ5bW5jYnljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMjk3MzcsImV4cCI6MjA2NjkwNTczN30.ky4_HbYwJ5lfnbhHB5wSxfda6RoDysbAo0KxWSG2Gm0'
);

// LOGIN
async function login(event) {
  event.preventDefault(); // impede o reload da página

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert("Preencha e-mail e senha.");
    return;
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("Erro ao logar: " + error.message);
  } else {
    // redireciona após login bem-sucedido
    window.location.href = "index_botao.html";
  }
}

// LOGOUT
async function logout() {
  await supabase.auth.signOut();
  window.location.href = "index.html";
}

// VERIFICAÇÃO DE SESSÃO
async function checkSession() {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    alert("Você precisa estar logado para acessar esta página.");
    window.location.href = "index.html";
  }
}
