var data = [

    {
        name: "Definition Ring",
        text: "A ring R is a set with two binary operations, addition (denoted by a + b) and multiplication (denoted by ab), such that for all a, b, c in R:<blockquote><ol>" +
        "<li>a + b = b + a.</li>" +
        "<li>(a + b) + c = a + (b + c).</li>" +
        "<li>There is an additive identity 0. That is, there is an element 0 in R such that a + 0 = a for all a in R.</li>" +
        "<li>There is an element -a in R such that a + (-a) = 0.</li>" +
        "<li>a(bc) = (ab)c.</li>" +
        "<li>a(b + c) = ab + ac and(b + c)a = ba + ca.</li></ol></blockquote>"
    },
    {
        name: "Theorem 12.1 Rules of Multiplication",
        text: "Let a, b, and c belong to a ring R. Then <blockquote><ol>" +
        "<li> a0 = 0a = 0.</li>" +
        "<li> a(-b) = (-a)b = -(ab).</li>" +
        "<li> (-a)(-b) = ab.</li>" +
        "<li> a(b - c) = ab - ac and (b - c)a = ba = ca.</li></ol></blockquote>" +
        "Furthermore, if R has a unity element 1, then<blockquote><ol start='5'>" +
        "<li> (-1)a = -a.</li>" +
        "<li> (-1)(-1) = 1.</li></ol></blockquote>"
    },
    {
        name: "Theorem 12.2 Uniqueness of the Unity and Inverses",
        text: "If a ring has a unity, it is unique. If a ring element has a multiplicative inverse, it is unique."
    },
    {
        name: "Definition Subring",
        text: "A subset S of a ring R is a subring of R if S is itself a ring with the operations of R."
    },
    {
        name: "Theorem 12.3 Subring Test",
        text: "A nonempty subset S of a ring R is a subring if S is closed under subtraction and multiplication—that is, if a - b and ab are in S whenever a and b are in S."
    },
    {
        name: "Definition Zero-Divisors",
        text: "A zero-divisor is a nonzero element a of a commutative ring R such that there is a nonzero element b ∈ R with ab = 0."
    },
    {
        name: "Definition Integral Domain",
        text: "An integral domain is a commutative ring with unity and no zero-divisors."
    },
    {
        name: "Theorem 13.1 Cancellation",
        text: "Let a, b, and c belong to an integral domain. If a ≠ 0 and ab = ac, then b = c."
    },
    {
        name: "Definition Field",
        text: "A field is a commutative ring with unity in which every nonzero element is a unit."
    },
    {
        name: "Theorem 13.2 Finite Integral Domains Are Fields",
        text: "A finite integral domain is a field."
    },
    {
        name: "Corollary Zₚ is a Field",
        text: "For every prime p, Zₚ, the ring of integers modulo p is a field."
    },
    {
        name: "Definition Characteristic of a Ring",
        text: "The characteristic of a ring R is the least positive integer n such that nx = 0 for all x in R. If no such integer exists, we say that R has characteristic 0. The characteristic of R is denoted by char R."
    },
    {
        name: "Theorem 13.3 Characteristic of a Ring with Unity",
        text: "Let R be a ring with unity 1. If 1 has infinite order under addition, then the characteristic of R is 0. If 1 has order n under addition, then the characteristic of R is n."
    },
    {
        name: "Theorem 13.4 Characteristic of an Integral Domain",
        text: "The characteristic of an integral domain is 0 or prime."
    },

    {
        name: "Definitions Ring Homomorphism, Ring Isomorphism",
        text: "A ring homomorphism Φ from a ring R to a ring S is a mapping from R to S that preserves the two ring operations; that is, for all a, b in R," +
        "<blockquote>Φ(a + b) = Φ(a) + Φ(b) and Φ(ab) = Φ(a)Φ(b)</blockquote>" +
        "A ring isomorphism that is both one-to-one and onto is called a ring isomorphism."
    },

    {
        name: "Theorem 15.1 Properties of Ring Homomorphisms",
        text: "Let Φ be a ring homomorphism from a ring R to a ring S. Let A be a subring of R and let B be an ideal of S." +
        "<blockquote><ol>" +
        "<li>For any r ∈ R and any positive integer n, Φ(nr) = nΦ(r) and Φ(rn) = (Φ(r))n.</li>" +
        "<li>Φ(A) = {Φ(a) | a ∈ A} is a subring of S.</li>" +
        "<li>If A is an ideal and Φ is onto S, then Φ(A) is an ideal.</li>" +
        "<li>Φ<sup>-1</sup>(B) = {r ∈ R | Φ(r) ∈ B} is an ideal of R.</li>" +
        "<li>If R is commutative, then Φ(R) is commutative.</li>" +
        "<li>If R has a unity 1, S ≠ {0}, and Φ is onto, then Φ(1) is the unity of S.</li>" +
        "<li>Φ is an isomorphism if and only if Φ is onto and Ker Φ = {r ∈ R | Φ(r) = 0} = {0}.</li>" +
        "<li>If Φ is an isomorphism from R onto S, then Φ<sup>-1</sup> is an isomorphism from S onto R.</li></ol></blockquote>"
    },

    {
        name: "Theorem 15.2 Kernels Are Ideals",
        text: "Let Φ be a ring homomorphism from a ring R to a ring S. Then Ker Φ = {r [ R | Φ(r) = 0} is an ideal of R."
    },

    {
        name: "Theorem 15.3 First Isomorphism Theorem for Rings",
        text: "Let Φ be a ring homomorphism from R to S. Then the mapping from R/Ker Φ to Φ(R), given by r + Ker Φ → Φ(r), is an isomorphism. In symbols, R/Ker Φ ≈ Φ(R)." +
        "<br>Every ideal of a ring R is the kernel of a ring homomorphism of R. In particular, an ideal A is the kernel of the mapping r → r + A from R to R/A."
    },

    {
        name: "Theorem 15.4 Ideals Are Kernels",
        text: "Every ideal of a ring R is the kernel of a ring homomorphism of R. In particular, an ideal A is the kernel of the mapping r → r + A from R to R/A."
    },

    {
        name: "Corollary 1 A Ring with Unity Contains Z<sub>2</sub>",
        text: "If R is a ring with unity and the characteristic of R is n > 0, then R contains a subring isomorphic to Z<sub>n</sub>. If the characteristic of R is 0, then R contains a subring isomorphic to Z."
    },

    {
        name: "Corollary 2 Z<sub>m</sub> Is a Homomorphic Image of Z",
        text: "For any positive integer m, the mapping of Φ: Z S Z<sub>m</sub> given by x → x mod m is a ring homomorphism."
    },

    {
        name: "Corollary 3 A Field Contains Z<sub>p</sub> or Q",
        text: "If F is a field of characteristic p, then F contains a subfield isomorphic to Z<sub>p</sub>. If F is a field of characteristic 0, then F contains a subfield isomorphic to the rational numbers."
    },

/*
    {
        name: "",
        text: ""
    },
    */
];