import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer text element", () => {
    test("renders Footer and includes the correct text", () => {
        render(<Footer />);
        expect(screen.getByText("Copyright 2020 Argent Bank")).toBeInTheDocument();
    });
});
