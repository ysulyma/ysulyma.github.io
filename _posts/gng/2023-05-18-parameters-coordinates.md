---
layout: post
title: Parameters & coordinates
summary: We distinguish between parametric and implicit equations, and give code for implicit plotting.
image: /assets/social/params-coords.png
---

<meta http-equiv="refresh" content="0; url=https://beta.epiplexis.xyz/gng/cg/params-coords" />
So far we've talked about representing data using (n-tuples of) numbers. In this post I want to take a closer look at how we do this, and distinguish between two different ways of describing spaces.

## Example: the unit circle

Let's start with the example of the unit circle (which we are calling $S^1$). This is defined to be the set of points in the plane which are at distance 1 from the origin $(0, 0).$ Using the Pythagorean theorem (to be discussed in the next chapter), this translates to

{% raw %}

<div>
\[ \{(x, y)\in\R^2 \mid x^2 + y^2 = 1\}. \]
</div>
{% endraw %}

For example, $(1,0),\,(0, -1),$ and $\left(\frac{\sqrt2}2,\frac{\sqrt2}2\right)$ are in the unit circle since

{% raw %}

<div>
\begin{align*}
  1^2 + 0^2 &= 1\\
  0^2 + (-1)^2 &= 1\\
  \left(\tfrac{\sqrt2}2\right)^2 + \left(\tfrac{\sqrt2}2\right)^2
    &= \tfrac12 + \tfrac12\\
    &= 1
\end{align*}
</div>
{% endraw %}
and $(0.3, 0.7)$ is not since
{% raw %}
<div>
\begin{align*}
  0.3^2 + 0.7^2 &= 0.09 + 0.49\\
  &= 0.58\\
  &\ne 1.
\end{align*}
</div>
{% endraw %}

So this description of the unit circle makes it easy to _check_ whether a given point $(x, y)$ is in $S^1$ or not. But it's not easy to _come up_ with examples of points on the circle. Let's start by picking a value for $x,$ e.g. $x=0.3.$ We can rearrange the equation for the circle as follows:

{% raw %}

<div>
\begin{align*}
  x^2 + y^2 &= 1\\
  y^2 &= 1 - x^2\\
  y &= \pm\sqrt{1 - x^2}
\end{align*}
</div>
{% endraw %}

In our case $x=0.3,$ the possibilities for $y$ are $\pm0.7.$ In general, once we fix a value of $x$, we get either one or two options for $y$ (one option if $1-x^2=0,$ i.e. when $x=\pm1.$

However, not every value of $x$ is possible, since we can't take the square root of a negative number. Let's solve for the constraint on $x:$

{% raw %}

<div>
\begin{align*}
  1 - x^2 &\ge 0\\
  1 &\ge x^2\\
  1 &\ge |x|
\end{align*}
</div>
{% endraw %}
which is equivalent to
\\[ -1 \le x \le 1 .\\]

In other words, $x\in[-1, 1].$

We now have two maps

{% raw %}

<div>
\[ f_+,\, f_- \colon [-1, 1] \to S^1 \subset \R^2 \]
</div>
{% endraw %}

given by

{% raw %}

<div>
\begin{align*}
  f_+(x) &= \left(x, \sqrt{1 - x^2}\right)\\
  f_-(x) &= \left(x, -\sqrt{1 - x^2}\right)
\end{align*}
</div>
{% endraw %}

With this description, it's easy to _produce_ examples of points on the unit circle: we just plug in any value of $x$ between $-1$ and $1.$ On the other hand, it's difficult to _check_ whether a given point, say $(0.71, 0.73),$ is on the unit circle: we'd need to reverse the above derivation.

<iframe src="https://www.desmos.com/calculator/eu5pxeb3yb" width="500" height="500"></iframe>

## Implicit, parametric, and explicit descriptions

Let's generalize what we saw in the above example. Let $X$ be a subspace of $\R^n;$ in the example above, $n=2$ and $X=S^1.$

- an <dfn>implicit</dfn> description of $X$ is a system of equations and inequalities whose solutions are exactly $X.$ In the above example, this was $x^2 + y^2 = 1.$

- a <dfn>local parametrization</dfn> of $X$ is a subset $U\subset\R^d$ along with a map $f\colon U\to X.$ In the above example, $d=1,$ $U=[-1, 1],$ and both $f_+$ and $f_-$ are local parametrizations. The _local_ is there because a local parametrization may not see all of $X,$ e.g. $f_+$ only sees the top half of the circle, and $f_-$ only sees the bottom half.

- a <dfn>parametric</dfn> description of $X$ is a collection of local parametrizations of $X$ which are "_jointly_ surjective" in the sense that every $x\in X$ is in the image of at least one local parametrization. In the example above, $(0, -1)$ is not in the image of $f_+,$ but it is in the image of $f_-.$

- an <dfn>explicit</dfn> description is when we can isolate one variable as a (single-valued) function of the others, such as
  \\[ z = -y + x \\]
  This is both a parametric equation _and_ an implicit equation: viewing $x$ and $y$ as parameters, we can plug in any value for them and then find the necessary value of $z;$ and we can easily check whether any given $(x,y,z)$ satisfies the equation.

  Being able to find an explicit description of a space is rare, since it implies that if you fix all but one coordinate, there is at most one possibility for the last coordinate. This is not true for the circle, since e.g. there are two possibilities for $(0, \mathord ?),$ namely $(0,1)$ and $(0,-1).$ However, it's always possible to find explicit descriptions _locally_:
  \\[ y = \sqrt{1-x^2} \\]
  is an explicit description of the top half of the circle, even though an explicit description can't exist for the entire circle.

We can think about "solving equations" very generally as trying to convert between implicit and parametric descriptions of a space.

<table>
  <thead>
    <tr>
      <th></th>
      <th>Check membership</th>
      <th>Produce examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Parametric</th>
      <td>✗</td>
      <td>✓</td>
    </tr>
    <tr>
      <th>Implicit</th>
      <td>✓</td>
      <td>✗</td>
    </tr>
    <tr>
      <th>Explicit</th>
      <td>✓</td>
      <td>✓</td>
    </tr>
  </tbody>
</table>

<aside class="block remark">
  <header>Remark.</header>
  A given space will admit many different parametrizations, and we often need to convert between two different parametrizations. The more common way of parametrizing the unit circle, which we will discuss in the next chapter, is by <em>angles</em>. For <em>nearly</em> all purposes, this is a more convenient parametrization than the one we found above.
</aside>

<aside class="block remark">
  <header>Remark.</header>
    There are typically some other assumptions that we impose on parametrizations.

    <ul>
      <li>
        $f$ is supposed to be "injective away from the boundary of $U$". I don't want to give a precise definition of this; in the case of $U=[-1, 1],$ it means we'd allow $f(-1)=f(1),$ but we'd require that $f$ be <a href="/2023/05/10/maps.html#terminology">injective</a> when restricted to $(-1, 1).$
      </li>
      <li>
        $U$ is supposed to be "full-dimensional", i.e. "$d$-dimensional". Again, I don't want to make this precise here, but for example a finite set of points $\{0,0.5,1\}$ would not be an allowed subset of $\R^1.$
      </li>
    </ul>
    The first condition puts an upper bound on the value of $d\colon$ for example, there are no injective maps $\R^2 \to S^1$ (this is maybe intuitively true, but very hard to prove). The maximum value of $d$ is called the <dfn>dimension</dfn> of $X.$ For example, the unit circle is considered 1-dimensional (even though it lives in 2-dimensional space).
</aside>

## Coordinates

Let me give a slightly different perspective on implicit descriptions which is more symmetric with parametric descriptions.

Let's think an object in motion, e.g. a cow hurtling through the air, and freeze at a particular moment in time. Let $S$ be the space of all possible situations like this. Given such a situation $s\in S,$ there are various quantities we can measure:

- the kinetic energy $E(s)$ of the object;
- the mass $m(s)$ of the object;
- the speed $v(s)$ of the object.

If we pick units of measurement, (say joules for energy, kilograms for mass, and meters per second for speed), then we can view these as three maps $E,m,v\colon S \to \R.$ [Recall](/2023/05/10/maps.html#maps-into-a-product) that three maps $S\to\R$ can equivalently be viewed as a _single_ map $(E,m,v)\colon S\to\R^3.$ Not every point $(x,y,z)\in\R^3$ can be hit by this map: physics tells us that these quantities must satisfy the constraint

\\[ E = \frac12 mv^2 \\]
so we will only hit points in
{% raw %}

<div>
\[ \{ (x,y,z) \in \R^3 \mid x = \tfrac12 yz^2 \}. \]
</div>
{% endraw %}

A <dfn>coordinate</dfn> on a space $S$ is a map $S\to\R.$ A <dfn>coordinate system</dfn> is a collection of coordinates $x_1,\dotsc,x_n\colon S\to \R$ such that the induced map
\\[ (x_1,\dotsc,x_n)\colon S\to \R^n \\]
is injective. In many cases, it is difficult to find a "global" coordinate system, but we may be able to find a _local_ coordinate system
{% raw %}

<div>
\[ (x_1, \dotsc, x_n) \colon U \to \R^n \]
</div>
{% endraw %}
where $U\subset S$ is a subset of $S$ (similar to local parametrizations, above).

The upshot of this discussion is that we can view parametrizations of $X$ as maps $\R^n\to X,$ and coordinate systems on $X$ as maps $X\to\R^n.$ This also applies to local parametrizations/coordinate systems if we allow a subspace $U\subset X$ in place of the entire $X.$

## Marching squares / cubes

We won't be able to solve every system of equations algebraically---in fact, it's extremely rare that we can. So how can we visualize spaces that are given to us implicitly?

We take advantage of the fact that it's easy to _test_ whether a given point belongs to an implicitly defined subspace. Let's take the example
{% raw %}

<div>
\[ 2y(y^{2}-3x^{2})(1-z^{2})+(x^{2}+y^{2})^{2}-(9z^{2}-1)(1-z^{2})=0 \]
</div>
{% endraw %}
(I just took this example from Wikipedia). If we plug in the point $(0.5,0.9,0.9),$ the left-hand side works out to $\approx-0.051.$ That means this point is _not_ in $S$. But $-0.051$ is _close_ to $0$, so there's probably a point _near_ $(0.5,0.9,0.9)$ which _is_ in $S.$

Therefore, we can try to graph an implicit equation as follows. We'll restrict our attention to some box, like the cube $[-1,1]^3;$ maybe we know ahead of time that our space is contained in this box, or maybe it's not and we'll only be graphing part of it. We can subdivide this box, take a bunch of sample points from it, and plug them into our equation. Our sample points will almost certainly not satisfy the equation, but we can use how close/far they are from satisfying the equation to get a good idea of what our shape must look like.

The <dfn>marching squares</dfn> / <dfn>marching cubes</dfn> algorithms are sophisticated implementation of this basic idea. They let us graph implicitly defined shapes _without_ finding a parametrization, and are used internally by tools like [Desmos and Grapher](/2023/05/09/plotting.html). We need to cover a bit more math in order to fully understand how these algorithms work, but I can give you source code right now:

<iframe height="600" src="https://ysulyma.github.io/epiplexis/gng/1-coordinate-geometry/5-params-coords/implicit/dist/"></iframe>

[Source](https://github.com/ysulyma/epiplexis/tree/main/gng/1-coordinate-geometry/5-params-coords/implicit)

<nav class="blog-nav">
  <a class="prev"  href="/2023/05/10/maps.html">
    <span class="hint">Previous</span>
    <span class="title">&laquo; Maps</span>
  </a>
</nav>