"use client";

import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ModalProps {
    /** Controls whether the modal is open or closed */
    open: boolean;
    /** Callback function when the modal is closed */
    onClose: () => void;
    /** Modal title */
    title?: string;
    /** Modal description/subtitle */
    description?: string;
    /** Content to display in the modal body */
    children: React.ReactNode;
    /** Footer content (buttons, actions, etc.) */
    footer?: React.ReactNode;
    /** Maximum width of the modal - defaults to 'md' */
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
    /** Whether to show the close button in the header */
    showCloseButton?: boolean;
    /** Custom className for the modal content */
    className?: string;
    /** Whether clicking the overlay closes the modal - defaults to true */
    closeOnOverlayClick?: boolean;
}

const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    full: "max-w-[95vw] sm:max-w-[90vw] lg:max-w-[1400px]",
};

/**
 * Reusable Modal utility component
 * 
 * @example
 * ```tsx
 * import { Modal } from "@/utils/Modal";
 * 
 * <Modal
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Contact Us"
 *   description="Fill out the form below"
 *   footer={<Button onClick={handleSubmit}>Submit</Button>}
 * >
 *   <ContactForm />
 * </Modal>
 * ```
 */
export const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    title,
    description,
    children,
    footer,
    size = "md",
    showCloseButton = true,
    className,
    closeOnOverlayClick = true,
}) => {
    return (
        <Dialog open={open} onOpenChange={closeOnOverlayClick ? onClose : undefined}>
            <DialogContent
                className={cn(
                    sizeClasses[size],
                    "bg-gradient-card border-biocure-sage/20 shadow-card",
                    "backdrop-blur-sm p-0 flex flex-col max-h-[90vh]",
                    className
                )}
                onPointerDownOutside={(e) => {
                    if (!closeOnOverlayClick) {
                        e.preventDefault();
                    }
                }}
                onEscapeKeyDown={(e) => {
                    if (!closeOnOverlayClick) {
                        e.preventDefault();
                    }
                }}
            >
                {(title || description) && (
                    <DialogHeader className="p-6 pb-2 space-y-3 shrink-0">
                        {title && (
                            <DialogTitle className="text-2xl font-heading text-foreground">
                                {title}
                            </DialogTitle>
                        )}
                        {description && (
                            <DialogDescription className="text-muted-foreground">
                                {description}
                            </DialogDescription>
                        )}
                    </DialogHeader>
                )}

                <div
                    className="flex-1 overflow-y-auto px-6 py-4"
                    data-lenis-prevent="true"
                >
                    {children}
                </div>

                {footer && (
                    <DialogFooter className="p-6 pt-2 gap-2 sm:gap-0 shrink-0 border-t border-border/10">
                        {footer}
                    </DialogFooter>
                )}

            </DialogContent>
        </Dialog>
    );
};

Modal.displayName = "Modal";
