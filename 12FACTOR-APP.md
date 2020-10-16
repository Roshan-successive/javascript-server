# 12 Factor App
##### Code Base :
- One codebase tracked in revision control, many deploys.
- Basically , Tweleve factor app is always tracked in version control system such as Git, Subversion and Mercurial.
- A copy of the revision tracking database that known as a code repository, in shortened to code repo or just repo.
- basically, Codebase is any single repo or any set of repos who share a root commit.
Codebase is the same across all deploys, although different versions may be active in each deploys.
##### Dependencies :
- Explicitly declare and isolate dependencies
- Basically, most programming languages offer a packaging system for distributing suppport libraries, such as CPAN for Perl.
- Your application might rely on external libraries and packages to run. You should never assume that these packages exist on the target system. Instead, your application must declare all dependencies and their correct version explicitly.
- All dependencies should be declared, with no implicit reliance on system tools or libraries.
##### Config :
- Store config in the environment
- Configuration that varies between deployments should be stored in the environment.

##### Backing services :
- Treat backing services as attached resources
- All backing services are treated as attached resources and attached and detached by the execution environment.
- Backing services refer to the infrastructure and other services by which the application communicates over the network.
- Database, Message Brokers, other API-accessible consumer services such as Authorization Service, Twitter, GitHub etc., are loosely coupled with the application and treat them as resource.
- The difference here is that you must be able to easily swap the backing service from one provider to another without code changes.
##### Build, release, run :
- Strictly separate build and run stages
- A codebase is transformed into a deploy through three stages ...
- Build Stage : is fully controlled by the developer. This is where we tag a new release and fix bugs.