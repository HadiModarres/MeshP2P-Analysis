<a href="https://meshp2p.org"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/NetworkTopology-FullyConnected.png" height="150" align="right"></a>
# Mesh P2P Analysis Dashboard

 A graphical interface to visualize and analyze Mesh P2P performance at network overview level. 
 
 ### Modules: 
 This repo uses the following submodules:
 1. [Mesh P2P](https://github.com/HadiModarres/MeshP2P) is located under /meshp2p
 1. Stats Server which is located under /stats_server (Nodes in the network regularly report their statistics to this module)
 1. React Dashboard located under /graph which shows a visualization of the network graph and other useful network statistics. 
 
 ## Installation 
 Clone this repository along with all submodules: 
 
```
git clone https://github.com/HadiModarres/MeshP2P-Analysis.git --recurse-submodules
```

Install all packages in all submodules:
```
npm run install_all
```

Start the React dashboard, the stats server, and the signalling servers. 

```
npm start
```

Navigate to dashboard at `localhost:3000` 
 
##### Default ports: 
* Dashboard: 3000
* Stats Server: 3500
* Signalling Servers: 12345 and 12346 


## Running Nodes 
A script is provided to facilitate running many nodes together. 
The script accepts two parameters for the number of nodes and the desired web browser. 
To Run 50 nodes on Firefox:
```
npm run nodes -- firefox 50 
```

For this command to work `firefox` should be available on the command line.

Hints: 
* Navigate to a new workspace to run many nodes for better management of the browser windows.
* This can make the system or the browser windows unstable depending on your system's available resources. 
* Most stable configurations(in order):
    * Ubuntu + Regolith (i3 window manager) + Google Chrome
    * Ubuntu + XFCE + Firefox
    * Ubuntu + Plasma KDE + Chrome or Firefox
    
## Running Nodes
Stopping all servers and closing all browser windows: 
```
pkill node && pkill firefox 
``` 






