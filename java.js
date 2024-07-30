function validatePassword() {
    var senha = document.getElementById("senha").value;
    var senhaRepetida = document.getElementById("senhaRepetida").value;
  
    // Definir os critérios
    var lengthCriteria = senha.length >= 8;
    var uppercaseCriteria = /[A-Z]/.test(senha);
    var specialCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    var numberCriteria = /[0-9]/.test(senha);
  
    // Atualiza o status dos critérios
    updatePasswordCriteria('length', lengthCriteria);
    updatePasswordCriteria('uppercase', uppercaseCriteria);
    updatePasswordCriteria('special', specialCriteria);
    updatePasswordCriteria('number', numberCriteria);
  
    // Valida se a senha repetida corresponde
    var match = senha === senhaRepetida;
    updatePasswordMatchStatus(match);
  }
  
  function updatePasswordCriteria(id, isValid) {
    var element = document.getElementById(id);
    if (isValid) {
        element.classList.add('valid');
        element.classList.remove('invalid');
    } else {
        element.classList.add('invalid');
        element.classList.remove('valid');
    }
  }
  
  function updatePasswordMatchStatus(isValid) {
    var element = document.getElementById("passwordMatch");
    if (isValid) {
        element.classList.add('valid');
        element.classList.remove('invalid');
        element.textContent = "As senhas coincidem.";
    } else {
        element.classList.add('invalid');
        element.classList.remove('valid');
        element.textContent = "As senhas devem coincidir.";
    }
  }
  
  function validateForm() {
    var senha = document.getElementById("senha").value;
    var senhaRepetida = document.getElementById("senhaRepetida").value;
  
    // Verifica se a senha atende a todos os critérios
    if (senha.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return false;
    }
    if (!/[A-Z]/.test(senha)) {
        alert("A senha deve conter pelo menos uma letra maiúscula.");
        return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
        alert("A senha deve conter pelo menos um caractere especial.");
        return false;
    }
    if (!/[0-9]/.test(senha)) {
        alert("A senha deve conter pelo menos um número.");
        return false;
    }
    if (senha !== senhaRepetida) {
        alert("As senhas digitadas não coincidem.");
        return false;
    }
  
    // Bloqueio para menores de 18 anos
    var idade = document.getElementById("idade").value;
    if (idade < 18) {
        alert("Você deve ter pelo menos 18 anos para se cadastrar.");
        return false;
    }
  
    // Validação do estado e cidade
    var estado = document.getElementById("estado").value;
    var cidade = document.getElementById("cidade").value;
    if (estado === "" || cidade === "") {
        alert("Por favor, selecione um estado e uma cidade.");
        return false;
    }
  
    // Envio bem sucedido
    alert("Cadastro realizado com sucesso!");
    return true;
  }
  
  function habilitarCidades() {
    var estado = document.getElementById("estado").value;
    var selectCidade = document.getElementById("cidade");
    selectCidade.disabled = false;
  
    // Limpa as opções existentes
    selectCidade.innerHTML = "";
  
    // Adiciona as cidades correspondentes ao estado selecionado
    switch (estado) {
        case "SP":
            selectCidade.options.add(new Option("São Paulo", "São Paulo"));
            selectCidade.options.add(new Option("Campinas", "Campinas"));
            selectCidade.options.add(new Option("Santos", "Santos"));
            break;
        case "RJ":
            selectCidade.options.add(new Option("Rio de Janeiro", "Rio de Janeiro"));
            selectCidade.options.add(new Option("Niterói", "Niterói"));
            selectCidade.options.add(new Option("Campos dos Goytacazes", "Campos dos Goytacazes"));
            break;
        case "MG":
            selectCidade.options.add(new Option("Belo Horizonte", "Belo Horizonte"));
            selectCidade.options.add(new Option("Uberlândia", "Uberlândia"));
            selectCidade.options.add(new Option("Juiz de Fora", "Juiz de Fora"));
            break;
        case "ES":
            selectCidade.options.add(new Option("Vitória", "Vitória"));
            selectCidade.options.add(new Option("Vila Velha", "Vila Velha"));
            selectCidade.options.add(new Option("Serra", "Serra"));
            break;
        default:
            selectCidade.options.add(new Option("Selecione um estado primeiro", ""));
            selectCidade.disabled = true;
            break;
    }
  }
  
  function updateCharCount() {
    var textarea = document.getElementById("mensagem");
    var charCounter = document.getElementById("charCounter");
    var maxLength = textarea.maxLength;
    var currentLength = textarea.value.length;
    charCounter.textContent = `${currentLength}/${maxLength} caracteres`;
  
    // Exibe mensagem se o limite de caracteres for atingido
    if (currentLength >= maxLength) {
        charCounter.style.color = 'red';  // Cor de alerta para indicar que o limite foi atingido
    } else {
        charCounter.style.color = '#555';  // Cor normal
    }
  }
  
  // Inicializa a contagem de caracteres
  document.addEventListener('DOMContentLoaded', function() {
    updateCharCount();
  });