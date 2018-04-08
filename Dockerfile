# Import the base image
FROM mhart/alpine-node

# Create a working directory
WORKDIR /usr/src/app

# Copy package.json to the working directory
COPY package*.json yarn.lock ./

# Install all the dependencies
RUN yarn install

# Start the application
CMD yarn start
