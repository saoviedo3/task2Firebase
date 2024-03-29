# Task Manager

Este proyecto es una aplicación de gestión de tareas construida con React y Firebase.

## Tecnologías utilizadas

- React.js
- Firebase

## Configuración de Firebase

1. Crea una cuenta en Firebase.
2. Crea un nuevo proyecto.
3. En la Configuracion del proyecto seccion "tus apps" obtener las variables `apiKey`, `authDomain`, y `projectId` con los valores proporcionados por Firebase.
4. En la sección "Firestore Database", crea una nueva colección para las tareas en Firestore.
5. Habilita la autenticación por correo electrónico en la sección "Authentication" de Firebase.

## Como correr el programa

1. Crear el archivo .env a la altura de la raiz del proyecto con el siguiente formato y colocar sus variables
```
      VITE_REACT_APP_FIREBASE_API_KEY=
      VITE_REACT_APP_FIREBASE_AUTH_DOMAIN=
      VITE_REACT_APP_FIREBASE_PROJECT_ID=
```	
      
2. Ingresar a la terminal del proyecto y correr el siguiente codigo para actualizar lo paquetes
```
    npm i
```

3. En la misma terminal correr el siguiente codigo para inciar el proyecto
```
    npm run dev
```

## cambios importantes

1. Configuración de Firebase: Reemplazamos Supabase con Firebase como tu base de datos. Para hacer esto, inicializamos Firebase en tu archivo App.jsx y obtuvimos una referencia a Firestore y Auth.
2. Autenticación: Agregamos autenticación a tu aplicación utilizando Firebase Auth. Creamos un estado para el usuario actual y una función handleLogin que inicia sesión en Firebase Auth con un correo electrónico y una contraseña. Si el usuario no está autenticado, mostramos una página de inicio de sesión. Una vez que el usuario está autenticado, mostramos la aplicación.
3. Formulario de tareas: Actualizamos tu componente TaskForm.jsx para agregar tareas a Firestore en lugar de Supabase. Cuando se envía el formulario, llamamos a la función signInWithEmailAndPassword de Firebase Auth.
4. Lista de tareas: Actualizamos tu componente TaskList.jsx para leer tareas de Firestore en lugar de Supabase. Utilizamos el hook useEffect para llamar a la función fetchTasks cuando se monta el componente. Esta función recupera todas las tareas de la colección ‘tasks’ de tu base de datos Firestore y las establece en el estado local tasks.
5. Eliminación de tareas: También proporcionamos una función deleteTask para eliminar tareas por su id en Firestore.
6. Formulario de inicio de sesión: Creamos un nuevo componente LoginForm.jsx para manejar el inicio de sesión del usuario. Este formulario llama a la función signInWithEmailAndPassword de Firebase Auth cuando se envía y luego pasa el usuario autenticado a la función onLogin.

## Autores

Carol Jacome - Steven Oviedo (Cambios con firebase)

DIEGO MEDARDO SAAVEDRA GARCIA "statick88" (Codigo Original con supabase)
