# GeekOn - Digital Products Agency

Welcome to the GitHub repository for GeekOn, a digital product agency specializing in building web and mobile apps,
creating UI/UX designs, graphic designs, and offering marketing solutions.

## About GeekOn

GeekOn is a team of passionate creators dedicated to crafting innovative and user-centric digital products. Our services
range from conceptualizing and designing cutting-edge interfaces to developing robust and scalable web and mobile
applications. We also excel in creating compelling graphic designs and delivering effective marketing strategies.

## Technologies Used

- Next.js: A powerful React framework for building server-side rendered (SSR) and static websites with ease.
- TypeScript: A typed superset of JavaScript, ensuring code reliability and scalability.
- SCSS: Utilizing SCSS (Sass) for writing clean and maintainable CSS code with advanced features.
- Prettier: For automatic code formatting, ensuring consistent and organized codebase.
- ESLint: To maintain code quality and enforce best practices.
- Stylelint: For linting SCSS code and ensuring style consistency across the project.

## Getting Started

To get a local copy of the website up and running, follow these steps:

1. Clone the repository using the following command:
   ```
   git clone https://github.com/shukha04/geekon.git
   ```

2. Navigate to the project folder:
   ```
   cd website
   ```

3. Install the required dependencies:
   ```
   pnpm install
   ```

4. Run the development server:
   ```
   pnpm run dev
   ```

5. Open your browser and access the website at http://localhost:3000.

## Folder Structure

- `/public`: Static assets.
- `/src`: Source files.
	- `/app`: Next.js 13 routes folder. (
	  See [Next.js 13+ documentation](https://nextjs.org/docs/app/building-your-application/routing#the-app-router))
		- `/[lang]`: Routes folder with localization. (
		  See [`next-intl` documentation](https://next-intl-docs.vercel.app/docs/getting-started))
	- `/assets`: Assets and localization files folder.
	- `components`: Custom components' folder.
		- `/providers`: Custom and libraries context providers folder.

## Contributing

We welcome contributions from the community! If you have any bug fixes, improvements, or new features to suggest, please
open a pull request. Before that, ensure your code follows the guidelines mentioned in the .eslintrc and .stylelintrc
files. If you want to contribute, please follow these steps:

1. Fork the repository to your GitHub account.

2. Create a new branch from the `main` branch with a descriptive name:
   ```
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them with clear commit messages:
   ```
   git commit -m "Add feature: your feature description"
   ```

4. Push your changes to your forked repository:
   ```
   git push origin feature/your-feature-name
   ```

5. Create a pull request from your branch to our `main` branch, explaining the changes you made.

## Issues

If you encounter any issues with the website or have suggestions for improvements, please open a new issue in the GitHub
repository.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

For inquiries or more information about GeekOn, you can reach us at:

- Website: https://geekon.dev
- Email: [info@geekon.dev](mailto:info@geekon.dev)

Thank you for visiting our repository. We hope you find our website interesting and informative!
