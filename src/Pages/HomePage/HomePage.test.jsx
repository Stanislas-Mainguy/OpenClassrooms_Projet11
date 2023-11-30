import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage Component", () => {
  test("renders HomePage and includes Header, Main, and Footer", () => {
    render(<HomePage />);
    expect(screen.getByText("Sign in")).toBeInTheDocument();
  });

  test("renders Footer with copyright text", () => {
    render(<HomePage />);
    expect(screen.getByText("Copyright 2020 Argent Bank")).toBeInTheDocument();
  });

  test("renders SectionHero with specific text", () => {
    render(<HomePage />);
    expect(screen.getByText("No fees. No minimum deposit. High interest rates.")).toBeInTheDocument();
  });

  test("renders SectionFeatures with specific titles", () => {
    render(<HomePage />);
    expect(screen.getByText("You are our #1 priority")).toBeInTheDocument();
    expect(screen.getByText("More savings means higher rates")).toBeInTheDocument();
    expect(screen.getByText("Security you can trust")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Features" })).toBeInTheDocument();
  });
});
