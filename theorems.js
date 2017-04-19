var data = [

    {
        name: "Definition Ring",
        text: "A ring R is a set with two binary operations, addition (denoted by a + b) and multiplication (denoted by ab), such that for all a, b, c in R:<ol>" +
        "<li>a + b = b + a.</li>" +
        "<li>(a + b) + c = a + (b + c).</li>" +
        "<li>There is an additive identity 0. That is, there is an element 0 in R such that a + 0 = a for all a in R.</li>" +
        "<li>There is an element -a in R such that a + (-a) = 0.</li>" +
        "<li>a(bc) = (ab)c.</li>" +
        "<li>a(b + c) = ab + ac and(b + c)a = ba + ca.</li></ol>"
    },
    {
        name: "Theorem 12.1 Rules of Multiplication",
        text: "Let a, b, and c belong to a ring R. Then <ol>" +
        "<li> a0 = 0a = 0.</li>" +
        "<li> a(-b) = (-a)b = -(ab).</li>" +
        "<li> (-a)(-b) = ab.</li>" +
        "<li> a(b - c) = ab - ac and (b - c)a = ba = ca.</li></ol>" +
        "Furthermore, if R has a unity element 1, then<ol start='5'>" +
        "<li> (-1)a = -a.</li>" +
        "<li> (-1)(-1) = 1.</li>"
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
        text: "A zero-divisor is a nonzero element a of a commutative ring R such that there is a nonzero element b [ R with ab 5 0."
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
/*
        name: "",
        text: ""
    },
    */
];