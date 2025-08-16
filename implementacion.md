# 🌐 Documentación del Proyecto: Página Web Mr. Morris 🧴

## 📋 Descripción General
Este proyecto consiste en una página web para **vender productos de aseo** y, adicionalmente, ofrecer un área de **préstamos financieros**.  
Se usaron tecnologías simples y accesibles para que la página sea **responsiva, funcional y fácil de mantener**.

---

## 🛠️ Tecnologías Utilizadas
- **HTML5** → estructura principal de la página.  
- **CSS3** (archivo `styles.css`) → estilos y diseño visual.  
- **Bootstrap 5** → framework para diseño responsivo.  
- **JavaScript (archivo `script.js`)** → interactividad y conexión con WhatsApp.  

---

## 📂 Estructura de Archivos

proyecto/
│── index.html # Estructura principal de la web
│── styles.css # Estilos personalizados
│── script.js # Interactividad y lógica


---

## 🧱 Secciones Implementadas

### 1. **Encabezado (Header)**
- Título y descripción del negocio.
- Fondo azul (Bootstrap `bg-primary`) y texto blanco.

### 2. **Sección de Productos**
- Catálogo con tarjetas (cards de Bootstrap).
- Cada producto contiene:
  - Imagen 🖼️  
  - Nombre 🏷️  
  - Precio 💰  
  - Botón de compra en **WhatsApp** (mensaje predefinido).  

### 3. **Sección de Préstamos Financieros**
- Formulario con los campos:
  - Nombre completo 🧑‍💼  
  - Monto solicitado 💵  
  - Teléfono de contacto 📱  
- Botón que redirige a WhatsApp con un mensaje automático:  
  > *"Hola, mi nombre es ___ . Quiero un préstamo por $___ . Mi teléfono de contacto es ___."*

### 4. **Pie de página (Footer)**
- Información de derechos de autor ©.  
- Enlace directo a WhatsApp para contacto.  

---

## 🎨 Estilos Personalizados (CSS)
- Hover en productos: efecto de **zoom + sombra**.  
- Botón de WhatsApp verde con hover más oscuro.  
- Formularios estilizados con margen entre campos.  
- Footer con fondo oscuro y enlaces destacados.  

---

## ⚡ Interactividad (JavaScript)
1. **Formulario de préstamos → WhatsApp**  
   - Captura los datos ingresados.  
   - Genera un enlace dinámico hacia WhatsApp.  
   - Envía el mensaje automáticamente al número configurado.  

2. **Animaciones con Scroll**  
   - Los productos aparecen suavemente al hacer scroll hacia abajo.  

3. **Validaciones básicas**  
   - Si faltan campos en el formulario, muestra una alerta.  

---

## 📲 Integración con WhatsApp
- Los botones de productos y préstamos usan el enlace oficial:  


---

## 🚀 Mejoras Futuras
- Agregar un **buscador de productos**.  
- Cargar productos dinámicamente desde **JavaScript** o una **base de datos**.  
- Conectar el formulario de préstamos a un **backend con correo o base de datos**.  
- Optimizar imágenes para carga rápida.  

---

## 👨‍💻 Autor
**Jean Carlos P.**  
📍 Bogotá, Colombia  
📧 jeancarlos-22@hotmail.com  
