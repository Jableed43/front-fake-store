# Fake Store Front

## Descripción

Este es un proyecto de Frontend desarrollado como parte de un desafío técnico. La aplicación interactúa con la [Fake Store API](https://fakestoreapi.com/docs) para mostrar una lista de productos y permite a los usuarios ver los detalles de cada producto. Además, se ha implementado un carrito de compras donde los usuarios pueden agregar productos.

## Funcionalidades Implementadas

1. **Visualización de Productos:**
   - Obtención de datos desde la API FakeStore para mostrar una lista de productos en la pantalla principal.
   - Los usuarios pueden ver la información básica de cada producto, como el título, precio y una imagen.

2. **Vista Detalle de Producto:**
   - Los usuarios pueden hacer clic en cualquier producto de la grilla para ver los detalles completos de ese producto, como la descripción y la valoración.

3. **Funcionalidad de Búsqueda:**
   - Implementación de una barra de búsqueda para filtrar los productos por nombre en tiempo real.

4. **Carrito de Compras:**
   - Los usuarios pueden agregar productos al carrito de compras.
   - El carrito de compras muestra los productos agregados, la cantidad y el total.

5. **Login y Registro de usuarios:**
   - Para mantener la privacidad y seguridad del sistema he implementado manejo de usuarios, utilizando un servicio aparte.

## Tecnologías Utilizadas

- **React**: Libreria utilizada para desarrollar la aplicación.
- **Vite**: Herramienta de construcción para la configuración y el desarrollo rápido de la aplicación.
- **Material-UI**: Biblioteca de componentes para React que proporciona una interfaz de usuario atractiva y fácil de usar.
- **React Router**: Librería para manejar la navegación entre las diferentes pantallas.
- **React Query**: Para realizar la gestión de la obtención de datos y el manejo de estados.
- **SweetAlert2**: Para mostrar notificaciones en caso de error o éxito, como alertas de login, carrito, etc.
- **JWT Decode**: Para manejar la decodificación de tokens JWT, necesaria para la autenticación.

## Requerimientos

- **Node.js**: La versión recomendada para correr este proyecto es la `v18.3.1` o superior.
- **NPM**: Para la gestión de dependencias y ejecución de scripts.

## Instrucciones de Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Jableed43/front-fake-store.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd fake-store-front
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Esto iniciará el servidor de desarrollo en `http://localhost:3000` (o el puerto configurado).

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Vite.
