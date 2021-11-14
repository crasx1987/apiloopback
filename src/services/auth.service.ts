import { /* inject, */ BindingScope, injectable} from '@loopback/core';

// Nuevas librerias
const generator = require("password-generator");
const cryptoJS = require("crypto-js");


@injectable({scope: BindingScope.TRANSIENT})
export class AuthService {
  constructor(/* Add @inject to inject parameters */) { }

  //Generacion de claves
  GenerarClave() {
    const clave = generator(8, false);
    return clave;
  }

  CifrarClave(clave: String) {
    const claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }


  /*
   * Add service methods here
   */
}
