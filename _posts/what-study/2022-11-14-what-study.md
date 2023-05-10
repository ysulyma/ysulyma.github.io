---
layout: post
title: "What do I study?"
---

Over the years, friends, family, and strangers have asked me if I can explain the math that I do. This is tricky; because math is so cumulative, even professional mathematicians usually can't understand each other's work very well unless they work in the same field. (This has the advantage of making it difficult to talk about work at parties.) This series is my attempt to share the stuff I think about and why I think it's so fun.

My area of math is called **homotopy theory**. Historically, this grew out of **topology**, which is a form of **geometry**. Nowadays, it's increasingly viewed as foundational to math itself, so it interacts with a lot of other fields.

In particular, I'm very interested in how it interacts with a subject called **arithmetic geometry**, which tries to incorporate things like prime numbers into geometry. What I mainly do is study **prismatic cohomology** (a hot new thing in arithmetic geometry) from the perspective of **equivariant** homotopy theory. *Equivariant* means having to do with symmetry, in this case the rotational symmetry of a circle.

I'll explain all of these fancy words over the course of many posts. A hyper-condensed overview is at the end of this post.

This field is in a bit of a golden age right now: major papers are being posted nearly every month, and decades-old problems are falling one after another. A lot of math involves revisiting the same basic phenomena from an increasingly sophisticated technical lens. This is especially true in homotopy theory. In some sense, a lot of my research has concerned rounding numbers up and down.

I like to do calculations. I often make graphical illustrations to help myself understand what's going on, and include some of these in my papers. My first goal in this series is to explain what's going on in the following diagram:

<figure>
  <object
    style="background-color: #bbb"
    title="Numbers 1 through 27 with colored bars stacked on top. Every number has a red bar; multiples of 3 (additionally) have an orange bar; multiples of 9 have a yellow bar; and 27 has a green bar."
    data="/assets/q-legendre-3.svg" width="100%"></object>
</figure>

Later, I'll talk about this one:

<figure>
  <img
    alt=""
    src="/assets/grid.svg" />
</figure>

and eventually these guys:

<div style="display:flex;width:200%;margin-left:-50%;justify-items:space-between;gap:2em;">
<figure>
  <img
    alt="64x64 checkerboard, light squares filled with colored shapes"
    src="/assets/slice-2-perfd.svg" width="100%" />
</figure>

<figure>
  <img
    alt="64x64 checkerboard, light squares filled with colored shapes"
    src="/assets/slice-good-2.svg" width="100%" />
</figure>
</div>

# A rapid overview

People are often surprised that math research is still a thing that exists---haven't we, or computers, figured it all out already? To a certain extent, it is true that we can solve any problem described with numbers. (This is a massive oversimplification, but I have precise statements in mind here.) But there are wrinkles. For instance, how do we represent a point on a circle using numbers?

<iframe height="600" src="https://ysulyma.github.io/epiplexis/what-study/topology-demo/dist/">

The standard way is to choose one reference point on the circle (here, the "east coordinate"), and describe other points by their (counterclockwise) angle relative to that point. But now *infinitely* different numbers represent the *same* point: $0^\circ = 360^\circ = 720^\circ = -360^\circ = \dots$

As a result, "division" of angles doesn't work the same way that division of numbers does: $0/3$ is $0,$ but $0^\circ/3$ is $\\{0^\circ,120^\circ,240^\circ\\}.$ When the basic operations we do on numbers are unavailable, or behave differently than usual, we're no longer able to "solve every problem".

<dfn>Homotopy theory</dfn> is (one could say) the study of these "wrinkles" or "redundancies" in how situations or concepts get represented numerically. <dfn>Cohomology</dfn> is one of the main tools; it gives a way to describe these wrinkles quantitatively. In its crudest form, cohomology associates a sequence of numbers to every shape.

There are many different cohomology theories:

- *singular cohomology*

- *de Rham cohomology* is based on *calculus*[^calculus]. Calculus is about *change*: e.g. *velocity* as the rate of change of *position*, or *acceleration* as the rate of change of velocity.

[^calculus]: I mean *differential* calculus here, which is about instantaneous rates of change. There's also *integral* calculus which is about the reverse: accumulated change over time. In cohomology land, integral calculus corresponds to the fact that singular and de Rham cohomology give the same "cohomology numbers".