# 🎨 React Three Fiber – 3D Shape Gallery

An interactive **3D Shape Gallery** built with **React**, **React Three Fiber**, **Three.js**, and **TailwindCSS**.

This project demonstrates how React can be used to build **interactive 3D experiences on the web**, not just traditional 2D interfaces.

Users can dynamically change:

* 3D shapes
* colors
* camera controls

All rendered in real-time using **WebGL via Three.js**.

---

# 🚀 Features

✔ Multiple 3D geometries
✔ Real-time shape switching
✔ Dynamic color selection
✔ Multiple camera control systems
✔ Modern UI with TailwindCSS
✔ WebGL powered rendering
✔ Interactive 3D scene

---

# 🧩 Supported Geometries

The application supports the following 3D shapes:

* Box
* Sphere
* Plane
* Cone
* Cylinder
* Torus
* Torus Knot
* Ring
* Circle
* Dodecahedron
* Icosahedron
* Octahedron
* Tetrahedron
* Capsule

Each geometry is rendered with:

* **Lambert material**
* **Wireframe overlay**

to visualize structure.

---

# 🎮 Camera Controls

You can switch between multiple control systems:

| Control             | Description              |
| ------------------- | ------------------------ |
| OrbitControls       | Default orbit camera     |
| FlyControls         | Free movement in scene   |
| PointerLockControls | FPS style control        |
| FirstPersonControls | First person navigation  |
| TrackballControls   | Smooth rotation controls |

---

# 🛠 Tech Stack

* **React**
* **React Three Fiber**
* **Three.js**
* **@react-three/drei**
* **TailwindCSS**
* **WebGL**

---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/r3f-shape-gallery.git
```

Go to the project folder:

```bash
cd r3f-shape-gallery
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Run the Project

Start the development server:

```bash
npm start
```

The project will run at:

```
http://localhost:3000
```

---

# 📂 Project Structure

```
src
 ├── components
 │     └── Shapes.jsx
       └── Hero.jsx
 │
 ├── App.jsx
 └── main.jsx
```

**Hero.jsx**

Contains the main 3D scene, UI controls, and canvas.

**Shapes.jsx**

Contains reusable components for each 3D geometry.

---

# 🎥 Use Case

This project is ideal for learning:

* React Three Fiber
* Three.js basics
* WebGL rendering in React
* 3D geometry in the browser
* Interactive UI with 3D scenes

---

# 🧠 Learning Concepts

You will understand:

* React based WebGL rendering
* Scene setup
* Geometry creation
* Materials and lighting
* Camera controls
* Interactive 3D UI

---

# ✨ Future Improvements

Possible upgrades:

* Environment HDRI lighting
* Texture support
* GLTF model loader
* Physics using Rapier
* Animation system
* Shader materials

---

# 👨‍💻 Author

**Manish Singh**

GitHub
https://github.com/Dot-Name

---

# ⭐ Support

If you like this project, consider giving it a **star ⭐ on GitHub**.
