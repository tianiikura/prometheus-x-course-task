import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { CartContext } from './CartContext';
import SpecificBook from './SpecificBook';

const loadSpecificBookPage = async () => {
    const fakeBook = {
        "id": 10,
        "author": "Wendy Chisholm, Matt May",
        "price": 6.99,
        "image": "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@universal_design_for_web_applications.jpg",
        "title": "Universal Design for Web Applications",
        "shortDescription": "Universal Design for Web Applications teaches you how to build websites that are more accessible to people with disabilities and explains why doing so is good business.",
        "description": "Universal Design for Web Applications teaches you how to build websites that are more accessible to people with disabilities and explains why doing so is good business. It takes more work up front, but the potential payoff is huge -- especially when mobile users need to access your sites. You'll discover how to use standards-based web technologies -- such as XHTML, CSS, and Ajax, along with video and Flash -- to develop applications for a wide range of users and a variety of devices, including the mobile Web. You'll also learn specifics about this target audience, especially the key over-50 age group, whose use of the Web is rapidly growing."
    };

    const routes = [
        {
            path: 'book/:id',
            loader: () => fakeBook,
            element: <SpecificBook />,
        }
    ];

    const cart = {};
    const addToCart = function (bookId, count) {   
    };

    const router = createMemoryRouter(routes, {
        initialEntries: ["/", "/book/10"],
        initialIndex: 1,
      });
    
    render(
        <CartContext.Provider value={{cart, addToCart}} >
            <RouterProvider router={router} />
        </CartContext.Provider >
    );
    await waitFor(() => screen.getByText(/Total price/i));

}

test('Render total price', async () => {
    await loadSpecificBookPage();

    const labelElement = screen.getByText(/Total price/i)
    expect(labelElement).toBeInTheDocument();
});

test('Check count increase', async () => {
    await loadSpecificBookPage();

    const inputCount = screen.getByTestId('count');
    expect(inputCount.value).toBe('1');
    inputCount.stepUp();

    expect(inputCount.value).toBe('2');
});

test('Check count decrease', async () => {
    await loadSpecificBookPage();

    const inputCount = screen.getByTestId('count');
    inputCount.value = 10;
    inputCount.stepDown();

    expect(inputCount.value).toBe('9');
});

test('Check total price change', async () => {
    await loadSpecificBookPage();

    const inputCount = screen.getByTestId('count');
    const totalPriceElement = screen.getByTestId("totalPrice");

    fireEvent.change(inputCount, { target: { value: "10" } });

    expect(totalPriceElement.innerHTML).toBe('69.90');
});