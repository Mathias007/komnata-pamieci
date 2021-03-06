# Komnata Pamięci Tajemnic Antagarichu

## Adres witryny (preview): https://egildia.pl/forum/historia

### Opis

Komnata Pamięci to sekcja forum [Tajemnice Antagarichu](http://herosy3.pun.pl) poświęcona gromadzeniu danych dotyczących historii tego serwisu oraz społeczności wokół niego zbudowanej. Pierwsza wersja powstała w **2008** roku i od tego czasu była parukrotnie przebudowywana. Niniejsza wersja czyni z Komnaty Pamięci `samodzielną aplikację webową`, wykorzystującą `najnowsze techniki` budowania struktury HTML, styli CSS oraz kodu JavaScript ES6+. Jednocześnie ma być `przyjazna dla użytkownika`, `wydajna oraz estetyczna`, spełniając swoją `archiwizacyjną rolę`. Ważnym celem jest także zapewnienie `responsywności` layoutu.

### Zawartość

Strona główna aplikacji składa się z kilku sekcji. Użytkownik może poruszać się po nich z użyciem **animowanej nawigacji (hamburger menu)** lub scrollując.

Po sekcji wprowadzającej (**home**) znajdują się sekcje zawierające dynamiczne generowane listy newsów z **poszczególnych lat działalności forum**. Każdy element listy obejmuje datę, tytuł oraz link do tematu na forum (rozpoznając, czy jest to zwykły wątek, czy też może sonda, co wpływa na generowanie ścieżki), a opcjonalnie także dodatkowy komentarz widoczny po najechaniu na przycisk.

Następnie odnaleźć można odnośnik do **Historii forum pióra króla Mathiasa**. Jest to uzupełniany latami dłuższy esej dość szczegółowo opisujący wydarzenia na forum, losy użytkowników, afery i ważniejsze inicjatywy społeczności. Z racji swojej objętości został umieszczony na [odrębnej podstronie](https://egildia.pl/forum/historia/subpages/essay.html).

Wśród zasobów Komnaty Pamięci znajduje się także **Pręgierz**, czyli lista osób zbanowanych. On również został zamieszczony na [osobnej podstronie](https://egildia.pl/forum/historia/subpages/banned.html) i zawiera dane w formie dynamicznie generowanej tabeli.

Ostatnia sekcja to typowy **backlog**, w którym również dynamicznie zaprezentowano wykazy zmian w poszczególnych wersjach Komnaty Pamięci. Pod nią znajduje się **stopka** z informacjami na temat autora oraz odnośnikiem do forum Tajemnice Antagarichu.

### Status rozwoju i Przyszłość

Obecnie aplikacja osiągnęła swoją wersję **2.0**. Nie kończy to jednak usprawnień. W dalszym ciągu należy poprawić `responsywność`. Konieczna jest także `aktualizacja zawartości` (kolejne lata od 2015, zarówno gdy chodzi o listę newsów, jak i esej czy backlog) oraz `poprawa wyświetlania specjalnych pól w sekcjach dot. kolejnych lat`. Do rozważenia pozostaje także stworzenie `alternatywnych szat graficznych` do wyboru przez użytkownika (np. obok szaro-złotej także szaro-niebieska), jak również `konwersja CSS do SCSS`.

#### Aktualizacja 24 i 27 marca - dodana podstrona Pręgierz, zmiany w kodzie i strukturze projektu