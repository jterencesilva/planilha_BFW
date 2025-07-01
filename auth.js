const supabase = supabase.createClient(
  'https://bjdpjwibveiabymncbyc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZHBqd2lidmVpYWJ5bW5jYnljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMjk3MzcsImV4cCI6MjA2NjkwNTczN30.ky4_HbYwJ5lfnbhHB5wSxfda6RoDysbAo0KxWSG2Gm0'
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
