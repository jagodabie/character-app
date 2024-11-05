# Dokumentacja Projektu

## Przegląd Projektu

Ten projekt to aplikacja internetowa, która pozwala użytkownikom tworzyć i kontrolować postać na statycznej mapie. Użytkownik może wprowadzić nazwę postaci oraz wybrać jej kolor. Postać pojawia się na mapie z wybraną nazwą i kolorem, a użytkownik może sterować jej ruchem za pomocą klawiszy strzałek. Aplikacja jest zbudowana przy użyciu React, TypeScript oraz wykorzystuje custom hooki i context API do zarządzania stanem.

## Funkcjonalności

- Wprowadzenie nazwy postaci oraz wybór koloru
- Wyświetlanie postaci z wybraną nazwą i kolorem na mapie
- Sterowanie ruchem postaci za pomocą klawiszy strzałek
- Ograniczenie ruchu postaci poza granice mapy na osi x

## Instalacja

### Wymagania

- Node.js (>= 14.x)
- npm (>= 6.x)

### Krok po kroku

1.  **Sklonuj Repozytorium**

    git clone https://github.com/username/color-picker-character-app

    cd color-picker-character-app

2.  **Zainstaluj Zależności**

    npm install

3.  **Uruchom Serwer Deweloperski**

        npm run dev

    Aplikacja zostanie uruchomiona na http://localhost:5173.

## Użycie

1. Otwórz aplikację w przeglądarce pod adresem http://localhost:5173.
2. Wprowadź nazwę postaci w polu tekstowym.
3. Wybierz kolor postaci za pomocą przycisku wyboru koloru.
4. Kliknij „Zatwierdź”, aby wyświetlić postać na mapie z wybraną nazwą i kolorem.
5. Użyj klawiszy strzałek, aby przesuwać postać po mapie (postać nie przesunie się w lewo, jeśli osiągnie granicę mapy).

## Zależności

### Główne zależności

- `react`: ^18.3.1
- `react-dom`: ^18.3.1

### Zależności deweloperskie

- `@eslint/js`: ^9.14.0
- `@types/react`: ^18.3.12
- `@types/react-dom`: ^18.3.1
- `@vitejs/plugin-react-swc`: ^3.5.0
- `eslint`: ^9.14.0
- `eslint-config-prettier`: ^9.1.0
- `eslint-plugin-prettier`: ^5.2.1
- `eslint-plugin-react`: ^7.37.2
- `eslint-plugin-react-hooks`: ^5.0.0
- `eslint-plugin-react-refresh`: ^0.4.14
- `globals`: ^15.12.0
- `prettier`: ^3.3.3
- `typescript`: ^5.6.3
- `typescript-eslint`: ^8.12.2
- `vite`: ^5.4.10

Projekt wykorzystuje również custom hooki oraz context API do zarządzania właściwościami postaci i jej ruchem.
