import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'

export function LeftArrow() {
    const visibility = useContext(VisibilityContext);
    const isFirstItemVisible = visibility.useIsVisible("first", true);

    return (
        <Arrow
            disabled={isFirstItemVisible}
            onClick={() => visibility.scrollPrev()}
        >
            <ArrowLeftCircleIcon className="h-6 w-auto pe-2" aria-hidden="true" />
        </Arrow>
    );
}

export function RightArrow() {
    const visibility = useContext(VisibilityContext);
    const isLastItemVisible = visibility.useIsVisible("last", false);

    return (
        <Arrow
            disabled={isLastItemVisible}
            onClick={() => visibility.scrollNext()}
        >
            <ArrowRightCircleIcon className="h-6 w-auto pe-2" aria-hidden="true" />
        </Arrow>
    );
}

const Arrow = ({ children, disabled, onClick, }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                right: "1%",
                opacity: disabled ? "0" : "1",
                userSelect: "none",
                backgroundColor: "white"
            }}
        >
            {children}
        </button >
    );
}
