import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "./Main";

jest.mock("../../Molecules/SectionHero/SectionHero", () => () => <div>Mock SectionHero</div>);
jest.mock("../../Molecules/SectionFeatures/SectionFeatures", () => () => <div>Mock SectionFeatures</div>);

describe("Main Component", () => {
  test("renders Main and includes SectionHero and SectionFeatures", () => {
    render(<Main />);
    expect(screen.getByText("Mock SectionHero")).toBeInTheDocument();
    expect(screen.getByText("Mock SectionFeatures")).toBeInTheDocument();
  });
});
