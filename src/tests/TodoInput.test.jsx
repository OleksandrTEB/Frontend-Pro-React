import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../store/store.js';
import MainPage from '../pages/MainPage/MainPage';

describe('Поле введення в MainPage', () => {
    test('дозволяє вводити як букви, так і цифри', async () => {
        render(
            <Provider store={store}>
                <MainPage />
            </Provider>
        );

        const input = screen.getByRole('textbox');

        await userEvent.type(input, 'Купити 3 яблука');

        expect(input.value).toBe('Купити 3 яблука');
    });
});