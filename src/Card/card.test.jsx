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
});
