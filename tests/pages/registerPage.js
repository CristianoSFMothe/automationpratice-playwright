import { expect } from '@playwright/test';
import { REGISTER } from '../elements/registerElements';
import { HOME } from '../elements/homeElements';

export class RegisterPage {
  constructor(page) {
    this.page = page;
  }

  async acessarPaginaCadastro() {
    await this.page.goto('https://automationpratice.com.br/');
    await this.page.getByRole('link', { name: 'Cadastro' }).click();
  }

  async preencherFormulario(name, email, password) {
    await this.page.locator(REGISTER.inputName).fill(name);
    await this.page.locator(REGISTER.inputEmail).fill(email);
    await this.page.locator(REGISTER.inputPassword).fill(password);
  }

  async confirmarCadastro() {
    await this.page.locator(REGISTER.btnRegister).click();
    await this.page.locator(REGISTER.btnOK).click();
  }

  async validarCadastroBemSucedido(nameUser) {
    await expect(this.page.locator(REGISTER.titleAccount)).toBeVisible();
    console.log(await this.page.locator(HOME.userLogin).count());

    // await expect(this.page.getByText(nameUser)).toBeVisible();
    await expect(this.page.locator(HOME.userLogin)).toContainText(nameUser);
    // await expect(page.getByRole('link', { name: ' Acompanhe seu pedido' })).toBeVisible();
  }
}
