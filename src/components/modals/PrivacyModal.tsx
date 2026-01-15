"use client";

import React from "react";
import { Modal } from "@/utils/Modal";

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            title="Privacy Notice"
            size="3xl"
            className="border-biocure-gold/10"
        >
            <div className="space-y-8 text-base text-foreground/90 leading-relaxed font-sans pb-10">
                <section className="relative">
                    <p className="text-lg font-medium text-foreground mb-4">
                        This privacy notice discloses the privacy practices for <span className="text-biocure-gold">BioCure Health</span>.
                    </p>
                    <p className="border-l-2 border-biocure-gold/30 pl-4 italic text-muted-foreground">
                        This privacy notice applies solely to information collected by this website. It will notify you of the following:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {[
                            "What personally identifiable information is collected from you.",
                            "What choices are available to you regarding your data.",
                            "The security procedures in place to protect your info.",
                            "How you can correct inaccuracies in the information."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 items-start p-3 bg-biocure-sage/5 rounded-lg border border-biocure-sage/10">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-biocure-gold/10 text-biocure-gold flex items-center justify-center text-xs font-bold">
                                    {i + 1}
                                </span>
                                <span className="text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-biocure-gold rounded-full" />
                        Information Collection, Use, and Sharing
                    </h3>
                    <div className="space-y-4">
                        <p>
                            We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. <span className="text-foreground font-semibold">We will not sell or rent this information to anyone.</span>
                        </p>
                        <p>
                            We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request.
                        </p>
                        <p className="bg-biocure-mint/5 p-4 rounded-lg border border-biocure-mint/10 text-sm">
                            <span className="font-semibold text-biocure-mint block mb-1">Marketing Communications</span>
                            Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.
                        </p>
                    </div>
                </section>

                <section>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-biocure-gold rounded-full" />
                        Your Access to and Control Over Information
                    </h3>
                    <p className="mb-4">
                        You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            "See what data we have about you.",
                            "Change/correct any data we have.",
                            "Have us delete any data we have.",
                            "Express concerns about data use."
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm p-2 px-3 bg-secondary/50 rounded-md border border-border/50">
                                <div className="w-1.5 h-1.5 rounded-full bg-biocure-gold" />
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-biocure-gold rounded-full" />
                        Security Measures
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h4 className="font-semibold text-biocure-gold text-sm uppercase tracking-wider">Online Protection</h4>
                            <p className="text-sm">
                                We use high-level encryption to protect sensitive information transmitted online. Your data is scrambled during transit to ensure total privacy.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-semibold text-biocure-gold text-sm uppercase tracking-wider">Offline Protection</h4>
                            <p className="text-sm">
                                Only employees who need the information to perform a specific job (e.g., billing) are granted access. Servers are kept in a highly secure environment.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="p-6 bg-gradient-to-br from-biocure-gold/5 to-transparent rounded-2xl border border-biocure-gold/10">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Cookies & Tracking</h3>
                    <p className="text-sm mb-4">
                        We use “cookies” to help us improve your access to our site and identify repeat visitors. Usage of a cookie is in no way linked to any personally identifiable information on our site.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                        Note: Some of our business partners may use cookies on our site. However, we have no access to or control over these cookies.
                    </p>
                </section>

                <section className="text-center pt-6 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                        For any questions regarding this notice, please contact us at <span className="text-foreground font-medium">support@getbiocure.com</span>
                    </p>
                </section>
            </div>
        </Modal>
    );
};
