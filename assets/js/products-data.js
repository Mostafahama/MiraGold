/**
 * Mira Gold Products Database
 * Auto-generated from Excel data
 */

const products = [
    {
        id: 1,
        category: "anti-aging",
        title: "ETERNA SERUM",
        subtitle: "Advanced Anti-Aging Serum",
        volume: "50ml",
        type: "BOTTLE",
        description: "Reduces wrinkles, stimulates collagen production, and gives the skin a firm and youthful appearance.",
        activeIngredients: "Niacinamide, Sodium Ascorbyl Phosphate (Vitamin C), Sodium Hyaluronate, Panthenol (Vitamin B5)",
        instructions: "Apply 2-3 drops to clean face. Massage gently until absorbed. Use morning and night.",
        howToUse: "Apply to clean skin morning and evening. Use regularly for best anti-aging results.",
        image: "assets/images/products/Eterna Serum 50ML.webp",
        colorCode: "#2C3E50"
    },
    {
        id: 3,
        category: "anti-aging",
        title: "LUMA PEEL CREAM",
        subtitle: "Cold Peel Home Care",
        volume: "50ml",
        type: "BOTTLE",
        description: "Gently exfoliates, evens skin tone, and helps remove spots and pigmentation for a clearer complexion.",
        activeIngredients: "Glycolic Acid, Salicylic Acid, Niacinamide, Hyaluronic Acid, Lactic Acid",
        instructions: "Use nightly on clean skin. Leave 20-30 mins, rinse, and moisturize.",
        howToUse: "Apply thin layer to dry skin. Rinse after 20-30 mins. Use 1-2 times weekly.",
        image: "assets/images/products/Luma Peel cream -50ml.webp",
        colorCode: "#40E0D0"
    },
    {
        id: 4,
        category: "anti-aging",
        title: "RENOURA EYE CREAM",
        subtitle: "Eye Contour Cream",
        volume: "14ml",
        type: "TUBE",
        description: "Reduces dark circles and fine lines, hydrates the eye contour, and adds a healthy glow to the eyes.",
        activeIngredients: "Caffeine, Hyaluronic Acid, Niacinamide, Oligo Peptides, Q10 Enzyme, Vitamin E",
        instructions: "Apply around eyes morning and night. Use sunscreen during daytime.",
        howToUse: "Gently tap a small amount around the eye area until absorbed.",
        image: "assets/images/products/Eye ceam.webp",
        colorCode: "#4682B4"
    },
    {
        id: 5,
        category: "anti-aging",
        title: "REVIVE CREAM",
        subtitle: "Anti-Aging Cream",
        volume: "50ml",
        type: "Jar",
        description: "Nourishes the skin, improves elasticity, and restores radiance and fullness for a youthful look.",
        activeIngredients: "Aloe Barbadensis Leaf Juice (جل الصبار), Jojoba Oil / Squalane, Shea Butter, Matrixyl Palmitoyl Pentapeptide-4, Sodium Hyaluronate",
        instructions: "Apply to face and neck morning and night. Use sunscreen during the day.",
        howToUse: "Massage softly into clean skin until fully absorbed.",
        image: "assets/images/products/Revive cream.webp",
        colorCode: "#FFD700"
    },
    {
        id: 6,
        category: "hair-treatment",
        title: "CAPILUXE VIALS",
        subtitle: "Hair Treatment Vials",
        volume: "5 Vials",
        type: "VIALS",
        description: "Treats hair loss, strengthens follicles, and nourishes the scalp to promote healthy hair growth.",
        activeIngredients: "Stem Cells, Biotin, Caffeine, Saw Palmetto",
        instructions: "Massage into clean scalp for 3-5 mins. Do not rinse.",
        howToUse: "Apply one vial to scalp 2-3 times per week. Do not rinse.",
        image: "assets/images/products/Hair vials.webp",
        colorCode: "#CD7F32"
    },
    {
        id: 7,
        category: "acne-treatment",
        title: "CLARIO SOLUTION",
        subtitle: "Acne Peel Solution",
        volume: "30ml",
        type: "BOTTLE",
        description: "Fights acne, cleanses pores, and reduces excess oil and inflammation for clearer skin.",
        activeIngredients: "Salicylic Acid, Niacinamide, Zinc, Tea Tree Oil, Aloe Vera",
        instructions: "Apply 1-2 times daily to acne-prone areas. Use sunscreen during daytime.",
        howToUse: "Apply to clean, dry skin focusing on affected areas.",
        image: "assets/images/products/CLARIO 30ML.webp",
        colorCode: "#98FF98"
    },
    {
        id: 8,
        category: "whitening",
        title: "PEARLISSE CREAM",
        subtitle: "Whitening Body Sensitive Areas",
        volume: "100ml",
        type: "TUBE",
        description: "Lightens sensitive areas, evens skin tone, and deeply moisturizes for a smoother complexion.",
        activeIngredients: "Niacinamide, Alpha-Arbutin, Kojic Dipalmitate, Glycerin",
        instructions: "Apply daily to clean body skin (elbows, knees). Use sunscreen on exposed areas.",
        howToUse: "Massage twice daily into dark or sensitive areas until absorbed.",
        image: "assets/images/products/PEARLISSE Cream.webp",
        colorCode: "#F8F8FF"
    },
    {
        id: 9,
        category: "whitening",
        title: "GLOWIN CREAM",
        subtitle: "Whitening Face Cream",
        volume: "100ml",
        type: "TUBE",
        description: "Fades pigmentation, brightens the skin, and evens facial complexion for a balanced tone.",
        activeIngredients: "Niacinamide, Alpha-Arbutin, Kojic Dipalmitate, Licorice Root Extract",
        instructions: "Apply morning and night to face and neck. Use sunscreen during the day.",
        howToUse: "Gently massage into clean skin until fully absorbed.",
        image: "assets/images/products/Glowin cream.webp",
        colorCode: "#FFC0CB"
    },
    {
        id: 10,
        category: "cleanser",
        title: "HYDRASOFT CLEANSER",
        subtitle: "Facial Cleanser for Dry Skin",
        volume: "150ml",
        type: "TUBE",
        description: "Cleanses gently, provides hydration, and protects the skin from dryness.",
        activeIngredients: "Glycerin, Aloe Barbadensis Leaf Extract, Panthenol, Sodium Hyaluronate",
        instructions: "Massage into wet skin and rinse thoroughly. Suitable for daily use.",
        howToUse: "Use morning and evening on damp face. Rinse with lukewarm water.",
        image: "assets/images/products/Hydrasoft Cleanser 150ML.webp",
        colorCode: "#00BFFF"
    },
    {
        id: 11,
        category: "cleanser",
        title: "CLARIO CLEANSER",
        subtitle: "Facial Cleanser for Oily Skin",
        volume: "150ml",
        type: "TUBE",
        description: "Removes excess oil, unclogs pores, and leaves a matte finish for a fresh complexion.",
        activeIngredients: "Niacinamide, Salicylic Acid, Zinc PCA, Tea Tree Oil",
        instructions: "Massage into wet oily areas and rinse. Use daily, morning and evening.",
        howToUse: "Apply to damp skin focusing on oily zones. Rinse and pat dry.",
        image: "assets/images/products/Clario Cleanser 150ML.webp",
        colorCode: "#00BFFF"
    },
    {
        id: 12,
        category: "cleanser",
        title: "NEUTRA CLEANSER",
        subtitle: "Facial Cleanser for Normal Skin",
        volume: "150ml",
        type: "TUBE",
        description: "Maintains balance and cleanses gently, ideal for daily use on normal skin.",
        activeIngredients: "Cocamidopropyl Betaine, Decyl Glucoside, Glycerin, Aloe Barbadensis Leaf Extract",
        instructions: "Massage into wet skin and rinse. Suitable for daily use.",
        howToUse: "Use morning and evening on a damp face for balanced skin.",
        image: "assets/images/products/Neutra Cleanser 150ML.webp",
        colorCode: "#00BFFF"
    },
    {
        id: 14,
        category: "hair-treatment",
        title: "LASHIVA",
        subtitle: "Eye Lashes and Brows Gel",
        volume: "10ml",
        type: "BOTTLE",
        description: "Strengthens lashes and brows, stimulates growth, and gives a fuller, healthy look.",
        activeIngredients: "Omega 3 Fatty Acids, Castor Oil, Coconut Oil, Collagen",
        instructions: "Apply nightly to clean lashes and brows. Can be used under mascara.",
        howToUse: "Use applicator to apply once daily before bedtime for best results.",
        image: "assets/images/products/Lashiva.webp",
        colorCode: "#C0C0C0"
    },
    {
        id: 15,
        category: "hair-treatment",
        title: "PUREWASH SHAMPOO",
        subtitle: "Zero Sulfate Shampoo",
        volume: "400ml",
        type: "BOTTLE",
        description: "Cleanses without sulfates, protects the hair, and is suitable for treated hair.",
        activeIngredients: "Cocamidopropyl Betaine, Keratin, Argan Oil, Pro-Vitamin B5",
        instructions: "Apply to wet hair, massage scalp, and rinse. Suitable for daily use.",
        howToUse: "Massage into scalp, lather, and rinse thoroughly. Repeat if necessary.",
        image: "assets/images/products/Shampoo 400ML.webp",
        colorCode: "#000000"
    },
    {
        id: 16,
        category: "hair-treatment",
        title: "TRIVIDA SERUM",
        subtitle: "Hair Repair Serum",
        volume: "100ml",
        type: "BOTTLE",
        description: "Repairs damage, nourishes the hair, and restores shine and vitality.",
        activeIngredients: "Keratin, Collagen, Panthenol, Arginine",
        instructions: "Apply to hair lengths and ends. Avoid scalp. Use once daily after wash.",
        howToUse: "Apply a few drops to damp or dry hair mid-lengths and ends.",
        image: "assets/images/products/Trivida serum 100ML.webp",
        colorCode: "#000000"
    }
];

// Get unique categories
const categories = [...new Set(products.map(p => p.category))];

// Category display names
const categoryNames = {
    "anti-aging": "Anti Aging",
    "hair-treatment": "Hair Treatment",
    "whitening": "Whitening",
    "cleanser": "Cleanser",
    "acne-treatment": "Acne Treatment"
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, categories, categoryNames };
}
