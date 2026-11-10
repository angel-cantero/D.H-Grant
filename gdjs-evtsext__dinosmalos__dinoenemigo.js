
gdjs.evtsExt__DinosMalos__DinoEnemigo = gdjs.evtsExt__DinosMalos__DinoEnemigo || {};

/**
 * Behavior generated from Dino enemigo (patrulla y ataque)
 */
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo = class DinoEnemigo extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PuedeMoverse = behaviorData.PuedeMoverse !== undefined ? behaviorData.PuedeMoverse : true;
    this._behaviorData.Direccion = behaviorData.Direccion !== undefined ? behaviorData.Direccion : false;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.PuedeMoverse !== undefined)
      this._behaviorData.PuedeMoverse = behaviorOverriding.PuedeMoverse;
    if (behaviorOverriding.Direccion !== undefined)
      this._behaviorData.Direccion = behaviorOverriding.Direccion;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    PuedeMoverse: this._behaviorData.PuedeMoverse,
    Direccion: this._behaviorData.Direccion,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.PuedeMoverse !== undefined)
      this._behaviorData.PuedeMoverse = networkSyncData.props.PuedeMoverse;
    if (networkSyncData.props.Direccion !== undefined)
      this._behaviorData.Direccion = networkSyncData.props.Direccion;
  }

  // Properties:
  
  _getPuedeMoverse() {
    return this._behaviorData.PuedeMoverse !== undefined ? this._behaviorData.PuedeMoverse : true;
  }
  _setPuedeMoverse(newValue) {
    this._behaviorData.PuedeMoverse = newValue;
  }
  _togglePuedeMoverse() {
    this._setPuedeMoverse(!this._getPuedeMoverse());
  }
  _getDireccion() {
    return this._behaviorData.Direccion !== undefined ? this._behaviorData.Direccion : false;
  }
  _setDireccion(newValue) {
    this._behaviorData.Direccion = newValue;
  }
  _toggleDireccion() {
    this._setDireccion(!this._getDireccion());
  }
}

/**
 * Shared data generated from Dino enemigo (patrulla y ataque)
 */
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.SharedData = class DinoEnemigoSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._DinosMalos_DinoEnemigoSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._DinosMalos_DinoEnemigoSharedData = new gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.SharedData(
      initialData
    );
  }
  return instanceContainer._DinosMalos_DinoEnemigoSharedData;
}

// Methods:
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.PuedeMoverseContext = {};
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.PuedeMoverseContext.idToCallbackMap = new Map();
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.PuedeMoverseContext.GDObjectObjects1= [];
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.PuedeMoverseContext.GDObjectObjects2= [];


gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.PuedeMoverseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPuedeMoverse();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.PuedeMoverse = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DinosMalos"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DinosMalos"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.PuedeMoverseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.PuedeMoverseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.PuedeMoverseContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.PuedeMoverseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.PuedeMoverseContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetPuedeMoverseContext = {};
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetPuedeMoverseContext.idToCallbackMap = new Map();
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetPuedeMoverseContext.GDObjectObjects1= [];
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetPuedeMoverseContext.GDObjectObjects2= [];


gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetPuedeMoverseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPuedeMoverse(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPuedeMoverse(true)
}
}

}


};

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetPuedeMoverse = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DinosMalos"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DinosMalos"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetPuedeMoverseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetPuedeMoverseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetPuedeMoverseContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetPuedeMoverseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetPuedeMoverseContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.DireccionContext = {};
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.DireccionContext.idToCallbackMap = new Map();
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.DireccionContext.GDObjectObjects1= [];
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.DireccionContext.GDObjectObjects2= [];


gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.DireccionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDireccion();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.Direccion = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DinosMalos"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DinosMalos"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.DireccionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.DireccionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.DireccionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.DireccionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.DireccionContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetDireccionContext = {};
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetDireccionContext.idToCallbackMap = new Map();
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetDireccionContext.GDObjectObjects1= [];
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetDireccionContext.GDObjectObjects2= [];


gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetDireccionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDireccion(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDireccion(true)
}
}

}


};

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetDireccion = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DinosMalos"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DinosMalos"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetDireccionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetDireccionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetDireccionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetDireccionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.SetDireccionContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext = {};
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.idToCallbackMap = new Map();
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDObjectObjects1= [];
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDObjectObjects2= [];
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDHeroeObjects1= [];
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDHeroeObjects2= [];
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDPlataformasObjects1= [];
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDPlataformasObjects2= [];


gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDObjectObjects1);
{}
}

}


};

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.Comportamiento = function(Heroe, Plataformas, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Heroe": Heroe
, "Plataformas": Plataformas
},
  _objectArraysMap: {
"Object": thisObjectList
, "Heroe": gdjs.objectsListsToArray(Heroe)
, "Plataformas": gdjs.objectsListsToArray(Plataformas)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DinosMalos"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DinosMalos"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDHeroeObjects1.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDHeroeObjects2.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDPlataformasObjects1.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDPlataformasObjects2.length = 0;

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDHeroeObjects1.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDHeroeObjects2.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDPlataformasObjects1.length = 0;
gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.ComportamientoContext.GDPlataformasObjects2.length = 0;


return;
}

gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("DinosMalos::DinoEnemigo", gdjs.evtsExt__DinosMalos__DinoEnemigo.DinoEnemigo);
