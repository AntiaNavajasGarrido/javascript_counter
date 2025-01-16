### README

# Contador Interactivo

Este es un proyecto sencillo de un contador interactivo que permite incrementar, decrementar y reiniciar el valor mostrado en la pantalla.

## Instrucciones para levantar la aplicación

1. **Clonar el repositorio**  
   Clona este repositorio en tu máquina local utilizando el siguiente comando:

   ```bash
   git clone https://github.com/AntiaNavajasGarrido/javascript_counter.git
   ```

2. **Estructura de archivos**  
   La estructura de archivos del proyecto es la siguiente:
   
   ```
   / (directorio raíz)
   ├── index.html
   ├── style.css
   └── app.js
   ```

3. **Abrir el archivo HTML**  
   Una vez clonado el repositorio, abre el archivo `index.html` en tu navegador. Este archivo cargará tanto los estilos como el archivo JavaScript para la funcionalidad de la aplicación.

4. **Uso de la aplicación**  
   La aplicación ofrece tres botones con las siguientes funcionalidades:
   - **Incrementar**: Aumenta el contador en 1.
   - **Decrementar**: Disminuye el contador en 1 (no permite valores negativos).
   - **Reiniciar**: Restablece el contador a 0.

   Además, cuando el contador llegue al valor 7, se mostrará un mensaje especial.

---

## Mejoras Sugeridas

### **Accesibilidad**
   - Falta mejorar la accesibilidad de la aplicación, se podría agregar algunos atributos a los botones y otros elementos interactivos para que los usuarios con discapacidades visuales puedan interactuar mejor con la aplicación utilizando lectores de pantalla.


### **Refactorización del código JavaScript**
   - Actualmente, se repite el mismo bloque de código en cada evento `onclick`. Podría refactorizarlo en una función para evitar duplicación y mejorar la mantenibilidad. 

## Contribuciones

Si deseas realizar mejoras o sugerencias en este proyecto, puedes hacer un fork del repositorio, realizar los cambios que consideres necesarios y enviar un pull request.

---

Este README contiene instrucciones para levantar la aplicación y algunas recomendaciones sobre cómo mejorar la funcionalidad, accesibilidad y usabilidad de la misma.