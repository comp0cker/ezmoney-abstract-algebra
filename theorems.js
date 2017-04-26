var data = [

    {
        name: "Definition Ring",
        text: "A ring R is a set with two binary operations, addition (denoted by a + b) and multiplication (denoted by ab), such that for all a, b, c in R:<blockquote><ol>" +
        "<li>a + b = b + a.</li>" +
        "<li>(a + b) + c = a + (b + c).</li>" +
        "<li>There is an additive identity 0. That is, there is an element 0 in R such that a + 0 = a for all a in R.</li>" +
        "<li>There is an element -a in R such that a + (-a) = 0.</li>" +
        "<li>a(bc) = (ab)c.</li>" +
        "<li>a(b + c) = ab + ac and(b + c)a = ba + ca.</li></ol></blockquote>",
        chapter: "12"
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
        "<li> (-1)(-1) = 1.</li></ol></blockquote>",
        chapter: "12"
    },
    {
        name: "Theorem 12.2 Uniqueness of the Unity and Inverses",
        text: "If a ring has a unity, it is unique. If a ring element has a multiplicative inverse, it is unique.",
        chapter: "12"
    },
    {
        name: "Definition Subring",
        text: "A subset S of a ring R is a subring of R if S is itself a ring with the operations of R.",
        chapter: "12"
    },
    {
        name: "Theorem 12.3 Subring Test",
        text: "A nonempty subset S of a ring R is a subring if S is closed under subtraction and multiplication—that is, if a - b and ab are in S whenever a and b are in S.",
        chapter: "12"
    },
    {
        name: "Definition Zero-Divisors",
        text: "A zero-divisor is a nonzero element a of a commutative ring R such that there is a nonzero element b ∈ R with ab = 0.",
        chapter: "13"
    },
    {
        name: "Definition Integral Domain",
        text: "An integral domain is a commutative ring with unity and no zero-divisors.",
        chapter: "13"
    },
    {
        name: "Theorem 13.1 Cancellation",
        text: "Let a, b, and c belong to an integral domain. If a ≠ 0 and ab = ac, then b = c.",
        chapter: "13"
    },
    {
        name: "Definition Field",
        text: "A field is a commutative ring with unity in which every nonzero element is a unit.",
        chapter: "13"
    },
    {
        name: "Theorem 13.2 Finite Integral Domains Are Fields",
        text: "A finite integral domain is a field.",
        chapter: "13"
    },
    {
        name: "Corollary Zₚ is a Field",
        text: "For every prime p, Zₚ, the ring of integers modulo p is a field.",
        chapter: "13"
    },
    {
        name: "Definition Characteristic of a Ring",
        text: "The characteristic of a ring R is the least positive integer n such that nx = 0 for all x in R. If no such integer exists, we say that R has characteristic 0. The characteristic of R is denoted by char R.",
        chapter: "13"
    },
    {
        name: "Theorem 13.3 Characteristic of a Ring with Unity",
        text: "Let R be a ring with unity 1. If 1 has infinite order under addition, then the characteristic of R is 0. If 1 has order n under addition, then the characteristic of R is n.",
        chapter: "13"
    },
    {
        name: "Theorem 13.4 Characteristic of an Integral Domain",
        text: "The characteristic of an integral domain is 0 or prime.",
        chapter: "13"
    },

    {
        name: "Definition Ideal",
        text: "A subring A of a ring R is called a (two-sided) ideal of R if for every r ∈ r and every a ∈ A both ra and ar are in A",
        chapter: "14"
    },

    {
        name: "Theorem 14.1 Ideal Test",
        text: "A nonempty subset A of a ring R is an ideal of R if <blockquote><ol>" +
        "<li>a - b ∈ A whenever a, b ∈ A.</li>" +
        "<li>ra and ar are in A whenever a ∈ A and r ∈ R</li></ol></blockquote>",
        chapter: "14"
    },

    {
        name: "Theorem 14.2 Existence of Factor Rings",
        text: "Let R be a ring and let A be a subring of R. The set of cosets {r + A | r ∈ R} is a ring under the operations (s + A) + (t + A) = s + t + A" +
        "and (s + A)(t + A) = st + A if and only if A is an ideal of R.",
        chapter: "14"
    },

    {
        name: "Definition Prime Ideal, Maximal Ideal",
        text: "A prime ideal A of a commutative ring R is a proper ideal of R such that a, b ∈ R and ab ∈A imply a ∈ A or b ∈A. A maximal ideal of a commutative ring R" +
        "is a proper ideal of R such that, whenever B is an ideal of R and A ⊆ B ⊆R, then B = A or B = R.",
        chapter: "14"
    },

    {
        name: "Theorem 14.3 R/A Is an Integral Domain If and Only If A is Prime",
        text: "Let R be a commutative ring with unity and let A be an ideal of R. Then R/A is an integral domain if and only if A is prime.",
        chapter: "14"
    },

    {
        name: "Theorem 14.4 R/A Is a Field If and Only If A is Maximal",
        text: "Let R be a commutative ring with unity and let A be an ideal of R. Then R/A is an integral domain if and only if A is prime.",
        chapter: "14"
    },

    {
        name: "Theorem 14.4 R/A Is a Field If and Only If A Is Maximal",
        text: "Let R be a commutative ring with unity and let A be an ideal of R. Then R/A is a field if and only if A is maximal.",
        chapter: "14"
    },

    {
        name: "",
        text: "",
        chapter: "14"
    },

    {
        name: "Definitions Ring Homomorphism, Ring Isomorphism",
        text: "A ring homomorphism Φ from a ring R to a ring S is a mapping from R to S that preserves the two ring operations; that is, for all a, b in R," +
        "<blockquote>Φ(a + b) = Φ(a) + Φ(b) and Φ(ab) = Φ(a)Φ(b)</blockquote>" +
        "A ring isomorphism that is both one-to-one and onto is called a ring isomorphism.",
        chapter: "15"
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
        "<li>If Φ is an isomorphism from R onto S, then Φ<sup>-1</sup> is an isomorphism from S onto R.</li></ol></blockquote>",
        chapter: "15"
    },

    {
        name: "Theorem 15.2 Kernels Are Ideals",
        text: "Let Φ be a ring homomorphism from a ring R to a ring S. Then Ker Φ = {r [ R | Φ(r) = 0} is an ideal of R.",
        chapter: "15"
    },

    {
        name: "Theorem 15.3 First Isomorphism Theorem for Rings",
        text: "Let Φ be a ring homomorphism from R to S. Then the mapping from R/Ker Φ to Φ(R), given by r + Ker Φ → Φ(r), is an isomorphism. In symbols, R/Ker Φ ≈ Φ(R)." +
        "<br>Every ideal of a ring R is the kernel of a ring homomorphism of R. In particular, an ideal A is the kernel of the mapping r → r + A from R to R/A.",
        chapter: "15"
    },

    {
        name: "Theorem 15.4 Ideals Are Kernels",
        text: "Every ideal of a ring R is the kernel of a ring homomorphism of R. In particular, an ideal A is the kernel of the mapping r → r + A from R to R/A.",
        chapter: "15"
    },

    {
        name: "Corollary 1 A Ring with Unity Contains Z<sub>2</sub>",
        text: "If R is a ring with unity and the characteristic of R is n > 0, then R contains a subring isomorphic to Z<sub>n</sub>. If the characteristic of R is 0, then R contains a subring isomorphic to Z.",
        chapter: "15"
    },

    {
        name: "Corollary 2 Z<sub>m</sub> Is a Homomorphic Image of Z",
        text: "For any positive integer m, the mapping of Φ: Z S Z<sub>m</sub> given by x → x mod m is a ring homomorphism.",
        chapter: "15"
    },

    {
        name: "Corollary 3 A Field Contains Z<sub>p</sub> or Q",
        text: "If F is a field of characteristic p, then F contains a subfield isomorphic to Z<sub>p</sub>. If F is a field of characteristic 0, then F contains a subfield isomorphic to the rational numbers.",
        chapter: "15"
    },

    {
        name: "Theorem 15.6 Field of Quotients",
        text: "Let D be an integral domain. Then there exists a field F (called the field of quotients of D) that contains a subring isomorphic to D.",
        chapter: "15"
    },

    {
        name: "Definition Ring of Polynomials over R",
        text: "Let R be a commutative ring. The set of formal symbols" +
        "<br>" +
        "<blockquote>R[x] = {a<sub>n</sub>x<sup>n</sup> + a<sub>n-1</sub>x<sup>n-1</sup> + ... + a<sub>1</sub>x + a<sub>0</sub> | a<sub>i</sub> ∈ R, n is a nonnegative integer</blockquote>" +
        "is called the ring of polynomials over R in the indeterminate x.<br>" +
        "Two elements<br>" +
        "<blockquote>a<sub>n</sub>x<sup>n</sup> + a<sub>n-1</sub>x<sup>n-1</sup> + ... + a<sub>1</sub>x + a<sub>0</sub></blockquote>" +
        "and" +
        "<blockquote>b<sub>n</sub>x<sup>n</sup> + b<sub>n-1</sub>x<sup>n-1</sup> + ... + b<sub>1</sub>x + b<sub>0</sub></blockquote><br>" +
        "of R[x] are considered equal if and only if a<sub>i</sub> = b<sub>i</sub> for all nonnegative integers i. (Define a<sub>i</sub> = 0 when i > n and b<sub>i</sub> = 0 when i > m.)",
        chapter: "16"
    },

    {
        name: "Definition Addition and Multiplication in R[x]",
        text: "Let R be a commutative ring and let" +
        "<blockquote>f(x) = a<sub>n</sub>x<sup>n</sup> + a<sub>n-1</sub>x<sup>n-1</sup> + ... + a<sub>1</sub>x + a<sub>0</sub></blockquote>" +
        "and" +
        "<blockquote>g(x) = b<sub>n</sub>x<sup>n</sup> + b<sub>n-1</sub>x<sup>n-1</sup> + ... + b<sub>1</sub>x + b<sub>0</sub></blockquote>" +
        "belong to R[x]. Then" +
        "<blockquote>f(x) + g(x) = (a<sub>s</sub> + b<sub>s</sub>)x<sup>s</sup> + (a<sub>s-1</sub> + b<sub>s-1</sub>)x<sup>s-1</sup> + ... + (a<sub>1</sub> + b<sub>1</sub>)x + a<sub>0</sub> + b<sub>0</sub>,</blockquote>" +
        "where s is the maximum of m and n, a<sub>i</sub> = 0 for i > n, and b<sub>i</sub> = 0 for i > m. Also," +
        "<blockquote>f(x)g(x) = c<sub>m+n</sub>x<sup>m+n</sup> + c<sub>m+n-1</sub>x<sup>m+n-1</sup> + ... + c<sub>1</sub>x + c<sub>0</sub></blockquote>" +
        "where" +
        "<blockquote>c<sub>k</sub> = a<sub>k</sub>b<sub>0</sub> + a<sub>k-1</sub>b<sub>1</sub> + ... + a<sub>1</sub>b<sub>k-1</sub> + a<sub>0</sub>b<sub>k</sub></blockquote>" +
        "for k = 0, ..., m+n.",
        chapter: "16"
    },

    {
        name: "Theorem 16.1 D an Integral Domain Implies D[x] an Integral Domain",
        text: "If D is an integral domain, then D[x] is an integral domain.",
        chapter: "16"
    },

    {
        name: "Theorem 16.2 Division Algorithm for F[x]",
        text: "Let F be a field and let f(x), g(x) ∈ F[x] with g(x) ≠ 0. Then there exist unique polynomials q(x) and r(x) in F[x] such that f(x) = g(x)q(x) + r(x) and either r(x) = 0 or deg r(x) < deg g(x).",
        chapter: "16"
    },

    {
        name: "Corollary 1 Remainder Theorem",
        text: "Let F be a field, a ∈ F, and f(x) ∈ F[x]. Then f(a) is the remainder in the division of f(x) by x - a.",
        chapter: "16"
    },

    {
        name: "Corollary 2 Factor Theorem",
        text: "Let F be a field, a ∈ F, and f(x) ∈ F[x]. Then a zero of f(x) if and only if x - a is a factor of f(x).",
        chapter: "16"
    },

    {
        name: "",
        text: "",
        chapter: "16"
    },

    {
        name: "",
        text: "",
        chapter: "16"
    },

/*
    {
        name: "",
        text: ""
    },
    */
];