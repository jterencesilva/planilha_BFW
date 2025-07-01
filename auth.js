const supabase = supabase.createClient(
  'SUA_SUPABASE_URL',
  'SUA_SUPABASE_PUBLIC_ANON_KEY'
);

async function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
  if (error) {
    alert('Erro ao logar: ' + error.message);
  } else {
    window.location.href = "dashboard.html";
  }
}

async function logout() {
  await supabase.auth.signOut();
  window.location.href = "index.html";
}

async function checkSession() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    alert("Você precisa estar logado!");
    window.location.href = "index.html";
  }
}
