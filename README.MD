# 🌐 Página Web de Donaciones a Causas Benéficas

## 📖 Descripción
Este proyecto consiste en una página web sencilla que permite al usuario realizar aportaciones a diferentes **organizaciones benéficas**.  
El objetivo principal no es el diseño visual, sino la **dinámica funcional**, que incluye el registro de donaciones, el cálculo de totales y la presentación de un resumen final.

## ⚙️ Funcionalidades
1. **Listado de organizaciones benéficas**  
   - Se muestran al menos **10 organizaciones** con su logo, nombre y un importe fijo de aportación (diferente para cada una).  
   - El importe **no puede ser modificado** por el usuario.  

2. **Registro de aportaciones**  
   - Cada vez que el usuario hace clic sobre la **imagen de una organización**, se añade una aportación en su lista personal.  
   - El sistema lleva el conteo de:
     - Número total de aportaciones.
     - Dinero acumulado donado.

3. **Resumen final de aportaciones**  
   - Al final de la página existe un área visible y un botón **"Finalizar trámite"**.  
   - Al pulsarlo:
     - Se muestra la lista de organizaciones en las que se ha donado.  
     - Cada organización aparece **solo una vez**, junto al número de aportaciones realizadas.  
     - El listado se ordena en **orden alfabético inverso**.  
     - Se añade el **monto final donado**.  
     - Se calcula el **precio medio por aportación**.  

   
4. **Reinicio del sistema**  
- Una vez finalizado el trámite:
  - Se limpian las variables internas y arrays.  
  - Si el usuario hace clic en una nueva organización, se inicia **un nuevo ciclo de donaciones**, borrando el resultado mostrado anteriormente.

## 🛠️ Tecnologías utilizadas
- **HTML5** → Estructura de la página.  
- **CSS3** → Estilos básicos (aunque el diseño es secundario en este proyecto).  
- **JavaScript (Vanilla)** → Lógica para el registro de aportaciones, cálculos y renderizado del resumen.  

## 🚀 Uso
1. Abrir la página en el navegador (`index.html`).  
2. Seleccionar organizaciones haciendo clic en sus **imágenes**.  
3. Revisar las aportaciones acumuladas en la parte inferior de la página.  
4. Pulsar el botón **"Finalizar trámite"** para ver el resumen.  
5. Si se desea iniciar una nueva ronda de donaciones, simplemente hacer clic en cualquier logo de organización.  



