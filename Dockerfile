FROM node:10.4.1

# Create app directory
RUN mkdir -p /usr/hammer/react-starter-kit-master
WORKDIR /usr/hammer/react-starter-kit-master

# Install app dependencies
COPY package.json /usr/hammer/react-starter-kit-master
RUN npm install

# Bundle app source
COPY . /usr/hammer/react-starter-kit-master

# Build arguments
ARG NODE_VERSION=10.4.1

# Environment
ENV NODE_VERSION $NODE_VERSION

CMD ["/bin/bash"]