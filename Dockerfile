FROM node:14-alpine as build

ARG REACT_APP_BASE_URL
ARG REACT_APP_GOOGLE_ANALYTICS

WORKDIR /app

# Place this here so it won't run install every build
COPY package*.json /app/
RUN npm install

# Copy the code and build
#
# This will always take the longest
COPY ./ /app/
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine

# Might be able to go back to the old way again
#
# Could have just been a mistake on the URL but the
# 404's never appeared, will have a look
COPY /serve/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
