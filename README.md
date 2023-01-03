# Compra rápida al carrito

## Preview

![image](https://user-images.githubusercontent.com/66022141/210424606-b19d7259-10c8-47ef-a450-6a2209b8324c.png)

## Configuración

### Paso 1 - Configuración básica

- Seguir la siguiente guía para instalar el VTEX CLI [link](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-install)

- ingresar a vtex con tu cuenta de usuario con el siguiente comando:

```
vtex login {account-name}
```

### Paso 2 - Clonación de repositorio

- puedes clonar este repositorio en tu maquina local con el siguiente comando en tu terminal:

```
git clone https://github.com/mauroxcf/itgloberspartnercl-quick-order.git
```

### Paso 3 - Editar el Manifest.json

- en el manifest hay un par de valores que toca editar según la cuenta de partner con la que te hayas logueado, que serian:
  `"vendor": "nombre_del_partner"`
  `"name": "nombre_de_la_app_custom"`

### Paso 4 - Instalar apps necesarias

- para instalar aplicaciones necesarias, ingresar a la carpeta de react y ejecutar el siguiente comando:

```
yarn install
```

### Paso 5 - Desinstalar el store-theme predeterminado

- si ha seguido las indicaciones hasta el momento, es posible que tenga el tema de la tienda instalado, para desinstalarlo, ejecute el siguiente comando:

```
vtex uninstall vtex.store-theme@0.0.1
```

### Paso 6 - Ejecute un preview de la tienda

- por ultimo ya con todo instalado en su ambiente, puede ejecutar el siguiente comando para visualizar la tienda en su navegador, si en la consola no arroja errores, debería de mostrarla sin ningún problema:

```
vtex link
```

## Dependencies

1. Store theme

## Store Component Apps

1. "vtex.checkout-graphql"
2. "vtex.search-graphql"
3. "vtex.css-handles"

## Autors ✒️

Mauricio Contreras - [Github :octocat:](https://github.com/mauroxcf) - [Twitter](https://twitter.com/MauroJCF) - [Linkedin](https://www.linkedin.com/in/mauricio-contrerasf/)