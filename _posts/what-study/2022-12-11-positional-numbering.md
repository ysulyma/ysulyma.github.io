---
layout: post
title: Positional numbering
toc: true
draft: true
---

{:toc}

In this post I'm going to talk about writing numbers in different bases.

Our usual way of writing numbers is in _base 10_. This means we represent a number as a sum of multiples of powers of 10. For example,

<div markdown="0">
\begin{align*}
  324 &= 300 + 20 + 4\\
      &= 3\cdot100 + 2\cdot 10 + 4\cdot1\\
      &= \mathbf 3\cdot10^2 + \mathbf 2\cdot 10^1 + \mathbf 4\cdot10^0
\end{align*}
</div>

Writing numbers in another base means we replace 10 with some other number. For example, $13$ is written as $1101$ in binary (base 2), because

<div markdown="0">
\begin{align*}
  13 &= 8 + 4 + 1\\
     &= 1\cdot8 + 1\cdot4 + 0\cdot2 + 1\cdot1\\
     &= \mathbf 1\cdot2^3 + \mathbf 1\cdot2^2 + \mathbf 0\cdot2^1 + \mathbf 1\cdot2^0
\end{align*}
</div>

We can indicate the base with a subscript: $13\_{10} = 1101\_{2}$. Note we're still using base 10 to write the subscript.

If the base is bigger than 10, we need symbols to go beyond the existing digits $0,1,2,3,4,5,6,7,8,9$. Traditionally, this is done using letters. So for instance, A represents 10, B represents 11, and so on, and F represents 15. For example, $173$ in "hexadecimal" (base 16) is $\mathrm{AD}_{16}$, because

<div markdown="0">
\begin{align*}
  173_{10} &= 10\cdot 16 + 13\cdot 1\\
           &= \mathbf A\cdot16^1 + \mathbf D\cdot16^0
\end{align*}
</div>

Here's a demo so you can see how this works with different numbers:

<iframe
  height="450"
  src="https://codesandbox.io/embed/number-bases-demo-ewv48s?fontsize=14&hidenavigation=1&theme=dark&view=preview"
  title="Number bases demo"
  allow="fullscreen"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

There's no _mathematical_ reason to choose 10 as our base, it's just a _cultural_ convention (probably due to us having ten fingers). For example, the Babylonians used base 60 ("sexagesimal"), and the Mayans used base 20 ("vigesimal").

The same idea works to the right of the "decimal point". For instance, $0.75\_{10} = 0.11\_{2}$, because

<div markdown="0">
\begin{align*}
  0.75_{10} &= 0.5 + 0.25\\
             &= \mathbf 1\cdot 2^{-1} + \mathbf1 \cdot{2^{-2}}
\end{align*}
</div>

## Rationality

We have names for different kinds of numbers.

- the _natural numbers_ are $0,1,2,\dots$
- the _integers_ are $\cdots,-2,-1,0,1,2,\dots$
- a _rational_ number is one that can be expressed as a _ratio_ of integers. For example, $\frac12$, $\frac53$, $-\frac{12}7$, and so on.
- numbers which aren't rational are called _irrational_. For example, $\pi$ and $\sqrt2$ are irrational.

Rationality can be seen in the digit representation of a number: a _rational_ number will always have a repeating pattern of digits. For example,

<div markdown="0">
\begin{align*}
  \frac{4}{11} &= 0.36363636\dots\\
\end{align*}
which we write as
\begin{align*}
  \phantom{\frac{4}{11}} &= 0.\overline{36}\phantom{363636\cdots}
\end{align*}
</div>

This includes the case of a _terminating_ expression, which we can think of as a repeating $0$.

Irrational numbers, on the other hand, never fall into a repeating pattern. (This doesn't mean there's "no pattern" to their digits, just that it can't be expressed so simply.)

## What does it mean?

### Last digits

### The function analogy

### Convergence
