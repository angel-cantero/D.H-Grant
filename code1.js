gdjs.cinematicaCode = {};
gdjs.cinematicaCode.localVariables = [];
gdjs.cinematicaCode.idToCallbackMap = new Map();
gdjs.cinematicaCode.GDNewSpriteObjects1= [];
gdjs.cinematicaCode.GDNewSpriteObjects2= [];
gdjs.cinematicaCode.GDcambio_9595de_9595escenaObjects1= [];
gdjs.cinematicaCode.GDcambio_9595de_9595escenaObjects2= [];
gdjs.cinematicaCode.GDheroeObjects1= [];
gdjs.cinematicaCode.GDheroeObjects2= [];
gdjs.cinematicaCode.GDBloqueObjects1= [];
gdjs.cinematicaCode.GDBloqueObjects2= [];
gdjs.cinematicaCode.GDBloque2Objects1= [];
gdjs.cinematicaCode.GDBloque2Objects2= [];
gdjs.cinematicaCode.GDBloque3Objects1= [];
gdjs.cinematicaCode.GDBloque3Objects2= [];
gdjs.cinematicaCode.GDMonedaObjects1= [];
gdjs.cinematicaCode.GDMonedaObjects2= [];
gdjs.cinematicaCode.GDCheckpointObjects1= [];
gdjs.cinematicaCode.GDCheckpointObjects2= [];
gdjs.cinematicaCode.GDdinoObjects1= [];
gdjs.cinematicaCode.GDdinoObjects2= [];
gdjs.cinematicaCode.GDdireccionadorObjects1= [];
gdjs.cinematicaCode.GDdireccionadorObjects2= [];
gdjs.cinematicaCode.GDdebilObjects1= [];
gdjs.cinematicaCode.GDdebilObjects2= [];
gdjs.cinematicaCode.GDtrampolinObjects1= [];
gdjs.cinematicaCode.GDtrampolinObjects2= [];
gdjs.cinematicaCode.GDmovimientoObjects1= [];
gdjs.cinematicaCode.GDmovimientoObjects2= [];
gdjs.cinematicaCode.GDfondoObjects1= [];
gdjs.cinematicaCode.GDfondoObjects2= [];
gdjs.cinematicaCode.GDBloque4Objects1= [];
gdjs.cinematicaCode.GDBloque4Objects2= [];
gdjs.cinematicaCode.GDdino_9595npcObjects1= [];
gdjs.cinematicaCode.GDdino_9595npcObjects2= [];
gdjs.cinematicaCode.GDCartelObjects1= [];
gdjs.cinematicaCode.GDCartelObjects2= [];
gdjs.cinematicaCode.GDboton_9595saltoObjects1= [];
gdjs.cinematicaCode.GDboton_9595saltoObjects2= [];
gdjs.cinematicaCode.GDFlatDarkJoystickObjects1= [];
gdjs.cinematicaCode.GDFlatDarkJoystickObjects2= [];
gdjs.cinematicaCode.GDinterfazObjects1= [];
gdjs.cinematicaCode.GDinterfazObjects2= [];
gdjs.cinematicaCode.GDmonedasObjects1= [];
gdjs.cinematicaCode.GDmonedasObjects2= [];
gdjs.cinematicaCode.GDmonfalObjects1= [];
gdjs.cinematicaCode.GDmonfalObjects2= [];
gdjs.cinematicaCode.GDdinosMataObjects1= [];
gdjs.cinematicaCode.GDdinosMataObjects2= [];
gdjs.cinematicaCode.GDicon_9595dinoObjects1= [];
gdjs.cinematicaCode.GDicon_9595dinoObjects2= [];
gdjs.cinematicaCode.GDicon_9595monObjects1= [];
gdjs.cinematicaCode.GDicon_9595monObjects2= [];


gdjs.cinematicaCode.asyncCallback14462588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.cinematicaCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs.cinematicaCode.GDNewSpriteObjects2);

{for(var i = 0, len = gdjs.cinematicaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.cinematicaCode.GDNewSpriteObjects2[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "aparecer", 250, runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), 0.3, false);
}
}
gdjs.cinematicaCode.localVariables.length = 0;
}
gdjs.cinematicaCode.idToCallbackMap.set(14462588, gdjs.cinematicaCode.asyncCallback14462588);
gdjs.cinematicaCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.cinematicaCode.localVariables);
for (const obj of gdjs.cinematicaCode.GDNewSpriteObjects1) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.cinematicaCode.asyncCallback14462588(runtimeScene, asyncObjectsList)), 14462588, asyncObjectsList);
}
}

}


};gdjs.cinematicaCode.mapOfGDgdjs_9546cinematicaCode_9546GDcambio_95959595de_95959595escenaObjects1Objects = Hashtable.newFrom({"cambio_de_escena": gdjs.cinematicaCode.GDcambio_9595de_9595escenaObjects1});
gdjs.cinematicaCode.asyncCallback14459764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.cinematicaCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.cinematicaCode.GDNewSpriteObjects2);
{for(var i = 0, len = gdjs.cinematicaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.cinematicaCode.GDNewSpriteObjects2[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "desvanecer", 0, runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), 0.3, false);
}
}
gdjs.cinematicaCode.localVariables.length = 0;
}
gdjs.cinematicaCode.idToCallbackMap.set(14459764, gdjs.cinematicaCode.asyncCallback14459764);
gdjs.cinematicaCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.cinematicaCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.cinematicaCode.asyncCallback14459764(runtimeScene, asyncObjectsList)), 14459764, asyncObjectsList);
}
}

}


};gdjs.cinematicaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.cinematicaCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.cinematicaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.cinematicaCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.cinematicaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.cinematicaCode.GDNewSpriteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.cinematicaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cambio_de_escena"), gdjs.cinematicaCode.GDcambio_9595de_9595escenaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.cinematicaCode.mapOfGDgdjs_9546cinematicaCode_9546GDcambio_95959595de_95959595escenaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.cinematicaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.cinematicaCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.cinematicaCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.cinematicaCode.GDNewSpriteObjects1[i].getBehavior("Tween").hasFinished("desvanecer") ) {
        isConditionTrue_0 = true;
        gdjs.cinematicaCode.GDNewSpriteObjects1[k] = gdjs.cinematicaCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.cinematicaCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cambio_de_escena"), gdjs.cinematicaCode.GDcambio_9595de_9595escenaObjects1);
{for(var i = 0, len = gdjs.cinematicaCode.GDcambio_9595de_9595escenaObjects1.length ;i < len;++i) {
    gdjs.cinematicaCode.GDcambio_9595de_9595escenaObjects1[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "desvanecer", 0, runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), 0.3, false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "tutorial", false);
}
}

}


};

gdjs.cinematicaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cinematicaCode.GDNewSpriteObjects1.length = 0;
gdjs.cinematicaCode.GDNewSpriteObjects2.length = 0;
gdjs.cinematicaCode.GDcambio_9595de_9595escenaObjects1.length = 0;
gdjs.cinematicaCode.GDcambio_9595de_9595escenaObjects2.length = 0;
gdjs.cinematicaCode.GDheroeObjects1.length = 0;
gdjs.cinematicaCode.GDheroeObjects2.length = 0;
gdjs.cinematicaCode.GDBloqueObjects1.length = 0;
gdjs.cinematicaCode.GDBloqueObjects2.length = 0;
gdjs.cinematicaCode.GDBloque2Objects1.length = 0;
gdjs.cinematicaCode.GDBloque2Objects2.length = 0;
gdjs.cinematicaCode.GDBloque3Objects1.length = 0;
gdjs.cinematicaCode.GDBloque3Objects2.length = 0;
gdjs.cinematicaCode.GDMonedaObjects1.length = 0;
gdjs.cinematicaCode.GDMonedaObjects2.length = 0;
gdjs.cinematicaCode.GDCheckpointObjects1.length = 0;
gdjs.cinematicaCode.GDCheckpointObjects2.length = 0;
gdjs.cinematicaCode.GDdinoObjects1.length = 0;
gdjs.cinematicaCode.GDdinoObjects2.length = 0;
gdjs.cinematicaCode.GDdireccionadorObjects1.length = 0;
gdjs.cinematicaCode.GDdireccionadorObjects2.length = 0;
gdjs.cinematicaCode.GDdebilObjects1.length = 0;
gdjs.cinematicaCode.GDdebilObjects2.length = 0;
gdjs.cinematicaCode.GDtrampolinObjects1.length = 0;
gdjs.cinematicaCode.GDtrampolinObjects2.length = 0;
gdjs.cinematicaCode.GDmovimientoObjects1.length = 0;
gdjs.cinematicaCode.GDmovimientoObjects2.length = 0;
gdjs.cinematicaCode.GDfondoObjects1.length = 0;
gdjs.cinematicaCode.GDfondoObjects2.length = 0;
gdjs.cinematicaCode.GDBloque4Objects1.length = 0;
gdjs.cinematicaCode.GDBloque4Objects2.length = 0;
gdjs.cinematicaCode.GDdino_9595npcObjects1.length = 0;
gdjs.cinematicaCode.GDdino_9595npcObjects2.length = 0;
gdjs.cinematicaCode.GDCartelObjects1.length = 0;
gdjs.cinematicaCode.GDCartelObjects2.length = 0;
gdjs.cinematicaCode.GDboton_9595saltoObjects1.length = 0;
gdjs.cinematicaCode.GDboton_9595saltoObjects2.length = 0;
gdjs.cinematicaCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.cinematicaCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.cinematicaCode.GDinterfazObjects1.length = 0;
gdjs.cinematicaCode.GDinterfazObjects2.length = 0;
gdjs.cinematicaCode.GDmonedasObjects1.length = 0;
gdjs.cinematicaCode.GDmonedasObjects2.length = 0;
gdjs.cinematicaCode.GDmonfalObjects1.length = 0;
gdjs.cinematicaCode.GDmonfalObjects2.length = 0;
gdjs.cinematicaCode.GDdinosMataObjects1.length = 0;
gdjs.cinematicaCode.GDdinosMataObjects2.length = 0;
gdjs.cinematicaCode.GDicon_9595dinoObjects1.length = 0;
gdjs.cinematicaCode.GDicon_9595dinoObjects2.length = 0;
gdjs.cinematicaCode.GDicon_9595monObjects1.length = 0;
gdjs.cinematicaCode.GDicon_9595monObjects2.length = 0;

gdjs.cinematicaCode.eventsList3(runtimeScene);
gdjs.cinematicaCode.GDNewSpriteObjects1.length = 0;
gdjs.cinematicaCode.GDNewSpriteObjects2.length = 0;
gdjs.cinematicaCode.GDcambio_9595de_9595escenaObjects1.length = 0;
gdjs.cinematicaCode.GDcambio_9595de_9595escenaObjects2.length = 0;
gdjs.cinematicaCode.GDheroeObjects1.length = 0;
gdjs.cinematicaCode.GDheroeObjects2.length = 0;
gdjs.cinematicaCode.GDBloqueObjects1.length = 0;
gdjs.cinematicaCode.GDBloqueObjects2.length = 0;
gdjs.cinematicaCode.GDBloque2Objects1.length = 0;
gdjs.cinematicaCode.GDBloque2Objects2.length = 0;
gdjs.cinematicaCode.GDBloque3Objects1.length = 0;
gdjs.cinematicaCode.GDBloque3Objects2.length = 0;
gdjs.cinematicaCode.GDMonedaObjects1.length = 0;
gdjs.cinematicaCode.GDMonedaObjects2.length = 0;
gdjs.cinematicaCode.GDCheckpointObjects1.length = 0;
gdjs.cinematicaCode.GDCheckpointObjects2.length = 0;
gdjs.cinematicaCode.GDdinoObjects1.length = 0;
gdjs.cinematicaCode.GDdinoObjects2.length = 0;
gdjs.cinematicaCode.GDdireccionadorObjects1.length = 0;
gdjs.cinematicaCode.GDdireccionadorObjects2.length = 0;
gdjs.cinematicaCode.GDdebilObjects1.length = 0;
gdjs.cinematicaCode.GDdebilObjects2.length = 0;
gdjs.cinematicaCode.GDtrampolinObjects1.length = 0;
gdjs.cinematicaCode.GDtrampolinObjects2.length = 0;
gdjs.cinematicaCode.GDmovimientoObjects1.length = 0;
gdjs.cinematicaCode.GDmovimientoObjects2.length = 0;
gdjs.cinematicaCode.GDfondoObjects1.length = 0;
gdjs.cinematicaCode.GDfondoObjects2.length = 0;
gdjs.cinematicaCode.GDBloque4Objects1.length = 0;
gdjs.cinematicaCode.GDBloque4Objects2.length = 0;
gdjs.cinematicaCode.GDdino_9595npcObjects1.length = 0;
gdjs.cinematicaCode.GDdino_9595npcObjects2.length = 0;
gdjs.cinematicaCode.GDCartelObjects1.length = 0;
gdjs.cinematicaCode.GDCartelObjects2.length = 0;
gdjs.cinematicaCode.GDboton_9595saltoObjects1.length = 0;
gdjs.cinematicaCode.GDboton_9595saltoObjects2.length = 0;
gdjs.cinematicaCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.cinematicaCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.cinematicaCode.GDinterfazObjects1.length = 0;
gdjs.cinematicaCode.GDinterfazObjects2.length = 0;
gdjs.cinematicaCode.GDmonedasObjects1.length = 0;
gdjs.cinematicaCode.GDmonedasObjects2.length = 0;
gdjs.cinematicaCode.GDmonfalObjects1.length = 0;
gdjs.cinematicaCode.GDmonfalObjects2.length = 0;
gdjs.cinematicaCode.GDdinosMataObjects1.length = 0;
gdjs.cinematicaCode.GDdinosMataObjects2.length = 0;
gdjs.cinematicaCode.GDicon_9595dinoObjects1.length = 0;
gdjs.cinematicaCode.GDicon_9595dinoObjects2.length = 0;
gdjs.cinematicaCode.GDicon_9595monObjects1.length = 0;
gdjs.cinematicaCode.GDicon_9595monObjects2.length = 0;


return;

}

gdjs['cinematicaCode'] = gdjs.cinematicaCode;
