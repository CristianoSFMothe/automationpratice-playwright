import { test, expect } from '@playwright/test';
import { RegisterPage } from './pages/registerPage';

test('Dado que o usuário acessa a página de cadastro da loja virtual', async ({ page }) => {
  const registerPage = new RegisterPage(page)

  await registerPage.acessarPaginaCadastro()

  await registerPage.preencherFormulario(
    'Cristiano Ferreira',
    'cristiano@email.com',
    'Abc@123'
  );

  await registerPage.confirmarCadastro();

  await registerPage.validarCadastroBemSucedido('Cristiano Ferreira');
});