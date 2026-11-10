gdjs.cinematica_32finalCode = {};
gdjs.cinematica_32finalCode.localVariables = [];
gdjs.cinematica_32finalCode.idToCallbackMap = new Map();
gdjs.cinematica_32finalCode.GDNewSpriteObjects1= [];
gdjs.cinematica_32finalCode.GDNewSpriteObjects2= [];
gdjs.cinematica_32finalCode.GDcambio_9595de_9595escenaObjects1= [];
gdjs.cinematica_32finalCode.GDcambio_9595de_9595escenaObjects2= [];
gdjs.cinematica_32finalCode.GDheroeObjects1= [];
gdjs.cinematica_32finalCode.GDheroeObjects2= [];
gdjs.cinematica_32finalCode.GDBloqueObjects1= [];
gdjs.cinematica_32finalCode.GDBloqueObjects2= [];
gdjs.cinematica_32finalCode.GDBloque2Objects1= [];
gdjs.cinematica_32finalCode.GDBloque2Objects2= [];
gdjs.cinematica_32finalCode.GDBloque3Objects1= [];
gdjs.cinematica_32finalCode.GDBloque3Objects2= [];
gdjs.cinematica_32finalCode.GDMonedaObjects1= [];
gdjs.cinematica_32finalCode.GDMonedaObjects2= [];
gdjs.cinematica_32finalCode.GDCheckpointObjects1= [];
gdjs.cinematica_32finalCode.GDCheckpointObjects2= [];
gdjs.cinematica_32finalCode.GDdinoObjects1= [];
gdjs.cinematica_32finalCode.GDdinoObjects2= [];
gdjs.cinematica_32finalCode.GDdireccionadorObjects1= [];
gdjs.cinematica_32finalCode.GDdireccionadorObjects2= [];
gdjs.cinematica_32finalCode.GDdebilObjects1= [];
gdjs.cinematica_32finalCode.GDdebilObjects2= [];
gdjs.cinematica_32finalCode.GDtrampolinObjects1= [];
gdjs.cinematica_32finalCode.GDtrampolinObjects2= [];
gdjs.cinematica_32finalCode.GDmovimientoObjects1= [];
gdjs.cinematica_32finalCode.GDmovimientoObjects2= [];
gdjs.cinematica_32finalCode.GDfondoObjects1= [];
gdjs.cinematica_32finalCode.GDfondoObjects2= [];
gdjs.cinematica_32finalCode.GDBloque4Objects1= [];
gdjs.cinematica_32finalCode.GDBloque4Objects2= [];
gdjs.cinematica_32finalCode.GDdino_9595npcObjects1= [];
gdjs.cinematica_32finalCode.GDdino_9595npcObjects2= [];
gdjs.cinematica_32finalCode.GDCartelObjects1= [];
gdjs.cinematica_32finalCode.GDCartelObjects2= [];
gdjs.cinematica_32finalCode.GDboton_9595saltoObjects1= [];
gdjs.cinematica_32finalCode.GDboton_9595saltoObjects2= [];
gdjs.cinematica_32finalCode.GDFlatDarkJoystickObjects1= [];
gdjs.cinematica_32finalCode.GDFlatDarkJoystickObjects2= [];
gdjs.cinematica_32finalCode.GDinterfazObjects1= [];
gdjs.cinematica_32finalCode.GDinterfazObjects2= [];
gdjs.cinematica_32finalCode.GDmonedasObjects1= [];
gdjs.cinematica_32finalCode.GDmonedasObjects2= [];
gdjs.cinematica_32finalCode.GDmonfalObjects1= [];
gdjs.cinematica_32finalCode.GDmonfalObjects2= [];
gdjs.cinematica_32finalCode.GDdinosMataObjects1= [];
gdjs.cinematica_32finalCode.GDdinosMataObjects2= [];
gdjs.cinematica_32finalCode.GDicon_9595dinoObjects1= [];
gdjs.cinematica_32finalCode.GDicon_9595dinoObjects2= [];
gdjs.cinematica_32finalCode.GDicon_9595monObjects1= [];
gdjs.cinematica_32finalCode.GDicon_9595monObjects2= [];


gdjs.cinematica_32finalCode.asyncCallback14771556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.cinematica_32finalCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs.cinematica_32finalCode.GDNewSpriteObjects2);

{for(var i = 0, len = gdjs.cinematica_32finalCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.cinematica_32finalCode.GDNewSpriteObjects2[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "aparecer", 250, runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), 0.3, false);
}
}
gdjs.cinematica_32finalCode.localVariables.length = 0;
}
gdjs.cinematica_32finalCode.idToCallbackMap.set(14771556, gdjs.cinematica_32finalCode.asyncCallback14771556);
gdjs.cinematica_32finalCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.cinematica_32finalCode.localVariables);
for (const obj of gdjs.cinematica_32finalCode.GDNewSpriteObjects1) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.cinematica_32finalCode.asyncCallback14771556(runtimeScene, asyncObjectsList)), 14771556, asyncObjectsList);
}
}

}


};gdjs.cinematica_32finalCode.mapOfGDgdjs_9546cinematica_959532finalCode_9546GDcambio_95959595de_95959595escenaObjects1Objects = Hashtable.newFrom({"cambio_de_escena": gdjs.cinematica_32finalCode.GDcambio_9595de_9595escenaObjects1});
gdjs.cinematica_32finalCode.asyncCallback14769108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.cinematica_32finalCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.cinematica_32finalCode.GDNewSpriteObjects2);
{for(var i = 0, len = gdjs.cinematica_32finalCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.cinematica_32finalCode.GDNewSpriteObjects2[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "desvanecer", 0, runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), 0.3, false);
}
}
gdjs.cinematica_32finalCode.localVariables.length = 0;
}
gdjs.cinematica_32finalCode.idToCallbackMap.set(14769108, gdjs.cinematica_32finalCode.asyncCallback14769108);
gdjs.cinematica_32finalCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.cinematica_32finalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.cinematica_32finalCode.asyncCallback14769108(runtimeScene, asyncObjectsList)), 14769108, asyncObjectsList);
}
}

}


};gdjs.cinematica_32finalCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.cinematica_32finalCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.cinematica_32finalCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.cinematica_32finalCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.cinematica_32finalCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.cinematica_32finalCode.GDNewSpriteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.cinematica_32finalCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cambio_de_escena"), gdjs.cinematica_32finalCode.GDcambio_9595de_9595escenaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.cinematica_32finalCode.mapOfGDgdjs_9546cinematica_959532finalCode_9546GDcambio_95959595de_95959595escenaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.cinematica_32finalCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.cinematica_32finalCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.cinematica_32finalCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.cinematica_32finalCode.GDNewSpriteObjects1[i].getBehavior("Tween").hasFinished("desvanecer") ) {
        isConditionTrue_0 = true;
        gdjs.cinematica_32finalCode.GDNewSpriteObjects1[k] = gdjs.cinematica_32finalCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.cinematica_32finalCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cambio_de_escena"), gdjs.cinematica_32finalCode.GDcambio_9595de_9595escenaObjects1);
{for(var i = 0, len = gdjs.cinematica_32finalCode.GDcambio_9595de_9595escenaObjects1.length ;i < len;++i) {
    gdjs.cinematica_32finalCode.GDcambio_9595de_9595escenaObjects1[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "desvanecer", 0, runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), 0.3, false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu de inicio", false);
}
}

}


};

gdjs.cinematica_32finalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cinematica_32finalCode.GDNewSpriteObjects1.length = 0;
gdjs.cinematica_32finalCode.GDNewSpriteObjects2.length = 0;
gdjs.cinematica_32finalCode.GDcambio_9595de_9595escenaObjects1.length = 0;
gdjs.cinematica_32finalCode.GDcambio_9595de_9595escenaObjects2.length = 0;
gdjs.cinematica_32finalCode.GDheroeObjects1.length = 0;
gdjs.cinematica_32finalCode.GDheroeObjects2.length = 0;
gdjs.cinematica_32finalCode.GDBloqueObjects1.length = 0;
gdjs.cinematica_32finalCode.GDBloqueObjects2.length = 0;
gdjs.cinematica_32finalCode.GDBloque2Objects1.length = 0;
gdjs.cinematica_32finalCode.GDBloque2Objects2.length = 0;
gdjs.cinematica_32finalCode.GDBloque3Objects1.length = 0;
gdjs.cinematica_32finalCode.GDBloque3Objects2.length = 0;
gdjs.cinematica_32finalCode.GDMonedaObjects1.length = 0;
gdjs.cinematica_32finalCode.GDMonedaObjects2.length = 0;
gdjs.cinematica_32finalCode.GDCheckpointObjects1.length = 0;
gdjs.cinematica_32finalCode.GDCheckpointObjects2.length = 0;
gdjs.cinematica_32finalCode.GDdinoObjects1.length = 0;
gdjs.cinematica_32finalCode.GDdinoObjects2.length = 0;
gdjs.cinematica_32finalCode.GDdireccionadorObjects1.length = 0;
gdjs.cinematica_32finalCode.GDdireccionadorObjects2.length = 0;
gdjs.cinematica_32finalCode.GDdebilObjects1.length = 0;
gdjs.cinematica_32finalCode.GDdebilObjects2.length = 0;
gdjs.cinematica_32finalCode.GDtrampolinObjects1.length = 0;
gdjs.cinematica_32finalCode.GDtrampolinObjects2.length = 0;
gdjs.cinematica_32finalCode.GDmovimientoObjects1.length = 0;
gdjs.cinematica_32finalCode.GDmovimientoObjects2.length = 0;
gdjs.cinematica_32finalCode.GDfondoObjects1.length = 0;
gdjs.cinematica_32finalCode.GDfondoObjects2.length = 0;
gdjs.cinematica_32finalCode.GDBloque4Objects1.length = 0;
gdjs.cinematica_32finalCode.GDBloque4Objects2.length = 0;
gdjs.cinematica_32finalCode.GDdino_9595npcObjects1.length = 0;
gdjs.cinematica_32finalCode.GDdino_9595npcObjects2.length = 0;
gdjs.cinematica_32finalCode.GDCartelObjects1.length = 0;
gdjs.cinematica_32finalCode.GDCartelObjects2.length = 0;
gdjs.cinematica_32finalCode.GDboton_9595saltoObjects1.length = 0;
gdjs.cinematica_32finalCode.GDboton_9595saltoObjects2.length = 0;
gdjs.cinematica_32finalCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.cinematica_32finalCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.cinematica_32finalCode.GDinterfazObjects1.length = 0;
gdjs.cinematica_32finalCode.GDinterfazObjects2.length = 0;
gdjs.cinematica_32finalCode.GDmonedasObjects1.length = 0;
gdjs.cinematica_32finalCode.GDmonedasObjects2.length = 0;
gdjs.cinematica_32finalCode.GDmonfalObjects1.length = 0;
gdjs.cinematica_32finalCode.GDmonfalObjects2.length = 0;
gdjs.cinematica_32finalCode.GDdinosMataObjects1.length = 0;
gdjs.cinematica_32finalCode.GDdinosMataObjects2.length = 0;
gdjs.cinematica_32finalCode.GDicon_9595dinoObjects1.length = 0;
gdjs.cinematica_32finalCode.GDicon_9595dinoObjects2.length = 0;
gdjs.cinematica_32finalCode.GDicon_9595monObjects1.length = 0;
gdjs.cinematica_32finalCode.GDicon_9595monObjects2.length = 0;

gdjs.cinematica_32finalCode.eventsList3(runtimeScene);
gdjs.cinematica_32finalCode.GDNewSpriteObjects1.length = 0;
gdjs.cinematica_32finalCode.GDNewSpriteObjects2.length = 0;
gdjs.cinematica_32finalCode.GDcambio_9595de_9595escenaObjects1.length = 0;
gdjs.cinematica_32finalCode.GDcambio_9595de_9595escenaObjects2.length = 0;
gdjs.cinematica_32finalCode.GDheroeObjects1.length = 0;
gdjs.cinematica_32finalCode.GDheroeObjects2.length = 0;
gdjs.cinematica_32finalCode.GDBloqueObjects1.length = 0;
gdjs.cinematica_32finalCode.GDBloqueObjects2.length = 0;
gdjs.cinematica_32finalCode.GDBloque2Objects1.length = 0;
gdjs.cinematica_32finalCode.GDBloque2Objects2.length = 0;
gdjs.cinematica_32finalCode.GDBloque3Objects1.length = 0;
gdjs.cinematica_32finalCode.GDBloque3Objects2.length = 0;
gdjs.cinematica_32finalCode.GDMonedaObjects1.length = 0;
gdjs.cinematica_32finalCode.GDMonedaObjects2.length = 0;
gdjs.cinematica_32finalCode.GDCheckpointObjects1.length = 0;
gdjs.cinematica_32finalCode.GDCheckpointObjects2.length = 0;
gdjs.cinematica_32finalCode.GDdinoObjects1.length = 0;
gdjs.cinematica_32finalCode.GDdinoObjects2.length = 0;
gdjs.cinematica_32finalCode.GDdireccionadorObjects1.length = 0;
gdjs.cinematica_32finalCode.GDdireccionadorObjects2.length = 0;
gdjs.cinematica_32finalCode.GDdebilObjects1.length = 0;
gdjs.cinematica_32finalCode.GDdebilObjects2.length = 0;
gdjs.cinematica_32finalCode.GDtrampolinObjects1.length = 0;
gdjs.cinematica_32finalCode.GDtrampolinObjects2.length = 0;
gdjs.cinematica_32finalCode.GDmovimientoObjects1.length = 0;
gdjs.cinematica_32finalCode.GDmovimientoObjects2.length = 0;
gdjs.cinematica_32finalCode.GDfondoObjects1.length = 0;
gdjs.cinematica_32finalCode.GDfondoObjects2.length = 0;
gdjs.cinematica_32finalCode.GDBloque4Objects1.length = 0;
gdjs.cinematica_32finalCode.GDBloque4Objects2.length = 0;
gdjs.cinematica_32finalCode.GDdino_9595npcObjects1.length = 0;
gdjs.cinematica_32finalCode.GDdino_9595npcObjects2.length = 0;
gdjs.cinematica_32finalCode.GDCartelObjects1.length = 0;
gdjs.cinematica_32finalCode.GDCartelObjects2.length = 0;
gdjs.cinematica_32finalCode.GDboton_9595saltoObjects1.length = 0;
gdjs.cinematica_32finalCode.GDboton_9595saltoObjects2.length = 0;
gdjs.cinematica_32finalCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.cinematica_32finalCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.cinematica_32finalCode.GDinterfazObjects1.length = 0;
gdjs.cinematica_32finalCode.GDinterfazObjects2.length = 0;
gdjs.cinematica_32finalCode.GDmonedasObjects1.length = 0;
gdjs.cinematica_32finalCode.GDmonedasObjects2.length = 0;
gdjs.cinematica_32finalCode.GDmonfalObjects1.length = 0;
gdjs.cinematica_32finalCode.GDmonfalObjects2.length = 0;
gdjs.cinematica_32finalCode.GDdinosMataObjects1.length = 0;
gdjs.cinematica_32finalCode.GDdinosMataObjects2.length = 0;
gdjs.cinematica_32finalCode.GDicon_9595dinoObjects1.length = 0;
gdjs.cinematica_32finalCode.GDicon_9595dinoObjects2.length = 0;
gdjs.cinematica_32finalCode.GDicon_9595monObjects1.length = 0;
gdjs.cinematica_32finalCode.GDicon_9595monObjects2.length = 0;


return;

}

gdjs['cinematica_32finalCode'] = gdjs.cinematica_32finalCode;
