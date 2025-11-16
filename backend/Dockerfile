# Use official Node runtime
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the entire backend code
COPY . .

# Cloud Run automatically sets PORT → your app must listen on this
ENV PORT=8080

# Expose the port
EXPOSE 8080

# Start the server
CMD ["node", "index.js"]
