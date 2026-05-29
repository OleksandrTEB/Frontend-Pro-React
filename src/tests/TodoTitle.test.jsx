import React from 'react';
import { render, waitFor } from '@testing-library/react';
import MainPage from '../pages/MainPage/MainPage.jsx';
import { store } from '../store/store.js'
import {Provider} from "react-redux";

describe('Компонент TodoPage', () => {
    test('правильно змінює заголовок вкладки браузера', async () => {
        // Рендеримо компонент
        render(
            <Provider store={store}>
                <MainPage />
            </Provider>
        );

        // Перевіряємо, чи змінився document.title
        await waitFor(() => {
            expect(document.title).toBe("Мій список TODO");
        }, { timeout: 1500 })
    });
});