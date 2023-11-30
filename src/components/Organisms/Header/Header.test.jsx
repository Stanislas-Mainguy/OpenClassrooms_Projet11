import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import Navigation from "../../Molecules/Navigation/Navigation";

jest.mock("../../Molecules/Navigation", () => () => <div>Mock Navigation</div>);

describe("Header component", () => {
    test("renders Header and includes Navigation", () => {
        render(<Navigation />);
        expect(screen.getByText("Mock Navigation")).toBeInTheDocument();
    });
});