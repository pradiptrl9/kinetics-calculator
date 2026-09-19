# First-Order Kinetics Calculator

A lightweight JavaScript tool for calculating reactant concentrations over time using first-order reaction kinetics.

---

## 📌 Overview

In chemical reaction kinetics, a **first-order reaction** depends on the concentration of only one reactant. This script implements the integrated rate law to compute the remaining concentration $[A]_t$ at any given time $t$.

### Mathematical Formula

$$[A]_t = [A]_0 \cdot e^{-k \cdot t}$$

Where:
* **$[A]_0$**: Initial concentration ($\text{M}$ or $\text{mol/L}$)
* **$k$**: Rate constant ($\text{time}^{-1}$, e.g., $\text{s}^{-1}$, $\text{min}^{-1}$)
* **$t$**: Elapsed time
* **$[A]_t$**: Remaining concentration at time $t$

---

## 🚀 Quick Start

### 1. Run in Browser Console
1. Open your browser's Developer Tools (Press `F12` or `Ctrl+Shift+I` / `Cmd+Option+I`).
2. Navigate to the **Console** tab.
3. Copy and paste the contents of `script.js` and hit **Enter**.

### 2. Node.js (Optional)
If you have Node.js installed, execute the script via terminal:
```bash
node script.js
