const supabase = window.supabase.createClient(
  'https://bjdpjwibveiabymncbyc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZHBqd2lidmVpYWJ5bW5jYnljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMjk3MzcsImV4cCI6MjA2NjkwNTczN30.ky4_HbYwJ5lfnbhHB5wSxfda6RoDysbAo0KxWSG2Gm0'
);

async function login(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('senha').value.trim();

  if (!email || !password) {
    alert("Preencha e-mail e senha.");
    return;
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert("Erro ao logar: " + error.message);
    return;
  }

  setTimeout(() => {
    window.location.href = "index_botao.html";
  }, 500);
}

document.getElementById('btnLogin').addEventListener('click', login);
