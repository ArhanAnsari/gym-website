FROM node:lts AS development
ENV NODE_ENV development

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .

# RUN yarn install
RUN yarn install

# Copy app files
COPY . .

# Expose port
EXPOSE 5173

# Start the app
CMD [ "yarn", "run", "dev" ]