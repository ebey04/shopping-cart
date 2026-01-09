import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Card from "./Card";
import { Outlet } from "react-router-dom";
import * as router from "react-router-dom";



vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useOutletContext: () => ({
        imgURL: "https://example.com/test-image.jpg",
        titleEl: "Title",
        priceEl: "$0.00",
        descriptionEl: "blahblhalbah",
        }),
    };
});

describe("Card", () => {
    it("renders an image when imgURL exists", () => {
        render(<Card />);

        const img = screen.getByRole("img");

        expect(img).toBeInTheDocument();
        expect(img.src).toContain("test-image.jpg");
    });

    it("renders a title when titleStr exists", () => {
        render(<Card />);

        const titleEl = screen.getByTestId("product-title");
        expect(titleEl).toHaveTextContent(/.+/);
    })
    it("renders price when priceStr exists", () => {
        render(<Card />);

        const priceEl = screen.getByTestId("product-price");
        expect(priceEl).toHaveTextContent(/.+/);
    })
    it("renders description when descriptionStr exists", () => {
        render(<Card />);

        const descriptionEl = screen.getByTestId("product-description");
        expect(descriptionEl).toHaveTextContent(/.+/);
    })
});
