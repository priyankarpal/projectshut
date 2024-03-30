# Stage 1: Build
FROM node:latest AS build

WORKDIR /src/dev/app

COPY package.json /src/dev/app

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy the rest of the application code
COPY . /src/dev/app

# Stage 2: Production
FROM node:alpine AS production

WORKDIR /src/prod/app

# Copy only necessary files from the build stage
COPY --from=build /src/dev/app /src/prod/app

# Install pnpm in the production stage
RUN npm install -g pnpm

# Expose port
EXPOSE 3000

# Command to run the application in production
CMD ["pnpm", "run", "dev"]
