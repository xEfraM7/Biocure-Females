import {
    Dumbbell,
    Zap,
    Flame,
    TestTube,
    Stethoscope,
    User,
    Package,
    MessageCircle,
    FlaskConical,
    ClipboardCheck,
    Rocket,
    Moon,
    Target,
    Brain,
    type LucideIcon
} from "lucide-react";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface NavLink {
    label: string;
    href: string;
}

export interface Benefit {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface Testimonial {
    name: string;
    rating: number;
    text: string;
}

export interface Step {
    icon: LucideIcon;
    step: string;
    title: string;
    description: string;
}

export interface Persona {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    ariaLabel: string;
}

// ============================================================================
// SITE CONTENT
// ============================================================================

export const siteContent = {
    // --------------------------------------------------------------------------
    // META / SEO
    // --------------------------------------------------------------------------
    meta: {
        title: "Biocure",
        description: "Accelerating biotech innovation",
    },

    // --------------------------------------------------------------------------
    // NAVBAR
    // --------------------------------------------------------------------------
    navbar: {
        logoAlt: "BioCure Health",
        ctaButton: "Schedule Your Free 15-Min Intro Call",
        navLinks: [
            { label: "How It Works", href: "#how-it-works" },
            { label: "Results", href: "#testimonials" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
        ] as NavLink[],
    },

    // --------------------------------------------------------------------------
    // HERO SECTION
    // --------------------------------------------------------------------------
    hero: {
        kicker: "Finally understand why the gym isn't working",
        headline: {
            main: "Training Hard But Looking Soft?",
            highlight: "It's Not Your Fault.",
        },
        subheadline: "Most guys under 30 assume their testosterone is fine because they're \"young.\" That's like assuming your car runs great just because it's new—without ever checking the oil. One blood test reveals whether biology is working for you or against you.",
        primaryCta: "Schedule Your Free 15-Min Intro Call",
        microCopy: "Takes 2 minutes. Speak with a physician this week.",
        secondaryCta: "Watch: What Our Physicians Want You to Know",
    },

    // --------------------------------------------------------------------------
    // VSL SECTION
    // --------------------------------------------------------------------------
    vsl: {
        duration: "3:45",
        caption: "Watch how we're helping men reclaim their energy, focus, and vitality",
    },

    // --------------------------------------------------------------------------
    // BENEFITS SECTION
    // --------------------------------------------------------------------------
    benefits: {
        header: {
            main: "What Happens When Your",
            highlight: "Hormones Are Optimized",
        },
        items: [
            {
                icon: Dumbbell,
                title: "Build Muscle That Actually Shows",
                description: "Stop spinning your wheels. When your T is optimized, the same workout gives you 2-3x the results.",
            },
            {
                icon: Zap,
                title: "Energy Without the Crash",
                description: "No more 3pm slump. Wake up ready to go and stay sharp until you decide to sleep—not when your body forces you.",
            },
            {
                icon: Flame,
                title: "Lose the \"Skinny Fat\" Look",
                description: "Finally see definition. Optimized hormones torch stubborn belly fat while preserving muscle—no starvation required.",
            },
        ] as Benefit[],
    },

    // --------------------------------------------------------------------------
    // WHO IT FITS SECTION
    // --------------------------------------------------------------------------
    whoItFits: {
        header: {
            main: "Is This",
            highlight: "You?",
        },
        personas: [
            {
                icon: Dumbbell,
                title: "The Frustrated Gym-Goer",
                description: "You're in the gym 4-5 days a week. You eat right. You do everything the influencers say. But you still look the same as the guy who plays video games and eats pizza. You're starting to wonder if something is actually wrong with you.",
            },
            {
                icon: Moon,
                title: "The Always-Tired Achiever",
                description: "You're 24 but you feel 44. Coffee gets you to 10am. By 3pm you're running on fumes. Your friends are out living their lives while you're calculating how many hours until you can crash on the couch.",
            },
            {
                icon: Target,
                title: "The Ambitious One Who's Falling Behind",
                description: "You've got goals—career, physique, relationships. But lately the drive isn't there. The guys around you seem to have an edge you don't. You're putting in the work but not getting the same returns.",
            },
            {
                icon: Brain,
                title: "The Foggy Thinker",
                description: "Your brain used to be sharp. Now you're forgetting things, losing focus mid-conversation, struggling to concentrate. You're too young to feel this mentally slow—but here you are.",
            },
        ] as Persona[],
    },

    // --------------------------------------------------------------------------
    // FEATURES SECTION
    // --------------------------------------------------------------------------
    features: {
        header: {
            main: "Everything You Get With",
            highlight: "BioCure",
        },
        items: [
            {
                icon: TestTube,
                title: "Comprehensive Hormone Panel",
                description: "Not just total T. We test bioavailable testosterone, SHBG, estradiol, and 8 other markers most clinics ignore.",
            },
            {
                icon: Stethoscope,
                title: "Board-Certified Physician Review",
                description: "A real doctor (not an algorithm) analyzes your results and builds your protocol.",
            },
            {
                icon: User,
                title: "Personalized Treatment Plan",
                description: "Cookie-cutter doesn't work. Your protocol is designed for YOUR biology and goals.",
            },
            {
                icon: Package,
                title: "Medication Delivered to Your Door",
                description: "Pharmacy-grade. Discreet packaging. No awkward pickup conversations.",
            },
            {
                icon: MessageCircle,
                title: "Ongoing Physician Access",
                description: "Questions at 10pm? Message your care team anytime. No appointment needed.",
            },
            {
                icon: FlaskConical,
                title: "Quarterly Optimization Labs",
                description: "We don't guess. We test every 90 days and adjust your protocol for continuous improvement.",
            },
        ] as Feature[],
    },

    // --------------------------------------------------------------------------
    // TESTIMONIALS SECTION
    // --------------------------------------------------------------------------
    testimonials: {
        header: {
            main: "Real Results From",
            highlight: "Real Patients",
        },
        ratingText: "5.0 on Google Reviews",
        verifiedLabel: "Verified Patient",
        items: [
            {
                name: "Luisa Belo",
                rating: 5,
                text: "Ever since my first contact with BioCure Health through Dr Rosado, I could not have had a better experience. The sense of being understood and the feeling that your problem is the only one in the world is crucial. Knowing that there is always somebody ready to respond to your questions is extremely important when you need an answer on the moment. I could not be more satisfied with my experience.",
            },
            {
                name: "Jeanfranco Ciaramella",
                rating: 5,
                text: "I have been a patient at Biocure for the past 3 years and I can confidently say that they are simply phenomenal. From the moment I walked into their office, I was greeted with warmth and genuine care. Dr. Rosado and Dr. Chaple take the time to understand each patient's unique needs and tailor their treatment accordingly.",
            },
            {
                name: "Sonny Leon",
                rating: 5,
                text: "I am so thankful to the BioCure team for the amazing improvement in my health and my lifestyle. In a little over a month I am already losing weight and feeling much better and healthier. Dr. Rosado and Claudia always follow up with me regarding my treatment plan to make sure I am meeting my goals. I highly recommend their services.",
            },
            {
                name: "Lawrence Serrahn",
                rating: 5,
                text: "BioCure is a key component to maintaining my healthy lifestyle. As a fitness professional, I am very selective who I choose to be part of my inner circle. They are more than simply health practitioners, they are family.",
            },
            {
                name: "Annmarie Bruzzo",
                rating: 5,
                text: "Dr. Rosado and his wonderful team has made this journey very easy for me. Though I am still in the beginning stage, they have been so helpful and timely in getting back to me and answering all my questions and feeling at ease. Thank you and looking forward to working towards feeling my best!",
            },
            {
                name: "Denise Suarez",
                rating: 5,
                text: "Dr. Chaple and Dr. Rosado are not only excellent Practitioners, but wonderful individuals as well. They go above and beyond for their patients, making sure they are well informed and treated with top level care. I always leave the clinic feeling my best both physically and emotionally. I highly recommend their services.",
            },
        ] as Testimonial[],
    },

    // --------------------------------------------------------------------------
    // HOW IT WORKS SECTION
    // --------------------------------------------------------------------------
    howItWorks: {
        header: {
            main: "Get Started in",
            highlight: "3 Simple Steps",
        },
        steps: [
            {
                icon: ClipboardCheck,
                step: "Step 1",
                title: "Schedule Your Free 15-Min Intro Call",
                description: "2-minute quiz about your symptoms, goals, and lifestyle. No credit card required.",
            },
            {
                icon: FlaskConical,
                step: "Step 2",
                title: "Get Your Labs Done",
                description: "We send you a lab order. Walk into any Quest or Labcorp near you. In and out in 10 minutes.",
            },
            {
                icon: Rocket,
                step: "Step 3",
                title: "Start Your Protocol",
                description: "Meet with your physician. Get your personalized plan. Medication ships to your door within days.",
            },
        ] as Step[],
    },

    // --------------------------------------------------------------------------
    // PRICING SECTION
    // --------------------------------------------------------------------------
    pricing: {
        header: {
            main: "Transparent Pricing.",
            highlight: "No Hidden Fees.",
        },
        priceAnchor: "Less than your gym membership. More impactful than every supplement you've wasted money on combined.",
        price: "$125",
        description: "Consultation + Labs + Meds",
        ctaButton: "Get Started Now",
        features: [
            "Consultation with board-certified physician",
            "Comprehensive hormone panel labs",
            "Personalized treatment plan",
            "Medication delivered to your door",
            "Ongoing physician access",
        ],
    },

    // --------------------------------------------------------------------------
    // FAQ SECTION
    // --------------------------------------------------------------------------
    faq: {
        header: {
            main: "Questions?",
            highlight: "We've Got Answers.",
        },
        items: [
            {
                question: "I'm under 30—isn't testosterone therapy for older guys?",
                answer: "That's what most people think. But here's the reality: testosterone levels in men have dropped 1% per year for decades. A 25-year-old today has significantly lower T than his dad did at the same age. We've tested thousands of men under 30—and you'd be shocked how many are running on empty. Age doesn't protect you from environmental factors, poor sleep, stress, and modern lifestyle factors that tank your hormones.",
            },
            {
                question: "Is this safe? Will it affect my fertility?",
                answer: "Safety is our top priority. Every protocol is designed by board-certified physicians who specialize in hormone optimization. For fertility, we have specific protocols that include HCG to maintain testicular function and sperm production. We monitor your labs quarterly and adjust as needed. This isn't a one-size-fits-all approach—it's precision medicine.",
            },
            {
                question: "How is this different from steroids?",
                answer: "Night and day. Steroids are illegal, unregulated, and typically dosed at 5-10x physiological levels. We're restoring your testosterone to optimal natural levels—where you'd be if your body was functioning at its best. Everything is physician-supervised, pharmaceutical-grade, and carefully monitored. Think of it as fixing a deficiency, not giving you superhuman levels.",
            },
            {
                question: "How fast will I see results?",
                answer: "Most guys notice improved energy and mental clarity within 2-3 weeks. Gym performance and recovery improvements typically show up around weeks 4-6. Body composition changes—less fat, more muscle—become visible around weeks 8-12. Full optimization takes about 3-6 months, which is why we do quarterly labs to dial in your protocol.",
            },
            {
                question: "What if my levels come back normal?",
                answer: "\"Normal\" is a range designed for the average guy—including 80-year-olds. We look at optimal levels for your age and goals. If your labs truly show you're optimized, we'll tell you. No upsell, no pressure. We'll also identify other factors that might be causing your symptoms (thyroid, vitamin D, sleep issues) and point you in the right direction.",
            },
        ] as FAQ[],
    },

    // --------------------------------------------------------------------------
    // FINAL CTA SECTION
    // --------------------------------------------------------------------------
    finalCTA: {
        headline: {
            main: "Stop Guessing.",
            highlight: "Start Knowing.",
        },
        subheadline: "You've read this far because something isn't working. You're putting in the effort but not getting the results. One test can tell you if biology is the problem. If it is, we fix it. If it's not, you'll know—and you can rule it out for good.",
        ctaButton: "Schedule Your Free 15-Min Intro Call",
        socialProof: "Join 10,000+ men who stopped guessing and started optimizing.",
        urgency: "Limited spots available for new patients this month.",
    },

    // --------------------------------------------------------------------------
    // FOOTER
    // --------------------------------------------------------------------------
    footer: {
        logoAlt: "BioCure Health",
        about: "BioCure provides telehealth services for hormone optimization. Individual results vary.",
        trustBadges: [
            { text: "Board-Certified Physicians" },
            { text: "FDA-Approved Pharmacies" },
        ],
        legal: {
            title: "Legal",
            privacyPolicy: "Privacy Policy",
        },
        menu: {
            title: "Menu",
            links: [
                { label: "How It Works", href: "#how-it-works" },
                { label: "Results", href: "#benefits" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
            ] as NavLink[],
        },
        connect: {
            title: "Connect",
            email: "support@getbiocure.com",
            social: [
                { platform: "instagram", url: "https://www.instagram.com/getbiocure/?hl=en", ariaLabel: "Instagram" },
                { platform: "tiktok", url: "https://www.tiktok.com/@getbiocure", ariaLabel: "TikTok" },
                { platform: "youtube", url: "https://www.youtube.com/@biocurehealth", ariaLabel: "YouTube" },
            ] as SocialLink[],
        },
        copyright: "BioCure Health. All rights reserved.",
        disclaimer: "Consult with your physician before starting any treatment.",
    },

    // --------------------------------------------------------------------------
    // LEAD MODAL
    // --------------------------------------------------------------------------
    leadModal: {
        title: "Schedule Your Free 15-Min Intro Call",
        description: "Complete the form below to begin your hormone optimization journey.",
        form: {
            nameLabel: "Full Name",
            namePlaceholder: "John Doe",
            emailLabel: "Email Address",
            emailPlaceholder: "john@example.com",
            phoneLabel: "Phone Number",
            phonePlaceholder: "(555) 000-0000",
            submitButton: "Schedule Now",
            securityNote: "Secure & Encrypted • no credit card required",
        },
        validation: {
            nameMin: "Name must be at least 2 characters.",
            emailInvalid: "Please enter a valid email address.",
            phoneMin: "Please enter a valid phone number.",
        },
        success: {
            title: "Success! We'll contact you shortly.",
            description: "An optimization specialist will reach out to you within 24 hours.",
        },
    },
};

export default siteContent;
