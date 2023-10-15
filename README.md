# Founder Application Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To get a copy of this project and run it locally, follow these steps:

### Clone the Repository

```bash
git clone [Repo](https://github.com/pritiyadav888/nft_thousandFaces.git)
cd founder-application
npm install
npm run dev

```
## Components

### _app.js

This component wraps around all other page components, allowing for consistency and ease of prop spreading.

### Form.js

A dynamic form that allows users to submit project applications. The form fields include project name, project description, origin country, team size, and additional information. Successful submissions are stored in local storage.

#### Purpose

This component allows users to fill in and submit a form with details regarding a project.

#### Dependencies

- `useState` from React: Used to manage component states.
- `countries` from i18n-iso-countries: A library to get the list of countries.
- Tailwind CSS: Utility-first CSS framework for rapidly building custom user interfaces.

#### State Management

- `formData`: Stores the data of the form fields.
- `submitted`: Tracks if the form has been submitted.

#### Event Handlers

- `handleChange`: Updates the `formData` state upon input changes.
- `handleSubmit`: Handles form submission, saves form data to local storage, and updates the `submitted` state.

#### Component Rendering

- If the form hasn't been submitted (`!submitted`), it displays the input form.
- If the form has been submitted, it displays a confirmation message along with the submitted data.

### UserProfile.js

Displays a user's profile, which includes their picture, name, LinkedIn link, a token gallery, and an optional hardcoded gallery. The LinkedIn link can be copied to the clipboard with a single click.

#### Purpose

This component displays a user's profile, including a link to their LinkedIn, a gallery of NFTs, and allows toggling between two different galleries.

#### Dependencies

- React's `useState` and `useEffect`: Used for state management and side effects.
- Various icons from the `react-icons` library.
- A custom CSS file.

#### State Management

- `isGalleryExpanded`: Controls the visibility of the NFT gallery.
- `copySuccess`: Tracks if the LinkedIn link has been successfully copied.
- `nfts`: Holds fetched NFTs from an API.
- `showHardcodedGallery`: Determines which gallery to display (API-driven or hardcoded).

#### Event Handlers and Side Effects

- `copyToClipboard`: Allows copying the LinkedIn link to the clipboard.
- A `useEffect` hook fetches NFTs from the given API.

#### Component Rendering

- Displays a navbar with a search bar, company logo, and a few buttons.
- Renders a profile card with the user's image, name, and LinkedIn link.
- Lists NFTs in the user's gallery.
- Provides a button to toggle between the two different galleries (API-driven and hardcoded).

## Pages

You can access the following pages:

- [Form Page](public/form.png)
- [UserProfile Page](public/profile.png)

## Styling

Two main stylesheets drive the look and feel of the application:

- `profile.css`: Contains the styles specific to the UserProfile component. This file will be shared later as it's quite extensive.
- `globals.css`: This is a global stylesheet that provides essential styles for the entire application, including body, form-container, inputs, and animations.
