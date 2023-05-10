---
layout: post
title: Parameters and coordinates
draft: 1
---

_parameters_ for a space $X$ is a map

$$ \R^n \to X $$

while _coordinates_ refers to a map

$$ X\to\R^n. $$

<iframe
  src="https://codesandbox.io/embed/circle-descriptions-7ob7ru?fontsize=14&hidenavigation=1&theme=dark&view=preview"
  height="500"
  title="Desmos"
  allow="fullscreen"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

We can graph parametric surfaces in THREE.js using [`ParametricGeometry`](https://threejs.org/docs/index.html?q=parametric#examples/en/geometries/ParametricGeometry). For example, here's the graph of the surface

$$
\begin{gather*}
  f \colon [-\pi,\pi]^2 \to \R^3\\
  f(s,t) =
  \begin{bmatrix}
    3\cos(s)(2+\cos(t))\\
    3\sin(s)(2+\cos(t))\\
    (\cos(5s-t)+2)\sin(t)
  \end{bmatrix}
\end{gather*}
$$

<iframe src="https://codesandbox.io/embed/parametricgeometry-demo-kd11ed?fontsize=14&hidenavigation=1&theme=dark&view=preview"
height="500"
     title="ParametricGeometry demo"
     allow="fullscreen"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

(It's fine if you don't know/remember what $\cos$ and $\sin$ are; I'll say what they are, and explain how to construct formulas like this, in Chapter 3.)
