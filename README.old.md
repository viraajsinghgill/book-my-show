Hey New Project!

Pages:
    >> Home.Page.jsx (Default>Hoc.jsx)
    >> Movie.Page.jsx (Movie.Hoc.jsx)
    >> Play.Page.jsx (Default>Hoc.jsx)

HOCs/Layouts:
    >> Default>Hoc.jsx
    >> Movie.Hoc.jsx
    
Components:
    >> Cast             cast.component.jsx
    >> Entertainment    entertainment.component.jsx
    >> HeroCarousel     HeroCarousel.component.jsx
                        Arrows.component.jsx
    >> MovieHero        MovieHero.component.jsx
                        MovieInfo.component.jsx
    >> Navbar           Navbar.Component.jsx
                        MovieNavbar.component.jsx
    >> PaymentModel     PaymentComponent.jsx
    >> PlayFilters      Filters.Component
    >> Poster           Poster.Component.jsx
    >> PostersSliders   PosterSliderComponent.jsx
    


## DevOps
Dev => Development Team
Ops => Operation Team

Devops and CICD (DOCKER & Kubernetes)

Dev -----------------------------------> Ops
write code + share code ---------------> Testing +scaling , Bug Fixing


Developer Team -> Operation Team -> Testing Team

complexity of application more => then time to build the application will be more

Scenario:
    Team of 3 members
        >> All have diff OS (Mac,Windows,Linus)
        
        person-1        person-2        Person-3
        (Windows)         (Mac)          (Linux)
        Packages   


It works on my Machine   

BookMyShow
RAM: 4GB
ROM: 1TB
GPU: 2GB

## Virtualisation
(I could be able to run virtual os on my local os)
Local OS in case of Person-2 => Mac
Virtualisation
Virtual OS => Windows


Basic Arch:

Windows (RAM,ROM,GPU) || Virtual OS
------------------------------------
OS                 || Local OS


Adv Arch:
Windows Virtual OS            Unix Virtual OS
7GB, 500GB, 1GB                 1GB, 500GB, 1GB             || Internal Resource sharing

Base/Local OS
8GB, 1TB, 2GB





## containersation (DOCKER)

Base:
Windows Virtual os(2GB, 250GB)              Unix Virtualisation OS(2Gb ,250GB)
                    Docker Engine      (4Gb,500GB)
Base Local OS(8GB , 1TB)



Book MY SHow Appln (3GB)


Base:
Windows Virtual os(2GB, 250GB)              Unix Virtualisation OS(2Gb ,250GB)
                    Docker Engine      (4Gb,500GB)
Base Local OS(8GB , 1TB)


Docker >> EC2 Instance >> Img and Conatiner
(Lets go hit depth here)

NGINX (Light Weight Servers)


Kubernetes (Orchestra)
>> Nodes >>
            >> Master Node (a person holding stick in Orchestra event)
            >> Child Node (A group of people who will bw following the lead guidence)
    
(Lets go hit depth here)


AWS >> EC2 (Virtual Machines)
Amazon Elastic Compute Cloud

Docker
        >>Img
        >>Containers

Image(Parent)
Containers(child) || server

Client Server Architecture


Kubernetes
        >>Docker Deamon ---> Server (Initiakization)
        >>Docker Client ---> Client 
        >>Docker Swarm ---> Orchestra (Master | MAin Node | Configuration)

        >> Master Node
        Child Node
            >>POD
            >>Development

Example: I want to run a server in the docker with 3 containers on my book my show clone application

Docker
    >> Image
        >>Cont 1
        >>Cont 2
        >>Cont 3

Kubernetes
    >>  Master Node   | Development
        >> Child Node | POD -1
        >> Child Node | POD -2
        >> Child Node | POD -3

Master NOde
        Child Node -1       Child Node -2       Child Node -3       Development


Development : Analyze and maintain all the PODs/Child NOde/ Server/ Containers

Docker > Kubernetes


AWS
    >> Services: EC2(VM) => UNIX
    Base OS >> Windows


    Client
                        Kubernetes
    Server

Server1 (1000req/hnr) => 200-300 similar reqs
Proxy Server1

Client sends req -> Proxy Serv -> Serv1


NGNIX (Light Weight Server)
        >>Reverse Proxy
        >>Load Balancing
