
# cockpit
Java based PWA and microservice development framework with frontend with [bck2bwsr]([https://github.com/jtulach/bck2brwsr](https://github.com/jtulach/bck2brwsr)) and backend with [netty]([https://github.com/netty/netty](https://github.com/netty/netty)) and jersey. This platform is to provide zero-code facilities to create modern apps with backend that can run everywhere. 

##### Core Components
- **API Gateway**: Netty 4 based a HTTP/2 proxy 
- **Gadget SDK**: Bck2Brwsr based frontend Gadget Development libraries
- **Theme and Layout Builder (Web UI)**: SASS based theme and JSON based web Layout builder 
- **Microservice SDK**: Netty and Jersey integrated Microservice Development API

##### Todo
- Gadget Builder UI
- Microservice Composer UI
- OAuth 2 Server Integration
- Metrics Server & Viewer
- Log Server & Viewer
- Cassandra and MongoDB integration
- Server Sent Event (SSE) Manager
- HTTP/2 Push Manager
- Containerization 
- and many more 

##### Run 
- Build the whole project with Maven 3
- Fix the ALPN Agent path in pom.xml of Cockpit>gadgets>microservices>gateway project for HTTP/2 
- Add domains in hosts file according to your OS
```sh
127.0.0.1       content.cockpit.dev
127.0.0.1       www.cockpit.dev
127.0.0.1       cockpit.cockpit.dev
127.0.0.1       accounts.cockpit.dev
127.0.0.1       data.cockpit.dev
```
- Install cockpit.dev certs from gateway project to be trusted
- In Cockpit>gadgets>microservices Shell and Content projects config.properties, store location fix as your local machine
```sh
storePath=E:\cockpit\cockpit\store
```
- Stop port 80 if running in your machine
- Run Gateway,Shell and Content Microservice server from Netbean. If you are using commandline 
then build these three projects with profile "server" to create uber jar of each project and run them from commandline,
if servers are running hit borwser with https://www.cockpit.dev
> *This Deploy and Run section need more elaborate guideline*
##### For more understanding Cockpit
- [Netty & Jersey Marriage, Asynchronous non-blocking Microservice API Gateway](https://medium.com/@mrmanna/netty-jersey-marriage-b7f12ac8d4a9)
- [Implementing Single Page Application Shell with Java and HTTP/2 Cloud Gateway with Netty](https://medium.com/@mrmanna/implementing-single-page-application-shell-with-java-and-http-2-cloud-gateway-with-netty-aa0d083d38ca)
- [PWA & Shell Architecture](https://medium.com/@mrmanna/pwa-shell-architecture-84dca8c29149)
- [Captain API of Cockpit, asynchronous job execution planning API](https://medium.com/@mrmanna/captain-api-of-cockpit-d1c7ab9dc30f)
  
