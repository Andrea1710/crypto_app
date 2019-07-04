# CRYPTO CURRENCIES APP

Basic App to get Crypto Currencies from binance-api-node

## Installation

After clining the project, run the command:

```bash
npm install
```

and then, depending on the test environment, run the command:

```bash
npm run ios
//
npm run android
```

## Usage

The App is made of three different Screens.

### NavBar

The Navbar on the top of the Application is shown with a Burger Icon on the top-left corner; by clicking it, the User can navigate between the three different Screens:

- HOME
- FAVORITES
- STATUS

### First Screen (HOME)

Displayed on the Opening of the App, in which, after the initial Load, all the Crypto Currencies are displayed in a ScrollView.

On the Home screen, the User can click on each of the Crypto Cards to save them in the favorite Screen (second Screen of the App).
After saving them in the Store, a simple Alert is shown to the User for feedback.
The SearchBar has no functionality, as it wasn't expressly required.

### Second Screen (FAVORITES)

This Screen is to show the Favorite Crypto Currencies saved by the Users from the First Screen (HOME).
In order to see all of them, the User needs to refresh the Screen upon clicking the top Button.
If the User wants to delete one Crypto saved in the favorites, he just needs to Click on one of the Cards to remove it.

### Third Screen (STATUS)

This last Screen is a simple Status Screen, in which, depending on the Connection, a Message to the User is dynamically shown, according to its Internet Status.

### OFFLINE USAGE (redux-persist)

Turning off Internet, the User can still navigate through the Screens and save the Favorite Cryptos from the First Screen to the Second one.
Also, when Offline, a Red Message is consistently shown and, obviously, on the third screen the Status changes to Offline.

### MIDDLEWARES

I only used Redux-Thunk to use and Dispatch Asynchronous Actions to the Store.
I used it because it allows to Dispatch Functions instead of just plain action objects, in order to manage asynchronous operations like reading an Endpoint API.
As a Con, this Middleware doesn't scale too well, because when the amount of Async Logic grows, we could end up with a lot of code and also complex logics, but beign a small App, this hasn't been an issue.

### IOS and ANDROID

I tested the App in both IOS (xCode) and Android (Android Studio) on a MAC and all seemed to work fine.
There are a couple of small bugs, but as it is a small and quick Project, I didn't manage to fix them.

### SCALABILITY

The App is well structured and almost every logic and component has its own file into different folders.
This allows other Developers or us in the future to grow in size, always having a structure that allows us to modify just the small piece we need to change in one place only.

## AUTHOR

### ANDREA BELLUCCIA
