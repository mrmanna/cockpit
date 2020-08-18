# cockpit
Java based PWA and microservice development framework with frontend with bck2bwsr and backend with netty and jersey

### Core Components
- API Gateway: Netty 4 based a HTTP/2 proxy 
- Gadget SDK: Bck2Brwsr based frontend Gadget Development libraries
- Theme and Layout Builder UI: SASS based theme and JSON based web Layout builder 
- Microservice SDK: Netty and Jersey integrated Microservice Development API


## TODO
- Gadget Builder UI
- Microservice Composer UI
- OAuth 2 Server Integration
- Metrics Server & Viewer
- Log Server & Viewer
- Cassandra and MongoDB integration
- Server Sent Event (SSE) Manager
- HTTP/2 Push Manager
- and many more 

## Run 
- Build the whole project with Maven 3
- Fix the ALPN Agent path in pom.xml of Cockpit>gadgets>microservices>gateway project for HTTP/2 
- Add domains in hosts file according to your OS
127.0.0.1       content.cockpit.dev
127.0.0.1       www.cockpit.dev
127.0.0.1       cockpit.cockpit.dev
127.0.0.1       accounts.cockpit.dev
127.0.0.1       data.cockpit.dev
- Install cockpit.dev certs from gateway project to be trusted
- In Cockpit>gadgets>microservices Shell and Content projects config.properties, store location fix as your local machine
storePath=E:\cockpit\cockpit\store
- Stop port 80 if running in your machine
- Run Gateway,Shell and Content Microservice server from Netbean. If you are using commandline 
then build these three projects with profile "server" to create uber jar of each project and run them from commandline,
if servers are running hit borwser with https://www.cockpit.dev
  