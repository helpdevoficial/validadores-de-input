export default class Validators {
  campoObrigatorio = (valor) => !!valor || 'Este campo é obrigatório'
  nomeCurto = (valor) => valor.length >= 5 || 'Nome muito curto'
  maiorDeIdade = (valor) => valor >= 18 || 'Usuário não pode ser menor de idade'
  nascimento = (valor) => /(\d{2})[-./](\d{2})[-./](\d{4})/.exec(valor) || 'Data Inválida'
  email = (valor) => /\S+@\S+\.\S+/.exec(valor) || 'Email Inválido'
  telephone = (valor) => /(\d{2})(\d{5})(\d{4})/.exec(valor) || 'Telefone Inválido'
  cpf = (value) => {
    let add
    let rev
    value = value?.replace(/\.|-/g, '')
    if (value === '') return '*CPF inválido'
    // Elimina CPFs invalidos conhecidos
    if (
      value?.length !== 11 ||
      value === '00000000000' ||
      value === '11111111111' ||
      value === '22222222222' ||
      value === '33333333333' ||
      value === '44444444444' ||
      value === '55555555555' ||
      value === '66666666666' ||
      value === '77777777777' ||
      value === '88888888888' ||
      value === '99999999999'
    ) {
      return '*CPF inválido'
    }
    // Valida 1o digito
    add = 0
    for (let i = 0; i < 9; i++) add += parseInt(value.charAt(i)) * (10 - i)
    rev = 11 - (add % 11)
    if (rev === 10 || rev === 11) rev = 0
    if (rev !== parseInt(value.charAt(9))) return '*CPF inválido'
    // Valida 2o digito
    add = 0
    for (let i = 0; i < 10; i++) add += parseInt(value.charAt(i)) * (11 - i)
    rev = 11 - (add % 11)
    if (rev === 10 || rev === 11) rev = 0
    if (rev !== parseInt(value.charAt(10))) return '*CPF inválido'
    return true
  }
}
