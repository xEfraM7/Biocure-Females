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
        title: "BioCure",
        description: "Hormone Replacement Therapy (HRT) for Perimenopausal Women (40s - Early 50s)",
    },

    // --------------------------------------------------------------------------
    // NAVBAR
    // --------------------------------------------------------------------------
    navbar: {
        logoAlt: "BioCure",
        ctaButton: "Schedule My Consultation",
        navLinks: [
            { label: "How It Works", href: "#how-it-works" },
            { label: "Symptoms", href: "#symptoms" },
            { label: "FAQ", href: "#faq" },
        ] as NavLink[],
    },

    // --------------------------------------------------------------------------
    // HERO SECTION
    // --------------------------------------------------------------------------
    hero: {
        kicker: "You're not losing your mind. You're losing your hormones.",
        headline: {
            main: "The Exhaustion, The Fog, The Weight Gain—",
            highlight: "It's Not In Your Head. It's In Your Hormones.",
        },
        subheadline: "The rage that comes out of nowhere. The 3am wake-ups drenched in sweat. The brain fog that makes you feel like you're losing your edge. The weight that appeared and won't leave. You've been to your doctor. They said your labs are \"normal\" or handed you an antidepressant. But you know something is off. You're right. It's called perimenopause—and it starts years before your period actually stops. The good news? It's completely treatable.",
        primaryCta: "Schedule My Consultation",
        microCopy: "Finally get answers. Speak with a hormone specialist this week.",
        secondaryCta: "Watch: Our Specialist Explains The Science In Depth",
    },

    // --------------------------------------------------------------------------
    // VSL SECTION
    // --------------------------------------------------------------------------
    vsl: {
        videoId: "K0-I4bZlfu4",
        duration: "",
        caption: "Watch: Our Specialist Explains The Science In Depth",
    },

    // --------------------------------------------------------------------------
    // BENEFITS SECTION (Mapped to Symptoms ID as requested)
    // --------------------------------------------------------------------------
    benefits: {
        header: {
            main: "What Changes When Your Hormones Are Balanced",
            highlight: "",
        },
        items: [
            {
                icon: Moon,
                title: "Sleep Through the Night Again",
                description: "No more 3am wake-ups. No more soaked sheets. Fall asleep, stay asleep, and wake up actually rested.",
            },
            {
                icon: Brain,
                title: "Get Your Brain Back",
                description: "The fog lifts. Words come back. You can focus, remember, and think clearly again—like yourself.",
            },
            {
                icon: Target,
                title: "A Body That Responds Again",
                description: "The stubborn weight starts to shift. Your metabolism wakes up. Your body finally cooperates with your efforts.",
            },
        ] as Benefit[],
    },

    // --------------------------------------------------------------------------
    // WHO IT FITS SECTION
    // --------------------------------------------------------------------------
    whoItFits: {
        header: {
            main: "Does This Sound Like You?",
            highlight: "",
        },
        personas: [
            {
                icon: Moon,
                title: "The Woman Who Can't Sleep",
                description: "You wake up at 3am like clockwork—heart racing, drenched in sweat. Sometimes you can fall back asleep. Sometimes you're up for hours. You can't remember the last time you slept through the night and actually felt rested.",
            },
            {
                icon: Flame,
                title: "The Woman With The Short Fuse",
                description: "You used to be patient. Now you snap at your kids, your partner, your coworkers. The rage comes out of nowhere and you feel out of control. This isn't who you are—but you can't seem to stop it.",
            },
            {
                icon: Brain,
                title: "The Woman Losing Her Edge",
                description: "You walk into rooms and forget why. Words vanish mid-sentence. You used to be sharp—now you're scared you're losing it. You've googled \"early dementia\" more than once. But it's not that. It's your hormones.",
            },
            {
                icon: Target,
                title: "The Woman Fighting Her Body",
                description: "You eat well. You exercise. You've tried every diet. But the weight around your middle just appeared one day and refuses to leave. Your body has stopped responding to everything that used to work.",
            },
            {
                icon: User,
                title: "The Woman Who Feels Like a Stranger",
                description: "The spark is gone. You have zero interest in intimacy. You feel disconnected from your body, from your partner, from yourself. You've been handed antidepressants, but you know this isn't depression—it's something else.",
            },
            {
                icon: Stethoscope,
                title: "The Woman Who's Been Dismissed",
                description: "You've been to your doctor. They ran some tests, told you your labs are \"normal,\" and offered you an SSRI. But you know your body. Something is wrong. You just haven't found someone who actually listens.",
            },
        ] as Persona[],
    },

    // --------------------------------------------------------------------------
    // FEATURES SECTION
    // --------------------------------------------------------------------------
    features: {
        header: {
            main: "Complete, Personalized",
            highlight: "Hormone Care",
        },
        items: [
            {
                icon: TestTube,
                title: "Comprehensive Hormone Panel",
                description: "We test what matters: estrogen, progesterone, testosterone, thyroid, cortisol, and more. The full picture—not just FSH and a shrug.",
            },
            {
                icon: Stethoscope,
                title: "Physician Who Specializes in Women's Hormones",
                description: "Not a generalist who dismisses your symptoms. A doctor who understands perimenopause, listens to your experience, and treats the root cause.",
            },
            {
                icon: ClipboardCheck,
                title: "Personalized Protocol",
                description: "Bioidentical hormones tailored to YOUR labs, YOUR symptoms, YOUR body. No cookie-cutter solutions.",
            },
            {
                icon: Package,
                title: "Multiple Delivery Options",
                description: "Creams, patches, pellets, or oral—whatever works best for your lifestyle and preference.",
            },
            {
                icon: Package,
                title: "Medication Delivered to Your Door",
                description: "Pharmaceutical-grade, from licensed pharmacies. Discreet packaging.",
            },
            {
                icon: MessageCircle,
                title: "Ongoing Support & Adjustments",
                description: "Your hormones change. So does your protocol. Message your care team anytime with questions.",
            },
            {
                icon: FlaskConical,
                title: "Regular Monitoring",
                description: "We track your levels, symptoms, and progress. Adjust as needed. This isn't set-it-and-forget-it medicine.",
            },
        ] as Feature[],
    },

    // --------------------------------------------------------------------------
    // TESTIMONIALS SECTION
    // --------------------------------------------------------------------------
    testimonials: {
        header: {
            main: "Women Who Got Themselves Back",
            highlight: "",
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
            main: "A Simple Process That",
            highlight: "Actually Puts You First",
        },
        steps: [
            {
                icon: ClipboardCheck,
                step: "Step 1",
                title: "Tell Us What's Going On",
                description: "Complete a symptom questionnaire that actually asks the right questions. Takes about 5 minutes.",
            },
            {
                icon: FlaskConical,
                step: "Step 2",
                title: "Get Complete Lab Work",
                description: "We send you a lab order. Visit any Quest or Labcorp at your convenience. Comprehensive panel—not just the basics.",
            },
            {
                icon: Stethoscope,
                step: "Step 3",
                title: "Meet With Your Physician",
                description: "Video consultation with a hormone specialist who will actually listen. Review your labs, discuss options, build your plan together.",
            },
        ] as Step[],
    },

    // --------------------------------------------------------------------------
    // PRICING SECTION - REMOVED
    // --------------------------------------------------------------------------
    pricing: {
        header: {
            main: "",
            highlight: "",
        },
        priceAnchor: "",
        price: "",
        description: "",
        ctaButton: "",
        features: [],
    },

    // --------------------------------------------------------------------------
    // FAQ SECTION
    // --------------------------------------------------------------------------
    faq: {
        header: {
            main: "Your Questions,",
            highlight: "Answered",
        },
        items: [
            {
                question: "I thought menopause happens in your 50s. Can perimenopause really start in my 40s?",
                answer: "Yes—and this is one of the biggest gaps in women's health education. Perimenopause can start 8-10 years before your period actually stops. That means many women begin experiencing symptoms in their early-to-mid 40s (sometimes even late 30s). During this time, hormone levels fluctuate wildly—which is why symptoms can be so unpredictable. The tragedy is that most doctors don't recognize it, leaving millions of women thinking they're \"going crazy\" when their hormones are simply shifting.",
            },
            {
                question: "Is hormone therapy safe? I've heard conflicting things.",
                answer: "This is the most important question—and there's been a lot of confusion. The 2002 WHI study created fear around HRT, but it's been largely misinterpreted. That study looked at older women (average age 63) using older synthetic hormones. Current research shows that for women in perimenopause and early menopause, bioidentical hormone therapy initiated within 10 years of menopause onset is associated with significant benefits and very low risks. We use bioidentical hormones, individualized dosing, and regular monitoring. Every protocol is designed by physicians who specialize in this field.",
            },
            {
                question: "My doctor tested my hormones and said everything is \"normal.\" But I feel terrible.",
                answer: "This is the most common complaint we hear. Standard lab panels often only test FSH—which isn't useful for perimenopausal women because hormones fluctuate day to day. Even when they test more, \"normal\" reference ranges are extremely wide and don't reflect optimal levels. Plus, many doctors aren't trained to correlate symptoms with hormone patterns. We run comprehensive panels and—more importantly—we listen to how you actually feel. Your symptoms matter as much as your numbers.",
            },
            {
                question: "Will I gain weight on hormone therapy?",
                answer: "Actually, the opposite is more common. Declining estrogen and progesterone often cause weight gain—especially around the midsection—and make it nearly impossible to lose. Many women find that once their hormones are balanced, their metabolism improves, cravings decrease, and their body finally responds to diet and exercise again. Weight gain is a symptom of hormone imbalance, not a side effect of treating it.",
            },
            {
                question: "How quickly will I feel better?",
                answer: "Most women notice improvements in sleep and hot flashes within 2-4 weeks. Mood stabilization often follows closely. Brain fog typically starts lifting within the first month. Energy and libido improvements usually take 4-8 weeks. Body composition changes take longer—typically 2-3 months. Everyone responds differently, which is why we monitor your progress and adjust as needed. This isn't a quick fix—it's restoring balance.",
            },
            {
                question: "What about breast cancer risk?",
                answer: "We take this concern very seriously. Current evidence shows that for most women, bioidentical estrogen combined with bioidentical progesterone (not synthetic progestins) does not significantly increase breast cancer risk when used appropriately. We screen for risk factors, discuss your family history, and make individualized recommendations. We also use the lowest effective doses and monitor regularly. For women with significant risk factors, we discuss alternatives. Your safety always comes first.",
            },
        ] as FAQ[],
    },

    // --------------------------------------------------------------------------
    // FINAL CTA SECTION
    // --------------------------------------------------------------------------
    finalCTA: {
        headline: {
            main: "You've Taken Care of Everyone Else.",
            highlight: "It's Time to Take Care of You.",
        },
        subheadline: "You've spent years putting everyone first—your kids, your partner, your career, your aging parents. Somewhere along the way, you stopped prioritizing yourself. But you can't pour from an empty cup. And you deserve to feel like yourself again. One consultation can tell you if your hormones are at the root of what you're experiencing. If they are, we can help.",
        ctaButton: "Schedule My Consultation",
        socialProof: "Join thousands of women who stopped suffering and started living.",
        urgency: "Appointments fill quickly. Secure your spot today.",
    },

    // --------------------------------------------------------------------------
    // FOOTER
    // --------------------------------------------------------------------------
    footer: {
        logoAlt: "BioCure",
        about: "BioCure provides telehealth services for hormone optimization. Individual results vary. Treatment requires physician evaluation and ongoing monitoring.",
        trustBadges: [
            { text: "HIPAA Compliant" },
            { text: "Board-Certified Physicians" },
            { text: "Bioidentical Hormones" },
            { text: "Ongoing Monitoring" },
        ],
        legal: {
            title: "Legal",
            privacyPolicy: "Privacy Policy",
        },
        menu: {
            title: "Menu",
            links: [
                { label: "How It Works", href: "#how-it-works" },
                { label: "Symptoms", href: "#symptoms" },
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
        copyright: "BioCure. All rights reserved.",
        disclaimer: "BioCure provides telehealth services for hormone optimization. Individual results vary. Treatment requires physician evaluation and ongoing monitoring.",
    },

    // --------------------------------------------------------------------------
    // LEAD MODAL
    // --------------------------------------------------------------------------
    leadModal: {
        title: "Schedule My Consultation",
        description: "Complete the form below to begin your hormone optimization journey.",
        form: {
            nameLabel: "Full Name",
            namePlaceholder: "Jane Doe",
            emailLabel: "Email Address",
            emailPlaceholder: "jane@example.com",
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
